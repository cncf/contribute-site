import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Link from '@docusaurus/Link';
import { useHistory, useLocation } from '@docusaurus/router';
import data from '@site/src/data/pavilion-kiosks.json';
import { GRID, LANDMARKS, STANDS } from './layout.mjs';
import {
  STEP_MINUTES,
  buildDirectory,
  clampToDay,
  dayRange,
  findDayParam,
  formatTime,
  hhmmToMinutes,
  isOnShift,
  liveSelection,
  minutesToHhmm,
  nextAtKiosk,
  occupancyAt,
  resolveInitial,
  rowsFromCsv,
} from './schedule.mjs';
import styles from './styles.module.css';

const { event } = data;
const SNAPSHOT = buildDirectory(data.rows, event);
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${event.sheetId}/gviz/tq?tqx=out:csv`;
const REFRESH_MS = 15 * 60 * 1000;
const TICK_MS = 60 * 1000;

// The floor plan is laid out at this width and then scaled to fit the window.
const DESIGN_WIDTH = 1200;
// Below this scale the text is unreadable, so the map scrolls sideways instead.
const MIN_SCALE = 0.55;
const MAX_SCALE = 1.5;
// Space left free under the controls at the bottom of the window.
const BOTTOM_GAP = 12;

// useLayoutEffect warns during the server render, where it can't run anyway.
const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

const dayById = Object.fromEntries(event.days.map((d) => [d.id, d]));

// "Tue, Nov 10". The date is formatted as UTC noon so it can't shift a day.
function shortDay(day) {
  return new Date(`${day.date}T12:00:00Z`).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

function formatSynced(iso) {
  if (!iso) return 'bundled snapshot';
  return new Date(iso).toLocaleString('en-US', {
    timeZone: event.timeZone,
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function shiftLabel(shift) {
  const day = dayById[shift.day];
  return `${day.weekday.slice(0, 3)} ${formatTime(shift.start)} – ${formatTime(shift.end)}`;
}

// Reads ?day=wed&time=14:00 from the URL, if present.
function selectionFromSearch(search) {
  const params = new URLSearchParams(search);
  const day = params.get('day');
  const time = params.get('time');
  if (!findDayParam(event.days, day) && hhmmToMinutes(time ?? '') == null) {
    return null;
  }
  return resolveInitial({ day, time, now: null, event });
}

function useDirectory() {
  const [state, setState] = useState({
    directory: SNAPSHOT,
    source: 'snapshot',
    fetchedAt: null,
  });
  useEffect(() => {
    let cancelled = false;
    async function refresh() {
      try {
        const response = await fetch(SHEET_CSV_URL, { cache: 'no-store' });
        if (!response.ok) return;
        const rows = rowsFromCsv(await response.text());
        if (!rows || rows.length === 0) return;
        const directory = buildDirectory(rows, event);
        if (directory.entries.length === 0 || cancelled) return;
        setState({ directory, source: 'live', fetchedAt: new Date() });
      } catch {
        // Keep the current data; the snapshot is always a usable fallback.
      }
    }
    refresh();
    const id = setInterval(refresh, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);
  return state;
}

// Scales the floor plan so the map and the controls under it fit in the
// window without scrolling. Recomputes when the window, the content width,
// the controls, or the plan itself change size.
function useFitScale(enabled, wrapRef, planRef, controlsRef) {
  const [fit, setFit] = useState({ scale: 1, height: 0 });
  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    const plan = planRef.current;
    if (!wrap || !plan) return;
    const naturalHeight = plan.offsetHeight;
    const top = wrap.getBoundingClientRect().top + window.scrollY;
    const controls = controlsRef.current?.offsetHeight ?? 0;
    const availableHeight = window.innerHeight - top - controls - BOTTOM_GAP;
    const byWidth = wrap.clientWidth / DESIGN_WIDTH;
    const byHeight = availableHeight / naturalHeight;
    const scale = Math.min(
      MAX_SCALE,
      Math.max(MIN_SCALE, Math.min(byWidth, byHeight)),
    );
    setFit((prev) =>
      Math.abs(prev.scale - scale) < 0.001 && prev.height === naturalHeight
        ? prev
        : { scale, height: naturalHeight },
    );
  }, [wrapRef, planRef, controlsRef]);

  useIsomorphicLayoutEffect(() => {
    if (!enabled) return undefined;
    measure();
    const observer = new ResizeObserver(measure);
    for (const ref of [wrapRef, planRef, controlsRef]) {
      if (ref.current) observer.observe(ref.current);
    }
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [enabled, measure, wrapRef, planRef, controlsRef]);

  return fit;
}

function Kiosk({ stand, side, slot, next, highlighted }) {
  const status = slot?.status ?? 'idle';
  const projects = slot?.projects ?? [];
  let text = '—';
  let description = 'no project scheduled';
  if (status === 'staffed' || status === 'conflict') {
    text = projects.join(' / ');
    description = text;
  } else if (status === 'between') {
    text = next ? `Next: ${next.project}` : 'Between shifts';
    description = next
      ? `between shifts, ${next.project} from ${formatTime(next.start)}`
      : 'between shifts';
  }
  return (
    <div
      className={[
        styles.kiosk,
        styles[status],
        highlighted ? styles.highlighted : '',
      ].join(' ')}
      title={`Kiosk ${stand}${side}: ${description}`}
      aria-label={`Kiosk ${stand}${side}: ${description}`}
    >
      <span className={styles.side} aria-hidden="true">
        {side}
      </span>
      <span className={styles.project} aria-hidden="true">
        {text}
        {status === 'between' && next && (
          <span className={styles.nextTime}> {formatTime(next.start)}</span>
        )}
      </span>
    </div>
  );
}

const FloorPlan = React.forwardRef(function FloorPlan(
  { occupancy, entries, dayId, minutes, highlight, style },
  ref,
) {
  return (
    <div ref={ref} className={styles.frame} style={style}>
      <div
        className={styles.floor}
        style={{
          gridTemplateColumns: `repeat(${GRID.columns - 2}, minmax(0, 1fr)) minmax(0, 0.7fr) 44px`,
        }}
      >
        {STANDS.map(({ stand, row, col }) => (
          <div
            key={stand}
            className={styles.stand}
            style={{ gridRow: row, gridColumn: col }}
          >
            <div className={styles.pair}>
              {['A', 'B'].map((side) => {
                const key = `${stand}${side}`;
                const slot = occupancy[key];
                const next =
                  slot?.status === 'between'
                    ? nextAtKiosk(entries, key, dayId, minutes)
                    : null;
                return (
                  <Kiosk
                    key={side}
                    stand={stand}
                    side={side}
                    slot={slot}
                    next={next}
                    highlighted={highlight.has(key)}
                  />
                );
              })}
            </div>
            <div className={styles.number}>{stand}</div>
          </div>
        ))}
        {LANDMARKS.map((l) => (
          <div
            key={l.id}
            className={`${styles.landmark} ${styles[l.kind]}`}
            style={{ gridRow: l.row, gridColumn: l.col }}
          >
            <span>{l.label}</span>
          </div>
        ))}
      </div>
      <p className={styles.tablesNote}>
        Project meeting tables and Project Pavilion activities ↓
      </p>
    </div>
  );
});

function ProjectFinder({ entries, query, setQuery, onJump, dayId, minutes }) {
  const names = useMemo(
    () =>
      // Array.from, not [...set]: the site's Babel config compiles spreads in
      // loose mode, which turns [...set] into [set].
      Array.from(new Set(entries.map((e) => e.project))).sort((a, b) =>
        a.localeCompare(b, 'en', { sensitivity: 'base' }),
      ),
    [entries],
  );
  const q = query.trim().toLowerCase();
  const matches =
    q.length < 2
      ? []
      : entries.filter((e) => e.project.toLowerCase().includes(q));
  return (
    <div className={styles.finder}>
      <label className={styles.srOnly} htmlFor="pavilion-project">
        Find a project
      </label>
      <input
        id="pavilion-project"
        className={styles.input}
        type="search"
        list="pavilion-project-names"
        placeholder="Find a project"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Escape' && setQuery('')}
      />
      <datalist id="pavilion-project-names">
        {names.map((n) => (
          <option key={n} value={n} />
        ))}
      </datalist>
      {q.length >= 2 && (
        // Opens upward over the map, so typing doesn't resize the layout.
        <div className={styles.finderResults} role="status">
          {matches.length === 0 ? (
            <p>No matching project.</p>
          ) : (
            <ul>
              {matches.slice(0, 6).map((e) => (
                <li key={`${e.project}-${e.kiosk}`}>
                  <strong>{e.project}</strong>: kiosk {e.kiosk},{' '}
                  {isOnShift(e, dayId, minutes) ? (
                    <span className={styles.onNow}>here now</span>
                  ) : (
                    'not here now'
                  )}
                  {e.shifts.length > 0 && ' · '}
                  {e.shifts.map((s, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && ', '}
                      <button
                        type="button"
                        className={styles.linkButton}
                        onClick={() => onJump(s.day, s.start)}
                      >
                        {shiftLabel(s)}
                      </button>
                    </React.Fragment>
                  ))}
                </li>
              ))}
              {matches.length > 6 && <li>…and {matches.length - 6} more</li>}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function SourceNote({ source, fetchedAt }) {
  return (
    <>
      Source:{' '}
      <Link to={event.directoryUrl}>Project Pavilion Kiosk Directory</Link>
      {source === 'live'
        ? ` (live, ${fetchedAt.toLocaleTimeString('en-US', {
            timeZone: event.timeZone,
            hour: 'numeric',
            minute: '2-digit',
          })})`
        : ` (as of ${formatSynced(data.syncedAt)})`}
    </>
  );
}

export default function PavilionMap({ day: dayProp, time: timeProp }) {
  const location = useLocation();
  const history = useHistory();
  const { directory, source, fetchedAt } = useDirectory();
  const { entries, warnings } = directory;

  // The server render and first client render use only the props so that
  // hydration matches. The URL query and the live clock apply after mount.
  const [selection, setSelection] = useState(() =>
    resolveInitial({ day: dayProp, time: timeProp, now: null, event }),
  );
  const [hydrated, setHydrated] = useState(false);
  const [touched, setTouched] = useState(false);
  const [liveNow, setLiveNow] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fromUrl = selectionFromSearch(location.search);
    if (fromUrl) {
      setSelection(fromUrl);
    } else if (dayProp == null && timeProp == null) {
      setSelection(resolveInitial({ now: new Date(), event }));
    }
    setLiveNow(liveSelection(event, new Date()));
    setHydrated(true);
    // Only read the query string and props on first load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Track the real time so the Now button knows whether the showcase is open,
  // and keep the map moving while it follows the clock.
  useEffect(() => {
    const id = setInterval(() => {
      const live = liveSelection(event, new Date());
      setLiveNow(live);
      setSelection((prev) =>
        prev.live
          ? live
            ? { ...live, live: true }
            : { ...prev, live: false }
          : prev,
      );
    }, TICK_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!hydrated || !touched) return;
    const params = new URLSearchParams(location.search);
    if (selection.live) {
      params.delete('day');
      params.delete('time');
    } else {
      params.set('day', selection.day);
      params.set('time', minutesToHhmm(selection.minutes));
    }
    const search = params.toString() ? `?${params}` : '';
    if (search !== location.search) {
      history.replace({ search, hash: location.hash });
    }
  }, [hydrated, touched, selection, history, location.hash, location.search]);

  const day = dayById[selection.day];
  const range = dayRange(day);
  const occupancy = useMemo(
    () => occupancyAt(entries, selection.day, selection.minutes),
    [entries, selection.day, selection.minutes],
  );

  const q = query.trim().toLowerCase();
  const highlight = useMemo(
    () =>
      new Set(
        q.length < 2
          ? []
          : entries
              .filter((e) => e.project.toLowerCase().includes(q))
              .map((e) => e.kiosk),
      ),
    [entries, q],
  );

  const choose = (patch) => {
    setTouched(true);
    setSelection((prev) => ({ ...prev, ...patch, live: false }));
  };
  const chooseAt = (id, minutes) =>
    choose({ day: id, minutes: clampToDay(dayById[id], minutes) });
  const goLive = () => {
    if (!liveNow) return;
    setTouched(true);
    setSelection({ ...liveNow, live: true });
  };

  const wrapRef = useRef(null);
  const planRef = useRef(null);
  const controlsRef = useRef(null);
  const fit = useFitScale(hydrated, wrapRef, planRef, controlsRef);

  const staffed = Object.values(occupancy)
    .filter((s) => s.projects.length > 0)
    .sort((a, b) => a.stand - b.stand || a.side.localeCompare(b.side));

  // The map and controls need JavaScript, so they render after hydration.
  // The server render (and the page's Markdown twin) is a plain kiosk table.
  if (!hydrated) {
    return (
      <div className={styles.root}>
        <p className={styles.source}>
          <SourceNote source="snapshot" />
        </p>
        <table className={styles.table}>
          <caption>
            Projects at the Project Pavilion on {day.label} at{' '}
            {formatTime(selection.minutes)}
          </caption>
          <thead>
            <tr>
              <th>Kiosk</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            {staffed.map((s) => (
              <tr key={s.kiosk}>
                <td>{s.kiosk}</td>
                <td>{s.projects.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div ref={wrapRef} className={styles.fitWrap}>
        <div
          className={styles.sizer}
          style={{
            width: DESIGN_WIDTH * fit.scale,
            height: fit.height * fit.scale,
          }}
        >
          <FloorPlan
            ref={planRef}
            occupancy={occupancy}
            entries={entries}
            dayId={selection.day}
            minutes={selection.minutes}
            highlight={highlight}
            style={{
              width: DESIGN_WIDTH,
              transform: `scale(${fit.scale})`,
            }}
          />
        </div>
      </div>

      <div ref={controlsRef} className={styles.controls}>
        <div className={styles.controlRow}>
          <div className={styles.days} role="group" aria-label="Showcase day">
            {event.days.map((d) => (
              <button
                key={d.id}
                type="button"
                className={styles.dayButton}
                aria-pressed={d.id === selection.day}
                title={d.label}
                onClick={() => chooseAt(d.id, selection.minutes)}
              >
                {shortDay(d)}
              </button>
            ))}
          </div>
          <label className={styles.srOnly} htmlFor="pavilion-time">
            Time
          </label>
          <input
            id="pavilion-time"
            className={styles.slider}
            type="range"
            min={range.min}
            max={range.max}
            step={STEP_MINUTES}
            value={selection.minutes}
            aria-valuetext={formatTime(selection.minutes)}
            title={`Showcase hours ${formatTime(range.min)} – ${formatTime(
              hhmmToMinutes(day.close),
            )}`}
            onChange={(e) => choose({ minutes: Number(e.target.value) })}
          />
          <output
            className={styles.timeValue}
            htmlFor="pavilion-time"
            aria-live="polite"
          >
            {formatTime(selection.minutes)}
          </output>
          <button
            type="button"
            className={styles.nowButton}
            aria-pressed={!!selection.live}
            disabled={!liveNow}
            title={
              liveNow
                ? 'Follow the current time'
                : 'The Project Pavilion is closed right now'
            }
            onClick={goLive}
          >
            {selection.live ? '● Live' : 'Now'}
          </button>
          <ProjectFinder
            entries={entries}
            query={query}
            setQuery={setQuery}
            dayId={selection.day}
            minutes={selection.minutes}
            onJump={chooseAt}
          />
        </div>
        <p className={styles.source}>
          <SourceNote source={source} fetchedAt={fetchedAt} />
          {' · '}
          {event.timeZoneLabel}
          {warnings.length > 0 && (
            <span
              title={warnings.map((w) => `${w.project}: ${w.text}`).join('\n')}
            >
              {' · '}
              {warnings.length} directory{' '}
              {warnings.length === 1 ? 'entry' : 'entries'} not shown
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

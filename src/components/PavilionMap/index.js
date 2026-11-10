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
  dayPeriods,
  dayRange,
  findDayParam,
  findProject,
  formatTime,
  hhmmToMinutes,
  isOnShift,
  kioskStates,
  liveSelection,
  minutesToHhmm,
  nextAtKiosk,
  occupancyAt,
  periodAt,
  resolveInitial,
  rowsFromCsv,
  shiftToShow,
} from './schedule.mjs';
import styles from './styles.module.css';

const { event } = data;
// Each project's main repository, maturity and description, from the CNCF
// landscape (npm run sync:pavilion). Projects without one aren't linked.
const PROJECTS = data.projects ?? {};
const repoOf = (name) => PROJECTS[name]?.repo ?? null;
const SNAPSHOT = buildDirectory(data.rows, event);
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${event.sheetId}/gviz/tq?tqx=out:csv`;
const REFRESH_MS = 15 * 60 * 1000;
const TICK_MS = 60 * 1000;

// The floor plan is laid out at least this wide and then scaled to fit the
// window. When the window's height limits the scale, the layout widens to use
// the spare width, up to MAX_WIDTH; the extra goes to the stand columns.
const DESIGN_WIDTH = 1200;
const MAX_WIDTH = 1800;
// Columns 1-5 hold stands and share any extra width; the staff-area and
// stage columns have fixed widths.
const STAND_COLUMNS = GRID.columns - 2;
const GRID_COLUMNS = `repeat(${STAND_COLUMNS}, minmax(0, 1fr)) 96px 34px`;
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
  const [fit, setFit] = useState({
    scale: 1,
    height: 0,
    width: DESIGN_WIDTH,
  });
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
    // The plan's height doesn't depend on its width (kiosks are sized for the
    // narrowest layout), so widening it can't change the scale.
    const width = Math.round(
      Math.min(MAX_WIDTH, Math.max(DESIGN_WIDTH, wrap.clientWidth / scale)),
    );
    setFit((prev) =>
      Math.abs(prev.scale - scale) < 0.001 &&
      prev.height === naturalHeight &&
      prev.width === width
        ? prev
        : { scale, height: naturalHeight, width },
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

// On the map, "(SIG Subproject)" is left off kiosk names: SIG Subproject
// kiosks have their own colour, and the summary line under the plan says
// what each project is. Labels and the kiosk table keep the full name.
const SIG_SUBPROJECT = /\s*\(SIG Subproject\)/gi;
const isSigSubproject = (name) => /\(SIG Subproject\)/i.test(name);
const displayName = (name) => name.replace(SIG_SUBPROJECT, '');

// "SIG Subproject" or "CNCF Graduated project", or null when unknown.
function projectKind(name) {
  if (isSigSubproject(name)) return 'SIG Subproject';
  const maturity = PROJECTS[name]?.maturity;
  return maturity
    ? `CNCF ${maturity[0].toUpperCase()}${maturity.slice(1)} project`
    : null;
}

// One line under the plan about the kiosk the pointer or focus is on: the
// project's name, what kind of project it is, and its landscape description.
function ProjectSummary({ name, hasSigSubprojects }) {
  if (!name) {
    return (
      <p className={`${styles.summary} ${styles.summaryHint}`}>
        Point at a kiosk for a summary of the project; click it to open the
        project's repository.
        {hasSigSubprojects && (
          <>
            {' '}
            <span className={styles.swatch} aria-hidden="true" /> Blue kiosks
            are SIG Subprojects.
          </>
        )}
      </p>
    );
  }
  const kind = projectKind(name);
  const description = PROJECTS[name]?.description;
  return (
    <p
      className={styles.summary}
      title={[displayName(name), kind, description].filter(Boolean).join(' · ')}
    >
      <strong>{displayName(name)}</strong>
      {kind && (
        <span
          className={`${styles.kind} ${
            isSigSubproject(name) ? styles.kindSig : ''
          }`}
        >
          {kind}
        </span>
      )}
      {description && <span>{description}</span>}
    </p>
  );
}

// What a kiosk shows: its text and the description used for its label.
function kioskText(status, projects, next) {
  if (status === 'staffed' || status === 'conflict') {
    const names = projects.join(' / ');
    return { text: names, description: names };
  }
  if (status === 'between') {
    return next
      ? {
          text: `Next: ${next.project}`,
          description: `between shifts, ${next.project} from ${formatTime(
            next.start,
          )}`,
        }
      : { text: 'Between shifts', description: 'between shifts' };
  }
  return { text: '—', description: 'no project scheduled' };
}

function KioskBody({ status, text, next }) {
  return (
    <span className={styles.project} aria-hidden="true">
      {displayName(text)}
      {status === 'between' && next && (
        <span className={styles.nextTime}> {formatTime(next.start)}</span>
      )}
    </span>
  );
}

// "https://github.com/cilium/cilium" -> "github.com/cilium/cilium"
const shortUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

// A kiosk links to the repository of the project it shows: the project on
// shift, or the next one between shifts. Double bookings aren't linked.
function Kiosk({ stand, side, slot, next, highlighted, onActivate }) {
  const status = slot?.status ?? 'idle';
  const projects = slot?.projects ?? [];
  const { text, description } = kioskText(status, projects, next);
  const shown =
    status === 'staffed' ? projects[0] : status === 'between' && next?.project;
  const repo = shown ? repoOf(shown) : null;
  const label = `Kiosk ${stand}${side}: ${description}`;
  const props = {
    className: [
      styles.kiosk,
      side === 'A' ? styles.kioskA : styles.kioskB,
      styles[status],
      status === 'staffed' && isSigSubproject(projects[0])
        ? styles.sigSubproject
        : '',
      highlighted ? styles.highlighted : '',
      repo ? styles.link : '',
    ].join(' '),
    title: repo ? `${label}\n${shortUrl(repo)}` : label,
    'aria-label': repo ? `${label} (opens repository)` : label,
    onMouseEnter: () => onActivate(shown || null),
    onFocus: () => onActivate(shown || null),
  };
  const body = <KioskBody status={status} text={text} next={next} />;
  return repo ? (
    <a {...props} href={repo} target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  ) : (
    <div {...props}>{body}</div>
  );
}

// Every kiosk is as tall as the tallest text any kiosk can show during the
// showcase, so kiosks don't change size as the time changes. The texts are
// laid out, hidden, at the width a kiosk has in the narrowest layout
// (DESIGN_WIDTH), and the tallest is used.
function useKioskHeight(floorRef, probeRef, states) {
  const [height, setHeight] = useState(null);
  useIsomorphicLayoutEffect(() => {
    const floor = floorRef.current;
    const probe = probeRef.current;
    if (!floor || !probe) return undefined;
    let cancelled = false;
    const measure = () => {
      const kiosk = floor.querySelector(`.${styles.kiosk}`);
      if (cancelled || !kiosk) return;
      // Extra layout width is shared by the stand columns, two kiosks each.
      const extra = floor.parentElement.offsetWidth - DESIGN_WIDTH;
      const width = kiosk.offsetWidth - extra / (2 * STAND_COLUMNS);
      probe.style.width = `${Math.floor(width)}px`;
      let tallest = 0;
      for (const el of probe.children) {
        tallest = Math.max(tallest, el.offsetHeight);
      }
      setHeight(tallest || null);
    };
    measure();
    document.fonts?.ready.then(measure);
    return () => {
      cancelled = true;
    };
  }, [floorRef, probeRef, states]);
  return height;
}

const FloorPlan = React.forwardRef(function FloorPlan(
  { occupancy, entries, days, dayId, minutes, highlight, style },
  ref,
) {
  const states = useMemo(() => kioskStates(entries, days), [entries, days]);
  const floorRef = useRef(null);
  const probeRef = useRef(null);
  const kioskHeight = useKioskHeight(floorRef, probeRef, states);
  const hasSigSubprojects = entries.some((e) => isSigSubproject(e.project));
  // The project whose summary is shown under the plan.
  const [active, setActive] = useState(null);
  return (
    <div ref={ref} className={styles.frame} style={style}>
      <div ref={probeRef} className={styles.probe} aria-hidden="true">
        {states.map((st, i) => (
          <div
            key={i}
            className={`${styles.kiosk} ${styles.kioskA} ${styles[st.status]}`}
          >
            <KioskBody
              status={st.status}
              text={kioskText(st.status, st.projects, st.next).text}
              next={st.next}
            />
          </div>
        ))}
      </div>
      <div
        ref={floorRef}
        className={styles.floor}
        onMouseLeave={() => setActive(null)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setActive(null);
        }}
        style={{
          gridTemplateColumns: GRID_COLUMNS,
          '--pm-kiosk-height': kioskHeight ? `${kioskHeight}px` : undefined,
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
                    onActivate={setActive}
                  />
                );
              })}
            </div>
            <div className={styles.label} aria-hidden="true">
              <span className={styles.side}>A</span>
              <span className={styles.number}>{stand}</span>
              <span className={styles.side}>B</span>
            </div>
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
      <div className={styles.frameNotes} aria-live="polite">
        <ProjectSummary name={active} hasSigSubprojects={hasSigSubprojects} />
      </div>
    </div>
  );
});

const PERIOD_NAMES = {
  morning: 'Morning shift',
  changeover: 'Changeover',
  afternoon: 'Afternoon shift',
  all: 'Showcase hours',
};

// "2:30–3:00 PM", or "11:55 AM–12:25 PM" across noon.
function formatSpan(start, end) {
  const a = formatTime(start);
  const b = formatTime(end);
  return a.slice(-2) === b.slice(-2) ? `${a.slice(0, -3)}–${b}` : `${a}–${b}`;
}

// The time slider. Its track is drawn in the day's periods (morning shift,
// changeover, afternoon shift) with notches and times at the boundaries.
function TimeSlider({ day, periods, minutes, onChange }) {
  const range = dayRange(day);
  const close = hhmmToMinutes(day.close);
  // Position along the track, as a fraction of the thumb's travel.
  const at = (m) =>
    Math.min(Math.max((m - range.min) / (range.max - range.min), 0), 1);
  const stop = (m) =>
    `calc(var(--pm-thumb) / 2 + (100% - var(--pm-thumb)) * ${at(m).toFixed(4)})`;
  const colour = (kind) => `var(--pm-period-${kind})`;
  // Each period is a band, with a 2px gap cut at every boundary.
  const track = periods
    .map((p, i) => {
      const from = i === 0 ? '0%' : `calc(${stop(p.start)} + 1px)`;
      const to =
        i === periods.length - 1 ? '100%' : `calc(${stop(p.end)} - 1px)`;
      const gap =
        i === periods.length - 1
          ? ''
          : `, transparent ${to} calc(${stop(p.end)} + 1px)`;
      return `${colour(p.kind)} ${from} ${to}${gap}`;
    })
    .join(', ');
  const current = periodAt(periods, minutes);
  const changeover = periods.find((p) => p.kind === 'changeover');
  const notches = periods.slice(1).map((p) => p.start);

  return (
    <div className={styles.timeline}>
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
        value={minutes}
        style={{ '--pm-track': `linear-gradient(to right, ${track})` }}
        aria-valuetext={`${formatTime(minutes)}${
          current ? `, ${PERIOD_NAMES[current.kind].toLowerCase()}` : ''
        }`}
        title={periods
          .map((p) => `${PERIOD_NAMES[p.kind]}: ${formatSpan(p.start, p.end)}`)
          .join('\n')}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className={styles.ticks} aria-hidden="true">
        {notches.map((m) => (
          <span key={m} className={styles.notch} style={{ left: stop(m) }} />
        ))}
        <span className={styles.tickStart}>{formatTime(range.min)}</span>
        {changeover && (
          <span
            className={styles.tickMiddle}
            style={{ left: stop((changeover.start + changeover.end) / 2) }}
          >
            {formatSpan(changeover.start, changeover.end)}
          </span>
        )}
        <span className={styles.tickEnd}>{formatTime(close)}</span>
      </div>
    </div>
  );
}

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
  const open = q.length >= 2;

  // Keep the results on screen: shift them sideways if either edge would be
  // outside the window, leaving a 16px margin (the page's gutter on phones).
  const resultsRef = useRef(null);
  useIsomorphicLayoutEffect(() => {
    const el = resultsRef.current;
    if (!open || !el) return undefined;
    const place = () => {
      el.style.transform = '';
      const { left, right } = el.getBoundingClientRect();
      const margin = 16;
      const viewport = document.documentElement.clientWidth;
      let shift = 0;
      if (left < margin) shift = margin - left;
      else if (right > viewport - margin) shift = viewport - margin - right;
      if (shift) el.style.transform = `translateX(${Math.round(shift)}px)`;
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [open]);

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
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);
          // When the search names a new project that isn't on shift at the
          // selected time, jump to its next shift. Only on a change of
          // project, so the slider can still be moved while searching.
          const project = findProject(entries, value);
          if (!project || project === findProject(entries, query)) return;
          const target = shiftToShow(
            entries,
            project,
            event.days,
            dayId,
            minutes,
          );
          if (target) onJump(target.day, target.minutes);
        }}
        onKeyDown={(e) => e.key === 'Escape' && setQuery('')}
      />
      <datalist id="pavilion-project-names">
        {names.map((n) => (
          <option key={n} value={n} />
        ))}
      </datalist>
      {open && (
        <div ref={resultsRef} className={styles.finderResults} role="status">
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
  const periods = useMemo(() => dayPeriods(entries, day), [entries, day]);
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
                <td>
                  {s.projects.map((name, i) => (
                    <React.Fragment key={name}>
                      {i > 0 && ', '}
                      {repoOf(name) ? <a href={repoOf(name)}>{name}</a> : name}
                    </React.Fragment>
                  ))}
                </td>
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
            width: fit.width * fit.scale,
            height: fit.height * fit.scale,
          }}
        >
          <FloorPlan
            ref={planRef}
            occupancy={occupancy}
            entries={entries}
            days={event.days}
            dayId={selection.day}
            minutes={selection.minutes}
            highlight={highlight}
            style={{
              width: fit.width,
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
          <TimeSlider
            day={day}
            periods={periods}
            minutes={selection.minutes}
            onChange={(minutes) => choose({ minutes })}
          />
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

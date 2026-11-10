// Pure logic for the Project Pavilion kiosk map. No React, so it can be unit
// tested with node:test and reused by scripts/sync-pavilion-kiosks.mjs.

export const COLUMNS = {
  project: 'Project Name',
  schedule: 'Kiosk Schedule',
  kiosk: 'Kiosk Number',
};

const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// RFC 4180 CSV: quoted fields may contain commas, newlines, and "" escapes.
export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          quoted = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      quoted = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += c;
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

// Map sheet rows to { project, schedule, kiosk } by header name. Returns null
// when a required column is missing.
export function rowsFromCsv(text) {
  const [header, ...body] = parseCsv(text.replace(/^﻿/, ''));
  if (!header) return null;
  const names = header.map((h) => h.trim());
  const index = {};
  for (const [key, name] of Object.entries(COLUMNS)) {
    index[key] = names.indexOf(name);
    if (index[key] === -1) return null;
  }
  return body
    .map((cells) => ({
      project: (cells[index.project] ?? '').trim(),
      schedule: (cells[index.schedule] ?? '').trim(),
      kiosk: (cells[index.kiosk] ?? '').trim(),
    }))
    .filter((r) => r.project || r.schedule || r.kiosk);
}

export function parseKiosk(value) {
  const m = /^P-?\s*(\d+)\s*([AB])$/i.exec(String(value).trim());
  if (!m) return null;
  return { stand: Number(m[1]), side: m[2].toUpperCase() };
}

// "HH:MM" (24-hour) to minutes since midnight.
export function hhmmToMinutes(value) {
  const m = /^(\d{1,2}):(\d{2})$/.exec(String(value).trim());
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
}

export function minutesToHhmm(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

// "3:00 PM" to minutes since midnight.
function clockToMinutes(h, m, meridiem) {
  let hours = Number(h) % 12;
  if (meridiem.toUpperCase() === 'PM') hours += 12;
  return hours * 60 + Number(m);
}

export function formatTime(minutes) {
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${h24 < 12 ? 'AM' : 'PM'}`;
}

function dayBounds(day) {
  return { open: hhmmToMinutes(day.open), close: hhmmToMinutes(day.close) };
}

const SHIFT_RE =
  /^([A-Za-z]+)\s+(\d{1,2}):(\d{2})\s*([AP]M)\s*-\s*(\d{1,2}):(\d{2})\s*([AP]M)$/i;
const FULL_RE = /^([A-Za-z]+)\s*-\s*([A-Za-z]+)\s+Full Showcase Hours$/i;

function findDay(days, weekday) {
  const name = weekday.toLowerCase();
  return days.find(
    (d) =>
      d.weekday.toLowerCase() === name ||
      d.weekday.toLowerCase().startsWith(name),
  );
}

// Parse a "Kiosk Schedule" cell into shifts, in minutes since midnight.
export function parseSchedule(text, days) {
  const shifts = [];
  const unparsed = [];
  const normalized = String(text)
    .replace(/[‒-―−]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
  if (!normalized) return { shifts, unparsed };

  const full = FULL_RE.exec(normalized);
  if (full) {
    const from = days.findIndex((d) => d === findDay(days, full[1]));
    const to = days.findIndex((d) => d === findDay(days, full[2]));
    if (from === -1 || to === -1 || to < from) {
      unparsed.push(normalized);
    } else {
      for (const day of days.slice(from, to + 1)) {
        const { open, close } = dayBounds(day);
        shifts.push({ day: day.id, start: open, end: close });
      }
    }
    return { shifts, unparsed };
  }

  // Shifts are separated by commas or by a newline (collapsed to a space
  // above), so split before each weekday name.
  const segments = normalized
    .split(/,|\s(?=(?:Sun|Mon|Tues?|Wed|Thu|Fri|Sat)[a-z]*\s+\d)/i)
    .map((s) => s.trim())
    .filter(Boolean);
  for (const segment of segments) {
    const m = SHIFT_RE.exec(segment);
    const day = m && findDay(days, m[1]);
    if (!day) {
      unparsed.push(segment);
      continue;
    }
    const start = clockToMinutes(m[2], m[3], m[4]);
    const end = clockToMinutes(m[5], m[6], m[7]);
    if (end <= start) {
      unparsed.push(segment);
      continue;
    }
    shifts.push({ day: day.id, start, end });
  }
  return { shifts, unparsed };
}

export function buildDirectory(rows, event) {
  const entries = [];
  const warnings = [];
  for (const row of rows) {
    const kiosk = parseKiosk(row.kiosk);
    const { shifts, unparsed } = parseSchedule(row.schedule, event.days);
    if (!kiosk) {
      warnings.push({
        project: row.project,
        text: row.kiosk,
        reason: 'Unrecognized kiosk number',
      });
      continue;
    }
    for (const text of unparsed) {
      warnings.push({
        project: row.project,
        text,
        reason: 'Unrecognized schedule',
      });
    }
    entries.push({
      project: row.project,
      kiosk: `${kiosk.stand}${kiosk.side}`,
      stand: kiosk.stand,
      side: kiosk.side,
      shifts,
      scheduleText: row.schedule,
    });
  }
  return { entries, warnings };
}

export function isOnShift(entry, dayId, minutes) {
  return entry.shifts.some(
    (s) => s.day === dayId && s.start <= minutes && minutes < s.end,
  );
}

// Who is at each kiosk at the given day and time, keyed by kiosk ("9A").
export function occupancyAt(entries, dayId, minutes) {
  const result = {};
  for (const entry of entries) {
    const slot = (result[entry.kiosk] ??= {
      kiosk: entry.kiosk,
      stand: entry.stand,
      side: entry.side,
      projects: [],
      scheduledToday: false,
    });
    if (entry.shifts.some((s) => s.day === dayId)) slot.scheduledToday = true;
    if (isOnShift(entry, dayId, minutes)) slot.projects.push(entry.project);
  }
  for (const slot of Object.values(result)) {
    if (slot.projects.length > 1) slot.status = 'conflict';
    else if (slot.projects.length === 1) slot.status = 'staffed';
    else if (slot.scheduledToday) slot.status = 'between';
    else slot.status = 'idle';
  }
  return result;
}

// The current wall-clock date ("2026-11-10") and minutes in a time zone.
export function nowInZone(timeZone, date = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    minutes: (Number(parts.hour) % 24) * 60 + Number(parts.minute),
  };
}

// Times are chosen in 5-minute steps. The showcase is closed at its closing
// time, so the last selectable time is one step before it.
export const STEP_MINUTES = 5;

export function dayRange(day) {
  const { open, close } = dayBounds(day);
  return { min: open, max: close - STEP_MINUTES };
}

// The most common value; ties go to the smallest.
function mode(values) {
  const counts = new Map();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  let best = null;
  for (const [v, n] of counts) {
    if (
      best === null ||
      n > counts.get(best) ||
      (n === counts.get(best) && v < best)
    ) {
      best = v;
    }
  }
  return best;
}

// Splits a showcase day into the periods its shifts create: a morning shift,
// a changeover, and an afternoon shift. The changeover runs from the usual
// end of the morning shifts to the usual start of the afternoon shifts;
// shifts that span the whole day are ignored. A day with no changeover is
// one period, 'all'.
export function dayPeriods(entries, day) {
  const { open, close } = dayBounds(day);
  const ends = [];
  const starts = [];
  for (const entry of entries) {
    for (const s of entry.shifts) {
      if (s.day !== day.id) continue;
      const start = Math.max(s.start, open);
      const end = Math.min(s.end, close);
      if (start >= end || (start === open && end === close)) continue;
      if (end < close) ends.push(end);
      if (start > open) starts.push(start);
    }
  }
  const from = mode(ends);
  const to = mode(starts);
  if (from === null || to === null || to < from) {
    return [{ kind: 'all', start: open, end: close }];
  }
  return [
    { kind: 'morning', start: open, end: from },
    { kind: 'changeover', start: from, end: to },
    { kind: 'afternoon', start: to, end: close },
  ].filter((p) => p.end > p.start);
}

export function periodAt(periods, minutes) {
  return periods.find((p) => p.start <= minutes && minutes < p.end) ?? null;
}

export function clampToDay(day, minutes) {
  const { min, max } = dayRange(day);
  return Math.min(Math.max(minutes, min), max);
}

export function findDayParam(days, value) {
  if (!value) return null;
  const v = String(value).toLowerCase();
  return (
    days.find(
      (d) =>
        d.id === v ||
        d.date === v ||
        d.weekday.toLowerCase() === v ||
        d.weekday.toLowerCase().startsWith(v),
    ) ?? null
  );
}

// The showcase day and time that "now" falls in, or null outside the hours.
export function liveSelection(event, now) {
  const { date, minutes } = nowInZone(event.timeZone, now);
  const day = event.days.find((d) => d.date === date);
  if (!day) return null;
  const { open, close } = dayBounds(day);
  if (minutes < open || minutes >= close) return null;
  return { day: day.id, minutes };
}

// Choose the initial selection. Explicit day/time (URL query or component
// props) wins, then the live time during showcase hours, then the first day at
// opening. An explicit time without a day applies to the first day.
export function resolveInitial({ day, time, now, event }) {
  const days = event.days;
  const explicitDay = findDayParam(days, day);
  const explicitTime = time != null ? hhmmToMinutes(time) : null;
  if (explicitDay || explicitTime != null) {
    const d = explicitDay ?? days[0];
    const minutes =
      explicitTime != null
        ? clampToDay(d, explicitTime)
        : hhmmToMinutes(d.open);
    return { day: d.id, minutes, live: false };
  }
  const live = now != null ? liveSelection(event, now) : null;
  if (live) return { ...live, live: true };
  return { day: days[0].id, minutes: hhmmToMinutes(days[0].open), live: false };
}

// The next shift to start at a kiosk later the same day, or null.
export function nextAtKiosk(entries, kiosk, dayId, minutes) {
  let next = null;
  for (const entry of entries) {
    if (entry.kiosk !== kiosk) continue;
    for (const s of entry.shifts) {
      if (s.day !== dayId || s.start <= minutes) continue;
      if (!next || s.start < next.start) {
        next = { project: entry.project, start: s.start };
      }
    }
  }
  return next;
}

// Every distinct thing a kiosk can show across the whole showcase, checked
// in time-slider steps: { status, projects, next }. Used to size the kiosks
// for their longest text.
export function kioskStates(entries, days) {
  const seen = new Map();
  for (const day of days) {
    const { min, max } = dayRange(day);
    for (let m = min; m <= max; m += STEP_MINUTES) {
      for (const slot of Object.values(occupancyAt(entries, day.id, m))) {
        const next =
          slot.status === 'between'
            ? nextAtKiosk(entries, slot.kiosk, day.id, m)
            : null;
        const key = [slot.status, next?.project, next?.start]
          .concat(slot.projects)
          .join('|');
        if (!seen.has(key)) {
          seen.set(key, { status: slot.status, projects: slot.projects, next });
        }
      }
    }
  }
  return Array.from(seen.values());
}

// Pairs of shifts that put two projects at the same kiosk at the same time.
export function findConflicts(entries) {
  const conflicts = [];
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      const a = entries[i];
      const b = entries[j];
      if (a.kiosk !== b.kiosk) continue;
      for (const sa of a.shifts) {
        for (const sb of b.shifts) {
          if (sa.day !== sb.day) continue;
          const start = Math.max(sa.start, sb.start);
          const end = Math.min(sa.end, sb.end);
          if (start < end) {
            conflicts.push({
              kiosk: a.kiosk,
              day: sa.day,
              start,
              end,
              projects: [a.project, b.project],
            });
          }
        }
      }
    }
  }
  return conflicts;
}

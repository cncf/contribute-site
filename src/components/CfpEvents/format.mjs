const MONTH_DAY_YEAR = { month: 'long', day: 'numeric', year: 'numeric' };

// Plain YYYY-MM-DD dates are formatted in UTC so they never shift a day.
function plainDate(date, options) {
  return new Intl.DateTimeFormat('en-US', {
    ...options,
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

export function formatDate(date, { weekday = false } = {}) {
  return plainDate(date, {
    ...MONTH_DAY_YEAR,
    ...(weekday && { weekday: 'long' }),
  });
}

export function formatDateRange(start, end) {
  if (start === end) return formatDate(start, { weekday: true });
  const [sy, sm] = start.split('-');
  const [ey, em] = end.split('-');
  const endDay = Number(end.slice(8));
  if (sy === ey && sm === em) {
    return `${plainDate(start, { month: 'long', day: 'numeric' })}-${endDay}, ${ey}`;
  }
  if (sy === ey) {
    return `${plainDate(start, { month: 'long', day: 'numeric' })}-${plainDate(end, { month: 'long', day: 'numeric' })}, ${ey}`;
  }
  return `${formatDate(start)}-${formatDate(end)}`;
}

// Prefer abbreviations such as PDT or CEST over GMT offsets.
function timeZoneName(instant, timeZone) {
  let fallback;
  for (const locale of ['en-US', 'en-GB']) {
    const name = new Intl.DateTimeFormat(locale, {
      timeZone,
      timeZoneName: 'short',
    })
      .formatToParts(instant)
      .find((p) => p.type === 'timeZoneName')?.value;
    if (name && !name.startsWith('GMT') && !name.startsWith('UTC')) return name;
    fallback ??= name;
  }
  return fallback;
}

function utcOffset(iso) {
  const match = iso.match(/([+-])(\d{2}):(\d{2})$/);
  if (!match) return 'UTC';
  const [, sign, hh, mm] = match;
  return `UTC${sign}${Number(hh)}${mm === '00' ? '' : `:${mm}`}`;
}

export function formatDeadline(iso, timeZone, { long = false } = {}) {
  const instant = new Date(iso);
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'long',
      ...MONTH_DAY_YEAR,
      hour: 'numeric',
      minute: '2-digit',
    })
      .formatToParts(instant)
      .map((p) => [p.type, p.value]),
  );
  const date = `${parts.month} ${parts.day}, ${parts.year}`;
  const time = `${parts.hour}:${parts.minute} ${parts.dayPeriod}`;
  const zone = timeZoneName(instant, timeZone);
  return long
    ? `${parts.weekday}, ${date}, at ${time} ${zone} (${utcOffset(iso)})`
    : `${date}, ${time} ${zone}`;
}

// Keeps acronyms such as "CFP" but lowercases labels used mid-sentence.
export function inlineLabel(label) {
  return /^[A-Z]{2,}\b/.test(label) ? label : label.toLowerCase();
}

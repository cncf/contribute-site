// An event stays listed until its end date has passed in every time zone.
export function eventEndsAt(event) {
  return Date.parse(`${event.end}T23:59:59-12:00`);
}

export function deadlineStatus(deadline, now) {
  if (now > Date.parse(deadline.closes)) return 'closed';
  if (deadline.opens && now < Date.parse(deadline.opens)) return 'not-yet-open';
  return 'open';
}

export function upcomingEvents(events, now) {
  return events
    .filter((e) => now <= eventEndsAt(e))
    .sort((a, b) => a.start.localeCompare(b.start) || a.id.localeCompare(b.id));
}

// The soonest open deadline for each upcoming event, soonest first.
export function nextDeadlines(events, now) {
  return upcomingEvents(events, now)
    .map((event) => {
      const deadline = event.deadlines
        .filter((d) => deadlineStatus(d, now) === 'open')
        .sort((a, b) => Date.parse(a.closes) - Date.parse(b.closes))[0];
      return deadline && { event, deadline };
    })
    .filter(Boolean)
    .sort(
      (a, b) => Date.parse(a.deadline.closes) - Date.parse(b.deadline.closes),
    );
}

export function nextEvent(events, now) {
  const [next, ...rest] = upcomingEvents(events, now);
  if (!next) return null;
  const followedBy = rest.filter(
    (e) => e.colocatedWith === next.id || next.colocatedWith === e.id,
  );
  return { event: next, followedBy };
}

import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Admonition from '@theme/Admonition';
import Heading from '@theme/Heading';
import events from '@site/src/data/cfp-events.json';
import {
  formatDate,
  formatDateRange,
  formatDeadline,
  inlineLabel,
} from './format.mjs';
import {
  deadlineStatus,
  nextDeadlines,
  nextEvent,
  upcomingEvents,
} from './schedule.mjs';

const STATUS_LABELS = {
  open: 'Open',
  closed: 'Closed',
  'not-yet-open': 'Not yet open',
};

function withArticle(event, capitalize = false) {
  if (!event.article) return event.name;
  const article = capitalize
    ? event.article[0].toUpperCase() + event.article.slice(1)
    : event.article;
  return `${article} ${event.name}`;
}

function EventLink({ event }) {
  return <Link to={`#${event.id}`}>{event.name}</Link>;
}

function NextDeadlines({ now }) {
  const items = nextDeadlines(events, now);
  if (items.length === 0) {
    return <p>There are no open deadlines for upcoming events.</p>;
  }
  return items.map(({ event, deadline }) => (
    <Admonition
      key={event.id}
      type="warning"
      title={`${event.name} ${inlineLabel(deadline.label)}`}
    >
      <p>
        The <EventLink event={event} /> {inlineLabel(deadline.label)} closes{' '}
        <strong>
          {formatDeadline(deadline.closes, event.timeZone, { long: true })}
        </strong>
        . <Link to={deadline.url}>{deadline.linkText}</Link>.
      </p>
    </Admonition>
  ));
}

function NextEvent({ now }) {
  const next = nextEvent(events, now);
  if (!next) return <p>There are no upcoming events listed.</p>;
  const { event, followedBy } = next;
  return (
    <p>
      The next upcoming event is {event.article ? `${event.article} ` : ''}
      <EventLink event={event} /> on {formatDateRange(event.start, event.end)},
      in {event.location}
      {followedBy.map((e, i) => (
        <React.Fragment key={e.id}>
          {i === 0 ? ', followed by ' : ' and '}
          {e.article ? `${e.article} ` : ''}
          <EventLink event={e} /> on {formatDateRange(e.start, e.end)}
        </React.Fragment>
      ))}
      .
    </p>
  );
}

function EventSection({ event, now }) {
  const cfp = event.deadlines.find((d) => d.label === 'CFP');
  const cfpOpen = cfp && deadlineStatus(cfp, now) === 'open';
  const place = event.venue
    ? `at ${event.venue} in ${event.location}`
    : `in ${event.location}`;
  return (
    <>
      <Heading as="h2" id={event.id}>
        {event.shortName ?? event.name}
      </Heading>
      <p>
        {withArticle(event, true)} takes place{' '}
        {formatDateRange(event.start, event.end)}, {place}.
        {event.note && ` ${event.note}`}
      </p>
      {cfpOpen && event.cfpEligibility && (
        <Admonition type="tip" title="CFP open">
          <p>
            {withArticle(event, true)} CFP closes{' '}
            <strong>
              {formatDeadline(cfp.closes, event.timeZone, { long: true })}
            </strong>
            . {event.cfpEligibility}
          </p>
        </Admonition>
      )}
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Event site</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>
              <Link to={event.site.url}>{event.site.label}</Link>
            </td>
          </tr>
          <tr>
            <td>Registration</td>
            <td>N/A</td>
            <td>Open</td>
            <td>
              <Link to={event.registrationUrl}>Register</Link>
            </td>
          </tr>
          {event.deadlines.map((d) => {
            const status = deadlineStatus(d, now);
            return (
              <tr key={d.label}>
                <td>{d.label}</td>
                <td>{formatDeadline(d.closes, event.timeZone)}</td>
                <td>
                  {status === 'not-yet-open'
                    ? `Opens ${formatDeadline(d.opens, event.timeZone)}`
                    : STATUS_LABELS[status]}
                </td>
                <td>
                  <Link to={d.url}>{d.linkText}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {event.keyDates?.length > 0 && (
        <>
          <p>Key dates for CFP submitters:</p>
          <ul>
            {event.keyDates.map((k) => (
              <li key={k.label}>
                <strong>{k.label}:</strong> {formatDate(k.date)}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default function CfpEvents() {
  const { siteConfig } = useDocusaurusContext();
  // Render the build-time snapshot first so hydration matches, then use the
  // visitor's clock so deadlines roll over without a rebuild.
  const [now, setNow] = useState(siteConfig.customFields.buildTime);
  useEffect(() => setNow(Date.now()), []);

  const listed = upcomingEvents(events, now).reverse();

  return (
    <>
      <Heading as="h2" id="next-deadline">
        Next deadline
      </Heading>
      <NextDeadlines now={now} />

      <Heading as="h2" id="next-event">
        Next event
      </Heading>
      <NextEvent now={now} />

      <Heading as="h2" id="all-upcoming-events">
        All upcoming events
      </Heading>
      <Admonition type="info">
        <p>
          Dates and deadlines are copied from the official event pages. Always
          confirm details on the linked event site before you submit or
          register. Statuses are calculated as of{' '}
          {formatDate(new Date(now).toISOString().slice(0, 10))}.
        </p>
      </Admonition>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Dates</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {listed.map((e) => (
            <tr key={e.id}>
              <td>
                <EventLink event={e} />
              </td>
              <td>
                {formatDateRange(e.start, e.end).replace(/^\w+day, /, '')}
              </td>
              <td>{e.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {listed.map((e) => (
        <EventSection key={e.id} event={e} now={now} />
      ))}
    </>
  );
}

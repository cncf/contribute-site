import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  formatDateRange,
  formatDeadline,
  inlineLabel,
} from '../src/components/CfpEvents/format.mjs';
import {
  deadlineStatus,
  nextDeadlines,
  nextEvent,
  upcomingEvents,
} from '../src/components/CfpEvents/schedule.mjs';

const at = (iso) => Date.parse(iso);

const EVENTS = [
  {
    id: 'kubecon',
    start: '2027-03-15',
    end: '2027-03-18',
    deadlines: [
      { label: 'CFP', closes: '2026-10-11T23:59:00+02:00' },
      { label: 'Scholarship', closes: '2027-02-05T23:59:00+01:00' },
      { label: 'Travel funding', closes: '2027-01-18T23:59:00+01:00' },
    ],
  },
  {
    id: 'summit',
    start: '2027-03-14',
    end: '2027-03-14',
    colocatedWith: 'kubecon',
    deadlines: [{ label: 'CFP', closes: '2026-12-01T23:59:00+01:00' }],
  },
  {
    id: 'later',
    start: '2027-11-08',
    end: '2027-11-11',
    deadlines: [
      {
        label: 'CFP',
        opens: '2027-03-01T00:00:00-08:00',
        closes: '2027-05-31T23:59:00-07:00',
      },
    ],
  },
];

const pick = (items) => items.map((i) => `${i.event.id}:${i.deadline.label}`);

describe('deadlineStatus', () => {
  const d = EVENTS[2].deadlines[0];
  it('is not yet open before opens', () => {
    assert.equal(deadlineStatus(d, at('2027-02-28T00:00:00Z')), 'not-yet-open');
  });
  it('is open through the closing minute', () => {
    assert.equal(deadlineStatus(d, at('2027-06-01T06:59:00Z')), 'open');
  });
  it('is closed after closes', () => {
    assert.equal(deadlineStatus(d, at('2027-06-01T07:00:00Z')), 'closed');
  });
});

describe('nextDeadlines', () => {
  it('lists the soonest open deadline for each event, soonest first', () => {
    assert.deepEqual(pick(nextDeadlines(EVENTS, at('2026-11-03T12:00:00Z'))), [
      'summit:CFP',
      'kubecon:Travel funding',
    ]);
  });

  it('rolls over when a deadline passes', () => {
    assert.deepEqual(pick(nextDeadlines(EVENTS, at('2026-12-02T00:00:00Z'))), [
      'kubecon:Travel funding',
    ]);
    assert.deepEqual(pick(nextDeadlines(EVENTS, at('2027-01-19T00:00:00Z'))), [
      'kubecon:Scholarship',
    ]);
  });

  it('skips deadlines that are not open yet', () => {
    assert.deepEqual(
      pick(nextDeadlines(EVENTS, at('2027-02-10T00:00:00Z'))),
      [],
    );
    assert.deepEqual(pick(nextDeadlines(EVENTS, at('2027-03-02T00:00:00Z'))), [
      'later:CFP',
    ]);
  });
});

describe('upcomingEvents and nextEvent', () => {
  it('keeps an event through its last day and drops it afterward', () => {
    const ids = (now) => upcomingEvents(EVENTS, at(now)).map((e) => e.id);
    assert.deepEqual(ids('2027-03-18T23:00:00-07:00'), ['kubecon', 'later']);
    assert.deepEqual(ids('2027-03-20T12:00:00Z'), ['later']);
  });

  it('returns the earliest event and its co-located events', () => {
    const next = nextEvent(EVENTS, at('2026-11-03T12:00:00Z'));
    assert.equal(next.event.id, 'summit');
    assert.deepEqual(
      next.followedBy.map((e) => e.id),
      ['kubecon'],
    );
  });
});

describe('format', () => {
  it('formats deadlines in the event time zone', () => {
    assert.equal(
      formatDeadline('2026-12-01T23:59:00+01:00', 'Europe/Madrid', {
        long: true,
      }),
      'Tuesday, December 1, 2026, at 11:59 PM CET (UTC+1)',
    );
    assert.equal(
      formatDeadline('2026-10-11T23:59:00+02:00', 'Europe/Madrid'),
      'October 11, 2026, 11:59 PM CEST',
    );
    assert.equal(
      formatDeadline('2027-05-31T23:59:00-07:00', 'America/Los_Angeles'),
      'May 31, 2027, 11:59 PM PDT',
    );
  });

  it('formats date ranges', () => {
    assert.equal(
      formatDateRange('2027-03-15', '2027-03-18'),
      'March 15-18, 2027',
    );
    assert.equal(
      formatDateRange('2027-03-14', '2027-03-14'),
      'Sunday, March 14, 2027',
    );
    assert.equal(
      formatDateRange('2027-03-30', '2027-04-02'),
      'March 30-April 2, 2027',
    );
  });

  it('lowercases labels mid-sentence except acronyms', () => {
    assert.equal(inlineLabel('Travel funding'), 'travel funding');
    assert.equal(inlineLabel('CFP'), 'CFP');
  });
});

describe('cfp-events.json', () => {
  const data = JSON.parse(
    readFileSync(
      new URL('../src/data/cfp-events.json', import.meta.url),
      'utf8',
    ),
  );
  const ids = new Set(data.map((e) => e.id));
  const offset = /T\d{2}:\d{2}(:\d{2})?[+-]\d{2}:\d{2}$/;

  it('has valid, unique events', () => {
    assert.equal(ids.size, data.length);
    for (const e of data) {
      for (const field of ['name', 'location', 'registrationUrl']) {
        assert.ok(e[field], `${e.id}: ${field}`);
      }
      assert.ok(e.site?.url && e.site?.label, `${e.id}: site`);
      assert.match(e.start, /^\d{4}-\d{2}-\d{2}$/, `${e.id}: start`);
      assert.ok(e.end >= e.start, `${e.id}: end before start`);
      assert.doesNotThrow(
        () => new Intl.DateTimeFormat('en-US', { timeZone: e.timeZone }),
        `${e.id}: timeZone`,
      );
      if (e.colocatedWith) {
        assert.ok(ids.has(e.colocatedWith), `${e.id}: colocatedWith`);
      }
      for (const d of e.deadlines) {
        assert.ok(d.label && d.url && d.linkText, `${e.id}: deadline fields`);
        assert.match(d.closes, offset, `${e.id} ${d.label}: closes offset`);
        if (d.opens) {
          assert.match(d.opens, offset, `${e.id} ${d.label}: opens offset`);
          assert.ok(Date.parse(d.opens) < Date.parse(d.closes));
        }
      }
    }
  });
});

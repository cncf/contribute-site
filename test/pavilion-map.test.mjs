import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  buildDirectory,
  clampToDay,
  dayPeriods,
  findConflicts,
  kioskStates,
  liveSelection,
  nextAtKiosk,
  nowInZone,
  occupancyAt,
  parseCsv,
  parseKiosk,
  parseSchedule,
  periodAt,
  resolveInitial,
  rowsFromCsv,
} from '../src/components/PavilionMap/schedule.mjs';
import { STANDS } from '../src/components/PavilionMap/layout.mjs';
import {
  githubRepo,
  landscapeItems,
  matchProjects,
} from '../src/components/PavilionMap/repos.mjs';

const data = JSON.parse(
  readFileSync(
    new URL('../src/data/pavilion-kiosks.json', import.meta.url),
    'utf8',
  ),
);
const { event } = data;
const { days } = event;
const t = (h, m = 0) => h * 60 + m;

describe('parseCsv', () => {
  it('handles quoted newlines, commas, and escaped quotes', () => {
    const rows = parseCsv('a,b\r\n"x\ny","say ""hi"", ok"\n"last",row');
    assert.deepEqual(rows, [
      ['a', 'b'],
      ['x\ny', 'say "hi", ok'],
      ['last', 'row'],
    ]);
  });
});

describe('rowsFromCsv', () => {
  it('maps columns by header name and ignores extra empty columns', () => {
    const csv =
      '"Kiosk Number","Project Name","Kiosk Schedule","",""\n' +
      '"P-9A","Cilium","Tuesday 3:00 PM – 7:30 PM","",""\n' +
      '"","","","",""\n';
    assert.deepEqual(rowsFromCsv(csv), [
      {
        project: 'Cilium',
        schedule: 'Tuesday 3:00 PM – 7:30 PM',
        kiosk: 'P-9A',
      },
    ]);
  });

  it('returns null when a required column is missing', () => {
    assert.equal(rowsFromCsv('Project Name,Kiosk Number\nA,P-1A\n'), null);
  });
});

describe('parseKiosk', () => {
  it('parses stand and side', () => {
    assert.deepEqual(parseKiosk('P-18A'), { stand: 18, side: 'A' });
    assert.deepEqual(parseKiosk(' p-3b '), { stand: 3, side: 'B' });
    assert.equal(parseKiosk('Booth 3'), null);
  });
});

describe('parseSchedule', () => {
  it('expands full showcase hours to every day', () => {
    const { shifts, unparsed } = parseSchedule(
      'Tuesday - Thursday \nFull Showcase Hours',
      days,
    );
    assert.deepEqual(unparsed, []);
    assert.deepEqual(shifts, [
      { day: 'tue', start: t(10, 45), end: t(19) },
      { day: 'wed', start: t(10, 30), end: t(17) },
      { day: 'thu', start: t(10, 30), end: t(14) },
    ]);
  });

  it('parses comma-separated shifts with en dashes', () => {
    const { shifts } = parseSchedule(
      'Tuesday 3:00 PM – 7:30 PM, Wednesday 1:55 PM – 5:00 PM, Thursday 12:25 PM – 2:00 PM',
      days,
    );
    assert.deepEqual(shifts, [
      { day: 'tue', start: t(15), end: t(19, 30) },
      { day: 'wed', start: t(13, 55), end: t(17) },
      { day: 'thu', start: t(12, 25), end: t(14) },
    ]);
  });

  it('parses newline-separated shifts, hyphens, and trailing newlines', () => {
    assert.deepEqual(
      parseSchedule(
        'Tuesday 10:30 AM – 2:30 PM\nThursday 10:15 AM - 11:55 AM\n',
        days,
      ).shifts,
      [
        { day: 'tue', start: t(10, 30), end: t(14, 30) },
        { day: 'thu', start: t(10, 15), end: t(11, 55) },
      ],
    );
  });

  it('reports segments it cannot read', () => {
    const { shifts, unparsed } = parseSchedule(
      'Tuesday 3:00 PM – 7:30 PM, Saturday all day, Friday 1:00 PM - 2:00 PM',
      days,
    );
    assert.equal(shifts.length, 1);
    assert.deepEqual(unparsed, [
      'Saturday all day',
      'Friday 1:00 PM - 2:00 PM',
    ]);
  });
});

describe('snapshot', () => {
  const { entries, warnings } = buildDirectory(data.rows, event);

  it('parses every row without warnings', () => {
    assert.deepEqual(warnings, []);
    assert.equal(entries.length, data.rows.length);
    assert.ok(entries.every((e) => e.shifts.length > 0));
  });

  it('only uses stands that are on the floor plan', () => {
    const stands = new Set(STANDS.map((s) => s.stand));
    assert.ok(entries.every((e) => stands.has(e.stand)));
  });

  it('places projects by day and time', () => {
    const wed2pm = occupancyAt(entries, 'wed', t(14));
    assert.deepEqual(wed2pm['9A'].projects, ['Cilium']);
    assert.deepEqual(wed2pm['3B'].projects, ['Backstage']);
    assert.deepEqual(wed2pm['1B'].projects, ['Tekton Pipelines']);
    assert.deepEqual(occupancyAt(entries, 'thu', t(11))['4B'].projects, [
      'Microcks',
    ]);
  });

  it('shows changeovers as between shifts, with the next project', () => {
    const slot = occupancyAt(entries, 'tue', t(14, 45))['18B'];
    assert.equal(slot.status, 'between');
    assert.deepEqual(nextAtKiosk(entries, '18B', 'tue', t(14, 45)), {
      project: 'Confidential Containers',
      start: t(15),
    });
  });

  it('treats the end of a shift as exclusive', () => {
    assert.deepEqual(occupancyAt(entries, 'tue', t(14, 25))['18B'].projects, [
      'Dapr',
    ]);
    assert.deepEqual(
      occupancyAt(entries, 'tue', t(14, 30))['18B'].projects,
      [],
    );
  });
});

describe('double bookings', () => {
  const entries = [
    {
      project: 'One',
      kiosk: '4B',
      stand: 4,
      side: 'B',
      shifts: [{ day: 'wed', start: t(10, 15), end: t(17) }],
    },
    {
      project: 'Two',
      kiosk: '4B',
      stand: 4,
      side: 'B',
      shifts: [{ day: 'wed', start: t(13, 55), end: t(17) }],
    },
    {
      project: 'Three',
      kiosk: '4B',
      stand: 4,
      side: 'B',
      shifts: [{ day: 'tue', start: t(15), end: t(19) }],
    },
  ];

  it('shows every project at a double-booked kiosk', () => {
    const slot = occupancyAt(entries, 'wed', t(14))['4B'];
    assert.equal(slot.status, 'conflict');
    assert.deepEqual(slot.projects, ['One', 'Two']);
    assert.equal(occupancyAt(entries, 'wed', t(13))['4B'].status, 'staffed');
  });

  it('lists overlapping shifts', () => {
    assert.deepEqual(findConflicts(entries), [
      {
        kiosk: '4B',
        day: 'wed',
        start: t(13, 55),
        end: t(17),
        projects: ['One', 'Two'],
      },
    ]);
  });
});

describe('time zone helpers', () => {
  it('converts an instant to Salt Lake City wall-clock time', () => {
    // 21:00 UTC is 14:00 MST (UTC-7) on November 11.
    assert.deepEqual(
      nowInZone('America/Denver', new Date('2026-11-11T21:00:00Z')),
      { date: '2026-11-11', minutes: t(14) },
    );
  });

  it('finds the live selection only during showcase hours', () => {
    assert.deepEqual(liveSelection(event, new Date('2026-11-11T21:00:00Z')), {
      day: 'wed',
      minutes: t(14),
    });
    // 17:00 MST on Wednesday: closed.
    assert.equal(liveSelection(event, new Date('2026-11-12T00:00:00Z')), null);
    // The day before the showcase.
    assert.equal(liveSelection(event, new Date('2026-11-09T19:00:00Z')), null);
  });

  it('clamps times to showcase hours', () => {
    assert.equal(clampToDay(days[0], t(9)), t(10, 45));
    assert.equal(clampToDay(days[2], t(15)), t(13, 55));
  });
});

describe('resolveInitial', () => {
  const during = new Date('2026-11-10T22:00:00Z'); // Tue 15:00 MST

  it('prefers an explicit day and time', () => {
    assert.deepEqual(
      resolveInitial({ day: 'thu', time: '12:30', now: during, event }),
      { day: 'thu', minutes: t(12, 30), live: false },
    );
  });

  it('accepts weekday names and dates, and clamps the time', () => {
    assert.deepEqual(
      resolveInitial({ day: 'Wednesday', time: '08:00', now: null, event }),
      { day: 'wed', minutes: t(10, 30), live: false },
    );
    assert.deepEqual(resolveInitial({ day: '2026-11-12', now: null, event }), {
      day: 'thu',
      minutes: t(10, 30),
      live: false,
    });
  });

  it('follows the live time during showcase hours', () => {
    assert.deepEqual(resolveInitial({ now: during, event }), {
      day: 'tue',
      minutes: t(15),
      live: true,
    });
  });

  it('falls back to the first day at opening', () => {
    assert.deepEqual(
      resolveInitial({ now: new Date('2026-11-09T19:00:00Z'), event }),
      { day: 'tue', minutes: t(10, 45), live: false },
    );
  });
});

describe('dayPeriods', () => {
  const { entries } = buildDirectory(data.rows, event);
  const day = (id) => days.find((d) => d.id === id);
  const span = (periods) => periods.map((p) => [p.kind, p.start, p.end]);

  it('finds the morning, changeover and afternoon on each day', () => {
    assert.deepEqual(span(dayPeriods(entries, day('tue'))), [
      ['morning', t(10, 45), t(14, 30)],
      ['changeover', t(14, 30), t(15)],
      ['afternoon', t(15), t(19)],
    ]);
    assert.deepEqual(span(dayPeriods(entries, day('wed'))), [
      ['morning', t(10, 30), t(13, 25)],
      ['changeover', t(13, 25), t(13, 55)],
      ['afternoon', t(13, 55), t(17)],
    ]);
    assert.deepEqual(span(dayPeriods(entries, day('thu'))), [
      ['morning', t(10, 30), t(11, 55)],
      ['changeover', t(11, 55), t(12, 25)],
      ['afternoon', t(12, 25), t(14)],
    ]);
  });

  it('ignores an odd shift that ends at a different time', () => {
    const odd = { shifts: [{ day: 'wed', start: t(10, 30), end: t(12) }] };
    assert.equal(dayPeriods([...entries, odd], day('wed'))[0].end, t(13, 25));
  });

  it('is one period when every shift spans the day', () => {
    const full = [{ shifts: [{ day: 'thu', start: t(10, 15), end: t(14) }] }];
    assert.deepEqual(span(dayPeriods(full, day('thu'))), [
      ['all', t(10, 30), t(14)],
    ]);
  });

  it('places a time in its period, with end times exclusive', () => {
    const periods = dayPeriods(entries, day('tue'));
    assert.equal(periodAt(periods, t(14, 25)).kind, 'morning');
    assert.equal(periodAt(periods, t(14, 30)).kind, 'changeover');
    assert.equal(periodAt(periods, t(15)).kind, 'afternoon');
    assert.equal(periodAt(periods, t(19)), null);
  });
});

describe('kioskStates', () => {
  const { entries } = buildDirectory(data.rows, event);
  const states = kioskStates(entries, days);
  const has = (status, project) =>
    states.some((s) =>
      status === 'between'
        ? s.status === status && s.next?.project === project
        : s.status === status && s.projects.includes(project),
    );

  it('includes every project, staffed', () => {
    for (const e of entries) assert.ok(has('staffed', e.project), e.project);
  });

  it('includes changeover and double-booking states', () => {
    assert.ok(has('between', 'Cloud Native Buildpacks'));
    assert.ok(has('conflict', 'KEDA'));
  });

  it('lists each state once', () => {
    const keys = states.map((s) =>
      JSON.stringify([s.status, s.projects, s.next]),
    );
    assert.equal(new Set(keys).size, keys.length);
  });
});

describe('matchProjects', () => {
  const items = landscapeItems({
    landscape: [
      {
        subcategories: [
          {
            items: [
              {
                name: 'Envoy',
                project: 'graduated',
                repo_url: 'u:envoy',
                description: '  Edge and\n service proxy ',
              },
              { name: 'Headlamp', project: 'sandbox', repo_url: 'u:headlamp' },
              { name: 'Kueue', repo_url: 'u:kueue', description: 'Queues' },
              { name: 'Helm Inc', repo_url: 'u:not-a-project' },
            ],
          },
        ],
      },
    ],
  });

  it('matches CNCF projects by normalized name', () => {
    const { projects } = matchProjects(['Headlamp (SIG)', 'Kueue'], items);
    assert.deepEqual(projects, {
      'Headlamp (SIG)': {
        repo: 'u:headlamp',
        maturity: 'sandbox',
        description: undefined,
      },
    });
  });

  it('uses aliases and direct repositories', () => {
    const { projects, missing } = matchProjects(
      ['Envoyproxy', 'Kueue (SIG Subproject)', 'Fluent Bit', 'TAG X'],
      items,
      {
        aliases: { Envoyproxy: 'Envoy', 'Kueue (SIG Subproject)': 'Kueue' },
        repos: { 'Fluent Bit': 'u:fluent-bit' },
      },
    );
    assert.deepEqual(projects, {
      Envoyproxy: {
        repo: 'u:envoy',
        maturity: 'graduated',
        description: 'Edge and service proxy',
      },
      'Kueue (SIG Subproject)': {
        repo: 'u:kueue',
        maturity: undefined,
        description: 'Queues',
      },
      'Fluent Bit': { repo: 'u:fluent-bit' },
    });
    assert.deepEqual(missing, ['TAG X']);
  });

  it('reads GitHub repository names from URLs', () => {
    assert.equal(githubRepo('https://github.com/helm/helm'), 'helm/helm');
    assert.equal(githubRepo('https://github.com/a/b.git'), 'a/b');
    assert.equal(githubRepo('https://gitlab.com/a/b'), null);
  });

  it('has details for every snapshot project in the landscape', () => {
    const { entries } = buildDirectory(data.rows, event);
    const without = Array.from(new Set(entries.map((e) => e.project))).filter(
      (name) => !data.projects[name],
    );
    assert.deepEqual(without.sort(), [
      'Cloud Native Community Groups/KCDs',
      'Dynamic Resource Allocation (SIG Subproject)',
      'TAG Developer Experience',
      'TAG Infrastructure',
      'TAG Operational Resilience',
      'Technical Community Group',
    ]);
    for (const p of Object.values(data.projects)) {
      assert.match(p.repo, /^https:\/\//);
      assert.ok(p.description, p.repo);
    }
  });
});

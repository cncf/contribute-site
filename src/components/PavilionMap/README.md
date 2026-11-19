# PavilionMap

A time-aware map of the KubeCon + CloudNativeCon Project Pavilion: which project
is at each kiosk, for any day and time of the showcase. Attendee help is on the
site at
[`/events/project-pavilion-map/how-to-use`](../../../docs/events/project-pavilion-map/how-to-use.md).

This README is for the people who run the map (CNCF staff and site maintainers)
and for the LF Events team, whose work the map is built from. It isn't rendered
on the site.

- [How it fits together](#how-it-fits-together)
- [Runbook: a new event](#runbook-a-new-event)
- [Runbook: during the event](#runbook-during-the-event)
- [Runbook: after the event](#runbook-after-the-event)
- [For the LF Events team](#for-the-lf-events-team)

## How it fits together

| Where                                     | What                                                                                                                                           |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/data/pavilion/<event>.json`          | One file per event: the event and its days, the floor plan, the saved kiosk directory, and project details. The file name is the event's slug. |
| `src/data/pavilion/index.js`              | The list of events. One line per event.                                                                                                        |
| `docs/events/project-pavilion-map/`       | `index.md` shows the current event, `<event>.md` keeps each past event, `how-to-use.md` is the attendee guide.                                 |
| `scripts/sync-pavilion-kiosks.mjs`        | `npm run sync:pavilion` saves the live directory and project details into the event's file.                                                    |
| `schedule.mjs`, `layout.mjs`, `repos.mjs` | Pure logic (no React), shared by the component, the sync script and `test/pavilion-map.test.mjs`.                                              |
| `index.js`, `styles.module.css`           | The React component.                                                                                                                           |

`<PavilionMap />` shows the **current event**: the one in
`src/data/pavilion/index.js` whose last day is latest. There's no setting to
change when a new event is added. `<PavilionMap event="kubecon-na-2026" />`
shows a given event. A misspelt event name fails the build.

While an event is on, the map reads the directory sheet in the browser every 15
minutes and falls back to the saved copy. Once the event's last day is over (in
the event's time zone), the event is **archived**. Its map shows only the saved
copy and has no Now button, and `npm run sync:pavilion` won't overwrite it
without `--force`. A sheet that is edited or reused after the event can't change
the record.

### The event file

```jsonc
{
  "event": {
    "name": "KubeCon + CloudNativeCon North America 2026",
    "timeZone": "America/Denver", // IANA name; all times are local to it
    "timeZoneLabel": "Salt Lake City time, MST", // shown under the map
    "directoryUrl": "https://events.linuxfoundation.org/…", // "Source" link
    "sheetId": "1lvC…", // the directory Google Sheet; omit if there is none
    "columns": { "kiosk": "Kiosk #" }, // optional: renamed sheet headers
    "days": [
      {
        "id": "tue", // used in ?day=
        "weekday": "Tuesday", // matched against the sheet's schedule text
        "date": "2026-11-10",
        "label": "Tuesday, November 10",
        "open": "10:45", // showcase hours, 24-hour local time
        "close": "19:00",
      },
    ],
  },
  "floor": {
    "rows": [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9],
    ], // stand numbers, row by row
    "extraColumns": ["96px", "34px"], // fixed-width columns after the stands
    "landmarks": [
      // CSS grid-row / grid-column; kind: staff, space or stage
      {
        "id": "stage",
        "label": "Project Pavilion Stage",
        "row": "1 / 3",
        "col": "7",
        "kind": "stage",
      },
    ],
  },
  "repoLookup": { "aliases": {}, "repos": {} }, // see src/data/README.md
  "syncedAt": "…", // written by the sync
  "rows": [], // written by the sync: the sheet, verbatim
  "projects": {}, // written by the sync: repo, maturity, description
}
```

The floor is a grid. Stand columns come first and share the width. In each stand
cell, kiosk A is on the left and B on the right. `extraColumns` add fixed-width
columns to the right for staff areas and the stage. Landmarks are placed with
CSS grid values, so `"row": "2 / 4"` spans rows 2 and 3, and a landmark can sit
in a stand column (the 2026 lounge does). Stand numbers must be unique.

## Runbook: a new event

Start once LF Events have published the kiosk directory sheet and the attendee
floor map.

1. **Create the event file.** Copy the previous event's file to
   `src/data/pavilion/<slug>.json`. Use a slug like `kubecon-eu-2027`. Then:
   - Set `event`: `name`, `timeZone`, `timeZoneLabel`, `directoryUrl`,
     `sheetId`, and one entry per showcase day with its opening hours.
   - Set `rows` to `[]`, `projects` to `{}`, and remove `syncedAt`.
   - Keep `repoLookup`. Most of its aliases carry over between events.
   - The `sheetId` is the long ID in the sheet's URL
     (`docs.google.com/spreadsheets/d/<sheetId>/…`). The sheet must be viewable
     by anyone with the link.
2. **Draw the floor.** Write `floor` from LF Events' attendee map. List the
   stands row by row as they appear, then add the stage, lounge and staff areas
   as landmarks. If the stand numbering or the A/B kiosks don't fit a grid of
   rows, see [Floor plans that aren't a grid](#floor-plans-that-arent-a-grid).
3. **Register it.** Add an `import` line and an entry to
   `src/data/pavilion/index.js`. Because its last day is the latest, it becomes
   the map on `/events/project-pavilion-map`.
4. **Sync.** Run `npm run sync:pavilion -- <slug>` and work through its output:
   - _Unrecognized schedule_ or _Unrecognized kiosk number_: the sheet uses
     wording the parser doesn't know. Ask LF Events to use the
     [accepted formats](#the-kiosk-directory-sheet), or extend `parseSchedule`
     or `parseKiosk` in `schedule.mjs` and add a test.
   - _Not on the floor plan_: a kiosk's stand is missing from `floor.rows`.
   - _Double-booked_: two projects share a kiosk at the same time. Tell LF
     Events. The map shows both names.
   - _No repository for …_: add the name to `repoLookup.aliases` (when the
     landscape names it differently) or `repoLookup.repos` (when it isn't in the
     landscape), and sync again. TAGs and community groups have no repository,
     which is fine.
5. **Update the page.** Change the `description` in
   `docs/events/project-pavilion-map/index.md` to name the new event. Update the
   event named in `docs/events/project-pavilion.md`.
6. **Check and ship.** Run `npm run test:unit` (it checks every event file
   against its floor) and `npm run build`. Then try
   `/events/project-pavilion-map?day=<id>&time=<HH:MM>` with `npm start`.

## Runbook: during the event

There's nothing to do. The page reads the sheet every 15 minutes. You can run
`npm run sync:pavilion` and deploy to refresh the saved copy, which is the
fallback when the sheet can't be reached and what the page's Markdown version
shows.

## Runbook: after the event

1. **Final sync.** After the Pavilion closes on the last day, but before
   midnight in the event's time zone, run `npm run sync:pavilion -- <slug>`.
   Later than that, the event is archived and the script needs `--force`. Check
   the sheet hasn't already been changed before you force it.
2. **Keep the map.** Add `docs/events/project-pavilion-map/<slug>.md`, using
   `kubecon-na-2026.md` as a template: `<PavilionMap event="<slug>" />`, a title
   naming the event, a short `sidebar_label`, and `sidebar_position: 100`.
3. Add the event to the _Past events_ list in
   `docs/events/project-pavilion-map/how-to-use.md`.
4. Run `npm run build` and open the PR.

## For the LF Events team

The map is built from what you already make for each event: the kiosk directory
sheet and the attendee floor map. This section explains what the map reads from
them, so they keep working with it. Nothing here asks for extra work beyond
keeping to these formats. Please tell us before a format changes.

### The kiosk directory sheet

The map reads the sheet's first tab as CSV, so it has to be viewable by anyone
with the link. It needs three columns, found by their header text. The column
order doesn't matter, and extra columns are ignored.

| Header           | Example                                                  |
| ---------------- | -------------------------------------------------------- |
| `Project Name`   | `Cilium`                                                 |
| `Kiosk Number`   | `P-9A`                                                   |
| `Kiosk Schedule` | `Tuesday 3:00 PM – 7:30 PM, Wednesday 1:55 PM – 5:00 PM` |

- **One row per project per kiosk.** A project at two kiosks gets two rows.
- **Kiosk numbers** are `P-`, the stand number, and `A` or `B`, as in `P-9A` or
  `P-18B`. Case and spaces don't matter.
- **Schedules** are a list of shifts, separated by commas or line breaks. Each
  shift is a weekday followed by a start and end time, as in
  `Tuesday 3:00 PM – 7:30 PM`. Any dash works, and so does `Tues` or `Tue`. A
  project there for the whole showcase can use
  `Tuesday - Thursday Full Showcase Hours`.
- **Times** are local to the venue, with AM or PM.
- **Use a new sheet for each event.** We keep each past event's map. A new sheet
  keeps the old link pointing at the old schedule.

When a kiosk number or a shift can't be read, the map leaves it out and says how
many entries weren't shown. The sync tells us which ones, so we can follow up
with you.

If header names have to change, we can map them per event without code changes.
One row per shift (`Project`, `Kiosk`, `Day`, `Start`, `End`) would be even
easier to read reliably. We'd welcome that format if it suits your process.

### The floor plan

We redraw the attendee floor map as a simple grid. For each event we need:

- the stand numbers, row by row, as they stand on the floor,
- which side of each stand is kiosk A and which is B,
- where the stage, lounge, job board, sticker wall and staff areas are.

The final attendee map (PDF or image) is enough for this. If the stand layout
comes straight from the CAD drawing, an export of the kiosk positions would let
us build the floor plan automatically. A DXF file, or a table of kiosk number
and x/y position, would both work.

### Floor plans that aren't a grid

The current floor model is rows of stands with A/B kiosks, which fits the Salt
Lake City Pavilion. A venue whose stands are at angles, in islands of different
sizes, or with more than two kiosks per stand would need a coordinate-based
floor (kiosk positions taken from the CAD). The `floor` block in each event file
is where that would go. No other part of the map depends on the floor's shape.

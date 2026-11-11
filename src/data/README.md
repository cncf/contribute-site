# Data files

## project-services.json

Source for the project services catalog on
[`/resources/services`](../../docs/resources/services/index.md), rendered by
`src/components/ServiceCatalog`. Each entry is one service:

| Field         | Required | Description                                                                             |
| ------------- | -------- | --------------------------------------------------------------------------------------- |
| `id`          | Yes      | Unique kebab-case identifier                                                            |
| `name`        | Yes      | Display name                                                                            |
| `category`    | Yes      | One of the category IDs in `src/components/ServiceCatalog/categories.mjs`               |
| `description` | Yes      | One or two sentences, based on the service's detail page                                |
| `maturity`    | Yes      | Eligible levels: any of `sandbox`, `incubating`, `graduated`                            |
| `request`     | Yes      | `service-desk`, `vendor`, `form-email`, or `none`                                       |
| `url`         | No\*     | Link for the service name (tool, program, or guidelines)                                |
| `requestUrl`  | No       | Where to request it. Defaults to the CNCF Service Desk when `request` is `service-desk` |
| `detailsUrl`  | No\*     | Detail page or announcement with more information                                       |

\* Each entry needs at least one of `url` or `detailsUrl`. The service name
links to `url`, or to `detailsUrl` when `url` is absent.

To add a service, add an entry to the JSON file and run `npm run build`.

## pavilion/

Source for the KubeCon Project Pavilion kiosk maps on
[`/events/project-pavilion-map`](../../docs/events/project-pavilion-map/index.md),
rendered by `src/components/PavilionMap`. There is one file per event,
`pavilion/<event>.json`, listed in `pavilion/index.js`. For adding an event,
keeping a past event, and the sheet format LF Events use, see the
[PavilionMap README](../components/PavilionMap/README.md). Each file has:

- `event`: the event name, IANA `timeZone`, the kiosk directory link, the Google
  Sheet ID behind the directory, optional renamed sheet `columns`, and the
  showcase `days` (`id`, `weekday`, `date`, `label`, and `open`/`close` as
  24-hour `HH:MM` local times).
- `floor`: the floor plan. `rows` lists the stand numbers in each row,
  `extraColumns` gives the widths of the columns after the stands, and
  `landmarks` places the stage, lounge and staff areas.
- `rows`: a raw snapshot of the directory sheet (`project`, `schedule`,
  `kiosk`), copied verbatim so the snapshot and the live sheet use one parser.
- `syncedAt`: when the snapshot was taken.
- `repoLookup`: how directory names map to repositories, for names the
  [CNCF landscape](https://github.com/cncf/landscape) lists differently.
  `aliases` maps a directory name to a landscape item name
  (`"Envoyproxy": "Envoy"`); `repos` gives a repository URL directly for a name
  the landscape doesn't list.
- `projects`: details for each project, keyed by directory name: `repo`, its
  main repository (the landscape item's `repo_url`), opened by clicking the
  kiosk; `maturity` (`graduated`, `incubating` or `sandbox`); and `description`,
  the landscape description, or the GitHub repository's description when the
  landscape has none. Hovering over a kiosk shows the maturity and description
  under the map. Generated; don't edit by hand.

Refresh the snapshot with `npm run sync:pavilion -- [event]` (the current event
by default; an event whose last day is over needs `--force`). The script warns
about rows it can't parse, kiosks that aren't on the floor plan, and kiosks
booked by two projects at once, and lists projects it found no repository for
(set `GITHUB_TOKEN` if GitHub's rate limit blocks the description lookups); add
those to `repoLookup` if they have one. In the browser, the map also loads the
live sheet until the event is over, and falls back to this snapshot if that
fails. A project added to the live sheet after the last sync isn't linked until
the next sync.

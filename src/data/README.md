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

## pavilion-kiosks.json

Source for the KubeCon Project Pavilion kiosk map on
[`/events/project-pavilion-map`](../../docs/events/project-pavilion-map.md),
rendered by `src/components/PavilionMap`. Floor-plan positions are in
`src/components/PavilionMap/layout.mjs`.

- `event`: the event name, IANA `timeZone`, the kiosk directory link, the Google
  Sheet ID behind the directory, and the showcase `days` (`id`, `weekday`,
  `date`, `label`, and `open`/`close` as 24-hour `HH:MM` local times).
- `rows`: a raw snapshot of the directory sheet (`project`, `schedule`,
  `kiosk`), copied verbatim so the snapshot and the live sheet use one parser.
- `syncedAt`: when the snapshot was taken.

Refresh the snapshot with `npm run sync:pavilion`. The script warns about rows
it can't parse and about kiosks booked by two projects at once. In the browser,
the map also loads the live sheet and falls back to this snapshot if that fails.
For a new event, update `event` and run the sync.

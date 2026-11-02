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

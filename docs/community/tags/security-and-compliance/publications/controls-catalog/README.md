# Cloud Native Security Controls Catalog

This guide covers Gemara format, file organization, and CLI usage for the controls catalog.

This catalog is expressed in **Gemara Layer 1** (Guidance Catalog).
See [Gemara Documentation](https://gemara.openssf.org/) for specification and schema details.

## Layout

| Location | Contents |
|:---|:---|
| **`catalog/`** | Source YAML: `metadata.yaml`, `groups.yaml`, per-group guideline files, `cnsc-nist-800-53-mapping.yaml`. |
| **Publication root** (this directory) | Generated Markdown (`index.md`, `cnsc-nist-800-53-mapping.md`), `README.md`, Go module, `cmd/`, `internal/`. |

Run the CLI from **this directory** (the one that contains `cmd/` and `catalog/`) so default `-data catalog` and output paths like `index.md` resolve relative to the current working directory.

## File breakdown by group

Guidelines are organized into 11 groups (`catalog/groups.yaml`). Each group has a dedicated YAML file under `catalog/`:

| File                            | Group ID                   | Group title              |
|---------------------------------|----------------------------|--------------------------|
| `catalog/access.yaml`           | `Access`                   | Access Control           |
| `catalog/compute.yaml`          | `Compute`                  | Compute                  |
| `catalog/deploy.yaml`           | `Deploy`                   | Deploy                   |
| `catalog/develop.yaml`          | `Develop`                  | Develop                  |
| `catalog/distribute.yaml`       | `Distribute`               | Distribute               |
| `catalog/securing-artefacts.yaml` | `Securing Artefacts`    | Securing Artefacts       |
| `catalog/securing-build-pipelines.yaml` | `Securing Build Pipelines` | Securing Build Pipelines |
| `catalog/securing-materials.yaml` | `Securing Materials`     | Securing Materials       |
| `catalog/securing-the-source-code.yaml` | `Securing the Source Code` | Securing the Source Code |
| `catalog/security-assurance.yaml` | `Security Assurance`   | Security Assurance       |
| `catalog/storage.yaml`          | `Storage`                  | Storage                  |

Each guideline must have a `group` field matching the group `id` in `groups.yaml` exactly (case-sensitive).

NIST SP 800-53 mappings live in `catalog/cnsc-nist-800-53-mapping.yaml` (Gemara **MappingDocument**). Generation writes `cnsc-nist-800-53-mapping.md` next to `index.md`.

## CLI Usage

The converter reads YAML from `-data` and writes outputs to the paths you pass on `-yaml`, `-md`, and `-mapping-md` (relative to the process working directory or absolute).

### Prerequisites

- **Go 1.25+** or later

### Validate

Merges `catalog/` into a single Gemara document and writes it to the path you pass:

```bash
go run cmd/catalog/main.go -yaml catalog.yaml
```

**Output**: Creates `catalog.yaml` in the current working directory (or at the path you pass). Exits with error if validation fails.

### Generate Markdown

Generates the catalog page and the NIST mapping Markdown page:

```bash
go run cmd/catalog/main.go -md index.md
```

**Output** (default paths relative to cwd):

- `index.md` — Cloud Native Security Controls Catalog (GuidanceCatalog).
- `cnsc-nist-800-53-mapping.md` — NIST crosswalk (from `catalog/cnsc-nist-800-53-mapping.yaml`).

To skip the mapping page, pass `-mapping-md=""`.

Regenerate only the mapping page (leave `index.md` unchanged):

```bash
go run cmd/catalog/main.go -yaml "" -md "" -mapping-md cnsc-nist-800-53-mapping.md
```

### Generate Both Layer-1 YAML and Markdown

```bash
go run cmd/catalog/main.go -yaml catalog.yaml -md index.md
```

### Custom paths

Pass absolute paths (or paths relative to where you run the command) for inputs and outputs:

```bash
go run cmd/catalog/main.go -data /path/to/catalog-sources \
  -yaml /path/to/site-md/merged.yaml \
  -md /path/to/site-md/index.md \
  -mapping-md /path/to/site-md/cnsc-nist-800-53-mapping.md
```

## Control ID Format

- Control ID: `CNSC-{number}` (e.g., `CNSC-1`, `CNSC-200`)
- Statement ID: `CNSC-{number}.{sub}` (e.g., `CNSC-1.1`, `CNSC-200.2`)

IDs must be unique across all group YAML files. Use sequential numbering within each group.

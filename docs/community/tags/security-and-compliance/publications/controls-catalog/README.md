# Cloud Native Security Controls Catalog

This guide covers Gemara format, file organization, and CLI usage for the controls catalog.

This catalog is expressed in **Gemara Layer 1** (Guidance Catalog).
See [Gemara Documentation](https://gemara.openssf.org/) for specification and schema details.

## File Breakdown by Family

Controls are organized into 11 families. Each family has a dedicated YAML file:

| Family File                     | Family ID                  | Family Name              |
|---------------------------------|----------------------------|--------------------------|
| `access.yaml`                   | `Access`                   | Access Control           |
| `compute.yaml`                  | `Compute`                  | Compute                  |
| `deploy.yaml`                   | `Deploy`                   | Deploy                   |
| `develop.yaml`                  | `Develop`                  | Develop                  |
| `distribute.yaml`               | `Distribute`               | Distribute               |
| `securing-artefacts.yaml`       | `Securing Artefacts`       | Securing Artefacts       |
| `securing-build-pipelines.yaml` | `Securing Build Pipelines` | Securing Build Pipelines |
| `securing-materials.yaml`       | `Securing Materials`       | Securing Materials       |
| `securing-the-source-code.yaml` | `Securing the Source Code` | Securing the Source Code |
| `security-assurance.yaml`       | `Security Assurance`       | Security Assurance       |
| `storage.yaml`                  | `Storage`                  | Storage                  |

Each guideline in a family file must have a `family` field matching the Family ID exactly (case-sensitive).

## CLI Usage

The converter tool merges the YAML files into a single Gemara schema-compliant artefact.

### Prerequisites

- Go 1.24 or later

### Validate

Validates YAML files and generates Gemara Layer 1 document:

```bash
go run cmd/catalog/main.go -yaml catalog.yaml
```

**Output**: Creates `catalog.yaml` with a Gemara schema-compliant document. Exits with error if validation fails.

### Generate Markdown

Generates markdown from YAML files:

```bash
go run cmd/catalog/main.go -md index.md
```

**Output**: Creates `index.md` with formatted markdown for website rendering.

### Generate Both YAML and Markdown

```bash
go run cmd/catalog/main.go -yaml catalog.yaml -md index.md
```

### Specify Custom Directory

```bash
go run cmd/catalog/main.go -dir /path/to/catalog -yaml catalog.yaml -md index.md
```

## Control ID Format

- Control ID: `CNSC-{number}` (e.g., `CNSC-1`, `CNSC-200`)
- Statement ID: `CNSC-{number}.{sub}` (e.g., `CNSC-1.1`, `CNSC-200.2`)

IDs must be unique across all family files. Use sequential numbering within each family.

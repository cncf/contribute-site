package converter

import "github.com/gemaraproj/go-gemara"

const (
	// MetadataFilename is the catalog document header and gemara.Metadata block.
	MetadataFilename = "metadata.yaml"
	// GroupsFilename lists group definitions referenced by guidelines.
	GroupsFilename = "groups.yaml"
)

// DefaultGroupFileOrder is the merge order for per-group guideline YAML files.
var DefaultGroupFileOrder = []string{
	"access",
	"compute",
	"deploy",
	"develop",
	"distribute",
	"securing-artefacts",
	"securing-build-pipelines",
	"securing-materials",
	"securing-the-source-code",
	"security-assurance",
	"storage",
}

// CatalogPage is passed to catalog.tmpl.
type CatalogPage struct {
	GroupsWithGuidelines []FamilyWithGuidelines
	ApplicabilityTitles  map[string]string
}

// FamilyWithGuidelines is one group plus its guidelines for the catalog markdown template.
type FamilyWithGuidelines struct {
	gemara.Group
	Guidelines []gemara.Guideline
}

// MappingPage is passed to mapping.tmpl.
type MappingPage struct {
	Title    string
	Mappings []gemara.Mapping
	Titles   map[string]string
}

// CrosswalkEntry is one atomic mapping in a CrossWalkRow.
type CrosswalkEntry struct {
	Targets []gemara.MappingTarget
	Remarks string
}

// CrosswalkRow is one table row (one CNSC guideline, possibly several NIST lines).
type CrosswalkRow struct {
	Source       string
	Relationship string
	Parts        []CrosswalkEntry
}

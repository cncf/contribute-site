package converter

import (
	_ "embed"
	"fmt"
	"os"
	"strings"
	"text/template"

	"github.com/gemaraproj/go-gemara"
	"github.com/goccy/go-yaml"
)

//go:embed templates/mapping.tmpl
var mappingMarkdownTemplate string

const mappingTemplateRootName = "mappingDocument"

// CNSCMapping loads a Gemara MappingDocument plus catalog guideline titles and renders crosswalk Markdown.
type CNSCMapping struct {
	// MappingYAMLPath is the filesystem path to the mapping YAML (absolute or relative to cwd).
	MappingYAMLPath string

	// Doc is the Gemara mapping document; set by NewCNSCMapping.
	Doc *gemara.MappingDocument
	// Titles maps CNSC guideline id to display title (from the guidance catalog).
	Titles map[string]string
}

// NewCNSCMapping loads the guidance catalog from disk for titles, then parses mappingYAMLPath into Doc.
func NewCNSCMapping(catalogDataPath, mappingYAMLPath string) (*CNSCMapping, error) {
	cc, err := NewCNSCCatalog(catalogDataPath)
	if err != nil {
		return nil, fmt.Errorf("load catalog for mapping: %w", err)
	}
	return NewCNSCMappingWithCatalog(cc, mappingYAMLPath)
}

// NewCNSCMappingWithCatalog parses mappingYAMLPath using guideline titles from an already-loaded catalog.
func NewCNSCMappingWithCatalog(cat *CNSCCatalog, mappingYAMLPath string) (*CNSCMapping, error) {
	m := &CNSCMapping{MappingYAMLPath: mappingYAMLPath}
	titles := make(map[string]string, len(cat.Doc.Guidelines))
	for _, g := range cat.Doc.Guidelines {
		titles[g.Id] = g.Title
	}
	raw, err := os.ReadFile(mappingYAMLPath)
	if err != nil {
		return nil, fmt.Errorf("read mapping yaml: %w", err)
	}
	var mapDoc gemara.MappingDocument
	if err := yaml.Unmarshal(raw, &mapDoc); err != nil {
		return nil, fmt.Errorf("parse mapping yaml: %w", err)
	}
	m.Doc = &mapDoc
	m.Titles = titles
	return m, nil
}

// Write renders the NIST crosswalk Markdown (requires Doc and Titles from NewCNSCMapping).
func (m *CNSCMapping) Write() (string, error) {
	data := &MappingPage{
		Title:    m.Doc.Title,
		Mappings: m.Doc.Mappings,
		Titles:   m.Titles,
	}
	tmpl, err := template.New("mappingMarkdown").Funcs(mappingTemplateFuncs()).Parse(mappingMarkdownTemplate)
	if err != nil {
		return "", fmt.Errorf("parse mapping template: %w", err)
	}
	var b strings.Builder
	if err := tmpl.ExecuteTemplate(&b, mappingTemplateRootName, data); err != nil {
		return "", fmt.Errorf("execute mapping template: %w", err)
	}
	return b.String() + "\n", nil
}

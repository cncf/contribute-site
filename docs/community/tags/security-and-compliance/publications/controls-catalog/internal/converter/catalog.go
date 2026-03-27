// Package converter builds CNCF site artifacts from Gemara Layer 1 types (github.com/gemaraproj/go-gemara).
package converter

import (
	_ "embed"
	"fmt"
	"net/url"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"text/template"

	"github.com/gemaraproj/go-gemara"
	"github.com/goccy/go-yaml"
)

//go:embed templates/catalog.tmpl
var catalogMarkdownTemplate string

// CNSCCatalog loads Gemara YAML sources into a gemara.GuidanceCatalog and renders site Markdown.
type CNSCCatalog struct {
	DataPath string

	// Doc is the GuidanceCatalog
	Doc *gemara.GuidanceCatalog
}

// NewCNSCCatalog reads metadata.yaml, groups.yaml, and guideline shards from dataPath into Doc.
func NewCNSCCatalog(dataPath string) (*CNSCCatalog, error) {
	c := &CNSCCatalog{DataPath: dataPath}
	doc := &gemara.GuidanceCatalog{}
	if err := c.loadMetadata(doc); err != nil {
		return nil, fmt.Errorf("reading metadata: %w", err)
	}
	if err := c.loadGroupFiles(doc); err != nil {
		return nil, fmt.Errorf("reading group data: %w", err)
	}
	sort.Slice(doc.Guidelines, func(i, j int) bool {
		return doc.Guidelines[i].Id < doc.Guidelines[j].Id
	})
	c.Doc = doc
	return c, nil
}

// Write renders the loaded catalog as site Markdown.
func (c *CNSCCatalog) Write() (string, error) {
	if c.Doc == nil {
		return "", fmt.Errorf("no loaded catalog: use NewCNSCCatalog")
	}
	data := buildCatalogTemplateData(c.Doc)
	tmpl, err := template.New("catalogMarkdown").Funcs(catalogTemplateFuncs()).Parse(catalogMarkdownTemplate)
	if err != nil {
		return "", fmt.Errorf("parse catalog template: %w", err)
	}
	var b strings.Builder
	if err := tmpl.Execute(&b, data); err != nil {
		return "", fmt.Errorf("execute catalog template: %w", err)
	}
	return b.String(), nil
}

func buildCatalogTemplateData(doc *gemara.GuidanceCatalog) CatalogPage {
	byGroup := make(map[string][]gemara.Guideline)
	for _, guideline := range doc.Guidelines {
		if guideline.Group != "" {
			byGroup[guideline.Group] = append(byGroup[guideline.Group], guideline)
		}
	}
	for gid := range byGroup {
		sort.Slice(byGroup[gid], func(i, j int) bool {
			return byGroup[gid][i].Id < byGroup[gid][j].Id
		})
	}

	var groupsWithGuidelines []FamilyWithGuidelines
	for _, grp := range doc.Groups {
		gl, ok := byGroup[grp.Id]
		if ok && len(gl) > 0 {
			groupsWithGuidelines = append(groupsWithGuidelines, FamilyWithGuidelines{
				Group:      grp,
				Guidelines: gl,
			})
		}
	}

	applicabilityTitles := make(map[string]string)
	for _, g := range doc.Metadata.ApplicabilityGroups {
		if g.Id != "" {
			applicabilityTitles[g.Id] = g.Title
		}
	}

	return CatalogPage{
		GroupsWithGuidelines: groupsWithGuidelines,
		ApplicabilityTitles:  applicabilityTitles,
	}
}

func (c *CNSCCatalog) groupDataFileURIs() ([]string, error) {
	absDir, err := filepath.Abs(c.DataPath)
	if err != nil {
		return nil, fmt.Errorf("data path: %w", err)
	}
	groupsPath := filepath.Join(absDir, GroupsFilename)
	if _, err := os.Stat(groupsPath); err != nil {
		return nil, fmt.Errorf("%s: %w", GroupsFilename, err)
	}
	u, err := pathToFileURI(groupsPath)
	if err != nil {
		return nil, err
	}
	uris := []string{u}
	for _, slug := range DefaultGroupFileOrder {
		p := filepath.Join(absDir, slug+".yaml")
		st, err := os.Stat(p)
		if os.IsNotExist(err) {
			continue
		}
		if err != nil {
			return nil, fmt.Errorf("stat %s: %w", p, err)
		}
		if st.IsDir() {
			continue
		}
		fu, err := pathToFileURI(p)
		if err != nil {
			return nil, err
		}
		uris = append(uris, fu)
	}
	return uris, nil
}

func (c *CNSCCatalog) loadMetadata(cat *gemara.GuidanceCatalog) error {
	p := filepath.Join(c.DataPath, MetadataFilename)
	file, err := os.Open(p)
	if err != nil {
		return fmt.Errorf("open file: %w", err)
	}
	defer file.Close()

	dec := yaml.NewDecoder(file, yaml.DisallowUnknownField())
	if err := dec.Decode(cat); err != nil {
		return fmt.Errorf("decode YAML: %w", err)
	}
	return nil
}

func (c *CNSCCatalog) loadGroupFiles(cat *gemara.GuidanceCatalog) error {
	uris, err := c.groupDataFileURIs()
	if err != nil {
		return err
	}
	if err := cat.LoadFiles(uris); err != nil {
		return fmt.Errorf("load group YAML: %w", err)
	}
	return nil
}

func pathToFileURI(absPath string) (string, error) {
	abs, err := filepath.Abs(absPath)
	if err != nil {
		return "", err
	}
	u := url.URL{Scheme: "file", Path: filepath.ToSlash(abs)}
	return u.String(), nil
}

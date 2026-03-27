package converter

import (
	"cmp"
	"html"
	"maps"
	"slices"
	"strconv"
	"strings"
	"text/template"

	"github.com/gemaraproj/go-gemara"
)

func catalogTemplateFuncs() template.FuncMap {
	return template.FuncMap{
		"anchor":             func(s string) string { return strings.ToLower(strings.ReplaceAll(s, " ", "-")) },
		"lower":              strings.ToLower,
		"applicabilityTitle": mapLookupOrKey,
	}
}

func mapLookupOrKey(id string, titles map[string]string) string {
	if title, ok := titles[id]; ok {
		return title
	}
	return id
}

func mappingTemplateFuncs() template.FuncMap {
	return template.FuncMap{
		"crosswalkRows":   crosswalkRows,
		"crosswalkAnchor": crosswalkSourceAnchor,
		"tableCell":       tableCell,
		"targetList":      targetList,
		"controlsCell":    controlsCell,
		"notesCell":       notesCell,
	}
}

func crosswalkRows(mappings []gemara.Mapping) []CrosswalkRow {
	rows := slices.Clone(mappings)
	slices.SortFunc(rows, compareMappingsForCrosswalk)

	bySource := make(map[string][]gemara.Mapping)
	for _, m := range rows {
		bySource[m.Source] = append(bySource[m.Source], m)
	}
	sources := slices.Collect(maps.Keys(bySource))
	slices.SortFunc(sources, cmpCNSCSource)

	out := make([]CrosswalkRow, 0, len(sources))
	for _, src := range sources {
		group := bySource[src]
		slices.SortFunc(group, compareMappingsInSourceGroup)
		out = append(out, CrosswalkRow{
			Source:       src,
			Relationship: joinDedupedRelationships(group),
			Parts:        crosswalkEntriesFromGroup(group),
		})
	}
	return out
}

func compareMappingsForCrosswalk(a, b gemara.Mapping) int {
	if c := cmpCNSCSource(a.Source, b.Source); c != 0 {
		return c
	}
	if c := cmp.Compare(firstTargetEntryID(a), firstTargetEntryID(b)); c != 0 {
		return c
	}
	return cmp.Compare(a.Id, b.Id)
}

func compareMappingsInSourceGroup(a, b gemara.Mapping) int {
	if c := cmp.Compare(firstTargetEntryID(a), firstTargetEntryID(b)); c != 0 {
		return c
	}
	return cmp.Compare(a.Id, b.Id)
}

func firstTargetEntryID(m gemara.Mapping) string {
	if len(m.Targets) == 0 {
		return "—"
	}
	return m.Targets[0].EntryId
}

func joinDedupedRelationships(group []gemara.Mapping) string {
	seen := make(map[string]struct{})
	for _, m := range group {
		if rs := strings.TrimSpace(m.Relationship.String()); rs != "" {
			seen[rs] = struct{}{}
		}
	}
	rels := slices.Sorted(maps.Keys(seen))
	s := strings.Join(rels, "; ")
	if s == "" {
		return "—"
	}
	return s
}

func crosswalkEntriesFromGroup(group []gemara.Mapping) []CrosswalkEntry {
	parts := make([]CrosswalkEntry, len(group))
	for i, m := range group {
		parts[i] = CrosswalkEntry{Targets: m.Targets, Remarks: m.Remarks}
	}
	return parts
}

func targetList(targets []gemara.MappingTarget) string {
	if len(targets) == 0 {
		return "—"
	}
	parts := make([]string, len(targets))
	for i, t := range targets {
		parts[i] = "`" + t.EntryId + "`"
	}
	return strings.Join(parts, ", ")
}

func tableCell(s string) string {
	s = strings.ReplaceAll(strings.ReplaceAll(s, "\n", " "), "|", "\\|")
	return strings.TrimSpace(s)
}

func crosswalkSourceAnchor(source string) string {
	s := strings.ReplaceAll(strings.ToLower(strings.TrimSpace(source)), " ", "-")
	return "crosswalk-" + s
}

func numericSuffix(sourceID string) int {
	sourceID = strings.TrimSpace(sourceID)
	rest, ok := strings.CutPrefix(sourceID, "CNSC-")
	if !ok {
		return -1
	}
	end := 0
	for end < len(rest) && rest[end] >= '0' && rest[end] <= '9' {
		end++
	}
	if end == 0 {
		return -1
	}
	n, err := strconv.Atoi(rest[:end])
	if err != nil {
		return -1
	}
	return n
}

func cmpCNSCSource(a, b string) int {
	na, nb := numericSuffix(a), numericSuffix(b)
	switch {
	case na >= 0 && nb >= 0 && na != nb:
		return cmp.Compare(na, nb)
	case na >= 0 && nb < 0:
		return -1
	case na < 0 && nb >= 0:
		return 1
	default:
		return cmp.Compare(a, b)
	}
}

func escapePipeMarkdownCell(s string) string {
	return strings.ReplaceAll(s, "|", "\\|")
}

func controlsCell(parts []CrosswalkEntry) string {
	if len(parts) == 0 {
		return "—"
	}
	seg := make([]string, len(parts))
	for i, p := range parts {
		seg[i] = targetList(p.Targets)
	}
	return escapePipeMarkdownCell(strings.Join(seg, "<br />"))
}

func notesCell(source string, parts []CrosswalkEntry, titles map[string]string) string {
	if len(parts) == 0 {
		return "—"
	}
	seg := make([]string, len(parts))
	for i, p := range parts {
		s := strings.TrimSpace(mappingNote(source, p, titles))
		if s == "" {
			s = "—"
		}
		seg[i] = s
	}
	return escapePipeMarkdownCell(strings.Join(seg, "<br />"))
}

func mappingNote(source string, part CrosswalkEntry, titles map[string]string) string {
	title := "Guideline not found in catalog"
	if titles != nil {
		if t := strings.TrimSpace(titles[source]); t != "" {
			title = t
		}
	}
	nistParts := make([]string, 0, len(part.Targets))
	for _, t := range part.Targets {
		if id := strings.TrimSpace(t.EntryId); id != "" {
			nistParts = append(nistParts, "`"+html.EscapeString(id)+"`")
		}
	}
	nistStr := strings.Join(nistParts, ", ")
	if nistStr == "" {
		nistStr = "—"
	}
	s := "<strong>" + html.EscapeString(title) + "</strong> (" + html.EscapeString(source) + ") · NIST " + nistStr
	if yr := strings.TrimSpace(part.Remarks); yr != "" && !strings.EqualFold(yr, title) {
		s += " — " + html.EscapeString(yr)
	}
	return s
}

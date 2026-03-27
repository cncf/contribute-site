package main

import (
	"flag"
	"fmt"
	"os"
	"path/filepath"

	"github.com/cncf/contribute-site/controls-catalog/internal/converter"
	"github.com/goccy/go-yaml"
)

func main() {
	var (
		dataDir = flag.String("data", "catalog",
			"Directory with source YAML (metadata.yaml, groups.yaml, per-group files, NIST mapping file)")
		outputYAML = flag.String("yaml", "", "Output Gemara Layer 1 YAML path. If empty, skipped. Relative to cwd.")
		outputMD   = flag.String("md", "index.md",
			"Output catalog Markdown path. If empty, skipped. Relative to cwd.")
		mappingYAML = flag.String("mapping-yaml", "cnsc-nist-800-53-mapping.yaml",
			"MappingDocument YAML basename under -data or absolute path.")
		mappingMDOut = flag.String("mapping-md", "cnsc-nist-800-53-mapping.md",
			"Output mapping Markdown path. If empty, skipped. Relative to cwd.")
	)
	flag.Parse()

	dataPath := *dataDir
	if *outputYAML == "" && *outputMD == "" && *mappingMDOut == "" {
		fmt.Fprintf(os.Stderr, "Error: at least one of -yaml, -md, or -mapping-md must be specified\n")
		flag.Usage()
		os.Exit(1)
	}

	cat, err := converter.NewCNSCCatalog(dataPath)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error: %v\n", err)
		os.Exit(1)
	}

	if *outputYAML != "" {
		outputData, err := yaml.Marshal(cat.Doc)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error: failed to marshal YAML: %v\n", err)
			os.Exit(1)
		}

		if err := os.WriteFile(*outputYAML, outputData, 0644); err != nil {
			fmt.Fprintf(os.Stderr, "Error writing YAML output: %v\n", err)
			os.Exit(1)
		}

		fmt.Printf("✅ Generated %s with %d groups and %d total guidelines\n", *outputYAML, len(cat.Doc.Groups), len(cat.Doc.Guidelines))
	}

	if *outputMD != "" {
		markdown, err := cat.Write()
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error generating markdown: %v\n", err)
			os.Exit(1)
		}

		if err := os.WriteFile(*outputMD, []byte(markdown), 0644); err != nil {
			fmt.Fprintf(os.Stderr, "Error writing markdown output: %v\n", err)
			os.Exit(1)
		}

		fmt.Printf("✅ Generated %s with %d groups and %d total guidelines\n", *outputMD, len(cat.Doc.Groups), len(cat.Doc.Guidelines))
	}

	if *mappingMDOut != "" {
		mapYAML := *mappingYAML
		if !filepath.IsAbs(mapYAML) {
			mapYAML = filepath.Join(dataPath, *mappingYAML)
		}
		cm, err := converter.NewCNSCMappingWithCatalog(cat, mapYAML)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error: %v\n", err)
			os.Exit(1)
		}
		md, err := cm.Write()
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error generating mapping markdown: %v\n", err)
			os.Exit(1)
		}
		if err := os.WriteFile(*mappingMDOut, []byte(md), 0644); err != nil {
			fmt.Fprintf(os.Stderr, "Error writing mapping markdown: %v\n", err)
			os.Exit(1)
		}
		fmt.Printf("✅ Generated %s from %s\n", *mappingMDOut, *mappingYAML)
	}
}

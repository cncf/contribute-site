package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/cncf/contribute-site/controls-catalog/internal/converter"
	"github.com/goccy/go-yaml"
)

func main() {
	var (
		catalogDir = flag.String("dir", ".", "Directory containing YAML files (metadata.yaml, families.yaml, and family files)")
		outputYAML = flag.String("yaml", "", "Output YAML file (Gemara Layer 1 document). If empty, YAML output is skipped.")
		outputMD   = flag.String("md", "index.md", "Output markdown file. Defaults to index.md. If empty, markdown output is skipped.")
	)
	flag.Parse()

	if *outputYAML == "" && *outputMD == "" {
		fmt.Fprintf(os.Stderr, "Error: at least one of -yaml or -md must be specified\n")
		flag.Usage()
		os.Exit(1)
	}

	familyOrder := []string{
		"access",
		"compute",
		"deploy",
		"develop",
		"distribute",
		"securing-artefacts",
		"securing-build-pipelines",
		"securing-deployments",
		"securing-materials",
		"securing-the-source-code",
		"security-assurance",
		"storage",
	}

	doc, err := converter.ToGemara(*catalogDir, familyOrder)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error: %v\n", err)
		os.Exit(1)
	}

	if *outputYAML != "" {
		outputData, err := yaml.Marshal(doc)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error: failed to marshal YAML: %v\n", err)
			os.Exit(1)
		}

		if err := os.WriteFile(*outputYAML, outputData, 0644); err != nil {
			fmt.Fprintf(os.Stderr, "Error writing YAML output: %v\n", err)
			os.Exit(1)
		}

		fmt.Printf("✅ Generated %s with %d families and %d total guidelines\n", *outputYAML, len(doc.Families), len(doc.Guidelines))
		fmt.Printf("   Metadata ID: %s\n", doc.Metadata.Id)
	}

	if *outputMD != "" {
		markdown, err := converter.ToMarkdown(doc)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error generating markdown: %v\n", err)
			os.Exit(1)
		}

		if err := os.WriteFile(*outputMD, []byte(markdown), 0644); err != nil {
			fmt.Fprintf(os.Stderr, "Error writing markdown output: %v\n", err)
			os.Exit(1)
		}

		fmt.Printf("✅ Generated %s with %d families and %d total guidelines\n", *outputMD, len(doc.Families), len(doc.Guidelines))
	}
}

---
title: Regional and Linguistic Nuances
description: >
  Guidance for event organizers and contributors on regional sign language differences,
  non-English event terminology, and the current limitations of AI-based assistive tools.
---

# Regional and Linguistic Nuances

Accessibility for Deaf and Hard of Hearing (DHH) individuals is not one-size-fits-all. Sign
languages, terminology preferences, and available assistive technologies vary significantly by
region. This page addresses the most common gaps when planning inclusive events or communications
outside of a North American, English-language context.

## Sign Languages Are Not Universal

A widespread misconception is that there is one global sign language. There is not.

Sign languages are natural languages that evolved independently within Deaf communities around the
world. They have distinct grammars, vocabularies, and regional dialects. Hiring a sign language
interpreter without specifying the correct language is equivalent to hiring a Spanish interpreter
for a French-speaking audience.

Common sign languages and their primary regions:

| Sign Language | Abbreviation | Primary Region |
|---|---|---|
| American Sign Language | ASL | United States, English-speaking Canada |
| Lengua de Señas Mexicana | LSM | Mexico |
| Lengua de Señas Colombiana | LSC | Colombia |
| British Sign Language | BSL | United Kingdom |
| Langue des Signes Française | LSF | France, parts of Switzerland and Belgium |
| International Sign | IS | Used at international conferences (e.g., KubeCon EU/NA); a contact variety, not a native language |

**Practical guidance for organizers:**

- Always specify the required sign language when booking interpreters — do not assume ASL.
- For international events (e.g., KubeCon), ask DHH attendees in advance which sign language
  they use and whether International Sign is acceptable.
- Do not assume an ASL interpreter can interpret in LSM or LSC. These are different languages.
- If your event spans multiple countries, you may need interpreters for multiple sign languages.

## Non-English Event Terminology

When running tech events in Spanish or communicating with Spanish-speaking communities, the
following terminology choices make your event more welcoming to DHH attendees:

### Preferred Terms

| English Term | Preferred Spanish | Avoid |
|---|---|---|
| Speaker | **Ponente** or **Expositor/a** | "Speaker" (untranslated) |
| Talk / Session | **Sesión** or **Presentación** | "Charla" (informal) |
| Call for Speakers | **Convocatoria de Propuestas (CFP)** | "Call for Speakers" (excludes non-verbal presenters) |
| Workshop | **Taller** | — |
| Keynote | **Conferencia magistral** | "Keynote" (untranslated) |

"Call for Proposals (CFP)" is preferred over "Call for Speakers" in any language because it
centers the contribution (the proposal) rather than the modality (speaking). This is especially
relevant for DHH presenters who may present with an interpreter.

### "Lengua" vs. "Lenguaje" in Spanish

This distinction carries cultural significance in Deaf communities:

- **"Lengua de Señas"** is the correct term. "Lengua" recognizes sign languages as natural,
  complete human languages with their own grammar and syntax — the same as Spanish or English.
  This framing is consistent with Mexico's Ley General para la Inclusión de las Personas con
  Discapacidad (LGIPD), which recognizes Lengua de Señas Mexicana (LSM) as a national language.

- **"Lenguaje de Señas"** implies sign is merely a communication system or code — not a full
  language. This framing is considered reductive by many in the Deaf community and should be
  avoided in official communications.

Use **"Lengua de Señas"** in all Spanish-language event materials, social posts, and documentation.

## AI and Automated Sign Language Tools: Current Limitations

AI-powered sign language recognition tools are emerging but are not yet suitable as primary
accessibility solutions at tech events. Organizers should understand the following before
choosing automated tools over human interpreters:

### Limited Language Support

As of 2026, the most widely available AI sign language tools (e.g., the sign language recognition
"sign-to-text" (SL2T) feature on certain Android devices) support **ASL only**. There is 
no commercially available real-time AI recognition tool for LSM, LSC, BSL, or most other national 
sign languages. This is a direct consequence of training data scarcity — ASL has significantly 
more annotated video data than any other sign language.

### Regional Hardware Availability

Some AI sign language features are tied to specific hardware (e.g., a particular smartphone model)
that may not be available in all regions. Import restrictions, carrier constraints, or distribution
agreements can mean a device advertised as having sign language features is not obtainable in
Latin America or other regions within the typical planning window for an event.

### Accuracy and Context

Even for ASL, current AI recognition accuracy degrades with:

- Domain-specific vocabulary (cloud computing, Kubernetes, distributed systems)
- Non-standard signing environments (lighting, camera angle, clothing contrast)
- Regional dialects and signing variations

**Recommendation:** AI sign language tools should be treated as experimental assistive technology,
not as a substitute for a qualified human interpreter. Use them only as a supplementary fallback
when a human interpreter is unavailable, and communicate this limitation transparently to DHH
attendees in advance.

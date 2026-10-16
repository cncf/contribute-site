---
title: Regional and Linguistic Nuances
description: >
  Guidance for event organizers and contributors on regional sign language differences,
  cross-regional terminology, and the current limitations of AI-based assistive tools.
---

# Regional and Linguistic Nuances

Accessibility for Deaf and Hard of Hearing (DHH) individuals is not one-size-fits-all. Sign
languages, terminology conventions, and the availability of assistive technologies vary significantly
across countries and regions. This guide addresses critical considerations when organizing events,
managing speaker lineups, and planning accessibility outside of an exclusively English-speaking or
North American context.

---

## Sign Languages Are Not Universal

A widespread misconception among event organizers is that sign language is universal. It is not.

Sign languages are independent, fully formed natural languages that evolved organically within Deaf
communities worldwide. They possess distinct grammars, visual syntaxes, idioms, and regional
dialects. Contracting an interpreter without verifying the specific national sign language of your
attendees is equivalent to hiring a Spanish interpreter for an audience that speaks Japanese.

Latin America alone comprises more than a dozen distinct national sign languages, and cross-border
intelligibility cannot be assumed.

### Representative National and International Sign Languages

| Language Name | Common Abbreviation | Primary Country / Region |
|---|---|---|
| American Sign Language | **ASL** | United States, English-speaking Canada |
| Lengua de Señas Mexicana | **LSM** | Mexico |
| Lengua de Señas Colombiana | **LSC** | Colombia |
| Lengua de Señas Argentina | **LSA** | Argentina |
| Lengua de Señas Chilena | **LSCh** | Chile |
| Lengua de Señas Peruana | **LSP** | Peru |
| Lengua de Signos Española | **LSE** | Spain |
| British Sign Language | **BSL** | United Kingdom |
| Deutsche Gebärdensprache | **DGS** | Germany |
| International Sign | **IS** | Global conferences (e.g., KubeCon, UN assemblies); a contact variety, not a native language |

### Operational Guidance for Organizers

- **Never assume ASL fits all:** In Latin America, Europe, and Asia, local attendees will expect
  their national sign language, not ASL.
- **Survey during registration:** Ask DHH attendees explicitly which national sign language they
  require well before the event.
- **Multinational and hybrid events:** If your event gathers attendees from across multiple countries
  (e.g., a regional KCD or global summit), you may need interpreter pairs for more than one national
  sign language or a qualified International Sign (IS) interpreter pair with advance attendee agreement.

---

## Non-English Event Terminology (Spanish-Speaking Communities Case Study)

In many tech communities across Latin America and Spain, organizers adopt English technical jargon
directly without considering how spoken-language terms inadvertently exclude non-verbal presenters.
When hosting events in Spanish or writing call-for-proposals materials, the following neutral terms
should be prioritized:

### Preferred Terms for Inclusive Event Communications

| English Term | Preferred Spanish Equivalent | Term to Avoid | Rationale |
|---|---|---|---|
| Speaker | **Ponente / Expositor/a / Conferencista** | *Speaker* (untranslated) | Focuses on presenting and sharing technical knowledge, whether through vocal speech or sign language. |
| Talk / Session | **Sesión técnica / Presentación / Ponencia** | *Charla* | Does not tie participation to vocal speech (*charlar* / chatting). |
| Call for Speakers | **Convocatoria de Propuestas / Call for Proposals (CFP)** | *Call for Speakers* | Focuses on the merit of the technical proposal rather than the vocal delivery mode. |
| Workshop | **Taller práctico** | — | Standard Spanish terminology. |
| Keynote | **Conferencia magistral / Sesión plenaria** | *Keynote* (untranslated) | Formal standardized Spanish terminology. |

*(Note: Similar dynamics apply in other languages; for example, Brazilian Portuguese communities
frequently prefer **Palestrante** over "Speaker" and **Chamada de Trabalhos (CFP)**).*

---

### "Lengua" vs. "Lenguaje" in Spanish-Speaking Jurisdictions

Across the Spanish-speaking world, there is an essential linguistic and cultural distinction between
**Lengua de Señas** and **Lenguaje de señas**:

* **"Lengua de Señas" (Correct):** The term *Lengua* designates a complete, autonomous linguistic
  system with its own grammar, phonology (parameters), and syntax. This aligns with **Article 2 of the
  UN Convention on the Rights of Persons with Disabilities (CRPD)**, which explicitly defines:
  *"Language includes spoken and signed languages and other forms of non spoken languages."*
  It is also the official legal term codified across Latin America and Spain (e.g., Mexico's LGIPD,
  Colombia's Ley 982/1618, Argentina's Ley 27.710, Spain's Ley 27/2007, Chile's Ley 21.303, and Peru's
  Ley 29535).
* **"Lenguaje de señas" (Avoid):** *Lenguaje* in Spanish refers to the universal human faculty of
  communication, not a specific language system. Using "lenguaje" reduces a recognized natural language
  to a simplistic code or gesture system. This mistake commonly arises from the literal translation of
  the English phrase *"Sign Language"*.

**Recommendation:** Event websites, CFP forms, marketing copy, and volunteer guidelines should
consistently use **Lengua de Señas** (or *Língua de Sinais* in Portuguese).

---

## AI and Automated Sign Language Tools: Current Limitations

Emerging AI tools (such as experimental Sign-to-Text models or computer vision recognition) are
frequently proposed by well-intentioned technologists as alternatives to human interpreters. While
technologically promising, organizers must recognize that **these tools are not production-ready
accessibility solutions for tech conferences**:

### 1. Linguistic and Dataset Scarcity
Real-time automated sign language recognition models (such as those piloted on specific consumer
mobile operating systems) are trained almost exclusively on **American Sign Language (ASL)**.
High-quality, annotated video datasets for LSM, LSC, LSA, and other regional sign languages are
orders of magnitude smaller. An automated tool cannot reliably translate non-ASL sign languages.

### 2. Specialized Technical Vocabulary
Tech conferences discuss specialized infrastructure, cloud architecture, and development paradigms
(e.g., *Kubernetes*, *eBPF*, *GitOps*, *microservices*). Generic AI models trained on everyday conversational
data fail rapidly when encountering cloud-native terminology, producing severe hallucination or
omission rates.

### 3. Hardware and Regional Availability Constraints
Cutting-edge accessibility features on specific hardware platforms are often restricted by distribution
geographies. In many countries across Latin America, Asia, and Africa, specialized devices are not
officially sold, requiring import lead times of 60 days or more and navigating complex customs regulations.
Organizers cannot assume attendees or staff have access to specific hardware ecosystems.

### 4. Visual-Spatial and Non-Manual Signals
Sign languages are four-dimensional: syntactic meaning relies heavily on non-manual markers (facial
expressions, eyebrow raises, mouth morphemes, torso shifts) and spatial indexing. Automated 2D camera
inputs struggle to capture these cues accurately in typical conference room lighting, visual noise, or
angled seating.

### Summary Recommendation

Automated sign language recognition tools should be categorized as **experimental assistive technology**,
never as a substitute for qualified human interpreter pairs. Event budgets must treat certified human
interpreters as a core infrastructure requirement.
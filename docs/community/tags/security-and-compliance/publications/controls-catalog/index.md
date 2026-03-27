---
title: Cloud Native Security Controls Catalog
sidebar_position: 6
toc_max_heading_level: 2
---

<!--
This file is auto-generated. Do not edit manually.
toc_max_heading_level: 2 omits ### guideline headings from the in-page TOC (families ## only).

To regenerate this file, run from the controls-catalog directory (source YAML lives under ./catalog/):
  go run cmd/catalog/main.go -md index.md
-->

# Cloud Native Security Controls Catalog

## Overview

This catalog provides a structured framework for implementing security best practices in cloud-native environments.
It synthesizes the foundational principles of the [Cloud Native Security Whitepaper](../security-whitepaper) and the Software Supply Chain Best Practices Paper into discrete, actionable objectives.

> **Note**: While this catalog is historically called the "Cloud Native Security Controls Catalog," these security objectives are expressed using the term **guidelines**. Throughout this document, we use "guidelines" to refer to the individual security recommendations, while "catalog" refers to the overall collection.

Guidelines are organized into Families, each representing a specific security domain. These families help you navigate and understand the scope of security guidelines across different aspects of cloud native systems.

Each entry contains the following components:
- **ID**: A unique identifier for traceability and mapping.
- **Title**: A short, concise summary of the guideline.
- **Originating Document**: The source publication (e.g., Cloud Native Security Whitepaper v1.0, Software Supply Chain Best Practices v1.0).
- **Objective**: The high-level security goal or intent of the guideline.
- **Guideline Mappings**: Cross-references to frameworks (e.g., NIST SP800-53r5) to indicate compliance alignment.
- **Recommendations**: Practical, non-binding guidance for implementation.

## Guideline Families

The following families organize guidelines by security domain. Click on any family name to jump to its guidelines:


**Access Control**

Guidelines for access control models and identity forwarding. [View guidelines →](#access)


**Compute**

Guidelines for securing compute infrastructure including bootstrapping, isolation, monitoring, and runtime security. [View guidelines →](#compute)


**Deploy**

Guidelines for securing software deployments, including artifact verification, runtime policy enforcement, freshness validation, update management, logging, and incident response. [View guidelines →](#deploy)


**Develop**

Guidelines for secure software development practices including environment segregation, testing, code review, and CI server hardening. [View guidelines →](#develop)


**Distribute**

Guidelines for secure distribution of container images, packages, and artifacts including signing, scanning, and registry security. [View guidelines →](#distribute)


**Securing Artefacts**

Guidelines for securing artefacts, including build process attestation, signing frameworks, key rotation, OCI registry support, and encryption. [View guidelines →](#securing-artefacts)


**Securing Build Pipelines**

Guidelines for securing build pipelines, ensuring cryptographic guarantees, validation, and secure build environments. [View guidelines →](#securing-build-pipelines)


**Securing Materials**

Guidelines for securing materials, including third-party artifact verification, SBOM generation, dependency tracking, vulnerability scanning, and software composition analysis. [View guidelines →](#securing-materials)


**Securing the Source Code**

Guidelines for securing the source code, including commit signing, branch protection, secret prevention, access control, MFA enforcement, and automated security scanning. [View guidelines →](#securing-the-source-code)


**Security Assurance**

Guidelines for security assurance, including network policies, incident response, platform hardening, threat modeling, identity management, and GitOps security practices. [View guidelines →](#security-assurance)


**Storage**

Guidelines for securing storage, including encryption at rest, data availability, integrity validation, namespace boundaries, access policies, and artifact registry management. [View guidelines →](#storage)



---


<a id="access"></a>

## Access Control

Guidelines for access control models and identity forwarding.



<a id="cnsc-1"></a>

### Runtime Secret Injection | `CNSC-1`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Secrets are injected at runtime

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-1`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-1)



---



<a id="cnsc-10"></a>

### ABAC and RBAC | `CNSC-10`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

ABAC and RBAC are used

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-10`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-10)



---



<a id="cnsc-11"></a>

### Authorization and Identity Management | `CNSC-11`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

End user identity is capable of being accepted, consumed, and forwarded on for contextual or dynamic authorization

**Recommendations**

- This can be achieved through the use of identity documents and tokens.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-11`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-11)



---



<a id="cnsc-12"></a>

### Cluster Authentication Management | `CNSC-12`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

All cluster and workloads operators are authenticated

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-12`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-12)



---



<a id="cnsc-13"></a>

### Authentication Policy Management | `CNSC-13`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Cluster and workloads operate actions are evaluated against access control policies governing context, purpose, and output

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-13`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-13)



---



<a id="cnsc-14"></a>

### Multi-factor Authentication | `CNSC-14`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Identity federation uses multi-factor authentication

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-14`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-14)



---



<a id="cnsc-15"></a>

### HSMs Protection of Cryptographic Secrets | `CNSC-15`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

HSMs are used to physically protect cryptographic secrets with an encryption key residing in the HSM

**Recommendations**

- If this is not possible, software-based credential managers should be used.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-15`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-15)

**See Also**

- [`CNSC-16`](#cnsc-16)
- [`CNSC-19`](#cnsc-19)




---



<a id="cnsc-16"></a>

### Secrets Management | `CNSC-16`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Secrets should have a short expiration period or time to live

**Recommendations**

- Leverage tool-specific capabilities of secret manager


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-16`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-16)

**See Also**

- [`CNSC-19`](#cnsc-19)
- [`CNSC-15`](#cnsc-15)




---



<a id="cnsc-17"></a>

### Secrets Lifecycle Management | `CNSC-17`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Time to live and expiration period on secrets is verified to prevent reuse

**Recommendations**

- Leverage tool-specific capabilities of secret manager


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-17`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-17)



---



<a id="cnsc-18"></a>

### Secrets Management System | `CNSC-18`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Secrets management systems are highly available

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-18`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-18)



---



<a id="cnsc-19"></a>

### Secrets Rotation Management | `CNSC-19`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Long-lived secrets adhere to periodic rotation and revocation

**Recommendations**

- Long-lived secrets are not recommended, but some capabilities require them


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-19`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-19)

**See Also**

- [`CNSC-15`](#cnsc-15)
- [`CNSC-16`](#cnsc-16)




---



<a id="cnsc-2"></a>

### Mutual Authentication | `CNSC-2`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Applications and workloads are explicitly authorized to communicate with each other using mutual authentication

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-2`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-2)



---



<a id="cnsc-20"></a>

### Secrets Protection | `CNSC-20`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Secrets are distributed through secured communication channels protected commensurate with the level of access or data they are protecting

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-20`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-20)



---



<a id="cnsc-208"></a>

### Multi-factor Authentication | `CNSC-208`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Identity federation uses multi-factor authentication for human users

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-208`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-208)



---



<a id="cnsc-21"></a>

### Secret Injection Lifecycle | `CNSC-21`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Secrets injected at runtime are masked or dropped from logs, audit, or system dumps

**Recommendations**

- Even short lived secrets may be reused if caught in time by an interested attacker. Logs, audit, and systems dumps (i.e. in-memory shared volumes instead of environment variables) are all areas where runtime injected secrets show up


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-21`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-21)



---



<a id="cnsc-3"></a>

### Cryptographic Key Management | `CNSC-3`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Keys are rotated frequently

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-3`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-3)



---



<a id="cnsc-4"></a>

### Cryptographic Key Lifecycle Management | `CNSC-4`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Key lifespan is short

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-4`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-4)



---



<a id="cnsc-5"></a>

### Sensitive Credential Management | `CNSC-5`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Credentials and keys protecting sensitive workloads (health/finance/etc) are generated and managed independent of a cloud service provider

**Recommendations**

- KMS and HMS are common technologies to achieve this. FIPS 140-2 compliance is strongly suggested. Cloud KMS tends to be FIPS 140-2 Level 2 or greater.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-5`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-5)



---



<a id="cnsc-6"></a>

### Identification and Authentication | `CNSC-6`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Authentication and authorization are determined independently

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-6`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-6)



---



<a id="cnsc-7"></a>

### Authentication and Authorization Enforcement | `CNSC-7`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Authentication and authorization are enforced independently

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-7`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-7)



---



<a id="cnsc-8"></a>

### Continuous System Monitoring | `CNSC-8`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Access control and file permissions are updated in real-time

**Recommendations**

- where possible as caching may permit unauthorized access


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-8`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-8)



---



<a id="cnsc-9"></a>

### Privileged-based Authorization | `CNSC-9`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Authorization for workloads is granted based on attributes and roles/permissions previously assigned

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-9`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-9)



---




<a id="compute"></a>

## Compute

Guidelines for securing compute infrastructure including bootstrapping, isolation, monitoring, and runtime security.



<a id="cnsc-22"></a>

### Compute Bootstrapping Verification | `CNSC-22`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Bootstrapping is employed to verify correct physical and logical location of compute

**Recommendations**

- Secure Boot with TPM 2.0 or similar control


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-22`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-22)



---



<a id="cnsc-23"></a>

### Boundary Management | `CNSC-23`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Disparate data sensitive workloads are not run on the same host OS kernel

**Recommendations**

- There are at least three implementing controls possible: workloads may be  separated by running in a separate cluster, on a separate node, or by implementing pods in independent VMs. It is also possible to emulate the kernel via an application kernel (e.g. gvisor)


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-23`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-23)



---



<a id="cnsc-233"></a>

### Data Trust Management | `CNSC-233`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Use a service mesh that eliminates implicit trust through data-in-motion protection (i.e. confidentiality, integrity, authentication, authorization)

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-233`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-233)



---



<a id="cnsc-24"></a>

### Runtime Configuration Monitoring | `CNSC-24`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Monitor and detect any changes to the initial configurations made in runtime

**Recommendations**

- Preventative controls should be the primary control. Detective controls monitoring  filesystem changes should be used to verify primary controls are operating properly.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-24`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-24)



---



<a id="cnsc-25"></a>

### API Auditing Implementation | `CNSC-25`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

API auditing is enabled with a filter for a specific set of API Groups or verbs

**Recommendations**

- API audits of the application, kubernetes API server, and kernel should be implemented.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-25`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-25)



---



<a id="cnsc-26"></a>

### Operating System Configuration | `CNSC-26`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Container specific operating systems are in use

**Recommendations**

- A read-only OS with other services disabled. This provides isolation and resource confinement  that enables developers to run isolated applications on a shared host kernel


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-26`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-26)



---



<a id="cnsc-27"></a>

### Trust Implementation | `CNSC-27`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

The hardware root of trust is based in a Trusted Platform Module (TPM) or virtual TPM (vTPM)

**Recommendations**

- Ensure HW root of trust extends to the host OS kernel, modules, system images, container runtimes, and all software on the system.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-27`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-27)



---



<a id="cnsc-28"></a>

### Least Privilege | `CNSC-28`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Minimize administrative access to the control plane

**Recommendations**

- Ensure both users and pods have the minimum necessary access


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-28`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-28)



---



<a id="cnsc-29"></a>

### Resource Control Management | `CNSC-29`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Object level and resource requests and limits are controlled through cgroups

**Recommendations**

- helps prevent exhaustion of node and cluster level resources by one misbehaving workload due to an intentional (e.g., fork bomb attack or cryptocurrency mining) or unintentional (e.g., reading a large file in memory without input validation, horizontal autoscaling to exhaust compute resources) issue


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-29`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-29)



---



<a id="cnsc-30"></a>

### System Alert Monitoring | `CNSC-30`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Systems processing alerts are periodically tuned for false positives

**Recommendations**

- to avoid alert flooding, fatigue, and false negatives after security incidents that were not detected by the system


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-30`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-30)



---



<a id="cnsc-31"></a>

### Control Plane Configuration | `CNSC-31`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

All orchestrator control plane components are configured to communicate via mutual authentication and certificate validation with a periodically rotated certificate

**Recommendations**

- In unfederated clusters, the CA should be used exclusively for the current cluster.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-31`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-31)



---



<a id="cnsc-32"></a>

### Baseline Configured Functionality | `CNSC-32`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Only sanctioned capabilities and system calls (e.g. seccomp filters), are allowed to execute or be invoked in a container by the host operating system

**Recommendations**

- Additional tooling should be installed that go beyond k8s capabilities to limit system calls. E.g. Falco.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-32`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-32)



---



<a id="cnsc-33"></a>

### Critical Change Management | `CNSC-33`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Changes to critical mount points and files are prevented, monitored, and alerted

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-33`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-33)



---



<a id="cnsc-34"></a>

### Runtime Configuration for Change Management | `CNSC-34`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Runtime configuration control prevents changes to binaries, certificates, and remote access configurations

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-34`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-34)



---



<a id="cnsc-35"></a>

### Runtime Boundary Protection Management | `CNSC-35`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Runtime configuration prevents ingress and egress network access for containers to only what is required to operate

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-35`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-35)



---



<a id="cnsc-36"></a>

### Boundary Protection Management | `CNSC-36`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Policies are defined that restrict communications to only occur between sanctioned microservice pairs

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-36`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-36)



---



<a id="cnsc-37"></a>

### Policy Enforcement Management | `CNSC-37`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Use a policy agent to control and enforce authorized, signed container images

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-37`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-37)



---



<a id="cnsc-38"></a>

### Policy Enforcement Management | `CNSC-38`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Use a policy agent to control provenance assurance for operational workloads

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-38`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-38)



---



<a id="cnsc-39"></a>

### Data Trust Management | `CNSC-39`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Use a service mesh that eliminates implicit trust through data-in-motion encryption (data in transit)

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-39`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-39)



---



<a id="cnsc-40"></a>

### System Monitoring Components | `CNSC-40`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Use components that detect, track, aggregate and report system calls and network traffic from a container

**Recommendations**

- should be leveraged to look for unexpected or malicious behavior


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-40`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-40)



---



<a id="cnsc-41"></a>

### Dynamic Workload Scanning | `CNSC-41`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Workloads should be dynamically scanned to detect malicious or insidious behavior for which no known occurrence yet exists

**Recommendations**

- Events such as an extended sleep command that executes data exfiltration from etcd after the workload has been running for X amount of days are not expected in the majority of environments and therefore are not included in security tests. The aspect that workloads can have time or event delayed trojan horses is only detectable by comparing to baseline expected behavior, often discovered during thorough activity and scan monitoring


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-41`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-41)



---



<a id="cnsc-42"></a>

### Continuous Monitoring and Scanning | `CNSC-42`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Environments are continuously scanned to detect new vulnerabilities in workloads

**Recommendations**

- Vulnerabilities are constantly being discovered, just because it wasn't vulnerable at deploy, doesn't mean it won't be vulnerable in two weeks


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-42`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-42)



---



<a id="cnsc-43"></a>

### Audit Event Logging | `CNSC-43`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Actionable audit events are generated that correlate/contextualize data from logs into "information" that can drive decision trees/incident response

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-43`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-43)



---



<a id="cnsc-44"></a>

### Privilege Management | `CNSC-44`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Segregation of duties and the principle of least privilege is enforced

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-44`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-44)



---



<a id="cnsc-45"></a>

### Information Integrity | `CNSC-45`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Non-compliant violations are detected based on a pre-configured set of rules defined by the organization's policies

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-45`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-45)



---



<a id="cnsc-46"></a>

### Key Management Storage | `CNSC-46`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Native secret stores encrypt with keys from an external Key Management Store (KMS)

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-46`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-46)



---



<a id="cnsc-47"></a>

### Secret Storage Configuration | `CNSC-47`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Native secret stores are not configured for base64 encoding or stored in clear-text in the key-value store by default

**Recommendations**

- Encoding is not encryption


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-47`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-47)



---



<a id="cnsc-48"></a>

### System Monitoring | `CNSC-48`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Network traffic to malicious domains is detected and denied

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-48`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-48)



---



<a id="cnsc-49"></a>

### Sensitive Data Encryption | `CNSC-49`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Use encrypted containers for sensitive sources, methods, and data

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-49`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-49)



---



<a id="cnsc-50"></a>

### SBOM Management | `CNSC-50`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Use SBOMs to identify current deployments of vulnerable libraries, dependencies, and packages

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-50`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-50)



---



<a id="cnsc-51"></a>

### Functionality Management | `CNSC-51`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Processes must execute only functions explicitly defined in an allow list

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-51`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-51)



---



<a id="cnsc-52"></a>

### Access and Change Restrictions | `CNSC-52`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Functions are not be allowed to make changes to critical file system mount points

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-52`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-52)



---



<a id="cnsc-53"></a>

### Access Configuration | `CNSC-53`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Function access is only permitted to sanctioned services

**Recommendations**

- Either through networking restrictions or least privilege in permission models


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-53`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-53)



---



<a id="cnsc-54"></a>

### System Monitoring | `CNSC-54`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Egress network connection is monitored to detect and prevent access to C&C (command and control) and other malicious network domains

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-54`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-54)



---



<a id="cnsc-55"></a>

### System Monitoring Management | `CNSC-55`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Ingress network inspection is employed detect and remove malicious payloads and commands

**Recommendations**

- For instance, SQL injection attacks can be detected using inspection.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-55`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-55)



---



<a id="cnsc-56"></a>

### System Component Isolation | `CNSC-56`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Serverless functions are run in tenant-based resource or performance isolation for similar data classifications

**Recommendations**

- This may impact the performance due to limitations in the address space available to the isolation environment and should be considered for only the most sensitive workloads.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-56`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-56)



---




<a id="deploy"></a>

## Deploy

Guidelines for securing software deployments, including artifact verification, runtime policy enforcement, freshness validation, update management, logging, and incident response.



<a id="cnsc-170"></a>

### Artifact Verification | `CNSC-170`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Clients can perform verification of artefacts and associated metadata

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-170`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-170)



---



<a id="cnsc-171"></a>

### Freshness Verification | `CNSC-171`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Clients can verify the freshness of files

**Recommendations**

- Ensure clients can access latest versions and can verify if the provided files are out of date


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-171`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-171)



---



<a id="cnsc-172"></a>

### Update Framework | `CNSC-172`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

A framework is used for managing software updates

**Recommendations**

- Consider using The Update Framework (TUF) to enforce the updating of software. TUF is a specification for delivering software updates in a secure, reliable and trusted way


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-172`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-172)



---



<a id="cnsc-57"></a>

### Trust Confirmation | `CNSC-57`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Trust confirmation verifies the image has a valid signature from an authorized source

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-57`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-57)



---



<a id="cnsc-58"></a>

### Runtime Policy Enforcement | `CNSC-58`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Image runtime policies are enforced prior to deployment

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-58`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-58)



---



<a id="cnsc-59"></a>

### Image Integrity Verification | `CNSC-59`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Image integrity and signature are verified prior to deployment

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-59`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-59)



---



<a id="cnsc-60"></a>

### Application Logging | `CNSC-60`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Applications provide logs regarding authentication, authorization, actions, and failures

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-60`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-60)



---



<a id="cnsc-61"></a>

### Forensics Integration | `CNSC-61`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Forensics capabilities are integrated into an incident response plan and procedures

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-61`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-61)



---



<a id="cnsc-62"></a>

### Behavioral Analysis | `CNSC-62`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

AI, ML, or statistical modeling are used for behavioural and heuristic environment analysis to detect unwanted activities

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-62`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-62)



---




<a id="develop"></a>

## Develop

Guidelines for secure software development practices including environment segregation, testing, code review, and CI server hardening.



<a id="cnsc-195"></a>

### Secure Configuration Defaults | `CNSC-195`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Secure configuration is implemented as the default state of the system

**Recommendations**

- Transitioning towards such a system involves making security a design requirement, inheriting default security configuration and supporting an exception process


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-195`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-195)



---



<a id="cnsc-259"></a>

### Early Vulnerability Scanning | `CNSC-259`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Integrate vulnerability and configuration scanning in both the IDE and at the CI system during pull request

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-259`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-259)



---



<a id="cnsc-265"></a>

### Code Review Requirements | `CNSC-265`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Implement at least one other non-author reviewer/approver prior to merging

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-265`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-265)



---



<a id="cnsc-271"></a>

### CI Server Isolation | `CNSC-271`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Continuous integration server is isolated and hardened

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-271`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-271)



---



<a id="cnsc-63"></a>

### Production Environment | `CNSC-63`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

A dedicated production environment is established

**Recommendations**

- Ensure that production workloads are in a separate, dedicated environment from non-production workloads. In the context of containers, this can mean separate clusters. In the case of VMs, separate networks.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-63`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-63)



---



<a id="cnsc-64"></a>

### Dynamic Deployments | `CNSC-64`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Dynamic deployments are leveraged for safer releases

**Recommendations**

- Blue/Green, Alpha/Beta, Canary, red-black deployments


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-64`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-64)



---



<a id="cnsc-65"></a>

### Early Vulnerability Scanning | `CNSC-65`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Vulnerability and configuration scanning is integrated in the IDE or at the pull request

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-65`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-65)



---



<a id="cnsc-66"></a>

### Environment Segregation | `CNSC-66`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Dedicated development, testing, and production environments are established

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-66`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-66)



---



<a id="cnsc-67"></a>

### Business-Critical Code Testing | `CNSC-67`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Tests are built for business-critical code

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-67`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-67)



---



<a id="cnsc-68"></a>

### Infrastructure Testing | `CNSC-68`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Tests are built for business-critical infrastructure

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-68`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-68)



---



<a id="cnsc-69"></a>

### Local Test Execution | `CNSC-69`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Test suites are able to be run locally

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-69`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-69)



---



<a id="cnsc-70"></a>

### Shared Test Execution | `CNSC-70`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Test suites are available to run in a shared environment

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-70`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-70)



---



<a id="cnsc-71"></a>

### Code Review Requirements | `CNSC-71`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Two non-author reviewers or approvers are required prior to merging

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-71`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-71)



---



<a id="cnsc-72"></a>

### Code Quality | `CNSC-72`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Code is clean and well commented

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-72`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-72)



---



<a id="cnsc-73"></a>

### Full Infrastructure Testing | `CNSC-73`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Full infrastructure tests are used

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-73`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-73)



---



<a id="cnsc-74"></a>

### Regression Testing | `CNSC-74`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Regression tests are used

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-74`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-74)



---



<a id="cnsc-75"></a>

### Security Regression Testing | `CNSC-75`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Test suites are updated against new and emerging threats and developed into security regression tests

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-75`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-75)



---



<a id="cnsc-76"></a>

### Testing Environment | `CNSC-76`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

A dedicated testing environment is established

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-76`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-76)



---



<a id="cnsc-77"></a>

### CI Server Isolation | `CNSC-77`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Continuous integration server is isolated

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-77`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-77)



---



<a id="cnsc-78"></a>

### Threat-Informed Test Development | `CNSC-78`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Threat model results are used to determine ROI for test development

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-78`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-78)



---




<a id="distribute"></a>

## Distribute

Guidelines for secure distribution of container images, packages, and artifacts including signing, scanning, and registry security.



<a id="cnsc-100"></a>

### Registry Authentication | `CNSC-100`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Registries require mutually authenticated TLS for all registry connections

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-100`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-100)



---



<a id="cnsc-101"></a>

### Image Signing | `CNSC-101`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Image and metadata are signed

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-101`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-101)



---



<a id="cnsc-102"></a>

### Configuration Signing | `CNSC-102`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Configuration is signed

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-102`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-102)



---



<a id="cnsc-103"></a>

### Package Signing | `CNSC-103`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Package is signed

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-103`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-103)



---



<a id="cnsc-104"></a>

### Image Integrity Validation | `CNSC-104`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Integrity of images is validated

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-104`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-104)



---



<a id="cnsc-105"></a>

### Image Vulnerability Scanning | `CNSC-105`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Images are scanned for vulnerabilities and malware

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-105`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-105)



---



<a id="cnsc-106"></a>

### Key Revocation | `CNSC-106`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Image signing key revocation is enabled in the event of compromise

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-106`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-106)



---



<a id="cnsc-107"></a>

### Security Update Prioritization | `CNSC-107`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Security updates are prioritized

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-107`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-107)



---



<a id="cnsc-108"></a>

### Credential Protection | `CNSC-108`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

HSMs or credential managers are used for protecting credentials

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-108`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-108)



---



<a id="cnsc-109"></a>

### Scanning Remediation | `CNSC-109`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Container image scanning findings are acted upon

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-109`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-109)



---



<a id="cnsc-110"></a>

### Compliance Enforcement | `CNSC-110`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Organizational compliance rules are enforced

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-110`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-110)



---



<a id="cnsc-111"></a>

### Infrastructure Hardening | `CNSC-111`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Incremental hardening of the infrastructure is employed

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-111`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-111)



---



<a id="cnsc-112"></a>

### Public Registry Access Control | `CNSC-112`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Pulls from public registries are controlled and only from authorized engineers or internal registries

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-112`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-112)



---



<a id="cnsc-113"></a>

### Image Encryption Management | `CNSC-113`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Image encryption is coupled with key management attestation and/or authorization and credential distribution

**Recommendations**

- This restricts the image to only be deployed to authorized platforms. Container image authorization is useful for compliance use cases such as geo-fencing or export control and digital rights media management


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-113`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-113)



---



<a id="cnsc-114"></a>

### Risk-Based Remediation Prioritization | `CNSC-114`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

At-risk applications are prioritized for remediation by exploit maturity and vulnerable path presence in addition to the CVSS score

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-114`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-114)



---



<a id="cnsc-274"></a>

### Signing Key Revocation | `CNSC-274`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Should software artifacts become untrusted due to compromise or other incident, teams should revoke signing keys to ensure repudiation

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-274`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-274)



---



<a id="cnsc-297"></a>

### Configuration Signing | `CNSC-297`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Workload-related configuration is signed

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-297`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-297)



---



<a id="cnsc-298"></a>

### Package Signing | `CNSC-298`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Workload-related package is signed

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-298`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-298)



---



<a id="cnsc-303"></a>

### Credential Protection | `CNSC-303`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

HSMs or credential managers should be used for protecting credentials. If this is not possible, software-based credential managers should be used.

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-303`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-303)



---



<a id="cnsc-79"></a>

### Trust Verification | `CNSC-79`
**Originating Document**: `Cloud Native Security Whitepaper v1.0`


**Objective**

Trust is verified

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-79`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-79)



---



<a id="cnsc-80"></a>

### Staging Registry Management | `CNSC-80`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Artifacts ready for deployment are managed in a staging or pre-prod registry

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-80`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-80)



---



<a id="cnsc-81"></a>

### Container Image Hardening | `CNSC-81`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Container images are hardened following best practices

**Recommendations**

- Images contain least permissions to remain functional, do not allow for shell, do not include unnecessary libraries and dependencies, do not bind mount files in from the host, etc.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-81`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-81)



---



<a id="cnsc-82"></a>

### Static Application Security Testing | `CNSC-82`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Static application security testing (SAST) is performed

**Recommendations**

- Static analysis is performed by dedicated SAST tools as well as linters


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-82`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-82)



---



<a id="cnsc-83"></a>

### Test Pyramid Adherence | `CNSC-83`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Test suites follow the test pyramid

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-83`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-83)



---



<a id="cnsc-84"></a>

### Private Development Registry | `CNSC-84`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Artifacts undergoing active development are held in a private registry

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-84`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-84)



---



<a id="cnsc-85"></a>

### Manifest Scanning | `CNSC-85`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Application manifests are scanned in CI pipeline

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-85`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-85)



---



<a id="cnsc-86"></a>

### CI Server Isolation | `CNSC-86`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

CI servers for sensitive workloads are isolated from other workloads

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-86`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-86)



---



<a id="cnsc-87"></a>

### Privileged Build Isolation | `CNSC-87`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Builds requiring elevated privileges run on dedicated servers

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-87`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-87)



---



<a id="cnsc-88"></a>

### Build Policy Enforcement | `CNSC-88`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Build policies are enforced on the CI pipeline

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-88`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-88)



---



<a id="cnsc-89"></a>

### Pipeline Metadata Signing | `CNSC-89`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Pipeline metadata is signed

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-89`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-89)



---



<a id="cnsc-90"></a>

### Build Stage Verification | `CNSC-90`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Build stages are verified prior to the next stage executing

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-90`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-90)



---



<a id="cnsc-91"></a>

### CI Pipeline Scanning | `CNSC-91`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Images are scanned within the CI pipeline

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-91`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-91)



---



<a id="cnsc-92"></a>

### Pipeline Compliance Integration | `CNSC-92`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Vulnerability scans are coupled with pipeline compliance rules

**Recommendations**

- Prevent insecure images and artifacts from being deployed


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-92`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-92)



---



<a id="cnsc-93"></a>

### Dynamic Application Security Testing | `CNSC-93`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Dynamic application security testing (DAST) is performed

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-93`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-93)



---



<a id="cnsc-94"></a>

### Application Instrumentation | `CNSC-94`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Application instrumentation is employed

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-94`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-94)



---



<a id="cnsc-95"></a>

### Test Traceability | `CNSC-95`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Automated test results map back to requirements

**Recommendations**

- Requirements include feature, function, security, and compliance


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-95`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-95)



---



<a id="cnsc-96"></a>

### Infrastructure Security Testing | `CNSC-96`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Infrastructure security tests are employed

**Recommendations**

- firewall rules open to the world, overprivileged Identity & Access Management (IAM) policies, unauthenticated endpoints, etc


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-96`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-96)



---



<a id="cnsc-97"></a>

### Security Health Verification | `CNSC-97`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Tests to verify security health are executed at build and deploy time

**Recommendations**

- to evaluate any changes or regressions that may have occurred throughout the lifecycle.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-97`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-97)



---



<a id="cnsc-98"></a>

### IaC Policy Controls | `CNSC-98`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Infrastructure as Code is subject to the same pipeline policy controls as application code

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-98`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-98)



---



<a id="cnsc-99"></a>

### Automated Security Testing | `CNSC-99`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Security testing is automated

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-99`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-99)



---




<a id="securing-artefacts"></a>

## Securing Artefacts

Guidelines for securing artefacts, including build process attestation, signing frameworks, key rotation, OCI registry support, and encryption.



<a id="cnsc-141"></a>

### Build Process Attestation | `CNSC-141`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Every step in the build process is signed and attested for process integrity

**Recommendations**

- The signing of artefacts should be performed at each stage of its life cycle. The final artefact bundle should include these collective signatures and itself be signed to give integrity to the completed artefact and all its associated metadata.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-141`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-141)



---



<a id="cnsc-142"></a>

### Build Signature Verification | `CNSC-142`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Every step in the build process verifies previously generated signatures

**Recommendations**

- The integrity and provenance of images, deployment configuration, and application packages included in artefacts should all be validated using the signatures generated by each step in its build process to ensure compliance


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-142`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-142)



---



<a id="cnsc-143"></a>

### Artifact Signing Framework | `CNSC-143`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

A framework is used to manage signing of artefacts

**Recommendations**

- Consider TUF/notary to sign OCI images. Notary makes use of a “root-of-trust” model to delegate trust from a single root to the individual teams or developers who sign artefacts. It uses additional metadata to allow clients to verify the freshness of content in a repository and protect against common attacks on update systems. Clients can make use of public keys to verify the contents of the repository.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-143`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-143)



---



<a id="cnsc-144"></a>

### Attestation Store | `CNSC-144`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

A store is used to manage attestations

**Recommendations**

- Consider storing in-toto attestations in OCI registries alongside the image. Generated in-toto metadata needs to be stored and tracked for which a database or a dedicated store such as Grafeas can be used.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-144`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-144)



---



<a id="cnsc-145"></a>

### Certification Authorization | `CNSC-145`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Artefacts any given party is authorized to certify are limited

**Recommendations**

- Trust should not be granted universally or indefinitely. Artefacts or metadata that a given party is trusted to certify should be restricted using selective trust delegations. Trust must expire at predefined intervals, unless renewed as weel as a party must only be trusted to perform the tasks assigned to it to ensure compartmentatlization


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-145`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-145)



---



<a id="cnsc-146"></a>

### Key Rotation and Revocation | `CNSC-146`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Rotation and revocation of private keys is supported

**Recommendations**

- The system must be prepared for when, not if, its private keys are compromised. The ability to rotate and revoke private keys must be built into the distribution mechanism. Additionally, multiple keys must be used for different tasks or roles, and a threshold of keys must be required for important roles. Finally, minimal trust must be placed in high-risk keys like those that are stored online or used in automated roles.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-146`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-146)



---



<a id="cnsc-147"></a>

### OCI Registry Support | `CNSC-147`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

A container registry that supports OCI image-spec images is used

**Recommendations**

- An internal image registry should be deployed and configured to support internal artefact distribution with the security properties described in this section.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-147`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-147)



---



<a id="cnsc-148"></a>

### Artifact Encryption | `CNSC-148`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Artefacts are encrypted before distribution and only authorized platforms have decryption capabilities

**Recommendations**

- Ensure contents of the artefact remain confidential in transit and at rest, until it is consumed. These artefacts can be encrypted so that they are accessible by authorized parties, such as the clusters, vulnerability scanners, etc. t is recommended organizations use key management and distribution systems with identity and attestation mechanisms (e.g. SPIFFE/SPIRE)


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-148`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-148)



---




<a id="securing-build-pipelines"></a>

## Securing Build Pipelines

Guidelines for securing build pipelines, ensuring cryptographic guarantees, validation, and secure build environments.



<a id="cnsc-149"></a>

### Cryptographic Policy Guarantee | `CNSC-149`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Policy adherence is cryptographically guaranteed

**Recommendations**

- The presence and output of each build step should be attested during the build. The CNCF maintains the in-toto project that can be used to secure a chain of pipeline stages end-to-end with cryptographic guarantees. Build metadata should be evaluated against the policy template by using tools such as Open Policy Agent.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-149`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-149)



---



<a id="cnsc-150"></a>

### Environment and Dependency Validation | `CNSC-150`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Environments and dependencies are validated before usage

**Recommendations**

- The build environment’s sources and dependencies must come from a secure, trusted source of truth. Checksums and any signatures should be validated both in the downloading or ingestion process, and again by the build worker. This should include validating package manager signatures, checking out specific Git commit hashes, and verifying SHA sums of input sources and binaries. After completing this validation, the downloading process should sign all binaries or libraries it is adding to the secure source


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-150`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-150)



---



<a id="cnsc-151"></a>

### Build Worker Runtime Security | `CNSC-151`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Runtime security of build workers is validated

**Recommendations**

- Out-of-band verification of runtime environment security, as defined by execution of policies using tools such as seccomp, AppArmor, and SELinux, provides defense in depth against attacks on build infrastructure. High privilege kernel capabilities such as debugger, device, and network attachments should be restricted and monitored.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-151`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-151)



---



<a id="cnsc-152"></a>

### Reproducible Builds | `CNSC-152`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Build artefacts are validated through verifiably reproducible builds

**Recommendations**

- A verifiably reproducible build is a build process where, given a source code commit hash and a set of build instructions, an end user should be able to reproduce the built artefact bit for bit.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-152`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-152)



---



<a id="cnsc-153"></a>

### External Requirement Verification | `CNSC-153`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

External requirements from the build process are locked and verified

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-153`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-153)



---



<a id="cnsc-154"></a>

### Build Determinism | `CNSC-154`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Sources of non-determinism are found and eliminated

**Recommendations**

- Reproducible-builds.org documents and offers solutions for many of these things. Diffoscope can be used to dig in and find the cause of differences when tracking down sources of non-determinism.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-154`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-154)



---



<a id="cnsc-155"></a>

### Build Environment Recording | `CNSC-155`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

The build environment is recorded

**Recommendations**

- Ensure best practices outlined in cloud native security paper are followed to deploy a secure orchestration layer


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-155`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-155)



---



<a id="cnsc-156"></a>

### Build Environment Automation | `CNSC-156`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Creation of the build environment is automated

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-156`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-156)



---



<a id="cnsc-157"></a>

### Build Distribution | `CNSC-157`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Builds are distributed across different infrastructure

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-157`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-157)



---



<a id="cnsc-158"></a>

### Pipeline as Code | `CNSC-158`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Build and related CI/CD steps are automated through a pipeline delivered as code

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-158`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-158)



---



<a id="cnsc-159"></a>

### Pipeline Standardization | `CNSC-159`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Pipelines are standardized across projects

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-159`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-159)



---



<a id="cnsc-160"></a>

### Software Factory Platform | `CNSC-160`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

A secured orchestration platform is provisioned to host the software factory

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-160`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-160)



---



<a id="cnsc-161"></a>

### Single-Use Build Workers | `CNSC-161`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Build workers are single use

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-161`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-161)



---



<a id="cnsc-162"></a>

### Software Factory Network Isolation | `CNSC-162`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Software factory has minimal network connectivity

**Recommendations**

- The software factory should have no network connectivity other than to connect to the trusted sources of hardened source code, the dependency repository and code signing infrastructure.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-162`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-162)



---



<a id="cnsc-163"></a>

### Build Worker Duty Segregation | `CNSC-163`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Duties of each build worker are segregated

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-163`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-163)



---



<a id="cnsc-164"></a>

### Build Worker Environment Control | `CNSC-164`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Build worker environment and commands are passed in

**Recommendations**

- Inorder to limit hostile tooling and persistent impants from attackers, a Build Worker should start with a clean and isolated environmment. It should not be able to pull its own environment. Ensure environment variables and commands are explicitly passed to avoid any complicated and opaque build process


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-164`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-164)



---



<a id="cnsc-165"></a>

### Secured Output Storage | `CNSC-165`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Output is written to a separate secured storage repo

**Recommendations**

- The output artefact should be written to a separate shared storage from the inputs. A process separate from the Build Worker should then upload that artefact to an appropriate repository.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-165`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-165)



---



<a id="cnsc-166"></a>

### Pipeline Modification Control | `CNSC-166`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Pipeline modification is only allowed through pipeline as code

**Recommendations**

- The pipeline configuration (pipeline as code) should be immutable and any modification shouldn't be possible. This prevents attackers from interacting and modifying the configuration. This model then requires appropriate authentication and authorization to be in place for the software and configuration of the pipeline


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-166`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-166)



---



<a id="cnsc-167"></a>

### User Role Definition | `CNSC-167`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

User roles are defined

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-167`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-167)



---



<a id="cnsc-168"></a>

### Root of Trust Establishment | `CNSC-168`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Established practices are followed for establishing a root of trust from an offline source

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-168`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-168)



---



<a id="cnsc-169"></a>

### Short-Lived Certificates | `CNSC-169`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Short-lived workload certificates are used

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-169`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-169)



---




<a id="securing-materials"></a>

## Securing Materials

Guidelines for securing materials, including third-party artifact verification, SBOM generation, dependency tracking, vulnerability scanning, and software composition analysis.



<a id="cnsc-173"></a>

### Third-Party Artifact Verification | `CNSC-173`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Third party artefacts and open source libraries are verified

**Recommendations**

- All third party artefacts, open source libraries and any other dependencies should be verified as part of the continuous integration pipeline by validating their checksums against a known good source and validating any cryptographic signatures. Any software ingested must be scanned using Software Composition Analysis (SCA) and pentesting tools to detect whether any vulnerable open-source software is used in the final product.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-173`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-173)



---



<a id="cnsc-174"></a>

### Third-Party SBOM Requirements | `CNSC-174`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

SBOM is required from third party suppliers

**Recommendations**

- Where possible, vendors should be required to provide Software Bills of Materials (SBOMs) containing the explicit details of the software and versions used within the supplied product as it provides a clear and direct link to the dependencies.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-174`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-174)



---



<a id="cnsc-175"></a>

### Dependency Tracking | `CNSC-175`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Dependencies between open source components are tracked

**Recommendations**

- A register should be maintained of a project’s open source components, dependencies and vulnerabilities to help trace any deployed artefacts with new vulnerabilities. One of the most popular open source inventory implementations is OWASP Dependency-Track.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-175`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-175)



---



<a id="cnsc-176"></a>

### Source-Based Library Builds | `CNSC-176`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Libraries are built based upon source code

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-176`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-176)



---



<a id="cnsc-177"></a>

### Trusted Package Sources | `CNSC-177`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Trusted package managers and repositories are defined and prioritized

**Recommendations**

- Organizations should host their own package managers and artefact repositories, and restrict build machines to pull from only those sources.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-177`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-177)



---



<a id="cnsc-178"></a>

### Immutable SBOM Generation | `CNSC-178`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

An immutable SBOM of the code is generated

**Recommendations**

- There are currently two well known SBOM specifications: SPDX and CycloneDX


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-178`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-178)



---



<a id="cnsc-179"></a>

### Software Vulnerability Scanning | `CNSC-179`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Software is scanned for vulnerabilities

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-179`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-179)



---



<a id="cnsc-180"></a>

### License Compliance Scanning | `CNSC-180`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Software is scanned for license implications

**Recommendations**

- Licensing obligations must also be factored into the ingestion process. The Linux Foundation maintains the Open Compliance Program which hosts several tools to ensure released software meets legal and regulatory compliance requirements.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-180`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-180)



---



<a id="cnsc-181"></a>

### Software Composition Analysis | `CNSC-181`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Software composition analysis is run on ingested software

**Recommendations**

- The SCA tool will attempt to use heuristics to identify the direct and transitive dependencies, and can also serve as verification of SBOM content. This data will then be matched against data from a number of data feeds containing vulnerability data to highlight any vulnerabilities in the dependent packages.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-181`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-181)



---




<a id="securing-the-source-code"></a>

## Securing the Source Code

Guidelines for securing the source code, including commit signing, branch protection, secret prevention, access control, MFA enforcement, and automated security scanning.



<a id="cnsc-182"></a>

### Commit and Tag Signing | `CNSC-182`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Commits and tags are signed

**Recommendations**

- GPG keys or S/MIME certificates are used to sign the source code


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-182`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-182)



---



<a id="cnsc-183"></a>

### Branch Protection Attestation | `CNSC-183`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Full attestation and verification is enforced for protected branches

**Recommendations**

- Branch protection is enabled on the mainline and release branches with force push disabled


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-183`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-183)



---



<a id="cnsc-184"></a>

### Secret Commit Prevention | `CNSC-184`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Secrets are not committed to the source code repository unless encrypted

**Recommendations**

- Implement tooling to detect secrets or to prevent certain files from being pushed which may contain plaintext sensitive materials, such as via a .gitignore and/or .gitattributes file, client-side hook (pre-commit), server-side hook (pre-receive or update), and/or as a step in the CI process


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-184`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-184)



---



<a id="cnsc-185"></a>

### Repository Access Definition | `CNSC-185`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Individuals or teams with write access to a repository are defined

**Recommendations**

- Implement codeowners (or equivalent)


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-185`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-185)



---



<a id="cnsc-186"></a>

### Automated Security Scanning | `CNSC-186`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Software security scanning and testing is automated

**Recommendations**

- Security specific scans should be performed, including Static Application Security Tests (SAST) and Dynamic Application Security Tests (DAST). Both the coverage and results of these tests should be published as part of the repository information to help downstream consumers of software better assess the stability, reliability, and/or suitability of a product or library.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-186`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-186)



---



<a id="cnsc-187"></a>

### Contribution Policy Enforcement | `CNSC-187`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Contribution policies are established and adhered to

**Recommendations**

- Define configuration options or configuration rules witthin SCM platforms allow repository administrators to enforce security, hygiene and operational policies.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-187`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-187)



---



<a id="cnsc-188"></a>

### Functional Role Definition | `CNSC-188`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Roles are defined and aligned to functional responsibilities

**Recommendations**

- Define roles by using principle of least privileges to provide access based on function such as Developer, Maintainer, Owner, Reviewer, Approver, and Guest


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-188`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-188)



---



<a id="cnsc-189"></a>

### Four-Eyes Principle | `CNSC-189`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

An independent four-eyes principle is enforced

**Recommendations**

- The author(s) of a request may not also be the approver of the request. At least two reviewers with equal or greater expertise should review & approve the request.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-189`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-189)



---



<a id="cnsc-190"></a>

### Branch Protection Rules | `CNSC-190`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Branch protection rules are used

**Recommendations**

- SCM platforms allow the configuration and restriction of source code operations on individual branches. Protection rules can be used to enforce the usage of pull requests with specified precondition and approval rules, ensuring that a human code review process is followed or an automated status checking of a branch occurs. Additionally, protected branches can be used to disallow dangerous use of force pushes, preventing the overwrite of commit histories and potential obfuscation of code changes.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-190`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-190)



---



<a id="cnsc-191"></a>

### Repository MFA Enforcement | `CNSC-191`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

MFA is enforced for accessing source code repositories

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-191`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-191)



---



<a id="cnsc-192"></a>

### SSH Key Access | `CNSC-192`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

SSH keys are used to provide developers access to source code repositories

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-192`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-192)



---



<a id="cnsc-193"></a>

### Key Rotation Policy | `CNSC-193`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

A key rotation policy is maintained

**Recommendations**

- It is recommended to implement a key rotation policy to ensure that compromised keys will cease to be usable after a certain period of time. When a private key is known to have been compromised, it should be revoked and replaced immediately to shut off access for any unauthorized user. Organizations may also consider using short lived certificates or keys, which reduces the reliance on certificate revocation systems.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-193`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-193)



---



<a id="cnsc-194"></a>

### Ephemeral Credentials | `CNSC-194`
**Originating Document**: `Software Supply Chain Best Practices v1.0`


**Objective**

Short-lived or ephemeral credentials are used for machine and service access

**Recommendations**

- Short-life credential issuance encourages the use of fine grained permissions and automation in provisioning access tokens. For CI/CD pipeline agents, short-lived access tokens should be considered instead of password-based credentials. The use of very short-lived tokens like OAuth 2.0, OpenID Connect, etc., will help to implement more secure access and increase the security assurance.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-194`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-194)



---




<a id="security-assurance"></a>

## Security Assurance

Guidelines for security assurance, including network policies, incident response, platform hardening, threat modeling, identity management, and GitOps security practices.



<a id="cnsc-115"></a>

### East-West Network Policy | `CNSC-115`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Network policies enforce east-west network communication within the container deployment is limited to only that which is authorized for access

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-115`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-115)



---



<a id="cnsc-116"></a>

### Incident Response | `CNSC-116`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Incident response considers cloud native workloads

**Recommendations**

- workloads which may not always conform with some underlying assumptions about node isolation (new pod instances could run on a different server), networking (e.g. IP addresses are assigned dynamically) and immutability (e.g. runtime changes to container are not persisted across restarts)


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-116`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-116)



---



<a id="cnsc-117"></a>

### Incident Monitoring | `CNSC-117`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Incident response accounts for appropriate evidence handling and collection of cloud native workloads

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-117`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-117)



---



<a id="cnsc-118"></a>

### Security Assurance Management | `CNSC-118`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Rootless builds are employed

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-118`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-118)



---



<a id="cnsc-119"></a>

### Workload and Deployment Isolation | `CNSC-119`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Cgroups and system groups are used to isolate workloads and deployments

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-119`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-119)



---



<a id="cnsc-120"></a>

### Mandatory Access Controls | `CNSC-120`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

MAC implementations are employed

**Recommendations**

- SELinux, AppArmor


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-120`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-120)



---



<a id="cnsc-121"></a>

### Threat Modeling and Vulnerability Analysis | `CNSC-121`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Threat model code and infrastructure

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-121`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-121)



---



<a id="cnsc-122"></a>

### Authentication Management | `CNSC-122`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Entities are able to independently authenticate other identities

**Recommendations**

- Public Key Infrastructure


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-122`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-122)



---



<a id="cnsc-123"></a>

### Identity Management | `CNSC-123`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Each entity can create proof of who the identity is

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-123`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-123)



---



<a id="cnsc-124"></a>

### Trusted Components | `CNSC-124`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Orchestrator is running on a trusted OS, BIOS, etc

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-124`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-124)



---



<a id="cnsc-125"></a>

### Security Verification | `CNSC-125`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Orchestrator verifies the claims of a container

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-125`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-125)



---



<a id="cnsc-126"></a>

### Network Policy Management | `CNSC-126`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Orchestrator network policies are used in conjunction with a service mesh

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-126`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-126)



---



<a id="cnsc-196"></a>

### Supply Chain Security Best Practices | `CNSC-196`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Supply chain security best practices are adhered to

**Recommendations**

- The SSCP controls in this document provide the necessary controls for best practices


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-196`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-196)



---



<a id="cnsc-197"></a>

### Repository and Branch Access Control | `CNSC-197`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Access to repository and branches is restricted

**Recommendations**

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-197`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-197)



---



<a id="cnsc-198"></a>

### Git Secret Prevention | `CNSC-198`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Unencrypted credentials or secrets are never stored in the Git repository and sensitive data is blocked from being pushed

**Recommendations**

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-198`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-198)



---



<a id="cnsc-199"></a>

### Commit Identity Enforcement | `CNSC-199`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Strong identity is enforced with GPG Signed Commits for accountability and traceability

**Recommendations**

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-199`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-199)



---



<a id="cnsc-200"></a>

### Linear History Enforcement | `CNSC-200`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Linear history is required and commit history is maintained by disallowing force pushes

**Recommendations**

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-200`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-200)



---



<a id="cnsc-201"></a>

### Branching Policy Enforcement | `CNSC-201`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Branching policy is enforced with main branch protection and code review required before merging

**Recommendations**

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-201`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-201)



---



<a id="cnsc-202"></a>

### Git Tool Security Monitoring | `CNSC-202`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Vulnerabilities are monitored and Git and GitOps tools are kept up to date

**Recommendations**

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-202`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-202)



---



<a id="cnsc-203"></a>

### Repository Credential Management | `CNSC-203`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

SSH keys and Personal Access Tokens are rotated and unauthorized access to Git repositories is blocked

**Recommendations**

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-203`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-203)



---



<a id="cnsc-204"></a>

### Technical Account Management | `CNSC-204`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Dedicated non-user technical accounts are used for access with frequently rotated short-lived credentials

**Recommendations**

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-204`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-204)



---



<a id="cnsc-205"></a>

### Privilege Escalation Prevention | `CNSC-205`
**Originating Document**: `Cloud Native Security Whitepaper v2.0`


**Objective**

Users who can elevate permissions to remove security features are limited to prevent deletion of audit trails and silencing of alerts

**Recommendations**

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-205`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-205)



---




<a id="storage"></a>

## Storage

Guidelines for securing storage, including encryption at rest, data availability, integrity validation, namespace boundaries, access policies, and artifact registry management.



<a id="cnsc-127"></a>

### Control Plane Authentication | `CNSC-127`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Storage control plane management interface requires mutual authentication and TLS for connections

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-127`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-127)



---



<a id="cnsc-128"></a>

### Data Availability Mechanism | `CNSC-128`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Data availability is achieved through parity or mirroring, erasure coding or replicas

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-128`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-128)



---



<a id="cnsc-129"></a>

### Integrity Validation | `CNSC-129`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Hashing and checksums are added to blocks, objects or files

**Recommendations**

- primarily designed to detect and recover from corrupted data, but can also add a layer of protection against the tampering of data.


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-129`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-129)



---



<a id="cnsc-130"></a>

### Data Source Storage Management | `CNSC-130`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Data backup storage locations employ like access controls and security policies to that of the data storage source

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-130`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-130)



---



<a id="cnsc-131"></a>

### System Backup | `CNSC-131`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Secure erasure adhering to OPAL standards is employed for returned or non-functional devices

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-131`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-131)



---



<a id="cnsc-132"></a>

### Encryption of Data at Rest | `CNSC-132`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Encryption at rest considers data path, size, and frequency of access when determining additional security protections and cryptographic algorithms to employ

**Recommendations**

- The encryption may be implemented in the storage client or storage server and granularity of the encryption will vary by system (e.g. per volume, per group or global keys)


**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-132`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-132)



---



<a id="cnsc-133"></a>

### Encryption Requirements | `CNSC-133`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Caching is considered for determining encryption requirements in architectures

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-133`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-133)



---



<a id="cnsc-134"></a>

### Boundary Protection | `CNSC-134`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Namespaces have defined trust boundaries to cordon access to volumes

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-134`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-134)



---



<a id="cnsc-135"></a>

### Security Policy Management | `CNSC-135`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Security policies are used to prevent containers from accessing volume mounts on worker nodes

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-135`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-135)



---



<a id="cnsc-136"></a>

### Security Policy Enforcement | `CNSC-136`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Security policies are used enforce authorized worker node access to volumes

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-136`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-136)



---



<a id="cnsc-137"></a>

### Information Flow Management | `CNSC-137`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Volume UID and GID are inaccessible to containers

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-137`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-137)



---



<a id="cnsc-138"></a>

### Artifact Registry Management | `CNSC-138`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Artifact registry supports OCI artifacts

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-138`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-138)



---



<a id="cnsc-139"></a>

### Signed Artifact Support | `CNSC-139`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Artifact registry supports signed artifacts

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-139`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-139)



---



<a id="cnsc-140"></a>

### Artifact Registry Policy Verification | `CNSC-140`
**Originating Document**:
- `Cloud Native Security Whitepaper v1.0`
- `Cloud Native Security Whitepaper v2.0`



**Objective**

Artifact registry verifies artifacts against organizational policies

**NIST SP 800-53:** [CNSC to NIST SP 800-53 Mapping (`CNSC-140`) →](./cnsc-nist-800-53-mapping#crosswalk-cnsc-140)



---





## Acknowledgements
This representation of the catalog builds upon the original [Cloud Native Security Controls Catalog initiative](https://www.cncf.io/blog/2022/06/07/introduction-to-the-cloud-native-security-controls-catalog/), which produced the [foundational artifact](https://github.com/cloud-native-security-controls/controls-catalog) licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). Content has been reformatted and restructured from the original CSV source.

This catalog is expressed in **Gemara Layer 1** (Guidance Catalog) format, where security objectives are represented as guidelines. See [Gemara Documentation](https://gemara.openssf.org/) for details.

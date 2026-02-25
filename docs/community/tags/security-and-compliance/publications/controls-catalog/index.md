---
title: Cloud Native Security Controls Catalog
sidebar_position: 6
---

<!--
This file is auto-generated. Do not edit manually.

To regenerate this file, run below from the controls-catalog directory:
  go run cmd/catalog/main.go -md index.md
-->

# Cloud Native Security Controls Catalog

This catalog provides a structured framework for implementing security best practices in cloud-native environments.
It synthesizes the foundational principles of the [Cloud Native Security Whitepaper](../publications/security-whitepaper) and the Software Supply Chain Best Practices Paper into discrete, actionable objectives.

> **Note**: While this catalog is historically called the "Cloud Native Security Controls Catalog," these security objectives are expressed using the term **guidelines**. Throughout this document, we use "guidelines" to refer to the individual security recommendations, while "catalog" refers to the overall collection.

Guidelines are organized into Families, each representing a specific security domain. These families help you navigate and understand the scope of security guidelines across different aspects of cloud native systems.

Each entry contains the following components:
- **Guideline ID**: A unique identifier for traceability and mapping.
- **Originating Document**: The source publication (e.g., Cloud Native Security Whitepaper v1.0, Software Supply Chain Best Practices v1.0).
- **Objective**: The high-level security goal or intent of the guideline.
- **Guideline Mappings**: Cross-references to frameworks (e.g., NIST SP800-53r5) to indicate compliance alignment.
- **Recommendations**: Practical, non-binding guidance for implementation.

## Guideline Families

The following families organize guidelines by security domain. Click on any family name to jump to its guidelines:


### Access Control

Guidelines for access control models and identity forwarding. [View guidelines →](#cnsc-1)


### Compute

Guidelines for securing compute infrastructure including bootstrapping, isolation, monitoring, and runtime security. [View guidelines →](#cnsc-216)


### Deploy

Guidelines for securing software deployments, including artifact verification, runtime policy enforcement, freshness validation, update management, logging, and incident response. [View guidelines →](#cnsc-170)


### Develop

Guidelines for secure software development practices including environment segregation, testing, code review, and CI server hardening. [View guidelines →](#cnsc-195)


### Distribute

Guidelines for secure distribution of container images, packages, and artifacts including signing, scanning, and registry security. [View guidelines →](#cnsc-100)


### Securing Artefacts

Guidelines for securing artefacts, including signing, verification, and freshness validation. [View guidelines →](#cnsc-141)


### Securing Build Pipelines

Guidelines for securing build pipelines, ensuring cryptographic guarantees, validation, and secure build environments. [View guidelines →](#cnsc-149)


### Securing Materials

Guidelines for securing materials, including signing, verification, and freshness validation. [View guidelines →](#cnsc-173)


### Securing the Source Code

Guidelines for securing the source code, including signing, verification, and freshness validation. [View guidelines →](#cnsc-182)


### Security Assurance

Guidelines for security assurance, including signing, verification, and freshness validation. [View guidelines →](#cnsc-115)


### Storage

Guidelines for securing storage, including signing, verification, and freshness validation. [View guidelines →](#cnsc-127)



---


## Access Control {#access}

Guidelines for access control models and identity forwarding.


### Runtime Secret Injection {#cnsc-1}

**Guideline ID**: `CNSC-1` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Secrets are injected at runtime

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-5(7) | Authenticator Management |


---


### ABAC and RBAC {#cnsc-10}

**Guideline ID**: `CNSC-10` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

ABAC and RBAC are used

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-3(13) | Access Enforcement |


---


### Authorization and Identity Management {#cnsc-11}

**Guideline ID**: `CNSC-11` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

End user identity is capable of being accepted, consumed, and forwarded on for contextual or dynamic authorization

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7(19) | Boundary Protection |


#### Recommendations

- This can be achieved through the use of identity documents and tokens.


---


### Cluster Authentication Management {#cnsc-12}

**Guideline ID**: `CNSC-12` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

All cluster and workloads operators are authenticated

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-7 | Cryptographic Module Authentication |


---


### Authentication Policy Management {#cnsc-13}

**Guideline ID**: `CNSC-13` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Cluster and workloads operate actions are evaluated against access control policies governing context, purpose, and output

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-7 | Cryptographic Module Authentication |


---


### Multi-factor Authentication {#cnsc-14}

**Guideline ID**: `CNSC-14` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Identity federation uses multi-factor authentication

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-2(1)(2) | Identification and Authentication (organizational Users) |


---


### HSMs Protection of Cryptographic Secrets {#cnsc-15}

**Guideline ID**: `CNSC-15` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

HSMs are used to physically protect cryptographic secrets with an encryption key residing in the HSM

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-4(4) | Information Flow Enforcement |


#### Recommendations

- If this is not possible, software-based credential managers should be used.


---


### Secrets Management {#cnsc-16}

**Guideline ID**: `CNSC-16` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Secrets should have a short expiration period or time to live

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-12 | Information Management and Retention |


#### Recommendations

- Leverage tool-specific capabilities of secret manager


---


### Secrets Lifecycle Management {#cnsc-17}

**Guideline ID**: `CNSC-17` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Time to live and expiration period on secrets is verified to prevent reuse

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-16(3) | Security and Privacy Attributes |


#### Recommendations

- Leverage tool-specific capabilities of secret manager


---


### Secrets Management System {#cnsc-18}

**Guideline ID**: `CNSC-18` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Secrets management systems are highly available

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12(1) | Cryptographic Key Establishment and Management |


---


### Secrets Rotation Management {#cnsc-19}

**Guideline ID**: `CNSC-19` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Long-lived secrets adhere to periodic rotation and revocation

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-12 | Information Management and Retention |


#### Recommendations

- Long-lived secrets are not recommended, but some capabilities require them


---


### Mutual Authentication {#cnsc-2}

**Guideline ID**: `CNSC-2` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Applications and workloads are explicitly authorized to communicate with each other using mutual authentication

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-9 |  |


---


### Secrets Protection {#cnsc-20}

**Guideline ID**: `CNSC-20` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Secrets are distributed through secured communication channels protected commensurate with the level of access or data they are protecting

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-16 | Security and Privacy Attributes |


---


### Cluster Authentication Management {#cnsc-206}

**Guideline ID**: `CNSC-206` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

All cluster and workloads operators are authenticated

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-7 | Cryptographic Module Authentication |


---


### Authentication Policy Management {#cnsc-207}

**Guideline ID**: `CNSC-207` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

cluster and worklods operate actions are evaluated against access control policies governing context, purpose, and output

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-7 | Cryptographic Module Authentication |


---


### Multi-factor Authentication {#cnsc-208}

**Guideline ID**: `CNSC-208` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Identity federation uses multi-factor authentication for human users

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-2(1)(2) | Identification and Authentication (organizational Users) |


---


### HSMs Protection of Cryptographic Secrets {#cnsc-209}

**Guideline ID**: `CNSC-209` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

HSMs are used to physically protect cryptographic secrets with an encryption key residing in the HSM

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-4(4) | Information Flow Enforcement |


#### Recommendations

- If this is not possible, software-based credential managers should be used.


---


### Secret Injection Lifecycle {#cnsc-21}

**Guideline ID**: `CNSC-21` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Secrets injected are runtime are masked or dropped from logs, audit, or system dumps

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AU-9(3) | Protection of Audit Information |


#### Recommendations

- Even short lived secrets may be resused if caught in time by an interested attacker. Logs, audit, and systems dumps (i.e. in-memory shared volumes instead of environment variables) are all areas where runtime injected secrets show up


---


### Secrets Management {#cnsc-210}

**Guideline ID**: `CNSC-210` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Secrets should have a short expiration period or time to live

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-12 | Information Management and Retention |


#### Recommendations

- Leverage tool-specific capabilities of secret manager


---


### Secrets Lifecycle Management {#cnsc-211}

**Guideline ID**: `CNSC-211` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Time to live and expiration period on secrets is verfied to prevent reuse

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-16(3) | Security and Privacy Attributes |


#### Recommendations

- Leverage tool-specific capabilities of secret manager


---


### Secrets Management System {#cnsc-212}

**Guideline ID**: `CNSC-212` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Secrets management systems are highly available

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12(1) | Cryptographic Key Establishment and Management |


---


### Secrets Rotation Management {#cnsc-213}

**Guideline ID**: `CNSC-213` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Long-lived secrets adhere to periodic rotation and revocation

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-12 | Information Management and Retention |


#### Recommendations

- Long-lived secrets are not recommended, but some capabilities require them


---


### Secrets Protection {#cnsc-214}

**Guideline ID**: `CNSC-214` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Secrets are distributed through secured communication channels protected commensurate with the level of access or data they are protecting

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-16 | Security and Privacy Attributes |


---


### Secret Injection Lifecycle {#cnsc-215}

**Guideline ID**: `CNSC-215` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Secrets injected are runtime are masqued or dropped from logs, audit, or system dumps

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AU-9(3) | Protection of Audit Information |


#### Recommendations

- Even short lived secrets may be resused if caught in time by an interested attacker. Logs, audit, and systems dumps (i.e. in-memory shared volumes instead of environment variables) are all areas where runtime injected secrets show up


---


### Cryptographic Key Management {#cnsc-3}

**Guideline ID**: `CNSC-3` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Keys are rotated frequently

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12 | Cryptographic Key Establishment and Management |


---


### Cryptographic Key Lifecycle Management {#cnsc-4}

**Guideline ID**: `CNSC-4` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Key lifespan is short

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12(3) | Cryptographic Key Establishment and Management |


---


### Sensitive Credential Management {#cnsc-5}

**Guideline ID**: `CNSC-5` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Credentials and keys protecting sensitive workloads (health/finance/etc) are generated and managed independent of a cloud service provider

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-2(12) | Identification and Authentication (Organizational Users) |


#### Recommendations

- KMS and HMS are common technologies to achieve this. FIPS 140-2 compliance is strongly suggested. Cloud KMS tends to be FIPS 140-2 Level 2 or greater.


---


### Identification and Authentication {#cnsc-6}

**Guideline ID**: `CNSC-6` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Authentication and authorization are determined independently

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-2(6) | Identification and Authentication (Organizational Users) |


---


### Authentication and Authorization Enforcement {#cnsc-7}

**Guideline ID**: `CNSC-7` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Authentication and authorization are enforced independently

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-2(6) | Identification and Authentication (Organizational Users) |


---


### Continuous System Monitoring {#cnsc-8}

**Guideline ID**: `CNSC-8` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Access control and file permissions are updated in real-time

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4(2) | System Monitoring |


#### Recommendations

- where possible as caching may permit unauthorized access


---


### Privileged-based Authorization {#cnsc-9}

**Guideline ID**: `CNSC-9` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Authorization for workloads is granted based on attributes and roles/permissions previously assigned

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-3(13) | Access Enforcement |


---




## Compute {#compute}

Guidelines for securing compute infrastructure including bootstrapping, isolation, monitoring, and runtime security.


### Compute Bootstrapping Verification {#cnsc-216}

**Guideline ID**: `CNSC-216` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Bootstrapping is employed to verify correct physical and logical location of compute

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7(9) | Software, Firmware, and Information Integrity |


#### Recommendations

- Secure Boot with TPM 2.0 or similar control


---


### Boundary Management {#cnsc-217}

**Guideline ID**: `CNSC-217` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Disparate data sensitive workloads are not run on the same host OS kernel

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7 | Boundary Protection |


#### Recommendations

- There are at least three implementing controls possible: workloads may be separated by running in a separate cluster, on a separate node, or by implementing pods in independent VMs. It is also possible to emulate the kernel via an application kernel (e.g. gvisor)


---


### Runtime Configuration Monitoring {#cnsc-218}

**Guideline ID**: `CNSC-218` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Monitor and detect any changes to the initial configurations made in runtime

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-2(2) | Baseline Configuration, Automation Support for Accuracy and Currency |
| CM-3(7) | Configuration Change Control, Review System Changes |


#### Recommendations

- Preventative controls should be the primary control. Detective controls monitoring filesystem changes should be used to verify primary controls are operating properly.


---


### API Auditing Implementation {#cnsc-219}

**Guideline ID**: `CNSC-219` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

API auditing is enabled with a filter for a specific set of API Groups or verbs

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AU-2 | Event Logging |


#### Recommendations

- API audits of the application, kubernetes API server, and kernel should be implemented.


---


### Compute Bootstrapping Verification {#cnsc-22}

**Guideline ID**: `CNSC-22` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Bootstrapping is employed to verify correct physical and logical location of compute

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7(9) | Software, Firmware, and Information Integrity |


#### Recommendations

- Secure Boot with TPM 2.0 or similar control


---


### Operating System Configuration {#cnsc-220}

**Guideline ID**: `CNSC-220` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Container specific operating systems are in use

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-2 | Baseline Configuration |
| CM-7 | Least Functionality |


#### Recommendations

- a read-only OS with other services disabled. This provides isolation and resource confinement that enables developers to run isolated applications on a shared host kernel


---


### Trust Implementation {#cnsc-221}

**Guideline ID**: `CNSC-221` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

The hardware root of trust is based in a Trusted Platform Module (TPM) or virtual TPM (vTPM)

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


#### Recommendations

- Ensure HW root of trust extends to the host OS kernel, modules, system images, container runtimes, and all software on the system.


---


### Least Privilege {#cnsc-222}

**Guideline ID**: `CNSC-222` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Minimize administrative access to the control plane

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-6 | Least Privilege |


#### Recommendations

- Enure both users and pods have the minimum necessary access


---


### Resource Control Management {#cnsc-223}

**Guideline ID**: `CNSC-223` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Object level and resource requests and limits are controlled through cgroups

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7(16) | Software, Firmware, and Information Integrity, Time Limit on Process Execution Without Supervision |
| SI-7(17) | Software, Firmware, and Information Integrity, Runtime Application Self-protection |


#### Recommendations

- helps prevent exhaustion of node and cluster level resources by one misbehaving workload due to an intentional (e.g., fork bomb attack or cryptocurrency mining) or unintentional (e.g., reading a large file in memory without input validation, horizontal autoscaling to exhaust compute resources) issue


---


### System Alert Monitoring {#cnsc-224}

**Guideline ID**: `CNSC-224` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Systems processing alerts are periodically tuned for false positives

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4(13) | System Monitoring, Analyze Traffic and Event Patterns |


#### Recommendations

- to avoid alert flooding, fatigue, and false negatives after security incidents that were not detected by the system


---


### Control Plane Configuration {#cnsc-225}

**Guideline ID**: `CNSC-225` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

All orchestrator control plane components are configured to communicate via mutual authentication and certificate validation with a periodically rotated certificate

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-3 | Access Enforcement |


#### Recommendations

- In unfederated clusters, the CA should be used exclusively for the current cluster.


---


### Baseline Configured Functionality {#cnsc-226}

**Guideline ID**: `CNSC-226` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Only sanctioned capabilities and system calls (e.g. seccomp filters), are allowed to execute or be invoked in a container by the host operating system

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-2 | Baseline Configuration |
| CM-7 | Least Functionality |


#### Recommendations

- Additional tooling should be installed that go beyond k8s capabilities to limit system calls. E.g. Falco.


---


### Critical Change Management {#cnsc-227}

**Guideline ID**: `CNSC-227` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Changes to critical mount points and files are prevented, monitored, and alerted

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-5 | Access Restrictions for Change |


---


### Runtime Configuration for Change Management {#cnsc-228}

**Guideline ID**: `CNSC-228` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Runtime configuration control prevents changes to binaries, certificates, and remote access configurations

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-5 | Access Restrictions for Change |


---


### Runtime Boundary Protection Management {#cnsc-229}

**Guideline ID**: `CNSC-229` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Runtime configuration prevents ingress and egress network access for containers to only what is required to operate

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7 | Boundary Protection |


---


### Boundary Management {#cnsc-23}

**Guideline ID**: `CNSC-23` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Disparate data sensitive workloads are not run on the same OS kernel

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7 | Boundary Protection |


#### Recommendations

- There are at least three implementing controls possible: workloads may be separated by running in a separate cluster, on a separate node, or by implementing pods in independent VMs. It is also possible to emulate the kernel via an application kernel (e.g. gvisor)


---


### Boundary Protection Management {#cnsc-230}

**Guideline ID**: `CNSC-230` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Policies are defined that restrict communications to only occur between sanctioned microservice pairs

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7 | Boundary Protection |


---


### Policy Enforcement Management {#cnsc-231}

**Guideline ID**: `CNSC-231` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Use a policy agent to control and enforce authorized, signed container images

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-5 | Access Restrictions for Change |


---


### Policy Enforcement Management {#cnsc-232}

**Guideline ID**: `CNSC-232` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Use a policy agent to control provenance assurance for operational workloads

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-5 | Access Restrictions for Change |


---


### Data Trust Management {#cnsc-233}

**Guideline ID**: `CNSC-233` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Use a service mesh that eliminates implicit trust through data-in-motion protection (i.e. confidentiality, integrity, authentication, authorization)

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7 | Boundary Protection |


---


### System Monitoring Components {#cnsc-234}

**Guideline ID**: `CNSC-234` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Use components that detect, track, aggregate and report system calls and network traffic from a container

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4 | System Monitoring |


#### Recommendations

- should be leveraged to look for unexpected or malicious behavior


---


### Dynamic Workload Scanning {#cnsc-235}

**Guideline ID**: `CNSC-235` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Workloads should be dynamically scanned to detect malicious or insidious behavior for which no known occurrence yet exists

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-3 | Malicious Code Protection |


#### Recommendations

- Events such as an extended sleep command that executes data exfiltration from etcd after the workload has been running for X amount of days are not expected in the majority of environments and therefore are not included in security tests. The aspect that workloads can have time or event delayed trojan horses is only detectable by comparing to baseline expected behavior, often discovered during thorough activity and scan monitoring


---


### Continuous Monitoring and Scanning {#cnsc-236}

**Guideline ID**: `CNSC-236` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Environments are continuously scanned to detect new vulnerabilities in workloads

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| RA-5 | Vulnerability Monitoring and Scanning |


#### Recommendations

- Vulnerabilities are constantly being discovered, just because it wasnt vulnerable at deploy, doesn't mean it won't be vulnerable in two weeks


---


### Audit Event Logging {#cnsc-237}

**Guideline ID**: `CNSC-237` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Actionable audit events are generated that correlate/contextualize data from logs into "information" that can drive decision trees/incident response

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AU-3 | Content of Audit Records |


---


### Privilege Management {#cnsc-238}

**Guideline ID**: `CNSC-238` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Segregation of duties and the principle of least privilege is enforced

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-6 | Least Privilege |


---


### Information Integrity {#cnsc-239}

**Guideline ID**: `CNSC-239` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Non-compliant violations are detected based on a pre-configured set of rules defined by the organization's policies

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


---


### Runtime Configuration Monitoring {#cnsc-24}

**Guideline ID**: `CNSC-24` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Monitor and detect any changes to the initial configurations made in runtime

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-2(2) | Baseline Configuration, Automation Support for Accuracy and Currency |
| CM-3(7) | Configuration Change Control, Review System Changes |


#### Recommendations

- Preventative controls should be the primary control. Detective controls monitoring filesystem changes should be used to verify primary controls are operating properly.


---


### Key Management Storage {#cnsc-240}

**Guideline ID**: `CNSC-240` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Native secret stores encrypt with keys from an external Key Management Store (KMS)

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12(3) | Systems and Communication Protection |


---


### Secret Storage Configuration {#cnsc-241}

**Guideline ID**: `CNSC-241` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Native secret stores are not configured for base64 encoding or stored in clear-text in the key-value store by default

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12(3) | Systems and Communication Protection |


#### Recommendations

- Encoding is not encryption


---


### System Monitoring {#cnsc-242}

**Guideline ID**: `CNSC-242` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Network traffic to malicious domains is detected and denied

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4 | System Monitoring |


---


### Sensitive Data Encryption {#cnsc-243}

**Guideline ID**: `CNSC-243` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Use encrypted containers for sensitive sources, methods, and data

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-28 | Protection of Information at Rest |


---


### SBOM Management {#cnsc-244}

**Guideline ID**: `CNSC-244` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Use SBOMs to identify current deployments of vulnerable libraries, dependencies, and packages

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-8 | System Component Inventory |


---


### Functionality Management {#cnsc-245}

**Guideline ID**: `CNSC-245` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Processes must execute only functions explicitly defined in an allow list

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-2 | Baseline Configuration |
| CM-7 | Least Functionality |


---


### Access and Change Restrictions {#cnsc-246}

**Guideline ID**: `CNSC-246` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Functions are not be allowed to make changes to critical file system mount points

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-5 | Access Restrictions for Change |


---


### Access Configuration {#cnsc-247}

**Guideline ID**: `CNSC-247` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Function access is only permitted to sanctioned services

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-2 | Baseline Configuration |
| CM-7 | Least Functionality |


#### Recommendations

- Either through networking restrictions or least privilege in permission models


---


### System Monitoring {#cnsc-248}

**Guideline ID**: `CNSC-248` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Egress network connection is monitored to detect and prevent access to C&C (command and control) and other malicious network domains

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4 | System Monitoring |


---


### System Monitoring Management {#cnsc-249}

**Guideline ID**: `CNSC-249` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Ingress network inspection is employed detect and remove malicious payloads and commands

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4 | System Monitoring |


#### Recommendations

- For instance, SQL injection attacks can be detected using inspection.


---


### API Auditing Implementation {#cnsc-25}

**Guideline ID**: `CNSC-25` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

API auditing is enabled with a filter for a specific set of API Groups or verbs

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AU-2 | Event Logging |


#### Recommendations

- API audits of the application, kubernetes API server, and kernel should be implemented.


---


### System Component Isolation {#cnsc-250}

**Guideline ID**: `CNSC-250` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Serverless functions are run in tenant-based resource or performance isolation for similar data classifications

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7(21) | Boundary Protection, Isolation of System Components |


#### Recommendations

- This may impact the performance due to limitations in the address space available to the isolation environment and should be considered for only the most sensitive workloads.


---


### Operating System Configuration {#cnsc-26}

**Guideline ID**: `CNSC-26` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Container specific operating systems are in use

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-2 | Baseline Configuration |
| CM-7 | Least Functionality |


#### Recommendations

- a read-only OS with other services disabled. This provides isolation and resource confinement that enables developers to run isolated applications on a shared host kernel


---


### Trust Implementation {#cnsc-27}

**Guideline ID**: `CNSC-27` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

The hardware root of trust is based in a Trusted Platform Module (TPM) or virtual TPM (vTPM)

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


#### Recommendations

- Ensure HW root of trust extends to the host OS kernel, modules, system images, container runtimes, and all software on the system.


---


### Least Privilege {#cnsc-28}

**Guideline ID**: `CNSC-28` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Minimize administrative access to the control plane

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-6 | Least Privilege |


#### Recommendations

- Enure both users and pods have the minimum necessary access


---


### Resource Control Management {#cnsc-29}

**Guideline ID**: `CNSC-29` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Object level and resource requests and limits are controlled through cgroups

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7(16) | Software, Firmware, and Information Integrity, Time Limit on Process Execution Without Supervision |
| SI-7(17) | Software, Firmware, and Information Integrity, Runtime Application Self-protection |


#### Recommendations

- helps prevent exhaustion of node and cluster level resources by one misbehaving workload due to an intentional (e.g., fork bomb attack or cryptocurrency mining) or unintentional (e.g., reading a large file in memory without input validation, horizontal autoscaling to exhaust compute resources) issue


---


### System Alert Monitoring {#cnsc-30}

**Guideline ID**: `CNSC-30` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Systems processing alerts are periodically tuned for false positives

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4(13) | System Monitoring, Analyze Traffic and Event Patterns |


#### Recommendations

- to avoid alert flooding, fatigue, and false negatives after security incidents that were not detected by the system


---


### Control Plane Configuration {#cnsc-31}

**Guideline ID**: `CNSC-31` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

All orchestrator control plane components are configured to communicate via mutual authentication and certificate validation with a periodically rotated certificate

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-3 | Access Enforcement |


#### Recommendations

- In unfederated clusters, the CA should be used exclusively for the current cluster.


---


### Baseline Configured Functionality {#cnsc-32}

**Guideline ID**: `CNSC-32` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Only sanctioned capabilities and system calls (e.g. seccomp filters), are allowed to execute or be invoked in a container by the host operating system

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-2 | Baseline Configuration |
| CM-7 | Least Functionality |


#### Recommendations

- Additional tooling should be installed that go beyond k8s capabilities to limit system calls. E.g. Falco.


---


### Critical Change Management {#cnsc-33}

**Guideline ID**: `CNSC-33` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Changes to critical mount points and files are prevented, monitored, and alerted

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-5 | Access Restrictions for Change |


---


### Runtime Configuration for Change Management {#cnsc-34}

**Guideline ID**: `CNSC-34` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Runtime configuration control prevents changes to binaries, certificates, and remote access configurations

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-5 | Access Restrictions for Change |


---


### Runtime Boundary Protection Management {#cnsc-35}

**Guideline ID**: `CNSC-35` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Runtime configuration prevents ingress and egress network access for containers to only what is required to operate

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7 | Boundary Protection |


---


### Boundary Protection Management {#cnsc-36}

**Guideline ID**: `CNSC-36` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Policies are defined that restrict communications to only occur between sanctioned microservice pairs

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7 | Boundary Protection |


---


### Policy Enforcement Management {#cnsc-37}

**Guideline ID**: `CNSC-37` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Use a policy agent to control and enforce authorized, signed container images

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-5 | Access Restrictions for Change |


---


### Policy Enforcement Management {#cnsc-38}

**Guideline ID**: `CNSC-38` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Use a policy agent to control provenance assurance for operational workloads

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-5 | Access Restrictions for Change |


---


### Data Trust Management {#cnsc-39}

**Guideline ID**: `CNSC-39` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Use a service mesh that eliminates implicit trust through data-in-motion encryption (data in transit)

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7 | Boundary Protection |


---


### System Monitoring Components {#cnsc-40}

**Guideline ID**: `CNSC-40` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Use components that detect, track, aggregate and report system calls and network traffic from a container

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4 | System Monitoring |


#### Recommendations

- should be leveraged to look for unexpected or malicious behavior


---


### Dynamic Workload Scanning {#cnsc-41}

**Guideline ID**: `CNSC-41` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Workloads should be dynamically scanned to detect malicious or insidious behavior for which no known occurrence yet exists

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-3 | Malicious Code Protection |


#### Recommendations

- Events such as an extended sleep command that executes data exfiltration from etcd after the workload has been running for X amount of days are not expected in the majority of environments and therefore are not included in security tests. The aspect that workloads can have time or event delayed trojan horses is only detectable by comparing to baseline expected behavior, often discovered during thorough activity and scan monitoring


---


### Continuous Monitoring and Scanning {#cnsc-42}

**Guideline ID**: `CNSC-42` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Environments are continuously scanned to detect new vulnerabilities in workloads

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| RA-5 | Vulnerability Monitoring and Scanning |


#### Recommendations

- Vulnerabilities are constantly being discovered, just because it wasnt vulnerable at deploy, doesn't mean it won't be vulnerable in two weeks


---


### Audit Event Logging {#cnsc-43}

**Guideline ID**: `CNSC-43` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Actionable audit events are generates that correlate/contextualize data from logs into "information" that can drive decision trees/incident response

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AU-3 | Content of Audit Records |


---


### Privilege Management {#cnsc-44}

**Guideline ID**: `CNSC-44` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Segregation of duties and the principle of least privilege is enforced

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-6 | Least Privilege |


---


### Information Integrity {#cnsc-45}

**Guideline ID**: `CNSC-45` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Non-compliant violations are detected based on a pre-configured set of rules that filter violations of the organization's policies

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


---


### Key Management Storage {#cnsc-46}

**Guideline ID**: `CNSC-46` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Native secret stores encrypt with keys from an external Key Management Store (KMS)

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12(3) | Systems and Communication Protection |


---


### Secret Storage Configuration {#cnsc-47}

**Guideline ID**: `CNSC-47` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Native secret stores are not configured for base64 encoding or stored in clear-text in the key-value store by default

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12(3) | Systems and Communication Protection |


#### Recommendations

- Encoding is not encryption


---


### System Monitoring {#cnsc-48}

**Guideline ID**: `CNSC-48` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Network traffic to malicious domains is detected and denied

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4 | System Monitoring |


---


### Sensitive Data Encryption {#cnsc-49}

**Guideline ID**: `CNSC-49` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Use encrypted containers for sensitive sources, methods, and data

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-28 | Protection of Information at Rest |


---


### SBOM Management {#cnsc-50}

**Guideline ID**: `CNSC-50` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Use SBOMs to identify current deployments of vulnerable libraries, dependencies, and packages

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-8 | System Component Inventory |


---


### Functionality Management {#cnsc-51}

**Guideline ID**: `CNSC-51` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Processes must execute only functions explicitly defined in an allow list

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-2 | Baseline Configuration |
| CM-7 | Least Functionality |


---


### Access and Change Restrictions {#cnsc-52}

**Guideline ID**: `CNSC-52` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Functions are not be allowed to make changes to critical file system mount points

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-5 | Access Restrictions for Change |


---


### Access Configuration {#cnsc-53}

**Guideline ID**: `CNSC-53` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Function access is only permitted to sanctioned services

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-2 | Baseline Configuration |
| CM-7 | Least Functionality |


#### Recommendations

- Either through networking restrictions or least privilege in permission models


---


### System Monitoring {#cnsc-54}

**Guideline ID**: `CNSC-54` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Egress network connection is monitored to detect and prevent access to C&C (command and control) and other malicious network domains

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4 | System Monitoring |


---


### System Monitoring Management {#cnsc-55}

**Guideline ID**: `CNSC-55` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Ingress network inspection is employed detect and remove malicious payloads and commands

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4 | System Monitoring |


#### Recommendations

- For instance, SQL injection attacks can be detected using inspection.


---


### System Component Isolation {#cnsc-56}

**Guideline ID**: `CNSC-56` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Serverless functions are run in tenant-based resource or performance isolation for similar data classifications

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7(21) | Boundary Protection, Isolation of System Components |


#### Recommendations

- This may impact the performance due to limitations in the address space available to the isolation environment and should be considered for only the most sensitive workloads.


---




## Deploy {#deploy}

Guidelines for securing software deployments, including artifact verification, runtime policy enforcement, freshness validation, update management, logging, and incident response.


### Artifact Verification {#cnsc-170}

**Guideline ID**: `CNSC-170` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Clients can perform verification of artefacts and associated metadata

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


---


### Freshness Verification {#cnsc-171}

**Guideline ID**: `CNSC-171` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Clients can verify the freshness of files

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


#### Recommendations

- Ensure clients can access latest versions and can veriify if the provided files are out of date


---


### Update Framework {#cnsc-172}

**Guideline ID**: `CNSC-172` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

A framework is used for managing software updates

#### Recommendations

- Consider using The Update Framework (TUF) to enforce the updating of software. TUF is a specification for delivering software updates in a secure, reliable and trusted way


---


### Trust Confirmation {#cnsc-251}

**Guideline ID**: `CNSC-251` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Trust confirmation verifies the image has a valid signature from an authorized source

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SR-4(3) | Provenance, Validate as Genuine and Not Altered |
| SR-4(4) | Provenance, Supply Chain Integrity - Pedigree |


---


### Runtime Policy Enforcement {#cnsc-252}

**Guideline ID**: `CNSC-252` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Image runtime policies are enforced prior to deployment

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7(17) | Software, Firmware, and Information Integrity, Runtime Application Self-Protection |


---


### Image Integrity Verification {#cnsc-253}

**Guideline ID**: `CNSC-253` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Image integrity and signature are verified prior to deployment

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SR-4(3) | Provenance, Validate as Genuine and Not Altered |
| SR-4(4) | Provenance, Supply Chain Integrity - Pedigree |


---


### Application Logging {#cnsc-254}

**Guideline ID**: `CNSC-254` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Applications provide logs regarding authentication, authorization, actions, and failures

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-3 | Configuration Change Control |


---


### Forensics Integration {#cnsc-255}

**Guideline ID**: `CNSC-255` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Forensics capabilities are integrated into an incident response plan and procedures

---


### Behavioral Analysis {#cnsc-256}

**Guideline ID**: `CNSC-256` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

AI, ML, or statistical modeling are used for behavioural and heuristic environment analysis to detect unwanted activities

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-3 | SYSTEM AND INFORMATION INTEGRITY |


---


### Trust Confirmation {#cnsc-57}

**Guideline ID**: `CNSC-57` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Trust confirmation verifies the image has a valid signature from an authorized source

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SR-4(3) | Provenance, Validate as Genuine and Not Altered |
| SR-4(4) | Provenance, Supply Chain Integrity - Pedigree |


---


### Runtime Policy Enforcement {#cnsc-58}

**Guideline ID**: `CNSC-58` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Image runtime policies are enforced prior to deployment

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7(17) | Software, Firmware, and Information Integrity, Runtime Application Self-Protection |


---


### Image Integrity Verification {#cnsc-59}

**Guideline ID**: `CNSC-59` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Image integrity and signature are verified prior to deployment

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SR-4(3) | Provenance, Validate as Genuine and Not Altered |
| SR-4(4) | Provenance, Supply Chain Integrity - Pedigree |


---


### Application Logging {#cnsc-60}

**Guideline ID**: `CNSC-60` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Applications provide logs regarding authentication, authorization, actions, and failures

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-3 | Configuration Change Control |


---


### Forensics Integration {#cnsc-61}

**Guideline ID**: `CNSC-61` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Forensics capabilities are integrated into an incident response plan and procedures

---


### Behavioral Analysis {#cnsc-62}

**Guideline ID**: `CNSC-62` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

AI, ML, or statistical modeling are used for behavioural and heuristic environment analysis

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-3 | System and Information Integrity |


---




## Develop {#develop}

Guidelines for secure software development practices including environment segregation, testing, code review, and CI server hardening.


### Secure Configuration Defaults {#cnsc-195}

**Guideline ID**: `CNSC-195` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Secure configuration is implemented as the default state of the system

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-8(23) | Security and Privacy Engineering Principles, Secure Defaults |


#### Recommendations

- Transitioning towards such a system involves making security a design requirement, inheriting default security configuration and supporting an exception process


---


### Production Environment {#cnsc-257}

**Guideline ID**: `CNSC-257` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Establish a dedicated Production environment

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-3(1) | SYSTEM DEVELOPMENT LIFE CYCLE |


#### Recommendations

- Ensure that production workloads are in a separate, dedicated environment from non-production workloads. In the context of containers, this can mean separate clusters. In the case of VMs, separate networks.


---


### Dynamic Deployments {#cnsc-258}

**Guideline ID**: `CNSC-258` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Leverage Dynamic deployments

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-8(31) | SECURITY AND PRIVACY ENGINEERING PRINCIPLES |


#### Recommendations

- Blue/Green, Alpha/Beta, Canary, red-black deployments


---


### Early Vulnerability Scanning {#cnsc-259}

**Guideline ID**: `CNSC-259` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Integrate vulnerability and configuration scanning in both the IDE and at the CI system during pull request

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11(1) | DEVELOPER TESTING AND EVALUATION |


---


### Environment Segregation {#cnsc-260}

**Guideline ID**: `CNSC-260` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Establish dedicated development, testing, and production environment

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-15 | DEVELOPMENT PROCESS, STANDARDS, AND TOOLS |


---


### Business-Critical Code Testing {#cnsc-261}

**Guideline ID**: `CNSC-261` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Build tests for business-critical code

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | DEVELOPER TESTING AND EVALUATION |


---


### Infrastructure Testing {#cnsc-262}

**Guideline ID**: `CNSC-262` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Build tests for business-critical infrastructure

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | DEVELOPER TESTING AND EVALUATION |


---


### Local Test Execution {#cnsc-263}

**Guideline ID**: `CNSC-263` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Test suite able to be ran locally

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | DEVELOPER TESTING AND EVALUATION |


---


### Shared Test Execution {#cnsc-264}

**Guideline ID**: `CNSC-264` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Test suites should be available to run in a shared environment

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | DEVELOPER TESTING AND EVALUATION |


---


### Code Review Requirements {#cnsc-265}

**Guideline ID**: `CNSC-265` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Implement at least one other non-author reviewer/approver prior to merging

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11(4) | DEVELOPER TESTING AND EVALUATION |


---


### Code Quality {#cnsc-266}

**Guideline ID**: `CNSC-266` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Code should be clean and well commented

---


### Full Infrastructure Testing {#cnsc-267}

**Guideline ID**: `CNSC-267` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Full infrastructure tests are used

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |


---


### Regression Testing {#cnsc-268}

**Guideline ID**: `CNSC-268` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Regression tests are used

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |


---


### Security Regression Testing {#cnsc-269}

**Guideline ID**: `CNSC-269` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Test suites are updated against new and emerging threats and developed into security regressions tests

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | DEVELOPER TESTING AND EVALUATION |


---


### Testing Environment {#cnsc-270}

**Guideline ID**: `CNSC-270` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Establish a dedicated Testing environment

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-3(1) | SYSTEM DEVELOPMENT LIFE CYCLE |


---


### CI Server Isolation {#cnsc-271}

**Guideline ID**: `CNSC-271` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Continuous integration server is isolated and hardened

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-39 | PROCESS ISOLATION |


---


### Threat-Informed Test Development {#cnsc-272}

**Guideline ID**: `CNSC-272` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Use threat model results to determine ROI for test development

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11(2) | DEVELOPER TESTING AND EVALUATION |


---


### Secure Configuration Defaults {#cnsc-273}

**Guideline ID**: `CNSC-273` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Implement secure configuration as the default state of the system

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-8(23) | SECURITY AND PRIVACY ENGINEERING PRINCIPLES |


#### Recommendations

- Transitioning towards such a system involves making security a design requirement, inheriting default security configuration and supporting an exception process


---


### Production Environment {#cnsc-63}

**Guideline ID**: `CNSC-63` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

A dedicated production environment is established

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-3(1) | System Development Life Cycle | Manage preproduction environment |


#### Recommendations

- Ensure that production workloads are in a separate, dedicated environment from non-production workloads. In the context of containers, this can mean separate clusters. In the case of VMs, separate networks.


---


### Dynamic Deployments {#cnsc-64}

**Guideline ID**: `CNSC-64` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Dynamic deployments are leveraged for safer releases

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-8(31) | Security and Privacy Engineering Principles | Secure System Modification |


#### Recommendations

- Blue/Green, Alpha/Beta, Canary, red-black deployments


---


### Early Vulnerability Scanning {#cnsc-65}

**Guideline ID**: `CNSC-65` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Vulnerability and configuration scanning is integrated in the IDE or at the pull request

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11(1) | Developer Testing and Evaluation | Static Code Analysis |


---


### Environment Segregation {#cnsc-66}

**Guideline ID**: `CNSC-66` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Dedicated development, testing, and production environments are established

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-15 | Development Process, Standards, and Tools |


---


### Business-Critical Code Testing {#cnsc-67}

**Guideline ID**: `CNSC-67` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Tests are built for business-critical code

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |


---


### Infrastructure Testing {#cnsc-68}

**Guideline ID**: `CNSC-68` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Tests are built for business-critical infrastructure

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |


---


### Local Test Execution {#cnsc-69}

**Guideline ID**: `CNSC-69` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Test suites are able to be run locally

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |


---


### Shared Test Execution {#cnsc-70}

**Guideline ID**: `CNSC-70` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Test suites are available to run in a shared environment

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |


---


### Code Review Requirements {#cnsc-71}

**Guideline ID**: `CNSC-71` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Two non-author reviewers or approvers are required prior to merging

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11(4) | Developer Testing and Evaluation | Manual Code Reviews |


---


### Code Quality {#cnsc-72}

**Guideline ID**: `CNSC-72` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Code is clean and well commented

---


### Full Infrastructure Testing {#cnsc-73}

**Guideline ID**: `CNSC-73` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Full infrastructure tests are used

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |


---


### Regression Testing {#cnsc-74}

**Guideline ID**: `CNSC-74` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Regression tests are used

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |


---


### Security Regression Testing {#cnsc-75}

**Guideline ID**: `CNSC-75` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Test suites are updated against new and emerging threats and developed into security regression tests

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |


---


### Testing Environment {#cnsc-76}

**Guideline ID**: `CNSC-76` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

A dedicated testing environment is established

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-3(1) | System Development Life Cycle | Manage preproduction environment |


---


### CI Server Isolation {#cnsc-77}

**Guideline ID**: `CNSC-77` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Continuous integration server is isolated

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-39 | Process Isolation |


---


### Threat-Informed Test Development {#cnsc-78}

**Guideline ID**: `CNSC-78` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Threat model results are used to determine ROI for test development

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11(2) | Developer Testing and Evaluation | Threat Modeling and Vulnerability Analyses |


---




## Distribute {#distribute}

Guidelines for secure distribution of container images, packages, and artifacts including signing, scanning, and registry security.


### Registry Authentication {#cnsc-100}

**Guideline ID**: `CNSC-100` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Registries require mutually authenticated TLS for all registry connections

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-3(1) | Cryptographic Bidirectional Authentication |


---


### Image Signing {#cnsc-101}

**Guideline ID**: `CNSC-101` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Image and metadata are signed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


---


### Configuration Signing {#cnsc-102}

**Guideline ID**: `CNSC-102` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Configuration is signed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


---


### Package Signing {#cnsc-103}

**Guideline ID**: `CNSC-103` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Package is signed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


---


### Image Integrity Validation {#cnsc-104}

**Guideline ID**: `CNSC-104` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Integrity of images is validated

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | System and Information Integrity |


---


### Image Vulnerability Scanning {#cnsc-105}

**Guideline ID**: `CNSC-105` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Images are scanned for vulnerabilities and malware

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| RA-5 | Vulnerability Monitoring and Scanning |
| SA-3 | System Development Life Cycle |


---


### Key Revocation {#cnsc-106}

**Guideline ID**: `CNSC-106` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Image signing key revocation is enabled in the event of compromise

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | System and Information Integrity |


---


### Security Update Prioritization {#cnsc-107}

**Guideline ID**: `CNSC-107` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Security updates are prioritized

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-2(3) | System and Information Integrity |


---


### Credential Protection {#cnsc-108}

**Guideline ID**: `CNSC-108` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

HSMs or credential managers are used for protecting credentials

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12(3) | Systems and Communication Protection |


---


### Scanning Remediation {#cnsc-109}

**Guideline ID**: `CNSC-109` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Container image scanning findings are acted upon

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-2(3) | System and Information Integrity |


---


### Compliance Enforcement {#cnsc-110}

**Guideline ID**: `CNSC-110` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Organizational compliance rules are enforced

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| PL-1 | Policy and Procedures |


---


### Infrastructure Hardening {#cnsc-111}

**Guideline ID**: `CNSC-111` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Incremental hardening of the infrastructure is employed

---


### Public Registry Access Control {#cnsc-112}

**Guideline ID**: `CNSC-112` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Pulls from public registries are controlled and only from authorized engineers or internal registries

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-6(3) | Least Privilege |


---


### Image Encryption Management {#cnsc-113}

**Guideline ID**: `CNSC-113` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Image encryption is coupled with key management attestation and/or authorization and credential distribution

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12(2) | Cryptographic Key Establishment and Management | Symmetric and Asymmetric Keys |
| SC-12(3) | Cryptographic Key Establishment and Management | Symmetric and Asymmetric Keys |


#### Recommendations

- This restricts the image to only be deployed to authorized platforms. Container image authorization is useful for compliance use cases such as geo-fencing or export control and digital rights media management


---


### Risk-Based Remediation Prioritization {#cnsc-114}

**Guideline ID**: `CNSC-114` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

At-risk applications are prioritized for remediation by exploit maturity and vulnerable path presence in addition to the CVSS score

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-2(3) | System and Information Integrity |


---


### Signing Key Revocation {#cnsc-274}

**Guideline ID**: `CNSC-274` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Should software artifacts become untrusted due to compromise or other incident, teams should revoke signing keys to ensure repudiation

---


### Staging Registry Management {#cnsc-275}

**Guideline ID**: `CNSC-275` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Artifacts ready for deployment are managed in a staging or pre-prod registry

---


### Container Image Hardening {#cnsc-276}

**Guideline ID**: `CNSC-276` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

container images are hardened following best practices

#### Recommendations

- Images contain least permissions to remain functional, do not allow for shell, do not include unnecessary libraries and dependencies, do not bind mount files in from the host, etc.


---


### Static Application Security Testing {#cnsc-277}

**Guideline ID**: `CNSC-277` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Static application security testing (SAST) is performed

#### Recommendations

- Static analysis is performed by dedicated SAST tools as well as linters


---


### Test Pyramid Adherence {#cnsc-278}

**Guideline ID**: `CNSC-278` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Test suites follow the test pyramid

---


### Private Development Registry {#cnsc-279}

**Guideline ID**: `CNSC-279` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Artifacts undergoing active development are held in a private registery

---


### Manifest Scanning {#cnsc-280}

**Guideline ID**: `CNSC-280` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Scan application manifests in CI pipeline

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| RA-5 | VULNERABILITY MONITORING AND SCANNING |


---


### CI Server Isolation {#cnsc-281}

**Guideline ID**: `CNSC-281` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

CI server's for sensitive workloads are isolated from other workloads

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-39 | PROCESS ISOLATION |


---


### Privileged Build Isolation {#cnsc-282}

**Guideline ID**: `CNSC-282` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Builds requiring elevated privileges must run on dedicated servers

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-39 | PROCESS ISOLATION |


---


### Build Policy Enforcement {#cnsc-283}

**Guideline ID**: `CNSC-283` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Build policies are enforced on the CI pipeline

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-1 | Policy and Procedures |


---


### Pipeline Metadata Signing {#cnsc-284}

**Guideline ID**: `CNSC-284` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Sign pipeline metadata

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY |


---


### Build Stage Verification {#cnsc-285}

**Guideline ID**: `CNSC-285` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Build stages are verified prior to the next stage executing

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


---


### CI Pipeline Scanning {#cnsc-286}

**Guideline ID**: `CNSC-286` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Images are scanned within the CI pipeline

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| RA-5 | Vulnerability Monitoring and Scanning |


---


### Pipeline Compliance Integration {#cnsc-287}

**Guideline ID**: `CNSC-287` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Vulnerability scans are coupled with pipeline compliance rules

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-1 | Policy and Procedures |


#### Recommendations

- Prevent insecure images and artifacts from being deployed


---


### Dynamic Application Security Testing {#cnsc-288}

**Guideline ID**: `CNSC-288` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Dynamic application security testing (DAST) is performed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11(8) | Interactive Application Security Testing |


---


### Application Instrumentation {#cnsc-289}

**Guideline ID**: `CNSC-289` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Application instrumentation is employed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4 | System Monitoring |


---


### Test Traceability {#cnsc-290}

**Guideline ID**: `CNSC-290` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Automated test results map back to requirements

#### Recommendations

- Requirements include feature, function, security, and complaince


---


### Infrastructure Security Testing {#cnsc-291}

**Guideline ID**: `CNSC-291` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Infrastructure security tests must be employed

#### Recommendations

- firewall rules open to the world, overprivileged Identity & Access Management (IAM) policies, unauthenticated endpoints, etc


---


### Security Health Verification {#cnsc-292}

**Guideline ID**: `CNSC-292` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Tests to verify the security health are executed at time of build and at time of deploy

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4 | SYSTEM MONITORING |


#### Recommendations

- to evaluate any changes or regressions that may have occurred throughout the lifecycle.


---


### IaC Policy Controls {#cnsc-293}

**Guideline ID**: `CNSC-293` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

IaC is subject to the same pipeline policy controls as application code

---


### Automated Security Testing {#cnsc-294}

**Guideline ID**: `CNSC-294` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Security testing is automated

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |
| CA-8 | Penetration Testing |


---


### Registry Authentication {#cnsc-295}

**Guideline ID**: `CNSC-295` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Registries require mutually authenticated TLS for all registry connections

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-3(1) | Cryptographic Bidirectional Authentication |


---


### Image Signing {#cnsc-296}

**Guideline ID**: `CNSC-296` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Image and metadata are signed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


---


### Configuration Signing {#cnsc-297}

**Guideline ID**: `CNSC-297` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Workload-related configuration is signed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY |


---


### Package Signing {#cnsc-298}

**Guideline ID**: `CNSC-298` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Workload-related package is signed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY |


---


### Image Integrity Validation {#cnsc-299}

**Guideline ID**: `CNSC-299` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Validate integrity of images

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | SYSTEM & INFORMATION INTEGRITY |


---


### Image Vulnerability Scanning {#cnsc-300}

**Guideline ID**: `CNSC-300` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Scan images for vulnerabilities and malware

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| RA-5 | VULNERABILITY MONITORING AND SCANNING |
| SA-3 | SYSTEM DEVELOPMENT LIFE CYCLE |


---


### Key Revocation {#cnsc-301}

**Guideline ID**: `CNSC-301` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Enable image signing key revokation in the event of compromise

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | SYSTEM & INFORMATION INTEGRITY |


---


### Security Update Prioritization {#cnsc-302}

**Guideline ID**: `CNSC-302` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Security updates are prioritized

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-2(3) | System and Information Integrity |


---


### Credential Protection {#cnsc-303}

**Guideline ID**: `CNSC-303` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

HSMs or credential managers should be used for protecting credentials. If this is not possible, software-based credential managers should be used.

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12(3) | SYSTEMS & COMMUNICATION PROTECTION |


---


### Scanning Remediation {#cnsc-304}

**Guideline ID**: `CNSC-304` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Container image scanning findings are acted upon

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-2(3) | System and Information Integrity |


---


### Compliance Enforcement {#cnsc-305}

**Guideline ID**: `CNSC-305` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Organizational compliance rules are enforced

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| PL-1 | Policy and Procedures |


---


### Infrastructure Hardening {#cnsc-306}

**Guideline ID**: `CNSC-306` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Incremental hardening of the infrastructure is employed

---


### Public Registry Access Control {#cnsc-307}

**Guideline ID**: `CNSC-307` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

pulls from public registries are controlled and only from authorized engineers or internal registries

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-6(3) | Least Privilege |


---


### Image Encryption Management {#cnsc-308}

**Guideline ID**: `CNSC-308` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Image encryption is coupled with key management attestation and/or authorization and credential distribution

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12(2) | Cryptographic Key Establishment and Management | Symmetric and Asymmetric Keys |
| SC-12(3) | Cryptographic Key Establishment and Management | Symmetric and Asymmetric Keys |


#### Recommendations

- This restricts the image to only be deployed to authorized platforms. Container image authorization is useful for compliance use cases such as geo-fencing or export control and digital rights media management


---


### Risk-Based Remediation Prioritization {#cnsc-309}

**Guideline ID**: `CNSC-309` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

At-risk applications are prioritized for remediation by the exploit maturity and vulnerable path presence in addition to the CVSS score

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-2(3) | SYSTEM & INFORMATION INTEGRITY |


---


### Trust Verification {#cnsc-79}

**Guideline ID**: `CNSC-79` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Trust is verified

---


### Staging Registry Management {#cnsc-80}

**Guideline ID**: `CNSC-80` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Artifacts ready for deployment are managed in a staging or pre-prod registry

---


### Container Image Hardening {#cnsc-81}

**Guideline ID**: `CNSC-81` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Container images are hardened following best practices

#### Recommendations

- Images contain least permissions to remain functional, do not allow for shell, do not include unnecessary libraries and dependencies, do not bind mount files in from the host, etc.


---


### Static Application Security Testing {#cnsc-82}

**Guideline ID**: `CNSC-82` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Static application security testing (SAST) is performed

#### Recommendations

- Static analysis is performed by dedicated SAST tools as well as linters


---


### Test Pyramid Adherence {#cnsc-83}

**Guideline ID**: `CNSC-83` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Test suites follow the test pyramid

---


### Private Development Registry {#cnsc-84}

**Guideline ID**: `CNSC-84` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Artifacts undergoing active development are held in a private registry

---


### Manifest Scanning {#cnsc-85}

**Guideline ID**: `CNSC-85` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Application manifests are scanned in CI pipeline

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| RA-5 | Vulnerability Monitoring and Scanning |


---


### CI Server Isolation {#cnsc-86}

**Guideline ID**: `CNSC-86` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

CI servers for sensitive workloads are isolated from other workloads

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-39 | Process Isolation |


---


### Privileged Build Isolation {#cnsc-87}

**Guideline ID**: `CNSC-87` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Builds requiring elevated privileges run on dedicated servers

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-39 | Process Isolation |


---


### Build Policy Enforcement {#cnsc-88}

**Guideline ID**: `CNSC-88` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Build policies are enforced on the CI pipeline

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-1 | Policy and Procedures |


---


### Pipeline Metadata Signing {#cnsc-89}

**Guideline ID**: `CNSC-89` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Pipeline metadata is signed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


---


### Build Stage Verification {#cnsc-90}

**Guideline ID**: `CNSC-90` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Build stages are verified prior to the next stage executing

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and Information Integrity |


---


### CI Pipeline Scanning {#cnsc-91}

**Guideline ID**: `CNSC-91` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Images are scanned within the CI pipeline

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| RA-5 | Vulnerability Monitoring and Scanning |


---


### Pipeline Compliance Integration {#cnsc-92}

**Guideline ID**: `CNSC-92` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Vulnerability scans are coupled with pipeline compliance rules

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-1 | Policy and Procedures |


#### Recommendations

- Prevent insecure images and artifacts from being deployed


---


### Dynamic Application Security Testing {#cnsc-93}

**Guideline ID**: `CNSC-93` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Dynamic application security testing (DAST) is performed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11(8) | Interactive Application Security Testing |


---


### Application Instrumentation {#cnsc-94}

**Guideline ID**: `CNSC-94` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Application instrumentation is employed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4 | System Monitoring |


---


### Test Traceability {#cnsc-95}

**Guideline ID**: `CNSC-95` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Automated test results map back to requirements

#### Recommendations

- Requirements include feature, function, security, and complaince


---


### Infrastructure Security Testing {#cnsc-96}

**Guideline ID**: `CNSC-96` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Infrastructure security tests are employed

#### Recommendations

- firewall rules open to the world, overprivileged Identity & Access Management (IAM) policies, unauthenticated endpoints, etc


---


### Security Health Verification {#cnsc-97}

**Guideline ID**: `CNSC-97` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Tests to verify security health are executed at build and deploy time

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-4 | System Monitoring |


#### Recommendations

- to evaluate any changes or regressions that may have occurred throughout the lifecycle.


---


### IaC Policy Controls {#cnsc-98}

**Guideline ID**: `CNSC-98` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Infrastructure as Code is subject to the same pipeline policy controls as application code

---


### Automated Security Testing {#cnsc-99}

**Guideline ID**: `CNSC-99` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Security testing is automated

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |
| CA-8 | Penetration Testing |


---




## Securing Artefacts {#securing-artefacts}

Guidelines for securing artefacts, including signing, verification, and freshness validation.


### Build Process Attestation {#cnsc-141}

**Guideline ID**: `CNSC-141` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Every step in the build process is signed and attested for process integrity

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-1 | Policy and Procedures |
| SI-7 | Software, Firmware, and Information Integrity |


#### Recommendations

- The signing of artefacts should be performed at each stage of its life cycle. The final artefact bundle should include these collective signatures and itself be signed to give integrity to the completed artefact and all its associated metadata.


---


### Build Signature Verification {#cnsc-142}

**Guideline ID**: `CNSC-142` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Every step in the build process verifies previously generated signatures

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-1 | Policy and Procedures |
| SI-7 | Software, Firmware, and Information Integrity |


#### Recommendations

- The integrity and provenance of images, deployment configuration, and application packages included in artefacts should all be validated using the signatures generated by each step in its build process to ensure compliance


---


### Artifact Signing Framework {#cnsc-143}

**Guideline ID**: `CNSC-143` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

A framework is used to manage signing of artefacts

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-5 | Authenticator Management |


#### Recommendations

- Consider TUF/notary to sign OCI images. Notary makes use of a “root-of-trust” model to delegate trust from a single root to the individual teams or developers who sign artefacts. It uses additional metadata to allow clients to verify the freshness of content in a repository and protect against common attacks on update systems48. Clients can make use of public keys to verify the contents of the repository.


---


### Attestation Store {#cnsc-144}

**Guideline ID**: `CNSC-144` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

A store is used to manage attestations

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-4(6) | Information Flow Enforcement, Metadata |


#### Recommendations

- Consider storing in-toto attestations in OCI registries alongside the image. Generated in-toto metadata needs to be stored and tracked for which a database or a dedicated store such as Grafeas can be used.


---


### Certification Authorization {#cnsc-145}

**Guideline ID**: `CNSC-145` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Artefacts any given party is authorized to certify are limited

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-6 | Least Privilege |


#### Recommendations

- Trust should not be granted universally or indefinitely. Artefacts or metadata that a given party is trusted to certify should be restricted using selective trust delegations. Trust must expire at predefined intervals, unless renewed as weel as a party must only be trusted to perform the tasks assigned to it to ensure compartmentatlization


---


### Key Rotation and Revocation {#cnsc-146}

**Guideline ID**: `CNSC-146` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Rotation and revocation of private keys is supported

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12 | Cryptographic Key Establishment and Management |


#### Recommendations

- The system must be prepared for when, not if, its private keys are compromised. The ability to rotate and revoke private keys must be built into the distribution mechanism. Additionally, multiple keys must be used for different tasks or roles, and a threshold of keys must be required for important roles. Finally, minimal trust must be placed in high-risk keys like those that are stored online or used in automated roles.


---


### OCI Registry Support {#cnsc-147}

**Guideline ID**: `CNSC-147` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

A container registry that supports OCI image-spec images is used

#### Recommendations

- An internal image registry should be deployed and configured to support internal artefact distribution with the security properties described in this section.


---


### Artifact Encryption {#cnsc-148}

**Guideline ID**: `CNSC-148` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Artefacts are encrypted before distribution and only authorized platforms have decryption capabilities

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-28(1) | Protection of Information at Rest, Cryptographic Protection |
| SC-13 | Cryptographic Protection |
| SC-8 | Transmission Confidentiality and Integrity |
| IA-5 | Authenticator Management |
| SC-12 | Cryptographic Key Establishment and Management |


#### Recommendations

- Ensure contents of the artefact remain confidential in transit and at rest, until it is consumed. These artefacts can be encrypted so that they are accessible by authorized parties, such as the clusters, vulnerability scanners, etc. t is recommended organizations use key management and distribution systems with identity and attestation mechanisms (e.g. SPIFFE/SPIRE)


---




## Securing Build Pipelines {#securing-build-pipelines}

Guidelines for securing build pipelines, ensuring cryptographic guarantees, validation, and secure build environments.


### Cryptographic Policy Guarantee {#cnsc-149}

**Guideline ID**: `CNSC-149` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Policy adherence is cryptographically guaranteed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-3(6) | Configuration Change Control |


#### Recommendations

- The presence and output of each build step should be attested during the build. The CNCF maintains the in-toto project that can be used to secure a chain of pipeline stages end-to-end with cryptographic guarantees. Build metadata should be evaluated against the policy template by using tools such as Open Policy Agent.


---


### Environment and Dependency Validation {#cnsc-150}

**Guideline ID**: `CNSC-150` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Environments and dependencies are validated before usage

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-3(2) | Configuration Change Control |


#### Recommendations

- The build environment’s sources and dependencies must come from a secure, trusted source of truth. Checksums and any signatures should be validated both in the downloading or ingestion process, and again by the build worker. This should include validating package manager signatures, checking out specific Git commit hashes, and verifying SHA sums of input sources and binaries. After completing this validation, the downloading process should sign all binaries or libraries it is adding to the secure source


---


### Build Worker Runtime Security {#cnsc-151}

**Guideline ID**: `CNSC-151` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Runtime security of build workers is validated

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-3(4) |  |


#### Recommendations

- Out-of-band verification of runtime environment security, as defined by execution of policies using tools such as seccomp, AppArmor, and SELinux, provides defense in depth against attacks on build infrastructure. High privilege kernel capabilities such as debugger, device, and network attachments should be restricted and monitored.


---


### Reproducible Builds {#cnsc-152}

**Guideline ID**: `CNSC-152` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Build artefacts are validated through verifiably reproducible builds

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-3(4) |  |


#### Recommendations

- A verifiably reproducible build is a build process where, given a source code commit hash and a set of build instructions, an end user should be able to reproduce the built artefact bit for bit.


---


### External Requirement Verification {#cnsc-153}

**Guideline ID**: `CNSC-153` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

External requirements from the build process are locked and verified

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-3(2) |  |


---


### Build Determinism {#cnsc-154}

**Guideline ID**: `CNSC-154` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Sources of non-determinism are found and eliminated

#### Recommendations

- Reproducible-builds.org documents and offers solutions for many of these things. Diffoscope41 can be used to dig in and find the cause of differences when tracking down sources of non-determinism.


---


### Build Environment Recording {#cnsc-155}

**Guideline ID**: `CNSC-155` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

The build environment is recorded

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-3(1) |  |


#### Recommendations

- Ensure best practices outlined in cloud native security paper are followed to deploy a secure orchestration layer


---


### Build Environment Automation {#cnsc-156}

**Guideline ID**: `CNSC-156` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Creation of the build environment is automated

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-3(3) |  |


---


### Build Distribution {#cnsc-157}

**Guideline ID**: `CNSC-157` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Builds are distributed across different infrastructure

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-3(3) |  |


---


### Pipeline as Code {#cnsc-158}

**Guideline ID**: `CNSC-158` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Build and related CI/CD steps are automated through a pipeline delivered as code

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-3 | System Development Life Cycle |


---


### Pipeline Standardization {#cnsc-159}

**Guideline ID**: `CNSC-159` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Pipelines are standardized across projects

---


### Software Factory Platform {#cnsc-160}

**Guideline ID**: `CNSC-160` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

A secured orchestration platform is provisioned to host the software factory

---


### Single-Use Build Workers {#cnsc-161}

**Guideline ID**: `CNSC-161` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Build workers are single use

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-2 | Account Management |


---


### Software Factory Network Isolation {#cnsc-162}

**Guideline ID**: `CNSC-162` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Software factory has minimal network connectivity

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7(3) | Boundary Protection |


#### Recommendations

- The software factory should have no network connectivity other than to connect to the trusted sources of hardened source code, the dependency repository and code signing infrastructure.


---


### Build Worker Duty Segregation {#cnsc-163}

**Guideline ID**: `CNSC-163` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Duties of each build worker are segregated

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-5 | Separation of Duties |


---


### Build Worker Environment Control {#cnsc-164}

**Guideline ID**: `CNSC-164` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Build worker environment and commands are passed in

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-2(2) | Baseline Configuration |


#### Recommendations

- Inorder to limit hostile tooling and persistent impants from attackers, a Build Worker should start with a clean and isolated environmment. It should not be able to pull its own environment. Ensure environment variables and commands are explicitly passed to avoid any complicated and opaque build process


---


### Secured Output Storage {#cnsc-165}

**Guideline ID**: `CNSC-165` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Output is written to a separate secured storage repo

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AU-9(2) | Protection of Audit Information |


#### Recommendations

- The output artefact should be written to a separate shared storage from the inputs. A process separate from the Build Worker should then upload that artefact to an appropriate repository.


---


### Pipeline Modification Control {#cnsc-166}

**Guideline ID**: `CNSC-166` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Pipeline modification is only allowed through pipeline as code

#### Recommendations

- The pipeline configuration (pipeline as code) should be immutable and any modification shouldn't be possible. This prevents attackers from interacting and modifying the configuration. This model then requires appropriate authentication and authorization to be in place for the software and configuration of the pipeline


---


### User Role Definition {#cnsc-167}

**Guideline ID**: `CNSC-167` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

User roles are defined

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-2 | Account Management |


---


### Root of Trust Establishment {#cnsc-168}

**Guideline ID**: `CNSC-168` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Established practices are followed for establishing a root of trust from an offline source

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-17 | Public Key Infrastructure Certificates |


---


### Short-Lived Certificates {#cnsc-169}

**Guideline ID**: `CNSC-169` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Short-lived workload certificates are used

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-23(5) | Session Authenticity |


---




## Securing Materials {#securing-materials}

Guidelines for securing materials, including signing, verification, and freshness validation.


### Third-Party Artifact Verification {#cnsc-173}

**Guideline ID**: `CNSC-173` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Third party artefacts and open source libraries are verified

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |


#### Recommendations

- All third party artefacts, open source libraries and any other dependencies should be verified as part of the continuous integration pipeline by validating their checksums against a known good source and validating any cryptographic signatures. Any software ingested must be scanned using Software Composition Analysis (SCA) and pentesting tools to detect whether any vulnerable open-source software is used in the final product.


---


### Third-Party SBOM Requirements {#cnsc-174}

**Guideline ID**: `CNSC-174` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

SBOM is required from third party suppliers

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-8 | Information System Component Inventory |


#### Recommendations

- Where possible, vendors should be required to provide Software Bills of Materials (SBOMs) containing the explicit details of the software and versions used within the supplied product as it provides a clear and direct link to the dependencies.


---


### Dependency Tracking {#cnsc-175}

**Guideline ID**: `CNSC-175` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Dependencies between open source components are tracked

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-10 | Software Usage Restrictions |


#### Recommendations

- A register should be maintained of a project’s open source components, dependencies and vulnerabilities to help trace any deployed artefacts with new vulnerabilities. One of the most popular open source inventory implementations is OWASP Dependency-Track.


---


### Source-Based Library Builds {#cnsc-176}

**Guideline ID**: `CNSC-176` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Libraries are built based upon source code

---


### Trusted Package Sources {#cnsc-177}

**Guideline ID**: `CNSC-177` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Trusted package managers and repositories are defined and prioritized

#### Recommendations

- Organizations should host their own package managers and artefact repositories, and restrict build machines to pull from only those sources.


---


### Immutable SBOM Generation {#cnsc-178}

**Guideline ID**: `CNSC-178` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

An immutable SBOM of the code is generated

#### Recommendations

- There are currently two well known SBOM specifications: SPDX34 and CycloneDX


---


### Software Vulnerability Scanning {#cnsc-179}

**Guideline ID**: `CNSC-179` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Software is scanned for vulnerabilities

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| RA-5 | Vulnerability Monitoring and Scanning |


---


### License Compliance Scanning {#cnsc-180}

**Guideline ID**: `CNSC-180` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Software is scanned for license implications

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-10 | Software Usage Restrictions |


#### Recommendations

- Licensing obligations must also be factored into the ingestion process. The Linux Foundation maintains the Open Compliance Program36 which hosts several tools to ensure released software meets legal and regulatory compliance requirements.


---


### Software Composition Analysis {#cnsc-181}

**Guideline ID**: `CNSC-181` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Software composition analysis is run on ingested software

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11(1)(8) | Developer Testing and Evaluation |


#### Recommendations

- The SCA tool will attempt to use heuristics to identify the direct and transitive dependencies, and can also serve as verification of SBOM content. This data will then be matched against data from a number of data feeds containing vulnerability data to highlight any vulnerabilities in the dependent packages.


---




## Securing the Source Code {#securing-the-source-code}

Guidelines for securing the source code, including signing, verification, and freshness validation.


### Commit and Tag Signing {#cnsc-182}

**Guideline ID**: `CNSC-182` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Commits and tags are signed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-7 | Software, Firmware, and information integrity |


#### Recommendations

- GPG keys or S/MIME certificates are used to sign the source code


---


### Branch Protection Attestation {#cnsc-183}

**Guideline ID**: `CNSC-183` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Full attestation and verification is enforced for protected branches

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-6(3) | Least Privilege |


#### Recommendations

- Branch protection is enabled on the mainline and release branches with force push disabled


---


### Secret Commit Prevention {#cnsc-184}

**Guideline ID**: `CNSC-184` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Secrets are not committed to the source code repository unless encrypted

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-12(3) | Systems and Communication Protection |


#### Recommendations

- Implement tooling to detect secrets or to prevent certain files from being pushed which may contain plaintext sensitive materials, such as via a .gitignore and/or .gitattributes file, client-side hook (pre-commit), server-side hook (pre-receive or update), and/or as a step in the CI process


---


### Repository Access Definition {#cnsc-185}

**Guideline ID**: `CNSC-185` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Individuals or teams with write access to a repository are defined

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| PL-1 | Policy and Procedures |


#### Recommendations

- Implement codeowners (or equivalent)


---


### Automated Security Scanning {#cnsc-186}

**Guideline ID**: `CNSC-186` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Software security scanning and testing is automated

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| RA-5 | Vulnerability Monitoring and Scanning |


#### Recommendations

- Security specific scans should be performed, including Static Application Security Tests (SAST) and Dynamic Application Security Tests (DAST). Both the coverage and results of these tests should be published as part of the repository information to help downstream consumers of software better assess the stability, reliability, and/or suitability of a product or library.


---


### Contribution Policy Enforcement {#cnsc-187}

**Guideline ID**: `CNSC-187` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Contribution policies are established and adhered to

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| PL-1 | Policy and Procedures |


#### Recommendations

- Define configuration options or configuration rules witthin SCM platforms allow repository administrators to enforce security, hygiene and operational policies.


---


### Functional Role Definition {#cnsc-188}

**Guideline ID**: `CNSC-188` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Roles are defined and aligned to functional responsibilities

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| PL-1 | Policy and Procedures |


#### Recommendations

- Define roles by using principle of least privileges to provide access based on function such as Developer, Maintainer, Owner, Reviewer, Approver, and Guest


---


### Four-Eyes Principle {#cnsc-189}

**Guideline ID**: `CNSC-189` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

An independent four-eyes principle is enforced

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11 | Developer Testing and Evaluation |


#### Recommendations

- The author(s) of a request may not also be the approver of the request. At least two reviewers with equal or greater expertise should review & approve the request.


---


### Branch Protection Rules {#cnsc-190}

**Guideline ID**: `CNSC-190` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Branch protection rules are used

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-8 | Security Engineering Principles |


#### Recommendations

- SCM platforms allow the configuration and restriction of source code operations on individual branches. Protection rules can be used to enforce the usage of pull requests with specified precondition and approval rules, ensuring that a human code review process is followed or an automated status checking of a branch occurs. Additionally, protected branches can be used to disallow dangerous use of force pushes26, preventing the overwrite of commit histories and potential obfuscation of code changes.


---


### Repository MFA Enforcement {#cnsc-191}

**Guideline ID**: `CNSC-191` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

MFA is enforced for accessing source code repositories

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-2(1) | Identification and Authentication (organizational Users) |


---


### SSH Key Access {#cnsc-192}

**Guideline ID**: `CNSC-192` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

SSH keys are used to provide developers access to source code repositories

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-1 | Remote Access |


---


### Key Rotation Policy {#cnsc-193}

**Guideline ID**: `CNSC-193` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

A key rotation policy is maintained

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-2(1) | Prerequisites and criteria for group and role membership are defined. |


#### Recommendations

- It is recommended to implement a key rotation policy to ensure that compromised keys will cease to be usable after a certain period of time. When a private key is known to have been compromised, it should be revoked and replaced immediately to shut off access for any unauthorized user. Organizations may also consider using short lived certificates or keys, which reduces the reliance on certificate revocation systems.


---


### Ephemeral Credentials {#cnsc-194}

**Guideline ID**: `CNSC-194` | **Originating Document**: `Software Supply Chain Best Practices v1.0`

#### Objective

Short-lived or ephemeral credentials are used for machine and service access

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-2(1) | Usage of automated mechanisms to create, enable, modify, disable, and remove accounts. |


#### Recommendations

- Short-life credential issuance encourages the use of fine grained permissions and automation in provisioning access tokens. For CI/CD pipeline agents, short-lived access tokens should be considered instead of password-based credentials. The use of very short-lived tokens like OAuth 2.0, OpenID Connect, etc., will help to implement more secure access and increase the security assurance.


---




## Security Assurance {#security-assurance}

Guidelines for security assurance, including signing, verification, and freshness validation.


### East-West Network Policy {#cnsc-115}

**Guideline ID**: `CNSC-115` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Network policies enforce east-west network communication within the container deployment is limited to only that which is authorized for access

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-6(3) | Least Privilege, Network Access to Privileged Commands |


---


### Incident Response {#cnsc-116}

**Guideline ID**: `CNSC-116` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Incident response considers cloud native workloads

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IR-4 | Incident Handling, Automated Incident Handling Processes |
| IR-4(5) | Incident Handling, Automated Disabling of System |
| CA-7 | Continuous Monitoring |


#### Recommendations

- workloads which may not always conform with some underlying assumptions about node isolation (new pod instances could run on a different server), networking (e.g. IP addresses are assigned dynamically) and immutability (e.g. runtime changes to container are not persisted across restarts)


---


### Incident Monitoring {#cnsc-117}

**Guideline ID**: `CNSC-117` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Incident response accounts for appropriate evidence handling and collection of cloud native workloads

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IR-5(1) | Incident Monitoring, Automated Tracking, Data Collection, and Analysis |


---


### Security Assurance Management {#cnsc-118}

**Guideline ID**: `CNSC-118` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Rootless builds are employed

---


### Workload and Deployment Isolation {#cnsc-119}

**Guideline ID**: `CNSC-119` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Cgroups and system groups are used to isolate workloads and deployments

---


### Mandatory Access Controls {#cnsc-120}

**Guideline ID**: `CNSC-120` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

MAC implementations are employed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-3(3) | Access Enforcement, Mandatory Access Control |


#### Recommendations

- SELinux, AppArmor


---


### Threat Modeling and Vulnerability Analysis {#cnsc-121}

**Guideline ID**: `CNSC-121` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Threat model code and infrastructure

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11(2) | Developer Testing and Evaluation, Threat Modeling and Vulnerability Analyses |


---


### Authentication Management {#cnsc-122}

**Guideline ID**: `CNSC-122` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Entities are able to independently authenticate other identities

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-9 | Service Identification and Authentication |


#### Recommendations

- Public Key Infrastructure


---


### Identity Management {#cnsc-123}

**Guideline ID**: `CNSC-123` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Each entity can create proof of who the identity is

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-9 | Service Identification and Authentication |


---


### Trusted Components {#cnsc-124}

**Guideline ID**: `CNSC-124` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Orchestrator is running on a trusted OS, BIOS, etc

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-14 | Signed Components |


---


### Security Verification {#cnsc-125}

**Guideline ID**: `CNSC-125` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Orchestrator verifies the claims of a container

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-6 | Security and Privacy Function Verification |


---


### Network Policy Management {#cnsc-126}

**Guideline ID**: `CNSC-126` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Orchestrator network policies are used in conjunction with a service mesh

---


### Supply Chain Security Best Practices {#cnsc-196}

**Guideline ID**: `CNSC-196` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Supply chain security best practices are adhered to

#### Recommendations

- The SSCP controls in this document provide the necessary controls for best practices


---


### Repository and Branch Access Control {#cnsc-197}

**Guideline ID**: `CNSC-197` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Access to repository and branches is restricted

#### Recommendations

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Git Secret Prevention {#cnsc-198}

**Guideline ID**: `CNSC-198` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Unencrypted credentials or secrets are never stored in the Git repository and sensitive data is blocked from being pushed

#### Recommendations

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Commit Identity Enforcement {#cnsc-199}

**Guideline ID**: `CNSC-199` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Strong identity is enforced with GPG Signed Commits for accountability and traceability

#### Recommendations

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Linear History Enforcement {#cnsc-200}

**Guideline ID**: `CNSC-200` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Linear history is required and commit history is maintained by disallowing force pushes

#### Recommendations

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Branching Policy Enforcement {#cnsc-201}

**Guideline ID**: `CNSC-201` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Branching policy is enforced with main branch protection and code review required before merging

#### Recommendations

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Git Tool Security Monitoring {#cnsc-202}

**Guideline ID**: `CNSC-202` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Vulnerabilities are monitored and Git and GitOps tools are kept up to date

#### Recommendations

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Repository Credential Management {#cnsc-203}

**Guideline ID**: `CNSC-203` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

SSH keys and Personal Access Tokens are rotated and unauthorized access to Git repositories is blocked

#### Recommendations

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Technical Account Management {#cnsc-204}

**Guideline ID**: `CNSC-204` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Dedicated non-user technical accounts are used for access with frequently rotated short-lived credentials

#### Recommendations

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Privilege Escalation Prevention {#cnsc-205}

**Guideline ID**: `CNSC-205` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Users who can elevate permissions to remove security features are limited to prevent deletion of audit trails and silencing of alerts

#### Recommendations

- The 'Securing the Source Code' SSCP controls provide the necessary GitOps best practices


---


### East-West Network Policy {#cnsc-310}

**Guideline ID**: `CNSC-310` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Network policies enforce east-west network communication within the container deployment is limited to only that which is authorized for access

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-6(3) | Least Privilege, Network Access to Privileged Commands |


---


### Incident Response {#cnsc-311}

**Guideline ID**: `CNSC-311` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Incident reponse considers cloud native workloads

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IR-4 | INCIDENT HANDLING |
| IR-4(5) | INCIDENT HANDLING |
| CA-7 | CONTINUOUS MONITORING |


#### Recommendations

- workloads which may not always conform with some underlying assumptions about node isolation (new pod instances could run on a different server), networking (e.g. IP addresses are assigned dynamically) and immutability (e.g. runtime changes to container are not persisted across restarts)


---


### Incident Monitoring {#cnsc-312}

**Guideline ID**: `CNSC-312` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Incident response accounts for appropriate evidence handling and collection of coud native workloads

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IR-5(1) | INCIDENT MONITORING |


---


### Security Assurance Management {#cnsc-313}

**Guideline ID**: `CNSC-313` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Rootless builds are employed

---


### Workload and Deployment Isolation {#cnsc-314}

**Guideline ID**: `CNSC-314` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

cgroups and system groups are used to isolate workloads and deployments

---


### Mandatory Access Controls {#cnsc-315}

**Guideline ID**: `CNSC-315` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

MAC implementations are employed

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-3(3) | Access Enforcement, Mandatory Access Control |


#### Recommendations

- SELinux, AppArmor


---


### Threat Modeling and Vulnerability Analysis {#cnsc-316}

**Guideline ID**: `CNSC-316` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Threat model code and infrastructure

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-11(2) | Developer Testing and Evaluation, Threat Modeling and Vulnerability Analyses |


---


### Authentication Management {#cnsc-317}

**Guideline ID**: `CNSC-317` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Entities are able to independently authenticate other identities

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-9 | Service Identification and Authentication |


#### Recommendations

- Public Key Infrastructure


---


### Identity Management {#cnsc-318}

**Guideline ID**: `CNSC-318` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Each entity can create proof of who the identity is

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| IA-9 | Service Identification and Authentication |


---


### Trusted Components {#cnsc-319}

**Guideline ID**: `CNSC-319` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Orchestrator is running on an a trusted OS, BIOS, etc

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-14 | SIGNED COMPONENTS |


---


### Security Verification {#cnsc-320}

**Guideline ID**: `CNSC-320` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Orchestrator verifies the claims of a container

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-6 | Security and Privacy Function Verification |


---


### Network Policy Management {#cnsc-321}

**Guideline ID**: `CNSC-321` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Orchestrator network policies are used in conjunction with a service mesh

---


### Supply Chain Security Best Practices {#cnsc-322}

**Guideline ID**: `CNSC-322` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Adhere to supply chain security best practices

#### Recommendations

- The SSCP controls in this document provide the necessary controls for best practices


---


### Repository and Branch Access Control {#cnsc-323}

**Guideline ID**: `CNSC-323` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Restrict access to repository and branches

#### Recommendations

- The 'Security the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Git Secret Prevention {#cnsc-324}

**Guideline ID**: `CNSC-324` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Never store unencrypted credentials or secrets in the Git repository and block sensitive data being pushed to Git

#### Recommendations

- The 'Security the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Commit Identity Enforcement {#cnsc-325}

**Guideline ID**: `CNSC-325` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Enforce strong identity with GPG Signed Commits, to give accountability and traceability

#### Recommendations

- The 'Security the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Linear History Enforcement {#cnsc-326}

**Guideline ID**: `CNSC-326` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Require linear history and maintain a commit history by disallowing force pushes

#### Recommendations

- The 'Security the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Branching Policy Enforcement {#cnsc-327}

**Guideline ID**: `CNSC-327` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Enforce branching policy. Especially protect the main branch and require code review before merging

#### Recommendations

- The 'Security the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Git Tool Security Monitoring {#cnsc-328}

**Guideline ID**: `CNSC-328` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Monitor for vulnerabilities, and keep Git and GitOps tools up to date

#### Recommendations

- The 'Security the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Repository Credential Management {#cnsc-329}

**Guideline ID**: `CNSC-329` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Rotate SSH keys and Personal Access Tokens, block unauthorized access to Git repositories

#### Recommendations

- The 'Security the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Technical Account Management {#cnsc-330}

**Guideline ID**: `CNSC-330` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Utilize a dedicated non-user technical account for access where credentials are frequently rotated and short-lived

#### Recommendations

- The 'Security the Source Code' SSCP controls provide the necessary GitOps best practices


---


### Privilege Escalation Prevention {#cnsc-331}

**Guideline ID**: `CNSC-331` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Limit users who can elevate permissions to remove security features to cover their tracks via deletion of audit trails and silencing of alerts

#### Recommendations

- The 'Security the Source Code' SSCP controls provide the necessary GitOps best practices


---




## Storage {#storage}

Guidelines for securing storage, including signing, verification, and freshness validation.


### Control Plane Authentication {#cnsc-127}

**Guideline ID**: `CNSC-127` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Storage control plane management interface requires mutual authentication and TLS for connections

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-8 | Transmission Confidentiality and Integrity |


---


### Data Availability Mechanism {#cnsc-128}

**Guideline ID**: `CNSC-128` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Data availability is achieved through parity or mirroring, erasure coding or replicas

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-13 | Predictable Failure Prevention |


---


### Integrity Validation {#cnsc-129}

**Guideline ID**: `CNSC-129` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Hashing and checksums are added to blocks, objects or files

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-7 | Least Functionality |
| SI-7 | Software, Firmware, and Information Integrity |


#### Recommendations

- primarily designed to detect and recover from corrupted data, but can also add a layer of protection against the tampering of data.


---


### Data Source Storage Management {#cnsc-130}

**Guideline ID**: `CNSC-130` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Data backup storage locations employ like access controls and security policies to that of the data storage source

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-9 | External System Services |
| SC-30 | Concealment and Misdirection |


---


### System Backup {#cnsc-131}

**Guideline ID**: `CNSC-131` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Secure erasure adhering to OPAL standards is employed for returned or non-functional devices

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CP-9 | System Backup |
| MP-6 | Media Sanitization |


---


### Encryption of Data at Rest {#cnsc-132}

**Guideline ID**: `CNSC-132` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Encryption at rest considers data path, size, and frequency of access when determining additional security protections and cryptographic algorithms to employ

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-28 | Protection of Information at Rest |


#### Recommendations

- The encryption may be implemented in the storage client or storage server and granularity of the encryption will vary by system (e.g. per volume, per group or global keys)


---


### Encryption Requirements {#cnsc-133}

**Guideline ID**: `CNSC-133` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Caching is considered for determining encryption requirements in architectures

---


### Boundary Protection {#cnsc-134}

**Guideline ID**: `CNSC-134` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Namespaces have defined trust boundaries to cordon access to volumes

---


### Security Policy Management {#cnsc-135}

**Guideline ID**: `CNSC-135` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Security policies are used to prevent containers from accessing volume mounts on worker nodes

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7 | Boundary Protection |
| SA-8 | Security and Privacy Engineering Principles |
| CM-6 | Configuration Settings |


---


### Security Policy Enforcement {#cnsc-136}

**Guideline ID**: `CNSC-136` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Security policies are used enforce authorized worker node access to volumes

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7 | Boundary Protection |
| SA-8 | Security and Privacy Engineering Principles |
| CM-6 | Configuration Settings |


---


### Information Flow Management {#cnsc-137}

**Guideline ID**: `CNSC-137` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Volume UID and GID are inaccessible to containers

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-4 | Information Flow Enforcement |
| AC-16 | Security and Privacy Attributes |
| SI-7 | Software, Firmware, and Information Integrity |


---


### Artifact Registry Management {#cnsc-138}

**Guideline ID**: `CNSC-138` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Artifact registry supports OCI artifacts

---


### Signed Artifact Support {#cnsc-139}

**Guideline ID**: `CNSC-139` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Artifact registry supports signed artifacts

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-14 | Signed Components |


---


### Artifact Registry Policy Verification {#cnsc-140}

**Guideline ID**: `CNSC-140` | **Originating Document**: `Cloud Native Security Whitepaper v1.0`

#### Objective

Artifact registry verifies artifacts against organizational policies

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AU-10 | Non-repudiation |
| CM-6 | Configuration Settings |


---


### Control Plane Authentication {#cnsc-332}

**Guideline ID**: `CNSC-332` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Storage control plane management interface requires mutual authentication and TLS for connections

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-8 | Transmission Confidentiality and Integrity |


---


### Data Availability Mechanism {#cnsc-333}

**Guideline ID**: `CNSC-333` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Data availability is achieved through parity or mirroring, erasure coding or replicas

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SI-13 | Predictable Failure Prevention |


---


### Integrity Validation {#cnsc-334}

**Guideline ID**: `CNSC-334` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Hashing and checksums are added to blocks, objects or files

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-7 | Least Functionality |
| SI-7 | Software, Firmware, and Information Integrity |


#### Recommendations

- primarily designed to detect and recover from corrupted data, but can also add a layer of protection against the tampering of data.


---


### Data Source Storage Management {#cnsc-335}

**Guideline ID**: `CNSC-335` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Data backup storage and data source storage should have same security controls

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SA-9 | EXTERNAL SYSTEM SERVICES |
| SC-30 | CONCEALMENT AND MISDIRECTION |


---


### System Backup {#cnsc-336}

**Guideline ID**: `CNSC-336` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Secure erasure adhering to OPAL standards is employed for returned or non-functional devices

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CP-9 | System Backup |
| MP-6 | Media Sanitization |


---


### Encryption of Data at Rest {#cnsc-337}

**Guideline ID**: `CNSC-337` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Encryption at rest considers data path, size, and frequency of access when determing additional security protections and cryptographic algorithms to employ

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-28 | PROTECTION OF INFORMATION AT REST |


#### Recommendations

- The encryption may be implemented in the storage client or storage server and granularity of the encryption will vary by system (e.g. per volume, per group or global keys)


---


### Encryption Requirements {#cnsc-338}

**Guideline ID**: `CNSC-338` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Caching is considered for determining encryption requirements in archictures

---


### Boundary Protection {#cnsc-339}

**Guideline ID**: `CNSC-339` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Namespaces have defined trust boundaries to cordon access to volumes

---


### Security Policy Management {#cnsc-340}

**Guideline ID**: `CNSC-340` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Security policies are used to prevent containers from accessing volume mounts on worker nodes

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7 | Boundary Protection |
| SA-8 | Security and Privacy Engineering Principles |
| CM-6 | Configuration Settings |


---


### Security Policy Enforcement {#cnsc-341}

**Guideline ID**: `CNSC-341` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Security policies are used enforce authorized worker node access to volumes

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| SC-7 | Boundary Protection |
| SA-8 | Security and Privacy Engineering Principles |
| CM-6 | Configuration Settings |


---


### Information Flow Management {#cnsc-342}

**Guideline ID**: `CNSC-342` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Volume UID and GID are inaccessible to containers

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AC-4 | Information Flow Enforcement |
| AC-16 | Security and Privacy Attributes |
| SI-7 | Software, Firmware, and Information Integrity |


---


### Artifact Registry Management {#cnsc-343}

**Guideline ID**: `CNSC-343` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Artifact registry supports OCI artifacts

---


### Signed Artifact Support {#cnsc-344}

**Guideline ID**: `CNSC-344` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Artifact registry supports signed artifacts

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| CM-14 | Signed Components |


---


### Artifact Registry Policy Verification {#cnsc-345}

**Guideline ID**: `CNSC-345` | **Originating Document**: `Cloud Native Security Whitepaper v2.0`

#### Objective

Artifact registry verifies artifacts against organizational policies

#### Guideline Mappings

**`NIST-800-53`**

| Reference ID | Remarks |
|--------------|----------|
| AU-10 | Non-repudiation |
| CM-6 | Configuration Settings |


---





## Acknowledgements
This representation of the catalog builds upon the original [Cloud Native Security Controls Catalog initiative](https://www.cncf.io/blog/2022/06/07/introduction-to-the-cloud-native-security-controls-catalog/), which produced the foundational artifact.

This catalog is expressed in **Gemara Layer 1** (Guidance Document) format, where security objectives are represented as guidelines. See [Gemara Documentation](https://gemara.openssf.org/) for details.

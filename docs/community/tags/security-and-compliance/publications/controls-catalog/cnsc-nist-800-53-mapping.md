---
title: Cloud Native Security Controls (CNSC) to NIST SP 800-53 Rev. 5 Mapping
sidebar_position: 7
toc_max_heading_level: 3
---

<!--
Auto-generated from catalog/cnsc-nist-800-53-mapping.yaml.
Do not edit manually.

  go run cmd/catalog/main.go -md index.md
-->

<div class="controls-catalog-doc">

# Cloud Native Security Controls (CNSC) to NIST SP 800-53 Rev. 5 Mapping

This document maps the [Cloud Native Security Controls Catalog](./index.md) to NIST 800-53 SP Rev.5 Guidelines.

## NIST SP 800-53 crosswalk {#nist-sp-800-53-crosswalk}

| CNSC guideline | Relationship | NIST control(s) | Notes |
|----------------|--------------|-----------------|---------|
| <a id="crosswalk-cnsc-1"></a>`CNSC-1` | relates-to | `IA-5(7)` | <strong>Runtime Secret Injection</strong> (CNSC-1) · NIST `IA-5(7)` — Authenticator Management |
| <a id="crosswalk-cnsc-2"></a>`CNSC-2` | relates-to | `IA-9` | <strong>Mutual Authentication</strong> (CNSC-2) · NIST `IA-9` — NIST SP 800-53 control mapped from CNSC-2 (Mutual Authentication); family: Access. |
| <a id="crosswalk-cnsc-3"></a>`CNSC-3` | relates-to | `SC-12` | <strong>Cryptographic Key Management</strong> (CNSC-3) · NIST `SC-12` — Cryptographic Key Establishment and Management |
| <a id="crosswalk-cnsc-4"></a>`CNSC-4` | relates-to | `SC-12(3)` | <strong>Cryptographic Key Lifecycle Management</strong> (CNSC-4) · NIST `SC-12(3)` — Cryptographic Key Establishment and Management |
| <a id="crosswalk-cnsc-5"></a>`CNSC-5` | relates-to | `IA-2(12)` | <strong>Sensitive Credential Management</strong> (CNSC-5) · NIST `IA-2(12)` — Identification and Authentication (Organizational Users) |
| <a id="crosswalk-cnsc-6"></a>`CNSC-6` | relates-to | `IA-2(6)` | <strong>Identification and Authentication</strong> (CNSC-6) · NIST `IA-2(6)` — Identification and Authentication (Organizational Users) |
| <a id="crosswalk-cnsc-7"></a>`CNSC-7` | relates-to | `IA-2(6)` | <strong>Authentication and Authorization Enforcement</strong> (CNSC-7) · NIST `IA-2(6)` — Identification and Authentication (Organizational Users) |
| <a id="crosswalk-cnsc-8"></a>`CNSC-8` | relates-to | `SI-4(2)` | <strong>Continuous System Monitoring</strong> (CNSC-8) · NIST `SI-4(2)` — System Monitoring |
| <a id="crosswalk-cnsc-9"></a>`CNSC-9` | relates-to | `AC-3(13)` | <strong>Privileged-based Authorization</strong> (CNSC-9) · NIST `AC-3(13)` — Access Enforcement |
| <a id="crosswalk-cnsc-10"></a>`CNSC-10` | relates-to | `AC-3(13)` | <strong>ABAC and RBAC</strong> (CNSC-10) · NIST `AC-3(13)` — Access Enforcement |
| <a id="crosswalk-cnsc-11"></a>`CNSC-11` | relates-to | `SC-7(19)` | <strong>Authorization and Identity Management</strong> (CNSC-11) · NIST `SC-7(19)` — Boundary Protection |
| <a id="crosswalk-cnsc-12"></a>`CNSC-12` | relates-to | `IA-7` | <strong>Cluster Authentication Management</strong> (CNSC-12) · NIST `IA-7` — Cryptographic Module Authentication |
| <a id="crosswalk-cnsc-13"></a>`CNSC-13` | relates-to | `IA-7` | <strong>Authentication Policy Management</strong> (CNSC-13) · NIST `IA-7` — Cryptographic Module Authentication |
| <a id="crosswalk-cnsc-14"></a>`CNSC-14` | relates-to | `IA-2(1)(2)` | <strong>Multi-factor Authentication</strong> (CNSC-14) · NIST `IA-2(1)(2)` — Identification and Authentication (organizational Users) |
| <a id="crosswalk-cnsc-15"></a>`CNSC-15` | relates-to | `AC-4(4)` | <strong>HSMs Protection of Cryptographic Secrets</strong> (CNSC-15) · NIST `AC-4(4)` — Information Flow Enforcement |
| <a id="crosswalk-cnsc-16"></a>`CNSC-16` | relates-to | `SI-12` | <strong>Secrets Management</strong> (CNSC-16) · NIST `SI-12` — Information Management and Retention |
| <a id="crosswalk-cnsc-17"></a>`CNSC-17` | relates-to | `AC-16(3)` | <strong>Secrets Lifecycle Management</strong> (CNSC-17) · NIST `AC-16(3)` — Security and Privacy Attributes |
| <a id="crosswalk-cnsc-18"></a>`CNSC-18` | relates-to | `SC-12(1)` | <strong>Secrets Management System</strong> (CNSC-18) · NIST `SC-12(1)` — Cryptographic Key Establishment and Management |
| <a id="crosswalk-cnsc-19"></a>`CNSC-19` | relates-to | `SI-12` | <strong>Secrets Rotation Management</strong> (CNSC-19) · NIST `SI-12` — Information Management and Retention |
| <a id="crosswalk-cnsc-20"></a>`CNSC-20` | relates-to | `AC-16` | <strong>Secrets Protection</strong> (CNSC-20) · NIST `AC-16` — Security and Privacy Attributes |
| <a id="crosswalk-cnsc-21"></a>`CNSC-21` | relates-to | `AU-9(3)` | <strong>Secret Injection Lifecycle</strong> (CNSC-21) · NIST `AU-9(3)` — Protection of Audit Information |
| <a id="crosswalk-cnsc-22"></a>`CNSC-22` | relates-to | `SI-7(9)` | <strong>Compute Bootstrapping Verification</strong> (CNSC-22) · NIST `SI-7(9)` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-23"></a>`CNSC-23` | relates-to | `SC-7` | <strong>Boundary Management</strong> (CNSC-23) · NIST `SC-7` — Boundary Protection |
| <a id="crosswalk-cnsc-24"></a>`CNSC-24` | relates-to | `CM-2(2)`<br />`CM-3(7)` | <strong>Runtime Configuration Monitoring</strong> (CNSC-24) · NIST `CM-2(2)` — Baseline Configuration, Automation Support for Accuracy and Currency<br /><strong>Runtime Configuration Monitoring</strong> (CNSC-24) · NIST `CM-3(7)` — Configuration Change Control, Review System Changes |
| <a id="crosswalk-cnsc-25"></a>`CNSC-25` | relates-to | `AU-2` | <strong>API Auditing Implementation</strong> (CNSC-25) · NIST `AU-2` — Event Logging |
| <a id="crosswalk-cnsc-26"></a>`CNSC-26` | relates-to | `CM-2`<br />`CM-7` | <strong>Operating System Configuration</strong> (CNSC-26) · NIST `CM-2` — Baseline Configuration<br /><strong>Operating System Configuration</strong> (CNSC-26) · NIST `CM-7` — Least Functionality |
| <a id="crosswalk-cnsc-27"></a>`CNSC-27` | relates-to | `SI-7` | <strong>Trust Implementation</strong> (CNSC-27) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-28"></a>`CNSC-28` | relates-to | `AC-6` | <strong>Least Privilege</strong> (CNSC-28) · NIST `AC-6` |
| <a id="crosswalk-cnsc-29"></a>`CNSC-29` | relates-to | `SI-7(16)`<br />`SI-7(17)` | <strong>Resource Control Management</strong> (CNSC-29) · NIST `SI-7(16)` — Software, Firmware, and Information Integrity, Time Limit on Process Execution Without Supervision<br /><strong>Resource Control Management</strong> (CNSC-29) · NIST `SI-7(17)` — Software, Firmware, and Information Integrity, Runtime Application Self-protection |
| <a id="crosswalk-cnsc-30"></a>`CNSC-30` | relates-to | `SI-4(13)` | <strong>System Alert Monitoring</strong> (CNSC-30) · NIST `SI-4(13)` — System Monitoring, Analyze Traffic and Event Patterns |
| <a id="crosswalk-cnsc-31"></a>`CNSC-31` | relates-to | `AC-3` | <strong>Control Plane Configuration</strong> (CNSC-31) · NIST `AC-3` — Access Enforcement |
| <a id="crosswalk-cnsc-32"></a>`CNSC-32` | relates-to | `CM-2`<br />`CM-7` | <strong>Baseline Configured Functionality</strong> (CNSC-32) · NIST `CM-2` — Baseline Configuration<br /><strong>Baseline Configured Functionality</strong> (CNSC-32) · NIST `CM-7` — Least Functionality |
| <a id="crosswalk-cnsc-33"></a>`CNSC-33` | relates-to | `CM-5` | <strong>Critical Change Management</strong> (CNSC-33) · NIST `CM-5` — Access Restrictions for Change |
| <a id="crosswalk-cnsc-34"></a>`CNSC-34` | relates-to | `CM-5` | <strong>Runtime Configuration for Change Management</strong> (CNSC-34) · NIST `CM-5` — Access Restrictions for Change |
| <a id="crosswalk-cnsc-35"></a>`CNSC-35` | relates-to | `SC-7` | <strong>Runtime Boundary Protection Management</strong> (CNSC-35) · NIST `SC-7` — Boundary Protection |
| <a id="crosswalk-cnsc-36"></a>`CNSC-36` | relates-to | `SC-7` | <strong>Boundary Protection Management</strong> (CNSC-36) · NIST `SC-7` — Boundary Protection |
| <a id="crosswalk-cnsc-37"></a>`CNSC-37` | relates-to | `CM-5` | <strong>Policy Enforcement Management</strong> (CNSC-37) · NIST `CM-5` — Access Restrictions for Change |
| <a id="crosswalk-cnsc-38"></a>`CNSC-38` | relates-to | `CM-5` | <strong>Policy Enforcement Management</strong> (CNSC-38) · NIST `CM-5` — Access Restrictions for Change |
| <a id="crosswalk-cnsc-39"></a>`CNSC-39` | relates-to | `SC-7` | <strong>Data Trust Management</strong> (CNSC-39) · NIST `SC-7` — Boundary Protection |
| <a id="crosswalk-cnsc-40"></a>`CNSC-40` | relates-to | `SI-4` | <strong>System Monitoring Components</strong> (CNSC-40) · NIST `SI-4` — System Monitoring |
| <a id="crosswalk-cnsc-41"></a>`CNSC-41` | relates-to | `SI-3` | <strong>Dynamic Workload Scanning</strong> (CNSC-41) · NIST `SI-3` — Malicious Code Protection |
| <a id="crosswalk-cnsc-42"></a>`CNSC-42` | relates-to | `RA-5` | <strong>Continuous Monitoring and Scanning</strong> (CNSC-42) · NIST `RA-5` — Vulnerability Monitoring and Scanning |
| <a id="crosswalk-cnsc-43"></a>`CNSC-43` | relates-to | `AU-3` | <strong>Audit Event Logging</strong> (CNSC-43) · NIST `AU-3` — Content of Audit Records |
| <a id="crosswalk-cnsc-44"></a>`CNSC-44` | relates-to | `AC-6` | <strong>Privilege Management</strong> (CNSC-44) · NIST `AC-6` — Least Privilege |
| <a id="crosswalk-cnsc-45"></a>`CNSC-45` | relates-to | `SI-7` | <strong>Information Integrity</strong> (CNSC-45) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-46"></a>`CNSC-46` | relates-to | `SC-12(3)` | <strong>Key Management Storage</strong> (CNSC-46) · NIST `SC-12(3)` — Systems and Communication Protection |
| <a id="crosswalk-cnsc-47"></a>`CNSC-47` | relates-to | `SC-12(3)` | <strong>Secret Storage Configuration</strong> (CNSC-47) · NIST `SC-12(3)` — Systems and Communication Protection |
| <a id="crosswalk-cnsc-48"></a>`CNSC-48` | relates-to | `SI-4` | <strong>System Monitoring</strong> (CNSC-48) · NIST `SI-4` |
| <a id="crosswalk-cnsc-49"></a>`CNSC-49` | relates-to | `SC-28` | <strong>Sensitive Data Encryption</strong> (CNSC-49) · NIST `SC-28` — Protection of Information at Rest |
| <a id="crosswalk-cnsc-50"></a>`CNSC-50` | relates-to | `CM-8` | <strong>SBOM Management</strong> (CNSC-50) · NIST `CM-8` — System Component Inventory |
| <a id="crosswalk-cnsc-51"></a>`CNSC-51` | relates-to | `CM-2`<br />`CM-7` | <strong>Functionality Management</strong> (CNSC-51) · NIST `CM-2` — Baseline Configuration<br /><strong>Functionality Management</strong> (CNSC-51) · NIST `CM-7` — Least Functionality |
| <a id="crosswalk-cnsc-52"></a>`CNSC-52` | relates-to | `CM-5` | <strong>Access and Change Restrictions</strong> (CNSC-52) · NIST `CM-5` — Access Restrictions for Change |
| <a id="crosswalk-cnsc-53"></a>`CNSC-53` | relates-to | `CM-2`<br />`CM-7` | <strong>Access Configuration</strong> (CNSC-53) · NIST `CM-2` — Baseline Configuration<br /><strong>Access Configuration</strong> (CNSC-53) · NIST `CM-7` — Least Functionality |
| <a id="crosswalk-cnsc-54"></a>`CNSC-54` | relates-to | `SI-4` | <strong>System Monitoring</strong> (CNSC-54) · NIST `SI-4` |
| <a id="crosswalk-cnsc-55"></a>`CNSC-55` | relates-to | `SI-4` | <strong>System Monitoring Management</strong> (CNSC-55) · NIST `SI-4` — System Monitoring |
| <a id="crosswalk-cnsc-56"></a>`CNSC-56` | relates-to | `SC-7(21)` | <strong>System Component Isolation</strong> (CNSC-56) · NIST `SC-7(21)` — Boundary Protection, Isolation of System Components |
| <a id="crosswalk-cnsc-57"></a>`CNSC-57` | relates-to | `SR-4(3)`<br />`SR-4(4)` | <strong>Trust Confirmation</strong> (CNSC-57) · NIST `SR-4(3)` — Provenance, Validate as Genuine and Not Altered<br /><strong>Trust Confirmation</strong> (CNSC-57) · NIST `SR-4(4)` — Provenance, Supply Chain Integrity - Pedigree |
| <a id="crosswalk-cnsc-58"></a>`CNSC-58` | relates-to | `SI-7(17)` | <strong>Runtime Policy Enforcement</strong> (CNSC-58) · NIST `SI-7(17)` — Software, Firmware, and Information Integrity, Runtime Application Self-Protection |
| <a id="crosswalk-cnsc-59"></a>`CNSC-59` | relates-to | `SR-4(3)`<br />`SR-4(4)` | <strong>Image Integrity Verification</strong> (CNSC-59) · NIST `SR-4(3)` — Provenance, Validate as Genuine and Not Altered<br /><strong>Image Integrity Verification</strong> (CNSC-59) · NIST `SR-4(4)` — Provenance, Supply Chain Integrity - Pedigree |
| <a id="crosswalk-cnsc-60"></a>`CNSC-60` | relates-to | `CM-3` | <strong>Application Logging</strong> (CNSC-60) · NIST `CM-3` — Configuration Change Control |
| <a id="crosswalk-cnsc-62"></a>`CNSC-62` | relates-to | `SI-3` | <strong>Behavioral Analysis</strong> (CNSC-62) · NIST `SI-3` — System and Information Integrity |
| <a id="crosswalk-cnsc-63"></a>`CNSC-63` | relates-to | `SA-3(1)` | <strong>Production Environment</strong> (CNSC-63) · NIST `SA-3(1)` — System Development Life Cycle \| Manage preproduction environment |
| <a id="crosswalk-cnsc-64"></a>`CNSC-64` | relates-to | `SA-8(31)` | <strong>Dynamic Deployments</strong> (CNSC-64) · NIST `SA-8(31)` — Security and Privacy Engineering Principles \| Secure System Modification |
| <a id="crosswalk-cnsc-65"></a>`CNSC-65` | relates-to | `SA-11(1)` | <strong>Early Vulnerability Scanning</strong> (CNSC-65) · NIST `SA-11(1)` — Developer Testing and Evaluation \| Static Code Analysis |
| <a id="crosswalk-cnsc-66"></a>`CNSC-66` | relates-to | `SA-15` | <strong>Environment Segregation</strong> (CNSC-66) · NIST `SA-15` — Development Process, Standards, and Tools |
| <a id="crosswalk-cnsc-67"></a>`CNSC-67` | relates-to | `SA-11` | <strong>Business-Critical Code Testing</strong> (CNSC-67) · NIST `SA-11` — Developer Testing and Evaluation |
| <a id="crosswalk-cnsc-68"></a>`CNSC-68` | relates-to | `SA-11` | <strong>Infrastructure Testing</strong> (CNSC-68) · NIST `SA-11` — Developer Testing and Evaluation |
| <a id="crosswalk-cnsc-69"></a>`CNSC-69` | relates-to | `SA-11` | <strong>Local Test Execution</strong> (CNSC-69) · NIST `SA-11` — Developer Testing and Evaluation |
| <a id="crosswalk-cnsc-70"></a>`CNSC-70` | relates-to | `SA-11` | <strong>Shared Test Execution</strong> (CNSC-70) · NIST `SA-11` — Developer Testing and Evaluation |
| <a id="crosswalk-cnsc-71"></a>`CNSC-71` | relates-to | `SA-11(4)` | <strong>Code Review Requirements</strong> (CNSC-71) · NIST `SA-11(4)` — Developer Testing and Evaluation \| Manual Code Reviews |
| <a id="crosswalk-cnsc-73"></a>`CNSC-73` | relates-to | `SA-11` | <strong>Full Infrastructure Testing</strong> (CNSC-73) · NIST `SA-11` — Developer Testing and Evaluation |
| <a id="crosswalk-cnsc-74"></a>`CNSC-74` | relates-to | `SA-11` | <strong>Regression Testing</strong> (CNSC-74) · NIST `SA-11` — Developer Testing and Evaluation |
| <a id="crosswalk-cnsc-75"></a>`CNSC-75` | relates-to | `SA-11` | <strong>Security Regression Testing</strong> (CNSC-75) · NIST `SA-11` — Developer Testing and Evaluation |
| <a id="crosswalk-cnsc-76"></a>`CNSC-76` | relates-to | `SA-3(1)` | <strong>Testing Environment</strong> (CNSC-76) · NIST `SA-3(1)` — System Development Life Cycle \| Manage preproduction environment |
| <a id="crosswalk-cnsc-77"></a>`CNSC-77` | relates-to | `SC-39` | <strong>CI Server Isolation</strong> (CNSC-77) · NIST `SC-39` — Process Isolation |
| <a id="crosswalk-cnsc-78"></a>`CNSC-78` | relates-to | `SA-11(2)` | <strong>Threat-Informed Test Development</strong> (CNSC-78) · NIST `SA-11(2)` — Developer Testing and Evaluation \| Threat Modeling and Vulnerability Analyses |
| <a id="crosswalk-cnsc-85"></a>`CNSC-85` | relates-to | `RA-5` | <strong>Manifest Scanning</strong> (CNSC-85) · NIST `RA-5` — Vulnerability Monitoring and Scanning |
| <a id="crosswalk-cnsc-86"></a>`CNSC-86` | relates-to | `SC-39` | <strong>CI Server Isolation</strong> (CNSC-86) · NIST `SC-39` — Process Isolation |
| <a id="crosswalk-cnsc-87"></a>`CNSC-87` | relates-to | `SC-39` | <strong>Privileged Build Isolation</strong> (CNSC-87) · NIST `SC-39` — Process Isolation |
| <a id="crosswalk-cnsc-88"></a>`CNSC-88` | relates-to | `SA-1` | <strong>Build Policy Enforcement</strong> (CNSC-88) · NIST `SA-1` — Policy and Procedures |
| <a id="crosswalk-cnsc-89"></a>`CNSC-89` | relates-to | `SI-7` | <strong>Pipeline Metadata Signing</strong> (CNSC-89) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-90"></a>`CNSC-90` | relates-to | `SI-7` | <strong>Build Stage Verification</strong> (CNSC-90) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-91"></a>`CNSC-91` | relates-to | `RA-5` | <strong>CI Pipeline Scanning</strong> (CNSC-91) · NIST `RA-5` — Vulnerability Monitoring and Scanning |
| <a id="crosswalk-cnsc-92"></a>`CNSC-92` | relates-to | `SA-1` | <strong>Pipeline Compliance Integration</strong> (CNSC-92) · NIST `SA-1` — Policy and Procedures |
| <a id="crosswalk-cnsc-93"></a>`CNSC-93` | relates-to | `SA-11(8)` | <strong>Dynamic Application Security Testing</strong> (CNSC-93) · NIST `SA-11(8)` — Interactive Application Security Testing |
| <a id="crosswalk-cnsc-94"></a>`CNSC-94` | relates-to | `SI-4` | <strong>Application Instrumentation</strong> (CNSC-94) · NIST `SI-4` — System Monitoring |
| <a id="crosswalk-cnsc-97"></a>`CNSC-97` | relates-to | `SI-4` | <strong>Security Health Verification</strong> (CNSC-97) · NIST `SI-4` — System Monitoring |
| <a id="crosswalk-cnsc-99"></a>`CNSC-99` | relates-to | `CA-8`<br />`SA-11` | <strong>Automated Security Testing</strong> (CNSC-99) · NIST `CA-8` — Penetration Testing<br /><strong>Automated Security Testing</strong> (CNSC-99) · NIST `SA-11` — Developer Testing and Evaluation |
| <a id="crosswalk-cnsc-100"></a>`CNSC-100` | relates-to | `IA-3(1)` | <strong>Registry Authentication</strong> (CNSC-100) · NIST `IA-3(1)` — Cryptographic Bidirectional Authentication |
| <a id="crosswalk-cnsc-101"></a>`CNSC-101` | relates-to | `SI-7` | <strong>Image Signing</strong> (CNSC-101) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-102"></a>`CNSC-102` | relates-to | `SI-7` | <strong>Configuration Signing</strong> (CNSC-102) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-103"></a>`CNSC-103` | relates-to | `SI-7` | <strong>Package Signing</strong> (CNSC-103) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-104"></a>`CNSC-104` | relates-to | `SI-7` | <strong>Image Integrity Validation</strong> (CNSC-104) · NIST `SI-7` — System and Information Integrity |
| <a id="crosswalk-cnsc-105"></a>`CNSC-105` | relates-to | `RA-5`<br />`SA-3` | <strong>Image Vulnerability Scanning</strong> (CNSC-105) · NIST `RA-5` — Vulnerability Monitoring and Scanning<br /><strong>Image Vulnerability Scanning</strong> (CNSC-105) · NIST `SA-3` — System Development Life Cycle |
| <a id="crosswalk-cnsc-106"></a>`CNSC-106` | relates-to | `SI-7` | <strong>Key Revocation</strong> (CNSC-106) · NIST `SI-7` — System and Information Integrity |
| <a id="crosswalk-cnsc-107"></a>`CNSC-107` | relates-to | `SI-2(3)` | <strong>Security Update Prioritization</strong> (CNSC-107) · NIST `SI-2(3)` — System and Information Integrity |
| <a id="crosswalk-cnsc-108"></a>`CNSC-108` | relates-to | `SC-12(3)` | <strong>Credential Protection</strong> (CNSC-108) · NIST `SC-12(3)` — Systems and Communication Protection |
| <a id="crosswalk-cnsc-109"></a>`CNSC-109` | relates-to | `SI-2(3)` | <strong>Scanning Remediation</strong> (CNSC-109) · NIST `SI-2(3)` — System and Information Integrity |
| <a id="crosswalk-cnsc-110"></a>`CNSC-110` | relates-to | `PL-1` | <strong>Compliance Enforcement</strong> (CNSC-110) · NIST `PL-1` — Policy and Procedures |
| <a id="crosswalk-cnsc-112"></a>`CNSC-112` | relates-to | `AC-6(3)` | <strong>Public Registry Access Control</strong> (CNSC-112) · NIST `AC-6(3)` — Least Privilege |
| <a id="crosswalk-cnsc-113"></a>`CNSC-113` | relates-to | `SC-12(2)`<br />`SC-12(3)` | <strong>Image Encryption Management</strong> (CNSC-113) · NIST `SC-12(2)` — Cryptographic Key Establishment and Management \| Symmetric and Asymmetric Keys<br /><strong>Image Encryption Management</strong> (CNSC-113) · NIST `SC-12(3)` — Cryptographic Key Establishment and Management \| Symmetric and Asymmetric Keys |
| <a id="crosswalk-cnsc-114"></a>`CNSC-114` | relates-to | `SI-2(3)` | <strong>Risk-Based Remediation Prioritization</strong> (CNSC-114) · NIST `SI-2(3)` — System and Information Integrity |
| <a id="crosswalk-cnsc-115"></a>`CNSC-115` | relates-to | `AC-6(3)` | <strong>East-West Network Policy</strong> (CNSC-115) · NIST `AC-6(3)` — Least Privilege, Network Access to Privileged Commands |
| <a id="crosswalk-cnsc-116"></a>`CNSC-116` | relates-to | `CA-7`<br />`IR-4`<br />`IR-4(5)` | <strong>Incident Response</strong> (CNSC-116) · NIST `CA-7` — Continuous Monitoring<br /><strong>Incident Response</strong> (CNSC-116) · NIST `IR-4` — Incident Handling, Automated Incident Handling Processes<br /><strong>Incident Response</strong> (CNSC-116) · NIST `IR-4(5)` — Incident Handling, Automated Disabling of System |
| <a id="crosswalk-cnsc-117"></a>`CNSC-117` | relates-to | `IR-5(1)` | <strong>Incident Monitoring</strong> (CNSC-117) · NIST `IR-5(1)` — Incident Monitoring, Automated Tracking, Data Collection, and Analysis |
| <a id="crosswalk-cnsc-120"></a>`CNSC-120` | relates-to | `AC-3(3)` | <strong>Mandatory Access Controls</strong> (CNSC-120) · NIST `AC-3(3)` — Access Enforcement, Mandatory Access Control |
| <a id="crosswalk-cnsc-121"></a>`CNSC-121` | relates-to | `SA-11(2)` | <strong>Threat Modeling and Vulnerability Analysis</strong> (CNSC-121) · NIST `SA-11(2)` — Developer Testing and Evaluation, Threat Modeling and Vulnerability Analyses |
| <a id="crosswalk-cnsc-122"></a>`CNSC-122` | relates-to | `IA-9` | <strong>Authentication Management</strong> (CNSC-122) · NIST `IA-9` — Service Identification and Authentication |
| <a id="crosswalk-cnsc-123"></a>`CNSC-123` | relates-to | `IA-9` | <strong>Identity Management</strong> (CNSC-123) · NIST `IA-9` — Service Identification and Authentication |
| <a id="crosswalk-cnsc-124"></a>`CNSC-124` | relates-to | `CM-14` | <strong>Trusted Components</strong> (CNSC-124) · NIST `CM-14` — Signed Components |
| <a id="crosswalk-cnsc-125"></a>`CNSC-125` | relates-to | `SI-6` | <strong>Security Verification</strong> (CNSC-125) · NIST `SI-6` — Security and Privacy Function Verification |
| <a id="crosswalk-cnsc-127"></a>`CNSC-127` | relates-to | `SC-8` | <strong>Control Plane Authentication</strong> (CNSC-127) · NIST `SC-8` — Transmission Confidentiality and Integrity |
| <a id="crosswalk-cnsc-128"></a>`CNSC-128` | relates-to | `SI-13` | <strong>Data Availability Mechanism</strong> (CNSC-128) · NIST `SI-13` — Predictable Failure Prevention |
| <a id="crosswalk-cnsc-129"></a>`CNSC-129` | relates-to | `CM-7`<br />`SI-7` | <strong>Integrity Validation</strong> (CNSC-129) · NIST `CM-7` — Least Functionality<br /><strong>Integrity Validation</strong> (CNSC-129) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-130"></a>`CNSC-130` | relates-to | `SA-9`<br />`SC-30` | <strong>Data Source Storage Management</strong> (CNSC-130) · NIST `SA-9` — External System Services<br /><strong>Data Source Storage Management</strong> (CNSC-130) · NIST `SC-30` — Concealment and Misdirection |
| <a id="crosswalk-cnsc-131"></a>`CNSC-131` | relates-to | `CP-9`<br />`MP-6` | <strong>System Backup</strong> (CNSC-131) · NIST `CP-9`<br /><strong>System Backup</strong> (CNSC-131) · NIST `MP-6` — Media Sanitization |
| <a id="crosswalk-cnsc-132"></a>`CNSC-132` | relates-to | `SC-28` | <strong>Encryption of Data at Rest</strong> (CNSC-132) · NIST `SC-28` — Protection of Information at Rest |
| <a id="crosswalk-cnsc-135"></a>`CNSC-135` | relates-to | `CM-6`<br />`SA-8`<br />`SC-7` | <strong>Security Policy Management</strong> (CNSC-135) · NIST `CM-6` — Configuration Settings<br /><strong>Security Policy Management</strong> (CNSC-135) · NIST `SA-8` — Security and Privacy Engineering Principles<br /><strong>Security Policy Management</strong> (CNSC-135) · NIST `SC-7` — Boundary Protection |
| <a id="crosswalk-cnsc-136"></a>`CNSC-136` | relates-to | `CM-6`<br />`SA-8`<br />`SC-7` | <strong>Security Policy Enforcement</strong> (CNSC-136) · NIST `CM-6` — Configuration Settings<br /><strong>Security Policy Enforcement</strong> (CNSC-136) · NIST `SA-8` — Security and Privacy Engineering Principles<br /><strong>Security Policy Enforcement</strong> (CNSC-136) · NIST `SC-7` — Boundary Protection |
| <a id="crosswalk-cnsc-137"></a>`CNSC-137` | relates-to | `AC-16`<br />`AC-4`<br />`SI-7` | <strong>Information Flow Management</strong> (CNSC-137) · NIST `AC-16` — Security and Privacy Attributes<br /><strong>Information Flow Management</strong> (CNSC-137) · NIST `AC-4` — Information Flow Enforcement<br /><strong>Information Flow Management</strong> (CNSC-137) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-139"></a>`CNSC-139` | relates-to | `CM-14` | <strong>Signed Artifact Support</strong> (CNSC-139) · NIST `CM-14` — Signed Components |
| <a id="crosswalk-cnsc-140"></a>`CNSC-140` | relates-to | `AU-10`<br />`CM-6` | <strong>Artifact Registry Policy Verification</strong> (CNSC-140) · NIST `AU-10` — Non-repudiation<br /><strong>Artifact Registry Policy Verification</strong> (CNSC-140) · NIST `CM-6` — Configuration Settings |
| <a id="crosswalk-cnsc-141"></a>`CNSC-141` | relates-to | `SI-1`<br />`SI-7` | <strong>Build Process Attestation</strong> (CNSC-141) · NIST `SI-1` — Policy and Procedures<br /><strong>Build Process Attestation</strong> (CNSC-141) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-142"></a>`CNSC-142` | relates-to | `SI-1`<br />`SI-7` | <strong>Build Signature Verification</strong> (CNSC-142) · NIST `SI-1` — Policy and Procedures<br /><strong>Build Signature Verification</strong> (CNSC-142) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-143"></a>`CNSC-143` | relates-to | `IA-5` | <strong>Artifact Signing Framework</strong> (CNSC-143) · NIST `IA-5` — Authenticator Management |
| <a id="crosswalk-cnsc-144"></a>`CNSC-144` | relates-to | `AC-4(6)` | <strong>Attestation Store</strong> (CNSC-144) · NIST `AC-4(6)` — Information Flow Enforcement, Metadata |
| <a id="crosswalk-cnsc-145"></a>`CNSC-145` | relates-to | `AC-6` | <strong>Certification Authorization</strong> (CNSC-145) · NIST `AC-6` — Least Privilege |
| <a id="crosswalk-cnsc-146"></a>`CNSC-146` | relates-to | `SC-12` | <strong>Key Rotation and Revocation</strong> (CNSC-146) · NIST `SC-12` — Cryptographic Key Establishment and Management |
| <a id="crosswalk-cnsc-148"></a>`CNSC-148` | relates-to | `IA-5`<br />`SC-12`<br />`SC-13`<br />`SC-28(1)`<br />`SC-8` | <strong>Artifact Encryption</strong> (CNSC-148) · NIST `IA-5` — Authenticator Management<br /><strong>Artifact Encryption</strong> (CNSC-148) · NIST `SC-12` — Cryptographic Key Establishment and Management<br /><strong>Artifact Encryption</strong> (CNSC-148) · NIST `SC-13` — Cryptographic Protection<br /><strong>Artifact Encryption</strong> (CNSC-148) · NIST `SC-28(1)` — Protection of Information at Rest, Cryptographic Protection<br /><strong>Artifact Encryption</strong> (CNSC-148) · NIST `SC-8` — Transmission Confidentiality and Integrity |
| <a id="crosswalk-cnsc-149"></a>`CNSC-149` | relates-to | `CM-3(6)` | <strong>Cryptographic Policy Guarantee</strong> (CNSC-149) · NIST `CM-3(6)` — Configuration Change Control |
| <a id="crosswalk-cnsc-150"></a>`CNSC-150` | relates-to | `CM-3(2)` | <strong>Environment and Dependency Validation</strong> (CNSC-150) · NIST `CM-3(2)` — Configuration Change Control |
| <a id="crosswalk-cnsc-151"></a>`CNSC-151` | relates-to | `CM-3(4)` | <strong>Build Worker Runtime Security</strong> (CNSC-151) · NIST `CM-3(4)` — NIST SP 800-53 control mapped from CNSC-151 (Build Worker Runtime Security); family: Securing Build Pipelines. |
| <a id="crosswalk-cnsc-152"></a>`CNSC-152` | relates-to | `CM-3(4)` | <strong>Reproducible Builds</strong> (CNSC-152) · NIST `CM-3(4)` — NIST SP 800-53 control mapped from CNSC-152 (Reproducible Builds); family: Securing Build Pipelines. |
| <a id="crosswalk-cnsc-153"></a>`CNSC-153` | relates-to | `CM-3(2)` | <strong>External Requirement Verification</strong> (CNSC-153) · NIST `CM-3(2)` — NIST SP 800-53 control mapped from CNSC-153 (External Requirement Verification); family: Securing Build Pipelines. |
| <a id="crosswalk-cnsc-155"></a>`CNSC-155` | relates-to | `CM-3(1)` | <strong>Build Environment Recording</strong> (CNSC-155) · NIST `CM-3(1)` — NIST SP 800-53 control mapped from CNSC-155 (Build Environment Recording); family: Securing Build Pipelines. |
| <a id="crosswalk-cnsc-156"></a>`CNSC-156` | relates-to | `CM-3(3)` | <strong>Build Environment Automation</strong> (CNSC-156) · NIST `CM-3(3)` — NIST SP 800-53 control mapped from CNSC-156 (Build Environment Automation); family: Securing Build Pipelines. |
| <a id="crosswalk-cnsc-157"></a>`CNSC-157` | relates-to | `CM-3(3)` | <strong>Build Distribution</strong> (CNSC-157) · NIST `CM-3(3)` — NIST SP 800-53 control mapped from CNSC-157 (Build Distribution); family: Securing Build Pipelines. |
| <a id="crosswalk-cnsc-158"></a>`CNSC-158` | relates-to | `SA-3` | <strong>Pipeline as Code</strong> (CNSC-158) · NIST `SA-3` — System Development Life Cycle |
| <a id="crosswalk-cnsc-161"></a>`CNSC-161` | relates-to | `AC-2` | <strong>Single-Use Build Workers</strong> (CNSC-161) · NIST `AC-2` — Account Management |
| <a id="crosswalk-cnsc-162"></a>`CNSC-162` | relates-to | `SC-7(3)` | <strong>Software Factory Network Isolation</strong> (CNSC-162) · NIST `SC-7(3)` — Boundary Protection |
| <a id="crosswalk-cnsc-163"></a>`CNSC-163` | relates-to | `AC-5` | <strong>Build Worker Duty Segregation</strong> (CNSC-163) · NIST `AC-5` — Separation of Duties |
| <a id="crosswalk-cnsc-164"></a>`CNSC-164` | relates-to | `CM-2(2)` | <strong>Build Worker Environment Control</strong> (CNSC-164) · NIST `CM-2(2)` — Baseline Configuration |
| <a id="crosswalk-cnsc-165"></a>`CNSC-165` | relates-to | `AU-9(2)` | <strong>Secured Output Storage</strong> (CNSC-165) · NIST `AU-9(2)` — Protection of Audit Information |
| <a id="crosswalk-cnsc-167"></a>`CNSC-167` | relates-to | `AC-2` | <strong>User Role Definition</strong> (CNSC-167) · NIST `AC-2` — Account Management |
| <a id="crosswalk-cnsc-168"></a>`CNSC-168` | relates-to | `SC-17` | <strong>Root of Trust Establishment</strong> (CNSC-168) · NIST `SC-17` — Public Key Infrastructure Certificates |
| <a id="crosswalk-cnsc-169"></a>`CNSC-169` | relates-to | `SC-23(5)` | <strong>Short-Lived Certificates</strong> (CNSC-169) · NIST `SC-23(5)` — Session Authenticity |
| <a id="crosswalk-cnsc-170"></a>`CNSC-170` | relates-to | `SI-7` | <strong>Artifact Verification</strong> (CNSC-170) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-171"></a>`CNSC-171` | relates-to | `SI-7` | <strong>Freshness Verification</strong> (CNSC-171) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-173"></a>`CNSC-173` | relates-to | `SA-11` | <strong>Third-Party Artifact Verification</strong> (CNSC-173) · NIST `SA-11` — Developer Testing and Evaluation |
| <a id="crosswalk-cnsc-174"></a>`CNSC-174` | relates-to | `CM-8` | <strong>Third-Party SBOM Requirements</strong> (CNSC-174) · NIST `CM-8` — Information System Component Inventory |
| <a id="crosswalk-cnsc-175"></a>`CNSC-175` | relates-to | `CM-10` | <strong>Dependency Tracking</strong> (CNSC-175) · NIST `CM-10` — Software Usage Restrictions |
| <a id="crosswalk-cnsc-179"></a>`CNSC-179` | relates-to | `RA-5` | <strong>Software Vulnerability Scanning</strong> (CNSC-179) · NIST `RA-5` — Vulnerability Monitoring and Scanning |
| <a id="crosswalk-cnsc-180"></a>`CNSC-180` | relates-to | `CM-10` | <strong>License Compliance Scanning</strong> (CNSC-180) · NIST `CM-10` — Software Usage Restrictions |
| <a id="crosswalk-cnsc-181"></a>`CNSC-181` | relates-to | `SA-11(1)(8)` | <strong>Software Composition Analysis</strong> (CNSC-181) · NIST `SA-11(1)(8)` — Developer Testing and Evaluation |
| <a id="crosswalk-cnsc-182"></a>`CNSC-182` | relates-to | `SI-7` | <strong>Commit and Tag Signing</strong> (CNSC-182) · NIST `SI-7` — Software, Firmware, and information integrity |
| <a id="crosswalk-cnsc-183"></a>`CNSC-183` | relates-to | `AC-6(3)` | <strong>Branch Protection Attestation</strong> (CNSC-183) · NIST `AC-6(3)` — Least Privilege |
| <a id="crosswalk-cnsc-184"></a>`CNSC-184` | relates-to | `SC-12(3)` | <strong>Secret Commit Prevention</strong> (CNSC-184) · NIST `SC-12(3)` — Systems and Communication Protection |
| <a id="crosswalk-cnsc-185"></a>`CNSC-185` | relates-to | `PL-1` | <strong>Repository Access Definition</strong> (CNSC-185) · NIST `PL-1` — Policy and Procedures |
| <a id="crosswalk-cnsc-186"></a>`CNSC-186` | relates-to | `RA-5` | <strong>Automated Security Scanning</strong> (CNSC-186) · NIST `RA-5` — Vulnerability Monitoring and Scanning |
| <a id="crosswalk-cnsc-187"></a>`CNSC-187` | relates-to | `PL-1` | <strong>Contribution Policy Enforcement</strong> (CNSC-187) · NIST `PL-1` — Policy and Procedures |
| <a id="crosswalk-cnsc-188"></a>`CNSC-188` | relates-to | `PL-1` | <strong>Functional Role Definition</strong> (CNSC-188) · NIST `PL-1` — Policy and Procedures |
| <a id="crosswalk-cnsc-189"></a>`CNSC-189` | relates-to | `SA-11` | <strong>Four-Eyes Principle</strong> (CNSC-189) · NIST `SA-11` — Developer Testing and Evaluation |
| <a id="crosswalk-cnsc-190"></a>`CNSC-190` | relates-to | `SA-8` | <strong>Branch Protection Rules</strong> (CNSC-190) · NIST `SA-8` — Security Engineering Principles |
| <a id="crosswalk-cnsc-191"></a>`CNSC-191` | relates-to | `IA-2(1)` | <strong>Repository MFA Enforcement</strong> (CNSC-191) · NIST `IA-2(1)` — Identification and Authentication (organizational Users) |
| <a id="crosswalk-cnsc-192"></a>`CNSC-192` | relates-to | `AC-1` | <strong>SSH Key Access</strong> (CNSC-192) · NIST `AC-1` — Remote Access |
| <a id="crosswalk-cnsc-193"></a>`CNSC-193` | relates-to | `AC-2(1)` | <strong>Key Rotation Policy</strong> (CNSC-193) · NIST `AC-2(1)` — Prerequisites and criteria for group and role membership are defined. |
| <a id="crosswalk-cnsc-194"></a>`CNSC-194` | relates-to | `AC-2(1)` | <strong>Ephemeral Credentials</strong> (CNSC-194) · NIST `AC-2(1)` — Usage of automated mechanisms to create, enable, modify, disable, and remove accounts. |
| <a id="crosswalk-cnsc-195"></a>`CNSC-195` | relates-to | `SA-8(23)` | <strong>Secure Configuration Defaults</strong> (CNSC-195) · NIST `SA-8(23)` — Security and Privacy Engineering Principles, Secure Defaults |
| <a id="crosswalk-cnsc-208"></a>`CNSC-208` | relates-to | `IA-2(1)(2)` | <strong>Multi-factor Authentication</strong> (CNSC-208) · NIST `IA-2(1)(2)` — Identification and Authentication (organizational Users) |
| <a id="crosswalk-cnsc-233"></a>`CNSC-233` | relates-to | `SC-7` | <strong>Data Trust Management</strong> (CNSC-233) · NIST `SC-7` — Boundary Protection |
| <a id="crosswalk-cnsc-259"></a>`CNSC-259` | relates-to | `SA-11(1)` | <strong>Early Vulnerability Scanning</strong> (CNSC-259) · NIST `SA-11(1)` — Developer Testing and Evaluation \| Static Code Analysis |
| <a id="crosswalk-cnsc-265"></a>`CNSC-265` | relates-to | `SA-11(4)` | <strong>Code Review Requirements</strong> (CNSC-265) · NIST `SA-11(4)` — Developer Testing and Evaluation \| Manual Code Reviews |
| <a id="crosswalk-cnsc-271"></a>`CNSC-271` | relates-to | `SC-39` | <strong>CI Server Isolation</strong> (CNSC-271) · NIST `SC-39` — Process Isolation |
| <a id="crosswalk-cnsc-297"></a>`CNSC-297` | relates-to | `SI-7` | <strong>Configuration Signing</strong> (CNSC-297) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-298"></a>`CNSC-298` | relates-to | `SI-7` | <strong>Package Signing</strong> (CNSC-298) · NIST `SI-7` — Software, Firmware, and Information Integrity |
| <a id="crosswalk-cnsc-303"></a>`CNSC-303` | relates-to | `SC-12(3)` | <strong>Credential Protection</strong> (CNSC-303) · NIST `SC-12(3)` — Systems and Communication Protection |

</div>

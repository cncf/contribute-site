# Axios

In March 2026, attackers were able to publish malicious versions of axios@1.14.1 and axios@0.30.4.
First, they hijacked one of the Axios maintainers' accounts by masquerading as a legitimate company.
The adversaries then invited the maintainer to a Microsoft Teams meeting, where an installation pop-up appeared and was clicked, installing a Remote Access Trojan (RAT).
The RAT was then able to get access to credentials to then publish the malicious versions of axios that included a malicious dependency `plain-crypto-js@4.2.1`.
The malicious dependency installs another RAT.

## Impact

* Malicious versions were live for 3 hours before being removed.
* Still, as Axios had over 70 million weekly downloads, thousands of dependent systems were likely compromised.

## Type of compromise

The attack was able to compromise the developer account through a **Social Engineering/Phishing Attack**. Then **Attack Chaining** was used to introduce the malicious dependency with the RAT.

## References

* [Jason Saayman](https://github.com/axios/axios/issues/10636)
* [StepSecurity](https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan)
* [CISA](https://www.cisa.gov/news-events/alerts/2026/04/20/supply-chain-compromise-impacts-axios-node-package-manager)
* [Microsoft](https://www.microsoft.com/en-us/security/blog/2026/04/01/mitigating-the-axios-npm-supply-chain-compromise/)
* [Socket](https://socket.dev/blog/axios-npm-package-compromised)
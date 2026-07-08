# LiteLLM and Telnyx

After secrets were exfiltrated from the [Trivy](trivy.md) compromise, the PyPi packages `litellm` and `telnyx` were published that contained credential-harvesting malware.
The [malware report feature](https://blog.pypi.org/posts/2024-03-06-malware-reporting-evolved/) was used to report the malicious versions.

## Impact

* `litellm` was downloaded over 119k times during the attack window.
* `litellm` exposure time was 2 hours and 32 minutes, while `telnyx` exposure time was 3 hours and 42 minutes.

## Type of compromise

The attack leveraged a previously compromised credential to attack compromised dependencies via **Attack Chaining**.

## References

* [PyPi blog](https://blog.pypi.org/posts/2026-04-02-incident-report-litellm-telnyx-supply-chain-attack/)
* [LWN.net](https://lwn.net/Articles/1065059/)
* [LiteLLM](https://docs.litellm.ai/blog/security-update-march-2026)
* [OSV](https://osv.dev/vulnerability/PYSEC-2026-3)
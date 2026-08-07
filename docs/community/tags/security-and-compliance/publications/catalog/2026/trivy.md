# Trivy

Adversaries in February 2026 were able to extract a privileged access token due to a misconfigured GitHub Actions workflow in Trivy. A
Although credentials were rotated, still-valid credentials remained that were then leveraged by adversaries in March 2026.
In particular, the adversaries modified existing tags associated with `trivy-action` and `setup-trivy` to inject malicious code by redirecting to a malicious version.
The tagged malicious versions were made immutable after poisoning the tags, stole credentials from developer machines, and set persistence mechanisms.

## Impact

*  75 out of 76 `trivy-action` tags and 7 `setup-trivy` tags were affected in GitHub.
* Attackers also published malicious images to Docker Hub.
* Credentials there were stolen were suspected to be used in subsequent attacks.


## Type of compromise

The attack leveraged credentials from the **Source Code** ecosystem. Then, it leveraged the **Trust and Signing** that dependent systems have for the GitHub Action.

## References

* [Aqua](https://www.aquasec.com/blog/trivy-supply-chain-attack-what-you-need-to-know/)
* [Aqua](https://github.com/aquasecurity/trivy/security/advisories/GHSA-69fq-xp46-6x23)
* [Paul McCarty](https://www.linkedin.com/posts/mccartypaul_updated-march-20-2026-at-3pm-heads-up-share-7440548547609079808-oHmB/)
* [Socket](https://socket.dev/blog/trivy-under-attack-again-github-actions-compromise)
* [Socket](https://socket.dev/blog/trivy-docker-images-compromised)
* [Wiz](https://www.wiz.io/blog/trivy-compromised-teampcp-supply-chain-attack)
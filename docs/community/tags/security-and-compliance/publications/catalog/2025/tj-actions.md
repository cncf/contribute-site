# tj-actions

The GitHub Action `tj-actions/changed-files` was compromised to execute a malicious Python script.
The script scanned for secrets, which were then printed as base64 into the logs.
Thus, the leaked secrets could be recovered from the logs.
The compromise was likely enabled by other GitHub Actions under `reviewdog`.

## Impact

* The `tj-actions/changed-files` GitHub Action was used by , impacting over 23,000 repositories

## Type of compromise

The used GitHub Actions to exfiltrate secrets. Hence, leveraged the **Publishing Infrastructure**.

## References


* [CISA](https://www.cisa.gov/news-events/alerts/2025/03/18/supply-chain-compromise-third-party-tj-actionschanged-files-cve-2025-30066-and-reviewdogaction)
* [GHSA](https://github.com/advisories/GHSA-mrrh-fwg8-r2c3)
* [StepSecurity](https://www.stepsecurity.io/blog/harden-runner-detection-tj-actions-changed-files-action-is-compromised)
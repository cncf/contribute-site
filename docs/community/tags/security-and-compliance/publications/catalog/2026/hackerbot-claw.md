# hackerbot-claw

At the end of February and beginning of March, 2026, the `hackerbot-claw` account used AI to systematically scan exploitable GitHub Actions.
Then, the bot would fork the repositories and prepare a malicious payload.
The change would then be integrated within a pull request that seemed to contain a trivial change, but the malicious payload was hidden in the branch name, filename, or a continuous integration script.
Then, the workflow would be triggered, and credentials would be exfiltrated.

## Impact

* The bot targeted 7 repositories of  Microsoft, DataDog, the CNCF, and popular open source projects.

## Type of compromise

The attack leveraged GitHub Actions, which is **Publishing Infrastructure**.

## References

* [StepSecurity](https://www.stepsecurity.io/blog/hackerbot-claw-github-actions-exploitation)
* [Socket](https://socket.dev/blog/openclaw-skill-marketplace-emerges-as-active-malware-vector)
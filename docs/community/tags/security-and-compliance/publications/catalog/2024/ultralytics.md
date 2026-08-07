# ultralytics

In December 2024, malicious versions of the `ultralytics` package were uploaded to PyPi.
In the first wave of the attack (8.3.41, 8.3.42), the adversaries used a GitHub Actions Script Injection.
Forensics used Trusted Publishing to detect that the injected packages used the existing GitHub Workflow.
In the second wave of the attack (8.3.45 and 8.3.46), an existing token from before trusted publishing was used to execute the attack, which lacked the corresponding provenance.

## Impact

* In PyPi, two features were developed: 1) a [malware reporting API](https://blog.pypi.org/posts/2023-09-18-inbound-malware-reporting/) and a [quarantine feature](https://blog.pypi.org/posts/2024-08-16-safety-and-security-engineer-year-in-review/#project-lifecycle-status-quarantine).


## Type of compromise

The attack used GitHub Actions, which leveraged the **Publishing Infrastructure**.

## References


* [PyPi](https://blog.pypi.org/posts/2024-12-11-ultralytics-attack-analysis/)
* [William Woodruff](https://blog.yossarian.net/2024/12/06/zizmor-ultralytics-injection)
* [Reversing Labs](https://www.reversinglabs.com/blog/compromised-ultralytics-pypi-package-delivers-crypto-coinminer)
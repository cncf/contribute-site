# GitHub Push RCE

Security Researchers at Wiz found an RCE vulnerability in GitHub that allowed
any authenticated user to execute arbitrary commands on GitHub's servers with
just a Git client. The researchers used AI to discover the vulnerability, and
did this without having the source code of GitHub available.

## Impact

* GitHub reported no repositories on the cloud-hosted GitHub.com instance were
  impacted.
* GitHub Enterprise Server instances required a patch to be applied by their
  administrators.

## Type of Compromise

This was a **Publishing Infrastructure** compromise, as a vulnerability resided
in GitHub's own source code.

## References

* [GitHub](https://github.blog/security/securing-the-git-push-pipeline-responding-to-a-critical-remote-code-execution-vulnerability/)
* [Wiz](https://www.wiz.io/blog/github-rce-vulnerability-cve-2026-3854)

# GitHub Source Code Leak via VSCode Extension

In May, the TeamPCP hacking group gained access to GitHub's internal source code
repositories. About 3,800 repositories were downloaded by the group and put up
for sale on a hacking forum for at least $50,000. Access to GitHub's internal
repositories was obtained by using a poisoned VSCode extension to exfiltrate
secrets from a GitHub employee's computer.

## Impact

* GitHub's source code is now available for purchase on the internet.
* GitHub has had to rotate secrets, but is unaware of any customers impacted by
  this exhilaration (as of writing).

## Type of Compromise

The attacker(s) used hacked **Dev Tooling** to exfiltrate secrets and perform
the attack.

## References

* [SecurityWeek](https://www.securityweek.com/github-confirms-hack-impacting-3800-internal-repositories/)
* [GitHub on X](https://x.com/github/status/2056949168208552080)

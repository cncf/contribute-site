# Mini Shai-Hulud

A new wave of the [Shai-Hulud](../2025/shai-hulud.md) worm compromised packages in the npm and PyPi ecosystems starting at the end of April.
Particularly, on May 11 `@tanstack/* npm packages` were compromised through cache poisoning a GitHub Action.
The malicious versions of the packages contained an obfuscated `router_init.js` file that steals credentials, exfiltrates data, and self-propagates.

## Impact

* Compromised packages such as `@tanstack/*` have millions of weekly downloads.
* Over 400 packages were affected across npm and PyPi.


## Type of compromise

The attack leveraged the  **Publishing Infrastructure** to gain initial access. Then,**Attack Chaining** was used to self-propagate and affect other packages.


## References

* [Socket](https://socket.dev/blog/mini-shai-hulud-packagist-malicious-intercom-php-package-compromise)
* [Socket](https://socket.dev/supply-chain-attacks/mini-shai-hulud)
* [StepSecurity](https://www.stepsecurity.io/blog/mini-shai-hulud-is-back-a-self-spreading-supply-chain-attack-hits-the-npm-ecosystem)
* [OX](https://www.ox.security/blog/shai-hulud-sap-supply-chain-attack-npm/)
* [TanStack](https://tanstack.com/blog/npm-supply-chain-compromise-postmortem)
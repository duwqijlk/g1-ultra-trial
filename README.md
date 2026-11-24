# g1-ultra-trial

Shadowrocket module: Google One Ultra 1-month free trial SKU rewrite.

Mirrors the shared body-rewrite rule:

- URL pattern: `^https://one\.google\.com/ai.*$`
- Body regex: `g1\.ios\.20tb\.m\.v2`
- Replacement: `g1.ai.ultra.1month_eft.acq`

This is the free-trial version, not the 90p (10%-price) version. The script
only rewrites the SKU ID string in the response body; it does not change any
price fields. The actual plan name, trial period and renewal price must be
checked on the App Store checkout screen before confirming.

## Install in Shadowrocket

Add this module URL:

```
https://cdn.jsdelivr.net/gh/duwqijlk/g1-ultra-trial@main/g1-ultra-trial.sgmodule
```

Disable any other G1 rewrite modules (e.g. G1 ACQ) while using this one.
HTTPS decryption must be on, the Shadowrocket certificate installed and
trusted, and `one.google.com` must be in the MITM hostname list.

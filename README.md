# g1-ultra-trial

G1 ACQ v7.5.0 with exactly one mapping changed:

- Original: `"g1.ios.20tb.m.v2": "g1.20tb.3months_ip_90p.acq"`
- Changed:  `"g1.ios.20tb.m.v2": "g1.ai.ultra.1month_eft.acq"` (Google AI Ultra, 1-month free trial)

Everything else is byte-identical to the original `crhywun/g1-acq@v7.5.0`:
`g1-acq.js` is 10182 bytes before and after (1 line changed out of 269),
`g1-sku-report.js` is untouched. The `.sgmodule` only changes the module
name/description and the two script-path URLs so they point at this repo.

## Install in Shadowrocket

```
https://cdn.jsdelivr.net/gh/duwqijlk/g1-ultra-trial@main/g1-acq-v7.sgmodule
```

Disable the original G1 ACQ while using this one (they must not both rewrite).
Do NOT reinstall or regenerate the Shadowrocket certificate for this module:
it uses the same MITM hostname (`one.google.com`) as the original, so the
certificate that already works with the original module works with this one.

/* Google One Ultra 1-month free trial mapping for Shadowrocket.
   Mirrors the shared body-rewrite rule:
     URL pattern: ^https://one\.google\.com/ai.*$
     Body regex:  g1\.ios\.20tb\.m\.v2  ->  g1.ai.ultra.1month_eft.acq
   Only the SKU ID string is rewritten; no price fields are changed. */

"use strict";

(function () {
  var VERSION = "g1-ultra-trial-v2";
  var SOURCE_RE = /g1\.ios\.20tb\.m\.v2/g;
  var TARGET = "g1.ai.ultra.1month_eft.acq";

  var url = typeof $request === "object" && $request ? $request.url : "";

  if (typeof url !== "string" || !/^https:\/\/one\.google\.com\/ai/.test(url)) {
    $done({});
    return;
  }

  var body = typeof $response === "object" && $response ? $response.body : undefined;

  if (typeof body !== "string") {
    $done({});
    return;
  }

  var hits = (body.match(SOURCE_RE) || []).length;
  if (!hits) {
    console.log("[g1-ultra-trial] " + VERSION + " hits=0");
    $done({});
    return;
  }

  var out = body.replace(SOURCE_RE, TARGET);
  console.log("[g1-ultra-trial] " + VERSION + " hits=" + hits);
  console.log("[g1-ultra-trial] g1.ios.20tb.m.v2 -> " + TARGET + " x" + hits);
  $done({ body: out });
})();

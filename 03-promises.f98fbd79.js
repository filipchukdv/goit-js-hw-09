!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i");function i(e,n){var t=Math.random()>.3;return new Promise((function(r,o){setTimeout((function(){t?r("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.target.elements,t=n.amount,r=n.delay,u=n.step,a=Number(r.value),c=1;c<=t.value;c+=1)i(c,a).then((function(e){return o.Notify.success(e)})).catch((function(e){return o.Notify.failure(e)})),a+=Number(u.value)}))}();
//# sourceMappingURL=03-promises.f98fbd79.js.map

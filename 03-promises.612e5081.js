!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("h6c0i");function i(e,o){Math.random()>.3?r.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(o,"ms")):r.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(o,"ms"))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var o=e.target.elements,t=o.amount,n=o.delay,r=o.step,l=Number(n.value),a=1;a<=t.value;a+=1)setTimeout(i,l,a,l),console.log("totalDelay :",l),l+=Number(r.value)}))}();
//# sourceMappingURL=03-promises.612e5081.js.map

const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");function d(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,id=setInterval(d,1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(id),console.log("stop")}));
//# sourceMappingURL=01-color-switcher.7314c79a.js.map

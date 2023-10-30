(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\ninput {\n  outline: none;\n  border-radius: 5px;\n  border: 2px solid black;\n}\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: beige;\n}\nform {\n  background-color: white;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  box-shadow: 0 0 10px black;\n  border-radius: 5px;\n}\nlegend {\n  font-style: italic;\n  font-size: 0.8rem;\n}\nlegend > span {\n  font-weight: bold;\n}\nlabel {\n  font-weight: bold;\n}\n.center {\n  display: flex;\n  gap: 1rem;\n}\n.left,\n.right {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.left > div,\n.right > div {\n  display: flex;\n  justify-content: space-between;\n}\ndiv.country > div,\ndiv.password > div {\n  display: flex;\n  gap: 1rem;\n}\ndiv.email {\n  justify-content: end;\n}\ndiv.button,\ndiv.email {\n  display: flex;\n  justify-content: center;\n}\nbutton {\n  font-weight: bold;\n  padding: 0.5rem;\n  border-radius: 5px;\n  border: none;\n  background-color: aquamarine;\n  user-select: none;\n  cursor: pointer;\n}\n*:invalid {\n  border-color: red;\n}\n*:valid {\n  border-color: green;\n}\n.not-required {\n  border-color: orange;\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],u=a[c]||0,l="".concat(c," ").concat(u);a[c]=u+1;var p=t(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var d=r(e,o),c=0;c<a.length;c++){var u=t(a[c]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),d=t.n(s),c=t(216),u=t.n(c),l=t(589),p=t.n(l),f=t(426),v={};function m(e,n){e.value!==n.value?n.setCustomValidity("Passwords don't match"):n.setCustomValidity("")}v.styleTagTransform=p(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const y=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,b=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,g=/^[0-9]{5}(?:-[0-9]{4})?$/,h=document.getElementById("email"),x=document.getElementById("password"),w=document.getElementById("confirm-password"),C=document.getElementById("country"),E=document.getElementById("zip-code");E.addEventListener("keyup",(()=>{var e;(e=E).value?g.test(e.value)?g.test(e.value)&&(e.classList.remove("not-required"),e.setCustomValidity("")):(e.classList.remove("not-required"),e.setCustomValidity("Need a US zip code")):(e.setCustomValidity(""),e.classList.add("not-required"))})),C.addEventListener("keyup",(()=>{var e;(e=C).value?"United States"!==e.value?(e.classList.remove("not-required"),e.setCustomValidity("Country has to be United States")):"United States"===e.value&&(e.classList.remove("not-required"),e.setCustomValidity("")):(e.setCustomValidity(""),e.classList.add("not-required"))})),h.addEventListener("keyup",(()=>{!function(e){b.test(e.value)?e.setCustomValidity(""):e.setCustomValidity("Must be a valid email address")}(h)})),x.addEventListener("keyup",(()=>{var e;e=x,y.test(e.value)?e.setCustomValidity(""):e.setCustomValidity("Password need to be between 6 and 16 characters and contain at least 1 letter, 1 number and 1 special character")})),w.addEventListener("keyup",(()=>{m(x,w)})),x.addEventListener("keyup",(()=>{m(x,w)}))})()})();
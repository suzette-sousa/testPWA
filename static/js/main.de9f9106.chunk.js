(this["webpackJsonptest-pwa"]=this["webpackJsonptest-pwa"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},3:function(t,e,n){t.exports={"d-flex":"Global_d-flex__1orQ9","flex-col":"Global_flex-col__2tMxX","justify-content-center":"Global_justify-content-center__1p7dS","d-flex-col-content-center":"Global_d-flex-col-content-center__cCiGT Global_d-flex__1orQ9 Global_flex-col__2tMxX Global_justify-content-center__1p7dS","visu-hidden":"Global_visu-hidden__24Lzc","txt-center":"Global_txt-center__2ls1Y",btn:"Global_btn__2Pccc","mt-auto":"Global_mt-auto__1Gxnc"}},45:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n(2),a=n.n(c),r=n(19),i=n.n(r),s=(n(25),n.p,n(26),n(4)),l=n(7),u=n(8),d=n(10),h=n(9),f=n(5),_=n.n(f),b=n(3),m=n.n(b),j=n(27).default,v=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){return Object(l.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"".concat(m.a["mt-auto"]),children:[Object(o.jsx)("h1",{children:this.props.content}),Object(o.jsx)("em",{children:this.props.author})]})}}]),n}(a.a.Component),x=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var o;return Object(l.a)(this,n),(o=e.call(this,t)).state={content:'"Citation par d\xe9faut"',author:"Auteur par d\xe9faut",bg:""},o.changeQuote=o.changeQuote.bind(Object(s.a)(o)),o}return Object(u.a)(n,[{key:"changeQuote",value:function(){var t=this;j.get("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){var n=e.data.quotes[Math.floor(Math.random()*Math.floor(e.data.quotes.length))],o="hsl("+Math.floor(360*Math.random())+", 100%, 90%)";t.setState({content:'"'.concat(n.quote,'"'),author:n.author,bg:o})}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"".concat(_.a.Randomquote," ").concat(m.a["d-flex-col-content-center"]," ").concat(m.a["txt-center"]),style:{backgroundColor:this.state.bg},children:[Object(o.jsxs)("a",{className:"".concat(_.a["tweeter-ctr"]),target:"_blank",rel:"noreferrer",href:"https://twitter.com/intent/tweet?text=".concat(this.state.content,"%20-%20").concat(this.state.author),children:[Object(o.jsx)("span",{className:"".concat(m.a["visu-hidden"]),children:"Tweeter cette citation"}),Object(o.jsx)("svg",{className:"".concat(_.a["tweeter-ico"]),"aria-hidden":"true",focusable:"false","data-icon":"twitter",role:"img",viewBox:"0 0 24 24",children:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})})})]}),Object(o.jsx)(v,{content:this.state.content,author:this.state.author}),Object(o.jsx)("div",{className:"".concat(m.a["mt-auto"]),children:Object(o.jsx)("button",{onClick:this.changeQuote,className:"".concat(m.a.btn),children:"Changer de citation"})})]})}}]),n}(a.a.Component);var g=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(x,{})})},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),a(t),r(t)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/testPWA",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/testPWA","/service-worker.js");p?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):w(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):w(e,t)}))}}(),O()},5:function(t,e,n){t.exports={"d-flex":"Randomquotes_d-flex__dafPm","flex-col":"Randomquotes_flex-col__2vfHT","justify-content-center":"Randomquotes_justify-content-center__1RQu5","d-flex-col-content-center":"Randomquotes_d-flex-col-content-center__17zgS Randomquotes_d-flex__dafPm Randomquotes_flex-col__2vfHT Randomquotes_justify-content-center__1RQu5","visu-hidden":"Randomquotes_visu-hidden__3NeAq","txt-center":"Randomquotes_txt-center__O5DlQ",btn:"Randomquotes_btn__16ACW","mt-auto":"Randomquotes_mt-auto__-s8q7",Randomquote:"Randomquotes_Randomquote__2DuxJ","tweeter-ctr":"Randomquotes_tweeter-ctr__1mDw3","tweeter-ico":"Randomquotes_tweeter-ico__34HiI"}}},[[45,1,2]]]);
//# sourceMappingURL=main.de9f9106.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,n,t){e.exports=t.p+"static/media/clippy.1e918ea2.svg"},29:function(e,n,t){e.exports=t.p+"static/media/success.4f20b95a.svg"},30:function(e,n,t){e.exports=t.p+"static/media/fail.1e98e874.svg"},32:function(e,n,t){e.exports=t.p+"static/media/github.dc6635a4.svg"},33:function(e,n,t){e.exports=t.p+"static/media/source-sans-pro-v11-latin-regular.76d8cbb0.woff2"},34:function(e,n,t){e.exports=t.p+"static/media/source-sans-pro-v11-latin-regular.f94f84eb.woff"},37:function(e,n,t){e.exports=t(51)},51:function(e,n,t){"use strict";t.r(n);var r=t(3),a=t(0),c=t.n(a),u=t(14),i=t.n(u),o=t(4),l=t(8),s=t(16),f=t(13);function d(){var e=Object(r.a)(["\n  word-break: break-all;\n"]);return d=function(){return e},e}function b(){var e=Object(r.a)(["\n  font-weight: 700;\n"]);return b=function(){return e},e}function h(){var e=Object(r.a)(["\n  margin-top: 2rem;\n"]);return h=function(){return e},e}var p=o.b.div(h()),m=o.b.label(b()),v=o.b.label(d()),g=function(e){var n=e.file,t=n.name,r=n.size;return c.a.createElement(p,null,c.a.createElement("div",null,c.a.createElement(m,null,"Name: "),c.a.createElement(v,null,t)),c.a.createElement("div",null,c.a.createElement(m,null,"Size: "),c.a.createElement(v,null,r," bytes")))},E=t(27),y=t.n(E),O=t(28),j=t.n(O);function x(){var e=Object(r.a)(["\n  max-width: 100%;\n"]);return x=function(){return e},e}function w(){var e=Object(r.a)(["\n  border: 1px solid #aaa;\n  width: 2rem;\n  background-color: transparent;\n  cursor: pointer;\n"]);return w=function(){return e},e}function S(){var e=Object(r.a)(["\n  width: 100%;\n  padding: 0 0.25rem;\n  border: 1px solid #aaa;\n  border-right: 0;\n"]);return S=function(){return e},e}function A(){var e=Object(r.a)(["\n  display: flex;\n  height: 2rem;\n"]);return A=function(){return e},e}function k(){var e=Object(r.a)(["\n  font-weight: 700;\n"]);return k=function(){return e},e}function F(){var e=Object(r.a)(["\n  margin-top: 2rem;\n"]);return F=function(){return e},e}var T=o.b.div(F()),C=o.b.label(k()),_=o.b.div(A()),R=o.b.input(S()),H=o.b.button(w()),B=o.b.img(x()),L=function(e){var n=e.hash,t=Object(a.useRef)(null);return Object(a.useEffect)(function(){var e=t.current,n=new y.a(e);return function(){return n.destroy()}},[]),c.a.createElement(T,null,c.a.createElement(C,null,"Hash:"),c.a.createElement(_,null,c.a.createElement(R,{type:"text",id:"hash",value:n,readOnly:!0}),c.a.createElement(H,{ref:t,"data-clipboard-target":"#hash"},c.a.createElement(B,{src:j.a,alt:"Copy to clipboard"}))))};function V(){var e=Object(r.a)(["\n  margin-left: 0.5rem;\n"]);return V=function(){return e},e}function D(){var e=Object(r.a)(["\n  margin-top: 2rem;\n  font-weight: 700;\n  text-align: center;\n"]);return D=function(){return e},e}var I=o.b.div(D()),P=o.b.button(V()),N=function(e){var n=e.progress,t=e.cancelFileRead;return c.a.createElement(I,null,c.a.createElement("label",null,"Loading file: ",n,"%"),c.a.createElement(P,{onClick:t},"Cancel"))};function Y(){var e=Object(r.a)(["\n  display: none;\n"]);return Y=function(){return e},e}function G(){var e=Object(r.a)(["\n  padding: 0 1rem;\n  font-weight: 700;\n  cursor: pointer;\n"]);return G=function(){return e},e}function U(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 8rem;\n  border: 1px dashed #aaa;\n"]);return U=function(){return e},e}var W=o.b.div(U()),z=o.b.label(G()),J=o.b.input(Y()),M=function(e){var n=e.disabled,t=e.onChange;return c.a.createElement(W,{onDragOver:function(e){return e.preventDefault()},onDragLeave:function(e){return e.preventDefault()},onDrop:function(e){e.preventDefault(),n||t(e)}},c.a.createElement(z,{htmlFor:"file-picker"},"Drop your file here or click to pick one."),c.a.createElement(J,{type:"file",id:"file-picker",multiple:!1,onChange:t,disabled:n}))};function q(){var e=Object(r.a)(["\n  margin-top: 2rem;\n  font-weight: 700;\n  text-align: center;\n"]);return q=function(){return e},e}var K=o.b.div(q()),Q=function(){return c.a.createElement(K,null,c.a.createElement("label",null,"Calculating Hash..."))};function X(){var e=Object(r.a)(["\n  margin: 0 1rem;\n"]);return X=function(){return e},e}function Z(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  font-weight: 700;\n  text-align: center;\n"]);return Z=function(){return e},e}var $=o.b.div(Z()),ee=o.b.input(X()),ne=function(e){var n=e.hashType,t=e.disabled,r=e.onChange;return c.a.createElement($,null,c.a.createElement("label",null,c.a.createElement(ee,{type:"radio",name:"hash-type",value:"sha-1",checked:"sha-1"===n,onChange:r,disabled:t}),"SHA-1"),c.a.createElement("label",null,c.a.createElement(ee,{type:"radio",name:"hash-type",value:"sha-256",checked:"sha-256"===n,onChange:r,disabled:t}),"SHA-256"),c.a.createElement("label",null,c.a.createElement(ee,{type:"radio",name:"hash-type",value:"sha-384",checked:"sha-384"===n,onChange:r,disabled:t}),"SHA-384"),c.a.createElement("label",null,c.a.createElement(ee,{type:"radio",name:"hash-type",value:"sha-512",checked:"sha-512"===n,onChange:r,disabled:t}),"SHA-512"))},te=t(17),re=t(29),ae=t.n(re),ce=t(30),ue=t.n(ce);function ie(){var e=Object(r.a)(["\n  width: 2rem;\n  border: 1px solid #aaa;\n"]);return ie=function(){return e},e}function oe(){var e=Object(r.a)(["\n  width: 100%;\n  padding: 0 0.25rem;\n  border: 1px solid #aaa;\n  border-right: 0;\n"]);return oe=function(){return e},e}function le(){var e=Object(r.a)(["\n  display: flex;\n  height: 2rem;\n"]);return le=function(){return e},e}function se(){var e=Object(r.a)(["\n  margin-left: 0.5rem;\n  font-weight: 700;\n"]);return se=function(){return e},e}function fe(){var e=Object(r.a)(["\n  cursor: pointer;\n"]);return fe=function(){return e},e}function de(){var e=Object(r.a)(["\n  margin-top: 2rem;\n"]);return de=function(){return e},e}var be=o.b.div(de()),he=o.b.input(fe()),pe=o.b.label(se()),me=o.b.div(le()),ve=o.b.input(oe()),ge=o.b.img(ie()),Ee=function(e){var n=e.hash,t=Object(a.useState)(!1),r=Object(te.a)(t,2),u=r[0],i=r[1],o=Object(a.useState)(""),l=Object(te.a)(o,2),s=l[0],f=l[1],d=Object(a.useState)(!1),b=Object(te.a)(d,2),h=b[0],p=b[1];return c.a.createElement(be,null,c.a.createElement("div",null,c.a.createElement(he,{type:"checkbox",checked:u,onChange:function(e){return i(e.target.checked)}}),c.a.createElement(pe,null,"Compare with:")),u&&c.a.createElement(me,null,c.a.createElement(ve,{type:"text",value:s,onChange:function(e){var t=e.target.value;f(t),p(n===t.replace(/ /g,"").toLowerCase())}}),c.a.createElement(ge,{src:h?ae.a:ue.a,alt:h?"Success":"Fail"})))};function ye(){var e=Object(r.a)(["\n  margin: 0 auto;\n"]);return ye=function(){return e},e}var Oe=o.b.div(ye()),je=function(e){return{type:"SAVE_FILE",file:e}},xe=function(e){return{type:"SAVE_ARRAYBUFFER",arrayBuffer:e}},we=function(e){return{type:"SAVE_HASH_TYPE",hashType:e}},Se=function(e){return{type:"SAVE_PROGRESS",progress:e}},Ae=function(e){return{type:"SAVE_LOADING",loading:e}},ke=function(e){return{type:"SAVE_HASH",hash:e}},Fe=Object(l.c)({file:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SAVE_FILE":return n.file;default:return e}},arrayBuffer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SAVE_ARRAYBUFFER":return n.arrayBuffer;default:return e}},hashType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SAVE_HASH_TYPE":return n.hashType;default:return e}},progress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SAVE_PROGRESS":return n.progress;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SAVE_LOADING":return n.loading;default:return e}},hash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SAVE_HASH":return n.hash;default:return e}}}),Te=function(e){return e.file},Ce=function(e){return e.arrayBuffer},_e=function(e){return e.hashType},Re=function(e){return e.progress},He=function(e){return e.loading},Be=function(e){return e.hash},Le=Object(s.b)(function(e){return{file:Te(e),arrayBuffer:Ce(e),hashType:_e(e),progress:Re(e),loading:He(e),hash:Be(e)}},function(e){return{setFile:function(n){var t=n.dataTransfer&&n.dataTransfer.files?n.dataTransfer.files:n.target.files;t.length&&e({type:"SET_FILE",file:t[0]}),n.target.value=null},setHashType:function(n){return e({type:"SET_HASH_TYPE",hashType:n.target.value})},cancelFileRead:function(){return e({type:"CANCEL_FILE_READ"})}}})(function(e){var n=e.file,t=e.arrayBuffer,r=e.hashType,a=e.progress,u=e.loading,i=e.hash,o=e.setFile,l=e.setHashType,s=e.cancelFileRead,f=100!==a&&-1!==a,d=f||u;return c.a.createElement(Oe,null,c.a.createElement(M,{onChange:o,disabled:d}),c.a.createElement(ne,{hashType:r,onChange:l,disabled:d}),f&&c.a.createElement(N,{progress:a,cancelFileRead:s}),t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{file:n}),u&&c.a.createElement(Q,null),i&&c.a.createElement(c.a.Fragment,null,c.a.createElement(L,{hash:i}),c.a.createElement(Ee,{hash:i}))))}),Ve=t(7),De=t.n(Ve),Ie=t(6),Pe=De.a.mark(Ye),Ne=De.a.mark(Ge);function Ye(e){var n;return De.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.file,t.next=3,Object(Ie.b)(je(n));case 3:return t.next=5,Object(Ie.a)(ze,n);case 5:return t.next=7,Object(Ie.a)(qe);case 7:case"end":return t.stop()}},Pe)}function Ge(e){var n;return De.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.hashType,t.next=3,Object(Ie.b)(we(n));case 3:return t.next=5,Object(Ie.a)(qe);case 5:case"end":return t.stop()}},Ne)}var Ue=De.a.mark(function e(){return De.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.f)("SET_FILE",Ye);case 2:return e.next=4,Object(Ie.f)("SET_HASH_TYPE",Ge);case 4:case"end":return e.stop()}},e)}),We=function(e){return Object(f.c)(function(n){var t=new FileReader;t.onload=function(){n({arrayBuffer:t.result}),n(f.a)},t.onprogress=function(e){n({progress:Math.round(e.loaded/e.total*100)})},t.onerror=function(e){n({error:e}),n(f.a)},t.readAsArrayBuffer(e);return function(){1===t.readyState&&t.abort(),t=null}})},ze=De.a.mark(function e(n){var t,r,a,c,u,i,o;return De.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.b)(xe(null));case 2:return e.next=4,Object(Ie.a)(We,n);case 4:t=e.sent,e.prev=5;case 6:return e.next=9,Object(Ie.c)({channelOutput:Object(Ie.e)(t),cancelFileRead:Object(Ie.e)("CANCEL_FILE_READ")});case 9:if(r=e.sent,a=r.channelOutput,c=r.cancelFileRead,!a){e.next=25;break}if(u=a.progress,i=a.arrayBuffer,o=a.error,!i){e.next=18;break}return e.next=17,Object(Ie.b)(xe(i));case 17:return e.abrupt("return");case 18:if(!o){e.next=21;break}return console.error("Error during file read operation: ",o),e.abrupt("return");case 21:return e.next=23,Object(Ie.b)(Se(u));case 23:e.next=31;break;case 25:if(!c){e.next=31;break}return t.close(),e.next=29,Object(Ie.b)(Se(-1));case 29:return e.next=31,Object(Ie.b)(je(null));case 31:e.next=6;break;case 33:return e.prev=33,t.close(),e.finish(33);case 36:case"end":return e.stop()}},e,null,[[5,,33,36]])}),Je=t(31),Me=function(){var e=Object(Je.a)(De.a.mark(function e(n){var t,r,a,c,u;return De.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.arrayBuffer,r=n.hashType,!t||!r){e.next=8;break}return e.next=4,crypto.subtle.digest(r,t);case 4:return a=e.sent,c=Array.from(new Uint8Array(a)),u=c.map(function(e){return("00"+e.toString(16)).slice(-2)}).join(""),e.abrupt("return",u);case 8:return e.abrupt("return","");case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),qe=De.a.mark(function e(){var n,t,r;return De.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.b)(ke(""));case 2:return e.next=4,Object(Ie.b)(Ae(!0));case 4:return e.next=6,Object(Ie.d)(Ce);case 6:return n=e.sent,e.next=9,Object(Ie.d)(_e);case 9:return t=e.sent,e.next=12,Object(Ie.a)(Me,{arrayBuffer:n,hashType:t});case 12:return r=e.sent,e.next=15,Object(Ie.b)(ke(r));case 15:return e.next=17,Object(Ie.b)(Ae(!1));case 17:case"end":return e.stop()}},e)}),Ke=t(32),Qe=t.n(Ke);function Xe(){var e=Object(r.a)(["\n  align-self: center;\n  padding: 2rem;\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 2rem;\n  overflow: auto;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  max-width: 64rem;\n  height: 100vh;\n  margin: 0 auto;\n"]);return $e=function(){return e},e}var en=Object(f.b)(),nn=Object(l.e)(Fe,Object(l.a)(en));en.run(Ue);var tn=o.b.section($e()),rn=o.b.div(Ze()),an=o.b.div(Xe()),cn=t(33),un=t.n(cn),on=t(34),ln=t.n(on);function sn(){var e=Object(r.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n  }\n\n  /* source-sans-pro-regular - latin */\n  @font-face {\n    font-family: 'Source Sans Pro';\n    font-style: normal;\n    font-weight: 400;\n    font-display: optional;\n    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),\n        url(",") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url(",") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  }\n"]);return sn=function(){return e},e}var fn=Object(o.a)(sn(),un.a,ln.a);i.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(fn,null),c.a.createElement(function(){return c.a.createElement("main",{role:"main"},c.a.createElement(tn,null,c.a.createElement(rn,null,c.a.createElement(s.a,{store:nn},c.a.createElement(Le,null))),c.a.createElement(an,null,c.a.createElement("a",{href:"https://github.com/joelgeorgev/file-hash-verifier"},c.a.createElement("img",{src:Qe.a,alt:"GitHub"})))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",function(){var e="".concat("","/service-worker.js");navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})})}},[[37,1,2]]]);
//# sourceMappingURL=main.65de3287.chunk.js.map
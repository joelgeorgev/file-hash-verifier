(this["webpackJsonpfile-hash-verifier"]=this["webpackJsonpfile-hash-verifier"]||[]).push([[0],{47:function(e,n,t){"use strict";t.r(n);var r,a,c,i,s,o,l,u,b,f,h,j,d,p,O,x,g,m,y,v,w,S=t(4),C=t(17),k=t.n(C),L=t(5),H=t(15),F=t(1),A=L.b.dl(r||(r=Object(S.a)(["\n  margin-top: 2rem;\n"]))),B=L.b.dt(a||(a=Object(S.a)(["\n  font-weight: 700;\n"]))),E=L.b.dd(c||(c=Object(S.a)(["\n  word-break: break-all;\n  margin-bottom: 0.5rem;\n"]))),P=function(e){var n=e.name,t=e.size;return Object(F.jsxs)(A,{children:[Object(F.jsx)(B,{children:"Name"}),Object(F.jsx)(E,{children:n}),Object(F.jsx)(B,{children:"Size"}),Object(F.jsxs)(E,{children:[t," bytes"]})]})},T=t(28),D=t.n(T),_=t.p+"static/media/clippy.b0e31af4.svg",z=L.b.div(i||(i=Object(S.a)(["\n  margin-top: 2rem;\n"]))),I=L.b.label(s||(s=Object(S.a)(["\n  font-weight: 700;\n"]))),R=L.b.div(o||(o=Object(S.a)(["\n  display: flex;\n  height: 2rem;\n"]))),G=L.b.input(l||(l=Object(S.a)(["\n  width: 100%;\n  padding: 0 0.25rem;\n  border: 1px solid #aaa;\n  border-right: 0;\n"]))),J=L.b.button(u||(u=Object(S.a)(["\n  border: 1px solid #aaa;\n  width: 2rem;\n  background-color: transparent;\n  cursor: pointer;\n"]))),N=L.b.img(b||(b=Object(S.a)(["\n  max-width: 100%;\n"]))),U=function(e){var n=e.hash;return Object(F.jsxs)(z,{children:[Object(F.jsx)(I,{htmlFor:"hash",children:"Hash:"}),Object(F.jsxs)(R,{children:[Object(F.jsx)(G,{type:"text",id:"hash",value:n,readOnly:!0}),Object(F.jsx)(J,{onClick:function(){return D()(n)},children:Object(F.jsx)(N,{src:_,alt:"Copy to clipboard"})})]})]})},M=L.b.div(f||(f=Object(S.a)(["\n  margin-top: 2rem;\n  font-weight: 700;\n  text-align: center;\n"]))),V=L.b.progress(h||(h=Object(S.a)(["\n  margin: 0 1rem;\n"]))),Y=function(e){var n=e.progress,t=e.onCancel;return Object(F.jsxs)(M,{children:[Object(F.jsx)("label",{htmlFor:"file-load-progress",children:"Loading file:"}),Object(F.jsx)(V,{id:"file-load-progress",max:"100",value:"".concat(n)}),100!==n&&Object(F.jsx)("button",{onClick:t,children:"Cancel"})]})},q=L.b.label(j||(j=Object(S.a)(["\n  display: block;\n  font-weight: 700;\n  margin-bottom: 1rem;\n"]))),K=function(e){var n=e.isDisabled,t=e.onSelect;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(q,{htmlFor:"file-picker",children:"Click to pick a file."}),Object(F.jsx)("input",{type:"file",id:"file-picker",multiple:!1,disabled:n,onChange:function(e){var n=e.target.files;n&&t(n[0])}})]})},Q=L.b.div(d||(d=Object(S.a)(["\n  margin-top: 2rem;\n  font-weight: 700;\n  text-align: center;\n"]))),W=function(){return Object(F.jsx)(Q,{children:"Calculating Hash..."})},X=t(16),Z=L.b.fieldset(p||(p=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  font-weight: 700;\n  text-align: center;\n  border: 0;\n"]))),$=L.b.input(O||(O=Object(S.a)(["\n  margin: 0 1rem;\n"]))),ee=[["SHA-1","sha-1"],["SHA-256","sha-256"],["SHA-384","sha-384"],["SHA-512","sha-512"]],ne=function(e){var n=e.hashType,t=e.isDisabled,r=e.onSelect;return Object(F.jsx)(Z,{disabled:t,children:ee.map((function(e){var t=Object(X.a)(e,2),a=t[0],c=t[1];return Object(F.jsxs)("label",{children:[Object(F.jsx)($,{type:"radio",name:"hash-type",value:c,checked:c===n,onChange:function(e){return r(e.target.value)}}),a]},c)}))})},te=t(2),re=t.p+"static/media/success.f94dc787.svg",ae=t.p+"static/media/fail.47429a71.svg",ce=L.b.div(x||(x=Object(S.a)(["\n  margin-top: 2rem;\n"]))),ie=L.b.label(g||(g=Object(S.a)(["\n  font-weight: 700;\n"]))),se=L.b.div(m||(m=Object(S.a)(["\n  display: flex;\n  height: 2rem;\n"]))),oe=L.b.input(y||(y=Object(S.a)(["\n  width: 100%;\n  padding: 0 0.25rem;\n  border: 1px solid #aaa;\n  ","\n"])),(function(e){return e.value&&"border-right: 0;"})),le=L.b.img(v||(v=Object(S.a)(["\n  width: 2rem;\n  border: 1px solid #aaa;\n"]))),ue=function(e){var n=e.hash,t=Object(te.useState)(""),r=Object(X.a)(t,2),a=r[0],c=r[1],i=Object(te.useState)(!1),s=Object(X.a)(i,2),o=s[0],l=s[1];return Object(F.jsxs)(ce,{children:[Object(F.jsx)(ie,{htmlFor:"hash-verify",children:"Compare with:"}),Object(F.jsxs)(se,{children:[Object(F.jsx)(oe,{type:"text",id:"hash-verify",value:a,onChange:function(e){var t=e.target.value;c(t),l(n===t.replace(/ /g,"").toLowerCase())}}),a&&Object(F.jsx)(le,{src:o?re:ae,alt:o?"Hashes match":"Hashes do not match"})]})]})},be=H.c,fe="SELECT_FILE",he="FILE_LOAD_PROGRESS",je="CANCEL_FILE_LOAD",de="FILE_LOADED",pe="SELECT_HASH_TYPE",Oe="HASH_CALCULATED",xe=function(e){return{type:he,payload:{progress:e}}},ge=function(e){return{type:de,payload:{arrayBuffer:e}}},me=function(e){return{type:Oe,payload:{hash:e}}},ye=function(e){return e.type===fe},ve=function(e){return e.type===he},we=function(e){return e.type===je},Se=function(e){return e.type===de},Ce=function(e){return e.type===pe},ke=function(e){return e.type===Oe},Le=L.b.div(w||(w=Object(S.a)(["\n  margin: 0 auto;\n"]))),He=function(){var e=be((function(e){return e})),n=Object(H.b)(),t=e.file,r=e.fileLoadProgress,a=e.arrayBuffer,c=e.hashType,i=e.isCalculatingHash,s=e.hash,o=Boolean(r)||i;return Object(F.jsxs)(Le,{children:[Object(F.jsx)(K,{isDisabled:o,onSelect:function(e){return n(function(e){return{type:fe,payload:{file:e}}}(e))}}),Object(F.jsx)(ne,{hashType:c,isDisabled:o,onSelect:function(e){return n(function(e){return{type:pe,payload:{hashType:e}}}(e))}}),r&&Object(F.jsx)(Y,{progress:r,onCancel:function(){return n({type:je})}}),a&&Object(F.jsxs)(F.Fragment,{children:[t&&Object(F.jsx)(P,{name:t.name,size:t.size}),i&&Object(F.jsx)(W,{}),s&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(U,{hash:s}),Object(F.jsx)(ue,{hash:s})]})]})]})},Fe=t(12),Ae=t(14),Be=t(10),Ee={file:null,fileLoadProgress:null,arrayBuffer:null,hashType:null,isCalculatingHash:!1,hash:null},Pe=function(e,n){var t=n.payload.file,r=t.name,a=t.size;return Object(Be.a)(Object(Be.a)({},e),{},{file:{name:r,size:a},arrayBuffer:Ee.arrayBuffer,hash:Ee.hash})},Te=function(e,n){return Object(Be.a)(Object(Be.a)({},e),{},{fileLoadProgress:n.payload.progress})},De=function(e){return Object(Be.a)(Object(Be.a)({},e),{},{file:Ee.file,fileLoadProgress:Ee.fileLoadProgress})},_e=function(e,n){return Object(Be.a)(Object(Be.a)({},e),{},{arrayBuffer:n.payload.arrayBuffer,fileLoadProgress:Ee.fileLoadProgress,isCalculatingHash:Boolean(e.hashType)})},ze=function(e,n){return Object(Be.a)(Object(Be.a)({},e),{},{hashType:n.payload.hashType,hash:Ee.hash,isCalculatingHash:Boolean(e.arrayBuffer)})},Ie=function(e,n){return Object(Be.a)(Object(Be.a)({},e),{},{isCalculatingHash:Ee.isCalculatingHash,hash:n.payload.hash})},Re=t(8),Ge=t.n(Re),Je=t(7),Ne=Ge.a.mark(Me),Ue=Ge.a.mark(Ve);function Me(e){return Ge.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Je.a)(Ke,e.payload.file);case 2:return n.next=4,Object(Je.a)($e);case 4:case"end":return n.stop()}}),Ne)}function Ve(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Je.a)($e);case 2:case"end":return e.stop()}}),Ue)}var Ye=Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Je.f)(fe,Me);case 2:return e.next=4,Object(Je.f)(pe,Ve);case 4:case"end":return e.stop()}}),e)})),qe=function(e){return Object(Ae.c)((function(n){var t=new FileReader;t.onload=function(){n({arrayBuffer:t.result}),n(Ae.a)},t.onprogress=function(e){n({progress:Math.round(e.loaded/e.total*100)})},t.onerror=function(){n({error:t.error}),n(Ae.a)},t.readAsArrayBuffer(e);return function(){1===t.readyState&&t.abort()}}))},Ke=Ge.a.mark((function e(n){var t,r,a,c,i,s,o;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Je.a)(qe,n);case 2:t=e.sent,e.prev=3;case 4:return e.next=7,Object(Je.c)({channelOutput:Object(Je.e)(t),cancelFileLoad:Object(Je.e)(je)});case 7:if(r=e.sent,a=r.channelOutput,c=r.cancelFileLoad,!a){e.next=23;break}if(i=a.progress,s=a.arrayBuffer,o=a.error,!s){e.next=16;break}return e.next=15,Object(Je.b)(ge(s));case 15:return e.abrupt("return");case 16:if(!o){e.next=19;break}return console.error("Error during file read operation: ",o),e.abrupt("return");case 19:return e.next=21,Object(Je.b)(xe(i));case 21:e.next=24;break;case 23:c&&t.close();case 24:e.next=4;break;case 26:return e.prev=26,t.close(),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[3,,26,29]])})),Qe=t(29),We=function(){var e=Object(Qe.a)(Ge.a.mark((function e(n,t){var r,a,c;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||!t){e.next=7;break}return e.next=3,crypto.subtle.digest(t,n);case 3:return r=e.sent,a=Array.from(new Uint8Array(r)),c=a.map((function(e){return("00"+e.toString(16)).slice(-2)})).join(""),e.abrupt("return",c);case 7:return e.abrupt("return","");case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Xe=function(e){return e.arrayBuffer},Ze=function(e){return e.hashType},$e=Ge.a.mark((function e(){var n,t,r;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Je.d)(Xe);case 2:return n=e.sent,e.next=5,Object(Je.d)(Ze);case 5:return t=e.sent,e.next=8,Object(Je.a)(We,n,t);case 8:return r=e.sent,e.next=11,Object(Je.b)(me(r));case 11:case"end":return e.stop()}}),e)})),en=Object(Ae.b)(),nn=Object(Fe.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,n=arguments.length>1?arguments[1]:void 0;return ye(n)?Pe(e,n):ve(n)?Te(e,n):we(n)?De(e):Se(n)?_e(e,n):Ce(n)?ze(e,n):ke(n)?Ie(e,n):e}),Object(Fe.a)(en));en.run(Ye);var tn,rn,an,cn,sn,on=t.p+"static/media/github.66378707.svg",ln=L.b.main(tn||(tn=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n  max-width: 64rem;\n  height: 100vh;\n  margin: 0 auto;\n"]))),un=L.b.header(rn||(rn=Object(S.a)(["\n  text-align: center;\n"]))),bn=L.b.section(an||(an=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: auto;\n"]))),fn=L.b.footer(cn||(cn=Object(S.a)(["\n  margin: 2rem;\n"]))),hn=function(){return Object(F.jsxs)(ln,{children:[Object(F.jsx)(un,{children:Object(F.jsx)("h1",{children:"File Hash Verifier"})}),Object(F.jsx)(bn,{children:Object(F.jsx)("article",{children:Object(F.jsx)(H.a,{store:nn,children:Object(F.jsx)(He,{})})})}),Object(F.jsx)(fn,{children:Object(F.jsx)("a",{href:"https://github.com/joelgeorgev/file-hash-verifier",children:Object(F.jsx)("img",{src:on,alt:"Go to GitHub repository page"})})})]})},jn=t.p+"static/media/source-sans-pro-v11-latin-regular.96b15882.woff2",dn=t.p+"static/media/source-sans-pro-v11-latin-regular.74ddb2b0.woff",pn=Object(L.a)(sn||(sn=Object(S.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n    overscroll-behavior-y: none;\n  }\n\n  /* source-sans-pro-regular - latin */\n  @font-face {\n    font-family: 'Source Sans Pro';\n    font-style: normal;\n    font-weight: 400;\n    font-display: optional;\n    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),\n        url(",") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url(",") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  }\n"])),jn,dn);k.a.render(Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(pn,{}),Object(F.jsx)(hn,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.1190c002.chunk.js.map
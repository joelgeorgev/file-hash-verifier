(this["webpackJsonpfile-hash-verifier"]=this["webpackJsonpfile-hash-verifier"]||[]).push([[0],{47:function(e,n,r){"use strict";r.r(n);var t,a,c,i,s,o,l,u,b,f,h,j,d,p,O,x,g,m,y,v,w,S=r(4),C=r(17),k=r.n(C),L=r(5),H=r(15),B=r(1),F=L.b.dl(t||(t=Object(S.a)(["\n  margin-top: 2rem;\n"]))),A=L.b.dt(a||(a=Object(S.a)(["\n  font-weight: 700;\n"]))),E=L.b.dd(c||(c=Object(S.a)(["\n  word-break: break-all;\n  margin-bottom: 0.5rem;\n"]))),T=function(e){var n=e.name,r=e.size;return Object(B.jsxs)(F,{children:[Object(B.jsx)(A,{children:"Name"}),Object(B.jsx)(E,{children:n}),Object(B.jsx)(A,{children:"Size"}),Object(B.jsxs)(E,{children:[r," bytes"]})]})},P=r(28),D=r.n(P),_=r.p+"static/media/clippy.b0e31af4.svg",z=L.b.div(i||(i=Object(S.a)(["\n  margin-top: 2rem;\n"]))),I=L.b.label(s||(s=Object(S.a)(["\n  font-weight: 700;\n"]))),R=L.b.div(o||(o=Object(S.a)(["\n  display: flex;\n  height: 2rem;\n"]))),G=L.b.input(l||(l=Object(S.a)(["\n  width: 100%;\n  padding: 0 0.25rem;\n  border: 1px solid #aaa;\n  border-right: 0;\n"]))),J=L.b.button(u||(u=Object(S.a)(["\n  border: 1px solid #aaa;\n  width: 2rem;\n  background-color: transparent;\n  cursor: pointer;\n"]))),N=L.b.img(b||(b=Object(S.a)(["\n  max-width: 100%;\n"]))),U=function(e){var n=e.hash;return Object(B.jsxs)(z,{children:[Object(B.jsx)(I,{htmlFor:"hash",children:"Hash:"}),Object(B.jsxs)(R,{children:[Object(B.jsx)(G,{type:"text",id:"hash",value:n,readOnly:!0}),Object(B.jsx)(J,{onClick:function(){return D()(n)},children:Object(B.jsx)(N,{src:_,alt:"Copy to clipboard"})})]})]})},M=L.b.div(f||(f=Object(S.a)(["\n  margin-top: 2rem;\n  font-weight: 700;\n  text-align: center;\n"]))),V=L.b.progress(h||(h=Object(S.a)(["\n  margin: 0 1rem;\n"]))),Y=function(e){var n=e.progress,r=e.onCancel;return Object(B.jsxs)(M,{children:[Object(B.jsx)("label",{htmlFor:"file-load-progress",children:"Loading file:"}),Object(B.jsx)(V,{id:"file-load-progress",max:"100",value:"".concat(n)}),100!==n&&Object(B.jsx)("button",{onClick:r,children:"Cancel"})]})},q=L.b.label(j||(j=Object(S.a)(["\n  display: block;\n  font-weight: 700;\n  margin-bottom: 1rem;\n"]))),K=function(e){var n=e.isDisabled,r=e.onSelect;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(q,{htmlFor:"file-picker",children:"Click to pick a file."}),Object(B.jsx)("input",{type:"file",id:"file-picker",multiple:!1,disabled:n,onChange:function(e){var n=e.target.files;n&&r(n[0])}})]})},Q=L.b.div(d||(d=Object(S.a)(["\n  margin-top: 2rem;\n  font-weight: 700;\n  text-align: center;\n"]))),W=function(){return Object(B.jsx)(Q,{children:"Calculating Hash..."})},X=r(16),Z=L.b.fieldset(p||(p=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  font-weight: 700;\n  text-align: center;\n  border: 0;\n"]))),$=L.b.input(O||(O=Object(S.a)(["\n  margin: 0 1rem;\n"]))),ee=[["SHA-1","sha-1"],["SHA-256","sha-256"],["SHA-384","sha-384"],["SHA-512","sha-512"]],ne=function(e){var n=e.hashType,r=e.isDisabled,t=e.onSelect;return Object(B.jsx)(Z,{disabled:r,children:ee.map((function(e){var r=Object(X.a)(e,2),a=r[0],c=r[1];return Object(B.jsxs)("label",{children:[Object(B.jsx)($,{type:"radio",name:"hash-type",value:c,checked:c===n,onChange:function(e){return t(e.target.value)}}),a]},c)}))})},re=r(2),te=r.p+"static/media/success.f94dc787.svg",ae=r.p+"static/media/fail.47429a71.svg",ce=L.b.div(x||(x=Object(S.a)(["\n  margin-top: 2rem;\n"]))),ie=L.b.label(g||(g=Object(S.a)(["\n  font-weight: 700;\n"]))),se=L.b.div(m||(m=Object(S.a)(["\n  display: flex;\n  height: 2rem;\n"]))),oe=L.b.input(y||(y=Object(S.a)(["\n  width: 100%;\n  padding: 0 0.25rem;\n  border: 1px solid #aaa;\n  ","\n"])),(function(e){return e.value&&"border-right: 0;"})),le=L.b.img(v||(v=Object(S.a)(["\n  width: 2rem;\n  border: 1px solid #aaa;\n"]))),ue=function(e){var n=e.hash,r=Object(re.useState)(""),t=Object(X.a)(r,2),a=t[0],c=t[1],i=Object(re.useState)(!1),s=Object(X.a)(i,2),o=s[0],l=s[1];return Object(B.jsxs)(ce,{children:[Object(B.jsx)(ie,{htmlFor:"hash-verify",children:"Compare with:"}),Object(B.jsxs)(se,{children:[Object(B.jsx)(oe,{type:"text",id:"hash-verify",value:a,onChange:function(e){var r=e.target.value;c(r),l(n===r.replace(/ /g,"").toLowerCase())}}),a&&Object(B.jsx)(le,{src:o?te:ae,alt:o?"Hashes match":"Hashes do not match"})]})]})},be=H.c,fe="SELECT_FILE",he="FILE_LOAD_PROGRESS",je="CANCEL_FILE_LOAD",de="FILE_LOADED",pe="SELECT_HASH_TYPE",Oe="HASH_CALCULATED",xe=function(e){return{type:he,payload:{progress:e}}},ge=function(e){return{type:de,payload:{arrayBuffer:e}}},me=function(e){return{type:Oe,payload:{hash:e}}},ye=function(e){return e.type===fe},ve=function(e){return e.type===he},we=function(e){return e.type===je},Se=function(e){return e.type===de},Ce=function(e){return e.type===pe},ke=function(e){return e.type===Oe},Le=L.b.div(w||(w=Object(S.a)(["\n  margin: 0 auto;\n"]))),He=function(){var e=be((function(e){return e})),n=Object(H.b)(),r=e.file,t=e.fileLoadProgress,a=e.arrayBuffer,c=e.hashType,i=e.isCalculatingHash,s=e.hash,o=Boolean(t)||i;return Object(B.jsxs)(Le,{children:[Object(B.jsx)(K,{isDisabled:o,onSelect:function(e){return n(function(e){return{type:fe,payload:{file:e}}}(e))}}),Object(B.jsx)(ne,{hashType:c,isDisabled:o,onSelect:function(e){return n(function(e){return{type:pe,payload:{hashType:e}}}(e))}}),t&&Object(B.jsx)(Y,{progress:t,onCancel:function(){return n({type:je})}}),a&&Object(B.jsxs)(B.Fragment,{children:[r&&Object(B.jsx)(T,{name:r.name,size:r.size}),i&&Object(B.jsx)(W,{}),s&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(U,{hash:s}),Object(B.jsx)(ue,{hash:s})]})]})]})},Be=r(12),Fe=r(14),Ae=r(10),Ee={file:null,fileLoadProgress:null,arrayBuffer:null,hashType:null,isCalculatingHash:!1,hash:null},Te=function(e,n){return Object(Ae.a)(Object(Ae.a)({},e),{},{file:n.payload.file,arrayBuffer:Ee.arrayBuffer,hash:Ee.hash})},Pe=function(e,n){return Object(Ae.a)(Object(Ae.a)({},e),{},{fileLoadProgress:n.payload.progress})},De=function(e){return Object(Ae.a)(Object(Ae.a)({},e),{},{file:Ee.file,fileLoadProgress:Ee.fileLoadProgress})},_e=function(e,n){return Object(Ae.a)(Object(Ae.a)({},e),{},{arrayBuffer:n.payload.arrayBuffer,fileLoadProgress:Ee.fileLoadProgress,isCalculatingHash:Boolean(e.hashType)})},ze=function(e,n){return Object(Ae.a)(Object(Ae.a)({},e),{},{hashType:n.payload.hashType,hash:Ee.hash,isCalculatingHash:Boolean(e.arrayBuffer)})},Ie=function(e,n){return Object(Ae.a)(Object(Ae.a)({},e),{},{isCalculatingHash:Ee.isCalculatingHash,hash:n.payload.hash})},Re=r(8),Ge=r.n(Re),Je=r(7),Ne=Ge.a.mark(Me),Ue=Ge.a.mark(Ve);function Me(e){var n;return Ge.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload.file,r.next=3,Object(Je.a)(Ke,n);case 3:return r.next=5,Object(Je.a)($e);case 5:case"end":return r.stop()}}),Ne)}function Ve(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Je.a)($e);case 2:case"end":return e.stop()}}),Ue)}var Ye=Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Je.f)(fe,Me);case 2:return e.next=4,Object(Je.f)(pe,Ve);case 4:case"end":return e.stop()}}),e)})),qe=function(e){return Object(Fe.c)((function(n){var r=new FileReader;r.onload=function(){n({arrayBuffer:r.result}),n(Fe.a)},r.onprogress=function(e){n({progress:Math.round(e.loaded/e.total*100)})},r.onerror=function(e){n({error:e}),n(Fe.a)},r.readAsArrayBuffer(e);return function(){1===r.readyState&&r.abort(),r=null}}))},Ke=Ge.a.mark((function e(n){var r,t,a,c,i,s,o;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Je.a)(qe,n);case 2:r=e.sent,e.prev=3;case 4:return e.next=7,Object(Je.c)({channelOutput:Object(Je.e)(r),cancelFileLoad:Object(Je.e)(je)});case 7:if(t=e.sent,a=t.channelOutput,c=t.cancelFileLoad,!a){e.next=23;break}if(i=a.progress,s=a.arrayBuffer,o=a.error,!s){e.next=16;break}return e.next=15,Object(Je.b)(ge(s));case 15:return e.abrupt("return");case 16:if(!o){e.next=19;break}return console.error("Error during file read operation: ",o),e.abrupt("return");case 19:return e.next=21,Object(Je.b)(xe(i));case 21:e.next=24;break;case 23:c&&r.close();case 24:e.next=4;break;case 26:return e.prev=26,r.close(),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[3,,26,29]])})),Qe=r(29),We=function(){var e=Object(Qe.a)(Ge.a.mark((function e(n){var r,t,a,c,i;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.arrayBuffer,t=n.hashType,!r||!t){e.next=8;break}return e.next=4,crypto.subtle.digest(t,r);case 4:return a=e.sent,c=Array.from(new Uint8Array(a)),i=c.map((function(e){return("00"+e.toString(16)).slice(-2)})).join(""),e.abrupt("return",i);case 8:return e.abrupt("return","");case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Xe=function(e){return e.arrayBuffer},Ze=function(e){return e.hashType},$e=Ge.a.mark((function e(){var n,r,t;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Je.d)(Xe);case 2:return n=e.sent,e.next=5,Object(Je.d)(Ze);case 5:return r=e.sent,e.next=8,Object(Je.a)(We,{arrayBuffer:n,hashType:r});case 8:return t=e.sent,e.next=11,Object(Je.b)(me(t));case 11:case"end":return e.stop()}}),e)})),en=Object(Fe.b)(),nn=Object(Be.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,n=arguments.length>1?arguments[1]:void 0;return ye(n)?Te(e,n):ve(n)?Pe(e,n):we(n)?De(e):Se(n)?_e(e,n):Ce(n)?ze(e,n):ke(n)?Ie(e,n):e}),Object(Be.a)(en));en.run(Ye);var rn,tn,an,cn,sn,on=r.p+"static/media/github.66378707.svg",ln=L.b.main(rn||(rn=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n  max-width: 64rem;\n  height: 100vh;\n  margin: 0 auto;\n"]))),un=L.b.header(tn||(tn=Object(S.a)(["\n  text-align: center;\n"]))),bn=L.b.section(an||(an=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: auto;\n"]))),fn=L.b.footer(cn||(cn=Object(S.a)(["\n  margin: 2rem;\n"]))),hn=function(){return Object(B.jsxs)(ln,{children:[Object(B.jsx)(un,{children:Object(B.jsx)("h1",{children:"File Hash Verifier"})}),Object(B.jsx)(bn,{children:Object(B.jsx)("article",{children:Object(B.jsx)(H.a,{store:nn,children:Object(B.jsx)(He,{})})})}),Object(B.jsx)(fn,{children:Object(B.jsx)("a",{href:"https://github.com/joelgeorgev/file-hash-verifier",children:Object(B.jsx)("img",{src:on,alt:"Go to GitHub repository page"})})})]})},jn=r.p+"static/media/source-sans-pro-v11-latin-regular.96b15882.woff2",dn=r.p+"static/media/source-sans-pro-v11-latin-regular.74ddb2b0.woff",pn=Object(L.a)(sn||(sn=Object(S.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n    overscroll-behavior-y: none;\n  }\n\n  /* source-sans-pro-regular - latin */\n  @font-face {\n    font-family: 'Source Sans Pro';\n    font-style: normal;\n    font-weight: 400;\n    font-display: optional;\n    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),\n        url(",") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url(",") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  }\n"])),jn,dn);k.a.render(Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(pn,{}),Object(B.jsx)(hn,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.b3c6518e.chunk.js.map
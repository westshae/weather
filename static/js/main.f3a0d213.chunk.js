(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{33:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var c,a,r,i,d,o,s,j,b,l,u,O,h,x,p,m,g,f,v,y,w,k,S,F,z,E,D,C,W=t(1),_=t.n(W),I=t(22),T=t.n(I),H=(t(33),t(4)),J=t(2),M=t(3),P=M.a.div(c||(c=Object(J.a)(["\n    background-color:#7997c7;\n    /* background-color:#d4ebf2; */\n    min-height:100vh;\n    display:flex;\n    flex-direction:column;\n    overflow:visible;\n    overflow-x:hidden;\n\n"]))),q=M.a.div(a||(a=Object(J.a)(["\n    margin:auto;\n    margin-left:5rem;\n    margin-right:5rem;\n    background-clip:margin-box;\n    background-color:#2E415F;\n    display:flex;\n    flex-direction:column;\n    @media screen and (max-device-width: 480px) and (orientation: portrait){//Phone\n        margin:1rem;\n    }\n\n"]))),A=t(11),B=t.n(A),R=t(26),G=t(27),K=t.n(G),L=t(0),N=M.a.form(r||(r=Object(J.a)(["\n  display:flex;\n"]))),Q=M.a.input(i||(i=Object(J.a)(["\n  height:100%;\n  width:fit-content;\n  border:none;\n  padding:0.5rem 1rem 0.5rem 1rem;\n  outline:none;\n  font-size:1.5rem;\n"]))),U=M.a.input(d||(d=Object(J.a)(["\n  height:100%;\n  width:100%;\n  border:none;\n  outline:none;\n  padding:0;\n  font-size:1.5rem;\n"]))),V=function(e){var n=Object(W.useState)(""),t=Object(H.a)(n,2),c=t[0],a=t[1],r=function(){var e=Object(R.a)(B.a.mark((function e(){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.a.get("https://api.westshae.com/weather?location="+c);case 3:return e.next=5,e.sent.data;case 5:n=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(L.jsxs)(N,{onSubmit:function(n){n.preventDefault(),r().then((function(n){e.callback(n)}))},children:[Object(L.jsx)(U,{type:"text",value:c,onChange:function(e){a(e.target.value)}}),Object(L.jsx)(Q,{type:"submit",value:"Submit"})]})},X=M.a.button(o||(o=Object(J.a)(["\n    background:transparent;\n    color:#F3F5F5;\n    border:none;\n\n    transition:  0.25s ease-out;\n    font-size:2rem;\n"]))),Y=M.a.nav(s||(s=Object(J.a)(["\n    background-color:#7997c7;\n    display:grid;\n\n\n    @media screen and (max-device-width: 480px) and (orientation: portrait){//Phone\n        grid-template-columns:1fr;\n        margin-left:0%;\n        margin-right:0%;\n    }\n\n    @media screen and (min-device-width: 768px) and (max-device-width: 1024px){//Tablet\n        grid-template-columns:1fr;\n        margin-left:5%;\n        margin-right:5%;\n    }\n\n    @media screen and (min-width: 1024px){//Desktop\n        grid-template-columns:repeat(2, 1fr);\n        margin-left:5%;\n        margin-right:5%;\n    }\n"]))),Z=function(e){var n=Object(W.useState)(""),t=Object(H.a)(n,2),c=t[0],a=t[1],r=Object(W.useState)(""),i=Object(H.a)(r,2),d=i[0],o=i[1];return Object(W.useEffect)((function(){void 0!=e.data&&(a(e.data.city.cityname),o(e.data.city.countryname))}),[e]),Object(L.jsxs)(Y,{children:[Object(L.jsx)(V,{callback:e.callback}),""!=c&&Object(L.jsxs)(X,{onClick:function(){return function(e){var n=window.open(e,"_blank","noopener,noreferrer");n&&(n.opener=null)}("https://www.google.com/maps/search/?api=1&query="+c)},children:[c,", ",d]})]})},$=t(28),ee=t.n($),ne=M.a.div(j||(j=Object(J.a)(["\n    height:5rem;\n    background-color:#7997c7;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n\n    //Mobile\n    @media only screen\n    and (orientation: portrait)\n    and (max-device-width: 480px){\n        display:grid;\n        height:10rem;\n    }\n"]))),te=M.a.p(b||(b=Object(J.a)(["\n    text-align:center;\n    color:#F3F5F5;\n    font-size:1.25em;\n\n    margin:0.75rem;\n"]))),ce=M.a.a(l||(l=Object(J.a)(["\n    color:#F3F5F5;\n    height:auto;\n"]))),ae=(M.a.img(u||(u=Object(J.a)(["\n    //Desktop\n    @media only screen \n    and (min-device-width: 1025px){\n        :hover{\n            opacity:0.7;\n        }\n    }\n\n"]))),function(){return Object(L.jsxs)(ne,{children:[Object(L.jsx)(te,{children:"Application created by github.com/westshae"}),Object(L.jsx)(ee.a,{minWidth:480,children:Object(L.jsx)(ce,{href:"https://github.com/vecnz/vecnz.github.io",target:"_blank",children:"github.com/westshae"})})]})}),re=M.a.div(O||(O=Object(J.a)(["\n  display:grid;\n  grid-template-rows:2fr 8fr;\n  background-color:#F3F5F5;\n  align-items:center;\n  border:none;\n  box-shadow: 5px 5px 5px #202020;\n  -moz-box-shadow: 5px 5px 5px #202020;\n  -webkit-box-shadow: 5px 5px 5px #202020;\n  -o-box-shadow: 5px 5px 5px #202020;\n  border-radius:0.5rem;\n"]))),ie=(M.a.p(h||(h=Object(J.a)(["\n  font-size:1.5em;\n  display:grid;\n  color:#312E3D;\n  justify-content:center;\n  align-items:center;\n  white-space:nowrap;\n"]))),M.a.img(x||(x=Object(J.a)(["\n  display:grid;\n  margin-left:auto;\n  height:100%;\n"])))),de=M.a.div(p||(p=Object(J.a)(["\n  display:flex;\n"]))),oe=M.a.h1(m||(m=Object(J.a)(["\n  padding:none;\n  padding-left:1rem;\n"]))),se=M.a.table(g||(g=Object(J.a)(["\nborder-collapse:collapse;\nheight:90%;\n"]))),je=M.a.tr(f||(f=Object(J.a)(["\n\n:nth-child(odd){\n    background-color:#d4ebf2;\n  }\n"]))),be=M.a.td(v||(v=Object(J.a)(["\n  font-size:120%;\n  text-align:center;\n\n"]))),le=function(e){var n=Object(W.useState)(""),t=Object(H.a)(n,2),c=t[0],a=t[1],r=Object(W.useState)(""),i=Object(H.a)(r,2),d=i[0],o=i[1],s=Object(W.useState)(""),j=Object(H.a)(s,2),b=j[0],l=j[1],u=Object(W.useState)(""),O=Object(H.a)(u,2),h=O[0],x=O[1],p=Object(W.useState)(""),m=Object(H.a)(p,2),g=m[0],f=m[1];return Object(W.useEffect)((function(){null!=e.current&&null!=e.astrology&&(a(e.current.temp),o(e.current.condition.text),l(e.current.condition.icon),x(e.current.windspeed),f(e.current.humidity))}),[e]),Object(L.jsx)("div",{children:""!=b&&Object(L.jsxs)(re,{children:[Object(L.jsxs)(de,{children:[Object(L.jsx)(oe,{children:"Weather Information"}),Object(L.jsx)(ie,{src:b})]}),Object(L.jsxs)(se,{children:[Object(L.jsxs)(je,{children:[Object(L.jsx)(be,{children:"Condition"}),Object(L.jsx)(be,{children:d})]}),Object(L.jsxs)(je,{children:[Object(L.jsx)(be,{children:"Temperature"}),Object(L.jsxs)(be,{children:[c," C"]})]}),Object(L.jsxs)(je,{children:[Object(L.jsx)(be,{children:"Wind"}),Object(L.jsxs)(be,{children:[h,"km/h"]})]}),Object(L.jsxs)(je,{children:[Object(L.jsx)(be,{children:"Humidity"}),Object(L.jsxs)(be,{children:[g,"%"]})]}),Object(L.jsxs)(je,{children:[Object(L.jsx)(be,{children:"Date"}),Object(L.jsx)(be,{children:"Realtime"})]})]})]})})},ue=M.a.div(y||(y=Object(J.a)(["\n  display:grid;\n  grid-template-rows:2fr 8fr;\n  background-color:#F3F5F5;\n  align-items:center;\n  border:none;\n  border-radius:0.5rem;\n\n  box-shadow: 5px 5px 5px #202020;\n  -moz-box-shadow: 5px 5px 5px #202020;\n  -webkit-box-shadow: 5px 5px 5px #202020;\n  -o-box-shadow: 5px 5px 5px #202020;\n"]))),Oe=M.a.table(w||(w=Object(J.a)(["\nborder-collapse:collapse;\nheight:90%;\n"]))),he=M.a.tr(k||(k=Object(J.a)(["\n\n:nth-child(odd){\n    background-color:#d4ebf2;\n  }\n"]))),xe=M.a.td(S||(S=Object(J.a)(["\n  font-size:120%;\n  text-align:center;\n\n"]))),pe=M.a.img(F||(F=Object(J.a)(["\n  display:grid;\n  margin-left:auto;\n  height:100%;\n"]))),me=M.a.div(z||(z=Object(J.a)(["\n  display:flex;\n"]))),ge=M.a.h1(E||(E=Object(J.a)(["\n  padding:none;\n  /* padding-left:1rem; */\n"]))),fe=function(e){var n=Object(W.useState)(""),t=Object(H.a)(n,2),c=t[0],a=t[1],r=Object(W.useState)(""),i=Object(H.a)(r,2),d=i[0],o=i[1],s=Object(W.useState)(""),j=Object(H.a)(s,2),b=j[0],l=j[1],u=Object(W.useState)(""),O=Object(H.a)(u,2),h=O[0],x=O[1],p=Object(W.useState)(""),m=Object(H.a)(p,2),g=m[0],f=m[1],v=Object(W.useState)(""),y=Object(H.a)(v,2),w=y[0],k=y[1],S=Object(W.useState)(""),F=Object(H.a)(S,2),z=F[0],E=F[1];return Object(W.useEffect)((function(){a(e.data.date),o(e.data.day.avghumidity),l(e.data.day.mintemp_c),x(e.data.day.maxtemp_c),f(e.data.day.condition.text),k(e.data.day.condition.icon),E(e.data.day.maxwind_kph)}),[e]),Object(L.jsxs)(ue,{children:[Object(L.jsxs)(me,{children:[Object(L.jsx)(ge,{children:"Weather Information"}),Object(L.jsx)(pe,{src:w})]}),Object(L.jsxs)(Oe,{children:[Object(L.jsxs)(he,{children:[Object(L.jsx)(xe,{children:"Condition"}),Object(L.jsx)(xe,{children:g})]}),Object(L.jsxs)(he,{children:[Object(L.jsx)(xe,{children:"Temperature"}),Object(L.jsxs)(xe,{children:[b," - ",h," C"]})]}),Object(L.jsxs)(he,{children:[Object(L.jsx)(xe,{children:"Wind"}),Object(L.jsxs)(xe,{children:[z,"km/h"]})]}),Object(L.jsxs)(he,{children:[Object(L.jsx)(xe,{children:"Humidity"}),Object(L.jsxs)(xe,{children:[d,"%"]})]}),Object(L.jsxs)(he,{children:[Object(L.jsx)(xe,{children:"Date"}),Object(L.jsx)(xe,{children:c})]})]})]})},ve=function(e){var n=Object(W.useState)([]),t=Object(H.a)(n,2),c=t[0],a=t[1];Object(W.useEffect)((function(){null!=e.forecast&&a(e.forecast.forecastday)}),[e]);var r=M.a.div(D||(D=Object(J.a)(["\n    display:grid;\n    grid-template-columns:1fr;\n    grid-column-gap:3rem;\n    grid-row-gap:3rem;\n    background-color:#7997c7;\n    @media screen and (min-width: 1024px){//Desktop\n    grid-template-columns:repeat(4, 1fr);\n    }\n  "])));return Object(L.jsxs)(r,{children:[Object(L.jsx)(le,{current:e.current,astrology:e.astrology}),c.map((function(e,n){return Object(L.jsx)(fe,{data:e},n)}))]})},ye=M.a.div(C||(C=Object(J.a)(["\n  display:grid;\n  grid-template-columns:1fr;\n  gap:0.5rem;\n"]))),we=function(e){var n=Object(W.useState)(null),t=Object(H.a)(n,2),c=t[0],a=t[1],r=Object(W.useState)(null),i=Object(H.a)(r,2),d=i[0],o=i[1],s=Object(W.useState)(null),j=Object(H.a)(s,2),b=j[0],l=j[1];return Object(W.useEffect)((function(){void 0!=e.data&&(a(e.data.current),o(e.data.forecast),l(e.data.astrology))}),[e]),Object(L.jsx)(ye,{children:Object(L.jsx)(ve,{forecast:d,current:c,astrology:b})})},ke=function(){var e=Object(W.useState)(),n=Object(H.a)(e,2),t=n[0],c=n[1];return Object(L.jsxs)(P,{children:[Object(L.jsx)("p",{}),Object(L.jsx)(Z,{data:t,callback:c}),Object(L.jsx)("p",{}),Object(L.jsx)(q,{children:Object(L.jsx)(we,{data:t})}),Object(L.jsx)("p",{}),Object(L.jsx)(ae,{})]})};T.a.render(Object(L.jsx)(_.a.StrictMode,{children:Object(L.jsx)(ke,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.f3a0d213.chunk.js.map
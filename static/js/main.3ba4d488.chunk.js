(this.webpackJsonpbucket_list=this.webpackJsonpbucket_list||[]).push([[0],{61:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var c,i,o=n(1),r=n.n(o),a=n(28),d=n.n(a),u=(n(61),n(17)),s=n(47),b=n(34),l=n(48),O=n(53),j=(n.p,n(18)),p=n(23),h=n(4),f=j.a.div(c||(c=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  "]))),_=j.a.div(i||(i=Object(u.a)(["\n  padding: 16px;\n  margin: 8px;\n  background-color: ",";\n  cursor:pointer;\n"])),(function(t){return t.color})),E=function(t){var e=Object(p.d)((function(t){return t.bucket.list}));return Object(h.jsx)(f,{children:e.map((function(e,n){return Object(h.jsx)(_,{color:e.completed?"orange":"aliceblue",onClick:function(){t.history.push("/detail/"+n+"/"+e.completed)},children:e.text},n)}))})},x=n(6),S=n(73),k=n(91),T=n(11),v=n(26),D=n(43),g=(n(72),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/bucketList",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/bucketList",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/bucketList",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/bucketList",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/bucketList",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/bucketList",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).APP_ID,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/bucketList",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MEASUREMENT_ID});D.a.initializeApp(g);var C=D.a.firestore().collection("bucket"),m={list:[{text:"\uc601\ud654\uad00 \uac00\uae30",completed:!1},{text:"\ub9e4\uc77c \ucc45\uc77d\uae30",completed:!1},{text:"\uc218\uc601 \ubc30\uc6b0\uae30",completed:!1}],is_loaded:!1},R=function(t){return{type:"bucket/LOADED",loaded:t}},y=function(t,e){return function(n,c){var i,o=c().bucket.list[t];(i="false"===e?Object(T.a)(Object(T.a)({},o),{},{completed:!0}):Object(T.a)(Object(T.a)({},o),{},{completed:!1})).id&&(n(R(!1)),C.doc(i.id).update(i).then((function(c){n(function(t,e){return"false"===e?{type:"bucket/UPDATE",bucket:t}:{type:"bucket/UPDATE_CANCEL",bucket:t}}(t,e)),n(R(!0))})).catch((function(t){console.log(t)})))}};var A,L,P,K,H,I,N,U=function(t){var e=Object(p.c)(),n=Object(p.d)((function(t){return t.bucket.list})),c=parseInt(t.match.params.index),i=t.match.params.completed;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:[n[c].text,"(","false"===i?"\ubbf8\uc644\ub8cc":"\uc644\ub8cc",")"]}),Object(h.jsxs)(k.a,{children:[Object(h.jsx)(S.a,{color:"secondary",onClick:function(){var n;e((n=c,function(t,e){var c=e().bucket.list[n];c.id&&(t(R(!1)),C.doc(c.id).delete().then((function(e){t(function(t){return{type:"bucket/DELETE",bucket:t}}(n)),t(R(!0))})).catch((function(t){console.log(t)})))})),t.history.goBack()},children:"\uc0ad\uc81c\ud558\uae30"}),"false"===i?Object(h.jsx)(S.a,{color:"primary",onClick:function(){e(y(c,i)),t.history.goBack()},children:"\uc644\ub8cc\ud558\uae30"}):Object(h.jsx)(S.a,{color:"primary",onClick:function(){e(y(c,i)),t.history.goBack()},children:"\uc644\ub8cc \ucde8\uc18c\ud558\uae30"}),Object(h.jsx)(S.a,{onClick:function(){t.history.goBack()},children:"\ubaa9\ub85d"})]})]})},W=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"\uc8fc\uc18c\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc544\uc694!"}),Object(h.jsx)("button",{onClick:function(){t.history.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})},F=j.a.div(A||(A=Object(u.a)(["\n    background: #eee;\n    width: 100%;\n    height: 40px;\n"]))),B=j.a.div(L||(L=Object(u.a)(["\n    background: orange;\n    height: 40px;\n    width: ",";\n    transition-property: width;\n    transition-duration: 4s; \n    transition-delay: 4s;\n"])),(function(t){return t.width})),w=function(t){var e=Object(p.d)((function(t){return t.bucket.list})),n=0;return e.map((function(t,e){t.completed&&n++})),Object(h.jsx)(F,{children:Object(h.jsx)(B,{width:n/e.length*100+"%"})})},V=n(92),M=j.a.div(P||(P=Object(u.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw; \n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #ede2ff;\n"]))),G=function(t){return Object(h.jsx)(M,{children:Object(h.jsx)(V.a,{style:{fontSize:"150px",color:"#673ab7"}})})},J=function(t){Object(l.a)(n,t);var e=Object(O.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).addBucketList=function(){var t=c.text.current.value;c.props.create(t)},c.state={},c.text=r.a.createRef(),c}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.load()}},{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{className:"App",children:this.props.is_loaded?Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsxs)(Y,{children:[Object(h.jsx)(q,{children:"\ub0b4 \ubc84\ud0b7\ub9ac\uc2a4\ud2b8"}),Object(h.jsx)(w,{}),Object(h.jsx)(Q,{}),Object(h.jsxs)(x.c,{children:[Object(h.jsx)(x.a,{path:"/",exact:!0,render:function(e){return Object(h.jsx)(E,{history:t.props.history,list:t.props.bucket_list})}}),Object(h.jsx)(x.a,{path:"/detail/:index/:completed",component:U}),Object(h.jsx)(x.a,{render:function(t){return Object(h.jsx)(W,{history:t.history})}})]})]}),Object(h.jsxs)(z,{children:[Object(h.jsx)("input",{type:"text",ref:this.text,style:{marginRight:"7px"}}),Object(h.jsx)("button",{onClick:this.addBucketList,style:{cursor:"pointer"},children:"\ucd94\uac00\ud558\uae30"})]})]}):Object(h.jsx)(G,{})})}}]),n}(r.a.Component),z=j.a.div(K||(K=Object(u.a)(["\n  max-width: 350px;\n  min-height: 1vh;\n  background-color: #fff;\n  padding: 16px;\n  margin: 20px auto;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n"]))),Y=j.a.div(H||(H=Object(u.a)(["\n  max-width: 350px;\n  min-height: 80vh;\n  background-color: #fff;\n  padding: 16px;\n  margin: 20px auto;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n"]))),q=j.a.h1(I||(I=Object(u.a)(["\n  color: slateblue;\n  text-align: center;\n"]))),Q=j.a.hr(N||(N=Object(u.a)(["\n  margin: 16px 0px;\n  border: 1px dotted #ddd;\n"]))),X=Object(p.b)((function(t){return{bucket_list:t.bucket.list,is_loaded:t.bucket.is_loaded}}),(function(t){return{load:function(){t((function(t){C.get().then((function(e){var n=[];e.forEach((function(t){t.exists&&(n=[].concat(Object(v.a)(n),[Object(T.a)({id:t.id},t.data())]))})),t({type:"bucket/LOAD",bucket:n})}))}))},create:function(e){t(function(t){return function(e){var n={text:t,completed:!1};e(R(!1)),C.add(n).then((function(t){n=Object(T.a)(Object(T.a)({},n),{},{id:t.id}),e(function(t){return{type:"bucket/CREATE",bucket:t}}(n)),e(R(!0))}))}}(e))}}}))(Object(x.f)(J)),Z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),o(t),r(t)}))},$=n(42),tt=n(39),et=n(52),nt=n(14),ct=(Object(nt.a)(),[et.a]),it=tt.a.apply(void 0,ct),ot=Object(tt.b)({bucket:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case"bucket/LOAD":return e.bucket.length>0?{list:e.bucket,is_loaded:!0}:t;case"bucket/CREATE":return{list:[].concat(Object(v.a)(t.list),[e.bucket])};case"bucket/UPDATE":return{list:t.list.map((function(t,n){return n===e.bucket?Object(T.a)(Object(T.a)({},t),{},{completed:!0}):t}))};case"bucket/UPDATE_CANCEL":return{list:t.list.map((function(t,n){return n===e.bucket?Object(T.a)(Object(T.a)({},t),{},{completed:!1}):t}))};case"bucket/DELETE":return{list:t.list.filter((function(t,n){if(n!==e.bucket)return t}))};case"bucket/LOADED":return Object(T.a)(Object(T.a)({},t),{},{is_loaded:e.loaded});default:return t}}}),rt=Object(tt.c)(ot,it);d.a.render(Object(h.jsx)(p.a,{store:rt,children:Object(h.jsx)($.a,{basename:"/bucketList",children:Object(h.jsx)(X,{})})}),document.getElementById("root")),Z()}},[[71,1,2]]]);
//# sourceMappingURL=main.3ba4d488.chunk.js.map
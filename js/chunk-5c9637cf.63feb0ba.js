(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c9637cf"],{"0e6b6":function(e,r,o){},"107c":function(e,r,o){var t=o("d039"),n=o("da84"),i=n.RegExp;e.exports=t((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,r,o){"use strict";var t=o("2ba4"),n=o("c65b"),i=o("e330"),s=o("d784"),c=o("44e7"),a=o("825a"),l=o("1d80"),u=o("4840"),p=o("8aa5"),d=o("50c4"),f=o("577e"),g=o("dc4a"),v=o("4dae"),b=o("14c3"),h=o("9263"),w=o("9f7f"),m=o("d039"),_=w.UNSUPPORTED_Y,x=4294967295,k=Math.min,y=[].push,S=i(/./.exec),P=i(y),J=i("".slice),I=!m((function(){var e=/(?:)/,r=e.exec;e.exec=function(){return r.apply(this,arguments)};var o="ab".split(e);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}));s("split",(function(e,r,o){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,o){var i=f(l(this)),s=void 0===o?x:o>>>0;if(0===s)return[];if(void 0===e)return[i];if(!c(e))return n(r,i,e,s);var a,u,p,d=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),b=0,w=new RegExp(e.source,g+"g");while(a=n(h,w,i)){if(u=w.lastIndex,u>b&&(P(d,J(i,b,a.index)),a.length>1&&a.index<i.length&&t(y,d,v(a,1)),p=a[0].length,b=u,d.length>=s))break;w.lastIndex===a.index&&w.lastIndex++}return b===i.length?!p&&S(w,"")||P(d,""):P(d,J(i,b)),d.length>s?v(d,0,s):d}:"0".split(void 0,0).length?function(e,o){return void 0===e&&0===o?[]:n(r,this,e,o)}:r,[function(r,o){var t=l(this),s=void 0==r?void 0:g(r,e);return s?n(s,r,t,o):n(i,f(t),r,o)},function(e,t){var n=a(this),s=f(e),c=o(i,n,s,t,i!==r);if(c.done)return c.value;var l=u(n,RegExp),g=n.unicode,v=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(_?"g":"y"),h=new l(_?"^(?:"+n.source+")":n,v),w=void 0===t?x:t>>>0;if(0===w)return[];if(0===s.length)return null===b(h,s)?[s]:[];var m=0,y=0,S=[];while(y<s.length){h.lastIndex=_?0:y;var I,E=b(h,_?J(s,y):s);if(null===E||(I=k(d(h.lastIndex+(_?y:0)),s.length))===m)y=p(s,y,g);else{if(P(S,J(s,m,y)),S.length===w)return S;for(var R=1;R<=E.length-1;R++)if(P(S,E[R]),S.length===w)return S;y=m=I}}return P(S,J(s,m)),S}]}),!I,_)},"14c3":function(e,r,o){var t=o("da84"),n=o("c65b"),i=o("825a"),s=o("1626"),c=o("c6b6"),a=o("9263"),l=t.TypeError;e.exports=function(e,r){var o=e.exec;if(s(o)){var t=n(o,e,r);return null!==t&&i(t),t}if("RegExp"===c(e))return n(a,e,r);throw l("RegExp#exec called on incompatible receiver")}},"44e7":function(e,r,o){var t=o("861d"),n=o("c6b6"),i=o("b622"),s=i("match");e.exports=function(e){var r;return t(e)&&(void 0!==(r=e[s])?!!r:"RegExp"==n(e))}},"4dae":function(e,r,o){var t=o("da84"),n=o("23cb"),i=o("07fa"),s=o("8418"),c=t.Array,a=Math.max;e.exports=function(e,r,o){for(var t=i(e),l=n(r,t),u=n(void 0===o?t:o,t),p=c(a(u-l,0)),d=0;l<u;l++,d++)s(p,d,e[l]);return p.length=d,p}},8418:function(e,r,o){"use strict";var t=o("a04b"),n=o("9bf2"),i=o("5c6c");e.exports=function(e,r,o){var s=t(r);s in e?n.f(e,s,i(0,o)):e[s]=o}},"8aa5":function(e,r,o){"use strict";var t=o("6547").charAt;e.exports=function(e,r,o){return r+(o?t(e,r).length:1)}},9263:function(e,r,o){"use strict";var t=o("c65b"),n=o("e330"),i=o("577e"),s=o("ad6d"),c=o("9f7f"),a=o("5692"),l=o("7c73"),u=o("69f3").get,p=o("fce3"),d=o("107c"),f=a("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,v=g,b=n("".charAt),h=n("".indexOf),w=n("".replace),m=n("".slice),_=function(){var e=/a/,r=/b*/g;return t(g,e,"a"),t(g,r,"a"),0!==e.lastIndex||0!==r.lastIndex}(),x=c.BROKEN_CARET,k=void 0!==/()??/.exec("")[1],y=_||k||x||p||d;y&&(v=function(e){var r,o,n,c,a,p,d,y=this,S=u(y),P=i(e),J=S.raw;if(J)return J.lastIndex=y.lastIndex,r=t(v,J,P),y.lastIndex=J.lastIndex,r;var I=S.groups,E=x&&y.sticky,R=t(s,y),C=y.source,O=0,F=P;if(E&&(R=w(R,"y",""),-1===h(R,"g")&&(R+="g"),F=m(P,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==b(P,y.lastIndex-1))&&(C="(?: "+C+")",F=" "+F,O++),o=new RegExp("^(?:"+C+")",R)),k&&(o=new RegExp("^"+C+"$(?!\\s)",R)),_&&(n=y.lastIndex),c=t(g,E?o:y,F),E?c?(c.input=m(c.input,O),c[0]=m(c[0],O),c.index=y.lastIndex,y.lastIndex+=c[0].length):y.lastIndex=0:_&&c&&(y.lastIndex=y.global?c.index+c[0].length:n),k&&c&&c.length>1&&t(f,c[0],o,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(c[a]=void 0)})),c&&I)for(c.groups=p=l(null),a=0;a<I.length;a++)d=I[a],p[d[0]]=c[d[1]];return c}),e.exports=v},"9f7f":function(e,r,o){var t=o("d039"),n=o("da84"),i=n.RegExp,s=t((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),c=s||t((function(){return!i("a","y").sticky})),a=s||t((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:a,MISSED_STICKY:c,UNSUPPORTED_Y:s}},a15b:function(e,r,o){"use strict";var t=o("23e7"),n=o("e330"),i=o("44ad"),s=o("fc6a"),c=o("a640"),a=n([].join),l=i!=Object,u=c("join",",");t({target:"Array",proto:!0,forced:l||!u},{join:function(e){return a(s(this),void 0===e?",":e)}})},a358:function(e,r,o){"use strict";o.d(r,"a",(function(){return s})),o.d(r,"c",(function(){return c})),o.d(r,"b",(function(){return a}));o("a15b"),o("ac1f"),o("1276");var t=o("cff8"),n=o.n(t),i=o("b775"),s={test:"controller.example.test",checkForUpdater:"controller.framework.checkForUpdater",downloadApp:"controller.framework.downloadApp",dbOperation:"controller.framework.dbOperation",sqlitedbOperation:"controller.framework.sqlitedbOperation",uploadFile:"controller.framework.uploadFile",checkHttpServer:"controller.framework.checkHttpServer",doHttpRequest:"controller.framework.doHttpRequest",doSocketRequest:"controller.framework.doSocketRequest",ipcInvokeMsg:"controller.framework.ipcInvokeMsg",ipcSendSyncMsg:"controller.framework.ipcSendSyncMsg",ipcSendMsg:"controller.framework.ipcSendMsg",startJavaServer:"controller.framework.startJavaServer",closeJavaServer:"controller.framework.closeJavaServer",someJob:"controller.framework.someJob",timerJobProgress:"controller.framework.timerJobProgress",createPool:"controller.framework.createPool",createPoolNotice:"controller.framework.createPoolNotice",someJobByPool:"controller.framework.someJobByPool",hello:"controller.framework.hello",openSoftware:"controller.framework.openSoftware",messageShow:"controller.os.messageShow",messageShowConfirm:"controller.os.messageShowConfirm",selectFolder:"controller.os.selectFolder",openDirectory:"controller.os.openDirectory",loadViewContent:"controller.os.loadViewContent",removeViewContent:"controller.os.removeViewContent",createWindow:"controller.os.createWindow",getWCid:"controller.os.getWCid",sendNotification:"controller.os.sendNotification",initPowerMonitor:"controller.os.initPowerMonitor",getScreen:"controller.os.getScreen",autoLaunch:"controller.os.autoLaunch",setTheme:"controller.os.setTheme",getTheme:"controller.os.getTheme",alwaysOnTop:"controller.os.alwaysOnTop",closeWindow:"controller.os.closeWindow",openWindow:"controller.os.openWindow",setWindowSize:"controller.os.setWindowSize",getPrinterList:"controller.hardware.getPrinterList",print:"controller.hardware.print",printStatus:"controller.hardware.printStatus",selectFile:"controller.effect.selectFile"},c={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},a=function(e,r){n.a.get("httpServiceConfig");var o="http://192.168.1.2:4444",t=e.split(".").join("/");return t=o+"/api"+t,console.log("url:",t),Object(i["b"])({url:t,method:"post",data:r,params:{},timeout:6e4})}},a640:function(e,r,o){"use strict";var t=o("d039");e.exports=function(e,r){var o=[][e];return!!o&&t((function(){o.call(null,r||function(){return 1},1)}))}},ac1f:function(e,r,o){"use strict";var t=o("23e7"),n=o("9263");t({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,r,o){"use strict";var t=o("825a");e.exports=function(){var e=t(this),r="";return e.global&&(r+="g"),e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),e.dotAll&&(r+="s"),e.unicode&&(r+="u"),e.sticky&&(r+="y"),r}},d784:function(e,r,o){"use strict";o("ac1f");var t=o("e330"),n=o("6eeb"),i=o("9263"),s=o("d039"),c=o("b622"),a=o("9112"),l=c("species"),u=RegExp.prototype;e.exports=function(e,r,o,p){var d=c(e),f=!s((function(){var r={};return r[d]=function(){return 7},7!=""[e](r)})),g=f&&!s((function(){var r=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[l]=function(){return o},o.flags="",o[d]=/./[d]),o.exec=function(){return r=!0,null},o[d](""),!r}));if(!f||!g||o){var v=t(/./[d]),b=r(d,""[e],(function(e,r,o,n,s){var c=t(e),a=r.exec;return a===i||a===u.exec?f&&!s?{done:!0,value:v(r,o,n)}:{done:!0,value:c(o,r,n)}:{done:!1}}));n(String.prototype,e,b[0]),n(u,d,b[1])}p&&a(u[d],"sham",!0)}},d981:function(e,r,o){"use strict";o("0e6b6")},e9c4:function(e,r,o){var t=o("23e7"),n=o("da84"),i=o("d066"),s=o("2ba4"),c=o("e330"),a=o("d039"),l=n.Array,u=i("JSON","stringify"),p=c(/./.exec),d=c("".charAt),f=c("".charCodeAt),g=c("".replace),v=c(1..toString),b=/[\uD800-\uDFFF]/g,h=/^[\uD800-\uDBFF]$/,w=/^[\uDC00-\uDFFF]$/,m=function(e,r,o){var t=d(o,r-1),n=d(o,r+1);return p(h,e)&&!p(w,n)||p(w,e)&&!p(h,t)?"\\u"+v(f(e,0),16):e},_=a((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&t({target:"JSON",stat:!0,forced:_},{stringify:function(e,r,o){for(var t=0,n=arguments.length,i=l(n);t<n;t++)i[t]=arguments[t];var c=s(u,null,i);return"string"==typeof c?g(c,b,m):c}})},fce3:function(e,r,o){var t=o("d039"),n=o("da84"),i=n.RegExp;e.exports=t((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},ff51:function(e,r,o){"use strict";o.r(r);var t=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{attrs:{id:"app-base-jobs"}},[e._m(0),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:function(r){return e.runJob(1,"create")}}},[e._v("执行任务1")]),e._v(" 进度："+e._s(e.progress1)+" ， 进程pid："+e._s(e.progress1_pid)+" "),o("a-button",{on:{click:function(r){return e.runJob(1,"close")}}},[e._v("关闭")])],1),o("p"),o("a-space",[o("a-button",{on:{click:function(r){return e.runJob(2,"create")}}},[e._v("执行任务2")]),e._v(" 进度："+e._s(e.progress2)+" ， 进程pid："+e._s(e.progress2_pid)+" "),o("a-button",{on:{click:function(r){return e.runJob(2,"close")}}},[e._v("关闭")])],1)],1),e._m(1),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:function(r){return e.createPool()}}},[e._v("创建进程池")]),e._v(" 进程pids："+e._s(e.processPids)+" ")],1),o("p"),o("a-space",[o("a-button",{on:{click:function(r){return e.runJobByPool(3,"run")}}},[e._v("执行任务3")]),e._v(" 进度："+e._s(e.progress3)+" ，进程pid："+e._s(e.progress3_pid)+" ")],1),o("p"),o("a-space",[o("a-button",{on:{click:function(r){return e.runJobByPool(4,"run")}}},[e._v("执行任务4")]),e._v(" 进度："+e._s(e.progress4)+" ，进程pid："+e._s(e.progress4_pid)+" ")],1),o("p"),o("a-space",[o("a-button",{on:{click:function(r){return e.runJobByPool(5,"run")}}},[e._v("执行任务5")]),e._v(" 进度："+e._s(e.progress5)+" ，进程pid："+e._s(e.progress5_pid)+" ")],1),o("p"),o("a-space",[o("a-button",{on:{click:function(r){return e.runJobByPool(6,"run")}}},[e._v("执行任务6")]),e._v(" 进度："+e._s(e.progress6)+" ，进程pid："+e._s(e.progress6_pid)+" ")],1)],1)])},n=[function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 1. 任务 / 并发任务 ")])])},function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 2. 任务池 / 并发任务 ")])])}],i=(o("e9c4"),o("a358")),s={data:function(){return{processPids:"",progress1:0,progress2:0,progress3:0,progress4:0,progress5:0,progress6:0,progress1_pid:0,progress2_pid:0,progress3_pid:0,progress4_pid:0,progress5_pid:0,progress6_pid:0}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.$ipc.removeAllListeners(i["a"].timerJobProgress),this.$ipc.removeAllListeners(i["a"].createPoolNotice),this.$ipc.on(i["a"].timerJobProgress,(function(r,o){switch(o.jobId){case 1:e.progress1=o.number,e.progress1_pid=0==o.pid?o.pid:e.progress1_pid;break;case 2:e.progress2=o.number,e.progress2_pid=0==o.pid?o.pid:e.progress2_pid;break;case 3:e.progress3=o.number,e.progress3_pid=0==o.pid?o.pid:e.progress3_pid;break;case 4:e.progress4=o.number,e.progress4_pid=0==o.pid?o.pid:e.progress4_pid;break;case 5:e.progress5=o.number,e.progress5_pid=0==o.pid?o.pid:e.progress5_pid;break;case 6:e.progress6=o.number,e.progress6_pid=0==o.pid?o.pid:e.progress6_pid;break}})),this.$ipc.on(i["a"].createPoolNotice,(function(r,o){var t=JSON.stringify(o);e.processPids=t}))},runJob:function(e,r){var o=this,t={id:e,type:"timer",action:r};this.$ipc.invoke(i["a"].someJob,t).then((function(e){switch(e.jobId){case 1:o.progress1_pid=e.result.pid;break;case 2:o.progress2_pid=e.result.pid;break}}))},createPool:function(){var e={number:3};this.$ipc.send(i["a"].createPool,e)},runJobByPool:function(e,r){var o=this,t={id:e,type:"timer",action:r};this.$ipc.invoke(i["a"].someJobByPool,t).then((function(e){switch(e.jobId){case 3:o.progress3_pid=e.result.pid;break;case 4:o.progress4_pid=e.result.pid;break;case 5:o.progress5_pid=e.result.pid;break;case 6:o.progress6_pid=e.result.pid;break}}))}}},c=s,a=(o("d981"),o("2877")),l=Object(a["a"])(c,t,n,!1,null,"09b653a0",null);r["default"]=l.exports}}]);
//# sourceMappingURL=chunk-5c9637cf.63feb0ba.js.map
(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"Soe+":function(e){e.exports=JSON.parse('{"name":"@visx/demo-axis","description":"Standalone axis demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/d3-time-format":"2.1.1","@types/react":"^16","@types/react-dom":"^16","@visx/axis":"latest","@visx/curve":"latest","@visx/gradient":"latest","@visx/grid":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/react-spring":"latest","@visx/responsive":"latest","@visx/shape":"latest","@visx/scale":"latest","d3-time-format":"^2.2.3","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","react-spring":"8.0.27","typescript":"^3"},"keywords":["axis","scales","visualization","d3","react","visx"]}')},ewQP:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=e.x,n=e.x0,l=e.x1,s=e.y,u=e.y1,f=e.y0,m=e.yScale,d=e.data,p=void 0===d?[]:d,y=e.defined,v=void 0===y?function(){return!0}:y,h=e.className,x=e.curve,k=e.innerRef,g=e.children,b=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["x","x0","x1","y","y1","y0","yScale","data","defined","className","curve","innerRef","children"]),O=(0,o.area)({x:t,x0:n,x1:l,defined:v,curve:x});f?(0,i.default)(O.y0,f):O.y0(m.range()[0]);s&&!u&&(0,i.default)(O.y1,s);u&&!s&&(0,i.default)(O.y1,u);return g?a.default.createElement(a.default.Fragment,null,g({path:O})):a.default.createElement("path",c({ref:k,className:(0,r.default)("visx-area-closed",h),d:O(p)||""},b))};var a=l(n("ERkP")),r=l(n("O94r")),i=l(n("Fo22")),o=n("m2mA");function l(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}},gnM9:function(e,t,n){"use strict";n.d(t,"a",(function(){return L})),n.d(t,"c",(function(){return I})),n.d(t,"b",(function(){return $}));var a=n("fGyu"),r=n("ERkP"),i=n.n(r),o=n("ewQP"),l=n.n(o),c=n("EbDF"),s=n("HlJr"),u=n("67po"),f=n("cc+0"),m=n("o/Mo"),d=n("i2hO"),p=n("pn27"),y=n("0XzA"),v=n.n(y),h=n("aWzz"),x=n.n(h),k=n("1GyV");function g(e,t,n,a,r){var i;switch(e){case"center":return r;case"min":return null!=n?n:0;case"max":return null!=a?a:0;case"outside":default:return null!=(i=(null!=t?t:0)<r?n:a)?i:0}}function b(e){var t=e.from,n=e.to;return{fromX:t.x,toX:n.x,fromY:t.y,toY:n.y,opacity:1}}function O(e){var t=e.scale,n=e.animateXOrY,a=e.animationTrajectory,i=void 0===a?"outside":a,o="x"===n;return Object(r.useMemo)((function(){var e=t.range().map(s.a),n=e[0],a=e[1],r=null!=a&&null!=n&&a<n?[a,n]:[n,a],l=r[0],c=r[1],u=null!=a&&null!=n?Math.abs(a-n):0,f=(null!=l?l:0)+u/2,m=i;o||"min"!==i||(m="max"),o||"max"!==i||(m="min");var d=function(e){var t=e.from,n=e.to;return{fromX:o?g(m,t.x,l,c,f):t.x,toX:o?g(m,t.x,l,c,f):n.x,fromY:o?t.y:g(m,t.y,l,c,f),toY:o?n.y:g(m,t.y,l,c,f),opacity:0}};return{unique:!0,from:d,leave:d,enter:b,update:b}}),[t,o,i])}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function T(e){var t=e.scale,n=e.lines,a=e.animationTrajectory,r=e.animateXOrY,o=e.lineKey,l=e.lineStyle,c=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["scale","lines","animationTrajectory","animateXOrY","lineKey","lineStyle"]),s=Object(k.useTransition)(n,o,O({scale:t,animateXOrY:r,animationTrajectory:a}));return i.a.createElement(i.a.Fragment,null,s.map((function(e){var t=e.key,n=e.props,a=n.fromX,r=n.toX,o=n.fromY,s=n.toY,u=n.opacity;return i.a.createElement(k.animated.line,j({key:t,x1:a,x2:r,y1:o,y2:s,strokeOpacity:u,style:l},c))})))}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function E(e){var t=e.scale,n=e.width,a=e.numTicks,r=e.tickValues,o=(e.offset,e.className),l=e.animationTrajectory,c=e.top,s=e.left,u=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["scale","width","numTicks","tickValues","offset","className","animationTrajectory","top","left"]);return i.a.createElement(v.a,{scale:t,width:n,numTicks:a,tickValues:r,className:o,top:c,left:s},(function(e){var n=e.lines;return i.a.createElement(T,w({scale:t,lines:n,animationTrajectory:l,animateXOrY:"y",lineKey:function(e){var t,n;return String(null!=(t=null==e||null==(n=e.from)?void 0:n.y)?t:"")}},u))}))}T.propTypes={lineKey:x.a.func.isRequired};var S=n("mv6+"),X=n.n(S);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e){var t=e.scale,n=e.height,a=e.numTicks,r=e.tickValues,o=(e.offset,e.className),l=e.animationTrajectory,c=e.top,s=e.left,u=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["scale","height","numTicks","tickValues","offset","className","animationTrajectory","top","left"]);return i.a.createElement(X.a,{scale:t,height:n,numTicks:a,tickValues:r,className:o,top:c,left:s},(function(e){var n=e.lines;return i.a.createElement(T,Y({scale:t,lines:n,animationTrajectory:l,animateXOrY:"x",lineKey:function(e){var t,n;return String(null!=(t=null==e||null==(n=e.from)?void 0:n.x)?t:"")}},u))}))}var _=n("XDdH"),C=n.n(_),F=n("O94r"),M=n.n(F),P=n("uJnh"),V=n.n(P),z=n("O3m4");function R(e){var t=e.hideTicks,n=e.horizontal,a=e.orientation,r=e.scale,o=e.tickClassName,l=e.tickLabelProps,c=e.tickStroke,s=void 0===c?"#222":c,u=e.tickTransform,f=e.ticks,m=e.animationTrajectory,d=Object(k.useTransition)(f,(function(e){return""+e.value}),O({scale:r,animateXOrY:n?"x":"y",animationTrajectory:m}));return i.a.createElement(i.a.Fragment,null,d.map((function(e,n){var r,c,f=e.item,m=e.key,d=e.props,p=d.fromX,y=d.toX,v=d.fromY,h=d.toY,x=d.opacity,g=null!=(r=null!=(c=l[n])?c:l[0])?r:{};return null==f||null==m?null:i.a.createElement(k.animated.g,{key:m,className:M()("visx-axis-tick",o),transform:u},!t&&i.a.createElement(k.animated.line,{x1:p,x2:y,y1:v,y2:h,stroke:s,strokeLinecap:"square",strokeOpacity:x}),i.a.createElement(k.animated.g,{key:n,transform:Object(k.interpolate)([y,h],(function(e,t){var n;return"translate("+e+","+(t+(a===V.a.bottom&&"number"===typeof g.fontSize?null!=(n=g.fontSize)?n:10:0))+")"})),opacity:x},i.a.createElement(z.a,g,null==f?void 0:f.formattedValue)))})))}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function K(e){var t=e.animationTrajectory,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["animationTrajectory"]),a=Object(r.useMemo)((function(){return function(e){return i.a.createElement(R,A({},e,{animationTrajectory:t}))}}),[t]);return i.a.createElement(C.a,A({},n,{ticksComponent:a}))}var q=n("Cf/J"),D=n("mHfT"),J=i.a.createElement,L="#da7cff",I="#340098",H=40,B=150,G=20,Q=50,W=function(){return{fill:"#fff",fontSize:12,fontFamily:"sans-serif",textAnchor:"middle"}},U=function(e){var t=e.map(s.a);return[Math.min.apply(Math,Object(a.a)(t)),Math.max.apply(Math,Object(a.a)(t))]};function $(e){var t=e.width,n=void 0===t?800:t,a=e.height,o=void 0===a?800:a,s=e.showControls,y=void 0===s||s,v=n-Q-B,h=o-H-G,x=Object(r.useState)(!0),k=x[0],g=x[1],b=Object(r.useState)("center"),O=b[0],j=b[1],T=Object(r.useMemo)((function(){var e=k?[0,2,4,6,8,10]:[6,8,10,12],t=k?["a","b","c","d"]:["d","c","b","a"],n=k?[new Date("2020-01-01"),new Date("2020-02-01")]:[new Date("2020-02-01"),new Date("2020-03-01")],a=k?[1,10,100,1e3,1e4]:[1e-4,.001,.1,1,10,100];return[{scale:Object(u.a)({domain:U(e),range:[0,v]}),values:e,tickFormat:function(e,t,n){return 0===t?"first":t===n[n.length-1].index?"last":"".concat(e)},label:"linear"},{scale:Object(f.a)({domain:t,range:[0,v],paddingOuter:0,paddingInner:1}),values:t,tickFormat:function(e){return e},label:"categories"},{scale:Object(m.a)({domain:U(n),range:[0,v]}),values:n,tickFormat:function(e,t){return 3===t?"\ud83c\udf89":v>400||t%2===0?Object(D.a)("%b %d")(e):""},label:"time"},{scale:Object(d.a)({domain:U(a),range:[0,v]}),values:a,tickFormat:function(e){var t="".concat(e);return t.match(/^[.01?[\]]*$/)?t:""},label:"log"}]}),[k,v]);if(v<10)return null;var w=h/T.length-40,S=Object(u.a)({domain:[100,0],range:[w,0]});return J(i.a.Fragment,null,J("svg",{width:n,height:o},J(q.a,{id:"visx-axis-gradient",from:L,to:L,toOpacity:.5}),J("rect",{x:0,y:0,width:n,height:o,fill:"url(#visx-axis-gradient)",rx:14}),J("g",{transform:"translate(".concat(Q,",").concat(H,")")},T.map((function(e,t){var n=e.scale,a=e.values,r=e.label,i=e.tickFormat;return J("g",{key:"scale-".concat(t),transform:"translate(0, ".concat(t*(w+40),")")},J(E,{key:"gridrows-".concat(O),scale:S,stroke:"#6e0fca",width:v,numTicks:k?1:3,animationTrajectory:O}),J(N,{key:"gridcolumns-".concat(O),scale:n,stroke:"#6e0fca",height:w,numTicks:k?5:2,animationTrajectory:O}),J(l.a,{data:a.map((function(e){var t;return[(null!==(t=n(e))&&void 0!==t?t:0)+("bandwidth"in n&&"undefined"!==typeof n.bandwidth?n.bandwidth()/2:0),S(10+90*Math.random())]})),yScale:S,curve:c.a,fill:"#6e0fca",fillOpacity:.2}),J(K,{key:"axis-".concat(O),orientation:p.a.bottom,top:w,scale:n,tickFormat:i,stroke:"#fff",tickStroke:"#fff",tickLabelProps:W,tickValues:"log"===r||"time"===r?void 0:a,numTicks:"time"===r?6:void 0,label:r,labelProps:{x:v+30,y:-10,fill:I,fontSize:18,strokeWidth:0,stroke:"#fff",paintOrder:"stroke",fontFamily:"sans-serif",textAnchor:"start"},animationTrajectory:O}))})))),y&&J(i.a.Fragment,null,J("div",{style:{fontSize:11}},J("strong",null,"animation trajectory"),J("label",null,J("input",{type:"radio",onChange:function(){return j("outside")},checked:"outside"===O})," ","outside"),J("label",null,J("input",{type:"radio",onChange:function(){return j("center")},checked:"center"===O})," ","center"),J("label",null,J("input",{type:"radio",onChange:function(){return j("min")},checked:"min"===O})," ","min"),J("label",null,J("input",{type:"radio",onChange:function(){return j("max")},checked:"max"===O})," ","max")),J("button",{onClick:function(){return g(!k)}},"Update scales")))}try{$.displayName="Example",$.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},showControls:{defaultValue:{value:!0},description:"",name:"showControls",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-axis/Example.tsx#Example"]={docgenInfo:$.__docgenInfo,name:"Example",path:"src/sandboxes/visx-axis/Example.tsx#Example"})}catch(Z){}}}]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[67],{"+fu8":function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return f}));var r=e("aWzz"),o=e.n(r),i=e("ERkP"),a=e.n(i),u=e("O94r"),l=e.n(u);function c(){return(c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var s={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"};function f(t){var n=t.className,e=t.top,r=t.left,o=t.offsetLeft,i=void 0===o?10:o,u=t.offsetTop,f=void 0===u?10:u,p=t.style,h=void 0===p?s:p,d=t.children,v=t.unstyled,m=void 0!==v&&v,y=t.applyPositionStyle,x=void 0!==y&&y,b=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,["className","top","left","offsetLeft","offsetTop","style","children","unstyled","applyPositionStyle"]);return a.a.createElement("div",c({className:l()("visx-tooltip",n),style:c({top:null==e||null==f?e:e+f,left:null==r||null==i?r:r+i},x&&{position:"absolute"},!m&&h)},b),d)}f.propTypes={children:o.a.node,className:o.a.string,left:o.a.number,offsetLeft:o.a.number,offsetTop:o.a.number,top:o.a.number,applyPositionStyle:o.a.bool,unstyled:o.a.bool}},"67po":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("uKU/"),o=e("xx0A"),i=Object(o.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function a(t){return i(Object(r.a)(),t)}},"8z6j":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return f}));var r=e("ERkP"),o=e.n(r),i=e("qyW2"),a=e("i9k6"),u=e("bf+l");e.d(n,"packageJson",(function(){return u}));var l=o.a.createElement,c={background:i.b},s={color:i.a};function f(){return l(a.a,{title:"AreaClosed",description:"<Shape.AreaClosed />",exampleRenderer:i.c,exampleUrl:"/areas",detailsStyles:s,tileStyles:c})}},"9Jhr":function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e("ERkP"),o=e.n(r),i=e("O94r"),a=e.n(i),u=e("1Wmu"),l=e("dGDr");function c(){return(c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function s(t){var n=t.x,e=t.x0,r=t.x1,i=t.y,s=t.y1,f=t.y0,p=t.yScale,h=t.data,d=void 0===h?[]:h,v=t.defined,m=void 0===v?function(){return!0}:v,y=t.className,x=t.curve,b=t.innerRef,O=t.children,g=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,["x","x0","x1","y","y1","y0","yScale","data","defined","className","curve","innerRef","children"]),_=Object(l.b)({x:n,x0:e,x1:r,defined:m,curve:x});return f?Object(u.a)(_.y0,f):_.y0(p.range()[0]),i&&!s&&Object(u.a)(_.y1,i),s&&!i&&Object(u.a)(_.y1,s),O?o.a.createElement(o.a.Fragment,null,O({path:_})):o.a.createElement("path",c({ref:b,className:a()("visx-area-closed",y),d:_(d)||""},g))}},E0Ok:function(t,n,e){"use strict";var r,o=e("ERkP"),i=e.n(o),a=e("JmwF"),u=e("XpFG"),l=e("oqwl"),c=e("67po"),s=e("uLXA"),f=e.n(s),p=e("xc3W"),h=e("+fu8"),d=e("krkd"),v=e("Tkov"),m=e("jpI8"),y=i.a.createElement,x=f()(600).filter((function(t,n){return n<600})),b=function(t){return t[0]},O=function(t){return t[1]};n.a=Object(p.a)((function(t){var n=t.width,e=t.height,i=t.showControls,s=void 0===i||i,f=t.hideTooltip,p=t.showTooltip,g=t.tooltipOpen,_=t.tooltipData,j=t.tooltipLeft,E=t.tooltipTop;if(n<10)return null;var w=Object(o.useState)(s),k=w[0],M=w[1],N=Object(o.useRef)(null),P=Object(o.useMemo)((function(){return Object(c.a)({domain:[1.3,2.2],range:[0,n],clamp:!0})}),[n]),R=Object(o.useMemo)((function(){return Object(c.a)({domain:[.75,1.6],range:[e,0],clamp:!0})}),[e]),T=Object(o.useMemo)((function(){return Object(d.a)({x:function(t){var n;return null!==(n=P(b(t)))&&void 0!==n?n:0},y:function(t){var n;return null!==(n=R(O(t)))&&void 0!==n?n:0},width:n,height:e})(x)}),[n,e,P,R]),S=Object(o.useCallback)((function(t){if(r&&clearTimeout(r),N.current){var n=Object(m.a)(N.current,t);if(n){var e=T.find(n.x,n.y,100);e&&p({tooltipLeft:P(b(e.data)),tooltipTop:R(O(e.data)),tooltipData:e.data})}}}),[P,R,p,T]),C=Object(o.useCallback)((function(){r=window.setTimeout((function(){f()}),300)}),[f]);return y("div",null,y("svg",{width:n,height:e,ref:N},y(l.a,{id:"dots-pink"}),y("rect",{width:n,height:e,rx:14,fill:"url(#dots-pink)",onMouseMove:S,onMouseLeave:C,onTouchMove:S,onTouchEnd:C}),y(a.a,{pointerEvents:"none"},x.map((function(t,n){return y(u.a,{key:"point-".concat(t[0],"-").concat(n),className:"dot",cx:P(b(t)),cy:R(O(t)),r:n%3===0?2:3,fill:_===t?"white":"#f6c431"})})),k&&T.polygons().map((function(t,n){return y(v.a,{key:"polygon-".concat(n),polygon:t,fill:"white",stroke:"white",strokeWidth:1,strokeOpacity:.2,fillOpacity:_===t.data?.5:0})})))),g&&_&&null!=j&&null!=E&&y(h.a,{left:j+10,top:E+10},y("div",null,y("strong",null,"x:")," ",b(_)),y("div",null,y("strong",null,"y:")," ",O(_))),s&&y("div",null,y("label",{style:{fontSize:12}},y("input",{type:"checkbox",checked:k,onChange:function(){return M(!k)}}),"\xa0Show voronoi point map")))}));try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},showControls:{defaultValue:null,description:"",name:"showControls",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-dots/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-dots/Example.tsx#Example"})}catch(g){}},EGJb:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/event",function(){return e("fxZj")}])},EbDF:function(t,n,e){"use strict";function r(t){return t<0?-1:1}function o(t,n,e){var o=t._x1-t._x0,i=n-t._x1,a=(t._y1-t._y0)/(o||i<0&&-0),u=(e-t._y1)/(i||o<0&&-0),l=(a*i+u*o)/(o+i);return(r(a)+r(u))*Math.min(Math.abs(a),Math.abs(u),.5*Math.abs(l))||0}function i(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function a(t,n,e){var r=t._x0,o=t._y0,i=t._x1,a=t._y1,u=(i-r)/3;t._context.bezierCurveTo(r+u,o+u*n,i-u,a-u*e,i,a)}function u(t){this._context=t}function l(t){this._context=new c(t)}function c(t){this._context=t}function s(t){return new u(t)}function f(t){return new l(t)}e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return f})),u.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:a(this,this._t0,i(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,a(this,i(this,e=o(this,t,n)),e);break;default:a(this,this._t0,e=o(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(l.prototype=Object.create(u.prototype)).point=function(t,n){u.prototype.point.call(this,n,t)},c.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,o,i){this._context.bezierCurveTo(n,t,r,e,i,o)}}},"G/4L":function(t,n,e){"use strict";e.r(n),e.d(n,"randomUniform",(function(){return o})),e.d(n,"randomNormal",(function(){return i})),e.d(n,"randomLogNormal",(function(){return a})),e.d(n,"randomBates",(function(){return l})),e.d(n,"randomIrwinHall",(function(){return u})),e.d(n,"randomExponential",(function(){return c}));var r=function(){return Math.random()},o=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(r),i=function t(n){function e(t,e){var r,o;return t=null==t?0:+t,e=null==e?1:+e,function(){var i;if(null!=r)i=r,r=null;else do{r=2*n()-1,i=2*n()-1,o=r*r+i*i}while(!o||o>1);return t+e*i*Math.sqrt(-2*Math.log(o)/o)}}return e.source=t,e}(r),a=function t(n){function e(){var t=i.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(r),u=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(r),l=function t(n){function e(t){var e=u.source(n)(t);return function(){return e()/t}}return e.source=t,e}(r),c=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(r)},HlJr:function(t,n,e){"use strict";function r(t){if(("function"===typeof t||"object"===typeof t&&t)&&"valueOf"in t){var n=t.valueOf();if("number"===typeof n)return n}return t}e.d(n,"a",(function(){return r}))},PVmh:function(t){t.exports=JSON.parse('{"name":"@visx/demo-dots","description":"Standalone visx scatterplot demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/event":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/tooltip":"latest","@visx/voronoi":"latest","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","visualization"]}')},QnoR:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("ERkP");function o(){return(o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function i(t){var n=Object(r.useState)(o({tooltipOpen:!1},t)),e=n[0],i=n[1],a=Object(r.useCallback)((function(t){return i("function"===typeof t?function(n){n.tooltipOpen;var e=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(n,["tooltipOpen"]);return o({},t(e),{tooltipOpen:!0})}:{tooltipOpen:!0,tooltipLeft:t.tooltipLeft,tooltipTop:t.tooltipTop,tooltipData:t.tooltipData})}),[i]),u=Object(r.useCallback)((function(){return i({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})}),[i]);return{tooltipOpen:e.tooltipOpen,tooltipLeft:e.tooltipLeft,tooltipTop:e.tooltipTop,tooltipData:e.tooltipData,updateTooltip:i,showTooltip:a,hideTooltip:u}}},WqRU:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e("ERkP"),o=e.n(r),i=e("O94r"),a=e.n(i);function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function l(t){var n=t.from,e=void 0===n?{x:0,y:0}:n,r=t.to,i=void 0===r?{x:1,y:1}:r,l=t.fill,c=void 0===l?"transparent":l,s=t.className,f=t.innerRef,p=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,["from","to","fill","className","innerRef"]),h=e.x===i.x||e.y===i.y;return o.a.createElement("line",u({ref:f,className:a()("visx-line",s),x1:e.x,y1:e.y,x2:i.x,y2:i.y,fill:c,shapeRendering:h?"crispEdges":"auto"},p))}},XpFG:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e("ERkP"),o=e.n(r),i=e("O94r"),a=e.n(i);function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function l(t){var n=t.className,e=t.innerRef,r=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,["className","innerRef"]);return o.a.createElement("circle",u({ref:e,className:a()("visx-circle",n)},r))}},Zbhd:function(t,n,e){"use strict";var r=e("PB0s"),o=e("XYeE"),i=e("jLnZ"),a=e("KLrH");n.a=function(t,n,e,u){var l,c=Object(r.c)(t,n,e);switch((u=Object(o.a)(null==u?",f":u)).type){case"s":var s=Math.max(Math.abs(t),Math.abs(n));return null!=u.precision||isNaN(l=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(n)/3)))-Object(i.a)(Math.abs(t)))}(c,s))||(u.precision=l),Object(a.b)(u,s);case"":case"e":case"g":case"p":case"r":null!=u.precision||isNaN(l=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Object(i.a)(n)-Object(i.a)(t))+1}(c,Math.max(Math.abs(t),Math.abs(n))))||(u.precision=l-("e"===u.type));break;case"f":case"%":null!=u.precision||isNaN(l=function(t){return Math.max(0,-Object(i.a)(Math.abs(t)))}(c))||(u.precision=l-2*("%"===u.type))}return Object(a.a)(u)}},fxZj:function(t,n,e){"use strict";e.r(n);var r=e("ERkP"),o=e.n(r),i=e("QnPE"),a=e("8z6j"),u=e("uyuH"),l=e("IxWj"),c=o.a.createElement,s=[a.default,u.default,l.default];n.default=function(){return c(i.a,{readme:"# @visx/event\n\n<a title=\"@visx/event npm downloads\" href=\"https://www.npmjs.com/package/@visx/event\">\n  <img src=\"https://img.shields.io/npm/dm/@visx/event.svg?style=flat-square\" />\n</a>\n\n## Installation\n\n```\nnpm install --save @visx/event\n```\n\n## Usage\n\n`@visx/event` exports a utility `localPoint` that takes an `SVG` `MouseEvent` or `TouchEvent` as\ninput and returns a `{ x: number; y: number; }` point coordinate (or `null` in the case the event\nhas no `ownerSVGElement`) within the coordinate system of the `SVG`. This makes placement of\ntooltips, finding nearby datum, etc. easier.\n\nExample:\n\n```tsx\nimport { localPoint } from '@visx/event';\n\n<svg>\n  <SomeElement\n    {...}\n    onMouseMove={(event: MouseEvent) => {\n      const point = localPoint(event) || { x: 0, y: 0 };\n      // use coordinates ...\n    }}\n  />\n  {...}\n</svg>\n```\n\nYou may optionally pass a reference to the SVG node\n\n```tsx\nimport { useRef } from 'react';\nimport { localPoint } from '@visx/event';\n\nconst svgRef = useRef<SVGSVGElement>(null);\n\n<svg ref={svgRef}>\n  <SomeElement\n    {...}\n    onMouseMove={(event: MouseEvent) => {\n      const point = localPoint(svgRef.current, event) || { x: 0, y: 0 };\n      // use coordinates ...\n    }}\n  />\n  {...}\n</svg>\n```\n",examples:s,visxPackage:"event"})}},g2fB:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e("ERkP"),o=e.n(r),i=e("O94r"),a=e.n(i);function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function l(t){var n=t.className,e=t.innerRef,r=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,["className","innerRef"]);return o.a.createElement("rect",u({ref:e,className:a()("visx-bar",n)},r))}},"hsl+":function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t){var n=t.from,e=void 0===n?{x:0,y:0}:n,i=t.to,u=void 0===i?{x:1,y:1}:i,l=t.fill,c=void 0===l?"transparent":l,s=t.className,f=t.innerRef,p=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,["from","to","fill","className","innerRef"]),h=e.x===u.x||e.y===u.y;return r.default.createElement("line",a({ref:f,className:(0,o.default)("visx-line",s),x1:e.x,y1:e.y,x2:u.x,y2:u.y,fill:c,shapeRendering:h?"crispEdges":"auto"},p))};var r=i(e("ERkP")),o=i(e("O94r"));function i(t){return t&&t.__esModule?t:{default:t}}function a(){return(a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}},nNND:function(t,n,e){"use strict";function r(t,n){var e=t;return"ticks"in e?e.ticks(n):e.domain().filter((function(t,e,r){return null==n||r.length<=n||e%Math.round((r.length-1)/n)===0}))}e.d(n,"a",(function(){return r}))},rkTo:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return o}));var o=function(){function t(t){var n=t.x,e=void 0===n?0:n,o=t.y,i=void 0===o?0:o;r(this,"x",0),r(this,"y",0),this.x=e,this.y=i}var n=t.prototype;return n.value=function(){return{x:this.x,y:this.y}},n.toArray=function(){return[this.x,this.y]},t}()},"uKU/":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return l}));var r=e("PB0s"),o=e("2+fR"),i=e("W1cA"),a=e("Zbhd");function u(t){var n=t.domain;return t.ticks=function(t){var e=n();return Object(r.a)(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return Object(a.a)(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var o,i=n(),a=0,u=i.length-1,l=i[a],c=i[u];return c<l&&(o=l,l=c,c=o,o=a,a=u,u=o),(o=Object(r.b)(l,c,e))>0?(l=Math.floor(l/o)*o,c=Math.ceil(c/o)*o,o=Object(r.b)(l,c,e)):o<0&&(l=Math.ceil(l*o)/o,c=Math.floor(c*o)/o,o=Object(r.b)(l,c,e)),o>0?(i[a]=Math.floor(l/o)*o,i[u]=Math.ceil(c/o)*o,n(i)):o<0&&(i[a]=Math.ceil(l*o)/o,i[u]=Math.floor(c*o)/o,n(i)),t},t}function l(){var t=Object(o.b)();return t.copy=function(){return Object(o.a)(t,l())},i.b.apply(t,arguments),u(t)}},uLXA:function(t,n,e){"use strict";n.__esModule=!0,n.genPointsRange=i,n.default=function(t){void 0===t&&(t=300);return[].concat(i(t,[o,1,0]),i(t,[-o,1,1]),i(t,[0,-1,2]))};var r=(0,e("G/4L").randomNormal)(0,.2),o=Math.sqrt(3);function i(t,n){var e=n[0],o=n[1],i=n[2];return function(t){return new Array(t).fill(1)}(t).map((function(){return[r()+e,r()+o,i]}))}},ue4z:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return s})),e.d(n,"e",(function(){return l})),e.d(n,"f",(function(){return f}));var r=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},o=function(t){var n;return 1===t.length&&(n=t,t=function(t,e){return r(n(t),e)}),{left:function(n,e,r,o){for(null==r&&(r=0),null==o&&(o=n.length);r<o;){var i=r+o>>>1;t(n[i],e)<0?r=i+1:o=i}return r},right:function(n,e,r,o){for(null==r&&(r=0),null==o&&(o=n.length);r<o;){var i=r+o>>>1;t(n[i],e)>0?o=i:r=i+1}return r}}};var i=o(r);i.right,i.left;var a=function(t,n){var e,r,o,i=t.length,a=-1;if(null==n){for(;++a<i;)if(null!=(e=t[a])&&e>=e)for(r=o=e;++a<i;)null!=(e=t[a])&&(r>e&&(r=e),o<e&&(o=e))}else for(;++a<i;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=o=e;++a<i;)null!=(e=n(t[a],a,t))&&(r>e&&(r=e),o<e&&(o=e));return[r,o]},u=Array.prototype,l=(u.slice,u.map,function(t,n,e){t=+t,n=+n,e=(o=arguments.length)<2?(n=t,t=0,1):o<3?1:+e;for(var r=-1,o=0|Math.max(0,Math.ceil((n-t)/e)),i=new Array(o);++r<o;)i[r]=t+r*e;return i});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var c=function(t,n){var e,r,o=t.length,i=-1;if(null==n){for(;++i<o;)if(null!=(e=t[i])&&e>=e)for(r=e;++i<o;)null!=(e=t[i])&&e>r&&(r=e)}else for(;++i<o;)if(null!=(e=n(t[i],i,t))&&e>=e)for(r=e;++i<o;)null!=(e=n(t[i],i,t))&&e>r&&(r=e);return r},s=function(t){for(var n,e,r,o=t.length,i=-1,a=0;++i<o;)a+=t[i].length;for(e=new Array(a);--o>=0;)for(n=(r=t[o]).length;--n>=0;)e[--a]=r[n];return e},f=function(t){if(!(o=t.length))return[];for(var n=-1,e=function(t,n){var e,r,o=t.length,i=-1;if(null==n){for(;++i<o;)if(null!=(e=t[i])&&e>=e)for(r=e;++i<o;)null!=(e=t[i])&&r>e&&(r=e)}else for(;++i<o;)if(null!=(e=n(t[i],i,t))&&e>=e)for(r=e;++i<o;)null!=(e=n(t[i],i,t))&&r>e&&(r=e);return r}(t,p),r=new Array(e);++n<e;)for(var o,i=-1,a=r[n]=new Array(o);++i<o;)a[i]=t[i][n];return r};function p(t){return t.length}},uyuH:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return p}));var r=e("ERkP"),o=e.n(r),i=e("E0Ok"),a=e("i9k6"),u=e("PVmh");e.d(n,"packageJson",(function(){return u}));var l=o.a.createElement,c={background:"#fd6e7f"},s={color:"#f6c431"},f={showControls:!1};function p(){return l(a.a,{title:"Dots",description:"<Shape.Circle />",exampleProps:f,exampleRenderer:i.a,exampleUrl:"/dots",tileStyles:c,detailsStyles:s})}},xc3W:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e("ERkP"),o=e.n(r),i=e("QnoR");function a(){return(a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function u(t,n,e){void 0===n&&(n={style:{position:"relative",width:"inherit",height:"inherit"}}),void 0===e&&(e=function(t,n){return o.a.createElement("div",n,t)});return function(r){var u=Object(i.a)();return e(o.a.createElement(t,a({},u,r)),n)}}},zjfJ:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))}},[["EGJb",0,2,1,3,4,5,7,8,10,9,11,17,20,29,36]]]);
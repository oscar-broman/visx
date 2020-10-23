_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[80],{"1Wmu":function(e,t,n){"use strict";function r(e,t){e(t)}n.d(t,"a",(function(){return r}))},"4HNP":function(e){e.exports=JSON.parse('{"name":"@visx/demo-radar","description":"Standalone visx radar chart demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/point":"latest","@visx/scale":"latest","@visx/shape":"latest","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","radar"]}')},"67po":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("uKU/"),a=n("xx0A"),i=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function l(e){return i(Object(r.a)(),e)}},"8OpA":function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),a=n.n(r),i=n("QnPE"),l=n("Ohz0"),u=a.a.createElement,o=[l.default];t.default=function(){return u(i.a,{examples:o,readme:'# @visx/point\n\n<a title="@visx/point npm downloads" href="https://www.npmjs.com/package/@visx/point">\n  <img src="https://img.shields.io/npm/dm/@visx/point.svg?style=flat-square" />\n</a>\n\n```\nnpm install --save @visx/point\n```\n\nA simple class to represent an `x, y` coordinate.\n\n## Example Usage\n\n```js\nimport { Point } from \'@visx/point\';\n\nconst point = new Point({ x: 2, y: 3 });\nconst { x, y } = point.value(); // Get the coords as an object\nconst [x, y] = point.toArray(); // or array\n```\n\n## Methods\n\n### `point.value()`\n\nReturns an `{ x, y }` object with the x and y coordinates.\n\n### `point.toArray()`\n\nReturns the coordinates as an array `[x, y]`.\n',visxPackage:"point"})}},HP22:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/point",function(){return n("8OpA")}])},JmwF:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("aWzz"),a=n.n(r),i=n("ERkP"),l=n.n(i),u=n("O94r"),o=n.n(u);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){var t=e.top,n=void 0===t?0:t,r=e.left,a=void 0===r?0:r,i=e.transform,u=e.className,s=e.children,d=e.innerRef,f=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["top","left","transform","className","children","innerRef"]);return l.a.createElement("g",c({ref:d,className:o()("visx-group",u),transform:i||"translate("+a+", "+n+")"},f),s)}s.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},Ohz0:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n("ERkP"),a=n.n(r),i=n("Xln+"),l=n("i9k6"),u=n("4HNP");n.d(t,"packageJson",(function(){return u}));var o=a.a.createElement,c={background:i.a},s={color:i.c};function d(){return o(l.a,{title:"Radar",description:"<Shape.Line /> + <Shape.LineRadial />",exampleRenderer:i.b,exampleUrl:"/radar",tileStyles:c,detailsStyles:s})}},Vi0D:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s}));var r=n("+Y26"),a=n("M3gT"),i=n("Ddjo"),l=n("Xyxy"),u=n("Q4nK"),o={expand:r.a,diverging:a.a,none:i.a,silhouette:l.a,wiggle:u.a},c=Object.keys(o);function s(e){return e&&o[e]||o.none}},WqRU:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),l=n.n(i);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){var t=e.from,n=void 0===t?{x:0,y:0}:t,r=e.to,i=void 0===r?{x:1,y:1}:r,o=e.fill,c=void 0===o?"transparent":o,s=e.className,d=e.innerRef,f=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["from","to","fill","className","innerRef"]),p=n.x===i.x||n.y===i.y;return a.a.createElement("line",u({ref:d,className:l()("visx-line",s),x1:n.x,y1:n.y,x2:i.x,y2:i.y,fill:c,shapeRendering:p?"crispEdges":"auto"},f))}},"Xln+":function(e,t,n){"use strict";n.d(t,"c",(function(){return y})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return x}));var r=n("fGyu"),a=n("ERkP"),i=n.n(a),l=n("JmwF"),u=n("ykvB"),o=n.n(u),c=n("67po"),s=n("rkTo"),d=n("rySy"),f=n("WqRU"),p=i.a.createElement,y="#f5810c",m="#FAF7E9",b=o.a.slice(2,12),h=function(e){return e.frequency};var v={top:40,left:80,right:80,bottom:80};function x(e){var t,n=e.width,a=e.height,i=e.levels,u=void 0===i?5:i,o=e.margin,x=void 0===o?v:o,g=n-x.left-x.right,O=a-x.top-x.bottom,j=Math.min(g,O)/2,w=Object(c.a)({range:[0,2*Math.PI],domain:[360,0]}),k=Object(c.a)({range:[0,j],domain:[0,Math.max.apply(Math,Object(r.a)(b.map(h)))]}),P=(t=b.length,Object(r.a)(new Array(t+1)).map((function(e,n){return{angle:n*(360/t)}}))),E=function(e,t){var n=2*Math.PI/e;return Object(r.a)(new Array(e)).map((function(e,r){return{x:t*Math.sin(r*n),y:t*Math.cos(r*n)}}))}(b.length,j),R=function(e,t,n){var r=2*Math.PI/e.length,a=new Array(e.length).fill({x:0,y:0}),i=new Array(e.length+1).fill("").reduce((function(i,l,u){if(u>e.length)return i;var o=t(n(e[u-1]))*Math.sin(u*r),c=t(n(e[u-1]))*Math.cos(u*r);return a[u-1]={x:o,y:c},i+"".concat(o,",").concat(c," ")}));return{points:a,pointString:i}}(b,(function(e){var t;return null!==(t=k(e))&&void 0!==t?t:0}),h),S=new s.a({x:0,y:0});return n<10?null:p("svg",{width:n,height:a},p("rect",{fill:m,width:n,height:a,rx:14}),p(l.a,{top:a/2-x.top,left:n/2},Object(r.a)(new Array(u)).map((function(e,t){return p(d.a,{key:"web-".concat(t),data:P,angle:function(e){var t;return null!==(t=w(e.angle))&&void 0!==t?t:0},radius:(t+1)*j/u,fill:"none",stroke:"#d9d9d9",strokeWidth:2,strokeOpacity:.8,strokeLinecap:"round"})})),Object(r.a)(new Array(b.length)).map((function(e,t){return p(f.a,{key:"radar-line-".concat(t),from:S,to:E[t],stroke:"#d9d9d9"})})),p("polygon",{points:R.pointString,fill:"#ff9933",fillOpacity:.3,stroke:"#ff9933",strokeWidth:1}),R.points.map((function(e,t){return p("circle",{key:"radar-point-".concat(t),cx:e.x,cy:e.y,r:4,fill:y})}))))}try{x.displayName="Example",x.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},levels:{defaultValue:{value:5},description:"",name:"levels",required:!1,type:{name:"number | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-radar/Example.tsx#Example"]={docgenInfo:x.__docgenInfo,name:"Example",path:"src/sandboxes/visx-radar/Example.tsx#Example"})}catch(g){}},Zbhd:function(e,t,n){"use strict";var r=n("PB0s"),a=n("XYeE"),i=n("jLnZ"),l=n("KLrH");t.a=function(e,t,n,u){var o,c=Object(r.c)(e,t,n);switch((u=Object(a.a)(null==u?",f":u)).type){case"s":var s=Math.max(Math.abs(e),Math.abs(t));return null!=u.precision||isNaN(o=function(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(e)))}(c,s))||(u.precision=o),Object(l.b)(u,s);case"":case"e":case"g":case"p":case"r":null!=u.precision||isNaN(o=function(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Object(i.a)(t)-Object(i.a)(e))+1}(c,Math.max(Math.abs(e),Math.abs(t))))||(u.precision=o-("e"===u.type));break;case"f":case"%":null!=u.precision||isNaN(o=function(e){return Math.max(0,-Object(i.a)(Math.abs(e)))}(c))||(u.precision=o-2*("%"===u.type))}return Object(l.a)(u)}},dGDr:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return h}));var r=n("mBAT"),a=n("KdQ8"),i=n("+pY8"),l=n("lg8u"),u=n("FVKn"),o=n("uvDt"),c=n("1Wmu"),s=n("oWfS"),d=n("Vi0D");function f(e){var t=void 0===e?{}:e,n=t.innerRadius,a=t.outerRadius,i=t.cornerRadius,l=t.startAngle,u=t.endAngle,o=t.padAngle,s=t.padRadius,d=Object(r.a)();return null!=n&&Object(c.a)(d.innerRadius,n),null!=a&&Object(c.a)(d.outerRadius,a),null!=i&&Object(c.a)(d.cornerRadius,i),null!=l&&Object(c.a)(d.startAngle,l),null!=u&&Object(c.a)(d.endAngle,u),null!=o&&Object(c.a)(d.padAngle,o),null!=s&&Object(c.a)(d.padRadius,s),d}function p(e){var t=void 0===e?{}:e,n=t.x,r=t.x0,i=t.x1,l=t.y,u=t.y0,o=t.y1,s=t.defined,d=t.curve,f=Object(a.a)();return n&&Object(c.a)(f.x,n),r&&Object(c.a)(f.x0,r),i&&Object(c.a)(f.x1,i),l&&Object(c.a)(f.y,l),u&&Object(c.a)(f.y0,u),o&&Object(c.a)(f.y1,o),s&&f.defined(s),d&&f.curve(d),f}function y(e){var t=void 0===e?{}:e,n=t.x,r=t.y,a=t.defined,l=t.curve,u=Object(i.a)();return n&&Object(c.a)(u.x,n),r&&Object(c.a)(u.y,r),a&&u.defined(a),l&&u.curve(l),u}function m(e){var t=void 0===e?{}:e,n=t.startAngle,r=t.endAngle,a=t.padAngle,i=t.value,u=t.sort,o=t.sortValues,s=Object(l.a)();return(null===u||null!=u)&&s.sort(u),(null===o||null!=o)&&s.sortValues(o),null!=i&&s.value(i),null!=a&&Object(c.a)(s.padAngle,a),null!=n&&Object(c.a)(s.startAngle,n),null!=r&&Object(c.a)(s.endAngle,r),s}function b(e){var t=void 0===e?{}:e,n=t.angle,r=t.radius,a=t.defined,i=t.curve,l=Object(u.a)();return n&&Object(c.a)(l.angle,n),r&&Object(c.a)(l.radius,r),a&&l.defined(a),i&&l.curve(i),l}function h(e){var t=e.keys,n=e.value,r=e.order,a=e.offset,i=Object(o.a)();return t&&i.keys(t),n&&Object(c.a)(i.value,n),r&&i.order(Object(s.c)(r)),a&&i.offset(Object(d.c)(a)),i}},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=s;var r=o(n("aWzz")),a=o(n("RNvQ")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("ERkP")),l=o(n("LaGA"));function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){var t=e.className,n=e.children,r=e.debounceTime,u=void 0===r?300:r,o=e.ignoreDimensions,s=void 0===o?[]:o,d=e.parentSizeStyles,f=void 0===d?{width:"100%",height:"100%"}:d,p=e.enableDebounceLeadingCall,y=void 0===p||p,m=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"]),b=(0,i.useRef)(null),h=(0,i.useRef)(0),v=(0,i.useState)({width:0,height:0,top:0,left:0}),x=v[0],g=v[1],O=(0,i.useMemo)((function(){var e=Array.isArray(s)?s:[s];return(0,a.default)((function(t){g((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),u,{leading:y})}),[u,y,s]);return(0,i.useEffect)((function(){var e=new l.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,r=t.top,a=t.width,i=t.height;h.current=window.requestAnimationFrame((function(){O({width:a,height:i,top:r,left:n})}))}))}));return b.current&&e.observe(b.current),function(){window.cancelAnimationFrame(h.current),e.disconnect(),O.cancel()}}),[O]),i.default.createElement("div",c({style:f,ref:b,className:t},m),n(c({},x,{ref:b.current,resize:O})))}s.propTypes={className:r.default.string,debounceTime:r.default.number,enableDebounceLeadingCall:r.default.bool,ignoreDimensions:r.default.oneOfType([r.default.any,r.default.arrayOf(r.default.any)]),children:r.default.func.isRequired}},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("zjfJ"),a=n("yFcC"),i=n.n(a),l=n("ERkP"),u=n.n(l),o=n("jvFD"),c=n.n(o),s=n("i6Tx"),d=n.n(s),f=u.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){var t,n,a=e.description,l=e.detailsHeight,o=void 0===l?76:l,s=e.detailsStyles,y=e.exampleProps,m=e.exampleRenderer,b=e.exampleUrl,h=e.tileStyles,v=e.title;return f(u.a.Fragment,null,(t=b,n=f("div",{style:h,className:"jsx-713312509 gallery-tile"},f("div",{className:"jsx-713312509 image"},f(d.a,null,(function(e){var t=e.width,n=e.height;return u.a.createElement(m,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(v||a?o:0)},y))}))),(v||a)&&f("div",{style:s,className:"jsx-713312509 details"},v&&f("div",{className:"jsx-713312509 title"},v),a&&f("div",{className:"jsx-713312509 description"},f("pre",{className:"jsx-713312509"},a)))),t?f(c.a,{href:t},n):n),f(i.a,{id:"713312509"},["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]))}try{y.displayName="GalleryTile",y.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:y.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(m){}},oWfS:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s}));var r=n("Zx3a"),a=n("c6zU"),i=n("yU24"),l=n("V+6I"),u=n("NKRu"),o={ascending:r.a,descending:a.a,insideout:i.a,none:l.a,reverse:u.a},c=Object.keys(o);function s(e){return e&&o[e]||o.none}},rkTo:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}));var a=function(){function e(e){var t=e.x,n=void 0===t?0:t,a=e.y,i=void 0===a?0:a;r(this,"x",0),r(this,"y",0),this.x=n,this.y=i}var t=e.prototype;return t.value=function(){return{x:this.x,y:this.y}},t.toArray=function(){return[this.x,this.y]},e}()},rySy:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),l=n.n(i),u=n("dGDr");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.className,n=e.angle,r=e.radius,i=e.defined,c=e.curve,s=e.data,d=void 0===s?[]:s,f=e.innerRef,p=e.children,y=e.fill,m=void 0===y?"transparent":y,b=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","angle","radius","defined","curve","data","innerRef","children","fill"]),h=Object(u.e)({angle:n,radius:r,defined:i,curve:c});return p?a.a.createElement(a.a.Fragment,null,p({path:h})):a.a.createElement("path",o({ref:f,className:l()("visx-line-radial",t),d:h(d)||"",fill:m},b))}},"uKU/":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o}));var r=n("PB0s"),a=n("2+fR"),i=n("W1cA"),l=n("Zbhd");function u(e){var t=e.domain;return e.ticks=function(e){var n=t();return Object(r.a)(n[0],n[n.length-1],null==e?10:e)},e.tickFormat=function(e,n){var r=t();return Object(l.a)(r[0],r[r.length-1],null==e?10:e,n)},e.nice=function(n){null==n&&(n=10);var a,i=t(),l=0,u=i.length-1,o=i[l],c=i[u];return c<o&&(a=o,o=c,c=a,a=l,l=u,u=a),(a=Object(r.b)(o,c,n))>0?(o=Math.floor(o/a)*a,c=Math.ceil(c/a)*a,a=Object(r.b)(o,c,n)):a<0&&(o=Math.ceil(o*a)/a,c=Math.floor(c*a)/a,a=Object(r.b)(o,c,n)),a>0?(i[l]=Math.floor(o/a)*a,i[u]=Math.ceil(c/a)*a,t(i)):a<0&&(i[l]=Math.ceil(o*a)/a,i[u]=Math.floor(c*a)/a,t(i)),e},e}function o(){var e=Object(a.b)();return e.copy=function(){return Object(a.a)(e,o())},i.b.apply(e,arguments),u(e)}},ykvB:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=[{letter:"A",frequency:.08167},{letter:"B",frequency:.01492},{letter:"C",frequency:.02782},{letter:"D",frequency:.04253},{letter:"E",frequency:.12702},{letter:"F",frequency:.02288},{letter:"G",frequency:.02015},{letter:"H",frequency:.06094},{letter:"I",frequency:.06966},{letter:"J",frequency:.00153},{letter:"K",frequency:.00772},{letter:"L",frequency:.04025},{letter:"M",frequency:.02406},{letter:"N",frequency:.06749},{letter:"O",frequency:.07507},{letter:"P",frequency:.01929},{letter:"Q",frequency:95e-5},{letter:"R",frequency:.05987},{letter:"S",frequency:.06327},{letter:"T",frequency:.09056},{letter:"U",frequency:.02758},{letter:"V",frequency:.00978},{letter:"W",frequency:.0236},{letter:"X",frequency:.0015},{letter:"Y",frequency:.01974},{letter:"Z",frequency:74e-5}];t.default=r},zjfJ:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["HP22",0,2,1,3,4,5,7,8,10,9]]]);
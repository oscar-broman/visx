_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{"+fu8":function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return f}));var r=e("aWzz"),o=e.n(r),i=e("ERkP"),a=e.n(i),c=e("O94r"),l=e.n(c);function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var s={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"};function f(t){var n=t.className,e=t.top,r=t.left,o=t.offsetLeft,i=void 0===o?10:o,c=t.offsetTop,f=void 0===c?10:c,p=t.style,h=void 0===p?s:p,d=t.children,v=t.unstyled,y=void 0!==v&&v,b=t.applyPositionStyle,m=void 0!==b&&b,g=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,["className","top","left","offsetLeft","offsetTop","style","children","unstyled","applyPositionStyle"]);return a.a.createElement("div",u({className:l()("visx-tooltip",n),style:u({top:null==e||null==f?e:e+f,left:null==r||null==i?r:r+i},m&&{position:"absolute"},!y&&h)},g),d)}f.propTypes={children:o.a.node,className:o.a.string,left:o.a.number,offsetLeft:o.a.number,offsetTop:o.a.number,top:o.a.number,applyPositionStyle:o.a.bool,unstyled:o.a.bool}},"67po":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("uKU/"),o=e("xx0A"),i=Object(o.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function a(t){return i(Object(r.a)(),t)}},"9Jhr":function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e("ERkP"),o=e.n(r),i=e("O94r"),a=e.n(i),c=e("1Wmu"),l=e("dGDr");function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function s(t){var n=t.x,e=t.x0,r=t.x1,i=t.y,s=t.y1,f=t.y0,p=t.yScale,h=t.data,d=void 0===h?[]:h,v=t.defined,y=void 0===v?function(){return!0}:v,b=t.className,m=t.curve,g=t.innerRef,x=t.children,O=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,["x","x0","x1","y","y1","y0","yScale","data","defined","className","curve","innerRef","children"]),k=Object(l.b)({x:n,x0:e,x1:r,defined:y,curve:m});return f?Object(c.a)(k.y0,f):k.y0(p.range()[0]),i&&!s&&Object(c.a)(k.y1,i),s&&!i&&Object(c.a)(k.y1,s),x?o.a.createElement(o.a.Fragment,null,x({path:k})):o.a.createElement("path",u({ref:g,className:a()("visx-area-closed",b),d:k(d)||""},O))}},DTjC:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/areas",function(){return e("SYW9")}])},EbDF:function(t,n,e){"use strict";function r(t){return t<0?-1:1}function o(t,n,e){var o=t._x1-t._x0,i=n-t._x1,a=(t._y1-t._y0)/(o||i<0&&-0),c=(e-t._y1)/(i||o<0&&-0),l=(a*i+c*o)/(o+i);return(r(a)+r(c))*Math.min(Math.abs(a),Math.abs(c),.5*Math.abs(l))||0}function i(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function a(t,n,e){var r=t._x0,o=t._y0,i=t._x1,a=t._y1,c=(i-r)/3;t._context.bezierCurveTo(r+c,o+c*n,i-c,a-c*e,i,a)}function c(t){this._context=t}function l(t){this._context=new u(t)}function u(t){this._context=t}function s(t){return new c(t)}function f(t){return new l(t)}e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return f})),c.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:a(this,this._t0,i(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,a(this,i(this,e=o(this,t,n)),e);break;default:a(this,this._t0,e=o(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(l.prototype=Object.create(c.prototype)).point=function(t,n){c.prototype.point.call(this,n,t)},u.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,o,i){this._context.bezierCurveTo(n,t,r,e,i,o)}}},HlJr:function(t,n,e){"use strict";function r(t){if(("function"===typeof t||"object"===typeof t&&t)&&"valueOf"in t){var n=t.valueOf();if("number"===typeof n)return n}return t}e.d(n,"a",(function(){return r}))},QnoR:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("ERkP");function o(){return(o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function i(t){var n=Object(r.useState)(o({tooltipOpen:!1},t)),e=n[0],i=n[1],a=Object(r.useCallback)((function(t){return i("function"===typeof t?function(n){n.tooltipOpen;var e=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(n,["tooltipOpen"]);return o({},t(e),{tooltipOpen:!0})}:{tooltipOpen:!0,tooltipLeft:t.tooltipLeft,tooltipTop:t.tooltipTop,tooltipData:t.tooltipData})}),[i]),c=Object(r.useCallback)((function(){return i({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})}),[i]);return{tooltipOpen:e.tooltipOpen,tooltipLeft:e.tooltipLeft,tooltipTop:e.tooltipTop,tooltipData:e.tooltipData,updateTooltip:i,showTooltip:a,hideTooltip:c}}},SYW9:function(t,n,e){"use strict";e.r(n);var r=e("ERkP"),o=e.n(r),i=e("6wy5"),a=e("qyW2"),c=e("bf+l"),l=o.a.createElement;n.default=function(){return l(i.a,{component:a.c,title:"Areas",codeSandboxDirectoryName:"visx-area",packageJson:c},"import React, { useMemo, useCallback } from 'react';\nimport { AreaClosed, Line, Bar } from '@visx/shape';\nimport appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock';\nimport { curveMonotoneX } from '@visx/curve';\nimport { GridRows, GridColumns } from '@visx/grid';\nimport { scaleTime, scaleLinear } from '@visx/scale';\nimport { withTooltip, Tooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip';\nimport { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';\nimport { localPoint } from '@visx/event';\nimport { LinearGradient } from '@visx/gradient';\nimport { max, extent, bisector } from 'd3-array';\nimport { timeFormat } from 'd3-time-format';\n\ntype TooltipData = AppleStock;\n\nconst stock = appleStock.slice(800);\nexport const background = '#3b6978';\nexport const background2 = '#204051';\nexport const accentColor = '#edffea';\nexport const accentColorDark = '#75daad';\nconst tooltipStyles = {\n  ...defaultStyles,\n  background,\n  border: '1px solid white',\n  color: 'white',\n};\n\n// util\nconst formatDate = timeFormat(\"%b %d, '%y\");\n\n// accessors\nconst getDate = (d: AppleStock) => new Date(d.date);\nconst getStockValue = (d: AppleStock) => d.close;\nconst bisectDate = bisector<AppleStock, Date>(d => new Date(d.date)).left;\n\nexport type AreaProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n};\n\nexport default withTooltip<AreaProps, TooltipData>(\n  ({\n    width,\n    height,\n    margin = { top: 0, right: 0, bottom: 0, left: 0 },\n    showTooltip,\n    hideTooltip,\n    tooltipData,\n    tooltipTop = 0,\n    tooltipLeft = 0,\n  }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {\n    if (width < 10) return null;\n\n    // bounds\n    const innerWidth = width - margin.left - margin.right;\n    const innerHeight = height - margin.top - margin.bottom;\n\n    // scales\n    const dateScale = useMemo(\n      () =>\n        scaleTime({\n          range: [margin.left, innerWidth + margin.left],\n          domain: extent(stock, getDate) as [Date, Date],\n        }),\n      [innerWidth, margin.left],\n    );\n    const stockValueScale = useMemo(\n      () =>\n        scaleLinear({\n          range: [innerHeight + margin.top, margin.top],\n          domain: [0, (max(stock, getStockValue) || 0) + innerHeight / 3],\n          nice: true,\n        }),\n      [margin.top, innerHeight],\n    );\n\n    // tooltip handler\n    const handleTooltip = useCallback(\n      (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {\n        const { x } = localPoint(event) || { x: 0 };\n        const x0 = dateScale.invert(x);\n        const index = bisectDate(stock, x0, 1);\n        const d0 = stock[index - 1];\n        const d1 = stock[index];\n        let d = d0;\n        if (d1 && getDate(d1)) {\n          d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;\n        }\n        showTooltip({\n          tooltipData: d,\n          tooltipLeft: x,\n          tooltipTop: stockValueScale(getStockValue(d)),\n        });\n      },\n      [showTooltip, stockValueScale, dateScale],\n    );\n\n    return (\n      <div>\n        <svg width={width} height={height}>\n          <rect\n            x={0}\n            y={0}\n            width={width}\n            height={height}\n            fill=\"url(#area-background-gradient)\"\n            rx={14}\n          />\n          <LinearGradient id=\"area-background-gradient\" from={background} to={background2} />\n          <LinearGradient id=\"area-gradient\" from={accentColor} to={accentColor} toOpacity={0.1} />\n          <GridRows\n            left={margin.left}\n            scale={stockValueScale}\n            width={innerWidth}\n            strokeDasharray=\"1,3\"\n            stroke={accentColor}\n            strokeOpacity={0}\n            pointerEvents=\"none\"\n          />\n          <GridColumns\n            top={margin.top}\n            scale={dateScale}\n            height={innerHeight}\n            strokeDasharray=\"1,3\"\n            stroke={accentColor}\n            strokeOpacity={0.2}\n            pointerEvents=\"none\"\n          />\n          <AreaClosed<AppleStock>\n            data={stock}\n            x={d => dateScale(getDate(d)) ?? 0}\n            y={d => stockValueScale(getStockValue(d)) ?? 0}\n            yScale={stockValueScale}\n            strokeWidth={1}\n            stroke=\"url(#area-gradient)\"\n            fill=\"url(#area-gradient)\"\n            curve={curveMonotoneX}\n          />\n          <Bar\n            x={margin.left}\n            y={margin.top}\n            width={innerWidth}\n            height={innerHeight}\n            fill=\"transparent\"\n            rx={14}\n            onTouchStart={handleTooltip}\n            onTouchMove={handleTooltip}\n            onMouseMove={handleTooltip}\n            onMouseLeave={() => hideTooltip()}\n          />\n          {tooltipData && (\n            <g>\n              <Line\n                from={{ x: tooltipLeft, y: margin.top }}\n                to={{ x: tooltipLeft, y: innerHeight + margin.top }}\n                stroke={accentColorDark}\n                strokeWidth={2}\n                pointerEvents=\"none\"\n                strokeDasharray=\"5,2\"\n              />\n              <circle\n                cx={tooltipLeft}\n                cy={tooltipTop + 1}\n                r={4}\n                fill=\"black\"\n                fillOpacity={0.1}\n                stroke=\"black\"\n                strokeOpacity={0.1}\n                strokeWidth={2}\n                pointerEvents=\"none\"\n              />\n              <circle\n                cx={tooltipLeft}\n                cy={tooltipTop}\n                r={4}\n                fill={accentColorDark}\n                stroke=\"white\"\n                strokeWidth={2}\n                pointerEvents=\"none\"\n              />\n            </g>\n          )}\n        </svg>\n        {tooltipData && (\n          <div>\n            <TooltipWithBounds\n              key={Math.random()}\n              top={tooltipTop - 12}\n              left={tooltipLeft + 12}\n              style={tooltipStyles}\n            >\n              {`$${getStockValue(tooltipData)}`}\n            </TooltipWithBounds>\n            <Tooltip\n              top={innerHeight + margin.top - 14}\n              left={tooltipLeft}\n              style={{\n                ...defaultStyles,\n                minWidth: 72,\n                textAlign: 'center',\n                transform: 'translateX(-50%)',\n              }}\n            >\n              {formatDate(getDate(tooltipData))}\n            </Tooltip>\n          </div>\n        )}\n      </div>\n    );\n  },\n);\n")}},"VB+g":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("rkTo"),o=e("ZQHj");function i(){return(i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var a={x:0,y:0};function c(t,n){if(!t||!n)return null;var e=function(t){return t?Object(o.f)(t)?t.changedTouches.length>0?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:i({},a):{x:t.clientX,y:t.clientY}:i({},a)}(n),c=Object(o.c)(t)?t.ownerSVGElement:t,l=Object(o.d)(c)?c.getScreenCTM():null;if(Object(o.e)(c)&&l){var u=c.createSVGPoint();return u.x=e.x,u.y=e.y,u=u.matrixTransform(l.inverse()),new r.a({x:u.x,y:u.y})}var s=t.getBoundingClientRect();return new r.a({x:e.x-s.left-t.clientLeft,y:e.y-s.top-t.clientTop})}},WqRU:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e("ERkP"),o=e.n(r),i=e("O94r"),a=e.n(i);function c(){return(c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function l(t){var n=t.from,e=void 0===n?{x:0,y:0}:n,r=t.to,i=void 0===r?{x:1,y:1}:r,l=t.fill,u=void 0===l?"transparent":l,s=t.className,f=t.innerRef,p=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,["from","to","fill","className","innerRef"]),h=e.x===i.x||e.y===i.y;return o.a.createElement("line",c({ref:f,className:a()("visx-line",s),x1:e.x,y1:e.y,x2:i.x,y2:i.y,fill:u,shapeRendering:h?"crispEdges":"auto"},p))}},ZQHj:function(t,n,e){"use strict";function r(t){return!!t&&t instanceof Element}function o(t){return!!t&&(t instanceof SVGElement||"ownerSVGElement"in t)}function i(t){return!!t&&"createSVGPoint"in t}function a(t){return!!t&&"getScreenCTM"in t}function c(t){return!!t&&"changedTouches"in t}function l(t){return!!t&&(t instanceof Event||"nativeEvent"in t&&t.nativeEvent instanceof Event)}e.d(n,"a",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"e",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"f",(function(){return c})),e.d(n,"b",(function(){return l}))},Zbhd:function(t,n,e){"use strict";var r=e("PB0s"),o=e("XYeE"),i=e("jLnZ"),a=e("KLrH");n.a=function(t,n,e,c){var l,u=Object(r.c)(t,n,e);switch((c=Object(o.a)(null==c?",f":c)).type){case"s":var s=Math.max(Math.abs(t),Math.abs(n));return null!=c.precision||isNaN(l=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(n)/3)))-Object(i.a)(Math.abs(t)))}(u,s))||(c.precision=l),Object(a.b)(c,s);case"":case"e":case"g":case"p":case"r":null!=c.precision||isNaN(l=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Object(i.a)(n)-Object(i.a)(t))+1}(u,Math.max(Math.abs(t),Math.abs(n))))||(c.precision=l-("e"===c.type));break;case"f":case"%":null!=c.precision||isNaN(l=function(t){return Math.max(0,-Object(i.a)(Math.abs(t)))}(u))||(c.precision=l-2*("%"===c.type))}return Object(a.a)(c)}},g2fB:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e("ERkP"),o=e.n(r),i=e("O94r"),a=e.n(i);function c(){return(c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function l(t){var n=t.className,e=t.innerRef,r=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,["className","innerRef"]);return o.a.createElement("rect",c({ref:e,className:a()("visx-bar",n)},r))}},"hsl+":function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t){var n=t.from,e=void 0===n?{x:0,y:0}:n,i=t.to,c=void 0===i?{x:1,y:1}:i,l=t.fill,u=void 0===l?"transparent":l,s=t.className,f=t.innerRef,p=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,["from","to","fill","className","innerRef"]),h=e.x===c.x||e.y===c.y;return r.default.createElement("line",a({ref:f,className:(0,o.default)("visx-line",s),x1:e.x,y1:e.y,x2:c.x,y2:c.y,fill:u,shapeRendering:h?"crispEdges":"auto"},p))};var r=i(e("ERkP")),o=i(e("O94r"));function i(t){return t&&t.__esModule?t:{default:t}}function a(){return(a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}},jpI8:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("VB+g"),o=e("ZQHj");function i(t,n){if(Object(o.a)(t)&&n)return Object(r.a)(t,n);if(Object(o.b)(t)){var e=t,i=e.target;if(i)return Object(r.a)(i,e)}return null}},nNND:function(t,n,e){"use strict";function r(t,n){var e=t;return"ticks"in e?e.ticks(n):e.domain().filter((function(t,e,r){return null==n||r.length<=n||e%Math.round((r.length-1)/n)===0}))}e.d(n,"a",(function(){return r}))},rkTo:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return o}));var o=function(){function t(t){var n=t.x,e=void 0===n?0:n,o=t.y,i=void 0===o?0:o;r(this,"x",0),r(this,"y",0),this.x=e,this.y=i}var n=t.prototype;return n.value=function(){return{x:this.x,y:this.y}},n.toArray=function(){return[this.x,this.y]},t}()},"uKU/":function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return l}));var r=e("PB0s"),o=e("2+fR"),i=e("W1cA"),a=e("Zbhd");function c(t){var n=t.domain;return t.ticks=function(t){var e=n();return Object(r.a)(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return Object(a.a)(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var o,i=n(),a=0,c=i.length-1,l=i[a],u=i[c];return u<l&&(o=l,l=u,u=o,o=a,a=c,c=o),(o=Object(r.b)(l,u,e))>0?(l=Math.floor(l/o)*o,u=Math.ceil(u/o)*o,o=Object(r.b)(l,u,e)):o<0&&(l=Math.ceil(l*o)/o,u=Math.floor(u*o)/o,o=Object(r.b)(l,u,e)),o>0?(i[a]=Math.floor(l/o)*o,i[c]=Math.ceil(u/o)*o,n(i)):o<0&&(i[a]=Math.ceil(l*o)/o,i[c]=Math.floor(u*o)/o,n(i)),t},t}function l(){var t=Object(o.b)();return t.copy=function(){return Object(o.a)(t,l())},i.b.apply(t,arguments),c(t)}},ue4z:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return s})),e.d(n,"e",(function(){return l})),e.d(n,"f",(function(){return f}));var r=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},o=function(t){var n;return 1===t.length&&(n=t,t=function(t,e){return r(n(t),e)}),{left:function(n,e,r,o){for(null==r&&(r=0),null==o&&(o=n.length);r<o;){var i=r+o>>>1;t(n[i],e)<0?r=i+1:o=i}return r},right:function(n,e,r,o){for(null==r&&(r=0),null==o&&(o=n.length);r<o;){var i=r+o>>>1;t(n[i],e)>0?o=i:r=i+1}return r}}};var i=o(r);i.right,i.left;var a=function(t,n){var e,r,o,i=t.length,a=-1;if(null==n){for(;++a<i;)if(null!=(e=t[a])&&e>=e)for(r=o=e;++a<i;)null!=(e=t[a])&&(r>e&&(r=e),o<e&&(o=e))}else for(;++a<i;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=o=e;++a<i;)null!=(e=n(t[a],a,t))&&(r>e&&(r=e),o<e&&(o=e));return[r,o]},c=Array.prototype,l=(c.slice,c.map,function(t,n,e){t=+t,n=+n,e=(o=arguments.length)<2?(n=t,t=0,1):o<3?1:+e;for(var r=-1,o=0|Math.max(0,Math.ceil((n-t)/e)),i=new Array(o);++r<o;)i[r]=t+r*e;return i});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var u=function(t,n){var e,r,o=t.length,i=-1;if(null==n){for(;++i<o;)if(null!=(e=t[i])&&e>=e)for(r=e;++i<o;)null!=(e=t[i])&&e>r&&(r=e)}else for(;++i<o;)if(null!=(e=n(t[i],i,t))&&e>=e)for(r=e;++i<o;)null!=(e=n(t[i],i,t))&&e>r&&(r=e);return r},s=function(t){for(var n,e,r,o=t.length,i=-1,a=0;++i<o;)a+=t[i].length;for(e=new Array(a);--o>=0;)for(n=(r=t[o]).length;--n>=0;)e[--a]=r[n];return e},f=function(t){if(!(o=t.length))return[];for(var n=-1,e=function(t,n){var e,r,o=t.length,i=-1;if(null==n){for(;++i<o;)if(null!=(e=t[i])&&e>=e)for(r=e;++i<o;)null!=(e=t[i])&&r>e&&(r=e)}else for(;++i<o;)if(null!=(e=n(t[i],i,t))&&e>=e)for(r=e;++i<o;)null!=(e=n(t[i],i,t))&&r>e&&(r=e);return r}(t,p),r=new Array(e);++n<e;)for(var o,i=-1,a=r[n]=new Array(o);++i<o;)a[i]=t[i][n];return r};function p(t){return t.length}},xc3W:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("ERkP"),o=e.n(r),i=e("QnoR");function a(){return(a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function c(t,n,e){void 0===n&&(n={style:{position:"relative",width:"inherit",height:"inherit"}}),void 0===e&&(e=function(t,n){return o.a.createElement("div",n,t)});return function(r){var c=Object(i.a)();return e(o.a.createElement(t,a({},c,r)),n)}}},zjfJ:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))}},[["DTjC",0,2,1,3,4,5,6,7,11,17,29]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[121],{"+H8D":function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e("aWzz"),i=e.n(r),o=e("ERkP"),a=e.n(o);function u(n){var t=n.node,e=void 0===t?{x:0,y:0,r:15}:t;return a.a.createElement("circle",{cx:e.x,cy:e.y,r:e.r||15,fill:"#21D4FD"})}u.propTypes={node:i.a.shape({x:i.a.number.isRequired,y:i.a.number.isRequired,r:i.a.number})}},"1rRp":function(n,t,e){"use strict";var r=Math.PI,i=2*r,o=i-1e-6;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function u(){return new a}a.prototype=u.prototype={constructor:a,moveTo:function(n,t){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(n,t){this._+="L"+(this._x1=+n)+","+(this._y1=+t)},quadraticCurveTo:function(n,t,e,r){this._+="Q"+ +n+","+ +t+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(n,t,e,r,i,o){this._+="C"+ +n+","+ +t+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(n,t,e,i,o){n=+n,t=+t,e=+e,i=+i,o=+o;var a=this._x1,u=this._y1,c=e-n,s=i-t,f=a-n,l=u-t,h=f*f+l*l;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=n)+","+(this._y1=t);else if(h>1e-6)if(Math.abs(l*c-s*f)>1e-6&&o){var d=e-a,p=i-u,m=c*c+s*s,y=d*d+p*p,v=Math.sqrt(m),x=Math.sqrt(h),g=o*Math.tan((r-Math.acos((m+h-y)/(2*v*x)))/2),b=g/x,_=g/v;Math.abs(b-1)>1e-6&&(this._+="L"+(n+b*f)+","+(t+b*l)),this._+="A"+o+","+o+",0,0,"+ +(l*d>f*p)+","+(this._x1=n+_*c)+","+(this._y1=t+_*s)}else this._+="L"+(this._x1=n)+","+(this._y1=t);else;},arc:function(n,t,e,a,u,c){n=+n,t=+t,c=!!c;var s=(e=+e)*Math.cos(a),f=e*Math.sin(a),l=n+s,h=t+f,d=1^c,p=c?a-u:u-a;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+l+","+h:(Math.abs(this._x1-l)>1e-6||Math.abs(this._y1-h)>1e-6)&&(this._+="L"+l+","+h),e&&(p<0&&(p=p%i+i),p>o?this._+="A"+e+","+e+",0,1,"+d+","+(n-s)+","+(t-f)+"A"+e+","+e+",0,1,"+d+","+(this._x1=l)+","+(this._y1=h):p>1e-6&&(this._+="A"+e+","+e+",0,"+ +(p>=r)+","+d+","+(this._x1=n+e*Math.cos(u))+","+(this._y1=t+e*Math.sin(u))))},rect:function(n,t,e,r){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+t)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}},t.a=u},"4pY7":function(n,t,e){"use strict";e.r(t);var r=e("ERkP"),i=e.n(r),o=e("6wy5"),a=e("l4ux"),u=e("zUg8"),c=i.a.createElement;t.default=function(){return c(o.a,{events:!0,title:"Trees",component:a.b,codeSandboxDirectoryName:"visx-tree",packageJson:u},"import React, { useMemo } from 'react';\nimport { Group } from '@visx/group';\nimport { Tree, hierarchy } from '@visx/hierarchy';\nimport { HierarchyPointNode } from '@visx/hierarchy/lib/types';\nimport { LinkHorizontal } from '@visx/shape';\nimport { LinearGradient } from '@visx/gradient';\n\nconst peach = '#fd9b93';\nconst pink = '#fe6e9e';\nconst blue = '#03c0dc';\nconst green = '#26deb0';\nconst plum = '#71248e';\nconst lightpurple = '#374469';\nconst white = '#ffffff';\nexport const background = '#272b4d';\n\ninterface TreeNode {\n  name: string;\n  children?: this[];\n}\n\ntype HierarchyNode = HierarchyPointNode<TreeNode>;\n\nconst rawTree: TreeNode = {\n  name: 'T',\n  children: [\n    {\n      name: 'A',\n      children: [\n        { name: 'A1' },\n        { name: 'A2' },\n        { name: 'A3' },\n        {\n          name: 'C',\n          children: [\n            {\n              name: 'C1',\n            },\n            {\n              name: 'D',\n              children: [\n                {\n                  name: 'D1',\n                },\n                {\n                  name: 'D2',\n                },\n                {\n                  name: 'D3',\n                },\n              ],\n            },\n          ],\n        },\n      ],\n    },\n    { name: 'Z' },\n    {\n      name: 'B',\n      children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }],\n    },\n  ],\n};\n\n/** Handles rendering Root, Parent, and other Nodes. */\nfunction Node({ node }: { node: HierarchyNode }) {\n  const width = 40;\n  const height = 20;\n  const centerX = -width / 2;\n  const centerY = -height / 2;\n  const isRoot = node.depth === 0;\n  const isParent = !!node.children;\n\n  if (isRoot) return <RootNode node={node} />;\n  if (isParent) return <ParentNode node={node} />;\n\n  return (\n    <Group top={node.x} left={node.y}>\n      <rect\n        height={height}\n        width={width}\n        y={centerY}\n        x={centerX}\n        fill={background}\n        stroke={green}\n        strokeWidth={1}\n        strokeDasharray=\"2,2\"\n        strokeOpacity={0.6}\n        rx={10}\n        onClick={() => {\n          alert(`clicked: ${JSON.stringify(node.data.name)}`);\n        }}\n      />\n      <text\n        dy=\".33em\"\n        fontSize={9}\n        fontFamily=\"Arial\"\n        textAnchor=\"middle\"\n        fill={green}\n        style={{ pointerEvents: 'none' }}\n      >\n        {node.data.name}\n      </text>\n    </Group>\n  );\n}\n\nfunction RootNode({ node }: { node: HierarchyNode }) {\n  return (\n    <Group top={node.x} left={node.y}>\n      <circle r={12} fill=\"url('#lg')\" />\n      <text\n        dy=\".33em\"\n        fontSize={9}\n        fontFamily=\"Arial\"\n        textAnchor=\"middle\"\n        style={{ pointerEvents: 'none' }}\n        fill={plum}\n      >\n        {node.data.name}\n      </text>\n    </Group>\n  );\n}\n\nfunction ParentNode({ node }: { node: HierarchyNode }) {\n  const width = 40;\n  const height = 20;\n  const centerX = -width / 2;\n  const centerY = -height / 2;\n\n  return (\n    <Group top={node.x} left={node.y}>\n      <rect\n        height={height}\n        width={width}\n        y={centerY}\n        x={centerX}\n        fill={background}\n        stroke={blue}\n        strokeWidth={1}\n        onClick={() => {\n          alert(`clicked: ${JSON.stringify(node.data.name)}`);\n        }}\n      />\n      <text\n        dy=\".33em\"\n        fontSize={9}\n        fontFamily=\"Arial\"\n        textAnchor=\"middle\"\n        style={{ pointerEvents: 'none' }}\n        fill={white}\n      >\n        {node.data.name}\n      </text>\n    </Group>\n  );\n}\n\nconst defaultMargin = { top: 10, left: 80, right: 80, bottom: 10 };\n\nexport type TreeProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n};\n\nexport default function Example({ width, height, margin = defaultMargin }: TreeProps) {\n  const data = useMemo(() => hierarchy(rawTree), []);\n  const yMax = height - margin.top - margin.bottom;\n  const xMax = width - margin.left - margin.right;\n\n  return width < 10 ? null : (\n    <svg width={width} height={height}>\n      <LinearGradient id=\"lg\" from={peach} to={pink} />\n      <rect width={width} height={height} rx={14} fill={background} />\n      <Tree<TreeNode> root={data} size={[yMax, xMax]}>\n        {tree => (\n          <Group top={margin.top} left={margin.left}>\n            {tree.links().map((link, i) => (\n              <LinkHorizontal\n                key={`link-${i}`}\n                data={link}\n                stroke={lightpurple}\n                strokeWidth=\"1\"\n                fill=\"none\"\n              />\n            ))}\n            {tree.descendants().map((node, i) => (\n              <Node key={`node-${i}`} node={node} />\n            ))}\n          </Group>\n        )}\n      </Tree>\n    </svg>\n  );\n}\n")}},"8XUA":function(n,t,e){"use strict";e.d(t,"a",(function(){return p})),e.d(t,"c",(function(){return m})),e.d(t,"b",(function(){return y}));var r=e("1rRp"),i=e("w4to"),o=e("Df+F"),a=e("ZzoX"),u=e("oT78");function c(n){return n.source}function s(n){return n.target}function f(n){var t=c,e=s,u=a.a,f=a.b,l=null;function h(){var o,a=i.a.call(arguments),c=t.apply(this,a),s=e.apply(this,a);if(l||(l=o=Object(r.a)()),n(l,+u.apply(this,(a[0]=c,a)),+f.apply(this,a),+u.apply(this,(a[0]=s,a)),+f.apply(this,a)),o)return l=null,o+""||null}return h.source=function(n){return arguments.length?(t=n,h):t},h.target=function(n){return arguments.length?(e=n,h):e},h.x=function(n){return arguments.length?(u="function"===typeof n?n:Object(o.a)(+n),h):u},h.y=function(n){return arguments.length?(f="function"===typeof n?n:Object(o.a)(+n),h):f},h.context=function(n){return arguments.length?(l=null==n?null:n,h):l},h}function l(n,t,e,r,i){n.moveTo(t,e),n.bezierCurveTo(t=(t+r)/2,e,t,i,r,i)}function h(n,t,e,r,i){n.moveTo(t,e),n.bezierCurveTo(t,e=(e+i)/2,r,e,r,i)}function d(n,t,e,r,i){var o=Object(u.a)(t,e),a=Object(u.a)(t,e=(e+i)/2),c=Object(u.a)(r,e),s=Object(u.a)(r,i);n.moveTo(o[0],o[1]),n.bezierCurveTo(a[0],a[1],c[0],c[1],s[0],s[1])}function p(){return f(l)}function m(){return f(h)}function y(){var n=f(d);return n.angle=n.x,delete n.x,n.radius=n.y,delete n.y,n}},"Cf/J":function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("aWzz"),i=e.n(r),o=e("ERkP"),a=e.n(o);function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function c(n){var t=n.children,e=n.id,r=n.from,i=n.to,o=n.x1,c=n.y1,s=n.x2,f=n.y2,l=n.fromOffset,h=void 0===l?"0%":l,d=n.fromOpacity,p=void 0===d?1:d,m=n.toOffset,y=void 0===m?"100%":m,v=n.toOpacity,x=void 0===v?1:v,g=n.rotate,b=n.transform,_=n.vertical,O=void 0===_||_,k=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),w=o,E=s,T=c,z=f;return!O||w||E||T||z||(w="0",E="0",T="0",z="1"),a.a.createElement("defs",null,a.a.createElement("linearGradient",u({id:e,x1:w,y1:T,x2:E,y2:z,gradientTransform:g?"rotate("+g+")":b},k),!!t&&t,!t&&a.a.createElement("stop",{offset:h,stopColor:r,stopOpacity:p}),!t&&a.a.createElement("stop",{offset:y,stopColor:i,stopOpacity:x})))}c.propTypes={id:i.a.string.isRequired,from:i.a.string,to:i.a.string,x1:i.a.oneOfType([i.a.string,i.a.number]),x2:i.a.oneOfType([i.a.string,i.a.number]),y1:i.a.oneOfType([i.a.string,i.a.number]),y2:i.a.oneOfType([i.a.string,i.a.number]),fromOffset:i.a.oneOfType([i.a.string,i.a.number]),fromOpacity:i.a.oneOfType([i.a.string,i.a.number]),toOffset:i.a.oneOfType([i.a.string,i.a.number]),toOpacity:i.a.oneOfType([i.a.string,i.a.number]),rotate:i.a.oneOfType([i.a.string,i.a.number]),transform:i.a.string,children:i.a.node,vertical:i.a.bool}},"Df+F":function(n,t,e){"use strict";t.a=function(n){return function(){return n}}},Dhk8:function(n,t,e){var r=e("Syyo"),i=e("KCLV"),o=e("kHoZ"),a=r?r.toStringTag:void 0;n.exports=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":a&&a in Object(n)?i(n):o(n)}},E5FE:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("aWzz"),i=e.n(r),o=e("ERkP"),a=e.n(o),u={source:{x:0,y:0},target:{x:0,y:0}};function c(n){var t=n.link,e=void 0===t?u:t;return a.a.createElement("line",{x1:e.source.x,y1:e.source.y,x2:e.target.x,y2:e.target.y,strokeWidth:2,stroke:"#999",strokeOpacity:.6})}c.propTypes={link:i.a.shape({source:i.a.shape({x:i.a.number.isRequired,y:i.a.number.isRequired}).isRequired,target:i.a.shape({x:i.a.number.isRequired,y:i.a.number.isRequired}).isRequired})}},ENE1:function(n,t,e){var r=e("IBsm");n.exports=function(){return r.Date.now()}},IBsm:function(n,t,e){var r=e("e93E"),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();n.exports=o},JmwF:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e("aWzz"),i=e.n(r),o=e("ERkP"),a=e.n(o),u=e("O94r"),c=e.n(u);function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function f(n){var t=n.top,e=void 0===t?0:t,r=n.left,i=void 0===r?0:r,o=n.transform,u=n.className,f=n.children,l=n.innerRef,h=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["top","left","transform","className","children","innerRef"]);return a.a.createElement("g",s({ref:l,className:c()("visx-group",u),transform:o||"translate("+i+", "+e+")"},h),f)}f.propTypes={top:i.a.number,left:i.a.number,transform:i.a.string,className:i.a.string,children:i.a.node,innerRef:i.a.oneOfType([i.a.string,i.a.func,i.a.object])}},KCLV:function(n,t,e){var r=e("Syyo"),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,u=r?r.toStringTag:void 0;n.exports=function(n){var t=o.call(n,u),e=n[u];try{n[u]=void 0;var r=!0}catch(c){}var i=a.call(n);return r&&(t?n[u]=e:delete n[u]),i}},LdV1:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var r=e("aWzz"),i=e.n(r),o=e("ERkP"),a=e.n(o),u=e("O94r"),c=e.n(u),s=e("JmwF"),f=e("YOo5"),l=e("E5FE"),h=e("+H8D");function d(n){var t=n.top,e=n.left,r=n.className,i=n.root,o=n.size,u=n.nodeSize,d=n.separation,p=n.children,m=n.linkComponent,y=void 0===m?l.a:m,v=n.nodeComponent,x=void 0===v?h.a:v,g=Object(f.a)();o&&g.size(o),u&&g.nodeSize(u),d&&g.separation(d);var b=g(i);return p?a.a.createElement(a.a.Fragment,null,p(b)):a.a.createElement(s.a,{top:t,left:e,className:c()("visx-tree",r)},y&&b.links().map((function(n,t){return a.a.createElement(s.a,{key:"tree-link-"+t},a.a.createElement(y,{link:n}))})),x&&b.descendants().map((function(n,t){return a.a.createElement(s.a,{key:"tree-node-"+t},a.a.createElement(x,{node:n}))})))}d.propTypes={children:i.a.func,top:i.a.number,left:i.a.number,className:i.a.string,separation:i.a.func}},RNvQ:function(n,t,e){var r=e("tQYX"),i=e("ENE1"),o=e("nvU9"),a=Math.max,u=Math.min;n.exports=function(n,t,e){var c,s,f,l,h,d,p=0,m=!1,y=!1,v=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function x(t){var e=c,r=s;return c=s=void 0,p=t,l=n.apply(r,e)}function g(n){return p=n,h=setTimeout(_,t),m?x(n):l}function b(n){var e=n-d;return void 0===d||e>=t||e<0||y&&n-p>=f}function _(){var n=i();if(b(n))return O(n);h=setTimeout(_,function(n){var e=t-(n-d);return y?u(e,f-(n-p)):e}(n))}function O(n){return h=void 0,v&&c?x(n):(c=s=void 0,l)}function k(){var n=i(),e=b(n);if(c=arguments,s=this,d=n,e){if(void 0===h)return g(d);if(y)return clearTimeout(h),h=setTimeout(_,t),x(d)}return void 0===h&&(h=setTimeout(_,t)),l}return t=o(t)||0,r(e)&&(m=!!e.leading,f=(y="maxWait"in e)?a(o(e.maxWait)||0,t):f,v="trailing"in e?!!e.trailing:v),k.cancel=function(){void 0!==h&&clearTimeout(h),p=0,c=d=s=h=void 0},k.flush=function(){return void 0===h?l:O(i())},k}},RpX9:function(n,t,e){"use strict";e.d(t,"b",(function(){return f})),e.d(t,"a",(function(){return l}));var r=e("ERkP"),i=e.n(r),o=e("O94r"),a=e.n(o),u=e("8XUA"),c=e("kBt3");function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function f(n){var t=n.source,e=n.target,r=n.x,i=n.y;return function(n){var o=Object(u.a)();return o.x(r),o.y(i),o.source(t),o.target(e),o(n)}}function l(n){var t=n.className,e=n.children,r=n.data,o=n.innerRef,u=n.path,l=n.x,h=void 0===l?c.f:l,d=n.y,p=void 0===d?c.e:d,m=n.source,y=void 0===m?c.c:m,v=n.target,x=void 0===v?c.d:v,g=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["className","children","data","innerRef","path","x","y","source","target"]),b=u||f({source:y,target:x,x:h,y:p});return e?i.a.createElement(i.a.Fragment,null,e({path:b})):i.a.createElement("path",s({ref:o,className:a()("visx-link visx-link-horizontal-diagonal",t),d:b(r)||""},g))}},Syyo:function(n,t,e){var r=e("IBsm").Symbol;n.exports=r},YOo5:function(n,t,e){"use strict";var r=e("tshL");function i(n,t){return n.parent===t.parent?1:2}function o(n){var t=n.children;return t?t[0]:n.t}function a(n){var t=n.children;return t?t[t.length-1]:n.t}function u(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function c(n,t,e){return n.a.parent===t.parent?n.a:e}function s(n,t){this._=n,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=t}s.prototype=Object.create(r.a.prototype),t.a=function(){var n=i,t=1,e=1,r=null;function f(i){var o=function(n){for(var t,e,r,i,o,a=new s(n,0),u=[a];t=u.pop();)if(r=t._.children)for(t.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=t.children[i]=new s(r[i],i)),e.parent=t;return(a.parent=new s(null,0)).children=[a],a}(i);if(o.eachAfter(l),o.parent.m=-o.z,o.eachBefore(h),r)i.eachBefore(d);else{var a=i,u=i,c=i;i.eachBefore((function(n){n.x<a.x&&(a=n),n.x>u.x&&(u=n),n.depth>c.depth&&(c=n)}));var f=a===u?1:n(a,u)/2,p=f-a.x,m=t/(u.x+f+p),y=e/(c.depth||1);i.eachBefore((function(n){n.x=(n.x+p)*m,n.y=n.depth*y}))}return i}function l(t){var e=t.children,r=t.parent.children,i=t.i?r[t.i-1]:null;if(e){!function(n){for(var t,e=0,r=0,i=n.children,o=i.length;--o>=0;)(t=i[o]).z+=e,t.m+=e,e+=t.s+(r+=t.c)}(t);var s=(e[0].z+e[e.length-1].z)/2;i?(t.z=i.z+n(t._,i._),t.m=t.z-s):t.z=s}else i&&(t.z=i.z+n(t._,i._));t.parent.A=function(t,e,r){if(e){for(var i,s=t,f=t,l=e,h=s.parent.children[0],d=s.m,p=f.m,m=l.m,y=h.m;l=a(l),s=o(s),l&&s;)h=o(h),(f=a(f)).a=t,(i=l.z+m-s.z-d+n(l._,s._))>0&&(u(c(l,t,r),t,i),d+=i,p+=i),m+=l.m,d+=s.m,y+=h.m,p+=f.m;l&&!a(f)&&(f.t=l,f.m+=m-p),s&&!o(h)&&(h.t=s,h.m+=d-y,r=t)}return r}(t,i,t.parent.A||r[0])}function h(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function d(n){n.x*=t,n.y=n.depth*e}return f.separation=function(t){return arguments.length?(n=t,f):n},f.size=function(n){return arguments.length?(r=!1,t=+n[0],e=+n[1],f):r?null:[t,e]},f.nodeSize=function(n){return arguments.length?(r=!0,t=+n[0],e=+n[1],f):r?[t,e]:null},f}},ZzoX:function(n,t,e){"use strict";function r(n){return n[0]}function i(n){return n[1]}e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i}))},a88S:function(n,t,e){var r=e("Dhk8"),i=e("tLQN");n.exports=function(n){return"symbol"==typeof n||i(n)&&"[object Symbol]"==r(n)}},e93E:function(n,t,e){(function(t){var e="object"==typeof t&&t&&t.Object===Object&&t;n.exports=e}).call(this,e("fRV1"))},fEZf:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trees",function(){return e("4pY7")}])},fRV1:function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}n.exports=e},kBt3:function(n,t,e){"use strict";function r(n){return"number"===typeof(null==n?void 0:n.x)?null==n?void 0:n.x:0}function i(n){return"number"===typeof(null==n?void 0:n.y)?null==n?void 0:n.y:0}function o(n){return null==n?void 0:n.source}function a(n){return null==n?void 0:n.target}function u(n){return null==n?void 0:n[0]}function c(n){return null==n?void 0:n[1]}e.d(t,"e",(function(){return r})),e.d(t,"f",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return a})),e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return c}))},kHoZ:function(n,t){var e=Object.prototype.toString;n.exports=function(n){return e.call(n)}},l4ux:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return v}));var r=e("ERkP"),i=e.n(r),o=e("JmwF"),a=e("tshL"),u=e("LdV1"),c=e("RpX9"),s=e("Cf/J"),f=i.a.createElement,l="#272b4d",h={name:"T",children:[{name:"A",children:[{name:"A1"},{name:"A2"},{name:"A3"},{name:"C",children:[{name:"C1"},{name:"D",children:[{name:"D1"},{name:"D2"},{name:"D3"}]}]}]},{name:"Z"},{name:"B",children:[{name:"B1"},{name:"B2"},{name:"B3"}]}]};function d(n){var t=n.node,e=0===t.depth,r=!!t.children;return e?f(p,{node:t}):r?f(m,{node:t}):f(o.a,{top:t.x,left:t.y},f("rect",{height:20,width:40,y:-10,x:-20,fill:l,stroke:"#26deb0",strokeWidth:1,strokeDasharray:"2,2",strokeOpacity:.6,rx:10,onClick:function(){alert("clicked: ".concat(JSON.stringify(t.data.name)))}}),f("text",{dy:".33em",fontSize:9,fontFamily:"Arial",textAnchor:"middle",fill:"#26deb0",style:{pointerEvents:"none"}},t.data.name))}function p(n){var t=n.node;return f(o.a,{top:t.x,left:t.y},f("circle",{r:12,fill:"url('#lg')"}),f("text",{dy:".33em",fontSize:9,fontFamily:"Arial",textAnchor:"middle",style:{pointerEvents:"none"},fill:"#71248e"},t.data.name))}function m(n){var t=n.node;return f(o.a,{top:t.x,left:t.y},f("rect",{height:20,width:40,y:-10,x:-20,fill:l,stroke:"#03c0dc",strokeWidth:1,onClick:function(){alert("clicked: ".concat(JSON.stringify(t.data.name)))}}),f("text",{dy:".33em",fontSize:9,fontFamily:"Arial",textAnchor:"middle",style:{pointerEvents:"none"},fill:"#ffffff"},t.data.name))}var y={top:10,left:80,right:80,bottom:10};function v(n){var t=n.width,e=n.height,i=n.margin,p=void 0===i?y:i,m=Object(r.useMemo)((function(){return Object(a.c)(h)}),[]),v=e-p.top-p.bottom,x=t-p.left-p.right;return t<10?null:f("svg",{width:t,height:e},f(s.a,{id:"lg",from:"#fd9b93",to:"#fe6e9e"}),f("rect",{width:t,height:e,rx:14,fill:l}),f(u.a,{root:m,size:[v,x]},(function(n){return f(o.a,{top:p.top,left:p.left},n.links().map((function(n,t){return f(c.a,{key:"link-".concat(t),data:n,stroke:"#374469",strokeWidth:"1",fill:"none"})})),n.descendants().map((function(n,t){return f(d,{key:"node-".concat(t),node:n})})))})))}try{v.displayName="Example",v.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-tree/Example.tsx#Example"]={docgenInfo:v.__docgenInfo,name:"Example",path:"src/sandboxes/visx-tree/Example.tsx#Example"})}catch(x){}},nvU9:function(n,t,e){var r=e("tQYX"),i=e("a88S"),o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(i(n))return NaN;if(r(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=r(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(o,"");var e=u.test(n);return e||c.test(n)?s(n.slice(2),e?2:8):a.test(n)?NaN:+n}},oT78:function(n,t,e){"use strict";t.a=function(n,t){return[(t=+t)*Math.cos(n-=Math.PI/2),t*Math.sin(n)]}},tLQN:function(n,t){n.exports=function(n){return null!=n&&"object"==typeof n}},tQYX:function(n,t){n.exports=function(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}},tshL:function(n,t,e){"use strict";function r(n){var t=0,e=n.children,r=e&&e.length;if(r)for(;--r>=0;)t+=e[r].value;else t=1;n.value=t}e.d(t,"c",(function(){return i})),e.d(t,"b",(function(){return u})),e.d(t,"a",(function(){return c}));function i(n,t){var e,r,i,a,s,f=new c(n),l=+n.value&&(f.value=n.value),h=[f];for(null==t&&(t=o);e=h.pop();)if(l&&(e.value=+e.data.value),(i=t(e.data))&&(s=i.length))for(e.children=new Array(s),a=s-1;a>=0;--a)h.push(r=e.children[a]=new c(i[a])),r.parent=e,r.depth=e.depth+1;return f.eachBefore(u)}function o(n){return n.children}function a(n){n.data=n.data.data}function u(n){var t=0;do{n.height=t}while((n=n.parent)&&n.height<++t)}function c(n){this.data=n,this.depth=this.height=0,this.parent=null}c.prototype=i.prototype={constructor:c,count:function(){return this.eachAfter(r)},each:function(n){var t,e,r,i,o=this,a=[o];do{for(t=a.reverse(),a=[];o=t.pop();)if(n(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])}while(a.length);return this},eachAfter:function(n){for(var t,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),t=i.children)for(e=0,r=t.length;e<r;++e)o.push(t[e]);for(;i=a.pop();)n(i);return this},eachBefore:function(n){for(var t,e,r=this,i=[r];r=i.pop();)if(n(r),t=r.children)for(e=t.length-1;e>=0;--e)i.push(t[e]);return this},sum:function(n){return this.eachAfter((function(t){for(var e=+n(t.data)||0,r=t.children,i=r&&r.length;--i>=0;)e+=r[i].value;t.value=e}))},sort:function(n){return this.eachBefore((function(t){t.children&&t.children.sort(n)}))},path:function(n){for(var t=this,e=function(n,t){if(n===t)return n;var e=n.ancestors(),r=t.ancestors(),i=null;n=e.pop(),t=r.pop();for(;n===t;)i=n,n=e.pop(),t=r.pop();return i}(t,n),r=[t];t!==e;)t=t.parent,r.push(t);for(var i=r.length;n!==e;)r.splice(i,0,n),n=n.parent;return r},ancestors:function(){for(var n=this,t=[n];n=n.parent;)t.push(n);return t},descendants:function(){var n=[];return this.each((function(t){n.push(t)})),n},leaves:function(){var n=[];return this.eachBefore((function(t){t.children||n.push(t)})),n},links:function(){var n=this,t=[];return n.each((function(e){e!==n&&t.push({source:e.parent,target:e})})),t},copy:function(){return i(this).eachBefore(a)}}},w4to:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=Array.prototype.slice},zUg8:function(n){n.exports=JSON.parse('{"name":"@visx/demo-tree","description":"Standalone visx tree demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/gradient":"latest","@visx/group":"latest","@visx/hierarchy":"latest","@visx/responsive":"latest","@visx/shape":"latest","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","hierarchy","tree"]}')}},[["fEZf",0,2,1,3,6]]]);
(self.webpackChunkgame_of_motivations=self.webpackChunkgame_of_motivations||[]).push([[871],{3935:(e,t,r)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=r(4448)},2810:(e,t,r)=>{"use strict";r.d(t,{_:()=>c,d:()=>a});var n=r(655),o=r(7294),u=r(310),i=function(){throw new Error("Make sure that you have wrapped your drop zones with GridContext")},c=o.createContext({register:i,remove:i,getActiveDropId:i,startTraverse:i,measureAll:i,traverse:null,endTraverse:i,onChange:i});function a(e){var t=e.children,r=e.onChange,i=n.CR(o.useState(null),2),a=i[0],s=i[1],l=o.useRef(new Map);function d(e,t,r){var n=l.current.get(e);return n?{x:n.left+t,y:n.top+r}:{x:t,y:r}}return o.createElement(c.Provider,{value:{register:function(e,t){l.current.set(e,t)},remove:function(e){l.current.delete(e)},getActiveDropId:function(e,t,r){var o,u,i=d(e,t,r),c=i.x,a=i.y;try{for(var s=n.XA(l.current.entries()),f=s.next();!f.done;f=s.next()){var v=n.CR(f.value,2),m=v[0],h=v[1];if(!h.disableDrop&&c>h.left&&c<h.right&&a>h.top&&a<h.bottom)return m}}catch(e){o={error:e}}finally{try{f&&!f.done&&(u=s.return)&&u.call(s)}finally{if(o)throw o.error}}return null},startTraverse:function(e,t,r,o,i){var c=d(e,r,o),f=function(e,t,r){var n=l.current.get(e);return{x:t-n.left,y:r-n.top}}(t,c.x,c.y),v=f.x,m=f.y,h=l.current.get(t),g=h.grid,p=h.count,x=(0,u.mg)(v+g.columnWidth/2,m+g.rowHeight/2,g,p),y=n.CR((0,u.WP)(x,g).xy,2),w=y[0],b=y[1],S=function(e,t){var r=l.current.get(e),n=l.current.get(t);return{x:n.left-r.left,y:n.top-r.top}}(e,t),C=S.x,R=S.y;a&&a&&a.targetIndex!==x&&a.targetId!==t||s({rx:w+C,ry:b+R,tx:v,ty:m,sourceId:e,targetId:t,sourceIndex:i,targetIndex:x})},traverse:a,measureAll:function(){l.current.forEach((function(e){e.remeasure()}))},endTraverse:function(){s(null)},onChange:function(e,t,o,u){s(n.pi({},a,{execute:!0})),r(e,t,o,u)}}},t)}},3695:(e,t,r)=>{"use strict";r.d(t,{$:()=>l});var n=r(655),o=r(7294),u=r(1033),i=r(2810),c=r(2585),a=r(310),s=r(7866);function l(e){var t=e.id,r=e.boxesPerRow,l=e.children,d=e.style,f=e.disableDrag,v=void 0!==f&&f,m=e.disableDrop,h=void 0!==m&&m,g=e.rowHeight,p=n._T(e,["id","boxesPerRow","children","style","disableDrag","disableDrop","rowHeight"]),x=o.useContext(i._),y=x.traverse,w=x.startTraverse,b=x.endTraverse,S=x.register,C=x.measureAll,R=x.onChange,E=x.remove,T=x.getActiveDropId,_=o.useRef(null),I=function(e){var t=n.CR(o.useState({left:0,top:0,width:0,height:0,right:0,bottom:0}),2),r=t[0],i=t[1],c=n.CR(o.useState((function(){return new u.Z((function(e){var t=n.CR(e,1)[0];i(t.target.getBoundingClientRect())}))})),1)[0];return o.useLayoutEffect((function(){return e.current&&c.observe(e.current),function(){return c.disconnect()}}),[e,c]),{bounds:r,remeasure:function(){i(e.current.getBoundingClientRect())}}}(_),L=I.bounds,D=I.remeasure,M=n.CR(o.useState(null),2),O=M[0],W=M[1],A=n.CR(o.useState(null),2),H=A[0],P=A[1],q=y&&!y.execute&&y.targetId===t?y.targetIndex:null,G={columnWidth:L.width/r,boxesPerRow:r,rowHeight:g},k=o.Children.count(l);o.useEffect((function(){S(t,{top:L.top,bottom:L.bottom,left:L.left,right:L.right,width:L.width,height:L.height,count:k,grid:G,disableDrop:h,remeasure:D})}),[k,h,L,t,G]),o.useEffect((function(){return function(){return E(t)}}),[t]);var z=o.Children.map(l,(function(e,t){return t}));return o.createElement("div",n.pi({ref:_,style:n.pi({position:"relative"},d)},p),0===G.columnWidth?null:o.Children.map(l,(function(e,r){var n=y&&y.targetId===t&&y.targetIndex===r,u=H?(0,c.L)(z,H.startIndex,H.targetIndex):z,i=(0,a.WP)(u.indexOf(r),G,q);return o.createElement(s.Z.Provider,{value:{top:i.xy[1],disableDrag:v,endTraverse:b,mountWithTraverseTarget:n?[y.tx,y.ty]:void 0,left:i.xy[0],i:r,onMove:function(e,n,o){if(_.current){O!==r&&W(r);var u=T(t,n+G.columnWidth/2,o+G.rowHeight/2);u&&u!==t?w(t,u,n,o,r):b();var i=u!==t?k:(0,a.X3)(r,G,k,e.delta[0],e.delta[1]);i!==r?(H&&H.targetIndex!==i||!H)&&P({targetIndex:i,startIndex:r}):H&&P(null)}},onEnd:function(e,n,o){var u=T(t,n+G.columnWidth/2,o+G.rowHeight/2)!==t?k:(0,a.X3)(r,G,k,e.delta[0],e.delta[1]);y?R(y.sourceId,y.sourceIndex,y.targetIndex,y.targetId):R(t,r,u),P(null),W(null)},onStart:function(){C()},grid:G,dragging:r===O}},e)})))}},1913:(e,t,r)=>{"use strict";r.d(t,{P:()=>h});var n=r(655),o=r(7294),u=!("undefined"==typeof window||!window.document||!window.document.createElement),i=!1,c=0;function a(){c=Date.now(),i&&(i=!1)}function s(){return i}u&&(document.addEventListener("touchstart",a,!0),document.addEventListener("touchmove",a,!0),document.addEventListener("mousemove",(function(){i||Date.now()-c<1e3||(i=!0)}),!0));var l={time:Date.now(),xy:[0,0],delta:[0,0],initial:[0,0],previous:[0,0],direction:[0,0],initialDirection:[0,0],local:[0,0],lastLocal:[0,0],velocity:0,distance:0},d={enableMouse:!0},f=null;var v=r(7863),m=r(7866);function h(e){var t=e.children,r=e.style,u=e.className,i=n._T(e,["children","style","className"]),c=o.useContext(m.Z);if(!c)throw Error("Unable to find GridItem context. Please ensure that GridItem is used as a child of GridDropZone");var a=c.top,h=c.disableDrag,g=c.endTraverse,p=c.onStart,x=c.mountWithTraverseTarget,y=c.left,w=c.i,b=c.onMove,S=c.onEnd,C=c.grid,R=c.dragging,E=C.columnWidth,T=C.rowHeight,_=o.useRef(!1),I=o.useRef([y,a]),L=n.CR((0,v.q_)((function(){if(x){var e=x;return g(),{xy:e,immediate:!0,zIndex:"1",scale:1.1,opacity:.8}}return{xy:[y,a],immediate:!0,zIndex:"0",scale:1,opacity:1}})),2),D=L[0],M=L[1];function O(e){var t=I.current[0]+e.delta[0],r=I.current[1]+e.delta[1];_.current=!1,S(e,t,r)}var W=function(e,t){void 0===e&&(e={}),void 0===t&&(t={});var r=o.useRef(l),u=n.pi({},d,t),i=u.uid,c=u.enableMouse,a=o.useRef(i||Math.random()),v=o.useRef(!1),m=o.useRef(e);function h(e){f&&f.onTerminationRequest(e)&&(f.onTerminate(e),f=null),g(e)}function g(e){f||(f={id:a.current,onTerminate:T,onTerminationRequest:E},function(e){m.current.onGrant&&m.current.onGrant(r.current,e)}(e))}function p(){window.removeEventListener("mousemove",_,!1),window.removeEventListener("mousemove",I,!0),window.removeEventListener("mouseup",L)}function x(e){R(e),v.current=!0,function(e){return!!m.current.onStartShouldSetCapture&&m.current.onStartShouldSetCapture(r.current,e)}(e)&&g(e)}function y(e){R(e),v.current=!0,window.addEventListener("mousemove",_,!1),window.addEventListener("mousemove",I,!0),window.addEventListener("mouseup",L),function(e){return!!m.current.onStartShouldSet&&m.current.onStartShouldSet(r.current,e)}(e)&&g(e)}function w(){return f&&f.id===a.current}function b(e){v.current=!1,p(),w()&&(f=null,function(e){var t=r.current;r.current=n.pi({},r.current,{lastLocal:t.local}),m.current.onRelease&&m.current.onRelease(r.current,e),f=null}(e))}function S(e){!function(e){var t=e.touches&&e.touches[0]?e.touches[0]:e,o=t.pageX,u=t.pageY,i=r.current,c=Date.now(),a=o-i.xy[0],s=u-i.xy[1],l=o-i.initial[0],d=u-i.initial[1],f=Math.sqrt(l*l+d*d),v=Math.sqrt(a*a+s*s),m=1/(v||1),h=v/(c-i.time),g=0!==i.initialDirection[0]||0!==i.initialDirection[1]?i.initialDirection:[l*m,d*m];r.current=n.pi({},r.current,{time:c,xy:[o,u],initialDirection:g,delta:[l,d],local:[i.lastLocal[0]+o-i.initial[0],i.lastLocal[1]+u-i.initial[1]],velocity:c-i.time==0?i.velocity:h,distance:f,direction:[a*m,s*m],previous:i.xy})}(e),w()||function(e){return!!m.current.onMoveShouldSetCapture&&m.current.onMoveShouldSetCapture(r.current,e)}(e)&&h(e)}function C(e){w()?function(e){v.current&&m.current.onMove&&m.current.onMove(r.current,e)}(e):function(e){return!!m.current.onMoveShouldSet&&m.current.onMoveShouldSet(r.current,e)}(e)&&h(e)}function R(e){var t=e.touches&&e.touches[0]?e.touches[0]:e,o=t.pageX,u=t.pageY,i=r.current;r.current=n.pi({},l,{lastLocal:i.lastLocal||l.lastLocal,xy:[o,u],initial:[o,u],previous:[o,u],time:Date.now()})}function E(e){return!m.current.onTerminationRequest||m.current.onTerminationRequest(r.current,e)}function T(e){var t=r.current;r.current=n.pi({},r.current,{lastLocal:t.local}),m.current.onTerminate&&m.current.onTerminate(r.current,e)}function _(e){s()&&C(e)}function I(e){s()&&S(e)}function L(e){s()&&b(e)}o.useEffect((function(){m.current=e}),[e]),o.useEffect((function(){return p}),[]);var D={onTouchStart:y,onTouchEnd:b,onTouchMove:C,onTouchStartCapture:x,onTouchMoveCapture:S},M=c?{onMouseDown:function(e){s()&&y(e)},onMouseDownCapture:function(e){s()&&x(e)}}:{};return{bind:n.pi({},D,M),terminateCurrentResponder:function(){f&&(f.onTerminate(),f=null)},getCurrentResponder:function(){return f}}}({onMoveShouldSet:function(e){return!h&&(p(),I.current=[y,a],_.current=!0,!0)},onMove:function(e,t){var r=I.current[0]+e.delta[0],n=I.current[1]+e.delta[1];M({xy:[r,n],zIndex:"1",immediate:!0,opacity:.8,scale:1.1}),b(e,r,n)},onTerminationRequest:function(){return!_.current},onTerminate:O,onRelease:O},{enableMouse:!0}).bind;o.useEffect((function(){_.current||M({xy:[y,a],zIndex:"0",opacity:1,scale:1,immediate:!1})}),[_.current,y,a]);var A=n.pi({className:"GridItem"+(R?" dragging":"")+(h?" disabled":"")+u?" "+u:0},W,{style:n.pi({cursor:h?"grab":void 0,zIndex:D.zIndex,position:"absolute",width:E+"px",opacity:D.opacity,height:T+"px",boxSizing:"border-box",transform:(0,v.sX)([D.xy,D.scale],(function(e,t){return"translate3d("+e[0]+"px, "+e[1]+"px, 0) scale("+t+")"}))},r)},i);return"function"==typeof t?t(v.q.div,A,{dragging:R,disabled:!!h,i:w,grid:C}):o.createElement(v.q.div,n.pi({},A),t)}},7866:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var n=r(7294).createContext(null)},310:(e,t,r)=>{"use strict";r.d(t,{WP:()=>o,mg:()=>u,X3:()=>i});var n=r(655);function o(e,t,r){var n=t.boxesPerRow,o=t.rowHeight,u="number"==typeof r&&e>=r?e+1:e;return{xy:[u%n*t.columnWidth,Math.floor(u/n)*o]}}function u(e,t,r,n){var o=r.rowHeight,u=r.boxesPerRow,i=r.columnWidth,c=Math.floor(t/o)*u+Math.floor(e/i);return c>=n?n:c}function i(e,t,r,i,c){var a=n.CR(function(e,t,r,u,i){var c=n.CR(o(e,t).xy,2),a=c[0],s=c[1];return{xy:[a+r+t.columnWidth/2,s+u+t.rowHeight/2]}}(e,t,i,c).xy,2);return u(a[0],a[1],t,r)}},2585:(e,t,r)=>{"use strict";r.d(t,{L:()=>o});var n=r(655);function o(e,t,r){var o=e[t],u=e.length,i=t-r;if(i>0)return n.fl(e.slice(0,r),[o],e.slice(r,t),e.slice(t+1,u));if(i<0){var c=r+1;return n.fl(e.slice(0,t),e.slice(t+1,c),[o],e.slice(c,u))}return e}},9921:(e,t)=>{"use strict";if("function"==typeof Symbol&&Symbol.for){var r=Symbol.for;r("react.element"),r("react.portal"),r("react.fragment"),r("react.strict_mode"),r("react.profiler"),r("react.provider"),r("react.context"),r("react.forward_ref"),r("react.suspense"),r("react.suspense_list"),r("react.memo"),r("react.lazy"),r("react.block"),r("react.server.block"),r("react.fundamental"),r("react.debug_trace_mode"),r("react.legacy_hidden")}},9864:(e,t,r)=>{"use strict";r(9921)},6526:(e,t,r)=>{"use strict";r.d(t,{E:()=>n});var n=r(7294).createContext(null)},682:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(7294),o=(r(5697),r(6526)),u=r(6496),i=r(1881);const c=function(e){var t=e.store,r=e.context,c=e.children,a=(0,n.useMemo)((function(){var e=new u.Z(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),s=(0,n.useMemo)((function(){return t.getState()}),[t]);(0,i.L)((function(){var e=a.subscription;return e.trySubscribe(),s!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[a,s]);var l=r||o.E;return n.createElement(l.Provider,{value:a},c)}},6685:(e,t,r)=>{"use strict";r(8679),r(7294),r(2973),r(6496),r(1881),r(6526)}}]);
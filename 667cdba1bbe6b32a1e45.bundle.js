(self.webpackChunkgame_of_motivations=self.webpackChunkgame_of_motivations||[]).push([[832],{7863:(t,e,n)=>{"use strict";n.d(e,{q_:()=>H,sX:()=>h,q:()=>X});var i=n(2122),a=n(9756),r=n(7294);let s,o,l,c,u,d,h,f=()=>Date.now(),m={},p=t=>t.current,g="undefined"!=typeof window?window.requestAnimationFrame:()=>{},y="undefined"!=typeof window?window.cancelAnimationFrame:()=>{};const b=t=>{var e=Object.assign({colorNames:m,defaultElement:l,applyAnimatedValues:s,createStringInterpolator:o,createAnimatedInterpolation:h,createAnimatedTransform:d,createAnimatedStyle:u,createAnimatedRef:p,requestAnimationFrame:g,cancelAnimationFrame:y,manualFrameloop:c},t);return m=e.colorNames,l=e.defaultElement,s=e.applyAnimatedValues,o=e.createStringInterpolator,h=e.createAnimatedInterpolation,d=e.createAnimatedTransform,u=e.createAnimatedStyle,p=e.createAnimatedRef,g=e.requestAnimationFrame,y=e.cancelAnimationFrame,c=e.manualFrameloop,e};class v{constructor(){this.payload=void 0,this.children=[]}getAnimatedValue(){return this.getValue()}getPayload(){return this.payload||this}attach(){}detach(){}getChildren(){return this.children}addChild(t){0===this.children.length&&this.attach(),this.children.push(t)}removeChild(t){const e=this.children.indexOf(t);this.children.splice(e,1),0===this.children.length&&this.detach()}}class w extends v{constructor(){super(...arguments),this.payload=void 0}attach(){this.payload.forEach((t=>t instanceof v&&t.addChild(this)))}detach(){this.payload.forEach((t=>t instanceof v&&t.removeChild(this)))}}class A extends v{constructor(t){super(),this.payload=t}getValue(t){void 0===t&&(t=!1);const e={};for(const n in this.payload){const i=this.payload[n];(!t||i instanceof v)&&(e[n]=i instanceof v?i[t?"getAnimatedValue":"getValue"]():i)}return e}getAnimatedValue(){return this.getValue(!0)}attach(){Object.values(this.payload).forEach((t=>t instanceof v&&t.addChild(this)))}detach(){Object.values(this.payload).forEach((t=>t instanceof v&&t.removeChild(this)))}}class k extends A{constructor(t){void 0===t&&(t={}),super(t.transform&&d?(0,i.Z)({},t,{transform:d(t.transform)}):t)}}const V={arr:Array.isArray,obj:t=>"[object Object]"===Object.prototype.toString.call(t),fun:t=>"function"==typeof t,str:t=>"string"==typeof t,num:t=>"number"==typeof t,und:t=>void 0===t,boo:t=>"boolean"==typeof t};function x(t,e){return null==t?e:t}function E(t){return V.und(t)?[]:Array.isArray(t)?t:[t]}function _(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return V.fun(t)?t(...n):t}class C extends w{constructor(t){super(),this.payload=t}getValue(){return this.payload.map((t=>t.getValue()))}setValue(t,e){void 0===e&&(e=!0),V.arr(t)?t.length===this.payload.length&&t.forEach(((t,n)=>this.payload[n].setValue(t,e))):this.payload.forEach((n=>n.setValue(t,e)))}interpolate(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return h(this,...e)}}const j=(t,e,n)=>{if(V.fun(t))return t;if(V.arr(t))return j({range:t,output:e,extrapolate:n});if(V.str(t.output[0]))return o(t);const i=t,a=i.output,r=i.range||[0,1],s=i.extrapolateLeft||i.extrapolate||"extend",l=i.extrapolateRight||i.extrapolate||"extend",c=i.easing||(t=>t);return t=>{const e=function(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}(t,r);return function(t,e,n,i,a,r,s,o,l){let c=l?l(t):t;if(c<e){if("identity"===s)return c;"clamp"===s&&(c=e)}if(c>n){if("identity"===o)return c;"clamp"===o&&(c=n)}return i===a?i:e===n?t<=e?i:a:(e===-1/0?c=-c:n===1/0?c-=e:c=(c-e)/(n-e),c=r(c),i===-1/0?c=-c:a===1/0?c+=i:c=c*(a-i)+i,c)}(t,r[e],r[e+1],a[e],a[e+1],c,s,l,i.map)}};class F extends w{constructor(t,e){super(),this.calc=void 0,this.calc=j(...e),this.payload=Array.isArray(t)?t:t instanceof C?t.getPayload():[t]}getValue(){const t=this.payload.map((t=>t.getValue()));return this.calc(...t)}interpolate(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return h(this,...e)}}let O=!1;const P=new Set,S=()=>{if(!O)return!1;let t=f();for(let e of P){let n=!1,i=0;for(let a=0;a<e.configs.length;a++){let r,s,o=e.configs[a];for(let e=0;e<o.animatedValues.length;e++){let a=o.animatedValues[e];if(a.done)continue;i++;let l=o.toValues[e],c=l instanceof v;if(c&&(l=l.getValue()),o.immediate){a.setValue(l),a.done=!0;continue}let u=o.fromValues[e];if("string"==typeof u||"string"==typeof l){a.setValue(l),a.done=!0;continue}let d=a.lastPosition,h=Array.isArray(o.initialVelocity)?o.initialVelocity[e]:o.initialVelocity;if(void 0!==o.duration)d=u+o.easing((t-a.startTime)/o.duration)*(l-u),r=t>=a.startTime+o.duration;else if(o.decay){const e=!0===o.decay?.998:o.decay;d=u+h/(1-e)*(1-Math.exp(-(1-e)*(t-a.startTime))),r=Math.abs(a.lastPosition-d)<.1,r&&(l=d)}else{s=void 0!==a.lastTime?a.lastTime:t,h=void 0!==a.lastVelocity?a.lastVelocity:o.initialVelocity,t>s+64&&(s=t);let e=Math.floor(t-s);for(let t=0;t<e;++t)h+=(-o.tension*(d-l)+-o.friction*h)/o.mass*1/1e3,d+=1*h/1e3;let n=!(!o.clamp||0===o.tension)&&(u<l?d>l:d<l),i=Math.abs(h)<=o.precision,c=0===o.tension||Math.abs(l-d)<=o.precision;r=n||i&&c,a.lastVelocity=h,a.lastTime=t}c&&!o.toValues[e].done&&(r=!1),r?(a.value!==l&&(d=l),a.done=!0):n=!0,a.setValue(d),a.lastPosition=d}e.props.onFrame&&(e.values[o.key]=o.animated.getValue())}e.onFrame(n,i)}return P.size?c?c():g(S):O=!1,O};function T(t,e){"update"in t?e.add(t):t.getChildren().forEach((t=>T(t,e)))}class q extends v{constructor(t){var e;super(),e=this,this.animatedStyles=new Set,this.value=void 0,this.startPosition=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.startTime=void 0,this.lastTime=void 0,this.done=!1,this.setValue=function(t,n){void 0===n&&(n=!0),e.value=t,n&&e.flush()},this.value=t,V.num(t)&&(this.startPosition=t,this.lastPosition=t)}getValue(){return this.value}interpolate(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return h(this,...e)}reset(t){V.num(this.value)&&(this.startPosition=this.value,this.lastPosition=this.value,this.lastVelocity=t?this.lastVelocity:void 0,this.lastTime=t?this.lastTime:void 0,this.startTime=f()),this.done=!1,this.animatedStyles.clear()}clearStyles(){this.animatedStyles.clear()}flush(){0===this.animatedStyles.size&&T(this,this.animatedStyles),this.animatedStyles.forEach((t=>t.update()))}}const M=t=>t,R=Object.freeze({});let I=1;class Z{constructor(t){this.id=I++,this.idle=!0,this.runCount=0,this.destroyed=!1,this.props={},this.queue=[],this.timestamps={},this.values={},this.merged={},this.animated={},this.animations={},this.configs=[],this.onEndQueue=[],this.cancelledAt=0,t&&this.update(t).start()}update(t){if(!t||this.destroyed)return this;const e=function(t){const e=function(t){return t.to,t.from,t.config,t.onStart,t.onRest,t.onFrame,t.children,t.cancel,t.reset,t.reverse,t.force,t.immediate,t.delay,t.attach,t.destroyed,t.interpolateTo,t.ref,t.lazy,(0,a.Z)(t,["to","from","config","onStart","onRest","onFrame","children","cancel","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}(t);return t=Object.entries(t).reduce(((t,n)=>{let i=n[0],a=n[1];return i in e||(t[i]=a),t}),{}),(0,i.Z)({to:e},t)}(t);if(this._ensureAnimated(e.from,!0),this._ensureAnimated(e.to),e.timestamp=f(),V.fun(e.delay)&&V.obj(e.to)){const t=e.from||R;for(const n in e.to)this.queue.push((0,i.Z)({},e,{to:{[n]:e.to[n]},from:n in t?{[n]:t[n]}:void 0,delay:Math.max(0,Math.round(e.delay(n)))}))}else e.delay=V.num(e.delay)?Math.max(0,Math.round(e.delay)):0,e.to||(e.to=void 0),e.from||(e.from=void 0),this.queue.push(e);return this}start(t){return this.queue.length?this._flush(t):this._start(t),this}stop(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];let i=!1;if(V.boo(e[0])){var a=e;i=a[0],e=a.slice(1)}if(e.length)for(const t of e){const e=this.configs.findIndex((e=>t===e.key));this._stopAnimation(t),this.configs[e]=this.animations[t]}else this.runCount&&(this.cancelledAt=f(),this.configs.forEach((t=>this._stopAnimation(t.key))),this.configs=Object.values(this.animations),this._stop(i));return this}reset(){return this.stop(),this.destroyed=!1,this.props={},this.queue=[],this.timestamps={},this.values={},this.merged={},this.animated={},this.animations={},this.configs=[],this}destroy(){this.destroyed||(this.stop(),this.destroyed=!0)}onFrame(t,e){if(e){const t=this.props.onFrame;t&&t((0,i.Z)({},this.values))}t||this._stop(!0)}setProp(t,e){return this.props[t]=e,this.timestamps[t]=f(),this}_ensureAnimated(t,e){if(void 0===e&&(e=!1),V.obj(t))for(const n in t){const i=t[n];let a=this.animated[n];a&&e&&this.animations[n].isNew&&(a.setValue?a.setValue(i):a=null),a||(a=$(i),a?(this.animated[n]&&N(this.animated[n],a),this.animated[n]=a,this._stopAnimation(n,!0)):console.warn("Given value not animatable:",i))}}_onEnd(t){this.runCount?this.onEndQueue.push(t):t(!0)}_start(t){t&&this._onEnd(t),this.idle&&this.runCount&&(this.idle=!1,this,P.add(this),O||(O=!0,c?c():g(S)))}_stop(t){this.idle=!0,P.delete(this);const e=this.onEndQueue;e.length&&(this.onEndQueue=[],e.forEach((e=>e(t))))}_flush(t){const e=this.queue.reduce(z,[]);this.queue.length=0;let n=Object.keys(e).length;this.runCount+=n;const i=e=>{if(this.runCount--,!--n&&(t&&t(e),!this.runCount&&e)){const t=this.props.onRest;t&&t(this.merged)}};e.forEach(((t,e)=>{e?setTimeout((()=>{t.timestamp<this.cancelledAt||this._run(t,i)}),e):this._run(t,i)}))}_run(t,e){V.arr(t.to)||V.fun(t.to)?this._runAsync(t,e):this._diff(t)?this._animate(t)._start(e):this._onEnd(e)}_runAsync(t,e){let n=t.to,i=(0,a.Z)(t,["to"]);if(this._diff(i)&&this._animate(i),!0===i.cancel)return this.props.asyncTo=void 0,e(!1);const r=i.timestamp;if(!this._diff({asyncTo:n,timestamp:r}))return e(!1);const s=()=>r<this.cancelledAt||V.fun(n)&&n!==this.props.asyncTo;let o;const l=t=>{if(s())throw this;return(o=new Promise((e=>{this.update(t).start(e)}))).then((()=>{if(s())throw this}))};let c=Promise.resolve();V.arr(n)?n.forEach((t=>c=c.then((()=>l(t))))):V.fun(n)&&(c=c.then((()=>n(l,this.stop.bind(this)).then((()=>o))))),c.catch((t=>t!==this&&console.error(t))).then((()=>e(!s())))}_diff(t){let e=t.timestamp,n=(t.delay,t.config,t.immediate,t.reverse),i=(0,a.Z)(t,["timestamp","delay","config","immediate","reverse"]),r=!1;const s=t=>{const n=this.timestamps[t];return!!(V.und(n)||e>=n)&&(this.timestamps[t]=e,!0)},o=(t,e,n)=>{if(V.und(e))return;const i=t[t.length-1];if(V.obj(e)){V.obj(n[i])||(n[i]={});for(const a in e)o(t.concat(a),e[a],n[i])}else s(t.join("."))&&(D(e,n[i])||(r=!0,n[i]=e))};if(n){const t=i.to;i.to=i.from,i.from=V.obj(t)?t:void 0}for(const t in i)o([t],i[t],this.props);return"reset"in i&&(this.props.reset=!1),"cancel"in i&&(this.props.cancel=void 0),r}_isModified(t,e){return this.timestamps[e]===t.timestamp}_animate(t){const e=this.props,n=e.from,a=void 0===n?R:n,r=e.to,s=void 0===r?R:r,o=e.attach,l=e.onStart;let c=t=>!1;if(t.cancel&&this._isModified(t,"cancel")){if(!0===t.cancel)return this.stop(),this.cancelledAt=t.timestamp,this;const e=E(t.cancel);V.arr(e)&&e.length&&(c=t=>e.indexOf(t)>=0,this.stop(...e))}this.merged=(0,i.Z)({},a,s);let u=!1;const d=[],h=o&&o(this);for(const e in this.merged){if(c(e))continue;const n=this.animations[e];if(!n){console.warn(`Failed to animate key: "${e}"\nDid you forget to define "from.${e}" for an async animation?`);continue}let i=n.animated,r=n.animatedValues;const s=this.merged[e],o=W(s),l=i.getValue();if(t.reset||!D(o,l)){if(t.reset||!D(o,n.isNew?l:n.goalValue)){let n=(V.und(t.immediate)?this.props:t).immediate;n=!!_(n,e);const l=r.some((t=>!t.done)),c=V.und(a[e])?o:W(a[e]),f=G(s);if(f){const e=[t.reset?c:i.getValue(),o];let a=r[0];a?(a.setValue(0,!1),a.reset(l)):a=new q(0);try{const t=i;i=a.interpolate({output:e}),N(t,i)}catch(t){console.warn('Failed to interpolate string from "%s" to "%s"',e[0],e[1]),console.error(t);continue}n&&a.setValue(1,!1)}else{if(V.arr(s))if(i instanceof C)t.reset&&i.setValue(c,!1),r.forEach((t=>t.reset(l)));else{const t=i;i=$(c),N(t,i)}else if(i instanceof q)t.reset&&i.setValue(c,!1),i.reset(l);else{const t=i;i=new q(c),N(t,i)}n&&i.setValue(o,!1)}const m=_(t.config,e)||_(this.props.config,e)||R;n||d.push(e),u=!0,r=E(i.getPayload()),this.animations[e]={key:e,idle:!1,goalValue:o,toValues:E(h instanceof Z?h.animations[e].animated.getPayload():f?1:o),fromValues:r.map((t=>t.getValue())),animated:i,animatedValues:r,immediate:n,duration:m.duration,easing:x(m.easing,M),decay:m.decay,mass:x(m.mass,1),tension:x(m.tension,170),friction:x(m.friction,26),initialVelocity:x(m.velocity,0),clamp:x(m.clamp,!1),precision:x(m.precision,.005),config:m}}}else n.idle||(u=!0,this._stopAnimation(e))}if(u){l&&d.length&&d.forEach((t=>l(this.animations[t])));const t=Object.keys(this.animations);this.configs.length=t.length,t.forEach(((t,e)=>{const n=this.animations[t];this.configs[e]=n,this.values[t]=n.animated.getValue(),this.animated[t]=n.animated}))}return this}_stopAnimation(t,e){const n=this.animated[t];if(!n)return console.warn(`Cannot stop an animation for a key that isn't animated: "${t}"`);this.timestamps["to."+t]=f();const i=this.animations[t]||R;if(i.idle&&n===i.animated)return;V.und(e)&&(e=!!i.isNew);const a=E(n.getPayload());a.forEach((t=>t.done=!0));const r=n.getValue();this.props.to&&(this.props.to[t]=r),this.animations[t]={key:t,idle:!0,isNew:e,goalValue:r,animated:n,animatedValues:a}}}function $(t){return V.arr(t)?new C(t.map((t=>{const e=$(t),n=e.getPayload();return e instanceof F?n[0]:n}))):G(t)?new q(0).interpolate({output:[t,t]}):new q(t)}function N(t,e){t.getChildren().slice().forEach((n=>{t.removeChild(n),e.addChild(n);const a=n.getPayload();if(V.arr(a)){const i=a.indexOf(t);if(i>=0){const t=[...a];t[i]=e,n.payload=t}}else if(V.obj(a)){const r=Object.entries(a).find((e=>e[1]===t));r&&(n.payload=(0,i.Z)({},a,{[r[0]]:e}))}}))}function z(t,e){const n=t[e.delay];return n?(e.to=L(n.to,e.to),e.from=L(n.from,e.from),Object.assign(n,e)):t[e.delay]=e,t}function L(t,e){return V.obj(t)&&V.obj(e)?(0,i.Z)({},t,e):e||t}function G(t){return!!V.str(t)&&(t.startsWith("#")||/\d/.test(t)||!!m[t])}function W(t){return V.arr(t)?t.map(W):G(t)?o({range:[0,1],output:[t,t]})(1):t}function D(t,e){if(V.arr(t)){if(!V.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}const Q=(t,e,n)=>{const a=t!==function(t){const e=(0,r.useRef)(void 0),n=e.current;return e.current=t,n}(t),s=V.fun(e),o=(0,r.useRef)({springs:[],ref:null}).current,l=s?[]:e,c=(0,r.useMemo)((()=>function(t,e){const n=[];for(let i=0;i<t;i++)n.push(e(i));return n}(t,(t=>{const n=new Z,i=l[t]||(l[t]=_(e,t,n));return n.update(i)}))),[t]),u=(0,r.useMemo)((()=>({start:()=>Promise.all(o.springs.map((t=>new Promise((e=>t.start(e)))))),update:t=>{const e=V.fun(t),n=V.arr(t);o.springs.forEach(((i,a)=>{i.update(e?_(t,a,i):n?t[a]:t),o.ref||i.start()}))},stop:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return o.springs.forEach((t=>t.stop(...e)))}})),[]),d=u.start,h=u.update,f=u.stop,m=l[0]?l[0].ref:s?o.ref:null;(0,r.useImperativeHandle)(m,(()=>({start:d,stop:f,get controllers(){return o.springs}}))),(0,r.useEffect)((()=>{s&&!a||l.forEach(((t,e)=>{c[e].setProp("config",t.config),c[e].setProp("immediate",t.immediate)})),a?(o.springs.forEach((t=>t.destroy())),o.springs=c,o.ref=m,m||c.forEach((t=>t.start()))):s||h(l)}),n),(0,r.useEffect)((()=>()=>o.springs.forEach((t=>t.destroy()))),[]);const p=c.map((t=>(0,i.Z)({},t.animated)));return s?[p,h,f]:p},H=(t,e)=>{const n=V.fun(t),i=Q(1,n?t:[t],e),a=i[0],r=i[1],s=i[2];return n?[a[0],r,s]:a};b({createAnimatedStyle:t=>new k(t),createAnimatedInterpolation:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return new F(t,n)}});class U extends A{constructor(t,e){super(t.style&&u?(0,i.Z)({},t,{style:u(t.style)}):t),this.update=void 0,this.update=e,this.attach()}}const X=function(t,e){void 0===e&&(e={});const n=t;return n.extend=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.forEach((t=>i(t))),n},n;function i(a,r){if(V.arr(a))return a.forEach((t=>i(t)));if(V.obj(a)){for(const t in a)i(a[t],t);return}let s=V.str(r)?r:V.str(a)?a:a&&V.str(a.displayName)?a.displayName:V.fun(a)?a.name:"";e.lowercase&&(s=s[0].toLowerCase()+s.slice(1)),n[s]=t(a)}}((t=>(0,r.forwardRef)(((e,n)=>{const o=function(){const t=(0,r.useState)(!1)[1];return(0,r.useCallback)((()=>t((t=>!t))),[])}(),l=(0,r.useRef)(!0),c=(0,r.useRef)(null),u=(0,r.useRef)(null),d=(0,r.useCallback)((t=>{const e=c.current;c.current=new U(t,(()=>{u.current&&!1===s(u.current,c.current.getAnimatedValue())&&o()})),e&&e.detach()}),[]);(0,r.useEffect)((()=>()=>{l.current=!1,c.current&&c.current.detach()}),[]),(0,r.useImperativeHandle)(n,(()=>p(u,l,o))),d(e);const h=c.current.getValue(),f=(h.scrollTop,h.scrollLeft,(0,a.Z)(h,["scrollTop","scrollLeft"]));return r.createElement(t,(0,i.Z)({},f,{ref:t=>{return u.current=(e=t,(i=n)&&(V.fun(i)?i(e):V.obj(i)&&(i.current=e)),e);var e,i}}))})))).extend(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]);X.extend;let B={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const J=["Webkit","Ms","Moz","O"];function K(t,e,n){return null==e||"boolean"==typeof e||""===e?"":n||"number"!=typeof e||0===e||B.hasOwnProperty(t)&&B[t]?(""+e).trim():e+"px"}B=Object.keys(B).reduce(((t,e)=>(J.forEach((n=>t[((t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1))(n,e)]=t[e])),t)),B);const Y={},tt="[-+]?\\d*\\.?\\d+",et=tt+"%";function nt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const it=new RegExp("rgb"+nt(tt,tt,tt)),at=new RegExp("rgba"+nt(tt,tt,tt,tt)),rt=new RegExp("hsl"+nt(tt,et,et)),st=new RegExp("hsla"+nt(tt,et,et,tt)),ot=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,lt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ct=/^#([0-9a-fA-F]{6})$/,ut=/^#([0-9a-fA-F]{8})$/,dt={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199};function ht(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function ft(t,e,n){const i=n<.5?n*(1+e):n+e-n*e,a=2*n-i,r=ht(a,i,t+1/3),s=ht(a,i,t),o=ht(a,i,t-1/3);return Math.round(255*r)<<24|Math.round(255*s)<<16|Math.round(255*o)<<8}function mt(t){const e=parseInt(t,10);return e<0?0:e>255?255:e}function pt(t){return(parseFloat(t)%360+360)%360/360}function gt(t){const e=parseFloat(t);return e<0?0:e>1?255:Math.round(255*e)}function yt(t){const e=parseFloat(t);return e<0?0:e>100?1:e/100}function bt(t){let e=function(t){let e;return"number"==typeof t?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=ct.exec(t))?parseInt(e[1]+"ff",16)>>>0:dt.hasOwnProperty(t)?dt[t]:(e=it.exec(t))?(mt(e[1])<<24|mt(e[2])<<16|mt(e[3])<<8|255)>>>0:(e=at.exec(t))?(mt(e[1])<<24|mt(e[2])<<16|mt(e[3])<<8|gt(e[4]))>>>0:(e=ot.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=ut.exec(t))?parseInt(e[1],16)>>>0:(e=lt.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=rt.exec(t))?(255|ft(pt(e[1]),yt(e[2]),yt(e[3])))>>>0:(e=st.exec(t))?(ft(pt(e[1]),yt(e[2]),yt(e[3]))|gt(e[4]))>>>0:null}(t);return null===e?t:(e=e||0,`rgba(${(4278190080&e)>>>24}, ${(16711680&e)>>>16}, ${(65280&e)>>>8}, ${(255&e)/255})`)}const vt=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,wt=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,At=new RegExp(`(${Object.keys(dt).join("|")})`,"g");b({defaultElement:"div",colorNames:dt,applyAnimatedValues:function(t,e){if(!t.nodeType||!t.setAttribute)return!1;const n=e,i=n.style,r=n.children,s=n.scrollTop,o=n.scrollLeft,l=(0,a.Z)(n,["style","children","scrollTop","scrollLeft"]);void 0!==s&&(t.scrollTop=s),void 0!==o&&(t.scrollLeft=o),void 0!==r&&(t.textContent=r);for(let e in i)if(i.hasOwnProperty(e)){var c=0===e.indexOf("--"),u=K(e,i[e],c);"float"===e&&(e="cssFloat"),c?t.style.setProperty(e,u):t.style[e]=u}const d="filter"===t.nodeName||t.parentNode&&"filter"===t.parentNode.nodeName;for(let e in l){const n=d||t.hasAttribute(e)?e:Y[e]||(Y[e]=e.replace(/([A-Z])/g,(t=>"-"+t.toLowerCase())));t.setAttribute(n,l[e])}},createStringInterpolator:t=>{const e=t.output.map((t=>t.replace(wt,bt))).map((t=>t.replace(At,bt))),n=e[0].match(vt).map((()=>[]));e.forEach((t=>{t.match(vt).forEach(((t,e)=>n[e].push(+t)))}));const a=e[0].match(vt).map(((e,a)=>j((0,i.Z)({},t,{output:n[a]}))));return t=>{let n=0;return e[0].replace(vt,(()=>a[n++](t))).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,((t,e,n,i,a)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(i)}, ${a})`))}}})}}]);
function $y(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function iu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Yy(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var Vg={exports:{}},ru={},Gg={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo=Symbol.for("react.element"),Ky=Symbol.for("react.portal"),Zy=Symbol.for("react.fragment"),Qy=Symbol.for("react.strict_mode"),Jy=Symbol.for("react.profiler"),ex=Symbol.for("react.provider"),tx=Symbol.for("react.context"),nx=Symbol.for("react.forward_ref"),ix=Symbol.for("react.suspense"),rx=Symbol.for("react.memo"),sx=Symbol.for("react.lazy"),up=Symbol.iterator;function ox(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var Wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jg=Object.assign,Xg={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=Xg,this.updater=n||Wg}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qg(){}qg.prototype=Gs.prototype;function Xd(t,e,n){this.props=t,this.context=e,this.refs=Xg,this.updater=n||Wg}var qd=Xd.prototype=new qg;qd.constructor=Xd;jg(qd,Gs.prototype);qd.isPureReactComponent=!0;var cp=Array.isArray,$g=Object.prototype.hasOwnProperty,$d={current:null},Yg={key:!0,ref:!0,__self:!0,__source:!0};function Kg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$g.call(e,i)&&!Yg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:qo,type:t,key:s,ref:o,props:r,_owner:$d.current}}function ax(t,e){return{$$typeof:qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===qo}function lx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fp=/\/+/g;function ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lx(""+t.key):e.toString(36)}function Ya(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qo:case Ky:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ku(o,0):i,cp(r)?(n="",t!=null&&(n=t.replace(fp,"$&/")+"/"),Ya(r,e,n,"",function(u){return u})):r!=null&&(Yd(r)&&(r=ax(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(fp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",cp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ku(s,a);o+=Ya(s,e,n,l,r)}else if(l=ox(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ku(s,a++),o+=Ya(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function aa(t,e,n){if(t==null)return t;var i=[],r=0;return Ya(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ux(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Ka={transition:null},cx={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:$d};function Zg(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:aa,forEach:function(t,e,n){aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return aa(t,function(){e++}),e},toArray:function(t){return aa(t,function(e){return e})||[]},only:function(t){if(!Yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Gs;Ke.Fragment=Zy;Ke.Profiler=Jy;Ke.PureComponent=Xd;Ke.StrictMode=Qy;Ke.Suspense=ix;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cx;Ke.act=Zg;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=jg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$d.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$g.call(e,l)&&!Yg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:qo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:tx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ex,_context:t},t.Consumer=t};Ke.createElement=Kg;Ke.createFactory=function(t){var e=Kg.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:nx,render:t}};Ke.isValidElement=Yd;Ke.lazy=function(t){return{$$typeof:sx,_payload:{_status:-1,_result:t},_init:ux}};Ke.memo=function(t,e){return{$$typeof:rx,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};Ke.unstable_act=Zg;Ke.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Ke.useContext=function(t){return Zt.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Ke.useId=function(){return Zt.current.useId()};Ke.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Ke.useRef=function(t){return Zt.current.useRef(t)};Ke.useState=function(t){return Zt.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return Zt.current.useTransition()};Ke.version="18.3.1";Gg.exports=Ke;var te=Gg.exports;const fx=iu(te),dx=$y({__proto__:null,default:fx},[te]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx=te,px=Symbol.for("react.element"),mx=Symbol.for("react.fragment"),gx=Object.prototype.hasOwnProperty,vx=hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_x={key:!0,ref:!0,__self:!0,__source:!0};function Qg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)gx.call(e,i)&&!_x.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:px,type:t,key:s,ref:o,props:r,_owner:vx.current}}ru.Fragment=mx;ru.jsx=Qg;ru.jsxs=Qg;Vg.exports=ru;var F=Vg.exports,Jg={exports:{}},En={},ev={exports:{}},tv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,G){var J=I.length;I.push(G);e:for(;0<J;){var ne=J-1>>>1,ee=I[ne];if(0<r(ee,G))I[ne]=G,I[J]=ee,J=ne;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var G=I[0],J=I.pop();if(J!==G){I[0]=J;e:for(var ne=0,ee=I.length,ye=ee>>>1;ne<ye;){var X=2*(ne+1)-1,Q=I[X],ue=X+1,le=I[ue];if(0>r(Q,J))ue<ee&&0>r(le,Q)?(I[ne]=le,I[ue]=J,ne=ue):(I[ne]=Q,I[X]=J,ne=X);else if(ue<ee&&0>r(le,J))I[ne]=le,I[ue]=J,ne=ue;else break e}}return G}function r(I,G){var J=I.sortIndex-G.sortIndex;return J!==0?J:I.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,g=!1,y=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var G=n(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=I)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function E(I){if(x=!1,_(I),!y)if(n(l)!==null)y=!0,V(P);else{var G=n(u);G!==null&&H(E,G.startTime-I)}}function P(I,G){y=!1,x&&(x=!1,c(M),M=-1),g=!0;var J=h;try{for(_(G),d=n(l);d!==null&&(!(d.expirationTime>G)||I&&!S());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,h=d.priorityLevel;var ee=ne(d.expirationTime<=G);G=t.unstable_now(),typeof ee=="function"?d.callback=ee:d===n(l)&&i(l),_(G)}else i(l);d=n(l)}if(d!==null)var ye=!0;else{var X=n(u);X!==null&&H(E,X.startTime-G),ye=!1}return ye}finally{d=null,h=J,g=!1}}var A=!1,b=null,M=-1,T=5,m=-1;function S(){return!(t.unstable_now()-m<T)}function L(){if(b!==null){var I=t.unstable_now();m=I;var G=!0;try{G=b(!0,I)}finally{G?N():(A=!1,b=null)}}else A=!1}var N;if(typeof v=="function")N=function(){v(L)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,Z=O.port2;O.port1.onmessage=L,N=function(){Z.postMessage(null)}}else N=function(){p(L,0)};function V(I){b=I,A||(A=!0,N())}function H(I,G){M=p(function(){I(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,V(P))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var J=h;h=G;try{return I()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=h;h=I;try{return G()}finally{h=J}},t.unstable_scheduleCallback=function(I,G,J){var ne=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ne+J:ne):J=ne,I){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=J+ee,I={id:f++,callback:G,priorityLevel:I,startTime:J,expirationTime:ee,sortIndex:-1},J>ne?(I.sortIndex=J,e(u,I),n(l)===null&&I===n(u)&&(x?(c(M),M=-1):x=!0,H(E,J-ne))):(I.sortIndex=ee,e(l,I),y||g||(y=!0,V(P))),I},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(I){var G=h;return function(){var J=h;h=G;try{return I.apply(this,arguments)}finally{h=J}}}})(tv);ev.exports=tv;var yx=ev.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx=te,Sn=yx;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nv=new Set,bo={};function Fr(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(bo[t]=e,t=0;t<e.length;t++)nv.add(e[t])}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=Object.prototype.hasOwnProperty,Sx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dp={},hp={};function Ex(t){return Qc.call(hp,t)?!0:Qc.call(dp,t)?!1:Sx.test(t)?hp[t]=!0:(dp[t]=!0,!1)}function Mx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wx(t,e,n,i){if(e===null||typeof e>"u"||Mx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kd=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);Bt[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);Bt[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kd,Zd);Bt[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wx(e,n,r,i)&&(n=null),i||r===null?Ex(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),Jc=Symbol.for("react.profiler"),iv=Symbol.for("react.provider"),rv=Symbol.for("react.context"),eh=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.suspense_list"),th=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),sv=Symbol.for("react.offscreen"),pp=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=pp&&t[pp]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,zu;function fo(t){if(zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zu=e&&e[1]||""}return`
`+zu+t}var Bu=!1;function Hu(t,e){if(!t||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fo(t):""}function Tx(t){switch(t.tag){case 5:return fo(t.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return t=Hu(t.type,!1),t;case 11:return t=Hu(t.type.render,!1),t;case 1:return t=Hu(t.type,!0),t;default:return""}}function nf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case Jc:return"Profiler";case Jd:return"StrictMode";case ef:return"Suspense";case tf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rv:return(t.displayName||"Context")+".Consumer";case iv:return(t._context.displayName||"Context")+".Provider";case eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case th:return e=t.displayName||null,e!==null?e:nf(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return nf(t(e))}catch{}}return null}function bx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nf(e);case 8:return e===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ov(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cx(t){var e=ov(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ua(t){t._valueTracker||(t._valueTracker=Cx(t))}function av(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ov(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rf(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lv(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function sf(t,e){lv(t,e);var n=Qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?of(t,e.type,n):e.hasOwnProperty("defaultValue")&&of(t,e.type,Qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function of(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(ho(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qi(n)}}function uv(t,e){var n=Qi(e.value),i=Qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _p(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ca,fv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ax=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(t){Ax.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vo[e]=vo[t]})});function dv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vo.hasOwnProperty(t)&&vo[t]?(""+e).trim():e+"px"}function hv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=dv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Rx=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uf(t,e){if(e){if(Rx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function cf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var df=null,ms=null,gs=null;function yp(t){if(t=Ko(t)){if(typeof df!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=uu(e),df(t.stateNode,t.type,e))}}function pv(t){ms?gs?gs.push(t):gs=[t]:ms=t}function mv(){if(ms){var t=ms,e=gs;if(gs=ms=null,yp(t),e)for(t=0;t<e.length;t++)yp(e[t])}}function gv(t,e){return t(e)}function vv(){}var Vu=!1;function _v(t,e,n){if(Vu)return t(e,n);Vu=!0;try{return gv(t,e,n)}finally{Vu=!1,(ms!==null||gs!==null)&&(vv(),mv())}}function Ao(t,e){var n=t.stateNode;if(n===null)return null;var i=uu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var hf=!1;if(_i)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){hf=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{hf=!1}function Px(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var _o=!1,vl=null,_l=!1,pf=null,Lx={onError:function(t){_o=!0,vl=t}};function Dx(t,e,n,i,r,s,o,a,l){_o=!1,vl=null,Px.apply(Lx,arguments)}function Nx(t,e,n,i,r,s,o,a,l){if(Dx.apply(this,arguments),_o){if(_o){var u=vl;_o=!1,vl=null}else throw Error(ae(198));_l||(_l=!0,pf=u)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xp(t){if(kr(t)!==t)throw Error(ae(188))}function Ix(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xp(r),t;if(s===i)return xp(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function xv(t){return t=Ix(t),t!==null?Sv(t):null}function Sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sv(t);if(e!==null)return e;t=t.sibling}return null}var Ev=Sn.unstable_scheduleCallback,Sp=Sn.unstable_cancelCallback,Ox=Sn.unstable_shouldYield,Ux=Sn.unstable_requestPaint,Mt=Sn.unstable_now,Fx=Sn.unstable_getCurrentPriorityLevel,ih=Sn.unstable_ImmediatePriority,Mv=Sn.unstable_UserBlockingPriority,yl=Sn.unstable_NormalPriority,kx=Sn.unstable_LowPriority,wv=Sn.unstable_IdlePriority,su=null,Jn=null;function zx(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:Vx,Bx=Math.log,Hx=Math.LN2;function Vx(t){return t>>>=0,t===0?32:31-(Bx(t)/Hx|0)|0}var fa=64,da=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=po(a):(s&=o,s!==0&&(i=po(s)))}else o=n&~r,o!==0?i=po(o):s!==0&&(i=po(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function Gx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Gx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function mf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tv(){var t=fa;return fa<<=1,!(fa&4194240)&&(fa=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function jx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function bv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cv,sh,Av,Rv,Pv,gf=!1,ha=[],Vi=null,Gi=null,Wi=null,Ro=new Map,Po=new Map,Ui=[],Xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function Qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ko(e),e!==null&&sh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function qx(t,e,n,i,r){switch(e){case"focusin":return Vi=Qs(Vi,t,e,n,i,r),!0;case"dragenter":return Gi=Qs(Gi,t,e,n,i,r),!0;case"mouseover":return Wi=Qs(Wi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ro.set(s,Qs(Ro.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Po.set(s,Qs(Po.get(s)||null,t,e,n,i,r)),!0}return!1}function Lv(t){var e=xr(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=yv(n),e!==null){t.blockedOn=e,Pv(t.priority,function(){Av(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ff=i,n.target.dispatchEvent(i),ff=null}else return e=Ko(n),e!==null&&sh(e),t.blockedOn=n,!1;e.shift()}return!0}function Mp(t,e,n){Za(t)&&n.delete(e)}function $x(){gf=!1,Vi!==null&&Za(Vi)&&(Vi=null),Gi!==null&&Za(Gi)&&(Gi=null),Wi!==null&&Za(Wi)&&(Wi=null),Ro.forEach(Mp),Po.forEach(Mp)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,gf||(gf=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,$x)))}function Lo(t){function e(r){return Js(r,t)}if(0<ha.length){Js(ha[0],t);for(var n=1;n<ha.length;n++){var i=ha[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vi!==null&&Js(Vi,t),Gi!==null&&Js(Gi,t),Wi!==null&&Js(Wi,t),Ro.forEach(e),Po.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)Lv(n),n.blockedOn===null&&Ui.shift()}var vs=wi.ReactCurrentBatchConfig,Sl=!0;function Yx(t,e,n,i){var r=ot,s=vs.transition;vs.transition=null;try{ot=1,oh(t,e,n,i)}finally{ot=r,vs.transition=s}}function Kx(t,e,n,i){var r=ot,s=vs.transition;vs.transition=null;try{ot=4,oh(t,e,n,i)}finally{ot=r,vs.transition=s}}function oh(t,e,n,i){if(Sl){var r=vf(t,e,n,i);if(r===null)Ju(t,e,i,El,n),Ep(t,i);else if(qx(r,t,e,n,i))i.stopPropagation();else if(Ep(t,i),e&4&&-1<Xx.indexOf(t)){for(;r!==null;){var s=Ko(r);if(s!==null&&Cv(s),s=vf(t,e,n,i),s===null&&Ju(t,e,i,El,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ju(t,e,i,null,n)}}var El=null;function vf(t,e,n,i){if(El=null,t=nh(i),t=xr(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function Dv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fx()){case ih:return 1;case Mv:return 4;case yl:case kx:return 16;case wv:return 536870912;default:return 16}default:return 16}}var zi=null,ah=null,Qa=null;function Nv(){if(Qa)return Qa;var t,e=ah,n=e.length,i,r="value"in zi?zi.value:zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Qa=r.slice(t,1<i?1-i:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pa(){return!0}function wp(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pa:wp,this.isPropagationStopped=wp,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lh=Mn(Ws),Yo=yt({},Ws,{view:0,detail:0}),Zx=Mn(Yo),Wu,ju,eo,ou=yt({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Wu=t.screenX-eo.screenX,ju=t.screenY-eo.screenY):ju=Wu=0,eo=t),Wu)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),Tp=Mn(ou),Qx=yt({},ou,{dataTransfer:0}),Jx=Mn(Qx),eS=yt({},Yo,{relatedTarget:0}),Xu=Mn(eS),tS=yt({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),nS=Mn(tS),iS=yt({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rS=Mn(iS),sS=yt({},Ws,{data:0}),bp=Mn(sS),oS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lS[t])?!!e[t]:!1}function uh(){return uS}var cS=yt({},Yo,{key:function(t){if(t.key){var e=oS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uh,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fS=Mn(cS),dS=yt({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Mn(dS),hS=yt({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uh}),pS=Mn(hS),mS=yt({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),gS=Mn(mS),vS=yt({},ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_S=Mn(vS),yS=[9,13,27,32],ch=_i&&"CompositionEvent"in window,yo=null;_i&&"documentMode"in document&&(yo=document.documentMode);var xS=_i&&"TextEvent"in window&&!yo,Iv=_i&&(!ch||yo&&8<yo&&11>=yo),Ap=" ",Rp=!1;function Ov(t,e){switch(t){case"keyup":return yS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function SS(t,e){switch(t){case"compositionend":return Uv(e);case"keypress":return e.which!==32?null:(Rp=!0,Ap);case"textInput":return t=e.data,t===Ap&&Rp?null:t;default:return null}}function ES(t,e){if(is)return t==="compositionend"||!ch&&Ov(t,e)?(t=Nv(),Qa=ah=zi=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iv&&e.locale!=="ko"?null:e.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!MS[t.type]:e==="textarea"}function Fv(t,e,n,i){pv(i),e=Ml(e,"onChange"),0<e.length&&(n=new lh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xo=null,Do=null;function wS(t){$v(t,0)}function au(t){var e=os(t);if(av(e))return t}function TS(t,e){if(t==="change")return e}var kv=!1;if(_i){var qu;if(_i){var $u="oninput"in document;if(!$u){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),$u=typeof Lp.oninput=="function"}qu=$u}else qu=!1;kv=qu&&(!document.documentMode||9<document.documentMode)}function Dp(){xo&&(xo.detachEvent("onpropertychange",zv),Do=xo=null)}function zv(t){if(t.propertyName==="value"&&au(Do)){var e=[];Fv(e,Do,t,nh(t)),_v(wS,e)}}function bS(t,e,n){t==="focusin"?(Dp(),xo=e,Do=n,xo.attachEvent("onpropertychange",zv)):t==="focusout"&&Dp()}function CS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(Do)}function AS(t,e){if(t==="click")return au(e)}function RS(t,e){if(t==="input"||t==="change")return au(e)}function PS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:PS;function No(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qc.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,e){var n=Np(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Np(n)}}function Bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hv(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LS(t){var e=Hv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bv(n.ownerDocument.documentElement,n)){if(i!==null&&fh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ip(n,s);var o=Ip(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DS=_i&&"documentMode"in document&&11>=document.documentMode,rs=null,_f=null,So=null,yf=!1;function Op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yf||rs==null||rs!==gl(i)||(i=rs,"selectionStart"in i&&fh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),So&&No(So,i)||(So=i,i=Ml(_f,"onSelect"),0<i.length&&(e=new lh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=rs)))}function ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},Yu={},Vv={};_i&&(Vv=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function lu(t){if(Yu[t])return Yu[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vv)return Yu[t]=e[n];return t}var Gv=lu("animationend"),Wv=lu("animationiteration"),jv=lu("animationstart"),Xv=lu("transitionend"),qv=new Map,Up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){qv.set(t,e),Fr(e,[t])}for(var Ku=0;Ku<Up.length;Ku++){var Zu=Up[Ku],NS=Zu.toLowerCase(),IS=Zu[0].toUpperCase()+Zu.slice(1);ir(NS,"on"+IS)}ir(Gv,"onAnimationEnd");ir(Wv,"onAnimationIteration");ir(jv,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(Xv,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OS=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function Fp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Nx(i,e,void 0,t),t.currentTarget=null}function $v(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Fp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Fp(r,a,u),s=l}}}if(_l)throw t=pf,_l=!1,pf=null,t}function ft(t,e){var n=e[wf];n===void 0&&(n=e[wf]=new Set);var i=t+"__bubble";n.has(i)||(Yv(e,t,2,!1),n.add(i))}function Qu(t,e,n){var i=0;e&&(i|=4),Yv(n,t,i,e)}var ga="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[ga]){t[ga]=!0,nv.forEach(function(n){n!=="selectionchange"&&(OS.has(n)||Qu(n,!1,t),Qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ga]||(e[ga]=!0,Qu("selectionchange",!1,e))}}function Yv(t,e,n,i){switch(Dv(e)){case 1:var r=Yx;break;case 4:r=Kx;break;default:r=oh}n=r.bind(null,e,n,t),r=void 0,!hf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ju(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=xr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}_v(function(){var u=s,f=nh(n),d=[];e:{var h=qv.get(t);if(h!==void 0){var g=lh,y=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":g=fS;break;case"focusin":y="focus",g=Xu;break;case"focusout":y="blur",g=Xu;break;case"beforeblur":case"afterblur":g=Xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=pS;break;case Gv:case Wv:case jv:g=nS;break;case Xv:g=gS;break;case"scroll":g=Zx;break;case"wheel":g=_S;break;case"copy":case"cut":case"paste":g=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Cp}var x=(e&4)!==0,p=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var v=u,_;v!==null;){_=v;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,c!==null&&(E=Ao(v,c),E!=null&&x.push(Oo(v,E,_)))),p)break;v=v.return}0<x.length&&(h=new g(h,y,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==ff&&(y=n.relatedTarget||n.fromElement)&&(xr(y)||y[yi]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?xr(y):null,y!==null&&(p=kr(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(x=Tp,E="onMouseLeave",c="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Cp,E="onPointerLeave",c="onPointerEnter",v="pointer"),p=g==null?h:os(g),_=y==null?h:os(y),h=new x(E,v+"leave",g,n,f),h.target=p,h.relatedTarget=_,E=null,xr(f)===u&&(x=new x(c,v+"enter",y,n,f),x.target=_,x.relatedTarget=p,E=x),p=E,g&&y)t:{for(x=g,c=y,v=0,_=x;_;_=Br(_))v++;for(_=0,E=c;E;E=Br(E))_++;for(;0<v-_;)x=Br(x),v--;for(;0<_-v;)c=Br(c),_--;for(;v--;){if(x===c||c!==null&&x===c.alternate)break t;x=Br(x),c=Br(c)}x=null}else x=null;g!==null&&kp(d,h,g,x,!1),y!==null&&p!==null&&kp(d,p,y,x,!0)}}e:{if(h=u?os(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var P=TS;else if(Pp(h))if(kv)P=RS;else{P=CS;var A=bS}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=AS);if(P&&(P=P(t,u))){Fv(d,P,n,f);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&of(h,"number",h.value)}switch(A=u?os(u):window,t){case"focusin":(Pp(A)||A.contentEditable==="true")&&(rs=A,_f=u,So=null);break;case"focusout":So=_f=rs=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,Op(d,n,f);break;case"selectionchange":if(DS)break;case"keydown":case"keyup":Op(d,n,f)}var b;if(ch)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else is?Ov(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Iv&&n.locale!=="ko"&&(is||M!=="onCompositionStart"?M==="onCompositionEnd"&&is&&(b=Nv()):(zi=f,ah="value"in zi?zi.value:zi.textContent,is=!0)),A=Ml(u,M),0<A.length&&(M=new bp(M,t,null,n,f),d.push({event:M,listeners:A}),b?M.data=b:(b=Uv(n),b!==null&&(M.data=b)))),(b=xS?SS(t,n):ES(t,n))&&(u=Ml(u,"onBeforeInput"),0<u.length&&(f=new bp("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=b))}$v(d,e)})}function Oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ao(t,n),s!=null&&i.unshift(Oo(t,s,r)),s=Ao(t,e),s!=null&&i.push(Oo(t,s,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ao(n,s),l!=null&&o.unshift(Oo(n,l,a))):r||(l=Ao(n,s),l!=null&&o.push(Oo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var US=/\r\n?/g,FS=/\u0000|\uFFFD/g;function zp(t){return(typeof t=="string"?t:""+t).replace(US,`
`).replace(FS,"")}function va(t,e,n){if(e=zp(e),zp(t)!==e&&n)throw Error(ae(425))}function wl(){}var xf=null,Sf=null;function Ef(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mf=typeof setTimeout=="function"?setTimeout:void 0,kS=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,zS=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(t){return Bp.resolve(null).then(t).catch(BS)}:Mf;function BS(t){setTimeout(function(){throw t})}function ec(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Lo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Lo(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),Qn="__reactFiber$"+js,Uo="__reactProps$"+js,yi="__reactContainer$"+js,wf="__reactEvents$"+js,HS="__reactListeners$"+js,VS="__reactHandles$"+js;function xr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hp(t);t!==null;){if(n=t[Qn])return n;t=Hp(t)}return e}t=n,n=t.parentNode}return null}function Ko(t){return t=t[Qn]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function uu(t){return t[Uo]||null}var Tf=[],as=-1;function rr(t){return{current:t}}function ht(t){0>as||(t.current=Tf[as],Tf[as]=null,as--)}function ut(t,e){as++,Tf[as]=t.current,t.current=e}var Ji={},Xt=rr(Ji),an=rr(!1),Rr=Ji;function bs(t,e){var n=t.type.contextTypes;if(!n)return Ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function Tl(){ht(an),ht(Xt)}function Vp(t,e,n){if(Xt.current!==Ji)throw Error(ae(168));ut(Xt,e),ut(an,n)}function Kv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,bx(t)||"Unknown",r));return yt({},n,i)}function bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Rr=Xt.current,ut(Xt,t),ut(an,an.current),!0}function Gp(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=Kv(t,e,Rr),i.__reactInternalMemoizedMergedChildContext=t,ht(an),ht(Xt),ut(Xt,t)):ht(an),ut(an,n)}var ci=null,cu=!1,tc=!1;function Zv(t){ci===null?ci=[t]:ci.push(t)}function GS(t){cu=!0,Zv(t)}function sr(){if(!tc&&ci!==null){tc=!0;var t=0,e=ot;try{var n=ci;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ci=null,cu=!1}catch(r){throw ci!==null&&(ci=ci.slice(t+1)),Ev(ih,sr),r}finally{ot=e,tc=!1}}return null}var ls=[],us=0,Cl=null,Al=0,bn=[],Cn=0,Pr=null,di=1,hi="";function pr(t,e){ls[us++]=Al,ls[us++]=Cl,Cl=t,Al=e}function Qv(t,e,n){bn[Cn++]=di,bn[Cn++]=hi,bn[Cn++]=Pr,Pr=t;var i=di;t=hi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,di=1<<32-jn(e)+r|n<<r|i,hi=s+t}else di=1<<s|n<<r|i,hi=t}function dh(t){t.return!==null&&(pr(t,1),Qv(t,1,0))}function hh(t){for(;t===Cl;)Cl=ls[--us],ls[us]=null,Al=ls[--us],ls[us]=null;for(;t===Pr;)Pr=bn[--Cn],bn[Cn]=null,hi=bn[--Cn],bn[Cn]=null,di=bn[--Cn],bn[Cn]=null}var xn=null,yn=null,mt=!1,Hn=null;function Jv(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,yn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:di,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,yn=null,!0):!1;default:return!1}}function bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cf(t){if(mt){var e=yn;if(e){var n=e;if(!Wp(t,e)){if(bf(t))throw Error(ae(418));e=ji(n.nextSibling);var i=xn;e&&Wp(t,e)?Jv(i,n):(t.flags=t.flags&-4097|2,mt=!1,xn=t)}}else{if(bf(t))throw Error(ae(418));t.flags=t.flags&-4097|2,mt=!1,xn=t}}}function jp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function _a(t){if(t!==xn)return!1;if(!mt)return jp(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ef(t.type,t.memoizedProps)),e&&(e=yn)){if(bf(t))throw e_(),Error(ae(418));for(;e;)Jv(t,e),e=ji(e.nextSibling)}if(jp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=xn?ji(t.stateNode.nextSibling):null;return!0}function e_(){for(var t=yn;t;)t=ji(t.nextSibling)}function Cs(){yn=xn=null,mt=!1}function ph(t){Hn===null?Hn=[t]:Hn.push(t)}var WS=wi.ReactCurrentBatchConfig;function to(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function ya(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xp(t){var e=t._init;return e(t._payload)}function t_(t){function e(c,v){if(t){var _=c.deletions;_===null?(c.deletions=[v],c.flags|=16):_.push(v)}}function n(c,v){if(!t)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=Yi(c,v),c.index=0,c.sibling=null,c}function s(c,v,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<v?(c.flags|=2,v):_):(c.flags|=2,v)):(c.flags|=1048576,v)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,v,_,E){return v===null||v.tag!==6?(v=lc(_,c.mode,E),v.return=c,v):(v=r(v,_),v.return=c,v)}function l(c,v,_,E){var P=_.type;return P===ns?f(c,v,_.props.children,E,_.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ni&&Xp(P)===v.type)?(E=r(v,_.props),E.ref=to(c,v,_),E.return=c,E):(E=ol(_.type,_.key,_.props,null,c.mode,E),E.ref=to(c,v,_),E.return=c,E)}function u(c,v,_,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=uc(_,c.mode,E),v.return=c,v):(v=r(v,_.children||[]),v.return=c,v)}function f(c,v,_,E,P){return v===null||v.tag!==7?(v=br(_,c.mode,E,P),v.return=c,v):(v=r(v,_),v.return=c,v)}function d(c,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=lc(""+v,c.mode,_),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case la:return _=ol(v.type,v.key,v.props,null,c.mode,_),_.ref=to(c,null,v),_.return=c,_;case ts:return v=uc(v,c.mode,_),v.return=c,v;case Ni:var E=v._init;return d(c,E(v._payload),_)}if(ho(v)||Ks(v))return v=br(v,c.mode,_,null),v.return=c,v;ya(c,v)}return null}function h(c,v,_,E){var P=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return P!==null?null:a(c,v,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case la:return _.key===P?l(c,v,_,E):null;case ts:return _.key===P?u(c,v,_,E):null;case Ni:return P=_._init,h(c,v,P(_._payload),E)}if(ho(_)||Ks(_))return P!==null?null:f(c,v,_,E,null);ya(c,_)}return null}function g(c,v,_,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return c=c.get(_)||null,a(v,c,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case la:return c=c.get(E.key===null?_:E.key)||null,l(v,c,E,P);case ts:return c=c.get(E.key===null?_:E.key)||null,u(v,c,E,P);case Ni:var A=E._init;return g(c,v,_,A(E._payload),P)}if(ho(E)||Ks(E))return c=c.get(_)||null,f(v,c,E,P,null);ya(v,E)}return null}function y(c,v,_,E){for(var P=null,A=null,b=v,M=v=0,T=null;b!==null&&M<_.length;M++){b.index>M?(T=b,b=null):T=b.sibling;var m=h(c,b,_[M],E);if(m===null){b===null&&(b=T);break}t&&b&&m.alternate===null&&e(c,b),v=s(m,v,M),A===null?P=m:A.sibling=m,A=m,b=T}if(M===_.length)return n(c,b),mt&&pr(c,M),P;if(b===null){for(;M<_.length;M++)b=d(c,_[M],E),b!==null&&(v=s(b,v,M),A===null?P=b:A.sibling=b,A=b);return mt&&pr(c,M),P}for(b=i(c,b);M<_.length;M++)T=g(b,c,M,_[M],E),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?M:T.key),v=s(T,v,M),A===null?P=T:A.sibling=T,A=T);return t&&b.forEach(function(S){return e(c,S)}),mt&&pr(c,M),P}function x(c,v,_,E){var P=Ks(_);if(typeof P!="function")throw Error(ae(150));if(_=P.call(_),_==null)throw Error(ae(151));for(var A=P=null,b=v,M=v=0,T=null,m=_.next();b!==null&&!m.done;M++,m=_.next()){b.index>M?(T=b,b=null):T=b.sibling;var S=h(c,b,m.value,E);if(S===null){b===null&&(b=T);break}t&&b&&S.alternate===null&&e(c,b),v=s(S,v,M),A===null?P=S:A.sibling=S,A=S,b=T}if(m.done)return n(c,b),mt&&pr(c,M),P;if(b===null){for(;!m.done;M++,m=_.next())m=d(c,m.value,E),m!==null&&(v=s(m,v,M),A===null?P=m:A.sibling=m,A=m);return mt&&pr(c,M),P}for(b=i(c,b);!m.done;M++,m=_.next())m=g(b,c,M,m.value,E),m!==null&&(t&&m.alternate!==null&&b.delete(m.key===null?M:m.key),v=s(m,v,M),A===null?P=m:A.sibling=m,A=m);return t&&b.forEach(function(L){return e(c,L)}),mt&&pr(c,M),P}function p(c,v,_,E){if(typeof _=="object"&&_!==null&&_.type===ns&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case la:e:{for(var P=_.key,A=v;A!==null;){if(A.key===P){if(P=_.type,P===ns){if(A.tag===7){n(c,A.sibling),v=r(A,_.props.children),v.return=c,c=v;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ni&&Xp(P)===A.type){n(c,A.sibling),v=r(A,_.props),v.ref=to(c,A,_),v.return=c,c=v;break e}n(c,A);break}else e(c,A);A=A.sibling}_.type===ns?(v=br(_.props.children,c.mode,E,_.key),v.return=c,c=v):(E=ol(_.type,_.key,_.props,null,c.mode,E),E.ref=to(c,v,_),E.return=c,c=E)}return o(c);case ts:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(c,v.sibling),v=r(v,_.children||[]),v.return=c,c=v;break e}else{n(c,v);break}else e(c,v);v=v.sibling}v=uc(_,c.mode,E),v.return=c,c=v}return o(c);case Ni:return A=_._init,p(c,v,A(_._payload),E)}if(ho(_))return y(c,v,_,E);if(Ks(_))return x(c,v,_,E);ya(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(c,v.sibling),v=r(v,_),v.return=c,c=v):(n(c,v),v=lc(_,c.mode,E),v.return=c,c=v),o(c)):n(c,v)}return p}var As=t_(!0),n_=t_(!1),Rl=rr(null),Pl=null,cs=null,mh=null;function gh(){mh=cs=Pl=null}function vh(t){var e=Rl.current;ht(Rl),t._currentValue=e}function Af(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){Pl=t,mh=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(mh!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(Pl===null)throw Error(ae(308));cs=t,Pl.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var Sr=null;function _h(t){Sr===null?Sr=[t]:Sr.push(t)}function i_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,_h(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function yh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,_h(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rh(t,n)}}function qp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ll(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,x=a;switch(h=e,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=yt({},d,h);break e;case 2:Ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=d):f=f.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=d}}function $p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Zo={},ei=rr(Zo),Fo=rr(Zo),ko=rr(Zo);function Er(t){if(t===Zo)throw Error(ae(174));return t}function xh(t,e){switch(ut(ko,e),ut(Fo,t),ut(ei,Zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lf(e,t)}ht(ei),ut(ei,e)}function Rs(){ht(ei),ht(Fo),ht(ko)}function s_(t){Er(ko.current);var e=Er(ei.current),n=lf(e,t.type);e!==n&&(ut(Fo,t),ut(ei,n))}function Sh(t){Fo.current===t&&(ht(ei),ht(Fo))}var vt=rr(0);function Dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nc=[];function Eh(){for(var t=0;t<nc.length;t++)nc[t]._workInProgressVersionPrimary=null;nc.length=0}var tl=wi.ReactCurrentDispatcher,ic=wi.ReactCurrentBatchConfig,Lr=0,_t=null,Rt=null,Ot=null,Nl=!1,Eo=!1,zo=0,jS=0;function Ht(){throw Error(ae(321))}function Mh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function wh(t,e,n,i,r,s){if(Lr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?YS:KS,t=n(i,r),Eo){s=0;do{if(Eo=!1,zo=0,25<=s)throw Error(ae(301));s+=1,Ot=Rt=null,e.updateQueue=null,tl.current=ZS,t=n(i,r)}while(Eo)}if(tl.current=Il,e=Rt!==null&&Rt.next!==null,Lr=0,Ot=Rt=_t=null,Nl=!1,e)throw Error(ae(300));return t}function Th(){var t=zo!==0;return zo=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?_t.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Nn(){if(Rt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ot===null?_t.memoizedState:Ot.next;if(e!==null)Ot=e,Rt=t;else{if(t===null)throw Error(ae(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ot===null?_t.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Bo(t,e){return typeof e=="function"?e(t):e}function rc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Lr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,_t.lanes|=f,Dr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,qn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);qn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function o_(){}function a_(t,e){var n=_t,i=Nn(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,bh(c_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,Ho(9,u_.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(ae(349));Lr&30||l_(n,e,r)}return r}function l_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u_(t,e,n,i){e.value=n,e.getSnapshot=i,f_(e)&&d_(t)}function c_(t,e,n){return n(function(){f_(e)&&d_(t)})}function f_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function d_(t){var e=xi(t,1);e!==null&&Xn(e,t,1,-1)}function Yp(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:t},e.queue=t,t=t.dispatch=$S.bind(null,_t,t),[e.memoizedState,t]}function Ho(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function h_(){return Nn().memoizedState}function nl(t,e,n,i){var r=Yn();_t.flags|=t,r.memoizedState=Ho(1|e,n,void 0,i===void 0?null:i)}function fu(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&Mh(i,o.deps)){r.memoizedState=Ho(e,n,s,i);return}}_t.flags|=t,r.memoizedState=Ho(1|e,n,s,i)}function Kp(t,e){return nl(8390656,8,t,e)}function bh(t,e){return fu(2048,8,t,e)}function p_(t,e){return fu(4,2,t,e)}function m_(t,e){return fu(4,4,t,e)}function g_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function v_(t,e,n){return n=n!=null?n.concat([t]):null,fu(4,4,g_.bind(null,e,t),n)}function Ch(){}function __(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function y_(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function x_(t,e,n){return Lr&21?(qn(n,e)||(n=Tv(),_t.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function XS(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=ic.transition;ic.transition={};try{t(!1),e()}finally{ot=n,ic.transition=i}}function S_(){return Nn().memoizedState}function qS(t,e,n){var i=$i(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},E_(t))M_(e,n);else if(n=i_(t,e,n,i),n!==null){var r=Kt();Xn(n,t,i,r),w_(n,e,i)}}function $S(t,e,n){var i=$i(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(E_(t))M_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,qn(a,o)){var l=e.interleaved;l===null?(r.next=r,_h(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=i_(t,e,r,i),n!==null&&(r=Kt(),Xn(n,t,i,r),w_(n,e,i))}}function E_(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function M_(t,e){Eo=Nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rh(t,n)}}var Il={readContext:Dn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},YS={readContext:Dn,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:Kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,g_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Yn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=qS.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:Yp,useDebugValue:Ch,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=Yp(!1),e=t[0];return t=XS.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=Yn();if(mt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Ut===null)throw Error(ae(349));Lr&30||l_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kp(c_.bind(null,i,s,t),[t]),i.flags|=2048,Ho(9,u_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=Ut.identifierPrefix;if(mt){var n=hi,i=di;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KS={readContext:Dn,useCallback:__,useContext:Dn,useEffect:bh,useImperativeHandle:v_,useInsertionEffect:p_,useLayoutEffect:m_,useMemo:y_,useReducer:rc,useRef:h_,useState:function(){return rc(Bo)},useDebugValue:Ch,useDeferredValue:function(t){var e=Nn();return x_(e,Rt.memoizedState,t)},useTransition:function(){var t=rc(Bo)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:o_,useSyncExternalStore:a_,useId:S_,unstable_isNewReconciler:!1},ZS={readContext:Dn,useCallback:__,useContext:Dn,useEffect:bh,useImperativeHandle:v_,useInsertionEffect:p_,useLayoutEffect:m_,useMemo:y_,useReducer:sc,useRef:h_,useState:function(){return sc(Bo)},useDebugValue:Ch,useDeferredValue:function(t){var e=Nn();return Rt===null?e.memoizedState=t:x_(e,Rt.memoizedState,t)},useTransition:function(){var t=sc(Bo)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:o_,useSyncExternalStore:a_,useId:S_,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=$i(t),s=vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Xn(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=$i(t),s=vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Xn(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=$i(t),r=vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(Xn(e,t,i,n),el(e,t,i))}};function Zp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!No(n,i)||!No(r,s):!0}function T_(t,e,n){var i=!1,r=Ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=ln(e)?Rr:Xt.current,i=e.contextTypes,s=(i=i!=null)?bs(t,r):Ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function Pf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=ln(e)?Rr:Xt.current,r.context=bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&du.enqueueReplaceState(r,r.state,null),Ll(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",i=e;do n+=Tx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function oc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QS=typeof WeakMap=="function"?WeakMap:Map;function b_(t,e,n){n=vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ul||(Ul=!0,Hf=i),Lf(t,e)},n}function C_(t,e,n){n=vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Lf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lf(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new QS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=dE.bind(null,t,e,n),e.then(t,t))}function em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vi(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var JS=wi.ReactCurrentOwner,on=!1;function Yt(t,e,n,i){e.child=t===null?n_(e,null,n,i):As(e,t.child,n,i)}function nm(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=wh(t,e,n,i,s,r),n=Th(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(mt&&n&&dh(e),e.flags|=1,Yt(t,e,i,r),e.child)}function im(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A_(t,e,s,i,r)):(t=ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(o,i)&&t.ref===e.ref)return Si(t,e,r)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function A_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(No(s,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Si(t,e,r)}return Df(t,e,n,i,r)}function R_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(ds,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(ds,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(ds,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(ds,vn),vn|=i;return Yt(t,e,r,n),e.child}function P_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Df(t,e,n,i,r){var s=ln(n)?Rr:Xt.current;return s=bs(e,s),_s(e,r),n=wh(t,e,n,i,s,r),i=Th(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(mt&&i&&dh(e),e.flags|=1,Yt(t,e,n,r),e.child)}function rm(t,e,n,i,r){if(ln(n)){var s=!0;bl(e)}else s=!1;if(_s(e,r),e.stateNode===null)il(t,e),T_(e,n,i),Pf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dn(u):(u=ln(n)?Rr:Xt.current,u=bs(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Qp(e,o,i,u),Ii=!1;var h=e.memoizedState;o.state=h,Ll(e,i,o,r),l=e.memoizedState,a!==i||h!==l||an.current||Ii?(typeof f=="function"&&(Rf(e,n,f,i),l=e.memoizedState),(a=Ii||Zp(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,r_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=ln(n)?Rr:Xt.current,l=bs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Qp(e,o,i,l),Ii=!1,h=e.memoizedState,o.state=h,Ll(e,i,o,r);var y=e.memoizedState;a!==d||h!==y||an.current||Ii?(typeof g=="function"&&(Rf(e,n,g,i),y=e.memoizedState),(u=Ii||Zp(e,n,u,i,h,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Nf(t,e,n,i,s,r)}function Nf(t,e,n,i,r,s){P_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Gp(e,n,!1),Si(t,e,s);i=e.stateNode,JS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=i.state,r&&Gp(e,n,!0),e.child}function L_(t){var e=t.stateNode;e.pendingContext?Vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vp(t,e.context,!1),xh(t,e.containerInfo)}function sm(t,e,n,i,r){return Cs(),ph(r),e.flags|=256,Yt(t,e,n,i),e.child}var If={dehydrated:null,treeContext:null,retryLane:0};function Of(t){return{baseLanes:t,cachePool:null,transitions:null}}function D_(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(vt,r&1),t===null)return Cf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mu(o,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Of(n),e.memoizedState=If,t):Ah(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return eE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Yi(a,s):(s=br(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=If,i}return s=t.child,t=s.sibling,i=Yi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ah(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xa(t,e,n,i){return i!==null&&ph(i),As(e,t.child,null,n),t=Ah(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=oc(Error(ae(422))),xa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=mu({mode:"visible",children:i.children},r,0,null),s=br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=Of(o),e.memoizedState=If,s);if(!(e.mode&1))return xa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=oc(s,i,void 0),xa(t,e,o,i)}if(a=(o&t.childLanes)!==0,on||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(t,r),Xn(i,t,r,-1))}return Ih(),i=oc(Error(ae(421))),xa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=hE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=ji(r.nextSibling),xn=e,mt=!0,Hn=null,t!==null&&(bn[Cn++]=di,bn[Cn++]=hi,bn[Cn++]=Pr,di=t.id,hi=t.overflow,Pr=e),e=Ah(e,i.children),e.flags|=4096,e)}function om(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Af(t.return,e,n)}function ac(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function N_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&om(t,n,e);else if(t.tag===19)om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Dl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ac(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Dl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ac(e,!0,n,null,s);break;case"together":ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tE(t,e,n){switch(e.tag){case 3:L_(e),Cs();break;case 5:s_(e);break;case 1:ln(e.type)&&bl(e);break;case 4:xh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Rl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?D_(t,e,n):(ut(vt,vt.current&1),t=Si(t,e,n),t!==null?t.sibling:null);ut(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return N_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,R_(t,e,n)}return Si(t,e,n)}var I_,Uf,O_,U_;I_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uf=function(){};O_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(ei.current);var s=null;switch(n){case"input":r=rf(t,r),i=rf(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=af(t,r),i=af(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wl)}uf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};U_=function(t,e,n,i){n!==i&&(e.flags|=4)};function no(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function nE(t,e,n){var i=e.pendingProps;switch(hh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return ln(e.type)&&Tl(),Vt(e),null;case 3:return i=e.stateNode,Rs(),ht(an),ht(Xt),Eh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(_a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Wf(Hn),Hn=null))),Uf(t,e),Vt(e),null;case 5:Sh(e);var r=Er(ko.current);if(n=e.type,t!==null&&e.stateNode!=null)O_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Vt(e),null}if(t=Er(ei.current),_a(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[Uo]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<mo.length;r++)ft(mo[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":mp(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":vp(i,s),ft("invalid",i)}uf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&va(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&va(i.textContent,a,t),r=["children",""+a]):bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":ua(i),gp(i,s,!0);break;case"textarea":ua(i),_p(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qn]=e,t[Uo]=i,I_(t,e,!1,!1),e.stateNode=t;e:{switch(o=cf(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<mo.length;r++)ft(mo[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":mp(t,i),r=rf(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":vp(t,i),r=af(t,i),ft("invalid",t);break;default:r=i}uf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Co(t,l):typeof l=="number"&&Co(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&Qd(t,s,l,o))}switch(n){case"input":ua(t),gp(t,i,!1);break;case"textarea":ua(t),_p(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)U_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Er(ko.current),Er(ei.current),_a(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:va(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&va(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Vt(e),null;case 13:if(ht(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&yn!==null&&e.mode&1&&!(e.flags&128))e_(),Cs(),e.flags|=98560,s=!1;else if(s=_a(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Qn]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Hn!==null&&(Wf(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Pt===0&&(Pt=3):Ih())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Rs(),Uf(t,e),t===null&&Io(e.stateNode.containerInfo),Vt(e),null;case 10:return vh(e.type._context),Vt(e),null;case 17:return ln(e.type)&&Tl(),Vt(e),null;case 19:if(ht(vt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)no(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Dl(t),o!==null){for(e.flags|=128,no(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Ls&&(e.flags|=128,i=!0,no(s,!1),e.lanes=4194304)}else{if(!i)if(t=Dl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),no(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return Vt(e),null}else 2*Mt()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,i=!0,no(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=vt.current,ut(vt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Nh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function iE(t,e){switch(hh(e),e.tag){case 1:return ln(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),ht(an),ht(Xt),Eh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sh(e),null;case 13:if(ht(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(vt),null;case 4:return Rs(),null;case 10:return vh(e.type._context),null;case 22:case 23:return Nh(),null;case 24:return null;default:return null}}var Sa=!1,jt=!1,rE=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Ff(t,e,n){try{n()}catch(i){St(t,e,i)}}var am=!1;function sE(t,e){if(xf=Sl,t=Hv(),fh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},Sl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,p=y.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:zn(e.type,x),p);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(E){St(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return y=am,am=!1,y}function Mo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ff(e,n,s)}r=r.next}while(r!==i)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function F_(t){var e=t.alternate;e!==null&&(t.alternate=null,F_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Uo],delete e[wf],delete e[HS],delete e[VS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k_(t){return t.tag===5||t.tag===3||t.tag===4}function lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(i!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}function Bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}var kt=null,Bn=!1;function bi(t,e,n){for(n=n.child;n!==null;)z_(t,e,n),n=n.sibling}function z_(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:jt||fs(n,e);case 6:var i=kt,r=Bn;kt=null,bi(t,e,n),kt=i,Bn=r,kt!==null&&(Bn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Bn?(t=kt,n=n.stateNode,t.nodeType===8?ec(t.parentNode,n):t.nodeType===1&&ec(t,n),Lo(t)):ec(kt,n.stateNode));break;case 4:i=kt,r=Bn,kt=n.stateNode.containerInfo,Bn=!0,bi(t,e,n),kt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ff(n,e,o),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!jt&&(fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,bi(t,e,n),jt=i):bi(t,e,n);break;default:bi(t,e,n)}}function um(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rE),e.forEach(function(i){var r=pE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Bn=!1;break e;case 3:kt=a.stateNode.containerInfo,Bn=!0;break e;case 4:kt=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(kt===null)throw Error(ae(160));z_(s,o,r),kt=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)B_(e,t),e=e.sibling}function B_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),$n(t),i&4){try{Mo(3,t,t.return),hu(3,t)}catch(x){St(t,t.return,x)}try{Mo(5,t,t.return)}catch(x){St(t,t.return,x)}}break;case 1:On(e,t),$n(t),i&512&&n!==null&&fs(n,n.return);break;case 5:if(On(e,t),$n(t),i&512&&n!==null&&fs(n,n.return),t.flags&32){var r=t.stateNode;try{Co(r,"")}catch(x){St(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lv(r,s),cf(a,o);var u=cf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?hv(r,d):f==="dangerouslySetInnerHTML"?fv(r,d):f==="children"?Co(r,d):Qd(r,f,d,u)}switch(a){case"input":sf(r,s);break;case"textarea":uv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ps(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?ps(r,!!s.multiple,s.defaultValue,!0):ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Uo]=s}catch(x){St(t,t.return,x)}}break;case 6:if(On(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){St(t,t.return,x)}}break;case 3:if(On(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(x){St(t,t.return,x)}break;case 4:On(e,t),$n(t);break;case 13:On(e,t),$n(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Lh=Mt())),i&4&&um(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||f,On(e,t),jt=u):On(e,t),$n(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Ee=t,f=t.child;f!==null;){for(d=Ee=f;Ee!==null;){switch(h=Ee,g=h.child,h.tag){case 0:case 11:case 14:case 15:Mo(4,h,h.return);break;case 1:fs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){St(i,n,x)}}break;case 5:fs(h,h.return);break;case 22:if(h.memoizedState!==null){fm(d);continue}}g!==null?(g.return=h,Ee=g):fm(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dv("display",o))}catch(x){St(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){St(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:On(e,t),$n(t),i&4&&um(t);break;case 21:break;default:On(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k_(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Co(r,""),i.flags&=-33);var s=lm(t);Bf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=lm(t);zf(t,a,o);break;default:throw Error(ae(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oE(t,e,n){Ee=t,H_(t)}function H_(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Sa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=Sa;var u=jt;if(Sa=o,(jt=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?dm(r):l!==null?(l.return=o,Ee=l):dm(r);for(;s!==null;)Ee=s,H_(s),s=s.sibling;Ee=r,Sa=a,jt=u}cm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):cm(t)}}function cm(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$p(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$p(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Lo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}jt||e.flags&512&&kf(e)}catch(h){St(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function fm(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function dm(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{kf(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{kf(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var aE=Math.ceil,Ol=wi.ReactCurrentDispatcher,Rh=wi.ReactCurrentOwner,Pn=wi.ReactCurrentBatchConfig,Qe=0,Ut=null,At=null,zt=0,vn=0,ds=rr(0),Pt=0,Vo=null,Dr=0,pu=0,Ph=0,wo=null,rn=null,Lh=0,Ls=1/0,ui=null,Ul=!1,Hf=null,qi=null,Ea=!1,Bi=null,Fl=0,To=0,Vf=null,rl=-1,sl=0;function Kt(){return Qe&6?Mt():rl!==-1?rl:rl=Mt()}function $i(t){return t.mode&1?Qe&2&&zt!==0?zt&-zt:WS.transition!==null?(sl===0&&(sl=Tv()),sl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Dv(t.type)),t):1}function Xn(t,e,n,i){if(50<To)throw To=0,Vf=null,Error(ae(185));$o(t,n,i),(!(Qe&2)||t!==Ut)&&(t===Ut&&(!(Qe&2)&&(pu|=n),Pt===4&&Fi(t,zt)),un(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Ls=Mt()+500,cu&&sr()))}function un(t,e){var n=t.callbackNode;Wx(t,e);var i=xl(t,t===Ut?zt:0);if(i===0)n!==null&&Sp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sp(n),e===1)t.tag===0?GS(hm.bind(null,t)):Zv(hm.bind(null,t)),zS(function(){!(Qe&6)&&sr()}),n=null;else{switch(bv(i)){case 1:n=ih;break;case 4:n=Mv;break;case 16:n=yl;break;case 536870912:n=wv;break;default:n=yl}n=Y_(n,V_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V_(t,e){if(rl=-1,sl=0,Qe&6)throw Error(ae(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var i=xl(t,t===Ut?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=kl(t,i);else{e=i;var r=Qe;Qe|=2;var s=W_();(Ut!==t||zt!==e)&&(ui=null,Ls=Mt()+500,Tr(t,e));do try{cE();break}catch(a){G_(t,a)}while(!0);gh(),Ol.current=s,Qe=r,At!==null?e=0:(Ut=null,zt=0,e=Pt)}if(e!==0){if(e===2&&(r=mf(t),r!==0&&(i=r,e=Gf(t,r))),e===1)throw n=Vo,Tr(t,0),Fi(t,i),un(t,Mt()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!lE(r)&&(e=kl(t,i),e===2&&(s=mf(t),s!==0&&(i=s,e=Gf(t,s))),e===1))throw n=Vo,Tr(t,0),Fi(t,i),un(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:mr(t,rn,ui);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=Lh+500-Mt(),10<e)){if(xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Mf(mr.bind(null,t,rn,ui),e);break}mr(t,rn,ui);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aE(i/1960))-i,10<i){t.timeoutHandle=Mf(mr.bind(null,t,rn,ui),i);break}mr(t,rn,ui);break;case 5:mr(t,rn,ui);break;default:throw Error(ae(329))}}}return un(t,Mt()),t.callbackNode===n?V_.bind(null,t):null}function Gf(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=kl(t,e),t!==2&&(e=rn,rn=n,e!==null&&Wf(e)),t}function Wf(t){rn===null?rn=t:rn.push.apply(rn,t)}function lE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~Ph,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function hm(t){if(Qe&6)throw Error(ae(327));ys();var e=xl(t,0);if(!(e&1))return un(t,Mt()),null;var n=kl(t,e);if(t.tag!==0&&n===2){var i=mf(t);i!==0&&(e=i,n=Gf(t,i))}if(n===1)throw n=Vo,Tr(t,0),Fi(t,e),un(t,Mt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mr(t,rn,ui),un(t,Mt()),null}function Dh(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Ls=Mt()+500,cu&&sr())}}function Nr(t){Bi!==null&&Bi.tag===0&&!(Qe&6)&&ys();var e=Qe;Qe|=1;var n=Pn.transition,i=ot;try{if(Pn.transition=null,ot=1,t)return t()}finally{ot=i,Pn.transition=n,Qe=e,!(Qe&6)&&sr()}}function Nh(){vn=ds.current,ht(ds)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kS(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(hh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tl();break;case 3:Rs(),ht(an),ht(Xt),Eh();break;case 5:Sh(i);break;case 4:Rs();break;case 13:ht(vt);break;case 19:ht(vt);break;case 10:vh(i.type._context);break;case 22:case 23:Nh()}n=n.return}if(Ut=t,At=t=Yi(t.current,null),zt=vn=e,Pt=0,Vo=null,Ph=pu=Dr=0,rn=wo=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Sr=null}return t}function G_(t,e){do{var n=At;try{if(gh(),tl.current=Il,Nl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nl=!1}if(Lr=0,Ot=Rt=_t=null,Eo=!1,zo=0,Rh.current=null,n===null||n.return===null){Pt=1,Vo=e,At=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=em(o);if(g!==null){g.flags&=-257,tm(g,o,a,s,e),g.mode&1&&Jp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if(!(e&1)){Jp(s,u,e),Ih();break e}l=Error(ae(426))}}else if(mt&&a.mode&1){var p=em(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),tm(p,o,a,s,e),ph(Ps(l,a));break e}}s=l=Ps(l,a),Pt!==4&&(Pt=2),wo===null?wo=[s]:wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=b_(s,l,e);qp(s,c);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(qi===null||!qi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=C_(s,a,e);qp(s,E);break e}}s=s.return}while(s!==null)}X_(n)}catch(P){e=P,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function W_(){var t=Ol.current;return Ol.current=Il,t===null?Il:t}function Ih(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ut===null||!(Dr&268435455)&&!(pu&268435455)||Fi(Ut,zt)}function kl(t,e){var n=Qe;Qe|=2;var i=W_();(Ut!==t||zt!==e)&&(ui=null,Tr(t,e));do try{uE();break}catch(r){G_(t,r)}while(!0);if(gh(),Qe=n,Ol.current=i,At!==null)throw Error(ae(261));return Ut=null,zt=0,Pt}function uE(){for(;At!==null;)j_(At)}function cE(){for(;At!==null&&!Ox();)j_(At)}function j_(t){var e=$_(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?X_(t):At=e,Rh.current=null}function X_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iE(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,At=null;return}}else if(n=nE(n,e,vn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Pt===0&&(Pt=5)}function mr(t,e,n){var i=ot,r=Pn.transition;try{Pn.transition=null,ot=1,fE(t,e,n,i)}finally{Pn.transition=r,ot=i}return null}function fE(t,e,n,i){do ys();while(Bi!==null);if(Qe&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jx(t,s),t===Ut&&(At=Ut=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,Y_(yl,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=ot;ot=1;var a=Qe;Qe|=4,Rh.current=null,sE(t,n),B_(n,t),LS(Sf),Sl=!!xf,Sf=xf=null,t.current=n,oE(n),Ux(),Qe=a,ot=o,Pn.transition=s}else t.current=n;if(Ea&&(Ea=!1,Bi=t,Fl=r),s=t.pendingLanes,s===0&&(qi=null),zx(n.stateNode),un(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ul)throw Ul=!1,t=Hf,Hf=null,t;return Fl&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===Vf?To++:(To=0,Vf=t):To=0,sr(),null}function ys(){if(Bi!==null){var t=bv(Fl),e=Pn.transition,n=ot;try{if(Pn.transition=null,ot=16>t?16:t,Bi===null)var i=!1;else{if(t=Bi,Bi=null,Fl=0,Qe&6)throw Error(ae(331));var r=Qe;for(Qe|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var f=Ee;switch(f.tag){case 0:case 11:case 15:Mo(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ee=d;else for(;Ee!==null;){f=Ee;var h=f.sibling,g=f.return;if(F_(f),f===u){Ee=null;break}if(h!==null){h.return=g,Ee=h;break}Ee=g}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Mo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,Ee=c;break e}Ee=s.return}}var v=t.current;for(Ee=v;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hu(9,a)}}catch(P){St(a,a.return,P)}if(a===o){Ee=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Ee=E;break e}Ee=a.return}}if(Qe=r,sr(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(su,t)}catch{}i=!0}return i}finally{ot=n,Pn.transition=e}}return!1}function pm(t,e,n){e=Ps(n,e),e=b_(t,e,1),t=Xi(t,e,1),e=Kt(),t!==null&&($o(t,1,e),un(t,e))}function St(t,e,n){if(t.tag===3)pm(t,t,n);else for(;e!==null;){if(e.tag===3){pm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Ps(n,t),t=C_(e,t,1),e=Xi(e,t,1),t=Kt(),e!==null&&($o(e,1,t),un(e,t));break}}e=e.return}}function dE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(zt&n)===n&&(Pt===4||Pt===3&&(zt&130023424)===zt&&500>Mt()-Lh?Tr(t,0):Ph|=n),un(t,e)}function q_(t,e){e===0&&(t.mode&1?(e=da,da<<=1,!(da&130023424)&&(da=4194304)):e=1);var n=Kt();t=xi(t,e),t!==null&&($o(t,e,n),un(t,n))}function hE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),q_(t,n)}function pE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),q_(t,n)}var $_;$_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,tE(t,e,n);on=!!(t.flags&131072)}else on=!1,mt&&e.flags&1048576&&Qv(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=bs(e,Xt.current);_s(e,n),r=wh(null,e,i,t,r,n);var s=Th();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yh(e),r.updater=du,e.stateNode=r,r._reactInternals=e,Pf(e,i,t,n),e=Nf(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&dh(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=gE(i),t=zn(i,t),r){case 0:e=Df(null,e,i,t,n);break e;case 1:e=rm(null,e,i,t,n);break e;case 11:e=nm(null,e,i,t,n);break e;case 14:e=im(null,e,i,zn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Df(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),rm(t,e,i,r,n);case 3:e:{if(L_(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,r_(t,e),Ll(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(ae(423)),e),e=sm(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(ae(424)),e),e=sm(t,e,i,n,r);break e}else for(yn=ji(e.stateNode.containerInfo.firstChild),xn=e,mt=!0,Hn=null,n=n_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=Si(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return s_(e),t===null&&Cf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ef(i,r)?o=null:s!==null&&Ef(i,s)&&(e.flags|=32),P_(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&Cf(e),null;case 13:return D_(t,e,n);case 4:return xh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),nm(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Rl,i._currentValue),i._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===r.children&&!an.current){e=Si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Af(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Af(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=Dn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),im(t,e,i,r,n);case 15:return A_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),il(t,e),e.tag=1,ln(i)?(t=!0,bl(e)):t=!1,_s(e,n),T_(e,i,r),Pf(e,i,r,n),Nf(null,e,i,!0,t,n);case 19:return N_(t,e,n);case 22:return R_(t,e,n)}throw Error(ae(156,e.tag))};function Y_(t,e){return Ev(t,e)}function mE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new mE(t,e,n,i)}function Oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gE(t){if(typeof t=="function")return Oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===eh)return 11;if(t===th)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Oh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ns:return br(n.children,r,s,e);case Jd:o=8,r|=8;break;case Jc:return t=An(12,n,e,r|2),t.elementType=Jc,t.lanes=s,t;case ef:return t=An(13,n,e,r),t.elementType=ef,t.lanes=s,t;case tf:return t=An(19,n,e,r),t.elementType=tf,t.lanes=s,t;case sv:return mu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iv:o=10;break e;case rv:o=9;break e;case eh:o=11;break e;case th:o=14;break e;case Ni:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function mu(t,e,n,i){return t=An(22,t,i,e),t.elementType=sv,t.lanes=n,t.stateNode={isHidden:!1},t}function lc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function uc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Uh(t,e,n,i,r,s,o,a,l){return t=new vE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yh(s),t}function _E(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function K_(t){if(!t)return Ji;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(ln(n))return Kv(t,n,e)}return e}function Z_(t,e,n,i,r,s,o,a,l){return t=Uh(n,i,!0,t,r,s,o,a,l),t.context=K_(null),n=t.current,i=Kt(),r=$i(n),s=vi(i,r),s.callback=e??null,Xi(n,s,r),t.current.lanes=r,$o(t,r,i),un(t,i),t}function gu(t,e,n,i){var r=e.current,s=Kt(),o=$i(r);return n=K_(n),e.context===null?e.context=n:e.pendingContext=n,e=vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,o),t!==null&&(Xn(t,r,o,s),el(t,r,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fh(t,e){mm(t,e),(t=t.alternate)&&mm(t,e)}function yE(){return null}var Q_=typeof reportError=="function"?reportError:function(t){console.error(t)};function kh(t){this._internalRoot=t}vu.prototype.render=kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));gu(t,e,null,null)};vu.prototype.unmount=kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){gu(null,t,null,null)}),e[yi]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&Lv(t)}};function zh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gm(){}function xE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=zl(o);s.call(u)}}var o=Z_(e,i,t,0,null,!1,!1,"",gm);return t._reactRootContainer=o,t[yi]=o.current,Io(t.nodeType===8?t.parentNode:t),Nr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=zl(l);a.call(u)}}var l=Uh(t,0,!1,null,null,!1,!1,"",gm);return t._reactRootContainer=l,t[yi]=l.current,Io(t.nodeType===8?t.parentNode:t),Nr(function(){gu(e,l,n,i)}),l}function yu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=zl(o);a.call(l)}}gu(e,o,t,r)}else o=xE(n,e,t,r,i);return zl(o)}Cv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(rh(e,n|1),un(e,Mt()),!(Qe&6)&&(Ls=Mt()+500,sr()))}break;case 13:Nr(function(){var i=xi(t,1);if(i!==null){var r=Kt();Xn(i,t,1,r)}}),Fh(t,1)}};sh=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=Kt();Xn(e,t,134217728,n)}Fh(t,134217728)}};Av=function(t){if(t.tag===13){var e=$i(t),n=xi(t,e);if(n!==null){var i=Kt();Xn(n,t,e,i)}Fh(t,e)}};Rv=function(){return ot};Pv=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};df=function(t,e,n){switch(e){case"input":if(sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=uu(i);if(!r)throw Error(ae(90));av(i),sf(i,r)}}}break;case"textarea":uv(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};gv=Dh;vv=Nr;var SE={usingClientEntryPoint:!1,Events:[Ko,os,uu,pv,mv,Dh]},io={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EE={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xv(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||yE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{su=Ma.inject(EE),Jn=Ma}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SE;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zh(e))throw Error(ae(200));return _E(t,e,null,n)};En.createRoot=function(t,e){if(!zh(t))throw Error(ae(299));var n=!1,i="",r=Q_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Uh(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,Io(t.nodeType===8?t.parentNode:t),new kh(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=xv(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Nr(t)};En.hydrate=function(t,e,n){if(!_u(e))throw Error(ae(200));return yu(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!zh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Q_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Z_(e,null,t,1,n??null,r,!1,s,o),t[yi]=e.current,Io(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vu(e)};En.render=function(t,e,n){if(!_u(e))throw Error(ae(200));return yu(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!_u(t))throw Error(ae(40));return t._reactRootContainer?(Nr(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};En.unstable_batchedUpdates=Dh;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_u(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return yu(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function J_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J_)}catch(t){console.error(t)}}J_(),Jg.exports=En;var ME=Jg.exports,e0,vm=ME;e0=vm.createRoot,vm.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Go.apply(this,arguments)}var Hi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Hi||(Hi={}));const _m="popstate";function wE(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return jf("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:n0(r)}return bE(e,n,null,t)}function Lt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function t0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function TE(){return Math.random().toString(36).substr(2,8)}function ym(t,e){return{usr:t.state,key:t.key,idx:e}}function jf(t,e,n,i){return n===void 0&&(n=null),Go({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xs(e):e,{state:n,key:e&&e.key||i||TE()})}function n0(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Xs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function bE(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Hi.Pop,l=null,u=f();u==null&&(u=0,o.replaceState(Go({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=Hi.Pop;let p=f(),c=p==null?null:p-u;u=p,l&&l({action:a,location:x.location,delta:c})}function h(p,c){a=Hi.Push;let v=jf(x.location,p,c);u=f()+1;let _=ym(v,u),E=x.createHref(v);try{o.pushState(_,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(E)}s&&l&&l({action:a,location:x.location,delta:1})}function g(p,c){a=Hi.Replace;let v=jf(x.location,p,c);u=f();let _=ym(v,u),E=x.createHref(v);o.replaceState(_,"",E),s&&l&&l({action:a,location:x.location,delta:0})}function y(p){let c=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:n0(p);return v=v.replace(/ $/,"%20"),Lt(c,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,c)}let x={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(_m,d),l=p,()=>{r.removeEventListener(_m,d),l=null}},createHref(p){return e(r,p)},createURL:y,encodeLocation(p){let c=y(p);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:g,go(p){return o.go(p)}};return x}var xm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(xm||(xm={}));function CE(t,e,n){return n===void 0&&(n="/"),AE(t,e,n,!1)}function AE(t,e,n,i){let r=typeof e=="string"?Xs(e):e,s=s0(r.pathname||"/",n);if(s==null)return null;let o=i0(t);RE(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=BE(s);a=kE(o[l],u,i)}return a}function i0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Lt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Cr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Lt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),i0(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:UE(u,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of r0(s.path))r(s,o,l)}),e}function r0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=r0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function RE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const PE=/^:[\w-]+$/,LE=3,DE=2,NE=1,IE=10,OE=-2,Sm=t=>t==="*";function UE(t,e){let n=t.split("/"),i=n.length;return n.some(Sm)&&(i+=OE),e&&(i+=DE),n.filter(r=>!Sm(r)).reduce((r,s)=>r+(PE.test(s)?LE:s===""?NE:IE),i)}function FE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function kE(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",d=Em({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),h=l.route;if(!d&&u&&n&&!i[i.length-1].route.index&&(d=Em({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:Cr([s,d.pathname]),pathnameBase:XE(Cr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=Cr([s,d.pathnameBase]))}return o}function Em(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=zE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,f,d)=>{let{paramName:h,isOptional:g}=f;if(h==="*"){let x=a[d]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[d];return g&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function zE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),t0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function BE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return t0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function s0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function HE(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Xs(t):t;return{pathname:n?n.startsWith("/")?n:VE(n,e):e,search:qE(i),hash:$E(r)}}function VE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function cc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function WE(t,e){let n=GE(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function jE(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Xs(t):(r=Go({},t),Lt(!r.pathname||!r.pathname.includes("?"),cc("?","pathname","search",r)),Lt(!r.pathname||!r.pathname.includes("#"),cc("#","pathname","hash",r)),Lt(!r.search||!r.search.includes("#"),cc("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=HE(r,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Cr=t=>t.join("/").replace(/\/\/+/g,"/"),XE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$E=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function YE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const o0=["post","put","patch","delete"];new Set(o0);const KE=["get",...o0];new Set(KE);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Wo.apply(this,arguments)}const Bh=te.createContext(null),ZE=te.createContext(null),xu=te.createContext(null),Su=te.createContext(null),qs=te.createContext({outlet:null,matches:[],isDataRoute:!1}),a0=te.createContext(null);function Eu(){return te.useContext(Su)!=null}function l0(){return Eu()||Lt(!1),te.useContext(Su).location}function u0(t){te.useContext(xu).static||te.useLayoutEffect(t)}function Hh(){let{isDataRoute:t}=te.useContext(qs);return t?cM():QE()}function QE(){Eu()||Lt(!1);let t=te.useContext(Bh),{basename:e,future:n,navigator:i}=te.useContext(xu),{matches:r}=te.useContext(qs),{pathname:s}=l0(),o=JSON.stringify(WE(r,n.v7_relativeSplatPath)),a=te.useRef(!1);return u0(()=>{a.current=!0}),te.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let d=jE(u,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Cr([e,d.pathname])),(f.replace?i.replace:i.push)(d,f.state,f)},[e,i,o,s,t])}function JE(t,e){return eM(t,e)}function eM(t,e,n,i){Eu()||Lt(!1);let{navigator:r}=te.useContext(xu),{matches:s}=te.useContext(qs),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=l0(),f;if(e){var d;let p=typeof e=="string"?Xs(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||Lt(!1),f=p}else f=u;let h=f.pathname||"/",g=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let y=CE(t,{pathname:g}),x=sM(y&&y.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Cr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Cr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&x?te.createElement(Su.Provider,{value:{location:Wo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Hi.Pop}},x):x}function tM(){let t=uM(),e=YE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return te.createElement(te.Fragment,null,te.createElement("h2",null,"Unexpected Application Error!"),te.createElement("h3",{style:{fontStyle:"italic"}},e),n?te.createElement("pre",{style:r},n):null,null)}const nM=te.createElement(tM,null);class iM extends te.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?te.createElement(qs.Provider,{value:this.props.routeContext},te.createElement(a0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rM(t){let{routeContext:e,match:n,children:i}=t,r=te.useContext(Bh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),te.createElement(qs.Provider,{value:e},i)}function sM(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||Lt(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:h,errors:g}=n,y=d.route.loader&&h[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,h)=>{let g,y=!1,x=null,p=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||nM,l&&(u<0&&h===0?(y=!0,p=null):u===h&&(y=!0,p=d.route.hydrateFallbackElement||null)));let c=e.concat(o.slice(0,h+1)),v=()=>{let _;return g?_=x:y?_=p:d.route.Component?_=te.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=f,te.createElement(rM,{match:d,routeContext:{outlet:f,matches:c,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?te.createElement(iM,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:v(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):v()},null)}var c0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(c0||{}),Bl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Bl||{});function oM(t){let e=te.useContext(Bh);return e||Lt(!1),e}function aM(t){let e=te.useContext(ZE);return e||Lt(!1),e}function lM(t){let e=te.useContext(qs);return e||Lt(!1),e}function f0(t){let e=lM(),n=e.matches[e.matches.length-1];return n.route.id||Lt(!1),n.route.id}function uM(){var t;let e=te.useContext(a0),n=aM(Bl.UseRouteError),i=f0(Bl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function cM(){let{router:t}=oM(c0.UseNavigateStable),e=f0(Bl.UseNavigateStable),n=te.useRef(!1);return u0(()=>{n.current=!0}),te.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Wo({fromRouteId:e},s)))},[t,e])}function al(t){Lt(!1)}function fM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Hi.Pop,navigator:s,static:o=!1,future:a}=t;Eu()&&Lt(!1);let l=e.replace(/^\/*/,"/"),u=te.useMemo(()=>({basename:l,navigator:s,static:o,future:Wo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Xs(i));let{pathname:f="/",search:d="",hash:h="",state:g=null,key:y="default"}=i,x=te.useMemo(()=>{let p=s0(f,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:g,key:y},navigationType:r}},[l,f,d,h,g,y,r]);return x==null?null:te.createElement(xu.Provider,{value:u},te.createElement(Su.Provider,{children:n,value:x}))}function dM(t){let{children:e,location:n}=t;return JE(Xf(e),n)}new Promise(()=>{});function Xf(t,e){e===void 0&&(e=[]);let n=[];return te.Children.forEach(t,(i,r)=>{if(!te.isValidElement(i))return;let s=[...e,r];if(i.type===te.Fragment){n.push.apply(n,Xf(i.props.children,s));return}i.type!==al&&Lt(!1),!i.props.index||!i.props.children||Lt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Xf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const hM="6";try{window.__reactRouterVersion=hM}catch{}const pM="startTransition",Mm=dx[pM];function mM(t){let{basename:e,children:n,future:i,window:r}=t,s=te.useRef();s.current==null&&(s.current=wE({window:r,v5Compat:!0}));let o=s.current,[a,l]=te.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},f=te.useCallback(d=>{u&&Mm?Mm(()=>l(d)):l(d)},[l,u]);return te.useLayoutEffect(()=>o.listen(f),[o,f]),te.createElement(fM,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var wm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wm||(wm={}));var Tm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Tm||(Tm={}));var d0={exports:{}},gM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vM=gM,_M=vM;function h0(){}function p0(){}p0.resetWarningCache=h0;var yM=function(){function t(i,r,s,o,a,l){if(l!==_M){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:p0,resetWarningCache:h0};return n.PropTypes=n,n};d0.exports=yM();var xM=d0.exports;const Ne=iu(xM),er=({titleText:t})=>{const[e,n]=te.useState(!1),i=te.useRef(null);return te.useEffect(()=>{const r=i.current,s=new IntersectionObserver(([o])=>{n(o.isIntersecting)},{threshold:.5});return r&&s.observe(r),()=>{r&&s.unobserve(r)}},[]),F.jsxs("div",{className:"relative text-center overflow-hidden",ref:i,children:[F.jsx("h1",{className:`relative font-black text-white text-[clamp(3rem,10vw,5em)] transform ${e?"animate-slideUp":"animate-slideDown"} transition-transform duration-800 ease-in-out`,children:t}),F.jsx("div",{className:"absolute inset-0 bg-transparent"})]})};er.propTypes={titleText:Ne.string.isRequired};const SM=()=>{const[t,e]=te.useState({paragraph1:!1,paragraph2:!1}),n=te.useRef(null);return te.useEffect(()=>{const i=n.current,r=new IntersectionObserver(([s])=>{s.isIntersecting&&(e({paragraph1:!0}),setTimeout(()=>e(o=>({...o,paragraph2:!0})),500),r.disconnect())},{threshold:.2});return i&&r.observe(i),()=>i&&r.disconnect()},[]),F.jsxs("div",{ref:n,className:"w-full min-h-screen flex flex-col items-center justify-center py-16 text-white bg-black bg-opacity-90 bg-radial-gradient-to-b from-[#21325C23] to-black text-justify",children:[F.jsx(er,{titleText:"WHAT WE DO"}),F.jsxs("div",{className:"mt-8 text-center space-y-6 w-full md:w-3/4 lg:w-2/3",children:[F.jsx("p",{className:`transition-transform transform duration-1000 ease-out ${t.paragraph1?"opacity-100 translate-y-0":"opacity-0 translate-y-10"} text-xl md:text-2xl lg:text-3xl leading-snug`,children:"We study the neurobiology of energy balance. Using cutting-edge approaches, we aim to understand the molecular, cellular, and circuit mechanisms through which the brain regulates food intake and energy expenditure."}),F.jsx("p",{className:`transition-transform transform duration-1000 ease-out delay-500 ${t.paragraph2?"opacity-100 translate-y-0":"opacity-0 translate-y-10"} text-xl md:text-2xl lg:text-3xl leading-snug`,children:"We are also developing novel technologies to better understand how the brain affects behavior and physiology."})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="169",EM=0,bm=1,MM=2,m0=1,wM=2,li=3,tr=0,cn=1,fi=2,Ki=0,xs=1,Cm=2,Am=3,Rm=4,TM=5,_r=100,bM=101,CM=102,AM=103,RM=104,PM=200,LM=201,DM=202,NM=203,qf=204,$f=205,IM=206,OM=207,UM=208,FM=209,kM=210,zM=211,BM=212,HM=213,VM=214,Yf=0,Kf=1,Zf=2,Ds=3,Qf=4,Jf=5,ed=6,td=7,g0=0,GM=1,WM=2,Zi=0,jM=1,XM=2,qM=3,$M=4,YM=5,KM=6,ZM=7,v0=300,Ns=301,Is=302,nd=303,id=304,Mu=306,rd=1e3,Mr=1001,sd=1002,Rn=1003,QM=1004,wa=1005,Vn=1006,fc=1007,wr=1008,Ei=1009,_0=1010,y0=1011,jo=1012,Gh=1013,Ir=1014,pi=1015,Qo=1016,Wh=1017,jh=1018,Os=1020,x0=35902,S0=1021,E0=1022,Wn=1023,M0=1024,w0=1025,Ss=1026,Us=1027,T0=1028,Xh=1029,b0=1030,qh=1031,$h=1033,ll=33776,ul=33777,cl=33778,fl=33779,od=35840,ad=35841,ld=35842,ud=35843,cd=36196,fd=37492,dd=37496,hd=37808,pd=37809,md=37810,gd=37811,vd=37812,_d=37813,yd=37814,xd=37815,Sd=37816,Ed=37817,Md=37818,wd=37819,Td=37820,bd=37821,dl=36492,Cd=36494,Ad=36495,C0=36283,Rd=36284,Pd=36285,Ld=36286,JM=3200,ew=3201,tw=0,nw=1,ki="",Kn="srgb",or="srgb-linear",Yh="display-p3",wu="display-p3-linear",Hl="linear",dt="srgb",Vl="rec709",Gl="p3",Hr=7680,Pm=519,iw=512,rw=513,sw=514,A0=515,ow=516,aw=517,lw=518,uw=519,Lm=35044,Dm="300 es",mi=2e3,Wl=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,Dd=180/Math.PI;function Jo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function cw(t,e){return(t%e+e)%e}function hc(t,e,n){return(1-n)*t+n*e}function ro(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,u){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],g=i[5],y=i[8],x=r[0],p=r[3],c=r[6],v=r[1],_=r[4],E=r[7],P=r[2],A=r[5],b=r[8];return s[0]=o*x+a*v+l*P,s[3]=o*p+a*_+l*A,s[6]=o*c+a*E+l*b,s[1]=u*x+f*v+d*P,s[4]=u*p+f*_+d*A,s[7]=u*c+f*E+d*b,s[2]=h*x+g*v+y*P,s[5]=h*p+g*_+y*A,s[8]=h*c+g*E+y*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,g=u*s-o*l,y=n*d+i*h+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=g*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pc.makeScale(e,n)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new je;function R0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fw(){const t=jl("canvas");return t.style.display="block",t}const Nm={};function hl(t){t in Nm||(Nm[t]=!0,console.warn(t))}function dw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function hw(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pw(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Im=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Om=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),so={[or]:{transfer:Hl,primaries:Vl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Kn]:{transfer:dt,primaries:Vl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[wu]:{transfer:Hl,primaries:Gl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Om),fromReference:t=>t.applyMatrix3(Im)},[Yh]:{transfer:dt,primaries:Gl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Om),fromReference:t=>t.applyMatrix3(Im).convertLinearToSRGB()}},mw=new Set([or,wu]),it={enabled:!0,_workingColorSpace:or,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!mw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=so[e].toReference,r=so[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return so[t].primaries},getTransfer:function(t){return t===ki?Hl:so[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(so[e].luminanceCoefficients)}};function Es(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Vr;class gw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=jl("canvas")),Vr.width=e.width,Vr.height=e.height;const i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Es(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Es(n[i]/255)*255):n[i]=Es(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vw=0;class P0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=Jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gc(r[o].image)):s.push(gc(r[o]))}else s=gc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _w=0;class fn extends $s{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Mr,r=Mr,s=Vn,o=wr,a=Wn,l=Ei,u=fn.DEFAULT_ANISOTROPY,f=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=Jo(),this.name="",this.source=new P0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=v0;fn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],g=l[5],y=l[9],x=l[2],p=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(y-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(y+p)<.1&&Math.abs(u+g+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,E=(g+1)/2,P=(c+1)/2,A=(f+h)/4,b=(d+x)/4,M=(y+p)/4;return _>E&&_>P?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=b/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=M/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=b/s,r=M/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-y)*(p-y)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(p-y)/v,this.y=(d-x)/v,this.z=(h-f)/v,this.w=Math.acos((u+g+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yw extends $s{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new P0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends yw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class L0 extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xw extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],g=s[o+1],y=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=y,e[n+3]=x;return}if(d!==x||l!==h||u!==g||f!==y){let p=1-a;const c=l*h+u*g+f*y+d*x,v=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const P=Math.sqrt(_),A=Math.atan2(P,c*v);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}const E=a*v;if(l=l*p+h*E,u=u*p+g*E,f=f*p+y*E,d=d*p+x*E,p===1-a){const P=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=P,u*=P,f*=P,d*=P}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],g=s[o+2],y=s[o+3];return e[n]=a*y+f*d+l*g-u*h,e[n+1]=l*y+f*h+u*d-a*g,e[n+2]=u*y+f*g+a*h-l*d,e[n+3]=f*y-a*d-l*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*g*y,this._y=u*g*d-h*f*y,this._z=u*f*y+h*g*d,this._w=u*f*d-h*g*y;break;case"YXZ":this._x=h*f*d+u*g*y,this._y=u*g*d-h*f*y,this._z=u*f*y-h*g*d,this._w=u*f*d+h*g*y;break;case"ZXY":this._x=h*f*d-u*g*y,this._y=u*g*d+h*f*y,this._z=u*f*y+h*g*d,this._w=u*f*d-h*g*y;break;case"ZYX":this._x=h*f*d-u*g*y,this._y=u*g*d+h*f*y,this._z=u*f*y-h*g*d,this._w=u*f*d+h*g*y;break;case"YZX":this._x=h*f*d+u*g*y,this._y=u*g*d+h*f*y,this._z=u*f*y-h*g*d,this._w=u*f*d-h*g*y;break;case"XZY":this._x=h*f*d-u*g*y,this._y=u*g*d-h*f*y,this._z=u*f*y+h*g*d,this._w=u*f*d+h*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new $,Um=new ea;class ta{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),ba.subVectors(this.max,oo),Gr.subVectors(e.a,oo),Wr.subVectors(e.b,oo),jr.subVectors(e.c,oo),Ci.subVectors(Wr,Gr),Ai.subVectors(jr,Wr),lr.subVectors(Gr,jr);let n=[0,-Ci.z,Ci.y,0,-Ai.z,Ai.y,0,-lr.z,lr.y,Ci.z,0,-Ci.x,Ai.z,0,-Ai.x,lr.z,0,-lr.x,-Ci.y,Ci.x,0,-Ai.y,Ai.x,0,-lr.y,lr.x,0];return!_c(n,Gr,Wr,jr,ba)||(n=[1,0,0,0,1,0,0,0,1],!_c(n,Gr,Wr,jr,ba))?!1:(Ca.crossVectors(Ci,Ai),n=[Ca.x,Ca.y,Ca.z],_c(n,Gr,Wr,jr,ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new $,new $,new $,new $,new $,new $,new $,new $],Un=new $,Ta=new ta,Gr=new $,Wr=new $,jr=new $,Ci=new $,Ai=new $,lr=new $,oo=new $,ba=new $,Ca=new $,ur=new $;function _c(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ur.fromArray(t,s);const a=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),u=n.dot(ur),f=i.dot(ur);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Sw=new ta,ao=new $,yc=new $;class Tu{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Sw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const n=ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(yc)),this.expandByPoint(ao.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new $,xc=new $,Aa=new $,Ri=new $,Sc=new $,Ra=new $,Ec=new $;class D0{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,n),ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xc.copy(e).add(n).multiplyScalar(.5),Aa.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(xc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Aa),a=Ri.dot(this.direction),l=-Ri.dot(Aa),u=Ri.lengthSq(),f=Math.abs(1-o*o);let d,h,g,y;if(f>0)if(d=o*l-a,h=o*a-l,y=s*f,d>=0)if(h>=-y)if(h<=y){const x=1/f;d*=x,h*=x,g=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+u;else h<=-y?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+u):h<=y?(d=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xc).addScaledVector(Aa,h),g}intersectSphere(e,n){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,n,i,r,s){Sc.subVectors(n,e),Ra.subVectors(i,e),Ec.crossVectors(Sc,Ra);let o=this.direction.dot(Ec),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Ra.crossVectors(Ri,Ra));if(l<0)return null;const u=a*this.direction.dot(Sc.cross(Ri));if(u<0||l+u>o)return null;const f=-a*Ri.dot(Ec);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,u,f,d,h,g,y,x,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,d,h,g,y,x,p)}set(e,n,i,r,s,o,a,l,u,f,d,h,g,y,x,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=g,c[7]=y,c[11]=x,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,g=o*d,y=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=g+y*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=y+g*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,g=l*d,y=u*f,x=u*d;n[0]=h+x*a,n[4]=y*a-g,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=g*a-y,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,g=l*d,y=u*f,x=u*d;n[0]=h-x*a,n[4]=-o*d,n[8]=y+g*a,n[1]=g+y*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,g=o*d,y=a*f,x=a*d;n[0]=l*f,n[4]=y*u-g,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=g*u-y,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*u,y=a*l,x=a*u;n[0]=l*f,n[4]=x-h*d,n[8]=y*d+g,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=g*d+y,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,g=o*u,y=a*l,x=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+x,n[5]=o*f,n[9]=g*d-y,n[2]=y*d-g,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ew,e,Mw)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Pi.crossVectors(i,mn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Pi.crossVectors(i,mn)),Pi.normalize(),Pa.crossVectors(mn,Pi),r[0]=Pi.x,r[4]=Pa.x,r[8]=mn.x,r[1]=Pi.y,r[5]=Pa.y,r[9]=mn.y,r[2]=Pi.z,r[6]=Pa.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],g=i[13],y=i[2],x=i[6],p=i[10],c=i[14],v=i[3],_=i[7],E=i[11],P=i[15],A=r[0],b=r[4],M=r[8],T=r[12],m=r[1],S=r[5],L=r[9],N=r[13],O=r[2],Z=r[6],V=r[10],H=r[14],I=r[3],G=r[7],J=r[11],ne=r[15];return s[0]=o*A+a*m+l*O+u*I,s[4]=o*b+a*S+l*Z+u*G,s[8]=o*M+a*L+l*V+u*J,s[12]=o*T+a*N+l*H+u*ne,s[1]=f*A+d*m+h*O+g*I,s[5]=f*b+d*S+h*Z+g*G,s[9]=f*M+d*L+h*V+g*J,s[13]=f*T+d*N+h*H+g*ne,s[2]=y*A+x*m+p*O+c*I,s[6]=y*b+x*S+p*Z+c*G,s[10]=y*M+x*L+p*V+c*J,s[14]=y*T+x*N+p*H+c*ne,s[3]=v*A+_*m+E*O+P*I,s[7]=v*b+_*S+E*Z+P*G,s[11]=v*M+_*L+E*V+P*J,s[15]=v*T+_*N+E*H+P*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],g=e[14],y=e[3],x=e[7],p=e[11],c=e[15];return y*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*g-i*l*g)+x*(+n*l*g-n*u*h+s*o*h-r*o*g+r*u*f-s*l*f)+p*(+n*u*d-n*a*g-s*o*d+i*o*g+s*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],g=e[11],y=e[12],x=e[13],p=e[14],c=e[15],v=d*p*u-x*h*u+x*l*g-a*p*g-d*l*c+a*h*c,_=y*h*u-f*p*u-y*l*g+o*p*g+f*l*c-o*h*c,E=f*x*u-y*d*u+y*a*g-o*x*g-f*a*c+o*d*c,P=y*d*l-f*x*l-y*a*h+o*x*h+f*a*p-o*d*p,A=n*v+i*_+r*E+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(x*h*s-d*p*s-x*r*g+i*p*g+d*r*c-i*h*c)*b,e[2]=(a*p*s-x*l*s+x*r*u-i*p*u-a*r*c+i*l*c)*b,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*g-i*l*g)*b,e[4]=_*b,e[5]=(f*p*s-y*h*s+y*r*g-n*p*g-f*r*c+n*h*c)*b,e[6]=(y*l*s-o*p*s-y*r*u+n*p*u+o*r*c-n*l*c)*b,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*g+n*l*g)*b,e[8]=E*b,e[9]=(y*d*s-f*x*s-y*i*g+n*x*g+f*i*c-n*d*c)*b,e[10]=(o*x*s-y*a*s+y*i*u-n*x*u-o*i*c+n*a*c)*b,e[11]=(f*a*s-o*d*s-f*i*u+n*d*u+o*i*g-n*a*g)*b,e[12]=P*b,e[13]=(f*x*r-y*d*r+y*i*h-n*x*h-f*i*p+n*d*p)*b,e[14]=(y*a*r-o*x*r-y*i*l+n*x*l+o*i*p-n*a*p)*b,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,d=a+a,h=s*u,g=s*f,y=s*d,x=o*f,p=o*d,c=a*d,v=l*u,_=l*f,E=l*d,P=i.x,A=i.y,b=i.z;return r[0]=(1-(x+c))*P,r[1]=(g+E)*P,r[2]=(y-_)*P,r[3]=0,r[4]=(g-E)*A,r[5]=(1-(h+c))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(y+_)*b,r[9]=(p-v)*b,r[10]=(1-(h+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const u=1/s,f=1/o,d=1/a;return Fn.elements[0]*=u,Fn.elements[1]*=u,Fn.elements[2]*=u,Fn.elements[4]*=f,Fn.elements[5]*=f,Fn.elements[6]*=f,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=mi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,y;if(a===mi)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Wl)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=mi){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*u,g=(i+r)*f;let y,x;if(a===mi)y=(o+s)*d,x=-2*d;else if(a===Wl)y=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new $,Fn=new Tt,Ew=new $(0,0,0),Mw=new $(1,1,1),Pi=new $,Pa=new $,mn=new $,Fm=new Tt,km=new ea;class Mi{constructor(e=0,n=0,i=0,r=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return km.setFromEuler(this),this.setFromQuaternion(km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ww=0;const zm=new $,qr=new ea,si=new Tt,La=new $,lo=new $,Tw=new $,bw=new ea,Bm=new $(1,0,0),Hm=new $(0,1,0),Vm=new $(0,0,1),Gm={type:"added"},Cw={type:"removed"},$r={type:"childadded",child:null},Mc={type:"childremoved",child:null};class dn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new $,n=new Mi,i=new ea,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new je}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,n){return zm.copy(e).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?La.copy(e):La.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(lo,La,this.up):si.lookAt(La,lo,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(si),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gm),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Cw),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gm),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,Tw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,bw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new $(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new $,oi=new $,wc=new $,ai=new $,Yr=new $,Kr=new $,Wm=new $,Tc=new $,bc=new $,Cc=new $,Ac=new wt,Rc=new wt,Pc=new wt;class Gn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),oi.subVectors(i,n),wc.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(oi),l=kn.dot(wc),u=oi.dot(oi),f=oi.dot(wc),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,g=(u*l-a*f)*h,y=(o*f-a*l)*h;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ac.setScalar(0),Rc.setScalar(0),Pc.setScalar(0),Ac.fromBufferAttribute(e,n),Rc.fromBufferAttribute(e,i),Pc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ac,s.x),o.addScaledVector(Rc,s.y),o.addScaledVector(Pc,s.z),o}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),oi.subVectors(e,n),kn.cross(oi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),kn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),Kr.subVectors(s,i),Tc.subVectors(e,i);const l=Yr.dot(Tc),u=Kr.dot(Tc);if(l<=0&&u<=0)return n.copy(i);bc.subVectors(e,r);const f=Yr.dot(bc),d=Kr.dot(bc);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Yr,o);Cc.subVectors(e,s);const g=Yr.dot(Cc),y=Kr.dot(Cc);if(y>=0&&g<=y)return n.copy(s);const x=g*u-l*y;if(x<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector(Kr,a);const p=f*y-g*d;if(p<=0&&d-f>=0&&g-y>=0)return Wm.subVectors(s,r),a=(d-f)/(d-f+(g-y)),n.copy(r).addScaledVector(Wm,a);const c=1/(p+x+h);return o=x*c,a=h*c,n.copy(i).addScaledVector(Yr,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Lc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=cw(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Lc(o,s,e+1/3),this.g=Lc(o,s,e),this.b=Lc(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const i=I0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=mc(e.r),this.g=mc(e.g),this.b=mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return it.fromWorkingColorSpace(Wt.copy(this),e),Math.round(sn(Wt.r*255,0,255))*65536+Math.round(sn(Wt.g*255,0,255))*256+Math.round(sn(Wt.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Kn){it.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(Da);const i=hc(Li.h,Da.h,n),r=hc(Li.s,Da.s,n),s=hc(Li.l,Da.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new st;st.NAMES=I0;let Aw=0;class na extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=xs,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qf,this.blendDst=$f,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qf&&(i.blendSrc=this.blendSrc),this.blendDst!==$f&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class O0 extends na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=g0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new $,Na=new at;class Ln{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Lm,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Na.fromBufferAttribute(this,n),Na.applyMatrix3(e),this.setXY(n,Na.x,Na.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ro(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ro(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ro(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ro(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ro(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lm&&(e.usage=this.usage),e}}class U0 extends Ln{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class F0 extends Ln{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ar extends Ln{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Rw=0;const Tn=new Tt,Dc=new dn,Zr=new $,gn=new ta,uo=new ta,It=new $;class ti extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R0(e)?F0:U0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ar(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(gn.min,uo.min),gn.expandByPoint(It),It.addVectors(gn.max,uo.max),gn.expandByPoint(It)):(gn.expandByPoint(uo.min),gn.expandByPoint(uo.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)It.fromBufferAttribute(a,u),l&&(Zr.fromBufferAttribute(e,u),It.add(Zr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let M=0;M<i.count;M++)a[M]=new $,l[M]=new $;const u=new $,f=new $,d=new $,h=new at,g=new at,y=new at,x=new $,p=new $;function c(M,T,m){u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,m),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,T),y.fromBufferAttribute(s,m),f.sub(u),d.sub(u),g.sub(h),y.sub(h);const S=1/(g.x*y.y-y.x*g.y);isFinite(S)&&(x.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(S),p.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(S),a[M].add(x),a[T].add(x),a[m].add(x),l[M].add(p),l[T].add(p),l[m].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let M=0,T=v.length;M<T;++M){const m=v[M],S=m.start,L=m.count;for(let N=S,O=S+L;N<O;N+=3)c(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new $,E=new $,P=new $,A=new $;function b(M){P.fromBufferAttribute(r,M),A.copy(P);const T=a[M];_.copy(T),_.sub(P.multiplyScalar(P.dot(T))).normalize(),E.crossVectors(A,T);const S=E.dot(l[M])<0?-1:1;o.setXYZW(M,_.x,_.y,_.z,S)}for(let M=0,T=v.length;M<T;++M){const m=v[M],S=m.start,L=m.count;for(let N=S,O=S+L;N<O;N+=3)b(e.getX(N+0)),b(e.getX(N+1)),b(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,u=new $,f=new $,d=new $;if(e)for(let h=0,g=e.count;h<g;h+=3){const y=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let g=0,y=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?g=l[x]*a.data.stride+a.offset:g=l[x]*f;for(let c=0;c<f;c++)h[y++]=u[g++]}return new Ln(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ti,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const g=u[d];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,g=d.length;h<g;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jm=new Tt,cr=new D0,Ia=new Tu,Xm=new $,Oa=new $,Ua=new $,Fa=new $,Nc=new $,ka=new $,qm=new $,za=new $;class gi extends dn{constructor(e=new ti,n=new O0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ka.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(Nc.fromBufferAttribute(d,e),o?ka.addScaledVector(Nc,f):ka.addScaledVector(Nc.sub(n),f))}n.add(ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Ia.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Ia,Xm)===null||cr.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(jm.copy(s).invert(),cr.copy(e.ray).applyMatrix4(jm),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,x=h.length;y<x;y++){const p=h[y],c=o[p.materialIndex],v=Math.max(p.start,g.start),_=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let E=v,P=_;E<P;E+=3){const A=a.getX(E),b=a.getX(E+1),M=a.getX(E+2);r=Ba(this,c,e,i,u,f,d,A,b,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let p=y,c=x;p<c;p+=3){const v=a.getX(p),_=a.getX(p+1),E=a.getX(p+2);r=Ba(this,o,e,i,u,f,d,v,_,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,x=h.length;y<x;y++){const p=h[y],c=o[p.materialIndex],v=Math.max(p.start,g.start),_=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=v,P=_;E<P;E+=3){const A=E,b=E+1,M=E+2;r=Ba(this,c,e,i,u,f,d,A,b,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let p=y,c=x;p<c;p+=3){const v=p,_=p+1,E=p+2;r=Ba(this,o,e,i,u,f,d,v,_,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Pw(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===tr,a),l===null)return null;za.copy(a),za.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(za);return u<n.near||u>n.far?null:{distance:u,point:za.clone(),object:t}}function Ba(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Oa),t.getVertexPosition(l,Ua),t.getVertexPosition(u,Fa);const f=Pw(t,e,n,i,Oa,Ua,Fa,qm);if(f){const d=new $;Gn.getBarycoord(qm,Oa,Ua,Fa,d),r&&(f.uv=Gn.getInterpolatedAttribute(r,a,l,u,d,new at)),s&&(f.uv1=Gn.getInterpolatedAttribute(s,a,l,u,d,new at)),o&&(f.normal=Gn.getInterpolatedAttribute(o,a,l,u,d,new $),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new $,materialIndex:0};Gn.getNormal(Oa,Ua,Fa,h.normal),f.face=h,f.barycoord=d}return f}class ia extends ti{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ar(u,3)),this.setAttribute("normal",new Ar(f,3)),this.setAttribute("uv",new Ar(d,2));function y(x,p,c,v,_,E,P,A,b,M,T){const m=E/b,S=P/M,L=E/2,N=P/2,O=A/2,Z=b+1,V=M+1;let H=0,I=0;const G=new $;for(let J=0;J<V;J++){const ne=J*S-N;for(let ee=0;ee<Z;ee++){const ye=ee*m-L;G[x]=ye*v,G[p]=ne*_,G[c]=O,u.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[c]=A>0?1:-1,f.push(G.x,G.y,G.z),d.push(ee/b),d.push(1-J/M),H+=1}}for(let J=0;J<M;J++)for(let ne=0;ne<b;ne++){const ee=h+ne+Z*J,ye=h+ne+Z*(J+1),X=h+(ne+1)+Z*(J+1),Q=h+(ne+1)+Z*J;l.push(ee,ye,Q),l.push(ye,X,Q),I+=6}a.addGroup(g,I,T),g+=I,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function Lw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function k0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Dw={clone:Fs,merge:$t};var Nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nw,this.fragmentShader=Iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Lw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class z0 extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new $,$m=new at,Ym=new at;class _n extends z0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,n){return this.getViewBounds(e,$m,Ym),n.subVectors(Ym,$m)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,Jr=1;class Ow extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new _n(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const o=new _n(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const a=new _n(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const l=new _n(Qr,Jr,e,n);l.layers=this.layers,this.add(l);const u=new _n(Qr,Jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class B0 extends fn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ns,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uw extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new B0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ia(5,5,5),s=new nr({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ki});s.uniforms.tEquirect.value=n;const o=new gi(r,s),a=n.minFilter;return n.minFilter===wr&&(n.minFilter=Vn),new Ow(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ic=new $,Fw=new $,kw=new je;class gr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ic.subVectors(i,n).cross(Fw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||kw.getNormalMatrix(e),r=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Tu,Ha=new $;class H0{constructor(e=new gr,n=new gr,i=new gr,r=new gr,s=new gr,o=new gr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],g=r[8],y=r[9],x=r[10],p=r[11],c=r[12],v=r[13],_=r[14],E=r[15];if(i[0].setComponents(l-s,h-u,p-g,E-c).normalize(),i[1].setComponents(l+s,h+u,p+g,E+c).normalize(),i[2].setComponents(l+o,h+f,p+y,E+v).normalize(),i[3].setComponents(l-o,h-f,p-y,E-v).normalize(),i[4].setComponents(l-a,h-d,p-x,E-_).normalize(),n===mi)i[5].setComponents(l+a,h+d,p+x,E+_).normalize();else if(n===Wl)i[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ha.x=r.normal.x>0?e.max.x:e.min.x,Ha.y=r.normal.y>0?e.max.y:e.min.y,Ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function V0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function zw(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,f),a.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const f=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,f);else{d.sort((g,y)=>g.start-y.start);let h=0;for(let g=1;g<d.length;g++){const y=d[h],x=d[g];x.start<=y.start+y.count+1?y.count=Math.max(y.count,x.start+x.count-y.start):(++h,d[h]=x)}d.length=h+1;for(let g=0,y=d.length;g<y;g++){const x=d[g];t.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class bu extends ti{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,g=[],y=[],x=[],p=[];for(let c=0;c<f;c++){const v=c*h-o;for(let _=0;_<u;_++){const E=_*d-s;y.push(E,-v,0),x.push(0,0,1),p.push(_/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const _=v+u*c,E=v+u*(c+1),P=v+1+u*(c+1),A=v+1+u*c;g.push(_,E,A),g.push(E,P,A)}this.setIndex(g),this.setAttribute("position",new Ar(y,3)),this.setAttribute("normal",new Ar(x,3)),this.setAttribute("uv",new Ar(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ww=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$w=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,u1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g1="gl_FragColor = linearToOutputTexel( gl_FragColor );",v1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,D1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ST=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ET=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$T=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ob=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ab=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,db=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Bw,alphahash_pars_fragment:Hw,alphamap_fragment:Vw,alphamap_pars_fragment:Gw,alphatest_fragment:Ww,alphatest_pars_fragment:jw,aomap_fragment:Xw,aomap_pars_fragment:qw,batching_pars_vertex:$w,batching_vertex:Yw,begin_vertex:Kw,beginnormal_vertex:Zw,bsdfs:Qw,iridescence_fragment:Jw,bumpmap_pars_fragment:e1,clipping_planes_fragment:t1,clipping_planes_pars_fragment:n1,clipping_planes_pars_vertex:i1,clipping_planes_vertex:r1,color_fragment:s1,color_pars_fragment:o1,color_pars_vertex:a1,color_vertex:l1,common:u1,cube_uv_reflection_fragment:c1,defaultnormal_vertex:f1,displacementmap_pars_vertex:d1,displacementmap_vertex:h1,emissivemap_fragment:p1,emissivemap_pars_fragment:m1,colorspace_fragment:g1,colorspace_pars_fragment:v1,envmap_fragment:_1,envmap_common_pars_fragment:y1,envmap_pars_fragment:x1,envmap_pars_vertex:S1,envmap_physical_pars_fragment:D1,envmap_vertex:E1,fog_vertex:M1,fog_pars_vertex:w1,fog_fragment:T1,fog_pars_fragment:b1,gradientmap_pars_fragment:C1,lightmap_pars_fragment:A1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:P1,lights_pars_begin:L1,lights_toon_fragment:N1,lights_toon_pars_fragment:I1,lights_phong_fragment:O1,lights_phong_pars_fragment:U1,lights_physical_fragment:F1,lights_physical_pars_fragment:k1,lights_fragment_begin:z1,lights_fragment_maps:B1,lights_fragment_end:H1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:G1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:j1,map_fragment:X1,map_pars_fragment:q1,map_particle_fragment:$1,map_particle_pars_fragment:Y1,metalnessmap_fragment:K1,metalnessmap_pars_fragment:Z1,morphinstance_vertex:Q1,morphcolor_vertex:J1,morphnormal_vertex:eT,morphtarget_pars_vertex:tT,morphtarget_vertex:nT,normal_fragment_begin:iT,normal_fragment_maps:rT,normal_pars_fragment:sT,normal_pars_vertex:oT,normal_vertex:aT,normalmap_pars_fragment:lT,clearcoat_normal_fragment_begin:uT,clearcoat_normal_fragment_maps:cT,clearcoat_pars_fragment:fT,iridescence_pars_fragment:dT,opaque_fragment:hT,packing:pT,premultiplied_alpha_fragment:mT,project_vertex:gT,dithering_fragment:vT,dithering_pars_fragment:_T,roughnessmap_fragment:yT,roughnessmap_pars_fragment:xT,shadowmap_pars_fragment:ST,shadowmap_pars_vertex:ET,shadowmap_vertex:MT,shadowmask_pars_fragment:wT,skinbase_vertex:TT,skinning_pars_vertex:bT,skinning_vertex:CT,skinnormal_vertex:AT,specularmap_fragment:RT,specularmap_pars_fragment:PT,tonemapping_fragment:LT,tonemapping_pars_fragment:DT,transmission_fragment:NT,transmission_pars_fragment:IT,uv_pars_fragment:OT,uv_pars_vertex:UT,uv_vertex:FT,worldpos_vertex:kT,background_vert:zT,background_frag:BT,backgroundCube_vert:HT,backgroundCube_frag:VT,cube_vert:GT,cube_frag:WT,depth_vert:jT,depth_frag:XT,distanceRGBA_vert:qT,distanceRGBA_frag:$T,equirect_vert:YT,equirect_frag:KT,linedashed_vert:ZT,linedashed_frag:QT,meshbasic_vert:JT,meshbasic_frag:eb,meshlambert_vert:tb,meshlambert_frag:nb,meshmatcap_vert:ib,meshmatcap_frag:rb,meshnormal_vert:sb,meshnormal_frag:ob,meshphong_vert:ab,meshphong_frag:lb,meshphysical_vert:ub,meshphysical_frag:cb,meshtoon_vert:fb,meshtoon_frag:db,points_vert:hb,points_frag:pb,shadow_vert:mb,shadow_frag:gb,sprite_vert:vb,sprite_frag:_b},pe={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Zn={basic:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new st(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:$t([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:$t([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new st(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:$t([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:$t([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:$t([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:$t([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:$t([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:$t([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:$t([pe.common,pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:$t([pe.lights,pe.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Zn.physical={uniforms:$t([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Va={r:0,b:0,g:0},dr=new Mi,yb=new Tt;function xb(t,e,n,i,r,s,o){const a=new st(0);let l=s===!0?0:1,u,f,d=null,h=0,g=null;function y(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function x(v){let _=!1;const E=y(v);E===null?c(a,l):E&&E.isColor&&(c(E,1),_=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(v,_){const E=y(_);E&&(E.isCubeTexture||E.mapping===Mu)?(f===void 0&&(f=new gi(new ia(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Fs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),dr.copy(_.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(yb.makeRotationFromEuler(dr)),f.material.toneMapped=it.getTransfer(E.colorSpace)!==dt,(d!==E||h!==E.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,d=E,h=E.version,g=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new gi(new bu(2,2),new nr({name:"BackgroundMaterial",uniforms:Fs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=it.getTransfer(E.colorSpace)!==dt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,g=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function c(v,_){v.getRGB(Va,k0(t)),i.buffers.color.setClear(Va.r,Va.g,Va.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,c(a,l)},render:x,addToRenderList:p}}function Sb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(m,S,L,N,O){let Z=!1;const V=d(N,L,S);s!==V&&(s=V,u(s.object)),Z=g(m,N,L,O),Z&&y(m,N,L,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(m,S,L,N),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function u(m){return t.bindVertexArray(m)}function f(m){return t.deleteVertexArray(m)}function d(m,S,L){const N=L.wireframe===!0;let O=i[m.id];O===void 0&&(O={},i[m.id]=O);let Z=O[S.id];Z===void 0&&(Z={},O[S.id]=Z);let V=Z[N];return V===void 0&&(V=h(l()),Z[N]=V),V}function h(m){const S=[],L=[],N=[];for(let O=0;O<n;O++)S[O]=0,L[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:L,attributeDivisors:N,object:m,attributes:{},index:null}}function g(m,S,L,N){const O=s.attributes,Z=S.attributes;let V=0;const H=L.getAttributes();for(const I in H)if(H[I].location>=0){const J=O[I];let ne=Z[I];if(ne===void 0&&(I==="instanceMatrix"&&m.instanceMatrix&&(ne=m.instanceMatrix),I==="instanceColor"&&m.instanceColor&&(ne=m.instanceColor)),J===void 0||J.attribute!==ne||ne&&J.data!==ne.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function y(m,S,L,N){const O={},Z=S.attributes;let V=0;const H=L.getAttributes();for(const I in H)if(H[I].location>=0){let J=Z[I];J===void 0&&(I==="instanceMatrix"&&m.instanceMatrix&&(J=m.instanceMatrix),I==="instanceColor"&&m.instanceColor&&(J=m.instanceColor));const ne={};ne.attribute=J,J&&J.data&&(ne.data=J.data),O[I]=ne,V++}s.attributes=O,s.attributesNum=V,s.index=N}function x(){const m=s.newAttributes;for(let S=0,L=m.length;S<L;S++)m[S]=0}function p(m){c(m,0)}function c(m,S){const L=s.newAttributes,N=s.enabledAttributes,O=s.attributeDivisors;L[m]=1,N[m]===0&&(t.enableVertexAttribArray(m),N[m]=1),O[m]!==S&&(t.vertexAttribDivisor(m,S),O[m]=S)}function v(){const m=s.newAttributes,S=s.enabledAttributes;for(let L=0,N=S.length;L<N;L++)S[L]!==m[L]&&(t.disableVertexAttribArray(L),S[L]=0)}function _(m,S,L,N,O,Z,V){V===!0?t.vertexAttribIPointer(m,S,L,O,Z):t.vertexAttribPointer(m,S,L,N,O,Z)}function E(m,S,L,N){x();const O=N.attributes,Z=L.getAttributes(),V=S.defaultAttributeValues;for(const H in Z){const I=Z[H];if(I.location>=0){let G=O[H];if(G===void 0&&(H==="instanceMatrix"&&m.instanceMatrix&&(G=m.instanceMatrix),H==="instanceColor"&&m.instanceColor&&(G=m.instanceColor)),G!==void 0){const J=G.normalized,ne=G.itemSize,ee=e.get(G);if(ee===void 0)continue;const ye=ee.buffer,X=ee.type,Q=ee.bytesPerElement,ue=X===t.INT||X===t.UNSIGNED_INT||G.gpuType===Gh;if(G.isInterleavedBufferAttribute){const le=G.data,Te=le.stride,se=G.offset;if(le.isInstancedInterleavedBuffer){for(let Me=0;Me<I.locationSize;Me++)c(I.location+Me,le.meshPerAttribute);m.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Me=0;Me<I.locationSize;Me++)p(I.location+Me);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let Me=0;Me<I.locationSize;Me++)_(I.location+Me,ne/I.locationSize,X,J,Te*Q,(se+ne/I.locationSize*Me)*Q,ue)}else{if(G.isInstancedBufferAttribute){for(let le=0;le<I.locationSize;le++)c(I.location+le,G.meshPerAttribute);m.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let le=0;le<I.locationSize;le++)p(I.location+le);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let le=0;le<I.locationSize;le++)_(I.location+le,ne/I.locationSize,X,J,ne*Q,ne/I.locationSize*le*Q,ue)}}else if(V!==void 0){const J=V[H];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(I.location,J);break;case 3:t.vertexAttrib3fv(I.location,J);break;case 4:t.vertexAttrib4fv(I.location,J);break;default:t.vertexAttrib1fv(I.location,J)}}}}v()}function P(){M();for(const m in i){const S=i[m];for(const L in S){const N=S[L];for(const O in N)f(N[O].object),delete N[O];delete S[L]}delete i[m]}}function A(m){if(i[m.id]===void 0)return;const S=i[m.id];for(const L in S){const N=S[L];for(const O in N)f(N[O].object),delete N[O];delete S[L]}delete i[m.id]}function b(m){for(const S in i){const L=i[S];if(L[m.id]===void 0)continue;const N=L[m.id];for(const O in N)f(N[O].object),delete N[O];delete L[m.id]}}function M(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function Eb(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,d){d!==0&&(t.drawArraysInstanced(i,u,f,d),n.update(f,i,d))}function a(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=f[y];n.update(g,i,1)}function l(u,f,d,h){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<u.length;y++)o(u[y],f[y],h[y]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,d);let y=0;for(let x=0;x<d;x++)y+=f[x];for(let x=0;x<h.length;x++)n.update(y,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Mb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Wn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const M=b===Qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ei&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==pi&&!M)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:g,maxVertexTextures:y,maxTextureSize:x,maxCubemapSize:p,maxAttributes:c,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:P,maxSamples:A}}function wb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new gr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||i!==0||r;return r=h,i=d.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,g){const y=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,c=t.get(d);if(!r||y===null||y.length===0||s&&!p)s?f(null):u();else{const v=s?0:i,_=v*4;let E=c.clippingState||null;l.value=E,E=f(y,h,_,g);for(let P=0;P!==_;++P)E[P]=n[P];c.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,g,y){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,y!==!0||p===null){const c=g+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<c)&&(p=new Float32Array(c));for(let _=0,E=g;_!==x;++_,E+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Tb(t){let e=new WeakMap;function n(o,a){return a===nd?o.mapping=Ns:a===id&&(o.mapping=Is),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nd||a===id)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Uw(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class bb extends z0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const hs=4,Km=[.125,.215,.35,.446,.526,.582],yr=20,Oc=new bb,Zm=new st;let Uc=null,Fc=0,kc=0,zc=!1;const vr=(1+Math.sqrt(5))/2,es=1/vr,Qm=[new $(-vr,es,0),new $(vr,es,0),new $(-es,0,vr),new $(es,0,vr),new $(0,vr,-es),new $(0,vr,es),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc,Fc,kc),this._renderer.xr.enabled=zc,e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ns||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Qo,format:Wn,colorSpace:or,depthBuffer:!1},r=eg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(s)),this._blurMaterial=Ab(s,e,n)}return r}_compileMaterial(e){const n=new gi(this._lodPlanes[0],e);this._renderer.compile(n,Oc)}_sceneToCubeUV(e,n,i,r){const a=new _n(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Zm),f.toneMapping=Zi,f.autoClear=!1;const g=new O0({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),y=new gi(new ia,g);let x=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,x=!0):(g.color.copy(Zm),x=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):v===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;Ga(r,v*_,c>2?_:0,_,_),f.setRenderTarget(r),x&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ns||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new gi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ga(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Oc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qm[(r-s-1)%Qm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new gi(this._lodPlanes[r],u),h=u.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*yr-1),x=s/y,p=isFinite(s)?1+Math.floor(f*x):yr;p>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yr}`);const c=[];let v=0;for(let b=0;b<yr;++b){const M=b/x,T=Math.exp(-M*M/2);c.push(T),b===0?v+=T:b<p&&(v+=2*T)}for(let b=0;b<c.length;b++)c[b]=c[b]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=y,h.mipInt.value=_-i;const E=this._sizeLods[r],P=3*E*(r>_-hs?r-_+hs:0),A=4*(this._cubeSize-E);Ga(n,P,A,3*E,2*E),l.setRenderTarget(n),l.render(d,Oc)}}function Cb(t){const e=[],n=[],i=[];let r=t;const s=t-hs+1+Km.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-hs?l=Km[o-t+hs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],g=6,y=6,x=3,p=2,c=1,v=new Float32Array(x*y*g),_=new Float32Array(p*y*g),E=new Float32Array(c*y*g);for(let A=0;A<g;A++){const b=A%3*2/3-1,M=A>2?0:-1,T=[b,M,0,b+2/3,M,0,b+2/3,M+1,0,b,M,0,b+2/3,M+1,0,b,M+1,0];v.set(T,x*y*A),_.set(h,p*y*A);const m=[A,A,A,A,A,A];E.set(m,c*y*A)}const P=new ti;P.setAttribute("position",new Ln(v,x)),P.setAttribute("uv",new Ln(_,p)),P.setAttribute("faceIndex",new Ln(E,c)),e.push(P),r>hs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function eg(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=Mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ga(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ab(t,e,n){const i=new Float32Array(yr),r=new $(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function tg(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function ng(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===nd||l===id,f=l===Ns||l===Is;if(u||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Jm(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const g=a.image;return u&&g&&g.height>0||f&&g&&r(g)?(n===null&&(n=new Jm(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Pb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&hl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Lb(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const x=h.morphAttributes[y];for(let p=0,c=x.length;p<c;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const y in g){const x=g[y];for(let p=0,c=x.length;p<c;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(d){const h=[],g=d.index,y=d.attributes.position;let x=0;if(g!==null){const v=g.array;x=g.version;for(let _=0,E=v.length;_<E;_+=3){const P=v[_+0],A=v[_+1],b=v[_+2];h.push(P,A,A,b,b,P)}}else if(y!==void 0){const v=y.array;x=y.version;for(let _=0,E=v.length/3-1;_<E;_+=3){const P=_+0,A=_+1,b=_+2;h.push(P,A,A,b,b,P)}}else return;const p=new(R0(h)?F0:U0)(h,1);p.version=x;const c=s.get(d);c&&e.remove(c),s.set(d,p)}function f(d){const h=s.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function Db(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,g){t.drawElements(i,g,s,h*o),n.update(g,i,1)}function u(h,g,y){y!==0&&(t.drawElementsInstanced(i,g,s,h*o,y),n.update(g,i,y))}function f(h,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,y);let p=0;for(let c=0;c<y;c++)p+=g[c];n.update(p,i,1)}function d(h,g,y,x){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<h.length;c++)u(h[c]/o,g[c],x[c]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,x,0,y);let c=0;for(let v=0;v<y;v++)c+=g[v];for(let v=0;v<x.length;v++)n.update(c,i,x[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Nb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ib(t,e,n){const i=new WeakMap,r=new wt;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let m=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",m)};var g=m;h!==void 0&&h.texture.dispose();const y=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let E=0;y===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let P=a.attributes.position.count*E,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const b=new Float32Array(P*A*4*d),M=new L0(b,P,A,d);M.type=pi,M.needsUpdate=!0;const T=E*4;for(let S=0;S<d;S++){const L=c[S],N=v[S],O=_[S],Z=P*A*4*S;for(let V=0;V<L.count;V++){const H=V*T;y===!0&&(r.fromBufferAttribute(L,V),b[Z+H+0]=r.x,b[Z+H+1]=r.y,b[Z+H+2]=r.z,b[Z+H+3]=0),x===!0&&(r.fromBufferAttribute(N,V),b[Z+H+4]=r.x,b[Z+H+5]=r.y,b[Z+H+6]=r.z,b[Z+H+7]=0),p===!0&&(r.fromBufferAttribute(O,V),b[Z+H+8]=r.x,b[Z+H+9]=r.y,b[Z+H+10]=r.z,b[Z+H+11]=O.itemSize===4?r.w:1)}}h={count:d,texture:M,size:new at(P,A)},i.set(a,h),a.addEventListener("dispose",m)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let p=0;p<u.length;p++)y+=u[p];const x=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Ob(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class G0 extends fn{constructor(e,n,i,r,s,o,a,l,u,f=Ss){if(f!==Ss&&f!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ss&&(i=Ir),i===void 0&&f===Us&&(i=Os),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const W0=new fn,ig=new G0(1,1),j0=new L0,X0=new xw,q0=new B0,rg=[],sg=[],og=new Float32Array(16),ag=new Float32Array(9),lg=new Float32Array(4);function Ys(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=rg[r];if(s===void 0&&(s=new Float32Array(r),rg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cu(t,e){let n=sg[e];n===void 0&&(n=new Int32Array(e),sg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ub(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function Bb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;lg.set(i),t.uniformMatrix2fv(this.addr,!1,lg),Nt(n,i)}}function Hb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;ag.set(i),t.uniformMatrix3fv(this.addr,!1,ag),Nt(n,i)}}function Vb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;og.set(i),t.uniformMatrix4fv(this.addr,!1,og),Nt(n,i)}}function Gb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function Xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function qb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function Yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function Kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function Zb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ig.compareFunction=A0,s=ig):s=W0,n.setTexture2D(e||s,r)}function Qb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||X0,r)}function Jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||q0,r)}function eC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||j0,r)}function tC(t){switch(t){case 5126:return Ub;case 35664:return Fb;case 35665:return kb;case 35666:return zb;case 35674:return Bb;case 35675:return Hb;case 35676:return Vb;case 5124:case 35670:return Gb;case 35667:case 35671:return Wb;case 35668:case 35672:return jb;case 35669:case 35673:return Xb;case 5125:return qb;case 36294:return $b;case 36295:return Yb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return eC}}function nC(t,e){t.uniform1fv(this.addr,e)}function iC(t,e){const n=Ys(e,this.size,2);t.uniform2fv(this.addr,n)}function rC(t,e){const n=Ys(e,this.size,3);t.uniform3fv(this.addr,n)}function sC(t,e){const n=Ys(e,this.size,4);t.uniform4fv(this.addr,n)}function oC(t,e){const n=Ys(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aC(t,e){const n=Ys(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lC(t,e){const n=Ys(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uC(t,e){t.uniform1iv(this.addr,e)}function cC(t,e){t.uniform2iv(this.addr,e)}function fC(t,e){t.uniform3iv(this.addr,e)}function dC(t,e){t.uniform4iv(this.addr,e)}function hC(t,e){t.uniform1uiv(this.addr,e)}function pC(t,e){t.uniform2uiv(this.addr,e)}function mC(t,e){t.uniform3uiv(this.addr,e)}function gC(t,e){t.uniform4uiv(this.addr,e)}function vC(t,e,n){const i=this.cache,r=e.length,s=Cu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||W0,s[o])}function _C(t,e,n){const i=this.cache,r=e.length,s=Cu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||X0,s[o])}function yC(t,e,n){const i=this.cache,r=e.length,s=Cu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||q0,s[o])}function xC(t,e,n){const i=this.cache,r=e.length,s=Cu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||j0,s[o])}function SC(t){switch(t){case 5126:return nC;case 35664:return iC;case 35665:return rC;case 35666:return sC;case 35674:return oC;case 35675:return aC;case 35676:return lC;case 5124:case 35670:return uC;case 35667:case 35671:return cC;case 35668:case 35672:return fC;case 35669:case 35673:return dC;case 5125:return hC;case 36294:return pC;case 36295:return mC;case 36296:return gC;case 35678:case 36198:case 36298:case 36306:case 35682:return vC;case 35679:case 36299:case 36307:return _C;case 35680:case 36300:case 36308:case 36293:return yC;case 36289:case 36303:case 36311:case 36292:return xC}}class EC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tC(n.type)}}class MC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=SC(n.type)}}class wC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function ug(t,e){t.seq.push(e),t.map[e.id]=e}function TC(t,e,n){const i=t.name,r=i.length;for(Bc.lastIndex=0;;){const s=Bc.exec(i),o=Bc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ug(n,u===void 0?new EC(a,t,e):new MC(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new wC(a),ug(n,d)),n=d}}}class pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);TC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function cg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const bC=37297;let CC=0;function AC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function RC(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Gl&&n===Vl?i="LinearDisplayP3ToLinearSRGB":e===Vl&&n===Gl&&(i="LinearSRGBToLinearDisplayP3"),t){case or:case wu:return[i,"LinearTransferOETF"];case Kn:case Yh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function fg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+AC(t.getShaderSource(e),o)}else return r}function PC(t,e){const n=RC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function LC(t,e){let n;switch(e){case jM:n="Linear";break;case XM:n="Reinhard";break;case qM:n="Cineon";break;case $M:n="ACESFilmic";break;case KM:n="AgX";break;case ZM:n="Neutral";break;case YM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wa=new $;function DC(){it.getLuminanceCoefficients(Wa);const t=Wa.x.toFixed(4),e=Wa.y.toFixed(4),n=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function IC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function OC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function go(t){return t!==""}function dg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(t){return t.replace(UC,kC)}const FC=new Map;function kC(t,e){let n=We[e];if(n===void 0){const i=FC.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nd(n)}const zC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pg(t){return t.replace(zC,BC)}function BC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===m0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===wM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function VC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ns:case Is:e="ENVMAP_TYPE_CUBE";break;case Mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function WC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case g0:e="ENVMAP_BLENDING_MULTIPLY";break;case GM:e="ENVMAP_BLENDING_MIX";break;case WM:e="ENVMAP_BLENDING_ADD";break}return e}function jC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=HC(n),u=VC(n),f=GC(n),d=WC(n),h=jC(n),g=NC(n),y=IC(s),x=r.createProgram();let p,c,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(go).join(`
`),p.length>0&&(p+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(go).join(`
`),c.length>0&&(c+=`
`)):(p=[mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),c=[mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?We.tonemapping_pars_fragment:"",n.toneMapping!==Zi?LC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,PC("linearToOutputTexel",n.outputColorSpace),DC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(go).join(`
`)),o=Nd(o),o=dg(o,n),o=hg(o,n),a=Nd(a),a=dg(a,n),a=hg(a,n),o=pg(o),a=pg(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===Dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=v+p+o,E=v+c+a,P=cg(r,r.VERTEX_SHADER,_),A=cg(r,r.FRAGMENT_SHADER,E);r.attachShader(x,P),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(S){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(P).trim(),O=r.getShaderInfoLog(A).trim();let Z=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,A);else{const H=fg(r,P,"vertex"),I=fg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+L+`
`+H+`
`+I)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||O==="")&&(V=!1);V&&(S.diagnostics={runnable:Z,programLog:L,vertexShader:{log:N,prefix:p},fragmentShader:{log:O,prefix:c}})}r.deleteShader(P),r.deleteShader(A),M=new pl(r,x),T=OC(r,x)}let M;this.getUniforms=function(){return M===void 0&&b(this),M};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let m=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=r.getProgramParameter(x,bC)),m},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}let qC=0;class $C{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new YC(e),n.set(e,i)),i}}class YC{constructor(e){this.id=qC++,this.code=e,this.usedTimes=0}}function KC(t,e,n,i,r,s,o){const a=new N0,l=new $C,u=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,g=r.vertexTextures;let y=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(m){return u.add(m),m===0?"uv":`uv${m}`}function c(m,S,L,N,O){const Z=N.fog,V=O.geometry,H=m.isMeshStandardMaterial?N.environment:null,I=(m.isMeshStandardMaterial?n:e).get(m.envMap||H),G=I&&I.mapping===Mu?I.image.height:null,J=x[m.type];m.precision!==null&&(y=r.getMaxPrecision(m.precision),y!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",y,"instead."));const ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=ne!==void 0?ne.length:0;let ye=0;V.morphAttributes.position!==void 0&&(ye=1),V.morphAttributes.normal!==void 0&&(ye=2),V.morphAttributes.color!==void 0&&(ye=3);let X,Q,ue,le;if(J){const en=Zn[J];X=en.vertexShader,Q=en.fragmentShader}else X=m.vertexShader,Q=m.fragmentShader,l.update(m),ue=l.getVertexShaderID(m),le=l.getFragmentShaderID(m);const Te=t.getRenderTarget(),se=O.isInstancedMesh===!0,Me=O.isBatchedMesh===!0,Fe=!!m.map,Ue=!!m.matcap,D=!!I,et=!!m.aoMap,Le=!!m.lightMap,Ae=!!m.bumpMap,Pe=!!m.normalMap,Xe=!!m.displacementMap,Ie=!!m.emissiveMap,R=!!m.metalnessMap,w=!!m.roughnessMap,z=m.anisotropy>0,Y=m.clearcoat>0,re=m.dispersion>0,q=m.iridescence>0,we=m.sheen>0,fe=m.transmission>0,me=z&&!!m.anisotropyMap,Ge=Y&&!!m.clearcoatMap,oe=Y&&!!m.clearcoatNormalMap,ge=Y&&!!m.clearcoatRoughnessMap,Re=q&&!!m.iridescenceMap,ke=q&&!!m.iridescenceThicknessMap,de=we&&!!m.sheenColorMap,qe=we&&!!m.sheenRoughnessMap,He=!!m.specularMap,lt=!!m.specularColorMap,U=!!m.specularIntensityMap,xe=fe&&!!m.transmissionMap,K=fe&&!!m.thicknessMap,ie=!!m.gradientMap,ve=!!m.alphaMap,Se=m.alphaTest>0,Ze=!!m.alphaHash,bt=!!m.extensions;let Jt=Zi;m.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Jt=t.toneMapping);const Je={shaderID:J,shaderType:m.type,shaderName:m.name,vertexShader:X,fragmentShader:Q,defines:m.defines,customVertexShaderID:ue,customFragmentShaderID:le,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:y,batching:Me,batchingColor:Me&&O._colorsTexture!==null,instancing:se,instancingColor:se&&O.instanceColor!==null,instancingMorph:se&&O.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Te===null?t.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:or,alphaToCoverage:!!m.alphaToCoverage,map:Fe,matcap:Ue,envMap:D,envMapMode:D&&I.mapping,envMapCubeUVHeight:G,aoMap:et,lightMap:Le,bumpMap:Ae,normalMap:Pe,displacementMap:g&&Xe,emissiveMap:Ie,normalMapObjectSpace:Pe&&m.normalMapType===nw,normalMapTangentSpace:Pe&&m.normalMapType===tw,metalnessMap:R,roughnessMap:w,anisotropy:z,anisotropyMap:me,clearcoat:Y,clearcoatMap:Ge,clearcoatNormalMap:oe,clearcoatRoughnessMap:ge,dispersion:re,iridescence:q,iridescenceMap:Re,iridescenceThicknessMap:ke,sheen:we,sheenColorMap:de,sheenRoughnessMap:qe,specularMap:He,specularColorMap:lt,specularIntensityMap:U,transmission:fe,transmissionMap:xe,thicknessMap:K,gradientMap:ie,opaque:m.transparent===!1&&m.blending===xs&&m.alphaToCoverage===!1,alphaMap:ve,alphaTest:Se,alphaHash:Ze,combine:m.combine,mapUv:Fe&&p(m.map.channel),aoMapUv:et&&p(m.aoMap.channel),lightMapUv:Le&&p(m.lightMap.channel),bumpMapUv:Ae&&p(m.bumpMap.channel),normalMapUv:Pe&&p(m.normalMap.channel),displacementMapUv:Xe&&p(m.displacementMap.channel),emissiveMapUv:Ie&&p(m.emissiveMap.channel),metalnessMapUv:R&&p(m.metalnessMap.channel),roughnessMapUv:w&&p(m.roughnessMap.channel),anisotropyMapUv:me&&p(m.anisotropyMap.channel),clearcoatMapUv:Ge&&p(m.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&p(m.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&p(m.iridescenceThicknessMap.channel),sheenColorMapUv:de&&p(m.sheenColorMap.channel),sheenRoughnessMapUv:qe&&p(m.sheenRoughnessMap.channel),specularMapUv:He&&p(m.specularMap.channel),specularColorMapUv:lt&&p(m.specularColorMap.channel),specularIntensityMapUv:U&&p(m.specularIntensityMap.channel),transmissionMapUv:xe&&p(m.transmissionMap.channel),thicknessMapUv:K&&p(m.thicknessMap.channel),alphaMapUv:ve&&p(m.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Pe||z),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Fe||ve),fog:!!Z,useFog:m.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:m.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Fe&&m.map.isVideoTexture===!0&&it.getTransfer(m.map.colorSpace)===dt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===fi,flipSided:m.side===cn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:bt&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&m.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Je.vertexUv1s=u.has(1),Je.vertexUv2s=u.has(2),Je.vertexUv3s=u.has(3),u.clear(),Je}function v(m){const S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(const L in m.defines)S.push(L),S.push(m.defines[L]);return m.isRawShaderMaterial===!1&&(_(S,m),E(S,m),S.push(t.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function _(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapCubeUVHeight),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.morphAttributeCount),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function E(m,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),m.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),m.push(a.mask)}function P(m){const S=x[m.type];let L;if(S){const N=Zn[S];L=Dw.clone(N.uniforms)}else L=m.uniforms;return L}function A(m,S){let L;for(let N=0,O=f.length;N<O;N++){const Z=f[N];if(Z.cacheKey===S){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new XC(t,S,m,s),f.push(L)),L}function b(m){if(--m.usedTimes===0){const S=f.indexOf(m);f[S]=f[f.length-1],f.pop(),m.destroy()}}function M(m){l.remove(m)}function T(){l.dispose()}return{getParameters:c,getProgramCacheKey:v,getUniforms:P,acquireProgram:A,releaseProgram:b,releaseShaderCache:M,programs:f,dispose:T}}function ZC(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function QC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function gg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,g,y,x,p){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:g,groupOrder:y,renderOrder:d.renderOrder,z:x,group:p},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=g,c.groupOrder=y,c.renderOrder=d.renderOrder,c.z=x,c.group=p),e++,c}function a(d,h,g,y,x,p){const c=o(d,h,g,y,x,p);g.transmission>0?i.push(c):g.transparent===!0?r.push(c):n.push(c)}function l(d,h,g,y,x,p){const c=o(d,h,g,y,x,p);g.transmission>0?i.unshift(c):g.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||QC),i.length>1&&i.sort(h||gg),r.length>1&&r.sort(h||gg)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function JC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new vg,t.set(i,[o])):r>=s.length?(o=new vg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function eA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new st};break;case"SpotLight":n={position:new $,direction:new $,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function tA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nA=0;function iA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rA(t){const e=new eA,n=tA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new $);const r=new $,s=new Tt,o=new Tt;function a(u){let f=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let g=0,y=0,x=0,p=0,c=0,v=0,_=0,E=0,P=0,A=0,b=0;u.sort(iA);for(let T=0,m=u.length;T<m;T++){const S=u[T],L=S.color,N=S.intensity,O=S.distance,Z=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)f+=L.r*N,d+=L.g*N,h+=L.b*N;else if(S.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(S.sh.coefficients[V],N);b++}else if(S.isDirectionalLight){const V=e.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const H=S.shadow,I=n.get(S);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,i.directionalShadow[g]=I,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=S.shadow.matrix,v++}i.directional[g]=V,g++}else if(S.isSpotLight){const V=e.get(S);V.position.setFromMatrixPosition(S.matrixWorld),V.color.copy(L).multiplyScalar(N),V.distance=O,V.coneCos=Math.cos(S.angle),V.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),V.decay=S.decay,i.spot[x]=V;const H=S.shadow;if(S.map&&(i.spotLightMap[P]=S.map,P++,H.updateMatrices(S),S.castShadow&&A++),i.spotLightMatrix[x]=H.matrix,S.castShadow){const I=n.get(S);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=Z,E++}x++}else if(S.isRectAreaLight){const V=e.get(S);V.color.copy(L).multiplyScalar(N),V.halfWidth.set(S.width*.5,0,0),V.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=V,p++}else if(S.isPointLight){const V=e.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),V.distance=S.distance,V.decay=S.decay,S.castShadow){const H=S.shadow,I=n.get(S);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,I.shadowCameraNear=H.camera.near,I.shadowCameraFar=H.camera.far,i.pointShadow[y]=I,i.pointShadowMap[y]=Z,i.pointShadowMatrix[y]=S.shadow.matrix,_++}i.point[y]=V,y++}else if(S.isHemisphereLight){const V=e.get(S);V.skyColor.copy(S.color).multiplyScalar(N),V.groundColor.copy(S.groundColor).multiplyScalar(N),i.hemi[c]=V,c++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const M=i.hash;(M.directionalLength!==g||M.pointLength!==y||M.spotLength!==x||M.rectAreaLength!==p||M.hemiLength!==c||M.numDirectionalShadows!==v||M.numPointShadows!==_||M.numSpotShadows!==E||M.numSpotMaps!==P||M.numLightProbes!==b)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=p,i.point.length=y,i.hemi.length=c,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,M.directionalLength=g,M.pointLength=y,M.spotLength=x,M.rectAreaLength=p,M.hemiLength=c,M.numDirectionalShadows=v,M.numPointShadows=_,M.numSpotShadows=E,M.numSpotMaps=P,M.numLightProbes=b,i.version=nA++)}function l(u,f){let d=0,h=0,g=0,y=0,x=0;const p=f.matrixWorldInverse;for(let c=0,v=u.length;c<v;c++){const _=u[c];if(_.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(_.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const E=i.rectArea[y];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),h++}else if(_.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function _g(t){const e=new rA(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new _g(t),e.set(r,[a])):s>=o.length?(a=new _g(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class oA extends na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aA extends na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cA(t,e,n){let i=new H0;const r=new at,s=new at,o=new wt,a=new oA({depthPacking:ew}),l=new aA,u={},f=n.maxTextureSize,d={[tr]:cn,[cn]:tr,[fi]:fi},h=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:lA,fragmentShader:uA}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const y=new ti;y.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new gi(y,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m0;let c=this.type;this.render=function(A,b,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),m=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),L=t.state;L.setBlending(Ki),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=c!==li&&this.type===li,O=c===li&&this.type!==li;for(let Z=0,V=A.length;Z<V;Z++){const H=A[Z],I=H.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const G=I.getFrameExtents();if(r.multiply(G),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/G.x),r.x=s.x*G.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/G.y),r.y=s.y*G.y,I.mapSize.y=s.y)),I.map===null||N===!0||O===!0){const ne=this.type!==li?{minFilter:Rn,magFilter:Rn}:{};I.map!==null&&I.map.dispose(),I.map=new Or(r.x,r.y,ne),I.map.texture.name=H.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const J=I.getViewportCount();for(let ne=0;ne<J;ne++){const ee=I.getViewport(ne);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),L.viewport(o),I.updateMatrices(H,ne),i=I.getFrustum(),E(b,M,I.camera,H,this.type)}I.isPointLightShadow!==!0&&this.type===li&&v(I,M),I.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(T,m,S)};function v(A,b){const M=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Or(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,M,h,x,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,M,g,x,null)}function _(A,b,M,T){let m=null;const S=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)m=S;else if(m=M.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const L=m.uuid,N=b.uuid;let O=u[L];O===void 0&&(O={},u[L]=O);let Z=O[N];Z===void 0&&(Z=m.clone(),O[N]=Z,b.addEventListener("dispose",P)),m=Z}if(m.visible=b.visible,m.wireframe=b.wireframe,T===li?m.side=b.shadowSide!==null?b.shadowSide:b.side:m.side=b.shadowSide!==null?b.shadowSide:d[b.side],m.alphaMap=b.alphaMap,m.alphaTest=b.alphaTest,m.map=b.map,m.clipShadows=b.clipShadows,m.clippingPlanes=b.clippingPlanes,m.clipIntersection=b.clipIntersection,m.displacementMap=b.displacementMap,m.displacementScale=b.displacementScale,m.displacementBias=b.displacementBias,m.wireframeLinewidth=b.wireframeLinewidth,m.linewidth=b.linewidth,M.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const L=t.properties.get(m);L.light=M}return m}function E(A,b,M,T,m){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&m===li)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);const N=e.update(A),O=A.material;if(Array.isArray(O)){const Z=N.groups;for(let V=0,H=Z.length;V<H;V++){const I=Z[V],G=O[I.materialIndex];if(G&&G.visible){const J=_(A,G,T,m);A.onBeforeShadow(t,A,b,M,N,J,I),t.renderBufferDirect(M,null,N,J,A,I),A.onAfterShadow(t,A,b,M,N,J,I)}}}else if(O.visible){const Z=_(A,O,T,m);A.onBeforeShadow(t,A,b,M,N,Z,null),t.renderBufferDirect(M,null,N,Z,A,null),A.onAfterShadow(t,A,b,M,N,Z,null)}}const L=A.children;for(let N=0,O=L.length;N<O;N++)E(L[N],b,M,T,m)}function P(A){A.target.removeEventListener("dispose",P);for(const M in u){const T=u[M],m=A.target.uuid;m in T&&(T[m].dispose(),delete T[m])}}}const fA={[Yf]:Kf,[Zf]:ed,[Qf]:td,[Ds]:Jf,[Kf]:Yf,[ed]:Zf,[td]:Qf,[Jf]:Ds};function dA(t){function e(){let U=!1;const xe=new wt;let K=null;const ie=new wt(0,0,0,0);return{setMask:function(ve){K!==ve&&!U&&(t.colorMask(ve,ve,ve,ve),K=ve)},setLocked:function(ve){U=ve},setClear:function(ve,Se,Ze,bt,Jt){Jt===!0&&(ve*=bt,Se*=bt,Ze*=bt),xe.set(ve,Se,Ze,bt),ie.equals(xe)===!1&&(t.clearColor(ve,Se,Ze,bt),ie.copy(xe))},reset:function(){U=!1,K=null,ie.set(-1,0,0,0)}}}function n(){let U=!1,xe=!1,K=null,ie=null,ve=null;return{setReversed:function(Se){xe=Se},setTest:function(Se){Se?ue(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(Se){K!==Se&&!U&&(t.depthMask(Se),K=Se)},setFunc:function(Se){if(xe&&(Se=fA[Se]),ie!==Se){switch(Se){case Yf:t.depthFunc(t.NEVER);break;case Kf:t.depthFunc(t.ALWAYS);break;case Zf:t.depthFunc(t.LESS);break;case Ds:t.depthFunc(t.LEQUAL);break;case Qf:t.depthFunc(t.EQUAL);break;case Jf:t.depthFunc(t.GEQUAL);break;case ed:t.depthFunc(t.GREATER);break;case td:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=Se}},setLocked:function(Se){U=Se},setClear:function(Se){ve!==Se&&(t.clearDepth(Se),ve=Se)},reset:function(){U=!1,K=null,ie=null,ve=null}}}function i(){let U=!1,xe=null,K=null,ie=null,ve=null,Se=null,Ze=null,bt=null,Jt=null;return{setTest:function(Je){U||(Je?ue(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(Je){xe!==Je&&!U&&(t.stencilMask(Je),xe=Je)},setFunc:function(Je,en,ni){(K!==Je||ie!==en||ve!==ni)&&(t.stencilFunc(Je,en,ni),K=Je,ie=en,ve=ni)},setOp:function(Je,en,ni){(Se!==Je||Ze!==en||bt!==ni)&&(t.stencilOp(Je,en,ni),Se=Je,Ze=en,bt=ni)},setLocked:function(Je){U=Je},setClear:function(Je){Jt!==Je&&(t.clearStencil(Je),Jt=Je)},reset:function(){U=!1,xe=null,K=null,ie=null,ve=null,Se=null,Ze=null,bt=null,Jt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,y=!1,x=null,p=null,c=null,v=null,_=null,E=null,P=null,A=new st(0,0,0),b=0,M=!1,T=null,m=null,S=null,L=null,N=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,V=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),Z=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Z=V>=2);let I=null,G={};const J=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ee=new wt().fromArray(J),ye=new wt().fromArray(ne);function X(U,xe,K,ie){const ve=new Uint8Array(4),Se=t.createTexture();t.bindTexture(U,Se),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<K;Ze++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(xe+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return Se}const Q={};Q[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(Ds),Le(!1),Ae(bm),ue(t.CULL_FACE),D(Ki);function ue(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function le(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Te(U,xe){return f[U]!==xe?(t.bindFramebuffer(U,xe),f[U]=xe,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=xe),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function se(U,xe){let K=h,ie=!1;if(U){K=d.get(xe),K===void 0&&(K=[],d.set(xe,K));const ve=U.textures;if(K.length!==ve.length||K[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,Ze=ve.length;Se<Ze;Se++)K[Se]=t.COLOR_ATTACHMENT0+Se;K.length=ve.length,ie=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,ie=!0);ie&&t.drawBuffers(K)}function Me(U){return g!==U?(t.useProgram(U),g=U,!0):!1}const Fe={[_r]:t.FUNC_ADD,[bM]:t.FUNC_SUBTRACT,[CM]:t.FUNC_REVERSE_SUBTRACT};Fe[AM]=t.MIN,Fe[RM]=t.MAX;const Ue={[PM]:t.ZERO,[LM]:t.ONE,[DM]:t.SRC_COLOR,[qf]:t.SRC_ALPHA,[kM]:t.SRC_ALPHA_SATURATE,[UM]:t.DST_COLOR,[IM]:t.DST_ALPHA,[NM]:t.ONE_MINUS_SRC_COLOR,[$f]:t.ONE_MINUS_SRC_ALPHA,[FM]:t.ONE_MINUS_DST_COLOR,[OM]:t.ONE_MINUS_DST_ALPHA,[zM]:t.CONSTANT_COLOR,[BM]:t.ONE_MINUS_CONSTANT_COLOR,[HM]:t.CONSTANT_ALPHA,[VM]:t.ONE_MINUS_CONSTANT_ALPHA};function D(U,xe,K,ie,ve,Se,Ze,bt,Jt,Je){if(U===Ki){y===!0&&(le(t.BLEND),y=!1);return}if(y===!1&&(ue(t.BLEND),y=!0),U!==TM){if(U!==x||Je!==M){if((p!==_r||_!==_r)&&(t.blendEquation(t.FUNC_ADD),p=_r,_=_r),Je)switch(U){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cm:t.blendFunc(t.ONE,t.ONE);break;case Am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}c=null,v=null,E=null,P=null,A.set(0,0,0),b=0,x=U,M=Je}return}ve=ve||xe,Se=Se||K,Ze=Ze||ie,(xe!==p||ve!==_)&&(t.blendEquationSeparate(Fe[xe],Fe[ve]),p=xe,_=ve),(K!==c||ie!==v||Se!==E||Ze!==P)&&(t.blendFuncSeparate(Ue[K],Ue[ie],Ue[Se],Ue[Ze]),c=K,v=ie,E=Se,P=Ze),(bt.equals(A)===!1||Jt!==b)&&(t.blendColor(bt.r,bt.g,bt.b,Jt),A.copy(bt),b=Jt),x=U,M=!1}function et(U,xe){U.side===fi?le(t.CULL_FACE):ue(t.CULL_FACE);let K=U.side===cn;xe&&(K=!K),Le(K),U.blending===xs&&U.transparent===!1?D(Ki):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ie=U.stencilWrite;o.setTest(ie),ie&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Le(U){T!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),T=U)}function Ae(U){U!==EM?(ue(t.CULL_FACE),U!==m&&(U===bm?t.cullFace(t.BACK):U===MM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),m=U}function Pe(U){U!==S&&(Z&&t.lineWidth(U),S=U)}function Xe(U,xe,K){U?(ue(t.POLYGON_OFFSET_FILL),(L!==xe||N!==K)&&(t.polygonOffset(xe,K),L=xe,N=K)):le(t.POLYGON_OFFSET_FILL)}function Ie(U){U?ue(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+O-1),I!==U&&(t.activeTexture(U),I=U)}function w(U,xe,K){K===void 0&&(I===null?K=t.TEXTURE0+O-1:K=I);let ie=G[K];ie===void 0&&(ie={type:void 0,texture:void 0},G[K]=ie),(ie.type!==U||ie.texture!==xe)&&(I!==K&&(t.activeTexture(K),I=K),t.bindTexture(U,xe||Q[U]),ie.type=U,ie.texture=xe)}function z(){const U=G[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){ee.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function de(U){ye.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ye.copy(U))}function qe(U,xe){let K=l.get(xe);K===void 0&&(K=new WeakMap,l.set(xe,K));let ie=K.get(U);ie===void 0&&(ie=t.getUniformBlockIndex(xe,U.name),K.set(U,ie))}function He(U,xe){const ie=l.get(xe).get(U);a.get(xe)!==ie&&(t.uniformBlockBinding(xe,ie,U.__bindingPointIndex),a.set(xe,ie))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},I=null,G={},f={},d=new WeakMap,h=[],g=null,y=!1,x=null,p=null,c=null,v=null,_=null,E=null,P=null,A=new st(0,0,0),b=0,M=!1,T=null,m=null,S=null,L=null,N=null,ee.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:le,bindFramebuffer:Te,drawBuffers:se,useProgram:Me,setBlending:D,setMaterial:et,setFlipSided:Le,setCullFace:Ae,setLineWidth:Pe,setPolygonOffset:Xe,setScissorTest:Ie,activeTexture:R,bindTexture:w,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:re,texImage2D:ge,texImage3D:Re,updateUBOMapping:qe,uniformBlockBinding:He,texStorage2D:Ge,texStorage3D:oe,texSubImage2D:q,texSubImage3D:we,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:ke,viewport:de,reset:lt}}function yg(t,e,n,i){const r=hA(i);switch(n){case S0:return t*e;case M0:return t*e;case w0:return t*e*2;case T0:return t*e/r.components*r.byteLength;case Xh:return t*e/r.components*r.byteLength;case b0:return t*e*2/r.components*r.byteLength;case qh:return t*e*2/r.components*r.byteLength;case E0:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case $h:return t*e*4/r.components*r.byteLength;case ll:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cl:case fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ad:case ud:return Math.max(t,16)*Math.max(e,8)/4;case od:case ld:return Math.max(t,8)*Math.max(e,8)/2;case cd:case fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case md:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case gd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case vd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case _d:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case yd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case xd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Md:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case wd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Td:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case dl:case Cd:case Ad:return Math.ceil(t/4)*Math.ceil(e/4)*16;case C0:case Rd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Pd:case Ld:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hA(t){switch(t){case Ei:case _0:return{byteLength:1,components:1};case jo:case y0:case Qo:return{byteLength:2,components:1};case Wh:case jh:return{byteLength:2,components:4};case Ir:case Gh:case pi:return{byteLength:4,components:1};case x0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function pA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new at,f=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,w){return g?new OffscreenCanvas(R,w):jl("canvas")}function x(R,w,z){let Y=1;const re=Ie(R);if((re.width>z||re.height>z)&&(Y=z/Math.max(re.width,re.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(Y*re.width),we=Math.floor(Y*re.height);d===void 0&&(d=y(q,we));const fe=w?y(q,we):d;return fe.width=q,fe.height=we,fe.getContext("2d").drawImage(R,0,0,q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+q+"x"+we+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Rn&&R.minFilter!==Vn}function c(R){t.generateMipmap(R)}function v(R,w,z,Y,re=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=w;if(w===t.RED&&(z===t.FLOAT&&(q=t.R32F),z===t.HALF_FLOAT&&(q=t.R16F),z===t.UNSIGNED_BYTE&&(q=t.R8)),w===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.R8UI),z===t.UNSIGNED_SHORT&&(q=t.R16UI),z===t.UNSIGNED_INT&&(q=t.R32UI),z===t.BYTE&&(q=t.R8I),z===t.SHORT&&(q=t.R16I),z===t.INT&&(q=t.R32I)),w===t.RG&&(z===t.FLOAT&&(q=t.RG32F),z===t.HALF_FLOAT&&(q=t.RG16F),z===t.UNSIGNED_BYTE&&(q=t.RG8)),w===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RG8UI),z===t.UNSIGNED_SHORT&&(q=t.RG16UI),z===t.UNSIGNED_INT&&(q=t.RG32UI),z===t.BYTE&&(q=t.RG8I),z===t.SHORT&&(q=t.RG16I),z===t.INT&&(q=t.RG32I)),w===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RGB8UI),z===t.UNSIGNED_SHORT&&(q=t.RGB16UI),z===t.UNSIGNED_INT&&(q=t.RGB32UI),z===t.BYTE&&(q=t.RGB8I),z===t.SHORT&&(q=t.RGB16I),z===t.INT&&(q=t.RGB32I)),w===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),z===t.UNSIGNED_INT&&(q=t.RGBA32UI),z===t.BYTE&&(q=t.RGBA8I),z===t.SHORT&&(q=t.RGBA16I),z===t.INT&&(q=t.RGBA32I)),w===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),w===t.RGBA){const we=re?Hl:it.getTransfer(Y);z===t.FLOAT&&(q=t.RGBA32F),z===t.HALF_FLOAT&&(q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(q=we===dt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(R,w){let z;return R?w===null||w===Ir||w===Os?z=t.DEPTH24_STENCIL8:w===pi?z=t.DEPTH32F_STENCIL8:w===jo&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ir||w===Os?z=t.DEPTH_COMPONENT24:w===pi?z=t.DEPTH_COMPONENT32F:w===jo&&(z=t.DEPTH_COMPONENT16),z}function E(R,w){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Rn&&R.minFilter!==Vn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function P(R){const w=R.target;w.removeEventListener("dispose",P),b(w),w.isVideoTexture&&f.delete(w)}function A(R){const w=R.target;w.removeEventListener("dispose",A),T(w)}function b(R){const w=i.get(R);if(w.__webglInit===void 0)return;const z=R.source,Y=h.get(z);if(Y){const re=Y[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(R),Object.keys(Y).length===0&&h.delete(z)}i.remove(R)}function M(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const z=R.source,Y=h.get(z);delete Y[w.__cacheKey],o.memory.textures--}function T(R){const w=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let re=0;re<w.__webglFramebuffer[Y].length;re++)t.deleteFramebuffer(w.__webglFramebuffer[Y][re]);else t.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)t.deleteFramebuffer(w.__webglFramebuffer[Y]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=R.textures;for(let Y=0,re=z.length;Y<re;Y++){const q=i.get(z[Y]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(z[Y])}i.remove(R)}let m=0;function S(){m=0}function L(){const R=m;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),m+=1,R}function N(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function O(R,w){const z=i.get(R);if(R.isVideoTexture&&Pe(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(z,R,w);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+w)}function Z(R,w){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ye(z,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+w)}function V(R,w){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ye(z,R,w);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+w)}function H(R,w){const z=i.get(R);if(R.version>0&&z.__version!==R.version){X(z,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+w)}const I={[rd]:t.REPEAT,[Mr]:t.CLAMP_TO_EDGE,[sd]:t.MIRRORED_REPEAT},G={[Rn]:t.NEAREST,[QM]:t.NEAREST_MIPMAP_NEAREST,[wa]:t.NEAREST_MIPMAP_LINEAR,[Vn]:t.LINEAR,[fc]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},J={[iw]:t.NEVER,[uw]:t.ALWAYS,[rw]:t.LESS,[A0]:t.LEQUAL,[sw]:t.EQUAL,[lw]:t.GEQUAL,[ow]:t.GREATER,[aw]:t.NOTEQUAL};function ne(R,w){if(w.type===pi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Vn||w.magFilter===fc||w.magFilter===wa||w.magFilter===wr||w.minFilter===Vn||w.minFilter===fc||w.minFilter===wa||w.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,I[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,I[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,I[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,G[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,G[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Rn||w.minFilter!==wa&&w.minFilter!==wr||w.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ee(R,w){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",P));const Y=w.source;let re=h.get(Y);re===void 0&&(re={},h.set(Y,re));const q=N(w);if(q!==R.__cacheKey){re[q]===void 0&&(re[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),re[q].usedTimes++;const we=re[R.__cacheKey];we!==void 0&&(re[R.__cacheKey].usedTimes--,we.usedTimes===0&&M(w)),R.__cacheKey=q,R.__webglTexture=re[q].texture}return z}function ye(R,w,z){let Y=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=t.TEXTURE_3D);const re=ee(R,w),q=w.source;n.bindTexture(Y,R.__webglTexture,t.TEXTURE0+z);const we=i.get(q);if(q.version!==we.__version||re===!0){n.activeTexture(t.TEXTURE0+z);const fe=it.getPrimaries(it.workingColorSpace),me=w.colorSpace===ki?null:it.getPrimaries(w.colorSpace),Ge=w.colorSpace===ki||fe===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let oe=x(w.image,!1,r.maxTextureSize);oe=Xe(w,oe);const ge=s.convert(w.format,w.colorSpace),Re=s.convert(w.type);let ke=v(w.internalFormat,ge,Re,w.colorSpace,w.isVideoTexture);ne(Y,w);let de;const qe=w.mipmaps,He=w.isVideoTexture!==!0,lt=we.__version===void 0||re===!0,U=q.dataReady,xe=E(w,oe);if(w.isDepthTexture)ke=_(w.format===Us,w.type),lt&&(He?n.texStorage2D(t.TEXTURE_2D,1,ke,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,ke,oe.width,oe.height,0,ge,Re,null));else if(w.isDataTexture)if(qe.length>0){He&&lt&&n.texStorage2D(t.TEXTURE_2D,xe,ke,qe[0].width,qe[0].height);for(let K=0,ie=qe.length;K<ie;K++)de=qe[K],He?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,de.width,de.height,ge,Re,de.data):n.texImage2D(t.TEXTURE_2D,K,ke,de.width,de.height,0,ge,Re,de.data);w.generateMipmaps=!1}else He?(lt&&n.texStorage2D(t.TEXTURE_2D,xe,ke,oe.width,oe.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ge,Re,oe.data)):n.texImage2D(t.TEXTURE_2D,0,ke,oe.width,oe.height,0,ge,Re,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,ke,qe[0].width,qe[0].height,oe.depth);for(let K=0,ie=qe.length;K<ie;K++)if(de=qe[K],w.format!==Wn)if(ge!==null)if(He){if(U)if(w.layerUpdates.size>0){const ve=yg(de.width,de.height,w.format,w.type);for(const Se of w.layerUpdates){const Ze=de.data.subarray(Se*ve/de.data.BYTES_PER_ELEMENT,(Se+1)*ve/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,Se,de.width,de.height,1,ge,Ze,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,oe.depth,ge,de.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,ke,de.width,de.height,oe.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,oe.depth,ge,Re,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,ke,de.width,de.height,oe.depth,0,ge,Re,de.data)}else{He&&lt&&n.texStorage2D(t.TEXTURE_2D,xe,ke,qe[0].width,qe[0].height);for(let K=0,ie=qe.length;K<ie;K++)de=qe[K],w.format!==Wn?ge!==null?He?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,de.width,de.height,ge,de.data):n.compressedTexImage2D(t.TEXTURE_2D,K,ke,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,de.width,de.height,ge,Re,de.data):n.texImage2D(t.TEXTURE_2D,K,ke,de.width,de.height,0,ge,Re,de.data)}else if(w.isDataArrayTexture)if(He){if(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,ke,oe.width,oe.height,oe.depth),U)if(w.layerUpdates.size>0){const K=yg(oe.width,oe.height,w.format,w.type);for(const ie of w.layerUpdates){const ve=oe.data.subarray(ie*K/oe.data.BYTES_PER_ELEMENT,(ie+1)*K/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,oe.width,oe.height,1,ge,Re,ve)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,Re,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,oe.width,oe.height,oe.depth,0,ge,Re,oe.data);else if(w.isData3DTexture)He?(lt&&n.texStorage3D(t.TEXTURE_3D,xe,ke,oe.width,oe.height,oe.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,Re,oe.data)):n.texImage3D(t.TEXTURE_3D,0,ke,oe.width,oe.height,oe.depth,0,ge,Re,oe.data);else if(w.isFramebufferTexture){if(lt)if(He)n.texStorage2D(t.TEXTURE_2D,xe,ke,oe.width,oe.height);else{let K=oe.width,ie=oe.height;for(let ve=0;ve<xe;ve++)n.texImage2D(t.TEXTURE_2D,ve,ke,K,ie,0,ge,Re,null),K>>=1,ie>>=1}}else if(qe.length>0){if(He&&lt){const K=Ie(qe[0]);n.texStorage2D(t.TEXTURE_2D,xe,ke,K.width,K.height)}for(let K=0,ie=qe.length;K<ie;K++)de=qe[K],He?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ge,Re,de):n.texImage2D(t.TEXTURE_2D,K,ke,ge,Re,de);w.generateMipmaps=!1}else if(He){if(lt){const K=Ie(oe);n.texStorage2D(t.TEXTURE_2D,xe,ke,K.width,K.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Re,oe)}else n.texImage2D(t.TEXTURE_2D,0,ke,ge,Re,oe);p(w)&&c(Y),we.__version=q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function X(R,w,z){if(w.image.length!==6)return;const Y=ee(R,w),re=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const q=i.get(re);if(re.version!==q.__version||Y===!0){n.activeTexture(t.TEXTURE0+z);const we=it.getPrimaries(it.workingColorSpace),fe=w.colorSpace===ki?null:it.getPrimaries(w.colorSpace),me=w.colorSpace===ki||we===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ge=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!Ge&&!oe?ge[ie]=x(w.image[ie],!0,r.maxCubemapSize):ge[ie]=oe?w.image[ie].image:w.image[ie],ge[ie]=Xe(w,ge[ie]);const Re=ge[0],ke=s.convert(w.format,w.colorSpace),de=s.convert(w.type),qe=v(w.internalFormat,ke,de,w.colorSpace),He=w.isVideoTexture!==!0,lt=q.__version===void 0||Y===!0,U=re.dataReady;let xe=E(w,Re);ne(t.TEXTURE_CUBE_MAP,w);let K;if(Ge){He&&lt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,qe,Re.width,Re.height);for(let ie=0;ie<6;ie++){K=ge[ie].mipmaps;for(let ve=0;ve<K.length;ve++){const Se=K[ve];w.format!==Wn?ke!==null?He?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,0,0,Se.width,Se.height,ke,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,qe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,0,0,Se.width,Se.height,ke,de,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,qe,Se.width,Se.height,0,ke,de,Se.data)}}}else{if(K=w.mipmaps,He&&lt){K.length>0&&xe++;const ie=Ie(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,qe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(oe){He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,ke,de,ge[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,qe,ge[ie].width,ge[ie].height,0,ke,de,ge[ie].data);for(let ve=0;ve<K.length;ve++){const Ze=K[ve].image[ie].image;He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,0,0,Ze.width,Ze.height,ke,de,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,qe,Ze.width,Ze.height,0,ke,de,Ze.data)}}else{He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ke,de,ge[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,qe,ke,de,ge[ie]);for(let ve=0;ve<K.length;ve++){const Se=K[ve];He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,0,0,ke,de,Se.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,qe,ke,de,Se.image[ie])}}}p(w)&&c(t.TEXTURE_CUBE_MAP),q.__version=re.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Q(R,w,z,Y,re,q){const we=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),me=v(z.internalFormat,we,fe,z.colorSpace);if(!i.get(w).__hasExternalTextures){const oe=Math.max(1,w.width>>q),ge=Math.max(1,w.height>>q);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,q,me,oe,ge,w.depth,0,we,fe,null):n.texImage2D(re,q,me,oe,ge,0,we,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ae(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,re,i.get(z).__webglTexture,0,Le(w)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,re,i.get(z).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(R,w,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer){const Y=w.depthTexture,re=Y&&Y.isDepthTexture?Y.type:null,q=_(w.stencilBuffer,re),we=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Le(w);Ae(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,q,w.width,w.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,q,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,q,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,R)}else{const Y=w.textures;for(let re=0;re<Y.length;re++){const q=Y[re],we=s.convert(q.format,q.colorSpace),fe=s.convert(q.type),me=v(q.internalFormat,we,fe,q.colorSpace),Ge=Le(w);z&&Ae(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,me,w.width,w.height):Ae(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ge,me,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,me,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const Y=i.get(w.depthTexture).__webglTexture,re=Le(w);if(w.depthTexture.format===Ss)Ae(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(w.depthTexture.format===Us)Ae(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Te(R){const w=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){const re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",re)};Y.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=Y}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,R)}else if(z){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=t.createRenderbuffer(),ue(w.__webglDepthbuffer[Y],R,!1);else{const re=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ue(w.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(R,w,z){const Y=i.get(R);w!==void 0&&Q(Y.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Te(R)}function Me(R){const w=R.texture,z=i.get(R),Y=i.get(w);R.addEventListener("dispose",A);const re=R.textures,q=R.isWebGLCubeRenderTarget===!0,we=re.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=w.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let me=0;me<w.mipmaps.length;me++)z.__webglFramebuffer[fe][me]=t.createFramebuffer()}else z.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)z.__webglFramebuffer[fe]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(we)for(let fe=0,me=re.length;fe<me;fe++){const Ge=i.get(re[fe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ae(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const me=re[fe];z.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const Ge=s.convert(me.format,me.colorSpace),oe=s.convert(me.type),ge=v(me.internalFormat,Ge,oe,me.colorSpace,R.isXRRenderTarget===!0),Re=Le(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ge,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ne(t.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)Q(z.__webglFramebuffer[fe][me],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else Q(z.__webglFramebuffer[fe],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(w)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let fe=0,me=re.length;fe<me;fe++){const Ge=re[fe],oe=i.get(Ge);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ne(t.TEXTURE_2D,Ge),Q(z.__webglFramebuffer,R,Ge,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),p(Ge)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Y.__webglTexture),ne(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)Q(z.__webglFramebuffer[me],R,w,t.COLOR_ATTACHMENT0,fe,me);else Q(z.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,fe,0);p(w)&&c(fe),n.unbindTexture()}R.depthBuffer&&Te(R)}function Fe(R){const w=R.textures;for(let z=0,Y=w.length;z<Y;z++){const re=w[z];if(p(re)){const q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(re).__webglTexture;n.bindTexture(q,we),c(q),n.unbindTexture()}}}const Ue=[],D=[];function et(R){if(R.samples>0){if(Ae(R)===!1){const w=R.textures,z=R.width,Y=R.height;let re=t.COLOR_BUFFER_BIT;const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(R),fe=w.length>1;if(fe)for(let me=0;me<w.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let me=0;me<w.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[me]);const Ge=i.get(w[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ge,0)}t.blitFramebuffer(0,0,z,Y,0,0,z,Y,re,t.NEAREST),l===!0&&(Ue.length=0,D.length=0,Ue.push(t.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ue.push(q),D.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ue))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let me=0;me<w.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,we.__webglColorRenderbuffer[me]);const Ge=i.get(w[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Le(R){return Math.min(r.maxSamples,R.samples)}function Ae(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pe(R){const w=o.render.frame;f.get(R)!==w&&(f.set(R,w),R.update())}function Xe(R,w){const z=R.colorSpace,Y=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==or&&z!==ki&&(it.getTransfer(z)===dt?(Y!==Wn||re!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=L,this.resetTextureUnits=S,this.setTexture2D=O,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=H,this.rebindTextures=se,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ae}function mA(t,e){function n(i,r=ki){let s;const o=it.getTransfer(r);if(i===Ei)return t.UNSIGNED_BYTE;if(i===Wh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===x0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_0)return t.BYTE;if(i===y0)return t.SHORT;if(i===jo)return t.UNSIGNED_SHORT;if(i===Gh)return t.INT;if(i===Ir)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===Qo)return t.HALF_FLOAT;if(i===S0)return t.ALPHA;if(i===E0)return t.RGB;if(i===Wn)return t.RGBA;if(i===M0)return t.LUMINANCE;if(i===w0)return t.LUMINANCE_ALPHA;if(i===Ss)return t.DEPTH_COMPONENT;if(i===Us)return t.DEPTH_STENCIL;if(i===T0)return t.RED;if(i===Xh)return t.RED_INTEGER;if(i===b0)return t.RG;if(i===qh)return t.RG_INTEGER;if(i===$h)return t.RGBA_INTEGER;if(i===ll||i===ul||i===cl||i===fl)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===od||i===ad||i===ld||i===ud)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===od)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ad)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ld)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ud)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cd||i===fd||i===dd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cd||i===fd)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hd||i===pd||i===md||i===gd||i===vd||i===_d||i===yd||i===xd||i===Sd||i===Ed||i===Md||i===wd||i===Td||i===bd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===md)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_d)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ed)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Md)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Td)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===Cd||i===Ad)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dl)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ad)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===C0||i===Rd||i===Pd||i===Ld)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Rd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ld)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class gA extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ja extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vA={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),c=this._getHandJoint(u,x);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),g=.02,y=.005;u.inputState.pinching&&h>g+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ja;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const _A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new fn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new nr({vertexShader:_A,fragmentShader:yA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new bu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SA extends $s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,g=null,y=null;const x=new xA,p=n.getContextAttributes();let c=null,v=null;const _=[],E=[],P=new at;let A=null;const b=new _n;b.layers.enable(1),b.viewport=new wt;const M=new _n;M.layers.enable(2),M.viewport=new wt;const T=[b,M],m=new gA;m.layers.enable(1),m.layers.enable(2);let S=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=_[X];return Q===void 0&&(Q=new Hc,_[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=_[X];return Q===void 0&&(Q=new Hc,_[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=_[X];return Q===void 0&&(Q=new Hc,_[X]=Q),Q.getHandSpace()};function N(X){const Q=E.indexOf(X.inputSource);if(Q===-1)return;const ue=_[Q];ue!==void 0&&(ue.update(X.inputSource,X.frame,u||o),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<_.length;X++){const Q=E[X];Q!==null&&(E[X]=null,_[X].disconnect(Q))}S=null,L=null,x.reset(),e.setRenderTarget(c),g=null,h=null,d=null,r=null,v=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",O),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new Or(g.framebufferWidth,g.framebufferHeight,{format:Wn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ue=null,le=null;p.depth&&(le=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=p.stencil?Us:Ss,ue=p.stencil?Os:Ir);const Te={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Or(h.textureWidth,h.textureHeight,{format:Wn,type:Ei,depthTexture:new G0(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ye.setContext(r),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(X){for(let Q=0;Q<X.removed.length;Q++){const ue=X.removed[Q],le=E.indexOf(ue);le>=0&&(E[le]=null,_[le].disconnect(ue))}for(let Q=0;Q<X.added.length;Q++){const ue=X.added[Q];let le=E.indexOf(ue);if(le===-1){for(let se=0;se<_.length;se++)if(se>=E.length){E.push(ue),le=se;break}else if(E[se]===null){E[se]=ue,le=se;break}if(le===-1)break}const Te=_[le];Te&&Te.connect(ue)}}const V=new $,H=new $;function I(X,Q,ue){V.setFromMatrixPosition(Q.matrixWorld),H.setFromMatrixPosition(ue.matrixWorld);const le=V.distanceTo(H),Te=Q.projectionMatrix.elements,se=ue.projectionMatrix.elements,Me=Te[14]/(Te[10]-1),Fe=Te[14]/(Te[10]+1),Ue=(Te[9]+1)/Te[5],D=(Te[9]-1)/Te[5],et=(Te[8]-1)/Te[0],Le=(se[8]+1)/se[0],Ae=Me*et,Pe=Me*Le,Xe=le/(-et+Le),Ie=Xe*-et;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ie),X.translateZ(Xe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const R=Me+Xe,w=Fe+Xe,z=Ae-Ie,Y=Pe+(le-Ie),re=Ue*Fe/w*R,q=D*Fe/w*R;X.projectionMatrix.makePerspective(z,Y,re,q,R,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function G(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Q=X.near,ue=X.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),m.near=M.near=b.near=Q,m.far=M.far=b.far=ue,(S!==m.near||L!==m.far)&&(r.updateRenderState({depthNear:m.near,depthFar:m.far}),S=m.near,L=m.far);const le=X.parent,Te=m.cameras;G(m,le);for(let se=0;se<Te.length;se++)G(Te[se],le);Te.length===2?I(m,b,M):m.projectionMatrix.copy(b.projectionMatrix),J(X,m,le)};function J(X,Q,ue){ue===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Dd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(m)};let ne=null;function ee(X,Q){if(f=Q.getViewerPose(u||o),y=Q,f!==null){const ue=f.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let le=!1;ue.length!==m.cameras.length&&(m.cameras.length=0,le=!0);for(let se=0;se<ue.length;se++){const Me=ue[se];let Fe=null;if(g!==null)Fe=g.getViewport(Me);else{const D=d.getViewSubImage(h,Me);Fe=D.viewport,se===0&&(e.setRenderTargetTextures(v,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let Ue=T[se];Ue===void 0&&(Ue=new _n,Ue.layers.enable(se),Ue.viewport=new wt,T[se]=Ue),Ue.matrix.fromArray(Me.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Me.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),se===0&&(m.matrix.copy(Ue.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),le===!0&&m.cameras.push(Ue)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const se=d.getDepthInformation(ue[0]);se&&se.isValid&&se.texture&&x.init(e,se,r.renderState)}}for(let ue=0;ue<_.length;ue++){const le=E[ue],Te=_[ue];le!==null&&Te!==void 0&&Te.update(le,Q,u||o)}ne&&ne(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),y=null}const ye=new V0;ye.setAnimationLoop(ee),this.setAnimationLoop=function(X){ne=X},this.dispose=function(){}}}const hr=new Mi,EA=new Tt;function MA(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,k0(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,v,_,E){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),d(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),h(p,c),c.isMeshPhysicalMaterial&&g(p,c,E)):c.isMeshMatcapMaterial?(s(p,c),y(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),x(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,v,_):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===cn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===cn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const v=e.get(c),_=v.envMap,E=v.envMapRotation;_&&(p.envMap.value=_,hr.copy(E),hr.x*=-1,hr.y*=-1,hr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),p.envMapRotation.value.setFromMatrix4(EA.makeRotationFromEuler(hr)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap&&(p.lightMap.value=c.lightMap,p.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,p.lightMapTransform)),c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,v,_){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*v,p.scale.value=_*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function g(p,c,v){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===cn&&p.clearcoatNormalScale.value.negate())),c.dispersion>0&&(p.dispersion.value=c.dispersion),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,c){c.matcap&&(p.matcap.value=c.matcap)}function x(p,c){const v=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const E=_.program;i.uniformBlockBinding(v,E)}function u(v,_){let E=r[v.id];E===void 0&&(y(v),E=f(v),r[v.id]=E,v.addEventListener("dispose",p));const P=_.program;i.updateUBOMapping(v,P);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function f(v){const _=d();v.__bindingPointIndex=_;const E=t.createBuffer(),P=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,E),E}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],E=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,b=E.length;A<b;A++){const M=Array.isArray(E[A])?E[A]:[E[A]];for(let T=0,m=M.length;T<m;T++){const S=M[T];if(g(S,A,T,P)===!0){const L=S.__offset,N=Array.isArray(S.value)?S.value:[S.value];let O=0;for(let Z=0;Z<N.length;Z++){const V=N[Z],H=x(V);typeof V=="number"||typeof V=="boolean"?(S.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,L+O,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=0,S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=0,S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=0):(V.toArray(S.__data,O),O+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,S.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,_,E,P){const A=v.value,b=_+"_"+E;if(P[b]===void 0)return typeof A=="number"||typeof A=="boolean"?P[b]=A:P[b]=A.clone(),!0;{const M=P[b];if(typeof A=="number"||typeof A=="boolean"){if(M!==A)return P[b]=A,!0}else if(M.equals(A)===!1)return M.copy(A),!0}return!1}function y(v){const _=v.uniforms;let E=0;const P=16;for(let b=0,M=_.length;b<M;b++){const T=Array.isArray(_[b])?_[b]:[_[b]];for(let m=0,S=T.length;m<S;m++){const L=T[m],N=Array.isArray(L.value)?L.value:[L.value];for(let O=0,Z=N.length;O<Z;O++){const V=N[O],H=x(V),I=E%P,G=I%H.boundary,J=I+G;E+=G,J!==0&&P-J<H.storage&&(E+=P-J),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=H.storage}}}const A=E%P;return A>0&&(E+=P-A),v.__size=E,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class $0{constructor(e={}){const{canvas:n=fw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),y=new Int32Array(4);let x=null,p=null;const c=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Zi,this.toneMappingExposure=1;const _=this;let E=!1,P=0,A=0,b=null,M=-1,T=null;const m=new wt,S=new wt;let L=null;const N=new st(0);let O=0,Z=n.width,V=n.height,H=1,I=null,G=null;const J=new wt(0,0,Z,V),ne=new wt(0,0,Z,V);let ee=!1;const ye=new H0;let X=!1,Q=!1;const ue=new Tt,le=new Tt,Te=new $,se=new wt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Ue(){return b===null?H:1}let D=i;function et(C,k){return n.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vh}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",Se,!1),D===null){const k="webgl2";if(D=et(k,C),D===null)throw et(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Le,Ae,Pe,Xe,Ie,R,w,z,Y,re,q,we,fe,me,Ge,oe,ge,Re,ke,de,qe,He,lt,U;function xe(){Le=new Pb(D),Le.init(),He=new mA(D,Le),Ae=new Mb(D,Le,e,He),Pe=new dA(D),Ae.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),Xe=new Nb(D),Ie=new ZC,R=new pA(D,Le,Pe,Ie,Ae,He,Xe),w=new Tb(_),z=new Rb(_),Y=new zw(D),lt=new Sb(D,Y),re=new Lb(D,Y,Xe,lt),q=new Ob(D,re,Y,Xe),ke=new Ib(D,Ae,R),oe=new wb(Ie),we=new KC(_,w,z,Le,Ae,lt,oe),fe=new MA(_,Ie),me=new JC,Ge=new sA(Le),Re=new xb(_,w,z,Pe,q,h,l),ge=new cA(_,q,Ae),U=new wA(D,Xe,Ae,Pe),de=new Eb(D,Le,Xe),qe=new Db(D,Le,Xe),Xe.programs=we.programs,_.capabilities=Ae,_.extensions=Le,_.properties=Ie,_.renderLists=me,_.shadowMap=ge,_.state=Pe,_.info=Xe}xe();const K=new SA(_,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=Le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(Z,V,!1))},this.getSize=function(C){return C.set(Z,V)},this.setSize=function(C,k,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=C,V=k,n.width=Math.floor(C*H),n.height=Math.floor(k*H),W===!0&&(n.style.width=C+"px",n.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(Z*H,V*H).floor()},this.setDrawingBufferSize=function(C,k,W){Z=C,V=k,H=W,n.width=Math.floor(C*W),n.height=Math.floor(k*W),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(m)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,k,W,j){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,k,W,j),Pe.viewport(m.copy(J).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,k,W,j){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,k,W,j),Pe.scissor(S.copy(ne).multiplyScalar(H).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){Pe.setScissorTest(ee=C)},this.setOpaqueSort=function(C){I=C},this.setTransparentSort=function(C){G=C},this.getClearColor=function(C){return C.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(C=!0,k=!0,W=!0){let j=0;if(C){let B=!1;if(b!==null){const ce=b.texture.format;B=ce===$h||ce===qh||ce===Xh}if(B){const ce=b.texture.type,_e=ce===Ei||ce===Ir||ce===jo||ce===Os||ce===Wh||ce===jh,be=Re.getClearColor(),Ce=Re.getClearAlpha(),Be=be.r,Ve=be.g,De=be.b;_e?(g[0]=Be,g[1]=Ve,g[2]=De,g[3]=Ce,D.clearBufferuiv(D.COLOR,0,g)):(y[0]=Be,y[1]=Ve,y[2]=De,y[3]=Ce,D.clearBufferiv(D.COLOR,0,y))}else j|=D.COLOR_BUFFER_BIT}k&&(j|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),me.dispose(),Ge.dispose(),Ie.dispose(),w.dispose(),z.dispose(),q.dispose(),lt.dispose(),U.dispose(),we.dispose(),K.dispose(),K.removeEventListener("sessionstart",tp),K.removeEventListener("sessionend",np),ar.stop()};function ie(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=Xe.autoReset,k=ge.enabled,W=ge.autoUpdate,j=ge.needsUpdate,B=ge.type;xe(),Xe.autoReset=C,ge.enabled=k,ge.autoUpdate=W,ge.needsUpdate=j,ge.type=B}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ze(C){const k=C.target;k.removeEventListener("dispose",Ze),bt(k)}function bt(C){Jt(C),Ie.remove(C)}function Jt(C){const k=Ie.get(C).programs;k!==void 0&&(k.forEach(function(W){we.releaseProgram(W)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,W,j,B,ce){k===null&&(k=Me);const _e=B.isMesh&&B.matrixWorld.determinant()<0,be=Wy(C,k,W,j,B);Pe.setMaterial(j,_e);let Ce=W.index,Be=1;if(j.wireframe===!0){if(Ce=re.getWireframeAttribute(W),Ce===void 0)return;Be=2}const Ve=W.drawRange,De=W.attributes.position;let rt=Ve.start*Be,ct=(Ve.start+Ve.count)*Be;ce!==null&&(rt=Math.max(rt,ce.start*Be),ct=Math.min(ct,(ce.start+ce.count)*Be)),Ce!==null?(rt=Math.max(rt,0),ct=Math.min(ct,Ce.count)):De!=null&&(rt=Math.max(rt,0),ct=Math.min(ct,De.count));const xt=ct-rt;if(xt<0||xt===1/0)return;lt.setup(B,j,be,W,Ce);let hn,tt=de;if(Ce!==null&&(hn=Y.get(Ce),tt=qe,tt.setIndex(hn)),B.isMesh)j.wireframe===!0?(Pe.setLineWidth(j.wireframeLinewidth*Ue()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(B.isLine){let Oe=j.linewidth;Oe===void 0&&(Oe=1),Pe.setLineWidth(Oe*Ue()),B.isLineSegments?tt.setMode(D.LINES):B.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else B.isPoints?tt.setMode(D.POINTS):B.isSprite&&tt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)tt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))tt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Oe=B._multiDrawStarts,Ft=B._multiDrawCounts,nt=B._multiDrawCount,In=Ce?Y.get(Ce).bytesPerElement:1,zr=Ie.get(j).currentProgram.getUniforms();for(let pn=0;pn<nt;pn++)zr.setValue(D,"_gl_DrawID",pn),tt.render(Oe[pn]/In,Ft[pn])}else if(B.isInstancedMesh)tt.renderInstances(rt,xt,B.count);else if(W.isInstancedBufferGeometry){const Oe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ft=Math.min(W.instanceCount,Oe);tt.renderInstances(rt,xt,Ft)}else tt.render(rt,xt)};function Je(C,k,W){C.transparent===!0&&C.side===fi&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,oa(C,k,W),C.side=tr,C.needsUpdate=!0,oa(C,k,W),C.side=fi):oa(C,k,W)}this.compile=function(C,k,W=null){W===null&&(W=C),p=Ge.get(W),p.init(k),v.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),C!==W&&C.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const j=new Set;return C.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const be=ce[_e];Je(be,W,B),j.add(be)}else Je(ce,W,B),j.add(ce)}),v.pop(),p=null,j},this.compileAsync=function(C,k,W=null){const j=this.compile(C,k,W);return new Promise(B=>{function ce(){if(j.forEach(function(_e){Ie.get(_e).currentProgram.isReady()&&j.delete(_e)}),j.size===0){B(C);return}setTimeout(ce,10)}Le.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let en=null;function ni(C){en&&en(C)}function tp(){ar.stop()}function np(){ar.start()}const ar=new V0;ar.setAnimationLoop(ni),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(C){en=C,K.setAnimationLoop(C),C===null?ar.stop():ar.start()},K.addEventListener("sessionstart",tp),K.addEventListener("sessionend",np),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,k,b),p=Ge.get(C,v.length),p.init(k),v.push(p),le.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ye.setFromProjectionMatrix(le),Q=this.localClippingEnabled,X=oe.init(this.clippingPlanes,Q),x=me.get(C,c.length),x.init(),c.push(x),K.enabled===!0&&K.isPresenting===!0){const ce=_.xr.getDepthSensingMesh();ce!==null&&Iu(ce,k,-1/0,_.sortObjects)}Iu(C,k,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(I,G),Fe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Fe&&Re.addToRenderList(x,C),this.info.render.frame++,X===!0&&oe.beginShadows();const W=p.state.shadowsArray;ge.render(W,C,k),X===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,B=x.transmissive;if(p.setupLights(),k.isArrayCamera){const ce=k.cameras;if(B.length>0)for(let _e=0,be=ce.length;_e<be;_e++){const Ce=ce[_e];rp(j,B,C,Ce)}Fe&&Re.render(C);for(let _e=0,be=ce.length;_e<be;_e++){const Ce=ce[_e];ip(x,C,Ce,Ce.viewport)}}else B.length>0&&rp(j,B,C,k),Fe&&Re.render(C),ip(x,C,k);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(_,C,k),lt.resetDefaultState(),M=-1,T=null,v.pop(),v.length>0?(p=v[v.length-1],X===!0&&oe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Iu(C,k,W,j){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ye.intersectsSprite(C)){j&&se.setFromMatrixPosition(C.matrixWorld).applyMatrix4(le);const _e=q.update(C),be=C.material;be.visible&&x.push(C,_e,be,W,se.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ye.intersectsObject(C))){const _e=q.update(C),be=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),se.copy(C.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),se.copy(_e.boundingSphere.center)),se.applyMatrix4(C.matrixWorld).applyMatrix4(le)),Array.isArray(be)){const Ce=_e.groups;for(let Be=0,Ve=Ce.length;Be<Ve;Be++){const De=Ce[Be],rt=be[De.materialIndex];rt&&rt.visible&&x.push(C,_e,rt,W,se.z,De)}}else be.visible&&x.push(C,_e,be,W,se.z,null)}}const ce=C.children;for(let _e=0,be=ce.length;_e<be;_e++)Iu(ce[_e],k,W,j)}function ip(C,k,W,j){const B=C.opaque,ce=C.transmissive,_e=C.transparent;p.setupLightsView(W),X===!0&&oe.setGlobalState(_.clippingPlanes,W),j&&Pe.viewport(m.copy(j)),B.length>0&&sa(B,k,W),ce.length>0&&sa(ce,k,W),_e.length>0&&sa(_e,k,W),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function rp(C,k,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Or(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Qo:Ei,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ce=p.state.transmissionRenderTarget[j.id],_e=j.viewport||m;ce.setSize(_e.z,_e.w);const be=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(N),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),Fe&&Re.render(W);const Ce=_.toneMapping;_.toneMapping=Zi;const Be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),X===!0&&oe.setGlobalState(_.clippingPlanes,j),sa(C,W,j),R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let De=0,rt=k.length;De<rt;De++){const ct=k[De],xt=ct.object,hn=ct.geometry,tt=ct.material,Oe=ct.group;if(tt.side===fi&&xt.layers.test(j.layers)){const Ft=tt.side;tt.side=cn,tt.needsUpdate=!0,sp(xt,W,j,hn,tt,Oe),tt.side=Ft,tt.needsUpdate=!0,Ve=!0}}Ve===!0&&(R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce))}_.setRenderTarget(be),_.setClearColor(N,O),Be!==void 0&&(j.viewport=Be),_.toneMapping=Ce}function sa(C,k,W){const j=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ce=C.length;B<ce;B++){const _e=C[B],be=_e.object,Ce=_e.geometry,Be=j===null?_e.material:j,Ve=_e.group;be.layers.test(W.layers)&&sp(be,k,W,Ce,Be,Ve)}}function sp(C,k,W,j,B,ce){C.onBeforeRender(_,k,W,j,B,ce),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(_,k,W,j,C,ce),B.transparent===!0&&B.side===fi&&B.forceSinglePass===!1?(B.side=cn,B.needsUpdate=!0,_.renderBufferDirect(W,k,j,B,C,ce),B.side=tr,B.needsUpdate=!0,_.renderBufferDirect(W,k,j,B,C,ce),B.side=fi):_.renderBufferDirect(W,k,j,B,C,ce),C.onAfterRender(_,k,W,j,B,ce)}function oa(C,k,W){k.isScene!==!0&&(k=Me);const j=Ie.get(C),B=p.state.lights,ce=p.state.shadowsArray,_e=B.state.version,be=we.getParameters(C,B.state,ce,k,W),Ce=we.getProgramCacheKey(be);let Be=j.programs;j.environment=C.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(C.isMeshStandardMaterial?z:w).get(C.envMap||j.environment),j.envMapRotation=j.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Be===void 0&&(C.addEventListener("dispose",Ze),Be=new Map,j.programs=Be);let Ve=Be.get(Ce);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===_e)return ap(C,be),Ve}else be.uniforms=we.getUniforms(C),C.onBeforeCompile(be,_),Ve=we.acquireProgram(be,Ce),Be.set(Ce,Ve),j.uniforms=be.uniforms;const De=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(De.clippingPlanes=oe.uniform),ap(C,be),j.needsLights=Xy(C),j.lightsStateVersion=_e,j.needsLights&&(De.ambientLightColor.value=B.state.ambient,De.lightProbe.value=B.state.probe,De.directionalLights.value=B.state.directional,De.directionalLightShadows.value=B.state.directionalShadow,De.spotLights.value=B.state.spot,De.spotLightShadows.value=B.state.spotShadow,De.rectAreaLights.value=B.state.rectArea,De.ltc_1.value=B.state.rectAreaLTC1,De.ltc_2.value=B.state.rectAreaLTC2,De.pointLights.value=B.state.point,De.pointLightShadows.value=B.state.pointShadow,De.hemisphereLights.value=B.state.hemi,De.directionalShadowMap.value=B.state.directionalShadowMap,De.directionalShadowMatrix.value=B.state.directionalShadowMatrix,De.spotShadowMap.value=B.state.spotShadowMap,De.spotLightMatrix.value=B.state.spotLightMatrix,De.spotLightMap.value=B.state.spotLightMap,De.pointShadowMap.value=B.state.pointShadowMap,De.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function op(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=pl.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function ap(C,k){const W=Ie.get(C);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Wy(C,k,W,j,B){k.isScene!==!0&&(k=Me),R.resetTextureUnits();const ce=k.fog,_e=j.isMeshStandardMaterial?k.environment:null,be=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:or,Ce=(j.isMeshStandardMaterial?z:w).get(j.envMap||_e),Be=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!W.morphAttributes.position,rt=!!W.morphAttributes.normal,ct=!!W.morphAttributes.color;let xt=Zi;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(xt=_.toneMapping);const hn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,tt=hn!==void 0?hn.length:0,Oe=Ie.get(j),Ft=p.state.lights;if(X===!0&&(Q===!0||C!==T)){const wn=C===T&&j.id===M;oe.setState(j,C,wn)}let nt=!1;j.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Ft.state.version||Oe.outputColorSpace!==be||B.isBatchedMesh&&Oe.batching===!1||!B.isBatchedMesh&&Oe.batching===!0||B.isBatchedMesh&&Oe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Oe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Oe.instancing===!1||!B.isInstancedMesh&&Oe.instancing===!0||B.isSkinnedMesh&&Oe.skinning===!1||!B.isSkinnedMesh&&Oe.skinning===!0||B.isInstancedMesh&&Oe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Oe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Oe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Oe.instancingMorph===!1&&B.morphTexture!==null||Oe.envMap!==Ce||j.fog===!0&&Oe.fog!==ce||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==oe.numPlanes||Oe.numIntersection!==oe.numIntersection)||Oe.vertexAlphas!==Be||Oe.vertexTangents!==Ve||Oe.morphTargets!==De||Oe.morphNormals!==rt||Oe.morphColors!==ct||Oe.toneMapping!==xt||Oe.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Oe.__version=j.version);let In=Oe.currentProgram;nt===!0&&(In=oa(j,k,B));let zr=!1,pn=!1,Ou=!1;const Et=In.getUniforms(),Ti=Oe.uniforms;if(Pe.useProgram(In.program)&&(zr=!0,pn=!0,Ou=!0),j.id!==M&&(M=j.id,pn=!0),zr||T!==C){Ae.reverseDepthBuffer?(ue.copy(C.projectionMatrix),hw(ue),pw(ue),Et.setValue(D,"projectionMatrix",ue)):Et.setValue(D,"projectionMatrix",C.projectionMatrix),Et.setValue(D,"viewMatrix",C.matrixWorldInverse);const wn=Et.map.cameraPosition;wn!==void 0&&wn.setValue(D,Te.setFromMatrixPosition(C.matrixWorld)),Ae.logarithmicDepthBuffer&&Et.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Et.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,pn=!0,Ou=!0)}if(B.isSkinnedMesh){Et.setOptional(D,B,"bindMatrix"),Et.setOptional(D,B,"bindMatrixInverse");const wn=B.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Et.setValue(D,"boneTexture",wn.boneTexture,R))}B.isBatchedMesh&&(Et.setOptional(D,B,"batchingTexture"),Et.setValue(D,"batchingTexture",B._matricesTexture,R),Et.setOptional(D,B,"batchingIdTexture"),Et.setValue(D,"batchingIdTexture",B._indirectTexture,R),Et.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Et.setValue(D,"batchingColorTexture",B._colorsTexture,R));const Uu=W.morphAttributes;if((Uu.position!==void 0||Uu.normal!==void 0||Uu.color!==void 0)&&ke.update(B,W,In),(pn||Oe.receiveShadow!==B.receiveShadow)&&(Oe.receiveShadow=B.receiveShadow,Et.setValue(D,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ti.envMap.value=Ce,Ti.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(Ti.envMapIntensity.value=k.environmentIntensity),pn&&(Et.setValue(D,"toneMappingExposure",_.toneMappingExposure),Oe.needsLights&&jy(Ti,Ou),ce&&j.fog===!0&&fe.refreshFogUniforms(Ti,ce),fe.refreshMaterialUniforms(Ti,j,H,V,p.state.transmissionRenderTarget[C.id]),pl.upload(D,op(Oe),Ti,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(pl.upload(D,op(Oe),Ti,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Et.setValue(D,"center",B.center),Et.setValue(D,"modelViewMatrix",B.modelViewMatrix),Et.setValue(D,"normalMatrix",B.normalMatrix),Et.setValue(D,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const wn=j.uniformsGroups;for(let Fu=0,qy=wn.length;Fu<qy;Fu++){const lp=wn[Fu];U.update(lp,In),U.bind(lp,In)}}return In}function jy(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Xy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,k,W){Ie.get(C.texture).__webglTexture=k,Ie.get(C.depthTexture).__webglTexture=W;const j=Ie.get(C);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const W=Ie.get(C);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,W=0){b=C,P=k,A=W;let j=!0,B=null,ce=!1,_e=!1;if(C){const Ce=Ie.get(C);if(Ce.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Ce.__webglFramebuffer===void 0)R.setupRenderTarget(C);else if(Ce.__hasExternalTextures)R.rebindTextures(C,Ie.get(C.texture).__webglTexture,Ie.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const De=C.depthTexture;if(Ce.__boundDepthTexture!==De){if(De!==null&&Ie.has(De)&&(C.width!==De.image.width||C.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(C)}}const Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(_e=!0);const Ve=Ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?B=Ve[k][W]:B=Ve[k],ce=!0):C.samples>0&&R.useMultisampledRTT(C)===!1?B=Ie.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?B=Ve[W]:B=Ve,m.copy(C.viewport),S.copy(C.scissor),L=C.scissorTest}else m.copy(J).multiplyScalar(H).floor(),S.copy(ne).multiplyScalar(H).floor(),L=ee;if(Pe.bindFramebuffer(D.FRAMEBUFFER,B)&&j&&Pe.drawBuffers(C,B),Pe.viewport(m),Pe.scissor(S),Pe.setScissorTest(L),ce){const Ce=Ie.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,W)}else if(_e){const Ce=Ie.get(C.texture),Be=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.__webglTexture,W||0,Be)}M=-1},this.readRenderTargetPixels=function(C,k,W,j,B,ce,_e){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){Pe.bindFramebuffer(D.FRAMEBUFFER,be);try{const Ce=C.texture,Be=Ce.format,Ve=Ce.type;if(!Ae.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-j&&W>=0&&W<=C.height-B&&D.readPixels(k,W,j,B,He.convert(Be),He.convert(Ve),ce)}finally{const Ce=b!==null?Ie.get(b).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(C,k,W,j,B,ce,_e){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){const Ce=C.texture,Be=Ce.format,Ve=Ce.type;if(!Ae.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-j&&W>=0&&W<=C.height-B){Pe.bindFramebuffer(D.FRAMEBUFFER,be);const De=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),D.readPixels(k,W,j,B,He.convert(Be),He.convert(Ve),0);const rt=b!==null?Ie.get(b).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,rt);const ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await dw(D,ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(De),D.deleteSync(ct),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,W=0){C.isTexture!==!0&&(hl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const j=Math.pow(2,-W),B=Math.floor(C.image.width*j),ce=Math.floor(C.image.height*j),_e=k!==null?k.x:0,be=k!==null?k.y:0;R.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,_e,be,B,ce),Pe.unbindTexture()},this.copyTextureToTexture=function(C,k,W=null,j=null,B=0){C.isTexture!==!0&&(hl("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1],k=arguments[2],B=arguments[3]||0,W=null);let ce,_e,be,Ce,Be,Ve;W!==null?(ce=W.max.x-W.min.x,_e=W.max.y-W.min.y,be=W.min.x,Ce=W.min.y):(ce=C.image.width,_e=C.image.height,be=0,Ce=0),j!==null?(Be=j.x,Ve=j.y):(Be=0,Ve=0);const De=He.convert(k.format),rt=He.convert(k.type);R.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const ct=D.getParameter(D.UNPACK_ROW_LENGTH),xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hn=D.getParameter(D.UNPACK_SKIP_PIXELS),tt=D.getParameter(D.UNPACK_SKIP_ROWS),Oe=D.getParameter(D.UNPACK_SKIP_IMAGES),Ft=C.isCompressedTexture?C.mipmaps[B]:C.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Be,Ve,ce,_e,De,rt,Ft.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Be,Ve,Ft.width,Ft.height,De,Ft.data):D.texSubImage2D(D.TEXTURE_2D,B,Be,Ve,ce,_e,De,rt,Ft),D.pixelStorei(D.UNPACK_ROW_LENGTH,ct),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe),B===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(C,k,W=null,j=null,B=0){C.isTexture!==!0&&(hl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,j=arguments[1]||null,C=arguments[2],k=arguments[3],B=arguments[4]||0);let ce,_e,be,Ce,Be,Ve,De,rt,ct;const xt=C.isCompressedTexture?C.mipmaps[B]:C.image;W!==null?(ce=W.max.x-W.min.x,_e=W.max.y-W.min.y,be=W.max.z-W.min.z,Ce=W.min.x,Be=W.min.y,Ve=W.min.z):(ce=xt.width,_e=xt.height,be=xt.depth,Ce=0,Be=0,Ve=0),j!==null?(De=j.x,rt=j.y,ct=j.z):(De=0,rt=0,ct=0);const hn=He.convert(k.format),tt=He.convert(k.type);let Oe;if(k.isData3DTexture)R.setTexture3D(k,0),Oe=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),Oe=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Ft=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),In=D.getParameter(D.UNPACK_SKIP_PIXELS),zr=D.getParameter(D.UNPACK_SKIP_ROWS),pn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve),C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Oe,B,De,rt,ct,ce,_e,be,hn,tt,xt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Oe,B,De,rt,ct,ce,_e,be,hn,xt.data):D.texSubImage3D(Oe,B,De,rt,ct,ce,_e,be,hn,tt,xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,In),D.pixelStorei(D.UNPACK_SKIP_ROWS,zr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,pn),B===0&&k.generateMipmaps&&D.generateMipmap(Oe),Pe.unbindTexture()},this.initRenderTarget=function(C){Ie.get(C).__webglFramebuffer===void 0&&R.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),Pe.unbindTexture()},this.resetState=function(){P=0,A=0,b=null,Pe.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Yh?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===wu?"display-p3":"srgb"}}class Y0 extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Zh extends na{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xg=new Tt,Id=new D0,Xa=new Tu,qa=new $;class K0 extends dn{constructor(e=new ti,n=new Zh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=s,e.ray.intersectsSphere(Xa)===!1)return;xg.copy(r).invert(),Id.copy(e.ray).applyMatrix4(xg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=h,x=g;y<x;y++){const p=u.getX(y);qa.fromBufferAttribute(d,p),Sg(qa,p,l,r,e,n,this)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=h,x=g;y<x;y++)qa.fromBufferAttribute(d,y),Sg(qa,y,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sg(t,e,n,i,r,s,o){const a=Id.distanceSqToPoint(t);if(a<n){const l=new $;Id.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);const TA=()=>{const t=te.useRef(null);return te.useEffect(()=>{let e=t.current,n,i,r,s=0;const o=40,a=130,l=35,u=()=>{n=new _n(120,window.innerWidth/window.innerHeight,1,1e3),n.position.y=150,n.position.z=300,n.rotation.x=.35,i=new Y0;const h=a*l;new Array(h);const g=new Zh({color:25777,size:2,opacity:.7}),y=new ti,x=new Float32Array(h*3);let p=0;for(let _=0;_<a;_++)for(let E=0;E<l;E++){const P=_*o-a*o/2,A=E*o-(l*o-10);x[p]=P,x[p+1]=0,x[p+2]=A,p+=3}y.setAttribute("position",new Ln(x,3));const c=new K0(y,g);i.add(c),r=new $0({alpha:!0}),r.setSize(window.innerWidth,window.innerHeight),e.appendChild(r.domElement),window.addEventListener("resize",f);const v=()=>{requestAnimationFrame(v),d(c,y)};v()},f=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)},d=(h,g)=>{const y=g.attributes.position.array;let x=0;for(let p=0;p<a;p++)for(let c=0;c<l;c++)y[x+1]=Math.sin((p+s)*.5)*20+Math.sin((c+s)*.5)*20,x+=3;g.attributes.position.needsUpdate=!0,r.render(i,n),s+=.04};return u(),()=>{for(;e.firstChild;)e.removeChild(e.firstChild);window.removeEventListener("resize",f)}},[]),F.jsx("div",{ref:t,className:"absolute overflow-hidden inset-0 w-full z-[-1] pointer-events-none bg-gradient-radial from-[#21325C26] to-black"})},bA=()=>F.jsxs("div",{className:"relative w-full min-h-screen bg-black  flex flex-col justify-center items-center z-[-1] overflow-hidden",children:[F.jsx("div",{className:"absolute inset-0",children:F.jsx(TA,{})}),F.jsxs("div",{className:"z-10 flex flex-col justify-center items-center text-center",children:[F.jsx(er,{titleText:"HEALTH"}),F.jsx(er,{titleText:"DATA SCIENCE LAB"})]})]}),Au=({title:t,onClick:e})=>{const[n,i]=te.useState(!1),r=()=>i(!0),s=()=>i(!1);return F.jsxs("button",{className:`relative inline-block h-12 px-8 py-2 font-bold uppercase border-2 border-white rounded-full overflow-hidden transition-all duration-300 ease-in-out sm:inline-block ${n?"text-black":"text-white"}`,onClick:e,onMouseEnter:r,onMouseLeave:s,children:[F.jsx("span",{className:"relative z-20",children:t}),F.jsx("span",{className:`absolute inset-0 transition-transform duration-300 ease-in-out bg-white ${n?"translate-y-0":"translate-y-full"}`,style:{zIndex:10}})]})};Au.propTypes={title:Ne.string.isRequired,onClick:Ne.func.isRequired};const Eg="/luberlab.github.io/",CA=[{name:"Dr Jacob Luber",role:"Director, HDSL",imgSrc:Eg+"assets/images/jacob.jpg"},{name:"Helen Shang",role:"Visiting Assistant Professor",imgSrc:Eg+"assets/images/shang.jpeg"}],AA=()=>{const t=Hh(),e=()=>{t("/team")};return F.jsxs("div",{className:"text-center bg-black min-h-screen flex flex-col justify-center items-center",children:[F.jsx(er,{titleText:"TEAM"}),F.jsx("div",{className:"flex flex-wrap justify-center gap-8 py-8",children:CA.map((n,i)=>F.jsxs("div",{className:"flex flex-col items-center max-w-[200px]",children:[F.jsx("img",{src:n.imgSrc,alt:n.name,className:"rounded-[25%] w-full h-[200px] mb-4 object-cover"}),F.jsx("h2",{className:"text-white text-lg font-bold",children:n.name}),F.jsx("p",{className:"text-white text-base",children:n.role})]},i))}),F.jsx(Au,{title:"SEE MORE",onClick:e})]})},RA=()=>{const t=te.useRef(null),e=te.useRef(null),n=te.useRef(null),i=te.useRef(null),r=te.useRef(null);return te.useEffect(()=>{let s;const o=t.current;e.current=new Y0,n.current=new _n(100,window.innerWidth/window.innerHeight,1,1e3),n.current.position.z=400,i.current=new $0({alpha:!0}),i.current.setSize(window.innerWidth,window.innerHeight),o.appendChild(i.current.domElement);const a=1e4,l=new ti,u=new Float32Array(a*3);for(let g=0;g<a;g++)u[g*3]=Math.random()*800-400,u[g*3+1]=Math.random()*800-400,u[g*3+2]=Math.random()*800-400;l.setAttribute("position",new Ln(u,3));const f=new Zh({color:16777215,size:.8,opacity:.2,transparent:!0});r.current=new K0(l,f),e.current.add(r.current);const d=()=>{s=requestAnimationFrame(d),r.current.rotation.x+=.001,r.current.rotation.y+=.002,i.current.render(e.current,n.current)};d();const h=()=>{n.current.aspect=window.innerWidth/window.innerHeight,n.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h),cancelAnimationFrame(s),o.removeChild(i.current.domElement),i.current.dispose()}},[]),F.jsx("div",{ref:t,id:"three-particles",style:{width:"100%",height:"100%"}})},Z0=({title:t,description:e})=>F.jsxs("div",{className:"relative w-[300px] h-[400px] m-6 rounded-lg overflow-hidden flex flex-col justify-end bg-white bg-opacity-10 shadow-[20px_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-[5px] transition-all duration-500 ease-out group",children:[F.jsx(RA,{}),F.jsx("div",{className:"absolute top-3 left-5 z-20",children:F.jsx("h3",{className:"text-white text-2xl font-semibold mb-2",children:t})}),F.jsx("div",{className:"relative z-10 p-5 bg-slate-500 bg-opacity-100 text-center transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0",children:F.jsx("p",{className:"text-white text-base font-light",children:e})})]});Z0.propTypes={title:Ne.string.isRequired,description:Ne.string};const PA=[{title:"HEALTH SYSTEMS AT SCALE",description:"This is some sample description for the research card on the home page to display the text"},{title:"AI FOR MEDICAL IMAGING",description:"This is some sample description for the research card on the home page to display the text"},{title:"COMPUTATIONAL MICROBIOLOGY",description:"This is some sample description for the research card on the home page to display the text"}],LA=()=>{const t=te.useRef(null),[e,n]=te.useState(!1);return te.useEffect(()=>{const i=t.current,r=new IntersectionObserver(s=>{s[0].isIntersecting&&(n(!0),r.disconnect())},{threshold:[.2]});return i&&r.observe(i),()=>{i&&r.disconnect()}},[]),F.jsxs("div",{ref:t,className:"w-full min-h-screen flex flex-col justify-center items-center text-center bg-black ",children:[F.jsx("div",{children:F.jsx(er,{titleText:"OUR RESEARCH"})}),F.jsx("div",{className:`flex flex-wrap justify-center items-center transition-transform duration-800 ease-in-out ${e?"animate-slideUp opacity-100":"opacity-0 translate-y-[100px]"}`,children:PA.map((i,r)=>F.jsx("div",{className:`transition-all transform duration-800 ease-in-out ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-[100px]"} flex-1 min-w-[280px] max-w-[350px] mx-4 my-4`,children:F.jsx(Z0,{title:i.title,description:i.description})},r))})]})};var Q0={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(n,i){t.exports=i()})(co,function n(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},r=!i.document&&!!i.postMessage,s=i.IS_PAPA_WORKER||!1,o={},a=0,l={parse:function(M,T){var m=(T=T||{}).dynamicTyping||!1;if(b(m)&&(T.dynamicTypingFunction=m,m={}),T.dynamicTyping=m,T.transform=!!b(T.transform)&&T.transform,T.worker&&l.WORKERS_SUPPORTED){var S=function(){if(!l.WORKERS_SUPPORTED)return!1;var N=(Z=i.URL||i.webkitURL||null,V=n.toString(),l.BLOB_URL||(l.BLOB_URL=Z.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",V,")();"],{type:"text/javascript"})))),O=new i.Worker(N),Z,V;return O.onmessage=v,O.id=a++,o[O.id]=O}();return S.userStep=T.step,S.userChunk=T.chunk,S.userComplete=T.complete,S.userError=T.error,T.step=b(T.step),T.chunk=b(T.chunk),T.complete=b(T.complete),T.error=b(T.error),delete T.worker,void S.postMessage({input:M,config:T,workerId:S.id})}var L=null;return l.NODE_STREAM_INPUT,typeof M=="string"?(M=function(N){return N.charCodeAt(0)===65279?N.slice(1):N}(M),L=T.download?new d(T):new g(T)):M.readable===!0&&b(M.read)&&b(M.on)?L=new y(T):(i.File&&M instanceof File||M instanceof Object)&&(L=new h(T)),L.stream(M)},unparse:function(M,T){var m=!1,S=!0,L=",",N=`\r
`,O='"',Z=O+O,V=!1,H=null,I=!1;(function(){if(typeof T=="object"){if(typeof T.delimiter!="string"||l.BAD_DELIMITERS.filter(function(ee){return T.delimiter.indexOf(ee)!==-1}).length||(L=T.delimiter),(typeof T.quotes=="boolean"||typeof T.quotes=="function"||Array.isArray(T.quotes))&&(m=T.quotes),typeof T.skipEmptyLines!="boolean"&&typeof T.skipEmptyLines!="string"||(V=T.skipEmptyLines),typeof T.newline=="string"&&(N=T.newline),typeof T.quoteChar=="string"&&(O=T.quoteChar),typeof T.header=="boolean"&&(S=T.header),Array.isArray(T.columns)){if(T.columns.length===0)throw new Error("Option columns is empty");H=T.columns}T.escapeChar!==void 0&&(Z=T.escapeChar+O),(typeof T.escapeFormulae=="boolean"||T.escapeFormulae instanceof RegExp)&&(I=T.escapeFormulae instanceof RegExp?T.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var G=new RegExp(p(O),"g");if(typeof M=="string"&&(M=JSON.parse(M)),Array.isArray(M)){if(!M.length||Array.isArray(M[0]))return J(null,M,V);if(typeof M[0]=="object")return J(H||Object.keys(M[0]),M,V)}else if(typeof M=="object")return typeof M.data=="string"&&(M.data=JSON.parse(M.data)),Array.isArray(M.data)&&(M.fields||(M.fields=M.meta&&M.meta.fields||H),M.fields||(M.fields=Array.isArray(M.data[0])?M.fields:typeof M.data[0]=="object"?Object.keys(M.data[0]):[]),Array.isArray(M.data[0])||typeof M.data[0]=="object"||(M.data=[M.data])),J(M.fields||[],M.data||[],V);throw new Error("Unable to serialize unrecognized input");function J(ee,ye,X){var Q="";typeof ee=="string"&&(ee=JSON.parse(ee)),typeof ye=="string"&&(ye=JSON.parse(ye));var ue=Array.isArray(ee)&&0<ee.length,le=!Array.isArray(ye[0]);if(ue&&S){for(var Te=0;Te<ee.length;Te++)0<Te&&(Q+=L),Q+=ne(ee[Te],Te);0<ye.length&&(Q+=N)}for(var se=0;se<ye.length;se++){var Me=ue?ee.length:ye[se].length,Fe=!1,Ue=ue?Object.keys(ye[se]).length===0:ye[se].length===0;if(X&&!ue&&(Fe=X==="greedy"?ye[se].join("").trim()==="":ye[se].length===1&&ye[se][0].length===0),X==="greedy"&&ue){for(var D=[],et=0;et<Me;et++){var Le=le?ee[et]:et;D.push(ye[se][Le])}Fe=D.join("").trim()===""}if(!Fe){for(var Ae=0;Ae<Me;Ae++){0<Ae&&!Ue&&(Q+=L);var Pe=ue&&le?ee[Ae]:Ae;Q+=ne(ye[se][Pe],Ae)}se<ye.length-1&&(!X||0<Me&&!Ue)&&(Q+=N)}}return Q}function ne(ee,ye){if(ee==null)return"";if(ee.constructor===Date)return JSON.stringify(ee).slice(1,25);var X=!1;I&&typeof ee=="string"&&I.test(ee)&&(ee="'"+ee,X=!0);var Q=ee.toString().replace(G,Z);return(X=X||m===!0||typeof m=="function"&&m(ee,ye)||Array.isArray(m)&&m[ye]||function(ue,le){for(var Te=0;Te<le.length;Te++)if(-1<ue.indexOf(le[Te]))return!0;return!1}(Q,l.BAD_DELIMITERS)||-1<Q.indexOf(L)||Q.charAt(0)===" "||Q.charAt(Q.length-1)===" ")?O+Q+O:Q}}};if(l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!r&&!!i.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=c,l.ParserHandle=x,l.NetworkStreamer=d,l.FileStreamer=h,l.StringStreamer=g,l.ReadableStreamStreamer=y,i.jQuery){var u=i.jQuery;u.fn.parse=function(M){var T=M.config||{},m=[];return this.each(function(N){if(!(u(this).prop("tagName").toUpperCase()==="INPUT"&&u(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var O=0;O<this.files.length;O++)m.push({file:this.files[O],inputElem:this,instanceConfig:u.extend({},T)})}),S(),this;function S(){if(m.length!==0){var N,O,Z,V,H=m[0];if(b(M.before)){var I=M.before(H.file,H.inputElem);if(typeof I=="object"){if(I.action==="abort")return N="AbortError",O=H.file,Z=H.inputElem,V=I.reason,void(b(M.error)&&M.error({name:N},O,Z,V));if(I.action==="skip")return void L();typeof I.config=="object"&&(H.instanceConfig=u.extend(H.instanceConfig,I.config))}else if(I==="skip")return void L()}var G=H.instanceConfig.complete;H.instanceConfig.complete=function(J){b(G)&&G(J,H.file,H.inputElem),L()},l.parse(H.file,H.instanceConfig)}else b(M.complete)&&M.complete()}function L(){m.splice(0,1),S()}}}function f(M){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(T){var m=P(T);m.chunkSize=parseInt(m.chunkSize),T.step||T.chunk||(m.chunkSize=null),this._handle=new x(m),(this._handle.streamer=this)._config=m}).call(this,M),this.parseChunk=function(T,m){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var S=this._config.beforeFirstChunk(T);S!==void 0&&(T=S)}this.isFirstChunk=!1,this._halted=!1;var L=this._partialLine+T;this._partialLine="";var N=this._handle.parse(L,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var O=N.meta.cursor;this._finished||(this._partialLine=L.substring(O-this._baseIndex),this._baseIndex=O),N&&N.data&&(this._rowCount+=N.data.length);var Z=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(s)i.postMessage({results:N,workerId:l.WORKER_ID,finished:Z});else if(b(this._config.chunk)&&!m){if(this._config.chunk(N,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);N=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(N.data),this._completeResults.errors=this._completeResults.errors.concat(N.errors),this._completeResults.meta=N.meta),this._completed||!Z||!b(this._config.complete)||N&&N.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),Z||N&&N.meta.paused||this._nextChunk(),N}this._halted=!0},this._sendError=function(T){b(this._config.error)?this._config.error(T):s&&this._config.error&&i.postMessage({workerId:l.WORKER_ID,error:T,finished:!1})}}function d(M){var T;(M=M||{}).chunkSize||(M.chunkSize=l.RemoteChunkSize),f.call(this,M),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(m){this._input=m,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(T=new XMLHttpRequest,this._config.withCredentials&&(T.withCredentials=this._config.withCredentials),r||(T.onload=A(this._chunkLoaded,this),T.onerror=A(this._chunkError,this)),T.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var m=this._config.downloadRequestHeaders;for(var S in m)T.setRequestHeader(S,m[S])}if(this._config.chunkSize){var L=this._start+this._config.chunkSize-1;T.setRequestHeader("Range","bytes="+this._start+"-"+L)}try{T.send(this._config.downloadRequestBody)}catch(N){this._chunkError(N.message)}r&&T.status===0&&this._chunkError()}},this._chunkLoaded=function(){T.readyState===4&&(T.status<200||400<=T.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:T.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(m){var S=m.getResponseHeader("Content-Range");return S===null?-1:parseInt(S.substring(S.lastIndexOf("/")+1))}(T),this.parseChunk(T.responseText)))},this._chunkError=function(m){var S=T.statusText||m;this._sendError(new Error(S))}}function h(M){var T,m;(M=M||{}).chunkSize||(M.chunkSize=l.LocalChunkSize),f.call(this,M);var S=typeof FileReader<"u";this.stream=function(L){this._input=L,m=L.slice||L.webkitSlice||L.mozSlice,S?((T=new FileReader).onload=A(this._chunkLoaded,this),T.onerror=A(this._chunkError,this)):T=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var L=this._input;if(this._config.chunkSize){var N=Math.min(this._start+this._config.chunkSize,this._input.size);L=m.call(L,this._start,N)}var O=T.readAsText(L,this._config.encoding);S||this._chunkLoaded({target:{result:O}})},this._chunkLoaded=function(L){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(L.target.result)},this._chunkError=function(){this._sendError(T.error)}}function g(M){var T;f.call(this,M=M||{}),this.stream=function(m){return T=m,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var m,S=this._config.chunkSize;return S?(m=T.substring(0,S),T=T.substring(S)):(m=T,T=""),this._finished=!T,this.parseChunk(m)}}}function y(M){f.call(this,M=M||{});var T=[],m=!0,S=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(L){this._input=L,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){S&&T.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),T.length?this.parseChunk(T.shift()):m=!0},this._streamData=A(function(L){try{T.push(typeof L=="string"?L:L.toString(this._config.encoding)),m&&(m=!1,this._checkIsFinished(),this.parseChunk(T.shift()))}catch(N){this._streamError(N)}},this),this._streamError=A(function(L){this._streamCleanUp(),this._sendError(L)},this),this._streamEnd=A(function(){this._streamCleanUp(),S=!0,this._streamData("")},this),this._streamCleanUp=A(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function x(M){var T,m,S,L=Math.pow(2,53),N=-L,O=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Z=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,V=this,H=0,I=0,G=!1,J=!1,ne=[],ee={data:[],errors:[],meta:{}};if(b(M.step)){var ye=M.step;M.step=function(se){if(ee=se,ue())Q();else{if(Q(),ee.data.length===0)return;H+=se.data.length,M.preview&&H>M.preview?m.abort():(ee.data=ee.data[0],ye(ee,V))}}}function X(se){return M.skipEmptyLines==="greedy"?se.join("").trim()==="":se.length===1&&se[0].length===0}function Q(){return ee&&S&&(Te("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),S=!1),M.skipEmptyLines&&(ee.data=ee.data.filter(function(se){return!X(se)})),ue()&&function(){if(!ee)return;function se(Fe,Ue){b(M.transformHeader)&&(Fe=M.transformHeader(Fe,Ue)),ne.push(Fe)}if(Array.isArray(ee.data[0])){for(var Me=0;ue()&&Me<ee.data.length;Me++)ee.data[Me].forEach(se);ee.data.splice(0,1)}else ee.data.forEach(se)}(),function(){if(!ee||!M.header&&!M.dynamicTyping&&!M.transform)return ee;function se(Fe,Ue){var D,et=M.header?{}:[];for(D=0;D<Fe.length;D++){var Le=D,Ae=Fe[D];M.header&&(Le=D>=ne.length?"__parsed_extra":ne[D]),M.transform&&(Ae=M.transform(Ae,Le)),Ae=le(Le,Ae),Le==="__parsed_extra"?(et[Le]=et[Le]||[],et[Le].push(Ae)):et[Le]=Ae}return M.header&&(D>ne.length?Te("FieldMismatch","TooManyFields","Too many fields: expected "+ne.length+" fields but parsed "+D,I+Ue):D<ne.length&&Te("FieldMismatch","TooFewFields","Too few fields: expected "+ne.length+" fields but parsed "+D,I+Ue)),et}var Me=1;return!ee.data.length||Array.isArray(ee.data[0])?(ee.data=ee.data.map(se),Me=ee.data.length):ee.data=se(ee.data,0),M.header&&ee.meta&&(ee.meta.fields=ne),I+=Me,ee}()}function ue(){return M.header&&ne.length===0}function le(se,Me){return Fe=se,M.dynamicTypingFunction&&M.dynamicTyping[Fe]===void 0&&(M.dynamicTyping[Fe]=M.dynamicTypingFunction(Fe)),(M.dynamicTyping[Fe]||M.dynamicTyping)===!0?Me==="true"||Me==="TRUE"||Me!=="false"&&Me!=="FALSE"&&(function(Ue){if(O.test(Ue)){var D=parseFloat(Ue);if(N<D&&D<L)return!0}return!1}(Me)?parseFloat(Me):Z.test(Me)?new Date(Me):Me===""?null:Me):Me;var Fe}function Te(se,Me,Fe,Ue){var D={type:se,code:Me,message:Fe};Ue!==void 0&&(D.row=Ue),ee.errors.push(D)}this.parse=function(se,Me,Fe){var Ue=M.quoteChar||'"';if(M.newline||(M.newline=function(Le,Ae){Le=Le.substring(0,1048576);var Pe=new RegExp(p(Ae)+"([^]*?)"+p(Ae),"gm"),Xe=(Le=Le.replace(Pe,"")).split("\r"),Ie=Le.split(`
`),R=1<Ie.length&&Ie[0].length<Xe[0].length;if(Xe.length===1||R)return`
`;for(var w=0,z=0;z<Xe.length;z++)Xe[z][0]===`
`&&w++;return w>=Xe.length/2?`\r
`:"\r"}(se,Ue)),S=!1,M.delimiter)b(M.delimiter)&&(M.delimiter=M.delimiter(se),ee.meta.delimiter=M.delimiter);else{var D=function(Le,Ae,Pe,Xe,Ie){var R,w,z,Y;Ie=Ie||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var re=0;re<Ie.length;re++){var q=Ie[re],we=0,fe=0,me=0;z=void 0;for(var Ge=new c({comments:Xe,delimiter:q,newline:Ae,preview:10}).parse(Le),oe=0;oe<Ge.data.length;oe++)if(Pe&&X(Ge.data[oe]))me++;else{var ge=Ge.data[oe].length;fe+=ge,z!==void 0?0<ge&&(we+=Math.abs(ge-z),z=ge):z=ge}0<Ge.data.length&&(fe/=Ge.data.length-me),(w===void 0||we<=w)&&(Y===void 0||Y<fe)&&1.99<fe&&(w=we,R=q,Y=fe)}return{successful:!!(M.delimiter=R),bestDelimiter:R}}(se,M.newline,M.skipEmptyLines,M.comments,M.delimitersToGuess);D.successful?M.delimiter=D.bestDelimiter:(S=!0,M.delimiter=l.DefaultDelimiter),ee.meta.delimiter=M.delimiter}var et=P(M);return M.preview&&M.header&&et.preview++,T=se,m=new c(et),ee=m.parse(T,Me,Fe),Q(),G?{meta:{paused:!0}}:ee||{meta:{paused:!1}}},this.paused=function(){return G},this.pause=function(){G=!0,m.abort(),T=b(M.chunk)?"":T.substring(m.getCharIndex())},this.resume=function(){V.streamer._halted?(G=!1,V.streamer.parseChunk(T,!0)):setTimeout(V.resume,3)},this.aborted=function(){return J},this.abort=function(){J=!0,m.abort(),ee.meta.aborted=!0,b(M.complete)&&M.complete(ee),T=""}}function p(M){return M.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function c(M){var T,m=(M=M||{}).delimiter,S=M.newline,L=M.comments,N=M.step,O=M.preview,Z=M.fastMode,V=T=M.quoteChar===void 0||M.quoteChar===null?'"':M.quoteChar;if(M.escapeChar!==void 0&&(V=M.escapeChar),(typeof m!="string"||-1<l.BAD_DELIMITERS.indexOf(m))&&(m=","),L===m)throw new Error("Comment character same as delimiter");L===!0?L="#":(typeof L!="string"||-1<l.BAD_DELIMITERS.indexOf(L))&&(L=!1),S!==`
`&&S!=="\r"&&S!==`\r
`&&(S=`
`);var H=0,I=!1;this.parse=function(G,J,ne){if(typeof G!="string")throw new Error("Input must be a string");var ee=G.length,ye=m.length,X=S.length,Q=L.length,ue=b(N),le=[],Te=[],se=[],Me=H=0;if(!G)return Re();if(M.header&&!J){var Fe=G.split(S)[0].split(m),Ue=[],D={},et=!1;for(var Le in Fe){var Ae=Fe[Le];b(M.transformHeader)&&(Ae=M.transformHeader(Ae,Le));var Pe=Ae,Xe=D[Ae]||0;for(0<Xe&&(et=!0,Pe=Ae+"_"+Xe),D[Ae]=Xe+1;Ue.includes(Pe);)Pe=Pe+"_"+Xe;Ue.push(Pe)}if(et){var Ie=G.split(S);Ie[0]=Ue.join(m),G=Ie.join(S)}}if(Z||Z!==!1&&G.indexOf(T)===-1){for(var R=G.split(S),w=0;w<R.length;w++){if(se=R[w],H+=se.length,w!==R.length-1)H+=S.length;else if(ne)return Re();if(!L||se.substring(0,Q)!==L){if(ue){if(le=[],me(se.split(m)),ke(),I)return Re()}else me(se.split(m));if(O&&O<=w)return le=le.slice(0,O),Re(!0)}}return Re()}for(var z=G.indexOf(m,H),Y=G.indexOf(S,H),re=new RegExp(p(V)+p(T),"g"),q=G.indexOf(T,H);;)if(G[H]!==T)if(L&&se.length===0&&G.substring(H,H+Q)===L){if(Y===-1)return Re();H=Y+X,Y=G.indexOf(S,H),z=G.indexOf(m,H)}else if(z!==-1&&(z<Y||Y===-1))se.push(G.substring(H,z)),H=z+ye,z=G.indexOf(m,H);else{if(Y===-1)break;if(se.push(G.substring(H,Y)),ge(Y+X),ue&&(ke(),I))return Re();if(O&&le.length>=O)return Re(!0)}else for(q=H,H++;;){if((q=G.indexOf(T,q+1))===-1)return ne||Te.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:le.length,index:H}),oe();if(q===ee-1)return oe(G.substring(H,q).replace(re,T));if(T!==V||G[q+1]!==V){if(T===V||q===0||G[q-1]!==V){z!==-1&&z<q+1&&(z=G.indexOf(m,q+1)),Y!==-1&&Y<q+1&&(Y=G.indexOf(S,q+1));var we=Ge(Y===-1?z:Math.min(z,Y));if(G.substr(q+1+we,ye)===m){se.push(G.substring(H,q).replace(re,T)),G[H=q+1+we+ye]!==T&&(q=G.indexOf(T,H)),z=G.indexOf(m,H),Y=G.indexOf(S,H);break}var fe=Ge(Y);if(G.substring(q+1+fe,q+1+fe+X)===S){if(se.push(G.substring(H,q).replace(re,T)),ge(q+1+fe+X),z=G.indexOf(m,H),q=G.indexOf(T,H),ue&&(ke(),I))return Re();if(O&&le.length>=O)return Re(!0);break}Te.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:le.length,index:H}),q++}}else q++}return oe();function me(de){le.push(de),Me=H}function Ge(de){var qe=0;if(de!==-1){var He=G.substring(q+1,de);He&&He.trim()===""&&(qe=He.length)}return qe}function oe(de){return ne||(de===void 0&&(de=G.substring(H)),se.push(de),H=ee,me(se),ue&&ke()),Re()}function ge(de){H=de,me(se),se=[],Y=G.indexOf(S,H)}function Re(de){return{data:le,errors:Te,meta:{delimiter:m,linebreak:S,aborted:I,truncated:!!de,cursor:Me+(J||0)}}}function ke(){N(Re()),le=[],Te=[]}},this.abort=function(){I=!0},this.getCharIndex=function(){return H}}function v(M){var T=M.data,m=o[T.workerId],S=!1;if(T.error)m.userError(T.error,T.file);else if(T.results&&T.results.data){var L={abort:function(){S=!0,_(T.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(b(m.userStep)){for(var N=0;N<T.results.data.length&&(m.userStep({data:T.results.data[N],errors:T.results.errors,meta:T.results.meta},L),!S);N++);delete T.results}else b(m.userChunk)&&(m.userChunk(T.results,L,T.file),delete T.results)}T.finished&&!S&&_(T.workerId,T.results)}function _(M,T){var m=o[M];b(m.userComplete)&&m.userComplete(T),m.terminate(),delete o[M]}function E(){throw new Error("Not implemented.")}function P(M){if(typeof M!="object"||M===null)return M;var T=Array.isArray(M)?[]:{};for(var m in M)T[m]=P(M[m]);return T}function A(M,T){return function(){M.apply(T,arguments)}}function b(M){return typeof M=="function"}return s&&(i.onmessage=function(M){var T=M.data;if(l.WORKER_ID===void 0&&T&&(l.WORKER_ID=T.workerId),typeof T.input=="string")i.postMessage({workerId:l.WORKER_ID,results:l.parse(T.input,T.config),finished:!0});else if(i.File&&T.input instanceof File||T.input instanceof Object){var m=l.parse(T.input,T.config);m&&i.postMessage({workerId:l.WORKER_ID,results:m,finished:!0})}}),(d.prototype=Object.create(f.prototype)).constructor=d,(h.prototype=Object.create(f.prototype)).constructor=h,(g.prototype=Object.create(g.prototype)).constructor=g,(y.prototype=Object.create(f.prototype)).constructor=y,l})})(Q0);var DA=Q0.exports;const J0=iu(DA),NA="/luberlab.github.io/",ey=te.createContext(),ty=({children:t})=>{const[e,n]=te.useState([]);return te.useEffect(()=>{J0.parse(`${NA}assets/news.csv`,{download:!0,header:!0,skipEmptyLines:!0,complete:i=>{const r=i.data.map(s=>({date:s.date,title:s.title,content:s.content,link:s.link||null}));n(r)}})},[]),F.jsx(ey.Provider,{value:e,children:t})};var ny={},iy={},Ru={},ry={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=e})(ry);var IA="Expected a function",Mg=NaN,OA="[object Symbol]",UA=/^\s+|\s+$/g,FA=/^[-+]0x[0-9a-f]+$/i,kA=/^0b[01]+$/i,zA=/^0o[0-7]+$/i,BA=parseInt,HA=typeof co=="object"&&co&&co.Object===Object&&co,VA=typeof self=="object"&&self&&self.Object===Object&&self,GA=HA||VA||Function("return this")(),WA=Object.prototype,jA=WA.toString,XA=Math.max,qA=Math.min,Vc=function(){return GA.Date.now()};function $A(t,e,n){var i,r,s,o,a,l,u=0,f=!1,d=!1,h=!0;if(typeof t!="function")throw new TypeError(IA);e=wg(e)||0,Od(n)&&(f=!!n.leading,d="maxWait"in n,s=d?XA(wg(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h);function g(A){var b=i,M=r;return i=r=void 0,u=A,o=t.apply(M,b),o}function y(A){return u=A,a=setTimeout(c,e),f?g(A):o}function x(A){var b=A-l,M=A-u,T=e-b;return d?qA(T,s-M):T}function p(A){var b=A-l,M=A-u;return l===void 0||b>=e||b<0||d&&M>=s}function c(){var A=Vc();if(p(A))return v(A);a=setTimeout(c,x(A))}function v(A){return a=void 0,h&&i?g(A):(i=r=void 0,o)}function _(){a!==void 0&&clearTimeout(a),u=0,i=l=r=a=void 0}function E(){return a===void 0?o:v(Vc())}function P(){var A=Vc(),b=p(A);if(i=arguments,r=this,l=A,b){if(a===void 0)return y(l);if(d)return a=setTimeout(c,e),g(l)}return a===void 0&&(a=setTimeout(c,e)),o}return P.cancel=_,P.flush=E,P}function Od(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function YA(t){return!!t&&typeof t=="object"}function KA(t){return typeof t=="symbol"||YA(t)&&jA.call(t)==OA}function wg(t){if(typeof t=="number")return t;if(KA(t))return Mg;if(Od(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Od(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(UA,"");var n=kA.test(t);return n||zA.test(t)?BA(t.slice(2),n?2:8):FA.test(t)?Mg:+t}var ZA=$A,sy={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=r(s,i(a)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=r(o,a));return o}function r(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(sy);var Pu=sy.exports,he={},Qh={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(te);function n(r){return r&&r.__esModule?r:{default:r}}var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return e.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return e.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=i})(Qh);Object.defineProperty(he,"__esModule",{value:!0});he.checkSpecKeys=he.checkNavigable=he.changeSlide=he.canUseDOM=he.canGoNext=void 0;he.clamp=ay;he.extractObject=void 0;he.filterSettings=dR;he.validSettings=he.swipeStart=he.swipeMove=he.swipeEnd=he.slidesOnRight=he.slidesOnLeft=he.slideHandler=he.siblingDirection=he.safePreventDefault=he.lazyStartIndex=he.lazySlidesOnRight=he.lazySlidesOnLeft=he.lazyEndIndex=he.keyHandler=he.initializedState=he.getWidth=he.getTrackLeft=he.getTrackCSS=he.getTrackAnimateCSS=he.getTotalSlides=he.getSwipeDirection=he.getSlideCount=he.getRequiredLazySlides=he.getPreClones=he.getPostClones=he.getOnDemandLazySlides=he.getNavigableIndexes=he.getHeight=void 0;var QA=oy(te),JA=oy(Qh);function oy(t){return t&&t.__esModule?t:{default:t}}function Xo(t){"@babel/helpers - typeof";return Xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xo(t)}function Tg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function pt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Tg(Object(n),!0).forEach(function(i){eR(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function eR(t,e,n){return e=tR(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tR(t){var e=nR(t,"string");return Xo(e)=="symbol"?e:String(e)}function nR(t,e){if(Xo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Xo(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ay(t,e,n){return Math.max(e,Math.min(t,n))}var Ms=he.safePreventDefault=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()},ly=he.getOnDemandLazySlides=function(e){for(var n=[],i=uy(e),r=cy(e),s=i;s<r;s++)e.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};he.getRequiredLazySlides=function(e){for(var n=[],i=uy(e),r=cy(e),s=i;s<r;s++)n.push(s);return n};var uy=he.lazyStartIndex=function(e){return e.currentSlide-iR(e)},cy=he.lazyEndIndex=function(e){return e.currentSlide+rR(e)},iR=he.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},rR=he.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},Ud=he.getWidth=function(e){return e&&e.offsetWidth||0},fy=he.getHeight=function(e){return e&&e.offsetHeight||0},dy=he.getSwipeDirection=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i,r,s,o;return i=e.startX-e.curX,r=e.startY-e.curY,s=Math.atan2(r,i),o=Math.round(s*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"},hy=he.canGoNext=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};he.extractObject=function(e,n){var i={};return n.forEach(function(r){return i[r]=e[r]}),i};he.initializedState=function(e){var n=QA.default.Children.count(e.children),i=e.listRef,r=Math.ceil(Ud(i)),s=e.trackRef&&e.trackRef.node,o=Math.ceil(Ud(s)),a;if(e.vertical)a=r;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=r/100),a=Math.ceil((r-l)/e.slidesToShow)}var u=i&&fy(i.querySelector('[data-index="0"]')),f=u*e.slidesToShow,d=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(d=n-1-e.initialSlide);var h=e.lazyLoadedList||[],g=ly(pt(pt({},e),{},{currentSlide:d,lazyLoadedList:h}));h=h.concat(g);var y={slideCount:n,slideWidth:a,listWidth:r,trackWidth:o,currentSlide:d,slideHeight:u,listHeight:f,lazyLoadedList:h};return e.autoplaying===null&&e.autoplay&&(y.autoplaying="playing"),y};he.slideHandler=function(e){var n=e.waitForAnimate,i=e.animating,r=e.fade,s=e.infinite,o=e.index,a=e.slideCount,l=e.lazyLoad,u=e.currentSlide,f=e.centerMode,d=e.slidesToScroll,h=e.slidesToShow,g=e.useCSS,y=e.lazyLoadedList;if(n&&i)return{};var x=o,p,c,v,_={},E={},P=s?o:ay(o,0,a-1);if(r){if(!s&&(o<0||o>=a))return{};o<0?x=o+a:o>=a&&(x=o-a),l&&y.indexOf(x)<0&&(y=y.concat(x)),_={animating:!0,currentSlide:x,lazyLoadedList:y,targetSlide:x},E={animating:!1,targetSlide:x}}else p=x,x<0?(p=x+a,s?a%d!==0&&(p=a-a%d):p=0):!hy(e)&&x>u?x=p=u:f&&x>=a?(x=s?a:a-1,p=s?0:a-1):x>=a&&(p=x-a,s?a%d!==0&&(p=0):p=a-h),!s&&x+h>=a&&(p=a-h),c=ql(pt(pt({},e),{},{slideIndex:x})),v=ql(pt(pt({},e),{},{slideIndex:p})),s||(c===v&&(x=p),c=v),l&&(y=y.concat(ly(pt(pt({},e),{},{currentSlide:x})))),g?(_={animating:!0,currentSlide:p,trackStyle:py(pt(pt({},e),{},{left:c})),lazyLoadedList:y,targetSlide:P},E={animating:!1,currentSlide:p,trackStyle:Xl(pt(pt({},e),{},{left:v})),swipeLeft:null,targetSlide:P}):_={currentSlide:p,trackStyle:Xl(pt(pt({},e),{},{left:v})),lazyLoadedList:y,targetSlide:P};return{state:_,nextState:E}};he.changeSlide=function(e,n){var i,r,s,o,a,l=e.slidesToScroll,u=e.slidesToShow,f=e.slideCount,d=e.currentSlide,h=e.targetSlide,g=e.lazyLoad,y=e.infinite;if(o=f%l!==0,i=o?0:(f-d)%l,n.message==="previous")s=i===0?l:u-i,a=d-s,g&&!y&&(r=d-s,a=r===-1?f-1:r),y||(a=h-l);else if(n.message==="next")s=i===0?l:i,a=d+s,g&&!y&&(a=(d+l)%f+i),y||(a=h+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,y){var x=lR(pt(pt({},e),{},{targetSlide:a}));a>n.currentSlide&&x==="left"?a=a-f:a<n.currentSlide&&x==="right"&&(a=a+f)}}else n.message==="index"&&(a=Number(n.index));return a};he.keyHandler=function(e,n,i){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?i?"next":"previous":e.keyCode===39?i?"previous":"next":""};he.swipeStart=function(e,n,i){return e.target.tagName==="IMG"&&Ms(e),!n||!i&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};he.swipeMove=function(e,n){var i=n.scrolling,r=n.animating,s=n.vertical,o=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,u=n.currentSlide,f=n.edgeFriction,d=n.edgeDragged,h=n.onEdge,g=n.swiped,y=n.swiping,x=n.slideCount,p=n.slidesToScroll,c=n.infinite,v=n.touchObject,_=n.swipeEvent,E=n.listHeight,P=n.listWidth;if(!i){if(r)return Ms(e);s&&o&&a&&Ms(e);var A,b={},M=ql(n);v.curX=e.touches?e.touches[0].pageX:e.clientX,v.curY=e.touches?e.touches[0].pageY:e.clientY,v.swipeLength=Math.round(Math.sqrt(Math.pow(v.curX-v.startX,2)));var T=Math.round(Math.sqrt(Math.pow(v.curY-v.startY,2)));if(!a&&!y&&T>10)return{scrolling:!0};a&&(v.swipeLength=T);var m=(l?-1:1)*(v.curX>v.startX?1:-1);a&&(m=v.curY>v.startY?1:-1);var S=Math.ceil(x/p),L=dy(n.touchObject,a),N=v.swipeLength;return c||(u===0&&(L==="right"||L==="down")||u+1>=S&&(L==="left"||L==="up")||!hy(n)&&(L==="left"||L==="up"))&&(N=v.swipeLength*f,d===!1&&h&&(h(L),b.edgeDragged=!0)),!g&&_&&(_(L),b.swiped=!0),s?A=M+N*(E/P)*m:l?A=M-N*m:A=M+N*m,a&&(A=M+N*m),b=pt(pt({},b),{},{touchObject:v,swipeLeft:A,trackStyle:Xl(pt(pt({},n),{},{left:A}))}),Math.abs(v.curX-v.startX)<Math.abs(v.curY-v.startY)*.8||v.swipeLength>10&&(b.swiping=!0,Ms(e)),b}};he.swipeEnd=function(e,n){var i=n.dragging,r=n.swipe,s=n.touchObject,o=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,f=n.swipeToSlide,d=n.scrolling,h=n.onSwipe,g=n.targetSlide,y=n.currentSlide,x=n.infinite;if(!i)return r&&Ms(e),{};var p=l?u/a:o/a,c=dy(s,l),v={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!s.swipeLength)return v;if(s.swipeLength>p){Ms(e),h&&h(c);var _,E,P=x?y:g;switch(c){case"left":case"up":E=P+Cg(n),_=f?bg(n,E):E,v.currentDirection=0;break;case"right":case"down":E=P-Cg(n),_=f?bg(n,E):E,v.currentDirection=1;break;default:_=P}v.triggerSlideHandler=_}else{var A=ql(n);v.trackStyle=py(pt(pt({},n),{},{left:A}))}return v};var sR=he.getNavigableIndexes=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,i=e.infinite?e.slidesToShow*-1:0,r=e.infinite?e.slidesToShow*-1:0,s=[];i<n;)s.push(i),i=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return s},bg=he.checkNavigable=function(e,n){var i=sR(e),r=0;if(n>i[i.length-1])n=i[i.length-1];else for(var s in i){if(n<i[s]){n=r;break}r=i[s]}return n},Cg=he.getSlideCount=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var i,r=e.listRef,s=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(l){if(e.vertical){if(l.offsetTop+fy(l)/2>e.swipeLeft*-1)return i=l,!1}else if(l.offsetLeft-n+Ud(l)/2>e.swipeLeft*-1)return i=l,!1;return!0}),!i)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(i.dataset.index-o)||1;return a}else return e.slidesToScroll},Jh=he.checkSpecKeys=function(e,n){return n.reduce(function(i,r){return i&&e.hasOwnProperty(r)},!0)?null:console.error("Keys Missing:",e)},Xl=he.getTrackCSS=function(e){Jh(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,i,r=e.slideCount+2*e.slidesToShow;e.vertical?i=r*e.slideHeight:n=aR(e)*e.slideWidth;var s={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";s=pt(pt({},s),{},{WebkitTransform:o,transform:a,msTransform:l})}else e.vertical?s.top=e.left:s.left=e.left;return e.fade&&(s={opacity:1}),n&&(s.width=n),i&&(s.height=i),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?s.marginTop=e.left+"px":s.marginLeft=e.left+"px"),s},py=he.getTrackAnimateCSS=function(e){Jh(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Xl(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n},ql=he.getTrackLeft=function(e){if(e.unslick)return 0;Jh(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,i=e.trackRef,r=e.infinite,s=e.centerMode,o=e.slideCount,a=e.slidesToShow,l=e.slidesToScroll,u=e.slideWidth,f=e.listWidth,d=e.variableWidth,h=e.slideHeight,g=e.fade,y=e.vertical,x=0,p,c,v=0;if(g||e.slideCount===1)return 0;var _=0;if(r?(_=-ml(e),o%l!==0&&n+l>o&&(_=-(n>o?a-(n-o):o%l)),s&&(_+=parseInt(a/2))):(o%l!==0&&n+l>o&&(_=a-o%l),s&&(_=parseInt(a/2))),x=_*u,v=_*h,y?p=n*h*-1+v:p=n*u*-1+x,d===!0){var E,P=i&&i.node;if(E=n+ml(e),c=P&&P.childNodes[E],p=c?c.offsetLeft*-1:0,s===!0){E=r?n+ml(e):n,c=P&&P.children[E],p=0;for(var A=0;A<E;A++)p-=P&&P.children[A]&&P.children[A].offsetWidth;p-=parseInt(e.centerPadding),p+=c&&(f-c.offsetWidth)/2}}return p},ml=he.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},oR=he.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},aR=he.getTotalSlides=function(e){return e.slideCount===1?1:ml(e)+e.slideCount+oR(e)},lR=he.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+uR(e)?"left":"right":e.targetSlide<e.currentSlide-cR(e)?"right":"left"},uR=he.slidesOnRight=function(e){var n=e.slidesToShow,i=e.centerMode,r=e.rtl,s=e.centerPadding;if(i){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),r&&n%2===0&&(o+=1),o}return r?0:n-1},cR=he.slidesOnLeft=function(e){var n=e.slidesToShow,i=e.centerMode,r=e.rtl,s=e.centerPadding;if(i){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),!r&&n%2===0&&(o+=1),o}return r?n-1:0};he.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var fR=he.validSettings=Object.keys(JA.default);function dR(t){return fR.reduce(function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e},{})}var Lu={};Object.defineProperty(Lu,"__esModule",{value:!0});Lu.Track=void 0;var Oi=my(te),Gc=my(Pu),Wc=he;function my(t){return t&&t.__esModule?t:{default:t}}function ks(t){"@babel/helpers - typeof";return ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ks(t)}function Fd(){return Fd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Fd.apply(this,arguments)}function hR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pR(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,vy(i.key),i)}}function mR(t,e,n){return e&&pR(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function gR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&kd(t,e)}function kd(t,e){return kd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},kd(t,e)}function vR(t){var e=gy();return function(){var i=$l(t),r;if(e){var s=$l(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return _R(this,r)}}function _R(t,e){if(e&&(ks(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return zd(t)}function zd(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function gy(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(gy=function(){return!!t})()}function $l(t){return $l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},$l(t)}function Ag(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function nn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ag(Object(n),!0).forEach(function(i){Bd(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ag(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Bd(t,e,n){return e=vy(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vy(t){var e=yR(t,"string");return ks(e)=="symbol"?e:String(e)}function yR(t,e){if(ks(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(ks(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var jc=function(e){var n,i,r,s,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,r=o<0||o>=e.slideCount,e.centerMode?(s=Math.floor(e.slidesToShow/2),i=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-s-1&&o<=e.currentSlide+s&&(n=!0)):n=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var l=o===a;return{"slick-slide":!0,"slick-active":n,"slick-center":i,"slick-cloned":r,"slick-current":l}},xR=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,n.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},Xc=function(e,n){return e.key||n},SR=function(e){var n,i=[],r=[],s=[],o=Oi.default.Children.count(e.children),a=(0,Wc.lazyStartIndex)(e),l=(0,Wc.lazyEndIndex)(e);return Oi.default.Children.forEach(e.children,function(u,f){var d,h={message:"children",index:f,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(f)>=0?d=u:d=Oi.default.createElement("div",null);var g=xR(nn(nn({},e),{},{index:f})),y=d.props.className||"",x=jc(nn(nn({},e),{},{index:f}));if(i.push(Oi.default.cloneElement(d,{key:"original"+Xc(d,f),"data-index":f,className:(0,Gc.default)(x,y),tabIndex:"-1","aria-hidden":!x["slick-active"],style:nn(nn({outline:"none"},d.props.style||{}),g),onClick:function(v){d.props&&d.props.onClick&&d.props.onClick(v),e.focusOnSelect&&e.focusOnSelect(h)}})),e.infinite&&e.fade===!1){var p=o-f;p<=(0,Wc.getPreClones)(e)&&(n=-p,n>=a&&(d=u),x=jc(nn(nn({},e),{},{index:n})),r.push(Oi.default.cloneElement(d,{key:"precloned"+Xc(d,n),"data-index":n,tabIndex:"-1",className:(0,Gc.default)(x,y),"aria-hidden":!x["slick-active"],style:nn(nn({},d.props.style||{}),g),onClick:function(v){d.props&&d.props.onClick&&d.props.onClick(v),e.focusOnSelect&&e.focusOnSelect(h)}}))),n=o+f,n<l&&(d=u),x=jc(nn(nn({},e),{},{index:n})),s.push(Oi.default.cloneElement(d,{key:"postcloned"+Xc(d,n),"data-index":n,tabIndex:"-1",className:(0,Gc.default)(x,y),"aria-hidden":!x["slick-active"],style:nn(nn({},d.props.style||{}),g),onClick:function(v){d.props&&d.props.onClick&&d.props.onClick(v),e.focusOnSelect&&e.focusOnSelect(h)}}))}}),e.rtl?r.concat(i,s).reverse():r.concat(i,s)};Lu.Track=function(t){gR(n,t);var e=vR(n);function n(){var i;hR(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return i=e.call.apply(e,[this].concat(s)),Bd(zd(i),"node",null),Bd(zd(i),"handleRef",function(a){i.node=a}),i}return mR(n,[{key:"render",value:function(){var r=SR(this.props),s=this.props,o=s.onMouseEnter,a=s.onMouseOver,l=s.onMouseLeave,u={onMouseEnter:o,onMouseOver:a,onMouseLeave:l};return Oi.default.createElement("div",Fd({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),r)}}]),n}(Oi.default.PureComponent);var Du={};function zs(t){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zs(t)}Object.defineProperty(Du,"__esModule",{value:!0});Du.Dots=void 0;var $a=_y(te),ER=_y(Pu),Rg=he;function _y(t){return t&&t.__esModule?t:{default:t}}function Pg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function MR(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pg(Object(n),!0).forEach(function(i){wR(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function wR(t,e,n){return e=yy(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function TR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bR(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,yy(i.key),i)}}function CR(t,e,n){return e&&bR(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function yy(t){var e=AR(t,"string");return zs(e)=="symbol"?e:String(e)}function AR(t,e){if(zs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(zs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function RR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Hd(t,e)}function Hd(t,e){return Hd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Hd(t,e)}function PR(t){var e=xy();return function(){var i=Yl(t),r;if(e){var s=Yl(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return LR(this,r)}}function LR(t,e){if(e&&(zs(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return DR(t)}function DR(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function xy(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xy=function(){return!!t})()}function Yl(t){return Yl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Yl(t)}var NR=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n};Du.Dots=function(t){RR(n,t);var e=PR(n);function n(){return TR(this,n),e.apply(this,arguments)}return CR(n,[{key:"clickHandler",value:function(r,s){s.preventDefault(),this.props.clickHandler(r)}},{key:"render",value:function(){for(var r=this.props,s=r.onMouseEnter,o=r.onMouseOver,a=r.onMouseLeave,l=r.infinite,u=r.slidesToScroll,f=r.slidesToShow,d=r.slideCount,h=r.currentSlide,g=NR({slideCount:d,slidesToScroll:u,slidesToShow:f,infinite:l}),y={onMouseEnter:s,onMouseOver:o,onMouseLeave:a},x=[],p=0;p<g;p++){var c=(p+1)*u-1,v=l?c:(0,Rg.clamp)(c,0,d-1),_=v-(u-1),E=l?_:(0,Rg.clamp)(_,0,d-1),P=(0,ER.default)({"slick-active":l?h>=E&&h<=v:h===E}),A={message:"dots",index:p,slidesToScroll:u,currentSlide:h},b=this.clickHandler.bind(this,A);x=x.concat($a.default.createElement("li",{key:p,className:P},$a.default.cloneElement(this.props.customPaging(p),{onClick:b})))}return $a.default.cloneElement(this.props.appendDots(x),MR({className:this.props.dotsClass},y))}}]),n}($a.default.PureComponent);var Bs={};function Hs(t){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hs(t)}Object.defineProperty(Bs,"__esModule",{value:!0});Bs.PrevArrow=Bs.NextArrow=void 0;var ws=Ey(te),Sy=Ey(Pu),IR=he;function Ey(t){return t&&t.__esModule?t:{default:t}}function Kl(){return Kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Kl.apply(this,arguments)}function Lg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Zl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Lg(Object(n),!0).forEach(function(i){OR(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Lg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function OR(t,e,n){return e=Ty(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function My(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function UR(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Ty(i.key),i)}}function wy(t,e,n){return e&&UR(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ty(t){var e=FR(t,"string");return Hs(e)=="symbol"?e:String(e)}function FR(t,e){if(Hs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Hs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function by(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Vd(t,e)}function Vd(t,e){return Vd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Vd(t,e)}function Cy(t){var e=Ay();return function(){var i=Ql(t),r;if(e){var s=Ql(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return kR(this,r)}}function kR(t,e){if(e&&(Hs(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return zR(t)}function zR(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ay(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ay=function(){return!!t})()}function Ql(t){return Ql=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ql(t)}Bs.PrevArrow=function(t){by(n,t);var e=Cy(n);function n(){return My(this,n),e.apply(this,arguments)}return wy(n,[{key:"clickHandler",value:function(r,s){s&&s.preventDefault(),this.props.clickHandler(r,s)}},{key:"render",value:function(){var r={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(r["slick-disabled"]=!0,s=null);var o={key:"0","data-role":"none",className:(0,Sy.default)(r),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=ws.default.cloneElement(this.props.prevArrow,Zl(Zl({},o),a)):l=ws.default.createElement("button",Kl({key:"0",type:"button"},o)," ","Previous"),l}}]),n}(ws.default.PureComponent);Bs.NextArrow=function(t){by(n,t);var e=Cy(n);function n(){return My(this,n),e.apply(this,arguments)}return wy(n,[{key:"clickHandler",value:function(r,s){s&&s.preventDefault(),this.props.clickHandler(r,s)}},{key:"render",value:function(){var r={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,IR.canGoNext)(this.props)||(r["slick-disabled"]=!0,s=null);var o={key:"1","data-role":"none",className:(0,Sy.default)(r),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=ws.default.cloneElement(this.props.nextArrow,Zl(Zl({},o),a)):l=ws.default.createElement("button",Kl({key:"1",type:"button"},o)," ","Next"),l}}]),n}(ws.default.PureComponent);var Ry=function(){if(typeof Map<"u")return Map;function t(e,n){var i=-1;return e.some(function(r,s){return r[0]===n?(i=s,!0):!1}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var i=t(this.__entries__,n),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(n,i){var r=t(this.__entries__,n);~r?this.__entries__[r][1]=i:this.__entries__.push([n,i])},e.prototype.delete=function(n){var i=this.__entries__,r=t(i,n);~r&&i.splice(r,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,i){i===void 0&&(i=null);for(var r=0,s=this.__entries__;r<s.length;r++){var o=s[r];n.call(i,o[1],o[0])}},e}()}(),Gd=typeof window<"u"&&typeof document<"u"&&window.document===document,Jl=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),BR=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Jl):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),HR=2;function VR(t,e){var n=!1,i=!1,r=0;function s(){n&&(n=!1,t()),i&&a()}function o(){BR(s)}function a(){var l=Date.now();if(n){if(l-r<HR)return;i=!0}else n=!0,i=!1,setTimeout(o,e);r=l}return a}var GR=20,WR=["top","right","bottom","left","width","height","size","weight"],jR=typeof MutationObserver<"u",XR=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=VR(this.refresh.bind(this),GR)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,i=n.indexOf(e);~i&&n.splice(i,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!Gd||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),jR?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Gd||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,i=n===void 0?"":n,r=WR.some(function(s){return!!~i.indexOf(s)});r&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Py=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},Vs=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||Jl},Ly=Nu(0,0,0,0);function eu(t){return parseFloat(t)||0}function Dg(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(i,r){var s=t["border-"+r+"-width"];return i+eu(s)},0)}function qR(t){for(var e=["top","right","bottom","left"],n={},i=0,r=e;i<r.length;i++){var s=r[i],o=t["padding-"+s];n[s]=eu(o)}return n}function $R(t){var e=t.getBBox();return Nu(0,0,e.width,e.height)}function YR(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return Ly;var i=Vs(t).getComputedStyle(t),r=qR(i),s=r.left+r.right,o=r.top+r.bottom,a=eu(i.width),l=eu(i.height);if(i.boxSizing==="border-box"&&(Math.round(a+s)!==e&&(a-=Dg(i,"left","right")+s),Math.round(l+o)!==n&&(l-=Dg(i,"top","bottom")+o)),!ZR(t)){var u=Math.round(a+s)-e,f=Math.round(l+o)-n;Math.abs(u)!==1&&(a-=u),Math.abs(f)!==1&&(l-=f)}return Nu(r.left,r.top,a,l)}var KR=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof Vs(t).SVGGraphicsElement}:function(t){return t instanceof Vs(t).SVGElement&&typeof t.getBBox=="function"}}();function ZR(t){return t===Vs(t).document.documentElement}function QR(t){return Gd?KR(t)?$R(t):YR(t):Ly}function JR(t){var e=t.x,n=t.y,i=t.width,r=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return Py(o,{x:e,y:n,width:i,height:r,top:n,right:e+i,bottom:r+n,left:e}),o}function Nu(t,e,n,i){return{x:t,y:e,width:n,height:i}}var eP=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Nu(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=QR(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),tP=function(){function t(e,n){var i=JR(n);Py(this,{target:e,contentRect:i})}return t}(),nP=function(){function t(e,n,i){if(this.activeObservations_=[],this.observations_=new Ry,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=i}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Vs(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new eP(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Vs(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(i){return new tP(i.target,i.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),Dy=typeof WeakMap<"u"?new WeakMap:new Ry,Ny=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=XR.getInstance(),i=new nP(e,n,this);Dy.set(this,i)}return t}();["observe","unobserve","disconnect"].forEach(function(t){Ny.prototype[t]=function(){var e;return(e=Dy.get(this))[t].apply(e,arguments)}});var iP=function(){return typeof Jl.ResizeObserver<"u"?Jl.ResizeObserver:Ny}();const rP=Object.freeze(Object.defineProperty({__proto__:null,default:iP},Symbol.toStringTag,{value:"Module"})),sP=Yy(rP);Object.defineProperty(Ru,"__esModule",{value:!0});Ru.InnerSlider=void 0;var qt=ra(te),oP=ra(ry),aP=ra(ZA),lP=ra(Pu),gt=he,uP=Lu,cP=Du,Ng=Bs,fP=ra(sP);function ra(t){return t&&t.__esModule?t:{default:t}}function Ur(t){"@babel/helpers - typeof";return Ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ur(t)}function tu(){return tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},tu.apply(this,arguments)}function dP(t,e){if(t==null)return{};var n=hP(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function hP(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ig(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function ze(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ig(Object(n),!0).forEach(function(i){Ye(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ig(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function pP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mP(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Oy(i.key),i)}}function gP(t,e,n){return e&&mP(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function vP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Wd(t,e)}function Wd(t,e){return Wd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Wd(t,e)}function _P(t){var e=Iy();return function(){var i=nu(t),r;if(e){var s=nu(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return yP(this,r)}}function yP(t,e){if(e&&(Ur(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $e(t)}function $e(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Iy(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Iy=function(){return!!t})()}function nu(t){return nu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},nu(t)}function Ye(t,e,n){return e=Oy(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Oy(t){var e=xP(t,"string");return Ur(e)=="symbol"?e:String(e)}function xP(t,e){if(Ur(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Ur(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}Ru.InnerSlider=function(t){vP(n,t);var e=_P(n);function n(i){var r;pP(this,n),r=e.call(this,i),Ye($e(r),"listRefHandler",function(o){return r.list=o}),Ye($e(r),"trackRefHandler",function(o){return r.track=o}),Ye($e(r),"adaptHeight",function(){if(r.props.adaptiveHeight&&r.list){var o=r.list.querySelector('[data-index="'.concat(r.state.currentSlide,'"]'));r.list.style.height=(0,gt.getHeight)(o)+"px"}}),Ye($e(r),"componentDidMount",function(){if(r.props.onInit&&r.props.onInit(),r.props.lazyLoad){var o=(0,gt.getOnDemandLazySlides)(ze(ze({},r.props),r.state));o.length>0&&(r.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),r.props.onLazyLoad&&r.props.onLazyLoad(o))}var a=ze({listRef:r.list,trackRef:r.track},r.props);r.updateState(a,!0,function(){r.adaptHeight(),r.props.autoplay&&r.autoPlay("update")}),r.props.lazyLoad==="progressive"&&(r.lazyLoadTimer=setInterval(r.progressiveLazyLoad,1e3)),r.ro=new fP.default(function(){r.state.animating?(r.onWindowResized(!1),r.callbackTimers.push(setTimeout(function(){return r.onWindowResized()},r.props.speed))):r.onWindowResized()}),r.ro.observe(r.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=r.props.pauseOnFocus?r.onSlideFocus:null,l.onblur=r.props.pauseOnFocus?r.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",r.onWindowResized):window.attachEvent("onresize",r.onWindowResized)}),Ye($e(r),"componentWillUnmount",function(){r.animationEndCallback&&clearTimeout(r.animationEndCallback),r.lazyLoadTimer&&clearInterval(r.lazyLoadTimer),r.callbackTimers.length&&(r.callbackTimers.forEach(function(o){return clearTimeout(o)}),r.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",r.onWindowResized):window.detachEvent("onresize",r.onWindowResized),r.autoplayTimer&&clearInterval(r.autoplayTimer),r.ro.disconnect()}),Ye($e(r),"componentDidUpdate",function(o){if(r.checkImagesLoad(),r.props.onReInit&&r.props.onReInit(),r.props.lazyLoad){var a=(0,gt.getOnDemandLazySlides)(ze(ze({},r.props),r.state));a.length>0&&(r.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(a)}}),r.props.onLazyLoad&&r.props.onLazyLoad(a))}r.adaptHeight();var l=ze(ze({listRef:r.list,trackRef:r.track},r.props),r.state),u=r.didPropsChange(o);u&&r.updateState(l,u,function(){r.state.currentSlide>=qt.default.Children.count(r.props.children)&&r.changeSlide({message:"index",index:qt.default.Children.count(r.props.children)-r.props.slidesToShow,currentSlide:r.state.currentSlide}),r.props.autoplay?r.autoPlay("update"):r.pause("paused")})}),Ye($e(r),"onWindowResized",function(o){r.debouncedResize&&r.debouncedResize.cancel(),r.debouncedResize=(0,aP.default)(function(){return r.resizeWindow(o)},50),r.debouncedResize()}),Ye($e(r),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(r.track&&r.track.node);if(a){var l=ze(ze({listRef:r.list,trackRef:r.track},r.props),r.state);r.updateState(l,o,function(){r.props.autoplay?r.autoPlay("update"):r.pause("paused")}),r.setState({animating:!1}),clearTimeout(r.animationEndCallback),delete r.animationEndCallback}}),Ye($e(r),"updateState",function(o,a,l){var u=(0,gt.initializedState)(o);o=ze(ze(ze({},o),u),{},{slideIndex:u.currentSlide});var f=(0,gt.getTrackLeft)(o);o=ze(ze({},o),{},{left:f});var d=(0,gt.getTrackCSS)(o);(a||qt.default.Children.count(r.props.children)!==qt.default.Children.count(o.children))&&(u.trackStyle=d),r.setState(u,l)}),Ye($e(r),"ssrInit",function(){if(r.props.variableWidth){var o=0,a=0,l=[],u=(0,gt.getPreClones)(ze(ze(ze({},r.props),r.state),{},{slideCount:r.props.children.length})),f=(0,gt.getPostClones)(ze(ze(ze({},r.props),r.state),{},{slideCount:r.props.children.length}));r.props.children.forEach(function(b){l.push(b.props.style.width),o+=b.props.style.width});for(var d=0;d<u;d++)a+=l[l.length-1-d],o+=l[l.length-1-d];for(var h=0;h<f;h++)o+=l[h];for(var g=0;g<r.state.currentSlide;g++)a+=l[g];var y={width:o+"px",left:-a+"px"};if(r.props.centerMode){var x="".concat(l[r.state.currentSlide],"px");y.left="calc(".concat(y.left," + (100% - ").concat(x,") / 2 ) ")}return{trackStyle:y}}var p=qt.default.Children.count(r.props.children),c=ze(ze(ze({},r.props),r.state),{},{slideCount:p}),v=(0,gt.getPreClones)(c)+(0,gt.getPostClones)(c)+p,_=100/r.props.slidesToShow*v,E=100/v,P=-E*((0,gt.getPreClones)(c)+r.state.currentSlide)*_/100;r.props.centerMode&&(P+=(100-E*_/100)/2);var A={width:_+"%",left:P+"%"};return{slideWidth:E+"%",trackStyle:A}}),Ye($e(r),"checkImagesLoad",function(){var o=r.list&&r.list.querySelectorAll&&r.list.querySelectorAll(".slick-slide img")||[],a=o.length,l=0;Array.prototype.forEach.call(o,function(u){var f=function(){return++l&&l>=a&&r.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(h){d(h),u.parentNode.focus()}}u.onload||(r.props.lazyLoad?u.onload=function(){r.adaptHeight(),r.callbackTimers.push(setTimeout(r.onWindowResized,r.props.speed))}:(u.onload=f,u.onerror=function(){f(),r.props.onLazyLoadError&&r.props.onLazyLoadError()}))})}),Ye($e(r),"progressiveLazyLoad",function(){for(var o=[],a=ze(ze({},r.props),r.state),l=r.state.currentSlide;l<r.state.slideCount+(0,gt.getPostClones)(a);l++)if(r.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var u=r.state.currentSlide-1;u>=-(0,gt.getPreClones)(a);u--)if(r.state.lazyLoadedList.indexOf(u)<0){o.push(u);break}o.length>0?(r.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(o)}}),r.props.onLazyLoad&&r.props.onLazyLoad(o)):r.lazyLoadTimer&&(clearInterval(r.lazyLoadTimer),delete r.lazyLoadTimer)}),Ye($e(r),"slideHandler",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=r.props,u=l.asNavFor,f=l.beforeChange,d=l.onLazyLoad,h=l.speed,g=l.afterChange,y=r.state.currentSlide,x=(0,gt.slideHandler)(ze(ze(ze({index:o},r.props),r.state),{},{trackRef:r.track,useCSS:r.props.useCSS&&!a})),p=x.state,c=x.nextState;if(p){f&&f(y,p.currentSlide);var v=p.lazyLoadedList.filter(function(_){return r.state.lazyLoadedList.indexOf(_)<0});d&&v.length>0&&d(v),!r.props.waitForAnimate&&r.animationEndCallback&&(clearTimeout(r.animationEndCallback),g&&g(y),delete r.animationEndCallback),r.setState(p,function(){u&&r.asNavForIndex!==o&&(r.asNavForIndex=o,u.innerSlider.slideHandler(o)),c&&(r.animationEndCallback=setTimeout(function(){var _=c.animating,E=dP(c,["animating"]);r.setState(E,function(){r.callbackTimers.push(setTimeout(function(){return r.setState({animating:_})},10)),g&&g(p.currentSlide),delete r.animationEndCallback})},h))})}}),Ye($e(r),"changeSlide",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=ze(ze({},r.props),r.state),u=(0,gt.changeSlide)(l,o);if(!(u!==0&&!u)&&(a===!0?r.slideHandler(u,a):r.slideHandler(u),r.props.autoplay&&r.autoPlay("update"),r.props.focusOnSelect)){var f=r.list.querySelectorAll(".slick-current");f[0]&&f[0].focus()}}),Ye($e(r),"clickHandler",function(o){r.clickable===!1&&(o.stopPropagation(),o.preventDefault()),r.clickable=!0}),Ye($e(r),"keyHandler",function(o){var a=(0,gt.keyHandler)(o,r.props.accessibility,r.props.rtl);a!==""&&r.changeSlide({message:a})}),Ye($e(r),"selectHandler",function(o){r.changeSlide(o)}),Ye($e(r),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),Ye($e(r),"enableBodyScroll",function(){window.ontouchmove=null}),Ye($e(r),"swipeStart",function(o){r.props.verticalSwiping&&r.disableBodyScroll();var a=(0,gt.swipeStart)(o,r.props.swipe,r.props.draggable);a!==""&&r.setState(a)}),Ye($e(r),"swipeMove",function(o){var a=(0,gt.swipeMove)(o,ze(ze(ze({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));a&&(a.swiping&&(r.clickable=!1),r.setState(a))}),Ye($e(r),"swipeEnd",function(o){var a=(0,gt.swipeEnd)(o,ze(ze(ze({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));if(a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,r.setState(a),l!==void 0&&(r.slideHandler(l),r.props.verticalSwiping&&r.enableBodyScroll())}}),Ye($e(r),"touchEnd",function(o){r.swipeEnd(o),r.clickable=!0}),Ye($e(r),"slickPrev",function(){r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"previous"})},0))}),Ye($e(r),"slickNext",function(){r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"next"})},0))}),Ye($e(r),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"index",index:o,currentSlide:r.state.currentSlide},a)},0))}),Ye($e(r),"play",function(){var o;if(r.props.rtl)o=r.state.currentSlide-r.props.slidesToScroll;else if((0,gt.canGoNext)(ze(ze({},r.props),r.state)))o=r.state.currentSlide+r.props.slidesToScroll;else return!1;r.slideHandler(o)}),Ye($e(r),"autoPlay",function(o){r.autoplayTimer&&clearInterval(r.autoplayTimer);var a=r.state.autoplaying;if(o==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(o==="leave"){if(a==="paused"||a==="focused")return}else if(o==="blur"&&(a==="paused"||a==="hovered"))return;r.autoplayTimer=setInterval(r.play,r.props.autoplaySpeed+50),r.setState({autoplaying:"playing"})}),Ye($e(r),"pause",function(o){r.autoplayTimer&&(clearInterval(r.autoplayTimer),r.autoplayTimer=null);var a=r.state.autoplaying;o==="paused"?r.setState({autoplaying:"paused"}):o==="focused"?(a==="hovered"||a==="playing")&&r.setState({autoplaying:"focused"}):a==="playing"&&r.setState({autoplaying:"hovered"})}),Ye($e(r),"onDotsOver",function(){return r.props.autoplay&&r.pause("hovered")}),Ye($e(r),"onDotsLeave",function(){return r.props.autoplay&&r.state.autoplaying==="hovered"&&r.autoPlay("leave")}),Ye($e(r),"onTrackOver",function(){return r.props.autoplay&&r.pause("hovered")}),Ye($e(r),"onTrackLeave",function(){return r.props.autoplay&&r.state.autoplaying==="hovered"&&r.autoPlay("leave")}),Ye($e(r),"onSlideFocus",function(){return r.props.autoplay&&r.pause("focused")}),Ye($e(r),"onSlideBlur",function(){return r.props.autoplay&&r.state.autoplaying==="focused"&&r.autoPlay("blur")}),Ye($e(r),"render",function(){var o=(0,lP.default)("slick-slider",r.props.className,{"slick-vertical":r.props.vertical,"slick-initialized":!0}),a=ze(ze({},r.props),r.state),l=(0,gt.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=r.props.pauseOnHover;l=ze(ze({},l),{},{onMouseEnter:u?r.onTrackOver:null,onMouseLeave:u?r.onTrackLeave:null,onMouseOver:u?r.onTrackOver:null,focusOnSelect:r.props.focusOnSelect&&r.clickable?r.selectHandler:null});var f;if(r.props.dots===!0&&r.state.slideCount>=r.props.slidesToShow){var d=(0,gt.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),h=r.props.pauseOnDotsHover;d=ze(ze({},d),{},{clickHandler:r.changeSlide,onMouseEnter:h?r.onDotsLeave:null,onMouseOver:h?r.onDotsOver:null,onMouseLeave:h?r.onDotsLeave:null}),f=qt.default.createElement(cP.Dots,d)}var g,y,x=(0,gt.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);x.clickHandler=r.changeSlide,r.props.arrows&&(g=qt.default.createElement(Ng.PrevArrow,x),y=qt.default.createElement(Ng.NextArrow,x));var p=null;r.props.vertical&&(p={height:r.state.listHeight});var c=null;r.props.vertical===!1?r.props.centerMode===!0&&(c={padding:"0px "+r.props.centerPadding}):r.props.centerMode===!0&&(c={padding:r.props.centerPadding+" 0px"});var v=ze(ze({},p),c),_=r.props.touchMove,E={className:"slick-list",style:v,onClick:r.clickHandler,onMouseDown:_?r.swipeStart:null,onMouseMove:r.state.dragging&&_?r.swipeMove:null,onMouseUp:_?r.swipeEnd:null,onMouseLeave:r.state.dragging&&_?r.swipeEnd:null,onTouchStart:_?r.swipeStart:null,onTouchMove:r.state.dragging&&_?r.swipeMove:null,onTouchEnd:_?r.touchEnd:null,onTouchCancel:r.state.dragging&&_?r.swipeEnd:null,onKeyDown:r.props.accessibility?r.keyHandler:null},P={className:o,dir:"ltr",style:r.props.style};return r.props.unslick&&(E={className:"slick-list"},P={className:o}),qt.default.createElement("div",P,r.props.unslick?"":g,qt.default.createElement("div",tu({ref:r.listRefHandler},E),qt.default.createElement(uP.Track,tu({ref:r.trackRefHandler},l),r.props.children)),r.props.unslick?"":y,r.props.unslick?"":f)}),r.list=null,r.track=null,r.state=ze(ze({},oP.default),{},{currentSlide:r.props.initialSlide,targetSlide:r.props.initialSlide?r.props.initialSlide:0,slideCount:qt.default.Children.count(r.props.children)}),r.callbackTimers=[],r.clickable=!0,r.debouncedResize=null;var s=r.ssrInit();return r.state=ze(ze({},r.state),s),r}return gP(n,[{key:"didPropsChange",value:function(r){for(var s=!1,o=0,a=Object.keys(this.props);o<a.length;o++){var l=a[o];if(!r.hasOwnProperty(l)){s=!0;break}if(!(Ur(r[l])==="object"||typeof r[l]=="function"||isNaN(r[l]))&&r[l]!==this.props[l]){s=!0;break}}return s||qt.default.Children.count(this.props.children)!==qt.default.Children.count(r.children)}}]),n}(qt.default.Component);var SP=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},EP=SP,MP=EP,wP=function(t){var e=/[height|width]$/;return e.test(t)},Og=function(t){var e="",n=Object.keys(t);return n.forEach(function(i,r){var s=t[i];i=MP(i),wP(i)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=i:s===!1?e+="not "+i:e+="("+i+": "+s+")",r<n.length-1&&(e+=" and ")}),e},TP=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,i){e+=Og(n),i<t.length-1&&(e+=", ")}),e):Og(t)},bP=TP,qc,Ug;function CP(){if(Ug)return qc;Ug=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},qc=t,qc}var $c,Fg;function Uy(){if(Fg)return $c;Fg=1;function t(i,r){var s=0,o=i.length,a;for(s;s<o&&(a=r(i[s],s),a!==!1);s++);}function e(i){return Object.prototype.toString.apply(i)==="[object Array]"}function n(i){return typeof i=="function"}return $c={isFunction:n,isArray:e,each:t},$c}var Yc,kg;function AP(){if(kg)return Yc;kg=1;var t=CP(),e=Uy().each;function n(i,r){this.query=i,this.isUnconditional=r,this.handlers=[],this.mql=window.matchMedia(i);var s=this;this.listener=function(o){s.mql=o.currentTarget||o,s.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(i){var r=new t(i);this.handlers.push(r),this.matches()&&r.on()},removeHandler:function(i){var r=this.handlers;e(r,function(s,o){if(s.equals(i))return s.destroy(),!r.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(i){i.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var i=this.matches()?"on":"off";e(this.handlers,function(r){r[i]()})}},Yc=n,Yc}var Kc,zg;function RP(){if(zg)return Kc;zg=1;var t=AP(),e=Uy(),n=e.each,i=e.isFunction,r=e.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(o,a,l){var u=this.queries,f=l&&this.browserIsIncapable;return u[o]||(u[o]=new t(o,f)),i(a)&&(a={match:a}),r(a)||(a=[a]),n(a,function(d){i(d)&&(d={match:d}),u[o].addHandler(d)}),this},unregister:function(o,a){var l=this.queries[o];return l&&(a?l.removeHandler(a):(l.clear(),delete this.queries[o])),this}},Kc=s,Kc}var Zc,Bg;function PP(){if(Bg)return Zc;Bg=1;var t=RP();return Zc=new t,Zc}(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o(te),n=Ru,i=o(bP),r=o(Qh),s=he;function o(T){return T&&T.__esModule?T:{default:T}}function a(T){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},a(T)}function l(){return l=Object.assign?Object.assign.bind():function(T){for(var m=1;m<arguments.length;m++){var S=arguments[m];for(var L in S)Object.prototype.hasOwnProperty.call(S,L)&&(T[L]=S[L])}return T},l.apply(this,arguments)}function u(T,m){var S=Object.keys(T);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(T);m&&(L=L.filter(function(N){return Object.getOwnPropertyDescriptor(T,N).enumerable})),S.push.apply(S,L)}return S}function f(T){for(var m=1;m<arguments.length;m++){var S=arguments[m]!=null?arguments[m]:{};m%2?u(Object(S),!0).forEach(function(L){P(T,L,S[L])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(S)):u(Object(S)).forEach(function(L){Object.defineProperty(T,L,Object.getOwnPropertyDescriptor(S,L))})}return T}function d(T,m){if(!(T instanceof m))throw new TypeError("Cannot call a class as a function")}function h(T,m){for(var S=0;S<m.length;S++){var L=m[S];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(T,A(L.key),L)}}function g(T,m,S){return m&&h(T.prototype,m),Object.defineProperty(T,"prototype",{writable:!1}),T}function y(T,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(m&&m.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),m&&x(T,m)}function x(T,m){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(L,N){return L.__proto__=N,L},x(T,m)}function p(T){var m=_();return function(){var L=E(T),N;if(m){var O=E(this).constructor;N=Reflect.construct(L,arguments,O)}else N=L.apply(this,arguments);return c(this,N)}}function c(T,m){if(m&&(a(m)==="object"||typeof m=="function"))return m;if(m!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(T)}function v(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function _(){try{var T=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_=function(){return!!T})()}function E(T){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(S){return S.__proto__||Object.getPrototypeOf(S)},E(T)}function P(T,m,S){return m=A(m),m in T?Object.defineProperty(T,m,{value:S,enumerable:!0,configurable:!0,writable:!0}):T[m]=S,T}function A(T){var m=b(T,"string");return a(m)=="symbol"?m:String(m)}function b(T,m){if(a(T)!="object"||!T)return T;var S=T[Symbol.toPrimitive];if(S!==void 0){var L=S.call(T,m||"default");if(a(L)!="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(T)}var M=(0,s.canUseDOM)()&&PP();t.default=function(T){y(S,T);var m=p(S);function S(L){var N;return d(this,S),N=m.call(this,L),P(v(N),"innerSliderRefHandler",function(O){return N.innerSlider=O}),P(v(N),"slickPrev",function(){return N.innerSlider.slickPrev()}),P(v(N),"slickNext",function(){return N.innerSlider.slickNext()}),P(v(N),"slickGoTo",function(O){var Z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return N.innerSlider.slickGoTo(O,Z)}),P(v(N),"slickPause",function(){return N.innerSlider.pause("paused")}),P(v(N),"slickPlay",function(){return N.innerSlider.autoPlay("play")}),N.state={breakpoint:null},N._responsiveMediaHandlers=[],N}return g(S,[{key:"media",value:function(N,O){M.register(N,O),this._responsiveMediaHandlers.push({query:N,handler:O})}},{key:"componentDidMount",value:function(){var N=this;if(this.props.responsive){var O=this.props.responsive.map(function(V){return V.breakpoint});O.sort(function(V,H){return V-H}),O.forEach(function(V,H){var I;H===0?I=(0,i.default)({minWidth:0,maxWidth:V}):I=(0,i.default)({minWidth:O[H-1]+1,maxWidth:V}),(0,s.canUseDOM)()&&N.media(I,function(){N.setState({breakpoint:V})})});var Z=(0,i.default)({minWidth:O.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(Z,function(){N.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(N){M.unregister(N.query,N.handler)})}},{key:"render",value:function(){var N=this,O,Z;this.state.breakpoint?(Z=this.props.responsive.filter(function(Q){return Q.breakpoint===N.state.breakpoint}),O=Z[0].settings==="unslick"?"unslick":f(f(f({},r.default),this.props),Z[0].settings)):O=f(f({},r.default),this.props),O.centerMode&&(O.slidesToScroll>1,O.slidesToScroll=1),O.fade&&(O.slidesToShow>1,O.slidesToScroll>1,O.slidesToShow=1,O.slidesToScroll=1);var V=e.default.Children.toArray(this.props.children);V=V.filter(function(Q){return typeof Q=="string"?!!Q.trim():!!Q}),O.variableWidth&&(O.rows>1||O.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),O.variableWidth=!1);for(var H=[],I=null,G=0;G<V.length;G+=O.rows*O.slidesPerRow){for(var J=[],ne=G;ne<G+O.rows*O.slidesPerRow;ne+=O.slidesPerRow){for(var ee=[],ye=ne;ye<ne+O.slidesPerRow&&(O.variableWidth&&V[ye].props.style&&(I=V[ye].props.style.width),!(ye>=V.length));ye+=1)ee.push(e.default.cloneElement(V[ye],{key:100*G+10*ne+ye,tabIndex:-1,style:{width:"".concat(100/O.slidesPerRow,"%"),display:"inline-block"}}));J.push(e.default.createElement("div",{key:10*G+ne},ee))}O.variableWidth?H.push(e.default.createElement("div",{key:G,style:{width:I}},J)):H.push(e.default.createElement("div",{key:G},J))}if(O==="unslick"){var X="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:X},V)}else H.length<=O.slidesToShow&&!O.infinite&&(O.unslick=!0);return e.default.createElement(n.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(O)),H)}}]),S}(e.default.Component)})(iy);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(iy);function n(i){return i&&i.__esModule?i:{default:i}}t.default=e.default})(ny);const Hg=iu(ny),Fy=()=>te.useContext(ey),jd=({title:t,date:e,content:n,link:i})=>F.jsxs("div",{className:"bg-[#1d1b1b] text-white rounded-lg p-5 flex flex-col justify-between h-[300px] mx-5 my-5",children:[F.jsxs("div",{className:"mb-2",children:[F.jsx("h3",{className:"text-xl font-bold uppercase text-white mb-1",children:t.toUpperCase()}),F.jsx("p",{className:"text-sm text-gray-400",children:e.toUpperCase()})]}),F.jsx("div",{className:"bg-[#131212] border border-[#2c2c2c] p-4 rounded-lg flex-grow overflow-y-hidden",children:F.jsx("p",{className:"text-white text-base leading-relaxed",children:n.toUpperCase()})}),i&&F.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"bg-blue-500 text-white py-2 px-3 rounded-md text-sm mt-3 transition-colors duration-300 hover:bg-blue-700",children:"Read More"})]});jd.propTypes={title:Ne.string.isRequired,date:Ne.string.isRequired,content:Ne.string.isRequired,link:Ne.string};const LP=()=>{const[t,e]=te.useState({width:void 0,height:void 0});return te.useEffect(()=>{const n=()=>{e({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),t},DP=()=>{const t=Fy(),{width:e}=LP(),n=Hh(),i=()=>{n("/news")},r=t.sort((f,d)=>new Date(d.date)-new Date(f.date)),s=r.slice(0,5),o=r.slice(5,10),l={dots:!1,infinite:!0,speed:8e3,slidesToShow:e<768?1:e<1200?2:3,slidesToScroll:.5,autoplay:!0,autoplaySpeed:0,cssEase:"linear",pauseOnHover:!1,arrows:!1},u={...l,rtl:!0};return F.jsxs("div",{className:" bg-black py-10 px-4 min-h-screen max-w-full",children:[F.jsx(er,{titleText:"LAB NEWS"}),F.jsx("div",{className:"my-5",children:F.jsx(Hg,{...l,children:s.map((f,d)=>F.jsx("div",{className:"flex justify-center",children:F.jsx(jd,{title:f.title,date:f.date,content:f.content,link:f.link})},d))})}),F.jsx("div",{className:"my-5",children:F.jsx(Hg,{...u,children:o.map((f,d)=>F.jsx("div",{className:"flex justify-center",children:F.jsx(jd,{title:f.title,date:f.date,content:f.content,link:f.link})},d))})}),F.jsx("div",{className:"flex justify-center mt-8",children:F.jsx(Au,{title:"SEE MORE",onClick:i})})]})},ep=({color:t="bg-blue-500",height:e="h-1"})=>{const[n,i]=te.useState(0),r=()=>{const s=window.scrollY,o=window.innerHeight,a=document.body.scrollHeight-o,l=s/a*100;i(l)};return te.useEffect(()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)),[]),F.jsx("div",{className:`fixed top-0 left-0 ${e} ${t} z-50`,style:{width:`${n}%`}})},NP=()=>F.jsxs("div",{className:"flex flex-col m-0 overflow-x-hidden ",children:[F.jsx(ep,{}),F.jsx(bA,{}),F.jsx(LA,{}),F.jsx(SM,{}),F.jsx(ty,{children:F.jsx(DP,{})}),F.jsx(AA,{})]}),IP=()=>{const t=Fy();return F.jsxs("div",{className:"bg-black text-white min-h-screen py-16",children:[F.jsx(ep,{}),F.jsxs("section",{className:"mb-12 text-center",children:[F.jsx(er,{titleText:"LAB NEWS"}),F.jsx("p",{className:"text-xl text-gray-400 max-w-2xl mx-auto mt-4",children:"Stay updated with the latest news, achievements, and milestones from our lab."})]}),F.jsx("section",{className:"grid gap-8 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto",children:t.map((e,n)=>F.jsx(ky,{news:e},n))})]})},ky=({news:t})=>{const[e,n]=te.useState(!1),i=()=>{n(r=>!r)};return F.jsxs("div",{className:"bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300",children:[F.jsx("div",{className:"h-40 bg-gray-700 flex items-center justify-center",children:F.jsx("img",{src:"src/assets/sample.jpg",alt:t.title,className:"h-full w-full object-cover"})}),F.jsxs("div",{className:"p-6",children:[F.jsx("p",{className:"text-sm text-blue-400 font-semibold mb-2",children:t.date}),F.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.title}),F.jsx("p",{className:"text-gray-300 mb-4",children:e?t.content:`${t.content.substring(0,100)}...`}),F.jsx("button",{onClick:i,className:"text-blue-400 hover:underline focus:outline-none",children:e?"Show Less":"Read More"})]})]})};ky.propTypes={news:Ne.shape({date:Ne.string.isRequired,title:Ne.string.isRequired,content:Ne.string.isRequired,link:Ne.string}).isRequired};const zy=({sortOrder:t,setSortOrder:e,filterVisibility:n,toggleFilterSectionVisibility:i})=>F.jsxs("div",{className:"mb-4 flex flex-col",children:[F.jsxs("h4",{className:"border-b-2 border-black pb-2 cursor-pointer flex justify-between items-center",onClick:()=>i("sort"),children:[F.jsx("span",{className:"font-bold",children:"Sort By"}),F.jsx("span",{className:"cursor-pointer",children:n.sort?"-":"+"})]}),n.sort&&F.jsxs("div",{className:"mt-2",children:[F.jsx("div",{className:`cursor-pointer py-2 hover:underline ${t==="desc"?"text-[#0064b1] font-bold":""}`,onClick:()=>e("desc"),children:"Newest"}),F.jsx("div",{className:`cursor-pointer py-2 hover:underline ${t==="asc"?"text-[#0064b1] font-bold":""}`,onClick:()=>e("asc"),children:"Oldest"})]})]});zy.propTypes={sortOrder:Ne.string.isRequired,setSortOrder:Ne.func.isRequired,filterVisibility:Ne.shape({sort:Ne.bool.isRequired,type:Ne.bool.isRequired,year:Ne.bool.isRequired,field:Ne.bool.isRequired}).isRequired,toggleFilterSectionVisibility:Ne.func.isRequired};const By=({data:t,selectedType:e,setSelectedType:n,filterVisibility:i,toggleFilterSectionVisibility:r})=>{const s=Array.from(new Set(t.map(a=>a.Paper))).filter(a=>!/\s/.test(a));s.sort((a,l)=>a.length-l.length);const o=a=>{let l=[];a==="All"?l=[]:e.includes(a)?l=e.filter(u=>u!==a):l=[...e,a],n(l)};return F.jsxs("div",{className:"my-4",children:[F.jsxs("h4",{className:"flex justify-between cursor-pointer mb-2 border-b-2 border-black",onClick:()=>r("type"),children:[F.jsx("span",{className:"font-bold",children:"Type"}),F.jsx("span",{children:i.type?"-":"+"})]}),i.type&&F.jsxs(F.Fragment,{children:[F.jsx("div",{className:`cursor-pointer hover:underline ${e.length===0?"text-blue-600":"text-gray-800"}`,onClick:()=>o("All"),children:"All"}),s.map(a=>F.jsx("div",{className:`cursor-pointer hover:underline ${e.includes(a)?"text-blue-600":"text-gray-800"}`,onClick:()=>o(a),children:a},a))]})]})};By.propTypes={data:Ne.array.isRequired,selectedType:Ne.array.isRequired,setSelectedType:Ne.func.isRequired,filterVisibility:Ne.shape({sort:Ne.bool.isRequired,type:Ne.bool.isRequired,year:Ne.bool.isRequired,field:Ne.bool.isRequired}).isRequired,toggleFilterSectionVisibility:Ne.func.isRequired};const Hy=({data:t,selectedYears:e,setSelectedYears:n,filterVisibility:i,toggleFilterSectionVisibility:r})=>{const s=Array.from(new Set(t.map(a=>a.Year))).filter(a=>a),o=a=>{if(a==="All")n([]);else{const l=e.includes(a)?e.filter(u=>u!==a):[...e,a];n(l)}};return F.jsxs("div",{className:"my-4",children:[F.jsxs("h4",{className:"flex justify-between cursor-pointer mb-2 border-b-2 border-black",onClick:()=>r("year"),children:[F.jsx("span",{className:"font-bold",children:"Year"}),F.jsx("span",{children:i.year?"-":"+"})]}),i.year&&F.jsxs(F.Fragment,{children:[F.jsx("div",{className:`cursor-pointer hover:underline ${e.length===0?"text-blue-600":"text-gray-800"}`,onClick:()=>o("All"),children:"All"}),s.map(a=>F.jsx("div",{className:`cursor-pointer hover:underline ${e.includes(a)?"text-blue-600":"text-gray-800"}`,onClick:()=>o(a),children:a},a))]})]})};Hy.propTypes={data:Ne.array.isRequired,selectedYears:Ne.array.isRequired,setSelectedYears:Ne.func.isRequired,filterVisibility:Ne.shape({sort:Ne.bool.isRequired,type:Ne.bool.isRequired,year:Ne.bool.isRequired,field:Ne.bool.isRequired}).isRequired,toggleFilterSectionVisibility:Ne.func.isRequired};const Vy=({data:t,selectedField:e,setSelectedField:n,filterVisibility:i,toggleFilterSectionVisibility:r})=>{const s=Array.from(new Set(t.map(a=>a.Field))).filter(a=>a),o=a=>{const l=e.includes(a)?e.filter(u=>u!==a):[...e,a];n(l)};return F.jsxs("div",{className:"my-4",children:[F.jsxs("h4",{className:"flex justify-between cursor-pointer mb-2 border-b-2 border-black",onClick:()=>r("field"),children:[F.jsx("span",{className:"font-bold",children:"Field"}),F.jsx("span",{children:i.field?"-":"+"})]}),i.field&&F.jsx(F.Fragment,{children:s.map(a=>F.jsx("div",{className:`cursor-pointer hover:underline ${e.includes(a)?"text-blue-600":"text-gray-800"}`,onClick:()=>o(a),children:a},a))})]})};Vy.propTypes={data:Ne.array.isRequired,selectedField:Ne.array.isRequired,setSelectedField:Ne.func.isRequired,filterVisibility:Ne.shape({sort:Ne.bool.isRequired,type:Ne.bool.isRequired,year:Ne.bool.isRequired,field:Ne.bool.isRequired}).isRequired,toggleFilterSectionVisibility:Ne.func.isRequired};const OP="/luberlab.github.io/",UP=()=>{const[t,e]=te.useState([]),[n,i]=te.useState(""),[r,s]=te.useState(""),[o,a]=te.useState([]),[l,u]=te.useState([]),[f,d]=te.useState([]),[h,g]=te.useState(!1),[y,x]=te.useState({sort:!1,type:!0,year:!1,field:!1});te.useEffect(()=>{fetch(`${OP}assets/research.csv`).then(A=>A.text()).then(A=>{J0.parse(A,{header:!0,skipEmptyLines:!0,complete:b=>{e(b.data)}})});const E=window.matchMedia("(max-width: 768px)");g(!1);const P=()=>{g(!1)};return E.addEventListener("change",P),()=>{E.removeEventListener("change",P)}},[]);const p=()=>{g(E=>!E)},c=E=>{x(P=>({...P,[E]:!P[E]}))},_=[...t.filter(E=>E.Title.toLowerCase().includes(n.toLowerCase())).filter(E=>o.length>0?o.includes(E.Field):!0).filter(E=>l.length>0?l.includes(E.Year):!0).filter(E=>f.length>0?f.includes(E.Paper):!0)].sort((E,P)=>r==="asc"?E.Year.localeCompare(P.Year):r==="desc"?P.Year.localeCompare(E.Year):0);return F.jsxs("div",{className:"flex flex-col md:flex-row gap-4 p-0",children:[F.jsxs("div",{className:`md:w-1/4 bg-white md:block fixed md:relative top-0 left-0 w-full z-10 transition-transform duration-300 ${h?"translate-x-0":"-translate-x-full"} md:translate-x-0 h-full md:h-auto md:py-0 py-6 px-4`,children:[F.jsxs("div",{className:"flex justify-between items-center mb-4 md:hidden",children:[F.jsx("span",{className:"text-lg font-semibold",children:"Filters"}),F.jsx("button",{className:"text-lg font-semibold",onClick:p,children:"× "})]}),F.jsxs("div",{className:"filters space-y-6",children:[F.jsx("div",{className:"search-bar",children:F.jsx("input",{type:"text",placeholder:"Search papers by title",value:n,onChange:E=>i(E.target.value),className:"w-full px-4 py-2 border rounded-md text-black"})}),F.jsx(zy,{sortOrder:r,setSortOrder:s,filterVisibility:y,toggleFilterSectionVisibility:c}),F.jsx(By,{data:t,selectedType:f,setSelectedType:d,filterVisibility:y,toggleFilterSectionVisibility:c}),F.jsx(Hy,{data:t,selectedYears:l,setSelectedYears:u,filterVisibility:y,toggleFilterSectionVisibility:c}),F.jsx(Vy,{data:t,selectedField:o,setSelectedField:a,filterVisibility:y,toggleFilterSectionVisibility:c})]})]}),F.jsxs("div",{className:"md:flex-1 w-full",children:[F.jsx("div",{className:"filter-toggle cursor-pointer py-2 text-lg text-black md:hidden",onClick:p,children:h?F.jsx("span",{children:"– Hide Filters"}):F.jsx("span",{children:"+ Show Filters"})}),F.jsx("div",{className:"paper-container space-y-6 w-full",children:_.length>0?_.map((E,P)=>F.jsxs("div",{className:"bg-white p-4 md:p-6 border-b border-gray-200",children:[F.jsxs("div",{className:"meta text-gray-500 space-x-4 mb-2 text-sm",children:[F.jsx("span",{className:"font-semibold text-black",children:E.Paper}),F.jsx("span",{className:"text-[#0064b1]",children:E.Field}),F.jsx("span",{children:E.Year})]}),F.jsx("h2",{className:"name text-black font-semibold text-xl mb-1 leading-tight",children:F.jsx("a",{href:E.Link,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:E.Title})}),F.jsx("p",{className:"authors text-gray-600 text-sm",children:Object.keys(E).slice(5).map(A=>E[A]).join(", ")})]},P)):F.jsx("p",{className:"text-center text-gray-600",children:"No papers found"})})]})]})},FP=()=>F.jsx("div",{className:"w-full py-4 mb-6 border-b-2 border-black",children:F.jsx("h2",{className:"font-bold text-4xl text-black text-left px-4 sm:px-6 lg:px-8",children:"All Research"})}),kP=()=>F.jsxs("div",{className:"bg-white min-h-screen flex justify-center items-center",children:[F.jsx(ep,{}),F.jsxs("div",{className:"w-[75%] max-w-7xl",children:[F.jsx(FP,{}),F.jsx(UP,{})]})]}),Gy=({isOpen:t,onClose:e,menuItems:n,onMenuItemClick:i})=>{const[r,s]=te.useState(!1),o=()=>{s(!0),setTimeout(()=>{e(),s(!1)},500)},a=l=>{s(!0),setTimeout(()=>{i(l),s(!1)},500)};return!t&&!r?null:F.jsxs("div",{className:`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col justify-center items-start z-[9998] ${r?"animate-slideDown":"animate-slideUp"}`,children:[F.jsx("div",{className:"absolute top-4 right-5 w-12 h-12 flex justify-center items-center bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-800 rounded-full cursor-pointer z-[9999] transition-colors duration-300",onClick:o,children:"✖"}),F.jsx("ul",{className:"flex flex-col items-center justify-center w-full",children:n.map((l,u)=>F.jsxs("li",{className:"relative cursor-pointer text-3xl font-extrabold mb-8 overflow-hidden","data-text":l.label,onClick:()=>a(l.path),children:[F.jsx("span",{className:"absolute top-full left-0 w-full transition-all duration-500 animate-buttonSlide","aria-hidden":"true",children:l.label}),F.jsx("span",{className:"relative",children:l.label}),F.jsx("span",{className:"absolute top-0 left-0 w-full transition-all duration-500 animate-buttonHide","aria-hidden":"true",children:l.label})]},u))})]})};Gy.propTypes={isOpen:Ne.bool.isRequired,onClose:Ne.func.isRequired,menuItems:Ne.arrayOf(Ne.shape({label:Ne.string.isRequired,path:Ne.string.isRequired})).isRequired,onMenuItemClick:Ne.func.isRequired};const zP=()=>{const[t,e]=te.useState(!1),[n,i]=te.useState(!0),r=Hh();te.useEffect(()=>{const u=setTimeout(()=>{i(!1)},1e3);return()=>clearTimeout(u)},[]);const s=()=>{e(!t)},o=u=>{e(!1),i(!0),r(u),setTimeout(()=>{i(!1)},1e3)},a=()=>{r("/contact")},l=[{label:"HOME",path:"/"},{label:"RESEARCH",path:"/research"},{label:"PUBLICATIONS",path:"/publications"},{label:"NEWS",path:"/news"},{label:"TEAMS",path:"/team"},{label:"JOIN US",path:"/contact"}];return F.jsxs(F.Fragment,{children:[F.jsx("div",{className:`w-full h-[70px] flex justify-center items-center relative z-10 bg-black transition-all duration-1000 ${n?"animate-navbarSlideDown":""}`,children:F.jsxs("div",{className:"w-full flex justify-between items-center px-5 h-[5vh] relative",children:[F.jsx("div",{}),F.jsxs("div",{className:"absolute left-1/2 transform -translate-x-1/2 grid grid-cols-2 gap-2 cursor-pointer transition-transform duration-300 mt-4 hover:rotate-45",onClick:s,children:[F.jsx("div",{className:"w-[5px] h-[5px] bg-white rounded-full"}),F.jsx("div",{className:"w-[5px] h-[5px] bg-white rounded-full"}),F.jsx("div",{className:"w-[5px] h-[5px] bg-white rounded-full"}),F.jsx("div",{className:"w-[5px] h-[5px] bg-white rounded-full"})]}),F.jsx("div",{className:"absolute right-5 hidden sm:block",children:F.jsx(Au,{title:"Contact Now",onClick:a})})]})}),F.jsx(Gy,{isOpen:t,onClose:s,menuItems:l,onMenuItemClick:o})]})},BP=te.createContext(),HP=({children:t})=>{const[e,n]=te.useState(()=>{const i=localStorage.getItem("selectedMember");return i?JSON.parse(i):null});return te.useEffect(()=>{e?localStorage.setItem("selectedMember",JSON.stringify(e)):localStorage.removeItem("selectedMember")},[e]),F.jsx(BP.Provider,{value:{selectedMember:e,setSelectedMember:n},children:t})};function VP(){return F.jsxs(mM,{basename:"/luberlab.github.io/",children:[F.jsx(zP,{}),F.jsx(HP,{children:F.jsxs(dM,{children:[F.jsx(al,{path:"/",element:F.jsx(NP,{})}),F.jsx(al,{path:"/news",element:F.jsx(ty,{children:F.jsx(IP,{})})}),F.jsx(al,{path:"/publications",element:F.jsx(kP,{})})]})})]})}e0(document.getElementById("root")).render(F.jsx(te.StrictMode,{children:F.jsx(VP,{})}));

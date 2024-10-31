function TM(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function AM(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var q_={exports:{}},Ec={},Y_={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zs=Symbol.for("react.element"),CM=Symbol.for("react.portal"),RM=Symbol.for("react.fragment"),PM=Symbol.for("react.strict_mode"),LM=Symbol.for("react.profiler"),NM=Symbol.for("react.provider"),IM=Symbol.for("react.context"),DM=Symbol.for("react.forward_ref"),OM=Symbol.for("react.suspense"),UM=Symbol.for("react.memo"),kM=Symbol.for("react.lazy"),Ag=Symbol.iterator;function FM(t){return t===null||typeof t!="object"?null:(t=Ag&&t[Ag]||t["@@iterator"],typeof t=="function"?t:null)}var K_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q_=Object.assign,Z_={};function Ua(t,e,n){this.props=t,this.context=e,this.refs=Z_,this.updater=n||K_}Ua.prototype.isReactComponent={};Ua.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ua.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function J_(){}J_.prototype=Ua.prototype;function qp(t,e,n){this.props=t,this.context=e,this.refs=Z_,this.updater=n||K_}var Yp=qp.prototype=new J_;Yp.constructor=qp;Q_(Yp,Ua.prototype);Yp.isPureReactComponent=!0;var Cg=Array.isArray,ey=Object.prototype.hasOwnProperty,Kp={current:null},ty={key:!0,ref:!0,__self:!0,__source:!0};function ny(t,e,n){var i,r={},o=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)ey.call(e,i)&&!ty.hasOwnProperty(i)&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:Zs,type:t,key:o,ref:a,props:r,_owner:Kp.current}}function zM(t,e){return{$$typeof:Zs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zs}function BM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rg=/\/+/g;function cf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BM(""+t.key):e.toString(36)}function iu(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Zs:case CM:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+cf(a,0):i,Cg(r)?(n="",t!=null&&(n=t.replace(Rg,"$&/")+"/"),iu(r,e,n,"",function(u){return u})):r!=null&&(Qp(r)&&(r=zM(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Rg,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Cg(t))for(var s=0;s<t.length;s++){o=t[s];var l=i+cf(o,s);a+=iu(o,e,n,l,r)}else if(l=FM(t),typeof l=="function")for(t=l.call(t),s=0;!(o=t.next()).done;)o=o.value,l=i+cf(o,s++),a+=iu(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function pl(t,e,n){if(t==null)return t;var i=[],r=0;return iu(t,i,"","",function(o){return e.call(n,o,r++)}),i}function HM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},ru={transition:null},VM={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:ru,ReactCurrentOwner:Kp};function iy(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:pl,forEach:function(t,e,n){pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pl(t,function(){e++}),e},toArray:function(t){return pl(t,function(e){return e})||[]},only:function(t){if(!Qp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=Ua;Ze.Fragment=RM;Ze.Profiler=LM;Ze.PureComponent=qp;Ze.StrictMode=PM;Ze.Suspense=OM;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VM;Ze.act=iy;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Q_({},t.props),r=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=Kp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)ey.call(e,l)&&!ty.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:Zs,type:t.type,key:r,ref:o,props:i,_owner:a}};Ze.createContext=function(t){return t={$$typeof:IM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NM,_context:t},t.Consumer=t};Ze.createElement=ny;Ze.createFactory=function(t){var e=ny.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:DM,render:t}};Ze.isValidElement=Qp;Ze.lazy=function(t){return{$$typeof:kM,_payload:{_status:-1,_result:t},_init:HM}};Ze.memo=function(t,e){return{$$typeof:UM,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=ru.transition;ru.transition={};try{t()}finally{ru.transition=e}};Ze.unstable_act=iy;Ze.useCallback=function(t,e){return sn.current.useCallback(t,e)};Ze.useContext=function(t){return sn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return sn.current.useEffect(t,e)};Ze.useId=function(){return sn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return sn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Ze.useRef=function(t){return sn.current.useRef(t)};Ze.useState=function(t){return sn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return sn.current.useTransition()};Ze.version="18.3.1";Y_.exports=Ze;var J=Y_.exports;const Zp=Sc(J),GM=TM({__proto__:null,default:Zp},[J]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WM=J,jM=Symbol.for("react.element"),XM=Symbol.for("react.fragment"),$M=Object.prototype.hasOwnProperty,qM=WM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YM={key:!0,ref:!0,__self:!0,__source:!0};function ry(t,e,n){var i,r={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)$M.call(e,i)&&!YM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:jM,type:t,key:o,ref:a,props:r,_owner:qM.current}}Ec.Fragment=XM;Ec.jsx=ry;Ec.jsxs=ry;q_.exports=Ec;var L=q_.exports,oy={exports:{}},Dn={},ay={exports:{}},sy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,G){var te=O.length;O.push(G);e:for(;0<te;){var ie=te-1>>>1,ne=O[ie];if(0<r(ne,G))O[ie]=G,O[te]=ne,te=ie;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var G=O[0],te=O.pop();if(te!==G){O[0]=te;e:for(var ie=0,ne=O.length,xe=ne>>>1;ie<xe;){var $=2*(ie+1)-1,ee=O[$],ce=$+1,ue=O[ce];if(0>r(ee,te))ce<ne&&0>r(ue,ee)?(O[ie]=ue,O[ce]=te,ie=ce):(O[ie]=ee,O[$]=te,ie=$);else if(ce<ne&&0>r(ue,te))O[ie]=ue,O[ce]=te,ie=ce;else break e}}return G}function r(O,G){var te=O.sortIndex-G.sortIndex;return te!==0?te:O.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var G=n(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=O)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function E(O){if(x=!1,y(O),!_)if(n(l)!==null)_=!0,V(R);else{var G=n(u);G!==null&&H(E,G.startTime-O)}}function R(O,G){_=!1,x&&(x=!1,d(M),M=-1),m=!0;var te=h;try{for(y(G),f=n(l);f!==null&&(!(f.expirationTime>G)||O&&!S());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,h=f.priorityLevel;var ne=ie(f.expirationTime<=G);G=t.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(l)&&i(l),y(G)}else i(l);f=n(l)}if(f!==null)var xe=!0;else{var $=n(u);$!==null&&H(E,$.startTime-G),xe=!1}return xe}finally{f=null,h=te,m=!1}}var C=!1,T=null,M=-1,b=5,v=-1;function S(){return!(t.unstable_now()-v<b)}function N(){if(T!==null){var O=t.unstable_now();v=O;var G=!0;try{G=T(!0,O)}finally{G?D():(C=!1,T=null)}}else C=!1}var D;if(typeof g=="function")D=function(){g(N)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,Z=U.port2;U.port1.onmessage=N,D=function(){Z.postMessage(null)}}else D=function(){p(N,0)};function V(O){T=O,C||(C=!0,D())}function H(O,G){M=p(function(){O(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,V(R))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var te=h;h=G;try{return O()}finally{h=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var te=h;h=O;try{return G()}finally{h=te}},t.unstable_scheduleCallback=function(O,G,te){var ie=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ie+te:ie):te=ie,O){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=te+ne,O={id:c++,callback:G,priorityLevel:O,startTime:te,expirationTime:ne,sortIndex:-1},te>ie?(O.sortIndex=te,e(u,O),n(l)===null&&O===n(u)&&(x?(d(M),M=-1):x=!0,H(E,te-ie))):(O.sortIndex=ne,e(l,O),_||m||(_=!0,V(R))),O},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(O){var G=h;return function(){var te=h;h=G;try{return O.apply(this,arguments)}finally{h=te}}}})(sy);ay.exports=sy;var KM=ay.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QM=J,In=KM;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ly=new Set,bs={};function _o(t,e){ma(t,e),ma(t+"Capture",e)}function ma(t,e){for(bs[t]=e,t=0;t<e.length;t++)ly.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Id=Object.prototype.hasOwnProperty,ZM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pg={},Lg={};function JM(t){return Id.call(Lg,t)?!0:Id.call(Pg,t)?!1:ZM.test(t)?Lg[t]=!0:(Pg[t]=!0,!1)}function ew(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tw(t,e,n,i){if(e===null||typeof e>"u"||ew(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jp=/[\-:]([a-z])/g;function em(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jp,em);$t[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jp,em);$t[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jp,em);$t[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function tm(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tw(e,n,r,i)&&(n=null),i||r===null?JM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ji=QM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),zo=Symbol.for("react.portal"),Bo=Symbol.for("react.fragment"),nm=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),uy=Symbol.for("react.provider"),cy=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),Od=Symbol.for("react.suspense"),Ud=Symbol.for("react.suspense_list"),rm=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),fy=Symbol.for("react.offscreen"),Ng=Symbol.iterator;function Wa(t){return t===null||typeof t!="object"?null:(t=Ng&&t[Ng]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,ff;function os(t){if(ff===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ff=e&&e[1]||""}return`
`+ff+t}var df=!1;function hf(t,e){if(!t||df)return"";df=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),a=r.length-1,s=o.length-1;1<=a&&0<=s&&r[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(r[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||r[a]!==o[s]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=s);break}}}finally{df=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?os(t):""}function nw(t){switch(t.tag){case 5:return os(t.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 2:case 15:return t=hf(t.type,!1),t;case 11:return t=hf(t.type.render,!1),t;case 1:return t=hf(t.type,!0),t;default:return""}}function kd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bo:return"Fragment";case zo:return"Portal";case Dd:return"Profiler";case nm:return"StrictMode";case Od:return"Suspense";case Ud:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cy:return(t.displayName||"Context")+".Consumer";case uy:return(t._context.displayName||"Context")+".Provider";case im:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rm:return e=t.displayName||null,e!==null?e:kd(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return kd(t(e))}catch{}}return null}function iw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kd(e);case 8:return e===nm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rw(t){var e=dy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=rw(t))}function hy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=dy(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fd(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ig(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function py(t,e){e=e.checked,e!=null&&tm(t,"checked",e,!1)}function zd(t,e){py(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bd(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bd(t,e,n){(e!=="number"||Tu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var as=Array.isArray;function ia(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Og(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(as(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function my(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ug(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vl,vy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ow=["Webkit","ms","Moz","O"];Object.keys(ps).forEach(function(t){ow.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ps[e]=ps[t]})});function _y(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ps.hasOwnProperty(t)&&ps[t]?(""+e).trim():e+"px"}function yy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_y(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var aw=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gd(t,e){if(e){if(aw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Wd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jd=null;function om(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xd=null,ra=null,oa=null;function kg(t){if(t=tl(t)){if(typeof Xd!="function")throw Error(le(280));var e=t.stateNode;e&&(e=Ac(e),Xd(t.stateNode,t.type,e))}}function xy(t){ra?oa?oa.push(t):oa=[t]:ra=t}function Sy(){if(ra){var t=ra,e=oa;if(oa=ra=null,kg(t),e)for(t=0;t<e.length;t++)kg(e[t])}}function Ey(t,e){return t(e)}function My(){}var pf=!1;function wy(t,e,n){if(pf)return t(e,n);pf=!0;try{return Ey(t,e,n)}finally{pf=!1,(ra!==null||oa!==null)&&(My(),Sy())}}function As(t,e){var n=t.stateNode;if(n===null)return null;var i=Ac(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var $d=!1;if(Ui)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){$d=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{$d=!1}function sw(t,e,n,i,r,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ms=!1,Au=null,Cu=!1,qd=null,lw={onError:function(t){ms=!0,Au=t}};function uw(t,e,n,i,r,o,a,s,l){ms=!1,Au=null,sw.apply(lw,arguments)}function cw(t,e,n,i,r,o,a,s,l){if(uw.apply(this,arguments),ms){if(ms){var u=Au;ms=!1,Au=null}else throw Error(le(198));Cu||(Cu=!0,qd=u)}}function yo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function by(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fg(t){if(yo(t)!==t)throw Error(le(188))}function fw(t){var e=t.alternate;if(!e){if(e=yo(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Fg(r),t;if(o===i)return Fg(r),e;o=o.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=o;else{for(var a=!1,s=r.child;s;){if(s===n){a=!0,n=r,i=o;break}if(s===i){a=!0,i=r,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,i=r;break}if(s===i){a=!0,i=o,n=r;break}s=s.sibling}if(!a)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function Ty(t){return t=fw(t),t!==null?Ay(t):null}function Ay(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ay(t);if(e!==null)return e;t=t.sibling}return null}var Cy=In.unstable_scheduleCallback,zg=In.unstable_cancelCallback,dw=In.unstable_shouldYield,hw=In.unstable_requestPaint,At=In.unstable_now,pw=In.unstable_getCurrentPriorityLevel,am=In.unstable_ImmediatePriority,Ry=In.unstable_UserBlockingPriority,Ru=In.unstable_NormalPriority,mw=In.unstable_LowPriority,Py=In.unstable_IdlePriority,Mc=null,mi=null;function gw(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(Mc,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:yw,vw=Math.log,_w=Math.LN2;function yw(t){return t>>>=0,t===0?32:31-(vw(t)/_w|0)|0}var _l=64,yl=4194304;function ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var s=a&~r;s!==0?i=ss(s):(o&=a,o!==0&&(i=ss(o)))}else a=n&~r,a!==0?i=ss(a):o!==0&&(i=ss(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function xw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-ri(o),s=1<<a,l=r[a];l===-1?(!(s&n)||s&i)&&(r[a]=xw(s,e)):l<=e&&(t.expiredLanes|=s),o&=~s}}function Yd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ly(){var t=_l;return _l<<=1,!(_l&4194240)&&(_l=64),t}function mf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Js(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function Ew(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function sm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function Ny(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Iy,lm,Dy,Oy,Uy,Kd=!1,xl=[],dr=null,hr=null,pr=null,Cs=new Map,Rs=new Map,or=[],Mw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bg(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rs.delete(e.pointerId)}}function Xa(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=tl(e),e!==null&&lm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ww(t,e,n,i,r){switch(e){case"focusin":return dr=Xa(dr,t,e,n,i,r),!0;case"dragenter":return hr=Xa(hr,t,e,n,i,r),!0;case"mouseover":return pr=Xa(pr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Cs.set(o,Xa(Cs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Rs.set(o,Xa(Rs.get(o)||null,t,e,n,i,r)),!0}return!1}function ky(t){var e=Yr(t.target);if(e!==null){var n=yo(e);if(n!==null){if(e=n.tag,e===13){if(e=by(n),e!==null){t.blockedOn=e,Uy(t.priority,function(){Dy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);jd=i,n.target.dispatchEvent(i),jd=null}else return e=tl(n),e!==null&&lm(e),t.blockedOn=n,!1;e.shift()}return!0}function Hg(t,e,n){ou(t)&&n.delete(e)}function bw(){Kd=!1,dr!==null&&ou(dr)&&(dr=null),hr!==null&&ou(hr)&&(hr=null),pr!==null&&ou(pr)&&(pr=null),Cs.forEach(Hg),Rs.forEach(Hg)}function $a(t,e){t.blockedOn===e&&(t.blockedOn=null,Kd||(Kd=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,bw)))}function Ps(t){function e(r){return $a(r,t)}if(0<xl.length){$a(xl[0],t);for(var n=1;n<xl.length;n++){var i=xl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(dr!==null&&$a(dr,t),hr!==null&&$a(hr,t),pr!==null&&$a(pr,t),Cs.forEach(e),Rs.forEach(e),n=0;n<or.length;n++)i=or[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)ky(n),n.blockedOn===null&&or.shift()}var aa=ji.ReactCurrentBatchConfig,Lu=!0;function Tw(t,e,n,i){var r=lt,o=aa.transition;aa.transition=null;try{lt=1,um(t,e,n,i)}finally{lt=r,aa.transition=o}}function Aw(t,e,n,i){var r=lt,o=aa.transition;aa.transition=null;try{lt=4,um(t,e,n,i)}finally{lt=r,aa.transition=o}}function um(t,e,n,i){if(Lu){var r=Qd(t,e,n,i);if(r===null)bf(t,e,i,Nu,n),Bg(t,i);else if(ww(r,t,e,n,i))i.stopPropagation();else if(Bg(t,i),e&4&&-1<Mw.indexOf(t)){for(;r!==null;){var o=tl(r);if(o!==null&&Iy(o),o=Qd(t,e,n,i),o===null&&bf(t,e,i,Nu,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else bf(t,e,i,null,n)}}var Nu=null;function Qd(t,e,n,i){if(Nu=null,t=om(i),t=Yr(t),t!==null)if(e=yo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=by(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nu=t,null}function Fy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pw()){case am:return 1;case Ry:return 4;case Ru:case mw:return 16;case Py:return 536870912;default:return 16}default:return 16}}var lr=null,cm=null,au=null;function zy(){if(au)return au;var t,e=cm,n=e.length,i,r="value"in lr?lr.value:lr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[o-i];i++);return au=r.slice(t,1<i?1-i:void 0)}function su(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function Vg(){return!1}function On(t){function e(n,i,r,o,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sl:Vg,this.isPropagationStopped=Vg,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),e}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fm=On(ka),el=Mt({},ka,{view:0,detail:0}),Cw=On(el),gf,vf,qa,wc=Mt({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qa&&(qa&&t.type==="mousemove"?(gf=t.screenX-qa.screenX,vf=t.screenY-qa.screenY):vf=gf=0,qa=t),gf)},movementY:function(t){return"movementY"in t?t.movementY:vf}}),Gg=On(wc),Rw=Mt({},wc,{dataTransfer:0}),Pw=On(Rw),Lw=Mt({},el,{relatedTarget:0}),_f=On(Lw),Nw=Mt({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Iw=On(Nw),Dw=Mt({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ow=On(Dw),Uw=Mt({},ka,{data:0}),Wg=On(Uw),kw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zw[t])?!!e[t]:!1}function dm(){return Bw}var Hw=Mt({},el,{key:function(t){if(t.key){var e=kw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=su(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dm,charCode:function(t){return t.type==="keypress"?su(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?su(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vw=On(Hw),Gw=Mt({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jg=On(Gw),Ww=Mt({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dm}),jw=On(Ww),Xw=Mt({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),$w=On(Xw),qw=Mt({},wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yw=On(qw),Kw=[9,13,27,32],hm=Ui&&"CompositionEvent"in window,gs=null;Ui&&"documentMode"in document&&(gs=document.documentMode);var Qw=Ui&&"TextEvent"in window&&!gs,By=Ui&&(!hm||gs&&8<gs&&11>=gs),Xg=" ",$g=!1;function Hy(t,e){switch(t){case"keyup":return Kw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ho=!1;function Zw(t,e){switch(t){case"compositionend":return Vy(e);case"keypress":return e.which!==32?null:($g=!0,Xg);case"textInput":return t=e.data,t===Xg&&$g?null:t;default:return null}}function Jw(t,e){if(Ho)return t==="compositionend"||!hm&&Hy(t,e)?(t=zy(),au=cm=lr=null,Ho=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return By&&e.locale!=="ko"?null:e.data;default:return null}}var eb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eb[t.type]:e==="textarea"}function Gy(t,e,n,i){xy(i),e=Iu(e,"onChange"),0<e.length&&(n=new fm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var vs=null,Ls=null;function tb(t){ex(t,0)}function bc(t){var e=Wo(t);if(hy(e))return t}function nb(t,e){if(t==="change")return e}var Wy=!1;if(Ui){var yf;if(Ui){var xf="oninput"in document;if(!xf){var Yg=document.createElement("div");Yg.setAttribute("oninput","return;"),xf=typeof Yg.oninput=="function"}yf=xf}else yf=!1;Wy=yf&&(!document.documentMode||9<document.documentMode)}function Kg(){vs&&(vs.detachEvent("onpropertychange",jy),Ls=vs=null)}function jy(t){if(t.propertyName==="value"&&bc(Ls)){var e=[];Gy(e,Ls,t,om(t)),wy(tb,e)}}function ib(t,e,n){t==="focusin"?(Kg(),vs=e,Ls=n,vs.attachEvent("onpropertychange",jy)):t==="focusout"&&Kg()}function rb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bc(Ls)}function ob(t,e){if(t==="click")return bc(e)}function ab(t,e){if(t==="input"||t==="change")return bc(e)}function sb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:sb;function Ns(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Id.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function Qg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zg(t,e){var n=Qg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qg(n)}}function Xy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $y(){for(var t=window,e=Tu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tu(t.document)}return e}function pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lb(t){var e=$y(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xy(n.ownerDocument.documentElement,n)){if(i!==null&&pm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Zg(n,o);var a=Zg(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ub=Ui&&"documentMode"in document&&11>=document.documentMode,Vo=null,Zd=null,_s=null,Jd=!1;function Jg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jd||Vo==null||Vo!==Tu(i)||(i=Vo,"selectionStart"in i&&pm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_s&&Ns(_s,i)||(_s=i,i=Iu(Zd,"onSelect"),0<i.length&&(e=new fm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vo)))}function El(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Go={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},Sf={},qy={};Ui&&(qy=document.createElement("div").style,"AnimationEvent"in window||(delete Go.animationend.animation,delete Go.animationiteration.animation,delete Go.animationstart.animation),"TransitionEvent"in window||delete Go.transitionend.transition);function Tc(t){if(Sf[t])return Sf[t];if(!Go[t])return t;var e=Go[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qy)return Sf[t]=e[n];return t}var Yy=Tc("animationend"),Ky=Tc("animationiteration"),Qy=Tc("animationstart"),Zy=Tc("transitionend"),Jy=new Map,ev="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){Jy.set(t,e),_o(e,[t])}for(var Ef=0;Ef<ev.length;Ef++){var Mf=ev[Ef],cb=Mf.toLowerCase(),fb=Mf[0].toUpperCase()+Mf.slice(1);Lr(cb,"on"+fb)}Lr(Yy,"onAnimationEnd");Lr(Ky,"onAnimationIteration");Lr(Qy,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(Zy,"onTransitionEnd");ma("onMouseEnter",["mouseout","mouseover"]);ma("onMouseLeave",["mouseout","mouseover"]);ma("onPointerEnter",["pointerout","pointerover"]);ma("onPointerLeave",["pointerout","pointerover"]);_o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_o("onBeforeInput",["compositionend","keypress","textInput","paste"]);_o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),db=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function tv(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,cw(i,e,void 0,t),t.currentTarget=null}function ex(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var a=i.length-1;0<=a;a--){var s=i[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&r.isPropagationStopped())break e;tv(r,s,u),o=l}else for(a=0;a<i.length;a++){if(s=i[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&r.isPropagationStopped())break e;tv(r,s,u),o=l}}}if(Cu)throw t=qd,Cu=!1,qd=null,t}function ht(t,e){var n=e[rh];n===void 0&&(n=e[rh]=new Set);var i=t+"__bubble";n.has(i)||(tx(e,t,2,!1),n.add(i))}function wf(t,e,n){var i=0;e&&(i|=4),tx(n,t,i,e)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function Is(t){if(!t[Ml]){t[Ml]=!0,ly.forEach(function(n){n!=="selectionchange"&&(db.has(n)||wf(n,!1,t),wf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ml]||(e[Ml]=!0,wf("selectionchange",!1,e))}}function tx(t,e,n,i){switch(Fy(e)){case 1:var r=Tw;break;case 4:r=Aw;break;default:r=um}n=r.bind(null,e,n,t),r=void 0,!$d||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bf(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;s!==null;){if(a=Yr(s),a===null)return;if(l=a.tag,l===5||l===6){i=o=a;continue e}s=s.parentNode}}i=i.return}wy(function(){var u=o,c=om(n),f=[];e:{var h=Jy.get(t);if(h!==void 0){var m=fm,_=t;switch(t){case"keypress":if(su(n)===0)break e;case"keydown":case"keyup":m=Vw;break;case"focusin":_="focus",m=_f;break;case"focusout":_="blur",m=_f;break;case"beforeblur":case"afterblur":m=_f;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Pw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=jw;break;case Yy:case Ky:case Qy:m=Iw;break;case Zy:m=$w;break;case"scroll":m=Cw;break;case"wheel":m=Yw;break;case"copy":case"cut":case"paste":m=Ow;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=jg}var x=(e&4)!==0,p=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var g=u,y;g!==null;){y=g;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,d!==null&&(E=As(g,d),E!=null&&x.push(Ds(g,E,y)))),p)break;g=g.return}0<x.length&&(h=new m(h,_,null,n,c),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==jd&&(_=n.relatedTarget||n.fromElement)&&(Yr(_)||_[ki]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Yr(_):null,_!==null&&(p=yo(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(x=Gg,E="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=jg,E="onPointerLeave",d="onPointerEnter",g="pointer"),p=m==null?h:Wo(m),y=_==null?h:Wo(_),h=new x(E,g+"leave",m,n,c),h.target=p,h.relatedTarget=y,E=null,Yr(c)===u&&(x=new x(d,g+"enter",_,n,c),x.target=y,x.relatedTarget=p,E=x),p=E,m&&_)t:{for(x=m,d=_,g=0,y=x;y;y=Eo(y))g++;for(y=0,E=d;E;E=Eo(E))y++;for(;0<g-y;)x=Eo(x),g--;for(;0<y-g;)d=Eo(d),y--;for(;g--;){if(x===d||d!==null&&x===d.alternate)break t;x=Eo(x),d=Eo(d)}x=null}else x=null;m!==null&&nv(f,h,m,x,!1),_!==null&&p!==null&&nv(f,p,_,x,!0)}}e:{if(h=u?Wo(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var R=nb;else if(qg(h))if(Wy)R=ab;else{R=rb;var C=ib}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=ob);if(R&&(R=R(t,u))){Gy(f,R,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Bd(h,"number",h.value)}switch(C=u?Wo(u):window,t){case"focusin":(qg(C)||C.contentEditable==="true")&&(Vo=C,Zd=u,_s=null);break;case"focusout":_s=Zd=Vo=null;break;case"mousedown":Jd=!0;break;case"contextmenu":case"mouseup":case"dragend":Jd=!1,Jg(f,n,c);break;case"selectionchange":if(ub)break;case"keydown":case"keyup":Jg(f,n,c)}var T;if(hm)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Ho?Hy(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(By&&n.locale!=="ko"&&(Ho||M!=="onCompositionStart"?M==="onCompositionEnd"&&Ho&&(T=zy()):(lr=c,cm="value"in lr?lr.value:lr.textContent,Ho=!0)),C=Iu(u,M),0<C.length&&(M=new Wg(M,t,null,n,c),f.push({event:M,listeners:C}),T?M.data=T:(T=Vy(n),T!==null&&(M.data=T)))),(T=Qw?Zw(t,n):Jw(t,n))&&(u=Iu(u,"onBeforeInput"),0<u.length&&(c=new Wg("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}ex(f,e)})}function Ds(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Iu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=As(t,n),o!=null&&i.unshift(Ds(t,o,r)),o=As(t,e),o!=null&&i.push(Ds(t,o,r))),t=t.return}return i}function Eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nv(t,e,n,i,r){for(var o=e._reactName,a=[];n!==null&&n!==i;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&u!==null&&(s=u,r?(l=As(n,o),l!=null&&a.unshift(Ds(n,l,s))):r||(l=As(n,o),l!=null&&a.push(Ds(n,l,s)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var hb=/\r\n?/g,pb=/\u0000|\uFFFD/g;function iv(t){return(typeof t=="string"?t:""+t).replace(hb,`
`).replace(pb,"")}function wl(t,e,n){if(e=iv(e),iv(t)!==e&&n)throw Error(le(425))}function Du(){}var eh=null,th=null;function nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ih=typeof setTimeout=="function"?setTimeout:void 0,mb=typeof clearTimeout=="function"?clearTimeout:void 0,rv=typeof Promise=="function"?Promise:void 0,gb=typeof queueMicrotask=="function"?queueMicrotask:typeof rv<"u"?function(t){return rv.resolve(null).then(t).catch(vb)}:ih;function vb(t){setTimeout(function(){throw t})}function Tf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ps(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ps(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ov(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fa=Math.random().toString(36).slice(2),di="__reactFiber$"+Fa,Os="__reactProps$"+Fa,ki="__reactContainer$"+Fa,rh="__reactEvents$"+Fa,_b="__reactListeners$"+Fa,yb="__reactHandles$"+Fa;function Yr(t){var e=t[di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ov(t);t!==null;){if(n=t[di])return n;t=ov(t)}return e}t=n,n=t.parentNode}return null}function tl(t){return t=t[di]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function Ac(t){return t[Os]||null}var oh=[],jo=-1;function Nr(t){return{current:t}}function mt(t){0>jo||(t.current=oh[jo],oh[jo]=null,jo--)}function ft(t,e){jo++,oh[jo]=t.current,t.current=e}var wr={},Jt=Nr(wr),vn=Nr(!1),so=wr;function ga(t,e){var n=t.type.contextTypes;if(!n)return wr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function Ou(){mt(vn),mt(Jt)}function av(t,e,n){if(Jt.current!==wr)throw Error(le(168));ft(Jt,e),ft(vn,n)}function nx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,iw(t)||"Unknown",r));return Mt({},n,i)}function Uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,so=Jt.current,ft(Jt,t),ft(vn,vn.current),!0}function sv(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=nx(t,e,so),i.__reactInternalMemoizedMergedChildContext=t,mt(vn),mt(Jt),ft(Jt,t)):mt(vn),ft(vn,n)}var Ci=null,Cc=!1,Af=!1;function ix(t){Ci===null?Ci=[t]:Ci.push(t)}function xb(t){Cc=!0,ix(t)}function Ir(){if(!Af&&Ci!==null){Af=!0;var t=0,e=lt;try{var n=Ci;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ci=null,Cc=!1}catch(r){throw Ci!==null&&(Ci=Ci.slice(t+1)),Cy(am,Ir),r}finally{lt=e,Af=!1}}return null}var Xo=[],$o=0,ku=null,Fu=0,zn=[],Bn=0,lo=null,Pi=1,Li="";function Vr(t,e){Xo[$o++]=Fu,Xo[$o++]=ku,ku=t,Fu=e}function rx(t,e,n){zn[Bn++]=Pi,zn[Bn++]=Li,zn[Bn++]=lo,lo=t;var i=Pi;t=Li;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var o=32-ri(e)+r;if(30<o){var a=r-r%5;o=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Pi=1<<32-ri(e)+r|n<<r|i,Li=o+t}else Pi=1<<o|n<<r|i,Li=t}function mm(t){t.return!==null&&(Vr(t,1),rx(t,1,0))}function gm(t){for(;t===ku;)ku=Xo[--$o],Xo[$o]=null,Fu=Xo[--$o],Xo[$o]=null;for(;t===lo;)lo=zn[--Bn],zn[Bn]=null,Li=zn[--Bn],zn[Bn]=null,Pi=zn[--Bn],zn[Bn]=null}var Pn=null,Rn=null,_t=!1,ei=null;function ox(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=lo!==null?{id:Pi,overflow:Li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sh(t){if(_t){var e=Rn;if(e){var n=e;if(!lv(t,e)){if(ah(t))throw Error(le(418));e=mr(n.nextSibling);var i=Pn;e&&lv(t,e)?ox(i,n):(t.flags=t.flags&-4097|2,_t=!1,Pn=t)}}else{if(ah(t))throw Error(le(418));t.flags=t.flags&-4097|2,_t=!1,Pn=t}}}function uv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function bl(t){if(t!==Pn)return!1;if(!_t)return uv(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nh(t.type,t.memoizedProps)),e&&(e=Rn)){if(ah(t))throw ax(),Error(le(418));for(;e;)ox(t,e),e=mr(e.nextSibling)}if(uv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?mr(t.stateNode.nextSibling):null;return!0}function ax(){for(var t=Rn;t;)t=mr(t.nextSibling)}function va(){Rn=Pn=null,_t=!1}function vm(t){ei===null?ei=[t]:ei.push(t)}var Sb=ji.ReactCurrentBatchConfig;function Ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var s=r.refs;a===null?delete s[o]:s[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function Tl(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cv(t){var e=t._init;return e(t._payload)}function sx(t){function e(d,g){if(t){var y=d.deletions;y===null?(d.deletions=[g],d.flags|=16):y.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=yr(d,g),d.index=0,d.sibling=null,d}function o(d,g,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<g?(d.flags|=2,g):y):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function s(d,g,y,E){return g===null||g.tag!==6?(g=Df(y,d.mode,E),g.return=d,g):(g=r(g,y),g.return=d,g)}function l(d,g,y,E){var R=y.type;return R===Bo?c(d,g,y.props.children,E,y.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===nr&&cv(R)===g.type)?(E=r(g,y.props),E.ref=Ya(d,g,y),E.return=d,E):(E=pu(y.type,y.key,y.props,null,d.mode,E),E.ref=Ya(d,g,y),E.return=d,E)}function u(d,g,y,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Of(y,d.mode,E),g.return=d,g):(g=r(g,y.children||[]),g.return=d,g)}function c(d,g,y,E,R){return g===null||g.tag!==7?(g=to(y,d.mode,E,R),g.return=d,g):(g=r(g,y),g.return=d,g)}function f(d,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Df(""+g,d.mode,y),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ml:return y=pu(g.type,g.key,g.props,null,d.mode,y),y.ref=Ya(d,null,g),y.return=d,y;case zo:return g=Of(g,d.mode,y),g.return=d,g;case nr:var E=g._init;return f(d,E(g._payload),y)}if(as(g)||Wa(g))return g=to(g,d.mode,y,null),g.return=d,g;Tl(d,g)}return null}function h(d,g,y,E){var R=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:s(d,g,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ml:return y.key===R?l(d,g,y,E):null;case zo:return y.key===R?u(d,g,y,E):null;case nr:return R=y._init,h(d,g,R(y._payload),E)}if(as(y)||Wa(y))return R!==null?null:c(d,g,y,E,null);Tl(d,y)}return null}function m(d,g,y,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(y)||null,s(g,d,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ml:return d=d.get(E.key===null?y:E.key)||null,l(g,d,E,R);case zo:return d=d.get(E.key===null?y:E.key)||null,u(g,d,E,R);case nr:var C=E._init;return m(d,g,y,C(E._payload),R)}if(as(E)||Wa(E))return d=d.get(y)||null,c(g,d,E,R,null);Tl(g,E)}return null}function _(d,g,y,E){for(var R=null,C=null,T=g,M=g=0,b=null;T!==null&&M<y.length;M++){T.index>M?(b=T,T=null):b=T.sibling;var v=h(d,T,y[M],E);if(v===null){T===null&&(T=b);break}t&&T&&v.alternate===null&&e(d,T),g=o(v,g,M),C===null?R=v:C.sibling=v,C=v,T=b}if(M===y.length)return n(d,T),_t&&Vr(d,M),R;if(T===null){for(;M<y.length;M++)T=f(d,y[M],E),T!==null&&(g=o(T,g,M),C===null?R=T:C.sibling=T,C=T);return _t&&Vr(d,M),R}for(T=i(d,T);M<y.length;M++)b=m(T,d,M,y[M],E),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?M:b.key),g=o(b,g,M),C===null?R=b:C.sibling=b,C=b);return t&&T.forEach(function(S){return e(d,S)}),_t&&Vr(d,M),R}function x(d,g,y,E){var R=Wa(y);if(typeof R!="function")throw Error(le(150));if(y=R.call(y),y==null)throw Error(le(151));for(var C=R=null,T=g,M=g=0,b=null,v=y.next();T!==null&&!v.done;M++,v=y.next()){T.index>M?(b=T,T=null):b=T.sibling;var S=h(d,T,v.value,E);if(S===null){T===null&&(T=b);break}t&&T&&S.alternate===null&&e(d,T),g=o(S,g,M),C===null?R=S:C.sibling=S,C=S,T=b}if(v.done)return n(d,T),_t&&Vr(d,M),R;if(T===null){for(;!v.done;M++,v=y.next())v=f(d,v.value,E),v!==null&&(g=o(v,g,M),C===null?R=v:C.sibling=v,C=v);return _t&&Vr(d,M),R}for(T=i(d,T);!v.done;M++,v=y.next())v=m(T,d,M,v.value,E),v!==null&&(t&&v.alternate!==null&&T.delete(v.key===null?M:v.key),g=o(v,g,M),C===null?R=v:C.sibling=v,C=v);return t&&T.forEach(function(N){return e(d,N)}),_t&&Vr(d,M),R}function p(d,g,y,E){if(typeof y=="object"&&y!==null&&y.type===Bo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ml:e:{for(var R=y.key,C=g;C!==null;){if(C.key===R){if(R=y.type,R===Bo){if(C.tag===7){n(d,C.sibling),g=r(C,y.props.children),g.return=d,d=g;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===nr&&cv(R)===C.type){n(d,C.sibling),g=r(C,y.props),g.ref=Ya(d,C,y),g.return=d,d=g;break e}n(d,C);break}else e(d,C);C=C.sibling}y.type===Bo?(g=to(y.props.children,d.mode,E,y.key),g.return=d,d=g):(E=pu(y.type,y.key,y.props,null,d.mode,E),E.ref=Ya(d,g,y),E.return=d,d=E)}return a(d);case zo:e:{for(C=y.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(d,g.sibling),g=r(g,y.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=Of(y,d.mode,E),g.return=d,d=g}return a(d);case nr:return C=y._init,p(d,g,C(y._payload),E)}if(as(y))return _(d,g,y,E);if(Wa(y))return x(d,g,y,E);Tl(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,y),g.return=d,d=g):(n(d,g),g=Df(y,d.mode,E),g.return=d,d=g),a(d)):n(d,g)}return p}var _a=sx(!0),lx=sx(!1),zu=Nr(null),Bu=null,qo=null,_m=null;function ym(){_m=qo=Bu=null}function xm(t){var e=zu.current;mt(zu),t._currentValue=e}function lh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function sa(t,e){Bu=t,_m=qo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(_m!==t)if(t={context:t,memoizedValue:e,next:null},qo===null){if(Bu===null)throw Error(le(308));qo=t,Bu.dependencies={lanes:0,firstContext:t}}else qo=qo.next=t;return e}var Kr=null;function Sm(t){Kr===null?Kr=[t]:Kr.push(t)}function ux(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sm(e)):(n.next=r.next,r.next=n),e.interleaved=n,Fi(t,i)}function Fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function Em(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(t,n)}return r=i.interleaved,r===null?(e.next=e,Sm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(t,n)}function lu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sm(t,n)}}function fv(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hu(t,e,n,i){var r=t.updateQueue;ir=!1;var o=r.firstBaseUpdate,a=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;a=0,c=u=l=null,s=o;do{var h=s.lane,m=s.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=t,x=s;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=Mt({},f,h);break e;case 2:ir=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[s]:h.push(s))}else m={eventTime:m,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,a|=h;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;h=s,s=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);co|=a,t.lanes=a,t.memoizedState=f}}function dv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var nl={},gi=Nr(nl),Us=Nr(nl),ks=Nr(nl);function Qr(t){if(t===nl)throw Error(le(174));return t}function Mm(t,e){switch(ft(ks,e),ft(Us,t),ft(gi,nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vd(e,t)}mt(gi),ft(gi,e)}function ya(){mt(gi),mt(Us),mt(ks)}function fx(t){Qr(ks.current);var e=Qr(gi.current),n=Vd(e,t.type);e!==n&&(ft(Us,t),ft(gi,n))}function wm(t){Us.current===t&&(mt(gi),mt(Us))}var St=Nr(0);function Vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cf=[];function bm(){for(var t=0;t<Cf.length;t++)Cf[t]._workInProgressVersionPrimary=null;Cf.length=0}var uu=ji.ReactCurrentDispatcher,Rf=ji.ReactCurrentBatchConfig,uo=0,Et=null,Dt=null,Ht=null,Gu=!1,ys=!1,Fs=0,Eb=0;function qt(){throw Error(le(321))}function Tm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Am(t,e,n,i,r,o){if(uo=o,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uu.current=t===null||t.memoizedState===null?Tb:Ab,t=n(i,r),ys){o=0;do{if(ys=!1,Fs=0,25<=o)throw Error(le(301));o+=1,Ht=Dt=null,e.updateQueue=null,uu.current=Cb,t=n(i,r)}while(ys)}if(uu.current=Wu,e=Dt!==null&&Dt.next!==null,uo=0,Ht=Dt=Et=null,Gu=!1,e)throw Error(le(300));return t}function Cm(){var t=Fs!==0;return Fs=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Et.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Xn(){if(Dt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Ht===null?Et.memoizedState:Ht.next;if(e!==null)Ht=e,Dt=t;else{if(t===null)throw Error(le(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ht===null?Et.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function zs(t,e){return typeof e=="function"?e(t):e}function Pf(t){var e=Xn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var a=r.next;r.next=o.next,o.next=a}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((uo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=i):l=l.next=f,Et.lanes|=c,co|=c}u=u.next}while(u!==null&&u!==o);l===null?a=i:l.next=s,ai(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,Et.lanes|=o,co|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lf(t){var e=Xn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do o=t(o,a.action),a=a.next;while(a!==r);ai(o,e.memoizedState)||(mn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function dx(){}function hx(t,e){var n=Et,i=Xn(),r=e(),o=!ai(i.memoizedState,r);if(o&&(i.memoizedState=r,mn=!0),i=i.queue,Rm(gx.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Bs(9,mx.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(le(349));uo&30||px(n,e,r)}return r}function px(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mx(t,e,n,i){e.value=n,e.getSnapshot=i,vx(e)&&_x(t)}function gx(t,e,n){return n(function(){vx(e)&&_x(t)})}function vx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function _x(t){var e=Fi(t,1);e!==null&&oi(e,t,1,-1)}function hv(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zs,lastRenderedState:t},e.queue=t,t=t.dispatch=bb.bind(null,Et,t),[e.memoizedState,t]}function Bs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function yx(){return Xn().memoizedState}function cu(t,e,n,i){var r=li();Et.flags|=t,r.memoizedState=Bs(1|e,n,void 0,i===void 0?null:i)}function Rc(t,e,n,i){var r=Xn();i=i===void 0?null:i;var o=void 0;if(Dt!==null){var a=Dt.memoizedState;if(o=a.destroy,i!==null&&Tm(i,a.deps)){r.memoizedState=Bs(e,n,o,i);return}}Et.flags|=t,r.memoizedState=Bs(1|e,n,o,i)}function pv(t,e){return cu(8390656,8,t,e)}function Rm(t,e){return Rc(2048,8,t,e)}function xx(t,e){return Rc(4,2,t,e)}function Sx(t,e){return Rc(4,4,t,e)}function Ex(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mx(t,e,n){return n=n!=null?n.concat([t]):null,Rc(4,4,Ex.bind(null,e,t),n)}function Pm(){}function wx(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Tm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function bx(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Tm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Tx(t,e,n){return uo&21?(ai(n,e)||(n=Ly(),Et.lanes|=n,co|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function Mb(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Rf.transition;Rf.transition={};try{t(!1),e()}finally{lt=n,Rf.transition=i}}function Ax(){return Xn().memoizedState}function wb(t,e,n){var i=_r(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Cx(t))Rx(e,n);else if(n=ux(t,e,n,i),n!==null){var r=an();oi(n,t,i,r),Px(n,e,i)}}function bb(t,e,n){var i=_r(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cx(t))Rx(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,s=o(a,n);if(r.hasEagerState=!0,r.eagerState=s,ai(s,a)){var l=e.interleaved;l===null?(r.next=r,Sm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ux(t,e,r,i),n!==null&&(r=an(),oi(n,t,i,r),Px(n,e,i))}}function Cx(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Rx(t,e){ys=Gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Px(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sm(t,n)}}var Wu={readContext:jn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},Tb={readContext:jn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:pv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cu(4194308,4,Ex.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cu(4194308,4,t,e)},useInsertionEffect:function(t,e){return cu(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=wb.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:hv,useDebugValue:Pm,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=hv(!1),e=t[0];return t=Mb.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=li();if(_t){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Vt===null)throw Error(le(349));uo&30||px(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,pv(gx.bind(null,i,o,t),[t]),i.flags|=2048,Bs(9,mx.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=li(),e=Vt.identifierPrefix;if(_t){var n=Li,i=Pi;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Eb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ab={readContext:jn,useCallback:wx,useContext:jn,useEffect:Rm,useImperativeHandle:Mx,useInsertionEffect:xx,useLayoutEffect:Sx,useMemo:bx,useReducer:Pf,useRef:yx,useState:function(){return Pf(zs)},useDebugValue:Pm,useDeferredValue:function(t){var e=Xn();return Tx(e,Dt.memoizedState,t)},useTransition:function(){var t=Pf(zs)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:dx,useSyncExternalStore:hx,useId:Ax,unstable_isNewReconciler:!1},Cb={readContext:jn,useCallback:wx,useContext:jn,useEffect:Rm,useImperativeHandle:Mx,useInsertionEffect:xx,useLayoutEffect:Sx,useMemo:bx,useReducer:Lf,useRef:yx,useState:function(){return Lf(zs)},useDebugValue:Pm,useDeferredValue:function(t){var e=Xn();return Dt===null?e.memoizedState=t:Tx(e,Dt.memoizedState,t)},useTransition:function(){var t=Lf(zs)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:dx,useSyncExternalStore:hx,useId:Ax,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function uh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pc={isMounted:function(t){return(t=t._reactInternals)?yo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=_r(t),o=Oi(i,r);o.payload=e,n!=null&&(o.callback=n),e=gr(t,o,r),e!==null&&(oi(e,t,r,i),lu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=_r(t),o=Oi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=gr(t,o,r),e!==null&&(oi(e,t,r,i),lu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=_r(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=gr(t,r,i),e!==null&&(oi(e,t,i,n),lu(e,t,i))}};function mv(t,e,n,i,r,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,a):e.prototype&&e.prototype.isPureReactComponent?!Ns(n,i)||!Ns(r,o):!0}function Lx(t,e,n){var i=!1,r=wr,o=e.contextType;return typeof o=="object"&&o!==null?o=jn(o):(r=_n(e)?so:Jt.current,i=e.contextTypes,o=(i=i!=null)?ga(t,r):wr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function gv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pc.enqueueReplaceState(e,e.state,null)}function ch(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Em(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=jn(o):(o=_n(e)?so:Jt.current,r.context=ga(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(uh(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pc.enqueueReplaceState(r,r.state,null),Hu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xa(t,e){try{var n="",i=e;do n+=nw(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Nf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rb=typeof WeakMap=="function"?WeakMap:Map;function Nx(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Xu||(Xu=!0,Sh=i),fh(t,e)},n}function Ix(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){fh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fh(t,e),typeof i!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function vv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Rb;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Gb.bind(null,t,e,n),e.then(t,t))}function _v(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yv(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var Pb=ji.ReactCurrentOwner,mn=!1;function rn(t,e,n,i){e.child=t===null?lx(e,null,n,i):_a(e,t.child,n,i)}function xv(t,e,n,i,r){n=n.render;var o=e.ref;return sa(e,r),i=Am(t,e,n,i,o,r),n=Cm(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(_t&&n&&mm(e),e.flags|=1,rn(t,e,i,r),e.child)}function Sv(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Fm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Dx(t,e,o,i,r)):(t=pu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ns,n(a,i)&&t.ref===e.ref)return zi(t,e,r)}return e.flags|=1,t=yr(o,i),t.ref=e.ref,t.return=e,e.child=t}function Dx(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ns(o,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,zi(t,e,r)}return dh(t,e,n,i,r)}function Ox(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Ko,An),An|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Ko,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ft(Ko,An),An|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ft(Ko,An),An|=i;return rn(t,e,r,n),e.child}function Ux(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dh(t,e,n,i,r){var o=_n(n)?so:Jt.current;return o=ga(e,o),sa(e,r),n=Am(t,e,n,i,o,r),i=Cm(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(_t&&i&&mm(e),e.flags|=1,rn(t,e,n,r),e.child)}function Ev(t,e,n,i,r){if(_n(n)){var o=!0;Uu(e)}else o=!1;if(sa(e,r),e.stateNode===null)fu(t,e),Lx(e,n,i),ch(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,s=e.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=jn(u):(u=_n(n)?so:Jt.current,u=ga(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==i||l!==u)&&gv(e,a,i,u),ir=!1;var h=e.memoizedState;a.state=h,Hu(e,i,a,r),l=e.memoizedState,s!==i||h!==l||vn.current||ir?(typeof c=="function"&&(uh(e,n,c,i),l=e.memoizedState),(s=ir||mv(e,n,s,i,h,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=s):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,cx(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:Zn(e.type,s),a.props=u,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=_n(n)?so:Jt.current,l=ga(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&gv(e,a,i,l),ir=!1,h=e.memoizedState,a.state=h,Hu(e,i,a,r);var _=e.memoizedState;s!==f||h!==_||vn.current||ir?(typeof m=="function"&&(uh(e,n,m,i),_=e.memoizedState),(u=ir||mv(e,n,u,i,h,_,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return hh(t,e,n,i,o,r)}function hh(t,e,n,i,r,o){Ux(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&sv(e,n,!1),zi(t,e,o);i=e.stateNode,Pb.current=e;var s=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=_a(e,t.child,null,o),e.child=_a(e,null,s,o)):rn(t,e,s,o),e.memoizedState=i.state,r&&sv(e,n,!0),e.child}function kx(t){var e=t.stateNode;e.pendingContext?av(t,e.pendingContext,e.pendingContext!==e.context):e.context&&av(t,e.context,!1),Mm(t,e.containerInfo)}function Mv(t,e,n,i,r){return va(),vm(r),e.flags|=256,rn(t,e,n,i),e.child}var ph={dehydrated:null,treeContext:null,retryLane:0};function mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fx(t,e,n){var i=e.pendingProps,r=St.current,o=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(r&2)!==0),s?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(St,r&1),t===null)return sh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,o?(i=e.mode,o=e.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ic(a,i,0,null),t=to(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=mh(n),e.memoizedState=ph,t):Lm(e,a));if(r=t.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return Lb(t,e,a,i,s,r,n);if(o){o=i.fallback,a=e.mode,r=t.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=yr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?o=yr(s,o):(o=to(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,a=t.child.memoizedState,a=a===null?mh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=ph,i}return o=t.child,t=o.sibling,i=yr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lm(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Al(t,e,n,i){return i!==null&&vm(i),_a(e,t.child,null,n),t=Lm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Lb(t,e,n,i,r,o,a){if(n)return e.flags&256?(e.flags&=-257,i=Nf(Error(le(422))),Al(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Ic({mode:"visible",children:i.children},r,0,null),o=to(o,r,a,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&_a(e,t.child,null,a),e.child.memoizedState=mh(a),e.memoizedState=ph,o);if(!(e.mode&1))return Al(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,o=Error(le(419)),i=Nf(o,i,void 0),Al(t,e,a,i)}if(s=(a&t.childLanes)!==0,mn||s){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Fi(t,r),oi(i,t,r,-1))}return km(),i=Nf(Error(le(421))),Al(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Wb.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Rn=mr(r.nextSibling),Pn=e,_t=!0,ei=null,t!==null&&(zn[Bn++]=Pi,zn[Bn++]=Li,zn[Bn++]=lo,Pi=t.id,Li=t.overflow,lo=e),e=Lm(e,i.children),e.flags|=4096,e)}function wv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),lh(t.return,e,n)}function If(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function zx(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(rn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wv(t,n,e);else if(t.tag===19)wv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Vu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),If(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Vu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}If(e,!0,n,null,o);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),co|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Nb(t,e,n){switch(e.tag){case 3:kx(e),va();break;case 5:fx(e);break;case 1:_n(e.type)&&Uu(e);break;case 4:Mm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(zu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?Fx(t,e,n):(ft(St,St.current&1),t=zi(t,e,n),t!==null?t.sibling:null);ft(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return zx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Ox(t,e,n)}return zi(t,e,n)}var Bx,gh,Hx,Vx;Bx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gh=function(){};Hx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Qr(gi.current);var o=null;switch(n){case"input":r=Fd(t,r),i=Fd(t,i),o=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),o=[];break;case"textarea":r=Hd(t,r),i=Hd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Du)}Gd(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(s=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ht("scroll",t),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Vx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ka(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ib(t,e,n){var i=e.pendingProps;switch(gm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return _n(e.type)&&Ou(),Yt(e),null;case 3:return i=e.stateNode,ya(),mt(vn),mt(Jt),bm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(bl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(wh(ei),ei=null))),gh(t,e),Yt(e),null;case 5:wm(e);var r=Qr(ks.current);if(n=e.type,t!==null&&e.stateNode!=null)Hx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Yt(e),null}if(t=Qr(gi.current),bl(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[di]=e,i[Os]=o,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<ls.length;r++)ht(ls[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Ig(i,o),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ht("invalid",i);break;case"textarea":Og(i,o),ht("invalid",i)}Gd(n,o),r=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?i.textContent!==s&&(o.suppressHydrationWarning!==!0&&wl(i.textContent,s,t),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&wl(i.textContent,s,t),r=["children",""+s]):bs.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ht("scroll",i)}switch(n){case"input":gl(i),Dg(i,o,!0);break;case"textarea":gl(i),Ug(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Du)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[di]=e,t[Os]=i,Bx(t,e,!1,!1),e.stateNode=t;e:{switch(a=Wd(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<ls.length;r++)ht(ls[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":Ig(t,i),r=Fd(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Og(t,i),r=Hd(t,i),ht("invalid",t);break;default:r=i}Gd(n,r),s=r;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?yy(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vy(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ts(t,l):typeof l=="number"&&Ts(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ht("scroll",t):l!=null&&tm(t,o,l,a))}switch(n){case"input":gl(t),Dg(t,i,!1);break;case"textarea":gl(t),Ug(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?ia(t,!!i.multiple,o,!1):i.defaultValue!=null&&ia(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Du)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Vx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Qr(ks.current),Qr(gi.current),bl(e)){if(i=e.stateNode,n=e.memoizedProps,i[di]=e,(o=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:wl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wl(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return Yt(e),null;case 13:if(mt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Rn!==null&&e.mode&1&&!(e.flags&128))ax(),va(),e.flags|=98560,o=!1;else if(o=bl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(le(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(le(317));o[di]=e}else va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),o=!1}else ei!==null&&(wh(ei),ei=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ut===0&&(Ut=3):km())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return ya(),gh(t,e),t===null&&Is(e.stateNode.containerInfo),Yt(e),null;case 10:return xm(e.type._context),Yt(e),null;case 17:return _n(e.type)&&Ou(),Yt(e),null;case 19:if(mt(St),o=e.memoizedState,o===null)return Yt(e),null;if(i=(e.flags&128)!==0,a=o.rendering,a===null)if(i)Ka(o,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Vu(t),a!==null){for(e.flags|=128,Ka(o,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(St,St.current&1|2),e.child}t=t.sibling}o.tail!==null&&At()>Sa&&(e.flags|=128,i=!0,Ka(o,!1),e.lanes=4194304)}else{if(!i)if(t=Vu(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ka(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_t)return Yt(e),null}else 2*At()-o.renderingStartTime>Sa&&n!==1073741824&&(e.flags|=128,i=!0,Ka(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=At(),e.sibling=null,n=St.current,ft(St,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return Um(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function Db(t,e){switch(gm(e),e.tag){case 1:return _n(e.type)&&Ou(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ya(),mt(vn),mt(Jt),bm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wm(e),null;case 13:if(mt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));va()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(St),null;case 4:return ya(),null;case 10:return xm(e.type._context),null;case 22:case 23:return Um(),null;case 24:return null;default:return null}}var Cl=!1,Zt=!1,Ob=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function vh(t,e,n){try{n()}catch(i){bt(t,e,i)}}var bv=!1;function Ub(t,e){if(eh=Lu,t=$y(),pm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(s=a+r),f!==o||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++u===r&&(s=a),h===o&&++c===i&&(l=a),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(th={focusedElem:t,selectionRange:n},Lu=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Zn(e.type,x),p);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(E){bt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return _=bv,bv=!1,_}function xs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&vh(e,n,o)}r=r.next}while(r!==i)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function _h(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gx(t){var e=t.alternate;e!==null&&(t.alternate=null,Gx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[di],delete e[Os],delete e[rh],delete e[_b],delete e[yb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wx(t){return t.tag===5||t.tag===3||t.tag===4}function Tv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Du));else if(i!==4&&(t=t.child,t!==null))for(yh(t,e,n),t=t.sibling;t!==null;)yh(t,e,n),t=t.sibling}function xh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xh(t,e,n),t=t.sibling;t!==null;)xh(t,e,n),t=t.sibling}var Wt=null,Jn=!1;function qi(t,e,n){for(n=n.child;n!==null;)jx(t,e,n),n=n.sibling}function jx(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(Mc,n)}catch{}switch(n.tag){case 5:Zt||Yo(n,e);case 6:var i=Wt,r=Jn;Wt=null,qi(t,e,n),Wt=i,Jn=r,Wt!==null&&(Jn?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(Jn?(t=Wt,n=n.stateNode,t.nodeType===8?Tf(t.parentNode,n):t.nodeType===1&&Tf(t,n),Ps(t)):Tf(Wt,n.stateNode));break;case 4:i=Wt,r=Jn,Wt=n.stateNode.containerInfo,Jn=!0,qi(t,e,n),Wt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&vh(n,e,a),r=r.next}while(r!==i)}qi(t,e,n);break;case 1:if(!Zt&&(Yo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){bt(n,e,s)}qi(t,e,n);break;case 21:qi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,qi(t,e,n),Zt=i):qi(t,e,n);break;default:qi(t,e,n)}}function Av(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ob),e.forEach(function(i){var r=jb.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,a=e,s=a;e:for(;s!==null;){switch(s.tag){case 5:Wt=s.stateNode,Jn=!1;break e;case 3:Wt=s.stateNode.containerInfo,Jn=!0;break e;case 4:Wt=s.stateNode.containerInfo,Jn=!0;break e}s=s.return}if(Wt===null)throw Error(le(160));jx(o,a,r),Wt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){bt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xx(e,t),e=e.sibling}function Xx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),si(t),i&4){try{xs(3,t,t.return),Lc(3,t)}catch(x){bt(t,t.return,x)}try{xs(5,t,t.return)}catch(x){bt(t,t.return,x)}}break;case 1:qn(e,t),si(t),i&512&&n!==null&&Yo(n,n.return);break;case 5:if(qn(e,t),si(t),i&512&&n!==null&&Yo(n,n.return),t.flags&32){var r=t.stateNode;try{Ts(r,"")}catch(x){bt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&py(r,o),Wd(s,a);var u=Wd(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?yy(r,f):c==="dangerouslySetInnerHTML"?vy(r,f):c==="children"?Ts(r,f):tm(r,c,f,u)}switch(s){case"input":zd(r,o);break;case"textarea":my(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?ia(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?ia(r,!!o.multiple,o.defaultValue,!0):ia(r,!!o.multiple,o.multiple?[]:"",!1))}r[Os]=o}catch(x){bt(t,t.return,x)}}break;case 6:if(qn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){bt(t,t.return,x)}}break;case 3:if(qn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ps(e.containerInfo)}catch(x){bt(t,t.return,x)}break;case 4:qn(e,t),si(t);break;case 13:qn(e,t),si(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Dm=At())),i&4&&Av(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||c,qn(e,t),Zt=u):qn(e,t),si(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Me=t,c=t.child;c!==null;){for(f=Me=c;Me!==null;){switch(h=Me,m=h.child,h.tag){case 0:case 11:case 14:case 15:xs(4,h,h.return);break;case 1:Yo(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){bt(i,n,x)}}break;case 5:Yo(h,h.return);break;case 22:if(h.memoizedState!==null){Rv(f);continue}}m!==null?(m.return=h,Me=m):Rv(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=_y("display",a))}catch(x){bt(t,t.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){bt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:qn(e,t),si(t),i&4&&Av(t);break;case 21:break;default:qn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wx(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ts(r,""),i.flags&=-33);var o=Tv(t);xh(t,o,r);break;case 3:case 4:var a=i.stateNode.containerInfo,s=Tv(t);yh(t,s,a);break;default:throw Error(le(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kb(t,e,n){Me=t,$x(t)}function $x(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,o=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Cl;if(!a){var s=r.alternate,l=s!==null&&s.memoizedState!==null||Zt;s=Cl;var u=Zt;if(Cl=a,(Zt=l)&&!u)for(Me=r;Me!==null;)a=Me,l=a.child,a.tag===22&&a.memoizedState!==null?Pv(r):l!==null?(l.return=a,Me=l):Pv(r);for(;o!==null;)Me=o,$x(o),o=o.sibling;Me=r,Cl=s,Zt=u}Cv(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Me=o):Cv(t)}}function Cv(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Lc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&dv(e,o,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dv(e,a,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ps(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}Zt||e.flags&512&&_h(e)}catch(h){bt(e,e.return,h)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Rv(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Pv(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var o=e.return;try{_h(e)}catch(l){bt(e,o,l)}break;case 5:var a=e.return;try{_h(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Me=null;break}var s=e.sibling;if(s!==null){s.return=e.return,Me=s;break}Me=e.return}}var Fb=Math.ceil,ju=ji.ReactCurrentDispatcher,Nm=ji.ReactCurrentOwner,Gn=ji.ReactCurrentBatchConfig,et=0,Vt=null,Nt=null,jt=0,An=0,Ko=Nr(0),Ut=0,Hs=null,co=0,Nc=0,Im=0,Ss=null,hn=null,Dm=0,Sa=1/0,Ai=null,Xu=!1,Sh=null,vr=null,Rl=!1,ur=null,$u=0,Es=0,Eh=null,du=-1,hu=0;function an(){return et&6?At():du!==-1?du:du=At()}function _r(t){return t.mode&1?et&2&&jt!==0?jt&-jt:Sb.transition!==null?(hu===0&&(hu=Ly()),hu):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Fy(t.type)),t):1}function oi(t,e,n,i){if(50<Es)throw Es=0,Eh=null,Error(le(185));Js(t,n,i),(!(et&2)||t!==Vt)&&(t===Vt&&(!(et&2)&&(Nc|=n),Ut===4&&ar(t,jt)),yn(t,i),n===1&&et===0&&!(e.mode&1)&&(Sa=At()+500,Cc&&Ir()))}function yn(t,e){var n=t.callbackNode;Sw(t,e);var i=Pu(t,t===Vt?jt:0);if(i===0)n!==null&&zg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zg(n),e===1)t.tag===0?xb(Lv.bind(null,t)):ix(Lv.bind(null,t)),gb(function(){!(et&6)&&Ir()}),n=null;else{switch(Ny(i)){case 1:n=am;break;case 4:n=Ry;break;case 16:n=Ru;break;case 536870912:n=Py;break;default:n=Ru}n=tS(n,qx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qx(t,e){if(du=-1,hu=0,et&6)throw Error(le(327));var n=t.callbackNode;if(la()&&t.callbackNode!==n)return null;var i=Pu(t,t===Vt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=qu(t,i);else{e=i;var r=et;et|=2;var o=Kx();(Vt!==t||jt!==e)&&(Ai=null,Sa=At()+500,eo(t,e));do try{Hb();break}catch(s){Yx(t,s)}while(!0);ym(),ju.current=o,et=r,Nt!==null?e=0:(Vt=null,jt=0,e=Ut)}if(e!==0){if(e===2&&(r=Yd(t),r!==0&&(i=r,e=Mh(t,r))),e===1)throw n=Hs,eo(t,0),ar(t,i),yn(t,At()),n;if(e===6)ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!zb(r)&&(e=qu(t,i),e===2&&(o=Yd(t),o!==0&&(i=o,e=Mh(t,o))),e===1))throw n=Hs,eo(t,0),ar(t,i),yn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Gr(t,hn,Ai);break;case 3:if(ar(t,i),(i&130023424)===i&&(e=Dm+500-At(),10<e)){if(Pu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ih(Gr.bind(null,t,hn,Ai),e);break}Gr(t,hn,Ai);break;case 4:if(ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ri(i);o=1<<a,a=e[a],a>r&&(r=a),i&=~o}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Fb(i/1960))-i,10<i){t.timeoutHandle=ih(Gr.bind(null,t,hn,Ai),i);break}Gr(t,hn,Ai);break;case 5:Gr(t,hn,Ai);break;default:throw Error(le(329))}}}return yn(t,At()),t.callbackNode===n?qx.bind(null,t):null}function Mh(t,e){var n=Ss;return t.current.memoizedState.isDehydrated&&(eo(t,e).flags|=256),t=qu(t,e),t!==2&&(e=hn,hn=n,e!==null&&wh(e)),t}function wh(t){hn===null?hn=t:hn.push.apply(hn,t)}function zb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ai(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Im,e&=~Nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function Lv(t){if(et&6)throw Error(le(327));la();var e=Pu(t,0);if(!(e&1))return yn(t,At()),null;var n=qu(t,e);if(t.tag!==0&&n===2){var i=Yd(t);i!==0&&(e=i,n=Mh(t,i))}if(n===1)throw n=Hs,eo(t,0),ar(t,e),yn(t,At()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,hn,Ai),yn(t,At()),null}function Om(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Sa=At()+500,Cc&&Ir())}}function fo(t){ur!==null&&ur.tag===0&&!(et&6)&&la();var e=et;et|=1;var n=Gn.transition,i=lt;try{if(Gn.transition=null,lt=1,t)return t()}finally{lt=i,Gn.transition=n,et=e,!(et&6)&&Ir()}}function Um(){An=Ko.current,mt(Ko)}function eo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mb(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(gm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ou();break;case 3:ya(),mt(vn),mt(Jt),bm();break;case 5:wm(i);break;case 4:ya();break;case 13:mt(St);break;case 19:mt(St);break;case 10:xm(i.type._context);break;case 22:case 23:Um()}n=n.return}if(Vt=t,Nt=t=yr(t.current,null),jt=An=e,Ut=0,Hs=null,Im=Nc=co=0,hn=Ss=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var a=o.next;o.next=r,i.next=a}n.pending=i}Kr=null}return t}function Yx(t,e){do{var n=Nt;try{if(ym(),uu.current=Wu,Gu){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gu=!1}if(uo=0,Ht=Dt=Et=null,ys=!1,Fs=0,Nm.current=null,n===null||n.return===null){Ut=1,Hs=e,Nt=null;break}e:{var o=t,a=n.return,s=n,l=e;if(e=jt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=_v(a);if(m!==null){m.flags&=-257,yv(m,a,s,o,e),m.mode&1&&vv(o,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){vv(o,u,e),km();break e}l=Error(le(426))}}else if(_t&&s.mode&1){var p=_v(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),yv(p,a,s,o,e),vm(xa(l,s));break e}}o=l=xa(l,s),Ut!==4&&(Ut=2),Ss===null?Ss=[o]:Ss.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=Nx(o,l,e);fv(o,d);break e;case 1:s=l;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(vr===null||!vr.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=Ix(o,s,e);fv(o,E);break e}}o=o.return}while(o!==null)}Zx(n)}catch(R){e=R,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function Kx(){var t=ju.current;return ju.current=Wu,t===null?Wu:t}function km(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!(co&268435455)&&!(Nc&268435455)||ar(Vt,jt)}function qu(t,e){var n=et;et|=2;var i=Kx();(Vt!==t||jt!==e)&&(Ai=null,eo(t,e));do try{Bb();break}catch(r){Yx(t,r)}while(!0);if(ym(),et=n,ju.current=i,Nt!==null)throw Error(le(261));return Vt=null,jt=0,Ut}function Bb(){for(;Nt!==null;)Qx(Nt)}function Hb(){for(;Nt!==null&&!dw();)Qx(Nt)}function Qx(t){var e=eS(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?Zx(t):Nt=e,Nm.current=null}function Zx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Db(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Nt=null;return}}else if(n=Ib(n,e,An),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Gr(t,e,n){var i=lt,r=Gn.transition;try{Gn.transition=null,lt=1,Vb(t,e,n,i)}finally{Gn.transition=r,lt=i}return null}function Vb(t,e,n,i){do la();while(ur!==null);if(et&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ew(t,o),t===Vt&&(Nt=Vt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rl||(Rl=!0,tS(Ru,function(){return la(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Gn.transition,Gn.transition=null;var a=lt;lt=1;var s=et;et|=4,Nm.current=null,Ub(t,n),Xx(n,t),lb(th),Lu=!!eh,th=eh=null,t.current=n,kb(n),hw(),et=s,lt=a,Gn.transition=o}else t.current=n;if(Rl&&(Rl=!1,ur=t,$u=r),o=t.pendingLanes,o===0&&(vr=null),gw(n.stateNode),yn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xu)throw Xu=!1,t=Sh,Sh=null,t;return $u&1&&t.tag!==0&&la(),o=t.pendingLanes,o&1?t===Eh?Es++:(Es=0,Eh=t):Es=0,Ir(),null}function la(){if(ur!==null){var t=Ny($u),e=Gn.transition,n=lt;try{if(Gn.transition=null,lt=16>t?16:t,ur===null)var i=!1;else{if(t=ur,ur=null,$u=0,et&6)throw Error(le(331));var r=et;for(et|=4,Me=t.current;Me!==null;){var o=Me,a=o.child;if(Me.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(Me=u;Me!==null;){var c=Me;switch(c.tag){case 0:case 11:case 15:xs(8,c,o)}var f=c.child;if(f!==null)f.return=c,Me=f;else for(;Me!==null;){c=Me;var h=c.sibling,m=c.return;if(Gx(c),c===u){Me=null;break}if(h!==null){h.return=m,Me=h;break}Me=m}}}var _=o.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}Me=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Me=a;else e:for(;Me!==null;){if(o=Me,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xs(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,Me=d;break e}Me=o.return}}var g=t.current;for(Me=g;Me!==null;){a=Me;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Me=y;else e:for(a=g;Me!==null;){if(s=Me,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Lc(9,s)}}catch(R){bt(s,s.return,R)}if(s===a){Me=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,Me=E;break e}Me=s.return}}if(et=r,Ir(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(Mc,t)}catch{}i=!0}return i}finally{lt=n,Gn.transition=e}}return!1}function Nv(t,e,n){e=xa(n,e),e=Nx(t,e,1),t=gr(t,e,1),e=an(),t!==null&&(Js(t,1,e),yn(t,e))}function bt(t,e,n){if(t.tag===3)Nv(t,t,n);else for(;e!==null;){if(e.tag===3){Nv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vr===null||!vr.has(i))){t=xa(n,t),t=Ix(e,t,1),e=gr(e,t,1),t=an(),e!==null&&(Js(e,1,t),yn(e,t));break}}e=e.return}}function Gb(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(jt&n)===n&&(Ut===4||Ut===3&&(jt&130023424)===jt&&500>At()-Dm?eo(t,0):Im|=n),yn(t,e)}function Jx(t,e){e===0&&(t.mode&1?(e=yl,yl<<=1,!(yl&130023424)&&(yl=4194304)):e=1);var n=an();t=Fi(t,e),t!==null&&(Js(t,e,n),yn(t,n))}function Wb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jx(t,n)}function jb(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),Jx(t,n)}var eS;eS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,Nb(t,e,n);mn=!!(t.flags&131072)}else mn=!1,_t&&e.flags&1048576&&rx(e,Fu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;fu(t,e),t=e.pendingProps;var r=ga(e,Jt.current);sa(e,n),r=Am(null,e,i,t,r,n);var o=Cm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(o=!0,Uu(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Em(e),r.updater=Pc,e.stateNode=r,r._reactInternals=e,ch(e,i,t,n),e=hh(null,e,i,!0,o,n)):(e.tag=0,_t&&o&&mm(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(fu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$b(i),t=Zn(i,t),r){case 0:e=dh(null,e,i,t,n);break e;case 1:e=Ev(null,e,i,t,n);break e;case 11:e=xv(null,e,i,t,n);break e;case 14:e=Sv(null,e,i,Zn(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),dh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Ev(t,e,i,r,n);case 3:e:{if(kx(e),t===null)throw Error(le(387));i=e.pendingProps,o=e.memoizedState,r=o.element,cx(t,e),Hu(e,i,null,n);var a=e.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=xa(Error(le(423)),e),e=Mv(t,e,i,n,r);break e}else if(i!==r){r=xa(Error(le(424)),e),e=Mv(t,e,i,n,r);break e}else for(Rn=mr(e.stateNode.containerInfo.firstChild),Pn=e,_t=!0,ei=null,n=lx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(va(),i===r){e=zi(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return fx(e),t===null&&sh(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,a=r.children,nh(i,r)?a=null:o!==null&&nh(i,o)&&(e.flags|=32),Ux(t,e),rn(t,e,a,n),e.child;case 6:return t===null&&sh(e),null;case 13:return Fx(t,e,n);case 4:return Mm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_a(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),xv(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,a=r.value,ft(zu,i._currentValue),i._currentValue=a,o!==null)if(ai(o.value,a)){if(o.children===r.children&&!vn.current){e=zi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Oi(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),lh(o.return,n,e),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(le(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),lh(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,sa(e,n),r=jn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),Sv(t,e,i,r,n);case 15:return Dx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),fu(t,e),e.tag=1,_n(i)?(t=!0,Uu(e)):t=!1,sa(e,n),Lx(e,i,r),ch(e,i,r,n),hh(null,e,i,!0,t,n);case 19:return zx(t,e,n);case 22:return Ox(t,e,n)}throw Error(le(156,e.tag))};function tS(t,e){return Cy(t,e)}function Xb(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new Xb(t,e,n,i)}function Fm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $b(t){if(typeof t=="function")return Fm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===im)return 11;if(t===rm)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pu(t,e,n,i,r,o){var a=2;if(i=t,typeof t=="function")Fm(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Bo:return to(n.children,r,o,e);case nm:a=8,r|=8;break;case Dd:return t=Hn(12,n,e,r|2),t.elementType=Dd,t.lanes=o,t;case Od:return t=Hn(13,n,e,r),t.elementType=Od,t.lanes=o,t;case Ud:return t=Hn(19,n,e,r),t.elementType=Ud,t.lanes=o,t;case fy:return Ic(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uy:a=10;break e;case cy:a=9;break e;case im:a=11;break e;case rm:a=14;break e;case nr:a=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=Hn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function to(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function Ic(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=fy,t.lanes=n,t.stateNode={isHidden:!1},t}function Df(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function Of(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qb(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mf(0),this.expirationTimes=mf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zm(t,e,n,i,r,o,a,s,l){return t=new qb(t,e,n,s,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Hn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Em(o),t}function Yb(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function nS(t){if(!t)return wr;t=t._reactInternals;e:{if(yo(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(_n(n))return nx(t,n,e)}return e}function iS(t,e,n,i,r,o,a,s,l){return t=zm(n,i,!0,t,r,o,a,s,l),t.context=nS(null),n=t.current,i=an(),r=_r(n),o=Oi(i,r),o.callback=e??null,gr(n,o,r),t.current.lanes=r,Js(t,r,i),yn(t,i),t}function Dc(t,e,n,i){var r=e.current,o=an(),a=_r(r);return n=nS(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(o,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=gr(r,e,a),t!==null&&(oi(t,r,a,o),lu(t,r,a)),a}function Yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Iv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bm(t,e){Iv(t,e),(t=t.alternate)&&Iv(t,e)}function Kb(){return null}var rS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hm(t){this._internalRoot=t}Oc.prototype.render=Hm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));Dc(t,e,null,null)};Oc.prototype.unmount=Hm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fo(function(){Dc(null,t,null,null)}),e[ki]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Oy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&ky(t)}};function Vm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dv(){}function Qb(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Yu(a);o.call(u)}}var a=iS(e,i,t,0,null,!1,!1,"",Dv);return t._reactRootContainer=a,t[ki]=a.current,Is(t.nodeType===8?t.parentNode:t),fo(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var u=Yu(l);s.call(u)}}var l=zm(t,0,!1,null,null,!1,!1,"",Dv);return t._reactRootContainer=l,t[ki]=l.current,Is(t.nodeType===8?t.parentNode:t),fo(function(){Dc(e,l,n,i)}),l}function kc(t,e,n,i,r){var o=n._reactRootContainer;if(o){var a=o;if(typeof r=="function"){var s=r;r=function(){var l=Yu(a);s.call(l)}}Dc(e,a,t,r)}else a=Qb(n,e,t,r,i);return Yu(a)}Iy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ss(e.pendingLanes);n!==0&&(sm(e,n|1),yn(e,At()),!(et&6)&&(Sa=At()+500,Ir()))}break;case 13:fo(function(){var i=Fi(t,1);if(i!==null){var r=an();oi(i,t,1,r)}}),Bm(t,1)}};lm=function(t){if(t.tag===13){var e=Fi(t,134217728);if(e!==null){var n=an();oi(e,t,134217728,n)}Bm(t,134217728)}};Dy=function(t){if(t.tag===13){var e=_r(t),n=Fi(t,e);if(n!==null){var i=an();oi(n,t,e,i)}Bm(t,e)}};Oy=function(){return lt};Uy=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Xd=function(t,e,n){switch(e){case"input":if(zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ac(i);if(!r)throw Error(le(90));hy(i),zd(i,r)}}}break;case"textarea":my(t,n);break;case"select":e=n.value,e!=null&&ia(t,!!n.multiple,e,!1)}};Ey=Om;My=fo;var Zb={usingClientEntryPoint:!1,Events:[tl,Wo,Ac,xy,Sy,Om]},Qa={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jb={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ty(t),t===null?null:t.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||Kb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{Mc=Pl.inject(Jb),mi=Pl}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zb;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vm(e))throw Error(le(200));return Yb(t,e,null,n)};Dn.createRoot=function(t,e){if(!Vm(t))throw Error(le(299));var n=!1,i="",r=rS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zm(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,Is(t.nodeType===8?t.parentNode:t),new Hm(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=Ty(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return fo(t)};Dn.hydrate=function(t,e,n){if(!Uc(e))throw Error(le(200));return kc(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!Vm(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",a=rS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=iS(e,null,t,1,n??null,r,!1,o,a),t[ki]=e.current,Is(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Oc(e)};Dn.render=function(t,e,n){if(!Uc(e))throw Error(le(200));return kc(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!Uc(t))throw Error(le(40));return t._reactRootContainer?(fo(function(){kc(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Dn.unstable_batchedUpdates=Om;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Uc(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return kc(t,e,n,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426";function oS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oS)}catch(t){console.error(t)}}oS(),oy.exports=Dn;var eT=oy.exports,aS,Ov=eT;aS=Ov.createRoot,Ov.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vs(){return Vs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Vs.apply(this,arguments)}var cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(cr||(cr={}));const Uv="popstate";function tT(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:a,hash:s}=i.location;return bh("",{pathname:o,search:a,hash:s},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:lS(r)}return iT(e,n,null,t)}function kt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function sS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nT(){return Math.random().toString(36).substr(2,8)}function kv(t,e){return{usr:t.state,key:t.key,idx:e}}function bh(t,e,n,i){return n===void 0&&(n=null),Vs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?za(e):e,{state:n,key:e&&e.key||i||nT()})}function lS(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function za(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function iT(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,a=r.history,s=cr.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(Vs({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function f(){s=cr.Pop;let p=c(),d=p==null?null:p-u;u=p,l&&l({action:s,location:x.location,delta:d})}function h(p,d){s=cr.Push;let g=bh(x.location,p,d);u=c()+1;let y=kv(g,u),E=x.createHref(g);try{a.pushState(y,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(E)}o&&l&&l({action:s,location:x.location,delta:1})}function m(p,d){s=cr.Replace;let g=bh(x.location,p,d);u=c();let y=kv(g,u),E=x.createHref(g);a.replaceState(y,"",E),o&&l&&l({action:s,location:x.location,delta:0})}function _(p){let d=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:lS(p);return g=g.replace(/ $/,"%20"),kt(d,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,d)}let x={get action(){return s},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Uv,f),l=p,()=>{r.removeEventListener(Uv,f),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let d=_(p);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:m,go(p){return a.go(p)}};return x}var Fv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fv||(Fv={}));function rT(t,e,n){return n===void 0&&(n="/"),oT(t,e,n,!1)}function oT(t,e,n,i){let r=typeof e=="string"?za(e):e,o=fS(r.pathname||"/",n);if(o==null)return null;let a=uS(t);aT(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=vT(o);s=mT(a[l],u,i)}return s}function uS(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(kt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=no([i,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(kt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),uS(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:hT(u,o.index),routesMeta:c})};return t.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))r(o,a);else for(let l of cS(o.path))r(o,a,l)}),e}function cS(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let a=cS(i.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),r&&s.push(...a),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function aT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pT(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const sT=/^:[\w-]+$/,lT=3,uT=2,cT=1,fT=10,dT=-2,zv=t=>t==="*";function hT(t,e){let n=t.split("/"),i=n.length;return n.some(zv)&&(i+=dT),e&&(i+=uT),n.filter(r=>!zv(r)).reduce((r,o)=>r+(sT.test(o)?lT:o===""?cT:fT),i)}function pT(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function mT(t,e,n){let{routesMeta:i}=t,r={},o="/",a=[];for(let s=0;s<i.length;++s){let l=i[s],u=s===i.length-1,c=o==="/"?e:e.slice(o.length)||"/",f=Bv({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=Bv({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:no([o,f.pathname]),pathnameBase:MT(no([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=no([o,f.pathnameBase]))}return a}function Bv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=gT(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],a=o.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:i.reduce((u,c,f)=>{let{paramName:h,isOptional:m}=c;if(h==="*"){let x=s[f]||"";a=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const _=s[f];return m&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:t}}function gT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),sS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(i.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function vT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return sS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function fS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function _T(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?za(t):t;return{pathname:n?n.startsWith("/")?n:yT(n,e):e,search:wT(i),hash:bT(r)}}function yT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Uf(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ST(t,e){let n=xT(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function ET(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=za(t):(r=Vs({},t),kt(!r.pathname||!r.pathname.includes("?"),Uf("?","pathname","search",r)),kt(!r.pathname||!r.pathname.includes("#"),Uf("#","pathname","hash",r)),kt(!r.search||!r.search.includes("#"),Uf("#","search","hash",r)));let o=t===""||r.pathname==="",a=o?"/":r.pathname,s;if(a==null)s=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}s=f>=0?e[f]:"/"}let l=_T(r,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const no=t=>t.join("/").replace(/\/\/+/g,"/"),MT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function TT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const dS=["post","put","patch","delete"];new Set(dS);const AT=["get",...dS];new Set(AT);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gs(){return Gs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Gs.apply(this,arguments)}const Gm=J.createContext(null),CT=J.createContext(null),Fc=J.createContext(null),zc=J.createContext(null),Ba=J.createContext({outlet:null,matches:[],isDataRoute:!1}),hS=J.createContext(null);function Bc(){return J.useContext(zc)!=null}function pS(){return Bc()||kt(!1),J.useContext(zc).location}function mS(t){J.useContext(Fc).static||J.useLayoutEffect(t)}function Hc(){let{isDataRoute:t}=J.useContext(Ba);return t?HT():RT()}function RT(){Bc()||kt(!1);let t=J.useContext(Gm),{basename:e,future:n,navigator:i}=J.useContext(Fc),{matches:r}=J.useContext(Ba),{pathname:o}=pS(),a=JSON.stringify(ST(r,n.v7_relativeSplatPath)),s=J.useRef(!1);return mS(()=>{s.current=!0}),J.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){i.go(u);return}let f=ET(u,JSON.parse(a),o,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:no([e,f.pathname])),(c.replace?i.replace:i.push)(f,c.state,c)},[e,i,a,o,t])}function PT(t,e){return LT(t,e)}function LT(t,e,n,i){Bc()||kt(!1);let{navigator:r}=J.useContext(Fc),{matches:o}=J.useContext(Ba),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=pS(),c;if(e){var f;let p=typeof e=="string"?za(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||kt(!1),c=p}else c=u;let h=c.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=rT(t,{pathname:m}),x=UT(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},s,p.params),pathname:no([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:no([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n,i);return e&&x?J.createElement(zc.Provider,{value:{location:Gs({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:cr.Pop}},x):x}function NT(){let t=BT(),e=TT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),n?J.createElement("pre",{style:r},n):null,null)}const IT=J.createElement(NT,null);class DT extends J.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?J.createElement(Ba.Provider,{value:this.props.routeContext},J.createElement(hS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function OT(t){let{routeContext:e,match:n,children:i}=t,r=J.useContext(Gm);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),J.createElement(Ba.Provider,{value:e},i)}function UT(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=i)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let c=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);c>=0||kt(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<a.length;c++){let f=a[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:m}=n,_=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||_){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,f,h)=>{let m,_=!1,x=null,p=null;n&&(m=s&&f.route.id?s[f.route.id]:void 0,x=f.route.errorElement||IT,l&&(u<0&&h===0?(_=!0,p=null):u===h&&(_=!0,p=f.route.hydrateFallbackElement||null)));let d=e.concat(a.slice(0,h+1)),g=()=>{let y;return m?y=x:_?y=p:f.route.Component?y=J.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=c,J.createElement(OT,{match:f,routeContext:{outlet:c,matches:d,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?J.createElement(DT,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var gS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(gS||{}),Ku=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ku||{});function kT(t){let e=J.useContext(Gm);return e||kt(!1),e}function FT(t){let e=J.useContext(CT);return e||kt(!1),e}function zT(t){let e=J.useContext(Ba);return e||kt(!1),e}function vS(t){let e=zT(),n=e.matches[e.matches.length-1];return n.route.id||kt(!1),n.route.id}function BT(){var t;let e=J.useContext(hS),n=FT(Ku.UseRouteError),i=vS(Ku.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function HT(){let{router:t}=kT(gS.UseNavigateStable),e=vS(Ku.UseNavigateStable),n=J.useRef(!1);return mS(()=>{n.current=!0}),J.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Gs({fromRouteId:e},o)))},[t,e])}function us(t){kt(!1)}function VT(t){let{basename:e="/",children:n=null,location:i,navigationType:r=cr.Pop,navigator:o,static:a=!1,future:s}=t;Bc()&&kt(!1);let l=e.replace(/^\/*/,"/"),u=J.useMemo(()=>({basename:l,navigator:o,static:a,future:Gs({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof i=="string"&&(i=za(i));let{pathname:c="/",search:f="",hash:h="",state:m=null,key:_="default"}=i,x=J.useMemo(()=>{let p=fS(c,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:m,key:_},navigationType:r}},[l,c,f,h,m,_,r]);return x==null?null:J.createElement(Fc.Provider,{value:u},J.createElement(zc.Provider,{children:n,value:x}))}function GT(t){let{children:e,location:n}=t;return PT(Th(e),n)}new Promise(()=>{});function Th(t,e){e===void 0&&(e=[]);let n=[];return J.Children.forEach(t,(i,r)=>{if(!J.isValidElement(i))return;let o=[...e,r];if(i.type===J.Fragment){n.push.apply(n,Th(i.props.children,o));return}i.type!==us&&kt(!1),!i.props.index||!i.props.children||kt(!1);let a={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Th(i.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const WT="6";try{window.__reactRouterVersion=WT}catch{}const jT="startTransition",Hv=GM[jT];function XT(t){let{basename:e,children:n,future:i,window:r}=t,o=J.useRef();o.current==null&&(o.current=tT({window:r,v5Compat:!0}));let a=o.current,[s,l]=J.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},c=J.useCallback(f=>{u&&Hv?Hv(()=>l(f)):l(f)},[l,u]);return J.useLayoutEffect(()=>a.listen(c),[a,c]),J.createElement(VT,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:a,future:i})}var Vv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Vv||(Vv={}));var Gv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Gv||(Gv={}));var _S={exports:{}},$T="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",qT=$T,YT=qT;function yS(){}function xS(){}xS.resetWarningCache=yS;var KT=function(){function t(i,r,o,a,s,l){if(l!==YT){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:xS,resetWarningCache:yS};return n.PropTypes=n,n};_S.exports=KT();var QT=_S.exports;const X=Sc(QT),xo=({titleText:t})=>{const[e,n]=J.useState(!1),i=J.useRef(null);return J.useEffect(()=>{const r=i.current,o=new IntersectionObserver(([a])=>{n(a.isIntersecting)},{threshold:.5});return r&&o.observe(r),()=>{r&&o.unobserve(r)}},[]),L.jsxs("div",{className:"relative text-center overflow-hidden",ref:i,children:[L.jsx("h1",{className:`relative font-black text-white text-[clamp(4rem,8vw,7.5em)] transform ${e?"animate-slideUp":"animate-slideDown"} transition-transform duration-800 ease-in-out `,children:t}),L.jsx("div",{className:"absolute inset-0 bg-transparent"})]})};xo.propTypes={titleText:X.string.isRequired};const ZT=()=>{const[t,e]=J.useState({paragraph1:!1,paragraph2:!1}),n=J.useRef(null);return J.useEffect(()=>{const i=n.current,r=new IntersectionObserver(([o])=>{o.isIntersecting&&(e({paragraph1:!0}),setTimeout(()=>e(a=>({...a,paragraph2:!0})),500),r.disconnect())},{threshold:.2});return i&&r.observe(i),()=>i&&r.disconnect()},[]),L.jsxs("div",{ref:n,className:"w-full min-h-screen flex flex-col items-center justify-center py-16 text-white bg-black text-justify",children:[L.jsx(xo,{titleText:"WHAT WE DO"}),L.jsxs("div",{className:"mt-8 text-center space-y-6 w-full md:w-3/4 lg:w-2/3",children:[L.jsx("p",{className:`transition-transform transform duration-1000 ease-out ${t.paragraph1?"opacity-100 translate-y-0":"opacity-0 translate-y-10"} text-xl md:text-2xl lg:text-3xl leading-snug`,children:"We study the neurobiology of energy balance. Using cutting-edge approaches, we aim to understand the molecular, cellular, and circuit mechanisms through which the brain regulates food intake and energy expenditure."}),L.jsx("p",{className:`transition-transform transform duration-1000 ease-out delay-500 ${t.paragraph2?"opacity-100 translate-y-0":"opacity-0 translate-y-10"} text-xl md:text-2xl lg:text-3xl leading-snug`,children:"We are also developing novel technologies to better understand how the brain affects behavior and physiology."})]})]})},SS=({text:t,glowColor:e="#0070f3",glowSpread:n="8px"})=>L.jsx("div",{className:"text-white font-bold text-[clamp(3rem,10vw,7.5rem)]",children:L.jsx("span",{className:"relative",style:{textShadow:`0 0 ${n} ${e}, 0 0 ${n} ${e}`},children:t})});SS.propTypes={text:X.string.isRequired,glowColor:X.string,glowSpread:X.string};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wm="169",JT=0,Wv=1,eA=2,ES=1,tA=2,Ti=3,br=0,xn=1,Ri=2,xr=0,ua=1,jv=2,Xv=3,$v=4,nA=5,Xr=100,iA=101,rA=102,oA=103,aA=104,sA=200,lA=201,uA=202,cA=203,Ah=204,Ch=205,fA=206,dA=207,hA=208,pA=209,mA=210,gA=211,vA=212,_A=213,yA=214,Rh=0,Ph=1,Lh=2,Ea=3,Nh=4,Ih=5,Dh=6,Oh=7,MS=0,xA=1,SA=2,Sr=0,EA=1,MA=2,wA=3,bA=4,TA=5,AA=6,CA=7,wS=300,Ma=301,wa=302,Uh=303,kh=304,Vc=306,Fh=1e3,Zr=1001,zh=1002,Vn=1003,RA=1004,Ll=1005,ti=1006,kf=1007,Jr=1008,Bi=1009,bS=1010,TS=1011,Ws=1012,jm=1013,ho=1014,Ni=1015,il=1016,Xm=1017,$m=1018,ba=1020,AS=35902,CS=1021,RS=1022,ii=1023,PS=1024,LS=1025,ca=1026,Ta=1027,NS=1028,qm=1029,IS=1030,Ym=1031,Km=1033,mu=33776,gu=33777,vu=33778,_u=33779,Bh=35840,Hh=35841,Vh=35842,Gh=35843,Wh=36196,jh=37492,Xh=37496,$h=37808,qh=37809,Yh=37810,Kh=37811,Qh=37812,Zh=37813,Jh=37814,ep=37815,tp=37816,np=37817,ip=37818,rp=37819,op=37820,ap=37821,yu=36492,sp=36494,lp=36495,DS=36283,up=36284,cp=36285,fp=36286,PA=3200,LA=3201,NA=0,IA=1,sr="",ui="srgb",Dr="srgb-linear",Qm="display-p3",Gc="display-p3-linear",Qu="linear",pt="srgb",Zu="rec709",Ju="p3",Mo=7680,qv=519,DA=512,OA=513,UA=514,OS=515,kA=516,FA=517,zA=518,BA=519,Yv=35044,Kv="300 es",Ii=2e3,ec=2001;class Ha{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ff=Math.PI/180,dp=180/Math.PI;function rl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function pn(t,e,n){return Math.max(e,Math.min(n,t))}function HA(t,e){return(t%e+e)%e}function zf(t,e,n){return(1-n)*t+n*e}function Za(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,o,a,s,l,u){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,s,l,u)}set(e,n,i,r,o,a,s,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=s,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],s=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],d=r[6],g=r[1],y=r[4],E=r[7],R=r[2],C=r[5],T=r[8];return o[0]=a*x+s*g+l*R,o[3]=a*p+s*y+l*C,o[6]=a*d+s*E+l*T,o[1]=u*x+c*g+f*R,o[4]=u*p+c*y+f*C,o[7]=u*d+c*E+f*T,o[2]=h*x+m*g+_*R,o[5]=h*p+m*y+_*C,o[8]=h*d+m*E+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*s*u-i*o*c+i*s*l+r*o*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],f=c*a-s*u,h=s*l-c*o,m=u*o-a*l,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(s*i-r*a)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*o-s*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(a*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,a,s){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*a+u*s)+a+e,-r*u,r*l,-r*(-u*a+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(Bf.makeScale(e,n)),this}rotate(e){return this.premultiply(Bf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bf=new $e;function US(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VA(){const t=tc("canvas");return t.style.display="block",t}const Qv={};function xu(t){t in Qv||(Qv[t]=!0,console.warn(t))}function GA(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function WA(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jA(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zv=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jv=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ja={[Dr]:{transfer:Qu,primaries:Zu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ui]:{transfer:pt,primaries:Zu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Gc]:{transfer:Qu,primaries:Ju,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Jv),fromReference:t=>t.applyMatrix3(Zv)},[Qm]:{transfer:pt,primaries:Ju,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jv),fromReference:t=>t.applyMatrix3(Zv).convertLinearToSRGB()}},XA=new Set([Dr,Gc]),ot={enabled:!0,_workingColorSpace:Dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!XA.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ja[e].toReference,r=Ja[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ja[t].primaries},getTransfer:function(t){return t===sr?Qu:Ja[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ja[e].luminanceCoefficients)}};function fa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let wo;class $A{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wo===void 0&&(wo=tc("canvas")),wo.width=e.width,wo.height=e.height;const i=wo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=fa(o[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fa(n[i]/255)*255):n[i]=fa(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qA=0;class kS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qA++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(Vf(r[a].image)):o.push(Vf(r[a]))}else o=Vf(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Vf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$A.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YA=0;class Sn extends Ha{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,i=Zr,r=Zr,o=ti,a=Jr,s=ii,l=Bi,u=Sn.DEFAULT_ANISOTROPY,c=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YA++}),this.uuid=rl(),this.name="",this.source=new kS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fh:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fh:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=wS;Sn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,E=(m+1)/2,R=(d+1)/2,C=(c+h)/4,T=(f+x)/4,M=(_+p)/4;return y>E&&y>R?y<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(y),r=C/i,o=T/i):E>R?E<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),i=C/r,o=M/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=T/o,r=M/o),this.set(i,r,o,n),this}let g=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-c)*(h-c));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(f-x)/g,this.z=(h-c)/g,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KA extends Ha{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let s=0;s<a;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new kS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class po extends KA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class FS extends Sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QA extends Sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ol{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,a,s){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=o[a+0],m=o[a+1],_=o[a+2],x=o[a+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(s===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==h||u!==m||c!==_){let p=1-s;const d=l*h+u*m+c*_+f*x,g=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const R=Math.sqrt(y),C=Math.atan2(R,d*g);p=Math.sin(p*C)/R,s=Math.sin(s*C)/R}const E=s*g;if(l=l*p+h*E,u=u*p+m*E,c=c*p+_*E,f=f*p+x*E,p===1-s){const R=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=R,u*=R,c*=R,f*=R}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,a){const s=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=o[a],h=o[a+1],m=o[a+2],_=o[a+3];return e[n]=s*_+c*f+l*m-u*h,e[n+1]=l*_+c*h+u*f-s*m,e[n+2]=u*_+c*m+s*h-l*f,e[n+3]=c*_-s*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,u=s(i/2),c=s(r/2),f=s(o/2),h=l(i/2),m=l(r/2),_=l(o/2);switch(a){case"XYZ":this._x=h*c*f+u*m*_,this._y=u*m*f-h*c*_,this._z=u*c*_+h*m*f,this._w=u*c*f-h*m*_;break;case"YXZ":this._x=h*c*f+u*m*_,this._y=u*m*f-h*c*_,this._z=u*c*_-h*m*f,this._w=u*c*f+h*m*_;break;case"ZXY":this._x=h*c*f-u*m*_,this._y=u*m*f+h*c*_,this._z=u*c*_+h*m*f,this._w=u*c*f-h*m*_;break;case"ZYX":this._x=h*c*f-u*m*_,this._y=u*m*f+h*c*_,this._z=u*c*_-h*m*f,this._w=u*c*f+h*m*_;break;case"YZX":this._x=h*c*f+u*m*_,this._y=u*m*f+h*c*_,this._z=u*c*_-h*m*f,this._w=u*c*f-h*m*_;break;case"XZY":this._x=h*c*f-u*m*_,this._y=u*m*f-h*c*_,this._z=u*c*_+h*m*f,this._w=u*c*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],a=n[1],s=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+s+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(o-u)*m,this._z=(a-r)*m}else if(i>s&&i>f){const m=2*Math.sqrt(1+i-s-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(o+u)/m}else if(s>f){const m=2*Math.sqrt(1+s-i-f);this._w=(o-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-s);this._w=(a-r)/m,this._x=(o+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,a=e._w,s=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*s+r*u-o*l,this._y=r*c+a*l+o*s-i*u,this._z=o*c+a*u+i*l-r*s,this._w=a*c-i*s-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,s),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(e0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(e0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,u=2*(a*r-s*i),c=2*(s*n-o*r),f=2*(o*i-a*n);return this.x=n+l*u+a*f-s*c,this.y=i+l*c+s*u-o*f,this.z=r+l*f+o*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,a=n.x,s=n.y,l=n.z;return this.x=r*l-o*s,this.y=o*a-i*l,this.z=i*s-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new Y,e0=new ol;class al{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(o,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Il.subVectors(this.max,es),bo.subVectors(e.a,es),To.subVectors(e.b,es),Ao.subVectors(e.c,es),Yi.subVectors(To,bo),Ki.subVectors(Ao,To),Ur.subVectors(bo,Ao);let n=[0,-Yi.z,Yi.y,0,-Ki.z,Ki.y,0,-Ur.z,Ur.y,Yi.z,0,-Yi.x,Ki.z,0,-Ki.x,Ur.z,0,-Ur.x,-Yi.y,Yi.x,0,-Ki.y,Ki.x,0,-Ur.y,Ur.x,0];return!Wf(n,bo,To,Ao,Il)||(n=[1,0,0,0,1,0,0,0,1],!Wf(n,bo,To,Ao,Il))?!1:(Dl.crossVectors(Yi,Ki),n=[Dl.x,Dl.y,Dl.z],Wf(n,bo,To,Ao,Il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Yn=new Y,Nl=new al,bo=new Y,To=new Y,Ao=new Y,Yi=new Y,Ki=new Y,Ur=new Y,es=new Y,Il=new Y,Dl=new Y,kr=new Y;function Wf(t,e,n,i,r){for(let o=0,a=t.length-3;o<=a;o+=3){kr.fromArray(t,o);const s=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=e.dot(kr),u=n.dot(kr),c=i.dot(kr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}const ZA=new al,ts=new Y,jf=new Y;class Wc{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZA.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const n=ts.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ts,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(jf)),this.expandByPoint(ts.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new Y,Xf=new Y,Ol=new Y,Qi=new Y,$f=new Y,Ul=new Y,qf=new Y;class zS{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xf.copy(e).add(n).multiplyScalar(.5),Ol.copy(n).sub(e).normalize(),Qi.copy(this.origin).sub(Xf);const o=e.distanceTo(n)*.5,a=-this.direction.dot(Ol),s=Qi.dot(this.direction),l=-Qi.dot(Ol),u=Qi.lengthSq(),c=Math.abs(1-a*a);let f,h,m,_;if(c>0)if(f=a*l-s,h=a*s-l,_=o*c,f>=0)if(h>=-_)if(h<=_){const x=1/c;f*=x,h*=x,m=f*(f+a*h+2*s)+h*(a*f+h+2*l)+u}else h=o,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+u;else h=-o,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-a*o+s)),h=f>0?-o:Math.min(Math.max(-o,-l),o),m=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(f=Math.max(0,-(a*o+s)),h=f>0?o:Math.min(Math.max(-o,-l),o),m=-f*f+h*(h+2*l)+u);else h=a>0?-o:o,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xf).addScaledVector(Ol,h),m}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,l=i+a;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,a,s,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,o){$f.subVectors(n,e),Ul.subVectors(i,e),qf.crossVectors($f,Ul);let a=this.direction.dot(qf),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Qi.subVectors(this.origin,e);const l=s*this.direction.dot(Ul.crossVectors(Qi,Ul));if(l<0)return null;const u=s*this.direction.dot($f.cross(Qi));if(u<0||l+u>a)return null;const c=-s*Qi.dot(qf);return c<0?null:this.at(c/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,o,a,s,l,u,c,f,h,m,_,x,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,s,l,u,c,f,h,m,_,x,p)}set(e,n,i,r,o,a,s,l,u,c,f,h,m,_,x,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=o,d[5]=a,d[9]=s,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Co.setFromMatrixColumn(e,0).length(),o=1/Co.setFromMatrixColumn(e,1).length(),a=1/Co.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=a*c,m=a*f,_=s*c,x=s*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=m+_*u,n[5]=h-x*u,n[9]=-s*l,n[2]=x-h*u,n[6]=_+m*u,n[10]=a*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,_=u*c,x=u*f;n[0]=h+x*s,n[4]=_*s-m,n[8]=a*u,n[1]=a*f,n[5]=a*c,n[9]=-s,n[2]=m*s-_,n[6]=x+h*s,n[10]=a*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,_=u*c,x=u*f;n[0]=h-x*s,n[4]=-a*f,n[8]=_+m*s,n[1]=m+_*s,n[5]=a*c,n[9]=x-h*s,n[2]=-a*u,n[6]=s,n[10]=a*l}else if(e.order==="ZYX"){const h=a*c,m=a*f,_=s*c,x=s*f;n[0]=l*c,n[4]=_*u-m,n[8]=h*u+x,n[1]=l*f,n[5]=x*u+h,n[9]=m*u-_,n[2]=-u,n[6]=s*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*u,_=s*l,x=s*u;n[0]=l*c,n[4]=x-h*f,n[8]=_*f+m,n[1]=f,n[5]=a*c,n[9]=-s*c,n[2]=-u*c,n[6]=m*f+_,n[10]=h-x*f}else if(e.order==="XZY"){const h=a*l,m=a*u,_=s*l,x=s*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+x,n[5]=a*c,n[9]=m*f-_,n[2]=_*f-m,n[6]=s*c,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JA,e,eC)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Zi.crossVectors(i,bn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Zi.crossVectors(i,bn)),Zi.normalize(),kl.crossVectors(bn,Zi),r[0]=Zi.x,r[4]=kl.x,r[8]=bn.x,r[1]=Zi.y,r[5]=kl.y,r[9]=bn.y,r[2]=Zi.z,r[6]=kl.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],s=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],d=i[14],g=i[3],y=i[7],E=i[11],R=i[15],C=r[0],T=r[4],M=r[8],b=r[12],v=r[1],S=r[5],N=r[9],D=r[13],U=r[2],Z=r[6],V=r[10],H=r[14],O=r[3],G=r[7],te=r[11],ie=r[15];return o[0]=a*C+s*v+l*U+u*O,o[4]=a*T+s*S+l*Z+u*G,o[8]=a*M+s*N+l*V+u*te,o[12]=a*b+s*D+l*H+u*ie,o[1]=c*C+f*v+h*U+m*O,o[5]=c*T+f*S+h*Z+m*G,o[9]=c*M+f*N+h*V+m*te,o[13]=c*b+f*D+h*H+m*ie,o[2]=_*C+x*v+p*U+d*O,o[6]=_*T+x*S+p*Z+d*G,o[10]=_*M+x*N+p*V+d*te,o[14]=_*b+x*D+p*H+d*ie,o[3]=g*C+y*v+E*U+R*O,o[7]=g*T+y*S+E*Z+R*G,o[11]=g*M+y*N+E*V+R*te,o[15]=g*b+y*D+E*H+R*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],d=e[15];return _*(+o*l*f-r*u*f-o*s*h+i*u*h+r*s*m-i*l*m)+x*(+n*l*m-n*u*h+o*a*h-r*a*m+r*u*c-o*l*c)+p*(+n*u*f-n*s*m-o*a*f+i*a*m+o*s*c-i*u*c)+d*(-r*s*c-n*l*f+n*s*h+r*a*f-i*a*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],d=e[15],g=f*p*u-x*h*u+x*l*m-s*p*m-f*l*d+s*h*d,y=_*h*u-c*p*u-_*l*m+a*p*m+c*l*d-a*h*d,E=c*x*u-_*f*u+_*s*m-a*x*m-c*s*d+a*f*d,R=_*f*l-c*x*l-_*s*h+a*x*h+c*s*p-a*f*p,C=n*g+i*y+r*E+o*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=g*T,e[1]=(x*h*o-f*p*o-x*r*m+i*p*m+f*r*d-i*h*d)*T,e[2]=(s*p*o-x*l*o+x*r*u-i*p*u-s*r*d+i*l*d)*T,e[3]=(f*l*o-s*h*o-f*r*u+i*h*u+s*r*m-i*l*m)*T,e[4]=y*T,e[5]=(c*p*o-_*h*o+_*r*m-n*p*m-c*r*d+n*h*d)*T,e[6]=(_*l*o-a*p*o-_*r*u+n*p*u+a*r*d-n*l*d)*T,e[7]=(a*h*o-c*l*o+c*r*u-n*h*u-a*r*m+n*l*m)*T,e[8]=E*T,e[9]=(_*f*o-c*x*o-_*i*m+n*x*m+c*i*d-n*f*d)*T,e[10]=(a*x*o-_*s*o+_*i*u-n*x*u-a*i*d+n*s*d)*T,e[11]=(c*s*o-a*f*o-c*i*u+n*f*u+a*i*m-n*s*m)*T,e[12]=R*T,e[13]=(c*x*r-_*f*r+_*i*h-n*x*h-c*i*p+n*f*p)*T,e[14]=(_*s*r-a*x*r-_*i*l+n*x*l+a*i*p-n*s*p)*T,e[15]=(a*f*r-c*s*r+c*i*l-n*f*l-a*i*h+n*s*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,a=e.x,s=e.y,l=e.z,u=o*a,c=o*s;return this.set(u*a+i,u*s-r*l,u*l+r*s,0,u*s+r*l,c*s+i,c*l-r*a,0,u*l-r*s,c*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,a=n._y,s=n._z,l=n._w,u=o+o,c=a+a,f=s+s,h=o*u,m=o*c,_=o*f,x=a*c,p=a*f,d=s*f,g=l*u,y=l*c,E=l*f,R=i.x,C=i.y,T=i.z;return r[0]=(1-(x+d))*R,r[1]=(m+E)*R,r[2]=(_-y)*R,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(h+d))*C,r[6]=(p+g)*C,r[7]=0,r[8]=(_+y)*T,r[9]=(p-g)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Co.set(r[0],r[1],r[2]).length();const a=Co.set(r[4],r[5],r[6]).length(),s=Co.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);const u=1/o,c=1/a,f=1/s;return Kn.elements[0]*=u,Kn.elements[1]*=u,Kn.elements[2]*=u,Kn.elements[4]*=c,Kn.elements[5]*=c,Kn.elements[6]*=c,Kn.elements[8]*=f,Kn.elements[9]*=f,Kn.elements[10]*=f,n.setFromRotationMatrix(Kn),i.x=o,i.y=a,i.z=s,this}makePerspective(e,n,i,r,o,a,s=Ii){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(s===Ii)m=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(s===ec)m=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,a,s=Ii){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(a-o),h=(n+e)*u,m=(i+r)*c;let _,x;if(s===Ii)_=(a+o)*f,x=-2*f;else if(s===ec)_=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Co=new Y,Kn=new Rt,JA=new Y(0,0,0),eC=new Y(1,1,1),Zi=new Y,kl=new Y,bn=new Y,t0=new Rt,n0=new ol;class Hi{constructor(e=0,n=0,i=0,r=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(pn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return t0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return n0.setFromEuler(this),this.setFromQuaternion(n0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";let BS=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tC=0;const i0=new Y,Ro=new ol,Mi=new Rt,Fl=new Y,ns=new Y,nC=new Y,iC=new ol,r0=new Y(1,0,0),o0=new Y(0,1,0),a0=new Y(0,0,1),s0={type:"added"},rC={type:"removed"},Po={type:"childadded",child:null},Yf={type:"childremoved",child:null};class En extends Ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tC++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new Y,n=new Hi,i=new ol,r=new Y(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new $e}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new BS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ro.setFromAxisAngle(e,n),this.quaternion.multiply(Ro),this}rotateOnWorldAxis(e,n){return Ro.setFromAxisAngle(e,n),this.quaternion.premultiply(Ro),this}rotateX(e){return this.rotateOnAxis(r0,e)}rotateY(e){return this.rotateOnAxis(o0,e)}rotateZ(e){return this.rotateOnAxis(a0,e)}translateOnAxis(e,n){return i0.copy(e).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(r0,e)}translateY(e){return this.translateOnAxis(o0,e)}translateZ(e){return this.translateOnAxis(a0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fl.copy(e):Fl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(ns,Fl,this.up):Mi.lookAt(Fl,ns,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),Ro.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ro.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(s0),Po.child=e,this.dispatchEvent(Po),Po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rC),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(s0),Po.child=e,this.dispatchEvent(Po),Po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,nC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,iC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(e.animations,l))}}if(n){const s=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(s){const l=[];for(const u in s){const c=s[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}En.DEFAULT_UP=new Y(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new Y,wi=new Y,Kf=new Y,bi=new Y,Lo=new Y,No=new Y,l0=new Y,Qf=new Y,Zf=new Y,Jf=new Y,ed=new Ct,td=new Ct,nd=new Ct;class ni{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Qn.subVectors(r,n),wi.subVectors(i,n),Kf.subVectors(e,n);const a=Qn.dot(Qn),s=Qn.dot(wi),l=Qn.dot(Kf),u=wi.dot(wi),c=wi.dot(Kf),f=a*u-s*s;if(f===0)return o.set(0,0,0),null;const h=1/f,m=(u*l-s*c)*h,_=(a*c-s*l)*h;return o.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,r,o,a,s,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,bi.x),l.addScaledVector(a,bi.y),l.addScaledVector(s,bi.z),l)}static getInterpolatedAttribute(e,n,i,r,o,a){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,n),td.fromBufferAttribute(e,i),nd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ed,o.x),a.addScaledVector(td,o.y),a.addScaledVector(nd,o.z),a}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),wi.subVectors(e,n),Qn.cross(wi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Qn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let a,s;Lo.subVectors(r,i),No.subVectors(o,i),Qf.subVectors(e,i);const l=Lo.dot(Qf),u=No.dot(Qf);if(l<=0&&u<=0)return n.copy(i);Zf.subVectors(e,r);const c=Lo.dot(Zf),f=No.dot(Zf);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(Lo,a);Jf.subVectors(e,o);const m=Lo.dot(Jf),_=No.dot(Jf);if(_>=0&&m<=_)return n.copy(o);const x=m*u-l*_;if(x<=0&&u>=0&&_<=0)return s=u/(u-_),n.copy(i).addScaledVector(No,s);const p=c*_-m*f;if(p<=0&&f-c>=0&&m-_>=0)return l0.subVectors(o,r),s=(f-c)/(f-c+(m-_)),n.copy(r).addScaledVector(l0,s);const d=1/(p+x+h);return a=x*d,s=h*d,n.copy(i).addScaledVector(Lo,a).addScaledVector(No,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const HS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},zl={h:0,s:0,l:0};function id(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=HA(e,1),n=pn(n,0,1),i=pn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,a=2*i-o;this.r=id(a,o,e+1/3),this.g=id(a,o,e),this.b=id(a,o,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=ui){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ui){const i=HS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Hf(e.r),this.g=Hf(e.g),this.b=Hf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return ot.fromWorkingColorSpace(Qt.copy(this),e),Math.round(pn(Qt.r*255,0,255))*65536+Math.round(pn(Qt.g*255,0,255))*256+Math.round(pn(Qt.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,o=Qt.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let l,u;const c=(s+a)/2;if(s===a)l=0,u=0;else{const f=a-s;switch(u=c<=.5?f/(a+s):f/(2-a-s),a){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=ui){ot.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==ui?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+n,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ji),e.getHSL(zl);const i=zf(Ji.h,zl.h,n),r=zf(Ji.s,zl.s,n),o=zf(Ji.l,zl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new st;st.NAMES=HS;let oC=0;class sl extends Ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oC++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=ua,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Ch,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ua&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ah&&(i.blendSrc=this.blendSrc),this.blendDst!==Ch&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(n){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class VS extends sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=MS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new Y,Bl=new ut;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yv,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Bl.fromBufferAttribute(this,n),Bl.applyMatrix3(e),this.setXY(n,Bl.x,Bl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Za(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Za(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Za(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Za(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Za(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),o=fn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yv&&(e.usage=this.usage),e}}class GS extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class WS extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class io extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let aC=0;const Fn=new Rt,rd=new En,Io=new Y,Tn=new al,is=new al,Bt=new Y;class yi extends Ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aC++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(US(e)?WS:GS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new $e().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return rd.lookAt(e),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new io(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Tn.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let o=0,a=n.length;o<a;o++){const s=n[o];is.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(Tn.min,is.min),Tn.expandByPoint(Bt),Bt.addVectors(Tn.max,is.max),Tn.expandByPoint(Bt)):(Tn.expandByPoint(is.min),Tn.expandByPoint(is.max))}Tn.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)Bt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let o=0,a=n.length;o<a;o++){const s=n[o],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)Bt.fromBufferAttribute(s,u),l&&(Io.fromBufferAttribute(e,u),Bt.add(Io)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),s=[],l=[];for(let M=0;M<i.count;M++)s[M]=new Y,l[M]=new Y;const u=new Y,c=new Y,f=new Y,h=new ut,m=new ut,_=new ut,x=new Y,p=new Y;function d(M,b,v){u.fromBufferAttribute(i,M),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,v),h.fromBufferAttribute(o,M),m.fromBufferAttribute(o,b),_.fromBufferAttribute(o,v),c.sub(u),f.sub(u),m.sub(h),_.sub(h);const S=1/(m.x*_.y-_.x*m.y);isFinite(S)&&(x.copy(c).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(S),p.copy(f).multiplyScalar(m.x).addScaledVector(c,-_.x).multiplyScalar(S),s[M].add(x),s[b].add(x),s[v].add(x),l[M].add(p),l[b].add(p),l[v].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let M=0,b=g.length;M<b;++M){const v=g[M],S=v.start,N=v.count;for(let D=S,U=S+N;D<U;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new Y,E=new Y,R=new Y,C=new Y;function T(M){R.fromBufferAttribute(r,M),C.copy(R);const b=s[M];y.copy(b),y.sub(R.multiplyScalar(R.dot(b))).normalize(),E.crossVectors(C,b);const S=E.dot(l[M])<0?-1:1;a.setXYZW(M,y.x,y.y,y.z,S)}for(let M=0,b=g.length;M<b;++M){const v=g[M],S=v.start,N=v.count;for(let D=S,U=S+N;D<U;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new Y,o=new Y,a=new Y,s=new Y,l=new Y,u=new Y,c=new Y,f=new Y;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),a.fromBufferAttribute(n,p),c.subVectors(a,o),f.subVectors(r,o),c.cross(f),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),s.add(c),l.add(c),u.add(c),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),c.subVectors(a,o),f.subVectors(r,o),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(s,l){const u=s.array,c=s.itemSize,f=s.normalized,h=new u.constructor(l.length*c);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){s.isInterleavedBufferAttribute?m=l[x]*s.data.stride+s.offset:m=l[x]*c;for(let d=0;d<c;d++)h[_++]=u[m++]}return new Wn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yi,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],u=e(l,i);n.setAttribute(s,u)}const o=this.morphAttributes;for(const s in o){const l=[],u=o[s];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const u=a[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],f=o[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u0=new Rt,Fr=new zS,Hl=new Wc,c0=new Y,Vl=new Y,Gl=new Y,Wl=new Y,od=new Y,jl=new Y,f0=new Y,Xl=new Y;class Di extends En{constructor(e=new yi,n=new VS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){jl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=s[l],f=o[l];c!==0&&(od.fromBufferAttribute(f,e),a?jl.addScaledVector(od,c):jl.addScaledVector(od.sub(n),c))}n.add(jl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(o),Fr.copy(e.ray).recast(e.near),!(Hl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Hl,c0)===null||Fr.origin.distanceToSquared(c0)>(e.far-e.near)**2))&&(u0.copy(o).invert(),Fr.copy(e.ray).applyMatrix4(u0),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,f=o.attributes.normal,h=o.groups,m=o.drawRange;if(s!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=a[p.materialIndex],g=Math.max(p.start,m.start),y=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let E=g,R=y;E<R;E+=3){const C=s.getX(E),T=s.getX(E+1),M=s.getX(E+2);r=$l(this,d,e,i,u,c,f,C,T,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(s.count,m.start+m.count);for(let p=_,d=x;p<d;p+=3){const g=s.getX(p),y=s.getX(p+1),E=s.getX(p+2);r=$l(this,a,e,i,u,c,f,g,y,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=a[p.materialIndex],g=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=g,R=y;E<R;E+=3){const C=E,T=E+1,M=E+2;r=$l(this,d,e,i,u,c,f,C,T,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,d=x;p<d;p+=3){const g=p,y=p+1,E=p+2;r=$l(this,a,e,i,u,c,f,g,y,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function sC(t,e,n,i,r,o,a,s){let l;if(e.side===xn?l=i.intersectTriangle(a,o,r,!0,s):l=i.intersectTriangle(r,o,a,e.side===br,s),l===null)return null;Xl.copy(s),Xl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Xl);return u<n.near||u>n.far?null:{distance:u,point:Xl.clone(),object:t}}function $l(t,e,n,i,r,o,a,s,l,u){t.getVertexPosition(s,Vl),t.getVertexPosition(l,Gl),t.getVertexPosition(u,Wl);const c=sC(t,e,n,i,Vl,Gl,Wl,f0);if(c){const f=new Y;ni.getBarycoord(f0,Vl,Gl,Wl,f),r&&(c.uv=ni.getInterpolatedAttribute(r,s,l,u,f,new ut)),o&&(c.uv1=ni.getInterpolatedAttribute(o,s,l,u,f,new ut)),a&&(c.normal=ni.getInterpolatedAttribute(a,s,l,u,f,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a:s,b:l,c:u,normal:new Y,materialIndex:0};ni.getNormal(Vl,Gl,Wl,h.normal),c.face=h,c.barycoord=f}return c}class ll extends yi{constructor(e=1,n=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],u=[],c=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,o,0),_("z","y","x",1,-1,i,n,-e,a,o,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new io(u,3)),this.setAttribute("normal",new io(c,3)),this.setAttribute("uv",new io(f,2));function _(x,p,d,g,y,E,R,C,T,M,b){const v=E/T,S=R/M,N=E/2,D=R/2,U=C/2,Z=T+1,V=M+1;let H=0,O=0;const G=new Y;for(let te=0;te<V;te++){const ie=te*S-D;for(let ne=0;ne<Z;ne++){const xe=ne*v-N;G[x]=xe*g,G[p]=ie*y,G[d]=U,u.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[d]=C>0?1:-1,c.push(G.x,G.y,G.z),f.push(ne/T),f.push(1-te/M),H+=1}}for(let te=0;te<M;te++)for(let ie=0;ie<T;ie++){const ne=h+ie+Z*te,xe=h+ie+Z*(te+1),$=h+(ie+1)+Z*(te+1),ee=h+(ie+1)+Z*te;l.push(ne,xe,ee),l.push(xe,$,ee),O+=6}s.addGroup(m,O,b),m+=O,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Aa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Aa(t[n]);for(const r in i)e[r]=i[r]}return e}function lC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const uC={clone:Aa,merge:nn};var cC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cC,this.fragmentShader=fC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Aa(e.uniforms),this.uniformsGroups=lC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class XS extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const er=new Y,d0=new ut,h0=new ut;class Cn extends XS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=dp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dp*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,n){return this.getViewBounds(e,d0,h0),n.subVectors(h0,d0)}setViewOffset(e,n,i,r,o,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ff*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Do=-90,Oo=1;class dC extends En{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(Do,Oo,e,n);r.layers=this.layers,this.add(r);const o=new Cn(Do,Oo,e,n);o.layers=this.layers,this.add(o);const a=new Cn(Do,Oo,e,n);a.layers=this.layers,this.add(a);const s=new Cn(Do,Oo,e,n);s.layers=this.layers,this.add(s);const l=new Cn(Do,Oo,e,n);l.layers=this.layers,this.add(l);const u=new Cn(Do,Oo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,a,s,l]=n;for(const u of n)this.remove(u);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class $S extends Sn{constructor(e,n,i,r,o,a,s,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Ma,super(e,n,i,r,o,a,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hC extends po{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $S(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ti}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ll(5,5,5),o=new Tr({name:"CubemapFromEquirect",uniforms:Aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:xr});o.uniforms.tEquirect.value=n;const a=new Di(r,o),s=n.minFilter;return n.minFilter===Jr&&(n.minFilter=ti),new dC(1,10,this).update(e,a),n.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(o)}}const ad=new Y,pC=new Y,mC=new $e;class Wr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ad.subVectors(i,n).cross(pC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ad),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mC.getNormalMatrix(e),r=this.coplanarPoint(ad).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Wc,ql=new Y;class qS{constructor(e=new Wr,n=new Wr,i=new Wr,r=new Wr,o=new Wr,a=new Wr){this.planes=[e,n,i,r,o,a]}set(e,n,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ii){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],d=r[12],g=r[13],y=r[14],E=r[15];if(i[0].setComponents(l-o,h-u,p-m,E-d).normalize(),i[1].setComponents(l+o,h+u,p+m,E+d).normalize(),i[2].setComponents(l+a,h+c,p+_,E+g).normalize(),i[3].setComponents(l-a,h-c,p-_,E-g).normalize(),i[4].setComponents(l-s,h-f,p-x,E-y).normalize(),n===Ii)i[5].setComponents(l+s,h+f,p+x,E+y).normalize();else if(n===ec)i[5].setComponents(s,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ql.x=r.normal.x>0?e.max.x:e.min.x,ql.y=r.normal.y>0?e.max.y:e.min.y,ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function YS(){let t=null,e=!1,n=null,i=null;function r(o,a){n(o,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function gC(t){const e=new WeakMap;function n(s,l){const u=s.array,c=s.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),s.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)s.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version,size:f}}function i(s,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,s),f.length===0)t.bufferSubData(u,0,c);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const x=f[m];t.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function a(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const c=e.get(s);(!c||c.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const u=e.get(s);if(u===void 0)e.set(s,n(s,l));else if(u.version<s.version){if(u.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,s,l),u.version=s.version}}return{get:r,remove:o,update:a}}class jc extends yi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,a=n/2,s=Math.floor(i),l=Math.floor(r),u=s+1,c=l+1,f=e/s,h=n/l,m=[],_=[],x=[],p=[];for(let d=0;d<c;d++){const g=d*h-a;for(let y=0;y<u;y++){const E=y*f-o;_.push(E,-g,0),x.push(0,0,1),p.push(y/s),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<s;g++){const y=g+u*d,E=g+u*(d+1),R=g+1+u*(d+1),C=g+1+u*d;m.push(y,E,C),m.push(E,R,C)}this.setIndex(m),this.setAttribute("position",new io(_,3)),this.setAttribute("normal",new io(x,3)),this.setAttribute("uv",new io(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.widthSegments,e.heightSegments)}}var vC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_C=`#ifdef USE_ALPHAHASH
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
#endif`,yC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MC=`#ifdef USE_AOMAP
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
#endif`,wC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bC=`#ifdef USE_BATCHING
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
#endif`,TC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PC=`#ifdef USE_IRIDESCENCE
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
#endif`,LC=`#ifdef USE_BUMPMAP
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
#endif`,NC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,BC=`#define PI 3.141592653589793
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
} // validated`,HC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VC=`vec3 transformedNormal = objectNormal;
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
#endif`,GC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$C="gl_FragColor = linearToOutputTexel( gl_FragColor );",qC=`
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
}`,YC=`#ifdef USE_ENVMAP
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
#endif`,KC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QC=`#ifdef USE_ENVMAP
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
#endif`,ZC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JC=`#ifdef USE_ENVMAP
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
#endif`,eR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rR=`#ifdef USE_GRADIENTMAP
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
}`,oR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lR=`uniform bool receiveShadow;
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
#endif`,uR=`#ifdef USE_ENVMAP
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
#endif`,cR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pR=`PhysicalMaterial material;
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
#endif`,mR=`struct PhysicalMaterial {
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
}`,gR=`
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
#endif`,vR=`#if defined( RE_IndirectDiffuse )
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
#endif`,_R=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ER=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TR=`#if defined( USE_POINTS_UV )
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
#endif`,AR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NR=`#ifdef USE_MORPHTARGETS
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
#endif`,IR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zR=`#ifdef USE_NORMALMAP
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
#endif`,BR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$R=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t2=`float getShadowMask() {
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
}`,n2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i2=`#ifdef USE_SKINNING
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
#endif`,r2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o2=`#ifdef USE_SKINNING
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
#endif`,a2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c2=`#ifdef USE_TRANSMISSION
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
#endif`,f2=`#ifdef USE_TRANSMISSION
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
#endif`,d2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v2=`uniform sampler2D t2D;
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
}`,_2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E2=`#include <common>
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
}`,M2=`#if DEPTH_PACKING == 3200
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
}`,w2=`#define DISTANCE
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
}`,b2=`#define DISTANCE
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
}`,T2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C2=`uniform float scale;
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
}`,R2=`uniform vec3 diffuse;
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
}`,P2=`#include <common>
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
}`,L2=`uniform vec3 diffuse;
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
}`,N2=`#define LAMBERT
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
}`,I2=`#define LAMBERT
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
}`,D2=`#define MATCAP
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
}`,O2=`#define MATCAP
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
}`,U2=`#define NORMAL
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
}`,k2=`#define NORMAL
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
}`,F2=`#define PHONG
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
}`,z2=`#define PHONG
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
}`,B2=`#define STANDARD
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
}`,H2=`#define STANDARD
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
}`,V2=`#define TOON
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
}`,G2=`#define TOON
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
}`,W2=`uniform float size;
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
}`,j2=`uniform vec3 diffuse;
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
}`,X2=`#include <common>
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
}`,$2=`uniform vec3 color;
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
}`,q2=`uniform float rotation;
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
}`,Y2=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:vC,alphahash_pars_fragment:_C,alphamap_fragment:yC,alphamap_pars_fragment:xC,alphatest_fragment:SC,alphatest_pars_fragment:EC,aomap_fragment:MC,aomap_pars_fragment:wC,batching_pars_vertex:bC,batching_vertex:TC,begin_vertex:AC,beginnormal_vertex:CC,bsdfs:RC,iridescence_fragment:PC,bumpmap_pars_fragment:LC,clipping_planes_fragment:NC,clipping_planes_pars_fragment:IC,clipping_planes_pars_vertex:DC,clipping_planes_vertex:OC,color_fragment:UC,color_pars_fragment:kC,color_pars_vertex:FC,color_vertex:zC,common:BC,cube_uv_reflection_fragment:HC,defaultnormal_vertex:VC,displacementmap_pars_vertex:GC,displacementmap_vertex:WC,emissivemap_fragment:jC,emissivemap_pars_fragment:XC,colorspace_fragment:$C,colorspace_pars_fragment:qC,envmap_fragment:YC,envmap_common_pars_fragment:KC,envmap_pars_fragment:QC,envmap_pars_vertex:ZC,envmap_physical_pars_fragment:uR,envmap_vertex:JC,fog_vertex:eR,fog_pars_vertex:tR,fog_fragment:nR,fog_pars_fragment:iR,gradientmap_pars_fragment:rR,lightmap_pars_fragment:oR,lights_lambert_fragment:aR,lights_lambert_pars_fragment:sR,lights_pars_begin:lR,lights_toon_fragment:cR,lights_toon_pars_fragment:fR,lights_phong_fragment:dR,lights_phong_pars_fragment:hR,lights_physical_fragment:pR,lights_physical_pars_fragment:mR,lights_fragment_begin:gR,lights_fragment_maps:vR,lights_fragment_end:_R,logdepthbuf_fragment:yR,logdepthbuf_pars_fragment:xR,logdepthbuf_pars_vertex:SR,logdepthbuf_vertex:ER,map_fragment:MR,map_pars_fragment:wR,map_particle_fragment:bR,map_particle_pars_fragment:TR,metalnessmap_fragment:AR,metalnessmap_pars_fragment:CR,morphinstance_vertex:RR,morphcolor_vertex:PR,morphnormal_vertex:LR,morphtarget_pars_vertex:NR,morphtarget_vertex:IR,normal_fragment_begin:DR,normal_fragment_maps:OR,normal_pars_fragment:UR,normal_pars_vertex:kR,normal_vertex:FR,normalmap_pars_fragment:zR,clearcoat_normal_fragment_begin:BR,clearcoat_normal_fragment_maps:HR,clearcoat_pars_fragment:VR,iridescence_pars_fragment:GR,opaque_fragment:WR,packing:jR,premultiplied_alpha_fragment:XR,project_vertex:$R,dithering_fragment:qR,dithering_pars_fragment:YR,roughnessmap_fragment:KR,roughnessmap_pars_fragment:QR,shadowmap_pars_fragment:ZR,shadowmap_pars_vertex:JR,shadowmap_vertex:e2,shadowmask_pars_fragment:t2,skinbase_vertex:n2,skinning_pars_vertex:i2,skinning_vertex:r2,skinnormal_vertex:o2,specularmap_fragment:a2,specularmap_pars_fragment:s2,tonemapping_fragment:l2,tonemapping_pars_fragment:u2,transmission_fragment:c2,transmission_pars_fragment:f2,uv_pars_fragment:d2,uv_pars_vertex:h2,uv_vertex:p2,worldpos_vertex:m2,background_vert:g2,background_frag:v2,backgroundCube_vert:_2,backgroundCube_frag:y2,cube_vert:x2,cube_frag:S2,depth_vert:E2,depth_frag:M2,distanceRGBA_vert:w2,distanceRGBA_frag:b2,equirect_vert:T2,equirect_frag:A2,linedashed_vert:C2,linedashed_frag:R2,meshbasic_vert:P2,meshbasic_frag:L2,meshlambert_vert:N2,meshlambert_frag:I2,meshmatcap_vert:D2,meshmatcap_frag:O2,meshnormal_vert:U2,meshnormal_frag:k2,meshphong_vert:F2,meshphong_frag:z2,meshphysical_vert:B2,meshphysical_frag:H2,meshtoon_vert:V2,meshtoon_frag:G2,points_vert:W2,points_frag:j2,shadow_vert:X2,shadow_frag:$2,sprite_vert:q2,sprite_frag:Y2},me={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ci={basic:{uniforms:nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new st(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:nn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:nn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new st(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:nn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:nn([me.points,me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:nn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:nn([me.common,me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:nn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:nn([me.sprite,me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:nn([me.common,me.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:nn([me.lights,me.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ci.physical={uniforms:nn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Yl={r:0,b:0,g:0},Br=new Hi,K2=new Rt;function Q2(t,e,n,i,r,o,a){const s=new st(0);let l=o===!0?0:1,u,c,f=null,h=0,m=null;function _(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?n:e).get(y)),y}function x(g){let y=!1;const E=_(g);E===null?d(s,l):E&&E.isColor&&(d(E,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,y){const E=_(y);E&&(E.isCubeTexture||E.mapping===Vc)?(c===void 0&&(c=new Di(new ll(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Aa(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Br.copy(y.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(K2.makeRotationFromEuler(Br)),c.material.toneMapped=ot.getTransfer(E.colorSpace)!==pt,(f!==E||h!==E.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Di(new jc(2,2),new Tr({name:"BackgroundMaterial",uniforms:Aa(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=ot.getTransfer(E.colorSpace)!==pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function d(g,y){g.getRGB(Yl,jS(t)),i.buffers.color.setClear(Yl.r,Yl.g,Yl.b,y,a)}return{getClearColor:function(){return s},setClearColor:function(g,y=1){s.set(g),l=y,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(s,l)},render:x,addToRenderList:p}}function Z2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,a=!1;function s(v,S,N,D,U){let Z=!1;const V=f(D,N,S);o!==V&&(o=V,u(o.object)),Z=m(v,D,N,U),Z&&_(v,D,N,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,E(v,S,N,D),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function u(v){return t.bindVertexArray(v)}function c(v){return t.deleteVertexArray(v)}function f(v,S,N){const D=N.wireframe===!0;let U=i[v.id];U===void 0&&(U={},i[v.id]=U);let Z=U[S.id];Z===void 0&&(Z={},U[S.id]=Z);let V=Z[D];return V===void 0&&(V=h(l()),Z[D]=V),V}function h(v){const S=[],N=[],D=[];for(let U=0;U<n;U++)S[U]=0,N[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:D,object:v,attributes:{},index:null}}function m(v,S,N,D){const U=o.attributes,Z=S.attributes;let V=0;const H=N.getAttributes();for(const O in H)if(H[O].location>=0){const te=U[O];let ie=Z[O];if(ie===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor)),te===void 0||te.attribute!==ie||ie&&te.data!==ie.data)return!0;V++}return o.attributesNum!==V||o.index!==D}function _(v,S,N,D){const U={},Z=S.attributes;let V=0;const H=N.getAttributes();for(const O in H)if(H[O].location>=0){let te=Z[O];te===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(te=v.instanceColor));const ie={};ie.attribute=te,te&&te.data&&(ie.data=te.data),U[O]=ie,V++}o.attributes=U,o.attributesNum=V,o.index=D}function x(){const v=o.newAttributes;for(let S=0,N=v.length;S<N;S++)v[S]=0}function p(v){d(v,0)}function d(v,S){const N=o.newAttributes,D=o.enabledAttributes,U=o.attributeDivisors;N[v]=1,D[v]===0&&(t.enableVertexAttribArray(v),D[v]=1),U[v]!==S&&(t.vertexAttribDivisor(v,S),U[v]=S)}function g(){const v=o.newAttributes,S=o.enabledAttributes;for(let N=0,D=S.length;N<D;N++)S[N]!==v[N]&&(t.disableVertexAttribArray(N),S[N]=0)}function y(v,S,N,D,U,Z,V){V===!0?t.vertexAttribIPointer(v,S,N,U,Z):t.vertexAttribPointer(v,S,N,D,U,Z)}function E(v,S,N,D){x();const U=D.attributes,Z=N.getAttributes(),V=S.defaultAttributeValues;for(const H in Z){const O=Z[H];if(O.location>=0){let G=U[H];if(G===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(G=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(G=v.instanceColor)),G!==void 0){const te=G.normalized,ie=G.itemSize,ne=e.get(G);if(ne===void 0)continue;const xe=ne.buffer,$=ne.type,ee=ne.bytesPerElement,ce=$===t.INT||$===t.UNSIGNED_INT||G.gpuType===jm;if(G.isInterleavedBufferAttribute){const ue=G.data,Ae=ue.stride,ae=G.offset;if(ue.isInstancedInterleavedBuffer){for(let we=0;we<O.locationSize;we++)d(O.location+we,ue.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let we=0;we<O.locationSize;we++)p(O.location+we);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let we=0;we<O.locationSize;we++)y(O.location+we,ie/O.locationSize,$,te,Ae*ee,(ae+ie/O.locationSize*we)*ee,ce)}else{if(G.isInstancedBufferAttribute){for(let ue=0;ue<O.locationSize;ue++)d(O.location+ue,G.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ue=0;ue<O.locationSize;ue++)p(O.location+ue);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let ue=0;ue<O.locationSize;ue++)y(O.location+ue,ie/O.locationSize,$,te,ie*ee,ie/O.locationSize*ue*ee,ce)}}else if(V!==void 0){const te=V[H];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(O.location,te);break;case 3:t.vertexAttrib3fv(O.location,te);break;case 4:t.vertexAttrib4fv(O.location,te);break;default:t.vertexAttrib1fv(O.location,te)}}}}g()}function R(){M();for(const v in i){const S=i[v];for(const N in S){const D=S[N];for(const U in D)c(D[U].object),delete D[U];delete S[N]}delete i[v]}}function C(v){if(i[v.id]===void 0)return;const S=i[v.id];for(const N in S){const D=S[N];for(const U in D)c(D[U].object),delete D[U];delete S[N]}delete i[v.id]}function T(v){for(const S in i){const N=i[S];if(N[v.id]===void 0)continue;const D=N[v.id];for(const U in D)c(D[U].object),delete D[U];delete N[v.id]}}function M(){b(),a=!0,o!==r&&(o=r,u(o.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:M,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:g}}function J2(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function a(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function s(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let m=0;for(let _=0;_<f;_++)m+=c[_];n.update(m,i,1)}function l(u,c,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)a(u[_],c[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=c[x];for(let x=0;x<h.length;x++)n.update(_,i,h[x])}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function eP(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==ii&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(T){const M=T===il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Bi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ni&&!M)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:R,maxSamples:C}}function tP(t){const e=this;let n=null,i=0,r=!1,o=!1;const a=new Wr,s=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||o&&!p)o?c(null):u();else{const g=o?0:i,y=g*4;let E=d.clippingState||null;l.value=E,E=c(_,h,y,m);for(let R=0;R!==y;++R)E[R]=n[R];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const d=m+x*4,g=h.matrixWorldInverse;s.getNormalMatrix(g),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,E=m;y!==x;++y,E+=4)a.copy(f[y]).applyMatrix4(g,s),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function nP(t){let e=new WeakMap;function n(a,s){return s===Uh?a.mapping=Ma:s===kh&&(a.mapping=wa),a}function i(a){if(a&&a.isTexture){const s=a.mapping;if(s===Uh||s===kh)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new hC(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class iP extends XS{constructor(e=-1,n=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qo=4,p0=[.125,.215,.35,.446,.526,.582],$r=20,sd=new iP,m0=new st;let ld=null,ud=0,cd=0,fd=!1;const jr=(1+Math.sqrt(5))/2,Uo=1/jr,g0=[new Y(-jr,Uo,0),new Y(jr,Uo,0),new Y(-Uo,0,jr),new Y(Uo,0,jr),new Y(0,jr,-Uo),new Y(0,jr,Uo),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class v0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,ud,cd),this._renderer.xr.enabled=fd,e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ma||e.mapping===wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:il,format:ii,colorSpace:Dr,depthBuffer:!1},r=_0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_0(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rP(o)),this._blurMaterial=oP(o,e,n)}return r}_compileMaterial(e){const n=new Di(this._lodPlanes[0],e);this._renderer.compile(n,sd)}_sceneToCubeUV(e,n,i,r){const s=new Cn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(m0),c.toneMapping=Sr,c.autoClear=!1;const m=new VS({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),_=new Di(new ll,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(m0),x=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(s.up.set(0,l[d],0),s.lookAt(u[d],0,0)):g===1?(s.up.set(0,0,l[d]),s.lookAt(0,u[d],0)):(s.up.set(0,l[d],0),s.lookAt(0,0,u[d]));const y=this._cubeSize;Kl(r,g*y,d>2?y:0,y,y),c.setRenderTarget(r),x&&c.render(_,s),c.render(e,s)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ma||e.mapping===wa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y0());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Di(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;Kl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,sd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=g0[(r-o-1)%g0.length];this._blur(e,o-1,o,a,s)}n.autoClear=i}_blur(e,n,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,a,s){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Di(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*$r-1),x=o/_,p=isFinite(o)?1+Math.floor(c*x):$r;p>$r&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$r}`);const d=[];let g=0;for(let T=0;T<$r;++T){const M=T/x,b=Math.exp(-M*M/2);d.push(b),T===0?g+=b:T<p&&(g+=2*b)}for(let T=0;T<d.length;T++)d[T]=d[T]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const E=this._sizeLods[r],R=3*E*(r>y-Qo?r-y+Qo:0),C=4*(this._cubeSize-E);Kl(n,R,C,3*E,2*E),l.setRenderTarget(n),l.render(f,sd)}}function rP(t){const e=[],n=[],i=[];let r=t;const o=t-Qo+1+p0.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);n.push(s);let l=1/s;a>t-Qo?l=p0[a-t+Qo-1]:a===0&&(l=0),i.push(l);const u=1/(s-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,_=6,x=3,p=2,d=1,g=new Float32Array(x*_*m),y=new Float32Array(p*_*m),E=new Float32Array(d*_*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,M=C>2?0:-1,b=[T,M,0,T+2/3,M,0,T+2/3,M+1,0,T,M,0,T+2/3,M+1,0,T,M+1,0];g.set(b,x*_*C),y.set(h,p*_*C);const v=[C,C,C,C,C,C];E.set(v,d*_*C)}const R=new yi;R.setAttribute("position",new Wn(g,x)),R.setAttribute("uv",new Wn(y,p)),R.setAttribute("faceIndex",new Wn(E,d)),e.push(R),r>Qo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _0(t,e,n){const i=new po(t,e,n);return i.texture.mapping=Vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function oP(t,e,n){const i=new Float32Array($r),r=new Y(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zm(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function y0(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zm(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function x0(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Zm(){return`

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
	`}function aP(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===Uh||l===kh,c=l===Ma||l===wa;if(u||c){let f=e.get(s);const h=f!==void 0?f.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return n===null&&(n=new v0(t)),f=u?n.fromEquirectangular(s,f):n.fromCubemap(s,f),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),f.texture;if(f!==void 0)return f.texture;{const m=s.image;return u&&m&&m.height>0||c&&m&&r(m)?(n===null&&(n=new v0(t)),f=u?n.fromEquirectangular(s):n.fromCubemap(s),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),s.addEventListener("dispose",o),f.texture):null}}}return s}function r(s){let l=0;const u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function o(s){const l=s.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function sP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&xu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lP(t,e,n,i){const r={},o=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function s(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,d=x.length;p<d;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(f){const h=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let y=0,E=g.length;y<E;y+=3){const R=g[y+0],C=g[y+1],T=g[y+2];h.push(R,C,C,T,T,R)}}else if(_!==void 0){const g=_.array;x=_.version;for(let y=0,E=g.length/3-1;y<E;y+=3){const R=y+0,C=y+1,T=y+2;h.push(R,C,C,T,T,R)}}else return;const p=new(US(h)?WS:GS)(h,1);p.version=x;const d=o.get(f);d&&e.remove(d),o.set(f,p)}function c(f){const h=o.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return o.get(f)}return{get:s,update:l,getWireframeAttribute:c}}function uP(t,e,n){let i;function r(h){i=h}let o,a;function s(h){o=h.type,a=h.bytesPerElement}function l(h,m){t.drawElements(i,m,o,h*a),n.update(m,i,1)}function u(h,m,_){_!==0&&(t.drawElementsInstanced(i,m,o,h*a,_),n.update(m,i,_))}function c(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,h,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];n.update(p,i,1)}function f(h,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)u(h[d]/a,m[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,o,h,0,x,0,_);let d=0;for(let g=0;g<_;g++)d+=m[g];for(let g=0;g<x.length;g++)n.update(d,i,x[g])}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function cP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=s*(o/3);break;case t.LINES:n.lines+=s*(o/2);break;case t.LINE_STRIP:n.lines+=s*(o-1);break;case t.LINE_LOOP:n.lines+=s*o;break;case t.POINTS:n.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fP(t,e,n){const i=new WeakMap,r=new Ct;function o(a,s,l){const u=a.morphTargetInfluences,c=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(s);if(h===void 0||h.count!==f){let v=function(){M.dispose(),i.delete(s),s.removeEventListener("dispose",v)};var m=v;h!==void 0&&h.texture.dispose();const _=s.morphAttributes.position!==void 0,x=s.morphAttributes.normal!==void 0,p=s.morphAttributes.color!==void 0,d=s.morphAttributes.position||[],g=s.morphAttributes.normal||[],y=s.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let R=s.attributes.position.count*E,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*C*4*f),M=new FS(T,R,C,f);M.type=Ni,M.needsUpdate=!0;const b=E*4;for(let S=0;S<f;S++){const N=d[S],D=g[S],U=y[S],Z=R*C*4*S;for(let V=0;V<N.count;V++){const H=V*b;_===!0&&(r.fromBufferAttribute(N,V),T[Z+H+0]=r.x,T[Z+H+1]=r.y,T[Z+H+2]=r.z,T[Z+H+3]=0),x===!0&&(r.fromBufferAttribute(D,V),T[Z+H+4]=r.x,T[Z+H+5]=r.y,T[Z+H+6]=r.z,T[Z+H+7]=0),p===!0&&(r.fromBufferAttribute(U,V),T[Z+H+8]=r.x,T[Z+H+9]=r.y,T[Z+H+10]=r.z,T[Z+H+11]=U.itemSize===4?r.w:1)}}h={count:f,texture:M,size:new ut(R,C)},i.set(s,h),s.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<u.length;p++)_+=u[p];const x=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function dP(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}class KS extends Sn{constructor(e,n,i,r,o,a,s,l,u,c=ca){if(c!==ca&&c!==Ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ca&&(i=ho),i===void 0&&c===Ta&&(i=ba),super(null,r,o,a,s,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const QS=new Sn,S0=new KS(1,1),ZS=new FS,JS=new QA,e1=new $S,E0=[],M0=[],w0=new Float32Array(16),b0=new Float32Array(9),T0=new Float32Array(4);function Va(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=E0[r];if(o===void 0&&(o=new Float32Array(r),E0[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=n,t[a].toArray(o,s)}return o}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xc(t,e){let n=M0[e];n===void 0&&(n=new Int32Array(e),M0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function mP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function gP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function vP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Ft(n,i))return;T0.set(i),t.uniformMatrix2fv(this.addr,!1,T0),zt(n,i)}}function _P(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Ft(n,i))return;b0.set(i),t.uniformMatrix3fv(this.addr,!1,b0),zt(n,i)}}function yP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Ft(n,i))return;w0.set(i),t.uniformMatrix4fv(this.addr,!1,w0),zt(n,i)}}function xP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function SP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function EP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function MP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function wP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function bP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function TP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function AP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function CP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(S0.compareFunction=OS,o=S0):o=QS,n.setTexture2D(e||o,r)}function RP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||JS,r)}function PP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||e1,r)}function LP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ZS,r)}function NP(t){switch(t){case 5126:return hP;case 35664:return pP;case 35665:return mP;case 35666:return gP;case 35674:return vP;case 35675:return _P;case 35676:return yP;case 5124:case 35670:return xP;case 35667:case 35671:return SP;case 35668:case 35672:return EP;case 35669:case 35673:return MP;case 5125:return wP;case 36294:return bP;case 36295:return TP;case 36296:return AP;case 35678:case 36198:case 36298:case 36306:case 35682:return CP;case 35679:case 36299:case 36307:return RP;case 35680:case 36300:case 36308:case 36293:return PP;case 36289:case 36303:case 36311:case 36292:return LP}}function IP(t,e){t.uniform1fv(this.addr,e)}function DP(t,e){const n=Va(e,this.size,2);t.uniform2fv(this.addr,n)}function OP(t,e){const n=Va(e,this.size,3);t.uniform3fv(this.addr,n)}function UP(t,e){const n=Va(e,this.size,4);t.uniform4fv(this.addr,n)}function kP(t,e){const n=Va(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function FP(t,e){const n=Va(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function zP(t,e){const n=Va(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function BP(t,e){t.uniform1iv(this.addr,e)}function HP(t,e){t.uniform2iv(this.addr,e)}function VP(t,e){t.uniform3iv(this.addr,e)}function GP(t,e){t.uniform4iv(this.addr,e)}function WP(t,e){t.uniform1uiv(this.addr,e)}function jP(t,e){t.uniform2uiv(this.addr,e)}function XP(t,e){t.uniform3uiv(this.addr,e)}function $P(t,e){t.uniform4uiv(this.addr,e)}function qP(t,e,n){const i=this.cache,r=e.length,o=Xc(n,r);Ft(i,o)||(t.uniform1iv(this.addr,o),zt(i,o));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||QS,o[a])}function YP(t,e,n){const i=this.cache,r=e.length,o=Xc(n,r);Ft(i,o)||(t.uniform1iv(this.addr,o),zt(i,o));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||JS,o[a])}function KP(t,e,n){const i=this.cache,r=e.length,o=Xc(n,r);Ft(i,o)||(t.uniform1iv(this.addr,o),zt(i,o));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||e1,o[a])}function QP(t,e,n){const i=this.cache,r=e.length,o=Xc(n,r);Ft(i,o)||(t.uniform1iv(this.addr,o),zt(i,o));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||ZS,o[a])}function ZP(t){switch(t){case 5126:return IP;case 35664:return DP;case 35665:return OP;case 35666:return UP;case 35674:return kP;case 35675:return FP;case 35676:return zP;case 5124:case 35670:return BP;case 35667:case 35671:return HP;case 35668:case 35672:return VP;case 35669:case 35673:return GP;case 5125:return WP;case 36294:return jP;case 36295:return XP;case 36296:return $P;case 35678:case 36198:case 36298:case 36306:case 35682:return qP;case 35679:case 36299:case 36307:return YP;case 35680:case 36300:case 36308:case 36293:return KP;case 36289:case 36303:case 36311:case 36292:return QP}}class JP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=NP(n.type)}}class eL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZP(n.type)}}class tL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,n[s.id],i)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function A0(t,e){t.seq.push(e),t.map[e.id]=e}function nL(t,e,n){const i=t.name,r=i.length;for(dd.lastIndex=0;;){const o=dd.exec(i),a=dd.lastIndex;let s=o[1];const l=o[2]==="]",u=o[3];if(l&&(s=s|0),u===void 0||u==="["&&a+2===r){A0(n,u===void 0?new JP(s,t,e):new eL(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new tL(s),A0(n,f)),n=f}}}class Su{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),a=e.getUniformLocation(n,o.name);nL(o,a,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,a=n.length;o!==a;++o){const s=n[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function C0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const iL=37297;let rL=0;function oL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${n[a]}`)}return i.join(`
`)}function aL(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Ju&&n===Zu?i="LinearDisplayP3ToLinearSRGB":e===Zu&&n===Ju&&(i="LinearSRGBToLinearDisplayP3"),t){case Dr:case Gc:return[i,"LinearTransferOETF"];case ui:case Qm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function R0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+oL(t.getShaderSource(e),a)}else return r}function sL(t,e){const n=aL(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function lL(t,e){let n;switch(e){case EA:n="Linear";break;case MA:n="Reinhard";break;case wA:n="Cineon";break;case bA:n="ACESFilmic";break;case AA:n="AgX";break;case CA:n="Neutral";break;case TA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ql=new Y;function uL(){ot.getLuminanceCoefficients(Ql);const t=Ql.x.toFixed(4),e=Ql.y.toFixed(4),n=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function fL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function dL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),a=o.name;let s=1;o.type===t.FLOAT_MAT2&&(s=2),o.type===t.FLOAT_MAT3&&(s=3),o.type===t.FLOAT_MAT4&&(s=4),n[a]={type:o.type,location:t.getAttribLocation(e,a),locationSize:s}}return n}function cs(t){return t!==""}function P0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function L0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hL=/^[ \t]*#include +<([\w\d./]+)>/gm;function hp(t){return t.replace(hL,mL)}const pL=new Map;function mL(t,e){let n=Xe[e];if(n===void 0){const i=pL.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hp(n)}const gL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N0(t){return t.replace(gL,vL)}function vL(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function I0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function _L(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ES?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===tA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function yL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ma:case wa:e="ENVMAP_TYPE_CUBE";break;case Vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case wa:e="ENVMAP_MODE_REFRACTION";break}return e}function SL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case MS:e="ENVMAP_BLENDING_MULTIPLY";break;case xA:e="ENVMAP_BLENDING_MIX";break;case SA:e="ENVMAP_BLENDING_ADD";break}return e}function EL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ML(t,e,n,i){const r=t.getContext(),o=n.defines;let a=n.vertexShader,s=n.fragmentShader;const l=_L(n),u=yL(n),c=xL(n),f=SL(n),h=EL(n),m=cL(n),_=fL(o),x=r.createProgram();let p,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(cs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(cs).join(`
`),d.length>0&&(d+=`
`)):(p=[I0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),d=[I0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Sr?lL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,sL("linearToOutputTexel",n.outputColorSpace),uL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cs).join(`
`)),a=hp(a),a=P0(a,n),a=L0(a,n),s=hp(s),s=P0(s,n),s=L0(s,n),a=N0(a),s=N0(s),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",n.glslVersion===Kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=g+p+a,E=g+d+s,R=C0(r,r.VERTEX_SHADER,y),C=C0(r,r.FRAGMENT_SHADER,E);r.attachShader(x,R),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(S){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(x).trim(),D=r.getShaderInfoLog(R).trim(),U=r.getShaderInfoLog(C).trim();let Z=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,C);else{const H=R0(r,R,"vertex"),O=R0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+H+`
`+O)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||U==="")&&(V=!1);V&&(S.diagnostics={runnable:Z,programLog:N,vertexShader:{log:D,prefix:p},fragmentShader:{log:U,prefix:d}})}r.deleteShader(R),r.deleteShader(C),M=new Su(r,x),b=dL(r,x)}let M;this.getUniforms=function(){return M===void 0&&T(this),M};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let v=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(x,iL)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rL++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=C,this}let wL=0;class bL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new TL(e),n.set(e,i)),i}}class TL{constructor(e){this.id=wL++,this.code=e,this.usedTimes=0}}function AL(t,e,n,i,r,o,a){const s=new BS,l=new bL,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return u.add(v),v===0?"uv":`uv${v}`}function d(v,S,N,D,U){const Z=D.fog,V=U.geometry,H=v.isMeshStandardMaterial?D.environment:null,O=(v.isMeshStandardMaterial?n:e).get(v.envMap||H),G=O&&O.mapping===Vc?O.image.height:null,te=x[v.type];v.precision!==null&&(_=r.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ie=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=ie!==void 0?ie.length:0;let xe=0;V.morphAttributes.position!==void 0&&(xe=1),V.morphAttributes.normal!==void 0&&(xe=2),V.morphAttributes.color!==void 0&&(xe=3);let $,ee,ce,ue;if(te){const cn=ci[te];$=cn.vertexShader,ee=cn.fragmentShader}else $=v.vertexShader,ee=v.fragmentShader,l.update(v),ce=l.getVertexShaderID(v),ue=l.getFragmentShaderID(v);const Ae=t.getRenderTarget(),ae=U.isInstancedMesh===!0,we=U.isBatchedMesh===!0,ze=!!v.map,Fe=!!v.matcap,I=!!O,nt=!!v.aoMap,Ie=!!v.lightMap,Pe=!!v.bumpMap,Ne=!!v.normalMap,qe=!!v.displacementMap,Ue=!!v.emissiveMap,P=!!v.metalnessMap,w=!!v.roughnessMap,z=v.anisotropy>0,K=v.clearcoat>0,oe=v.dispersion>0,q=v.iridescence>0,be=v.sheen>0,de=v.transmission>0,ge=z&&!!v.anisotropyMap,je=K&&!!v.clearcoatMap,se=K&&!!v.clearcoatNormalMap,ve=K&&!!v.clearcoatRoughnessMap,Le=q&&!!v.iridescenceMap,Be=q&&!!v.iridescenceThicknessMap,he=be&&!!v.sheenColorMap,Ye=be&&!!v.sheenRoughnessMap,Ge=!!v.specularMap,ct=!!v.specularColorMap,k=!!v.specularIntensityMap,Se=de&&!!v.transmissionMap,Q=de&&!!v.thicknessMap,re=!!v.gradientMap,_e=!!v.alphaMap,Ee=v.alphaTest>0,Je=!!v.alphaHash,Pt=!!v.extensions;let un=Sr;v.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(un=t.toneMapping);const tt={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:$,fragmentShader:ee,defines:v.defines,customVertexShaderID:ce,customFragmentShaderID:ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:we,batchingColor:we&&U._colorsTexture!==null,instancing:ae,instancingColor:ae&&U.instanceColor!==null,instancingMorph:ae&&U.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?t.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Dr,alphaToCoverage:!!v.alphaToCoverage,map:ze,matcap:Fe,envMap:I,envMapMode:I&&O.mapping,envMapCubeUVHeight:G,aoMap:nt,lightMap:Ie,bumpMap:Pe,normalMap:Ne,displacementMap:m&&qe,emissiveMap:Ue,normalMapObjectSpace:Ne&&v.normalMapType===IA,normalMapTangentSpace:Ne&&v.normalMapType===NA,metalnessMap:P,roughnessMap:w,anisotropy:z,anisotropyMap:ge,clearcoat:K,clearcoatMap:je,clearcoatNormalMap:se,clearcoatRoughnessMap:ve,dispersion:oe,iridescence:q,iridescenceMap:Le,iridescenceThicknessMap:Be,sheen:be,sheenColorMap:he,sheenRoughnessMap:Ye,specularMap:Ge,specularColorMap:ct,specularIntensityMap:k,transmission:de,transmissionMap:Se,thicknessMap:Q,gradientMap:re,opaque:v.transparent===!1&&v.blending===ua&&v.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ee,alphaHash:Je,combine:v.combine,mapUv:ze&&p(v.map.channel),aoMapUv:nt&&p(v.aoMap.channel),lightMapUv:Ie&&p(v.lightMap.channel),bumpMapUv:Pe&&p(v.bumpMap.channel),normalMapUv:Ne&&p(v.normalMap.channel),displacementMapUv:qe&&p(v.displacementMap.channel),emissiveMapUv:Ue&&p(v.emissiveMap.channel),metalnessMapUv:P&&p(v.metalnessMap.channel),roughnessMapUv:w&&p(v.roughnessMap.channel),anisotropyMapUv:ge&&p(v.anisotropyMap.channel),clearcoatMapUv:je&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&p(v.sheenRoughnessMap.channel),specularMapUv:Ge&&p(v.specularMap.channel),specularColorMapUv:ct&&p(v.specularColorMap.channel),specularIntensityMapUv:k&&p(v.specularIntensityMap.channel),transmissionMapUv:Se&&p(v.transmissionMap.channel),thicknessMapUv:Q&&p(v.thicknessMap.channel),alphaMapUv:_e&&p(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ne||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(ze||_e),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:un,decodeVideoTexture:ze&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ri,flipSided:v.side===xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Pt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&v.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return tt.vertexUv1s=u.has(1),tt.vertexUv2s=u.has(2),tt.vertexUv3s=u.has(3),u.clear(),tt}function g(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(y(S,v),E(S,v),S.push(t.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),v.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reverseDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.alphaToCoverage&&s.enable(20),v.push(s.mask)}function R(v){const S=x[v.type];let N;if(S){const D=ci[S];N=uC.clone(D.uniforms)}else N=v.uniforms;return N}function C(v,S){let N;for(let D=0,U=c.length;D<U;D++){const Z=c[D];if(Z.cacheKey===S){N=Z,++N.usedTimes;break}}return N===void 0&&(N=new ML(t,S,v,o),c.push(N)),N}function T(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function M(v){l.remove(v)}function b(){l.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:R,acquireProgram:C,releaseProgram:T,releaseShaderCache:M,programs:c,dispose:b}}function CL(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function i(a){t.delete(a)}function r(a,s,l){t.get(a)[s]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function RL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function D0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function O0(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,m,_,x,p){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=p),e++,d}function s(f,h,m,_,x,p){const d=a(f,h,m,_,x,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(f,h,m,_,x,p){const d=a(f,h,m,_,x,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||RL),i.length>1&&i.sort(h||D0),r.length>1&&r.sort(h||D0)}function c(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:s,unshift:l,finish:c,sort:u}}function PL(){let t=new WeakMap;function e(i,r){const o=t.get(i);let a;return o===void 0?(a=new O0,t.set(i,[a])):r>=o.length?(a=new O0,o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function LL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new st};break;case"SpotLight":n={position:new Y,direction:new Y,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function NL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let IL=0;function DL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function OL(t){const e=new LL,n=NL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,o=new Rt,a=new Rt;function s(u){let c=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,_=0,x=0,p=0,d=0,g=0,y=0,E=0,R=0,C=0,T=0;u.sort(DL);for(let b=0,v=u.length;b<v;b++){const S=u[b],N=S.color,D=S.intensity,U=S.distance,Z=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)c+=N.r*D,f+=N.g*D,h+=N.b*D;else if(S.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(S.sh.coefficients[V],D);T++}else if(S.isDirectionalLight){const V=e.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const H=S.shadow,O=n.get(S);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=S.shadow.matrix,g++}i.directional[m]=V,m++}else if(S.isSpotLight){const V=e.get(S);V.position.setFromMatrixPosition(S.matrixWorld),V.color.copy(N).multiplyScalar(D),V.distance=U,V.coneCos=Math.cos(S.angle),V.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),V.decay=S.decay,i.spot[x]=V;const H=S.shadow;if(S.map&&(i.spotLightMap[R]=S.map,R++,H.updateMatrices(S),S.castShadow&&C++),i.spotLightMatrix[x]=H.matrix,S.castShadow){const O=n.get(S);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,i.spotShadow[x]=O,i.spotShadowMap[x]=Z,E++}x++}else if(S.isRectAreaLight){const V=e.get(S);V.color.copy(N).multiplyScalar(D),V.halfWidth.set(S.width*.5,0,0),V.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=V,p++}else if(S.isPointLight){const V=e.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),V.distance=S.distance,V.decay=S.decay,S.castShadow){const H=S.shadow,O=n.get(S);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,O.shadowCameraNear=H.camera.near,O.shadowCameraFar=H.camera.far,i.pointShadow[_]=O,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=S.shadow.matrix,y++}i.point[_]=V,_++}else if(S.isHemisphereLight){const V=e.get(S);V.skyColor.copy(S.color).multiplyScalar(D),V.groundColor.copy(S.groundColor).multiplyScalar(D),i.hemi[d]=V,d++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const M=i.hash;(M.directionalLength!==m||M.pointLength!==_||M.spotLength!==x||M.rectAreaLength!==p||M.hemiLength!==d||M.numDirectionalShadows!==g||M.numPointShadows!==y||M.numSpotShadows!==E||M.numSpotMaps!==R||M.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,M.directionalLength=m,M.pointLength=_,M.spotLength=x,M.rectAreaLength=p,M.hemiLength=d,M.numDirectionalShadows=g,M.numPointShadows=y,M.numSpotShadows=E,M.numSpotMaps=R,M.numLightProbes=T,i.version=IL++)}function l(u,c){let f=0,h=0,m=0,_=0,x=0;const p=c.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){const y=u[d];if(y.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(y.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:s,setupView:l,state:i}}function U0(t){const e=new OL(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function a(c){i.push(c)}function s(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:s,setupLightsView:l,pushLight:o,pushShadow:a}}function UL(t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let s;return a===void 0?(s=new U0(t),e.set(r,[s])):o>=a.length?(s=new U0(t),a.push(s)):s=a[o],s}function i(){e=new WeakMap}return{get:n,dispose:i}}class kL extends sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FL extends sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BL=`uniform sampler2D shadow_pass;
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
}`;function HL(t,e,n){let i=new qS;const r=new ut,o=new ut,a=new Ct,s=new kL({depthPacking:LA}),l=new FL,u={},c=n.maxTextureSize,f={[br]:xn,[xn]:br,[Ri]:Ri},h=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:zL,fragmentShader:BL}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new yi;_.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Di(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ES;let d=this.type;this.render=function(C,T,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const b=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),N=t.state;N.setBlending(xr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=d!==Ti&&this.type===Ti,U=d===Ti&&this.type!==Ti;for(let Z=0,V=C.length;Z<V;Z++){const H=C[Z],O=H.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const G=O.getFrameExtents();if(r.multiply(G),o.copy(O.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/G.x),r.x=o.x*G.x,O.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/G.y),r.y=o.y*G.y,O.mapSize.y=o.y)),O.map===null||D===!0||U===!0){const ie=this.type!==Ti?{minFilter:Vn,magFilter:Vn}:{};O.map!==null&&O.map.dispose(),O.map=new po(r.x,r.y,ie),O.map.texture.name=H.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const te=O.getViewportCount();for(let ie=0;ie<te;ie++){const ne=O.getViewport(ie);a.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),N.viewport(a),O.updateMatrices(H,ie),i=O.getFrustum(),E(T,M,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===Ti&&g(O,M),O.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(b,v,S)};function g(C,T){const M=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new po(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,M,h,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,M,m,x,null)}function y(C,T,M,b){let v=null;const S=M.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(S!==void 0)v=S;else if(v=M.isPointLight===!0?l:s,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=v.uuid,D=T.uuid;let U=u[N];U===void 0&&(U={},u[N]=U);let Z=U[D];Z===void 0&&(Z=v.clone(),U[D]=Z,T.addEventListener("dispose",R)),v=Z}if(v.visible=T.visible,v.wireframe=T.wireframe,b===Ti?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,M.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=t.properties.get(v);N.light=M}return v}function E(C,T,M,b,v){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===Ti)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,C.matrixWorld);const D=e.update(C),U=C.material;if(Array.isArray(U)){const Z=D.groups;for(let V=0,H=Z.length;V<H;V++){const O=Z[V],G=U[O.materialIndex];if(G&&G.visible){const te=y(C,G,b,v);C.onBeforeShadow(t,C,T,M,D,te,O),t.renderBufferDirect(M,null,D,te,C,O),C.onAfterShadow(t,C,T,M,D,te,O)}}}else if(U.visible){const Z=y(C,U,b,v);C.onBeforeShadow(t,C,T,M,D,Z,null),t.renderBufferDirect(M,null,D,Z,C,null),C.onAfterShadow(t,C,T,M,D,Z,null)}}const N=C.children;for(let D=0,U=N.length;D<U;D++)E(N[D],T,M,b,v)}function R(C){C.target.removeEventListener("dispose",R);for(const M in u){const b=u[M],v=C.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const VL={[Rh]:Ph,[Lh]:Dh,[Nh]:Oh,[Ea]:Ih,[Ph]:Rh,[Dh]:Lh,[Oh]:Nh,[Ih]:Ea};function GL(t){function e(){let k=!1;const Se=new Ct;let Q=null;const re=new Ct(0,0,0,0);return{setMask:function(_e){Q!==_e&&!k&&(t.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){k=_e},setClear:function(_e,Ee,Je,Pt,un){un===!0&&(_e*=Pt,Ee*=Pt,Je*=Pt),Se.set(_e,Ee,Je,Pt),re.equals(Se)===!1&&(t.clearColor(_e,Ee,Je,Pt),re.copy(Se))},reset:function(){k=!1,Q=null,re.set(-1,0,0,0)}}}function n(){let k=!1,Se=!1,Q=null,re=null,_e=null;return{setReversed:function(Ee){Se=Ee},setTest:function(Ee){Ee?ce(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(Ee){Q!==Ee&&!k&&(t.depthMask(Ee),Q=Ee)},setFunc:function(Ee){if(Se&&(Ee=VL[Ee]),re!==Ee){switch(Ee){case Rh:t.depthFunc(t.NEVER);break;case Ph:t.depthFunc(t.ALWAYS);break;case Lh:t.depthFunc(t.LESS);break;case Ea:t.depthFunc(t.LEQUAL);break;case Nh:t.depthFunc(t.EQUAL);break;case Ih:t.depthFunc(t.GEQUAL);break;case Dh:t.depthFunc(t.GREATER);break;case Oh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=Ee}},setLocked:function(Ee){k=Ee},setClear:function(Ee){_e!==Ee&&(t.clearDepth(Ee),_e=Ee)},reset:function(){k=!1,Q=null,re=null,_e=null}}}function i(){let k=!1,Se=null,Q=null,re=null,_e=null,Ee=null,Je=null,Pt=null,un=null;return{setTest:function(tt){k||(tt?ce(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(tt){Se!==tt&&!k&&(t.stencilMask(tt),Se=tt)},setFunc:function(tt,cn,xi){(Q!==tt||re!==cn||_e!==xi)&&(t.stencilFunc(tt,cn,xi),Q=tt,re=cn,_e=xi)},setOp:function(tt,cn,xi){(Ee!==tt||Je!==cn||Pt!==xi)&&(t.stencilOp(tt,cn,xi),Ee=tt,Je=cn,Pt=xi)},setLocked:function(tt){k=tt},setClear:function(tt){un!==tt&&(t.clearStencil(tt),un=tt)},reset:function(){k=!1,Se=null,Q=null,re=null,_e=null,Ee=null,Je=null,Pt=null,un=null}}}const r=new e,o=new n,a=new i,s=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],m=null,_=!1,x=null,p=null,d=null,g=null,y=null,E=null,R=null,C=new st(0,0,0),T=0,M=!1,b=null,v=null,S=null,N=null,D=null;const U=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,V=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),Z=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Z=V>=2);let O=null,G={};const te=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),ne=new Ct().fromArray(te),xe=new Ct().fromArray(ie);function $(k,Se,Q,re){const _e=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(k,Ee),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<Q;Je++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,re,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(Se+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return Ee}const ee={};ee[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(t.DEPTH_TEST),o.setFunc(Ea),Ie(!1),Pe(Wv),ce(t.CULL_FACE),I(xr);function ce(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function ue(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function Ae(k,Se){return c[k]!==Se?(t.bindFramebuffer(k,Se),c[k]=Se,k===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=Se),k===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function ae(k,Se){let Q=h,re=!1;if(k){Q=f.get(Se),Q===void 0&&(Q=[],f.set(Se,Q));const _e=k.textures;if(Q.length!==_e.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let Ee=0,Je=_e.length;Ee<Je;Ee++)Q[Ee]=t.COLOR_ATTACHMENT0+Ee;Q.length=_e.length,re=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,re=!0);re&&t.drawBuffers(Q)}function we(k){return m!==k?(t.useProgram(k),m=k,!0):!1}const ze={[Xr]:t.FUNC_ADD,[iA]:t.FUNC_SUBTRACT,[rA]:t.FUNC_REVERSE_SUBTRACT};ze[oA]=t.MIN,ze[aA]=t.MAX;const Fe={[sA]:t.ZERO,[lA]:t.ONE,[uA]:t.SRC_COLOR,[Ah]:t.SRC_ALPHA,[mA]:t.SRC_ALPHA_SATURATE,[hA]:t.DST_COLOR,[fA]:t.DST_ALPHA,[cA]:t.ONE_MINUS_SRC_COLOR,[Ch]:t.ONE_MINUS_SRC_ALPHA,[pA]:t.ONE_MINUS_DST_COLOR,[dA]:t.ONE_MINUS_DST_ALPHA,[gA]:t.CONSTANT_COLOR,[vA]:t.ONE_MINUS_CONSTANT_COLOR,[_A]:t.CONSTANT_ALPHA,[yA]:t.ONE_MINUS_CONSTANT_ALPHA};function I(k,Se,Q,re,_e,Ee,Je,Pt,un,tt){if(k===xr){_===!0&&(ue(t.BLEND),_=!1);return}if(_===!1&&(ce(t.BLEND),_=!0),k!==nA){if(k!==x||tt!==M){if((p!==Xr||y!==Xr)&&(t.blendEquation(t.FUNC_ADD),p=Xr,y=Xr),tt)switch(k){case ua:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jv:t.blendFunc(t.ONE,t.ONE);break;case Xv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $v:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ua:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Xv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $v:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}d=null,g=null,E=null,R=null,C.set(0,0,0),T=0,x=k,M=tt}return}_e=_e||Se,Ee=Ee||Q,Je=Je||re,(Se!==p||_e!==y)&&(t.blendEquationSeparate(ze[Se],ze[_e]),p=Se,y=_e),(Q!==d||re!==g||Ee!==E||Je!==R)&&(t.blendFuncSeparate(Fe[Q],Fe[re],Fe[Ee],Fe[Je]),d=Q,g=re,E=Ee,R=Je),(Pt.equals(C)===!1||un!==T)&&(t.blendColor(Pt.r,Pt.g,Pt.b,un),C.copy(Pt),T=un),x=k,M=!1}function nt(k,Se){k.side===Ri?ue(t.CULL_FACE):ce(t.CULL_FACE);let Q=k.side===xn;Se&&(Q=!Q),Ie(Q),k.blending===ua&&k.transparent===!1?I(xr):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const re=k.stencilWrite;a.setTest(re),re&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),qe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(k){b!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),b=k)}function Pe(k){k!==JT?(ce(t.CULL_FACE),k!==v&&(k===Wv?t.cullFace(t.BACK):k===eA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),v=k}function Ne(k){k!==S&&(Z&&t.lineWidth(k),S=k)}function qe(k,Se,Q){k?(ce(t.POLYGON_OFFSET_FILL),(N!==Se||D!==Q)&&(t.polygonOffset(Se,Q),N=Se,D=Q)):ue(t.POLYGON_OFFSET_FILL)}function Ue(k){k?ce(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function P(k){k===void 0&&(k=t.TEXTURE0+U-1),O!==k&&(t.activeTexture(k),O=k)}function w(k,Se,Q){Q===void 0&&(O===null?Q=t.TEXTURE0+U-1:Q=O);let re=G[Q];re===void 0&&(re={type:void 0,texture:void 0},G[Q]=re),(re.type!==k||re.texture!==Se)&&(O!==Q&&(t.activeTexture(Q),O=Q),t.bindTexture(k,Se||ee[k]),re.type=k,re.texture=Se)}function z(){const k=G[O];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Be(k){ne.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),ne.copy(k))}function he(k){xe.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),xe.copy(k))}function Ye(k,Se){let Q=l.get(Se);Q===void 0&&(Q=new WeakMap,l.set(Se,Q));let re=Q.get(k);re===void 0&&(re=t.getUniformBlockIndex(Se,k.name),Q.set(k,re))}function Ge(k,Se){const re=l.get(Se).get(k);s.get(Se)!==re&&(t.uniformBlockBinding(Se,re,k.__bindingPointIndex),s.set(Se,re))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},O=null,G={},c={},f=new WeakMap,h=[],m=null,_=!1,x=null,p=null,d=null,g=null,y=null,E=null,R=null,C=new st(0,0,0),T=0,M=!1,b=null,v=null,S=null,N=null,D=null,ne.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:ue,bindFramebuffer:Ae,drawBuffers:ae,useProgram:we,setBlending:I,setMaterial:nt,setFlipSided:Ie,setCullFace:Pe,setLineWidth:Ne,setPolygonOffset:qe,setScissorTest:Ue,activeTexture:P,bindTexture:w,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:oe,texImage2D:ve,texImage3D:Le,updateUBOMapping:Ye,uniformBlockBinding:Ge,texStorage2D:je,texStorage3D:se,texSubImage2D:q,texSubImage3D:be,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:Be,viewport:he,reset:ct}}function k0(t,e,n,i){const r=WL(i);switch(n){case CS:return t*e;case PS:return t*e;case LS:return t*e*2;case NS:return t*e/r.components*r.byteLength;case qm:return t*e/r.components*r.byteLength;case IS:return t*e*2/r.components*r.byteLength;case Ym:return t*e*2/r.components*r.byteLength;case RS:return t*e*3/r.components*r.byteLength;case ii:return t*e*4/r.components*r.byteLength;case Km:return t*e*4/r.components*r.byteLength;case mu:case gu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vu:case _u:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hh:case Gh:return Math.max(t,16)*Math.max(e,8)/4;case Bh:case Vh:return Math.max(t,8)*Math.max(e,8)/2;case Wh:case jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ep:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case tp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case np:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ip:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case op:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ap:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yu:case sp:case lp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case DS:case up:return Math.ceil(t/4)*Math.ceil(e/4)*8;case cp:case fp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WL(t){switch(t){case Bi:case bS:return{byteLength:1,components:1};case Ws:case TS:case il:return{byteLength:2,components:1};case Xm:case $m:return{byteLength:2,components:4};case ho:case jm:case Ni:return{byteLength:4,components:1};case AS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function jL(t,e,n,i,r,o,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ut,c=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,w){return m?new OffscreenCanvas(P,w):tc("canvas")}function x(P,w,z){let K=1;const oe=Ue(P);if((oe.width>z||oe.height>z)&&(K=z/Math.max(oe.width,oe.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(K*oe.width),be=Math.floor(K*oe.height);f===void 0&&(f=_(q,be));const de=w?_(q,be):f;return de.width=q,de.height=be,de.getContext("2d").drawImage(P,0,0,q,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+q+"x"+be+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==Vn&&P.minFilter!==ti}function d(P){t.generateMipmap(P)}function g(P,w,z,K,oe=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=w;if(w===t.RED&&(z===t.FLOAT&&(q=t.R32F),z===t.HALF_FLOAT&&(q=t.R16F),z===t.UNSIGNED_BYTE&&(q=t.R8)),w===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.R8UI),z===t.UNSIGNED_SHORT&&(q=t.R16UI),z===t.UNSIGNED_INT&&(q=t.R32UI),z===t.BYTE&&(q=t.R8I),z===t.SHORT&&(q=t.R16I),z===t.INT&&(q=t.R32I)),w===t.RG&&(z===t.FLOAT&&(q=t.RG32F),z===t.HALF_FLOAT&&(q=t.RG16F),z===t.UNSIGNED_BYTE&&(q=t.RG8)),w===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RG8UI),z===t.UNSIGNED_SHORT&&(q=t.RG16UI),z===t.UNSIGNED_INT&&(q=t.RG32UI),z===t.BYTE&&(q=t.RG8I),z===t.SHORT&&(q=t.RG16I),z===t.INT&&(q=t.RG32I)),w===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RGB8UI),z===t.UNSIGNED_SHORT&&(q=t.RGB16UI),z===t.UNSIGNED_INT&&(q=t.RGB32UI),z===t.BYTE&&(q=t.RGB8I),z===t.SHORT&&(q=t.RGB16I),z===t.INT&&(q=t.RGB32I)),w===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),z===t.UNSIGNED_INT&&(q=t.RGBA32UI),z===t.BYTE&&(q=t.RGBA8I),z===t.SHORT&&(q=t.RGBA16I),z===t.INT&&(q=t.RGBA32I)),w===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),w===t.RGBA){const be=oe?Qu:ot.getTransfer(K);z===t.FLOAT&&(q=t.RGBA32F),z===t.HALF_FLOAT&&(q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(q=be===pt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(P,w){let z;return P?w===null||w===ho||w===ba?z=t.DEPTH24_STENCIL8:w===Ni?z=t.DEPTH32F_STENCIL8:w===Ws&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ho||w===ba?z=t.DEPTH_COMPONENT24:w===Ni?z=t.DEPTH_COMPONENT32F:w===Ws&&(z=t.DEPTH_COMPONENT16),z}function E(P,w){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vn&&P.minFilter!==ti?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function R(P){const w=P.target;w.removeEventListener("dispose",R),T(w),w.isVideoTexture&&c.delete(w)}function C(P){const w=P.target;w.removeEventListener("dispose",C),b(w)}function T(P){const w=i.get(P);if(w.__webglInit===void 0)return;const z=P.source,K=h.get(z);if(K){const oe=K[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&M(P),Object.keys(K).length===0&&h.delete(z)}i.remove(P)}function M(P){const w=i.get(P);t.deleteTexture(w.__webglTexture);const z=P.source,K=h.get(z);delete K[w.__cacheKey],a.memory.textures--}function b(P){const w=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let oe=0;oe<w.__webglFramebuffer[K].length;oe++)t.deleteFramebuffer(w.__webglFramebuffer[K][oe]);else t.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)t.deleteFramebuffer(w.__webglFramebuffer[K]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=P.textures;for(let K=0,oe=z.length;K<oe;K++){const q=i.get(z[K]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(z[K])}i.remove(P)}let v=0;function S(){v=0}function N(){const P=v;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),v+=1,P}function D(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function U(P,w){const z=i.get(P);if(P.isVideoTexture&&Ne(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(z,P,w);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+w)}function Z(P,w){const z=i.get(P);if(P.version>0&&z.__version!==P.version){xe(z,P,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+w)}function V(P,w){const z=i.get(P);if(P.version>0&&z.__version!==P.version){xe(z,P,w);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+w)}function H(P,w){const z=i.get(P);if(P.version>0&&z.__version!==P.version){$(z,P,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+w)}const O={[Fh]:t.REPEAT,[Zr]:t.CLAMP_TO_EDGE,[zh]:t.MIRRORED_REPEAT},G={[Vn]:t.NEAREST,[RA]:t.NEAREST_MIPMAP_NEAREST,[Ll]:t.NEAREST_MIPMAP_LINEAR,[ti]:t.LINEAR,[kf]:t.LINEAR_MIPMAP_NEAREST,[Jr]:t.LINEAR_MIPMAP_LINEAR},te={[DA]:t.NEVER,[BA]:t.ALWAYS,[OA]:t.LESS,[OS]:t.LEQUAL,[UA]:t.EQUAL,[zA]:t.GEQUAL,[kA]:t.GREATER,[FA]:t.NOTEQUAL};function ie(P,w){if(w.type===Ni&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ti||w.magFilter===kf||w.magFilter===Ll||w.magFilter===Jr||w.minFilter===ti||w.minFilter===kf||w.minFilter===Ll||w.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,O[w.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,O[w.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,O[w.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,G[w.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,G[w.minFilter]),w.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,te[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Vn||w.minFilter!==Ll&&w.minFilter!==Jr||w.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ne(P,w){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",R));const K=w.source;let oe=h.get(K);oe===void 0&&(oe={},h.set(K,oe));const q=D(w);if(q!==P.__cacheKey){oe[q]===void 0&&(oe[q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),oe[q].usedTimes++;const be=oe[P.__cacheKey];be!==void 0&&(oe[P.__cacheKey].usedTimes--,be.usedTimes===0&&M(w)),P.__cacheKey=q,P.__webglTexture=oe[q].texture}return z}function xe(P,w,z){let K=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=t.TEXTURE_3D);const oe=ne(P,w),q=w.source;n.bindTexture(K,P.__webglTexture,t.TEXTURE0+z);const be=i.get(q);if(q.version!==be.__version||oe===!0){n.activeTexture(t.TEXTURE0+z);const de=ot.getPrimaries(ot.workingColorSpace),ge=w.colorSpace===sr?null:ot.getPrimaries(w.colorSpace),je=w.colorSpace===sr||de===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let se=x(w.image,!1,r.maxTextureSize);se=qe(w,se);const ve=o.convert(w.format,w.colorSpace),Le=o.convert(w.type);let Be=g(w.internalFormat,ve,Le,w.colorSpace,w.isVideoTexture);ie(K,w);let he;const Ye=w.mipmaps,Ge=w.isVideoTexture!==!0,ct=be.__version===void 0||oe===!0,k=q.dataReady,Se=E(w,se);if(w.isDepthTexture)Be=y(w.format===Ta,w.type),ct&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,Be,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Be,se.width,se.height,0,ve,Le,null));else if(w.isDataTexture)if(Ye.length>0){Ge&&ct&&n.texStorage2D(t.TEXTURE_2D,Se,Be,Ye[0].width,Ye[0].height);for(let Q=0,re=Ye.length;Q<re;Q++)he=Ye[Q],Ge?k&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,he.width,he.height,ve,Le,he.data):n.texImage2D(t.TEXTURE_2D,Q,Be,he.width,he.height,0,ve,Le,he.data);w.generateMipmaps=!1}else Ge?(ct&&n.texStorage2D(t.TEXTURE_2D,Se,Be,se.width,se.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,ve,Le,se.data)):n.texImage2D(t.TEXTURE_2D,0,Be,se.width,se.height,0,ve,Le,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Be,Ye[0].width,Ye[0].height,se.depth);for(let Q=0,re=Ye.length;Q<re;Q++)if(he=Ye[Q],w.format!==ii)if(ve!==null)if(Ge){if(k)if(w.layerUpdates.size>0){const _e=k0(he.width,he.height,w.format,w.type);for(const Ee of w.layerUpdates){const Je=he.data.subarray(Ee*_e/he.data.BYTES_PER_ELEMENT,(Ee+1)*_e/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,Ee,he.width,he.height,1,ve,Je,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,se.depth,ve,he.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,Be,he.width,he.height,se.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,se.depth,ve,Le,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,Be,he.width,he.height,se.depth,0,ve,Le,he.data)}else{Ge&&ct&&n.texStorage2D(t.TEXTURE_2D,Se,Be,Ye[0].width,Ye[0].height);for(let Q=0,re=Ye.length;Q<re;Q++)he=Ye[Q],w.format!==ii?ve!==null?Ge?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,he.width,he.height,ve,he.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,Be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?k&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,he.width,he.height,ve,Le,he.data):n.texImage2D(t.TEXTURE_2D,Q,Be,he.width,he.height,0,ve,Le,he.data)}else if(w.isDataArrayTexture)if(Ge){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Be,se.width,se.height,se.depth),k)if(w.layerUpdates.size>0){const Q=k0(se.width,se.height,w.format,w.type);for(const re of w.layerUpdates){const _e=se.data.subarray(re*Q/se.data.BYTES_PER_ELEMENT,(re+1)*Q/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,se.width,se.height,1,ve,Le,_e)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,Le,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Be,se.width,se.height,se.depth,0,ve,Le,se.data);else if(w.isData3DTexture)Ge?(ct&&n.texStorage3D(t.TEXTURE_3D,Se,Be,se.width,se.height,se.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,Le,se.data)):n.texImage3D(t.TEXTURE_3D,0,Be,se.width,se.height,se.depth,0,ve,Le,se.data);else if(w.isFramebufferTexture){if(ct)if(Ge)n.texStorage2D(t.TEXTURE_2D,Se,Be,se.width,se.height);else{let Q=se.width,re=se.height;for(let _e=0;_e<Se;_e++)n.texImage2D(t.TEXTURE_2D,_e,Be,Q,re,0,ve,Le,null),Q>>=1,re>>=1}}else if(Ye.length>0){if(Ge&&ct){const Q=Ue(Ye[0]);n.texStorage2D(t.TEXTURE_2D,Se,Be,Q.width,Q.height)}for(let Q=0,re=Ye.length;Q<re;Q++)he=Ye[Q],Ge?k&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ve,Le,he):n.texImage2D(t.TEXTURE_2D,Q,Be,ve,Le,he);w.generateMipmaps=!1}else if(Ge){if(ct){const Q=Ue(se);n.texStorage2D(t.TEXTURE_2D,Se,Be,Q.width,Q.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Le,se)}else n.texImage2D(t.TEXTURE_2D,0,Be,ve,Le,se);p(w)&&d(K),be.__version=q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function $(P,w,z){if(w.image.length!==6)return;const K=ne(P,w),oe=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+z);const q=i.get(oe);if(oe.version!==q.__version||K===!0){n.activeTexture(t.TEXTURE0+z);const be=ot.getPrimaries(ot.workingColorSpace),de=w.colorSpace===sr?null:ot.getPrimaries(w.colorSpace),ge=w.colorSpace===sr||be===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const je=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!je&&!se?ve[re]=x(w.image[re],!0,r.maxCubemapSize):ve[re]=se?w.image[re].image:w.image[re],ve[re]=qe(w,ve[re]);const Le=ve[0],Be=o.convert(w.format,w.colorSpace),he=o.convert(w.type),Ye=g(w.internalFormat,Be,he,w.colorSpace),Ge=w.isVideoTexture!==!0,ct=q.__version===void 0||K===!0,k=oe.dataReady;let Se=E(w,Le);ie(t.TEXTURE_CUBE_MAP,w);let Q;if(je){Ge&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Ye,Le.width,Le.height);for(let re=0;re<6;re++){Q=ve[re].mipmaps;for(let _e=0;_e<Q.length;_e++){const Ee=Q[_e];w.format!==ii?Be!==null?Ge?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,0,0,Ee.width,Ee.height,Be,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,Ye,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,0,0,Ee.width,Ee.height,Be,he,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,Ye,Ee.width,Ee.height,0,Be,he,Ee.data)}}}else{if(Q=w.mipmaps,Ge&&ct){Q.length>0&&Se++;const re=Ue(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Ye,re.width,re.height)}for(let re=0;re<6;re++)if(se){Ge?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,Be,he,ve[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ye,ve[re].width,ve[re].height,0,Be,he,ve[re].data);for(let _e=0;_e<Q.length;_e++){const Je=Q[_e].image[re].image;Ge?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,0,0,Je.width,Je.height,Be,he,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,Ye,Je.width,Je.height,0,Be,he,Je.data)}}else{Ge?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Be,he,ve[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ye,Be,he,ve[re]);for(let _e=0;_e<Q.length;_e++){const Ee=Q[_e];Ge?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,0,0,Be,he,Ee.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,Ye,Be,he,Ee.image[re])}}}p(w)&&d(t.TEXTURE_CUBE_MAP),q.__version=oe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ee(P,w,z,K,oe,q){const be=o.convert(z.format,z.colorSpace),de=o.convert(z.type),ge=g(z.internalFormat,be,de,z.colorSpace);if(!i.get(w).__hasExternalTextures){const se=Math.max(1,w.width>>q),ve=Math.max(1,w.height>>q);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,q,ge,se,ve,w.depth,0,be,de,null):n.texImage2D(oe,q,ge,se,ve,0,be,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Pe(w)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,oe,i.get(z).__webglTexture,0,Ie(w)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,oe,i.get(z).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(P,w,z){if(t.bindRenderbuffer(t.RENDERBUFFER,P),w.depthBuffer){const K=w.depthTexture,oe=K&&K.isDepthTexture?K.type:null,q=y(w.stencilBuffer,oe),be=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Ie(w);Pe(w)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,q,w.width,w.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,q,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,q,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,P)}else{const K=w.textures;for(let oe=0;oe<K.length;oe++){const q=K[oe],be=o.convert(q.format,q.colorSpace),de=o.convert(q.type),ge=g(q.internalFormat,be,de,q.colorSpace),je=Ie(w);z&&Pe(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,je,ge,w.width,w.height):Pe(w)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je,ge,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ge,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const K=i.get(w.depthTexture).__webglTexture,oe=Ie(w);if(w.depthTexture.format===ca)Pe(w)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(w.depthTexture.format===Ta)Pe(w)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ae(P){const w=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const oe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",oe)};K.addEventListener("dispose",oe),w.__depthDisposeCallback=oe}w.__boundDepthTexture=K}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ue(w.__webglFramebuffer,P)}else if(z){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=t.createRenderbuffer(),ce(w.__webglDepthbuffer[K],P,!1);else{const oe=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ce(w.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(P,w,z){const K=i.get(P);w!==void 0&&ee(K.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ae(P)}function we(P){const w=P.texture,z=i.get(P),K=i.get(w);P.addEventListener("dispose",C);const oe=P.textures,q=P.isWebGLCubeRenderTarget===!0,be=oe.length>1;if(be||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=w.version,a.memory.textures++),q){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let ge=0;ge<w.mipmaps.length;ge++)z.__webglFramebuffer[de][ge]=t.createFramebuffer()}else z.__webglFramebuffer[de]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<w.mipmaps.length;de++)z.__webglFramebuffer[de]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(be)for(let de=0,ge=oe.length;de<ge;de++){const je=i.get(oe[de]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Pe(P)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const ge=oe[de];z.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const je=o.convert(ge.format,ge.colorSpace),se=o.convert(ge.type),ve=g(ge.internalFormat,je,se,ge.colorSpace,P.isXRRenderTarget===!0),Le=Ie(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ve,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,z.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ie(t.TEXTURE_CUBE_MAP,w);for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ee(z.__webglFramebuffer[de][ge],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else ee(z.__webglFramebuffer[de],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(w)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let de=0,ge=oe.length;de<ge;de++){const je=oe[de],se=i.get(je);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ie(t.TEXTURE_2D,je),ee(z.__webglFramebuffer,P,je,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),p(je)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,K.__webglTexture),ie(de,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ee(z.__webglFramebuffer[ge],P,w,t.COLOR_ATTACHMENT0,de,ge);else ee(z.__webglFramebuffer,P,w,t.COLOR_ATTACHMENT0,de,0);p(w)&&d(de),n.unbindTexture()}P.depthBuffer&&Ae(P)}function ze(P){const w=P.textures;for(let z=0,K=w.length;z<K;z++){const oe=w[z];if(p(oe)){const q=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(oe).__webglTexture;n.bindTexture(q,be),d(q),n.unbindTexture()}}}const Fe=[],I=[];function nt(P){if(P.samples>0){if(Pe(P)===!1){const w=P.textures,z=P.width,K=P.height;let oe=t.COLOR_BUFFER_BIT;const q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(P),de=w.length>1;if(de)for(let ge=0;ge<w.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const je=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,je,0)}t.blitFramebuffer(0,0,z,K,0,0,z,K,oe,t.NEAREST),l===!0&&(Fe.length=0,I.length=0,Fe.push(t.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Fe.push(q),I.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ge=0;ge<w.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const je=i.get(w[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Ie(P){return Math.min(r.maxSamples,P.samples)}function Pe(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ne(P){const w=a.render.frame;c.get(P)!==w&&(c.set(P,w),P.update())}function qe(P,w){const z=P.colorSpace,K=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Dr&&z!==sr&&(ot.getTransfer(z)===pt?(K!==ii||oe!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=U,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=H,this.rebindTextures=ae,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Pe}function XL(t,e){function n(i,r=sr){let o;const a=ot.getTransfer(r);if(i===Bi)return t.UNSIGNED_BYTE;if(i===Xm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$m)return t.UNSIGNED_SHORT_5_5_5_1;if(i===AS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===bS)return t.BYTE;if(i===TS)return t.SHORT;if(i===Ws)return t.UNSIGNED_SHORT;if(i===jm)return t.INT;if(i===ho)return t.UNSIGNED_INT;if(i===Ni)return t.FLOAT;if(i===il)return t.HALF_FLOAT;if(i===CS)return t.ALPHA;if(i===RS)return t.RGB;if(i===ii)return t.RGBA;if(i===PS)return t.LUMINANCE;if(i===LS)return t.LUMINANCE_ALPHA;if(i===ca)return t.DEPTH_COMPONENT;if(i===Ta)return t.DEPTH_STENCIL;if(i===NS)return t.RED;if(i===qm)return t.RED_INTEGER;if(i===IS)return t.RG;if(i===Ym)return t.RG_INTEGER;if(i===Km)return t.RGBA_INTEGER;if(i===mu||i===gu||i===vu||i===_u)if(a===pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===mu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_u)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===mu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_u)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bh||i===Hh||i===Vh||i===Gh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Bh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wh||i===jh||i===Xh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Wh||i===jh)return a===pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Xh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$h||i===qh||i===Yh||i===Kh||i===Qh||i===Zh||i===Jh||i===ep||i===tp||i===np||i===ip||i===rp||i===op||i===ap)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===$h)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jh)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ep)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tp)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===np)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ip)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rp)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===op)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ap)return a===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yu||i===sp||i===lp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===yu)return a===pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===DS||i===up||i===cp||i===fp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===yu)return o.COMPRESSED_RED_RGTC1_EXT;if(i===up)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class $L extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zl extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qL={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),d=this._getHandJoint(u,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&h>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(qL)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const YL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KL=`
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

}`;class QL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Sn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Tr({vertexShader:YL,fragmentShader:KL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Di(new jc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZL extends Ha{constructor(e,n){super();const i=this;let r=null,o=1,a=null,s="local-floor",l=1,u=null,c=null,f=null,h=null,m=null,_=null;const x=new QL,p=n.getContextAttributes();let d=null,g=null;const y=[],E=[],R=new ut;let C=null;const T=new Cn;T.layers.enable(1),T.viewport=new Ct;const M=new Cn;M.layers.enable(2),M.viewport=new Ct;const b=[T,M],v=new $L;v.layers.enable(1),v.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=y[$];return ee===void 0&&(ee=new hd,y[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=y[$];return ee===void 0&&(ee=new hd,y[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=y[$];return ee===void 0&&(ee=new hd,y[$]=ee),ee.getHandSpace()};function D($){const ee=E.indexOf($.inputSource);if(ee===-1)return;const ce=y[ee];ce!==void 0&&(ce.update($.inputSource,$.frame,u||a),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",Z);for(let $=0;$<y.length;$++){const ee=E[$];ee!==null&&(E[$]=null,y[$].disconnect(ee))}S=null,N=null,x.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,g=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",U),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new po(m.framebufferWidth,m.framebufferHeight,{format:ii,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,ce=null,ue=null;p.depth&&(ue=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=p.stencil?Ta:ca,ce=p.stencil?ba:ho);const Ae={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new po(h.textureWidth,h.textureHeight,{format:ii,type:Bi,depthTexture:new KS(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(s),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z($){for(let ee=0;ee<$.removed.length;ee++){const ce=$.removed[ee],ue=E.indexOf(ce);ue>=0&&(E[ue]=null,y[ue].disconnect(ce))}for(let ee=0;ee<$.added.length;ee++){const ce=$.added[ee];let ue=E.indexOf(ce);if(ue===-1){for(let ae=0;ae<y.length;ae++)if(ae>=E.length){E.push(ce),ue=ae;break}else if(E[ae]===null){E[ae]=ce,ue=ae;break}if(ue===-1)break}const Ae=y[ue];Ae&&Ae.connect(ce)}}const V=new Y,H=new Y;function O($,ee,ce){V.setFromMatrixPosition(ee.matrixWorld),H.setFromMatrixPosition(ce.matrixWorld);const ue=V.distanceTo(H),Ae=ee.projectionMatrix.elements,ae=ce.projectionMatrix.elements,we=Ae[14]/(Ae[10]-1),ze=Ae[14]/(Ae[10]+1),Fe=(Ae[9]+1)/Ae[5],I=(Ae[9]-1)/Ae[5],nt=(Ae[8]-1)/Ae[0],Ie=(ae[8]+1)/ae[0],Pe=we*nt,Ne=we*Ie,qe=ue/(-nt+Ie),Ue=qe*-nt;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ue),$.translateZ(qe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const P=we+qe,w=ze+qe,z=Pe-Ue,K=Ne+(ue-Ue),oe=Fe*ze/w*P,q=I*ze/w*P;$.projectionMatrix.makePerspective(z,K,oe,q,P,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function G($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ee=$.near,ce=$.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),v.near=M.near=T.near=ee,v.far=M.far=T.far=ce,(S!==v.near||N!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,N=v.far);const ue=$.parent,Ae=v.cameras;G(v,ue);for(let ae=0;ae<Ae.length;ae++)G(Ae[ae],ue);Ae.length===2?O(v,T,M):v.projectionMatrix.copy(T.projectionMatrix),te($,v,ue)};function te($,ee,ce){ce===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=dp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ie=null;function ne($,ee){if(c=ee.getViewerPose(u||a),_=ee,c!==null){const ce=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ue=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,ue=!0);for(let ae=0;ae<ce.length;ae++){const we=ce[ae];let ze=null;if(m!==null)ze=m.getViewport(we);else{const I=f.getViewSubImage(h,we);ze=I.viewport,ae===0&&(e.setRenderTargetTextures(g,I.colorTexture,h.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(g))}let Fe=b[ae];Fe===void 0&&(Fe=new Cn,Fe.layers.enable(ae),Fe.viewport=new Ct,b[ae]=Fe),Fe.matrix.fromArray(we.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(we.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(ze.x,ze.y,ze.width,ze.height),ae===0&&(v.matrix.copy(Fe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ue===!0&&v.cameras.push(Fe)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const ae=f.getDepthInformation(ce[0]);ae&&ae.isValid&&ae.texture&&x.init(e,ae,r.renderState)}}for(let ce=0;ce<y.length;ce++){const ue=E[ce],Ae=y[ce];ue!==null&&Ae!==void 0&&Ae.update(ue,ee,u||a)}ie&&ie($,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const xe=new YS;xe.setAnimationLoop(ne),this.setAnimationLoop=function($){ie=$},this.dispose=function(){}}}const Hr=new Hi,JL=new Rt;function e3(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,jS(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,g,y,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(p,d):d.isMeshToonMaterial?(o(p,d),f(p,d)):d.isMeshPhongMaterial?(o(p,d),c(p,d)):d.isMeshStandardMaterial?(o(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(o(p,d),_(p,d)):d.isMeshDepthMaterial?o(p,d):d.isMeshDistanceMaterial?(o(p,d),x(p,d)):d.isMeshNormalMaterial?o(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&s(p,d)):d.isPointsMaterial?l(p,d,g,y):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===xn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===xn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d),y=g.envMap,E=g.envMapRotation;y&&(p.envMap.value=y,Hr.copy(E),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),p.envMapRotation.value.setFromMatrix4(JL.makeRotationFromEuler(Hr)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function s(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,g,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=y*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const g=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function t3(t,e,n,i){let r={},o={},a=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const E=y.program;i.uniformBlockBinding(g,E)}function u(g,y){let E=r[g.id];E===void 0&&(_(g),E=c(g),r[g.id]=E,g.addEventListener("dispose",p));const R=y.program;i.updateUBOMapping(g,R);const C=e.render.frame;o[g.id]!==C&&(h(g),o[g.id]=C)}function c(g){const y=f();g.__bindingPointIndex=y;const E=t.createBuffer(),R=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function f(){for(let g=0;g<s;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const y=r[g.id],E=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let C=0,T=E.length;C<T;C++){const M=Array.isArray(E[C])?E[C]:[E[C]];for(let b=0,v=M.length;b<v;b++){const S=M[b];if(m(S,C,b,R)===!0){const N=S.__offset,D=Array.isArray(S.value)?S.value:[S.value];let U=0;for(let Z=0;Z<D.length;Z++){const V=D[Z],H=x(V);typeof V=="number"||typeof V=="boolean"?(S.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,N+U,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=0,S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=0,S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=0):(V.toArray(S.__data,U),U+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,S.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,y,E,R){const C=g.value,T=y+"_"+E;if(R[T]===void 0)return typeof C=="number"||typeof C=="boolean"?R[T]=C:R[T]=C.clone(),!0;{const M=R[T];if(typeof C=="number"||typeof C=="boolean"){if(M!==C)return R[T]=C,!0}else if(M.equals(C)===!1)return M.copy(C),!0}return!1}function _(g){const y=g.uniforms;let E=0;const R=16;for(let T=0,M=y.length;T<M;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,S=b.length;v<S;v++){const N=b[v],D=Array.isArray(N.value)?N.value:[N.value];for(let U=0,Z=D.length;U<Z;U++){const V=D[U],H=x(V),O=E%R,G=O%H.boundary,te=O+G;E+=G,te!==0&&R-te<H.storage&&(E+=R-te),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=H.storage}}}const C=E%R;return C>0&&(E+=R-C),g.__size=E,g.__cache={},this}function x(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function d(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},o={}}return{bind:l,update:u,dispose:d}}class t1{constructor(e={}){const{canvas:n=VA(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const d=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=Sr,this.toneMappingExposure=1;const y=this;let E=!1,R=0,C=0,T=null,M=-1,b=null;const v=new Ct,S=new Ct;let N=null;const D=new st(0);let U=0,Z=n.width,V=n.height,H=1,O=null,G=null;const te=new Ct(0,0,Z,V),ie=new Ct(0,0,Z,V);let ne=!1;const xe=new qS;let $=!1,ee=!1;const ce=new Rt,ue=new Rt,Ae=new Y,ae=new Ct,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function Fe(){return T===null?H:1}let I=i;function nt(A,F){return n.getContext(A,F)}try{const A={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wm}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),I===null){const F="webgl2";if(I=nt(F,A),I===null)throw nt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ie,Pe,Ne,qe,Ue,P,w,z,K,oe,q,be,de,ge,je,se,ve,Le,Be,he,Ye,Ge,ct,k;function Se(){Ie=new sP(I),Ie.init(),Ge=new XL(I,Ie),Pe=new eP(I,Ie,e,Ge),Ne=new GL(I),Pe.reverseDepthBuffer&&Ne.buffers.depth.setReversed(!0),qe=new cP(I),Ue=new CL,P=new jL(I,Ie,Ne,Ue,Pe,Ge,qe),w=new nP(y),z=new aP(y),K=new gC(I),ct=new Z2(I,K),oe=new lP(I,K,qe,ct),q=new dP(I,oe,K,qe),Be=new fP(I,Pe,P),se=new tP(Ue),be=new AL(y,w,z,Ie,Pe,ct,se),de=new e3(y,Ue),ge=new PL,je=new UL(Ie),Le=new Q2(y,w,z,Ne,q,h,l),ve=new HL(y,q,Pe),k=new t3(I,qe,Pe,Ne),he=new J2(I,Ie,qe),Ye=new uP(I,Ie,qe),qe.programs=be.programs,y.capabilities=Pe,y.extensions=Ie,y.properties=Ue,y.renderLists=ge,y.shadowMap=ve,y.state=Ne,y.info=qe}Se();const Q=new ZL(y,I);this.xr=Q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(Z,V,!1))},this.getSize=function(A){return A.set(Z,V)},this.setSize=function(A,F,W=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,V=F,n.width=Math.floor(A*H),n.height=Math.floor(F*H),W===!0&&(n.style.width=A+"px",n.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(Z*H,V*H).floor()},this.setDrawingBufferSize=function(A,F,W){Z=A,V=F,H=W,n.width=Math.floor(A*W),n.height=Math.floor(F*W),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,F,W,j){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,F,W,j),Ne.viewport(v.copy(te).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,F,W,j){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,F,W,j),Ne.scissor(S.copy(ie).multiplyScalar(H).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(A){Ne.setScissorTest(ne=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(A=!0,F=!0,W=!0){let j=0;if(A){let B=!1;if(T!==null){const fe=T.texture.format;B=fe===Km||fe===Ym||fe===qm}if(B){const fe=T.texture.type,ye=fe===Bi||fe===ho||fe===Ws||fe===ba||fe===Xm||fe===$m,Ce=Le.getClearColor(),Re=Le.getClearAlpha(),Ve=Ce.r,We=Ce.g,De=Ce.b;ye?(m[0]=Ve,m[1]=We,m[2]=De,m[3]=Re,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Ve,_[1]=We,_[2]=De,_[3]=Re,I.clearBufferiv(I.COLOR,0,_))}else j|=I.COLOR_BUFFER_BIT}F&&(j|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),ge.dispose(),je.dispose(),Ue.dispose(),w.dispose(),z.dispose(),q.dispose(),ct.dispose(),k.dispose(),be.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",yg),Q.removeEventListener("sessionend",xg),Or.stop()};function re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=qe.autoReset,F=ve.enabled,W=ve.autoUpdate,j=ve.needsUpdate,B=ve.type;Se(),qe.autoReset=A,ve.enabled=F,ve.autoUpdate=W,ve.needsUpdate=j,ve.type=B}function Ee(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Je(A){const F=A.target;F.removeEventListener("dispose",Je),Pt(F)}function Pt(A){un(A),Ue.remove(A)}function un(A){const F=Ue.get(A).programs;F!==void 0&&(F.forEach(function(W){be.releaseProgram(W)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,W,j,B,fe){F===null&&(F=we);const ye=B.isMesh&&B.matrixWorld.determinant()<0,Ce=EM(A,F,W,j,B);Ne.setMaterial(j,ye);let Re=W.index,Ve=1;if(j.wireframe===!0){if(Re=oe.getWireframeAttribute(W),Re===void 0)return;Ve=2}const We=W.drawRange,De=W.attributes.position;let at=We.start*Ve,dt=(We.start+We.count)*Ve;fe!==null&&(at=Math.max(at,fe.start*Ve),dt=Math.min(dt,(fe.start+fe.count)*Ve)),Re!==null?(at=Math.max(at,0),dt=Math.min(dt,Re.count)):De!=null&&(at=Math.max(at,0),dt=Math.min(dt,De.count));const wt=dt-at;if(wt<0||wt===1/0)return;ct.setup(B,j,Ce,W,Re);let Mn,it=he;if(Re!==null&&(Mn=K.get(Re),it=Ye,it.setIndex(Mn)),B.isMesh)j.wireframe===!0?(Ne.setLineWidth(j.wireframeLinewidth*Fe()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(B.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),Ne.setLineWidth(ke*Fe()),B.isLineSegments?it.setMode(I.LINES):B.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else B.isPoints?it.setMode(I.POINTS):B.isSprite&&it.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)it.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ke=B._multiDrawStarts,Gt=B._multiDrawCounts,rt=B._multiDrawCount,$n=Re?K.get(Re).bytesPerElement:1,So=Ue.get(j).currentProgram.getUniforms();for(let wn=0;wn<rt;wn++)So.setValue(I,"_gl_DrawID",wn),it.render(ke[wn]/$n,Gt[wn])}else if(B.isInstancedMesh)it.renderInstances(at,wt,B.count);else if(W.isInstancedBufferGeometry){const ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Gt=Math.min(W.instanceCount,ke);it.renderInstances(at,wt,Gt)}else it.render(at,wt)};function tt(A,F,W){A.transparent===!0&&A.side===Ri&&A.forceSinglePass===!1?(A.side=xn,A.needsUpdate=!0,hl(A,F,W),A.side=br,A.needsUpdate=!0,hl(A,F,W),A.side=Ri):hl(A,F,W)}this.compile=function(A,F,W=null){W===null&&(W=A),p=je.get(W),p.init(F),g.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),A!==W&&A.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const j=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const fe=B.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const Ce=fe[ye];tt(Ce,W,B),j.add(Ce)}else tt(fe,W,B),j.add(fe)}),g.pop(),p=null,j},this.compileAsync=function(A,F,W=null){const j=this.compile(A,F,W);return new Promise(B=>{function fe(){if(j.forEach(function(ye){Ue.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){B(A);return}setTimeout(fe,10)}Ie.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let cn=null;function xi(A){cn&&cn(A)}function yg(){Or.stop()}function xg(){Or.start()}const Or=new YS;Or.setAnimationLoop(xi),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(A){cn=A,Q.setAnimationLoop(A),A===null?Or.stop():Or.start()},Q.addEventListener("sessionstart",yg),Q.addEventListener("sessionend",xg),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(F),F=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,F,T),p=je.get(A,g.length),p.init(F),g.push(p),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),xe.setFromProjectionMatrix(ue),ee=this.localClippingEnabled,$=se.init(this.clippingPlanes,ee),x=ge.get(A,d.length),x.init(),d.push(x),Q.enabled===!0&&Q.isPresenting===!0){const fe=y.xr.getDepthSensingMesh();fe!==null&&af(fe,F,-1/0,y.sortObjects)}af(A,F,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(O,G),ze=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,ze&&Le.addToRenderList(x,A),this.info.render.frame++,$===!0&&se.beginShadows();const W=p.state.shadowsArray;ve.render(W,A,F),$===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,B=x.transmissive;if(p.setupLights(),F.isArrayCamera){const fe=F.cameras;if(B.length>0)for(let ye=0,Ce=fe.length;ye<Ce;ye++){const Re=fe[ye];Eg(j,B,A,Re)}ze&&Le.render(A);for(let ye=0,Ce=fe.length;ye<Ce;ye++){const Re=fe[ye];Sg(x,A,Re,Re.viewport)}}else B.length>0&&Eg(j,B,A,F),ze&&Le.render(A),Sg(x,A,F);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(y,A,F),ct.resetDefaultState(),M=-1,b=null,g.pop(),g.length>0?(p=g[g.length-1],$===!0&&se.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function af(A,F,W,j){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xe.intersectsSprite(A)){j&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const ye=q.update(A),Ce=A.material;Ce.visible&&x.push(A,ye,Ce,W,ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xe.intersectsObject(A))){const ye=q.update(A),Ce=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ae.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ae.copy(ye.boundingSphere.center)),ae.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(Ce)){const Re=ye.groups;for(let Ve=0,We=Re.length;Ve<We;Ve++){const De=Re[Ve],at=Ce[De.materialIndex];at&&at.visible&&x.push(A,ye,at,W,ae.z,De)}}else Ce.visible&&x.push(A,ye,Ce,W,ae.z,null)}}const fe=A.children;for(let ye=0,Ce=fe.length;ye<Ce;ye++)af(fe[ye],F,W,j)}function Sg(A,F,W,j){const B=A.opaque,fe=A.transmissive,ye=A.transparent;p.setupLightsView(W),$===!0&&se.setGlobalState(y.clippingPlanes,W),j&&Ne.viewport(v.copy(j)),B.length>0&&dl(B,F,W),fe.length>0&&dl(fe,F,W),ye.length>0&&dl(ye,F,W),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Eg(A,F,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new po(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?il:Bi,minFilter:Jr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const fe=p.state.transmissionRenderTarget[j.id],ye=j.viewport||v;fe.setSize(ye.z,ye.w);const Ce=y.getRenderTarget();y.setRenderTarget(fe),y.getClearColor(D),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear(),ze&&Le.render(W);const Re=y.toneMapping;y.toneMapping=Sr;const Ve=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),$===!0&&se.setGlobalState(y.clippingPlanes,j),dl(A,W,j),P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let De=0,at=F.length;De<at;De++){const dt=F[De],wt=dt.object,Mn=dt.geometry,it=dt.material,ke=dt.group;if(it.side===Ri&&wt.layers.test(j.layers)){const Gt=it.side;it.side=xn,it.needsUpdate=!0,Mg(wt,W,j,Mn,it,ke),it.side=Gt,it.needsUpdate=!0,We=!0}}We===!0&&(P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe))}y.setRenderTarget(Ce),y.setClearColor(D,U),Ve!==void 0&&(j.viewport=Ve),y.toneMapping=Re}function dl(A,F,W){const j=F.isScene===!0?F.overrideMaterial:null;for(let B=0,fe=A.length;B<fe;B++){const ye=A[B],Ce=ye.object,Re=ye.geometry,Ve=j===null?ye.material:j,We=ye.group;Ce.layers.test(W.layers)&&Mg(Ce,F,W,Re,Ve,We)}}function Mg(A,F,W,j,B,fe){A.onBeforeRender(y,F,W,j,B,fe),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(y,F,W,j,A,fe),B.transparent===!0&&B.side===Ri&&B.forceSinglePass===!1?(B.side=xn,B.needsUpdate=!0,y.renderBufferDirect(W,F,j,B,A,fe),B.side=br,B.needsUpdate=!0,y.renderBufferDirect(W,F,j,B,A,fe),B.side=Ri):y.renderBufferDirect(W,F,j,B,A,fe),A.onAfterRender(y,F,W,j,B,fe)}function hl(A,F,W){F.isScene!==!0&&(F=we);const j=Ue.get(A),B=p.state.lights,fe=p.state.shadowsArray,ye=B.state.version,Ce=be.getParameters(A,B.state,fe,F,W),Re=be.getProgramCacheKey(Ce);let Ve=j.programs;j.environment=A.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(A.isMeshStandardMaterial?z:w).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Je),Ve=new Map,j.programs=Ve);let We=Ve.get(Re);if(We!==void 0){if(j.currentProgram===We&&j.lightsStateVersion===ye)return bg(A,Ce),We}else Ce.uniforms=be.getUniforms(A),A.onBeforeCompile(Ce,y),We=be.acquireProgram(Ce,Re),Ve.set(Re,We),j.uniforms=Ce.uniforms;const De=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=se.uniform),bg(A,Ce),j.needsLights=wM(A),j.lightsStateVersion=ye,j.needsLights&&(De.ambientLightColor.value=B.state.ambient,De.lightProbe.value=B.state.probe,De.directionalLights.value=B.state.directional,De.directionalLightShadows.value=B.state.directionalShadow,De.spotLights.value=B.state.spot,De.spotLightShadows.value=B.state.spotShadow,De.rectAreaLights.value=B.state.rectArea,De.ltc_1.value=B.state.rectAreaLTC1,De.ltc_2.value=B.state.rectAreaLTC2,De.pointLights.value=B.state.point,De.pointLightShadows.value=B.state.pointShadow,De.hemisphereLights.value=B.state.hemi,De.directionalShadowMap.value=B.state.directionalShadowMap,De.directionalShadowMatrix.value=B.state.directionalShadowMatrix,De.spotShadowMap.value=B.state.spotShadowMap,De.spotLightMatrix.value=B.state.spotLightMatrix,De.spotLightMap.value=B.state.spotLightMap,De.pointShadowMap.value=B.state.pointShadowMap,De.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=We,j.uniformsList=null,We}function wg(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Su.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function bg(A,F){const W=Ue.get(A);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function EM(A,F,W,j,B){F.isScene!==!0&&(F=we),P.resetTextureUnits();const fe=F.fog,ye=j.isMeshStandardMaterial?F.environment:null,Ce=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Dr,Re=(j.isMeshStandardMaterial?z:w).get(j.envMap||ye),Ve=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,dt=!!W.morphAttributes.color;let wt=Sr;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=y.toneMapping);const Mn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=Mn!==void 0?Mn.length:0,ke=Ue.get(j),Gt=p.state.lights;if($===!0&&(ee===!0||A!==b)){const kn=A===b&&j.id===M;se.setState(j,A,kn)}let rt=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Gt.state.version||ke.outputColorSpace!==Ce||B.isBatchedMesh&&ke.batching===!1||!B.isBatchedMesh&&ke.batching===!0||B.isBatchedMesh&&ke.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ke.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ke.instancing===!1||!B.isInstancedMesh&&ke.instancing===!0||B.isSkinnedMesh&&ke.skinning===!1||!B.isSkinnedMesh&&ke.skinning===!0||B.isInstancedMesh&&ke.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ke.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ke.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ke.instancingMorph===!1&&B.morphTexture!==null||ke.envMap!==Re||j.fog===!0&&ke.fog!==fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==se.numPlanes||ke.numIntersection!==se.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==We||ke.morphTargets!==De||ke.morphNormals!==at||ke.morphColors!==dt||ke.toneMapping!==wt||ke.morphTargetsCount!==it)&&(rt=!0):(rt=!0,ke.__version=j.version);let $n=ke.currentProgram;rt===!0&&($n=hl(j,F,B));let So=!1,wn=!1,sf=!1;const Tt=$n.getUniforms(),$i=ke.uniforms;if(Ne.useProgram($n.program)&&(So=!0,wn=!0,sf=!0),j.id!==M&&(M=j.id,wn=!0),So||b!==A){Pe.reverseDepthBuffer?(ce.copy(A.projectionMatrix),WA(ce),jA(ce),Tt.setValue(I,"projectionMatrix",ce)):Tt.setValue(I,"projectionMatrix",A.projectionMatrix),Tt.setValue(I,"viewMatrix",A.matrixWorldInverse);const kn=Tt.map.cameraPosition;kn!==void 0&&kn.setValue(I,Ae.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,wn=!0,sf=!0)}if(B.isSkinnedMesh){Tt.setOptional(I,B,"bindMatrix"),Tt.setOptional(I,B,"bindMatrixInverse");const kn=B.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),Tt.setValue(I,"boneTexture",kn.boneTexture,P))}B.isBatchedMesh&&(Tt.setOptional(I,B,"batchingTexture"),Tt.setValue(I,"batchingTexture",B._matricesTexture,P),Tt.setOptional(I,B,"batchingIdTexture"),Tt.setValue(I,"batchingIdTexture",B._indirectTexture,P),Tt.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&Tt.setValue(I,"batchingColorTexture",B._colorsTexture,P));const lf=W.morphAttributes;if((lf.position!==void 0||lf.normal!==void 0||lf.color!==void 0)&&Be.update(B,W,$n),(wn||ke.receiveShadow!==B.receiveShadow)&&(ke.receiveShadow=B.receiveShadow,Tt.setValue(I,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&($i.envMap.value=Re,$i.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&($i.envMapIntensity.value=F.environmentIntensity),wn&&(Tt.setValue(I,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&MM($i,sf),fe&&j.fog===!0&&de.refreshFogUniforms($i,fe),de.refreshMaterialUniforms($i,j,H,V,p.state.transmissionRenderTarget[A.id]),Su.upload(I,wg(ke),$i,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Su.upload(I,wg(ke),$i,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Tt.setValue(I,"center",B.center),Tt.setValue(I,"modelViewMatrix",B.modelViewMatrix),Tt.setValue(I,"normalMatrix",B.normalMatrix),Tt.setValue(I,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const kn=j.uniformsGroups;for(let uf=0,bM=kn.length;uf<bM;uf++){const Tg=kn[uf];k.update(Tg,$n),k.bind(Tg,$n)}}return $n}function MM(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function wM(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,F,W){Ue.get(A.texture).__webglTexture=F,Ue.get(A.depthTexture).__webglTexture=W;const j=Ue.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const W=Ue.get(A);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,W=0){T=A,R=F,C=W;let j=!0,B=null,fe=!1,ye=!1;if(A){const Re=Ue.get(A);if(Re.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(Re.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Re.__hasExternalTextures)P.rebindTextures(A,Ue.get(A.texture).__webglTexture,Ue.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const De=A.depthTexture;if(Re.__boundDepthTexture!==De){if(De!==null&&Ue.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ye=!0);const We=Ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[F])?B=We[F][W]:B=We[F],fe=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?B=Ue.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?B=We[W]:B=We,v.copy(A.viewport),S.copy(A.scissor),N=A.scissorTest}else v.copy(te).multiplyScalar(H).floor(),S.copy(ie).multiplyScalar(H).floor(),N=ne;if(Ne.bindFramebuffer(I.FRAMEBUFFER,B)&&j&&Ne.drawBuffers(A,B),Ne.viewport(v),Ne.scissor(S),Ne.setScissorTest(N),fe){const Re=Ue.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,W)}else if(ye){const Re=Ue.get(A.texture),Ve=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.__webglTexture,W||0,Ve)}M=-1},this.readRenderTargetPixels=function(A,F,W,j,B,fe,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){Ne.bindFramebuffer(I.FRAMEBUFFER,Ce);try{const Re=A.texture,Ve=Re.format,We=Re.type;if(!Pe.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-j&&W>=0&&W<=A.height-B&&I.readPixels(F,W,j,B,Ge.convert(Ve),Ge.convert(We),fe)}finally{const Re=T!==null?Ue.get(T).__webglFramebuffer:null;Ne.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,F,W,j,B,fe,ye){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){const Re=A.texture,Ve=Re.format,We=Re.type;if(!Pe.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-j&&W>=0&&W<=A.height-B){Ne.bindFramebuffer(I.FRAMEBUFFER,Ce);const De=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.bufferData(I.PIXEL_PACK_BUFFER,fe.byteLength,I.STREAM_READ),I.readPixels(F,W,j,B,Ge.convert(Ve),Ge.convert(We),0);const at=T!==null?Ue.get(T).__webglFramebuffer:null;Ne.bindFramebuffer(I.FRAMEBUFFER,at);const dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await GA(I,dt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,fe),I.deleteBuffer(De),I.deleteSync(dt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,W=0){A.isTexture!==!0&&(xu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-W),B=Math.floor(A.image.width*j),fe=Math.floor(A.image.height*j),ye=F!==null?F.x:0,Ce=F!==null?F.y:0;P.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,ye,Ce,B,fe),Ne.unbindTexture()},this.copyTextureToTexture=function(A,F,W=null,j=null,B=0){A.isTexture!==!0&&(xu("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],F=arguments[2],B=arguments[3]||0,W=null);let fe,ye,Ce,Re,Ve,We;W!==null?(fe=W.max.x-W.min.x,ye=W.max.y-W.min.y,Ce=W.min.x,Re=W.min.y):(fe=A.image.width,ye=A.image.height,Ce=0,Re=0),j!==null?(Ve=j.x,We=j.y):(Ve=0,We=0);const De=Ge.convert(F.format),at=Ge.convert(F.type);P.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const dt=I.getParameter(I.UNPACK_ROW_LENGTH),wt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Mn=I.getParameter(I.UNPACK_SKIP_PIXELS),it=I.getParameter(I.UNPACK_SKIP_ROWS),ke=I.getParameter(I.UNPACK_SKIP_IMAGES),Gt=A.isCompressedTexture?A.mipmaps[B]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,Ve,We,fe,ye,De,at,Gt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,Ve,We,Gt.width,Gt.height,De,Gt.data):I.texSubImage2D(I.TEXTURE_2D,B,Ve,We,fe,ye,De,at,Gt),I.pixelStorei(I.UNPACK_ROW_LENGTH,dt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mn),I.pixelStorei(I.UNPACK_SKIP_ROWS,it),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke),B===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(A,F,W=null,j=null,B=0){A.isTexture!==!0&&(xu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,j=arguments[1]||null,A=arguments[2],F=arguments[3],B=arguments[4]||0);let fe,ye,Ce,Re,Ve,We,De,at,dt;const wt=A.isCompressedTexture?A.mipmaps[B]:A.image;W!==null?(fe=W.max.x-W.min.x,ye=W.max.y-W.min.y,Ce=W.max.z-W.min.z,Re=W.min.x,Ve=W.min.y,We=W.min.z):(fe=wt.width,ye=wt.height,Ce=wt.depth,Re=0,Ve=0,We=0),j!==null?(De=j.x,at=j.y,dt=j.z):(De=0,at=0,dt=0);const Mn=Ge.convert(F.format),it=Ge.convert(F.type);let ke;if(F.isData3DTexture)P.setTexture3D(F,0),ke=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)P.setTexture2DArray(F,0),ke=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Gt=I.getParameter(I.UNPACK_ROW_LENGTH),rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$n=I.getParameter(I.UNPACK_SKIP_PIXELS),So=I.getParameter(I.UNPACK_SKIP_ROWS),wn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,wt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(ke,B,De,at,dt,fe,ye,Ce,Mn,it,wt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(ke,B,De,at,dt,fe,ye,Ce,Mn,wt.data):I.texSubImage3D(ke,B,De,at,dt,fe,ye,Ce,Mn,it,wt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Gt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$n),I.pixelStorei(I.UNPACK_SKIP_ROWS,So),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wn),B===0&&F.generateMipmaps&&I.generateMipmap(ke),Ne.unbindTexture()},this.initRenderTarget=function(A){Ue.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ne.unbindTexture()},this.resetState=function(){R=0,C=0,T=null,Ne.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Qm?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===Gc?"display-p3":"srgb"}}class n1 extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Jm extends sl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const F0=new Rt,pp=new zS,Jl=new Wc,eu=new Y;class i1 extends En{constructor(e=new yi,n=new Jm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(r),Jl.radius+=o,e.ray.intersectsSphere(Jl)===!1)return;F0.copy(r).invert(),pp.copy(e.ray).applyMatrix4(F0);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=h,x=m;_<x;_++){const p=u.getX(_);eu.fromBufferAttribute(f,p),z0(eu,p,l,r,e,n,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=h,x=m;_<x;_++)eu.fromBufferAttribute(f,_),z0(eu,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function z0(t,e,n,i,r,o,a){const s=pp.distanceSqToPoint(t);if(s<n){const l=new Y;pp.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wm);const n3=()=>{const t=J.useRef(null);return J.useEffect(()=>{let e=t.current,n,i,r,o=0;const a=40,s=130,l=35,u=()=>{n=new Cn(120,window.innerWidth/window.innerHeight,1,1e3),n.position.y=150,n.position.z=300,n.rotation.x=.35,i=new n1;const h=s*l;new Array(h);const m=new Jm({color:25777,size:2,opacity:.7}),_=new yi,x=new Float32Array(h*3);let p=0;for(let y=0;y<s;y++)for(let E=0;E<l;E++){const R=y*a-s*a/2,C=E*a-(l*a-10);x[p]=R,x[p+1]=0,x[p+2]=C,p+=3}_.setAttribute("position",new Wn(x,3));const d=new i1(_,m);i.add(d),r=new t1({alpha:!0}),r.setSize(window.innerWidth,window.innerHeight),e.appendChild(r.domElement),window.addEventListener("resize",c);const g=()=>{requestAnimationFrame(g),f(d,_)};g()},c=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)},f=(h,m)=>{const _=m.attributes.position.array;let x=0;for(let p=0;p<s;p++)for(let d=0;d<l;d++)_[x+1]=Math.sin((p+o)*.5)*20+Math.sin((d+o)*.5)*20,x+=3;m.attributes.position.needsUpdate=!0,r.render(i,n),o+=.04};return u(),()=>{for(;e.firstChild;)e.removeChild(e.firstChild);window.removeEventListener("resize",c)}},[]),L.jsx("div",{ref:t,className:"absolute overflow-hidden inset-0 w-full z-[-1] pointer-events-none bg-gradient-radial from-[#21325C26] to-black"})},i3=()=>L.jsxs("div",{className:"relative w-full h-screen-minus-70 bg-black  flex flex-col justify-center items-center z-[-1] overflow-hidden",children:[L.jsx("div",{className:"absolute inset-0",children:L.jsx(n3,{})}),L.jsx("div",{className:"z-10 flex flex-col justify-center items-center text-center",children:L.jsx(SS,{text:"Health Data Science Lab",glowColor:"#0070f3",glowSpread:"8px"})})]}),$c=({title:t,onClick:e})=>{const[n,i]=J.useState(!1),r=()=>i(!0),o=()=>i(!1);return L.jsxs("button",{className:`relative inline-block h-12 px-8 py-2 font-bold uppercase border-2 border-white rounded-full overflow-hidden transition-all duration-300 ease-in-out sm:inline-block ${n?"text-black":"text-white"}`,onClick:e,onMouseEnter:r,onMouseLeave:o,children:[L.jsx("span",{className:"relative z-20",children:t}),L.jsx("span",{className:`absolute inset-0 transition-transform duration-300 ease-in-out bg-white ${n?"translate-y-0":"translate-y-full"}`,style:{zIndex:10}})]})};$c.propTypes={title:X.string.isRequired,onClick:X.func.isRequired};const B0="/luberlab.github.io/",r3=[{name:"Dr Jacob Luber",role:"Director, HDSL",imgSrc:B0+"assets/images/jacob.jpg"},{name:"Helen Shang",role:"Visiting Assistant Professor",imgSrc:B0+"assets/images/shang.jpeg"}],o3=()=>{const t=Hc(),e=()=>{t("/teams")};return L.jsxs("div",{className:"text-center bg-black min-h-screen flex flex-col justify-center items-center",children:[L.jsx(xo,{titleText:"TEAM"}),L.jsx("div",{className:"flex flex-wrap justify-center gap-8 py-8",children:r3.map((n,i)=>L.jsxs("div",{className:"flex flex-col items-center max-w-[200px]",children:[L.jsx("img",{src:n.imgSrc,alt:n.name,className:"rounded-[25%] w-full h-[200px] mb-4 object-cover"}),L.jsx("h2",{className:"text-white text-lg font-bold",children:n.name}),L.jsx("p",{className:"text-white text-base",children:n.role})]},i))}),L.jsx($c,{title:"SEE MORE",onClick:e})]})},a3=()=>{const t=J.useRef(null),e=J.useRef(null),n=J.useRef(null),i=J.useRef(null),r=J.useRef(null);return J.useEffect(()=>{let o;const a=t.current;e.current=new n1,n.current=new Cn(100,window.innerWidth/window.innerHeight,1,1e3),n.current.position.z=400,i.current=new t1({alpha:!0}),i.current.setSize(window.innerWidth,window.innerHeight),a.appendChild(i.current.domElement);const s=1e4,l=new yi,u=new Float32Array(s*3);for(let m=0;m<s;m++)u[m*3]=Math.random()*800-400,u[m*3+1]=Math.random()*800-400,u[m*3+2]=Math.random()*800-400;l.setAttribute("position",new Wn(u,3));const c=new Jm({color:16777215,size:.8,opacity:.2,transparent:!0});r.current=new i1(l,c),e.current.add(r.current);const f=()=>{o=requestAnimationFrame(f),r.current.rotation.x+=.001,r.current.rotation.y+=.002,i.current.render(e.current,n.current)};f();const h=()=>{n.current.aspect=window.innerWidth/window.innerHeight,n.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h),cancelAnimationFrame(o),a.removeChild(i.current.domElement),i.current.dispose()}},[]),L.jsx("div",{ref:t,id:"three-particles",style:{width:"100%",height:"100%"}})},r1=({title:t,description:e})=>L.jsxs("div",{className:"relative w-[300px] h-[400px] m-6 rounded-lg overflow-hidden flex flex-col justify-end bg-white bg-opacity-10 shadow-[20px_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-[5px] transition-all duration-500 ease-out group",children:[L.jsx(a3,{}),L.jsx("div",{className:"absolute top-3 left-5 z-20",children:L.jsx("h3",{className:"text-white text-2xl font-semibold mb-2",children:t})}),L.jsx("div",{className:"relative z-10 p-5 bg-slate-500 bg-opacity-100 text-center transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0",children:L.jsx("p",{className:"text-white text-base font-light",children:e})})]});r1.propTypes={title:X.string.isRequired,description:X.string};const s3=[{title:"HEALTH SYSTEMS AT SCALE",description:"This is some sample description for the research card on the home page to display the text"},{title:"AI FOR MEDICAL IMAGING",description:"This is some sample description for the research card on the home page to display the text"},{title:"COMPUTATIONAL MICROBIOLOGY",description:"This is some sample description for the research card on the home page to display the text"}],l3=()=>{const t=J.useRef(null),[e,n]=J.useState(!1);return J.useEffect(()=>{const i=t.current,r=new IntersectionObserver(o=>{o[0].isIntersecting&&(n(!0),r.disconnect())},{threshold:[.2]});return i&&r.observe(i),()=>{i&&r.disconnect()}},[]),L.jsxs("div",{ref:t,className:"w-full min-h-screen flex flex-col justify-center items-center text-center bg-[#1d1b1b] ",children:[L.jsx("div",{children:L.jsx(xo,{titleText:"OUR RESEARCH"})}),L.jsx("div",{className:`flex flex-wrap justify-center items-center transition-transform duration-800 ease-in-out ${e?"animate-slideUp opacity-100":"opacity-0 translate-y-[100px]"}`,children:s3.map((i,r)=>L.jsx("div",{className:`transition-all transform duration-800 ease-in-out ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-[100px]"} flex-1 min-w-[280px] max-w-[350px] mx-4 my-4`,children:L.jsx(r1,{title:i.title,description:i.description})},r))})]})};var o1={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(n,i){t.exports=i()})(rs,function n(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},r=!i.document&&!!i.postMessage,o=i.IS_PAPA_WORKER||!1,a={},s=0,l={parse:function(M,b){var v=(b=b||{}).dynamicTyping||!1;if(T(v)&&(b.dynamicTypingFunction=v,v={}),b.dynamicTyping=v,b.transform=!!T(b.transform)&&b.transform,b.worker&&l.WORKERS_SUPPORTED){var S=function(){if(!l.WORKERS_SUPPORTED)return!1;var D=(Z=i.URL||i.webkitURL||null,V=n.toString(),l.BLOB_URL||(l.BLOB_URL=Z.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",V,")();"],{type:"text/javascript"})))),U=new i.Worker(D),Z,V;return U.onmessage=g,U.id=s++,a[U.id]=U}();return S.userStep=b.step,S.userChunk=b.chunk,S.userComplete=b.complete,S.userError=b.error,b.step=T(b.step),b.chunk=T(b.chunk),b.complete=T(b.complete),b.error=T(b.error),delete b.worker,void S.postMessage({input:M,config:b,workerId:S.id})}var N=null;return l.NODE_STREAM_INPUT,typeof M=="string"?(M=function(D){return D.charCodeAt(0)===65279?D.slice(1):D}(M),N=b.download?new f(b):new m(b)):M.readable===!0&&T(M.read)&&T(M.on)?N=new _(b):(i.File&&M instanceof File||M instanceof Object)&&(N=new h(b)),N.stream(M)},unparse:function(M,b){var v=!1,S=!0,N=",",D=`\r
`,U='"',Z=U+U,V=!1,H=null,O=!1;(function(){if(typeof b=="object"){if(typeof b.delimiter!="string"||l.BAD_DELIMITERS.filter(function(ne){return b.delimiter.indexOf(ne)!==-1}).length||(N=b.delimiter),(typeof b.quotes=="boolean"||typeof b.quotes=="function"||Array.isArray(b.quotes))&&(v=b.quotes),typeof b.skipEmptyLines!="boolean"&&typeof b.skipEmptyLines!="string"||(V=b.skipEmptyLines),typeof b.newline=="string"&&(D=b.newline),typeof b.quoteChar=="string"&&(U=b.quoteChar),typeof b.header=="boolean"&&(S=b.header),Array.isArray(b.columns)){if(b.columns.length===0)throw new Error("Option columns is empty");H=b.columns}b.escapeChar!==void 0&&(Z=b.escapeChar+U),(typeof b.escapeFormulae=="boolean"||b.escapeFormulae instanceof RegExp)&&(O=b.escapeFormulae instanceof RegExp?b.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var G=new RegExp(p(U),"g");if(typeof M=="string"&&(M=JSON.parse(M)),Array.isArray(M)){if(!M.length||Array.isArray(M[0]))return te(null,M,V);if(typeof M[0]=="object")return te(H||Object.keys(M[0]),M,V)}else if(typeof M=="object")return typeof M.data=="string"&&(M.data=JSON.parse(M.data)),Array.isArray(M.data)&&(M.fields||(M.fields=M.meta&&M.meta.fields||H),M.fields||(M.fields=Array.isArray(M.data[0])?M.fields:typeof M.data[0]=="object"?Object.keys(M.data[0]):[]),Array.isArray(M.data[0])||typeof M.data[0]=="object"||(M.data=[M.data])),te(M.fields||[],M.data||[],V);throw new Error("Unable to serialize unrecognized input");function te(ne,xe,$){var ee="";typeof ne=="string"&&(ne=JSON.parse(ne)),typeof xe=="string"&&(xe=JSON.parse(xe));var ce=Array.isArray(ne)&&0<ne.length,ue=!Array.isArray(xe[0]);if(ce&&S){for(var Ae=0;Ae<ne.length;Ae++)0<Ae&&(ee+=N),ee+=ie(ne[Ae],Ae);0<xe.length&&(ee+=D)}for(var ae=0;ae<xe.length;ae++){var we=ce?ne.length:xe[ae].length,ze=!1,Fe=ce?Object.keys(xe[ae]).length===0:xe[ae].length===0;if($&&!ce&&(ze=$==="greedy"?xe[ae].join("").trim()==="":xe[ae].length===1&&xe[ae][0].length===0),$==="greedy"&&ce){for(var I=[],nt=0;nt<we;nt++){var Ie=ue?ne[nt]:nt;I.push(xe[ae][Ie])}ze=I.join("").trim()===""}if(!ze){for(var Pe=0;Pe<we;Pe++){0<Pe&&!Fe&&(ee+=N);var Ne=ce&&ue?ne[Pe]:Pe;ee+=ie(xe[ae][Ne],Pe)}ae<xe.length-1&&(!$||0<we&&!Fe)&&(ee+=D)}}return ee}function ie(ne,xe){if(ne==null)return"";if(ne.constructor===Date)return JSON.stringify(ne).slice(1,25);var $=!1;O&&typeof ne=="string"&&O.test(ne)&&(ne="'"+ne,$=!0);var ee=ne.toString().replace(G,Z);return($=$||v===!0||typeof v=="function"&&v(ne,xe)||Array.isArray(v)&&v[xe]||function(ce,ue){for(var Ae=0;Ae<ue.length;Ae++)if(-1<ce.indexOf(ue[Ae]))return!0;return!1}(ee,l.BAD_DELIMITERS)||-1<ee.indexOf(N)||ee.charAt(0)===" "||ee.charAt(ee.length-1)===" ")?U+ee+U:ee}}};if(l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!r&&!!i.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=d,l.ParserHandle=x,l.NetworkStreamer=f,l.FileStreamer=h,l.StringStreamer=m,l.ReadableStreamStreamer=_,i.jQuery){var u=i.jQuery;u.fn.parse=function(M){var b=M.config||{},v=[];return this.each(function(D){if(!(u(this).prop("tagName").toUpperCase()==="INPUT"&&u(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var U=0;U<this.files.length;U++)v.push({file:this.files[U],inputElem:this,instanceConfig:u.extend({},b)})}),S(),this;function S(){if(v.length!==0){var D,U,Z,V,H=v[0];if(T(M.before)){var O=M.before(H.file,H.inputElem);if(typeof O=="object"){if(O.action==="abort")return D="AbortError",U=H.file,Z=H.inputElem,V=O.reason,void(T(M.error)&&M.error({name:D},U,Z,V));if(O.action==="skip")return void N();typeof O.config=="object"&&(H.instanceConfig=u.extend(H.instanceConfig,O.config))}else if(O==="skip")return void N()}var G=H.instanceConfig.complete;H.instanceConfig.complete=function(te){T(G)&&G(te,H.file,H.inputElem),N()},l.parse(H.file,H.instanceConfig)}else T(M.complete)&&M.complete()}function N(){v.splice(0,1),S()}}}function c(M){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(b){var v=R(b);v.chunkSize=parseInt(v.chunkSize),b.step||b.chunk||(v.chunkSize=null),this._handle=new x(v),(this._handle.streamer=this)._config=v}).call(this,M),this.parseChunk=function(b,v){if(this.isFirstChunk&&T(this._config.beforeFirstChunk)){var S=this._config.beforeFirstChunk(b);S!==void 0&&(b=S)}this.isFirstChunk=!1,this._halted=!1;var N=this._partialLine+b;this._partialLine="";var D=this._handle.parse(N,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var U=D.meta.cursor;this._finished||(this._partialLine=N.substring(U-this._baseIndex),this._baseIndex=U),D&&D.data&&(this._rowCount+=D.data.length);var Z=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)i.postMessage({results:D,workerId:l.WORKER_ID,finished:Z});else if(T(this._config.chunk)&&!v){if(this._config.chunk(D,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);D=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(D.data),this._completeResults.errors=this._completeResults.errors.concat(D.errors),this._completeResults.meta=D.meta),this._completed||!Z||!T(this._config.complete)||D&&D.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),Z||D&&D.meta.paused||this._nextChunk(),D}this._halted=!0},this._sendError=function(b){T(this._config.error)?this._config.error(b):o&&this._config.error&&i.postMessage({workerId:l.WORKER_ID,error:b,finished:!1})}}function f(M){var b;(M=M||{}).chunkSize||(M.chunkSize=l.RemoteChunkSize),c.call(this,M),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(v){this._input=v,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(b=new XMLHttpRequest,this._config.withCredentials&&(b.withCredentials=this._config.withCredentials),r||(b.onload=C(this._chunkLoaded,this),b.onerror=C(this._chunkError,this)),b.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var v=this._config.downloadRequestHeaders;for(var S in v)b.setRequestHeader(S,v[S])}if(this._config.chunkSize){var N=this._start+this._config.chunkSize-1;b.setRequestHeader("Range","bytes="+this._start+"-"+N)}try{b.send(this._config.downloadRequestBody)}catch(D){this._chunkError(D.message)}r&&b.status===0&&this._chunkError()}},this._chunkLoaded=function(){b.readyState===4&&(b.status<200||400<=b.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:b.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(v){var S=v.getResponseHeader("Content-Range");return S===null?-1:parseInt(S.substring(S.lastIndexOf("/")+1))}(b),this.parseChunk(b.responseText)))},this._chunkError=function(v){var S=b.statusText||v;this._sendError(new Error(S))}}function h(M){var b,v;(M=M||{}).chunkSize||(M.chunkSize=l.LocalChunkSize),c.call(this,M);var S=typeof FileReader<"u";this.stream=function(N){this._input=N,v=N.slice||N.webkitSlice||N.mozSlice,S?((b=new FileReader).onload=C(this._chunkLoaded,this),b.onerror=C(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var N=this._input;if(this._config.chunkSize){var D=Math.min(this._start+this._config.chunkSize,this._input.size);N=v.call(N,this._start,D)}var U=b.readAsText(N,this._config.encoding);S||this._chunkLoaded({target:{result:U}})},this._chunkLoaded=function(N){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(N.target.result)},this._chunkError=function(){this._sendError(b.error)}}function m(M){var b;c.call(this,M=M||{}),this.stream=function(v){return b=v,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var v,S=this._config.chunkSize;return S?(v=b.substring(0,S),b=b.substring(S)):(v=b,b=""),this._finished=!b,this.parseChunk(v)}}}function _(M){c.call(this,M=M||{});var b=[],v=!0,S=!1;this.pause=function(){c.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){c.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(N){this._input=N,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){S&&b.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),b.length?this.parseChunk(b.shift()):v=!0},this._streamData=C(function(N){try{b.push(typeof N=="string"?N:N.toString(this._config.encoding)),v&&(v=!1,this._checkIsFinished(),this.parseChunk(b.shift()))}catch(D){this._streamError(D)}},this),this._streamError=C(function(N){this._streamCleanUp(),this._sendError(N)},this),this._streamEnd=C(function(){this._streamCleanUp(),S=!0,this._streamData("")},this),this._streamCleanUp=C(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function x(M){var b,v,S,N=Math.pow(2,53),D=-N,U=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Z=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,V=this,H=0,O=0,G=!1,te=!1,ie=[],ne={data:[],errors:[],meta:{}};if(T(M.step)){var xe=M.step;M.step=function(ae){if(ne=ae,ce())ee();else{if(ee(),ne.data.length===0)return;H+=ae.data.length,M.preview&&H>M.preview?v.abort():(ne.data=ne.data[0],xe(ne,V))}}}function $(ae){return M.skipEmptyLines==="greedy"?ae.join("").trim()==="":ae.length===1&&ae[0].length===0}function ee(){return ne&&S&&(Ae("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),S=!1),M.skipEmptyLines&&(ne.data=ne.data.filter(function(ae){return!$(ae)})),ce()&&function(){if(!ne)return;function ae(ze,Fe){T(M.transformHeader)&&(ze=M.transformHeader(ze,Fe)),ie.push(ze)}if(Array.isArray(ne.data[0])){for(var we=0;ce()&&we<ne.data.length;we++)ne.data[we].forEach(ae);ne.data.splice(0,1)}else ne.data.forEach(ae)}(),function(){if(!ne||!M.header&&!M.dynamicTyping&&!M.transform)return ne;function ae(ze,Fe){var I,nt=M.header?{}:[];for(I=0;I<ze.length;I++){var Ie=I,Pe=ze[I];M.header&&(Ie=I>=ie.length?"__parsed_extra":ie[I]),M.transform&&(Pe=M.transform(Pe,Ie)),Pe=ue(Ie,Pe),Ie==="__parsed_extra"?(nt[Ie]=nt[Ie]||[],nt[Ie].push(Pe)):nt[Ie]=Pe}return M.header&&(I>ie.length?Ae("FieldMismatch","TooManyFields","Too many fields: expected "+ie.length+" fields but parsed "+I,O+Fe):I<ie.length&&Ae("FieldMismatch","TooFewFields","Too few fields: expected "+ie.length+" fields but parsed "+I,O+Fe)),nt}var we=1;return!ne.data.length||Array.isArray(ne.data[0])?(ne.data=ne.data.map(ae),we=ne.data.length):ne.data=ae(ne.data,0),M.header&&ne.meta&&(ne.meta.fields=ie),O+=we,ne}()}function ce(){return M.header&&ie.length===0}function ue(ae,we){return ze=ae,M.dynamicTypingFunction&&M.dynamicTyping[ze]===void 0&&(M.dynamicTyping[ze]=M.dynamicTypingFunction(ze)),(M.dynamicTyping[ze]||M.dynamicTyping)===!0?we==="true"||we==="TRUE"||we!=="false"&&we!=="FALSE"&&(function(Fe){if(U.test(Fe)){var I=parseFloat(Fe);if(D<I&&I<N)return!0}return!1}(we)?parseFloat(we):Z.test(we)?new Date(we):we===""?null:we):we;var ze}function Ae(ae,we,ze,Fe){var I={type:ae,code:we,message:ze};Fe!==void 0&&(I.row=Fe),ne.errors.push(I)}this.parse=function(ae,we,ze){var Fe=M.quoteChar||'"';if(M.newline||(M.newline=function(Ie,Pe){Ie=Ie.substring(0,1048576);var Ne=new RegExp(p(Pe)+"([^]*?)"+p(Pe),"gm"),qe=(Ie=Ie.replace(Ne,"")).split("\r"),Ue=Ie.split(`
`),P=1<Ue.length&&Ue[0].length<qe[0].length;if(qe.length===1||P)return`
`;for(var w=0,z=0;z<qe.length;z++)qe[z][0]===`
`&&w++;return w>=qe.length/2?`\r
`:"\r"}(ae,Fe)),S=!1,M.delimiter)T(M.delimiter)&&(M.delimiter=M.delimiter(ae),ne.meta.delimiter=M.delimiter);else{var I=function(Ie,Pe,Ne,qe,Ue){var P,w,z,K;Ue=Ue||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var oe=0;oe<Ue.length;oe++){var q=Ue[oe],be=0,de=0,ge=0;z=void 0;for(var je=new d({comments:qe,delimiter:q,newline:Pe,preview:10}).parse(Ie),se=0;se<je.data.length;se++)if(Ne&&$(je.data[se]))ge++;else{var ve=je.data[se].length;de+=ve,z!==void 0?0<ve&&(be+=Math.abs(ve-z),z=ve):z=ve}0<je.data.length&&(de/=je.data.length-ge),(w===void 0||be<=w)&&(K===void 0||K<de)&&1.99<de&&(w=be,P=q,K=de)}return{successful:!!(M.delimiter=P),bestDelimiter:P}}(ae,M.newline,M.skipEmptyLines,M.comments,M.delimitersToGuess);I.successful?M.delimiter=I.bestDelimiter:(S=!0,M.delimiter=l.DefaultDelimiter),ne.meta.delimiter=M.delimiter}var nt=R(M);return M.preview&&M.header&&nt.preview++,b=ae,v=new d(nt),ne=v.parse(b,we,ze),ee(),G?{meta:{paused:!0}}:ne||{meta:{paused:!1}}},this.paused=function(){return G},this.pause=function(){G=!0,v.abort(),b=T(M.chunk)?"":b.substring(v.getCharIndex())},this.resume=function(){V.streamer._halted?(G=!1,V.streamer.parseChunk(b,!0)):setTimeout(V.resume,3)},this.aborted=function(){return te},this.abort=function(){te=!0,v.abort(),ne.meta.aborted=!0,T(M.complete)&&M.complete(ne),b=""}}function p(M){return M.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function d(M){var b,v=(M=M||{}).delimiter,S=M.newline,N=M.comments,D=M.step,U=M.preview,Z=M.fastMode,V=b=M.quoteChar===void 0||M.quoteChar===null?'"':M.quoteChar;if(M.escapeChar!==void 0&&(V=M.escapeChar),(typeof v!="string"||-1<l.BAD_DELIMITERS.indexOf(v))&&(v=","),N===v)throw new Error("Comment character same as delimiter");N===!0?N="#":(typeof N!="string"||-1<l.BAD_DELIMITERS.indexOf(N))&&(N=!1),S!==`
`&&S!=="\r"&&S!==`\r
`&&(S=`
`);var H=0,O=!1;this.parse=function(G,te,ie){if(typeof G!="string")throw new Error("Input must be a string");var ne=G.length,xe=v.length,$=S.length,ee=N.length,ce=T(D),ue=[],Ae=[],ae=[],we=H=0;if(!G)return Le();if(M.header&&!te){var ze=G.split(S)[0].split(v),Fe=[],I={},nt=!1;for(var Ie in ze){var Pe=ze[Ie];T(M.transformHeader)&&(Pe=M.transformHeader(Pe,Ie));var Ne=Pe,qe=I[Pe]||0;for(0<qe&&(nt=!0,Ne=Pe+"_"+qe),I[Pe]=qe+1;Fe.includes(Ne);)Ne=Ne+"_"+qe;Fe.push(Ne)}if(nt){var Ue=G.split(S);Ue[0]=Fe.join(v),G=Ue.join(S)}}if(Z||Z!==!1&&G.indexOf(b)===-1){for(var P=G.split(S),w=0;w<P.length;w++){if(ae=P[w],H+=ae.length,w!==P.length-1)H+=S.length;else if(ie)return Le();if(!N||ae.substring(0,ee)!==N){if(ce){if(ue=[],ge(ae.split(v)),Be(),O)return Le()}else ge(ae.split(v));if(U&&U<=w)return ue=ue.slice(0,U),Le(!0)}}return Le()}for(var z=G.indexOf(v,H),K=G.indexOf(S,H),oe=new RegExp(p(V)+p(b),"g"),q=G.indexOf(b,H);;)if(G[H]!==b)if(N&&ae.length===0&&G.substring(H,H+ee)===N){if(K===-1)return Le();H=K+$,K=G.indexOf(S,H),z=G.indexOf(v,H)}else if(z!==-1&&(z<K||K===-1))ae.push(G.substring(H,z)),H=z+xe,z=G.indexOf(v,H);else{if(K===-1)break;if(ae.push(G.substring(H,K)),ve(K+$),ce&&(Be(),O))return Le();if(U&&ue.length>=U)return Le(!0)}else for(q=H,H++;;){if((q=G.indexOf(b,q+1))===-1)return ie||Ae.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ue.length,index:H}),se();if(q===ne-1)return se(G.substring(H,q).replace(oe,b));if(b!==V||G[q+1]!==V){if(b===V||q===0||G[q-1]!==V){z!==-1&&z<q+1&&(z=G.indexOf(v,q+1)),K!==-1&&K<q+1&&(K=G.indexOf(S,q+1));var be=je(K===-1?z:Math.min(z,K));if(G.substr(q+1+be,xe)===v){ae.push(G.substring(H,q).replace(oe,b)),G[H=q+1+be+xe]!==b&&(q=G.indexOf(b,H)),z=G.indexOf(v,H),K=G.indexOf(S,H);break}var de=je(K);if(G.substring(q+1+de,q+1+de+$)===S){if(ae.push(G.substring(H,q).replace(oe,b)),ve(q+1+de+$),z=G.indexOf(v,H),q=G.indexOf(b,H),ce&&(Be(),O))return Le();if(U&&ue.length>=U)return Le(!0);break}Ae.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ue.length,index:H}),q++}}else q++}return se();function ge(he){ue.push(he),we=H}function je(he){var Ye=0;if(he!==-1){var Ge=G.substring(q+1,he);Ge&&Ge.trim()===""&&(Ye=Ge.length)}return Ye}function se(he){return ie||(he===void 0&&(he=G.substring(H)),ae.push(he),H=ne,ge(ae),ce&&Be()),Le()}function ve(he){H=he,ge(ae),ae=[],K=G.indexOf(S,H)}function Le(he){return{data:ue,errors:Ae,meta:{delimiter:v,linebreak:S,aborted:O,truncated:!!he,cursor:we+(te||0)}}}function Be(){D(Le()),ue=[],Ae=[]}},this.abort=function(){O=!0},this.getCharIndex=function(){return H}}function g(M){var b=M.data,v=a[b.workerId],S=!1;if(b.error)v.userError(b.error,b.file);else if(b.results&&b.results.data){var N={abort:function(){S=!0,y(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(T(v.userStep)){for(var D=0;D<b.results.data.length&&(v.userStep({data:b.results.data[D],errors:b.results.errors,meta:b.results.meta},N),!S);D++);delete b.results}else T(v.userChunk)&&(v.userChunk(b.results,N,b.file),delete b.results)}b.finished&&!S&&y(b.workerId,b.results)}function y(M,b){var v=a[M];T(v.userComplete)&&v.userComplete(b),v.terminate(),delete a[M]}function E(){throw new Error("Not implemented.")}function R(M){if(typeof M!="object"||M===null)return M;var b=Array.isArray(M)?[]:{};for(var v in M)b[v]=R(M[v]);return b}function C(M,b){return function(){M.apply(b,arguments)}}function T(M){return typeof M=="function"}return o&&(i.onmessage=function(M){var b=M.data;if(l.WORKER_ID===void 0&&b&&(l.WORKER_ID=b.workerId),typeof b.input=="string")i.postMessage({workerId:l.WORKER_ID,results:l.parse(b.input,b.config),finished:!0});else if(i.File&&b.input instanceof File||b.input instanceof Object){var v=l.parse(b.input,b.config);v&&i.postMessage({workerId:l.WORKER_ID,results:v,finished:!0})}}),(f.prototype=Object.create(c.prototype)).constructor=f,(h.prototype=Object.create(c.prototype)).constructor=h,(m.prototype=Object.create(m.prototype)).constructor=m,(_.prototype=Object.create(c.prototype)).constructor=_,l})})(o1);var u3=o1.exports;const a1=Sc(u3),c3="/luberlab.github.io/",s1=J.createContext(),l1=({children:t})=>{const[e,n]=J.useState([]);return J.useEffect(()=>{a1.parse(`${c3}assets/news.csv`,{download:!0,header:!0,skipEmptyLines:!0,complete:i=>{const r=i.data.map(o=>({date:o.date,title:o.title,content:o.content,link:o.link||null}));n(r)}})},[]),L.jsx(s1.Provider,{value:e,children:t})};var u1={},c1={},qc={},f1={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=e})(f1);var f3="Expected a function",H0=NaN,d3="[object Symbol]",h3=/^\s+|\s+$/g,p3=/^[-+]0x[0-9a-f]+$/i,m3=/^0b[01]+$/i,g3=/^0o[0-7]+$/i,v3=parseInt,_3=typeof rs=="object"&&rs&&rs.Object===Object&&rs,y3=typeof self=="object"&&self&&self.Object===Object&&self,x3=_3||y3||Function("return this")(),S3=Object.prototype,E3=S3.toString,M3=Math.max,w3=Math.min,pd=function(){return x3.Date.now()};function b3(t,e,n){var i,r,o,a,s,l,u=0,c=!1,f=!1,h=!0;if(typeof t!="function")throw new TypeError(f3);e=V0(e)||0,mp(n)&&(c=!!n.leading,f="maxWait"in n,o=f?M3(V0(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h);function m(C){var T=i,M=r;return i=r=void 0,u=C,a=t.apply(M,T),a}function _(C){return u=C,s=setTimeout(d,e),c?m(C):a}function x(C){var T=C-l,M=C-u,b=e-T;return f?w3(b,o-M):b}function p(C){var T=C-l,M=C-u;return l===void 0||T>=e||T<0||f&&M>=o}function d(){var C=pd();if(p(C))return g(C);s=setTimeout(d,x(C))}function g(C){return s=void 0,h&&i?m(C):(i=r=void 0,a)}function y(){s!==void 0&&clearTimeout(s),u=0,i=l=r=s=void 0}function E(){return s===void 0?a:g(pd())}function R(){var C=pd(),T=p(C);if(i=arguments,r=this,l=C,T){if(s===void 0)return _(l);if(f)return s=setTimeout(d,e),m(l)}return s===void 0&&(s=setTimeout(d,e)),a}return R.cancel=y,R.flush=E,R}function mp(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function T3(t){return!!t&&typeof t=="object"}function A3(t){return typeof t=="symbol"||T3(t)&&E3.call(t)==d3}function V0(t){if(typeof t=="number")return t;if(A3(t))return H0;if(mp(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=mp(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(h3,"");var n=m3.test(t);return n||g3.test(t)?v3(t.slice(2),n?2:8):p3.test(t)?H0:+t}var C3=b3,d1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(o=r(o,i(s)))}return o}function i(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var s in o)e.call(o,s)&&o[s]&&(a=r(a,s));return a}function r(o,a){return a?o?o+" "+a:o+a:o}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(d1);var Yc=d1.exports,pe={},eg={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(J);function n(r){return r&&r.__esModule?r:{default:r}}var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return e.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return e.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=i})(eg);Object.defineProperty(pe,"__esModule",{value:!0});pe.checkSpecKeys=pe.checkNavigable=pe.changeSlide=pe.canUseDOM=pe.canGoNext=void 0;pe.clamp=p1;pe.extractObject=void 0;pe.filterSettings=G3;pe.validSettings=pe.swipeStart=pe.swipeMove=pe.swipeEnd=pe.slidesOnRight=pe.slidesOnLeft=pe.slideHandler=pe.siblingDirection=pe.safePreventDefault=pe.lazyStartIndex=pe.lazySlidesOnRight=pe.lazySlidesOnLeft=pe.lazyEndIndex=pe.keyHandler=pe.initializedState=pe.getWidth=pe.getTrackLeft=pe.getTrackCSS=pe.getTrackAnimateCSS=pe.getTotalSlides=pe.getSwipeDirection=pe.getSlideCount=pe.getRequiredLazySlides=pe.getPreClones=pe.getPostClones=pe.getOnDemandLazySlides=pe.getNavigableIndexes=pe.getHeight=void 0;var R3=h1(J),P3=h1(eg);function h1(t){return t&&t.__esModule?t:{default:t}}function js(t){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},js(t)}function G0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function vt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?G0(Object(n),!0).forEach(function(i){L3(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function L3(t,e,n){return e=N3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function N3(t){var e=I3(t,"string");return js(e)=="symbol"?e:String(e)}function I3(t,e){if(js(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(js(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function p1(t,e,n){return Math.max(e,Math.min(t,n))}var da=pe.safePreventDefault=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()},m1=pe.getOnDemandLazySlides=function(e){for(var n=[],i=g1(e),r=v1(e),o=i;o<r;o++)e.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};pe.getRequiredLazySlides=function(e){for(var n=[],i=g1(e),r=v1(e),o=i;o<r;o++)n.push(o);return n};var g1=pe.lazyStartIndex=function(e){return e.currentSlide-D3(e)},v1=pe.lazyEndIndex=function(e){return e.currentSlide+O3(e)},D3=pe.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},O3=pe.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},gp=pe.getWidth=function(e){return e&&e.offsetWidth||0},_1=pe.getHeight=function(e){return e&&e.offsetHeight||0},y1=pe.getSwipeDirection=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i,r,o,a;return i=e.startX-e.curX,r=e.startY-e.curY,o=Math.atan2(r,i),a=Math.round(o*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?"left":a>=135&&a<=225?"right":n===!0?a>=35&&a<=135?"up":"down":"vertical"},x1=pe.canGoNext=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};pe.extractObject=function(e,n){var i={};return n.forEach(function(r){return i[r]=e[r]}),i};pe.initializedState=function(e){var n=R3.default.Children.count(e.children),i=e.listRef,r=Math.ceil(gp(i)),o=e.trackRef&&e.trackRef.node,a=Math.ceil(gp(o)),s;if(e.vertical)s=r;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=r/100),s=Math.ceil((r-l)/e.slidesToShow)}var u=i&&_1(i.querySelector('[data-index="0"]')),c=u*e.slidesToShow,f=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(f=n-1-e.initialSlide);var h=e.lazyLoadedList||[],m=m1(vt(vt({},e),{},{currentSlide:f,lazyLoadedList:h}));h=h.concat(m);var _={slideCount:n,slideWidth:s,listWidth:r,trackWidth:a,currentSlide:f,slideHeight:u,listHeight:c,lazyLoadedList:h};return e.autoplaying===null&&e.autoplay&&(_.autoplaying="playing"),_};pe.slideHandler=function(e){var n=e.waitForAnimate,i=e.animating,r=e.fade,o=e.infinite,a=e.index,s=e.slideCount,l=e.lazyLoad,u=e.currentSlide,c=e.centerMode,f=e.slidesToScroll,h=e.slidesToShow,m=e.useCSS,_=e.lazyLoadedList;if(n&&i)return{};var x=a,p,d,g,y={},E={},R=o?a:p1(a,0,s-1);if(r){if(!o&&(a<0||a>=s))return{};a<0?x=a+s:a>=s&&(x=a-s),l&&_.indexOf(x)<0&&(_=_.concat(x)),y={animating:!0,currentSlide:x,lazyLoadedList:_,targetSlide:x},E={animating:!1,targetSlide:x}}else p=x,x<0?(p=x+s,o?s%f!==0&&(p=s-s%f):p=0):!x1(e)&&x>u?x=p=u:c&&x>=s?(x=o?s:s-1,p=o?0:s-1):x>=s&&(p=x-s,o?s%f!==0&&(p=0):p=s-h),!o&&x+h>=s&&(p=s-h),d=ic(vt(vt({},e),{},{slideIndex:x})),g=ic(vt(vt({},e),{},{slideIndex:p})),o||(d===g&&(x=p),d=g),l&&(_=_.concat(m1(vt(vt({},e),{},{currentSlide:x})))),m?(y={animating:!0,currentSlide:p,trackStyle:S1(vt(vt({},e),{},{left:d})),lazyLoadedList:_,targetSlide:R},E={animating:!1,currentSlide:p,trackStyle:nc(vt(vt({},e),{},{left:g})),swipeLeft:null,targetSlide:R}):y={currentSlide:p,trackStyle:nc(vt(vt({},e),{},{left:g})),lazyLoadedList:_,targetSlide:R};return{state:y,nextState:E}};pe.changeSlide=function(e,n){var i,r,o,a,s,l=e.slidesToScroll,u=e.slidesToShow,c=e.slideCount,f=e.currentSlide,h=e.targetSlide,m=e.lazyLoad,_=e.infinite;if(a=c%l!==0,i=a?0:(c-f)%l,n.message==="previous")o=i===0?l:u-i,s=f-o,m&&!_&&(r=f-o,s=r===-1?c-1:r),_||(s=h-l);else if(n.message==="next")o=i===0?l:i,s=f+o,m&&!_&&(s=(f+l)%c+i),_||(s=h+l);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,_){var x=z3(vt(vt({},e),{},{targetSlide:s}));s>n.currentSlide&&x==="left"?s=s-c:s<n.currentSlide&&x==="right"&&(s=s+c)}}else n.message==="index"&&(s=Number(n.index));return s};pe.keyHandler=function(e,n,i){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?i?"next":"previous":e.keyCode===39?i?"previous":"next":""};pe.swipeStart=function(e,n,i){return e.target.tagName==="IMG"&&da(e),!n||!i&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};pe.swipeMove=function(e,n){var i=n.scrolling,r=n.animating,o=n.vertical,a=n.swipeToSlide,s=n.verticalSwiping,l=n.rtl,u=n.currentSlide,c=n.edgeFriction,f=n.edgeDragged,h=n.onEdge,m=n.swiped,_=n.swiping,x=n.slideCount,p=n.slidesToScroll,d=n.infinite,g=n.touchObject,y=n.swipeEvent,E=n.listHeight,R=n.listWidth;if(!i){if(r)return da(e);o&&a&&s&&da(e);var C,T={},M=ic(n);g.curX=e.touches?e.touches[0].pageX:e.clientX,g.curY=e.touches?e.touches[0].pageY:e.clientY,g.swipeLength=Math.round(Math.sqrt(Math.pow(g.curX-g.startX,2)));var b=Math.round(Math.sqrt(Math.pow(g.curY-g.startY,2)));if(!s&&!_&&b>10)return{scrolling:!0};s&&(g.swipeLength=b);var v=(l?-1:1)*(g.curX>g.startX?1:-1);s&&(v=g.curY>g.startY?1:-1);var S=Math.ceil(x/p),N=y1(n.touchObject,s),D=g.swipeLength;return d||(u===0&&(N==="right"||N==="down")||u+1>=S&&(N==="left"||N==="up")||!x1(n)&&(N==="left"||N==="up"))&&(D=g.swipeLength*c,f===!1&&h&&(h(N),T.edgeDragged=!0)),!m&&y&&(y(N),T.swiped=!0),o?C=M+D*(E/R)*v:l?C=M-D*v:C=M+D*v,s&&(C=M+D*v),T=vt(vt({},T),{},{touchObject:g,swipeLeft:C,trackStyle:nc(vt(vt({},n),{},{left:C}))}),Math.abs(g.curX-g.startX)<Math.abs(g.curY-g.startY)*.8||g.swipeLength>10&&(T.swiping=!0,da(e)),T}};pe.swipeEnd=function(e,n){var i=n.dragging,r=n.swipe,o=n.touchObject,a=n.listWidth,s=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,f=n.scrolling,h=n.onSwipe,m=n.targetSlide,_=n.currentSlide,x=n.infinite;if(!i)return r&&da(e),{};var p=l?u/s:a/s,d=y1(o,l),g={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!o.swipeLength)return g;if(o.swipeLength>p){da(e),h&&h(d);var y,E,R=x?_:m;switch(d){case"left":case"up":E=R+j0(n),y=c?W0(n,E):E,g.currentDirection=0;break;case"right":case"down":E=R-j0(n),y=c?W0(n,E):E,g.currentDirection=1;break;default:y=R}g.triggerSlideHandler=y}else{var C=ic(n);g.trackStyle=S1(vt(vt({},n),{},{left:C}))}return g};var U3=pe.getNavigableIndexes=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,i=e.infinite?e.slidesToShow*-1:0,r=e.infinite?e.slidesToShow*-1:0,o=[];i<n;)o.push(i),i=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return o},W0=pe.checkNavigable=function(e,n){var i=U3(e),r=0;if(n>i[i.length-1])n=i[i.length-1];else for(var o in i){if(n<i[o]){n=r;break}r=i[o]}return n},j0=pe.getSlideCount=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var i,r=e.listRef,o=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(l){if(e.vertical){if(l.offsetTop+_1(l)/2>e.swipeLeft*-1)return i=l,!1}else if(l.offsetLeft-n+gp(l)/2>e.swipeLeft*-1)return i=l,!1;return!0}),!i)return 0;var a=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,s=Math.abs(i.dataset.index-a)||1;return s}else return e.slidesToScroll},tg=pe.checkSpecKeys=function(e,n){return n.reduce(function(i,r){return i&&e.hasOwnProperty(r)},!0)?null:console.error("Keys Missing:",e)},nc=pe.getTrackCSS=function(e){tg(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,i,r=e.slideCount+2*e.slidesToShow;e.vertical?i=r*e.slideHeight:n=F3(e)*e.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";o=vt(vt({},o),{},{WebkitTransform:a,transform:s,msTransform:l})}else e.vertical?o.top=e.left:o.left=e.left;return e.fade&&(o={opacity:1}),n&&(o.width=n),i&&(o.height=i),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?o.marginTop=e.left+"px":o.marginLeft=e.left+"px"),o},S1=pe.getTrackAnimateCSS=function(e){tg(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=nc(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n},ic=pe.getTrackLeft=function(e){if(e.unslick)return 0;tg(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,i=e.trackRef,r=e.infinite,o=e.centerMode,a=e.slideCount,s=e.slidesToShow,l=e.slidesToScroll,u=e.slideWidth,c=e.listWidth,f=e.variableWidth,h=e.slideHeight,m=e.fade,_=e.vertical,x=0,p,d,g=0;if(m||e.slideCount===1)return 0;var y=0;if(r?(y=-Eu(e),a%l!==0&&n+l>a&&(y=-(n>a?s-(n-a):a%l)),o&&(y+=parseInt(s/2))):(a%l!==0&&n+l>a&&(y=s-a%l),o&&(y=parseInt(s/2))),x=y*u,g=y*h,_?p=n*h*-1+g:p=n*u*-1+x,f===!0){var E,R=i&&i.node;if(E=n+Eu(e),d=R&&R.childNodes[E],p=d?d.offsetLeft*-1:0,o===!0){E=r?n+Eu(e):n,d=R&&R.children[E],p=0;for(var C=0;C<E;C++)p-=R&&R.children[C]&&R.children[C].offsetWidth;p-=parseInt(e.centerPadding),p+=d&&(c-d.offsetWidth)/2}}return p},Eu=pe.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},k3=pe.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},F3=pe.getTotalSlides=function(e){return e.slideCount===1?1:Eu(e)+e.slideCount+k3(e)},z3=pe.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+B3(e)?"left":"right":e.targetSlide<e.currentSlide-H3(e)?"right":"left"},B3=pe.slidesOnRight=function(e){var n=e.slidesToShow,i=e.centerMode,r=e.rtl,o=e.centerPadding;if(i){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),r&&n%2===0&&(a+=1),a}return r?0:n-1},H3=pe.slidesOnLeft=function(e){var n=e.slidesToShow,i=e.centerMode,r=e.rtl,o=e.centerPadding;if(i){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),!r&&n%2===0&&(a+=1),a}return r?n-1:0};pe.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var V3=pe.validSettings=Object.keys(P3.default);function G3(t){return V3.reduce(function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e},{})}var Kc={};Object.defineProperty(Kc,"__esModule",{value:!0});Kc.Track=void 0;var rr=E1(J),md=E1(Yc),gd=pe;function E1(t){return t&&t.__esModule?t:{default:t}}function Ca(t){"@babel/helpers - typeof";return Ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ca(t)}function vp(){return vp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vp.apply(this,arguments)}function W3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j3(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,w1(i.key),i)}}function X3(t,e,n){return e&&j3(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function $3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_p(t,e)}function _p(t,e){return _p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},_p(t,e)}function q3(t){var e=M1();return function(){var i=rc(t),r;if(e){var o=rc(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return Y3(this,r)}}function Y3(t,e){if(e&&(Ca(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yp(t)}function yp(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function M1(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(M1=function(){return!!t})()}function rc(t){return rc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},rc(t)}function X0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function dn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?X0(Object(n),!0).forEach(function(i){xp(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function xp(t,e,n){return e=w1(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w1(t){var e=K3(t,"string");return Ca(e)=="symbol"?e:String(e)}function K3(t,e){if(Ca(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Ca(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var vd=function(e){var n,i,r,o,a;e.rtl?a=e.slideCount-1-e.index:a=e.index,r=a<0||a>=e.slideCount,e.centerMode?(o=Math.floor(e.slidesToShow/2),i=(a-e.currentSlide)%e.slideCount===0,a>e.currentSlide-o-1&&a<=e.currentSlide+o&&(n=!0)):n=e.currentSlide<=a&&a<e.currentSlide+e.slidesToShow;var s;e.targetSlide<0?s=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?s=e.targetSlide-e.slideCount:s=e.targetSlide;var l=a===s;return{"slick-slide":!0,"slick-active":n,"slick-center":i,"slick-cloned":r,"slick-current":l}},Q3=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,n.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},_d=function(e,n){return e.key||n},Z3=function(e){var n,i=[],r=[],o=[],a=rr.default.Children.count(e.children),s=(0,gd.lazyStartIndex)(e),l=(0,gd.lazyEndIndex)(e);return rr.default.Children.forEach(e.children,function(u,c){var f,h={message:"children",index:c,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(c)>=0?f=u:f=rr.default.createElement("div",null);var m=Q3(dn(dn({},e),{},{index:c})),_=f.props.className||"",x=vd(dn(dn({},e),{},{index:c}));if(i.push(rr.default.cloneElement(f,{key:"original"+_d(f,c),"data-index":c,className:(0,md.default)(x,_),tabIndex:"-1","aria-hidden":!x["slick-active"],style:dn(dn({outline:"none"},f.props.style||{}),m),onClick:function(g){f.props&&f.props.onClick&&f.props.onClick(g),e.focusOnSelect&&e.focusOnSelect(h)}})),e.infinite&&e.fade===!1){var p=a-c;p<=(0,gd.getPreClones)(e)&&(n=-p,n>=s&&(f=u),x=vd(dn(dn({},e),{},{index:n})),r.push(rr.default.cloneElement(f,{key:"precloned"+_d(f,n),"data-index":n,tabIndex:"-1",className:(0,md.default)(x,_),"aria-hidden":!x["slick-active"],style:dn(dn({},f.props.style||{}),m),onClick:function(g){f.props&&f.props.onClick&&f.props.onClick(g),e.focusOnSelect&&e.focusOnSelect(h)}}))),n=a+c,n<l&&(f=u),x=vd(dn(dn({},e),{},{index:n})),o.push(rr.default.cloneElement(f,{key:"postcloned"+_d(f,n),"data-index":n,tabIndex:"-1",className:(0,md.default)(x,_),"aria-hidden":!x["slick-active"],style:dn(dn({},f.props.style||{}),m),onClick:function(g){f.props&&f.props.onClick&&f.props.onClick(g),e.focusOnSelect&&e.focusOnSelect(h)}}))}}),e.rtl?r.concat(i,o).reverse():r.concat(i,o)};Kc.Track=function(t){$3(n,t);var e=q3(n);function n(){var i;W3(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),xp(yp(i),"node",null),xp(yp(i),"handleRef",function(s){i.node=s}),i}return X3(n,[{key:"render",value:function(){var r=Z3(this.props),o=this.props,a=o.onMouseEnter,s=o.onMouseOver,l=o.onMouseLeave,u={onMouseEnter:a,onMouseOver:s,onMouseLeave:l};return rr.default.createElement("div",vp({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),r)}}]),n}(rr.default.PureComponent);var Qc={};function Ra(t){"@babel/helpers - typeof";return Ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ra(t)}Object.defineProperty(Qc,"__esModule",{value:!0});Qc.Dots=void 0;var tu=b1(J),J3=b1(Yc),$0=pe;function b1(t){return t&&t.__esModule?t:{default:t}}function q0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function eN(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?q0(Object(n),!0).forEach(function(i){tN(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function tN(t,e,n){return e=T1(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function iN(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,T1(i.key),i)}}function rN(t,e,n){return e&&iN(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function T1(t){var e=oN(t,"string");return Ra(e)=="symbol"?e:String(e)}function oN(t,e){if(Ra(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Ra(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function aN(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Sp(t,e)}function Sp(t,e){return Sp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Sp(t,e)}function sN(t){var e=A1();return function(){var i=oc(t),r;if(e){var o=oc(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return lN(this,r)}}function lN(t,e){if(e&&(Ra(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uN(t)}function uN(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A1(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(A1=function(){return!!t})()}function oc(t){return oc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},oc(t)}var cN=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n};Qc.Dots=function(t){aN(n,t);var e=sN(n);function n(){return nN(this,n),e.apply(this,arguments)}return rN(n,[{key:"clickHandler",value:function(r,o){o.preventDefault(),this.props.clickHandler(r)}},{key:"render",value:function(){for(var r=this.props,o=r.onMouseEnter,a=r.onMouseOver,s=r.onMouseLeave,l=r.infinite,u=r.slidesToScroll,c=r.slidesToShow,f=r.slideCount,h=r.currentSlide,m=cN({slideCount:f,slidesToScroll:u,slidesToShow:c,infinite:l}),_={onMouseEnter:o,onMouseOver:a,onMouseLeave:s},x=[],p=0;p<m;p++){var d=(p+1)*u-1,g=l?d:(0,$0.clamp)(d,0,f-1),y=g-(u-1),E=l?y:(0,$0.clamp)(y,0,f-1),R=(0,J3.default)({"slick-active":l?h>=E&&h<=g:h===E}),C={message:"dots",index:p,slidesToScroll:u,currentSlide:h},T=this.clickHandler.bind(this,C);x=x.concat(tu.default.createElement("li",{key:p,className:R},tu.default.cloneElement(this.props.customPaging(p),{onClick:T})))}return tu.default.cloneElement(this.props.appendDots(x),eN({className:this.props.dotsClass},_))}}]),n}(tu.default.PureComponent);var Pa={};function La(t){"@babel/helpers - typeof";return La=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},La(t)}Object.defineProperty(Pa,"__esModule",{value:!0});Pa.PrevArrow=Pa.NextArrow=void 0;var ha=R1(J),C1=R1(Yc),fN=pe;function R1(t){return t&&t.__esModule?t:{default:t}}function ac(){return ac=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ac.apply(this,arguments)}function Y0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function sc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Y0(Object(n),!0).forEach(function(i){dN(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function dN(t,e,n){return e=N1(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function hN(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,N1(i.key),i)}}function L1(t,e,n){return e&&hN(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function N1(t){var e=pN(t,"string");return La(e)=="symbol"?e:String(e)}function pN(t,e){if(La(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(La(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function I1(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ep(t,e)}function Ep(t,e){return Ep=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Ep(t,e)}function D1(t){var e=O1();return function(){var i=lc(t),r;if(e){var o=lc(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return mN(this,r)}}function mN(t,e){if(e&&(La(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gN(t)}function gN(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O1(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(O1=function(){return!!t})()}function lc(t){return lc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},lc(t)}Pa.PrevArrow=function(t){I1(n,t);var e=D1(n);function n(){return P1(this,n),e.apply(this,arguments)}return L1(n,[{key:"clickHandler",value:function(r,o){o&&o.preventDefault(),this.props.clickHandler(r,o)}},{key:"render",value:function(){var r={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(r["slick-disabled"]=!0,o=null);var a={key:"0","data-role":"none",className:(0,C1.default)(r),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=ha.default.cloneElement(this.props.prevArrow,sc(sc({},a),s)):l=ha.default.createElement("button",ac({key:"0",type:"button"},a)," ","Previous"),l}}]),n}(ha.default.PureComponent);Pa.NextArrow=function(t){I1(n,t);var e=D1(n);function n(){return P1(this,n),e.apply(this,arguments)}return L1(n,[{key:"clickHandler",value:function(r,o){o&&o.preventDefault(),this.props.clickHandler(r,o)}},{key:"render",value:function(){var r={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,fN.canGoNext)(this.props)||(r["slick-disabled"]=!0,o=null);var a={key:"1","data-role":"none",className:(0,C1.default)(r),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=ha.default.cloneElement(this.props.nextArrow,sc(sc({},a),s)):l=ha.default.createElement("button",ac({key:"1",type:"button"},a)," ","Next"),l}}]),n}(ha.default.PureComponent);var U1=function(){if(typeof Map<"u")return Map;function t(e,n){var i=-1;return e.some(function(r,o){return r[0]===n?(i=o,!0):!1}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var i=t(this.__entries__,n),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(n,i){var r=t(this.__entries__,n);~r?this.__entries__[r][1]=i:this.__entries__.push([n,i])},e.prototype.delete=function(n){var i=this.__entries__,r=t(i,n);~r&&i.splice(r,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,i){i===void 0&&(i=null);for(var r=0,o=this.__entries__;r<o.length;r++){var a=o[r];n.call(i,a[1],a[0])}},e}()}(),Mp=typeof window<"u"&&typeof document<"u"&&window.document===document,uc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),vN=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(uc):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),_N=2;function yN(t,e){var n=!1,i=!1,r=0;function o(){n&&(n=!1,t()),i&&s()}function a(){vN(o)}function s(){var l=Date.now();if(n){if(l-r<_N)return;i=!0}else n=!0,i=!1,setTimeout(a,e);r=l}return s}var xN=20,SN=["top","right","bottom","left","width","height","size","weight"],EN=typeof MutationObserver<"u",MN=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=yN(this.refresh.bind(this),xN)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,i=n.indexOf(e);~i&&n.splice(i,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!Mp||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),EN?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Mp||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,i=n===void 0?"":n,r=SN.some(function(o){return!!~i.indexOf(o)});r&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),k1=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},Na=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||uc},F1=Zc(0,0,0,0);function cc(t){return parseFloat(t)||0}function K0(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(i,r){var o=t["border-"+r+"-width"];return i+cc(o)},0)}function wN(t){for(var e=["top","right","bottom","left"],n={},i=0,r=e;i<r.length;i++){var o=r[i],a=t["padding-"+o];n[o]=cc(a)}return n}function bN(t){var e=t.getBBox();return Zc(0,0,e.width,e.height)}function TN(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return F1;var i=Na(t).getComputedStyle(t),r=wN(i),o=r.left+r.right,a=r.top+r.bottom,s=cc(i.width),l=cc(i.height);if(i.boxSizing==="border-box"&&(Math.round(s+o)!==e&&(s-=K0(i,"left","right")+o),Math.round(l+a)!==n&&(l-=K0(i,"top","bottom")+a)),!CN(t)){var u=Math.round(s+o)-e,c=Math.round(l+a)-n;Math.abs(u)!==1&&(s-=u),Math.abs(c)!==1&&(l-=c)}return Zc(r.left,r.top,s,l)}var AN=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof Na(t).SVGGraphicsElement}:function(t){return t instanceof Na(t).SVGElement&&typeof t.getBBox=="function"}}();function CN(t){return t===Na(t).document.documentElement}function RN(t){return Mp?AN(t)?bN(t):TN(t):F1}function PN(t){var e=t.x,n=t.y,i=t.width,r=t.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(o.prototype);return k1(a,{x:e,y:n,width:i,height:r,top:n,right:e+i,bottom:r+n,left:e}),a}function Zc(t,e,n,i){return{x:t,y:e,width:n,height:i}}var LN=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Zc(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=RN(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),NN=function(){function t(e,n){var i=PN(n);k1(this,{target:e,contentRect:i})}return t}(),IN=function(){function t(e,n,i){if(this.activeObservations_=[],this.observations_=new U1,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=i}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Na(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new LN(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Na(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(i){return new NN(i.target,i.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),z1=typeof WeakMap<"u"?new WeakMap:new U1,B1=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=MN.getInstance(),i=new IN(e,n,this);z1.set(this,i)}return t}();["observe","unobserve","disconnect"].forEach(function(t){B1.prototype[t]=function(){var e;return(e=z1.get(this))[t].apply(e,arguments)}});var DN=function(){return typeof uc.ResizeObserver<"u"?uc.ResizeObserver:B1}();const ON=Object.freeze(Object.defineProperty({__proto__:null,default:DN},Symbol.toStringTag,{value:"Module"})),UN=AM(ON);Object.defineProperty(qc,"__esModule",{value:!0});qc.InnerSlider=void 0;var tn=ul(J),kN=ul(f1),FN=ul(C3),zN=ul(Yc),xt=pe,BN=Kc,HN=Qc,Q0=Pa,VN=ul(UN);function ul(t){return t&&t.__esModule?t:{default:t}}function mo(t){"@babel/helpers - typeof";return mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mo(t)}function fc(){return fc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fc.apply(this,arguments)}function GN(t,e){if(t==null)return{};var n=WN(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function WN(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Z0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function He(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Z0(Object(n),!0).forEach(function(i){Qe(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function jN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function XN(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,V1(i.key),i)}}function $N(t,e,n){return e&&XN(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function qN(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&wp(t,e)}function wp(t,e){return wp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},wp(t,e)}function YN(t){var e=H1();return function(){var i=dc(t),r;if(e){var o=dc(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return KN(this,r)}}function KN(t,e){if(e&&(mo(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ke(t)}function Ke(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function H1(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(H1=function(){return!!t})()}function dc(t){return dc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},dc(t)}function Qe(t,e,n){return e=V1(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function V1(t){var e=QN(t,"string");return mo(e)=="symbol"?e:String(e)}function QN(t,e){if(mo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(mo(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}qc.InnerSlider=function(t){qN(n,t);var e=YN(n);function n(i){var r;jN(this,n),r=e.call(this,i),Qe(Ke(r),"listRefHandler",function(a){return r.list=a}),Qe(Ke(r),"trackRefHandler",function(a){return r.track=a}),Qe(Ke(r),"adaptHeight",function(){if(r.props.adaptiveHeight&&r.list){var a=r.list.querySelector('[data-index="'.concat(r.state.currentSlide,'"]'));r.list.style.height=(0,xt.getHeight)(a)+"px"}}),Qe(Ke(r),"componentDidMount",function(){if(r.props.onInit&&r.props.onInit(),r.props.lazyLoad){var a=(0,xt.getOnDemandLazySlides)(He(He({},r.props),r.state));a.length>0&&(r.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(a)}}),r.props.onLazyLoad&&r.props.onLazyLoad(a))}var s=He({listRef:r.list,trackRef:r.track},r.props);r.updateState(s,!0,function(){r.adaptHeight(),r.props.autoplay&&r.autoPlay("update")}),r.props.lazyLoad==="progressive"&&(r.lazyLoadTimer=setInterval(r.progressiveLazyLoad,1e3)),r.ro=new VN.default(function(){r.state.animating?(r.onWindowResized(!1),r.callbackTimers.push(setTimeout(function(){return r.onWindowResized()},r.props.speed))):r.onWindowResized()}),r.ro.observe(r.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=r.props.pauseOnFocus?r.onSlideFocus:null,l.onblur=r.props.pauseOnFocus?r.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",r.onWindowResized):window.attachEvent("onresize",r.onWindowResized)}),Qe(Ke(r),"componentWillUnmount",function(){r.animationEndCallback&&clearTimeout(r.animationEndCallback),r.lazyLoadTimer&&clearInterval(r.lazyLoadTimer),r.callbackTimers.length&&(r.callbackTimers.forEach(function(a){return clearTimeout(a)}),r.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",r.onWindowResized):window.detachEvent("onresize",r.onWindowResized),r.autoplayTimer&&clearInterval(r.autoplayTimer),r.ro.disconnect()}),Qe(Ke(r),"componentDidUpdate",function(a){if(r.checkImagesLoad(),r.props.onReInit&&r.props.onReInit(),r.props.lazyLoad){var s=(0,xt.getOnDemandLazySlides)(He(He({},r.props),r.state));s.length>0&&(r.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(s)}}),r.props.onLazyLoad&&r.props.onLazyLoad(s))}r.adaptHeight();var l=He(He({listRef:r.list,trackRef:r.track},r.props),r.state),u=r.didPropsChange(a);u&&r.updateState(l,u,function(){r.state.currentSlide>=tn.default.Children.count(r.props.children)&&r.changeSlide({message:"index",index:tn.default.Children.count(r.props.children)-r.props.slidesToShow,currentSlide:r.state.currentSlide}),r.props.autoplay?r.autoPlay("update"):r.pause("paused")})}),Qe(Ke(r),"onWindowResized",function(a){r.debouncedResize&&r.debouncedResize.cancel(),r.debouncedResize=(0,FN.default)(function(){return r.resizeWindow(a)},50),r.debouncedResize()}),Qe(Ke(r),"resizeWindow",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(r.track&&r.track.node);if(s){var l=He(He({listRef:r.list,trackRef:r.track},r.props),r.state);r.updateState(l,a,function(){r.props.autoplay?r.autoPlay("update"):r.pause("paused")}),r.setState({animating:!1}),clearTimeout(r.animationEndCallback),delete r.animationEndCallback}}),Qe(Ke(r),"updateState",function(a,s,l){var u=(0,xt.initializedState)(a);a=He(He(He({},a),u),{},{slideIndex:u.currentSlide});var c=(0,xt.getTrackLeft)(a);a=He(He({},a),{},{left:c});var f=(0,xt.getTrackCSS)(a);(s||tn.default.Children.count(r.props.children)!==tn.default.Children.count(a.children))&&(u.trackStyle=f),r.setState(u,l)}),Qe(Ke(r),"ssrInit",function(){if(r.props.variableWidth){var a=0,s=0,l=[],u=(0,xt.getPreClones)(He(He(He({},r.props),r.state),{},{slideCount:r.props.children.length})),c=(0,xt.getPostClones)(He(He(He({},r.props),r.state),{},{slideCount:r.props.children.length}));r.props.children.forEach(function(T){l.push(T.props.style.width),a+=T.props.style.width});for(var f=0;f<u;f++)s+=l[l.length-1-f],a+=l[l.length-1-f];for(var h=0;h<c;h++)a+=l[h];for(var m=0;m<r.state.currentSlide;m++)s+=l[m];var _={width:a+"px",left:-s+"px"};if(r.props.centerMode){var x="".concat(l[r.state.currentSlide],"px");_.left="calc(".concat(_.left," + (100% - ").concat(x,") / 2 ) ")}return{trackStyle:_}}var p=tn.default.Children.count(r.props.children),d=He(He(He({},r.props),r.state),{},{slideCount:p}),g=(0,xt.getPreClones)(d)+(0,xt.getPostClones)(d)+p,y=100/r.props.slidesToShow*g,E=100/g,R=-E*((0,xt.getPreClones)(d)+r.state.currentSlide)*y/100;r.props.centerMode&&(R+=(100-E*y/100)/2);var C={width:y+"%",left:R+"%"};return{slideWidth:E+"%",trackStyle:C}}),Qe(Ke(r),"checkImagesLoad",function(){var a=r.list&&r.list.querySelectorAll&&r.list.querySelectorAll(".slick-slide img")||[],s=a.length,l=0;Array.prototype.forEach.call(a,function(u){var c=function(){return++l&&l>=s&&r.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var f=u.onclick;u.onclick=function(h){f(h),u.parentNode.focus()}}u.onload||(r.props.lazyLoad?u.onload=function(){r.adaptHeight(),r.callbackTimers.push(setTimeout(r.onWindowResized,r.props.speed))}:(u.onload=c,u.onerror=function(){c(),r.props.onLazyLoadError&&r.props.onLazyLoadError()}))})}),Qe(Ke(r),"progressiveLazyLoad",function(){for(var a=[],s=He(He({},r.props),r.state),l=r.state.currentSlide;l<r.state.slideCount+(0,xt.getPostClones)(s);l++)if(r.state.lazyLoadedList.indexOf(l)<0){a.push(l);break}for(var u=r.state.currentSlide-1;u>=-(0,xt.getPreClones)(s);u--)if(r.state.lazyLoadedList.indexOf(u)<0){a.push(u);break}a.length>0?(r.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),r.props.onLazyLoad&&r.props.onLazyLoad(a)):r.lazyLoadTimer&&(clearInterval(r.lazyLoadTimer),delete r.lazyLoadTimer)}),Qe(Ke(r),"slideHandler",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=r.props,u=l.asNavFor,c=l.beforeChange,f=l.onLazyLoad,h=l.speed,m=l.afterChange,_=r.state.currentSlide,x=(0,xt.slideHandler)(He(He(He({index:a},r.props),r.state),{},{trackRef:r.track,useCSS:r.props.useCSS&&!s})),p=x.state,d=x.nextState;if(p){c&&c(_,p.currentSlide);var g=p.lazyLoadedList.filter(function(y){return r.state.lazyLoadedList.indexOf(y)<0});f&&g.length>0&&f(g),!r.props.waitForAnimate&&r.animationEndCallback&&(clearTimeout(r.animationEndCallback),m&&m(_),delete r.animationEndCallback),r.setState(p,function(){u&&r.asNavForIndex!==a&&(r.asNavForIndex=a,u.innerSlider.slideHandler(a)),d&&(r.animationEndCallback=setTimeout(function(){var y=d.animating,E=GN(d,["animating"]);r.setState(E,function(){r.callbackTimers.push(setTimeout(function(){return r.setState({animating:y})},10)),m&&m(p.currentSlide),delete r.animationEndCallback})},h))})}}),Qe(Ke(r),"changeSlide",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=He(He({},r.props),r.state),u=(0,xt.changeSlide)(l,a);if(!(u!==0&&!u)&&(s===!0?r.slideHandler(u,s):r.slideHandler(u),r.props.autoplay&&r.autoPlay("update"),r.props.focusOnSelect)){var c=r.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),Qe(Ke(r),"clickHandler",function(a){r.clickable===!1&&(a.stopPropagation(),a.preventDefault()),r.clickable=!0}),Qe(Ke(r),"keyHandler",function(a){var s=(0,xt.keyHandler)(a,r.props.accessibility,r.props.rtl);s!==""&&r.changeSlide({message:s})}),Qe(Ke(r),"selectHandler",function(a){r.changeSlide(a)}),Qe(Ke(r),"disableBodyScroll",function(){var a=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=a}),Qe(Ke(r),"enableBodyScroll",function(){window.ontouchmove=null}),Qe(Ke(r),"swipeStart",function(a){r.props.verticalSwiping&&r.disableBodyScroll();var s=(0,xt.swipeStart)(a,r.props.swipe,r.props.draggable);s!==""&&r.setState(s)}),Qe(Ke(r),"swipeMove",function(a){var s=(0,xt.swipeMove)(a,He(He(He({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));s&&(s.swiping&&(r.clickable=!1),r.setState(s))}),Qe(Ke(r),"swipeEnd",function(a){var s=(0,xt.swipeEnd)(a,He(He(He({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));if(s){var l=s.triggerSlideHandler;delete s.triggerSlideHandler,r.setState(s),l!==void 0&&(r.slideHandler(l),r.props.verticalSwiping&&r.enableBodyScroll())}}),Qe(Ke(r),"touchEnd",function(a){r.swipeEnd(a),r.clickable=!0}),Qe(Ke(r),"slickPrev",function(){r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"previous"})},0))}),Qe(Ke(r),"slickNext",function(){r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"next"})},0))}),Qe(Ke(r),"slickGoTo",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a=Number(a),isNaN(a))return"";r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"index",index:a,currentSlide:r.state.currentSlide},s)},0))}),Qe(Ke(r),"play",function(){var a;if(r.props.rtl)a=r.state.currentSlide-r.props.slidesToScroll;else if((0,xt.canGoNext)(He(He({},r.props),r.state)))a=r.state.currentSlide+r.props.slidesToScroll;else return!1;r.slideHandler(a)}),Qe(Ke(r),"autoPlay",function(a){r.autoplayTimer&&clearInterval(r.autoplayTimer);var s=r.state.autoplaying;if(a==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(a==="leave"){if(s==="paused"||s==="focused")return}else if(a==="blur"&&(s==="paused"||s==="hovered"))return;r.autoplayTimer=setInterval(r.play,r.props.autoplaySpeed+50),r.setState({autoplaying:"playing"})}),Qe(Ke(r),"pause",function(a){r.autoplayTimer&&(clearInterval(r.autoplayTimer),r.autoplayTimer=null);var s=r.state.autoplaying;a==="paused"?r.setState({autoplaying:"paused"}):a==="focused"?(s==="hovered"||s==="playing")&&r.setState({autoplaying:"focused"}):s==="playing"&&r.setState({autoplaying:"hovered"})}),Qe(Ke(r),"onDotsOver",function(){return r.props.autoplay&&r.pause("hovered")}),Qe(Ke(r),"onDotsLeave",function(){return r.props.autoplay&&r.state.autoplaying==="hovered"&&r.autoPlay("leave")}),Qe(Ke(r),"onTrackOver",function(){return r.props.autoplay&&r.pause("hovered")}),Qe(Ke(r),"onTrackLeave",function(){return r.props.autoplay&&r.state.autoplaying==="hovered"&&r.autoPlay("leave")}),Qe(Ke(r),"onSlideFocus",function(){return r.props.autoplay&&r.pause("focused")}),Qe(Ke(r),"onSlideBlur",function(){return r.props.autoplay&&r.state.autoplaying==="focused"&&r.autoPlay("blur")}),Qe(Ke(r),"render",function(){var a=(0,zN.default)("slick-slider",r.props.className,{"slick-vertical":r.props.vertical,"slick-initialized":!0}),s=He(He({},r.props),r.state),l=(0,xt.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=r.props.pauseOnHover;l=He(He({},l),{},{onMouseEnter:u?r.onTrackOver:null,onMouseLeave:u?r.onTrackLeave:null,onMouseOver:u?r.onTrackOver:null,focusOnSelect:r.props.focusOnSelect&&r.clickable?r.selectHandler:null});var c;if(r.props.dots===!0&&r.state.slideCount>=r.props.slidesToShow){var f=(0,xt.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),h=r.props.pauseOnDotsHover;f=He(He({},f),{},{clickHandler:r.changeSlide,onMouseEnter:h?r.onDotsLeave:null,onMouseOver:h?r.onDotsOver:null,onMouseLeave:h?r.onDotsLeave:null}),c=tn.default.createElement(HN.Dots,f)}var m,_,x=(0,xt.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);x.clickHandler=r.changeSlide,r.props.arrows&&(m=tn.default.createElement(Q0.PrevArrow,x),_=tn.default.createElement(Q0.NextArrow,x));var p=null;r.props.vertical&&(p={height:r.state.listHeight});var d=null;r.props.vertical===!1?r.props.centerMode===!0&&(d={padding:"0px "+r.props.centerPadding}):r.props.centerMode===!0&&(d={padding:r.props.centerPadding+" 0px"});var g=He(He({},p),d),y=r.props.touchMove,E={className:"slick-list",style:g,onClick:r.clickHandler,onMouseDown:y?r.swipeStart:null,onMouseMove:r.state.dragging&&y?r.swipeMove:null,onMouseUp:y?r.swipeEnd:null,onMouseLeave:r.state.dragging&&y?r.swipeEnd:null,onTouchStart:y?r.swipeStart:null,onTouchMove:r.state.dragging&&y?r.swipeMove:null,onTouchEnd:y?r.touchEnd:null,onTouchCancel:r.state.dragging&&y?r.swipeEnd:null,onKeyDown:r.props.accessibility?r.keyHandler:null},R={className:a,dir:"ltr",style:r.props.style};return r.props.unslick&&(E={className:"slick-list"},R={className:a}),tn.default.createElement("div",R,r.props.unslick?"":m,tn.default.createElement("div",fc({ref:r.listRefHandler},E),tn.default.createElement(BN.Track,fc({ref:r.trackRefHandler},l),r.props.children)),r.props.unslick?"":_,r.props.unslick?"":c)}),r.list=null,r.track=null,r.state=He(He({},kN.default),{},{currentSlide:r.props.initialSlide,targetSlide:r.props.initialSlide?r.props.initialSlide:0,slideCount:tn.default.Children.count(r.props.children)}),r.callbackTimers=[],r.clickable=!0,r.debouncedResize=null;var o=r.ssrInit();return r.state=He(He({},r.state),o),r}return $N(n,[{key:"didPropsChange",value:function(r){for(var o=!1,a=0,s=Object.keys(this.props);a<s.length;a++){var l=s[a];if(!r.hasOwnProperty(l)){o=!0;break}if(!(mo(r[l])==="object"||typeof r[l]=="function"||isNaN(r[l]))&&r[l]!==this.props[l]){o=!0;break}}return o||tn.default.Children.count(this.props.children)!==tn.default.Children.count(r.children)}}]),n}(tn.default.Component);var ZN=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},JN=ZN,eI=JN,tI=function(t){var e=/[height|width]$/;return e.test(t)},J0=function(t){var e="",n=Object.keys(t);return n.forEach(function(i,r){var o=t[i];i=eI(i),tI(i)&&typeof o=="number"&&(o=o+"px"),o===!0?e+=i:o===!1?e+="not "+i:e+="("+i+": "+o+")",r<n.length-1&&(e+=" and ")}),e},nI=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,i){e+=J0(n),i<t.length-1&&(e+=", ")}),e):J0(t)},iI=nI,yd,e_;function rI(){if(e_)return yd;e_=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},yd=t,yd}var xd,t_;function G1(){if(t_)return xd;t_=1;function t(i,r){var o=0,a=i.length,s;for(o;o<a&&(s=r(i[o],o),s!==!1);o++);}function e(i){return Object.prototype.toString.apply(i)==="[object Array]"}function n(i){return typeof i=="function"}return xd={isFunction:n,isArray:e,each:t},xd}var Sd,n_;function oI(){if(n_)return Sd;n_=1;var t=rI(),e=G1().each;function n(i,r){this.query=i,this.isUnconditional=r,this.handlers=[],this.mql=window.matchMedia(i);var o=this;this.listener=function(a){o.mql=a.currentTarget||a,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(i){var r=new t(i);this.handlers.push(r),this.matches()&&r.on()},removeHandler:function(i){var r=this.handlers;e(r,function(o,a){if(o.equals(i))return o.destroy(),!r.splice(a,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(i){i.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var i=this.matches()?"on":"off";e(this.handlers,function(r){r[i]()})}},Sd=n,Sd}var Ed,i_;function aI(){if(i_)return Ed;i_=1;var t=oI(),e=G1(),n=e.each,i=e.isFunction,r=e.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(a,s,l){var u=this.queries,c=l&&this.browserIsIncapable;return u[a]||(u[a]=new t(a,c)),i(s)&&(s={match:s}),r(s)||(s=[s]),n(s,function(f){i(f)&&(f={match:f}),u[a].addHandler(f)}),this},unregister:function(a,s){var l=this.queries[a];return l&&(s?l.removeHandler(s):(l.clear(),delete this.queries[a])),this}},Ed=o,Ed}var Md,r_;function sI(){if(r_)return Md;r_=1;var t=aI();return Md=new t,Md}(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a(J),n=qc,i=a(iI),r=a(eg),o=pe;function a(b){return b&&b.__esModule?b:{default:b}}function s(b){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},s(b)}function l(){return l=Object.assign?Object.assign.bind():function(b){for(var v=1;v<arguments.length;v++){var S=arguments[v];for(var N in S)Object.prototype.hasOwnProperty.call(S,N)&&(b[N]=S[N])}return b},l.apply(this,arguments)}function u(b,v){var S=Object.keys(b);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(b);v&&(N=N.filter(function(D){return Object.getOwnPropertyDescriptor(b,D).enumerable})),S.push.apply(S,N)}return S}function c(b){for(var v=1;v<arguments.length;v++){var S=arguments[v]!=null?arguments[v]:{};v%2?u(Object(S),!0).forEach(function(N){R(b,N,S[N])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(S)):u(Object(S)).forEach(function(N){Object.defineProperty(b,N,Object.getOwnPropertyDescriptor(S,N))})}return b}function f(b,v){if(!(b instanceof v))throw new TypeError("Cannot call a class as a function")}function h(b,v){for(var S=0;S<v.length;S++){var N=v[S];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,C(N.key),N)}}function m(b,v,S){return v&&h(b.prototype,v),Object.defineProperty(b,"prototype",{writable:!1}),b}function _(b,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(v&&v.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),v&&x(b,v)}function x(b,v){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(N,D){return N.__proto__=D,N},x(b,v)}function p(b){var v=y();return function(){var N=E(b),D;if(v){var U=E(this).constructor;D=Reflect.construct(N,arguments,U)}else D=N.apply(this,arguments);return d(this,D)}}function d(b,v){if(v&&(s(v)==="object"||typeof v=="function"))return v;if(v!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(b)}function g(b){if(b===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b}function y(){try{var b=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(y=function(){return!!b})()}function E(b){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(S){return S.__proto__||Object.getPrototypeOf(S)},E(b)}function R(b,v,S){return v=C(v),v in b?Object.defineProperty(b,v,{value:S,enumerable:!0,configurable:!0,writable:!0}):b[v]=S,b}function C(b){var v=T(b,"string");return s(v)=="symbol"?v:String(v)}function T(b,v){if(s(b)!="object"||!b)return b;var S=b[Symbol.toPrimitive];if(S!==void 0){var N=S.call(b,v||"default");if(s(N)!="object")return N;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(b)}var M=(0,o.canUseDOM)()&&sI();t.default=function(b){_(S,b);var v=p(S);function S(N){var D;return f(this,S),D=v.call(this,N),R(g(D),"innerSliderRefHandler",function(U){return D.innerSlider=U}),R(g(D),"slickPrev",function(){return D.innerSlider.slickPrev()}),R(g(D),"slickNext",function(){return D.innerSlider.slickNext()}),R(g(D),"slickGoTo",function(U){var Z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return D.innerSlider.slickGoTo(U,Z)}),R(g(D),"slickPause",function(){return D.innerSlider.pause("paused")}),R(g(D),"slickPlay",function(){return D.innerSlider.autoPlay("play")}),D.state={breakpoint:null},D._responsiveMediaHandlers=[],D}return m(S,[{key:"media",value:function(D,U){M.register(D,U),this._responsiveMediaHandlers.push({query:D,handler:U})}},{key:"componentDidMount",value:function(){var D=this;if(this.props.responsive){var U=this.props.responsive.map(function(V){return V.breakpoint});U.sort(function(V,H){return V-H}),U.forEach(function(V,H){var O;H===0?O=(0,i.default)({minWidth:0,maxWidth:V}):O=(0,i.default)({minWidth:U[H-1]+1,maxWidth:V}),(0,o.canUseDOM)()&&D.media(O,function(){D.setState({breakpoint:V})})});var Z=(0,i.default)({minWidth:U.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(Z,function(){D.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(D){M.unregister(D.query,D.handler)})}},{key:"render",value:function(){var D=this,U,Z;this.state.breakpoint?(Z=this.props.responsive.filter(function(ee){return ee.breakpoint===D.state.breakpoint}),U=Z[0].settings==="unslick"?"unslick":c(c(c({},r.default),this.props),Z[0].settings)):U=c(c({},r.default),this.props),U.centerMode&&(U.slidesToScroll>1,U.slidesToScroll=1),U.fade&&(U.slidesToShow>1,U.slidesToScroll>1,U.slidesToShow=1,U.slidesToScroll=1);var V=e.default.Children.toArray(this.props.children);V=V.filter(function(ee){return typeof ee=="string"?!!ee.trim():!!ee}),U.variableWidth&&(U.rows>1||U.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),U.variableWidth=!1);for(var H=[],O=null,G=0;G<V.length;G+=U.rows*U.slidesPerRow){for(var te=[],ie=G;ie<G+U.rows*U.slidesPerRow;ie+=U.slidesPerRow){for(var ne=[],xe=ie;xe<ie+U.slidesPerRow&&(U.variableWidth&&V[xe].props.style&&(O=V[xe].props.style.width),!(xe>=V.length));xe+=1)ne.push(e.default.cloneElement(V[xe],{key:100*G+10*ie+xe,tabIndex:-1,style:{width:"".concat(100/U.slidesPerRow,"%"),display:"inline-block"}}));te.push(e.default.createElement("div",{key:10*G+ie},ne))}U.variableWidth?H.push(e.default.createElement("div",{key:G,style:{width:O}},te)):H.push(e.default.createElement("div",{key:G},te))}if(U==="unslick"){var $="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:$},V)}else H.length<=U.slidesToShow&&!U.infinite&&(U.unslick=!0);return e.default.createElement(n.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},(0,o.filterSettings)(U)),H)}}]),S}(e.default.Component)})(c1);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(c1);function n(i){return i&&i.__esModule?i:{default:i}}t.default=e.default})(u1);const o_=Sc(u1),W1=()=>J.useContext(s1),bp=({title:t,date:e,content:n,link:i})=>L.jsxs("div",{className:"bg-black text-white rounded-lg p-5 flex flex-col justify-between h-[300px] mx-5 my-5",children:[L.jsxs("div",{className:"mb-2",children:[L.jsx("h3",{className:"text-xl font-bold uppercase text-white mb-1",children:t.toUpperCase()}),L.jsx("p",{className:"text-sm text-gray-400",children:e.toUpperCase()})]}),L.jsx("div",{className:"bg-[#131212] border border-[#2c2c2c] p-4 rounded-lg flex-grow overflow-y-hidden",children:L.jsx("p",{className:"text-white text-base leading-relaxed",children:n.toUpperCase()})}),i&&L.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"bg-blue-500 text-white py-2 px-3 rounded-md text-sm mt-3 transition-colors duration-300 hover:bg-blue-700",children:"Read More"})]});bp.propTypes={title:X.string.isRequired,date:X.string.isRequired,content:X.string.isRequired,link:X.string};const lI=()=>{const[t,e]=J.useState({width:void 0,height:void 0});return J.useEffect(()=>{const n=()=>{e({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),t},uI=()=>{const t=W1(),{width:e}=lI(),n=Hc(),i=()=>{n("/news")},r=t.sort((c,f)=>new Date(f.date)-new Date(c.date)),o=r.slice(0,5),a=r.slice(5,10),l={dots:!1,infinite:!0,speed:8e3,slidesToShow:e<768?1:e<1200?2:3,slidesToScroll:.3,autoplay:!0,autoplaySpeed:0,cssEase:"linear",pauseOnHover:!1,arrows:!1},u={...l,rtl:!0};return L.jsxs("div",{className:"bg-[#1d1b1b] py-10 px-4 min-h-screen max-w-full relative",children:[L.jsx(xo,{titleText:"LAB NEWS"}),L.jsxs("div",{className:"my-5 relative",children:[L.jsx("div",{className:"absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#1d1b1b] to-transparent pointer-events-none z-10"}),L.jsx("div",{className:"absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#1d1b1b] to-transparent pointer-events-none z-10"}),L.jsx(o_,{...l,children:o.map((c,f)=>L.jsx("div",{className:"flex justify-center",children:L.jsx(bp,{title:c.title,date:c.date,content:c.content,link:c.link})},f))})]}),L.jsxs("div",{className:"my-5 relative",children:[L.jsx("div",{className:"absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#1d1b1b] to-transparent pointer-events-none z-10"}),L.jsx("div",{className:"absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#1d1b1b] to-transparent pointer-events-none z-10"}),L.jsx(o_,{...u,children:a.map((c,f)=>L.jsx("div",{className:"flex justify-center",children:L.jsx(bp,{title:c.title,date:c.date,content:c.content,link:c.link})},f))})]}),L.jsx("div",{className:"flex justify-center mt-8",children:L.jsx($c,{title:"SEE MORE",onClick:i})})]})},Jc=({color:t="bg-blue-500",height:e="h-1"})=>{const[n,i]=J.useState(0),r=()=>{const o=window.scrollY,a=window.innerHeight,s=document.body.scrollHeight-a,l=o/s*100;i(l)};return J.useEffect(()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)),[]),L.jsx("div",{className:`fixed top-0 left-0 ${e} ${t} z-50`,style:{width:`${n}%`}})};Jc.propTypes={color:X.string,height:X.string};const cI=()=>L.jsxs("div",{className:"flex flex-col m-0 overflow-x-hidden font-bricky",children:[L.jsx(Jc,{}),L.jsx(i3,{}),L.jsx(l3,{}),L.jsx(ZT,{}),L.jsx(l1,{children:L.jsx(uI,{})}),L.jsx(o3,{})]}),fI=()=>{const t=W1();return L.jsxs("div",{className:"bg-black text-white min-h-screen py-16",children:[L.jsx(Jc,{}),L.jsxs("section",{className:"mb-12 text-center",children:[L.jsx(xo,{titleText:"LAB NEWS"}),L.jsx("p",{className:"text-xl text-gray-400 max-w-2xl mx-auto mt-4",children:"Stay updated with the latest news, achievements, and milestones from our lab."})]}),L.jsx("section",{className:"grid gap-8 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto",children:t.map((e,n)=>L.jsx(j1,{news:e},n))})]})},j1=({news:t})=>{const[e,n]=J.useState(!1),i=()=>{n(r=>!r)};return L.jsxs("div",{className:"bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300",children:[L.jsx("div",{className:"h-40 bg-gray-700 flex items-center justify-center",children:L.jsx("img",{src:"src/assets/sample.jpg",alt:t.title,className:"h-full w-full object-cover"})}),L.jsxs("div",{className:"p-6",children:[L.jsx("p",{className:"text-sm text-blue-400 font-semibold mb-2",children:t.date}),L.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.title}),L.jsx("p",{className:"text-gray-300 mb-4",children:e?t.content:`${t.content.substring(0,100)}...`}),L.jsx("button",{onClick:i,className:"text-blue-400 hover:underline focus:outline-none",children:e?"Show Less":"Read More"})]})]})};j1.propTypes={news:X.shape({date:X.string.isRequired,title:X.string.isRequired,content:X.string.isRequired,link:X.string}).isRequired};const X1=({sortOrder:t,setSortOrder:e,filterVisibility:n,toggleFilterSectionVisibility:i})=>L.jsxs("div",{className:"mb-4 flex flex-col",children:[L.jsxs("h4",{className:"border-b-2 border-black pb-2 cursor-pointer flex justify-between items-center",onClick:()=>i("sort"),children:[L.jsx("span",{className:"font-bold",children:"Sort By"}),L.jsx("span",{className:"cursor-pointer",children:n.sort?"-":"+"})]}),n.sort&&L.jsxs("div",{className:"mt-2",children:[L.jsx("div",{className:`cursor-pointer py-2 hover:underline ${t==="desc"?"text-[#0064b1] font-bold":""}`,onClick:()=>e("desc"),children:"Newest"}),L.jsx("div",{className:`cursor-pointer py-2 hover:underline ${t==="asc"?"text-[#0064b1] font-bold":""}`,onClick:()=>e("asc"),children:"Oldest"})]})]});X1.propTypes={sortOrder:X.string.isRequired,setSortOrder:X.func.isRequired,filterVisibility:X.shape({sort:X.bool.isRequired,type:X.bool.isRequired,year:X.bool.isRequired,field:X.bool.isRequired}).isRequired,toggleFilterSectionVisibility:X.func.isRequired};const $1=({data:t,selectedType:e,setSelectedType:n,filterVisibility:i,toggleFilterSectionVisibility:r})=>{const o=Array.from(new Set(t.map(s=>s.Paper))).filter(s=>!/\s/.test(s));o.sort((s,l)=>s.length-l.length);const a=s=>{let l=[];s==="All"?l=[]:e.includes(s)?l=e.filter(u=>u!==s):l=[...e,s],n(l)};return L.jsxs("div",{className:"my-4",children:[L.jsxs("h4",{className:"flex justify-between cursor-pointer mb-2 border-b-2 border-black",onClick:()=>r("type"),children:[L.jsx("span",{className:"font-bold",children:"Type"}),L.jsx("span",{children:i.type?"-":"+"})]}),i.type&&L.jsxs(L.Fragment,{children:[L.jsx("div",{className:`cursor-pointer hover:underline ${e.length===0?"text-blue-600":"text-gray-800"}`,onClick:()=>a("All"),children:"All"}),o.map(s=>L.jsx("div",{className:`cursor-pointer hover:underline ${e.includes(s)?"text-blue-600":"text-gray-800"}`,onClick:()=>a(s),children:s},s))]})]})};$1.propTypes={data:X.array.isRequired,selectedType:X.array.isRequired,setSelectedType:X.func.isRequired,filterVisibility:X.shape({sort:X.bool.isRequired,type:X.bool.isRequired,year:X.bool.isRequired,field:X.bool.isRequired}).isRequired,toggleFilterSectionVisibility:X.func.isRequired};const q1=({data:t,selectedYears:e,setSelectedYears:n,filterVisibility:i,toggleFilterSectionVisibility:r})=>{const o=Array.from(new Set(t.map(s=>s.Year))).filter(s=>s),a=s=>{if(s==="All")n([]);else{const l=e.includes(s)?e.filter(u=>u!==s):[...e,s];n(l)}};return L.jsxs("div",{className:"my-4",children:[L.jsxs("h4",{className:"flex justify-between cursor-pointer mb-2 border-b-2 border-black",onClick:()=>r("year"),children:[L.jsx("span",{className:"font-bold",children:"Year"}),L.jsx("span",{children:i.year?"-":"+"})]}),i.year&&L.jsxs(L.Fragment,{children:[L.jsx("div",{className:`cursor-pointer hover:underline ${e.length===0?"text-blue-600":"text-gray-800"}`,onClick:()=>a("All"),children:"All"}),o.map(s=>L.jsx("div",{className:`cursor-pointer hover:underline ${e.includes(s)?"text-blue-600":"text-gray-800"}`,onClick:()=>a(s),children:s},s))]})]})};q1.propTypes={data:X.array.isRequired,selectedYears:X.array.isRequired,setSelectedYears:X.func.isRequired,filterVisibility:X.shape({sort:X.bool.isRequired,type:X.bool.isRequired,year:X.bool.isRequired,field:X.bool.isRequired}).isRequired,toggleFilterSectionVisibility:X.func.isRequired};const Y1=({data:t,selectedField:e,setSelectedField:n,filterVisibility:i,toggleFilterSectionVisibility:r})=>{const o=Array.from(new Set(t.map(s=>s.Field))).filter(s=>s),a=s=>{const l=e.includes(s)?e.filter(u=>u!==s):[...e,s];n(l)};return L.jsxs("div",{className:"my-4",children:[L.jsxs("h4",{className:"flex justify-between cursor-pointer mb-2 border-b-2 border-black",onClick:()=>r("field"),children:[L.jsx("span",{className:"font-bold",children:"Field"}),L.jsx("span",{children:i.field?"-":"+"})]}),i.field&&L.jsx(L.Fragment,{children:o.map(s=>L.jsx("div",{className:`cursor-pointer hover:underline ${e.includes(s)?"text-blue-600":"text-gray-800"}`,onClick:()=>a(s),children:s},s))})]})};Y1.propTypes={data:X.array.isRequired,selectedField:X.array.isRequired,setSelectedField:X.func.isRequired,filterVisibility:X.shape({sort:X.bool.isRequired,type:X.bool.isRequired,year:X.bool.isRequired,field:X.bool.isRequired}).isRequired,toggleFilterSectionVisibility:X.func.isRequired};const dI="/luberlab.github.io/",hI=()=>{const[t,e]=J.useState([]),[n,i]=J.useState(""),[r,o]=J.useState(""),[a,s]=J.useState([]),[l,u]=J.useState([]),[c,f]=J.useState([]),[h,m]=J.useState(!1),[_,x]=J.useState({sort:!1,type:!0,year:!1,field:!1});J.useEffect(()=>{fetch(`${dI}assets/research.csv`).then(C=>C.text()).then(C=>{a1.parse(C,{header:!0,skipEmptyLines:!0,complete:T=>{e(T.data)}})});const E=window.matchMedia("(max-width: 768px)");m(!1);const R=()=>{m(!1)};return E.addEventListener("change",R),()=>{E.removeEventListener("change",R)}},[]);const p=()=>{m(E=>!E)},d=E=>{x(R=>({...R,[E]:!R[E]}))},y=[...t.filter(E=>E.Title.toLowerCase().includes(n.toLowerCase())).filter(E=>a.length>0?a.includes(E.Field):!0).filter(E=>l.length>0?l.includes(E.Year):!0).filter(E=>c.length>0?c.includes(E.Paper):!0)].sort((E,R)=>r==="asc"?E.Year.localeCompare(R.Year):r==="desc"?R.Year.localeCompare(E.Year):0);return L.jsxs("div",{className:"flex flex-col md:flex-row gap-4 p-0",children:[L.jsxs("div",{className:`md:w-1/4 bg-white md:block fixed md:relative top-0 left-0 w-full z-10 transition-transform duration-300 ${h?"translate-x-0":"-translate-x-full"} md:translate-x-0 h-full md:h-auto md:py-0 py-6 px-4`,children:[L.jsxs("div",{className:"flex justify-between items-center mb-4 md:hidden",children:[L.jsx("span",{className:"text-lg font-semibold",children:"Filters"}),L.jsx("button",{className:"text-lg font-semibold",onClick:p,children:"× "})]}),L.jsxs("div",{className:"filters space-y-6",children:[L.jsx("div",{className:"search-bar",children:L.jsx("input",{type:"text",placeholder:"Search papers by title",value:n,onChange:E=>i(E.target.value),className:"w-full px-4 py-2 border rounded-md text-black"})}),L.jsx(X1,{sortOrder:r,setSortOrder:o,filterVisibility:_,toggleFilterSectionVisibility:d}),L.jsx($1,{data:t,selectedType:c,setSelectedType:f,filterVisibility:_,toggleFilterSectionVisibility:d}),L.jsx(q1,{data:t,selectedYears:l,setSelectedYears:u,filterVisibility:_,toggleFilterSectionVisibility:d}),L.jsx(Y1,{data:t,selectedField:a,setSelectedField:s,filterVisibility:_,toggleFilterSectionVisibility:d})]})]}),L.jsxs("div",{className:"md:flex-1 w-full",children:[L.jsx("div",{className:"filter-toggle cursor-pointer py-2 text-lg text-black md:hidden",onClick:p,children:h?L.jsx("span",{children:"– Hide Filters"}):L.jsx("span",{children:"+ Show Filters"})}),L.jsx("div",{className:"paper-container space-y-6 w-full",children:y.length>0?y.map((E,R)=>L.jsxs("div",{className:"bg-white p-4 md:p-6 border-b border-gray-200",children:[L.jsxs("div",{className:"meta text-gray-500 space-x-4 mb-2 text-sm",children:[L.jsx("span",{className:"font-semibold text-black",children:E.Paper}),L.jsx("span",{className:"text-[#0064b1]",children:E.Field}),L.jsx("span",{children:E.Year})]}),L.jsx("h2",{className:"name text-black font-semibold text-xl mb-1 leading-tight",children:L.jsx("a",{href:E.Link,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:E.Title})}),L.jsx("p",{className:"authors text-gray-600 text-sm",children:Object.keys(E).slice(5).map(C=>E[C]).join(", ")})]},R)):L.jsx("p",{className:"text-center text-gray-600",children:"No papers found"})})]})]})},pI=()=>L.jsx("div",{className:"w-full py-4 mb-6 border-b-2 border-black",children:L.jsx("h2",{className:"font-bold text-4xl text-black text-left px-4 sm:px-6 lg:px-8",children:"All Research"})}),mI=()=>L.jsxs("div",{className:"bg-white min-h-screen flex justify-center items-center font-sans",children:[L.jsx(Jc,{}),L.jsxs("div",{className:"w-[75%] max-w-7xl",children:[L.jsx(pI,{}),L.jsx(hI,{})]})]}),K1=({isOpen:t,onClose:e,menuItems:n,onMenuItemClick:i})=>{const[r,o]=J.useState(!1),a=()=>{o(!0),setTimeout(()=>{e(),o(!1)},500)},s=l=>{o(!0),setTimeout(()=>{i(l),o(!1)},500)};return!t&&!r?null:L.jsxs("div",{className:`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col justify-center items-start z-[9998] ${r?"animate-slideDown":"animate-slideUp"}`,children:[L.jsx("div",{className:"absolute top-4 right-5 w-12 h-12 flex justify-center items-center bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-800 rounded-full cursor-pointer z-[9999] transition-colors duration-300",onClick:a,children:"✖"}),L.jsx("ul",{className:"flex flex-col items-center justify-center w-full",children:n.map((l,u)=>L.jsxs("li",{className:"relative cursor-pointer text-3xl font-extrabold mb-8 overflow-hidden","data-text":l.label,onClick:()=>s(l.path),children:[L.jsx("span",{className:"absolute top-full left-0 w-full transition-all duration-500 animate-buttonSlide","aria-hidden":"true",children:l.label}),L.jsx("span",{className:"relative",children:l.label}),L.jsx("span",{className:"absolute top-0 left-0 w-full transition-all duration-500 animate-buttonHide","aria-hidden":"true",children:l.label})]},u))})]})};K1.propTypes={isOpen:X.bool.isRequired,onClose:X.func.isRequired,menuItems:X.arrayOf(X.shape({label:X.string.isRequired,path:X.string.isRequired})).isRequired,onMenuItemClick:X.func.isRequired};const gI=()=>{const[t,e]=J.useState(!1),[n,i]=J.useState(!0),r=Hc();J.useEffect(()=>{const u=setTimeout(()=>{i(!1)},1e3);return()=>clearTimeout(u)},[]);const o=()=>{e(!t)},a=u=>{e(!1),i(!0),r(u),setTimeout(()=>{i(!1)},1e3)},s=()=>{r("/contact")},l=[{label:"HOME",path:"/"},{label:"RESEARCH",path:"/research"},{label:"PUBLICATIONS",path:"/publications"},{label:"NEWS",path:"/news"},{label:"TEAMS",path:"/teams"},{label:"JOIN US",path:"/contact"}];return L.jsxs(L.Fragment,{children:[L.jsx("div",{className:`w-full h-[70px] flex justify-center items-center relative z-10 bg-black transition-all duration-1000 ${n?"animate-navbarSlideDown":""}`,children:L.jsxs("div",{className:"w-full flex justify-between items-center px-5 h-[5vh] relative",children:[L.jsx("div",{}),L.jsxs("div",{className:"absolute left-1/2 transform -translate-x-1/2 grid grid-cols-2 gap-2 cursor-pointer transition-transform duration-300 mt-4 hover:rotate-45",onClick:o,children:[L.jsx("div",{className:"w-[5px] h-[5px] bg-white rounded-full"}),L.jsx("div",{className:"w-[5px] h-[5px] bg-white rounded-full"}),L.jsx("div",{className:"w-[5px] h-[5px] bg-white rounded-full"}),L.jsx("div",{className:"w-[5px] h-[5px] bg-white rounded-full"})]}),L.jsx("div",{className:"absolute right-5 hidden sm:block",children:L.jsx($c,{title:"Contact Now",onClick:s})})]})}),L.jsx(K1,{isOpen:t,onClose:o,menuItems:l,onMenuItemClick:a})]})},Q1=J.createContext(),vI=({children:t})=>{const[e,n]=J.useState(()=>{const i=localStorage.getItem("selectedMember");return i?JSON.parse(i):null});return J.useEffect(()=>{e?localStorage.setItem("selectedMember",JSON.stringify(e)):localStorage.removeItem("selectedMember")},[e]),L.jsx(Q1.Provider,{value:{selectedMember:e,setSelectedMember:n},children:t})},Z1=({mainText:t,nextSectionRef:e})=>{const[n,i]=J.useState(!1);J.useEffect(()=>{setTimeout(()=>{i(!0)},100)},[]);const r=()=>{e!=null&&e.current&&e.current.scrollIntoView({behavior:"smooth"})};return L.jsxs("div",{className:"flex justify-center items-center bg-black text-center text-white relative h-screen w-full snap-start",children:[L.jsx("div",{className:`relative text-center transform transition-all duration-500 ${n?"animate-slideUp":"animate-slideDown"}`,children:L.jsx("h1",{className:"text-[clamp(3rem,8vw,6rem)] font-black text-white",children:t})}),L.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[40%] bg-black z-10"}),L.jsx("div",{className:"absolute bottom-5 text-2xl text-white animate-bounce cursor-pointer",onClick:r,children:"⇣"})]})};Z1.propTypes={mainText:X.string.isRequired,nextSectionRef:X.object.isRequired};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function J1(t){return typeof t>"u"||t===null}function _I(t){return typeof t=="object"&&t!==null}function yI(t){return Array.isArray(t)?t:J1(t)?[]:[t]}function xI(t,e){var n,i,r,o;if(e)for(o=Object.keys(e),n=0,i=o.length;n<i;n+=1)r=o[n],t[r]=e[r];return t}function SI(t,e){var n="",i;for(i=0;i<e;i+=1)n+=t;return n}function EI(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var MI=J1,wI=_I,bI=yI,TI=SI,AI=EI,CI=xI,Ot={isNothing:MI,isObject:wI,toArray:bI,repeat:TI,isNegativeZero:AI,extend:CI};function eE(t,e){var n="",i=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(n+='in "'+t.mark.name+'" '),n+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!e&&t.mark.snippet&&(n+=`

`+t.mark.snippet),i+" "+n):i}function Xs(t,e){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=e,this.message=eE(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Xs.prototype=Object.create(Error.prototype);Xs.prototype.constructor=Xs;Xs.prototype.toString=function(e){return this.name+": "+eE(this,e)};var on=Xs;function wd(t,e,n,i,r){var o="",a="",s=Math.floor(r/2)-1;return i-e>s&&(o=" ... ",e=i-s+o.length),n-i>s&&(a=" ...",n=i+s-a.length),{str:o+t.slice(e,n).replace(/\t/g,"→")+a,pos:i-e+o.length}}function bd(t,e){return Ot.repeat(" ",e-t.length)+t}function RI(t,e){if(e=Object.create(e||null),!t.buffer)return null;e.maxLength||(e.maxLength=79),typeof e.indent!="number"&&(e.indent=1),typeof e.linesBefore!="number"&&(e.linesBefore=3),typeof e.linesAfter!="number"&&(e.linesAfter=2);for(var n=/\r?\n|\r|\0/g,i=[0],r=[],o,a=-1;o=n.exec(t.buffer);)r.push(o.index),i.push(o.index+o[0].length),t.position<=o.index&&a<0&&(a=i.length-2);a<0&&(a=i.length-1);var s="",l,u,c=Math.min(t.line+e.linesAfter,r.length).toString().length,f=e.maxLength-(e.indent+c+3);for(l=1;l<=e.linesBefore&&!(a-l<0);l++)u=wd(t.buffer,i[a-l],r[a-l],t.position-(i[a]-i[a-l]),f),s=Ot.repeat(" ",e.indent)+bd((t.line-l+1).toString(),c)+" | "+u.str+`
`+s;for(u=wd(t.buffer,i[a],r[a],t.position,f),s+=Ot.repeat(" ",e.indent)+bd((t.line+1).toString(),c)+" | "+u.str+`
`,s+=Ot.repeat("-",e.indent+c+3+u.pos)+`^
`,l=1;l<=e.linesAfter&&!(a+l>=r.length);l++)u=wd(t.buffer,i[a+l],r[a+l],t.position-(i[a]-i[a+l]),f),s+=Ot.repeat(" ",e.indent)+bd((t.line+l+1).toString(),c)+" | "+u.str+`
`;return s.replace(/\n$/,"")}var PI=RI,LI=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],NI=["scalar","sequence","mapping"];function II(t){var e={};return t!==null&&Object.keys(t).forEach(function(n){t[n].forEach(function(i){e[String(i)]=n})}),e}function DI(t,e){if(e=e||{},Object.keys(e).forEach(function(n){if(LI.indexOf(n)===-1)throw new on('Unknown option "'+n+'" is met in definition of "'+t+'" YAML type.')}),this.options=e,this.tag=t,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(n){return n},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.representName=e.representName||null,this.defaultStyle=e.defaultStyle||null,this.multi=e.multi||!1,this.styleAliases=II(e.styleAliases||null),NI.indexOf(this.kind)===-1)throw new on('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var Xt=DI;function a_(t,e){var n=[];return t[e].forEach(function(i){var r=n.length;n.forEach(function(o,a){o.tag===i.tag&&o.kind===i.kind&&o.multi===i.multi&&(r=a)}),n[r]=i}),n}function OI(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},e,n;function i(r){r.multi?(t.multi[r.kind].push(r),t.multi.fallback.push(r)):t[r.kind][r.tag]=t.fallback[r.tag]=r}for(e=0,n=arguments.length;e<n;e+=1)arguments[e].forEach(i);return t}function Tp(t){return this.extend(t)}Tp.prototype.extend=function(e){var n=[],i=[];if(e instanceof Xt)i.push(e);else if(Array.isArray(e))i=i.concat(e);else if(e&&(Array.isArray(e.implicit)||Array.isArray(e.explicit)))e.implicit&&(n=n.concat(e.implicit)),e.explicit&&(i=i.concat(e.explicit));else throw new on("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof Xt))throw new on("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new on("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new on("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(o){if(!(o instanceof Xt))throw new on("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(Tp.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(i),r.compiledImplicit=a_(r,"implicit"),r.compiledExplicit=a_(r,"explicit"),r.compiledTypeMap=OI(r.compiledImplicit,r.compiledExplicit),r};var tE=Tp,nE=new Xt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),iE=new Xt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),rE=new Xt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),oE=new tE({explicit:[nE,iE,rE]});function UI(t){if(t===null)return!0;var e=t.length;return e===1&&t==="~"||e===4&&(t==="null"||t==="Null"||t==="NULL")}function kI(){return null}function FI(t){return t===null}var aE=new Xt("tag:yaml.org,2002:null",{kind:"scalar",resolve:UI,construct:kI,predicate:FI,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function zI(t){if(t===null)return!1;var e=t.length;return e===4&&(t==="true"||t==="True"||t==="TRUE")||e===5&&(t==="false"||t==="False"||t==="FALSE")}function BI(t){return t==="true"||t==="True"||t==="TRUE"}function HI(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var sE=new Xt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:zI,construct:BI,predicate:HI,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function VI(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function GI(t){return 48<=t&&t<=55}function WI(t){return 48<=t&&t<=57}function jI(t){if(t===null)return!1;var e=t.length,n=0,i=!1,r;if(!e)return!1;if(r=t[n],(r==="-"||r==="+")&&(r=t[++n]),r==="0"){if(n+1===e)return!0;if(r=t[++n],r==="b"){for(n++;n<e;n++)if(r=t[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;i=!0}return i&&r!=="_"}if(r==="x"){for(n++;n<e;n++)if(r=t[n],r!=="_"){if(!VI(t.charCodeAt(n)))return!1;i=!0}return i&&r!=="_"}if(r==="o"){for(n++;n<e;n++)if(r=t[n],r!=="_"){if(!GI(t.charCodeAt(n)))return!1;i=!0}return i&&r!=="_"}}if(r==="_")return!1;for(;n<e;n++)if(r=t[n],r!=="_"){if(!WI(t.charCodeAt(n)))return!1;i=!0}return!(!i||r==="_")}function XI(t){var e=t,n=1,i;if(e.indexOf("_")!==-1&&(e=e.replace(/_/g,"")),i=e[0],(i==="-"||i==="+")&&(i==="-"&&(n=-1),e=e.slice(1),i=e[0]),e==="0")return 0;if(i==="0"){if(e[1]==="b")return n*parseInt(e.slice(2),2);if(e[1]==="x")return n*parseInt(e.slice(2),16);if(e[1]==="o")return n*parseInt(e.slice(2),8)}return n*parseInt(e,10)}function $I(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!Ot.isNegativeZero(t)}var lE=new Xt("tag:yaml.org,2002:int",{kind:"scalar",resolve:jI,construct:XI,predicate:$I,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),qI=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function YI(t){return!(t===null||!qI.test(t)||t[t.length-1]==="_")}function KI(t){var e,n;return e=t.replace(/_/g,"").toLowerCase(),n=e[0]==="-"?-1:1,"+-".indexOf(e[0])>=0&&(e=e.slice(1)),e===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:e===".nan"?NaN:n*parseFloat(e,10)}var QI=/^[-+]?[0-9]+e/;function ZI(t,e){var n;if(isNaN(t))switch(e){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(e){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(e){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ot.isNegativeZero(t))return"-0.0";return n=t.toString(10),QI.test(n)?n.replace("e",".e"):n}function JI(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||Ot.isNegativeZero(t))}var uE=new Xt("tag:yaml.org,2002:float",{kind:"scalar",resolve:YI,construct:KI,predicate:JI,represent:ZI,defaultStyle:"lowercase"}),cE=oE.extend({implicit:[aE,sE,lE,uE]}),fE=cE,dE=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),hE=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function eD(t){return t===null?!1:dE.exec(t)!==null||hE.exec(t)!==null}function tD(t){var e,n,i,r,o,a,s,l=0,u=null,c,f,h;if(e=dE.exec(t),e===null&&(e=hE.exec(t)),e===null)throw new Error("Date resolve error");if(n=+e[1],i=+e[2]-1,r=+e[3],!e[4])return new Date(Date.UTC(n,i,r));if(o=+e[4],a=+e[5],s=+e[6],e[7]){for(l=e[7].slice(0,3);l.length<3;)l+="0";l=+l}return e[9]&&(c=+e[10],f=+(e[11]||0),u=(c*60+f)*6e4,e[9]==="-"&&(u=-u)),h=new Date(Date.UTC(n,i,r,o,a,s,l)),u&&h.setTime(h.getTime()-u),h}function nD(t){return t.toISOString()}var pE=new Xt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:eD,construct:tD,instanceOf:Date,represent:nD});function iD(t){return t==="<<"||t===null}var mE=new Xt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:iD}),ng=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function rD(t){if(t===null)return!1;var e,n,i=0,r=t.length,o=ng;for(n=0;n<r;n++)if(e=o.indexOf(t.charAt(n)),!(e>64)){if(e<0)return!1;i+=6}return i%8===0}function oD(t){var e,n,i=t.replace(/[\r\n=]/g,""),r=i.length,o=ng,a=0,s=[];for(e=0;e<r;e++)e%4===0&&e&&(s.push(a>>16&255),s.push(a>>8&255),s.push(a&255)),a=a<<6|o.indexOf(i.charAt(e));return n=r%4*6,n===0?(s.push(a>>16&255),s.push(a>>8&255),s.push(a&255)):n===18?(s.push(a>>10&255),s.push(a>>2&255)):n===12&&s.push(a>>4&255),new Uint8Array(s)}function aD(t){var e="",n=0,i,r,o=t.length,a=ng;for(i=0;i<o;i++)i%3===0&&i&&(e+=a[n>>18&63],e+=a[n>>12&63],e+=a[n>>6&63],e+=a[n&63]),n=(n<<8)+t[i];return r=o%3,r===0?(e+=a[n>>18&63],e+=a[n>>12&63],e+=a[n>>6&63],e+=a[n&63]):r===2?(e+=a[n>>10&63],e+=a[n>>4&63],e+=a[n<<2&63],e+=a[64]):r===1&&(e+=a[n>>2&63],e+=a[n<<4&63],e+=a[64],e+=a[64]),e}function sD(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var gE=new Xt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:rD,construct:oD,predicate:sD,represent:aD}),lD=Object.prototype.hasOwnProperty,uD=Object.prototype.toString;function cD(t){if(t===null)return!0;var e=[],n,i,r,o,a,s=t;for(n=0,i=s.length;n<i;n+=1){if(r=s[n],a=!1,uD.call(r)!=="[object Object]")return!1;for(o in r)if(lD.call(r,o))if(!a)a=!0;else return!1;if(!a)return!1;if(e.indexOf(o)===-1)e.push(o);else return!1}return!0}function fD(t){return t!==null?t:[]}var vE=new Xt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:cD,construct:fD}),dD=Object.prototype.toString;function hD(t){if(t===null)return!0;var e,n,i,r,o,a=t;for(o=new Array(a.length),e=0,n=a.length;e<n;e+=1){if(i=a[e],dD.call(i)!=="[object Object]"||(r=Object.keys(i),r.length!==1))return!1;o[e]=[r[0],i[r[0]]]}return!0}function pD(t){if(t===null)return[];var e,n,i,r,o,a=t;for(o=new Array(a.length),e=0,n=a.length;e<n;e+=1)i=a[e],r=Object.keys(i),o[e]=[r[0],i[r[0]]];return o}var _E=new Xt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:hD,construct:pD}),mD=Object.prototype.hasOwnProperty;function gD(t){if(t===null)return!0;var e,n=t;for(e in n)if(mD.call(n,e)&&n[e]!==null)return!1;return!0}function vD(t){return t!==null?t:{}}var yE=new Xt("tag:yaml.org,2002:set",{kind:"mapping",resolve:gD,construct:vD}),ig=fE.extend({implicit:[pE,mE],explicit:[gE,vE,_E,yE]}),Ar=Object.prototype.hasOwnProperty,hc=1,xE=2,SE=3,pc=4,Td=1,_D=2,s_=3,yD=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,xD=/[\x85\u2028\u2029]/,SD=/[,\[\]\{\}]/,EE=/^(?:!|!!|![a-z\-]+!)$/i,ME=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function l_(t){return Object.prototype.toString.call(t)}function vi(t){return t===10||t===13}function ro(t){return t===9||t===32}function gn(t){return t===9||t===32||t===10||t===13}function Zo(t){return t===44||t===91||t===93||t===123||t===125}function ED(t){var e;return 48<=t&&t<=57?t-48:(e=t|32,97<=e&&e<=102?e-97+10:-1)}function MD(t){return t===120?2:t===117?4:t===85?8:0}function wD(t){return 48<=t&&t<=57?t-48:-1}function u_(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"":t===95?" ":t===76?"\u2028":t===80?"\u2029":""}function bD(t){return t<=65535?String.fromCharCode(t):String.fromCharCode((t-65536>>10)+55296,(t-65536&1023)+56320)}var wE=new Array(256),bE=new Array(256);for(var ko=0;ko<256;ko++)wE[ko]=u_(ko)?1:0,bE[ko]=u_(ko);function TD(t,e){this.input=t,this.filename=e.filename||null,this.schema=e.schema||ig,this.onWarning=e.onWarning||null,this.legacy=e.legacy||!1,this.json=e.json||!1,this.listener=e.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function TE(t,e){var n={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return n.snippet=PI(n),new on(e,n)}function Oe(t,e){throw TE(t,e)}function mc(t,e){t.onWarning&&t.onWarning.call(null,TE(t,e))}var c_={YAML:function(e,n,i){var r,o,a;e.version!==null&&Oe(e,"duplication of %YAML directive"),i.length!==1&&Oe(e,"YAML directive accepts exactly one argument"),r=/^([0-9]+)\.([0-9]+)$/.exec(i[0]),r===null&&Oe(e,"ill-formed argument of the YAML directive"),o=parseInt(r[1],10),a=parseInt(r[2],10),o!==1&&Oe(e,"unacceptable YAML version of the document"),e.version=i[0],e.checkLineBreaks=a<2,a!==1&&a!==2&&mc(e,"unsupported YAML version of the document")},TAG:function(e,n,i){var r,o;i.length!==2&&Oe(e,"TAG directive accepts exactly two arguments"),r=i[0],o=i[1],EE.test(r)||Oe(e,"ill-formed tag handle (first argument) of the TAG directive"),Ar.call(e.tagMap,r)&&Oe(e,'there is a previously declared suffix for "'+r+'" tag handle'),ME.test(o)||Oe(e,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch{Oe(e,"tag prefix is malformed: "+o)}e.tagMap[r]=o}};function Er(t,e,n,i){var r,o,a,s;if(e<n){if(s=t.input.slice(e,n),i)for(r=0,o=s.length;r<o;r+=1)a=s.charCodeAt(r),a===9||32<=a&&a<=1114111||Oe(t,"expected valid JSON character");else yD.test(s)&&Oe(t,"the stream contains non-printable characters");t.result+=s}}function f_(t,e,n,i){var r,o,a,s;for(Ot.isObject(n)||Oe(t,"cannot merge mappings; the provided source object is unacceptable"),r=Object.keys(n),a=0,s=r.length;a<s;a+=1)o=r[a],Ar.call(e,o)||(e[o]=n[o],i[o]=!0)}function Jo(t,e,n,i,r,o,a,s,l){var u,c;if(Array.isArray(r))for(r=Array.prototype.slice.call(r),u=0,c=r.length;u<c;u+=1)Array.isArray(r[u])&&Oe(t,"nested arrays are not supported inside keys"),typeof r=="object"&&l_(r[u])==="[object Object]"&&(r[u]="[object Object]");if(typeof r=="object"&&l_(r)==="[object Object]"&&(r="[object Object]"),r=String(r),e===null&&(e={}),i==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(u=0,c=o.length;u<c;u+=1)f_(t,e,o[u],n);else f_(t,e,o,n);else!t.json&&!Ar.call(n,r)&&Ar.call(e,r)&&(t.line=a||t.line,t.lineStart=s||t.lineStart,t.position=l||t.position,Oe(t,"duplicated mapping key")),r==="__proto__"?Object.defineProperty(e,r,{configurable:!0,enumerable:!0,writable:!0,value:o}):e[r]=o,delete n[r];return e}function rg(t){var e;e=t.input.charCodeAt(t.position),e===10?t.position++:e===13?(t.position++,t.input.charCodeAt(t.position)===10&&t.position++):Oe(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function It(t,e,n){for(var i=0,r=t.input.charCodeAt(t.position);r!==0;){for(;ro(r);)r===9&&t.firstTabInLine===-1&&(t.firstTabInLine=t.position),r=t.input.charCodeAt(++t.position);if(e&&r===35)do r=t.input.charCodeAt(++t.position);while(r!==10&&r!==13&&r!==0);if(vi(r))for(rg(t),r=t.input.charCodeAt(t.position),i++,t.lineIndent=0;r===32;)t.lineIndent++,r=t.input.charCodeAt(++t.position);else break}return n!==-1&&i!==0&&t.lineIndent<n&&mc(t,"deficient indentation"),i}function ef(t){var e=t.position,n;return n=t.input.charCodeAt(e),!!((n===45||n===46)&&n===t.input.charCodeAt(e+1)&&n===t.input.charCodeAt(e+2)&&(e+=3,n=t.input.charCodeAt(e),n===0||gn(n)))}function og(t,e){e===1?t.result+=" ":e>1&&(t.result+=Ot.repeat(`
`,e-1))}function AD(t,e,n){var i,r,o,a,s,l,u,c,f=t.kind,h=t.result,m;if(m=t.input.charCodeAt(t.position),gn(m)||Zo(m)||m===35||m===38||m===42||m===33||m===124||m===62||m===39||m===34||m===37||m===64||m===96||(m===63||m===45)&&(r=t.input.charCodeAt(t.position+1),gn(r)||n&&Zo(r)))return!1;for(t.kind="scalar",t.result="",o=a=t.position,s=!1;m!==0;){if(m===58){if(r=t.input.charCodeAt(t.position+1),gn(r)||n&&Zo(r))break}else if(m===35){if(i=t.input.charCodeAt(t.position-1),gn(i))break}else{if(t.position===t.lineStart&&ef(t)||n&&Zo(m))break;if(vi(m))if(l=t.line,u=t.lineStart,c=t.lineIndent,It(t,!1,-1),t.lineIndent>=e){s=!0,m=t.input.charCodeAt(t.position);continue}else{t.position=a,t.line=l,t.lineStart=u,t.lineIndent=c;break}}s&&(Er(t,o,a,!1),og(t,t.line-l),o=a=t.position,s=!1),ro(m)||(a=t.position+1),m=t.input.charCodeAt(++t.position)}return Er(t,o,a,!1),t.result?!0:(t.kind=f,t.result=h,!1)}function CD(t,e){var n,i,r;if(n=t.input.charCodeAt(t.position),n!==39)return!1;for(t.kind="scalar",t.result="",t.position++,i=r=t.position;(n=t.input.charCodeAt(t.position))!==0;)if(n===39)if(Er(t,i,t.position,!0),n=t.input.charCodeAt(++t.position),n===39)i=t.position,t.position++,r=t.position;else return!0;else vi(n)?(Er(t,i,r,!0),og(t,It(t,!1,e)),i=r=t.position):t.position===t.lineStart&&ef(t)?Oe(t,"unexpected end of the document within a single quoted scalar"):(t.position++,r=t.position);Oe(t,"unexpected end of the stream within a single quoted scalar")}function RD(t,e){var n,i,r,o,a,s;if(s=t.input.charCodeAt(t.position),s!==34)return!1;for(t.kind="scalar",t.result="",t.position++,n=i=t.position;(s=t.input.charCodeAt(t.position))!==0;){if(s===34)return Er(t,n,t.position,!0),t.position++,!0;if(s===92){if(Er(t,n,t.position,!0),s=t.input.charCodeAt(++t.position),vi(s))It(t,!1,e);else if(s<256&&wE[s])t.result+=bE[s],t.position++;else if((a=MD(s))>0){for(r=a,o=0;r>0;r--)s=t.input.charCodeAt(++t.position),(a=ED(s))>=0?o=(o<<4)+a:Oe(t,"expected hexadecimal character");t.result+=bD(o),t.position++}else Oe(t,"unknown escape sequence");n=i=t.position}else vi(s)?(Er(t,n,i,!0),og(t,It(t,!1,e)),n=i=t.position):t.position===t.lineStart&&ef(t)?Oe(t,"unexpected end of the document within a double quoted scalar"):(t.position++,i=t.position)}Oe(t,"unexpected end of the stream within a double quoted scalar")}function PD(t,e){var n=!0,i,r,o,a=t.tag,s,l=t.anchor,u,c,f,h,m,_=Object.create(null),x,p,d,g;if(g=t.input.charCodeAt(t.position),g===91)c=93,m=!1,s=[];else if(g===123)c=125,m=!0,s={};else return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=s),g=t.input.charCodeAt(++t.position);g!==0;){if(It(t,!0,e),g=t.input.charCodeAt(t.position),g===c)return t.position++,t.tag=a,t.anchor=l,t.kind=m?"mapping":"sequence",t.result=s,!0;n?g===44&&Oe(t,"expected the node content, but found ','"):Oe(t,"missed comma between flow collection entries"),p=x=d=null,f=h=!1,g===63&&(u=t.input.charCodeAt(t.position+1),gn(u)&&(f=h=!0,t.position++,It(t,!0,e))),i=t.line,r=t.lineStart,o=t.position,Ia(t,e,hc,!1,!0),p=t.tag,x=t.result,It(t,!0,e),g=t.input.charCodeAt(t.position),(h||t.line===i)&&g===58&&(f=!0,g=t.input.charCodeAt(++t.position),It(t,!0,e),Ia(t,e,hc,!1,!0),d=t.result),m?Jo(t,s,_,p,x,d,i,r,o):f?s.push(Jo(t,null,_,p,x,d,i,r,o)):s.push(x),It(t,!0,e),g=t.input.charCodeAt(t.position),g===44?(n=!0,g=t.input.charCodeAt(++t.position)):n=!1}Oe(t,"unexpected end of the stream within a flow collection")}function LD(t,e){var n,i,r=Td,o=!1,a=!1,s=e,l=0,u=!1,c,f;if(f=t.input.charCodeAt(t.position),f===124)i=!1;else if(f===62)i=!0;else return!1;for(t.kind="scalar",t.result="";f!==0;)if(f=t.input.charCodeAt(++t.position),f===43||f===45)Td===r?r=f===43?s_:_D:Oe(t,"repeat of a chomping mode identifier");else if((c=wD(f))>=0)c===0?Oe(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):a?Oe(t,"repeat of an indentation width identifier"):(s=e+c-1,a=!0);else break;if(ro(f)){do f=t.input.charCodeAt(++t.position);while(ro(f));if(f===35)do f=t.input.charCodeAt(++t.position);while(!vi(f)&&f!==0)}for(;f!==0;){for(rg(t),t.lineIndent=0,f=t.input.charCodeAt(t.position);(!a||t.lineIndent<s)&&f===32;)t.lineIndent++,f=t.input.charCodeAt(++t.position);if(!a&&t.lineIndent>s&&(s=t.lineIndent),vi(f)){l++;continue}if(t.lineIndent<s){r===s_?t.result+=Ot.repeat(`
`,o?1+l:l):r===Td&&o&&(t.result+=`
`);break}for(i?ro(f)?(u=!0,t.result+=Ot.repeat(`
`,o?1+l:l)):u?(u=!1,t.result+=Ot.repeat(`
`,l+1)):l===0?o&&(t.result+=" "):t.result+=Ot.repeat(`
`,l):t.result+=Ot.repeat(`
`,o?1+l:l),o=!0,a=!0,l=0,n=t.position;!vi(f)&&f!==0;)f=t.input.charCodeAt(++t.position);Er(t,n,t.position,!1)}return!0}function d_(t,e){var n,i=t.tag,r=t.anchor,o=[],a,s=!1,l;if(t.firstTabInLine!==-1)return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=o),l=t.input.charCodeAt(t.position);l!==0&&(t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,Oe(t,"tab characters must not be used in indentation")),!(l!==45||(a=t.input.charCodeAt(t.position+1),!gn(a))));){if(s=!0,t.position++,It(t,!0,-1)&&t.lineIndent<=e){o.push(null),l=t.input.charCodeAt(t.position);continue}if(n=t.line,Ia(t,e,SE,!1,!0),o.push(t.result),It(t,!0,-1),l=t.input.charCodeAt(t.position),(t.line===n||t.lineIndent>e)&&l!==0)Oe(t,"bad indentation of a sequence entry");else if(t.lineIndent<e)break}return s?(t.tag=i,t.anchor=r,t.kind="sequence",t.result=o,!0):!1}function ND(t,e,n){var i,r,o,a,s,l,u=t.tag,c=t.anchor,f={},h=Object.create(null),m=null,_=null,x=null,p=!1,d=!1,g;if(t.firstTabInLine!==-1)return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=f),g=t.input.charCodeAt(t.position);g!==0;){if(!p&&t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,Oe(t,"tab characters must not be used in indentation")),i=t.input.charCodeAt(t.position+1),o=t.line,(g===63||g===58)&&gn(i))g===63?(p&&(Jo(t,f,h,m,_,null,a,s,l),m=_=x=null),d=!0,p=!0,r=!0):p?(p=!1,r=!0):Oe(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,g=i;else{if(a=t.line,s=t.lineStart,l=t.position,!Ia(t,n,xE,!1,!0))break;if(t.line===o){for(g=t.input.charCodeAt(t.position);ro(g);)g=t.input.charCodeAt(++t.position);if(g===58)g=t.input.charCodeAt(++t.position),gn(g)||Oe(t,"a whitespace character is expected after the key-value separator within a block mapping"),p&&(Jo(t,f,h,m,_,null,a,s,l),m=_=x=null),d=!0,p=!1,r=!1,m=t.tag,_=t.result;else if(d)Oe(t,"can not read an implicit mapping pair; a colon is missed");else return t.tag=u,t.anchor=c,!0}else if(d)Oe(t,"can not read a block mapping entry; a multiline key may not be an implicit key");else return t.tag=u,t.anchor=c,!0}if((t.line===o||t.lineIndent>e)&&(p&&(a=t.line,s=t.lineStart,l=t.position),Ia(t,e,pc,!0,r)&&(p?_=t.result:x=t.result),p||(Jo(t,f,h,m,_,x,a,s,l),m=_=x=null),It(t,!0,-1),g=t.input.charCodeAt(t.position)),(t.line===o||t.lineIndent>e)&&g!==0)Oe(t,"bad indentation of a mapping entry");else if(t.lineIndent<e)break}return p&&Jo(t,f,h,m,_,null,a,s,l),d&&(t.tag=u,t.anchor=c,t.kind="mapping",t.result=f),d}function ID(t){var e,n=!1,i=!1,r,o,a;if(a=t.input.charCodeAt(t.position),a!==33)return!1;if(t.tag!==null&&Oe(t,"duplication of a tag property"),a=t.input.charCodeAt(++t.position),a===60?(n=!0,a=t.input.charCodeAt(++t.position)):a===33?(i=!0,r="!!",a=t.input.charCodeAt(++t.position)):r="!",e=t.position,n){do a=t.input.charCodeAt(++t.position);while(a!==0&&a!==62);t.position<t.length?(o=t.input.slice(e,t.position),a=t.input.charCodeAt(++t.position)):Oe(t,"unexpected end of the stream within a verbatim tag")}else{for(;a!==0&&!gn(a);)a===33&&(i?Oe(t,"tag suffix cannot contain exclamation marks"):(r=t.input.slice(e-1,t.position+1),EE.test(r)||Oe(t,"named tag handle cannot contain such characters"),i=!0,e=t.position+1)),a=t.input.charCodeAt(++t.position);o=t.input.slice(e,t.position),SD.test(o)&&Oe(t,"tag suffix cannot contain flow indicator characters")}o&&!ME.test(o)&&Oe(t,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch{Oe(t,"tag name is malformed: "+o)}return n?t.tag=o:Ar.call(t.tagMap,r)?t.tag=t.tagMap[r]+o:r==="!"?t.tag="!"+o:r==="!!"?t.tag="tag:yaml.org,2002:"+o:Oe(t,'undeclared tag handle "'+r+'"'),!0}function DD(t){var e,n;if(n=t.input.charCodeAt(t.position),n!==38)return!1;for(t.anchor!==null&&Oe(t,"duplication of an anchor property"),n=t.input.charCodeAt(++t.position),e=t.position;n!==0&&!gn(n)&&!Zo(n);)n=t.input.charCodeAt(++t.position);return t.position===e&&Oe(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(e,t.position),!0}function OD(t){var e,n,i;if(i=t.input.charCodeAt(t.position),i!==42)return!1;for(i=t.input.charCodeAt(++t.position),e=t.position;i!==0&&!gn(i)&&!Zo(i);)i=t.input.charCodeAt(++t.position);return t.position===e&&Oe(t,"name of an alias node must contain at least one character"),n=t.input.slice(e,t.position),Ar.call(t.anchorMap,n)||Oe(t,'unidentified alias "'+n+'"'),t.result=t.anchorMap[n],It(t,!0,-1),!0}function Ia(t,e,n,i,r){var o,a,s,l=1,u=!1,c=!1,f,h,m,_,x,p;if(t.listener!==null&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,o=a=s=pc===n||SE===n,i&&It(t,!0,-1)&&(u=!0,t.lineIndent>e?l=1:t.lineIndent===e?l=0:t.lineIndent<e&&(l=-1)),l===1)for(;ID(t)||DD(t);)It(t,!0,-1)?(u=!0,s=o,t.lineIndent>e?l=1:t.lineIndent===e?l=0:t.lineIndent<e&&(l=-1)):s=!1;if(s&&(s=u||r),(l===1||pc===n)&&(hc===n||xE===n?x=e:x=e+1,p=t.position-t.lineStart,l===1?s&&(d_(t,p)||ND(t,p,x))||PD(t,x)?c=!0:(a&&LD(t,x)||CD(t,x)||RD(t,x)?c=!0:OD(t)?(c=!0,(t.tag!==null||t.anchor!==null)&&Oe(t,"alias node should not have any properties")):AD(t,x,hc===n)&&(c=!0,t.tag===null&&(t.tag="?")),t.anchor!==null&&(t.anchorMap[t.anchor]=t.result)):l===0&&(c=s&&d_(t,p))),t.tag===null)t.anchor!==null&&(t.anchorMap[t.anchor]=t.result);else if(t.tag==="?"){for(t.result!==null&&t.kind!=="scalar"&&Oe(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),f=0,h=t.implicitTypes.length;f<h;f+=1)if(_=t.implicitTypes[f],_.resolve(t.result)){t.result=_.construct(t.result),t.tag=_.tag,t.anchor!==null&&(t.anchorMap[t.anchor]=t.result);break}}else if(t.tag!=="!"){if(Ar.call(t.typeMap[t.kind||"fallback"],t.tag))_=t.typeMap[t.kind||"fallback"][t.tag];else for(_=null,m=t.typeMap.multi[t.kind||"fallback"],f=0,h=m.length;f<h;f+=1)if(t.tag.slice(0,m[f].tag.length)===m[f].tag){_=m[f];break}_||Oe(t,"unknown tag !<"+t.tag+">"),t.result!==null&&_.kind!==t.kind&&Oe(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+_.kind+'", not "'+t.kind+'"'),_.resolve(t.result,t.tag)?(t.result=_.construct(t.result,t.tag),t.anchor!==null&&(t.anchorMap[t.anchor]=t.result)):Oe(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return t.listener!==null&&t.listener("close",t),t.tag!==null||t.anchor!==null||c}function UD(t){var e=t.position,n,i,r,o=!1,a;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);(a=t.input.charCodeAt(t.position))!==0&&(It(t,!0,-1),a=t.input.charCodeAt(t.position),!(t.lineIndent>0||a!==37));){for(o=!0,a=t.input.charCodeAt(++t.position),n=t.position;a!==0&&!gn(a);)a=t.input.charCodeAt(++t.position);for(i=t.input.slice(n,t.position),r=[],i.length<1&&Oe(t,"directive name must not be less than one character in length");a!==0;){for(;ro(a);)a=t.input.charCodeAt(++t.position);if(a===35){do a=t.input.charCodeAt(++t.position);while(a!==0&&!vi(a));break}if(vi(a))break;for(n=t.position;a!==0&&!gn(a);)a=t.input.charCodeAt(++t.position);r.push(t.input.slice(n,t.position))}a!==0&&rg(t),Ar.call(c_,i)?c_[i](t,i,r):mc(t,'unknown document directive "'+i+'"')}if(It(t,!0,-1),t.lineIndent===0&&t.input.charCodeAt(t.position)===45&&t.input.charCodeAt(t.position+1)===45&&t.input.charCodeAt(t.position+2)===45?(t.position+=3,It(t,!0,-1)):o&&Oe(t,"directives end mark is expected"),Ia(t,t.lineIndent-1,pc,!1,!0),It(t,!0,-1),t.checkLineBreaks&&xD.test(t.input.slice(e,t.position))&&mc(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&ef(t)){t.input.charCodeAt(t.position)===46&&(t.position+=3,It(t,!0,-1));return}if(t.position<t.length-1)Oe(t,"end of the stream or a document separator is expected");else return}function AE(t,e){t=String(t),e=e||{},t.length!==0&&(t.charCodeAt(t.length-1)!==10&&t.charCodeAt(t.length-1)!==13&&(t+=`
`),t.charCodeAt(0)===65279&&(t=t.slice(1)));var n=new TD(t,e),i=t.indexOf("\0");for(i!==-1&&(n.position=i,Oe(n,"null byte is not allowed in input")),n.input+="\0";n.input.charCodeAt(n.position)===32;)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)UD(n);return n.documents}function kD(t,e,n){e!==null&&typeof e=="object"&&typeof n>"u"&&(n=e,e=null);var i=AE(t,n);if(typeof e!="function")return i;for(var r=0,o=i.length;r<o;r+=1)e(i[r])}function FD(t,e){var n=AE(t,e);if(n.length!==0){if(n.length===1)return n[0];throw new on("expected a single document in the stream, but found more")}}var zD=kD,BD=FD,CE={loadAll:zD,load:BD},RE=Object.prototype.toString,PE=Object.prototype.hasOwnProperty,ag=65279,HD=9,$s=10,VD=13,GD=32,WD=33,jD=34,Ap=35,XD=37,$D=38,qD=39,YD=42,LE=44,KD=45,gc=58,QD=61,ZD=62,JD=63,eO=64,NE=91,IE=93,tO=96,DE=123,nO=124,OE=125,en={};en[0]="\\0";en[7]="\\a";en[8]="\\b";en[9]="\\t";en[10]="\\n";en[11]="\\v";en[12]="\\f";en[13]="\\r";en[27]="\\e";en[34]='\\"';en[92]="\\\\";en[133]="\\N";en[160]="\\_";en[8232]="\\L";en[8233]="\\P";var iO=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],rO=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function oO(t,e){var n,i,r,o,a,s,l;if(e===null)return{};for(n={},i=Object.keys(e),r=0,o=i.length;r<o;r+=1)a=i[r],s=String(e[a]),a.slice(0,2)==="!!"&&(a="tag:yaml.org,2002:"+a.slice(2)),l=t.compiledTypeMap.fallback[a],l&&PE.call(l.styleAliases,s)&&(s=l.styleAliases[s]),n[a]=s;return n}function aO(t){var e,n,i;if(e=t.toString(16).toUpperCase(),t<=255)n="x",i=2;else if(t<=65535)n="u",i=4;else if(t<=4294967295)n="U",i=8;else throw new on("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+n+Ot.repeat("0",i-e.length)+e}var sO=1,qs=2;function lO(t){this.schema=t.schema||ig,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=Ot.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=oO(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType=t.quotingType==='"'?qs:sO,this.forceQuotes=t.forceQuotes||!1,this.replacer=typeof t.replacer=="function"?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function h_(t,e){for(var n=Ot.repeat(" ",e),i=0,r=-1,o="",a,s=t.length;i<s;)r=t.indexOf(`
`,i),r===-1?(a=t.slice(i),i=s):(a=t.slice(i,r+1),i=r+1),a.length&&a!==`
`&&(o+=n),o+=a;return o}function Cp(t,e){return`
`+Ot.repeat(" ",t.indent*e)}function uO(t,e){var n,i,r;for(n=0,i=t.implicitTypes.length;n<i;n+=1)if(r=t.implicitTypes[n],r.resolve(e))return!0;return!1}function vc(t){return t===GD||t===HD}function Ys(t){return 32<=t&&t<=126||161<=t&&t<=55295&&t!==8232&&t!==8233||57344<=t&&t<=65533&&t!==ag||65536<=t&&t<=1114111}function p_(t){return Ys(t)&&t!==ag&&t!==VD&&t!==$s}function m_(t,e,n){var i=p_(t),r=i&&!vc(t);return(n?i:i&&t!==LE&&t!==NE&&t!==IE&&t!==DE&&t!==OE)&&t!==Ap&&!(e===gc&&!r)||p_(e)&&!vc(e)&&t===Ap||e===gc&&r}function cO(t){return Ys(t)&&t!==ag&&!vc(t)&&t!==KD&&t!==JD&&t!==gc&&t!==LE&&t!==NE&&t!==IE&&t!==DE&&t!==OE&&t!==Ap&&t!==$D&&t!==YD&&t!==WD&&t!==nO&&t!==QD&&t!==ZD&&t!==qD&&t!==jD&&t!==XD&&t!==eO&&t!==tO}function fO(t){return!vc(t)&&t!==gc}function fs(t,e){var n=t.charCodeAt(e),i;return n>=55296&&n<=56319&&e+1<t.length&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function UE(t){var e=/^\n* /;return e.test(t)}var kE=1,Rp=2,FE=3,zE=4,Fo=5;function dO(t,e,n,i,r,o,a,s){var l,u=0,c=null,f=!1,h=!1,m=i!==-1,_=-1,x=cO(fs(t,0))&&fO(fs(t,t.length-1));if(e||a)for(l=0;l<t.length;u>=65536?l+=2:l++){if(u=fs(t,l),!Ys(u))return Fo;x=x&&m_(u,c,s),c=u}else{for(l=0;l<t.length;u>=65536?l+=2:l++){if(u=fs(t,l),u===$s)f=!0,m&&(h=h||l-_-1>i&&t[_+1]!==" ",_=l);else if(!Ys(u))return Fo;x=x&&m_(u,c,s),c=u}h=h||m&&l-_-1>i&&t[_+1]!==" "}return!f&&!h?x&&!a&&!r(t)?kE:o===qs?Fo:Rp:n>9&&UE(t)?Fo:a?o===qs?Fo:Rp:h?zE:FE}function hO(t,e,n,i,r){t.dump=function(){if(e.length===0)return t.quotingType===qs?'""':"''";if(!t.noCompatMode&&(iO.indexOf(e)!==-1||rO.test(e)))return t.quotingType===qs?'"'+e+'"':"'"+e+"'";var o=t.indent*Math.max(1,n),a=t.lineWidth===-1?-1:Math.max(Math.min(t.lineWidth,40),t.lineWidth-o),s=i||t.flowLevel>-1&&n>=t.flowLevel;function l(u){return uO(t,u)}switch(dO(e,s,t.indent,a,l,t.quotingType,t.forceQuotes&&!i,r)){case kE:return e;case Rp:return"'"+e.replace(/'/g,"''")+"'";case FE:return"|"+g_(e,t.indent)+v_(h_(e,o));case zE:return">"+g_(e,t.indent)+v_(h_(pO(e,a),o));case Fo:return'"'+mO(e)+'"';default:throw new on("impossible error: invalid scalar style")}}()}function g_(t,e){var n=UE(t)?String(e):"",i=t[t.length-1]===`
`,r=i&&(t[t.length-2]===`
`||t===`
`),o=r?"+":i?"":"-";return n+o+`
`}function v_(t){return t[t.length-1]===`
`?t.slice(0,-1):t}function pO(t,e){for(var n=/(\n+)([^\n]*)/g,i=function(){var u=t.indexOf(`
`);return u=u!==-1?u:t.length,n.lastIndex=u,__(t.slice(0,u),e)}(),r=t[0]===`
`||t[0]===" ",o,a;a=n.exec(t);){var s=a[1],l=a[2];o=l[0]===" ",i+=s+(!r&&!o&&l!==""?`
`:"")+__(l,e),r=o}return i}function __(t,e){if(t===""||t[0]===" ")return t;for(var n=/ [^ ]/g,i,r=0,o,a=0,s=0,l="";i=n.exec(t);)s=i.index,s-r>e&&(o=a>r?a:s,l+=`
`+t.slice(r,o),r=o+1),a=s;return l+=`
`,t.length-r>e&&a>r?l+=t.slice(r,a)+`
`+t.slice(a+1):l+=t.slice(r),l.slice(1)}function mO(t){for(var e="",n=0,i,r=0;r<t.length;n>=65536?r+=2:r++)n=fs(t,r),i=en[n],!i&&Ys(n)?(e+=t[r],n>=65536&&(e+=t[r+1])):e+=i||aO(n);return e}function gO(t,e,n){var i="",r=t.tag,o,a,s;for(o=0,a=n.length;o<a;o+=1)s=n[o],t.replacer&&(s=t.replacer.call(n,String(o),s)),(Vi(t,e,s,!1,!1)||typeof s>"u"&&Vi(t,e,null,!1,!1))&&(i!==""&&(i+=","+(t.condenseFlow?"":" ")),i+=t.dump);t.tag=r,t.dump="["+i+"]"}function y_(t,e,n,i){var r="",o=t.tag,a,s,l;for(a=0,s=n.length;a<s;a+=1)l=n[a],t.replacer&&(l=t.replacer.call(n,String(a),l)),(Vi(t,e+1,l,!0,!0,!1,!0)||typeof l>"u"&&Vi(t,e+1,null,!0,!0,!1,!0))&&((!i||r!=="")&&(r+=Cp(t,e)),t.dump&&$s===t.dump.charCodeAt(0)?r+="-":r+="- ",r+=t.dump);t.tag=o,t.dump=r||"[]"}function vO(t,e,n){var i="",r=t.tag,o=Object.keys(n),a,s,l,u,c;for(a=0,s=o.length;a<s;a+=1)c="",i!==""&&(c+=", "),t.condenseFlow&&(c+='"'),l=o[a],u=n[l],t.replacer&&(u=t.replacer.call(n,l,u)),Vi(t,e,l,!1,!1)&&(t.dump.length>1024&&(c+="? "),c+=t.dump+(t.condenseFlow?'"':"")+":"+(t.condenseFlow?"":" "),Vi(t,e,u,!1,!1)&&(c+=t.dump,i+=c));t.tag=r,t.dump="{"+i+"}"}function _O(t,e,n,i){var r="",o=t.tag,a=Object.keys(n),s,l,u,c,f,h;if(t.sortKeys===!0)a.sort();else if(typeof t.sortKeys=="function")a.sort(t.sortKeys);else if(t.sortKeys)throw new on("sortKeys must be a boolean or a function");for(s=0,l=a.length;s<l;s+=1)h="",(!i||r!=="")&&(h+=Cp(t,e)),u=a[s],c=n[u],t.replacer&&(c=t.replacer.call(n,u,c)),Vi(t,e+1,u,!0,!0,!0)&&(f=t.tag!==null&&t.tag!=="?"||t.dump&&t.dump.length>1024,f&&(t.dump&&$s===t.dump.charCodeAt(0)?h+="?":h+="? "),h+=t.dump,f&&(h+=Cp(t,e)),Vi(t,e+1,c,!0,f)&&(t.dump&&$s===t.dump.charCodeAt(0)?h+=":":h+=": ",h+=t.dump,r+=h));t.tag=o,t.dump=r||"{}"}function x_(t,e,n){var i,r,o,a,s,l;for(r=n?t.explicitTypes:t.implicitTypes,o=0,a=r.length;o<a;o+=1)if(s=r[o],(s.instanceOf||s.predicate)&&(!s.instanceOf||typeof e=="object"&&e instanceof s.instanceOf)&&(!s.predicate||s.predicate(e))){if(n?s.multi&&s.representName?t.tag=s.representName(e):t.tag=s.tag:t.tag="?",s.represent){if(l=t.styleMap[s.tag]||s.defaultStyle,RE.call(s.represent)==="[object Function]")i=s.represent(e,l);else if(PE.call(s.represent,l))i=s.represent[l](e,l);else throw new on("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');t.dump=i}return!0}return!1}function Vi(t,e,n,i,r,o,a){t.tag=null,t.dump=n,x_(t,n,!1)||x_(t,n,!0);var s=RE.call(t.dump),l=i,u;i&&(i=t.flowLevel<0||t.flowLevel>e);var c=s==="[object Object]"||s==="[object Array]",f,h;if(c&&(f=t.duplicates.indexOf(n),h=f!==-1),(t.tag!==null&&t.tag!=="?"||h||t.indent!==2&&e>0)&&(r=!1),h&&t.usedDuplicates[f])t.dump="*ref_"+f;else{if(c&&h&&!t.usedDuplicates[f]&&(t.usedDuplicates[f]=!0),s==="[object Object]")i&&Object.keys(t.dump).length!==0?(_O(t,e,t.dump,r),h&&(t.dump="&ref_"+f+t.dump)):(vO(t,e,t.dump),h&&(t.dump="&ref_"+f+" "+t.dump));else if(s==="[object Array]")i&&t.dump.length!==0?(t.noArrayIndent&&!a&&e>0?y_(t,e-1,t.dump,r):y_(t,e,t.dump,r),h&&(t.dump="&ref_"+f+t.dump)):(gO(t,e,t.dump),h&&(t.dump="&ref_"+f+" "+t.dump));else if(s==="[object String]")t.tag!=="?"&&hO(t,t.dump,e,o,l);else{if(s==="[object Undefined]")return!1;if(t.skipInvalid)return!1;throw new on("unacceptable kind of an object to dump "+s)}t.tag!==null&&t.tag!=="?"&&(u=encodeURI(t.tag[0]==="!"?t.tag.slice(1):t.tag).replace(/!/g,"%21"),t.tag[0]==="!"?u="!"+u:u.slice(0,18)==="tag:yaml.org,2002:"?u="!!"+u.slice(18):u="!<"+u+">",t.dump=u+" "+t.dump)}return!0}function yO(t,e){var n=[],i=[],r,o;for(Pp(t,n,i),r=0,o=i.length;r<o;r+=1)e.duplicates.push(n[i[r]]);e.usedDuplicates=new Array(o)}function Pp(t,e,n){var i,r,o;if(t!==null&&typeof t=="object")if(r=e.indexOf(t),r!==-1)n.indexOf(r)===-1&&n.push(r);else if(e.push(t),Array.isArray(t))for(r=0,o=t.length;r<o;r+=1)Pp(t[r],e,n);else for(i=Object.keys(t),r=0,o=i.length;r<o;r+=1)Pp(t[i[r]],e,n)}function xO(t,e){e=e||{};var n=new lO(e);n.noRefs||yO(t,n);var i=t;return n.replacer&&(i=n.replacer.call({"":i},"",i)),Vi(n,0,i,!0,!0)?n.dump+`
`:""}var SO=xO,EO={dump:SO};function sg(t,e){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+e+" instead, which is now safe by default.")}}var MO=Xt,wO=tE,bO=oE,TO=cE,AO=fE,CO=ig,RO=CE.load,PO=CE.loadAll,LO=EO.dump,NO=on,IO={binary:gE,float:uE,map:rE,null:aE,pairs:_E,set:yE,timestamp:pE,bool:sE,int:lE,merge:mE,omap:vE,seq:iE,str:nE},DO=sg("safeLoad","load"),OO=sg("safeLoadAll","loadAll"),UO=sg("safeDump","dump"),kO={Type:MO,Schema:wO,FAILSAFE_SCHEMA:bO,JSON_SCHEMA:TO,CORE_SCHEMA:AO,DEFAULT_SCHEMA:CO,load:RO,loadAll:PO,dump:LO,YAMLException:NO,types:IO,safeLoad:DO,safeLoadAll:OO,safeDump:UO};const BE=J.createContext(),FO="/luberlab.github.io/",zO=async t=>{const n=await(await fetch(t)).text();return kO.load(n)},BO=({children:t})=>{const[e,n]=J.useState({lead:[],postDoc:[],phd:[],masters:[],undergrad:[]});return J.useEffect(()=>{(async()=>{try{const r=await zO(`${FO}assets/members-1.yml`),o={lead:r.filter(a=>a.Degree==="Director"),postDoc:r.filter(a=>a.Degree==="PostDoc"),phd:r.filter(a=>a.Degree==="PHD"),undergrad:r.filter(a=>a.Degree==="Undergraduate"),masters:r.filter(a=>a.Degree==="Masters")};n(o)}catch(r){console.error("Error fetching YAML data:",r)}})()},[]),L.jsx(BE.Provider,{value:{cards:e,setCards:n},children:t})},HO=()=>{const t=J.useRef(null),e=J.useRef(null),n="/luberlab.github.io/";J.useEffect(()=>{const o=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&(s.target===e.current?(document.getElementById("postdoc-image").style.opacity="1",document.getElementById("postdoc-image").style.transform="translateY(0)",document.getElementById("director-image").style.opacity="0",document.getElementById("director-image").style.transform="translateY(20px)"):s.target===t.current&&(document.getElementById("postdoc-image").style.opacity="0",document.getElementById("postdoc-image").style.transform="translateY(20px)",document.getElementById("director-image").style.opacity="1",document.getElementById("director-image").style.transform="translateY(0)"))})},{threshold:.75});return t.current&&o.observe(t.current),e.current&&o.observe(e.current),()=>{t.current&&o.unobserve(t.current),e.current&&o.unobserve(e.current)}},[]);const i={photo:n+"assets/images/jacob.jpg",name:"Dr. John Doe",title:"Director",bio:"Dr. Doe is focused on advancing healthcare through data science...",researchAreas:["Generative AI","Medical Imaging","Population Genetics"]},r={photo:n+"assets/images/shang.jpeg",name:"Dr. Jane Smith",title:"Postdoc",bio:"Dr. Smith specializes in computational oncology and bioinformatics...",researchAreas:["Computational Microbiology","Digital Pathology"]};return L.jsxs("div",{className:"flex h-screen snap-y snap-mandatory overflow-y-scroll custom-scrollbar",children:[L.jsxs("div",{className:"w-1/3 h-full relative hidden md:block",children:[L.jsx("img",{id:"director-image",src:i.photo,alt:i.name,className:"w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-1 absolute"}),L.jsx("img",{id:"postdoc-image",src:r.photo,alt:r.name,className:"w-full h-full mt-[100vh] object-cover transition-opacity duration-500 ease-in-out opacity-0 absolute"})]}),L.jsxs("div",{className:"w-full md:w-2/3 ml-0 md:ml-[33%]",children:[L.jsxs("div",{ref:t,className:"h-screen p-8 snap-start snap-always",children:[L.jsx("div",{className:"md:hidden flex justify-center mb-4",children:L.jsx("img",{src:i.photo,alt:i.name,className:"w-40 h-40 object-cover rounded-full"})}),L.jsx("h1",{className:"text-3xl md:text-4xl font-bold",children:i.name}),L.jsx("h2",{className:"text-xl md:text-2xl text-gray-500",children:i.title}),L.jsx("p",{className:"mt-4 text-md md:text-lg",children:i.bio}),L.jsxs("div",{className:"mt-6",children:[L.jsx("h3",{className:"text-lg md:text-xl font-semibold",children:"Research Areas"}),L.jsx("ul",{className:"list-disc list-inside mt-2",children:i.researchAreas.map((o,a)=>L.jsx("li",{children:o},a))})]})]}),L.jsx("div",{className:"h-12"}),L.jsxs("div",{ref:e,className:"h-screen p-8 snap-start snap-always",children:[L.jsx("div",{className:"md:hidden flex justify-center mb-4",children:L.jsx("img",{src:r.photo,alt:r.name,className:"w-40 h-40 object-cover rounded-full"})}),L.jsx("h1",{className:"text-3xl md:text-4xl font-bold",children:r.name}),L.jsx("h2",{className:"text-xl md:text-2xl text-gray-500",children:r.title}),L.jsx("p",{className:"mt-4 text-md md:text-lg",children:r.bio}),L.jsxs("div",{className:"mt-6",children:[L.jsx("h3",{className:"text-lg md:text-xl font-semibold",children:"Research Areas"}),L.jsx("ul",{className:"list-disc list-inside mt-2",children:r.researchAreas.map((o,a)=>L.jsx("li",{children:o},a))})]})]})]})]})},S_=()=>{};let lg={},HE={},VE=null,GE={mark:S_,measure:S_};try{typeof window<"u"&&(lg=window),typeof document<"u"&&(HE=document),typeof MutationObserver<"u"&&(VE=MutationObserver),typeof performance<"u"&&(GE=performance)}catch{}const{userAgent:E_=""}=lg.navigator||{},Cr=lg,gt=HE,M_=VE,nu=GE;Cr.document;const Xi=!!gt.documentElement&&!!gt.head&&typeof gt.addEventListener=="function"&&typeof gt.createElement=="function",WE=~E_.indexOf("MSIE")||~E_.indexOf("Trident/");var yt="classic",jE="duotone",Ln="sharp",Nn="sharp-duotone",VO=[yt,jE,Ln,Nn],GO={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},w_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},WO=["kit"],jO=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,XO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,$O={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},qO={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},YO={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},KO={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},QO={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},ZO={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},XE={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},JO=["solid","regular","light","thin","duotone","brands"],$E=[1,2,3,4,5,6,7,8,9,10],eU=$E.concat([11,12,13,14,15,16,17,18,19,20]),ds={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tU=[...Object.keys(KO),...JO,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ds.GROUP,ds.SWAP_OPACITY,ds.PRIMARY,ds.SECONDARY].concat($E.map(t=>"".concat(t,"x"))).concat(eU.map(t=>"w-".concat(t))),nU={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},iU={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},rU={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},b_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Gi="___FONT_AWESOME___",Lp=16,qE="fa",YE="svg-inline--fa",go="data-fa-i2svg",Np="data-fa-pseudo-element",oU="data-fa-pseudo-element-pending",ug="data-prefix",cg="data-icon",T_="fontawesome-i2svg",aU="async",sU=["HTML","HEAD","STYLE","SCRIPT"],KE=(()=>{try{return!0}catch{return!1}})(),QE=[yt,Ln,Nn];function cl(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[yt]}})}const ZE={...XE};ZE[yt]={...XE[yt],...w_.kit,...w_["kit-duotone"]};const oo=cl(ZE),Ip={...ZO};Ip[yt]={...Ip[yt],...b_.kit,...b_["kit-duotone"]};const Ks=cl(Ip),Dp={...QO};Dp[yt]={...Dp[yt],...rU.kit};const ao=cl(Dp),Op={...YO};Op[yt]={...Op[yt],...iU.kit};const lU=cl(Op),uU=jO,JE="fa-layers-text",cU=XO,fU={...GO};cl(fU);const dU=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ad=ds,Da=new Set;Object.keys(Ks[yt]).map(Da.add.bind(Da));Object.keys(Ks[Ln]).map(Da.add.bind(Da));Object.keys(Ks[Nn]).map(Da.add.bind(Da));const hU=[...WO,...tU],Ms=Cr.FontAwesomeConfig||{};function pU(t){var e=gt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function mU(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}gt&&typeof gt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const r=mU(pU(n));r!=null&&(Ms[i]=r)});const eM={styleDefault:"solid",familyDefault:"classic",cssPrefix:qE,replacementClass:YE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ms.familyPrefix&&(Ms.cssPrefix=Ms.familyPrefix);const Oa={...eM,...Ms};Oa.autoReplaceSvg||(Oa.observeMutations=!1);const Te={};Object.keys(eM).forEach(t=>{Object.defineProperty(Te,t,{enumerable:!0,set:function(e){Oa[t]=e,ws.forEach(n=>n(Te))},get:function(){return Oa[t]}})});Object.defineProperty(Te,"familyPrefix",{enumerable:!0,set:function(t){Oa.cssPrefix=t,ws.forEach(e=>e(Te))},get:function(){return Oa.cssPrefix}});Cr.FontAwesomeConfig=Te;const ws=[];function gU(t){return ws.push(t),()=>{ws.splice(ws.indexOf(t),1)}}const tr=Lp,hi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vU(t){if(!t||!Xi)return;const e=gt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=gt.head.childNodes;let i=null;for(let r=n.length-1;r>-1;r--){const o=n[r],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=o)}return gt.head.insertBefore(e,i),t}const _U="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qs(){let t=12,e="";for(;t-- >0;)e+=_U[Math.random()*62|0];return e}function Ga(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function fg(t){return t.classList?Ga(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function tM(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yU(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(tM(t[n]),'" '),"").trim()}function tf(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function dg(t){return t.size!==hi.size||t.x!==hi.x||t.y!==hi.y||t.rotate!==hi.rotate||t.flipX||t.flipY}function xU(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:u}}function SU(t){let{transform:e,width:n=Lp,height:i=Lp,startCentered:r=!1}=t,o="";return r&&WE?o+="translate(".concat(e.x/tr-n/2,"em, ").concat(e.y/tr-i/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/tr,"em), calc(-50% + ").concat(e.y/tr,"em)) "):o+="translate(".concat(e.x/tr,"em, ").concat(e.y/tr,"em) "),o+="scale(".concat(e.size/tr*(e.flipX?-1:1),", ").concat(e.size/tr*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var EU=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function nM(){const t=qE,e=YE,n=Te.cssPrefix,i=Te.replacementClass;let r=EU;if(n!==t||i!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(i))}return r}let A_=!1;function Cd(){Te.autoAddCss&&!A_&&(vU(nM()),A_=!0)}var MU={mixout(){return{dom:{css:nM,insertCss:Cd}}},hooks(){return{beforeDOMElementCreation(){Cd()},beforeI2svg(){Cd()}}}};const Wi=Cr||{};Wi[Gi]||(Wi[Gi]={});Wi[Gi].styles||(Wi[Gi].styles={});Wi[Gi].hooks||(Wi[Gi].hooks={});Wi[Gi].shims||(Wi[Gi].shims=[]);var pi=Wi[Gi];const iM=[],rM=function(){gt.removeEventListener("DOMContentLoaded",rM),_c=1,iM.map(t=>t())};let _c=!1;Xi&&(_c=(gt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(gt.readyState),_c||gt.addEventListener("DOMContentLoaded",rM));function wU(t){Xi&&(_c?setTimeout(t,0):iM.push(t))}function fl(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?tM(t):"<".concat(e," ").concat(yU(n),">").concat(i.map(fl).join(""),"</").concat(e,">")}function C_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Rd=function(e,n,i,r){var o=Object.keys(e),a=o.length,s=n,l,u,c;for(i===void 0?(l=1,c=e[o[0]]):(l=0,c=i);l<a;l++)u=o[l],c=s(c,e[u],u,e);return c};function bU(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Up(t){const e=bU(t);return e.length===1?e[0].toString(16):null}function TU(t,e){const n=t.length;let i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function R_(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function kp(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,r=R_(e);typeof pi.hooks.addPack=="function"&&!i?pi.hooks.addPack(t,R_(e)):pi.styles[t]={...pi.styles[t]||{},...r},t==="fas"&&kp("fa",e)}const{styles:qr,shims:AU}=pi,CU={[yt]:Object.values(ao[yt]),[Ln]:Object.values(ao[Ln]),[Nn]:Object.values(ao[Nn])};let hg=null,oM={},aM={},sM={},lM={},uM={};const RU={[yt]:Object.keys(oo[yt]),[Ln]:Object.keys(oo[Ln]),[Nn]:Object.keys(oo[Nn])};function PU(t){return~hU.indexOf(t)}function LU(t,e){const n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!PU(r)?r:null}const cM=()=>{const t=i=>Rd(qr,(r,o,a)=>(r[a]=Rd(o,i,{}),r),{});oM=t((i,r,o)=>(r[3]&&(i[r[3]]=o),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{i[s.toString(16)]=o}),i)),aM=t((i,r,o)=>(i[o]=o,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{i[s]=o}),i)),uM=t((i,r,o)=>{const a=r[2];return i[o]=o,a.forEach(s=>{i[s]=o}),i});const e="far"in qr||Te.autoFetchSvg,n=Rd(AU,(i,r)=>{const o=r[0];let a=r[1];const s=r[2];return a==="far"&&!e&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:s}),i},{names:{},unicodes:{}});sM=n.names,lM=n.unicodes,hg=nf(Te.styleDefault,{family:Te.familyDefault})};gU(t=>{hg=nf(t.styleDefault,{family:Te.familyDefault})});cM();function pg(t,e){return(oM[t]||{})[e]}function NU(t,e){return(aM[t]||{})[e]}function fr(t,e){return(uM[t]||{})[e]}function fM(t){return sM[t]||{prefix:null,iconName:null}}function IU(t){const e=lM[t],n=pg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Rr(){return hg}const mg=()=>({prefix:null,iconName:null,rest:[]});function nf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=yt}=e,i=oo[n][t],r=Ks[n][t]||Ks[n][i],o=t in pi.styles?t:null;return r||o||null}const DU={[yt]:Object.keys(ao[yt]),[Ln]:Object.keys(ao[Ln]),[Nn]:Object.keys(ao[Nn])};function rf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,i={[yt]:"".concat(Te.cssPrefix,"-").concat(yt),[Ln]:"".concat(Te.cssPrefix,"-").concat(Ln),[Nn]:"".concat(Te.cssPrefix,"-").concat(Nn)};let r=null,o=yt;const a=VO.filter(l=>l!==jE);a.forEach(l=>{(t.includes(i[l])||t.some(u=>DU[l].includes(u)))&&(o=l)});const s=t.reduce((l,u)=>{const c=LU(Te.cssPrefix,u);if(qr[u]?(u=CU[o].includes(u)?lU[o][u]:u,r=u,l.prefix=u):RU[o].indexOf(u)>-1?(r=u,l.prefix=nf(u,{family:o})):c?l.iconName=c:u!==Te.replacementClass&&!a.some(f=>u===i[f])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const f=r==="fa"?fM(l.iconName):{},h=fr(l.prefix,l.iconName);f.prefix&&(r=null),l.iconName=f.iconName||h||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!qr.far&&qr.fas&&!Te.autoFetchSvg&&(l.prefix="fas")}return l},mg());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===Ln&&(qr.fass||Te.autoFetchSvg)&&(s.prefix="fass",s.iconName=fr(s.prefix,s.iconName)||s.iconName),!s.prefix&&o===Nn&&(qr.fasds||Te.autoFetchSvg)&&(s.prefix="fasds",s.iconName=fr(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||r==="fa")&&(s.prefix=Rr()||"fas"),s}class OU{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...r[o]},kp(o,r[o]);const a=ao[yt][o];a&&kp(a,r[o]),cM()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{const{prefix:o,iconName:a,icon:s}=i[r],l=s[2];e[o]||(e[o]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[o][u]=s)}),e[o][a]=s}),e}}let P_=[],ea={};const pa={},UU=Object.keys(pa);function kU(t,e){let{mixoutsTo:n}=e;return P_=t,ea={},Object.keys(pa).forEach(i=>{UU.indexOf(i)===-1&&delete pa[i]}),P_.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(a=>{n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){const o=i.hooks();Object.keys(o).forEach(a=>{ea[a]||(ea[a]=[]),ea[a].push(o[a])})}i.provides&&i.provides(pa)}),n}function Fp(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(ea[t]||[]).forEach(a=>{e=a.apply(null,[e,...i])}),e}function vo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(ea[t]||[]).forEach(o=>{o.apply(null,n)})}function Pr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return pa[t]?pa[t].apply(null,e):void 0}function zp(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Rr();if(e)return e=fr(n,e)||e,C_(dM.definitions,n,e)||C_(pi.styles,n,e)}const dM=new OU,FU=()=>{Te.autoReplaceSvg=!1,Te.observeMutations=!1,vo("noAuto")},zU={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xi?(vo("beforeI2svg",t),Pr("pseudoElements2svg",t),Pr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;Te.autoReplaceSvg===!1&&(Te.autoReplaceSvg=!0),Te.observeMutations=!0,wU(()=>{HU({autoReplaceSvgRoot:e}),vo("watch",t)})}},BU={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:fr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=nf(t[0]);return{prefix:n,iconName:fr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(Te.cssPrefix,"-"))>-1||t.match(uU))){const e=rf(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Rr(),iconName:fr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Rr();return{prefix:e,iconName:fr(e,t)||t}}}},Un={noAuto:FU,config:Te,dom:zU,parse:BU,library:dM,findIconDefinition:zp,toHtml:fl},HU=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=gt}=t;(Object.keys(pi.styles).length>0||Te.autoFetchSvg)&&Xi&&Te.autoReplaceSvg&&Un.dom.i2svg({node:e})};function of(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>fl(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Xi)return;const n=gt.createElement("div");return n.innerHTML=t.html,n.children}}),t}function VU(t){let{children:e,main:n,mask:i,attributes:r,styles:o,transform:a}=t;if(dg(a)&&n.found&&!i.found){const{width:s,height:l}=n,u={x:s/l/2,y:.5};r.style=tf({...o,"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function GU(t){let{prefix:e,iconName:n,children:i,attributes:r,symbol:o}=t;const a=o===!0?"".concat(e,"-").concat(Te.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:a},children:i}]}]}function gg(t){const{icons:{main:e,mask:n},prefix:i,iconName:r,transform:o,symbol:a,title:s,maskId:l,titleId:u,extra:c,watchable:f=!1}=t,{width:h,height:m}=n.found?n:e,_=i==="fak",x=[Te.replacementClass,r?"".concat(Te.cssPrefix,"-").concat(r):""].filter(R=>c.classes.indexOf(R)===-1).filter(R=>R!==""||!!R).concat(c.classes).join(" ");let p={children:[],attributes:{...c.attributes,"data-prefix":i,"data-icon":r,class:x,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(m)}};const d=_&&!~c.classes.indexOf("fa-fw")?{width:"".concat(h/m*16*.0625,"em")}:{};f&&(p.attributes[go]=""),s&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(u||Qs())},children:[s]}),delete p.attributes.title);const g={...p,prefix:i,iconName:r,main:e,mask:n,maskId:l,transform:o,symbol:a,styles:{...d,...c.styles}},{children:y,attributes:E}=n.found&&e.found?Pr("generateAbstractMask",g)||{children:[],attributes:{}}:Pr("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=y,g.attributes=E,a?GU(g):VU(g)}function L_(t){const{content:e,width:n,height:i,transform:r,title:o,extra:a,watchable:s=!1}=t,l={...a.attributes,...o?{title:o}:{},class:a.classes.join(" ")};s&&(l[go]="");const u={...a.styles};dg(r)&&(u.transform=SU({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);const c=tf(u);c.length>0&&(l.style=c);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function WU(t){const{content:e,title:n,extra:i}=t,r={...i.attributes,...n?{title:n}:{},class:i.classes.join(" ")},o=tf(i.styles);o.length>0&&(r.style=o);const a=[];return a.push({tag:"span",attributes:r,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:Pd}=pi;function Bp(t){const e=t[0],n=t[1],[i]=t.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(Te.cssPrefix,"-").concat(Ad.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Te.cssPrefix,"-").concat(Ad.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(Te.cssPrefix,"-").concat(Ad.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:r}}const jU={found:!1,width:512,height:512};function XU(t,e){!KE&&!Te.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Hp(t,e){let n=e;return e==="fa"&&Te.styleDefault!==null&&(e=Rr()),new Promise((i,r)=>{if(n==="fa"){const o=fM(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Pd[e]&&Pd[e][t]){const o=Pd[e][t];return i(Bp(o))}XU(t,e),i({...jU,icon:Te.showMissingIcons&&t?Pr("missingIconAbstract")||{}:{}})})}const N_=()=>{},Vp=Te.measurePerformance&&nu&&nu.mark&&nu.measure?nu:{mark:N_,measure:N_},hs='FA "6.6.0"',$U=t=>(Vp.mark("".concat(hs," ").concat(t," begins")),()=>hM(t)),hM=t=>{Vp.mark("".concat(hs," ").concat(t," ends")),Vp.measure("".concat(hs," ").concat(t),"".concat(hs," ").concat(t," begins"),"".concat(hs," ").concat(t," ends"))};var vg={begin:$U,end:hM};const Mu=()=>{};function I_(t){return typeof(t.getAttribute?t.getAttribute(go):null)=="string"}function qU(t){const e=t.getAttribute?t.getAttribute(ug):null,n=t.getAttribute?t.getAttribute(cg):null;return e&&n}function YU(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Te.replacementClass)}function KU(){return Te.autoReplaceSvg===!0?wu.replace:wu[Te.autoReplaceSvg]||wu.replace}function QU(t){return gt.createElementNS("http://www.w3.org/2000/svg",t)}function ZU(t){return gt.createElement(t)}function pM(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?QU:ZU}=e;if(typeof t=="string")return gt.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){i.appendChild(pM(o,{ceFn:n}))}),i}function JU(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const wu={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(pM(n),e)}),e.getAttribute(go)===null&&Te.keepOriginalSource){let n=gt.createComment(JU(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~fg(e).indexOf(Te.replacementClass))return wu.replace(t);const i=new RegExp("".concat(Te.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((a,s)=>(s===Te.replacementClass||s.match(i)?a.toSvg.push(s):a.toNode.push(s),a),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>fl(o)).join(`
`);e.setAttribute(go,""),e.innerHTML=r}};function D_(t){t()}function mM(t,e){const n=typeof e=="function"?e:Mu;if(t.length===0)n();else{let i=D_;Te.mutateApproach===aU&&(i=Cr.requestAnimationFrame||D_),i(()=>{const r=KU(),o=vg.begin("mutate");t.map(r),o(),n()})}}let _g=!1;function gM(){_g=!0}function Gp(){_g=!1}let yc=null;function O_(t){if(!M_||!Te.observeMutations)return;const{treeCallback:e=Mu,nodeCallback:n=Mu,pseudoElementsCallback:i=Mu,observeMutationsRoot:r=gt}=t;yc=new M_(o=>{if(_g)return;const a=Rr();Ga(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!I_(s.addedNodes[0])&&(Te.searchPseudoElements&&i(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&Te.searchPseudoElements&&i(s.target.parentNode),s.type==="attributes"&&I_(s.target)&&~dU.indexOf(s.attributeName))if(s.attributeName==="class"&&qU(s.target)){const{prefix:l,iconName:u}=rf(fg(s.target));s.target.setAttribute(ug,l||a),u&&s.target.setAttribute(cg,u)}else YU(s.target)&&n(s.target)})}),Xi&&yc.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ek(){yc&&yc.disconnect()}function tk(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,r)=>{const o=r.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(i[a]=s.join(":").trim()),i},{})),n}function nk(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let r=rf(fg(t));return r.prefix||(r.prefix=Rr()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=NU(r.prefix,t.innerText)||pg(r.prefix,Up(t.innerText))),!r.iconName&&Te.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ik(t){const e=Ga(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Te.autoA11y&&(n?e["aria-labelledby"]="".concat(Te.replacementClass,"-title-").concat(i||Qs()):(e["aria-hidden"]="true",e.focusable="false")),e}function rk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function U_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:r}=nk(t),o=ik(t),a=Fp("parseNodeAttributes",{},t);let s=e.styleParser?tk(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:hi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:o},...a}}const{styles:ok}=pi;function vM(t){const e=Te.autoReplaceSvg==="nest"?U_(t,{styleParser:!1}):U_(t);return~e.extra.classes.indexOf(JE)?Pr("generateLayersText",t,e):Pr("generateSvgReplacementMutation",t,e)}let _i=new Set;QE.map(t=>{_i.add("fa-".concat(t))});Object.keys(oo[yt]).map(_i.add.bind(_i));Object.keys(oo[Ln]).map(_i.add.bind(_i));Object.keys(oo[Nn]).map(_i.add.bind(_i));_i=[..._i];function k_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xi)return Promise.resolve();const n=gt.documentElement.classList,i=c=>n.add("".concat(T_,"-").concat(c)),r=c=>n.remove("".concat(T_,"-").concat(c)),o=Te.autoFetchSvg?_i:QE.map(c=>"fa-".concat(c)).concat(Object.keys(ok));o.includes("fa")||o.push("fa");const a=[".".concat(JE,":not([").concat(go,"])")].concat(o.map(c=>".".concat(c,":not([").concat(go,"])"))).join(", ");if(a.length===0)return Promise.resolve();let s=[];try{s=Ga(t.querySelectorAll(a))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();const l=vg.begin("onTree"),u=s.reduce((c,f)=>{try{const h=vM(f);h&&c.push(h)}catch(h){KE||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise((c,f)=>{Promise.all(u).then(h=>{mM(h,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),c()})}).catch(h=>{l(),f(h)})})}function ak(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vM(t).then(n=>{n&&mM([n],e)})}function sk(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:zp(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:zp(r||{})),t(i,{...n,mask:r})}}const lk=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hi,symbol:i=!1,mask:r=null,maskId:o=null,title:a=null,titleId:s=null,classes:l=[],attributes:u={},styles:c={}}=e;if(!t)return;const{prefix:f,iconName:h,icon:m}=t;return of({type:"icon",...t},()=>(vo("beforeDOMElementCreation",{iconDefinition:t,params:e}),Te.autoA11y&&(a?u["aria-labelledby"]="".concat(Te.replacementClass,"-title-").concat(s||Qs()):(u["aria-hidden"]="true",u.focusable="false")),gg({icons:{main:Bp(m),mask:r?Bp(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:h,transform:{...hi,...n},symbol:i,title:a,maskId:o,titleId:s,extra:{attributes:u,styles:c,classes:l}})))};var uk={mixout(){return{icon:sk(lk)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=k_,t.nodeCallback=ak,t}}},provides(t){t.i2svg=function(e){const{node:n=gt,callback:i=()=>{}}=e;return k_(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:r,titleId:o,prefix:a,transform:s,symbol:l,mask:u,maskId:c,extra:f}=n;return new Promise((h,m)=>{Promise.all([Hp(i,a),u.iconName?Hp(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[x,p]=_;h([e,gg({icons:{main:x,mask:p},prefix:a,iconName:i,transform:s,symbol:l,maskId:c,title:r,titleId:o,extra:f,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:r,transform:o,styles:a}=e;const s=tf(a);s.length>0&&(i.style=s);let l;return dg(o)&&(l=Pr("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:i}}}},ck={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return of({type:"layer"},()=>{vo("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(r=>{Array.isArray(r)?r.map(o=>{i=i.concat(o.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(Te.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},fk={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:r={},styles:o={}}=e;return of({type:"counter",content:t},()=>(vo("beforeDOMElementCreation",{content:t,params:e}),WU({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(Te.cssPrefix,"-layers-counter"),...i]}})))}}}},dk={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hi,title:i=null,classes:r=[],attributes:o={},styles:a={}}=e;return of({type:"text",content:t},()=>(vo("beforeDOMElementCreation",{content:t,params:e}),L_({content:t,transform:{...hi,...n},title:i,extra:{attributes:o,styles:a,classes:["".concat(Te.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:r,extra:o}=n;let a=null,s=null;if(WE){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();a=u.width/l,s=u.height/l}return Te.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,L_({content:e.innerHTML,width:a,height:s,transform:r,title:i,extra:o,watchable:!0})])}}};const hk=new RegExp('"',"ug"),F_=[1105920,1112319],z_={FontAwesome:{normal:"fas",400:"fas"},...qO,...$O,...nU},Wp=Object.keys(z_).reduce((t,e)=>(t[e.toLowerCase()]=z_[e],t),{}),pk=Object.keys(Wp).reduce((t,e)=>{const n=Wp[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function mk(t){const e=t.replace(hk,""),n=TU(e,0),i=n>=F_[0]&&n<=F_[1],r=e.length===2?e[0]===e[1]:!1;return{value:Up(r?e[0]:e),isSecondary:i||r}}function gk(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(Wp[n]||{})[r]||pk[n]}function B_(t,e){const n="".concat(oU).concat(e.replace(":","-"));return new Promise((i,r)=>{if(t.getAttribute(n)!==null)return i();const a=Ga(t.children).filter(h=>h.getAttribute(Np)===e)[0],s=Cr.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),u=l.match(cU),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(a&&!u)return t.removeChild(a),i();if(u&&f!=="none"&&f!==""){const h=s.getPropertyValue("content");let m=gk(l,c);const{value:_,isSecondary:x}=mk(h),p=u[0].startsWith("FontAwesome");let d=pg(m,_),g=d;if(p){const y=IU(_);y.iconName&&y.prefix&&(d=y.iconName,m=y.prefix)}if(d&&!x&&(!a||a.getAttribute(ug)!==m||a.getAttribute(cg)!==g)){t.setAttribute(n,g),a&&t.removeChild(a);const y=rk(),{extra:E}=y;E.attributes[Np]=e,Hp(d,m).then(R=>{const C=gg({...y,icons:{main:R,mask:mg()},prefix:m,iconName:g,extra:E,watchable:!0}),T=gt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=C.map(M=>fl(M)).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function vk(t){return Promise.all([B_(t,"::before"),B_(t,"::after")])}function _k(t){return t.parentNode!==document.head&&!~sU.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Np)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function H_(t){if(Xi)return new Promise((e,n)=>{const i=Ga(t.querySelectorAll("*")).filter(_k).map(vk),r=vg.begin("searchPseudoElements");gM(),Promise.all(i).then(()=>{r(),Gp(),e()}).catch(()=>{r(),Gp(),n()})})}var yk={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=H_,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=gt}=e;Te.searchPseudoElements&&H_(n)}}};let V_=!1;var xk={mixout(){return{dom:{unwatch(){gM(),V_=!0}}}},hooks(){return{bootstrap(){O_(Fp("mutationObserverCallbacks",{}))},noAuto(){ek()},watch(t){const{observeMutationsRoot:e}=t;V_?Gp():O_(Fp("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const G_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const r=i.toLowerCase().split("-"),o=r[0];let a=r.slice(1).join("-");if(o&&a==="h")return n.flipX=!0,n;if(o&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(o){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},e)};var Sk={mixout(){return{parse:{transform:t=>G_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=G_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:r,iconWidth:o}=e;const a={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),c={transform:"".concat(s," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},h={outer:a,inner:c,path:f};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const Ld={x:0,y:0,width:"100%",height:"100%"};function W_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ek(t){return t.tag==="g"?t.children:[t]}var Mk={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?rf(n.split(" ").map(r=>r.trim())):mg();return i.prefix||(i.prefix=Rr()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:r,mask:o,maskId:a,transform:s}=e;const{width:l,icon:u}=r,{width:c,icon:f}=o,h=xU({transform:s,containerWidth:c,iconWidth:l}),m={tag:"rect",attributes:{...Ld,fill:"white"}},_=u.children?{children:u.children.map(W_)}:{},x={tag:"g",attributes:{...h.inner},children:[W_({tag:u.tag,attributes:{...u.attributes,...h.path},..._})]},p={tag:"g",attributes:{...h.outer},children:[x]},d="mask-".concat(a||Qs()),g="clip-".concat(a||Qs()),y={tag:"mask",attributes:{...Ld,id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,p]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:Ek(f)},y]};return n.push(E,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")"),...Ld}}),{children:n,attributes:i}}}},wk={provides(t){let e=!1;Cr.matchMedia&&(e=Cr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...r,attributeName:"opacity"},a={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||a.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(a),n.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},bk={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},Tk=[MU,uk,ck,fk,dk,yk,xk,Sk,Mk,wk,bk];kU(Tk,{mixoutsTo:Un});Un.noAuto;Un.config;Un.library;Un.dom;const jp=Un.parse;Un.findIconDefinition;Un.toHtml;const Ak=Un.icon;Un.layer;Un.text;Un.counter;function j_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function fi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?j_(Object(n),!0).forEach(function(i){ta(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j_(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function xc(t){"@babel/helpers - typeof";return xc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xc(t)}function ta(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ck(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Rk(t,e){if(t==null)return{};var n=Ck(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Xp(t){return Pk(t)||Lk(t)||Nk(t)||Ik()}function Pk(t){if(Array.isArray(t))return $p(t)}function Lk(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Nk(t,e){if(t){if(typeof t=="string")return $p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $p(t,e)}}function $p(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Ik(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dk(t){var e,n=t.beat,i=t.fade,r=t.beatFade,o=t.bounce,a=t.shake,s=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,h=t.fixedWidth,m=t.inverse,_=t.border,x=t.listItem,p=t.flip,d=t.size,g=t.rotation,y=t.pull,E=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":m,"fa-border":_,"fa-li":x,"fa-flip":p===!0,"fa-flip-horizontal":p==="horizontal"||p==="both","fa-flip-vertical":p==="vertical"||p==="both"},ta(e,"fa-".concat(d),typeof d<"u"&&d!==null),ta(e,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),ta(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),ta(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(R){return E[R]?R:null}).filter(function(R){return R})}function Ok(t){return t=t-0,t===t}function _M(t){return Ok(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Uk=["style"];function kk(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Fk(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=_M(n.slice(0,i)),o=n.slice(i+1).trim();return r.startsWith("webkit")?e[kk(r)]=o:e[r]=o,e},{})}function yM(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return yM(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=Fk(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[_M(u)]=c}return l},{attrs:{}}),o=n.style,a=o===void 0?{}:o,s=Rk(n,Uk);return r.attrs.style=fi(fi({},r.attrs.style),a),t.apply(void 0,[e.tag,fi(fi({},r.attrs),s)].concat(Xp(i)))}var xM=!1;try{xM=!0}catch{}function zk(){if(!xM&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function X_(t){if(t&&xc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(jp.icon)return jp.icon(t);if(t===null)return null;if(t&&xc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Nd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ta({},t,e):{}}var $_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},na=Zp.forwardRef(function(t,e){var n=fi(fi({},$_),t),i=n.icon,r=n.mask,o=n.symbol,a=n.className,s=n.title,l=n.titleId,u=n.maskId,c=X_(i),f=Nd("classes",[].concat(Xp(Dk(n)),Xp((a||"").split(" ")))),h=Nd("transform",typeof n.transform=="string"?jp.transform(n.transform):n.transform),m=Nd("mask",X_(r)),_=Ak(c,fi(fi(fi(fi({},f),h),m),{},{symbol:o,title:s,titleId:l,maskId:u}));if(!_)return zk("Could not find icon",c),null;var x=_.abstract,p={ref:e};return Object.keys(n).forEach(function(d){$_.hasOwnProperty(d)||(p[d]=n[d])}),Bk(x[0],p)});na.displayName="FontAwesomeIcon";na.propTypes={beat:X.bool,border:X.bool,beatFade:X.bool,bounce:X.bool,className:X.string,fade:X.bool,flash:X.bool,mask:X.oneOfType([X.object,X.array,X.string]),maskId:X.string,fixedWidth:X.bool,inverse:X.bool,flip:X.oneOf([!0,!1,"horizontal","vertical","both"]),icon:X.oneOfType([X.object,X.array,X.string]),listItem:X.bool,pull:X.oneOf(["right","left"]),pulse:X.bool,rotation:X.oneOf([0,90,180,270]),shake:X.bool,size:X.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:X.bool,spinPulse:X.bool,spinReverse:X.bool,symbol:X.oneOfType([X.bool,X.string]),title:X.string,titleId:X.string,transform:X.oneOfType([X.string,X.object]),swapOpacity:X.bool};var Bk=yM.bind(null,Zp.createElement);const Hk={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},Vk={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Gk={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Wk={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},SM=({member:t,imageUrl:e})=>{const{setSelectedMember:n}=J.useContext(Q1),i=Hc(),r=()=>{n({...t,imageUrl:e}),i("/individual-page")};return L.jsxs("div",{className:"team-card h-[350px] w-[300px] text-center flex flex-col items-center justify-between bg-white rounded-2xl transition-all duration-300 ease-in-out m-auto hover:scale-105 border border-gray-200 shadow-lg",onClick:r,children:[L.jsx("div",{className:"team-card-image flex w-[155px] h-[155px] justify-center m-2.5 rounded-full p-1 bg-blue-100 hover:bg-blue-500",children:e?L.jsx("img",{src:e,alt:t.Name,className:"team-card-image-img w-[150px] h-[150px] object-cover rounded-full border-2 border-white"}):L.jsx("p",{children:"Image not found"})}),L.jsxs("div",{className:"team-card-inner p-2.5 flex flex-col justify-between flex-grow",children:[L.jsxs("div",{className:"team-card-top",children:[L.jsx("div",{className:"team-card-title text-xl capitalize font-semibold text-gray-800 hover:text-blue-500",children:L.jsx("a",{onClick:r,children:t.Name})}),L.jsx("div",{className:"team-card-subtitle text-sm text-gray-600 pt-1",children:t.Degree})]}),L.jsx("div",{className:"team-card-footer-wrapper flex justify-center",children:L.jsx("div",{className:"team-card-links",children:L.jsxs("span",{className:"team-card-misc flex flex-wrap gap-2 items-start",children:[L.jsx("a",{href:t.LinkedIn_URL,target:"_blank",rel:"noopener noreferrer",className:"bg-white p-1.5 rounded-full border border-gray-300 text-blue-500 transition-all duration-200 ease-in-out hover:bg-blue-500 hover:text-white",children:L.jsx(na,{icon:Vk})}),L.jsx("a",{href:t.Twitter_URL,target:"_blank",rel:"noopener noreferrer",className:"bg-white p-1.5 rounded-full border border-gray-300 text-blue-500 transition-all duration-200 ease-in-out hover:bg-blue-500 hover:text-white",children:L.jsx(na,{icon:Wk})}),L.jsx("a",{href:t.Google_Scholar_URL,target:"_blank",rel:"noopener noreferrer",className:"bg-white p-1.5 rounded-full border border-gray-300 text-blue-500 transition-all duration-200 ease-in-out hover:bg-blue-500 hover:text-white",children:L.jsx(na,{icon:Hk})}),L.jsx("a",{href:t.GitHub_URL,target:"_blank",rel:"noopener noreferrer",className:"bg-white p-1.5 rounded-full border border-gray-300 text-blue-500 transition-all duration-200 ease-in-out hover:bg-blue-500 hover:text-white",children:L.jsx(na,{icon:Gk})})]})})}),L.jsx("div",{className:"team-card-learn-more text-center mt-4",children:L.jsxs("a",{className:"text-blue-500 text-sm hover:text-blue-600 transition-all duration-300 ease-in-out",children:["Learn More ",L.jsx("span",{className:"arrow ml-1",children:"→"})]})})]})]})};SM.propTypes={member:X.shape({Name:X.string.isRequired,photo:X.string.isRequired,Degree:X.string,Designation:X.string,Mentors:X.string,Bio:X.string,LinkedIn_URL:X.string,Twitter_URL:X.string,Google_Scholar_URL:X.string,GitHub_URL:X.string,Research_Category:X.string,Achievements:X.string,Areas_of_Research_Interest:X.string,Dissertation_Committee_Members:X.string,Dissertation_topic:X.string,Graduation_Date:X.string,Education:X.string,Resume_CV:X.string,email:X.string}).isRequired,imageUrl:X.string};const jk="/luberlab.github.io/",Xk=t=>`${jk}assets/images/${t}`,bu=({title:t,members:e})=>{const[n,i]=J.useState({}),[r,o]=J.useState(!1),a=J.useRef(null);return J.useEffect(()=>{(()=>{const l={};for(const u of e){const c=Xk(u.photo);l[u.photo]=c}i(l)})()},[e]),J.useEffect(()=>{const s=a.current,l=new IntersectionObserver(([u])=>{u.isIntersecting&&(o(!0),l.disconnect())},{threshold:.2});return s&&l.observe(s),()=>{s&&l.disconnect()}},[]),L.jsxs("div",{className:"w-full p-5 box-border bg-black",ref:a,children:[L.jsx(xo,{titleText:t,isVisible:r}),L.jsx("div",{className:"grid gap-5 w-full max-w-screen-xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center",children:e.map((s,l)=>L.jsx(SM,{member:s,imageUrl:n[s.photo]},l))})]})};bu.propTypes={title:X.string.isRequired,members:X.arrayOf(X.shape({Achievements:X.string,Areas_of_Research_Interest:X.string,Bio:X.string,Degree:X.string,Designation:X.string,Dissertation_Committee_Members:X.string,Dissertation_topic:X.string,GitHub_URL:X.string,Google_Scholar_URL:X.string,Graduation_Date:X.string,LinkedIn_URL:X.string,Mentors:X.string,Name:X.string.isRequired,Education:X.string,Research_Category:X.string,Resume_CV:X.string,Twitter_URL:X.string,email:X.string,photo:X.string.isRequired})).isRequired};const $k=()=>{const t=J.useRef(null),e=J.useRef(null),{cards:n}=J.useContext(BE);return L.jsxs("div",{className:"snap-y snap-mandatory h-screen-minus-70 overflow-y-scroll",children:[L.jsx(Z1,{mainText:"Welcome to the Lab",nextSectionRef:t}),L.jsx("div",{ref:t,className:"snap-start h-screen",children:L.jsx(HO,{})}),L.jsxs("div",{ref:e,className:"snap-end",children:[L.jsx(bu,{title:"PHD",members:n.phd}),L.jsx("div",{className:"h-20 bg-black"}),L.jsx(bu,{title:"MASTERS",members:n.masters}),L.jsx("div",{className:"h-20 bg-black"}),L.jsx(bu,{title:"UNDERGRADUATE",members:n.undergrad}),L.jsx("div",{className:"h-20 bg-black"})]})]})},qk=()=>L.jsx(BO,{children:L.jsx($k,{})});function Yk(){return L.jsxs(XT,{basename:"/luberlab.github.io/",children:[L.jsx(gI,{}),L.jsx(vI,{children:L.jsxs(GT,{children:[L.jsx(us,{path:"/",element:L.jsx(cI,{})}),L.jsx(us,{path:"/teams",element:L.jsx(qk,{})}),L.jsx(us,{path:"/news",element:L.jsx(l1,{children:L.jsx(fI,{})})}),L.jsx(us,{path:"/publications",element:L.jsx(mI,{})})]})})]})}aS(document.getElementById("root")).render(L.jsxs(J.StrictMode,{children:[L.jsx("div",{children:console.log("hey i am inside the website!")}),L.jsx(Yk,{})]}));

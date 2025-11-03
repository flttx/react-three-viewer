(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var ph={exports:{}},fa={},mh={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function ux(){if(Ym)return xt;Ym=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function _(D){return D===null||typeof D!="object"?null:(D=m&&D[m]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(D,K,ge){this.props=D,this.context=K,this.refs=E,this.updater=ge||y}S.prototype.isReactComponent={},S.prototype.setState=function(D,K){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,K,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function x(){}x.prototype=S.prototype;function L(D,K,ge){this.props=D,this.context=K,this.refs=E,this.updater=ge||y}var C=L.prototype=new x;C.constructor=L,M(C,S.prototype),C.isPureReactComponent=!0;var A=Array.isArray,O=Object.prototype.hasOwnProperty,I={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function B(D,K,ge){var $,se={},Se=null,fe=null;if(K!=null)for($ in K.ref!==void 0&&(fe=K.ref),K.key!==void 0&&(Se=""+K.key),K)O.call(K,$)&&!U.hasOwnProperty($)&&(se[$]=K[$]);var ve=arguments.length-2;if(ve===1)se.children=ge;else if(1<ve){for(var we=Array(ve),Ve=0;Ve<ve;Ve++)we[Ve]=arguments[Ve+2];se.children=we}if(D&&D.defaultProps)for($ in ve=D.defaultProps,ve)se[$]===void 0&&(se[$]=ve[$]);return{$$typeof:o,type:D,key:Se,ref:fe,props:se,_owner:I.current}}function P(D,K){return{$$typeof:o,type:D.type,key:K,ref:D.ref,props:D.props,_owner:D._owner}}function b(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function k(D){var K={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ge){return K[ge]})}var oe=/\/+/g;function J(D,K){return typeof D=="object"&&D!==null&&D.key!=null?k(""+D.key):K.toString(36)}function ue(D,K,ge,$,se){var Se=typeof D;(Se==="undefined"||Se==="boolean")&&(D=null);var fe=!1;if(D===null)fe=!0;else switch(Se){case"string":case"number":fe=!0;break;case"object":switch(D.$$typeof){case o:case e:fe=!0}}if(fe)return fe=D,se=se(fe),D=$===""?"."+J(fe,0):$,A(se)?(ge="",D!=null&&(ge=D.replace(oe,"$&/")+"/"),ue(se,K,ge,"",function(Ve){return Ve})):se!=null&&(b(se)&&(se=P(se,ge+(!se.key||fe&&fe.key===se.key?"":(""+se.key).replace(oe,"$&/")+"/")+D)),K.push(se)),1;if(fe=0,$=$===""?".":$+":",A(D))for(var ve=0;ve<D.length;ve++){Se=D[ve];var we=$+J(Se,ve);fe+=ue(Se,K,ge,we,se)}else if(we=_(D),typeof we=="function")for(D=we.call(D),ve=0;!(Se=D.next()).done;)Se=Se.value,we=$+J(Se,ve++),fe+=ue(Se,K,ge,we,se);else if(Se==="object")throw K=String(D),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return fe}function he(D,K,ge){if(D==null)return D;var $=[],se=0;return ue(D,$,"","",function(Se){return K.call(ge,Se,se++)}),$}function ie(D){if(D._status===-1){var K=D._result;K=K(),K.then(function(ge){(D._status===0||D._status===-1)&&(D._status=1,D._result=ge)},function(ge){(D._status===0||D._status===-1)&&(D._status=2,D._result=ge)}),D._status===-1&&(D._status=0,D._result=K)}if(D._status===1)return D._result.default;throw D._result}var le={current:null},V={transition:null},ce={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:V,ReactCurrentOwner:I};function z(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:he,forEach:function(D,K,ge){he(D,function(){K.apply(this,arguments)},ge)},count:function(D){var K=0;return he(D,function(){K++}),K},toArray:function(D){return he(D,function(K){return K})||[]},only:function(D){if(!b(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},xt.Component=S,xt.Fragment=t,xt.Profiler=s,xt.PureComponent=L,xt.StrictMode=i,xt.Suspense=f,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,xt.act=z,xt.cloneElement=function(D,K,ge){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var $=M({},D.props),se=D.key,Se=D.ref,fe=D._owner;if(K!=null){if(K.ref!==void 0&&(Se=K.ref,fe=I.current),K.key!==void 0&&(se=""+K.key),D.type&&D.type.defaultProps)var ve=D.type.defaultProps;for(we in K)O.call(K,we)&&!U.hasOwnProperty(we)&&($[we]=K[we]===void 0&&ve!==void 0?ve[we]:K[we])}var we=arguments.length-2;if(we===1)$.children=ge;else if(1<we){ve=Array(we);for(var Ve=0;Ve<we;Ve++)ve[Ve]=arguments[Ve+2];$.children=ve}return{$$typeof:o,type:D.type,key:se,ref:Se,props:$,_owner:fe}},xt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:a,_context:D},D.Consumer=D},xt.createElement=B,xt.createFactory=function(D){var K=B.bind(null,D);return K.type=D,K},xt.createRef=function(){return{current:null}},xt.forwardRef=function(D){return{$$typeof:c,render:D}},xt.isValidElement=b,xt.lazy=function(D){return{$$typeof:p,_payload:{_status:-1,_result:D},_init:ie}},xt.memo=function(D,K){return{$$typeof:d,type:D,compare:K===void 0?null:K}},xt.startTransition=function(D){var K=V.transition;V.transition={};try{D()}finally{V.transition=K}},xt.unstable_act=z,xt.useCallback=function(D,K){return le.current.useCallback(D,K)},xt.useContext=function(D){return le.current.useContext(D)},xt.useDebugValue=function(){},xt.useDeferredValue=function(D){return le.current.useDeferredValue(D)},xt.useEffect=function(D,K){return le.current.useEffect(D,K)},xt.useId=function(){return le.current.useId()},xt.useImperativeHandle=function(D,K,ge){return le.current.useImperativeHandle(D,K,ge)},xt.useInsertionEffect=function(D,K){return le.current.useInsertionEffect(D,K)},xt.useLayoutEffect=function(D,K){return le.current.useLayoutEffect(D,K)},xt.useMemo=function(D,K){return le.current.useMemo(D,K)},xt.useReducer=function(D,K,ge){return le.current.useReducer(D,K,ge)},xt.useRef=function(D){return le.current.useRef(D)},xt.useState=function(D){return le.current.useState(D)},xt.useSyncExternalStore=function(D,K,ge){return le.current.useSyncExternalStore(D,K,ge)},xt.useTransition=function(){return le.current.useTransition()},xt.version="18.3.1",xt}var qm;function td(){return qm||(qm=1,mh.exports=ux()),mh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function cx(){if(Km)return fa;Km=1;var o=td(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,f,d){var p,m={},_=null,y=null;d!==void 0&&(_=""+d),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)i.call(f,p)&&!a.hasOwnProperty(p)&&(m[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:c,key:_,ref:y,props:m,_owner:s.current}}return fa.Fragment=t,fa.jsx=u,fa.jsxs=u,fa}var $m;function hx(){return $m||($m=1,ph.exports=cx()),ph.exports}var gt=hx(),Qt=td(),Hl={},gh={exports:{}},qn={},_h={exports:{}},vh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function fx(){return Zm||(Zm=1,(function(o){function e(V,ce){var z=V.length;V.push(ce);e:for(;0<z;){var D=z-1>>>1,K=V[D];if(0<s(K,ce))V[D]=ce,V[z]=K,z=D;else break e}}function t(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var ce=V[0],z=V.pop();if(z!==ce){V[0]=z;e:for(var D=0,K=V.length,ge=K>>>1;D<ge;){var $=2*(D+1)-1,se=V[$],Se=$+1,fe=V[Se];if(0>s(se,z))Se<K&&0>s(fe,se)?(V[D]=fe,V[Se]=z,D=Se):(V[D]=se,V[$]=z,D=$);else if(Se<K&&0>s(fe,z))V[D]=fe,V[Se]=z,D=Se;else break e}}return ce}function s(V,ce){var z=V.sortIndex-ce.sortIndex;return z!==0?z:V.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var f=[],d=[],p=1,m=null,_=3,y=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(V){for(var ce=t(d);ce!==null;){if(ce.callback===null)i(d);else if(ce.startTime<=V)i(d),ce.sortIndex=ce.expirationTime,e(f,ce);else break;ce=t(d)}}function A(V){if(E=!1,C(V),!M)if(t(f)!==null)M=!0,ie(O);else{var ce=t(d);ce!==null&&le(A,ce.startTime-V)}}function O(V,ce){M=!1,E&&(E=!1,x(B),B=-1),y=!0;var z=_;try{for(C(ce),m=t(f);m!==null&&(!(m.expirationTime>ce)||V&&!k());){var D=m.callback;if(typeof D=="function"){m.callback=null,_=m.priorityLevel;var K=D(m.expirationTime<=ce);ce=o.unstable_now(),typeof K=="function"?m.callback=K:m===t(f)&&i(f),C(ce)}else i(f);m=t(f)}if(m!==null)var ge=!0;else{var $=t(d);$!==null&&le(A,$.startTime-ce),ge=!1}return ge}finally{m=null,_=z,y=!1}}var I=!1,U=null,B=-1,P=5,b=-1;function k(){return!(o.unstable_now()-b<P)}function oe(){if(U!==null){var V=o.unstable_now();b=V;var ce=!0;try{ce=U(!0,V)}finally{ce?J():(I=!1,U=null)}}else I=!1}var J;if(typeof L=="function")J=function(){L(oe)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=oe,J=function(){he.postMessage(null)}}else J=function(){S(oe,0)};function ie(V){U=V,I||(I=!0,J())}function le(V,ce){B=S(function(){V(o.unstable_now())},ce)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_continueExecution=function(){M||y||(M=!0,ie(O))},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(V){switch(_){case 1:case 2:case 3:var ce=3;break;default:ce=_}var z=_;_=ce;try{return V()}finally{_=z}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(V,ce){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var z=_;_=V;try{return ce()}finally{_=z}},o.unstable_scheduleCallback=function(V,ce,z){var D=o.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?D+z:D):z=D,V){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=z+K,V={id:p++,callback:ce,priorityLevel:V,startTime:z,expirationTime:K,sortIndex:-1},z>D?(V.sortIndex=z,e(d,V),t(f)===null&&V===t(d)&&(E?(x(B),B=-1):E=!0,le(A,z-D))):(V.sortIndex=K,e(f,V),M||y||(M=!0,ie(O))),V},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(V){var ce=_;return function(){var z=_;_=ce;try{return V.apply(this,arguments)}finally{_=z}}}})(vh)),vh}var Qm;function dx(){return Qm||(Qm=1,_h.exports=fx()),_h.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function px(){if(Jm)return qn;Jm=1;var o=td(),e=dx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function _(n){return f.call(m,n)?!0:f.call(p,n)?!1:d.test(n)?m[n]=!0:(p[n]=!0,!1)}function y(n,r,l,h){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,h){if(r===null||typeof r>"u"||y(n,r,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,h,g,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,L);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,L);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,L);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,r,l,h){var g=S.hasOwnProperty(r)?S[r]:null;(g!==null?g.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,g,h)&&(l=null),h||g===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):g.mustUseProperty?n[g.propertyName]=l===null?g.type===3?!1:"":l:(r=g.attributeName,h=g.attributeNamespace,l===null?n.removeAttribute(r):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,h?n.setAttributeNS(h,r,l):n.setAttribute(r,l))))}var A=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),I=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),k=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),V=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var z=Object.assign,D;function K(n){if(D===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var ge=!1;function $(n,r){if(!n||ge)return"";ge=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(te){var h=te}Reflect.construct(n,[],r)}else{try{r.call()}catch(te){h=te}n.call(r.prototype)}else{try{throw Error()}catch(te){h=te}n()}}catch(te){if(te&&h&&typeof te.stack=="string"){for(var g=te.stack.split(`
`),v=h.stack.split(`
`),T=g.length-1,F=v.length-1;1<=T&&0<=F&&g[T]!==v[F];)F--;for(;1<=T&&0<=F;T--,F--)if(g[T]!==v[F]){if(T!==1||F!==1)do if(T--,F--,0>F||g[T]!==v[F]){var H=`
`+g[T].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=T&&0<=F);break}}}finally{ge=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?K(n):""}function se(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=$(n.type,!1),n;case 11:return n=$(n.type.render,!1),n;case 1:return n=$(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case I:return"Portal";case P:return"Profiler";case B:return"StrictMode";case J:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case oe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:Se(n.type)||"Memo";case ie:r=n._payload,n=n._init;try{return Se(n(r))}catch{}}return null}function fe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function we(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ve(n){var r=we(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),h=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return g.call(this)},set:function(T){h=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function at(n){n._valueTracker||(n._valueTracker=Ve(n))}function Qe(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return n&&(h=we(n)?n.checked?"true":"false":n.value),n=h,n!==l?(r.setValue(n),!0):!1}function Et(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function G(n,r){var l=r.checked;return z({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Ht(n,r){var l=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;l=ve(r.value!=null?r.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ze(n,r){r=r.checked,r!=null&&C(n,"checked",r,!1)}function $e(n,r){Ze(n,r);var l=ve(r.value),h=r.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ht(n,r.type,l):r.hasOwnProperty("defaultValue")&&ht(n,r.type,ve(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Xe(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function ht(n,r,l){(r!=="number"||Et(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ne=Array.isArray;function N(n,r,l,h){if(n=n.options,r){r={};for(var g=0;g<l.length;g++)r["$"+l[g]]=!0;for(l=0;l<n.length;l++)g=r.hasOwnProperty("$"+n[l].value),n[l].selected!==g&&(n[l].selected=g),g&&h&&(n[l].defaultSelected=!0)}else{for(l=""+ve(l),r=null,g=0;g<n.length;g++){if(n[g].value===l){n[g].selected=!0,h&&(n[g].defaultSelected=!0);return}r!==null||n[g].disabled||(r=n[g])}r!==null&&(r.selected=!0)}}function w(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return z({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ee(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Ne(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:ve(l)}}function me(n,r){var l=ve(r.value),h=ve(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function xe(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function je(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?de(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Re,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,h,g){MSApp.execUnsafeLocalFunction(function(){return n(r,l,h,g)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function mt(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){Be.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Te[r]=Te[n]})});function et(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Te.hasOwnProperty(n)&&Te[n]?(""+r).trim():r+"px"}function it(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var h=l.indexOf("--")===0,g=et(l,r[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,g):n[l]=g}}var ze=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(n,r){if(r){if(ze[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function lt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dt=null;function Y(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,ae=null,pe=null;function De(n){if(n=Zo(n)){if(typeof be!="function")throw Error(t(280));var r=n.stateNode;r&&(r=il(r),be(n.stateNode,n.type,r))}}function Le(n){ae?pe?pe.push(n):pe=[n]:ae=n}function ut(){if(ae){var n=ae,r=pe;if(pe=ae=null,De(n),r)for(n=0;n<r.length;n++)De(r[n])}}function Bt(n,r){return n(r)}function rn(){}var At=!1;function Hn(n,r,l){if(At)return n(r,l);At=!0;try{return Bt(n,r,l)}finally{At=!1,(ae!==null||pe!==null)&&(rn(),ut())}}function Pn(n,r){var l=n.stateNode;if(l===null)return null;var h=il(l);if(h===null)return null;l=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ts=!1;if(c)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{Ts=!1}function ji(n,r,l,h,g,v,T,F,H){var te=Array.prototype.slice.call(arguments,3);try{r.apply(l,te)}catch(ye){this.onError(ye)}}var Yi=!1,Kr=null,$r=!1,mr=null,Fa={onError:function(n){Yi=!0,Kr=n}};function ws(n,r,l,h,g,v,T,F,H){Yi=!1,Kr=null,ji.apply(Fa,arguments)}function Oa(n,r,l,h,g,v,T,F,H){if(ws.apply(this,arguments),Yi){if(Yi){var te=Kr;Yi=!1,Kr=null}else throw Error(t(198));$r||($r=!0,mr=te)}}function Di(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ka(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ba(n){if(Di(n)!==n)throw Error(t(188))}function Ou(n){var r=n.alternate;if(!r){if(r=Di(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,h=r;;){var g=l.return;if(g===null)break;var v=g.alternate;if(v===null){if(h=g.return,h!==null){l=h;continue}break}if(g.child===v.child){for(v=g.child;v;){if(v===l)return Ba(g),n;if(v===h)return Ba(g),r;v=v.sibling}throw Error(t(188))}if(l.return!==h.return)l=g,h=v;else{for(var T=!1,F=g.child;F;){if(F===l){T=!0,l=g,h=v;break}if(F===h){T=!0,h=g,l=v;break}F=F.sibling}if(!T){for(F=v.child;F;){if(F===l){T=!0,l=v,h=g;break}if(F===h){T=!0,h=v,l=g;break}F=F.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function za(n){return n=Ou(n),n!==null?Va(n):null}function Va(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Va(n);if(r!==null)return r;n=n.sibling}return null}var R=e.unstable_scheduleCallback,q=e.unstable_cancelCallback,ne=e.unstable_shouldYield,re=e.unstable_requestPaint,X=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,Ue=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,rt=e.unstable_LowPriority,st=e.unstable_IdlePriority,Ke=null,ct=null;function bt(n){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Je,Gt=Math.log,Tt=Math.LN2;function Je(n){return n>>>=0,n===0?32:31-(Gt(n)/Tt|0)|0}var qt=64,Mt=4194304;function _n(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function gi(n,r){var l=n.pendingLanes;if(l===0)return 0;var h=0,g=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var F=T&~g;F!==0?h=_n(F):(v&=T,v!==0&&(h=_n(v)))}else T=l&~g,T!==0?h=_n(T):v!==0&&(h=_n(v));if(h===0)return 0;if(r!==0&&r!==h&&(r&g)===0&&(g=h&-h,v=r&-r,g>=v||g===16&&(v&4194240)!==0))return r;if((h&4)!==0&&(h|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=h;0<r;)l=31-Ct(r),g=1<<l,h|=n[l],r&=~g;return h}function Ln(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zr(n,r){for(var l=n.suspendedLanes,h=n.pingedLanes,g=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-Ct(v),F=1<<T,H=g[T];H===-1?((F&l)===0||(F&h)!==0)&&(g[T]=Ln(F,r)):H<=r&&(n.expiredLanes|=F),v&=~F}}function Ut(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dn(){var n=qt;return qt<<=1,(qt&4194240)===0&&(qt=64),n}function yn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function $t(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ct(r),n[r]=l}function Sn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var g=31-Ct(l),v=1<<g;r[g]=0,h[g]=-1,n[g]=-1,l&=~v}}function Qr(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var h=31-Ct(l),g=1<<h;g&r|n[h]&r&&(n[h]|=r),l&=~g}}var yt=0;function wd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ad,ku,Rd,bd,Cd,Bu=!1,Ha=[],gr=null,_r=null,vr=null,Uo=new Map,Fo=new Map,xr=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pd(n,r){switch(n){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Uo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(r.pointerId)}}function Oo(n,r,l,h,g,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[g]},r!==null&&(r=Zo(r),r!==null&&ku(r)),n):(n.eventSystemFlags|=h,r=n.targetContainers,g!==null&&r.indexOf(g)===-1&&r.push(g),n)}function Dv(n,r,l,h,g){switch(r){case"focusin":return gr=Oo(gr,n,r,l,h,g),!0;case"dragenter":return _r=Oo(_r,n,r,l,h,g),!0;case"mouseover":return vr=Oo(vr,n,r,l,h,g),!0;case"pointerover":var v=g.pointerId;return Uo.set(v,Oo(Uo.get(v)||null,n,r,l,h,g)),!0;case"gotpointercapture":return v=g.pointerId,Fo.set(v,Oo(Fo.get(v)||null,n,r,l,h,g)),!0}return!1}function Ld(n){var r=Jr(n.target);if(r!==null){var l=Di(r);if(l!==null){if(r=l.tag,r===13){if(r=ka(l),r!==null){n.blockedOn=r,Cd(n.priority,function(){Rd(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ga(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Vu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);Dt=h,l.target.dispatchEvent(h),Dt=null}else return r=Zo(l),r!==null&&ku(r),n.blockedOn=l,!1;r.shift()}return!0}function Dd(n,r,l){Ga(n)&&l.delete(r)}function Iv(){Bu=!1,gr!==null&&Ga(gr)&&(gr=null),_r!==null&&Ga(_r)&&(_r=null),vr!==null&&Ga(vr)&&(vr=null),Uo.forEach(Dd),Fo.forEach(Dd)}function ko(n,r){n.blockedOn===r&&(n.blockedOn=null,Bu||(Bu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Iv)))}function Bo(n){function r(g){return ko(g,n)}if(0<Ha.length){ko(Ha[0],n);for(var l=1;l<Ha.length;l++){var h=Ha[l];h.blockedOn===n&&(h.blockedOn=null)}}for(gr!==null&&ko(gr,n),_r!==null&&ko(_r,n),vr!==null&&ko(vr,n),Uo.forEach(r),Fo.forEach(r),l=0;l<xr.length;l++)h=xr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<xr.length&&(l=xr[0],l.blockedOn===null);)Ld(l),l.blockedOn===null&&xr.shift()}var As=A.ReactCurrentBatchConfig,Wa=!0;function Nv(n,r,l,h){var g=yt,v=As.transition;As.transition=null;try{yt=1,zu(n,r,l,h)}finally{yt=g,As.transition=v}}function Uv(n,r,l,h){var g=yt,v=As.transition;As.transition=null;try{yt=4,zu(n,r,l,h)}finally{yt=g,As.transition=v}}function zu(n,r,l,h){if(Wa){var g=Vu(n,r,l,h);if(g===null)rc(n,r,h,Xa,l),Pd(n,h);else if(Dv(g,n,r,l,h))h.stopPropagation();else if(Pd(n,h),r&4&&-1<Lv.indexOf(n)){for(;g!==null;){var v=Zo(g);if(v!==null&&Ad(v),v=Vu(n,r,l,h),v===null&&rc(n,r,h,Xa,l),v===g)break;g=v}g!==null&&h.stopPropagation()}else rc(n,r,h,null,l)}}var Xa=null;function Vu(n,r,l,h){if(Xa=null,n=Y(h),n=Jr(n),n!==null)if(r=Di(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ka(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Xa=n,null}function Id(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Ce:return 1;case Ue:return 4;case Oe:case rt:return 16;case st:return 536870912;default:return 16}default:return 16}}var yr=null,Hu=null,ja=null;function Nd(){if(ja)return ja;var n,r=Hu,l=r.length,h,g="value"in yr?yr.value:yr.textContent,v=g.length;for(n=0;n<l&&r[n]===g[n];n++);var T=l-n;for(h=1;h<=T&&r[l-h]===g[v-h];h++);return ja=g.slice(n,1<h?1-h:void 0)}function Ya(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function qa(){return!0}function Ud(){return!1}function $n(n){function r(l,h,g,v,T){this._reactName=l,this._targetInst=g,this.type=h,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(l=n[F],this[F]=l?l(v):v[F]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?qa:Ud,this.isPropagationStopped=Ud,this}return z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),r}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gu=$n(Rs),zo=z({},Rs,{view:0,detail:0}),Fv=$n(zo),Wu,Xu,Vo,Ka=z({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Vo&&(Vo&&n.type==="mousemove"?(Wu=n.screenX-Vo.screenX,Xu=n.screenY-Vo.screenY):Xu=Wu=0,Vo=n),Wu)},movementY:function(n){return"movementY"in n?n.movementY:Xu}}),Fd=$n(Ka),Ov=z({},Ka,{dataTransfer:0}),kv=$n(Ov),Bv=z({},zo,{relatedTarget:0}),ju=$n(Bv),zv=z({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=$n(zv),Hv=z({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gv=$n(Hv),Wv=z({},Rs,{data:0}),Od=$n(Wv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Yv[n])?!!r[n]:!1}function Yu(){return qv}var Kv=z({},zo,{key:function(n){if(n.key){var r=Xv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ya(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(n){return n.type==="keypress"?Ya(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ya(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$v=$n(Kv),Zv=z({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=$n(Zv),Qv=z({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),Jv=$n(Qv),e0=z({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),t0=$n(e0),n0=z({},Ka,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),i0=$n(n0),r0=[9,13,27,32],qu=c&&"CompositionEvent"in window,Ho=null;c&&"documentMode"in document&&(Ho=document.documentMode);var s0=c&&"TextEvent"in window&&!Ho,Bd=c&&(!qu||Ho&&8<Ho&&11>=Ho),zd=" ",Vd=!1;function Hd(n,r){switch(n){case"keyup":return r0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function o0(n,r){switch(n){case"compositionend":return Gd(r);case"keypress":return r.which!==32?null:(Vd=!0,zd);case"textInput":return n=r.data,n===zd&&Vd?null:n;default:return null}}function a0(n,r){if(bs)return n==="compositionend"||!qu&&Hd(n,r)?(n=Nd(),ja=Hu=yr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Bd&&r.locale!=="ko"?null:r.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!l0[n.type]:r==="textarea"}function Xd(n,r,l,h){Le(h),r=el(r,"onChange"),0<r.length&&(l=new Gu("onChange","change",null,l,h),n.push({event:l,listeners:r}))}var Go=null,Wo=null;function u0(n){up(n,0)}function $a(n){var r=Is(n);if(Qe(r))return n}function c0(n,r){if(n==="change")return r}var jd=!1;if(c){var Ku;if(c){var $u="oninput"in document;if(!$u){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),$u=typeof Yd.oninput=="function"}Ku=$u}else Ku=!1;jd=Ku&&(!document.documentMode||9<document.documentMode)}function qd(){Go&&(Go.detachEvent("onpropertychange",Kd),Wo=Go=null)}function Kd(n){if(n.propertyName==="value"&&$a(Wo)){var r=[];Xd(r,Wo,n,Y(n)),Hn(u0,r)}}function h0(n,r,l){n==="focusin"?(qd(),Go=r,Wo=l,Go.attachEvent("onpropertychange",Kd)):n==="focusout"&&qd()}function f0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $a(Wo)}function d0(n,r){if(n==="click")return $a(r)}function p0(n,r){if(n==="input"||n==="change")return $a(r)}function m0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var _i=typeof Object.is=="function"?Object.is:m0;function Xo(n,r){if(_i(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var g=l[h];if(!f.call(r,g)||!_i(n[g],r[g]))return!1}return!0}function $d(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zd(n,r){var l=$d(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=r&&h>=r)return{node:l,offset:r-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=$d(l)}}function Qd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Qd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Jd(){for(var n=window,r=Et();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Et(n.document)}return r}function Zu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function g0(n){var r=Jd(),l=n.focusedElem,h=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Qd(l.ownerDocument.documentElement,l)){if(h!==null&&Zu(l)){if(r=h.start,n=h.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var g=l.textContent.length,v=Math.min(h.start,g);h=h.end===void 0?v:Math.min(h.end,g),!n.extend&&v>h&&(g=h,h=v,v=g),g=Zd(l,v);var T=Zd(l,h);g&&T&&(n.rangeCount!==1||n.anchorNode!==g.node||n.anchorOffset!==g.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(g.node,g.offset),n.removeAllRanges(),v>h?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _0=c&&"documentMode"in document&&11>=document.documentMode,Cs=null,Qu=null,jo=null,Ju=!1;function ep(n,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ju||Cs==null||Cs!==Et(h)||(h=Cs,"selectionStart"in h&&Zu(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),jo&&Xo(jo,h)||(jo=h,h=el(Qu,"onSelect"),0<h.length&&(r=new Gu("onSelect","select",null,r,l),n.push({event:r,listeners:h}),r.target=Cs)))}function Za(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ps={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},ec={},tp={};c&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Qa(n){if(ec[n])return ec[n];if(!Ps[n])return n;var r=Ps[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in tp)return ec[n]=r[l];return n}var np=Qa("animationend"),ip=Qa("animationiteration"),rp=Qa("animationstart"),sp=Qa("transitionend"),op=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,r){op.set(n,r),a(r,[n])}for(var tc=0;tc<ap.length;tc++){var nc=ap[tc],v0=nc.toLowerCase(),x0=nc[0].toUpperCase()+nc.slice(1);Sr(v0,"on"+x0)}Sr(np,"onAnimationEnd"),Sr(ip,"onAnimationIteration"),Sr(rp,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(sp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function lp(n,r,l){var h=n.type||"unknown-event";n.currentTarget=l,Oa(h,r,void 0,n),n.currentTarget=null}function up(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],g=h.event;h=h.listeners;e:{var v=void 0;if(r)for(var T=h.length-1;0<=T;T--){var F=h[T],H=F.instance,te=F.currentTarget;if(F=F.listener,H!==v&&g.isPropagationStopped())break e;lp(g,F,te),v=H}else for(T=0;T<h.length;T++){if(F=h[T],H=F.instance,te=F.currentTarget,F=F.listener,H!==v&&g.isPropagationStopped())break e;lp(g,F,te),v=H}}}if($r)throw n=mr,$r=!1,mr=null,n}function zt(n,r){var l=r[cc];l===void 0&&(l=r[cc]=new Set);var h=n+"__bubble";l.has(h)||(cp(r,n,2,!1),l.add(h))}function ic(n,r,l){var h=0;r&&(h|=4),cp(l,n,h,r)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function qo(n){if(!n[Ja]){n[Ja]=!0,i.forEach(function(l){l!=="selectionchange"&&(y0.has(l)||ic(l,!1,n),ic(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ja]||(r[Ja]=!0,ic("selectionchange",!1,r))}}function cp(n,r,l,h){switch(Id(r)){case 1:var g=Nv;break;case 4:g=Uv;break;default:g=zu}l=g.bind(null,r,l,n),g=void 0,!Ts||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(g=!0),h?g!==void 0?n.addEventListener(r,l,{capture:!0,passive:g}):n.addEventListener(r,l,!0):g!==void 0?n.addEventListener(r,l,{passive:g}):n.addEventListener(r,l,!1)}function rc(n,r,l,h,g){var v=h;if((r&1)===0&&(r&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var F=h.stateNode.containerInfo;if(F===g||F.nodeType===8&&F.parentNode===g)break;if(T===4)for(T=h.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===g||H.nodeType===8&&H.parentNode===g))return;T=T.return}for(;F!==null;){if(T=Jr(F),T===null)return;if(H=T.tag,H===5||H===6){h=v=T;continue e}F=F.parentNode}}h=h.return}Hn(function(){var te=v,ye=Y(l),Me=[];e:{var _e=op.get(n);if(_e!==void 0){var Ie=Gu,He=n;switch(n){case"keypress":if(Ya(l)===0)break e;case"keydown":case"keyup":Ie=$v;break;case"focusin":He="focus",Ie=ju;break;case"focusout":He="blur",Ie=ju;break;case"beforeblur":case"afterblur":Ie=ju;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Jv;break;case np:case ip:case rp:Ie=Vv;break;case sp:Ie=t0;break;case"scroll":Ie=Fv;break;case"wheel":Ie=i0;break;case"copy":case"cut":case"paste":Ie=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=kd}var Ge=(r&4)!==0,Zt=!Ge&&n==="scroll",Z=Ge?_e!==null?_e+"Capture":null:_e;Ge=[];for(var j=te,Q;j!==null;){Q=j;var Ae=Q.stateNode;if(Q.tag===5&&Ae!==null&&(Q=Ae,Z!==null&&(Ae=Pn(j,Z),Ae!=null&&Ge.push(Ko(j,Ae,Q)))),Zt)break;j=j.return}0<Ge.length&&(_e=new Ie(_e,He,null,l,ye),Me.push({event:_e,listeners:Ge}))}}if((r&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",_e&&l!==Dt&&(He=l.relatedTarget||l.fromElement)&&(Jr(He)||He[qi]))break e;if((Ie||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ie?(He=l.relatedTarget||l.toElement,Ie=te,He=He?Jr(He):null,He!==null&&(Zt=Di(He),He!==Zt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ie=null,He=te),Ie!==He)){if(Ge=Fd,Ae="onMouseLeave",Z="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=kd,Ae="onPointerLeave",Z="onPointerEnter",j="pointer"),Zt=Ie==null?_e:Is(Ie),Q=He==null?_e:Is(He),_e=new Ge(Ae,j+"leave",Ie,l,ye),_e.target=Zt,_e.relatedTarget=Q,Ae=null,Jr(ye)===te&&(Ge=new Ge(Z,j+"enter",He,l,ye),Ge.target=Q,Ge.relatedTarget=Zt,Ae=Ge),Zt=Ae,Ie&&He)t:{for(Ge=Ie,Z=He,j=0,Q=Ge;Q;Q=Ls(Q))j++;for(Q=0,Ae=Z;Ae;Ae=Ls(Ae))Q++;for(;0<j-Q;)Ge=Ls(Ge),j--;for(;0<Q-j;)Z=Ls(Z),Q--;for(;j--;){if(Ge===Z||Z!==null&&Ge===Z.alternate)break t;Ge=Ls(Ge),Z=Ls(Z)}Ge=null}else Ge=null;Ie!==null&&hp(Me,_e,Ie,Ge,!1),He!==null&&Zt!==null&&hp(Me,Zt,He,Ge,!0)}}e:{if(_e=te?Is(te):window,Ie=_e.nodeName&&_e.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&_e.type==="file")var Ye=c0;else if(Wd(_e))if(jd)Ye=p0;else{Ye=f0;var tt=h0}else(Ie=_e.nodeName)&&Ie.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ye=d0);if(Ye&&(Ye=Ye(n,te))){Xd(Me,Ye,l,ye);break e}tt&&tt(n,_e,te),n==="focusout"&&(tt=_e._wrapperState)&&tt.controlled&&_e.type==="number"&&ht(_e,"number",_e.value)}switch(tt=te?Is(te):window,n){case"focusin":(Wd(tt)||tt.contentEditable==="true")&&(Cs=tt,Qu=te,jo=null);break;case"focusout":jo=Qu=Cs=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,ep(Me,l,ye);break;case"selectionchange":if(_0)break;case"keydown":case"keyup":ep(Me,l,ye)}var nt;if(qu)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else bs?Hd(n,l)&&(ot="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(Bd&&l.locale!=="ko"&&(bs||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&bs&&(nt=Nd()):(yr=ye,Hu="value"in yr?yr.value:yr.textContent,bs=!0)),tt=el(te,ot),0<tt.length&&(ot=new Od(ot,n,null,l,ye),Me.push({event:ot,listeners:tt}),nt?ot.data=nt:(nt=Gd(l),nt!==null&&(ot.data=nt)))),(nt=s0?o0(n,l):a0(n,l))&&(te=el(te,"onBeforeInput"),0<te.length&&(ye=new Od("onBeforeInput","beforeinput",null,l,ye),Me.push({event:ye,listeners:te}),ye.data=nt))}up(Me,r)})}function Ko(n,r,l){return{instance:n,listener:r,currentTarget:l}}function el(n,r){for(var l=r+"Capture",h=[];n!==null;){var g=n,v=g.stateNode;g.tag===5&&v!==null&&(g=v,v=Pn(n,l),v!=null&&h.unshift(Ko(n,v,g)),v=Pn(n,r),v!=null&&h.push(Ko(n,v,g))),n=n.return}return h}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hp(n,r,l,h,g){for(var v=r._reactName,T=[];l!==null&&l!==h;){var F=l,H=F.alternate,te=F.stateNode;if(H!==null&&H===h)break;F.tag===5&&te!==null&&(F=te,g?(H=Pn(l,v),H!=null&&T.unshift(Ko(l,H,F))):g||(H=Pn(l,v),H!=null&&T.push(Ko(l,H,F)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var S0=/\r\n?/g,M0=/\u0000|\uFFFD/g;function fp(n){return(typeof n=="string"?n:""+n).replace(S0,`
`).replace(M0,"")}function tl(n,r,l){if(r=fp(r),fp(n)!==r&&l)throw Error(t(425))}function nl(){}var sc=null,oc=null;function ac(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var lc=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,T0=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(n){return dp.resolve(null).then(n).catch(w0)}:lc;function w0(n){setTimeout(function(){throw n})}function uc(n,r){var l=r,h=0;do{var g=l.nextSibling;if(n.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(h===0){n.removeChild(g),Bo(r);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=g}while(l);Bo(r)}function Mr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function pp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Ii="__reactFiber$"+Ds,$o="__reactProps$"+Ds,qi="__reactContainer$"+Ds,cc="__reactEvents$"+Ds,A0="__reactListeners$"+Ds,R0="__reactHandles$"+Ds;function Jr(n){var r=n[Ii];if(r)return r;for(var l=n.parentNode;l;){if(r=l[qi]||l[Ii]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=pp(n);n!==null;){if(l=n[Ii])return l;n=pp(n)}return r}n=l,l=n.parentNode}return null}function Zo(n){return n=n[Ii]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function il(n){return n[$o]||null}var hc=[],Ns=-1;function Er(n){return{current:n}}function Vt(n){0>Ns||(n.current=hc[Ns],hc[Ns]=null,Ns--)}function kt(n,r){Ns++,hc[Ns]=n.current,n.current=r}var Tr={},Mn=Er(Tr),Gn=Er(!1),es=Tr;function Us(n,r){var l=n.type.contextTypes;if(!l)return Tr;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var g={},v;for(v in l)g[v]=r[v];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=g),g}function Wn(n){return n=n.childContextTypes,n!=null}function rl(){Vt(Gn),Vt(Mn)}function mp(n,r,l){if(Mn.current!==Tr)throw Error(t(168));kt(Mn,r),kt(Gn,l)}function gp(n,r,l){var h=n.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var g in h)if(!(g in r))throw Error(t(108,fe(n)||"Unknown",g));return z({},l,h)}function sl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Tr,es=Mn.current,kt(Mn,n),kt(Gn,Gn.current),!0}function _p(n,r,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=gp(n,r,es),h.__reactInternalMemoizedMergedChildContext=n,Vt(Gn),Vt(Mn),kt(Mn,n)):Vt(Gn),kt(Gn,l)}var Ki=null,ol=!1,fc=!1;function vp(n){Ki===null?Ki=[n]:Ki.push(n)}function b0(n){ol=!0,vp(n)}function wr(){if(!fc&&Ki!==null){fc=!0;var n=0,r=yt;try{var l=Ki;for(yt=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}Ki=null,ol=!1}catch(g){throw Ki!==null&&(Ki=Ki.slice(n+1)),R(Ce,wr),g}finally{yt=r,fc=!1}}return null}var Fs=[],Os=0,al=null,ll=0,ri=[],si=0,ts=null,$i=1,Zi="";function ns(n,r){Fs[Os++]=ll,Fs[Os++]=al,al=n,ll=r}function xp(n,r,l){ri[si++]=$i,ri[si++]=Zi,ri[si++]=ts,ts=n;var h=$i;n=Zi;var g=32-Ct(h)-1;h&=~(1<<g),l+=1;var v=32-Ct(r)+g;if(30<v){var T=g-g%5;v=(h&(1<<T)-1).toString(32),h>>=T,g-=T,$i=1<<32-Ct(r)+g|l<<g|h,Zi=v+n}else $i=1<<v|l<<g|h,Zi=n}function dc(n){n.return!==null&&(ns(n,1),xp(n,1,0))}function pc(n){for(;n===al;)al=Fs[--Os],Fs[Os]=null,ll=Fs[--Os],Fs[Os]=null;for(;n===ts;)ts=ri[--si],ri[si]=null,Zi=ri[--si],ri[si]=null,$i=ri[--si],ri[si]=null}var Zn=null,Qn=null,Wt=!1,vi=null;function yp(n,r){var l=ui(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Sp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Zn=n,Qn=Mr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Zn=n,Qn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ts!==null?{id:$i,overflow:Zi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ui(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Zn=n,Qn=null,!0):!1;default:return!1}}function mc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function gc(n){if(Wt){var r=Qn;if(r){var l=r;if(!Sp(n,r)){if(mc(n))throw Error(t(418));r=Mr(l.nextSibling);var h=Zn;r&&Sp(n,r)?yp(h,l):(n.flags=n.flags&-4097|2,Wt=!1,Zn=n)}}else{if(mc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,Zn=n}}}function Mp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zn=n}function ul(n){if(n!==Zn)return!1;if(!Wt)return Mp(n),Wt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!ac(n.type,n.memoizedProps)),r&&(r=Qn)){if(mc(n))throw Ep(),Error(t(418));for(;r;)yp(n,r),r=Mr(r.nextSibling)}if(Mp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Qn=Mr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Qn=null}}else Qn=Zn?Mr(n.stateNode.nextSibling):null;return!0}function Ep(){for(var n=Qn;n;)n=Mr(n.nextSibling)}function ks(){Qn=Zn=null,Wt=!1}function _c(n){vi===null?vi=[n]:vi.push(n)}var C0=A.ReactCurrentBatchConfig;function Qo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var g=h,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var F=g.refs;T===null?delete F[v]:F[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function cl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Tp(n){var r=n._init;return r(n._payload)}function wp(n){function r(Z,j){if(n){var Q=Z.deletions;Q===null?(Z.deletions=[j],Z.flags|=16):Q.push(j)}}function l(Z,j){if(!n)return null;for(;j!==null;)r(Z,j),j=j.sibling;return null}function h(Z,j){for(Z=new Map;j!==null;)j.key!==null?Z.set(j.key,j):Z.set(j.index,j),j=j.sibling;return Z}function g(Z,j){return Z=Ir(Z,j),Z.index=0,Z.sibling=null,Z}function v(Z,j,Q){return Z.index=Q,n?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<j?(Z.flags|=2,j):Q):(Z.flags|=2,j)):(Z.flags|=1048576,j)}function T(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function F(Z,j,Q,Ae){return j===null||j.tag!==6?(j=lh(Q,Z.mode,Ae),j.return=Z,j):(j=g(j,Q),j.return=Z,j)}function H(Z,j,Q,Ae){var Ye=Q.type;return Ye===U?ye(Z,j,Q.props.children,Ae,Q.key):j!==null&&(j.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ie&&Tp(Ye)===j.type)?(Ae=g(j,Q.props),Ae.ref=Qo(Z,j,Q),Ae.return=Z,Ae):(Ae=Nl(Q.type,Q.key,Q.props,null,Z.mode,Ae),Ae.ref=Qo(Z,j,Q),Ae.return=Z,Ae)}function te(Z,j,Q,Ae){return j===null||j.tag!==4||j.stateNode.containerInfo!==Q.containerInfo||j.stateNode.implementation!==Q.implementation?(j=uh(Q,Z.mode,Ae),j.return=Z,j):(j=g(j,Q.children||[]),j.return=Z,j)}function ye(Z,j,Q,Ae,Ye){return j===null||j.tag!==7?(j=cs(Q,Z.mode,Ae,Ye),j.return=Z,j):(j=g(j,Q),j.return=Z,j)}function Me(Z,j,Q){if(typeof j=="string"&&j!==""||typeof j=="number")return j=lh(""+j,Z.mode,Q),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case O:return Q=Nl(j.type,j.key,j.props,null,Z.mode,Q),Q.ref=Qo(Z,null,j),Q.return=Z,Q;case I:return j=uh(j,Z.mode,Q),j.return=Z,j;case ie:var Ae=j._init;return Me(Z,Ae(j._payload),Q)}if(Ne(j)||ce(j))return j=cs(j,Z.mode,Q,null),j.return=Z,j;cl(Z,j)}return null}function _e(Z,j,Q,Ae){var Ye=j!==null?j.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ye!==null?null:F(Z,j,""+Q,Ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case O:return Q.key===Ye?H(Z,j,Q,Ae):null;case I:return Q.key===Ye?te(Z,j,Q,Ae):null;case ie:return Ye=Q._init,_e(Z,j,Ye(Q._payload),Ae)}if(Ne(Q)||ce(Q))return Ye!==null?null:ye(Z,j,Q,Ae,null);cl(Z,Q)}return null}function Ie(Z,j,Q,Ae,Ye){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return Z=Z.get(Q)||null,F(j,Z,""+Ae,Ye);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case O:return Z=Z.get(Ae.key===null?Q:Ae.key)||null,H(j,Z,Ae,Ye);case I:return Z=Z.get(Ae.key===null?Q:Ae.key)||null,te(j,Z,Ae,Ye);case ie:var tt=Ae._init;return Ie(Z,j,Q,tt(Ae._payload),Ye)}if(Ne(Ae)||ce(Ae))return Z=Z.get(Q)||null,ye(j,Z,Ae,Ye,null);cl(j,Ae)}return null}function He(Z,j,Q,Ae){for(var Ye=null,tt=null,nt=j,ot=j=0,fn=null;nt!==null&&ot<Q.length;ot++){nt.index>ot?(fn=nt,nt=null):fn=nt.sibling;var Pt=_e(Z,nt,Q[ot],Ae);if(Pt===null){nt===null&&(nt=fn);break}n&&nt&&Pt.alternate===null&&r(Z,nt),j=v(Pt,j,ot),tt===null?Ye=Pt:tt.sibling=Pt,tt=Pt,nt=fn}if(ot===Q.length)return l(Z,nt),Wt&&ns(Z,ot),Ye;if(nt===null){for(;ot<Q.length;ot++)nt=Me(Z,Q[ot],Ae),nt!==null&&(j=v(nt,j,ot),tt===null?Ye=nt:tt.sibling=nt,tt=nt);return Wt&&ns(Z,ot),Ye}for(nt=h(Z,nt);ot<Q.length;ot++)fn=Ie(nt,Z,ot,Q[ot],Ae),fn!==null&&(n&&fn.alternate!==null&&nt.delete(fn.key===null?ot:fn.key),j=v(fn,j,ot),tt===null?Ye=fn:tt.sibling=fn,tt=fn);return n&&nt.forEach(function(Nr){return r(Z,Nr)}),Wt&&ns(Z,ot),Ye}function Ge(Z,j,Q,Ae){var Ye=ce(Q);if(typeof Ye!="function")throw Error(t(150));if(Q=Ye.call(Q),Q==null)throw Error(t(151));for(var tt=Ye=null,nt=j,ot=j=0,fn=null,Pt=Q.next();nt!==null&&!Pt.done;ot++,Pt=Q.next()){nt.index>ot?(fn=nt,nt=null):fn=nt.sibling;var Nr=_e(Z,nt,Pt.value,Ae);if(Nr===null){nt===null&&(nt=fn);break}n&&nt&&Nr.alternate===null&&r(Z,nt),j=v(Nr,j,ot),tt===null?Ye=Nr:tt.sibling=Nr,tt=Nr,nt=fn}if(Pt.done)return l(Z,nt),Wt&&ns(Z,ot),Ye;if(nt===null){for(;!Pt.done;ot++,Pt=Q.next())Pt=Me(Z,Pt.value,Ae),Pt!==null&&(j=v(Pt,j,ot),tt===null?Ye=Pt:tt.sibling=Pt,tt=Pt);return Wt&&ns(Z,ot),Ye}for(nt=h(Z,nt);!Pt.done;ot++,Pt=Q.next())Pt=Ie(nt,Z,ot,Pt.value,Ae),Pt!==null&&(n&&Pt.alternate!==null&&nt.delete(Pt.key===null?ot:Pt.key),j=v(Pt,j,ot),tt===null?Ye=Pt:tt.sibling=Pt,tt=Pt);return n&&nt.forEach(function(lx){return r(Z,lx)}),Wt&&ns(Z,ot),Ye}function Zt(Z,j,Q,Ae){if(typeof Q=="object"&&Q!==null&&Q.type===U&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case O:e:{for(var Ye=Q.key,tt=j;tt!==null;){if(tt.key===Ye){if(Ye=Q.type,Ye===U){if(tt.tag===7){l(Z,tt.sibling),j=g(tt,Q.props.children),j.return=Z,Z=j;break e}}else if(tt.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ie&&Tp(Ye)===tt.type){l(Z,tt.sibling),j=g(tt,Q.props),j.ref=Qo(Z,tt,Q),j.return=Z,Z=j;break e}l(Z,tt);break}else r(Z,tt);tt=tt.sibling}Q.type===U?(j=cs(Q.props.children,Z.mode,Ae,Q.key),j.return=Z,Z=j):(Ae=Nl(Q.type,Q.key,Q.props,null,Z.mode,Ae),Ae.ref=Qo(Z,j,Q),Ae.return=Z,Z=Ae)}return T(Z);case I:e:{for(tt=Q.key;j!==null;){if(j.key===tt)if(j.tag===4&&j.stateNode.containerInfo===Q.containerInfo&&j.stateNode.implementation===Q.implementation){l(Z,j.sibling),j=g(j,Q.children||[]),j.return=Z,Z=j;break e}else{l(Z,j);break}else r(Z,j);j=j.sibling}j=uh(Q,Z.mode,Ae),j.return=Z,Z=j}return T(Z);case ie:return tt=Q._init,Zt(Z,j,tt(Q._payload),Ae)}if(Ne(Q))return He(Z,j,Q,Ae);if(ce(Q))return Ge(Z,j,Q,Ae);cl(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,j!==null&&j.tag===6?(l(Z,j.sibling),j=g(j,Q),j.return=Z,Z=j):(l(Z,j),j=lh(Q,Z.mode,Ae),j.return=Z,Z=j),T(Z)):l(Z,j)}return Zt}var Bs=wp(!0),Ap=wp(!1),hl=Er(null),fl=null,zs=null,vc=null;function xc(){vc=zs=fl=null}function yc(n){var r=hl.current;Vt(hl),n._currentValue=r}function Sc(n,r,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),n===l)break;n=n.return}}function Vs(n,r){fl=n,vc=zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Xn=!0),n.firstContext=null)}function oi(n){var r=n._currentValue;if(vc!==n)if(n={context:n,memoizedValue:r,next:null},zs===null){if(fl===null)throw Error(t(308));zs=n,fl.dependencies={lanes:0,firstContext:n}}else zs=zs.next=n;return r}var is=null;function Mc(n){is===null?is=[n]:is.push(n)}function Rp(n,r,l,h){var g=r.interleaved;return g===null?(l.next=l,Mc(r)):(l.next=g.next,g.next=l),r.interleaved=l,Qi(n,h)}function Qi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Ar=!1;function Ec(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ji(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Rr(n,r,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,(Rt&2)!==0){var g=h.pending;return g===null?r.next=r:(r.next=g.next,g.next=r),h.pending=r,Qi(n,l)}return g=h.interleaved,g===null?(r.next=r,Mc(h)):(r.next=g.next,g.next=r),h.interleaved=r,Qi(n,l)}function dl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Qr(n,l)}}function Cp(n,r){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var g=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?g=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?g=v=r:v=v.next=r}else g=v=r;l={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:v,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function pl(n,r,l,h){var g=n.updateQueue;Ar=!1;var v=g.firstBaseUpdate,T=g.lastBaseUpdate,F=g.shared.pending;if(F!==null){g.shared.pending=null;var H=F,te=H.next;H.next=null,T===null?v=te:T.next=te,T=H;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==T&&(F===null?ye.firstBaseUpdate=te:F.next=te,ye.lastBaseUpdate=H))}if(v!==null){var Me=g.baseState;T=0,ye=te=H=null,F=v;do{var _e=F.lane,Ie=F.eventTime;if((h&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Ie,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var He=n,Ge=F;switch(_e=r,Ie=l,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){Me=He.call(Ie,Me,_e);break e}Me=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,_e=typeof He=="function"?He.call(Ie,Me,_e):He,_e==null)break e;Me=z({},Me,_e);break e;case 2:Ar=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,_e=g.effects,_e===null?g.effects=[F]:_e.push(F))}else Ie={eventTime:Ie,lane:_e,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(te=ye=Ie,H=Me):ye=ye.next=Ie,T|=_e;if(F=F.next,F===null){if(F=g.shared.pending,F===null)break;_e=F,F=_e.next,_e.next=null,g.lastBaseUpdate=_e,g.shared.pending=null}}while(!0);if(ye===null&&(H=Me),g.baseState=H,g.firstBaseUpdate=te,g.lastBaseUpdate=ye,r=g.shared.interleaved,r!==null){g=r;do T|=g.lane,g=g.next;while(g!==r)}else v===null&&(g.shared.lanes=0);os|=T,n.lanes=T,n.memoizedState=Me}}function Pp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var h=n[r],g=h.callback;if(g!==null){if(h.callback=null,h=l,typeof g!="function")throw Error(t(191,g));g.call(h)}}}var Jo={},Ni=Er(Jo),ea=Er(Jo),ta=Er(Jo);function rs(n){if(n===Jo)throw Error(t(174));return n}function Tc(n,r){switch(kt(ta,r),kt(ea,n),kt(Ni,Jo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:je(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=je(r,n)}Vt(Ni),kt(Ni,r)}function Hs(){Vt(Ni),Vt(ea),Vt(ta)}function Lp(n){rs(ta.current);var r=rs(Ni.current),l=je(r,n.type);r!==l&&(kt(ea,n),kt(Ni,l))}function wc(n){ea.current===n&&(Vt(Ni),Vt(ea))}var jt=Er(0);function ml(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ac=[];function Rc(){for(var n=0;n<Ac.length;n++)Ac[n]._workInProgressVersionPrimary=null;Ac.length=0}var gl=A.ReactCurrentDispatcher,bc=A.ReactCurrentBatchConfig,ss=0,Yt=null,sn=null,cn=null,_l=!1,na=!1,ia=0,P0=0;function En(){throw Error(t(321))}function Cc(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!_i(n[l],r[l]))return!1;return!0}function Pc(n,r,l,h,g,v){if(ss=v,Yt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,gl.current=n===null||n.memoizedState===null?N0:U0,n=l(h,g),na){v=0;do{if(na=!1,ia=0,25<=v)throw Error(t(301));v+=1,cn=sn=null,r.updateQueue=null,gl.current=F0,n=l(h,g)}while(na)}if(gl.current=yl,r=sn!==null&&sn.next!==null,ss=0,cn=sn=Yt=null,_l=!1,r)throw Error(t(300));return n}function Lc(){var n=ia!==0;return ia=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Yt.memoizedState=cn=n:cn=cn.next=n,cn}function ai(){if(sn===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var r=cn===null?Yt.memoizedState:cn.next;if(r!==null)cn=r,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},cn===null?Yt.memoizedState=cn=n:cn=cn.next=n}return cn}function ra(n,r){return typeof r=="function"?r(n):r}function Dc(n){var r=ai(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=sn,g=h.baseQueue,v=l.pending;if(v!==null){if(g!==null){var T=g.next;g.next=v.next,v.next=T}h.baseQueue=g=v,l.pending=null}if(g!==null){v=g.next,h=h.baseState;var F=T=null,H=null,te=v;do{var ye=te.lane;if((ss&ye)===ye)H!==null&&(H=H.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),h=te.hasEagerState?te.eagerState:n(h,te.action);else{var Me={lane:ye,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};H===null?(F=H=Me,T=h):H=H.next=Me,Yt.lanes|=ye,os|=ye}te=te.next}while(te!==null&&te!==v);H===null?T=h:H.next=F,_i(h,r.memoizedState)||(Xn=!0),r.memoizedState=h,r.baseState=T,r.baseQueue=H,l.lastRenderedState=h}if(n=l.interleaved,n!==null){g=n;do v=g.lane,Yt.lanes|=v,os|=v,g=g.next;while(g!==n)}else g===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Ic(n){var r=ai(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,g=l.pending,v=r.memoizedState;if(g!==null){l.pending=null;var T=g=g.next;do v=n(v,T.action),T=T.next;while(T!==g);_i(v,r.memoizedState)||(Xn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,h]}function Dp(){}function Ip(n,r){var l=Yt,h=ai(),g=r(),v=!_i(h.memoizedState,g);if(v&&(h.memoizedState=g,Xn=!0),h=h.queue,Nc(Fp.bind(null,l,h,n),[n]),h.getSnapshot!==r||v||cn!==null&&cn.memoizedState.tag&1){if(l.flags|=2048,sa(9,Up.bind(null,l,h,g,r),void 0,null),hn===null)throw Error(t(349));(ss&30)!==0||Np(l,r,g)}return g}function Np(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Up(n,r,l,h){r.value=l,r.getSnapshot=h,Op(r)&&kp(n)}function Fp(n,r,l){return l(function(){Op(r)&&kp(n)})}function Op(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!_i(n,l)}catch{return!0}}function kp(n){var r=Qi(n,1);r!==null&&Mi(r,n,1,-1)}function Bp(n){var r=Ui();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:n},r.queue=n,n=n.dispatch=I0.bind(null,Yt,n),[r.memoizedState,n]}function sa(n,r,l,h){return n={tag:n,create:r,destroy:l,deps:h,next:null},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,r.lastEffect=n)),n}function zp(){return ai().memoizedState}function vl(n,r,l,h){var g=Ui();Yt.flags|=n,g.memoizedState=sa(1|r,l,void 0,h===void 0?null:h)}function xl(n,r,l,h){var g=ai();h=h===void 0?null:h;var v=void 0;if(sn!==null){var T=sn.memoizedState;if(v=T.destroy,h!==null&&Cc(h,T.deps)){g.memoizedState=sa(r,l,v,h);return}}Yt.flags|=n,g.memoizedState=sa(1|r,l,v,h)}function Vp(n,r){return vl(8390656,8,n,r)}function Nc(n,r){return xl(2048,8,n,r)}function Hp(n,r){return xl(4,2,n,r)}function Gp(n,r){return xl(4,4,n,r)}function Wp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Xp(n,r,l){return l=l!=null?l.concat([n]):null,xl(4,4,Wp.bind(null,r,n),l)}function Uc(){}function jp(n,r){var l=ai();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Cc(r,h[1])?h[0]:(l.memoizedState=[n,r],n)}function Yp(n,r){var l=ai();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Cc(r,h[1])?h[0]:(n=n(),l.memoizedState=[n,r],n)}function qp(n,r,l){return(ss&21)===0?(n.baseState&&(n.baseState=!1,Xn=!0),n.memoizedState=l):(_i(l,r)||(l=Dn(),Yt.lanes|=l,os|=l,n.baseState=!0),r)}function L0(n,r){var l=yt;yt=l!==0&&4>l?l:4,n(!0);var h=bc.transition;bc.transition={};try{n(!1),r()}finally{yt=l,bc.transition=h}}function Kp(){return ai().memoizedState}function D0(n,r,l){var h=Lr(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},$p(n))Zp(r,l);else if(l=Rp(n,r,l,h),l!==null){var g=Nn();Mi(l,n,h,g),Qp(l,r,h)}}function I0(n,r,l){var h=Lr(n),g={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if($p(n))Zp(r,g);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,F=v(T,l);if(g.hasEagerState=!0,g.eagerState=F,_i(F,T)){var H=r.interleaved;H===null?(g.next=g,Mc(r)):(g.next=H.next,H.next=g),r.interleaved=g;return}}catch{}finally{}l=Rp(n,r,g,h),l!==null&&(g=Nn(),Mi(l,n,h,g),Qp(l,r,h))}}function $p(n){var r=n.alternate;return n===Yt||r!==null&&r===Yt}function Zp(n,r){na=_l=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Qp(n,r,l){if((l&4194240)!==0){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Qr(n,l)}}var yl={readContext:oi,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},N0={readContext:oi,useCallback:function(n,r){return Ui().memoizedState=[n,r===void 0?null:r],n},useContext:oi,useEffect:Vp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,vl(4194308,4,Wp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return vl(4194308,4,n,r)},useInsertionEffect:function(n,r){return vl(4,2,n,r)},useMemo:function(n,r){var l=Ui();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var h=Ui();return r=l!==void 0?l(r):r,h.memoizedState=h.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},h.queue=n,n=n.dispatch=D0.bind(null,Yt,n),[h.memoizedState,n]},useRef:function(n){var r=Ui();return n={current:n},r.memoizedState=n},useState:Bp,useDebugValue:Uc,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=Bp(!1),r=n[0];return n=L0.bind(null,n[1]),Ui().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var h=Yt,g=Ui();if(Wt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),hn===null)throw Error(t(349));(ss&30)!==0||Np(h,r,l)}g.memoizedState=l;var v={value:l,getSnapshot:r};return g.queue=v,Vp(Fp.bind(null,h,v,n),[n]),h.flags|=2048,sa(9,Up.bind(null,h,v,l,r),void 0,null),l},useId:function(){var n=Ui(),r=hn.identifierPrefix;if(Wt){var l=Zi,h=$i;l=(h&~(1<<32-Ct(h)-1)).toString(32)+l,r=":"+r+"R"+l,l=ia++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=P0++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},U0={readContext:oi,useCallback:jp,useContext:oi,useEffect:Nc,useImperativeHandle:Xp,useInsertionEffect:Hp,useLayoutEffect:Gp,useMemo:Yp,useReducer:Dc,useRef:zp,useState:function(){return Dc(ra)},useDebugValue:Uc,useDeferredValue:function(n){var r=ai();return qp(r,sn.memoizedState,n)},useTransition:function(){var n=Dc(ra)[0],r=ai().memoizedState;return[n,r]},useMutableSource:Dp,useSyncExternalStore:Ip,useId:Kp,unstable_isNewReconciler:!1},F0={readContext:oi,useCallback:jp,useContext:oi,useEffect:Nc,useImperativeHandle:Xp,useInsertionEffect:Hp,useLayoutEffect:Gp,useMemo:Yp,useReducer:Ic,useRef:zp,useState:function(){return Ic(ra)},useDebugValue:Uc,useDeferredValue:function(n){var r=ai();return sn===null?r.memoizedState=n:qp(r,sn.memoizedState,n)},useTransition:function(){var n=Ic(ra)[0],r=ai().memoizedState;return[n,r]},useMutableSource:Dp,useSyncExternalStore:Ip,useId:Kp,unstable_isNewReconciler:!1};function xi(n,r){if(n&&n.defaultProps){r=z({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Fc(n,r,l,h){r=n.memoizedState,l=l(h,r),l=l==null?r:z({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Sl={isMounted:function(n){return(n=n._reactInternals)?Di(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var h=Nn(),g=Lr(n),v=Ji(h,g);v.payload=r,l!=null&&(v.callback=l),r=Rr(n,v,g),r!==null&&(Mi(r,n,g,h),dl(r,n,g))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var h=Nn(),g=Lr(n),v=Ji(h,g);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Rr(n,v,g),r!==null&&(Mi(r,n,g,h),dl(r,n,g))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Nn(),h=Lr(n),g=Ji(l,h);g.tag=2,r!=null&&(g.callback=r),r=Rr(n,g,h),r!==null&&(Mi(r,n,h,l),dl(r,n,h))}};function Jp(n,r,l,h,g,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,v,T):r.prototype&&r.prototype.isPureReactComponent?!Xo(l,h)||!Xo(g,v):!0}function em(n,r,l){var h=!1,g=Tr,v=r.contextType;return typeof v=="object"&&v!==null?v=oi(v):(g=Wn(r)?es:Mn.current,h=r.contextTypes,v=(h=h!=null)?Us(n,g):Tr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Sl,n.stateNode=r,r._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=g,n.__reactInternalMemoizedMaskedChildContext=v),r}function tm(n,r,l,h){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==n&&Sl.enqueueReplaceState(r,r.state,null)}function Oc(n,r,l,h){var g=n.stateNode;g.props=l,g.state=n.memoizedState,g.refs={},Ec(n);var v=r.contextType;typeof v=="object"&&v!==null?g.context=oi(v):(v=Wn(r)?es:Mn.current,g.context=Us(n,v)),g.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Fc(n,r,v,l),g.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(r=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),r!==g.state&&Sl.enqueueReplaceState(g,g.state,null),pl(n,l,g,h),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,r){try{var l="",h=r;do l+=se(h),h=h.return;while(h);var g=l}catch(v){g=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:g,digest:null}}function kc(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Bc(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function nm(n,r,l){l=Ji(-1,l),l.tag=3,l.payload={element:null};var h=r.value;return l.callback=function(){bl||(bl=!0,eh=h),Bc(n,r)},l}function im(n,r,l){l=Ji(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var g=r.value;l.payload=function(){return h(g)},l.callback=function(){Bc(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Bc(n,r),typeof h!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function rm(n,r,l){var h=n.pingCache;if(h===null){h=n.pingCache=new O0;var g=new Set;h.set(r,g)}else g=h.get(r),g===void 0&&(g=new Set,h.set(r,g));g.has(l)||(g.add(l),n=Z0.bind(null,n,r,l),r.then(n,n))}function sm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function om(n,r,l,h,g){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Ji(-1,1),r.tag=2,Rr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=g,n)}var k0=A.ReactCurrentOwner,Xn=!1;function In(n,r,l,h){r.child=n===null?Ap(r,null,l,h):Bs(r,n.child,l,h)}function am(n,r,l,h,g){l=l.render;var v=r.ref;return Vs(r,g),h=Pc(n,r,l,h,v,g),l=Lc(),n!==null&&!Xn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,er(n,r,g)):(Wt&&l&&dc(r),r.flags|=1,In(n,r,h,g),r.child)}function lm(n,r,l,h,g){if(n===null){var v=l.type;return typeof v=="function"&&!ah(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,um(n,r,v,h,g)):(n=Nl(l.type,null,h,r,r.mode,g),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&g)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:Xo,l(T,h)&&n.ref===r.ref)return er(n,r,g)}return r.flags|=1,n=Ir(v,h),n.ref=r.ref,n.return=r,r.child=n}function um(n,r,l,h,g){if(n!==null){var v=n.memoizedProps;if(Xo(v,h)&&n.ref===r.ref)if(Xn=!1,r.pendingProps=h=v,(n.lanes&g)!==0)(n.flags&131072)!==0&&(Xn=!0);else return r.lanes=n.lanes,er(n,r,g)}return zc(n,r,l,h,g)}function cm(n,r,l){var h=r.pendingProps,g=h.children,v=n!==null?n.memoizedState:null;if(h.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Xs,Jn),Jn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,kt(Xs,Jn),Jn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,kt(Xs,Jn),Jn|=h}else v!==null?(h=v.baseLanes|l,r.memoizedState=null):h=l,kt(Xs,Jn),Jn|=h;return In(n,r,g,l),r.child}function hm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function zc(n,r,l,h,g){var v=Wn(l)?es:Mn.current;return v=Us(r,v),Vs(r,g),l=Pc(n,r,l,h,v,g),h=Lc(),n!==null&&!Xn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,er(n,r,g)):(Wt&&h&&dc(r),r.flags|=1,In(n,r,l,g),r.child)}function fm(n,r,l,h,g){if(Wn(l)){var v=!0;sl(r)}else v=!1;if(Vs(r,g),r.stateNode===null)El(n,r),em(r,l,h),Oc(r,l,h,g),h=!0;else if(n===null){var T=r.stateNode,F=r.memoizedProps;T.props=F;var H=T.context,te=l.contextType;typeof te=="object"&&te!==null?te=oi(te):(te=Wn(l)?es:Mn.current,te=Us(r,te));var ye=l.getDerivedStateFromProps,Me=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Me||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==h||H!==te)&&tm(r,T,h,te),Ar=!1;var _e=r.memoizedState;T.state=_e,pl(r,h,T,g),H=r.memoizedState,F!==h||_e!==H||Gn.current||Ar?(typeof ye=="function"&&(Fc(r,l,ye,h),H=r.memoizedState),(F=Ar||Jp(r,l,F,h,_e,H,te))?(Me||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=H),T.props=h,T.state=H,T.context=te,h=F):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{T=r.stateNode,bp(n,r),F=r.memoizedProps,te=r.type===r.elementType?F:xi(r.type,F),T.props=te,Me=r.pendingProps,_e=T.context,H=l.contextType,typeof H=="object"&&H!==null?H=oi(H):(H=Wn(l)?es:Mn.current,H=Us(r,H));var Ie=l.getDerivedStateFromProps;(ye=typeof Ie=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==Me||_e!==H)&&tm(r,T,h,H),Ar=!1,_e=r.memoizedState,T.state=_e,pl(r,h,T,g);var He=r.memoizedState;F!==Me||_e!==He||Gn.current||Ar?(typeof Ie=="function"&&(Fc(r,l,Ie,h),He=r.memoizedState),(te=Ar||Jp(r,l,te,h,_e,He,H)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,He,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,He,H)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=He),T.props=h,T.state=He,T.context=H,h=te):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),h=!1)}return Vc(n,r,l,h,v,g)}function Vc(n,r,l,h,g,v){hm(n,r);var T=(r.flags&128)!==0;if(!h&&!T)return g&&_p(r,l,!1),er(n,r,v);h=r.stateNode,k0.current=r;var F=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,n!==null&&T?(r.child=Bs(r,n.child,null,v),r.child=Bs(r,null,F,v)):In(n,r,F,v),r.memoizedState=h.state,g&&_p(r,l,!0),r.child}function dm(n){var r=n.stateNode;r.pendingContext?mp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&mp(n,r.context,!1),Tc(n,r.containerInfo)}function pm(n,r,l,h,g){return ks(),_c(g),r.flags|=256,In(n,r,l,h),r.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Gc(n){return{baseLanes:n,cachePool:null,transitions:null}}function mm(n,r,l){var h=r.pendingProps,g=jt.current,v=!1,T=(r.flags&128)!==0,F;if((F=T)||(F=n!==null&&n.memoizedState===null?!1:(g&2)!==0),F?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(g|=1),kt(jt,g&1),n===null)return gc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=h.children,n=h.fallback,v?(h=r.mode,v=r.child,T={mode:"hidden",children:T},(h&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=Ul(T,h,0,null),n=cs(n,h,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Gc(l),r.memoizedState=Hc,n):Wc(r,T));if(g=n.memoizedState,g!==null&&(F=g.dehydrated,F!==null))return B0(n,r,T,h,F,g,l);if(v){v=h.fallback,T=r.mode,g=n.child,F=g.sibling;var H={mode:"hidden",children:h.children};return(T&1)===0&&r.child!==g?(h=r.child,h.childLanes=0,h.pendingProps=H,r.deletions=null):(h=Ir(g,H),h.subtreeFlags=g.subtreeFlags&14680064),F!==null?v=Ir(F,v):(v=cs(v,T,l,null),v.flags|=2),v.return=r,h.return=r,h.sibling=v,r.child=h,h=v,v=r.child,T=n.child.memoizedState,T=T===null?Gc(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=Hc,h}return v=n.child,n=v.sibling,h=Ir(v,{mode:"visible",children:h.children}),(r.mode&1)===0&&(h.lanes=l),h.return=r,h.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=h,r.memoizedState=null,h}function Wc(n,r){return r=Ul({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ml(n,r,l,h){return h!==null&&_c(h),Bs(r,n.child,null,l),n=Wc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function B0(n,r,l,h,g,v,T){if(l)return r.flags&256?(r.flags&=-257,h=kc(Error(t(422))),Ml(n,r,T,h)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=h.fallback,g=r.mode,h=Ul({mode:"visible",children:h.children},g,0,null),v=cs(v,g,T,null),v.flags|=2,h.return=r,v.return=r,h.sibling=v,r.child=h,(r.mode&1)!==0&&Bs(r,n.child,null,T),r.child.memoizedState=Gc(T),r.memoizedState=Hc,v);if((r.mode&1)===0)return Ml(n,r,T,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var F=h.dgst;return h=F,v=Error(t(419)),h=kc(v,h,void 0),Ml(n,r,T,h)}if(F=(T&n.childLanes)!==0,Xn||F){if(h=hn,h!==null){switch(T&-T){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|T))!==0?0:g,g!==0&&g!==v.retryLane&&(v.retryLane=g,Qi(n,g),Mi(h,n,g,-1))}return oh(),h=kc(Error(t(421))),Ml(n,r,T,h)}return g.data==="$?"?(r.flags|=128,r.child=n.child,r=Q0.bind(null,n),g._reactRetry=r,null):(n=v.treeContext,Qn=Mr(g.nextSibling),Zn=r,Wt=!0,vi=null,n!==null&&(ri[si++]=$i,ri[si++]=Zi,ri[si++]=ts,$i=n.id,Zi=n.overflow,ts=r),r=Wc(r,h.children),r.flags|=4096,r)}function gm(n,r,l){n.lanes|=r;var h=n.alternate;h!==null&&(h.lanes|=r),Sc(n.return,r,l)}function Xc(n,r,l,h,g){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:g}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=g)}function _m(n,r,l){var h=r.pendingProps,g=h.revealOrder,v=h.tail;if(In(n,r,h.children,l),h=jt.current,(h&2)!==0)h=h&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gm(n,l,r);else if(n.tag===19)gm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(kt(jt,h),(r.mode&1)===0)r.memoizedState=null;else switch(g){case"forwards":for(l=r.child,g=null;l!==null;)n=l.alternate,n!==null&&ml(n)===null&&(g=l),l=l.sibling;l=g,l===null?(g=r.child,r.child=null):(g=l.sibling,l.sibling=null),Xc(r,!1,g,l,v);break;case"backwards":for(l=null,g=r.child,r.child=null;g!==null;){if(n=g.alternate,n!==null&&ml(n)===null){r.child=g;break}n=g.sibling,g.sibling=l,l=g,g=n}Xc(r,!0,l,null,v);break;case"together":Xc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function El(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function er(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),os|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Ir(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Ir(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function z0(n,r,l){switch(r.tag){case 3:dm(r),ks();break;case 5:Lp(r);break;case 1:Wn(r.type)&&sl(r);break;case 4:Tc(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,g=r.memoizedProps.value;kt(hl,h._currentValue),h._currentValue=g;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(kt(jt,jt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?mm(n,r,l):(kt(jt,jt.current&1),n=er(n,r,l),n!==null?n.sibling:null);kt(jt,jt.current&1);break;case 19:if(h=(l&r.childLanes)!==0,(n.flags&128)!==0){if(h)return _m(n,r,l);r.flags|=128}if(g=r.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),kt(jt,jt.current),h)break;return null;case 22:case 23:return r.lanes=0,cm(n,r,l)}return er(n,r,l)}var vm,jc,xm,ym;vm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},jc=function(){},xm=function(n,r,l,h){var g=n.memoizedProps;if(g!==h){n=r.stateNode,rs(Ni.current);var v=null;switch(l){case"input":g=G(n,g),h=G(n,h),v=[];break;case"select":g=z({},g,{value:void 0}),h=z({},h,{value:void 0}),v=[];break;case"textarea":g=w(n,g),h=w(n,h),v=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=nl)}vt(l,h);var T;l=null;for(te in g)if(!h.hasOwnProperty(te)&&g.hasOwnProperty(te)&&g[te]!=null)if(te==="style"){var F=g[te];for(T in F)F.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(s.hasOwnProperty(te)?v||(v=[]):(v=v||[]).push(te,null));for(te in h){var H=h[te];if(F=g!=null?g[te]:void 0,h.hasOwnProperty(te)&&H!==F&&(H!=null||F!=null))if(te==="style")if(F){for(T in F)!F.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in H)H.hasOwnProperty(T)&&F[T]!==H[T]&&(l||(l={}),l[T]=H[T])}else l||(v||(v=[]),v.push(te,l)),l=H;else te==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(v=v||[]).push(te,H)):te==="children"?typeof H!="string"&&typeof H!="number"||(v=v||[]).push(te,""+H):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(s.hasOwnProperty(te)?(H!=null&&te==="onScroll"&&zt("scroll",n),v||F===H||(v=[])):(v=v||[]).push(te,H))}l&&(v=v||[]).push("style",l);var te=v;(r.updateQueue=te)&&(r.flags|=4)}},ym=function(n,r,l,h){l!==h&&(r.flags|=4)};function oa(n,r){if(!Wt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function Tn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(r)for(var g=n.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=n,g=g.sibling;else for(g=n.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=n,g=g.sibling;return n.subtreeFlags|=h,n.childLanes=l,r}function V0(n,r,l){var h=r.pendingProps;switch(pc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(r),null;case 1:return Wn(r.type)&&rl(),Tn(r),null;case 3:return h=r.stateNode,Hs(),Vt(Gn),Vt(Mn),Rc(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(ul(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,vi!==null&&(ih(vi),vi=null))),jc(n,r),Tn(r),null;case 5:wc(r);var g=rs(ta.current);if(l=r.type,n!==null&&r.stateNode!=null)xm(n,r,l,h,g),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return Tn(r),null}if(n=rs(Ni.current),ul(r)){h=r.stateNode,l=r.type;var v=r.memoizedProps;switch(h[Ii]=r,h[$o]=v,n=(r.mode&1)!==0,l){case"dialog":zt("cancel",h),zt("close",h);break;case"iframe":case"object":case"embed":zt("load",h);break;case"video":case"audio":for(g=0;g<Yo.length;g++)zt(Yo[g],h);break;case"source":zt("error",h);break;case"img":case"image":case"link":zt("error",h),zt("load",h);break;case"details":zt("toggle",h);break;case"input":Ht(h,v),zt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},zt("invalid",h);break;case"textarea":ee(h,v),zt("invalid",h)}vt(l,v),g=null;for(var T in v)if(v.hasOwnProperty(T)){var F=v[T];T==="children"?typeof F=="string"?h.textContent!==F&&(v.suppressHydrationWarning!==!0&&tl(h.textContent,F,n),g=["children",F]):typeof F=="number"&&h.textContent!==""+F&&(v.suppressHydrationWarning!==!0&&tl(h.textContent,F,n),g=["children",""+F]):s.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&zt("scroll",h)}switch(l){case"input":at(h),Xe(h,v,!0);break;case"textarea":at(h),xe(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=nl)}h=g,r.updateQueue=h,h!==null&&(r.flags|=4)}else{T=g.nodeType===9?g:g.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=T.createElement(l,{is:h.is}):(n=T.createElement(l),l==="select"&&(T=n,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):n=T.createElementNS(n,l),n[Ii]=r,n[$o]=h,vm(n,r,!1,!1),r.stateNode=n;e:{switch(T=lt(l,h),l){case"dialog":zt("cancel",n),zt("close",n),g=h;break;case"iframe":case"object":case"embed":zt("load",n),g=h;break;case"video":case"audio":for(g=0;g<Yo.length;g++)zt(Yo[g],n);g=h;break;case"source":zt("error",n),g=h;break;case"img":case"image":case"link":zt("error",n),zt("load",n),g=h;break;case"details":zt("toggle",n),g=h;break;case"input":Ht(n,h),g=G(n,h),zt("invalid",n);break;case"option":g=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},g=z({},h,{value:void 0}),zt("invalid",n);break;case"textarea":ee(n,h),g=w(n,h),zt("invalid",n);break;default:g=h}vt(l,g),F=g;for(v in F)if(F.hasOwnProperty(v)){var H=F[v];v==="style"?it(n,H):v==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Fe(n,H)):v==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&mt(n,H):typeof H=="number"&&mt(n,""+H):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?H!=null&&v==="onScroll"&&zt("scroll",n):H!=null&&C(n,v,H,T))}switch(l){case"input":at(n),Xe(n,h,!1);break;case"textarea":at(n),xe(n);break;case"option":h.value!=null&&n.setAttribute("value",""+ve(h.value));break;case"select":n.multiple=!!h.multiple,v=h.value,v!=null?N(n,!!h.multiple,v,!1):h.defaultValue!=null&&N(n,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(n.onclick=nl)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Tn(r),null;case 6:if(n&&r.stateNode!=null)ym(n,r,n.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(l=rs(ta.current),rs(Ni.current),ul(r)){if(h=r.stateNode,l=r.memoizedProps,h[Ii]=r,(v=h.nodeValue!==l)&&(n=Zn,n!==null))switch(n.tag){case 3:tl(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&tl(h.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Ii]=r,r.stateNode=h}return Tn(r),null;case 13:if(Vt(jt),h=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&Qn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ep(),ks(),r.flags|=98560,v=!1;else if(v=ul(r),h!==null&&h.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Ii]=r}else ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Tn(r),v=!1}else vi!==null&&(ih(vi),vi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(jt.current&1)!==0?on===0&&(on=3):oh())),r.updateQueue!==null&&(r.flags|=4),Tn(r),null);case 4:return Hs(),jc(n,r),n===null&&qo(r.stateNode.containerInfo),Tn(r),null;case 10:return yc(r.type._context),Tn(r),null;case 17:return Wn(r.type)&&rl(),Tn(r),null;case 19:if(Vt(jt),v=r.memoizedState,v===null)return Tn(r),null;if(h=(r.flags&128)!==0,T=v.rendering,T===null)if(h)oa(v,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=ml(n),T!==null){for(r.flags|=128,oa(v,!1),h=T.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=l,l=r.child;l!==null;)v=l,n=h,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return kt(jt,jt.current&1|2),r.child}n=n.sibling}v.tail!==null&&X()>js&&(r.flags|=128,h=!0,oa(v,!1),r.lanes=4194304)}else{if(!h)if(n=ml(T),n!==null){if(r.flags|=128,h=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),oa(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Wt)return Tn(r),null}else 2*X()-v.renderingStartTime>js&&l!==1073741824&&(r.flags|=128,h=!0,oa(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=X(),r.sibling=null,l=jt.current,kt(jt,h?l&1|2:l&1),r):(Tn(r),null);case 22:case 23:return sh(),h=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(r.flags|=8192),h&&(r.mode&1)!==0?(Jn&1073741824)!==0&&(Tn(r),r.subtreeFlags&6&&(r.flags|=8192)):Tn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function H0(n,r){switch(pc(r),r.tag){case 1:return Wn(r.type)&&rl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Hs(),Vt(Gn),Vt(Mn),Rc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return wc(r),null;case 13:if(Vt(jt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Vt(jt),null;case 4:return Hs(),null;case 10:return yc(r.type._context),null;case 22:case 23:return sh(),null;case 24:return null;default:return null}}var Tl=!1,wn=!1,G0=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Ws(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Kt(n,r,h)}else l.current=null}function Yc(n,r,l){try{l()}catch(h){Kt(n,r,h)}}var Sm=!1;function W0(n,r){if(sc=Wa,n=Jd(),Zu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var g=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,F=-1,H=-1,te=0,ye=0,Me=n,_e=null;t:for(;;){for(var Ie;Me!==l||g!==0&&Me.nodeType!==3||(F=T+g),Me!==v||h!==0&&Me.nodeType!==3||(H=T+h),Me.nodeType===3&&(T+=Me.nodeValue.length),(Ie=Me.firstChild)!==null;)_e=Me,Me=Ie;for(;;){if(Me===n)break t;if(_e===l&&++te===g&&(F=T),_e===v&&++ye===h&&(H=T),(Ie=Me.nextSibling)!==null)break;Me=_e,_e=Me.parentNode}Me=Ie}l=F===-1||H===-1?null:{start:F,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(oc={focusedElem:n,selectionRange:l},Wa=!1,ke=r;ke!==null;)if(r=ke,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ke=n;else for(;ke!==null;){r=ke;try{var He=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,Zt=He.memoizedState,Z=r.stateNode,j=Z.getSnapshotBeforeUpdate(r.elementType===r.type?Ge:xi(r.type,Ge),Zt);Z.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var Q=r.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Kt(r,r.return,Ae)}if(n=r.sibling,n!==null){n.return=r.return,ke=n;break}ke=r.return}return He=Sm,Sm=!1,He}function aa(n,r,l){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&n)===n){var v=g.destroy;g.destroy=void 0,v!==void 0&&Yc(r,l,v)}g=g.next}while(g!==h)}}function wl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==r)}}function qc(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Mm(n){var r=n.alternate;r!==null&&(n.alternate=null,Mm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ii],delete r[$o],delete r[cc],delete r[A0],delete r[R0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Em(n){return n.tag===5||n.tag===3||n.tag===4}function Tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kc(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=nl));else if(h!==4&&(n=n.child,n!==null))for(Kc(n,r,l),n=n.sibling;n!==null;)Kc(n,r,l),n=n.sibling}function $c(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for($c(n,r,l),n=n.sibling;n!==null;)$c(n,r,l),n=n.sibling}var vn=null,yi=!1;function br(n,r,l){for(l=l.child;l!==null;)wm(n,r,l),l=l.sibling}function wm(n,r,l){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Ke,l)}catch{}switch(l.tag){case 5:wn||Ws(l,r);case 6:var h=vn,g=yi;vn=null,br(n,r,l),vn=h,yi=g,vn!==null&&(yi?(n=vn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):vn.removeChild(l.stateNode));break;case 18:vn!==null&&(yi?(n=vn,l=l.stateNode,n.nodeType===8?uc(n.parentNode,l):n.nodeType===1&&uc(n,l),Bo(n)):uc(vn,l.stateNode));break;case 4:h=vn,g=yi,vn=l.stateNode.containerInfo,yi=!0,br(n,r,l),vn=h,yi=g;break;case 0:case 11:case 14:case 15:if(!wn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var v=g,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&Yc(l,r,T),g=g.next}while(g!==h)}br(n,r,l);break;case 1:if(!wn&&(Ws(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(F){Kt(l,r,F)}br(n,r,l);break;case 21:br(n,r,l);break;case 22:l.mode&1?(wn=(h=wn)||l.memoizedState!==null,br(n,r,l),wn=h):br(n,r,l);break;default:br(n,r,l)}}function Am(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new G0),r.forEach(function(h){var g=J0.bind(null,n,h);l.has(h)||(l.add(h),h.then(g,g))})}}function Si(n,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var g=l[h];try{var v=n,T=r,F=T;e:for(;F!==null;){switch(F.tag){case 5:vn=F.stateNode,yi=!1;break e;case 3:vn=F.stateNode.containerInfo,yi=!0;break e;case 4:vn=F.stateNode.containerInfo,yi=!0;break e}F=F.return}if(vn===null)throw Error(t(160));wm(v,T,g),vn=null,yi=!1;var H=g.alternate;H!==null&&(H.return=null),g.return=null}catch(te){Kt(g,r,te)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Rm(r,n),r=r.sibling}function Rm(n,r){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(r,n),Fi(n),h&4){try{aa(3,n,n.return),wl(3,n)}catch(Ge){Kt(n,n.return,Ge)}try{aa(5,n,n.return)}catch(Ge){Kt(n,n.return,Ge)}}break;case 1:Si(r,n),Fi(n),h&512&&l!==null&&Ws(l,l.return);break;case 5:if(Si(r,n),Fi(n),h&512&&l!==null&&Ws(l,l.return),n.flags&32){var g=n.stateNode;try{mt(g,"")}catch(Ge){Kt(n,n.return,Ge)}}if(h&4&&(g=n.stateNode,g!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,F=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{F==="input"&&v.type==="radio"&&v.name!=null&&Ze(g,v),lt(F,T);var te=lt(F,v);for(T=0;T<H.length;T+=2){var ye=H[T],Me=H[T+1];ye==="style"?it(g,Me):ye==="dangerouslySetInnerHTML"?Fe(g,Me):ye==="children"?mt(g,Me):C(g,ye,Me,te)}switch(F){case"input":$e(g,v);break;case"textarea":me(g,v);break;case"select":var _e=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!v.multiple;var Ie=v.value;Ie!=null?N(g,!!v.multiple,Ie,!1):_e!==!!v.multiple&&(v.defaultValue!=null?N(g,!!v.multiple,v.defaultValue,!0):N(g,!!v.multiple,v.multiple?[]:"",!1))}g[$o]=v}catch(Ge){Kt(n,n.return,Ge)}}break;case 6:if(Si(r,n),Fi(n),h&4){if(n.stateNode===null)throw Error(t(162));g=n.stateNode,v=n.memoizedProps;try{g.nodeValue=v}catch(Ge){Kt(n,n.return,Ge)}}break;case 3:if(Si(r,n),Fi(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Bo(r.containerInfo)}catch(Ge){Kt(n,n.return,Ge)}break;case 4:Si(r,n),Fi(n);break;case 13:Si(r,n),Fi(n),g=n.child,g.flags&8192&&(v=g.memoizedState!==null,g.stateNode.isHidden=v,!v||g.alternate!==null&&g.alternate.memoizedState!==null||(Jc=X())),h&4&&Am(n);break;case 22:if(ye=l!==null&&l.memoizedState!==null,n.mode&1?(wn=(te=wn)||ye,Si(r,n),wn=te):Si(r,n),Fi(n),h&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!ye&&(n.mode&1)!==0)for(ke=n,ye=n.child;ye!==null;){for(Me=ke=ye;ke!==null;){switch(_e=ke,Ie=_e.child,_e.tag){case 0:case 11:case 14:case 15:aa(4,_e,_e.return);break;case 1:Ws(_e,_e.return);var He=_e.stateNode;if(typeof He.componentWillUnmount=="function"){h=_e,l=_e.return;try{r=h,He.props=r.memoizedProps,He.state=r.memoizedState,He.componentWillUnmount()}catch(Ge){Kt(h,l,Ge)}}break;case 5:Ws(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Pm(Me);continue}}Ie!==null?(Ie.return=_e,ke=Ie):Pm(Me)}ye=ye.sibling}e:for(ye=null,Me=n;;){if(Me.tag===5){if(ye===null){ye=Me;try{g=Me.stateNode,te?(v=g.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(F=Me.stateNode,H=Me.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=et("display",T))}catch(Ge){Kt(n,n.return,Ge)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=te?"":Me.memoizedProps}catch(Ge){Kt(n,n.return,Ge)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Si(r,n),Fi(n),h&4&&Am(n);break;case 21:break;default:Si(r,n),Fi(n)}}function Fi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Em(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(mt(g,""),h.flags&=-33);var v=Tm(n);$c(n,v,g);break;case 3:case 4:var T=h.stateNode.containerInfo,F=Tm(n);Kc(n,F,T);break;default:throw Error(t(161))}}catch(H){Kt(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function X0(n,r,l){ke=n,bm(n)}function bm(n,r,l){for(var h=(n.mode&1)!==0;ke!==null;){var g=ke,v=g.child;if(g.tag===22&&h){var T=g.memoizedState!==null||Tl;if(!T){var F=g.alternate,H=F!==null&&F.memoizedState!==null||wn;F=Tl;var te=wn;if(Tl=T,(wn=H)&&!te)for(ke=g;ke!==null;)T=ke,H=T.child,T.tag===22&&T.memoizedState!==null?Lm(g):H!==null?(H.return=T,ke=H):Lm(g);for(;v!==null;)ke=v,bm(v),v=v.sibling;ke=g,Tl=F,wn=te}Cm(n)}else(g.subtreeFlags&8772)!==0&&v!==null?(v.return=g,ke=v):Cm(n)}}function Cm(n){for(;ke!==null;){var r=ke;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:wn||wl(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!wn)if(l===null)h.componentDidMount();else{var g=r.elementType===r.type?l.memoizedProps:xi(r.type,l.memoizedProps);h.componentDidUpdate(g,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Pp(r,v,h);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Pp(r,T,l)}break;case 5:var F=r.stateNode;if(l===null&&r.flags&4){l=F;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var te=r.alternate;if(te!==null){var ye=te.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&Bo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||r.flags&512&&qc(r)}catch(_e){Kt(r,r.return,_e)}}if(r===n){ke=null;break}if(l=r.sibling,l!==null){l.return=r.return,ke=l;break}ke=r.return}}function Pm(n){for(;ke!==null;){var r=ke;if(r===n){ke=null;break}var l=r.sibling;if(l!==null){l.return=r.return,ke=l;break}ke=r.return}}function Lm(n){for(;ke!==null;){var r=ke;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{wl(4,r)}catch(H){Kt(r,l,H)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var g=r.return;try{h.componentDidMount()}catch(H){Kt(r,g,H)}}var v=r.return;try{qc(r)}catch(H){Kt(r,v,H)}break;case 5:var T=r.return;try{qc(r)}catch(H){Kt(r,T,H)}}}catch(H){Kt(r,r.return,H)}if(r===n){ke=null;break}var F=r.sibling;if(F!==null){F.return=r.return,ke=F;break}ke=r.return}}var j0=Math.ceil,Al=A.ReactCurrentDispatcher,Zc=A.ReactCurrentOwner,li=A.ReactCurrentBatchConfig,Rt=0,hn=null,Jt=null,xn=0,Jn=0,Xs=Er(0),on=0,la=null,os=0,Rl=0,Qc=0,ua=null,jn=null,Jc=0,js=1/0,tr=null,bl=!1,eh=null,Cr=null,Cl=!1,Pr=null,Pl=0,ca=0,th=null,Ll=-1,Dl=0;function Nn(){return(Rt&6)!==0?X():Ll!==-1?Ll:Ll=X()}function Lr(n){return(n.mode&1)===0?1:(Rt&2)!==0&&xn!==0?xn&-xn:C0.transition!==null?(Dl===0&&(Dl=Dn()),Dl):(n=yt,n!==0||(n=window.event,n=n===void 0?16:Id(n.type)),n)}function Mi(n,r,l,h){if(50<ca)throw ca=0,th=null,Error(t(185));$t(n,l,h),((Rt&2)===0||n!==hn)&&(n===hn&&((Rt&2)===0&&(Rl|=l),on===4&&Dr(n,xn)),Yn(n,h),l===1&&Rt===0&&(r.mode&1)===0&&(js=X()+500,ol&&wr()))}function Yn(n,r){var l=n.callbackNode;Zr(n,r);var h=gi(n,n===hn?xn:0);if(h===0)l!==null&&q(l),n.callbackNode=null,n.callbackPriority=0;else if(r=h&-h,n.callbackPriority!==r){if(l!=null&&q(l),r===1)n.tag===0?b0(Im.bind(null,n)):vp(Im.bind(null,n)),T0(function(){(Rt&6)===0&&wr()}),l=null;else{switch(wd(h)){case 1:l=Ce;break;case 4:l=Ue;break;case 16:l=Oe;break;case 536870912:l=st;break;default:l=Oe}l=Vm(l,Dm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Dm(n,r){if(Ll=-1,Dl=0,(Rt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ys()&&n.callbackNode!==l)return null;var h=gi(n,n===hn?xn:0);if(h===0)return null;if((h&30)!==0||(h&n.expiredLanes)!==0||r)r=Il(n,h);else{r=h;var g=Rt;Rt|=2;var v=Um();(hn!==n||xn!==r)&&(tr=null,js=X()+500,ls(n,r));do try{K0();break}catch(F){Nm(n,F)}while(!0);xc(),Al.current=v,Rt=g,Jt!==null?r=0:(hn=null,xn=0,r=on)}if(r!==0){if(r===2&&(g=Ut(n),g!==0&&(h=g,r=nh(n,g))),r===1)throw l=la,ls(n,0),Dr(n,h),Yn(n,X()),l;if(r===6)Dr(n,h);else{if(g=n.current.alternate,(h&30)===0&&!Y0(g)&&(r=Il(n,h),r===2&&(v=Ut(n),v!==0&&(h=v,r=nh(n,v))),r===1))throw l=la,ls(n,0),Dr(n,h),Yn(n,X()),l;switch(n.finishedWork=g,n.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:us(n,jn,tr);break;case 3:if(Dr(n,h),(h&130023424)===h&&(r=Jc+500-X(),10<r)){if(gi(n,0)!==0)break;if(g=n.suspendedLanes,(g&h)!==h){Nn(),n.pingedLanes|=n.suspendedLanes&g;break}n.timeoutHandle=lc(us.bind(null,n,jn,tr),r);break}us(n,jn,tr);break;case 4:if(Dr(n,h),(h&4194240)===h)break;for(r=n.eventTimes,g=-1;0<h;){var T=31-Ct(h);v=1<<T,T=r[T],T>g&&(g=T),h&=~v}if(h=g,h=X()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*j0(h/1960))-h,10<h){n.timeoutHandle=lc(us.bind(null,n,jn,tr),h);break}us(n,jn,tr);break;case 5:us(n,jn,tr);break;default:throw Error(t(329))}}}return Yn(n,X()),n.callbackNode===l?Dm.bind(null,n):null}function nh(n,r){var l=ua;return n.current.memoizedState.isDehydrated&&(ls(n,r).flags|=256),n=Il(n,r),n!==2&&(r=jn,jn=l,r!==null&&ih(r)),n}function ih(n){jn===null?jn=n:jn.push.apply(jn,n)}function Y0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var g=l[h],v=g.getSnapshot;g=g.value;try{if(!_i(v(),g))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Dr(n,r){for(r&=~Qc,r&=~Rl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Ct(r),h=1<<l;n[l]=-1,r&=~h}}function Im(n){if((Rt&6)!==0)throw Error(t(327));Ys();var r=gi(n,0);if((r&1)===0)return Yn(n,X()),null;var l=Il(n,r);if(n.tag!==0&&l===2){var h=Ut(n);h!==0&&(r=h,l=nh(n,h))}if(l===1)throw l=la,ls(n,0),Dr(n,r),Yn(n,X()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,us(n,jn,tr),Yn(n,X()),null}function rh(n,r){var l=Rt;Rt|=1;try{return n(r)}finally{Rt=l,Rt===0&&(js=X()+500,ol&&wr())}}function as(n){Pr!==null&&Pr.tag===0&&(Rt&6)===0&&Ys();var r=Rt;Rt|=1;var l=li.transition,h=yt;try{if(li.transition=null,yt=1,n)return n()}finally{yt=h,li.transition=l,Rt=r,(Rt&6)===0&&wr()}}function sh(){Jn=Xs.current,Vt(Xs)}function ls(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,E0(l)),Jt!==null)for(l=Jt.return;l!==null;){var h=l;switch(pc(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&rl();break;case 3:Hs(),Vt(Gn),Vt(Mn),Rc();break;case 5:wc(h);break;case 4:Hs();break;case 13:Vt(jt);break;case 19:Vt(jt);break;case 10:yc(h.type._context);break;case 22:case 23:sh()}l=l.return}if(hn=n,Jt=n=Ir(n.current,null),xn=Jn=r,on=0,la=null,Qc=Rl=os=0,jn=ua=null,is!==null){for(r=0;r<is.length;r++)if(l=is[r],h=l.interleaved,h!==null){l.interleaved=null;var g=h.next,v=l.pending;if(v!==null){var T=v.next;v.next=g,h.next=T}l.pending=h}is=null}return n}function Nm(n,r){do{var l=Jt;try{if(xc(),gl.current=yl,_l){for(var h=Yt.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}_l=!1}if(ss=0,cn=sn=Yt=null,na=!1,ia=0,Zc.current=null,l===null||l.return===null){on=1,la=r,Jt=null;break}e:{var v=n,T=l.return,F=l,H=r;if(r=xn,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var te=H,ye=F,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ie=sm(T);if(Ie!==null){Ie.flags&=-257,om(Ie,T,F,v,r),Ie.mode&1&&rm(v,te,r),r=Ie,H=te;var He=r.updateQueue;if(He===null){var Ge=new Set;Ge.add(H),r.updateQueue=Ge}else He.add(H);break e}else{if((r&1)===0){rm(v,te,r),oh();break e}H=Error(t(426))}}else if(Wt&&F.mode&1){var Zt=sm(T);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),om(Zt,T,F,v,r),_c(Gs(H,F));break e}}v=H=Gs(H,F),on!==4&&(on=2),ua===null?ua=[v]:ua.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var Z=nm(v,H,r);Cp(v,Z);break e;case 1:F=H;var j=v.type,Q=v.stateNode;if((v.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(Cr===null||!Cr.has(Q)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ae=im(v,F,r);Cp(v,Ae);break e}}v=v.return}while(v!==null)}Om(l)}catch(Ye){r=Ye,Jt===l&&l!==null&&(Jt=l=l.return);continue}break}while(!0)}function Um(){var n=Al.current;return Al.current=yl,n===null?yl:n}function oh(){(on===0||on===3||on===2)&&(on=4),hn===null||(os&268435455)===0&&(Rl&268435455)===0||Dr(hn,xn)}function Il(n,r){var l=Rt;Rt|=2;var h=Um();(hn!==n||xn!==r)&&(tr=null,ls(n,r));do try{q0();break}catch(g){Nm(n,g)}while(!0);if(xc(),Rt=l,Al.current=h,Jt!==null)throw Error(t(261));return hn=null,xn=0,on}function q0(){for(;Jt!==null;)Fm(Jt)}function K0(){for(;Jt!==null&&!ne();)Fm(Jt)}function Fm(n){var r=zm(n.alternate,n,Jn);n.memoizedProps=n.pendingProps,r===null?Om(n):Jt=r,Zc.current=null}function Om(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=V0(l,r,Jn),l!==null){Jt=l;return}}else{if(l=H0(l,r),l!==null){l.flags&=32767,Jt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,Jt=null;return}}if(r=r.sibling,r!==null){Jt=r;return}Jt=r=n}while(r!==null);on===0&&(on=5)}function us(n,r,l){var h=yt,g=li.transition;try{li.transition=null,yt=1,$0(n,r,l,h)}finally{li.transition=g,yt=h}return null}function $0(n,r,l,h){do Ys();while(Pr!==null);if((Rt&6)!==0)throw Error(t(327));l=n.finishedWork;var g=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Sn(n,v),n===hn&&(Jt=hn=null,xn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Cl||(Cl=!0,Vm(Oe,function(){return Ys(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=li.transition,li.transition=null;var T=yt;yt=1;var F=Rt;Rt|=4,Zc.current=null,W0(n,l),Rm(l,n),g0(oc),Wa=!!sc,oc=sc=null,n.current=l,X0(l),re(),Rt=F,yt=T,li.transition=v}else n.current=l;if(Cl&&(Cl=!1,Pr=n,Pl=g),v=n.pendingLanes,v===0&&(Cr=null),bt(l.stateNode),Yn(n,X()),r!==null)for(h=n.onRecoverableError,l=0;l<r.length;l++)g=r[l],h(g.value,{componentStack:g.stack,digest:g.digest});if(bl)throw bl=!1,n=eh,eh=null,n;return(Pl&1)!==0&&n.tag!==0&&Ys(),v=n.pendingLanes,(v&1)!==0?n===th?ca++:(ca=0,th=n):ca=0,wr(),null}function Ys(){if(Pr!==null){var n=wd(Pl),r=li.transition,l=yt;try{if(li.transition=null,yt=16>n?16:n,Pr===null)var h=!1;else{if(n=Pr,Pr=null,Pl=0,(Rt&6)!==0)throw Error(t(331));var g=Rt;for(Rt|=4,ke=n.current;ke!==null;){var v=ke,T=v.child;if((ke.flags&16)!==0){var F=v.deletions;if(F!==null){for(var H=0;H<F.length;H++){var te=F[H];for(ke=te;ke!==null;){var ye=ke;switch(ye.tag){case 0:case 11:case 15:aa(8,ye,v)}var Me=ye.child;if(Me!==null)Me.return=ye,ke=Me;else for(;ke!==null;){ye=ke;var _e=ye.sibling,Ie=ye.return;if(Mm(ye),ye===te){ke=null;break}if(_e!==null){_e.return=Ie,ke=_e;break}ke=Ie}}}var He=v.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var Zt=Ge.sibling;Ge.sibling=null,Ge=Zt}while(Ge!==null)}}ke=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,ke=T;else e:for(;ke!==null;){if(v=ke,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:aa(9,v,v.return)}var Z=v.sibling;if(Z!==null){Z.return=v.return,ke=Z;break e}ke=v.return}}var j=n.current;for(ke=j;ke!==null;){T=ke;var Q=T.child;if((T.subtreeFlags&2064)!==0&&Q!==null)Q.return=T,ke=Q;else e:for(T=j;ke!==null;){if(F=ke,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:wl(9,F)}}catch(Ye){Kt(F,F.return,Ye)}if(F===T){ke=null;break e}var Ae=F.sibling;if(Ae!==null){Ae.return=F.return,ke=Ae;break e}ke=F.return}}if(Rt=g,wr(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Ke,n)}catch{}h=!0}return h}finally{yt=l,li.transition=r}}return!1}function km(n,r,l){r=Gs(l,r),r=nm(n,r,1),n=Rr(n,r,1),r=Nn(),n!==null&&($t(n,1,r),Yn(n,r))}function Kt(n,r,l){if(n.tag===3)km(n,n,l);else for(;r!==null;){if(r.tag===3){km(r,n,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Cr===null||!Cr.has(h))){n=Gs(l,n),n=im(r,n,1),r=Rr(r,n,1),n=Nn(),r!==null&&($t(r,1,n),Yn(r,n));break}}r=r.return}}function Z0(n,r,l){var h=n.pingCache;h!==null&&h.delete(r),r=Nn(),n.pingedLanes|=n.suspendedLanes&l,hn===n&&(xn&l)===l&&(on===4||on===3&&(xn&130023424)===xn&&500>X()-Jc?ls(n,0):Qc|=l),Yn(n,r)}function Bm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Mt,Mt<<=1,(Mt&130023424)===0&&(Mt=4194304)));var l=Nn();n=Qi(n,r),n!==null&&($t(n,r,l),Yn(n,l))}function Q0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Bm(n,l)}function J0(n,r){var l=0;switch(n.tag){case 13:var h=n.stateNode,g=n.memoizedState;g!==null&&(l=g.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),Bm(n,l)}var zm;zm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Gn.current)Xn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Xn=!1,z0(n,r,l);Xn=(n.flags&131072)!==0}else Xn=!1,Wt&&(r.flags&1048576)!==0&&xp(r,ll,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;El(n,r),n=r.pendingProps;var g=Us(r,Mn.current);Vs(r,l),g=Pc(null,r,h,n,g,l);var v=Lc();return r.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wn(h)?(v=!0,sl(r)):v=!1,r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Ec(r),g.updater=Sl,r.stateNode=g,g._reactInternals=r,Oc(r,h,n,l),r=Vc(null,r,h,!0,v,l)):(r.tag=0,Wt&&v&&dc(r),In(null,r,g,l),r=r.child),r;case 16:h=r.elementType;e:{switch(El(n,r),n=r.pendingProps,g=h._init,h=g(h._payload),r.type=h,g=r.tag=tx(h),n=xi(h,n),g){case 0:r=zc(null,r,h,n,l);break e;case 1:r=fm(null,r,h,n,l);break e;case 11:r=am(null,r,h,n,l);break e;case 14:r=lm(null,r,h,xi(h.type,n),l);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,g=r.pendingProps,g=r.elementType===h?g:xi(h,g),zc(n,r,h,g,l);case 1:return h=r.type,g=r.pendingProps,g=r.elementType===h?g:xi(h,g),fm(n,r,h,g,l);case 3:e:{if(dm(r),n===null)throw Error(t(387));h=r.pendingProps,v=r.memoizedState,g=v.element,bp(n,r),pl(r,h,null,l);var T=r.memoizedState;if(h=T.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){g=Gs(Error(t(423)),r),r=pm(n,r,h,l,g);break e}else if(h!==g){g=Gs(Error(t(424)),r),r=pm(n,r,h,l,g);break e}else for(Qn=Mr(r.stateNode.containerInfo.firstChild),Zn=r,Wt=!0,vi=null,l=Ap(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ks(),h===g){r=er(n,r,l);break e}In(n,r,h,l)}r=r.child}return r;case 5:return Lp(r),n===null&&gc(r),h=r.type,g=r.pendingProps,v=n!==null?n.memoizedProps:null,T=g.children,ac(h,g)?T=null:v!==null&&ac(h,v)&&(r.flags|=32),hm(n,r),In(n,r,T,l),r.child;case 6:return n===null&&gc(r),null;case 13:return mm(n,r,l);case 4:return Tc(r,r.stateNode.containerInfo),h=r.pendingProps,n===null?r.child=Bs(r,null,h,l):In(n,r,h,l),r.child;case 11:return h=r.type,g=r.pendingProps,g=r.elementType===h?g:xi(h,g),am(n,r,h,g,l);case 7:return In(n,r,r.pendingProps,l),r.child;case 8:return In(n,r,r.pendingProps.children,l),r.child;case 12:return In(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(h=r.type._context,g=r.pendingProps,v=r.memoizedProps,T=g.value,kt(hl,h._currentValue),h._currentValue=T,v!==null)if(_i(v.value,T)){if(v.children===g.children&&!Gn.current){r=er(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var F=v.dependencies;if(F!==null){T=v.child;for(var H=F.firstContext;H!==null;){if(H.context===h){if(v.tag===1){H=Ji(-1,l&-l),H.tag=2;var te=v.updateQueue;if(te!==null){te=te.shared;var ye=te.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),te.pending=H}}v.lanes|=l,H=v.alternate,H!==null&&(H.lanes|=l),Sc(v.return,l,r),F.lanes|=l;break}H=H.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,F=T.alternate,F!==null&&(F.lanes|=l),Sc(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}In(n,r,g.children,l),r=r.child}return r;case 9:return g=r.type,h=r.pendingProps.children,Vs(r,l),g=oi(g),h=h(g),r.flags|=1,In(n,r,h,l),r.child;case 14:return h=r.type,g=xi(h,r.pendingProps),g=xi(h.type,g),lm(n,r,h,g,l);case 15:return um(n,r,r.type,r.pendingProps,l);case 17:return h=r.type,g=r.pendingProps,g=r.elementType===h?g:xi(h,g),El(n,r),r.tag=1,Wn(h)?(n=!0,sl(r)):n=!1,Vs(r,l),em(r,h,g),Oc(r,h,g,l),Vc(null,r,h,!0,n,l);case 19:return _m(n,r,l);case 22:return cm(n,r,l)}throw Error(t(156,r.tag))};function Vm(n,r){return R(n,r)}function ex(n,r,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(n,r,l,h){return new ex(n,r,l,h)}function ah(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tx(n){if(typeof n=="function")return ah(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===he)return 14}return 2}function Ir(n,r){var l=n.alternate;return l===null?(l=ui(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Nl(n,r,l,h,g,v){var T=2;if(h=n,typeof n=="function")ah(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return cs(l.children,g,v,r);case B:T=8,g|=8;break;case P:return n=ui(12,l,r,g|2),n.elementType=P,n.lanes=v,n;case J:return n=ui(13,l,r,g),n.elementType=J,n.lanes=v,n;case ue:return n=ui(19,l,r,g),n.elementType=ue,n.lanes=v,n;case le:return Ul(l,g,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:T=10;break e;case k:T=9;break e;case oe:T=11;break e;case he:T=14;break e;case ie:T=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ui(T,l,r,g),r.elementType=n,r.type=h,r.lanes=v,r}function cs(n,r,l,h){return n=ui(7,n,h,r),n.lanes=l,n}function Ul(n,r,l,h){return n=ui(22,n,h,r),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function lh(n,r,l){return n=ui(6,n,null,r),n.lanes=l,n}function uh(n,r,l){return r=ui(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function nx(n,r,l,h,g){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function ch(n,r,l,h,g,v,T,F,H){return n=new nx(n,r,l,F,H),r===1?(r=1,v===!0&&(r|=8)):r=0,v=ui(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(v),n}function ix(n,r,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:h==null?null:""+h,children:n,containerInfo:r,implementation:l}}function Hm(n){if(!n)return Tr;n=n._reactInternals;e:{if(Di(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Wn(l))return gp(n,l,r)}return r}function Gm(n,r,l,h,g,v,T,F,H){return n=ch(l,h,!0,n,g,v,T,F,H),n.context=Hm(null),l=n.current,h=Nn(),g=Lr(l),v=Ji(h,g),v.callback=r??null,Rr(l,v,g),n.current.lanes=g,$t(n,g,h),Yn(n,h),n}function Fl(n,r,l,h){var g=r.current,v=Nn(),T=Lr(g);return l=Hm(l),r.context===null?r.context=l:r.pendingContext=l,r=Ji(v,T),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=Rr(g,r,T),n!==null&&(Mi(n,g,T,v),dl(n,g,T)),T}function Ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function hh(n,r){Wm(n,r),(n=n.alternate)&&Wm(n,r)}function rx(){return null}var Xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function fh(n){this._internalRoot=n}kl.prototype.render=fh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Fl(n,r,null,null)},kl.prototype.unmount=fh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;as(function(){Fl(null,n,null,null)}),r[qi]=null}};function kl(n){this._internalRoot=n}kl.prototype.unstable_scheduleHydration=function(n){if(n){var r=bd();n={blockedOn:null,target:n,priority:r};for(var l=0;l<xr.length&&r!==0&&r<xr[l].priority;l++);xr.splice(l,0,n),l===0&&Ld(n)}};function dh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jm(){}function sx(n,r,l,h,g){if(g){if(typeof h=="function"){var v=h;h=function(){var te=Ol(T);v.call(te)}}var T=Gm(r,h,n,0,null,!1,!1,"",jm);return n._reactRootContainer=T,n[qi]=T.current,qo(n.nodeType===8?n.parentNode:n),as(),T}for(;g=n.lastChild;)n.removeChild(g);if(typeof h=="function"){var F=h;h=function(){var te=Ol(H);F.call(te)}}var H=ch(n,0,!1,null,null,!1,!1,"",jm);return n._reactRootContainer=H,n[qi]=H.current,qo(n.nodeType===8?n.parentNode:n),as(function(){Fl(r,H,l,h)}),H}function zl(n,r,l,h,g){var v=l._reactRootContainer;if(v){var T=v;if(typeof g=="function"){var F=g;g=function(){var H=Ol(T);F.call(H)}}Fl(r,T,n,g)}else T=sx(l,r,n,g,h);return Ol(T)}Ad=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=_n(r.pendingLanes);l!==0&&(Qr(r,l|1),Yn(r,X()),(Rt&6)===0&&(js=X()+500,wr()))}break;case 13:as(function(){var h=Qi(n,1);if(h!==null){var g=Nn();Mi(h,n,1,g)}}),hh(n,1)}},ku=function(n){if(n.tag===13){var r=Qi(n,134217728);if(r!==null){var l=Nn();Mi(r,n,134217728,l)}hh(n,134217728)}},Rd=function(n){if(n.tag===13){var r=Lr(n),l=Qi(n,r);if(l!==null){var h=Nn();Mi(l,n,r,h)}hh(n,r)}},bd=function(){return yt},Cd=function(n,r){var l=yt;try{return yt=n,r()}finally{yt=l}},be=function(n,r,l){switch(r){case"input":if($e(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==n&&h.form===n.form){var g=il(h);if(!g)throw Error(t(90));Qe(h),$e(h,g)}}}break;case"textarea":me(n,l);break;case"select":r=l.value,r!=null&&N(n,!!l.multiple,r,!1)}},Bt=rh,rn=as;var ox={usingClientEntryPoint:!1,Events:[Zo,Is,il,Le,ut,rh]},ha={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ax={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=za(n),n===null?null:n.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{Ke=Vl.inject(ax),ct=Vl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox,qn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dh(r))throw Error(t(200));return ix(n,r,null,l)},qn.createRoot=function(n,r){if(!dh(n))throw Error(t(299));var l=!1,h="",g=Xm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(g=r.onRecoverableError)),r=ch(n,1,!1,null,null,l,!1,h,g),n[qi]=r.current,qo(n.nodeType===8?n.parentNode:n),new fh(r)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=za(r),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return as(n)},qn.hydrate=function(n,r,l){if(!Bl(r))throw Error(t(200));return zl(null,n,r,!0,l)},qn.hydrateRoot=function(n,r,l){if(!dh(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,g=!1,v="",T=Xm;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=Gm(r,null,n,1,l??null,g,!1,v,T),n[qi]=r.current,qo(n),h)for(n=0;n<h.length;n++)l=h[n],g=l._getVersion,g=g(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,g]:r.mutableSourceEagerHydrationData.push(l,g);return new kl(r)},qn.render=function(n,r,l){if(!Bl(r))throw Error(t(200));return zl(null,n,r,!1,l)},qn.unmountComponentAtNode=function(n){if(!Bl(n))throw Error(t(40));return n._reactRootContainer?(as(function(){zl(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1},qn.unstable_batchedUpdates=rh,qn.unstable_renderSubtreeIntoContainer=function(n,r,l,h){if(!Bl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return zl(n,r,l,!1,h)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var eg;function mx(){if(eg)return gh.exports;eg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gh.exports=px(),gh.exports}var tg;function gx(){if(tg)return Hl;tg=1;var o=mx();return Hl.createRoot=o.createRoot,Hl.hydrateRoot=o.hydrateRoot,Hl}var _x=gx();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nd="171",po={ROTATE:0,DOLLY:1,PAN:2},co={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vx=0,ng=1,xx=2,B_=1,yx=2,lr=3,zi=0,Bn=1,pi=2,Ci=0,mo=1,af=2,ig=3,rg=4,Sx=5,xs=100,Mx=101,Ex=102,Tx=103,wx=104,Ax=200,Rx=201,bx=202,Cx=203,lf=204,uf=205,Px=206,Lx=207,Dx=208,Ix=209,Nx=210,Ux=211,Fx=212,Ox=213,kx=214,cf=0,hf=1,ff=2,xo=3,df=4,pf=5,mf=6,gf=7,id=0,Bx=1,zx=2,Yr=0,Vx=1,Hx=2,Gx=3,Wx=4,Xx=5,jx=6,Yx=7,sg="attached",qx="detached",z_=300,yo=301,So=302,_f=303,vf=304,Lu=306,Mo=1e3,Wr=1001,Au=1002,zn=1003,V_=1004,Ma=1005,ni=1006,vu=1007,cr=1008,dr=1009,H_=1010,G_=1011,ba=1012,rd=1013,Ms=1014,bi=1015,di=1016,sd=1017,od=1018,Eo=1020,W_=35902,X_=1021,j_=1022,mi=1023,Y_=1024,q_=1025,go=1026,To=1027,ad=1028,ld=1029,K_=1030,ud=1031,cd=1033,xu=33776,yu=33777,Su=33778,Mu=33779,xf=35840,yf=35841,Sf=35842,Mf=35843,Ef=36196,Tf=37492,wf=37496,Af=37808,Rf=37809,bf=37810,Cf=37811,Pf=37812,Lf=37813,Df=37814,If=37815,Nf=37816,Uf=37817,Ff=37818,Of=37819,kf=37820,Bf=37821,Eu=36492,zf=36494,Vf=36495,$_=36283,Hf=36284,Gf=36285,Wf=36286,Ca=2300,Pa=2301,xh=2302,og=2400,ag=2401,lg=2402,Kx=2500,$x=0,Z_=1,Xf=2,Zx=3200,Q_=3201,hd=0,Qx=1,Gr="",tn="srgb",Vn="srgb-linear",Ru="linear",Ft="srgb",qs=7680,ug=519,Jx=512,ey=513,ty=514,J_=515,ny=516,iy=517,ry=518,sy=519,jf=35044,cg="300 es",hr=2e3,bu=2001;class Es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hg=1234567;const Ta=Math.PI/180,wo=180/Math.PI;function Pi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function _t(o,e,t){return Math.max(e,Math.min(t,o))}function fd(o,e){return(o%e+e)%e}function oy(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function ay(o,e,t){return o!==e?(t-o)/(e-o):0}function wa(o,e,t){return(1-t)*o+t*e}function ly(o,e,t,i){return wa(o,e,1-Math.exp(-t*i))}function uy(o,e=1){return e-Math.abs(fd(o,e*2)-e)}function cy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function hy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function fy(o,e){return o+Math.floor(Math.random()*(e-o+1))}function dy(o,e){return o+Math.random()*(e-o)}function py(o){return o*(.5-Math.random())}function my(o){o!==void 0&&(hg=o);let e=hg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gy(o){return o*Ta}function _y(o){return o*wo}function vy(o){return(o&o-1)===0&&o!==0}function xy(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function yy(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Sy(o,e,t,i,s){const a=Math.cos,u=Math.sin,c=a(t/2),f=u(t/2),d=a((e+i)/2),p=u((e+i)/2),m=a((e-i)/2),_=u((e-i)/2),y=a((i-e)/2),M=u((i-e)/2);switch(s){case"XYX":o.set(c*p,f*m,f*_,c*d);break;case"YZY":o.set(f*_,c*p,f*m,c*d);break;case"ZXZ":o.set(f*m,f*_,c*p,c*d);break;case"XZX":o.set(c*p,f*M,f*y,c*d);break;case"YXY":o.set(f*y,c*p,f*M,c*d);break;case"ZYZ":o.set(f*M,f*y,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function It(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ao={DEG2RAD:Ta,RAD2DEG:wo,generateUUID:Pi,clamp:_t,euclideanModulo:fd,mapLinear:oy,inverseLerp:ay,lerp:wa,damp:ly,pingpong:uy,smoothstep:cy,smootherstep:hy,randInt:fy,randFloat:dy,randFloatSpread:py,seededRandom:my,degToRad:gy,radToDeg:_y,isPowerOfTwo:vy,ceilPowerOfTwo:xy,floorPowerOfTwo:yy,setQuaternionFromProperEuler:Sy,normalize:It,denormalize:Ai};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*s+e.x,this.y=a*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,i,s,a,u,c,f,d){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,f,d)}set(e,t,i,s,a,u,c,f,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[3],f=i[6],d=i[1],p=i[4],m=i[7],_=i[2],y=i[5],M=i[8],E=s[0],S=s[3],x=s[6],L=s[1],C=s[4],A=s[7],O=s[2],I=s[5],U=s[8];return a[0]=u*E+c*L+f*O,a[3]=u*S+c*C+f*I,a[6]=u*x+c*A+f*U,a[1]=d*E+p*L+m*O,a[4]=d*S+p*C+m*I,a[7]=d*x+p*A+m*U,a[2]=_*E+y*L+M*O,a[5]=_*S+y*C+M*I,a[8]=_*x+y*A+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*a*p+i*c*f+s*a*d-s*u*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],m=p*u-c*d,_=c*f-p*a,y=d*a-u*f,M=t*m+i*_+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=m*E,e[1]=(s*d-p*i)*E,e[2]=(c*i-s*u)*E,e[3]=_*E,e[4]=(p*t-s*f)*E,e[5]=(s*a-c*t)*E,e[6]=y*E,e[7]=(i*f-d*t)*E,e[8]=(u*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,u,c){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*u+d*c)+u+e,-s*d,s*f,-s*(-d*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(yh.makeScale(e,t)),this}rotate(e){return this.premultiply(yh.makeRotation(-e)),this}translate(e,t){return this.premultiply(yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yh=new dt;function ev(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function La(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function My(){const o=La("canvas");return o.style.display="block",o}const fg={};function uo(o){o in fg||(fg[o]=!0,console.warn(o))}function Ey(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function Ty(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wy(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dg=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pg=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ay(){const o={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(s,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Ft&&(s.r=fr(s.r),s.g=fr(s.g),s.b=fr(s.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(s.r=_o(s.r),s.g=_o(s.g),s.b=_o(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gr?Ru:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,u){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Vn]:{primaries:e,whitePoint:i,transfer:Ru,toXYZ:dg,fromXYZ:pg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:dg,fromXYZ:pg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),o}const wt=Ay();function fr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function _o(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ks;class Ry{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ks===void 0&&(Ks=La("canvas")),Ks.width=e.width,Ks.height=e.height;const i=Ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=La("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=fr(a[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fr(t[i]/255)*255):t[i]=fr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let by=0;class tv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(Sh(s[u].image)):a.push(Sh(s[u]))}else a=Sh(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Sh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ry.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cy=0;class mn extends Es{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=Wr,s=Wr,a=ni,u=cr,c=mi,f=dr,d=mn.DEFAULT_ANISOTROPY,p=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Pi(),this.name="",this.source=new tv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case Au:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case Au:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=z_;mn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const f=e.elements,d=f[0],p=f[4],m=f[8],_=f[1],y=f[5],M=f[9],E=f[2],S=f[6],x=f[10];if(Math.abs(p-_)<.01&&Math.abs(m-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,A=(y+1)/2,O=(x+1)/2,I=(p+_)/4,U=(m+E)/4,B=(M+S)/4;return C>A&&C>O?C<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(C),s=I/i,a=U/i):A>O?A<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(A),i=I/s,a=B/s):O<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(O),i=U/a,s=B/a),this.set(i,s,a,t),this}let L=Math.sqrt((S-M)*(S-M)+(m-E)*(m-E)+(_-p)*(_-p));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(m-E)/L,this.z=(_-p)/L,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Py extends Es{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Py{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nv extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ly extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,u,c){let f=i[s+0],d=i[s+1],p=i[s+2],m=i[s+3];const _=a[u+0],y=a[u+1],M=a[u+2],E=a[u+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(c===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(m!==E||f!==_||d!==y||p!==M){let S=1-c;const x=f*_+d*y+p*M+m*E,L=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const O=Math.sqrt(C),I=Math.atan2(O,x*L);S=Math.sin(S*I)/O,c=Math.sin(c*I)/O}const A=c*L;if(f=f*S+_*A,d=d*S+y*A,p=p*S+M*A,m=m*S+E*A,S===1-c){const O=1/Math.sqrt(f*f+d*d+p*p+m*m);f*=O,d*=O,p*=O,m*=O}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,s,a,u){const c=i[s],f=i[s+1],d=i[s+2],p=i[s+3],m=a[u],_=a[u+1],y=a[u+2],M=a[u+3];return e[t]=c*M+p*m+f*y-d*_,e[t+1]=f*M+p*_+d*m-c*y,e[t+2]=d*M+p*y+c*_-f*m,e[t+3]=p*M-c*m-f*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,d=c(i/2),p=c(s/2),m=c(a/2),_=f(i/2),y=f(s/2),M=f(a/2);switch(u){case"XYZ":this._x=_*p*m+d*y*M,this._y=d*y*m-_*p*M,this._z=d*p*M+_*y*m,this._w=d*p*m-_*y*M;break;case"YXZ":this._x=_*p*m+d*y*M,this._y=d*y*m-_*p*M,this._z=d*p*M-_*y*m,this._w=d*p*m+_*y*M;break;case"ZXY":this._x=_*p*m-d*y*M,this._y=d*y*m+_*p*M,this._z=d*p*M+_*y*m,this._w=d*p*m-_*y*M;break;case"ZYX":this._x=_*p*m-d*y*M,this._y=d*y*m+_*p*M,this._z=d*p*M-_*y*m,this._w=d*p*m+_*y*M;break;case"YZX":this._x=_*p*m+d*y*M,this._y=d*y*m+_*p*M,this._z=d*p*M-_*y*m,this._w=d*p*m-_*y*M;break;case"XZY":this._x=_*p*m-d*y*M,this._y=d*y*m-_*p*M,this._z=d*p*M+_*y*m,this._w=d*p*m+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],u=t[1],c=t[5],f=t[9],d=t[2],p=t[6],m=t[10],_=i+c+m;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(p-f)*y,this._y=(a-d)*y,this._z=(u-s)*y}else if(i>c&&i>m){const y=2*Math.sqrt(1+i-c-m);this._w=(p-f)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(a+d)/y}else if(c>m){const y=2*Math.sqrt(1+c-i-m);this._w=(a-d)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(f+p)/y}else{const y=2*Math.sqrt(1+m-i-c);this._w=(u-s)/y,this._x=(a+d)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,u=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+s*d-a*f,this._y=s*p+u*f+a*c-i*d,this._z=a*p+u*d+i*f-s*c,this._w=u*p-i*c-s*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,c),m=Math.sin((1-t)*p)/d,_=Math.sin(t*p)/d;return this._w=u*m+this._w*_,this._x=i*m+this._x*_,this._y=s*m+this._y*_,this._z=a*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,u=e.y,c=e.z,f=e.w,d=2*(u*s-c*i),p=2*(c*t-a*s),m=2*(a*i-u*t);return this.x=t+f*d+u*m-c*p,this.y=i+f*p+c*d-a*m,this.z=s+f*m+a*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=s*f-a*c,this.y=a*u-i*f,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new W,mg=new Vi;class Hi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(a,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gl.copy(i.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),Wl.subVectors(this.max,da),$s.subVectors(e.a,da),Zs.subVectors(e.b,da),Qs.subVectors(e.c,da),Ur.subVectors(Zs,$s),Fr.subVectors(Qs,Zs),hs.subVectors($s,Qs);let t=[0,-Ur.z,Ur.y,0,-Fr.z,Fr.y,0,-hs.z,hs.y,Ur.z,0,-Ur.x,Fr.z,0,-Fr.x,hs.z,0,-hs.x,-Ur.y,Ur.x,0,-Fr.y,Fr.x,0,-hs.y,hs.x,0];return!Eh(t,$s,Zs,Qs,Wl)||(t=[1,0,0,0,1,0,0,0,1],!Eh(t,$s,Zs,Qs,Wl))?!1:(Xl.crossVectors(Ur,Fr),t=[Xl.x,Xl.y,Xl.z],Eh(t,$s,Zs,Qs,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new W,new W,new W,new W,new W,new W,new W,new W],Ei=new W,Gl=new Hi,$s=new W,Zs=new W,Qs=new W,Ur=new W,Fr=new W,hs=new W,da=new W,Wl=new W,Xl=new W,fs=new W;function Eh(o,e,t,i,s){for(let a=0,u=o.length-3;a<=u;a+=3){fs.fromArray(o,a);const c=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),f=e.dot(fs),d=t.dot(fs),p=i.dot(fs);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const Dy=new Hi,pa=new W,Th=new W;class Gi{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Dy.setFromPoints(e).getCenter(i);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const t=pa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(pa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(Th)),this.expandByPoint(pa.copy(e.center).sub(Th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ir=new W,wh=new W,jl=new W,Or=new W,Ah=new W,Yl=new W,Rh=new W;class Lo{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){wh.copy(e).add(t).multiplyScalar(.5),jl.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(wh);const a=e.distanceTo(t)*.5,u=-this.direction.dot(jl),c=Or.dot(this.direction),f=-Or.dot(jl),d=Or.lengthSq(),p=Math.abs(1-u*u);let m,_,y,M;if(p>0)if(m=u*f-c,_=u*c-f,M=a*p,m>=0)if(_>=-M)if(_<=M){const E=1/p;m*=E,_*=E,y=m*(m+u*_+2*c)+_*(u*m+_+2*f)+d}else _=a,m=Math.max(0,-(u*_+c)),y=-m*m+_*(_+2*f)+d;else _=-a,m=Math.max(0,-(u*_+c)),y=-m*m+_*(_+2*f)+d;else _<=-M?(m=Math.max(0,-(-u*a+c)),_=m>0?-a:Math.min(Math.max(-a,-f),a),y=-m*m+_*(_+2*f)+d):_<=M?(m=0,_=Math.min(Math.max(-a,-f),a),y=_*(_+2*f)+d):(m=Math.max(0,-(u*a+c)),_=m>0?a:Math.min(Math.max(-a,-f),a),y=-m*m+_*(_+2*f)+d);else _=u>0?-a:a,m=Math.max(0,-(u*_+c)),y=-m*m+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(wh).addScaledVector(jl,_),y}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const i=ir.dot(this.direction),s=ir.dot(ir)-i*i,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,u,c,f;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),p>=0?(a=(e.min.y-_.y)*p,u=(e.max.y-_.y)*p):(a=(e.max.y-_.y)*p,u=(e.min.y-_.y)*p),i>u||a>s||((a>i||isNaN(i))&&(i=a),(u<s||isNaN(s))&&(s=u),m>=0?(c=(e.min.z-_.z)*m,f=(e.max.z-_.z)*m):(c=(e.max.z-_.z)*m,f=(e.min.z-_.z)*m),i>f||c>s)||((c>i||i!==i)&&(i=c),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,i,s,a){Ah.subVectors(t,e),Yl.subVectors(i,e),Rh.crossVectors(Ah,Yl);let u=this.direction.dot(Rh),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Or.subVectors(this.origin,e);const f=c*this.direction.dot(Yl.crossVectors(Or,Yl));if(f<0)return null;const d=c*this.direction.dot(Ah.cross(Or));if(d<0||f+d>u)return null;const p=-c*Or.dot(Rh);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,s,a,u,c,f,d,p,m,_,y,M,E,S){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,f,d,p,m,_,y,M,E,S)}set(e,t,i,s,a,u,c,f,d,p,m,_,y,M,E,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=u,x[9]=c,x[13]=f,x[2]=d,x[6]=p,x[10]=m,x[14]=_,x[3]=y,x[7]=M,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Js.setFromMatrixColumn(e,0).length(),a=1/Js.setFromMatrixColumn(e,1).length(),u=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(s),d=Math.sin(s),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const _=u*p,y=u*m,M=c*p,E=c*m;t[0]=f*p,t[4]=-f*m,t[8]=d,t[1]=y+M*d,t[5]=_-E*d,t[9]=-c*f,t[2]=E-_*d,t[6]=M+y*d,t[10]=u*f}else if(e.order==="YXZ"){const _=f*p,y=f*m,M=d*p,E=d*m;t[0]=_+E*c,t[4]=M*c-y,t[8]=u*d,t[1]=u*m,t[5]=u*p,t[9]=-c,t[2]=y*c-M,t[6]=E+_*c,t[10]=u*f}else if(e.order==="ZXY"){const _=f*p,y=f*m,M=d*p,E=d*m;t[0]=_-E*c,t[4]=-u*m,t[8]=M+y*c,t[1]=y+M*c,t[5]=u*p,t[9]=E-_*c,t[2]=-u*d,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const _=u*p,y=u*m,M=c*p,E=c*m;t[0]=f*p,t[4]=M*d-y,t[8]=_*d+E,t[1]=f*m,t[5]=E*d+_,t[9]=y*d-M,t[2]=-d,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const _=u*f,y=u*d,M=c*f,E=c*d;t[0]=f*p,t[4]=E-_*m,t[8]=M*m+y,t[1]=m,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=y*m+M,t[10]=_-E*m}else if(e.order==="XZY"){const _=u*f,y=u*d,M=c*f,E=c*d;t[0]=f*p,t[4]=-m,t[8]=d*p,t[1]=_*m+E,t[5]=u*p,t[9]=y*m-M,t[2]=M*m-y,t[6]=c*p,t[10]=E*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Iy,e,Ny)}lookAt(e,t,i){const s=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),kr.crossVectors(i,ei),kr.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),kr.crossVectors(i,ei)),kr.normalize(),ql.crossVectors(ei,kr),s[0]=kr.x,s[4]=ql.x,s[8]=ei.x,s[1]=kr.y,s[5]=ql.y,s[9]=ei.y,s[2]=kr.z,s[6]=ql.z,s[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[4],f=i[8],d=i[12],p=i[1],m=i[5],_=i[9],y=i[13],M=i[2],E=i[6],S=i[10],x=i[14],L=i[3],C=i[7],A=i[11],O=i[15],I=s[0],U=s[4],B=s[8],P=s[12],b=s[1],k=s[5],oe=s[9],J=s[13],ue=s[2],he=s[6],ie=s[10],le=s[14],V=s[3],ce=s[7],z=s[11],D=s[15];return a[0]=u*I+c*b+f*ue+d*V,a[4]=u*U+c*k+f*he+d*ce,a[8]=u*B+c*oe+f*ie+d*z,a[12]=u*P+c*J+f*le+d*D,a[1]=p*I+m*b+_*ue+y*V,a[5]=p*U+m*k+_*he+y*ce,a[9]=p*B+m*oe+_*ie+y*z,a[13]=p*P+m*J+_*le+y*D,a[2]=M*I+E*b+S*ue+x*V,a[6]=M*U+E*k+S*he+x*ce,a[10]=M*B+E*oe+S*ie+x*z,a[14]=M*P+E*J+S*le+x*D,a[3]=L*I+C*b+A*ue+O*V,a[7]=L*U+C*k+A*he+O*ce,a[11]=L*B+C*oe+A*ie+O*z,a[15]=L*P+C*J+A*le+O*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],u=e[1],c=e[5],f=e[9],d=e[13],p=e[2],m=e[6],_=e[10],y=e[14],M=e[3],E=e[7],S=e[11],x=e[15];return M*(+a*f*m-s*d*m-a*c*_+i*d*_+s*c*y-i*f*y)+E*(+t*f*y-t*d*_+a*u*_-s*u*y+s*d*p-a*f*p)+S*(+t*d*m-t*c*y-a*u*m+i*u*y+a*c*p-i*d*p)+x*(-s*c*p-t*f*m+t*c*_+s*u*m-i*u*_+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],m=e[9],_=e[10],y=e[11],M=e[12],E=e[13],S=e[14],x=e[15],L=m*S*d-E*_*d+E*f*y-c*S*y-m*f*x+c*_*x,C=M*_*d-p*S*d-M*f*y+u*S*y+p*f*x-u*_*x,A=p*E*d-M*m*d+M*c*y-u*E*y-p*c*x+u*m*x,O=M*m*f-p*E*f-M*c*_+u*E*_+p*c*S-u*m*S,I=t*L+i*C+s*A+a*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/I;return e[0]=L*U,e[1]=(E*_*a-m*S*a-E*s*y+i*S*y+m*s*x-i*_*x)*U,e[2]=(c*S*a-E*f*a+E*s*d-i*S*d-c*s*x+i*f*x)*U,e[3]=(m*f*a-c*_*a-m*s*d+i*_*d+c*s*y-i*f*y)*U,e[4]=C*U,e[5]=(p*S*a-M*_*a+M*s*y-t*S*y-p*s*x+t*_*x)*U,e[6]=(M*f*a-u*S*a-M*s*d+t*S*d+u*s*x-t*f*x)*U,e[7]=(u*_*a-p*f*a+p*s*d-t*_*d-u*s*y+t*f*y)*U,e[8]=A*U,e[9]=(M*m*a-p*E*a-M*i*y+t*E*y+p*i*x-t*m*x)*U,e[10]=(u*E*a-M*c*a+M*i*d-t*E*d-u*i*x+t*c*x)*U,e[11]=(p*c*a-u*m*a-p*i*d+t*m*d+u*i*y-t*c*y)*U,e[12]=O*U,e[13]=(p*E*s-M*m*s+M*i*_-t*E*_-p*i*S+t*m*S)*U,e[14]=(M*c*s-u*E*s-M*i*f+t*E*f+u*i*S-t*c*S)*U,e[15]=(u*m*s-p*c*s+p*i*f-t*m*f-u*i*_+t*c*_)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,u=e.x,c=e.y,f=e.z,d=a*u,p=a*c;return this.set(d*u+i,d*c-s*f,d*f+s*c,0,d*c+s*f,p*c+i,p*f-s*u,0,d*f-s*c,p*f+s*u,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,u){return this.set(1,i,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,d=a+a,p=u+u,m=c+c,_=a*d,y=a*p,M=a*m,E=u*p,S=u*m,x=c*m,L=f*d,C=f*p,A=f*m,O=i.x,I=i.y,U=i.z;return s[0]=(1-(E+x))*O,s[1]=(y+A)*O,s[2]=(M-C)*O,s[3]=0,s[4]=(y-A)*I,s[5]=(1-(_+x))*I,s[6]=(S+L)*I,s[7]=0,s[8]=(M+C)*U,s[9]=(S-L)*U,s[10]=(1-(_+E))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Js.set(s[0],s[1],s[2]).length();const u=Js.set(s[4],s[5],s[6]).length(),c=Js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ti.copy(this);const d=1/a,p=1/u,m=1/c;return Ti.elements[0]*=d,Ti.elements[1]*=d,Ti.elements[2]*=d,Ti.elements[4]*=p,Ti.elements[5]*=p,Ti.elements[6]*=p,Ti.elements[8]*=m,Ti.elements[9]*=m,Ti.elements[10]*=m,t.setFromRotationMatrix(Ti),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,s,a,u,c=hr){const f=this.elements,d=2*a/(t-e),p=2*a/(i-s),m=(t+e)/(t-e),_=(i+s)/(i-s);let y,M;if(c===hr)y=-(u+a)/(u-a),M=-2*u*a/(u-a);else if(c===bu)y=-u/(u-a),M=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=p,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,a,u,c=hr){const f=this.elements,d=1/(t-e),p=1/(i-s),m=1/(u-a),_=(t+e)*d,y=(i+s)*p;let M,E;if(c===hr)M=(u+a)*m,E=-2*m;else if(c===bu)M=a*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=E,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Js=new W,Ti=new ft,Iy=new W(0,0,0),Ny=new W(1,1,1),kr=new W,ql=new W,ei=new W,gg=new ft,_g=new Vi;class Li{constructor(e=0,t=0,i=0,s=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],f=s[1],d=s[5],p=s[9],m=s[2],_=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uy=0;const vg=new W,eo=new Vi,rr=new ft,Kl=new W,ma=new W,Fy=new W,Oy=new Vi,xg=new W(1,0,0),yg=new W(0,1,0),Sg=new W(0,0,1),Mg={type:"added"},ky={type:"removed"},to={type:"childadded",child:null},bh={type:"childremoved",child:null};class Xt extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new W,t=new Li,i=new Vi,s=new W(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new dt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(xg,e)}rotateY(e){return this.rotateOnAxis(yg,e)}rotateZ(e){return this.rotateOnAxis(Sg,e)}translateOnAxis(e,t){return vg.copy(e).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xg,e)}translateY(e){return this.translateOnAxis(yg,e)}translateZ(e){return this.translateOnAxis(Sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kl.copy(e):Kl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(ma,Kl,this.up):rr.lookAt(Kl,ma,this.up),this.quaternion.setFromRotationMatrix(rr),s&&(rr.extractRotation(s.matrixWorld),eo.setFromRotationMatrix(rr),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mg),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ky),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mg),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,Fy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,Oy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const m=f[d];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];s.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),d=u(e.textures),p=u(e.images),m=u(e.shapes),_=u(e.skeletons),y=u(e.animations),M=u(e.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=s,i;function u(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new W(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new W,sr=new W,Ch=new W,or=new W,no=new W,io=new W,Eg=new W,Ph=new W,Lh=new W,Dh=new W,Ih=new Lt,Nh=new Lt,Uh=new Lt;class Ri{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wi.subVectors(e,t),s.cross(wi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){wi.subVectors(s,t),sr.subVectors(i,t),Ch.subVectors(e,t);const u=wi.dot(wi),c=wi.dot(sr),f=wi.dot(Ch),d=sr.dot(sr),p=sr.dot(Ch),m=u*d-c*c;if(m===0)return a.set(0,0,0),null;const _=1/m,y=(d*f-c*p)*_,M=(u*p-c*f)*_;return a.set(1-y-M,M,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,i,s,a,u,c,f){return this.getBarycoord(e,t,i,s,or)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,or.x),f.addScaledVector(u,or.y),f.addScaledVector(c,or.z),f)}static getInterpolatedAttribute(e,t,i,s,a,u){return Ih.setScalar(0),Nh.setScalar(0),Uh.setScalar(0),Ih.fromBufferAttribute(e,t),Nh.fromBufferAttribute(e,i),Uh.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Ih,a.x),u.addScaledVector(Nh,a.y),u.addScaledVector(Uh,a.z),u}static isFrontFacing(e,t,i,s){return wi.subVectors(i,t),sr.subVectors(e,t),wi.cross(sr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),wi.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Ri.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let u,c;no.subVectors(s,i),io.subVectors(a,i),Ph.subVectors(e,i);const f=no.dot(Ph),d=io.dot(Ph);if(f<=0&&d<=0)return t.copy(i);Lh.subVectors(e,s);const p=no.dot(Lh),m=io.dot(Lh);if(p>=0&&m<=p)return t.copy(s);const _=f*m-p*d;if(_<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(i).addScaledVector(no,u);Dh.subVectors(e,a);const y=no.dot(Dh),M=io.dot(Dh);if(M>=0&&y<=M)return t.copy(a);const E=y*d-f*M;if(E<=0&&d>=0&&M<=0)return c=d/(d-M),t.copy(i).addScaledVector(io,c);const S=p*M-y*m;if(S<=0&&m-p>=0&&y-M>=0)return Eg.subVectors(a,s),c=(m-p)/(m-p+(y-M)),t.copy(s).addScaledVector(Eg,c);const x=1/(S+E+_);return u=E*x,c=_*x,t.copy(i).addScaledVector(no,u).addScaledVector(io,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},$l={h:0,s:0,l:0};function Fh(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=wt.workingColorSpace){if(e=fd(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Fh(u,a,e+1/3),this.g=Fh(u,a,e),this.b=Fh(u,a,e-1/3)}return wt.toWorkingColorSpace(this,s),this}setStyle(e,t=tn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const i=iv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return wt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(_t(Rn.r*255,0,255))*65536+Math.round(_t(Rn.g*255,0,255))*256+Math.round(_t(Rn.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Rn.copy(this),t);const i=Rn.r,s=Rn.g,a=Rn.b,u=Math.max(i,s,a),c=Math.min(i,s,a);let f,d;const p=(c+u)/2;if(c===u)f=0,d=0;else{const m=u-c;switch(d=p<=.5?m/(u+c):m/(2-u-c),u){case i:f=(s-a)/m+(s<a?6:0);break;case s:f=(a-i)/m+2;break;case a:f=(i-s)/m+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=tn){wt.fromWorkingColorSpace(Rn.copy(this),e);const t=Rn.r,i=Rn.g,s=Rn.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL($l);const i=wa(Br.h,$l.h,t),s=wa(Br.s,$l.s,t),a=wa(Br.l,$l.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new We;We.NAMES=iv;let By=0;class ii extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=mo,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=uf,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lf&&(i.blendSrc=this.blendSrc),this.blendDst!==uf&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ss extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new W,Zl=new qe;class gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jf,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zl.fromBufferAttribute(this,t),Zl.applyMatrix3(e),this.setXY(t,Zl.x,Zl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array),a=It(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jf&&(e.usage=this.usage),e}}class rv extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sv extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nn extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zy=0;const ci=new ft,Oh=new Xt,ro=new W,ti=new Hi,ga=new Hi,dn=new W;class Cn extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ev(e)?sv:rv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new dt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new nn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];ga.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(ti.min,ga.min),ti.expandByPoint(dn),dn.addVectors(ti.max,ga.max),ti.expandByPoint(dn)):(ti.expandByPoint(ga.min),ti.expandByPoint(ga.max))}ti.getCenter(i);let s=0;for(let a=0,u=e.count;a<u;a++)dn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(dn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)dn.fromBufferAttribute(c,d),f&&(ro.fromBufferAttribute(e,d),dn.add(ro)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let B=0;B<i.count;B++)c[B]=new W,f[B]=new W;const d=new W,p=new W,m=new W,_=new qe,y=new qe,M=new qe,E=new W,S=new W;function x(B,P,b){d.fromBufferAttribute(i,B),p.fromBufferAttribute(i,P),m.fromBufferAttribute(i,b),_.fromBufferAttribute(a,B),y.fromBufferAttribute(a,P),M.fromBufferAttribute(a,b),p.sub(d),m.sub(d),y.sub(_),M.sub(_);const k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(m,-y.y).multiplyScalar(k),S.copy(m).multiplyScalar(y.x).addScaledVector(p,-M.x).multiplyScalar(k),c[B].add(E),c[P].add(E),c[b].add(E),f[B].add(S),f[P].add(S),f[b].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let B=0,P=L.length;B<P;++B){const b=L[B],k=b.start,oe=b.count;for(let J=k,ue=k+oe;J<ue;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const C=new W,A=new W,O=new W,I=new W;function U(B){O.fromBufferAttribute(s,B),I.copy(O);const P=c[B];C.copy(P),C.sub(O.multiplyScalar(O.dot(P))).normalize(),A.crossVectors(I,P);const k=A.dot(f[B])<0?-1:1;u.setXYZW(B,C.x,C.y,C.z,k)}for(let B=0,P=L.length;B<P;++B){const b=L[B],k=b.start,oe=b.count;for(let J=k,ue=k+oe;J<ue;J+=3)U(e.getX(J+0)),U(e.getX(J+1)),U(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const s=new W,a=new W,u=new W,c=new W,f=new W,d=new W,p=new W,m=new W;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),p.subVectors(u,a),m.subVectors(s,a),p.cross(m),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),c.add(p),f.add(p),d.add(p),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,y=t.count;_<y;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),p.subVectors(u,a),m.subVectors(s,a),p.cross(m),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,m=c.normalized,_=new d.constructor(f.length*p);let y=0,M=0;for(let E=0,S=f.length;E<S;E++){c.isInterleavedBufferAttribute?y=f[E]*c.data.stride+c.offset:y=f[E]*p;for(let x=0;x<p;x++)_[M++]=d[y++]}return new gn(_,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,i=this.index.array,s=this.attributes;for(const c in s){const f=s[c],d=e(f,i);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let p=0,m=d.length;p<m;p++){const _=d[p],y=e(_,i);f.push(y)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let m=0,_=d.length;m<_;m++){const y=d[m];p.push(y.toJSON(e.data))}p.length>0&&(s[f]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],m=a[d];for(let _=0,y=m.length;_<y;_++)p.push(m[_].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tg=new ft,ds=new Lo,Ql=new Gi,wg=new W,Jl=new W,eu=new W,tu=new W,kh=new W,nu=new W,Ag=new W,iu=new W;class pn extends Xt{constructor(e=new Cn,t=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){nu.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=c[f],m=a[f];p!==0&&(kh.fromBufferAttribute(m,e),u?nu.addScaledVector(kh,p):nu.addScaledVector(kh.sub(t),p))}t.add(nu)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(a),ds.copy(e.ray).recast(e.near),!(Ql.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Ql,wg)===null||ds.origin.distanceToSquared(wg)>(e.far-e.near)**2))&&(Tg.copy(a).invert(),ds.copy(e.ray).applyMatrix4(Tg),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let s;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,_=a.groups,y=a.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const S=_[M],x=u[S.materialIndex],L=Math.max(S.start,y.start),C=Math.min(c.count,Math.min(S.start+S.count,y.start+y.count));for(let A=L,O=C;A<O;A+=3){const I=c.getX(A),U=c.getX(A+1),B=c.getX(A+2);s=ru(this,x,e,i,d,p,m,I,U,B),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(c.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const L=c.getX(S),C=c.getX(S+1),A=c.getX(S+2);s=ru(this,u,e,i,d,p,m,L,C,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const S=_[M],x=u[S.materialIndex],L=Math.max(S.start,y.start),C=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=L,O=C;A<O;A+=3){const I=A,U=A+1,B=A+2;s=ru(this,x,e,i,d,p,m,I,U,B),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const L=S,C=S+1,A=S+2;s=ru(this,u,e,i,d,p,m,L,C,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function Vy(o,e,t,i,s,a,u,c){let f;if(e.side===Bn?f=i.intersectTriangle(u,a,s,!0,c):f=i.intersectTriangle(s,a,u,e.side===zi,c),f===null)return null;iu.copy(c),iu.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(iu);return d<t.near||d>t.far?null:{distance:d,point:iu.clone(),object:o}}function ru(o,e,t,i,s,a,u,c,f,d){o.getVertexPosition(c,Jl),o.getVertexPosition(f,eu),o.getVertexPosition(d,tu);const p=Vy(o,e,t,i,Jl,eu,tu,Ag);if(p){const m=new W;Ri.getBarycoord(Ag,Jl,eu,tu,m),s&&(p.uv=Ri.getInterpolatedAttribute(s,c,f,d,m,new qe)),a&&(p.uv1=Ri.getInterpolatedAttribute(a,c,f,d,m,new qe)),u&&(p.normal=Ri.getInterpolatedAttribute(u,c,f,d,m,new W),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:f,c:d,normal:new W,materialIndex:0};Ri.getNormal(Jl,eu,tu,_.normal),p.face=_,p.barycoord=m}return p}class Da extends Cn{constructor(e=1,t=1,i=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const f=[],d=[],p=[],m=[];let _=0,y=0;M("z","y","x",-1,-1,i,t,e,u,a,0),M("z","y","x",1,-1,i,t,-e,u,a,1),M("x","z","y",1,1,e,i,t,s,u,2),M("x","z","y",1,-1,e,i,-t,s,u,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(p,3)),this.setAttribute("uv",new nn(m,2));function M(E,S,x,L,C,A,O,I,U,B,P){const b=A/U,k=O/B,oe=A/2,J=O/2,ue=I/2,he=U+1,ie=B+1;let le=0,V=0;const ce=new W;for(let z=0;z<ie;z++){const D=z*k-J;for(let K=0;K<he;K++){const ge=K*b-oe;ce[E]=ge*L,ce[S]=D*C,ce[x]=ue,d.push(ce.x,ce.y,ce.z),ce[E]=0,ce[S]=0,ce[x]=I>0?1:-1,p.push(ce.x,ce.y,ce.z),m.push(K/U),m.push(1-z/B),le+=1}}for(let z=0;z<B;z++)for(let D=0;D<U;D++){const K=_+D+he*z,ge=_+D+he*(z+1),$=_+(D+1)+he*(z+1),se=_+(D+1)+he*z;f.push(K,ge,se),f.push(ge,$,se),V+=6}c.addGroup(y,V,P),y+=V,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ro(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Fn(o){const e={};for(let t=0;t<o.length;t++){const i=Ro(o[t]);for(const s in i)e[s]=i[s]}return e}function Hy(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function ov(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const pd={clone:Ro,merge:Fn};var Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=Hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class av extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=hr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zr=new W,Rg=new qe,bg=new qe;class kn extends av{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,Rg,bg),t.subVectors(bg,Rg)}setViewOffset(e,t,i,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,d=u.fullHeight;a+=u.offsetX*s/f,t-=u.offsetY*i/d,s*=u.width/f,i*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class Xy extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(so,oo,e,t);s.layers=this.layers,this.add(s);const a=new kn(so,oo,e,t);a.layers=this.layers,this.add(a);const u=new kn(so,oo,e,t);u.layers=this.layers,this.add(u);const c=new kn(so,oo,e,t);c.layers=this.layers,this.add(c);const f=new kn(so,oo,e,t);f.layers=this.layers,this.add(f);const d=new kn(so,oo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,u,c,f]=t;for(const d of t)this.remove(d);if(e===hr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===bu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,d,p]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,f),e.setRenderTarget(i,4,s),e.render(t,d),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(m,_,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class lv extends mn{constructor(e,t,i,s,a,u,c,f,d,p){e=e!==void 0?e:[],t=t!==void 0?t:yo,super(e,t,i,s,a,u,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jy extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new lv(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Da(5,5,5),a=new bn({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:Ci});a.uniforms.tEquirect.value=t;const u=new pn(s,a),c=t.minFilter;return t.minFilter===cr&&(t.minFilter=ni),new Xy(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(a)}}class Yy extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jf,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Un=new W;class md{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array),a=It(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new md(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Cg=new W,Pg=new Lt,Lg=new Lt,Ky=new W,Dg=new ft,su=new W,Bh=new Gi,Ig=new ft,zh=new Lo;class $y extends pn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sg,this.bindMatrix=new ft,this.bindMatrixInverse=new ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,su),this.boundingBox.expandByPoint(su)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,su),this.boundingSphere.expandByPoint(su)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bh.copy(this.boundingSphere),Bh.applyMatrix4(s),e.ray.intersectsSphere(Bh)!==!1&&(Ig.copy(s).invert(),zh.copy(e.ray).applyMatrix4(Ig),!(this.boundingBox!==null&&zh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Pg.fromBufferAttribute(s.attributes.skinIndex,e),Lg.fromBufferAttribute(s.attributes.skinWeight,e),Cg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const u=Lg.getComponent(a);if(u!==0){const c=Pg.getComponent(a);Dg.multiplyMatrices(i.bones[c].matrixWorld,i.boneInverses[c]),t.addScaledVector(Ky.copy(Cg).applyMatrix4(Dg),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class uv extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cv extends mn{constructor(e=null,t=1,i=1,s,a,u,c,f,d=zn,p=zn,m,_){super(null,u,c,f,d,p,s,a,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ng=new ft,Zy=new ft;class gd{constructor(e=[],t=[]){this.uuid=Pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ft;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,u=e.length;a<u;a++){const c=e[a]?e[a].matrixWorld:Zy;Ng.multiplyMatrices(c,t[a]),Ng.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new gd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new cv(t,e,e,mi,bi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let u=t[a];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),u=new uv),this.bones.push(u),this.boneInverses.push(new ft().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const u=t[s];e.bones.push(u.uuid);const c=i[s];e.boneInverses.push(c.toArray())}return e}}class Yf extends gn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ao=new ft,Ug=new ft,ou=[],Fg=new Hi,Qy=new ft,_a=new pn,va=new Gi;class Jy extends pn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Qy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ao),Fg.copy(e.boundingBox).applyMatrix4(ao),this.boundingBox.union(Fg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ao),va.copy(e.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,u=e*a+1;for(let c=0;c<i.length;c++)i[c]=s[u+c]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(i),e.ray.intersectsSphere(va)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,ao),Ug.multiplyMatrices(i,ao),_a.matrixWorld=Ug,_a.raycast(e,ou);for(let u=0,c=ou.length;u<c;u++){const f=ou[u];f.instanceId=a,f.object=this,t.push(f)}ou.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new cv(new Float32Array(s*this.count),s,this.count,ad,bi));const a=this.morphTexture.source.data.data;let u=0;for(let d=0;d<i.length;d++)u+=i[d];const c=this.geometry.morphTargetsRelative?1:1-u,f=s*e;a[f]=c,a.set(i,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Vh=new W,eS=new W,tS=new dt;class Hr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Vh.subVectors(i,t).cross(eS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tS.getNormalMatrix(e),s=this.coplanarPoint(Vh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Gi,au=new W;class _d{constructor(e=new Hr,t=new Hr,i=new Hr,s=new Hr,a=new Hr,u=new Hr){this.planes=[e,t,i,s,a,u]}set(e,t,i,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hr){const i=this.planes,s=e.elements,a=s[0],u=s[1],c=s[2],f=s[3],d=s[4],p=s[5],m=s[6],_=s[7],y=s[8],M=s[9],E=s[10],S=s[11],x=s[12],L=s[13],C=s[14],A=s[15];if(i[0].setComponents(f-a,_-d,S-y,A-x).normalize(),i[1].setComponents(f+a,_+d,S+y,A+x).normalize(),i[2].setComponents(f+u,_+p,S+M,A+L).normalize(),i[3].setComponents(f-u,_-p,S-M,A-L).normalize(),i[4].setComponents(f-c,_-m,S-E,A-C).normalize(),t===hr)i[5].setComponents(f+c,_+m,S+E,A+C).normalize();else if(t===bu)i[5].setComponents(c,m,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(au.x=s.normal.x>0?e.max.x:e.min.x,au.y=s.normal.y>0?e.max.y:e.min.y,au.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(au)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Aa extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cu=new W,Pu=new W,Og=new ft,xa=new Lo,lu=new Gi,Hh=new W,kg=new W;class vd extends Xt{constructor(e=new Cn,t=new Aa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Cu.fromBufferAttribute(t,s-1),Pu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Cu.distanceTo(Pu);e.setAttribute("lineDistance",new nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lu.copy(i.boundingSphere),lu.applyMatrix4(s),lu.radius+=a,e.ray.intersectsSphere(lu)===!1)return;Og.copy(s).invert(),xa.copy(e.ray).applyMatrix4(Og);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=this.isLineSegments?2:1,p=i.index,_=i.attributes.position;if(p!==null){const y=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let E=y,S=M-1;E<S;E+=d){const x=p.getX(E),L=p.getX(E+1),C=uu(this,e,xa,f,x,L);C&&t.push(C)}if(this.isLineLoop){const E=p.getX(M-1),S=p.getX(y),x=uu(this,e,xa,f,E,S);x&&t.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=y,S=M-1;E<S;E+=d){const x=uu(this,e,xa,f,E,E+1);x&&t.push(x)}if(this.isLineLoop){const E=uu(this,e,xa,f,M-1,y);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function uu(o,e,t,i,s,a){const u=o.geometry.attributes.position;if(Cu.fromBufferAttribute(u,s),Pu.fromBufferAttribute(u,a),t.distanceSqToSegment(Cu,Pu,Hh,kg)>i)return;Hh.applyMatrix4(o.matrixWorld);const f=e.ray.origin.distanceTo(Hh);if(!(f<e.near||f>e.far))return{distance:f,point:kg.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const Bg=new W,zg=new W;class qf extends vd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)Bg.fromBufferAttribute(t,s),zg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Bg.distanceTo(zg);e.setAttribute("lineDistance",new nn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nS extends vd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ho extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vg=new ft,Kf=new Lo,cu=new Gi,hu=new W;class Tu extends Xt{constructor(e=new Cn,t=new ho){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cu.copy(i.boundingSphere),cu.applyMatrix4(s),cu.radius+=a,e.ray.intersectsSphere(cu)===!1)return;Vg.copy(s).invert(),Kf.copy(e.ray).applyMatrix4(Vg);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=i.index,m=i.attributes.position;if(d!==null){const _=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let M=_,E=y;M<E;M++){const S=d.getX(M);hu.fromBufferAttribute(m,S),Hg(hu,S,f,s,e,t,this)}}else{const _=Math.max(0,u.start),y=Math.min(m.count,u.start+u.count);for(let M=_,E=y;M<E;M++)hu.fromBufferAttribute(m,M),Hg(hu,M,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Hg(o,e,t,i,s,a,u){const c=Kf.distanceSqToPoint(o);if(c<t){const f=new W;Kf.closestPointToPoint(o,f),f.applyMatrix4(i);const d=s.ray.origin.distanceTo(f);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Bi extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class hv extends mn{constructor(e,t,i,s,a,u,c,f,d,p=go){if(p!==go&&p!==To)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===go&&(i=Ms),i===void 0&&p===To&&(i=Eo),super(null,s,a,u,c,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:zn,this.minFilter=f!==void 0?f:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Du extends Cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(i),f=Math.floor(s),d=c+1,p=f+1,m=e/c,_=t/f,y=[],M=[],E=[],S=[];for(let x=0;x<p;x++){const L=x*_-u;for(let C=0;C<d;C++){const A=C*m-a;M.push(A,-L,0),E.push(0,0,1),S.push(C/c),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let L=0;L<c;L++){const C=L+d*x,A=L+d*(x+1),O=L+1+d*(x+1),I=L+1+d*x;y.push(C,A,I),y.push(A,O,I)}this.setIndex(y),this.setAttribute("position",new nn(M,3)),this.setAttribute("normal",new nn(E,3)),this.setAttribute("uv",new nn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}class Iu extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hd,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends Iu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class iS extends ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hd,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fv extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rS extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function fu(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function sS(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function oS(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Gg(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,u=0;u!==i;++a){const c=t[a]*e;for(let f=0;f!==e;++f)s[u++]=o[c+f]}return s}function dv(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let u=a[i];if(u!==void 0)if(Array.isArray(u))do u=a[i],u!==void 0&&(e.push(a.time),t.push.apply(t,u)),a=o[s++];while(a!==void 0);else if(u.toArray!==void 0)do u=a[i],u!==void 0&&(e.push(a.time),u.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do u=a[i],u!==void 0&&(e.push(a.time),t.push(u)),a=o[s++];while(a!==void 0)}class Ia{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let u;n:{i:if(!(e<s)){for(let c=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(a=s,s=t[++i],e<s)break t}u=t.length;break n}if(!(e>=a)){const c=t[1];e<c&&(i=2,a=c);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(s=a,a=t[--i-1],e>=a)break t}u=i,i=0;break n}break e}for(;i<u;){const c=i+u>>>1;e<t[c]?u=c:i=c+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let u=0;u!==s;++u)t[u]=i[a+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class aS extends Ia{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:og,endingEnd:og}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,u=e+1,c=s[a],f=s[u];if(c===void 0)switch(this.getSettings_().endingStart){case ag:a=e,c=2*t-i;break;case lg:a=s.length-2,c=t+s[a]-s[a+1];break;default:a=e,c=i}if(f===void 0)switch(this.getSettings_().endingEnd){case ag:u=e,f=2*i-t;break;case lg:u=1,f=i+s[1]-s[0];break;default:u=e-1,f=t}const d=(i-t)*.5,p=this.valueSize;this._weightPrev=d/(t-c),this._weightNext=d/(f-i),this._offsetPrev=a*p,this._offsetNext=u*p}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,f=e*c,d=f-c,p=this._offsetPrev,m=this._offsetNext,_=this._weightPrev,y=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,x=-_*S+2*_*E-_*M,L=(1+_)*S+(-1.5-2*_)*E+(-.5+_)*M+1,C=(-1-y)*S+(1.5+y)*E+.5*M,A=y*S-y*E;for(let O=0;O!==c;++O)a[O]=x*u[p+O]+L*u[d+O]+C*u[f+O]+A*u[m+O];return a}}class lS extends Ia{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,f=e*c,d=f-c,p=(i-t)/(s-t),m=1-p;for(let _=0;_!==c;++_)a[_]=u[d+_]*m+u[f+_]*p;return a}}class uS extends Ia{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fu(t,this.TimeBufferType),this.values=fu(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fu(e.times,Array),values:fu(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new uS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new aS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ca:t=this.InterpolantFactoryMethodDiscrete;break;case Pa:t=this.InterpolantFactoryMethodLinear;break;case xh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return xh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,u=s-1;for(;a!==s&&i[a]<e;)++a;for(;u!==-1&&i[u]>t;)--u;if(++u,a!==0||u!==s){a>=u&&(u=Math.max(u,1),a=u-1);const c=this.getValueSize();this.times=i.slice(a,u),this.values=this.values.slice(a*c,u*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let c=0;c!==a;c++){const f=i[c];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,f),e=!1;break}if(u!==null&&u>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,f,u),e=!1;break}u=f}if(s!==void 0&&sS(s))for(let c=0,f=s.length;c!==f;++c){const d=s[c];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xh,a=e.length-1;let u=1;for(let c=1;c<a;++c){let f=!1;const d=e[c],p=e[c+1];if(d!==p&&(c!==1||d!==e[0]))if(s)f=!0;else{const m=c*i,_=m-i,y=m+i;for(let M=0;M!==i;++M){const E=t[m+M];if(E!==t[_+M]||E!==t[y+M]){f=!0;break}}}if(f){if(c!==u){e[u]=e[c];const m=c*i,_=u*i;for(let y=0;y!==i;++y)t[_+y]=t[m+y]}++u}}if(a>0){e[u]=e[a];for(let c=a*i,f=u*i,d=0;d!==i;++d)t[f+d]=t[c+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=Pa;class Do extends Xi{constructor(e,t,i){super(e,t,i)}}Do.prototype.ValueTypeName="bool";Do.prototype.ValueBufferType=Array;Do.prototype.DefaultInterpolation=Ca;Do.prototype.InterpolantFactoryMethodLinear=void 0;Do.prototype.InterpolantFactoryMethodSmooth=void 0;class pv extends Xi{}pv.prototype.ValueTypeName="color";class bo extends Xi{}bo.prototype.ValueTypeName="number";class cS extends Ia{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,f=(i-t)/(s-t);let d=e*c;for(let p=d+c;d!==p;d+=4)Vi.slerpFlat(a,0,u,d-c,u,d,f);return a}}class Co extends Xi{InterpolantFactoryMethodLinear(e){return new cS(this.times,this.values,this.getValueSize(),e)}}Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;class Io extends Xi{constructor(e,t,i){super(e,t,i)}}Io.prototype.ValueTypeName="string";Io.prototype.ValueBufferType=Array;Io.prototype.DefaultInterpolation=Ca;Io.prototype.InterpolantFactoryMethodLinear=void 0;Io.prototype.InterpolantFactoryMethodSmooth=void 0;class Po extends Xi{}Po.prototype.ValueTypeName="vector";class hS{constructor(e="",t=-1,i=[],s=Kx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Pi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let u=0,c=i.length;u!==c;++u)t.push(dS(i[u]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,u=i.length;a!==u;++a)t.push(Xi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,u=[];for(let c=0;c<a;c++){let f=[],d=[];f.push((c+a-1)%a,c,(c+1)%a),d.push(0,1,0);const p=oS(f);f=Gg(f,1,p),d=Gg(d,1,p),!s&&f[0]===0&&(f.push(a),d.push(d[0])),u.push(new bo(".morphTargetInfluences["+t[c].name+"]",f,d).scale(1/i))}return new this(e,-1,u)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let c=0,f=e.length;c<f;c++){const d=e[c],p=d.name.match(a);if(p&&p.length>1){const m=p[1];let _=s[m];_||(s[m]=_=[]),_.push(d)}}const u=[];for(const c in s)u.push(this.CreateFromMorphTargetSequence(c,s[c],t,i));return u}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(m,_,y,M,E){if(y.length!==0){const S=[],x=[];dv(y,S,x,M),S.length!==0&&E.push(new m(_,S,x))}},s=[],a=e.name||"default",u=e.fps||30,c=e.blendMode;let f=e.length||-1;const d=e.hierarchy||[];for(let m=0;m<d.length;m++){const _=d[m].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)y[_[M].morphTargets[E]]=-1;for(const E in y){const S=[],x=[];for(let L=0;L!==_[M].morphTargets.length;++L){const C=_[M];S.push(C.time),x.push(C.morphTarget===E?1:0)}s.push(new bo(".morphTargetInfluence["+E+"]",S,x))}f=y.length*u}else{const y=".bones["+t[m].name+"]";i(Po,y+".position",_,"pos",s),i(Co,y+".quaternion",_,"rot",s),i(Po,y+".scale",_,"scl",s)}}return s.length===0?null:new this(a,f,s,c)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fS(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bo;case"vector":case"vector2":case"vector3":case"vector4":return Po;case"color":return pv;case"quaternion":return Co;case"bool":case"boolean":return Do;case"string":return Io}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function dS(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fS(o.type);if(o.times===void 0){const t=[],i=[];dv(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Xr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class pS{constructor(e,t,i){const s=this;let a=!1,u=0,c=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){c++,a===!1&&s.onStart!==void 0&&s.onStart(p,u,c),a=!0},this.itemEnd=function(p){u++,s.onProgress!==void 0&&s.onProgress(p,u,c),u===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){const m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,_=d.length;m<_;m+=2){const y=d[m],M=d[m+1];if(y.global&&(y.lastIndex=0),y.test(p))return M}return null}}}const mS=new pS;class qr{constructor(e){this.manager=e!==void 0?e:mS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar={};class gS extends Error{constructor(e,t){super(e),this.response=t}}class Nu extends qr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Xr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(ar[e]!==void 0){ar[e].push({onLoad:t,onProgress:i,onError:s});return}ar[e]=[],ar[e].push({onLoad:t,onProgress:i,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,f=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=ar[e],m=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let E=0;const S=new ReadableStream({start(x){L();function L(){m.read().then(({done:C,value:A})=>{if(C)x.close();else{E+=A.byteLength;const O=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let I=0,U=p.length;I<U;I++){const B=p[I];B.onProgress&&B.onProgress(O)}x.enqueue(A),L()}},C=>{x.error(C)})}}});return new Response(S)}else throw new gS(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return d.json();default:if(c===void 0)return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(c),_=m&&m[1]?m[1].toLowerCase():void 0,y=new TextDecoder(_);return d.arrayBuffer().then(M=>y.decode(M))}}}).then(d=>{Xr.add(e,d);const p=ar[e];delete ar[e];for(let m=0,_=p.length;m<_;m++){const y=p[m];y.onLoad&&y.onLoad(d)}}).catch(d=>{const p=ar[e];if(p===void 0)throw this.manager.itemError(e),d;delete ar[e];for(let m=0,_=p.length;m<_;m++){const y=p[m];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _S extends qr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=Xr.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=La("img");function f(){p(),Xr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(m){p(),s&&s(m),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",f,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",f,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class vS extends qr{constructor(e){super(e)}load(e,t,i,s){const a=new mn,u=new _S(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Na extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xS extends Na{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Gh=new ft,Wg=new W,Xg=new W;class xd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _d,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wg),Xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xg),t.updateMatrixWorld(),Gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yS extends xd{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=wo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class SS extends Na{constructor(e,t,i=0,s=Math.PI/3,a=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=u,this.map=null,this.shadow=new yS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jg=new ft,ya=new W,Wh=new W;class MS extends xd{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ya.setFromMatrixPosition(e.matrixWorld),i.position.copy(ya),Wh.copy(i.position),Wh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wh),i.updateMatrixWorld(),s.makeTranslation(-ya.x,-ya.y,-ya.z),jg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jg)}}class ES extends Na{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new MS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Uu extends av{constructor(e=-1,t=1,i=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class TS extends xd{constructor(){super(new Uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mv extends Na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new TS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wS extends Na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ra{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class AS extends qr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=Xr.get(e);if(u!==void 0){if(a.manager.itemStart(e),u.then){u.then(d=>{t&&t(d),a.manager.itemEnd(e)}).catch(d=>{s&&s(d)});return}return setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const f=fetch(e,c).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){return Xr.add(e,d),t&&t(d),a.manager.itemEnd(e),d}).catch(function(d){s&&s(d),Xr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Xr.add(e,f),a.manager.itemStart(e)}}class RS extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yg(){return performance.now()}const yd="\\[\\]\\.:\\/",bS=new RegExp("["+yd+"]","g"),Sd="[^"+yd+"]",CS="[^"+yd.replace("\\.","")+"]",PS=/((?:WC+[\/:])*)/.source.replace("WC",Sd),LS=/(WCOD+)?/.source.replace("WCOD",CS),DS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sd),IS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sd),NS=new RegExp("^"+PS+LS+DS+IS+"$"),US=["material","materials","bones","map"];class FS{constructor(e,t,i){const s=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Nt{constructor(e,t,i){this.path=t,this.parsedPath=i||Nt.parseTrackName(t),this.node=Nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Nt.Composite(e,t,i):new Nt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bS,"")}static parseTrackName(e){const t=NS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);US.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let u=0;u<a.length;u++){const c=a[u];if(c.name===t||c.uuid===t)return c;const f=i(c.children);if(f)return f}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===d){d=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[s];if(u===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=a}else u.fromArray!==void 0&&u.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(f=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=FS;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const qg=new ft;class OS{constructor(e,t,i=0,s=1/0){this.ray=new Lo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new dd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qg),this}intersectObject(e,t=!0,i=[]){return $f(e,this,i,t),i.sort(Kg),i}intersectObjects(e,t=!0,i=[]){for(let s=0,a=e.length;s<a;s++)$f(e[s],this,i,t);return i.sort(Kg),i}}function Kg(o,e){return o.distance-e.distance}function $f(o,e,t,i){let s=!0;if(o.layers.test(e.layers)&&o.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const a=o.children;for(let u=0,c=a.length;u<c;u++)$f(a[u],e,t,!0)}}class $g{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kS extends Es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Zg(o,e,t,i){const s=BS(i);switch(t){case X_:return o*e;case Y_:return o*e;case q_:return o*e*2;case ad:return o*e/s.components*s.byteLength;case ld:return o*e/s.components*s.byteLength;case K_:return o*e*2/s.components*s.byteLength;case ud:return o*e*2/s.components*s.byteLength;case j_:return o*e*3/s.components*s.byteLength;case mi:return o*e*4/s.components*s.byteLength;case cd:return o*e*4/s.components*s.byteLength;case xu:case yu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Su:case Mu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yf:case Mf:return Math.max(o,16)*Math.max(e,8)/4;case xf:case Sf:return Math.max(o,8)*Math.max(e,8)/2;case Ef:case Tf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case bf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case If:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Of:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case kf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Eu:case zf:case Vf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case $_:case Hf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Gf:case Wf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BS(o){switch(o){case dr:case H_:return{byteLength:1,components:1};case ba:case G_:case di:return{byteLength:2,components:1};case sd:case od:return{byteLength:2,components:4};case Ms:case rd:case bi:return{byteLength:4,components:1};case W_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _v(){let o=null,e=!1,t=null,i=null;function s(a,u){t(a,u),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function zS(o){const e=new WeakMap;function t(c,f){const d=c.array,p=c.usage,m=d.byteLength,_=o.createBuffer();o.bindBuffer(f,_),o.bufferData(f,d,p),c.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function i(c,f,d){const p=f.array,m=f.updateRanges;if(o.bindBuffer(d,c),m.length===0)o.bufferSubData(d,0,p);else{m.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<m.length;y++){const M=m[_],E=m[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,m[_]=E)}m.length=_+1;for(let y=0,M=m.length;y<M;y++){const E=m[y];o.bufferSubData(d,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(o.deleteBuffer(f.buffer),e.delete(c))}function u(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,c,f),d.version=c.version}}return{get:s,remove:a,update:u}}var VS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HS=`#ifdef USE_ALPHAHASH
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
#endif`,GS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YS=`#ifdef USE_AOMAP
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
#endif`,qS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KS=`#ifdef USE_BATCHING
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
#endif`,$S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eM=`#ifdef USE_IRIDESCENCE
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
#endif`,tM=`#ifdef USE_BUMPMAP
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cM=`#define PI 3.141592653589793
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
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fM=`vec3 transformedNormal = objectNormal;
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
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xM=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bM=`#ifdef USE_GRADIENTMAP
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
}`,CM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DM=`uniform bool receiveShadow;
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
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kM=`PhysicalMaterial material;
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
#endif`,BM=`struct PhysicalMaterial {
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
}`,zM=`
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$M=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`#ifdef USE_MORPHTARGETS
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
#endif`,iE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
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
#endif`,cE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wE=`float getShadowMask() {
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
}`,AE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,bE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CE=`#ifdef USE_SKINNING
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
#endif`,PE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,UE=`#ifdef USE_TRANSMISSION
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`#include <common>
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
}`,YE=`#if DEPTH_PACKING == 3200
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
}`,qE=`#define DISTANCE
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
}`,KE=`#define DISTANCE
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
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`uniform float scale;
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
}`,JE=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,tT=`uniform vec3 diffuse;
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
}`,nT=`#define LAMBERT
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
}`,iT=`#define LAMBERT
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
}`,rT=`#define MATCAP
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
}`,sT=`#define MATCAP
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
}`,oT=`#define NORMAL
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
}`,aT=`#define NORMAL
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
}`,lT=`#define PHONG
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
}`,uT=`#define PHONG
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
}`,cT=`#define STANDARD
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
}`,hT=`#define STANDARD
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
}`,fT=`#define TOON
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
}`,dT=`#define TOON
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
}`,pT=`uniform float size;
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,_T=`uniform vec3 color;
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
}`,vT=`uniform float rotation;
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
}`,xT=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:VS,alphahash_pars_fragment:HS,alphamap_fragment:GS,alphamap_pars_fragment:WS,alphatest_fragment:XS,alphatest_pars_fragment:jS,aomap_fragment:YS,aomap_pars_fragment:qS,batching_pars_vertex:KS,batching_vertex:$S,begin_vertex:ZS,beginnormal_vertex:QS,bsdfs:JS,iridescence_fragment:eM,bumpmap_pars_fragment:tM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:sM,color_fragment:oM,color_pars_fragment:aM,color_pars_vertex:lM,color_vertex:uM,common:cM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:fM,displacementmap_pars_vertex:dM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:_M,colorspace_pars_fragment:vM,envmap_fragment:xM,envmap_common_pars_fragment:yM,envmap_pars_fragment:SM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:IM,envmap_vertex:EM,fog_vertex:TM,fog_pars_vertex:wM,fog_fragment:AM,fog_pars_fragment:RM,gradientmap_pars_fragment:bM,lightmap_pars_fragment:CM,lights_lambert_fragment:PM,lights_lambert_pars_fragment:LM,lights_pars_begin:DM,lights_toon_fragment:NM,lights_toon_pars_fragment:UM,lights_phong_fragment:FM,lights_phong_pars_fragment:OM,lights_physical_fragment:kM,lights_physical_pars_fragment:BM,lights_fragment_begin:zM,lights_fragment_maps:VM,lights_fragment_end:HM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:XM,logdepthbuf_vertex:jM,map_fragment:YM,map_pars_fragment:qM,map_particle_fragment:KM,map_particle_pars_fragment:$M,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:QM,morphinstance_vertex:JM,morphcolor_vertex:eE,morphnormal_vertex:tE,morphtarget_pars_vertex:nE,morphtarget_vertex:iE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:oE,normal_pars_vertex:aE,normal_vertex:lE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:cE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:fE,iridescence_pars_fragment:dE,opaque_fragment:pE,packing:mE,premultiplied_alpha_fragment:gE,project_vertex:_E,dithering_fragment:vE,dithering_pars_fragment:xE,roughnessmap_fragment:yE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:EE,shadowmap_vertex:TE,shadowmask_pars_fragment:wE,skinbase_vertex:AE,skinning_pars_vertex:RE,skinning_vertex:bE,skinnormal_vertex:CE,specularmap_fragment:PE,specularmap_pars_fragment:LE,tonemapping_fragment:DE,tonemapping_pars_fragment:IE,transmission_fragment:NE,transmission_pars_fragment:UE,uv_pars_fragment:FE,uv_pars_vertex:OE,uv_vertex:kE,worldpos_vertex:BE,background_vert:zE,background_frag:VE,backgroundCube_vert:HE,backgroundCube_frag:GE,cube_vert:WE,cube_frag:XE,depth_vert:jE,depth_frag:YE,distanceRGBA_vert:qE,distanceRGBA_frag:KE,equirect_vert:$E,equirect_frag:ZE,linedashed_vert:QE,linedashed_frag:JE,meshbasic_vert:eT,meshbasic_frag:tT,meshlambert_vert:nT,meshlambert_frag:iT,meshmatcap_vert:rT,meshmatcap_frag:sT,meshnormal_vert:oT,meshnormal_frag:aT,meshphong_vert:lT,meshphong_frag:uT,meshphysical_vert:cT,meshphysical_frag:hT,meshtoon_vert:fT,meshtoon_frag:dT,points_vert:pT,points_frag:mT,shadow_vert:gT,shadow_frag:_T,sprite_vert:vT,sprite_frag:xT},Pe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ki={basic:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new We(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Fn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Fn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new We(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Fn([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Fn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Fn([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Fn([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Fn([Pe.common,Pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Fn([Pe.lights,Pe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ki.physical={uniforms:Fn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const du={r:0,b:0,g:0},ms=new Li,yT=new ft;function ST(o,e,t,i,s,a,u){const c=new We(0);let f=a===!0?0:1,d,p,m=null,_=0,y=null;function M(C){let A=C.isScene===!0?C.background:null;return A&&A.isTexture&&(A=(C.backgroundBlurriness>0?t:e).get(A)),A}function E(C){let A=!1;const O=M(C);O===null?x(c,f):O&&O.isColor&&(x(O,1),A=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(C,A){const O=M(A);O&&(O.isCubeTexture||O.mapping===Lu)?(p===void 0&&(p=new pn(new Da(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Ro(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),ms.copy(A.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),p.material.uniforms.envMap.value=O,p.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(yT.makeRotationFromEuler(ms)),p.material.toneMapped=wt.getTransfer(O.colorSpace)!==Ft,(m!==O||_!==O.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,m=O,_=O.version,y=o.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new pn(new Du(2,2),new bn({name:"BackgroundMaterial",uniforms:Ro(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=wt.getTransfer(O.colorSpace)!==Ft,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(m!==O||_!==O.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,m=O,_=O.version,y=o.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function x(C,A){C.getRGB(du,ov(o)),i.buffers.color.setClear(du.r,du.g,du.b,A,u)}function L(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(C,A=1){c.set(C),f=A,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,x(c,f)},render:E,addToRenderList:S,dispose:L}}function MT(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,u=!1;function c(b,k,oe,J,ue){let he=!1;const ie=m(J,oe,k);a!==ie&&(a=ie,d(a.object)),he=y(b,J,oe,ue),he&&M(b,J,oe,ue),ue!==null&&e.update(ue,o.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,A(b,k,oe,J),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function f(){return o.createVertexArray()}function d(b){return o.bindVertexArray(b)}function p(b){return o.deleteVertexArray(b)}function m(b,k,oe){const J=oe.wireframe===!0;let ue=i[b.id];ue===void 0&&(ue={},i[b.id]=ue);let he=ue[k.id];he===void 0&&(he={},ue[k.id]=he);let ie=he[J];return ie===void 0&&(ie=_(f()),he[J]=ie),ie}function _(b){const k=[],oe=[],J=[];for(let ue=0;ue<t;ue++)k[ue]=0,oe[ue]=0,J[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:oe,attributeDivisors:J,object:b,attributes:{},index:null}}function y(b,k,oe,J){const ue=a.attributes,he=k.attributes;let ie=0;const le=oe.getAttributes();for(const V in le)if(le[V].location>=0){const z=ue[V];let D=he[V];if(D===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(D=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(D=b.instanceColor)),z===void 0||z.attribute!==D||D&&z.data!==D.data)return!0;ie++}return a.attributesNum!==ie||a.index!==J}function M(b,k,oe,J){const ue={},he=k.attributes;let ie=0;const le=oe.getAttributes();for(const V in le)if(le[V].location>=0){let z=he[V];z===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(z=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(z=b.instanceColor));const D={};D.attribute=z,z&&z.data&&(D.data=z.data),ue[V]=D,ie++}a.attributes=ue,a.attributesNum=ie,a.index=J}function E(){const b=a.newAttributes;for(let k=0,oe=b.length;k<oe;k++)b[k]=0}function S(b){x(b,0)}function x(b,k){const oe=a.newAttributes,J=a.enabledAttributes,ue=a.attributeDivisors;oe[b]=1,J[b]===0&&(o.enableVertexAttribArray(b),J[b]=1),ue[b]!==k&&(o.vertexAttribDivisor(b,k),ue[b]=k)}function L(){const b=a.newAttributes,k=a.enabledAttributes;for(let oe=0,J=k.length;oe<J;oe++)k[oe]!==b[oe]&&(o.disableVertexAttribArray(oe),k[oe]=0)}function C(b,k,oe,J,ue,he,ie){ie===!0?o.vertexAttribIPointer(b,k,oe,ue,he):o.vertexAttribPointer(b,k,oe,J,ue,he)}function A(b,k,oe,J){E();const ue=J.attributes,he=oe.getAttributes(),ie=k.defaultAttributeValues;for(const le in he){const V=he[le];if(V.location>=0){let ce=ue[le];if(ce===void 0&&(le==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),le==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ce!==void 0){const z=ce.normalized,D=ce.itemSize,K=e.get(ce);if(K===void 0)continue;const ge=K.buffer,$=K.type,se=K.bytesPerElement,Se=$===o.INT||$===o.UNSIGNED_INT||ce.gpuType===rd;if(ce.isInterleavedBufferAttribute){const fe=ce.data,ve=fe.stride,we=ce.offset;if(fe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)x(V.location+Ve,fe.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)S(V.location+Ve);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let Ve=0;Ve<V.locationSize;Ve++)C(V.location+Ve,D/V.locationSize,$,z,ve*se,(we+D/V.locationSize*Ve)*se,Se)}else{if(ce.isInstancedBufferAttribute){for(let fe=0;fe<V.locationSize;fe++)x(V.location+fe,ce.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let fe=0;fe<V.locationSize;fe++)S(V.location+fe);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let fe=0;fe<V.locationSize;fe++)C(V.location+fe,D/V.locationSize,$,z,D*se,D/V.locationSize*fe*se,Se)}}else if(ie!==void 0){const z=ie[le];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(V.location,z);break;case 3:o.vertexAttrib3fv(V.location,z);break;case 4:o.vertexAttrib4fv(V.location,z);break;default:o.vertexAttrib1fv(V.location,z)}}}}L()}function O(){B();for(const b in i){const k=i[b];for(const oe in k){const J=k[oe];for(const ue in J)p(J[ue].object),delete J[ue];delete k[oe]}delete i[b]}}function I(b){if(i[b.id]===void 0)return;const k=i[b.id];for(const oe in k){const J=k[oe];for(const ue in J)p(J[ue].object),delete J[ue];delete k[oe]}delete i[b.id]}function U(b){for(const k in i){const oe=i[k];if(oe[b.id]===void 0)continue;const J=oe[b.id];for(const ue in J)p(J[ue].object),delete J[ue];delete oe[b.id]}}function B(){P(),u=!0,a!==s&&(a=s,d(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:B,resetDefaultState:P,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function ET(o,e,t){let i;function s(d){i=d}function a(d,p){o.drawArrays(i,d,p),t.update(p,i,1)}function u(d,p,m){m!==0&&(o.drawArraysInstanced(i,d,p,m),t.update(p,i,m))}function c(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,p,0,m);let y=0;for(let M=0;M<m;M++)y+=p[M];t.update(y,i,1)}function f(d,p,m,_){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<d.length;M++)u(d[M],p[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(i,d,0,p,0,_,0,m);let M=0;for(let E=0;E<m;E++)M+=p[E]*_[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function TT(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(U){return!(U!==mi&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const B=U===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==dr&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==bi&&!B)}function f(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=f(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=M>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:C,maxFragmentUniforms:A,vertexTextures:O,maxSamples:I}}function wT(o){const e=this;let t=null,i=0,s=!1,a=!1;const u=new Hr,c=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const y=m.length!==0||_||i!==0||s;return s=_,i=m.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,_){t=p(m,_,0)},this.setState=function(m,_,y){const M=m.clippingPlanes,E=m.clipIntersection,S=m.clipShadows,x=o.get(m);if(!s||M===null||M.length===0||a&&!S)a?p(null):d();else{const L=a?0:i,C=L*4;let A=x.clippingState||null;f.value=A,A=p(M,_,C,y);for(let O=0;O!==C;++O)A[O]=t[O];x.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,_,y,M){const E=m!==null?m.length:0;let S=null;if(E!==0){if(S=f.value,M!==!0||S===null){const x=y+E*4,L=_.matrixWorldInverse;c.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let C=0,A=y;C!==E;++C,A+=4)u.copy(m[C]).applyMatrix4(L,c),u.normal.toArray(S,A),S[A+3]=u.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function AT(o){let e=new WeakMap;function t(u,c){return c===_f?u.mapping=yo:c===vf&&(u.mapping=So),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===_f||c===vf)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const d=new jy(f.height);return d.fromEquirectangularTexture(o,u),e.set(u,d),u.addEventListener("dispose",s),t(d.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const fo=4,Qg=[.125,.215,.35,.446,.526,.582],ys=20,Xh=new Uu,Jg=new We;let jh=null,Yh=0,qh=0,Kh=!1;const vs=(1+Math.sqrt(5))/2,lo=1/vs,e_=[new W(-vs,lo,0),new W(vs,lo,0),new W(-lo,0,vs),new W(lo,0,vs),new W(0,vs,-lo),new W(0,vs,lo),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class t_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){jh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jh,Yh,qh),this._renderer.xr.enabled=Kh,e.scissorTest=!1,pu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yo||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:di,format:mi,colorSpace:Vn,depthBuffer:!1},s=n_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n_(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RT(a)),this._blurMaterial=bT(a,e,t)}return s}_compileMaterial(e){const t=new pn(this._lodPlanes[0],e);this._renderer.compile(t,Xh)}_sceneToCubeUV(e,t,i,s){const c=new kn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,_=p.toneMapping;p.getClearColor(Jg),p.toneMapping=Yr,p.autoClear=!1;const y=new Ss({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new pn(new Da,y);let E=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,E=!0):(y.color.copy(Jg),E=!0);for(let x=0;x<6;x++){const L=x%3;L===0?(c.up.set(0,f[x],0),c.lookAt(d[x],0,0)):L===1?(c.up.set(0,0,f[x]),c.lookAt(0,d[x],0)):(c.up.set(0,f[x],0),c.lookAt(0,0,d[x]));const C=this._cubeSize;pu(s,L*C,x>2?C:0,C,C),p.setRenderTarget(s),E&&p.render(M,c),p.render(e,c)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=_,p.autoClear=m,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===yo||e.mapping===So;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=r_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i_());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new pn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;pu(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,Xh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=e_[(s-a-1)%e_.length];this._blur(e,a-1,a,u,c)}t.autoClear=i}_blur(e,t,i,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",a),this._halfBlur(u,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,u,c){const f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new pn(this._lodPlanes[s],d),_=d.uniforms,y=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*ys-1),E=a/M,S=isFinite(a)?1+Math.floor(p*E):ys;S>ys&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ys}`);const x=[];let L=0;for(let U=0;U<ys;++U){const B=U/E,P=Math.exp(-B*B/2);x.push(P),U===0?L+=P:U<S&&(L+=2*P)}for(let U=0;U<x.length;U++)x[U]=x[U]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:C}=this;_.dTheta.value=M,_.mipInt.value=C-i;const A=this._sizeLods[s],O=3*A*(s>C-fo?s-C+fo:0),I=4*(this._cubeSize-A);pu(t,O,I,3*A,2*A),f.setRenderTarget(t),f.render(m,Xh)}}function RT(o){const e=[],t=[],i=[];let s=o;const a=o-fo+1+Qg.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let f=1/c;u>o-fo?f=Qg[u-o+fo-1]:u===0&&(f=0),i.push(f);const d=1/(c-2),p=-d,m=1+d,_=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,M=6,E=3,S=2,x=1,L=new Float32Array(E*M*y),C=new Float32Array(S*M*y),A=new Float32Array(x*M*y);for(let I=0;I<y;I++){const U=I%3*2/3-1,B=I>2?0:-1,P=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];L.set(P,E*M*I),C.set(_,S*M*I);const b=[I,I,I,I,I,I];A.set(b,x*M*I)}const O=new Cn;O.setAttribute("position",new gn(L,E)),O.setAttribute("uv",new gn(C,S)),O.setAttribute("faceIndex",new gn(A,x)),e.push(O),s>fo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function n_(o,e,t){const i=new On(o,e,t);return i.texture.mapping=Lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pu(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function bT(o,e,t){const i=new Float32Array(ys),s=new W(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Md(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function i_(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function r_(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Md(){return`

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
	`}function CT(o){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const f=c.mapping,d=f===_f||f===vf,p=f===yo||f===So;if(d||p){let m=e.get(c);const _=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new t_(o)),m=d?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const y=c.image;return d&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new t_(o)),m=d?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",a),m.texture):null}}}return c}function s(c){let f=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function PT(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&uo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function LT(o,e,t,i){const s={},a=new WeakMap;function u(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete s[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(m,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function f(m){const _=m.attributes;for(const y in _)e.update(_[y],o.ARRAY_BUFFER)}function d(m){const _=[],y=m.index,M=m.attributes.position;let E=0;if(y!==null){const L=y.array;E=y.version;for(let C=0,A=L.length;C<A;C+=3){const O=L[C+0],I=L[C+1],U=L[C+2];_.push(O,I,I,U,U,O)}}else if(M!==void 0){const L=M.array;E=M.version;for(let C=0,A=L.length/3-1;C<A;C+=3){const O=C+0,I=C+1,U=C+2;_.push(O,I,I,U,U,O)}}else return;const S=new(ev(_)?sv:rv)(_,1);S.version=E;const x=a.get(m);x&&e.remove(x),a.set(m,S)}function p(m){const _=a.get(m);if(_){const y=m.index;y!==null&&_.version<y.version&&d(m)}else d(m);return a.get(m)}return{get:c,update:f,getWireframeAttribute:p}}function DT(o,e,t){let i;function s(_){i=_}let a,u;function c(_){a=_.type,u=_.bytesPerElement}function f(_,y){o.drawElements(i,y,a,_*u),t.update(y,i,1)}function d(_,y,M){M!==0&&(o.drawElementsInstanced(i,y,a,_*u,M),t.update(y,i,M))}function p(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,i,1)}function m(_,y,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)d(_[x]/u,y[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,_,0,E,0,M);let x=0;for(let L=0;L<M;L++)x+=y[L]*E[L];t.update(x,i,1)}}this.setMode=s,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function IT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function NT(o,e,t){const i=new WeakMap,s=new Lt;function a(u,c,f){const d=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let _=i.get(c);if(_===void 0||_.count!==m){let b=function(){B.dispose(),i.delete(c),c.removeEventListener("dispose",b)};var y=b;_!==void 0&&_.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let A=0;M===!0&&(A=1),E===!0&&(A=2),S===!0&&(A=3);let O=c.attributes.position.count*A,I=1;O>e.maxTextureSize&&(I=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const U=new Float32Array(O*I*4*m),B=new nv(U,O,I,m);B.type=bi,B.needsUpdate=!0;const P=A*4;for(let k=0;k<m;k++){const oe=x[k],J=L[k],ue=C[k],he=O*I*4*k;for(let ie=0;ie<oe.count;ie++){const le=ie*P;M===!0&&(s.fromBufferAttribute(oe,ie),U[he+le+0]=s.x,U[he+le+1]=s.y,U[he+le+2]=s.z,U[he+le+3]=0),E===!0&&(s.fromBufferAttribute(J,ie),U[he+le+4]=s.x,U[he+le+5]=s.y,U[he+le+6]=s.z,U[he+le+7]=0),S===!0&&(s.fromBufferAttribute(ue,ie),U[he+le+8]=s.x,U[he+le+9]=s.y,U[he+le+10]=s.z,U[he+le+11]=ue.itemSize===4?s.w:1)}}_={count:m,texture:B,size:new qe(O,I)},i.set(c,_),c.addEventListener("dispose",b)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const E=c.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",E),f.getUniforms().setValue(o,"morphTargetInfluences",d)}f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function UT(o,e,t,i){let s=new WeakMap;function a(f){const d=i.render.frame,p=f.geometry,m=e.get(f,p);if(s.get(m)!==d&&(e.update(m),s.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),s.get(f)!==d&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return m}function u(){s=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}const vv=new mn,s_=new hv(1,1),xv=new nv,yv=new Ly,Sv=new lv,o_=[],a_=[],l_=new Float32Array(16),u_=new Float32Array(9),c_=new Float32Array(4);function No(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=o_[s];if(a===void 0&&(a=new Float32Array(s),o_[s]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function ln(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function un(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Fu(o,e){let t=a_[e];t===void 0&&(t=new Int32Array(e),a_[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function FT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function OT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;o.uniform2fv(this.addr,e),un(t,e)}}function kT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;o.uniform3fv(this.addr,e),un(t,e)}}function BT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;o.uniform4fv(this.addr,e),un(t,e)}}function zT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;c_.set(i),o.uniformMatrix2fv(this.addr,!1,c_),un(t,i)}}function VT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;u_.set(i),o.uniformMatrix3fv(this.addr,!1,u_),un(t,i)}}function HT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;l_.set(i),o.uniformMatrix4fv(this.addr,!1,l_),un(t,i)}}function GT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function WT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;o.uniform2iv(this.addr,e),un(t,e)}}function XT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;o.uniform3iv(this.addr,e),un(t,e)}}function jT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;o.uniform4iv(this.addr,e),un(t,e)}}function YT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function qT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;o.uniform2uiv(this.addr,e),un(t,e)}}function KT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;o.uniform3uiv(this.addr,e),un(t,e)}}function $T(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;o.uniform4uiv(this.addr,e),un(t,e)}}function ZT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(s_.compareFunction=J_,a=s_):a=vv,t.setTexture2D(e||a,s)}function QT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||yv,s)}function JT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Sv,s)}function ew(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xv,s)}function tw(o){switch(o){case 5126:return FT;case 35664:return OT;case 35665:return kT;case 35666:return BT;case 35674:return zT;case 35675:return VT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return WT;case 35668:case 35672:return XT;case 35669:case 35673:return jT;case 5125:return YT;case 36294:return qT;case 36295:return KT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return ew}}function nw(o,e){o.uniform1fv(this.addr,e)}function iw(o,e){const t=No(e,this.size,2);o.uniform2fv(this.addr,t)}function rw(o,e){const t=No(e,this.size,3);o.uniform3fv(this.addr,t)}function sw(o,e){const t=No(e,this.size,4);o.uniform4fv(this.addr,t)}function ow(o,e){const t=No(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function aw(o,e){const t=No(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function lw(o,e){const t=No(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function uw(o,e){o.uniform1iv(this.addr,e)}function cw(o,e){o.uniform2iv(this.addr,e)}function hw(o,e){o.uniform3iv(this.addr,e)}function fw(o,e){o.uniform4iv(this.addr,e)}function dw(o,e){o.uniform1uiv(this.addr,e)}function pw(o,e){o.uniform2uiv(this.addr,e)}function mw(o,e){o.uniform3uiv(this.addr,e)}function gw(o,e){o.uniform4uiv(this.addr,e)}function _w(o,e,t){const i=this.cache,s=e.length,a=Fu(t,s);ln(i,a)||(o.uniform1iv(this.addr,a),un(i,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||vv,a[u])}function vw(o,e,t){const i=this.cache,s=e.length,a=Fu(t,s);ln(i,a)||(o.uniform1iv(this.addr,a),un(i,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||yv,a[u])}function xw(o,e,t){const i=this.cache,s=e.length,a=Fu(t,s);ln(i,a)||(o.uniform1iv(this.addr,a),un(i,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Sv,a[u])}function yw(o,e,t){const i=this.cache,s=e.length,a=Fu(t,s);ln(i,a)||(o.uniform1iv(this.addr,a),un(i,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||xv,a[u])}function Sw(o){switch(o){case 5126:return nw;case 35664:return iw;case 35665:return rw;case 35666:return sw;case 35674:return ow;case 35675:return aw;case 35676:return lw;case 5124:case 35670:return uw;case 35667:case 35671:return cw;case 35668:case 35672:return hw;case 35669:case 35673:return fw;case 5125:return dw;case 36294:return pw;case 36295:return mw;case 36296:return gw;case 35678:case 36198:case 36298:case 36306:case 35682:return _w;case 35679:case 36299:case 36307:return vw;case 35680:case 36300:case 36308:case 36293:return xw;case 36289:case 36303:case 36311:case 36292:return yw}}class Mw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tw(t.type)}}class Ew{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sw(t.type)}}class Tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],i)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function h_(o,e){o.seq.push(e),o.map[e.id]=e}function ww(o,e,t){const i=o.name,s=i.length;for($h.lastIndex=0;;){const a=$h.exec(i),u=$h.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===s){h_(t,d===void 0?new Mw(c,o,e):new Ew(c,o,e));break}else{let m=t.map[c];m===void 0&&(m=new Tw(c),h_(t,m)),t=m}}}class wu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);ww(a,u,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=i[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function f_(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const Aw=37297;let Rw=0;function bw(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const d_=new dt;function Cw(o){wt._getMatrix(d_,wt.workingColorSpace,o);const e=`mat3( ${d_.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(o)){case Ru:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function p_(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+bw(o.getShaderSource(e),u)}else return s}function Pw(o,e){const t=Cw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lw(o,e){let t;switch(e){case Vx:t="Linear";break;case Hx:t="Reinhard";break;case Gx:t="Cineon";break;case Wx:t="ACESFilmic";break;case jx:t="AgX";break;case Yx:t="Neutral";break;case Xx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mu=new W;function Dw(){wt.getLuminanceCoefficients(mu);const o=mu.x.toFixed(4),e=mu.y.toFixed(4),t=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function Nw(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Uw(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function Ea(o){return o!==""}function m_(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function g_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(o){return o.replace(Fw,kw)}const Ow=new Map;function kw(o,e){let t=pt[e];if(t===void 0){const i=Ow.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zf(t)}const Bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function __(o){return o.replace(Bw,zw)}function zw(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function v_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vw(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===B_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===yx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===lr&&(e="SHADOWMAP_TYPE_VSM"),e}function Hw(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case yo:case So:e="ENVMAP_TYPE_CUBE";break;case Lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gw(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function Ww(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case id:e="ENVMAP_BLENDING_MULTIPLY";break;case Bx:e="ENVMAP_BLENDING_MIX";break;case zx:e="ENVMAP_BLENDING_ADD";break}return e}function Xw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jw(o,e,t,i){const s=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=Vw(t),d=Hw(t),p=Gw(t),m=Ww(t),_=Xw(t),y=Iw(t),M=Nw(a),E=s.createProgram();let S,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ea).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ea).join(`
`),x.length>0&&(x+=`
`)):(S=[v_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),x=[v_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yr?"#define TONE_MAPPING":"",t.toneMapping!==Yr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Yr?Lw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Pw("linearToOutputTexel",t.outputColorSpace),Dw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),u=Zf(u),u=m_(u,t),u=g_(u,t),c=Zf(c),c=m_(c,t),c=g_(c,t),u=__(u),c=__(c),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=L+S+u,A=L+x+c,O=f_(s,s.VERTEX_SHADER,C),I=f_(s,s.FRAGMENT_SHADER,A);s.attachShader(E,O),s.attachShader(E,I),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function U(k){if(o.debug.checkShaderErrors){const oe=s.getProgramInfoLog(E).trim(),J=s.getShaderInfoLog(O).trim(),ue=s.getShaderInfoLog(I).trim();let he=!0,ie=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,O,I);else{const le=p_(s,O,"vertex"),V=p_(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+oe+`
`+le+`
`+V)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(J===""||ue==="")&&(ie=!1);ie&&(k.diagnostics={runnable:he,programLog:oe,vertexShader:{log:J,prefix:S},fragmentShader:{log:ue,prefix:x}})}s.deleteShader(O),s.deleteShader(I),B=new wu(s,E),P=Uw(s,E)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(E,Aw)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=O,this.fragmentShader=I,this}let Yw=0;class qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Kw(e),t.set(e,i)),i}}class Kw{constructor(e){this.id=Yw++,this.code=e,this.usedTimes=0}}function $w(o,e,t,i,s,a,u){const c=new dd,f=new qw,d=new Set,p=[],m=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return d.add(P),P===0?"uv":`uv${P}`}function S(P,b,k,oe,J){const ue=oe.fog,he=J.geometry,ie=P.isMeshStandardMaterial?oe.environment:null,le=(P.isMeshStandardMaterial?t:e).get(P.envMap||ie),V=le&&le.mapping===Lu?le.image.height:null,ce=M[P.type];P.precision!==null&&(y=s.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const z=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,D=z!==void 0?z.length:0;let K=0;he.morphAttributes.position!==void 0&&(K=1),he.morphAttributes.normal!==void 0&&(K=2),he.morphAttributes.color!==void 0&&(K=3);let ge,$,se,Se;if(ce){const At=ki[ce];ge=At.vertexShader,$=At.fragmentShader}else ge=P.vertexShader,$=P.fragmentShader,f.update(P),se=f.getVertexShaderID(P),Se=f.getFragmentShaderID(P);const fe=o.getRenderTarget(),ve=o.state.buffers.depth.getReversed(),we=J.isInstancedMesh===!0,Ve=J.isBatchedMesh===!0,at=!!P.map,Qe=!!P.matcap,Et=!!le,G=!!P.aoMap,Ht=!!P.lightMap,Ze=!!P.bumpMap,$e=!!P.normalMap,Xe=!!P.displacementMap,ht=!!P.emissiveMap,Ne=!!P.metalnessMap,N=!!P.roughnessMap,w=P.anisotropy>0,ee=P.clearcoat>0,me=P.dispersion>0,xe=P.iridescence>0,de=P.sheen>0,je=P.transmission>0,Re=w&&!!P.anisotropyMap,Fe=ee&&!!P.clearcoatMap,mt=ee&&!!P.clearcoatNormalMap,Te=ee&&!!P.clearcoatRoughnessMap,Be=xe&&!!P.iridescenceMap,et=xe&&!!P.iridescenceThicknessMap,it=de&&!!P.sheenColorMap,ze=de&&!!P.sheenRoughnessMap,vt=!!P.specularMap,lt=!!P.specularColorMap,Dt=!!P.specularIntensityMap,Y=je&&!!P.transmissionMap,be=je&&!!P.thicknessMap,ae=!!P.gradientMap,pe=!!P.alphaMap,De=P.alphaTest>0,Le=!!P.alphaHash,ut=!!P.extensions;let Bt=Yr;P.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Bt=o.toneMapping);const rn={shaderID:ce,shaderType:P.type,shaderName:P.name,vertexShader:ge,fragmentShader:$,defines:P.defines,customVertexShaderID:se,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Ve,batchingColor:Ve&&J._colorsTexture!==null,instancing:we,instancingColor:we&&J.instanceColor!==null,instancingMorph:we&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:fe===null?o.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Vn,alphaToCoverage:!!P.alphaToCoverage,map:at,matcap:Qe,envMap:Et,envMapMode:Et&&le.mapping,envMapCubeUVHeight:V,aoMap:G,lightMap:Ht,bumpMap:Ze,normalMap:$e,displacementMap:_&&Xe,emissiveMap:ht,normalMapObjectSpace:$e&&P.normalMapType===Qx,normalMapTangentSpace:$e&&P.normalMapType===hd,metalnessMap:Ne,roughnessMap:N,anisotropy:w,anisotropyMap:Re,clearcoat:ee,clearcoatMap:Fe,clearcoatNormalMap:mt,clearcoatRoughnessMap:Te,dispersion:me,iridescence:xe,iridescenceMap:Be,iridescenceThicknessMap:et,sheen:de,sheenColorMap:it,sheenRoughnessMap:ze,specularMap:vt,specularColorMap:lt,specularIntensityMap:Dt,transmission:je,transmissionMap:Y,thicknessMap:be,gradientMap:ae,opaque:P.transparent===!1&&P.blending===mo&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Le,combine:P.combine,mapUv:at&&E(P.map.channel),aoMapUv:G&&E(P.aoMap.channel),lightMapUv:Ht&&E(P.lightMap.channel),bumpMapUv:Ze&&E(P.bumpMap.channel),normalMapUv:$e&&E(P.normalMap.channel),displacementMapUv:Xe&&E(P.displacementMap.channel),emissiveMapUv:ht&&E(P.emissiveMap.channel),metalnessMapUv:Ne&&E(P.metalnessMap.channel),roughnessMapUv:N&&E(P.roughnessMap.channel),anisotropyMapUv:Re&&E(P.anisotropyMap.channel),clearcoatMapUv:Fe&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:mt&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:et&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:it&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(P.sheenRoughnessMap.channel),specularMapUv:vt&&E(P.specularMap.channel),specularColorMapUv:lt&&E(P.specularColorMap.channel),specularIntensityMapUv:Dt&&E(P.specularIntensityMap.channel),transmissionMapUv:Y&&E(P.transmissionMap.channel),thicknessMapUv:be&&E(P.thicknessMap.channel),alphaMapUv:pe&&E(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&($e||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!he.attributes.uv&&(at||pe),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:ve,skinning:J.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:K,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:Bt,decodeVideoTexture:at&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===Ft,decodeVideoTextureEmissive:ht&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===Ft,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===pi,flipSided:P.side===Bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ut&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&P.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return rn.vertexUv1s=d.has(1),rn.vertexUv2s=d.has(2),rn.vertexUv3s=d.has(3),d.clear(),rn}function x(P){const b=[];if(P.shaderID?b.push(P.shaderID):(b.push(P.customVertexShaderID),b.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)b.push(k),b.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(L(b,P),C(b,P),b.push(o.outputColorSpace)),b.push(P.customProgramCacheKey),b.join()}function L(P,b){P.push(b.precision),P.push(b.outputColorSpace),P.push(b.envMapMode),P.push(b.envMapCubeUVHeight),P.push(b.mapUv),P.push(b.alphaMapUv),P.push(b.lightMapUv),P.push(b.aoMapUv),P.push(b.bumpMapUv),P.push(b.normalMapUv),P.push(b.displacementMapUv),P.push(b.emissiveMapUv),P.push(b.metalnessMapUv),P.push(b.roughnessMapUv),P.push(b.anisotropyMapUv),P.push(b.clearcoatMapUv),P.push(b.clearcoatNormalMapUv),P.push(b.clearcoatRoughnessMapUv),P.push(b.iridescenceMapUv),P.push(b.iridescenceThicknessMapUv),P.push(b.sheenColorMapUv),P.push(b.sheenRoughnessMapUv),P.push(b.specularMapUv),P.push(b.specularColorMapUv),P.push(b.specularIntensityMapUv),P.push(b.transmissionMapUv),P.push(b.thicknessMapUv),P.push(b.combine),P.push(b.fogExp2),P.push(b.sizeAttenuation),P.push(b.morphTargetsCount),P.push(b.morphAttributeCount),P.push(b.numDirLights),P.push(b.numPointLights),P.push(b.numSpotLights),P.push(b.numSpotLightMaps),P.push(b.numHemiLights),P.push(b.numRectAreaLights),P.push(b.numDirLightShadows),P.push(b.numPointLightShadows),P.push(b.numSpotLightShadows),P.push(b.numSpotLightShadowsWithMaps),P.push(b.numLightProbes),P.push(b.shadowMapType),P.push(b.toneMapping),P.push(b.numClippingPlanes),P.push(b.numClipIntersection),P.push(b.depthPacking)}function C(P,b){c.disableAll(),b.supportsVertexTextures&&c.enable(0),b.instancing&&c.enable(1),b.instancingColor&&c.enable(2),b.instancingMorph&&c.enable(3),b.matcap&&c.enable(4),b.envMap&&c.enable(5),b.normalMapObjectSpace&&c.enable(6),b.normalMapTangentSpace&&c.enable(7),b.clearcoat&&c.enable(8),b.iridescence&&c.enable(9),b.alphaTest&&c.enable(10),b.vertexColors&&c.enable(11),b.vertexAlphas&&c.enable(12),b.vertexUv1s&&c.enable(13),b.vertexUv2s&&c.enable(14),b.vertexUv3s&&c.enable(15),b.vertexTangents&&c.enable(16),b.anisotropy&&c.enable(17),b.alphaHash&&c.enable(18),b.batching&&c.enable(19),b.dispersion&&c.enable(20),b.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),b.fog&&c.enable(0),b.useFog&&c.enable(1),b.flatShading&&c.enable(2),b.logarithmicDepthBuffer&&c.enable(3),b.reverseDepthBuffer&&c.enable(4),b.skinning&&c.enable(5),b.morphTargets&&c.enable(6),b.morphNormals&&c.enable(7),b.morphColors&&c.enable(8),b.premultipliedAlpha&&c.enable(9),b.shadowMapEnabled&&c.enable(10),b.doubleSided&&c.enable(11),b.flipSided&&c.enable(12),b.useDepthPacking&&c.enable(13),b.dithering&&c.enable(14),b.transmission&&c.enable(15),b.sheen&&c.enable(16),b.opaque&&c.enable(17),b.pointsUvs&&c.enable(18),b.decodeVideoTexture&&c.enable(19),b.decodeVideoTextureEmissive&&c.enable(20),b.alphaToCoverage&&c.enable(21),P.push(c.mask)}function A(P){const b=M[P.type];let k;if(b){const oe=ki[b];k=pd.clone(oe.uniforms)}else k=P.uniforms;return k}function O(P,b){let k;for(let oe=0,J=p.length;oe<J;oe++){const ue=p[oe];if(ue.cacheKey===b){k=ue,++k.usedTimes;break}}return k===void 0&&(k=new jw(o,b,P,a),p.push(k)),k}function I(P){if(--P.usedTimes===0){const b=p.indexOf(P);p[b]=p[p.length-1],p.pop(),P.destroy()}}function U(P){f.remove(P)}function B(){f.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:O,releaseProgram:I,releaseShaderCache:U,programs:p,dispose:B}}function Zw(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function i(u){o.delete(u)}function s(u,c,f){o.get(u)[c]=f}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function Qw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function x_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function y_(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function u(m,_,y,M,E,S){let x=o[e];return x===void 0?(x={id:m.id,object:m,geometry:_,material:y,groupOrder:M,renderOrder:m.renderOrder,z:E,group:S},o[e]=x):(x.id=m.id,x.object=m,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=m.renderOrder,x.z=E,x.group=S),e++,x}function c(m,_,y,M,E,S){const x=u(m,_,y,M,E,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function f(m,_,y,M,E,S){const x=u(m,_,y,M,E,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function d(m,_){t.length>1&&t.sort(m||Qw),i.length>1&&i.sort(_||x_),s.length>1&&s.sort(_||x_)}function p(){for(let m=e,_=o.length;m<_;m++){const y=o[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:c,unshift:f,finish:p,sort:d}}function Jw(){let o=new WeakMap;function e(i,s){const a=o.get(i);let u;return a===void 0?(u=new y_,o.set(i,[u])):s>=a.length?(u=new y_,a.push(u)):u=a[s],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function eA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new We};break;case"SpotLight":t={position:new W,direction:new W,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new W,halfWidth:new W,halfHeight:new W};break}return o[e.id]=t,t}}}function tA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let nA=0;function iA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function rA(o){const e=new eA,t=tA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new W);const s=new W,a=new ft,u=new ft;function c(d){let p=0,m=0,_=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let y=0,M=0,E=0,S=0,x=0,L=0,C=0,A=0,O=0,I=0,U=0;d.sort(iA);for(let P=0,b=d.length;P<b;P++){const k=d[P],oe=k.color,J=k.intensity,ue=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=oe.r*J,m+=oe.g*J,_+=oe.b*J;else if(k.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(k.sh.coefficients[ie],J);U++}else if(k.isDirectionalLight){const ie=e.get(k);if(ie.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const le=k.shadow,V=t.get(k);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,i.directionalShadow[y]=V,i.directionalShadowMap[y]=he,i.directionalShadowMatrix[y]=k.shadow.matrix,L++}i.directional[y]=ie,y++}else if(k.isSpotLight){const ie=e.get(k);ie.position.setFromMatrixPosition(k.matrixWorld),ie.color.copy(oe).multiplyScalar(J),ie.distance=ue,ie.coneCos=Math.cos(k.angle),ie.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ie.decay=k.decay,i.spot[E]=ie;const le=k.shadow;if(k.map&&(i.spotLightMap[O]=k.map,O++,le.updateMatrices(k),k.castShadow&&I++),i.spotLightMatrix[E]=le.matrix,k.castShadow){const V=t.get(k);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,i.spotShadow[E]=V,i.spotShadowMap[E]=he,A++}E++}else if(k.isRectAreaLight){const ie=e.get(k);ie.color.copy(oe).multiplyScalar(J),ie.halfWidth.set(k.width*.5,0,0),ie.halfHeight.set(0,k.height*.5,0),i.rectArea[S]=ie,S++}else if(k.isPointLight){const ie=e.get(k);if(ie.color.copy(k.color).multiplyScalar(k.intensity),ie.distance=k.distance,ie.decay=k.decay,k.castShadow){const le=k.shadow,V=t.get(k);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,V.shadowCameraNear=le.camera.near,V.shadowCameraFar=le.camera.far,i.pointShadow[M]=V,i.pointShadowMap[M]=he,i.pointShadowMatrix[M]=k.shadow.matrix,C++}i.point[M]=ie,M++}else if(k.isHemisphereLight){const ie=e.get(k);ie.skyColor.copy(k.color).multiplyScalar(J),ie.groundColor.copy(k.groundColor).multiplyScalar(J),i.hemi[x]=ie,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=_;const B=i.hash;(B.directionalLength!==y||B.pointLength!==M||B.spotLength!==E||B.rectAreaLength!==S||B.hemiLength!==x||B.numDirectionalShadows!==L||B.numPointShadows!==C||B.numSpotShadows!==A||B.numSpotMaps!==O||B.numLightProbes!==U)&&(i.directional.length=y,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=A+O-I,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=U,B.directionalLength=y,B.pointLength=M,B.spotLength=E,B.rectAreaLength=S,B.hemiLength=x,B.numDirectionalShadows=L,B.numPointShadows=C,B.numSpotShadows=A,B.numSpotMaps=O,B.numLightProbes=U,i.version=nA++)}function f(d,p){let m=0,_=0,y=0,M=0,E=0;const S=p.matrixWorldInverse;for(let x=0,L=d.length;x<L;x++){const C=d[x];if(C.isDirectionalLight){const A=i.directional[m];A.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),m++}else if(C.isSpotLight){const A=i.spot[y];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const A=i.rectArea[M];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),u.identity(),a.copy(C.matrixWorld),a.premultiply(S),u.extractRotation(a),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),M++}else if(C.isPointLight){const A=i.point[_];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),_++}else if(C.isHemisphereLight){const A=i.hemi[E];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(S),E++}}}return{setup:c,setupView:f,state:i}}function S_(o){const e=new rA(o),t=[],i=[];function s(p){d.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function u(p){i.push(p)}function c(){e.setup(t)}function f(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:u}}function sA(o){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new S_(o),e.set(s,[c])):a>=u.length?(c=new S_(o),u.push(c)):c=u[a],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const oA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aA=`uniform sampler2D shadow_pass;
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
}`;function lA(o,e,t){let i=new _d;const s=new qe,a=new qe,u=new Lt,c=new fv({depthPacking:Q_}),f=new rS,d={},p=t.maxTextureSize,m={[zi]:Bn,[Bn]:zi,[pi]:pi},_=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:oA,fragmentShader:aA}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new Cn;M.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new pn(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B_;let x=this.type;this.render=function(I,U,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const P=o.getRenderTarget(),b=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(Ci),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const J=x!==lr&&this.type===lr,ue=x===lr&&this.type!==lr;for(let he=0,ie=I.length;he<ie;he++){const le=I[he],V=le.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ce=V.getFrameExtents();if(s.multiply(ce),a.copy(V.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/ce.x),s.x=a.x*ce.x,V.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/ce.y),s.y=a.y*ce.y,V.mapSize.y=a.y)),V.map===null||J===!0||ue===!0){const D=this.type!==lr?{minFilter:zn,magFilter:zn}:{};V.map!==null&&V.map.dispose(),V.map=new On(s.x,s.y,D),V.map.texture.name=le.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const z=V.getViewportCount();for(let D=0;D<z;D++){const K=V.getViewport(D);u.set(a.x*K.x,a.y*K.y,a.x*K.z,a.y*K.w),oe.viewport(u),V.updateMatrices(le,D),i=V.getFrustum(),A(U,B,V.camera,le,this.type)}V.isPointLightShadow!==!0&&this.type===lr&&L(V,B),V.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(P,b,k)};function L(I,U){const B=e.update(E);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new On(s.x,s.y)),_.uniforms.shadow_pass.value=I.map.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(U,null,B,_,E,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(U,null,B,y,E,null)}function C(I,U,B,P){let b=null;const k=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)b=k;else if(b=B.isPointLight===!0?f:c,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=b.uuid,J=U.uuid;let ue=d[oe];ue===void 0&&(ue={},d[oe]=ue);let he=ue[J];he===void 0&&(he=b.clone(),ue[J]=he,U.addEventListener("dispose",O)),b=he}if(b.visible=U.visible,b.wireframe=U.wireframe,P===lr?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:m[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,B.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const oe=o.properties.get(b);oe.light=B}return b}function A(I,U,B,P,b){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===lr)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const J=e.update(I),ue=I.material;if(Array.isArray(ue)){const he=J.groups;for(let ie=0,le=he.length;ie<le;ie++){const V=he[ie],ce=ue[V.materialIndex];if(ce&&ce.visible){const z=C(I,ce,P,b);I.onBeforeShadow(o,I,U,B,J,z,V),o.renderBufferDirect(B,null,J,z,I,V),I.onAfterShadow(o,I,U,B,J,z,V)}}}else if(ue.visible){const he=C(I,ue,P,b);I.onBeforeShadow(o,I,U,B,J,he,null),o.renderBufferDirect(B,null,J,he,I,null),I.onAfterShadow(o,I,U,B,J,he,null)}}const oe=I.children;for(let J=0,ue=oe.length;J<ue;J++)A(oe[J],U,B,P,b)}function O(I){I.target.removeEventListener("dispose",O);for(const B in d){const P=d[B],b=I.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}const uA={[cf]:hf,[ff]:mf,[df]:gf,[xo]:pf,[hf]:cf,[mf]:ff,[gf]:df,[pf]:xo};function cA(o,e){function t(){let Y=!1;const be=new Lt;let ae=null;const pe=new Lt(0,0,0,0);return{setMask:function(De){ae!==De&&!Y&&(o.colorMask(De,De,De,De),ae=De)},setLocked:function(De){Y=De},setClear:function(De,Le,ut,Bt,rn){rn===!0&&(De*=Bt,Le*=Bt,ut*=Bt),be.set(De,Le,ut,Bt),pe.equals(be)===!1&&(o.clearColor(De,Le,ut,Bt),pe.copy(be))},reset:function(){Y=!1,ae=null,pe.set(-1,0,0,0)}}}function i(){let Y=!1,be=!1,ae=null,pe=null,De=null;return{setReversed:function(Le){if(be!==Le){const ut=e.get("EXT_clip_control");be?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const Bt=De;De=null,this.setClear(Bt)}be=Le},getReversed:function(){return be},setTest:function(Le){Le?fe(o.DEPTH_TEST):ve(o.DEPTH_TEST)},setMask:function(Le){ae!==Le&&!Y&&(o.depthMask(Le),ae=Le)},setFunc:function(Le){if(be&&(Le=uA[Le]),pe!==Le){switch(Le){case cf:o.depthFunc(o.NEVER);break;case hf:o.depthFunc(o.ALWAYS);break;case ff:o.depthFunc(o.LESS);break;case xo:o.depthFunc(o.LEQUAL);break;case df:o.depthFunc(o.EQUAL);break;case pf:o.depthFunc(o.GEQUAL);break;case mf:o.depthFunc(o.GREATER);break;case gf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pe=Le}},setLocked:function(Le){Y=Le},setClear:function(Le){De!==Le&&(be&&(Le=1-Le),o.clearDepth(Le),De=Le)},reset:function(){Y=!1,ae=null,pe=null,De=null,be=!1}}}function s(){let Y=!1,be=null,ae=null,pe=null,De=null,Le=null,ut=null,Bt=null,rn=null;return{setTest:function(At){Y||(At?fe(o.STENCIL_TEST):ve(o.STENCIL_TEST))},setMask:function(At){be!==At&&!Y&&(o.stencilMask(At),be=At)},setFunc:function(At,Hn,Pn){(ae!==At||pe!==Hn||De!==Pn)&&(o.stencilFunc(At,Hn,Pn),ae=At,pe=Hn,De=Pn)},setOp:function(At,Hn,Pn){(Le!==At||ut!==Hn||Bt!==Pn)&&(o.stencilOp(At,Hn,Pn),Le=At,ut=Hn,Bt=Pn)},setLocked:function(At){Y=At},setClear:function(At){rn!==At&&(o.clearStencil(At),rn=At)},reset:function(){Y=!1,be=null,ae=null,pe=null,De=null,Le=null,ut=null,Bt=null,rn=null}}}const a=new t,u=new i,c=new s,f=new WeakMap,d=new WeakMap;let p={},m={},_=new WeakMap,y=[],M=null,E=!1,S=null,x=null,L=null,C=null,A=null,O=null,I=null,U=new We(0,0,0),B=0,P=!1,b=null,k=null,oe=null,J=null,ue=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,le=0;const V=o.getParameter(o.VERSION);V.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(V)[1]),ie=le>=1):V.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ie=le>=2);let ce=null,z={};const D=o.getParameter(o.SCISSOR_BOX),K=o.getParameter(o.VIEWPORT),ge=new Lt().fromArray(D),$=new Lt().fromArray(K);function se(Y,be,ae,pe){const De=new Uint8Array(4),Le=o.createTexture();o.bindTexture(Y,Le),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ut=0;ut<ae;ut++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(be,0,o.RGBA,1,1,pe,0,o.RGBA,o.UNSIGNED_BYTE,De):o.texImage2D(be+ut,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,De);return Le}const Se={};Se[o.TEXTURE_2D]=se(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=se(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=se(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=se(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),fe(o.DEPTH_TEST),u.setFunc(xo),Ze(!1),$e(ng),fe(o.CULL_FACE),G(Ci);function fe(Y){p[Y]!==!0&&(o.enable(Y),p[Y]=!0)}function ve(Y){p[Y]!==!1&&(o.disable(Y),p[Y]=!1)}function we(Y,be){return m[Y]!==be?(o.bindFramebuffer(Y,be),m[Y]=be,Y===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=be),Y===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=be),!0):!1}function Ve(Y,be){let ae=y,pe=!1;if(Y){ae=_.get(be),ae===void 0&&(ae=[],_.set(be,ae));const De=Y.textures;if(ae.length!==De.length||ae[0]!==o.COLOR_ATTACHMENT0){for(let Le=0,ut=De.length;Le<ut;Le++)ae[Le]=o.COLOR_ATTACHMENT0+Le;ae.length=De.length,pe=!0}}else ae[0]!==o.BACK&&(ae[0]=o.BACK,pe=!0);pe&&o.drawBuffers(ae)}function at(Y){return M!==Y?(o.useProgram(Y),M=Y,!0):!1}const Qe={[xs]:o.FUNC_ADD,[Mx]:o.FUNC_SUBTRACT,[Ex]:o.FUNC_REVERSE_SUBTRACT};Qe[Tx]=o.MIN,Qe[wx]=o.MAX;const Et={[Ax]:o.ZERO,[Rx]:o.ONE,[bx]:o.SRC_COLOR,[lf]:o.SRC_ALPHA,[Nx]:o.SRC_ALPHA_SATURATE,[Dx]:o.DST_COLOR,[Px]:o.DST_ALPHA,[Cx]:o.ONE_MINUS_SRC_COLOR,[uf]:o.ONE_MINUS_SRC_ALPHA,[Ix]:o.ONE_MINUS_DST_COLOR,[Lx]:o.ONE_MINUS_DST_ALPHA,[Ux]:o.CONSTANT_COLOR,[Fx]:o.ONE_MINUS_CONSTANT_COLOR,[Ox]:o.CONSTANT_ALPHA,[kx]:o.ONE_MINUS_CONSTANT_ALPHA};function G(Y,be,ae,pe,De,Le,ut,Bt,rn,At){if(Y===Ci){E===!0&&(ve(o.BLEND),E=!1);return}if(E===!1&&(fe(o.BLEND),E=!0),Y!==Sx){if(Y!==S||At!==P){if((x!==xs||A!==xs)&&(o.blendEquation(o.FUNC_ADD),x=xs,A=xs),At)switch(Y){case mo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case af:o.blendFunc(o.ONE,o.ONE);break;case ig:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case rg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case mo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case af:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case ig:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case rg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}L=null,C=null,O=null,I=null,U.set(0,0,0),B=0,S=Y,P=At}return}De=De||be,Le=Le||ae,ut=ut||pe,(be!==x||De!==A)&&(o.blendEquationSeparate(Qe[be],Qe[De]),x=be,A=De),(ae!==L||pe!==C||Le!==O||ut!==I)&&(o.blendFuncSeparate(Et[ae],Et[pe],Et[Le],Et[ut]),L=ae,C=pe,O=Le,I=ut),(Bt.equals(U)===!1||rn!==B)&&(o.blendColor(Bt.r,Bt.g,Bt.b,rn),U.copy(Bt),B=rn),S=Y,P=!1}function Ht(Y,be){Y.side===pi?ve(o.CULL_FACE):fe(o.CULL_FACE);let ae=Y.side===Bn;be&&(ae=!ae),Ze(ae),Y.blending===mo&&Y.transparent===!1?G(Ci):G(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),a.setMask(Y.colorWrite);const pe=Y.stencilWrite;c.setTest(pe),pe&&(c.setMask(Y.stencilWriteMask),c.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),c.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ht(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?fe(o.SAMPLE_ALPHA_TO_COVERAGE):ve(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(Y){b!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),b=Y)}function $e(Y){Y!==vx?(fe(o.CULL_FACE),Y!==k&&(Y===ng?o.cullFace(o.BACK):Y===xx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ve(o.CULL_FACE),k=Y}function Xe(Y){Y!==oe&&(ie&&o.lineWidth(Y),oe=Y)}function ht(Y,be,ae){Y?(fe(o.POLYGON_OFFSET_FILL),(J!==be||ue!==ae)&&(o.polygonOffset(be,ae),J=be,ue=ae)):ve(o.POLYGON_OFFSET_FILL)}function Ne(Y){Y?fe(o.SCISSOR_TEST):ve(o.SCISSOR_TEST)}function N(Y){Y===void 0&&(Y=o.TEXTURE0+he-1),ce!==Y&&(o.activeTexture(Y),ce=Y)}function w(Y,be,ae){ae===void 0&&(ce===null?ae=o.TEXTURE0+he-1:ae=ce);let pe=z[ae];pe===void 0&&(pe={type:void 0,texture:void 0},z[ae]=pe),(pe.type!==Y||pe.texture!==be)&&(ce!==ae&&(o.activeTexture(ae),ce=ae),o.bindTexture(Y,be||Se[Y]),pe.type=Y,pe.texture=be)}function ee(){const Y=z[ce];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function me(){try{o.compressedTexImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xe(){try{o.compressedTexImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function de(){try{o.texSubImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function je(){try{o.texSubImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Re(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Fe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function mt(){try{o.texStorage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Te(){try{o.texStorage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Be(){try{o.texImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function et(){try{o.texImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function it(Y){ge.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),ge.copy(Y))}function ze(Y){$.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),$.copy(Y))}function vt(Y,be){let ae=d.get(be);ae===void 0&&(ae=new WeakMap,d.set(be,ae));let pe=ae.get(Y);pe===void 0&&(pe=o.getUniformBlockIndex(be,Y.name),ae.set(Y,pe))}function lt(Y,be){const pe=d.get(be).get(Y);f.get(be)!==pe&&(o.uniformBlockBinding(be,pe,Y.__bindingPointIndex),f.set(be,pe))}function Dt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},ce=null,z={},m={},_=new WeakMap,y=[],M=null,E=!1,S=null,x=null,L=null,C=null,A=null,O=null,I=null,U=new We(0,0,0),B=0,P=!1,b=null,k=null,oe=null,J=null,ue=null,ge.set(0,0,o.canvas.width,o.canvas.height),$.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:fe,disable:ve,bindFramebuffer:we,drawBuffers:Ve,useProgram:at,setBlending:G,setMaterial:Ht,setFlipSided:Ze,setCullFace:$e,setLineWidth:Xe,setPolygonOffset:ht,setScissorTest:Ne,activeTexture:N,bindTexture:w,unbindTexture:ee,compressedTexImage2D:me,compressedTexImage3D:xe,texImage2D:Be,texImage3D:et,updateUBOMapping:vt,uniformBlockBinding:lt,texStorage2D:mt,texStorage3D:Te,texSubImage2D:de,texSubImage3D:je,compressedTexSubImage2D:Re,compressedTexSubImage3D:Fe,scissor:it,viewport:ze,reset:Dt}}function hA(o,e,t,i,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new qe,p=new WeakMap;let m;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,w){return y?new OffscreenCanvas(N,w):La("canvas")}function E(N,w,ee){let me=1;const xe=Ne(N);if((xe.width>ee||xe.height>ee)&&(me=ee/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const de=Math.floor(me*xe.width),je=Math.floor(me*xe.height);m===void 0&&(m=M(de,je));const Re=w?M(de,je):m;return Re.width=de,Re.height=je,Re.getContext("2d").drawImage(N,0,0,de,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+je+")."),Re}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),N;return N}function S(N){return N.generateMipmaps}function x(N){o.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(N,w,ee,me,xe=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=w;if(w===o.RED&&(ee===o.FLOAT&&(de=o.R32F),ee===o.HALF_FLOAT&&(de=o.R16F),ee===o.UNSIGNED_BYTE&&(de=o.R8)),w===o.RED_INTEGER&&(ee===o.UNSIGNED_BYTE&&(de=o.R8UI),ee===o.UNSIGNED_SHORT&&(de=o.R16UI),ee===o.UNSIGNED_INT&&(de=o.R32UI),ee===o.BYTE&&(de=o.R8I),ee===o.SHORT&&(de=o.R16I),ee===o.INT&&(de=o.R32I)),w===o.RG&&(ee===o.FLOAT&&(de=o.RG32F),ee===o.HALF_FLOAT&&(de=o.RG16F),ee===o.UNSIGNED_BYTE&&(de=o.RG8)),w===o.RG_INTEGER&&(ee===o.UNSIGNED_BYTE&&(de=o.RG8UI),ee===o.UNSIGNED_SHORT&&(de=o.RG16UI),ee===o.UNSIGNED_INT&&(de=o.RG32UI),ee===o.BYTE&&(de=o.RG8I),ee===o.SHORT&&(de=o.RG16I),ee===o.INT&&(de=o.RG32I)),w===o.RGB_INTEGER&&(ee===o.UNSIGNED_BYTE&&(de=o.RGB8UI),ee===o.UNSIGNED_SHORT&&(de=o.RGB16UI),ee===o.UNSIGNED_INT&&(de=o.RGB32UI),ee===o.BYTE&&(de=o.RGB8I),ee===o.SHORT&&(de=o.RGB16I),ee===o.INT&&(de=o.RGB32I)),w===o.RGBA_INTEGER&&(ee===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),ee===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),ee===o.UNSIGNED_INT&&(de=o.RGBA32UI),ee===o.BYTE&&(de=o.RGBA8I),ee===o.SHORT&&(de=o.RGBA16I),ee===o.INT&&(de=o.RGBA32I)),w===o.RGB&&ee===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),w===o.RGBA){const je=xe?Ru:wt.getTransfer(me);ee===o.FLOAT&&(de=o.RGBA32F),ee===o.HALF_FLOAT&&(de=o.RGBA16F),ee===o.UNSIGNED_BYTE&&(de=je===Ft?o.SRGB8_ALPHA8:o.RGBA8),ee===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),ee===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(N,w){let ee;return N?w===null||w===Ms||w===Eo?ee=o.DEPTH24_STENCIL8:w===bi?ee=o.DEPTH32F_STENCIL8:w===ba&&(ee=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ms||w===Eo?ee=o.DEPTH_COMPONENT24:w===bi?ee=o.DEPTH_COMPONENT32F:w===ba&&(ee=o.DEPTH_COMPONENT16),ee}function O(N,w){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==zn&&N.minFilter!==ni?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function I(N){const w=N.target;w.removeEventListener("dispose",I),B(w),w.isVideoTexture&&p.delete(w)}function U(N){const w=N.target;w.removeEventListener("dispose",U),b(w)}function B(N){const w=i.get(N);if(w.__webglInit===void 0)return;const ee=N.source,me=_.get(ee);if(me){const xe=me[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&P(N),Object.keys(me).length===0&&_.delete(ee)}i.remove(N)}function P(N){const w=i.get(N);o.deleteTexture(w.__webglTexture);const ee=N.source,me=_.get(ee);delete me[w.__cacheKey],u.memory.textures--}function b(N){const w=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let xe=0;xe<w.__webglFramebuffer[me].length;xe++)o.deleteFramebuffer(w.__webglFramebuffer[me][xe]);else o.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)o.deleteFramebuffer(w.__webglFramebuffer[me]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ee=N.textures;for(let me=0,xe=ee.length;me<xe;me++){const de=i.get(ee[me]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),u.memory.textures--),i.remove(ee[me])}i.remove(N)}let k=0;function oe(){k=0}function J(){const N=k;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),k+=1,N}function ue(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function he(N,w){const ee=i.get(N);if(N.isVideoTexture&&Xe(N),N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){const me=N.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(ee,N,w);return}}t.bindTexture(o.TEXTURE_2D,ee.__webglTexture,o.TEXTURE0+w)}function ie(N,w){const ee=i.get(N);if(N.version>0&&ee.__version!==N.version){$(ee,N,w);return}t.bindTexture(o.TEXTURE_2D_ARRAY,ee.__webglTexture,o.TEXTURE0+w)}function le(N,w){const ee=i.get(N);if(N.version>0&&ee.__version!==N.version){$(ee,N,w);return}t.bindTexture(o.TEXTURE_3D,ee.__webglTexture,o.TEXTURE0+w)}function V(N,w){const ee=i.get(N);if(N.version>0&&ee.__version!==N.version){se(ee,N,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,ee.__webglTexture,o.TEXTURE0+w)}const ce={[Mo]:o.REPEAT,[Wr]:o.CLAMP_TO_EDGE,[Au]:o.MIRRORED_REPEAT},z={[zn]:o.NEAREST,[V_]:o.NEAREST_MIPMAP_NEAREST,[Ma]:o.NEAREST_MIPMAP_LINEAR,[ni]:o.LINEAR,[vu]:o.LINEAR_MIPMAP_NEAREST,[cr]:o.LINEAR_MIPMAP_LINEAR},D={[Jx]:o.NEVER,[sy]:o.ALWAYS,[ey]:o.LESS,[J_]:o.LEQUAL,[ty]:o.EQUAL,[ry]:o.GEQUAL,[ny]:o.GREATER,[iy]:o.NOTEQUAL};function K(N,w){if(w.type===bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ni||w.magFilter===vu||w.magFilter===Ma||w.magFilter===cr||w.minFilter===ni||w.minFilter===vu||w.minFilter===Ma||w.minFilter===cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,ce[w.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,ce[w.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,ce[w.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,z[w.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,z[w.minFilter]),w.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,D[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===zn||w.minFilter!==Ma&&w.minFilter!==cr||w.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ge(N,w){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",I));const me=w.source;let xe=_.get(me);xe===void 0&&(xe={},_.set(me,xe));const de=ue(w);if(de!==N.__cacheKey){xe[de]===void 0&&(xe[de]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),xe[de].usedTimes++;const je=xe[N.__cacheKey];je!==void 0&&(xe[N.__cacheKey].usedTimes--,je.usedTimes===0&&P(w)),N.__cacheKey=de,N.__webglTexture=xe[de].texture}return ee}function $(N,w,ee){let me=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=o.TEXTURE_3D);const xe=ge(N,w),de=w.source;t.bindTexture(me,N.__webglTexture,o.TEXTURE0+ee);const je=i.get(de);if(de.version!==je.__version||xe===!0){t.activeTexture(o.TEXTURE0+ee);const Re=wt.getPrimaries(wt.workingColorSpace),Fe=w.colorSpace===Gr?null:wt.getPrimaries(w.colorSpace),mt=w.colorSpace===Gr||Re===Fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Te=E(w.image,!1,s.maxTextureSize);Te=ht(w,Te);const Be=a.convert(w.format,w.colorSpace),et=a.convert(w.type);let it=C(w.internalFormat,Be,et,w.colorSpace,w.isVideoTexture);K(me,w);let ze;const vt=w.mipmaps,lt=w.isVideoTexture!==!0,Dt=je.__version===void 0||xe===!0,Y=de.dataReady,be=O(w,Te);if(w.isDepthTexture)it=A(w.format===To,w.type),Dt&&(lt?t.texStorage2D(o.TEXTURE_2D,1,it,Te.width,Te.height):t.texImage2D(o.TEXTURE_2D,0,it,Te.width,Te.height,0,Be,et,null));else if(w.isDataTexture)if(vt.length>0){lt&&Dt&&t.texStorage2D(o.TEXTURE_2D,be,it,vt[0].width,vt[0].height);for(let ae=0,pe=vt.length;ae<pe;ae++)ze=vt[ae],lt?Y&&t.texSubImage2D(o.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,et,ze.data):t.texImage2D(o.TEXTURE_2D,ae,it,ze.width,ze.height,0,Be,et,ze.data);w.generateMipmaps=!1}else lt?(Dt&&t.texStorage2D(o.TEXTURE_2D,be,it,Te.width,Te.height),Y&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Te.width,Te.height,Be,et,Te.data)):t.texImage2D(o.TEXTURE_2D,0,it,Te.width,Te.height,0,Be,et,Te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&Dt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,be,it,vt[0].width,vt[0].height,Te.depth);for(let ae=0,pe=vt.length;ae<pe;ae++)if(ze=vt[ae],w.format!==mi)if(Be!==null)if(lt){if(Y)if(w.layerUpdates.size>0){const De=Zg(ze.width,ze.height,w.format,w.type);for(const Le of w.layerUpdates){const ut=ze.data.subarray(Le*De/ze.data.BYTES_PER_ELEMENT,(Le+1)*De/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ae,0,0,Le,ze.width,ze.height,1,Be,ut)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Te.depth,Be,ze.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ae,it,ze.width,ze.height,Te.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Y&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Te.depth,Be,et,ze.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ae,it,ze.width,ze.height,Te.depth,0,Be,et,ze.data)}else{lt&&Dt&&t.texStorage2D(o.TEXTURE_2D,be,it,vt[0].width,vt[0].height);for(let ae=0,pe=vt.length;ae<pe;ae++)ze=vt[ae],w.format!==mi?Be!==null?lt?Y&&t.compressedTexSubImage2D(o.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(o.TEXTURE_2D,ae,it,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Y&&t.texSubImage2D(o.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,et,ze.data):t.texImage2D(o.TEXTURE_2D,ae,it,ze.width,ze.height,0,Be,et,ze.data)}else if(w.isDataArrayTexture)if(lt){if(Dt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,be,it,Te.width,Te.height,Te.depth),Y)if(w.layerUpdates.size>0){const ae=Zg(Te.width,Te.height,w.format,w.type);for(const pe of w.layerUpdates){const De=Te.data.subarray(pe*ae/Te.data.BYTES_PER_ELEMENT,(pe+1)*ae/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pe,Te.width,Te.height,1,Be,et,De)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Be,et,Te.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,it,Te.width,Te.height,Te.depth,0,Be,et,Te.data);else if(w.isData3DTexture)lt?(Dt&&t.texStorage3D(o.TEXTURE_3D,be,it,Te.width,Te.height,Te.depth),Y&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Be,et,Te.data)):t.texImage3D(o.TEXTURE_3D,0,it,Te.width,Te.height,Te.depth,0,Be,et,Te.data);else if(w.isFramebufferTexture){if(Dt)if(lt)t.texStorage2D(o.TEXTURE_2D,be,it,Te.width,Te.height);else{let ae=Te.width,pe=Te.height;for(let De=0;De<be;De++)t.texImage2D(o.TEXTURE_2D,De,it,ae,pe,0,Be,et,null),ae>>=1,pe>>=1}}else if(vt.length>0){if(lt&&Dt){const ae=Ne(vt[0]);t.texStorage2D(o.TEXTURE_2D,be,it,ae.width,ae.height)}for(let ae=0,pe=vt.length;ae<pe;ae++)ze=vt[ae],lt?Y&&t.texSubImage2D(o.TEXTURE_2D,ae,0,0,Be,et,ze):t.texImage2D(o.TEXTURE_2D,ae,it,Be,et,ze);w.generateMipmaps=!1}else if(lt){if(Dt){const ae=Ne(Te);t.texStorage2D(o.TEXTURE_2D,be,it,ae.width,ae.height)}Y&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Be,et,Te)}else t.texImage2D(o.TEXTURE_2D,0,it,Be,et,Te);S(w)&&x(me),je.__version=de.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function se(N,w,ee){if(w.image.length!==6)return;const me=ge(N,w),xe=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+ee);const de=i.get(xe);if(xe.version!==de.__version||me===!0){t.activeTexture(o.TEXTURE0+ee);const je=wt.getPrimaries(wt.workingColorSpace),Re=w.colorSpace===Gr?null:wt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Gr||je===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const mt=w.isCompressedTexture||w.image[0].isCompressedTexture,Te=w.image[0]&&w.image[0].isDataTexture,Be=[];for(let pe=0;pe<6;pe++)!mt&&!Te?Be[pe]=E(w.image[pe],!0,s.maxCubemapSize):Be[pe]=Te?w.image[pe].image:w.image[pe],Be[pe]=ht(w,Be[pe]);const et=Be[0],it=a.convert(w.format,w.colorSpace),ze=a.convert(w.type),vt=C(w.internalFormat,it,ze,w.colorSpace),lt=w.isVideoTexture!==!0,Dt=de.__version===void 0||me===!0,Y=xe.dataReady;let be=O(w,et);K(o.TEXTURE_CUBE_MAP,w);let ae;if(mt){lt&&Dt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,be,vt,et.width,et.height);for(let pe=0;pe<6;pe++){ae=Be[pe].mipmaps;for(let De=0;De<ae.length;De++){const Le=ae[De];w.format!==mi?it!==null?lt?Y&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,it,Le.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,vt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?Y&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,it,ze,Le.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,vt,Le.width,Le.height,0,it,ze,Le.data)}}}else{if(ae=w.mipmaps,lt&&Dt){ae.length>0&&be++;const pe=Ne(Be[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,be,vt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Te){lt?Y&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be[pe].width,Be[pe].height,it,ze,Be[pe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,vt,Be[pe].width,Be[pe].height,0,it,ze,Be[pe].data);for(let De=0;De<ae.length;De++){const ut=ae[De].image[pe].image;lt?Y&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,ut.width,ut.height,it,ze,ut.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,vt,ut.width,ut.height,0,it,ze,ut.data)}}else{lt?Y&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,it,ze,Be[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,vt,it,ze,Be[pe]);for(let De=0;De<ae.length;De++){const Le=ae[De];lt?Y&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,it,ze,Le.image[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,vt,it,ze,Le.image[pe])}}}S(w)&&x(o.TEXTURE_CUBE_MAP),de.__version=xe.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Se(N,w,ee,me,xe,de){const je=a.convert(ee.format,ee.colorSpace),Re=a.convert(ee.type),Fe=C(ee.internalFormat,je,Re,ee.colorSpace),mt=i.get(w),Te=i.get(ee);if(Te.__renderTarget=w,!mt.__hasExternalTextures){const Be=Math.max(1,w.width>>de),et=Math.max(1,w.height>>de);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?t.texImage3D(xe,de,Fe,Be,et,w.depth,0,je,Re,null):t.texImage2D(xe,de,Fe,Be,et,0,je,Re,null)}t.bindFramebuffer(o.FRAMEBUFFER,N),$e(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,xe,Te.__webglTexture,0,Ze(w)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,me,xe,Te.__webglTexture,de),t.bindFramebuffer(o.FRAMEBUFFER,null)}function fe(N,w,ee){if(o.bindRenderbuffer(o.RENDERBUFFER,N),w.depthBuffer){const me=w.depthTexture,xe=me&&me.isDepthTexture?me.type:null,de=A(w.stencilBuffer,xe),je=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=Ze(w);$e(w)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Re,de,w.width,w.height):ee?o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,de,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,de,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,je,o.RENDERBUFFER,N)}else{const me=w.textures;for(let xe=0;xe<me.length;xe++){const de=me[xe],je=a.convert(de.format,de.colorSpace),Re=a.convert(de.type),Fe=C(de.internalFormat,je,Re,de.colorSpace),mt=Ze(w);ee&&$e(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,mt,Fe,w.width,w.height):$e(w)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,mt,Fe,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Fe,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ve(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const xe=me.__webglTexture,de=Ze(w);if(w.depthTexture.format===go)$e(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xe,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xe,0);else if(w.depthTexture.format===To)$e(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xe,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function we(N){const w=i.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const me=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const xe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),w.__depthDisposeCallback=xe}w.__boundDepthTexture=me}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");ve(w.__webglFramebuffer,N)}else if(ee){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=o.createRenderbuffer(),fe(w.__webglDepthbuffer[me],N,!1);else{const xe=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[me];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,de)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),fe(w.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xe=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,xe),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,xe)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ve(N,w,ee){const me=i.get(N);w!==void 0&&Se(me.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ee!==void 0&&we(N)}function at(N){const w=N.texture,ee=i.get(N),me=i.get(w);N.addEventListener("dispose",U);const xe=N.textures,de=N.isWebGLCubeRenderTarget===!0,je=xe.length>1;if(je||(me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture()),me.__version=w.version,u.memory.textures++),de){ee.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer[Re]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)ee.__webglFramebuffer[Re][Fe]=o.createFramebuffer()}else ee.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)ee.__webglFramebuffer[Re]=o.createFramebuffer()}else ee.__webglFramebuffer=o.createFramebuffer();if(je)for(let Re=0,Fe=xe.length;Re<Fe;Re++){const mt=i.get(xe[Re]);mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture(),u.memory.textures++)}if(N.samples>0&&$e(N)===!1){ee.__webglMultisampledFramebuffer=o.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Re=0;Re<xe.length;Re++){const Fe=xe[Re];ee.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ee.__webglColorRenderbuffer[Re]);const mt=a.convert(Fe.format,Fe.colorSpace),Te=a.convert(Fe.type),Be=C(Fe.internalFormat,mt,Te,Fe.colorSpace,N.isXRRenderTarget===!0),et=Ze(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,et,Be,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,ee.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=o.createRenderbuffer(),fe(ee.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){t.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),K(o.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Se(ee.__webglFramebuffer[Re][Fe],N,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Fe);else Se(ee.__webglFramebuffer[Re],N,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(w)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Re=0,Fe=xe.length;Re<Fe;Re++){const mt=xe[Re],Te=i.get(mt);t.bindTexture(o.TEXTURE_2D,Te.__webglTexture),K(o.TEXTURE_2D,mt),Se(ee.__webglFramebuffer,N,mt,o.COLOR_ATTACHMENT0+Re,o.TEXTURE_2D,0),S(mt)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let Re=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Re,me.__webglTexture),K(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Se(ee.__webglFramebuffer[Fe],N,w,o.COLOR_ATTACHMENT0,Re,Fe);else Se(ee.__webglFramebuffer,N,w,o.COLOR_ATTACHMENT0,Re,0);S(w)&&x(Re),t.unbindTexture()}N.depthBuffer&&we(N)}function Qe(N){const w=N.textures;for(let ee=0,me=w.length;ee<me;ee++){const xe=w[ee];if(S(xe)){const de=L(N),je=i.get(xe).__webglTexture;t.bindTexture(de,je),x(de),t.unbindTexture()}}}const Et=[],G=[];function Ht(N){if(N.samples>0){if($e(N)===!1){const w=N.textures,ee=N.width,me=N.height;let xe=o.COLOR_BUFFER_BIT;const de=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,je=i.get(N),Re=w.length>1;if(Re)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,je.__webglColorRenderbuffer[Fe]);const mt=i.get(w[Fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,mt,0)}o.blitFramebuffer(0,0,ee,me,0,0,ee,me,xe,o.NEAREST),f===!0&&(Et.length=0,G.length=0,Et.push(o.COLOR_ATTACHMENT0+Fe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Et.push(de),G.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,G)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,je.__webglColorRenderbuffer[Fe]);const mt=i.get(w[Fe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,mt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&f){const w=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function Ze(N){return Math.min(s.maxSamples,N.samples)}function $e(N){const w=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xe(N){const w=u.render.frame;p.get(N)!==w&&(p.set(N,w),N.update())}function ht(N,w){const ee=N.colorSpace,me=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==Vn&&ee!==Gr&&(wt.getTransfer(ee)===Ft?(me!==mi||xe!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),w}function Ne(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=ie,this.setTexture3D=le,this.setTextureCube=V,this.rebindTextures=Ve,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=$e}function fA(o,e){function t(i,s=Gr){let a;const u=wt.getTransfer(s);if(i===dr)return o.UNSIGNED_BYTE;if(i===sd)return o.UNSIGNED_SHORT_4_4_4_4;if(i===od)return o.UNSIGNED_SHORT_5_5_5_1;if(i===W_)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===H_)return o.BYTE;if(i===G_)return o.SHORT;if(i===ba)return o.UNSIGNED_SHORT;if(i===rd)return o.INT;if(i===Ms)return o.UNSIGNED_INT;if(i===bi)return o.FLOAT;if(i===di)return o.HALF_FLOAT;if(i===X_)return o.ALPHA;if(i===j_)return o.RGB;if(i===mi)return o.RGBA;if(i===Y_)return o.LUMINANCE;if(i===q_)return o.LUMINANCE_ALPHA;if(i===go)return o.DEPTH_COMPONENT;if(i===To)return o.DEPTH_STENCIL;if(i===ad)return o.RED;if(i===ld)return o.RED_INTEGER;if(i===K_)return o.RG;if(i===ud)return o.RG_INTEGER;if(i===cd)return o.RGBA_INTEGER;if(i===xu||i===yu||i===Su||i===Mu)if(u===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===xu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===xu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Su)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xf||i===yf||i===Sf||i===Mf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===xf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ef||i===Tf||i===wf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ef||i===Tf)return u===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===wf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Af||i===Rf||i===bf||i===Cf||i===Pf||i===Lf||i===Df||i===If||i===Nf||i===Uf||i===Ff||i===Of||i===kf||i===Bf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Af)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Df)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===If)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ff)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Of)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eu||i===zf||i===Vf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Eu)return u===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$_||i===Hf||i===Gf||i===Wf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Eu)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Hf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const dA={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,u=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),x=this._getHandJoint(d,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],_=p.position.distanceTo(m.position),y=.02,M=.005;d.inputState.pinching&&_>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(dA)))}return c!==null&&(c.visible=s!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const pA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mA=`
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

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new mn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bn({vertexShader:pA,fragmentShader:mA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new Du(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _A extends Es{constructor(e,t){super();const i=this;let s=null,a=1,u=null,c="local-floor",f=1,d=null,p=null,m=null,_=null,y=null,M=null;const E=new gA,S=t.getContextAttributes();let x=null,L=null;const C=[],A=[],O=new qe;let I=null;const U=new kn;U.viewport=new Lt;const B=new kn;B.viewport=new Lt;const P=[U,B],b=new RS;let k=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=C[$];return se===void 0&&(se=new Zh,C[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=C[$];return se===void 0&&(se=new Zh,C[$]=se),se.getGripSpace()},this.getHand=function($){let se=C[$];return se===void 0&&(se=new Zh,C[$]=se),se.getHandSpace()};function J($){const se=A.indexOf($.inputSource);if(se===-1)return;const Se=C[se];Se!==void 0&&(Se.update($.inputSource,$.frame,d||u),Se.dispatchEvent({type:$.type,data:$.inputSource}))}function ue(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",he);for(let $=0;$<C.length;$++){const se=A[$];se!==null&&(A[$]=null,C[$].disconnect(se))}k=null,oe=null,E.reset(),e.setRenderTarget(x),y=null,_=null,m=null,s=null,L=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){c=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new On(y.framebufferWidth,y.framebufferHeight,{format:mi,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let se=null,Se=null,fe=null;S.depth&&(fe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=S.stencil?To:go,Se=S.stencil?Eo:Ms);const ve={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:a};m=new XRWebGLBinding(s,t),_=m.createProjectionLayer(ve),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new On(_.textureWidth,_.textureHeight,{format:mi,type:dr,depthTexture:new hv(_.textureWidth,_.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await s.requestReferenceSpace(c),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function he($){for(let se=0;se<$.removed.length;se++){const Se=$.removed[se],fe=A.indexOf(Se);fe>=0&&(A[fe]=null,C[fe].disconnect(Se))}for(let se=0;se<$.added.length;se++){const Se=$.added[se];let fe=A.indexOf(Se);if(fe===-1){for(let we=0;we<C.length;we++)if(we>=A.length){A.push(Se),fe=we;break}else if(A[we]===null){A[we]=Se,fe=we;break}if(fe===-1)break}const ve=C[fe];ve&&ve.connect(Se)}}const ie=new W,le=new W;function V($,se,Se){ie.setFromMatrixPosition(se.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);const fe=ie.distanceTo(le),ve=se.projectionMatrix.elements,we=Se.projectionMatrix.elements,Ve=ve[14]/(ve[10]-1),at=ve[14]/(ve[10]+1),Qe=(ve[9]+1)/ve[5],Et=(ve[9]-1)/ve[5],G=(ve[8]-1)/ve[0],Ht=(we[8]+1)/we[0],Ze=Ve*G,$e=Ve*Ht,Xe=fe/(-G+Ht),ht=Xe*-G;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ht),$.translateZ(Xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ve[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ne=Ve+Xe,N=at+Xe,w=Ze-ht,ee=$e+(fe-ht),me=Qe*at/N*Ne,xe=Et*at/N*Ne;$.projectionMatrix.makePerspective(w,ee,me,xe,Ne,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let se=$.near,Se=$.far;E.texture!==null&&(E.depthNear>0&&(se=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),b.near=B.near=U.near=se,b.far=B.far=U.far=Se,(k!==b.near||oe!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),k=b.near,oe=b.far),U.layers.mask=$.layers.mask|2,B.layers.mask=$.layers.mask|4,b.layers.mask=U.layers.mask|B.layers.mask;const fe=$.parent,ve=b.cameras;ce(b,fe);for(let we=0;we<ve.length;we++)ce(ve[we],fe);ve.length===2?V(b,U,B):b.projectionMatrix.copy(U.projectionMatrix),z($,b,fe)};function z($,se,Se){Se===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=wo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function($){f=$,_!==null&&(_.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(b)};let D=null;function K($,se){if(p=se.getViewerPose(d||u),M=se,p!==null){const Se=p.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let fe=!1;Se.length!==b.cameras.length&&(b.cameras.length=0,fe=!0);for(let we=0;we<Se.length;we++){const Ve=Se[we];let at=null;if(y!==null)at=y.getViewport(Ve);else{const Et=m.getViewSubImage(_,Ve);at=Et.viewport,we===0&&(e.setRenderTargetTextures(L,Et.colorTexture,_.ignoreDepthValues?void 0:Et.depthStencilTexture),e.setRenderTarget(L))}let Qe=P[we];Qe===void 0&&(Qe=new kn,Qe.layers.enable(we),Qe.viewport=new Lt,P[we]=Qe),Qe.matrix.fromArray(Ve.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Ve.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(at.x,at.y,at.width,at.height),we===0&&(b.matrix.copy(Qe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),fe===!0&&b.cameras.push(Qe)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const we=m.getDepthInformation(Se[0]);we&&we.isValid&&we.texture&&E.init(e,we,s.renderState)}}for(let Se=0;Se<C.length;Se++){const fe=A[Se],ve=C[Se];fe!==null&&ve!==void 0&&ve.update(fe,se,d||u)}D&&D($,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),M=null}const ge=new _v;ge.setAnimationLoop(K),this.setAnimationLoop=function($){D=$},this.dispose=function(){}}}const gs=new Li,vA=new ft;function xA(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,ov(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,L,C,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),m(S,x)):x.isMeshPhongMaterial?(a(S,x),p(S,x)):x.isMeshStandardMaterial?(a(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,A)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),E(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&c(S,x)):x.isPointsMaterial?f(S,x,L,C):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Bn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Bn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),C=L.envMap,A=L.envMapRotation;C&&(S.envMap.value=C,gs.copy(A),gs.x*=-1,gs.y*=-1,gs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),S.envMapRotation.value.setFromMatrix4(vA.makeRotationFromEuler(gs)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function c(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,L,C){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=C*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yA(o,e,t,i){let s={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,C){const A=C.program;i.uniformBlockBinding(L,A)}function d(L,C){let A=s[L.id];A===void 0&&(M(L),A=p(L),s[L.id]=A,L.addEventListener("dispose",S));const O=C.program;i.updateUBOMapping(L,O);const I=e.render.frame;a[L.id]!==I&&(_(L),a[L.id]=I)}function p(L){const C=m();L.__bindingPointIndex=C;const A=o.createBuffer(),O=L.__size,I=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,O,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,A),A}function m(){for(let L=0;L<c;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const C=s[L.id],A=L.uniforms,O=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let I=0,U=A.length;I<U;I++){const B=Array.isArray(A[I])?A[I]:[A[I]];for(let P=0,b=B.length;P<b;P++){const k=B[P];if(y(k,I,P,O)===!0){const oe=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let ue=0;for(let he=0;he<J.length;he++){const ie=J[he],le=E(ie);typeof ie=="number"||typeof ie=="boolean"?(k.__data[0]=ie,o.bufferSubData(o.UNIFORM_BUFFER,oe+ue,k.__data)):ie.isMatrix3?(k.__data[0]=ie.elements[0],k.__data[1]=ie.elements[1],k.__data[2]=ie.elements[2],k.__data[3]=0,k.__data[4]=ie.elements[3],k.__data[5]=ie.elements[4],k.__data[6]=ie.elements[5],k.__data[7]=0,k.__data[8]=ie.elements[6],k.__data[9]=ie.elements[7],k.__data[10]=ie.elements[8],k.__data[11]=0):(ie.toArray(k.__data,ue),ue+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(L,C,A,O){const I=L.value,U=C+"_"+A;if(O[U]===void 0)return typeof I=="number"||typeof I=="boolean"?O[U]=I:O[U]=I.clone(),!0;{const B=O[U];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return O[U]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function M(L){const C=L.uniforms;let A=0;const O=16;for(let U=0,B=C.length;U<B;U++){const P=Array.isArray(C[U])?C[U]:[C[U]];for(let b=0,k=P.length;b<k;b++){const oe=P[b],J=Array.isArray(oe.value)?oe.value:[oe.value];for(let ue=0,he=J.length;ue<he;ue++){const ie=J[ue],le=E(ie),V=A%O,ce=V%le.boundary,z=V+ce;A+=ce,z!==0&&O-z<le.storage&&(A+=O-z),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=A,A+=le.storage}}}const I=A%O;return I>0&&(A+=O-I),L.__size=A,L.__cache={},this}function E(L){const C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),C}function S(L){const C=L.target;C.removeEventListener("dispose",S);const A=u.indexOf(C.__bindingPointIndex);u.splice(A,1),o.deleteBuffer(s[C.id]),delete s[C.id],delete a[C.id]}function x(){for(const L in s)o.deleteBuffer(s[L]);u=[],s={},a={}}return{bind:f,update:d,dispose:x}}class SA{constructor(e={}){const{canvas:t=My(),context:i=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=u;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const L=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Yr,this.toneMappingExposure=1;const A=this;let O=!1,I=0,U=0,B=null,P=-1,b=null;const k=new Lt,oe=new Lt;let J=null;const ue=new We(0);let he=0,ie=t.width,le=t.height,V=1,ce=null,z=null;const D=new Lt(0,0,ie,le),K=new Lt(0,0,ie,le);let ge=!1;const $=new _d;let se=!1,Se=!1;const fe=new ft,ve=new ft,we=new W,Ve=new Lt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Et(){return B===null?V:1}let G=i;function Ht(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Le,!1),G===null){const q="webgl2";if(G=Ht(q,R),G===null)throw Ht(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ze,$e,Xe,ht,Ne,N,w,ee,me,xe,de,je,Re,Fe,mt,Te,Be,et,it,ze,vt,lt,Dt,Y;function be(){Ze=new PT(G),Ze.init(),lt=new fA(G,Ze),$e=new TT(G,Ze,e,lt),Xe=new cA(G,Ze),$e.reverseDepthBuffer&&_&&Xe.buffers.depth.setReversed(!0),ht=new IT(G),Ne=new Zw,N=new hA(G,Ze,Xe,Ne,$e,lt,ht),w=new AT(A),ee=new CT(A),me=new zS(G),Dt=new MT(G,me),xe=new LT(G,me,ht,Dt),de=new UT(G,xe,me,ht),it=new NT(G,$e,N),Te=new wT(Ne),je=new $w(A,w,ee,Ze,$e,Dt,Te),Re=new xA(A,Ne),Fe=new Jw,mt=new sA(Ze),et=new ST(A,w,ee,Xe,de,y,f),Be=new lA(A,de,$e),Y=new yA(G,ht,$e,Xe),ze=new ET(G,Ze,ht),vt=new DT(G,Ze,ht),ht.programs=je.programs,A.capabilities=$e,A.extensions=Ze,A.properties=Ne,A.renderLists=Fe,A.shadowMap=Be,A.state=Xe,A.info=ht}be();const ae=new _A(A,G);this.xr=ae,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Ze.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ze.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(ie,le,!1))},this.getSize=function(R){return R.set(ie,le)},this.setSize=function(R,q,ne=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=R,le=q,t.width=Math.floor(R*V),t.height=Math.floor(q*V),ne===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(ie*V,le*V).floor()},this.setDrawingBufferSize=function(R,q,ne){ie=R,le=q,V=ne,t.width=Math.floor(R*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(D)},this.setViewport=function(R,q,ne,re){R.isVector4?D.set(R.x,R.y,R.z,R.w):D.set(R,q,ne,re),Xe.viewport(k.copy(D).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(K)},this.setScissor=function(R,q,ne,re){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,q,ne,re),Xe.scissor(oe.copy(K).multiplyScalar(V).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){Xe.setScissorTest(ge=R)},this.setOpaqueSort=function(R){ce=R},this.setTransparentSort=function(R){z=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(R=!0,q=!0,ne=!0){let re=0;if(R){let X=!1;if(B!==null){const Ee=B.texture.format;X=Ee===cd||Ee===ud||Ee===ld}if(X){const Ee=B.texture.type,Ce=Ee===dr||Ee===Ms||Ee===ba||Ee===Eo||Ee===sd||Ee===od,Ue=et.getClearColor(),Oe=et.getClearAlpha(),rt=Ue.r,st=Ue.g,Ke=Ue.b;Ce?(M[0]=rt,M[1]=st,M[2]=Ke,M[3]=Oe,G.clearBufferuiv(G.COLOR,0,M)):(E[0]=rt,E[1]=st,E[2]=Ke,E[3]=Oe,G.clearBufferiv(G.COLOR,0,E))}else re|=G.COLOR_BUFFER_BIT}q&&(re|=G.DEPTH_BUFFER_BIT),ne&&(re|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),et.dispose(),Fe.dispose(),mt.dispose(),Ne.dispose(),w.dispose(),ee.dispose(),de.dispose(),Dt.dispose(),Y.dispose(),je.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ts),ae.removeEventListener("sessionend",pr),ji.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const R=ht.autoReset,q=Be.enabled,ne=Be.autoUpdate,re=Be.needsUpdate,X=Be.type;be(),ht.autoReset=R,Be.enabled=q,Be.autoUpdate=ne,Be.needsUpdate=re,Be.type=X}function Le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ut(R){const q=R.target;q.removeEventListener("dispose",ut),Bt(q)}function Bt(R){rn(R),Ne.remove(R)}function rn(R){const q=Ne.get(R).programs;q!==void 0&&(q.forEach(function(ne){je.releaseProgram(ne)}),R.isShaderMaterial&&je.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ne,re,X,Ee){q===null&&(q=at);const Ce=X.isMesh&&X.matrixWorld.determinant()<0,Ue=ka(R,q,ne,re,X);Xe.setMaterial(re,Ce);let Oe=ne.index,rt=1;if(re.wireframe===!0){if(Oe=xe.getWireframeAttribute(ne),Oe===void 0)return;rt=2}const st=ne.drawRange,Ke=ne.attributes.position;let ct=st.start*rt,bt=(st.start+st.count)*rt;Ee!==null&&(ct=Math.max(ct,Ee.start*rt),bt=Math.min(bt,(Ee.start+Ee.count)*rt)),Oe!==null?(ct=Math.max(ct,0),bt=Math.min(bt,Oe.count)):Ke!=null&&(ct=Math.max(ct,0),bt=Math.min(bt,Ke.count));const Ct=bt-ct;if(Ct<0||Ct===1/0)return;Dt.setup(X,re,Ue,ne,Oe);let Gt,Tt=ze;if(Oe!==null&&(Gt=me.get(Oe),Tt=vt,Tt.setIndex(Gt)),X.isMesh)re.wireframe===!0?(Xe.setLineWidth(re.wireframeLinewidth*Et()),Tt.setMode(G.LINES)):Tt.setMode(G.TRIANGLES);else if(X.isLine){let Je=re.linewidth;Je===void 0&&(Je=1),Xe.setLineWidth(Je*Et()),X.isLineSegments?Tt.setMode(G.LINES):X.isLineLoop?Tt.setMode(G.LINE_LOOP):Tt.setMode(G.LINE_STRIP)}else X.isPoints?Tt.setMode(G.POINTS):X.isSprite&&Tt.setMode(G.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Tt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Tt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Je=X._multiDrawStarts,qt=X._multiDrawCounts,Mt=X._multiDrawCount,_n=Oe?me.get(Oe).bytesPerElement:1,gi=Ne.get(re).currentProgram.getUniforms();for(let Ln=0;Ln<Mt;Ln++)gi.setValue(G,"_gl_DrawID",Ln),Tt.render(Je[Ln]/_n,qt[Ln])}else if(X.isInstancedMesh)Tt.renderInstances(ct,Ct,X.count);else if(ne.isInstancedBufferGeometry){const Je=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,qt=Math.min(ne.instanceCount,Je);Tt.renderInstances(ct,Ct,qt)}else Tt.render(ct,Ct)};function At(R,q,ne){R.transparent===!0&&R.side===pi&&R.forceSinglePass===!1?(R.side=Bn,R.needsUpdate=!0,ws(R,q,ne),R.side=zi,R.needsUpdate=!0,ws(R,q,ne),R.side=pi):ws(R,q,ne)}this.compile=function(R,q,ne=null){ne===null&&(ne=R),x=mt.get(ne),x.init(q),C.push(x),ne.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),R!==ne&&R.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const re=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){const Ue=Ee[Ce];At(Ue,ne,X),re.add(Ue)}else At(Ee,ne,X),re.add(Ee)}),C.pop(),x=null,re},this.compileAsync=function(R,q,ne=null){const re=this.compile(R,q,ne);return new Promise(X=>{function Ee(){if(re.forEach(function(Ce){Ne.get(Ce).currentProgram.isReady()&&re.delete(Ce)}),re.size===0){X(R);return}setTimeout(Ee,10)}Ze.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Hn=null;function Pn(R){Hn&&Hn(R)}function Ts(){ji.stop()}function pr(){ji.start()}const ji=new _v;ji.setAnimationLoop(Pn),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(R){Hn=R,ae.setAnimationLoop(R),R===null?ji.stop():ji.start()},ae.addEventListener("sessionstart",Ts),ae.addEventListener("sessionend",pr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(q),q=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,q,B),x=mt.get(R,C.length),x.init(q),C.push(x),ve.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$.setFromProjectionMatrix(ve),Se=this.localClippingEnabled,se=Te.init(this.clippingPlanes,Se),S=Fe.get(R,L.length),S.init(),L.push(S),ae.enabled===!0&&ae.isPresenting===!0){const Ee=A.xr.getDepthSensingMesh();Ee!==null&&Yi(Ee,q,-1/0,A.sortObjects)}Yi(R,q,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(ce,z),Qe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Qe&&et.addToRenderList(S,R),this.info.render.frame++,se===!0&&Te.beginShadows();const ne=x.state.shadowsArray;Be.render(ne,R,q),se===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=S.opaque,X=S.transmissive;if(x.setupLights(),q.isArrayCamera){const Ee=q.cameras;if(X.length>0)for(let Ce=0,Ue=Ee.length;Ce<Ue;Ce++){const Oe=Ee[Ce];$r(re,X,R,Oe)}Qe&&et.render(R);for(let Ce=0,Ue=Ee.length;Ce<Ue;Ce++){const Oe=Ee[Ce];Kr(S,R,Oe,Oe.viewport)}}else X.length>0&&$r(re,X,R,q),Qe&&et.render(R),Kr(S,R,q);B!==null&&(N.updateMultisampleRenderTarget(B),N.updateRenderTargetMipmap(B)),R.isScene===!0&&R.onAfterRender(A,R,q),Dt.resetDefaultState(),P=-1,b=null,C.pop(),C.length>0?(x=C[C.length-1],se===!0&&Te.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Yi(R,q,ne,re){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){re&&Ve.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);const Ce=de.update(R),Ue=R.material;Ue.visible&&S.push(R,Ce,Ue,ne,Ve.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){const Ce=de.update(R),Ue=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ve.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ve.copy(Ce.boundingSphere.center)),Ve.applyMatrix4(R.matrixWorld).applyMatrix4(ve)),Array.isArray(Ue)){const Oe=Ce.groups;for(let rt=0,st=Oe.length;rt<st;rt++){const Ke=Oe[rt],ct=Ue[Ke.materialIndex];ct&&ct.visible&&S.push(R,Ce,ct,ne,Ve.z,Ke)}}else Ue.visible&&S.push(R,Ce,Ue,ne,Ve.z,null)}}const Ee=R.children;for(let Ce=0,Ue=Ee.length;Ce<Ue;Ce++)Yi(Ee[Ce],q,ne,re)}function Kr(R,q,ne,re){const X=R.opaque,Ee=R.transmissive,Ce=R.transparent;x.setupLightsView(ne),se===!0&&Te.setGlobalState(A.clippingPlanes,ne),re&&Xe.viewport(k.copy(re)),X.length>0&&mr(X,q,ne),Ee.length>0&&mr(Ee,q,ne),Ce.length>0&&mr(Ce,q,ne),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function $r(R,q,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[re.id]===void 0&&(x.state.transmissionRenderTarget[re.id]=new On(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?di:dr,minFilter:cr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Ee=x.state.transmissionRenderTarget[re.id],Ce=re.viewport||k;Ee.setSize(Ce.z,Ce.w);const Ue=A.getRenderTarget();A.setRenderTarget(Ee),A.getClearColor(ue),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),Qe&&et.render(ne);const Oe=A.toneMapping;A.toneMapping=Yr;const rt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),x.setupLightsView(re),se===!0&&Te.setGlobalState(A.clippingPlanes,re),mr(R,ne,re),N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ke=0,ct=q.length;Ke<ct;Ke++){const bt=q[Ke],Ct=bt.object,Gt=bt.geometry,Tt=bt.material,Je=bt.group;if(Tt.side===pi&&Ct.layers.test(re.layers)){const qt=Tt.side;Tt.side=Bn,Tt.needsUpdate=!0,Fa(Ct,ne,re,Gt,Tt,Je),Tt.side=qt,Tt.needsUpdate=!0,st=!0}}st===!0&&(N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee))}A.setRenderTarget(Ue),A.setClearColor(ue,he),rt!==void 0&&(re.viewport=rt),A.toneMapping=Oe}function mr(R,q,ne){const re=q.isScene===!0?q.overrideMaterial:null;for(let X=0,Ee=R.length;X<Ee;X++){const Ce=R[X],Ue=Ce.object,Oe=Ce.geometry,rt=re===null?Ce.material:re,st=Ce.group;Ue.layers.test(ne.layers)&&Fa(Ue,q,ne,Oe,rt,st)}}function Fa(R,q,ne,re,X,Ee){R.onBeforeRender(A,q,ne,re,X,Ee),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(A,q,ne,re,R,Ee),X.transparent===!0&&X.side===pi&&X.forceSinglePass===!1?(X.side=Bn,X.needsUpdate=!0,A.renderBufferDirect(ne,q,re,X,R,Ee),X.side=zi,X.needsUpdate=!0,A.renderBufferDirect(ne,q,re,X,R,Ee),X.side=pi):A.renderBufferDirect(ne,q,re,X,R,Ee),R.onAfterRender(A,q,ne,re,X,Ee)}function ws(R,q,ne){q.isScene!==!0&&(q=at);const re=Ne.get(R),X=x.state.lights,Ee=x.state.shadowsArray,Ce=X.state.version,Ue=je.getParameters(R,X.state,Ee,q,ne),Oe=je.getProgramCacheKey(Ue);let rt=re.programs;re.environment=R.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(R.isMeshStandardMaterial?ee:w).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,rt===void 0&&(R.addEventListener("dispose",ut),rt=new Map,re.programs=rt);let st=rt.get(Oe);if(st!==void 0){if(re.currentProgram===st&&re.lightsStateVersion===Ce)return Di(R,Ue),st}else Ue.uniforms=je.getUniforms(R),R.onBeforeCompile(Ue,A),st=je.acquireProgram(Ue,Oe),rt.set(Oe,st),re.uniforms=Ue.uniforms;const Ke=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=Te.uniform),Di(R,Ue),re.needsLights=Ou(R),re.lightsStateVersion=Ce,re.needsLights&&(Ke.ambientLightColor.value=X.state.ambient,Ke.lightProbe.value=X.state.probe,Ke.directionalLights.value=X.state.directional,Ke.directionalLightShadows.value=X.state.directionalShadow,Ke.spotLights.value=X.state.spot,Ke.spotLightShadows.value=X.state.spotShadow,Ke.rectAreaLights.value=X.state.rectArea,Ke.ltc_1.value=X.state.rectAreaLTC1,Ke.ltc_2.value=X.state.rectAreaLTC2,Ke.pointLights.value=X.state.point,Ke.pointLightShadows.value=X.state.pointShadow,Ke.hemisphereLights.value=X.state.hemi,Ke.directionalShadowMap.value=X.state.directionalShadowMap,Ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ke.spotShadowMap.value=X.state.spotShadowMap,Ke.spotLightMatrix.value=X.state.spotLightMatrix,Ke.spotLightMap.value=X.state.spotLightMap,Ke.pointShadowMap.value=X.state.pointShadowMap,Ke.pointShadowMatrix.value=X.state.pointShadowMatrix),re.currentProgram=st,re.uniformsList=null,st}function Oa(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=wu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Di(R,q){const ne=Ne.get(R);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function ka(R,q,ne,re,X){q.isScene!==!0&&(q=at),N.resetTextureUnits();const Ee=q.fog,Ce=re.isMeshStandardMaterial?q.environment:null,Ue=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Vn,Oe=(re.isMeshStandardMaterial?ee:w).get(re.envMap||Ce),rt=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,st=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ke=!!ne.morphAttributes.position,ct=!!ne.morphAttributes.normal,bt=!!ne.morphAttributes.color;let Ct=Yr;re.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ct=A.toneMapping);const Gt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Tt=Gt!==void 0?Gt.length:0,Je=Ne.get(re),qt=x.state.lights;if(se===!0&&(Se===!0||R!==b)){const $t=R===b&&re.id===P;Te.setState(re,R,$t)}let Mt=!1;re.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==qt.state.version||Je.outputColorSpace!==Ue||X.isBatchedMesh&&Je.batching===!1||!X.isBatchedMesh&&Je.batching===!0||X.isBatchedMesh&&Je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Je.instancing===!1||!X.isInstancedMesh&&Je.instancing===!0||X.isSkinnedMesh&&Je.skinning===!1||!X.isSkinnedMesh&&Je.skinning===!0||X.isInstancedMesh&&Je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Je.instancingMorph===!1&&X.morphTexture!==null||Je.envMap!==Oe||re.fog===!0&&Je.fog!==Ee||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Te.numPlanes||Je.numIntersection!==Te.numIntersection)||Je.vertexAlphas!==rt||Je.vertexTangents!==st||Je.morphTargets!==Ke||Je.morphNormals!==ct||Je.morphColors!==bt||Je.toneMapping!==Ct||Je.morphTargetsCount!==Tt)&&(Mt=!0):(Mt=!0,Je.__version=re.version);let _n=Je.currentProgram;Mt===!0&&(_n=ws(re,q,X));let gi=!1,Ln=!1,Zr=!1;const Ut=_n.getUniforms(),Dn=Je.uniforms;if(Xe.useProgram(_n.program)&&(gi=!0,Ln=!0,Zr=!0),re.id!==P&&(P=re.id,Ln=!0),gi||b!==R){Xe.buffers.depth.getReversed()?(fe.copy(R.projectionMatrix),Ty(fe),wy(fe),Ut.setValue(G,"projectionMatrix",fe)):Ut.setValue(G,"projectionMatrix",R.projectionMatrix),Ut.setValue(G,"viewMatrix",R.matrixWorldInverse);const Sn=Ut.map.cameraPosition;Sn!==void 0&&Sn.setValue(G,we.setFromMatrixPosition(R.matrixWorld)),$e.logarithmicDepthBuffer&&Ut.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ut.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Ln=!0,Zr=!0)}if(X.isSkinnedMesh){Ut.setOptional(G,X,"bindMatrix"),Ut.setOptional(G,X,"bindMatrixInverse");const $t=X.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Ut.setValue(G,"boneTexture",$t.boneTexture,N))}X.isBatchedMesh&&(Ut.setOptional(G,X,"batchingTexture"),Ut.setValue(G,"batchingTexture",X._matricesTexture,N),Ut.setOptional(G,X,"batchingIdTexture"),Ut.setValue(G,"batchingIdTexture",X._indirectTexture,N),Ut.setOptional(G,X,"batchingColorTexture"),X._colorsTexture!==null&&Ut.setValue(G,"batchingColorTexture",X._colorsTexture,N));const yn=ne.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&it.update(X,ne,_n),(Ln||Je.receiveShadow!==X.receiveShadow)&&(Je.receiveShadow=X.receiveShadow,Ut.setValue(G,"receiveShadow",X.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Dn.envMap.value=Oe,Dn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(Dn.envMapIntensity.value=q.environmentIntensity),Ln&&(Ut.setValue(G,"toneMappingExposure",A.toneMappingExposure),Je.needsLights&&Ba(Dn,Zr),Ee&&re.fog===!0&&Re.refreshFogUniforms(Dn,Ee),Re.refreshMaterialUniforms(Dn,re,V,le,x.state.transmissionRenderTarget[R.id]),wu.upload(G,Oa(Je),Dn,N)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(wu.upload(G,Oa(Je),Dn,N),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ut.setValue(G,"center",X.center),Ut.setValue(G,"modelViewMatrix",X.modelViewMatrix),Ut.setValue(G,"normalMatrix",X.normalMatrix),Ut.setValue(G,"modelMatrix",X.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const $t=re.uniformsGroups;for(let Sn=0,Qr=$t.length;Sn<Qr;Sn++){const yt=$t[Sn];Y.update(yt,_n),Y.bind(yt,_n)}}return _n}function Ba(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ou(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,q,ne){Ne.get(R.texture).__webglTexture=q,Ne.get(R.depthTexture).__webglTexture=ne;const re=Ne.get(R);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ne===void 0,re.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const ne=Ne.get(R);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,ne=0){B=R,I=q,U=ne;let re=!0,X=null,Ee=!1,Ce=!1;if(R){const Oe=Ne.get(R);if(Oe.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(G.FRAMEBUFFER,null),re=!1;else if(Oe.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Oe.__hasExternalTextures)N.rebindTextures(R,Ne.get(R.texture).__webglTexture,Ne.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ke=R.depthTexture;if(Oe.__boundDepthTexture!==Ke){if(Ke!==null&&Ne.has(Ke)&&(R.width!==Ke.image.width||R.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const rt=R.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ce=!0);const st=Ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(st[q])?X=st[q][ne]:X=st[q],Ee=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?X=Ne.get(R).__webglMultisampledFramebuffer:Array.isArray(st)?X=st[ne]:X=st,k.copy(R.viewport),oe.copy(R.scissor),J=R.scissorTest}else k.copy(D).multiplyScalar(V).floor(),oe.copy(K).multiplyScalar(V).floor(),J=ge;if(Xe.bindFramebuffer(G.FRAMEBUFFER,X)&&re&&Xe.drawBuffers(R,X),Xe.viewport(k),Xe.scissor(oe),Xe.setScissorTest(J),Ee){const Oe=Ne.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,ne)}else if(Ce){const Oe=Ne.get(R.texture),rt=q||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Oe.__webglTexture,ne||0,rt)}P=-1},this.readRenderTargetPixels=function(R,q,ne,re,X,Ee,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){Xe.bindFramebuffer(G.FRAMEBUFFER,Ue);try{const Oe=R.texture,rt=Oe.format,st=Oe.type;if(!$e.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-re&&ne>=0&&ne<=R.height-X&&G.readPixels(q,ne,re,X,lt.convert(rt),lt.convert(st),Ee)}finally{const Oe=B!==null?Ne.get(B).__webglFramebuffer:null;Xe.bindFramebuffer(G.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(R,q,ne,re,X,Ee,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){const Oe=R.texture,rt=Oe.format,st=Oe.type;if(!$e.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-re&&ne>=0&&ne<=R.height-X){Xe.bindFramebuffer(G.FRAMEBUFFER,Ue);const Ke=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ke),G.bufferData(G.PIXEL_PACK_BUFFER,Ee.byteLength,G.STREAM_READ),G.readPixels(q,ne,re,X,lt.convert(rt),lt.convert(st),0);const ct=B!==null?Ne.get(B).__webglFramebuffer:null;Xe.bindFramebuffer(G.FRAMEBUFFER,ct);const bt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Ey(G,bt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ke),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ee),G.deleteBuffer(Ke),G.deleteSync(bt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,ne=0){R.isTexture!==!0&&(uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const re=Math.pow(2,-ne),X=Math.floor(R.image.width*re),Ee=Math.floor(R.image.height*re),Ce=q!==null?q.x:0,Ue=q!==null?q.y:0;N.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,ne,0,0,Ce,Ue,X,Ee),Xe.unbindTexture()};const za=G.createFramebuffer(),Va=G.createFramebuffer();this.copyTextureToTexture=function(R,q,ne=null,re=null,X=0,Ee=null){R.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,R=arguments[1],q=arguments[2],Ee=arguments[3]||0,ne=null),Ee===null&&(X!==0?(uo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=X,X=0):Ee=0);let Ce,Ue,Oe,rt,st,Ke,ct,bt,Ct;const Gt=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(ne!==null)Ce=ne.max.x-ne.min.x,Ue=ne.max.y-ne.min.y,Oe=ne.isBox3?ne.max.z-ne.min.z:1,rt=ne.min.x,st=ne.min.y,Ke=ne.isBox3?ne.min.z:0;else{const yn=Math.pow(2,-X);Ce=Math.floor(Gt.width*yn),Ue=Math.floor(Gt.height*yn),R.isDataArrayTexture?Oe=Gt.depth:R.isData3DTexture?Oe=Math.floor(Gt.depth*yn):Oe=1,rt=0,st=0,Ke=0}re!==null?(ct=re.x,bt=re.y,Ct=re.z):(ct=0,bt=0,Ct=0);const Tt=lt.convert(q.format),Je=lt.convert(q.type);let qt;q.isData3DTexture?(N.setTexture3D(q,0),qt=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(N.setTexture2DArray(q,0),qt=G.TEXTURE_2D_ARRAY):(N.setTexture2D(q,0),qt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Mt=G.getParameter(G.UNPACK_ROW_LENGTH),_n=G.getParameter(G.UNPACK_IMAGE_HEIGHT),gi=G.getParameter(G.UNPACK_SKIP_PIXELS),Ln=G.getParameter(G.UNPACK_SKIP_ROWS),Zr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Gt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Gt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,rt),G.pixelStorei(G.UNPACK_SKIP_ROWS,st),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ke);const Ut=R.isDataArrayTexture||R.isData3DTexture,Dn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const yn=Ne.get(R),$t=Ne.get(q),Sn=Ne.get(yn.__renderTarget),Qr=Ne.get($t.__renderTarget);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let yt=0;yt<Oe;yt++)Ut&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.get(R).__webglTexture,X,Ke+yt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.get(q).__webglTexture,Ee,Ct+yt)),G.blitFramebuffer(rt,st,Ce,Ue,ct,bt,Ce,Ue,G.DEPTH_BUFFER_BIT,G.NEAREST);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||Ne.has(R)){const yn=Ne.get(R),$t=Ne.get(q);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,za),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Va);for(let Sn=0;Sn<Oe;Sn++)Ut?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yn.__webglTexture,X,Ke+Sn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,yn.__webglTexture,X),Dn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$t.__webglTexture,Ee,Ct+Sn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,$t.__webglTexture,Ee),X!==0?G.blitFramebuffer(rt,st,Ce,Ue,ct,bt,Ce,Ue,G.COLOR_BUFFER_BIT,G.NEAREST):Dn?G.copyTexSubImage3D(qt,Ee,ct,bt,Ct+Sn,rt,st,Ce,Ue):G.copyTexSubImage2D(qt,Ee,ct,bt,rt,st,Ce,Ue);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Dn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(qt,Ee,ct,bt,Ct,Ce,Ue,Oe,Tt,Je,Gt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(qt,Ee,ct,bt,Ct,Ce,Ue,Oe,Tt,Gt.data):G.texSubImage3D(qt,Ee,ct,bt,Ct,Ce,Ue,Oe,Tt,Je,Gt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ee,ct,bt,Ce,Ue,Tt,Je,Gt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ee,ct,bt,Gt.width,Gt.height,Tt,Gt.data):G.texSubImage2D(G.TEXTURE_2D,Ee,ct,bt,Ce,Ue,Tt,Je,Gt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Mt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,_n),G.pixelStorei(G.UNPACK_SKIP_PIXELS,gi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ln),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Zr),Ee===0&&q.generateMipmaps&&G.generateMipmap(qt),Xe.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ne=null,re=null,X=0){return R.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,re=arguments[1]||null,R=arguments[2],q=arguments[3],X=arguments[4]||0),uo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ne,re,X)},this.initRenderTarget=function(R){Ne.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Xe.unbindTexture()},this.resetState=function(){I=0,U=0,B=null,Xe.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const M_={type:"change"},Ed={type:"start"},Mv={type:"end"},gu=new Lo,E_=new Hr,MA=Math.cos(70*Ao.DEG2RAD),an=new W,Kn=2*Math.PI,Ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qh=1e-6;class EA extends kS{constructor(e,t=null){super(e,t),this.state=Ot.NONE,this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:po.ROTATE,MIDDLE:po.DOLLY,RIGHT:po.PAN},this.touches={ONE:co.ROTATE,TWO:co.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Vi,this._lastTargetPosition=new W,this._quat=new Vi().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $g,this._sphericalDelta=new $g,this._scale=1,this._panOffset=new W,this._rotateStart=new qe,this._rotateEnd=new qe,this._rotateDelta=new qe,this._panStart=new qe,this._panEnd=new qe,this._panDelta=new qe,this._dollyStart=new qe,this._dollyEnd=new qe,this._dollyDelta=new qe,this._dollyDirection=new W,this._mouse=new qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wA.bind(this),this._onPointerDown=TA.bind(this),this._onPointerUp=AA.bind(this),this._onContextMenu=IA.bind(this),this._onMouseWheel=CA.bind(this),this._onKeyDown=PA.bind(this),this._onTouchStart=LA.bind(this),this._onTouchMove=DA.bind(this),this._onMouseDown=RA.bind(this),this._onMouseMove=bA.bind(this),this._interceptControlDown=NA.bind(this),this._interceptControlUp=UA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(M_),this.update(),this.state=Ot.NONE}update(e=null){const t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Kn:i>Math.PI&&(i-=Kn),s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=u!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=an.length();u=this._clampDistance(c*this._scale);const f=c-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const d=new W(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),u=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(gu.origin.copy(this.object.position),gu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gu.direction))<MA?this.object.lookAt(this.target):(E_.setFromNormalAndCoplanarPoint(this.object.up,this.target),gu.intersectPlane(E_,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qh||this._lastTargetPosition.distanceToSquared(this.target)>Qh?(this.dispatchEvent(M_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kn/60*this.autoRotateSpeed*e:Kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;an.copy(s).sub(this.target);let a=an.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,u=i.width,c=i.height;this._mouse.x=s/u*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function TA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function wA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function AA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mv),this.state=Ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function RA(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case po.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ot.DOLLY;break;case po.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ot.ROTATE}break;case po.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ot.PAN}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(Ed)}function bA(o){switch(this.state){case Ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function CA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ot.NONE||(o.preventDefault(),this.dispatchEvent(Ed),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Mv))}function PA(o){this.enabled!==!1&&this._handleKeyDown(o)}function LA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case co.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ot.TOUCH_ROTATE;break;case co.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ot.TOUCH_PAN;break;default:this.state=Ot.NONE}break;case 2:switch(this.touches.TWO){case co.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ot.TOUCH_DOLLY_PAN;break;case co.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ot.TOUCH_DOLLY_ROTATE;break;default:this.state=Ot.NONE}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(Ed)}function DA(o){switch(this._trackPointer(o),this.state){case Ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ot.NONE}}function IA(o){this.enabled!==!1&&o.preventDefault()}function NA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function UA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FA(o,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=o.getIndex(),s=o.getAttribute("position"),a=i?i.count:s.count;let u=0;const c=Object.keys(o.attributes),f={},d={},p=[],m=["getX","getY","getZ","getW"],_=["setX","setY","setZ","setW"];for(let L=0,C=c.length;L<C;L++){const A=c[L],O=o.attributes[A];f[A]=new O.constructor(new O.array.constructor(O.count*O.itemSize),O.itemSize,O.normalized);const I=o.morphAttributes[A];I&&(d[A]||(d[A]=[]),I.forEach((U,B)=>{const P=new U.array.constructor(U.count*U.itemSize);d[A][B]=new U.constructor(P,U.itemSize,U.normalized)}))}const y=e*.5,M=Math.log10(1/e),E=Math.pow(10,M),S=y*E;for(let L=0;L<a;L++){const C=i?i.getX(L):L;let A="";for(let O=0,I=c.length;O<I;O++){const U=c[O],B=o.getAttribute(U),P=B.itemSize;for(let b=0;b<P;b++)A+=`${~~(B[m[b]](C)*E+S)},`}if(A in t)p.push(t[A]);else{for(let O=0,I=c.length;O<I;O++){const U=c[O],B=o.getAttribute(U),P=o.morphAttributes[U],b=B.itemSize,k=f[U],oe=d[U];for(let J=0;J<b;J++){const ue=m[J],he=_[J];if(k[he](u,B[ue](C)),P)for(let ie=0,le=P.length;ie<le;ie++)oe[ie][he](u,P[ie][ue](C))}}t[A]=u,p.push(u),u++}}const x=o.clone();for(const L in o.attributes){const C=f[L];if(x.setAttribute(L,new C.constructor(C.array.slice(0,u*C.itemSize),C.itemSize,C.normalized)),L in d)for(let A=0;A<d[L].length;A++){const O=d[L][A];x.morphAttributes[L][A]=new O.constructor(O.array.slice(0,u*O.itemSize),O.itemSize,O.normalized)}}return x.setIndex(p),x}function T_(o,e){if(e===$x)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Xf||e===Z_){let t=o.getIndex();if(t===null){const u=[],c=o.getAttribute("position");if(c!==void 0){for(let f=0;f<c.count;f++)u.push(f);o.setIndex(u),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Xf)for(let u=1;u<=i;u++)s.push(t.getX(0)),s.push(t.getX(u)),s.push(t.getX(u+1));else for(let u=0;u<i;u++)u%2===0?(s.push(t.getX(u)),s.push(t.getX(u+1)),s.push(t.getX(u+2))):(s.push(t.getX(u+2)),s.push(t.getX(u+1)),s.push(t.getX(u)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class OA extends qr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new HA(t)}),this.register(function(t){return new GA(t)}),this.register(function(t){return new QA(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new e1(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new jA(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new VA(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new ZA(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new BA(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new n1(t)})}load(e,t,i,s){const a=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=Ra.extractUrlBase(e);u=Ra.resolveURL(d,this.path)}else u=Ra.extractUrlBase(e);this.manager.itemStart(e);const c=function(d){s?s(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},f=new Nu(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(d){try{a.parse(d,u,function(p){t(p),a.manager.itemEnd(e)},c)}catch(p){c(p)}},i,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const u={},c={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===Ev){try{u[St.KHR_BINARY_GLTF]=new i1(e)}catch(m){s&&s(m);return}a=JSON.parse(u[St.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new g1(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const m=this.pluginCallbacks[p](d);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[m.name]=m,u[m.name]=!0}if(a.extensionsUsed)for(let p=0;p<a.extensionsUsed.length;++p){const m=a.extensionsUsed[p],_=a.extensionsRequired||[];switch(m){case St.KHR_MATERIALS_UNLIT:u[m]=new zA;break;case St.KHR_DRACO_MESH_COMPRESSION:u[m]=new r1(a,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:u[m]=new s1;break;case St.KHR_MESH_QUANTIZATION:u[m]=new o1;break;default:_.indexOf(m)>=0&&c[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}d.setExtensions(u),d.setPlugins(c),d.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function kA(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BA{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const p=new We(16777215);f.color!==void 0&&p.setRGB(f.color[0],f.color[1],f.color[2],Vn);const m=f.range!==void 0?f.range:0;switch(f.type){case"directional":d=new mv(p),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new ES(p),d.distance=m;break;case"spot":d=new SS(p),d.distance=m,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,d.angle=f.spot.outerConeAngle,d.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return d.position.set(0,0,0),d.decay=2,ur(d,f),f.intensity!==void 0&&(d.intensity=f.intensity),d.name=t.createUniqueName(f.name||"light_"+e),s=Promise.resolve(d),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],c=(a.extensions&&a.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(f){return i._getNodeRef(t.cache,c,f)})}}class zA{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return Ss}extendParams(e,t,i){const s=[];e.color=new We(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const u=a.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Vn),e.opacity=u[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,tn))}return Promise.all(s)}}class VA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class HA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const c=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(c,c)}return Promise.all(a)}}class GA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class WA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(a)}}class XA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=s.extensions[this.name];if(u.sheenColorFactor!==void 0){const c=u.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],Vn)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",u.sheenColorTexture,tn)),u.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(a)}}class jA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(a)}}class YA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const c=u.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(c[0],c[1],c[2],Vn),Promise.all(a)}}class qA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class KA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",u.specularTexture));const c=u.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(c[0],c[1],c[2],Vn),u.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",u.specularColorTexture,tn)),Promise.all(a)}}class $A{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(a)}}class ZA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(a)}}class QA{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,u)}}class JA{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const u=a.extensions[t],c=s.images[u.source];let f=i.textureLoader;if(c.uri){const d=i.options.manager.getHandler(c.uri);d!==null&&(f=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,u.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class e1{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const u=a.extensions[t],c=s.images[u.source];let f=i.textureLoader;if(c.uri){const d=i.options.manager.getHandler(c.uri);d!==null&&(f=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,u.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class t1{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(c){const f=s.byteOffset||0,d=s.byteLength||0,p=s.count,m=s.byteStride,_=new Uint8Array(c,f,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(p,m,_,s.mode,s.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(p*m);return u.decodeGltfBuffer(new Uint8Array(y),p,m,_,s.mode,s.filter),y})})}else return null}}class n1{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const d of s.primitives)if(d.mode!==fi.TRIANGLES&&d.mode!==fi.TRIANGLE_STRIP&&d.mode!==fi.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=i.extensions[this.name].attributes,c=[],f={};for(const d in u)c.push(this.parser.getDependency("accessor",u[d]).then(p=>(f[d]=p,f[d])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(d=>{const p=d.pop(),m=p.isGroup?p.children:[p],_=d[0].count,y=[];for(const M of m){const E=new ft,S=new W,x=new Vi,L=new W(1,1,1),C=new Jy(M.geometry,M.material,_);for(let A=0;A<_;A++)f.TRANSLATION&&S.fromBufferAttribute(f.TRANSLATION,A),f.ROTATION&&x.fromBufferAttribute(f.ROTATION,A),f.SCALE&&L.fromBufferAttribute(f.SCALE,A),C.setMatrixAt(A,E.compose(S,x,L));for(const A in f)if(A==="_COLOR_0"){const O=f[A];C.instanceColor=new Yf(O.array,O.itemSize,O.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&M.geometry.setAttribute(A,f[A]);Xt.prototype.copy.call(C,M),this.parser.assignFinalMaterial(C),y.push(C)}return p.isGroup?(p.clear(),p.add(...y),p):y[0]}))}}const Ev="glTF",Sa=12,w_={JSON:1313821514,BIN:5130562};class i1{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Sa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ev)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Sa,a=new DataView(e,Sa);let u=0;for(;u<s;){const c=a.getUint32(u,!0);u+=4;const f=a.getUint32(u,!0);if(u+=4,f===w_.JSON){const d=new Uint8Array(e,Sa+u,c);this.content=i.decode(d)}else if(f===w_.BIN){const d=Sa+u;this.body=e.slice(d,d+c)}u+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class r1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,c={},f={},d={};for(const p in u){const m=Qf[p]||p.toLowerCase();c[m]=u[p]}for(const p in e.attributes){const m=Qf[p]||p.toLowerCase();if(u[p]!==void 0){const _=i.accessors[e.attributes[p]],y=vo[_.componentType];d[m]=y.name,f[m]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(p){return new Promise(function(m,_){s.decodeDracoFile(p,function(y){for(const M in y.attributes){const E=y.attributes[M],S=f[M];S!==void 0&&(E.normalized=S)}m(y)},c,d,Vn,_)})})}}class s1{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class o1{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class Tv extends Ia{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let u=0;u!==s;u++)t[u]=i[a+u];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,f=c*2,d=c*3,p=s-t,m=(i-t)/p,_=m*m,y=_*m,M=e*d,E=M-d,S=-2*y+3*_,x=y-_,L=1-S,C=x-_+m;for(let A=0;A!==c;A++){const O=u[E+A+c],I=u[E+A+f]*p,U=u[M+A+c],B=u[M+A]*p;a[A]=L*O+C*I+S*U+x*B}return a}}const a1=new Vi;class l1 extends Tv{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return a1.fromArray(a).normalize().toArray(a),a}}const fi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},A_={9728:zn,9729:ni,9984:V_,9985:vu,9986:Ma,9987:cr},R_={33071:Wr,33648:Au,10497:Mo},Jh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},u1={CUBICSPLINE:void 0,LINEAR:Pa,STEP:Ca},ef={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function c1(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Iu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),o.DefaultMaterial}function _s(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ur(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function h1(o,e,t){let i=!1,s=!1,a=!1;for(let d=0,p=e.length;d<p;d++){const m=e[d];if(m.POSITION!==void 0&&(i=!0),m.NORMAL!==void 0&&(s=!0),m.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const u=[],c=[],f=[];for(let d=0,p=e.length;d<p;d++){const m=e[d];if(i){const _=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):o.attributes.position;u.push(_)}if(s){const _=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):o.attributes.normal;c.push(_)}if(a){const _=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):o.attributes.color;f.push(_)}}return Promise.all([Promise.all(u),Promise.all(c),Promise.all(f)]).then(function(d){const p=d[0],m=d[1],_=d[2];return i&&(o.morphAttributes.position=p),s&&(o.morphAttributes.normal=m),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function f1(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function d1(o){let e;const t=o.extensions&&o.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+tf(t.attributes):e=o.indices+":"+tf(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+tf(o.targets[i]);return e}function tf(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function Jf(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function p1(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const m1=new ft;class g1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,u=-1;if(typeof navigator<"u"){const c=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(c)===!0;const f=c.match(/Version\/(\d+)/);s=i&&f?parseInt(f[1],10):-1,a=c.indexOf("Firefox")>-1,u=a?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&u<98?this.textureLoader=new vS(this.options.manager):this.textureLoader=new AS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(u){const c={scene:u[0][s.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:s.asset,parser:i,userData:{}};return _s(a,c,s),ur(c,s),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(c)})).then(function(){for(const f of c.scenes)f.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const u=t[s].joints;for(let c=0,f=u.length;c<f;c++)e[u[c]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const u=e[s];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(i[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(u,c)=>{const f=this.associations.get(u);f!=null&&this.associations.set(c,f);for(const[d,p]of u.children.entries())a(p,c.children[d])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,u){return i.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,u){i.load(Ra.resolveURL(t.uri,s.path),a,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const u=Jh[s.type],c=vo[s.componentType],f=s.normalized===!0,d=new c(s.count*u);return Promise.resolve(new gn(d,u,f))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(u){const c=u[0],f=Jh[s.type],d=vo[s.componentType],p=d.BYTES_PER_ELEMENT,m=p*f,_=s.byteOffset||0,y=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(y&&y!==m){const x=Math.floor(_/y),L="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let C=t.cache.get(L);C||(E=new d(c,x*y,s.count*y/p),C=new qy(E,y/p),t.cache.add(L,C)),S=new md(C,f,_%y/p,M)}else c===null?E=new d(s.count*f):E=new d(c,_,s.count*f),S=new gn(E,f,M);if(s.sparse!==void 0){const x=Jh.SCALAR,L=vo[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,A=s.sparse.values.byteOffset||0,O=new L(u[1],C,s.sparse.count*x),I=new d(u[2],A,s.sparse.count*f);c!==null&&(S=new gn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let U=0,B=O.length;U<B;U++){const P=O[U];if(S.setX(P,I[U*f]),f>=2&&S.setY(P,I[U*f+1]),f>=3&&S.setZ(P,I[U*f+2]),f>=4&&S.setW(P,I[U*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,u=t.images[a];let c=this.textureLoader;if(u.uri){const f=i.manager.getHandler(u.uri);f!==null&&(c=f)}return this.loadTextureImage(e,a,c)}loadTextureImage(e,t,i){const s=this,a=this.json,u=a.textures[e],c=a.images[t],f=(c.uri||c.bufferView)+":"+u.sampler;if(this.textureCache[f])return this.textureCache[f];const d=this.loadImageSource(t,i).then(function(p){p.flipY=!1,p.name=u.name||c.name||"",p.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(p.name=c.uri);const _=(a.samplers||{})[u.sampler]||{};return p.magFilter=A_[_.magFilter]||ni,p.minFilter=A_[_.minFilter]||cr,p.wrapS=R_[_.wrapS]||Mo,p.wrapT=R_[_.wrapT]||Mo,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==zn&&p.minFilter!==ni,s.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[f]=d,d}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const u=s.images[e],c=self.URL||self.webkitURL;let f=u.uri||"",d=!1;if(u.bufferView!==void 0)f=i.getDependency("bufferView",u.bufferView).then(function(m){d=!0;const _=new Blob([m],{type:u.mimeType});return f=c.createObjectURL(_),f});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(f).then(function(m){return new Promise(function(_,y){let M=_;t.isImageBitmapLoader===!0&&(M=function(E){const S=new mn(E);S.needsUpdate=!0,_(S)}),t.load(Ra.resolveURL(m,a.path),M,void 0,y)})}).then(function(m){return d===!0&&c.revokeObjectURL(f),ur(m,u),m.userData.mimeType=u.mimeType||p1(u.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),m});return this.sourceCache[e]=p,p}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(u){if(!u)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(u=u.clone(),u.channel=i.texCoord),a.extensions[St.KHR_TEXTURE_TRANSFORM]){const c=i.extensions!==void 0?i.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const f=a.associations.get(u);u=a.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(u,c),a.associations.set(u,f)}}return s!==void 0&&(u.colorSpace=s),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+i.uuid;let f=this.cache.get(c);f||(f=new ho,ii.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(c,f)),i=f}else if(e.isLine){const c="LineBasicMaterial:"+i.uuid;let f=this.cache.get(c);f||(f=new Aa,ii.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(c,f)),i=f}if(s||a||u){let c="ClonedMaterial:"+i.uuid+":";s&&(c+="derivative-tangents:"),a&&(c+="vertex-colors:"),u&&(c+="flat-shading:");let f=this.cache.get(c);f||(f=i.clone(),a&&(f.vertexColors=!0),u&&(f.flatShading=!0),s&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(c,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return Iu}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let u;const c={},f=a.extensions||{},d=[];if(f[St.KHR_MATERIALS_UNLIT]){const m=s[St.KHR_MATERIALS_UNLIT];u=m.getMaterialType(),d.push(m.extendParams(c,a,t))}else{const m=a.pbrMetallicRoughness||{};if(c.color=new We(1,1,1),c.opacity=1,Array.isArray(m.baseColorFactor)){const _=m.baseColorFactor;c.color.setRGB(_[0],_[1],_[2],Vn),c.opacity=_[3]}m.baseColorTexture!==void 0&&d.push(t.assignTexture(c,"map",m.baseColorTexture,tn)),c.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,c.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(c,"metalnessMap",m.metallicRoughnessTexture)),d.push(t.assignTexture(c,"roughnessMap",m.metallicRoughnessTexture))),u=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,c)})))}a.doubleSided===!0&&(c.side=pi);const p=a.alphaMode||ef.OPAQUE;if(p===ef.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,p===ef.MASK&&(c.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&u!==Ss&&(d.push(t.assignTexture(c,"normalMap",a.normalTexture)),c.normalScale=new qe(1,1),a.normalTexture.scale!==void 0)){const m=a.normalTexture.scale;c.normalScale.set(m,m)}if(a.occlusionTexture!==void 0&&u!==Ss&&(d.push(t.assignTexture(c,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&u!==Ss){const m=a.emissiveFactor;c.emissive=new We().setRGB(m[0],m[1],m[2],Vn)}return a.emissiveTexture!==void 0&&u!==Ss&&d.push(t.assignTexture(c,"emissiveMap",a.emissiveTexture,tn)),Promise.all(d).then(function(){const m=new u(c);return a.name&&(m.name=a.name),ur(m,a),t.associations.set(m,{materials:e}),a.extensions&&_s(s,m,a),m})}createUniqueName(e){const t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(c){return i[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(f){return b_(f,c,t)})}const u=[];for(let c=0,f=e.length;c<f;c++){const d=e[c],p=d1(d),m=s[p];if(m)u.push(m.promise);else{let _;d.extensions&&d.extensions[St.KHR_DRACO_MESH_COMPRESSION]?_=a(d):_=b_(new Cn,d,t),s[p]={primitive:d,promise:_},u.push(_)}}return Promise.all(u)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],u=a.primitives,c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f].material===void 0?c1(this.cache):this.getDependency("material",u[f].material);c.push(p)}return c.push(t.loadGeometries(u)),Promise.all(c).then(function(f){const d=f.slice(0,f.length-1),p=f[f.length-1],m=[];for(let y=0,M=p.length;y<M;y++){const E=p[y],S=u[y];let x;const L=d[y];if(S.mode===fi.TRIANGLES||S.mode===fi.TRIANGLE_STRIP||S.mode===fi.TRIANGLE_FAN||S.mode===void 0)x=a.isSkinnedMesh===!0?new $y(E,L):new pn(E,L),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===fi.TRIANGLE_STRIP?x.geometry=T_(x.geometry,Z_):S.mode===fi.TRIANGLE_FAN&&(x.geometry=T_(x.geometry,Xf));else if(S.mode===fi.LINES)x=new qf(E,L);else if(S.mode===fi.LINE_STRIP)x=new vd(E,L);else if(S.mode===fi.LINE_LOOP)x=new nS(E,L);else if(S.mode===fi.POINTS)x=new Tu(E,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&f1(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),ur(x,a),S.extensions&&_s(s,x,S),t.assignFinalMaterial(x),m.push(x)}for(let y=0,M=m.length;y<M;y++)t.associations.set(m[y],{meshes:e,primitives:y});if(m.length===1)return a.extensions&&_s(s,m[0],a),m[0];const _=new Bi;a.extensions&&_s(s,_,a),t.associations.set(_,{meshes:e});for(let y=0,M=m.length;y<M;y++)_.add(m[y]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new kn(Ao.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Uu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ur(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),u=s,c=[],f=[];for(let d=0,p=u.length;d<p;d++){const m=u[d];if(m){c.push(m);const _=new ft;a!==null&&_.fromArray(a.array,d*16),f.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new gd(c,f)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,u=[],c=[],f=[],d=[],p=[];for(let m=0,_=s.channels.length;m<_;m++){const y=s.channels[m],M=s.samplers[y.sampler],E=y.target,S=E.node,x=s.parameters!==void 0?s.parameters[M.input]:M.input,L=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(u.push(this.getDependency("node",S)),c.push(this.getDependency("accessor",x)),f.push(this.getDependency("accessor",L)),d.push(M),p.push(E))}return Promise.all([Promise.all(u),Promise.all(c),Promise.all(f),Promise.all(d),Promise.all(p)]).then(function(m){const _=m[0],y=m[1],M=m[2],E=m[3],S=m[4],x=[];for(let L=0,C=_.length;L<C;L++){const A=_[L],O=y[L],I=M[L],U=E[L],B=S[L];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const P=i._createAnimationTracks(A,O,I,U,B);if(P)for(let b=0;b<P.length;b++)x.push(P[b])}return new hS(a,void 0,x)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const u=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&u.traverse(function(c){if(c.isMesh)for(let f=0,d=s.weights.length;f<d;f++)c.morphTargetInfluences[f]=s.weights[f]}),u})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),u=[],c=s.children||[];for(let d=0,p=c.length;d<p;d++)u.push(i.getDependency("node",c[d]));const f=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(u),f]).then(function(d){const p=d[0],m=d[1],_=d[2];_!==null&&p.traverse(function(y){y.isSkinnedMesh&&y.bind(_,m1)});for(let y=0,M=m.length;y<M;y++)p.add(m[y]);return p})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],u=a.name?s.createUniqueName(a.name):"",c=[],f=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return f&&c.push(f),a.camera!==void 0&&c.push(s.getDependency("camera",a.camera).then(function(d){return s._getNodeRef(s.cameraCache,a.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){c.push(d)}),this.nodeCache[e]=Promise.all(c).then(function(d){let p;if(a.isBone===!0?p=new uv:d.length>1?p=new Bi:d.length===1?p=d[0]:p=new Xt,p!==d[0])for(let m=0,_=d.length;m<_;m++)p.add(d[m]);if(a.name&&(p.userData.name=a.name,p.name=u),ur(p,a),a.extensions&&_s(i,p,a),a.matrix!==void 0){const m=new ft;m.fromArray(a.matrix),p.applyMatrix4(m)}else a.translation!==void 0&&p.position.fromArray(a.translation),a.rotation!==void 0&&p.quaternion.fromArray(a.rotation),a.scale!==void 0&&p.scale.fromArray(a.scale);return s.associations.has(p)||s.associations.set(p,{}),s.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new Bi;i.name&&(a.name=s.createUniqueName(i.name)),ur(a,i),i.extensions&&_s(t,a,i);const u=i.nodes||[],c=[];for(let f=0,d=u.length;f<d;f++)c.push(s.getDependency("node",u[f]));return Promise.all(c).then(function(f){for(let p=0,m=f.length;p<m;p++)a.add(f[p]);const d=p=>{const m=new Map;for(const[_,y]of s.associations)(_ instanceof ii||_ instanceof mn)&&m.set(_,y);return p.traverse(_=>{const y=s.associations.get(_);y!=null&&m.set(_,y)}),m};return s.associations=d(a),a})}_createAnimationTracks(e,t,i,s,a){const u=[],c=e.name?e.name:e.uuid,f=[];Vr[a.path]===Vr.weights?e.traverse(function(_){_.morphTargetInfluences&&f.push(_.name?_.name:_.uuid)}):f.push(c);let d;switch(Vr[a.path]){case Vr.weights:d=bo;break;case Vr.rotation:d=Co;break;case Vr.position:case Vr.scale:d=Po;break;default:switch(i.itemSize){case 1:d=bo;break;case 2:case 3:default:d=Po;break}break}const p=s.interpolation!==void 0?u1[s.interpolation]:Pa,m=this._getArrayFromAccessor(i);for(let _=0,y=f.length;_<y;_++){const M=new d(f[_]+"."+Vr[a.path],t.array,m,p);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),u.push(M)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Jf(t.constructor),s=new Float32Array(t.length);for(let a=0,u=t.length;a<u;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Co?l1:Tv;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _1(o,e,t){const i=e.attributes,s=new Hi;if(i.POSITION!==void 0){const c=t.json.accessors[i.POSITION],f=c.min,d=c.max;if(f!==void 0&&d!==void 0){if(s.set(new W(f[0],f[1],f[2]),new W(d[0],d[1],d[2])),c.normalized){const p=Jf(vo[c.componentType]);s.min.multiplyScalar(p),s.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const c=new W,f=new W;for(let d=0,p=a.length;d<p;d++){const m=a[d];if(m.POSITION!==void 0){const _=t.json.accessors[m.POSITION],y=_.min,M=_.max;if(y!==void 0&&M!==void 0){if(f.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),f.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),f.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),_.normalized){const E=Jf(vo[_.componentType]);f.multiplyScalar(E)}c.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(c)}o.boundingBox=s;const u=new Gi;s.getCenter(u.center),u.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=u}function b_(o,e,t){const i=e.attributes,s=[];function a(u,c){return t.getDependency("accessor",u).then(function(f){o.setAttribute(c,f)})}for(const u in i){const c=Qf[u]||u.toLowerCase();c in o.attributes||s.push(a(i[u],c))}if(e.indices!==void 0&&!o.index){const u=t.getDependency("accessor",e.indices).then(function(c){o.setIndex(c)});s.push(u)}return wt.workingColorSpace!==Vn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),ur(o,e),_1(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?h1(o,e.targets,t):o})}const v1=/^[og]\s*(.+)?/,x1=/^mtllib /,y1=/^usemtl /,S1=/^usemap /,C_=/\s+/,P_=new W,nf=new W,L_=new W,D_=new W,hi=new W,_u=new We;function M1(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,a){const u=this._finalize(!1);u&&(u.inherited||u.groupCount<=0)&&this.materials.splice(u.index,1);const c={index:this.materials.length,name:s||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:u!==void 0?u.smooth:this.smooth,groupStart:u!==void 0?u.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(f){const d={index:typeof f=="number"?f:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(c),c},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),s&&this.materials.length>1)for(let u=this.materials.length-1;u>=0;u--)this.materials[u].groupCount<=0&&this.materials.splice(u,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,a=this.object.geometry.vertices;a.push(s[e+0],s[e+1],s[e+2]),a.push(s[t+0],s[t+1],s[t+2]),a.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,a=this.object.geometry.normals;a.push(s[e+0],s[e+1],s[e+2]),a.push(s[t+0],s[t+1],s[t+2]),a.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,a=this.object.geometry.normals;P_.fromArray(s,e),nf.fromArray(s,t),L_.fromArray(s,i),hi.subVectors(L_,nf),D_.subVectors(P_,nf),hi.cross(D_),hi.normalize(),a.push(hi.x,hi.y,hi.z),a.push(hi.x,hi.y,hi.z),a.push(hi.x,hi.y,hi.z)},addColor:function(e,t,i){const s=this.colors,a=this.object.geometry.colors;s[e]!==void 0&&a.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&a.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&a.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,a=this.object.geometry.uvs;a.push(s[e+0],s[e+1]),a.push(s[t+0],s[t+1]),a.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,a,u,c,f,d){const p=this.vertices.length;let m=this.parseVertexIndex(e,p),_=this.parseVertexIndex(t,p),y=this.parseVertexIndex(i,p);if(this.addVertex(m,_,y),this.addColor(m,_,y),c!==void 0&&c!==""){const M=this.normals.length;m=this.parseNormalIndex(c,M),_=this.parseNormalIndex(f,M),y=this.parseNormalIndex(d,M),this.addNormal(m,_,y)}else this.addFaceNormal(m,_,y);if(s!==void 0&&s!==""){const M=this.uvs.length;m=this.parseUVIndex(s,M),_=this.parseUVIndex(a,M),y=this.parseUVIndex(u,M),this.addUV(m,_,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const a=this.parseVertexIndex(e[i],t);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let a=0,u=e.length;a<u;a++)this.addVertexLine(this.parseVertexIndex(e[a],i));for(let a=0,u=t.length;a<u;a++)this.addUVLine(this.parseUVIndex(t[a],s))}};return o.startObject("",!1),o}class E1 extends qr{constructor(e){super(e),this.materials=null}load(e,t,i,s){const a=this,u=new Nu(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(c){try{t(a.parse(c))}catch(f){s?s(f):console.error(f),a.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new M1;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let c=0,f=i.length;c<f;c++){const d=i[c].trimStart();if(d.length===0)continue;const p=d.charAt(0);if(p!=="#")if(p==="v"){const m=d.split(C_);switch(m[0]){case"v":t.vertices.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),m.length>=7?(_u.setRGB(parseFloat(m[4]),parseFloat(m[5]),parseFloat(m[6]),tn),t.colors.push(_u.r,_u.g,_u.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3]));break;case"vt":t.uvs.push(parseFloat(m[1]),parseFloat(m[2]));break}}else if(p==="f"){const _=d.slice(1).trim().split(C_),y=[];for(let E=0,S=_.length;E<S;E++){const x=_[E];if(x.length>0){const L=x.split("/");y.push(L)}}const M=y[0];for(let E=1,S=y.length-1;E<S;E++){const x=y[E],L=y[E+1];t.addFace(M[0],x[0],L[0],M[1],x[1],L[1],M[2],x[2],L[2])}}else if(p==="l"){const m=d.substring(1).trim().split(" ");let _=[];const y=[];if(d.indexOf("/")===-1)_=m;else for(let M=0,E=m.length;M<E;M++){const S=m[M].split("/");S[0]!==""&&_.push(S[0]),S[1]!==""&&y.push(S[1])}t.addLineGeometry(_,y)}else if(p==="p"){const _=d.slice(1).trim().split(" ");t.addPointGeometry(_)}else if((s=v1.exec(d))!==null){const m=(" "+s[0].slice(1).trim()).slice(1);t.startObject(m)}else if(y1.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(x1.test(d))t.materialLibraries.push(d.substring(7).trim());else if(S1.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(s=d.split(" "),s.length>1){const _=s[1].trim().toLowerCase();t.object.smooth=_!=="0"&&_!=="off"}else t.object.smooth=!0;const m=t.object.currentMaterial();m&&(m.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();const a=new Bi;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let c=0,f=t.objects.length;c<f;c++){const d=t.objects[c],p=d.geometry,m=d.materials,_=p.type==="Line",y=p.type==="Points";let M=!1;if(p.vertices.length===0)continue;const E=new Cn;E.setAttribute("position",new nn(p.vertices,3)),p.normals.length>0&&E.setAttribute("normal",new nn(p.normals,3)),p.colors.length>0&&(M=!0,E.setAttribute("color",new nn(p.colors,3))),p.hasUVIndices===!0&&E.setAttribute("uv",new nn(p.uvs,2));const S=[];for(let L=0,C=m.length;L<C;L++){const A=m[L],O=A.name+"_"+A.smooth+"_"+M;let I=t.materials[O];if(this.materials!==null){if(I=this.materials.create(A.name),_&&I&&!(I instanceof Aa)){const U=new Aa;ii.prototype.copy.call(U,I),U.color.copy(I.color),I=U}else if(y&&I&&!(I instanceof ho)){const U=new ho({size:10,sizeAttenuation:!1});ii.prototype.copy.call(U,I),U.color.copy(I.color),U.map=I.map,I=U}}I===void 0&&(_?I=new Aa:y?I=new ho({size:1,sizeAttenuation:!1}):I=new iS,I.name=A.name,I.flatShading=!A.smooth,I.vertexColors=M,t.materials[O]=I),S.push(I)}let x;if(S.length>1){for(let L=0,C=m.length;L<C;L++){const A=m[L];E.addGroup(A.groupStart,A.groupCount,L)}_?x=new qf(E,S):y?x=new Tu(E,S):x=new pn(E,S)}else _?x=new qf(E,S[0]):y?x=new Tu(E,S[0]):x=new pn(E,S[0]);x.name=d.name,a.add(x)}else if(t.vertices.length>0){const c=new ho({size:1,sizeAttenuation:!1}),f=new Cn;f.setAttribute("position",new nn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(f.setAttribute("color",new nn(t.colors,3)),c.vertexColors=!0);const d=new Tu(f,c);a.add(d)}return a}}class T1 extends qr{constructor(e){super(e)}load(e,t,i,s){const a=this,u=new Nu(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(c){try{t(a.parse(c))}catch(f){s?s(f):console.error(f),a.manager.itemError(e)}},i,s)}parse(e){function t(d){const p=new DataView(d),m=32/8*3+32/8*3*3+16/8,_=p.getUint32(80,!0);if(80+32/8+_*m===p.byteLength)return!0;const M=[115,111,108,105,100];for(let E=0;E<5;E++)if(i(M,p,E))return!1;return!0}function i(d,p,m){for(let _=0,y=d.length;_<y;_++)if(d[_]!==p.getUint8(m+_))return!1;return!0}function s(d){const p=new DataView(d),m=p.getUint32(80,!0);let _,y,M,E=!1,S,x,L,C,A;for(let k=0;k<70;k++)p.getUint32(k,!1)==1129270351&&p.getUint8(k+4)==82&&p.getUint8(k+5)==61&&(E=!0,S=new Float32Array(m*3*3),x=p.getUint8(k+6)/255,L=p.getUint8(k+7)/255,C=p.getUint8(k+8)/255,A=p.getUint8(k+9)/255);const O=84,I=50,U=new Cn,B=new Float32Array(m*3*3),P=new Float32Array(m*3*3),b=new We;for(let k=0;k<m;k++){const oe=O+k*I,J=p.getFloat32(oe,!0),ue=p.getFloat32(oe+4,!0),he=p.getFloat32(oe+8,!0);if(E){const ie=p.getUint16(oe+48,!0);(ie&32768)===0?(_=(ie&31)/31,y=(ie>>5&31)/31,M=(ie>>10&31)/31):(_=x,y=L,M=C)}for(let ie=1;ie<=3;ie++){const le=oe+ie*12,V=k*3*3+(ie-1)*3;B[V]=p.getFloat32(le,!0),B[V+1]=p.getFloat32(le+4,!0),B[V+2]=p.getFloat32(le+8,!0),P[V]=J,P[V+1]=ue,P[V+2]=he,E&&(b.setRGB(_,y,M,tn),S[V]=b.r,S[V+1]=b.g,S[V+2]=b.b)}}return U.setAttribute("position",new gn(B,3)),U.setAttribute("normal",new gn(P,3)),E&&(U.setAttribute("color",new gn(S,3)),U.hasColors=!0,U.alpha=A),U}function a(d){const p=new Cn,m=/solid([\s\S]*?)endsolid/g,_=/facet([\s\S]*?)endfacet/g,y=/solid\s(.+)/;let M=0;const E=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,S=new RegExp("vertex"+E+E+E,"g"),x=new RegExp("normal"+E+E+E,"g"),L=[],C=[],A=[],O=new W;let I,U=0,B=0,P=0;for(;(I=m.exec(d))!==null;){B=P;const b=I[0],k=(I=y.exec(b))!==null?I[1]:"";for(A.push(k);(I=_.exec(b))!==null;){let ue=0,he=0;const ie=I[0];for(;(I=x.exec(ie))!==null;)O.x=parseFloat(I[1]),O.y=parseFloat(I[2]),O.z=parseFloat(I[3]),he++;for(;(I=S.exec(ie))!==null;)L.push(parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])),C.push(O.x,O.y,O.z),ue++,P++;he!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+M),ue!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+M),M++}const oe=B,J=P-B;p.userData.groupNames=A,p.addGroup(oe,J,U),U++}return p.setAttribute("position",new nn(L,3)),p.setAttribute("normal",new nn(C,3)),p}function u(d){return typeof d!="string"?new TextDecoder().decode(d):d}function c(d){if(typeof d=="string"){const p=new Uint8Array(d.length);for(let m=0;m<d.length;m++)p[m]=d.charCodeAt(m)&255;return p.buffer||p}else return d}const f=c(e);return t(f)?s(f):a(u(e))}}const wv={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ua{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const w1=new Uu(-1,1,1,-1,0,1);class A1 extends Cn{constructor(){super(),this.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nn([0,2,0,0,2,0],2))}}const R1=new A1;class Av{constructor(e){this._mesh=new pn(R1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,w1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class b1 extends Ua{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pd.clone(e.uniforms),this.material=new bn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Av(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class I_ extends Ua{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let u,c;this.inverse?(u=0,c=1):(u=1,c=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,u,4294967295),a.buffers.stencil.setClear(c),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class C1 extends Ua{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class P1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new qe);this._width=i.width,this._height=i.height,t=new On(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new b1(wv),this.copyPass.material.blending=Ci,this.clock=new gv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const u=this.passes[s];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),u.needsSwap){if(i){const c=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}I_!==void 0&&(u instanceof I_?i=!0:u instanceof C1&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class L1 extends Ua{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let a,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=s}}class jr extends Ua{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new We(1,1,1),this.hiddenEdgeColor=new We(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new qe(e.x,e.y):new qe(256,256);const a=Math.round(this.resolution.x/this.downSampleRatio),u=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new On(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new fv,this.depthMaterial.side=pi,this.depthMaterial.depthPacking=Q_,this.depthMaterial.blending=Ci,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=pi,this.prepareMaskMaterial.fragmentShader=p(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new On(this.resolution.x,this.resolution.y,{type:di}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new On(a,u,{type:di}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new On(a,u,{type:di}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new On(Math.round(a/2),Math.round(u/2),{type:di}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new On(a,u,{type:di}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new On(Math.round(a/2),Math.round(u/2),{type:di}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const c=4,f=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(c),this.separableBlurMaterial1.uniforms.texSize.value.set(a,u),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(f),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(a/2),Math.round(u/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=f,this.overlayMaterial=this.getOverlayMaterial();const d=wv;this.copyUniforms=pd.clone(d.uniforms),this.materialCopy=new bn({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Ci,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new We,this.oldClearAlpha=1,this.fsQuad=new Av(null),this.tempPulseColor1=new We,this.tempPulseColor2=new We,this.textureMatrix=new ft;function p(m,_){const y=_.isPerspectiveCamera?"perspective":"orthographic";return m.replace(/DEPTH_TO_VIEW_Z/g,y+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function s(a){if(a.isMesh||a.isSprite){if(!i.has(a)){const u=a.visible;(e===!1||t.get(a)===!0)&&(a.visible=e),t.set(a,u)}}else(a.isPoints||a.isLine)&&(e===!0?a.visible=t.get(a):(t.set(a,a.visible),a.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,i,s,a){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,a&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const c=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=c,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const f=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(f),this.tempPulseColor2.multiplyScalar(f)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=jr.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=jr.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=jr.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=jr.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,a&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=u}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new bn({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new qe(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new bn({uniforms:{maskTexture:{value:null},texSize:{value:new qe(.5,.5)},visibleEdgeColor:{value:new W(1,1,1)},hiddenEdgeColor:{value:new W(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new bn({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new qe(.5,.5)},direction:{value:new qe(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new bn({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:af,depthTest:!1,depthWrite:!1,transparent:!0})}}jr.BlurDirectionX=new qe(1,0);jr.BlurDirectionY=new qe(0,1);const N_={baseColor:"#d7d1c7",ridgeColor:"#fff7e6",valleyColor:"#3b4254",diffuseStrength:1.2,ambientStrength:.48,specularIntensity:.58,shininess:56,rimIntensity:.6,rimExponent:1.35,cavityStrength:1.1,ridgeStrength:.85,valleyStrength:.9,exposure:1.22,contrast:1.04,lightAzimuth:40,lightElevation:50},Rv=`
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * worldPosition;
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -viewPosition.xyz;
    gl_Position = projectionMatrix * viewPosition;
  }
`,bv=`
#if __VERSION__ < 300
#extension GL_OES_standard_derivatives : enable
#endif
#ifdef GL_ES
precision highp float;
#endif

uniform vec3 uBaseColor;
uniform vec3 uRidgeColor;
uniform vec3 uValleyColor;
uniform vec3 uLightDir;
uniform float uDiffuseStrength;
uniform float uAmbientStrength;
uniform float uSpecularIntensity;
uniform float uShininess;
uniform float uRimIntensity;
uniform float uRimExponent;
uniform float uCavityStrength;
uniform float uRidgeStrength;
uniform float uValleyStrength;
uniform float uExposure;
uniform float uContrast;

varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  vec3 baseNormal = normalize(vNormal);
  vec3 viewDir = normalize(vViewDir);
  vec3 lightDir = normalize(uLightDir);

  vec3 normalDx = dFdx(baseNormal);
  vec3 normalDy = dFdy(baseNormal);
  vec3 filteredNormal = normalize(baseNormal - normalDx * 0.8 - normalDy * 0.8);
  vec3 filteredDx = dFdx(filteredNormal);
  vec3 filteredDy = dFdy(filteredNormal);
  vec3 filteredNormal2 = normalize(filteredNormal - filteredDx * 0.5 - filteredDy * 0.5);
  float normalVariance = clamp(length(normalDx) + length(normalDy), 0.0, 2.0);
  float smoothingMix = smoothstep(0.035, 0.42, normalVariance);
  vec3 N = normalize(mix(baseNormal, filteredNormal2, smoothingMix));

  float NdotL = max(dot(N, lightDir), 0.0);
  float diffuseTerm = mix(uAmbientStrength, 1.0, NdotL);
  diffuseTerm = pow(diffuseTerm, uContrast);
  vec3 diffuse = uBaseColor * diffuseTerm * uDiffuseStrength;

  vec3 H = normalize(lightDir + viewDir);
  float specular = pow(max(dot(N, H), 0.0), uShininess) * uSpecularIntensity;
  specular *= mix(1.0, 0.55, smoothingMix);

  float rim = pow(1.0 - max(dot(N, viewDir), 0.0), uRimExponent) * uRimIntensity;

  vec3 gradient = fwidth(N);
  float cavityRaw = length(gradient);
  float cavity = clamp(pow(cavityRaw * uCavityStrength * mix(1.1, 0.45, smoothingMix), 0.55), 0.0, 1.0);

  float valleyMask = clamp(smoothstep(0.18, 0.78, cavity) * uValleyStrength, 0.0, 1.0);
  float ridgeMask = clamp(smoothstep(0.55, 1.02, cavity) * uRidgeStrength, 0.0, 1.0);

  vec3 cavityTint = mix(uBaseColor, uValleyColor, valleyMask);
  cavityTint = mix(cavityTint, uRidgeColor, ridgeMask);

  vec3 blendedDiffuse = mix(diffuse, cavityTint, clamp(cavity * 0.46, 0.0, 1.0));
  blendedDiffuse = mix(blendedDiffuse, mix(blendedDiffuse, uBaseColor, 0.25), smoothingMix * 0.6);

  vec3 color = blendedDiffuse;
  color += specular + rim;
  color = vec3(1.0) - exp(-color * uExposure);
  color = clamp(color, 0.0, 1.0);

  gl_FragColor = vec4(color, 1.0);
}
`,rf=new Hi,D1=new W,I1=new W,U_=new W,N1=new W(1,.45,1).normalize(),Cv=(o,e,t)=>{const i=Ao.degToRad(e),s=Ao.degToRad(t);return o.set(Math.cos(s)*Math.sin(i),Math.sin(s),Math.cos(s)*Math.cos(i)),o.normalize()},ed=o=>{o.updateMatrixWorld(!0),rf.setFromObject(o);const e=rf.getSize(D1),t=rf.getCenter(I1);return{size:e.clone(),center:t.clone()}},U1=(o,e)=>{let t=o.index?o.toNonIndexed():o.clone();for(let i=0;i<e;i+=1){const s=[],a=t.getAttribute("position"),u=a.array,c=a.count/3;for(let d=0;d<c;d+=1){const p=d*3,m=p+1,_=p+2,y=u[p*3],M=u[p*3+1],E=u[p*3+2],S=u[m*3],x=u[m*3+1],L=u[m*3+2],C=u[_*3],A=u[_*3+1],O=u[_*3+2],I=new W(y,M,E).add(new W(S,x,L)).multiplyScalar(.5),U=new W(S,x,L).add(new W(C,A,O)).multiplyScalar(.5),B=new W(C,A,O).add(new W(y,M,E)).multiplyScalar(.5);s.push(y,M,E,I.x,I.y,I.z,B.x,B.y,B.z,S,x,L,U.x,U.y,U.z,I.x,I.y,I.z,C,A,O,B.x,B.y,B.z,U.x,U.y,U.z,I.x,I.y,I.z,U.x,U.y,U.z,B.x,B.y,B.z)}const f=new Cn;f.setAttribute("position",new nn(s,3)),t.dispose(),t=f}return t},F_=o=>{const e=o.getAttribute("position");if(!e||e.count<3)return 0;const t=e.array,i=(u,c,f,d,p,m)=>{const _=u-d,y=c-p,M=f-m;return Math.sqrt(_*_+y*y+M*M)};let s=0,a=0;for(let u=0;u<t.length;u+=9){const c=t[u],f=t[u+1],d=t[u+2],p=t[u+3],m=t[u+4],_=t[u+5],y=t[u+6],M=t[u+7],E=t[u+8];s+=i(c,f,d,p,m,_),s+=i(p,m,_,y,M,E),s+=i(y,M,E,c,f,d),a+=3}return a===0?0:s/a},F1=o=>{const e=o.getIndex(),t=o.getAttribute("position");if(!e||!t)return null;const i=Array.from({length:t.count},()=>new Set),s=e.array;for(let a=0;a<s.length;a+=3){const u=s[a],c=s[a+1],f=s[a+2];i[u].add(c),i[u].add(f),i[c].add(u),i[c].add(f),i[f].add(u),i[f].add(c)}return i},O1=(o,e=2,t=.5,i=-.53)=>{const s=o.getAttribute("position");if(!s)return;const a=F1(o);if(!a)return;const u=s.count,c=s.array,f=new Float32Array(c.length),d=(p,m,_)=>{for(let y=0;y<u;y+=1){const M=y*3,E=a[y];if(E.size===0){_[M]=m[M],_[M+1]=m[M+1],_[M+2]=m[M+2];continue}let S=0,x=0,L=0;E.forEach(U=>{const B=U*3;S+=m[B],x+=m[B+1],L+=m[B+2]});const C=1/E.size;S*=C,x*=C,L*=C;const A=m[M],O=m[M+1],I=m[M+2];_[M]=A+p*(S-A),_[M+1]=O+p*(x-O),_[M+2]=I+p*(L-I)}};for(let p=0;p<e;p+=1)d(t,c,f),d(i,f,c);s.needsUpdate=!0},k1=o=>{var A;if(!o.geometry||o.userData.sculptGeometryPrepared)return;const e=o.geometry;let t=e.index?e.toNonIndexed():e.clone();const i=3,s=45e4,a=28e4,u=.45,c=.0025;t.computeBoundingBox();const f=t.boundingBox,d=f?f.max.distanceTo(f.min):0;let p=((A=t.getAttribute("position"))==null?void 0:A.count)/3||0,m=F_(t);const _=m||0,y=d>0?d*c:1/0,M=_*u,E=_*.2;let S=Math.max(Math.min(M,y),E);const x=_*.18;let L=0;for(;L<i&&p<a&&p<s&&m>S;){const O=U1(t,1);t!==e&&t.dispose(),t=O,p=t.getAttribute("position").count/3,m=F_(t),S=Math.max(S*.65,x),L+=1}const C=FA(t,1e-5)||t;C!==t&&t.dispose(),O1(C,2,.52,-.57),typeof C.computeVertexNormals=="function"&&C.computeVertexNormals(),typeof C.normalizeNormals=="function"&&C.normalizeNormals(),C.computeBoundingBox(),C.computeBoundingSphere(),o.geometry=C,o.userData.sculptGeometryPrepared=!0,C!==e&&e.dispose()},O_=new We(16739125),B1=(o,e,t)=>{if(!o)return;const i=[];if(e){const s=t.current.get(e);s&&s.root&&s.root.traverse(a=>{a.isMesh&&i.push(a)})}o.selectedObjects=i},sf=o=>new We(o).toArray().map(t=>Number(t.toFixed(6))),z1=(o,e)=>({name:o||"模型",exportedAt:new Date().toISOString(),vertexShader:Rv,fragmentShader:bv,uniforms:{baseColor:sf(e.baseColor),ridgeColor:sf(e.ridgeColor),valleyColor:sf(e.valleyColor),diffuseStrength:e.diffuseStrength,ambientStrength:e.ambientStrength,specularIntensity:e.specularIntensity,shininess:e.shininess,rimIntensity:e.rimIntensity,rimExponent:e.rimExponent,cavityStrength:e.cavityStrength,ridgeStrength:e.ridgeStrength,valleyStrength:e.valleyStrength,exposure:e.exposure,contrast:e.contrast,lightAzimuth:e.lightAzimuth,lightElevation:e.lightElevation}}),Oi=o=>o.toFixed(2),V1=o=>o.toFixed(0),k_=o=>`${o.toFixed(0)}°`,H1=[{key:"baseColor",label:"基础色"},{key:"ridgeColor",label:"脊线颜色"},{key:"valleyColor",label:"谷线颜色"}],G1=[{title:"光照与明暗",items:[{key:"diffuseStrength",label:"漫反射",min:.2,max:2.4,step:.01,format:Oi},{key:"ambientStrength",label:"环境光",min:0,max:1.4,step:.01,format:Oi},{key:"specularIntensity",label:"高光强度",min:0,max:2.5,step:.01,format:Oi},{key:"shininess",label:"光泽度",min:8,max:140,step:1,format:V1},{key:"rimIntensity",label:"轮廓光",min:0,max:2.5,step:.01,format:Oi},{key:"rimExponent",label:"轮廓锐度",min:.2,max:4,step:.01,format:Oi},{key:"exposure",label:"曝光",min:.4,max:2.8,step:.01,format:Oi},{key:"contrast",label:"对比度",min:.5,max:2.4,step:.01,format:Oi}]},{title:"Cavity 设置",items:[{key:"cavityStrength",label:"Cavity 强度",min:0,max:3,step:.01,format:Oi},{key:"ridgeStrength",label:"脊线强度",min:0,max:2.5,step:.01,format:Oi},{key:"valleyStrength",label:"谷线强度",min:0,max:2.5,step:.01,format:Oi}]},{title:"主光方向",items:[{key:"lightAzimuth",label:"方位角",min:0,max:360,step:1,format:k_},{key:"lightElevation",label:"仰角",min:-5,max:85,step:1,format:k_}]}],W1=o=>{const e=Cv(new W,o.lightAzimuth,o.lightElevation),t=new bn({uniforms:{uBaseColor:{value:new We(o.baseColor)},uRidgeColor:{value:new We(o.ridgeColor)},uValleyColor:{value:new We(o.valleyColor)},uLightDir:{value:e},uDiffuseStrength:{value:o.diffuseStrength},uAmbientStrength:{value:o.ambientStrength},uSpecularIntensity:{value:o.specularIntensity},uShininess:{value:o.shininess},uRimIntensity:{value:o.rimIntensity},uRimExponent:{value:o.rimExponent},uCavityStrength:{value:o.cavityStrength},uRidgeStrength:{value:o.ridgeStrength},uValleyStrength:{value:o.valleyStrength},uExposure:{value:o.exposure},uContrast:{value:o.contrast}},vertexShader:Rv,fragmentShader:bv,side:zi});return t.extensions=t.extensions||{},t.extensions.derivatives=!0,t},X1=()=>new Iu({color:12303291,side:Bn,transparent:!0,opacity:1}),Td=o=>{if(o){if(Array.isArray(o)){o.forEach(e=>Td(e));return}o.dispose()}},of=o=>{o&&o.traverse(e=>{var t;e.isMesh&&(e.geometry&&!((t=e.userData)!=null&&t.sharedGeometry)&&e.geometry.dispose(),Td(e.material))})},Pv=(o,e)=>{if(Array.isArray(o)){const t=o[0];t&&t.uniforms&&Pv(t,e);return}!o||!o.uniforms||(o.uniforms.uBaseColor.value.set(e.baseColor),o.uniforms.uRidgeColor.value.set(e.ridgeColor),o.uniforms.uValleyColor.value.set(e.valleyColor),Cv(o.uniforms.uLightDir.value,e.lightAzimuth,e.lightElevation),o.uniforms.uDiffuseStrength.value=e.diffuseStrength,o.uniforms.uAmbientStrength.value=e.ambientStrength,o.uniforms.uSpecularIntensity.value=e.specularIntensity,o.uniforms.uShininess.value=e.shininess,o.uniforms.uRimIntensity.value=e.rimIntensity,o.uniforms.uRimExponent.value=e.rimExponent,o.uniforms.uCavityStrength.value=e.cavityStrength,o.uniforms.uRidgeStrength.value=e.ridgeStrength,o.uniforms.uValleyStrength.value=e.valleyStrength,o.uniforms.uExposure.value=e.exposure,o.uniforms.uContrast.value=e.contrast)},j1=(o,e,t)=>{o.traverse(i=>{if(!i.isMesh)return;k1(i);const s=W1(e),a=X1();Td(i.material);let u=i.geometry;if(!u.groups||u.groups.length===0){const c=u.index?u.index.count:u.attributes.position.count;u.clearGroups(),u.addGroup(0,c,0),u.addGroup(0,c,1)}i.geometry=u,i.material=[s,a],t.add(s),t.add(a),i.castShadow=!0,i.receiveShadow=!0})},Y1=(o,e,t,i,s={})=>{const{preservePosition:a=!1}=s;let u=o;if(o.isBufferGeometry){const p=o;p.computeVertexNormals(),a||p.center();const m=new pn(p);m.name=e,u=m}const c=new Bi;c.name=e,c.userData.selectableRoot=!0,c.userData.autoSpin=!1,c.add(u),j1(c,t,i);let{size:f,center:d}=ed(c);return a||(c.position.sub(d),c.updateMatrixWorld(!0),{size:f,center:d}=ed(c)),{root:c,size:f,center:d}},q1=(o,e,t,i,s)=>{if(!o||!t)return;let a=i,u=s;if(!a||!u){const d=ed(t);a=d.size,u=d.center}const f=Math.max(a.x,a.y,a.z)/2/Math.tan(Ao.degToRad(o.fov)/2)*1.8;U_.copy(N1).multiplyScalar(f),o.position.copy(u).add(U_),o.near=Math.max(f/200,.01),o.far=f*1e3,o.updateProjectionMatrix(),e&&(e.target.copy(u),e.update())};function K1(){const o=Qt.useRef(null),e=Qt.useRef(null),t=Qt.useRef(null),i=Qt.useRef(null),s=Qt.useRef(null),a=Qt.useRef(null),u=Qt.useRef(new OS),c=Qt.useRef(new qe),f=Qt.useRef(!1),d=Qt.useRef([]),p=Qt.useRef(new Map),m=Qt.useRef(null),_=Qt.useRef(null),y=Qt.useRef(null),[M,E]=Qt.useState([]),[S,x]=Qt.useState(null),[L,C]=Qt.useState(""),[A,O]=Qt.useState(!1),I=M.find(z=>z.id===S)||null,U=(I==null?void 0:I.controls)??N_,B=(z,D)=>{const K=p.current.get(z);K&&K.materials.forEach(ge=>Pv(ge,D))},P=(z,D,{autoSpin:K=!1,focus:ge=!0,status:$,preservePosition:se=!1}={})=>{const Se=e.current,fe=t.current,ve=s.current;if(!Se||!fe)return O(!1),null;const we=Ao.generateUUID(),Ve={...N_},at=new Set,{root:Qe,size:Et,center:G}=Y1(z,D,Ve,at,{preservePosition:se});return Qe.userData.autoSpin=K,Qe.userData.modelId=we,Se.add(Qe),d.current=[...d.current,Qe],p.current.set(we,{root:Qe,materials:at,name:Qe.name||D||"模型",bounds:{size:Et,center:G}}),E(Ht=>[...Ht,{id:we,name:Qe.name||D||"模型",controls:Ve,visible:!0}]),x(we),C($||`${D||"模型"} 加载完成`),O(!1),ge&&q1(fe,ve,Qe,Et,G),we},b=z=>{const D=m.current;D&&E(K=>K.map(ge=>{if(ge.id!==D)return ge;const $=z(ge.controls);return B(D,$),{...ge,controls:$}}))},k=z=>{const D=e.current;if(!D)return;const K=p.current.get(z);K&&(D.remove(K.root),of(K.root),d.current=d.current.filter(ge=>ge.userData.modelId!==z),p.current.delete(z),E(ge=>ge.filter($=>$.id!==z)),m.current===z&&(x(null),m.current=null),C(`模型 ${K.name} 已删除`))},oe=()=>{const z=e.current;z&&(p.current.forEach(({root:D})=>{z.remove(D),of(D)}),d.current=[],p.current.clear(),E([]),x(null),m.current=null,C("场景已清空"))},J=z=>{const D=p.current.get(z);if(!D)return;const K=!D.root.visible;D.root.visible=K,E($=>$.map(se=>se.id===z?{...se,visible:K}:se)),K?d.current.includes(D.root)||d.current.push(D.root):(d.current=d.current.filter($=>$!==D.root),m.current===z&&(x(null),m.current=null));const ge=D.name||"模型";C(`模型 ${ge} 已${K?"显示":"隐藏"}`)},ue=z=>{const D=p.current.get(z);if(!(!D||!D.root.visible)){if(m.current===z){x(null),m.current=null;return}D.root.userData.autoSpin=!1,x(z),m.current=z}},he=()=>{const z=(G,Ht,Ze,$e)=>{const ht=new mv($e,.4);return ht.position.set(G,Ht,Ze),ht.castShadow=!0,ht.shadow.camera.left=-1,ht.shadow.camera.right=1,ht.shadow.camera.top=1,ht.shadow.camera.bottom=-1,ht.shadow.camera.near=1,ht.shadow.camera.far=4,ht.shadow.bias=-.002,ht},D=new Bi,K=new wS(16777215,.5);D.add(K);const ge=new xS(16777215,6710886,.5);D.add(ge);const $=z(100,0,0,16777215),se=z(-100,0,0,16777215),Se=z(0,100,0,16777215),fe=z(0,-100,0,16777215),ve=z(0,0,100,16777215),we=z(0,0,-100,16777215),Ve=z(100,100,100,16777215),at=z(100,-100,100,16777215),Qe=z(-100,100,100,16777215),Et=z(-100,-100,100,16777215);return D.add($,se,Se,fe,ve,we,Ve,at,Qe,Et),D};Qt.useEffect(()=>{const z=o.current;if(!z)return;const D=new Yy;D.background=new We("#f3f3f3"),e.current=D;const K=he();D.add(K);const ge=new SA({antialias:!0,alpha:!1});ge.setPixelRatio(window.devicePixelRatio),ge.setSize(z.clientWidth,z.clientHeight),ge.outputColorSpace=tn,z.innerHTML="",z.appendChild(ge.domElement),i.current=ge;const $=new kn(50,z.clientWidth/z.clientHeight,.1,2e3);$.position.set(2.6,1.8,3.1),t.current=$;const se=new P1(ge),Se=new L1(D,$);se.addPass(Se);const fe=new jr(new qe(z.clientWidth,z.clientHeight),D,$);fe.edgeStrength=3,fe.edgeGlow=0,fe.edgeThickness=1,fe.pulsePeriod=0,fe.visibleEdgeColor.set(O_),fe.hiddenEdgeColor.set(O_),se.addPass(fe),_.current=se,y.current=fe;const ve=new EA($,ge.domElement);ve.enableDamping=!0,ve.dampingFactor=.08,ve.minDistance=.4,ve.maxDistance=1e3,s.current=ve,d.current=[],p.current=new Map;const we=new gv,Ve=()=>{a.current=requestAnimationFrame(Ve);const Ze=we.getDelta();f.current||p.current.forEach(({root:$e})=>{$e.userData.autoSpin&&($e.rotation.y+=Ze*.3)}),ve.update(),se.render()};Ve();const at=ge.domElement,Qe=Ze=>{const $e=at.getBoundingClientRect();c.current.x=(Ze.clientX-$e.left)/$e.width*2-1,c.current.y=-((Ze.clientY-$e.top)/$e.height)*2+1},Et=Ze=>{if(Qe(Ze),f.current)return;const $e=t.current;if(!$e)return;const Xe=u.current;Xe.setFromCamera(c.current,$e);const ht=Xe.intersectObjects(d.current,!0);if(ht.length===0)return;let Ne=ht[0].object;for(;Ne&&!Ne.userData.selectableRoot&&Ne.parent;)Ne=Ne.parent;if(Ne){const N=Ne.userData.modelId;if(!N)return;N!==m.current&&(Ne.userData.autoSpin=!1,x(N),C(`${Ne.name||"模型"} 已选中`))}};at.addEventListener("pointermove",Qe),at.addEventListener("pointerdown",Qe),at.addEventListener("pointerup",Et);const G=()=>{const{clientWidth:Ze,clientHeight:$e}=z;ge.setSize(Ze,$e),$.aspect=Ze/$e,$.updateProjectionMatrix(),se.setSize(Ze,$e),fe.resolution.set(Ze,$e)};let Ht=null;return window.ResizeObserver?(Ht=new ResizeObserver(G),Ht.observe(z)):window.addEventListener("resize",G),()=>{Ht?Ht.disconnect():window.removeEventListener("resize",G),at.removeEventListener("pointermove",Qe),at.removeEventListener("pointerdown",Qe),at.removeEventListener("pointerup",Et),cancelAnimationFrame(a.current),ve.dispose(),p.current.forEach(({root:Ze})=>{of(Ze),D.remove(Ze)}),p.current.clear(),d.current=[],_.current&&(_.current.dispose(),_.current=null),y.current=null,ge.dispose(),D.clear(),e.current=null,i.current=null,t.current=null,s.current=null}},[]),Qt.useEffect(()=>{m.current=S,B1(y.current,S,p)},[S]);const ie=z=>{const D=z.target.files?Array.from(z.target.files):[];D.length!==0&&(z.target.value="",D.forEach((K,ge)=>{var Se;O(!0);const $=ge===0?K.name:`${K.name} (${ge+1})`;C(`正在导入 ${$}`);const se=(Se=K.name.split(".").pop())==null?void 0:Se.toLowerCase();if(!se){O(!1),C("无法识别的文件类型");return}if(se==="glb"||se==="gltf"){const fe=new OA,ve=URL.createObjectURL(K);fe.load(ve,we=>{var at;URL.revokeObjectURL(ve);const Ve=we.scene||((at=we.scenes)==null?void 0:at[0]);if(!Ve){O(!1),C("未找到 glTF 场景");return}P(Ve,K.name,{preservePosition:!0})},void 0,we=>{URL.revokeObjectURL(ve),console.error(we),O(!1),C("glTF 模型解析失败（请使用嵌入式资源）")});return}if(se==="obj"){const fe=new E1,ve=URL.createObjectURL(K);fe.load(ve,we=>{URL.revokeObjectURL(ve),P(we,K.name,{preservePosition:!0})},void 0,we=>{URL.revokeObjectURL(ve),console.error(we),O(!1),C("OBJ 模型解析失败")});return}if(se==="stl"){const fe=new T1,ve=URL.createObjectURL(K);fe.load(ve,we=>{URL.revokeObjectURL(ve),we.computeVertexNormals();const Ve=new pn(we);P(Ve,K.name,{preservePosition:!0})},void 0,we=>{URL.revokeObjectURL(ve),console.error(we),O(!1),C("STL 模型解析失败")});return}O(!1),C("暂未支持该文件类型")}))},le=z=>D=>{const K=parseFloat(D.target.value);b(ge=>({...ge,[z]:K}))},V=z=>D=>{const K=D.target.value;b(ge=>({...ge,[z]:K}))},ce=()=>{if(!I)return;const z=z1(I.name,U),D=new Blob([JSON.stringify(z,null,2)],{type:"application/json"}),ge=`${(I.name||"model").replace(/[^a-zA-Z0-9\-_]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||"model"}-shader.json`,$=URL.createObjectURL(D),se=document.createElement("a");se.href=$,se.download=ge,document.body.appendChild(se),se.click(),document.body.removeChild(se),URL.revokeObjectURL($),C(`已导出 ${I.name||"模型"} Shader 设置`)};return gt.jsxs("div",{className:"app",children:[gt.jsxs("header",{className:"toolbar",children:[gt.jsxs("label",{className:"file-input",children:[gt.jsx("input",{type:"file",accept:".glb,.gltf,.obj,.stl",multiple:!0,onChange:ie}),"导入模型"]}),gt.jsx("button",{className:"toolbar-button",onClick:oe,disabled:M.length===0,children:"清理场景"}),gt.jsx("div",{className:"toolbar-status",children:A?"正在加载模型…":L})]}),gt.jsxs("div",{className:"content",children:[gt.jsxs("aside",{className:"models-panel",children:[gt.jsxs("div",{className:"panel-header",children:["模型列表 (",M.length,")"]}),gt.jsx("div",{className:"panel-body",children:M.length===0?gt.jsx("div",{className:"empty-state",children:"暂无模型，请导入模型文件"}):gt.jsx("div",{className:"model-list",children:M.map(z=>gt.jsxs("div",{className:`model-item ${z.visible?"":"hidden"} ${S===z.id?"selected":""}`,onClick:()=>ue(z.id),children:[gt.jsx("div",{className:"model-name",children:z.name}),gt.jsxs("div",{className:"model-actions",children:[gt.jsx("button",{className:`visibility-button ${z.visible?"visible":"hidden"}`,onClick:D=>{D.stopPropagation(),J(z.id)},title:z.visible?"隐藏模型":"显示模型",children:z.visible?"👁":"👁‍🗨"}),gt.jsx("button",{className:"delete-button",onClick:D=>{D.stopPropagation(),k(z.id)},title:"删除模型",children:"×"})]})]},z.id))})})]}),gt.jsx("div",{ref:o,className:"viewer"}),I&&gt.jsxs("aside",{className:"material-panel",children:[gt.jsx("div",{className:"panel-header",children:I.name||"未命名模型"}),gt.jsxs("div",{className:"panel-body",children:[gt.jsxs("div",{className:"panel-section",children:[gt.jsx("div",{className:"section-title",children:"材质颜色"}),H1.map(z=>gt.jsxs("label",{className:"control",children:[gt.jsxs("div",{className:"control-label",children:[gt.jsx("span",{children:z.label}),gt.jsx("span",{children:U[z.key].toUpperCase()})]}),gt.jsx("input",{type:"color",value:U[z.key],onChange:V(z.key)})]},z.key))]}),G1.map(z=>gt.jsxs("div",{className:"panel-section",children:[gt.jsx("div",{className:"section-title",children:z.title}),z.items.map(D=>gt.jsxs("label",{className:"control",children:[gt.jsxs("div",{className:"control-label",children:[gt.jsx("span",{children:D.label}),gt.jsx("span",{children:D.format(U[D.key])})]}),gt.jsx("input",{type:"range",min:D.min,max:D.max,step:D.step,value:U[D.key],onChange:le(D.key)})]},D.key))]},z.title)),gt.jsx("div",{className:"panel-actions",children:gt.jsx("button",{className:"panel-button",type:"button",onClick:ce,children:"导出 Shader"})})]})]})]})]})}_x.createRoot(document.getElementById("root")).render(gt.jsx(Qt.StrictMode,{children:gt.jsx(K1,{})}));

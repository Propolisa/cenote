var ph=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var O1=ph((le,ce)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function la(t,e){const r=new Set(t.split(","));return n=>r.has(n)}const ht={},tn=[],pe=()=>{},vh=()=>!1,Si=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ca=t=>t.startsWith("onUpdate:"),Lt=Object.assign,ua=(t,e)=>{const r=t.indexOf(e);r>-1&&t.splice(r,1)},gh=Object.prototype.hasOwnProperty,ct=(t,e)=>gh.call(t,e),Z=Array.isArray,en=t=>xo(t)==="[object Map]",Ci=t=>xo(t)==="[object Set]",_l=t=>xo(t)==="[object Date]",it=t=>typeof t=="function",Rt=t=>typeof t=="string",We=t=>typeof t=="symbol",_t=t=>t!==null&&typeof t=="object",Du=t=>(_t(t)||it(t))&&it(t.then)&&it(t.catch),Fu=Object.prototype.toString,xo=t=>Fu.call(t),mh=t=>xo(t).slice(8,-1),Hu=t=>xo(t)==="[object Object]",fa=t=>Rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gn=la(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ei=t=>{const e=Object.create(null);return r=>e[r]||(e[r]=t(r))},yh=/-(\w)/g,Te=Ei(t=>t.replace(yh,(e,r)=>r?r.toUpperCase():"")),_h=/\B([A-Z])/g,hr=Ei(t=>t.replace(_h,"-$1").toLowerCase()),Ai=Ei(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ji=Ei(t=>t?`on${Ai(t)}`:""),De=(t,e)=>!Object.is(t,e),Go=(t,e)=>{for(let r=0;r<t.length;r++)t[r](e)},Bu=(t,e,r,n=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:n,value:r})},Jo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xl;const qu=()=>xl||(xl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ct(t){if(Z(t)){const e={};for(let r=0;r<t.length;r++){const n=t[r],o=Rt(n)?kh(n):Ct(n);if(o)for(const i in o)e[i]=o[i]}return e}else if(Rt(t)||_t(t))return t}const xh=/;(?![^(]*\))/g,bh=/:([^]+)/,wh=/\/\*[^]*?\*\//g;function kh(t){const e={};return t.replace(wh,"").split(xh).forEach(r=>{if(r){const n=r.split(bh);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function jt(t){let e="";if(Rt(t))e=t;else if(Z(t))for(let r=0;r<t.length;r++){const n=jt(t[r]);n&&(e+=n+" ")}else if(_t(t))for(const r in t)t[r]&&(e+=r+" ");return e.trim()}const Sh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ch=la(Sh);function Uu(t){return!!t||t===""}function Eh(t,e){if(t.length!==e.length)return!1;let r=!0;for(let n=0;r&&n<t.length;n++)r=zi(t[n],e[n]);return r}function zi(t,e){if(t===e)return!0;let r=_l(t),n=_l(e);if(r||n)return r&&n?t.getTime()===e.getTime():!1;if(r=We(t),n=We(e),r||n)return t===e;if(r=Z(t),n=Z(e),r||n)return r&&n?Eh(t,e):!1;if(r=_t(t),n=_t(e),r||n){if(!r||!n)return!1;const o=Object.keys(t).length,i=Object.keys(e).length;if(o!==i)return!1;for(const s in t){const a=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(a&&!l||!a&&l||!zi(t[s],e[s]))return!1}}return String(t)===String(e)}function Ah(t,e){return t.findIndex(r=>zi(r,e))}const Jt=t=>Rt(t)?t:t==null?"":Z(t)||_t(t)&&(t.toString===Fu||!it(t.toString))?JSON.stringify(t,$u,2):String(t),$u=(t,e)=>e&&e.__v_isRef?$u(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((r,[n,o],i)=>(r[Zi(n,i)+" =>"]=o,r),{})}:Ci(e)?{[`Set(${e.size})`]:[...e.values()].map(r=>Zi(r))}:We(e)?Zi(e):_t(e)&&!Z(e)&&!Hu(e)?String(e):e,Zi=(t,e="")=>{var r;return We(t)?`Symbol(${(r=t.description)!=null?r:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ae;class zh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ae,!e&&ae&&(this.index=(ae.scopes||(ae.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const r=ae;try{return ae=this,e()}finally{ae=r}}}on(){ae=this}off(){ae=this.parent}stop(e){if(this._active){let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.scopes)for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Th(t,e=ae){e&&e.active&&e.effects.push(t)}function Gu(){return ae}function Oh(t){ae&&ae.cleanups.push(t)}let zr;class da{constructor(e,r,n,o){this.fn=e,this.trigger=r,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Th(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,pr();for(let e=0;e<this._depsLength;e++){const r=this.deps[e];if(r.computed&&(Mh(r.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),vr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ir,r=zr;try{return ir=!0,zr=this,this._runnings++,bl(this),this.fn()}finally{wl(this),this._runnings--,zr=r,ir=e}}stop(){this.active&&(bl(this),wl(this),this.onStop&&this.onStop(),this.active=!1)}}function Mh(t){return t.value}function bl(t){t._trackId++,t._depsLength=0}function wl(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Wu(t.deps[e],t);t.deps.length=t._depsLength}}function Wu(t,e){const r=t.get(e);r!==void 0&&e._trackId!==r&&(t.delete(e),t.size===0&&t.cleanup())}let ir=!0,Ts=0;const Ku=[];function pr(){Ku.push(ir),ir=!1}function vr(){const t=Ku.pop();ir=t===void 0?!0:t}function ha(){Ts++}function pa(){for(Ts--;!Ts&&Os.length;)Os.shift()()}function Xu(t,e,r){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const n=t.deps[t._depsLength];n!==e?(n&&Wu(n,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Os=[];function Yu(t,e,r){ha();for(const n of t.keys()){let o;n._dirtyLevel<e&&(o??(o=t.get(n)===n._trackId))&&(n._shouldSchedule||(n._shouldSchedule=n._dirtyLevel===0),n._dirtyLevel=e),n._shouldSchedule&&(o??(o=t.get(n)===n._trackId))&&(n.trigger(),(!n._runnings||n.allowRecurse)&&n._dirtyLevel!==2&&(n._shouldSchedule=!1,n.scheduler&&Os.push(n.scheduler)))}pa()}const Ju=(t,e)=>{const r=new Map;return r.cleanup=t,r.computed=e,r},Ms=new WeakMap,Tr=Symbol(""),Is=Symbol("");function re(t,e,r){if(ir&&zr){let n=Ms.get(t);n||Ms.set(t,n=new Map);let o=n.get(r);o||n.set(r,o=Ju(()=>n.delete(r))),Xu(zr,o)}}function $e(t,e,r,n,o,i){const s=Ms.get(t);if(!s)return;let a=[];if(e==="clear")a=[...s.values()];else if(r==="length"&&Z(t)){const l=Number(n);s.forEach((c,u)=>{(u==="length"||!We(u)&&u>=l)&&a.push(c)})}else switch(r!==void 0&&a.push(s.get(r)),e){case"add":Z(t)?fa(r)&&a.push(s.get("length")):(a.push(s.get(Tr)),en(t)&&a.push(s.get(Is)));break;case"delete":Z(t)||(a.push(s.get(Tr)),en(t)&&a.push(s.get(Is)));break;case"set":en(t)&&a.push(s.get(Tr));break}ha();for(const l of a)l&&Yu(l,4);pa()}const Ih=la("__proto__,__v_isRef,__isVue"),Zu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(We)),kl=Rh();function Rh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...r){const n=ft(this);for(let i=0,s=this.length;i<s;i++)re(n,"get",i+"");const o=n[e](...r);return o===-1||o===!1?n[e](...r.map(ft)):o}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...r){pr(),ha();const n=ft(this)[e].apply(this,r);return pa(),vr(),n}}),t}function Nh(t){We(t)||(t=String(t));const e=ft(this);return re(e,"has",t),e.hasOwnProperty(t)}class Qu{constructor(e=!1,r=!1){this._isReadonly=e,this._isShallow=r}get(e,r,n){const o=this._isReadonly,i=this._isShallow;if(r==="__v_isReactive")return!o;if(r==="__v_isReadonly")return o;if(r==="__v_isShallow")return i;if(r==="__v_raw")return n===(o?i?Wh:nf:i?rf:ef).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=Z(e);if(!o){if(s&&ct(kl,r))return Reflect.get(kl,r,n);if(r==="hasOwnProperty")return Nh}const a=Reflect.get(e,r,n);return(We(r)?Zu.has(r):Ih(r))||(o||re(e,"get",r),i)?a:oe(a)?s&&fa(r)?a:a.value:_t(a)?o?ma(a):ne(a):a}}class tf extends Qu{constructor(e=!1){super(!1,e)}set(e,r,n,o){let i=e[r];if(!this._isShallow){const l=ao(i);if(!Zo(n)&&!ao(n)&&(i=ft(i),n=ft(n)),!Z(e)&&oe(i)&&!oe(n))return l?!1:(i.value=n,!0)}const s=Z(e)&&fa(r)?Number(r)<e.length:ct(e,r),a=Reflect.set(e,r,n,o);return e===ft(o)&&(s?De(n,i)&&$e(e,"set",r,n):$e(e,"add",r,n)),a}deleteProperty(e,r){const n=ct(e,r);e[r];const o=Reflect.deleteProperty(e,r);return o&&n&&$e(e,"delete",r,void 0),o}has(e,r){const n=Reflect.has(e,r);return(!We(r)||!Zu.has(r))&&re(e,"has",r),n}ownKeys(e){return re(e,"iterate",Z(e)?"length":Tr),Reflect.ownKeys(e)}}class Ph extends Qu{constructor(e=!1){super(!0,e)}set(e,r){return!0}deleteProperty(e,r){return!0}}const jh=new tf,Vh=new Ph,Lh=new tf(!0),va=t=>t,Ti=t=>Reflect.getPrototypeOf(t);function Oo(t,e,r=!1,n=!1){t=t.__v_raw;const o=ft(t),i=ft(e);r||(De(e,i)&&re(o,"get",e),re(o,"get",i));const{has:s}=Ti(o),a=n?va:r?_a:lo;if(s.call(o,e))return a(t.get(e));if(s.call(o,i))return a(t.get(i));t!==o&&t.get(e)}function Mo(t,e=!1){const r=this.__v_raw,n=ft(r),o=ft(t);return e||(De(t,o)&&re(n,"has",t),re(n,"has",o)),t===o?r.has(t):r.has(t)||r.has(o)}function Io(t,e=!1){return t=t.__v_raw,!e&&re(ft(t),"iterate",Tr),Reflect.get(t,"size",t)}function Sl(t){t=ft(t);const e=ft(this);return Ti(e).has.call(e,t)||(e.add(t),$e(e,"add",t,t)),this}function Cl(t,e){e=ft(e);const r=ft(this),{has:n,get:o}=Ti(r);let i=n.call(r,t);i||(t=ft(t),i=n.call(r,t));const s=o.call(r,t);return r.set(t,e),i?De(e,s)&&$e(r,"set",t,e):$e(r,"add",t,e),this}function El(t){const e=ft(this),{has:r,get:n}=Ti(e);let o=r.call(e,t);o||(t=ft(t),o=r.call(e,t)),n&&n.call(e,t);const i=e.delete(t);return o&&$e(e,"delete",t,void 0),i}function Al(){const t=ft(this),e=t.size!==0,r=t.clear();return e&&$e(t,"clear",void 0,void 0),r}function Ro(t,e){return function(n,o){const i=this,s=i.__v_raw,a=ft(s),l=e?va:t?_a:lo;return!t&&re(a,"iterate",Tr),s.forEach((c,u)=>n.call(o,l(c),l(u),i))}}function No(t,e,r){return function(...n){const o=this.__v_raw,i=ft(o),s=en(i),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,c=o[t](...n),u=r?va:e?_a:lo;return!e&&re(i,"iterate",l?Is:Tr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function tr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Dh(){const t={get(i){return Oo(this,i)},get size(){return Io(this)},has:Mo,add:Sl,set:Cl,delete:El,clear:Al,forEach:Ro(!1,!1)},e={get(i){return Oo(this,i,!1,!0)},get size(){return Io(this)},has:Mo,add:Sl,set:Cl,delete:El,clear:Al,forEach:Ro(!1,!0)},r={get(i){return Oo(this,i,!0)},get size(){return Io(this,!0)},has(i){return Mo.call(this,i,!0)},add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear"),forEach:Ro(!0,!1)},n={get(i){return Oo(this,i,!0,!0)},get size(){return Io(this,!0)},has(i){return Mo.call(this,i,!0)},add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear"),forEach:Ro(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=No(i,!1,!1),r[i]=No(i,!0,!1),e[i]=No(i,!1,!0),n[i]=No(i,!0,!0)}),[t,r,e,n]}const[Fh,Hh,Bh,qh]=Dh();function ga(t,e){const r=e?t?qh:Bh:t?Hh:Fh;return(n,o,i)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?n:Reflect.get(ct(r,o)&&o in n?r:n,o,i)}const Uh={get:ga(!1,!1)},$h={get:ga(!1,!0)},Gh={get:ga(!0,!1)},ef=new WeakMap,rf=new WeakMap,nf=new WeakMap,Wh=new WeakMap;function Kh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xh(t){return t.__v_skip||!Object.isExtensible(t)?0:Kh(mh(t))}function ne(t){return ao(t)?t:ya(t,!1,jh,Uh,ef)}function Yh(t){return ya(t,!1,Lh,$h,rf)}function ma(t){return ya(t,!0,Vh,Gh,nf)}function ya(t,e,r,n,o){if(!_t(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=o.get(t);if(i)return i;const s=Xh(t);if(s===0)return t;const a=new Proxy(t,s===2?n:r);return o.set(t,a),a}function Wn(t){return ao(t)?Wn(t.__v_raw):!!(t&&t.__v_isReactive)}function ao(t){return!!(t&&t.__v_isReadonly)}function Zo(t){return!!(t&&t.__v_isShallow)}function of(t){return t?!!t.__v_raw:!1}function ft(t){const e=t&&t.__v_raw;return e?ft(e):t}function Jh(t){return Object.isExtensible(t)&&Bu(t,"__v_skip",!0),t}const lo=t=>_t(t)?ne(t):t,_a=t=>_t(t)?ma(t):t;class sf{constructor(e,r,n,o){this.getter=e,this._setter=r,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new da(()=>e(this._value),()=>Kn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const e=ft(this);return(!e._cacheable||e.effect.dirty)&&De(e._value,e._value=e.effect.run())&&Kn(e,4),xa(e),e.effect._dirtyLevel>=2&&Kn(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Zh(t,e,r=!1){let n,o;const i=it(t);return i?(n=t,o=pe):(n=t.get,o=t.set),new sf(n,o,i||!o,r)}function xa(t){var e;ir&&zr&&(t=ft(t),Xu(zr,(e=t.dep)!=null?e:t.dep=Ju(()=>t.dep=void 0,t instanceof sf?t:void 0)))}function Kn(t,e=4,r){t=ft(t);const n=t.dep;n&&Yu(n,e)}function oe(t){return!!(t&&t.__v_isRef===!0)}function vt(t){return af(t,!1)}function Qh(t){return af(t,!0)}function af(t,e){return oe(t)?t:new tp(t,e)}class tp{constructor(e,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?e:ft(e),this._value=r?e:lo(e)}get value(){return xa(this),this._value}set value(e){const r=this.__v_isShallow||Zo(e)||ao(e);e=r?e:ft(e),De(e,this._rawValue)&&(this._rawValue=e,this._value=r?e:lo(e),Kn(this,4))}}function Cr(t){return oe(t)?t.value:t}const ep={get:(t,e,r)=>Cr(Reflect.get(t,e,r)),set:(t,e,r,n)=>{const o=t[e];return oe(o)&&!oe(r)?(o.value=r,!0):Reflect.set(t,e,r,n)}};function lf(t){return Wn(t)?t:new Proxy(t,ep)}class rp{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:r,set:n}=e(()=>xa(this),()=>Kn(this));this._get=r,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function np(t){return new rp(t)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sr(t,e,r,n){try{return n?t(...n):t()}catch(o){Oi(o,e,r)}}function ze(t,e,r,n){if(it(t)){const o=sr(t,e,r,n);return o&&Du(o)&&o.catch(i=>{Oi(i,e,r)}),o}if(Z(t)){const o=[];for(let i=0;i<t.length;i++)o.push(ze(t[i],e,r,n));return o}}function Oi(t,e,r,n=!0){const o=e?e.vnode:null;if(e){let i=e.parent;const s=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,s,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){pr(),sr(l,null,10,[t,s,a]),vr();return}}op(t,r,o,n)}function op(t,e,r,n=!0){console.error(t)}let co=!1,Rs=!1;const $t=[];let je=0;const rn=[];let rr=null,wr=0;const cf=Promise.resolve();let ba=null;function bo(t){const e=ba||cf;return t?e.then(this?t.bind(this):t):e}function ip(t){let e=je+1,r=$t.length;for(;e<r;){const n=e+r>>>1,o=$t[n],i=uo(o);i<t||i===t&&o.pre?e=n+1:r=n}return e}function wa(t){(!$t.length||!$t.includes(t,co&&t.allowRecurse?je+1:je))&&(t.id==null?$t.push(t):$t.splice(ip(t.id),0,t),uf())}function uf(){!co&&!Rs&&(Rs=!0,ba=cf.then(df))}function sp(t){const e=$t.indexOf(t);e>je&&$t.splice(e,1)}function ap(t){Z(t)?rn.push(...t):(!rr||!rr.includes(t,t.allowRecurse?wr+1:wr))&&rn.push(t),uf()}function zl(t,e,r=co?je+1:0){for(;r<$t.length;r++){const n=$t[r];if(n&&n.pre){if(t&&n.id!==t.uid)continue;$t.splice(r,1),r--,n()}}}function ff(t){if(rn.length){const e=[...new Set(rn)].sort((r,n)=>uo(r)-uo(n));if(rn.length=0,rr){rr.push(...e);return}for(rr=e,wr=0;wr<rr.length;wr++)rr[wr]();rr=null,wr=0}}const uo=t=>t.id==null?1/0:t.id,lp=(t,e)=>{const r=uo(t)-uo(e);if(r===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return r};function df(t){Rs=!1,co=!0,$t.sort(lp);try{for(je=0;je<$t.length;je++){const e=$t[je];e&&e.active!==!1&&sr(e,null,14)}}finally{je=0,$t.length=0,ff(),co=!1,ba=null,($t.length||rn.length)&&df()}}function cp(t,e,...r){if(t.isUnmounted)return;const n=t.vnode.props||ht;let o=r;const i=e.startsWith("update:"),s=i&&e.slice(7);if(s&&s in n){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:f,trim:d}=n[u]||ht;d&&(o=r.map(v=>Rt(v)?v.trim():v)),f&&(o=r.map(Jo))}let a,l=n[a=Ji(e)]||n[a=Ji(Te(e))];!l&&i&&(l=n[a=Ji(hr(e))]),l&&ze(l,t,6,o);const c=n[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ze(c,t,6,o)}}function hf(t,e,r=!1){const n=e.emitsCache,o=n.get(t);if(o!==void 0)return o;const i=t.emits;let s={},a=!1;if(!it(t)){const l=c=>{const u=hf(c,e,!0);u&&(a=!0,Lt(s,u))};!r&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(_t(t)&&n.set(t,null),null):(Z(i)?i.forEach(l=>s[l]=null):Lt(s,i),_t(t)&&n.set(t,s),s)}function Mi(t,e){return!t||!Si(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(t,e[0].toLowerCase()+e.slice(1))||ct(t,hr(e))||ct(t,e))}let Pt=null,Ii=null;function Qo(t){const e=Pt;return Pt=t,Ii=t&&t.type.__scopeId||null,e}function kn(t){Ii=t}function Sn(){Ii=null}function Er(t,e=Pt,r){if(!e||t._n)return t;const n=(...o)=>{n._d&&Fl(-1);const i=Qo(e);let s;try{s=t(...o)}finally{Qo(i),n._d&&Fl(1)}return s};return n._n=!0,n._c=!0,n._d=!0,n}function Qi(t){const{type:e,vnode:r,proxy:n,withProxy:o,propsOptions:[i],slots:s,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:v,ctx:x,inheritAttrs:_}=t,b=Qo(t);let w,A;try{if(r.shapeFlag&4){const j=o||n,B=j;w=Pe(c.call(B,j,u,f,v,d,x)),A=a}else{const j=e;w=Pe(j.length>1?j(f,{attrs:a,slots:s,emit:l}):j(f,null)),A=e.props?a:up(a)}}catch(j){Qn.length=0,Oi(j,t,1),w=dt(cr)}let R=w;if(A&&_!==!1){const j=Object.keys(A),{shapeFlag:B}=R;j.length&&B&7&&(i&&j.some(ca)&&(A=fp(A,i)),R=cn(R,A,!1,!0))}return r.dirs&&(R=cn(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(r.dirs):r.dirs),r.transition&&(R.transition=r.transition),w=R,Qo(b),w}const up=t=>{let e;for(const r in t)(r==="class"||r==="style"||Si(r))&&((e||(e={}))[r]=t[r]);return e},fp=(t,e)=>{const r={};for(const n in t)(!ca(n)||!(n.slice(9)in e))&&(r[n]=t[n]);return r};function dp(t,e,r){const{props:n,children:o,component:i}=t,{props:s,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?Tl(n,s,c):!!s;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(s[d]!==n[d]&&!Mi(c,d))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:n===s?!1:n?s?Tl(n,s,c):!0:!!s;return!1}function Tl(t,e,r){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(let o=0;o<n.length;o++){const i=n[o];if(e[i]!==t[i]&&!Mi(r,i))return!0}return!1}function hp({vnode:t,parent:e},r){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.el=t.el),n===t)(t=e.vnode).el=r,e=e.parent;else break}}const pf="components";function pt(t,e){return gf(pf,t,!0,e)||t}const vf=Symbol.for("v-ndc");function ti(t){return Rt(t)?gf(pf,t,!1)||t:t||vf}function gf(t,e,r=!0,n=!1){const o=Pt||qt;if(o){const i=o.type;{const a=lv(i,!1);if(a&&(a===e||a===Te(e)||a===Ai(Te(e))))return i}const s=Ol(o[t]||i[t],e)||Ol(o.appContext[t],e);return!s&&n?i:s}}function Ol(t,e){return t&&(t[e]||t[Te(e)]||t[Ai(Te(e))])}const pp=t=>t.__isSuspense;function vp(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):ap(t)}const gp=Symbol.for("v-scx"),mp=()=>nn(gp);function yp(t,e){return ka(t,null,{flush:"sync"})}const Po={};function ve(t,e,r){return ka(t,e,r)}function ka(t,e,{immediate:r,deep:n,flush:o,once:i,onTrack:s,onTrigger:a}=ht){if(e&&i){const O=e;e=(...W)=>{O(...W),B()}}const l=qt,c=O=>n===!0?O:Ar(O,n===!1?1:void 0);let u,f=!1,d=!1;if(oe(t)?(u=()=>t.value,f=Zo(t)):Wn(t)?(u=()=>c(t),f=!0):Z(t)?(d=!0,f=t.some(O=>Wn(O)||Zo(O)),u=()=>t.map(O=>{if(oe(O))return O.value;if(Wn(O))return c(O);if(it(O))return sr(O,l,2)})):it(t)?e?u=()=>sr(t,l,2):u=()=>(v&&v(),ze(t,l,3,[x])):u=pe,e&&n){const O=u;u=()=>Ar(O())}let v,x=O=>{v=R.onStop=()=>{sr(O,l,4),v=R.onStop=void 0}},_;if(Pi)if(x=pe,e?r&&ze(e,l,3,[u(),d?[]:void 0,x]):u(),o==="sync"){const O=mp();_=O.__watcherHandles||(O.__watcherHandles=[])}else return pe;let b=d?new Array(t.length).fill(Po):Po;const w=()=>{if(!(!R.active||!R.dirty))if(e){const O=R.run();(n||f||(d?O.some((W,Y)=>De(W,b[Y])):De(O,b)))&&(v&&v(),ze(e,l,3,[O,b===Po?void 0:d&&b[0]===Po?[]:b,x]),b=O)}else R.run()};w.allowRecurse=!!e;let A;o==="sync"?A=w:o==="post"?A=()=>Qt(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),A=()=>wa(w));const R=new da(u,pe,A),j=Gu(),B=()=>{R.stop(),j&&ua(j.effects,R)};return e?r?w():b=R.run():o==="post"?Qt(R.run.bind(R),l&&l.suspense):R.run(),_&&_.push(B),B}function _p(t,e,r){const n=this.proxy,o=Rt(t)?t.includes(".")?mf(n,t):()=>n[t]:t.bind(n,n);let i;it(e)?i=e:(i=e.handler,r=e);const s=wo(this),a=ka(o,i.bind(n),r);return s(),a}function mf(t,e){const r=e.split(".");return()=>{let n=t;for(let o=0;o<r.length&&n;o++)n=n[r[o]];return n}}function Ar(t,e=1/0,r){if(e<=0||!_t(t)||t.__v_skip||(r=r||new Set,r.has(t)))return t;if(r.add(t),e--,oe(t))Ar(t.value,e,r);else if(Z(t))for(let n=0;n<t.length;n++)Ar(t[n],e,r);else if(Ci(t)||en(t))t.forEach(n=>{Ar(n,e,r)});else if(Hu(t))for(const n in t)Ar(t[n],e,r);return t}function ar(t,e){if(Pt===null)return t;const r=ji(Pt)||Pt.proxy,n=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[i,s,a,l=ht]=e[o];i&&(it(i)&&(i={mounted:i,updated:i}),i.deep&&Ar(s),n.push({dir:i,instance:r,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function yr(t,e,r,n){const o=t.dirs,i=e&&e.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let l=a.dir[n];l&&(pr(),ze(l,r,8,[t.el,a,t,e]),vr())}}/*! #__NO_SIDE_EFFECTS__ */function zt(t,e){return it(t)?Lt({name:t.name},e,{setup:t}):t}const Xn=t=>!!t.type.__asyncLoader,yf=t=>t.type.__isKeepAlive;function xp(t,e){_f(t,"a",e)}function bp(t,e){_f(t,"da",e)}function _f(t,e,r=qt){const n=t.__wdc||(t.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(Ri(e,n,r),r){let o=r.parent;for(;o&&o.parent;)yf(o.parent.vnode)&&wp(n,e,r,o),o=o.parent}}function wp(t,e,r,n){const o=Ri(e,t,n,!0);xf(()=>{ua(n[e],o)},r)}function Ri(t,e,r=qt,n=!1){if(r){const o=r[t]||(r[t]=[]),i=e.__weh||(e.__weh=(...s)=>{if(r.isUnmounted)return;pr();const a=wo(r),l=ze(e,r,t,s);return a(),vr(),l});return n?o.unshift(i):o.push(i),i}}const Xe=t=>(e,r=qt)=>(!Pi||t==="sp")&&Ri(t,(...n)=>e(...n),r),kp=Xe("bm"),Sa=Xe("m"),Sp=Xe("bu"),Cp=Xe("u"),Ep=Xe("bum"),xf=Xe("um"),Ap=Xe("sp"),zp=Xe("rtg"),Tp=Xe("rtc");function Op(t,e=qt){Ri("ec",t,e)}function lr(t,e,r,n){let o;const i=r;if(Z(t)||Rt(t)){o=new Array(t.length);for(let s=0,a=t.length;s<a;s++)o[s]=e(t[s],s,void 0,i)}else if(typeof t=="number"){o=new Array(t);for(let s=0;s<t;s++)o[s]=e(s+1,s,void 0,i)}else if(_t(t))if(t[Symbol.iterator])o=Array.from(t,(s,a)=>e(s,a,void 0,i));else{const s=Object.keys(t);o=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const c=s[a];o[a]=e(t[c],c,a,i)}}else o=[];return o}function Ca(t,e,r={},n,o){if(Pt.isCE||Pt.parent&&Xn(Pt.parent)&&Pt.parent.isCE)return dt("slot",r,n);let i=t[e];i&&i._c&&(i._d=!1),G();const s=i&&bf(i(r)),a=kt(It,{key:r.key||s&&s.key||`_${e}`},s||[],s&&t._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function bf(t){return t.some(e=>jf(e)?!(e.type===cr||e.type===It&&!bf(e.children)):!0)?t:null}const Ns=t=>t?Lf(t)?ji(t)||t.proxy:Ns(t.parent):null,Yn=Lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ns(t.parent),$root:t=>Ns(t.root),$emit:t=>t.emit,$options:t=>Ea(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,wa(t.update)}),$nextTick:t=>t.n||(t.n=bo.bind(t.proxy)),$watch:t=>_p.bind(t)}),ts=(t,e)=>t!==ht&&!t.__isScriptSetup&&ct(t,e),Mp={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:r,setupState:n,data:o,props:i,accessCache:s,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const v=s[e];if(v!==void 0)switch(v){case 1:return n[e];case 2:return o[e];case 4:return r[e];case 3:return i[e]}else{if(ts(n,e))return s[e]=1,n[e];if(o!==ht&&ct(o,e))return s[e]=2,o[e];if((c=t.propsOptions[0])&&ct(c,e))return s[e]=3,i[e];if(r!==ht&&ct(r,e))return s[e]=4,r[e];Ps&&(s[e]=0)}}const u=Yn[e];let f,d;if(u)return e==="$attrs"&&re(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(r!==ht&&ct(r,e))return s[e]=4,r[e];if(d=l.config.globalProperties,ct(d,e))return d[e]},set({_:t},e,r){const{data:n,setupState:o,ctx:i}=t;return ts(o,e)?(o[e]=r,!0):n!==ht&&ct(n,e)?(n[e]=r,!0):ct(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=r,!0)},has({_:{data:t,setupState:e,accessCache:r,ctx:n,appContext:o,propsOptions:i}},s){let a;return!!r[s]||t!==ht&&ct(t,s)||ts(e,s)||(a=i[0])&&ct(a,s)||ct(n,s)||ct(Yn,s)||ct(o.config.globalProperties,s)},defineProperty(t,e,r){return r.get!=null?t._.accessCache[e]=0:ct(r,"value")&&this.set(t,e,r.value,null),Reflect.defineProperty(t,e,r)}};function ei(t){return Z(t)?t.reduce((e,r)=>(e[r]=null,e),{}):t}function jr(t,e){return!t||!e?t||e:Z(t)&&Z(e)?t.concat(e):Lt({},ei(t),ei(e))}let Ps=!0;function Ip(t){const e=Ea(t),r=t.proxy,n=t.ctx;Ps=!1,e.beforeCreate&&Ml(e.beforeCreate,t,"bc");const{data:o,computed:i,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:v,updated:x,activated:_,deactivated:b,beforeDestroy:w,beforeUnmount:A,destroyed:R,unmounted:j,render:B,renderTracked:O,renderTriggered:W,errorCaptured:Y,serverPrefetch:T,expose:F,inheritAttrs:C,components:nt,directives:K,filters:ot}=e;if(c&&Rp(c,n,null),s)for(const I in s){const q=s[I];it(q)&&(n[I]=q.bind(r))}if(o){const I=o.call(r,r);_t(I)&&(t.data=ne(I))}if(Ps=!0,i)for(const I in i){const q=i[I],st=it(q)?q.bind(r,r):it(q.get)?q.get.bind(r,r):pe,St=!it(q)&&it(q.set)?q.set.bind(r):pe,Dt=mt({get:st,set:St});Object.defineProperty(n,I,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Et=>Dt.value=Et})}if(a)for(const I in a)wf(a[I],n,r,I);if(l){const I=it(l)?l.call(r):l;Reflect.ownKeys(I).forEach(q=>{Sf(q,I[q])})}u&&Ml(u,t,"c");function et(I,q){Z(q)?q.forEach(st=>I(st.bind(r))):q&&I(q.bind(r))}if(et(kp,f),et(Sa,d),et(Sp,v),et(Cp,x),et(xp,_),et(bp,b),et(Op,Y),et(Tp,O),et(zp,W),et(Ep,A),et(xf,j),et(Ap,T),Z(F))if(F.length){const I=t.exposed||(t.exposed={});F.forEach(q=>{Object.defineProperty(I,q,{get:()=>r[q],set:st=>r[q]=st})})}else t.exposed||(t.exposed={});B&&t.render===pe&&(t.render=B),C!=null&&(t.inheritAttrs=C),nt&&(t.components=nt),K&&(t.directives=K)}function Rp(t,e,r=pe){Z(t)&&(t=js(t));for(const n in t){const o=t[n];let i;_t(o)?"default"in o?i=nn(o.from||n,o.default,!0):i=nn(o.from||n):i=nn(o),oe(i)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[n]=i}}function Ml(t,e,r){ze(Z(t)?t.map(n=>n.bind(e.proxy)):t.bind(e.proxy),e,r)}function wf(t,e,r,n){const o=n.includes(".")?mf(r,n):()=>r[n];if(Rt(t)){const i=e[t];it(i)&&ve(o,i)}else if(it(t))ve(o,t.bind(r));else if(_t(t))if(Z(t))t.forEach(i=>wf(i,e,r,n));else{const i=it(t.handler)?t.handler.bind(r):e[t.handler];it(i)&&ve(o,i,t)}}function Ea(t){const e=t.type,{mixins:r,extends:n}=e,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=t.appContext,a=i.get(e);let l;return a?l=a:!o.length&&!r&&!n?l=e:(l={},o.length&&o.forEach(c=>ri(l,c,s,!0)),ri(l,e,s)),_t(e)&&i.set(e,l),l}function ri(t,e,r,n=!1){const{mixins:o,extends:i}=e;i&&ri(t,i,r,!0),o&&o.forEach(s=>ri(t,s,r,!0));for(const s in e)if(!(n&&s==="expose")){const a=Np[s]||r&&r[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const Np={data:Il,props:Rl,emits:Rl,methods:Fn,computed:Fn,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Fn,directives:Fn,watch:jp,provide:Il,inject:Pp};function Il(t,e){return e?t?function(){return Lt(it(t)?t.call(this,this):t,it(e)?e.call(this,this):e)}:e:t}function Pp(t,e){return Fn(js(t),js(e))}function js(t){if(Z(t)){const e={};for(let r=0;r<t.length;r++)e[t[r]]=t[r];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?Lt(Object.create(null),t,e):e}function Rl(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:Lt(Object.create(null),ei(t),ei(e??{})):e}function jp(t,e){if(!t)return e;if(!e)return t;const r=Lt(Object.create(null),t);for(const n in e)r[n]=Xt(t[n],e[n]);return r}function kf(){return{app:null,config:{isNativeTag:vh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vp=0;function Lp(t,e){return function(n,o=null){it(n)||(n=Lt({},n)),o!=null&&!_t(o)&&(o=null);const i=kf(),s=new WeakSet;let a=!1;const l=i.app={_uid:Vp++,_component:n,_props:o,_container:null,_context:i,_instance:null,version:uv,get config(){return i.config},set config(c){},use(c,...u){return s.has(c)||(c&&it(c.install)?(s.add(c),c.install(l,...u)):it(c)&&(s.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const d=dt(n,o);return d.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,ji(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=Jn;Jn=l;try{return c()}finally{Jn=u}}};return l}}let Jn=null;function Sf(t,e){if(qt){let r=qt.provides;const n=qt.parent&&qt.parent.provides;n===r&&(r=qt.provides=Object.create(n)),r[t]=e}}function nn(t,e,r=!1){const n=qt||Pt;if(n||Jn){const o=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Jn._context.provides;if(o&&t in o)return o[t];if(arguments.length>1)return r&&it(e)?e.call(n&&n.proxy):e}}const Cf={},Ef=()=>Object.create(Cf),Af=t=>Object.getPrototypeOf(t)===Cf;function Dp(t,e,r,n=!1){const o={},i=Ef();t.propsDefaults=Object.create(null),zf(t,e,o,i);for(const s in t.propsOptions[0])s in o||(o[s]=void 0);r?t.props=n?o:Yh(o):t.type.props?t.props=o:t.props=i,t.attrs=i}function Fp(t,e,r,n){const{props:o,attrs:i,vnode:{patchFlag:s}}=t,a=ft(o),[l]=t.propsOptions;let c=!1;if((n||s>0)&&!(s&16)){if(s&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Mi(t.emitsOptions,d))continue;const v=e[d];if(l)if(ct(i,d))v!==i[d]&&(i[d]=v,c=!0);else{const x=Te(d);o[x]=Vs(l,a,x,v,t,!1)}else v!==i[d]&&(i[d]=v,c=!0)}}}else{zf(t,e,o,i)&&(c=!0);let u;for(const f in a)(!e||!ct(e,f)&&((u=hr(f))===f||!ct(e,u)))&&(l?r&&(r[f]!==void 0||r[u]!==void 0)&&(o[f]=Vs(l,a,f,void 0,t,!0)):delete o[f]);if(i!==a)for(const f in i)(!e||!ct(e,f))&&(delete i[f],c=!0)}c&&$e(t.attrs,"set","")}function zf(t,e,r,n){const[o,i]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Gn(l))continue;const c=e[l];let u;o&&ct(o,u=Te(l))?!i||!i.includes(u)?r[u]=c:(a||(a={}))[u]=c:Mi(t.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,s=!0)}if(i){const l=ft(r),c=a||ht;for(let u=0;u<i.length;u++){const f=i[u];r[f]=Vs(o,l,f,c[f],t,!ct(c,f))}}return s}function Vs(t,e,r,n,o,i){const s=t[r];if(s!=null){const a=ct(s,"default");if(a&&n===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&it(l)){const{propsDefaults:c}=o;if(r in c)n=c[r];else{const u=wo(o);n=c[r]=l.call(null,e),u()}}else n=l}s[0]&&(i&&!a?n=!1:s[1]&&(n===""||n===hr(r))&&(n=!0))}return n}function Tf(t,e,r=!1){const n=e.propsCache,o=n.get(t);if(o)return o;const i=t.props,s={},a=[];let l=!1;if(!it(t)){const u=f=>{l=!0;const[d,v]=Tf(f,e,!0);Lt(s,d),v&&a.push(...v)};!r&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return _t(t)&&n.set(t,tn),tn;if(Z(i))for(let u=0;u<i.length;u++){const f=Te(i[u]);Nl(f)&&(s[f]=ht)}else if(i)for(const u in i){const f=Te(u);if(Nl(f)){const d=i[u],v=s[f]=Z(d)||it(d)?{type:d}:Lt({},d);if(v){const x=Vl(Boolean,v.type),_=Vl(String,v.type);v[0]=x>-1,v[1]=_<0||x<_,(x>-1||ct(v,"default"))&&a.push(f)}}}const c=[s,a];return _t(t)&&n.set(t,c),c}function Nl(t){return t[0]!=="$"&&!Gn(t)}function Pl(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function jl(t,e){return Pl(t)===Pl(e)}function Vl(t,e){return Z(e)?e.findIndex(r=>jl(r,t)):it(e)&&jl(e,t)?0:-1}const Of=t=>t[0]==="_"||t==="$stable",Aa=t=>Z(t)?t.map(Pe):[Pe(t)],Hp=(t,e,r)=>{if(e._n)return e;const n=Er((...o)=>Aa(e(...o)),r);return n._c=!1,n},Mf=(t,e,r)=>{const n=t._ctx;for(const o in t){if(Of(o))continue;const i=t[o];if(it(i))e[o]=Hp(o,i,n);else if(i!=null){const s=Aa(i);e[o]=()=>s}}},If=(t,e)=>{const r=Aa(e);t.slots.default=()=>r},Bp=(t,e)=>{const r=t.slots=Ef();if(t.vnode.shapeFlag&32){const n=e._;n?(Lt(r,e),Bu(r,"_",n,!0)):Mf(e,r)}else e&&If(t,e)},qp=(t,e,r)=>{const{vnode:n,slots:o}=t;let i=!0,s=ht;if(n.shapeFlag&32){const a=e._;a?r&&a===1?i=!1:(Lt(o,e),!r&&a===1&&delete o._):(i=!e.$stable,Mf(e,o)),s=e}else e&&(If(t,e),s={default:1});if(i)for(const a in o)!Of(a)&&s[a]==null&&delete o[a]};function Ls(t,e,r,n,o=!1){if(Z(t)){t.forEach((d,v)=>Ls(d,e&&(Z(e)?e[v]:e),r,n,o));return}if(Xn(n)&&!o)return;const i=n.shapeFlag&4?ji(n.component)||n.component.proxy:n.el,s=o?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ht?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,ct(f,c)&&(f[c]=null)):oe(c)&&(c.value=null)),it(l))sr(l,a,12,[s,u]);else{const d=Rt(l),v=oe(l);if(d||v){const x=()=>{if(t.f){const _=d?ct(f,l)?f[l]:u[l]:l.value;o?Z(_)&&ua(_,i):Z(_)?_.includes(i)||_.push(i):d?(u[l]=[i],ct(f,l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=s,ct(f,l)&&(f[l]=s)):v&&(l.value=s,t.k&&(u[t.k]=s))};s?(x.id=-1,Qt(x,r)):x()}}}const Qt=vp;function Up(t){return $p(t)}function $p(t,e){const r=qu();r.__VUE__=!0;const{insert:n,remove:o,patchProp:i,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:v=pe,insertStaticContent:x}=t,_=(p,y,k,E=null,z=null,V=null,H=void 0,N=null,L=!!y.dynamicChildren)=>{if(p===y)return;p&&!Rn(p,y)&&(E=Oe(p),Et(p,z,V,!0),p=null),y.patchFlag===-2&&(L=!1,y.dynamicChildren=null);const{type:M,ref:U,shapeFlag:J}=y;switch(M){case Ni:b(p,y,k,E);break;case cr:w(p,y,k,E);break;case rs:p==null&&A(y,k,E,H);break;case It:nt(p,y,k,E,z,V,H,N,L);break;default:J&1?B(p,y,k,E,z,V,H,N,L):J&6?K(p,y,k,E,z,V,H,N,L):(J&64||J&128)&&M.process(p,y,k,E,z,V,H,N,L,mr)}U!=null&&z&&Ls(U,p&&p.ref,V,y||p,!y)},b=(p,y,k,E)=>{if(p==null)n(y.el=a(y.children),k,E);else{const z=y.el=p.el;y.children!==p.children&&c(z,y.children)}},w=(p,y,k,E)=>{p==null?n(y.el=l(y.children||""),k,E):y.el=p.el},A=(p,y,k,E)=>{[p.el,p.anchor]=x(p.children,y,k,E,p.el,p.anchor)},R=({el:p,anchor:y},k,E)=>{let z;for(;p&&p!==y;)z=d(p),n(p,k,E),p=z;n(y,k,E)},j=({el:p,anchor:y})=>{let k;for(;p&&p!==y;)k=d(p),o(p),p=k;o(y)},B=(p,y,k,E,z,V,H,N,L)=>{y.type==="svg"?H="svg":y.type==="math"&&(H="mathml"),p==null?O(y,k,E,z,V,H,N,L):T(p,y,z,V,H,N,L)},O=(p,y,k,E,z,V,H,N)=>{let L,M;const{props:U,shapeFlag:J,transition:X,dirs:Q}=p;if(L=p.el=s(p.type,V,U&&U.is,U),J&8?u(L,p.children):J&16&&Y(p.children,L,null,E,z,es(p,V),H,N),Q&&yr(p,null,E,"created"),W(L,p,p.scopeId,H,E),U){for(const ut in U)ut!=="value"&&!Gn(ut)&&i(L,ut,null,U[ut],V,p.children,E,z,Zt);"value"in U&&i(L,"value",null,U.value,V),(M=U.onVnodeBeforeMount)&&Re(M,E,p)}Q&&yr(p,null,E,"beforeMount");const at=Gp(z,X);at&&X.beforeEnter(L),n(L,y,k),((M=U&&U.onVnodeMounted)||at||Q)&&Qt(()=>{M&&Re(M,E,p),at&&X.enter(L),Q&&yr(p,null,E,"mounted")},z)},W=(p,y,k,E,z)=>{if(k&&v(p,k),E)for(let V=0;V<E.length;V++)v(p,E[V]);if(z){let V=z.subTree;if(y===V){const H=z.vnode;W(p,H,H.scopeId,H.slotScopeIds,z.parent)}}},Y=(p,y,k,E,z,V,H,N,L=0)=>{for(let M=L;M<p.length;M++){const U=p[M]=N?nr(p[M]):Pe(p[M]);_(null,U,y,k,E,z,V,H,N)}},T=(p,y,k,E,z,V,H)=>{const N=y.el=p.el;let{patchFlag:L,dynamicChildren:M,dirs:U}=y;L|=p.patchFlag&16;const J=p.props||ht,X=y.props||ht;let Q;if(k&&_r(k,!1),(Q=X.onVnodeBeforeUpdate)&&Re(Q,k,y,p),U&&yr(y,p,k,"beforeUpdate"),k&&_r(k,!0),M?F(p.dynamicChildren,M,N,k,E,es(y,z),V):H||q(p,y,N,null,k,E,es(y,z),V,!1),L>0){if(L&16)C(N,y,J,X,k,E,z);else if(L&2&&J.class!==X.class&&i(N,"class",null,X.class,z),L&4&&i(N,"style",J.style,X.style,z),L&8){const at=y.dynamicProps;for(let ut=0;ut<at.length;ut++){const xt=at[ut],Ft=J[xt],Se=X[xt];(Se!==Ft||xt==="value")&&i(N,xt,Ft,Se,z,p.children,k,E,Zt)}}L&1&&p.children!==y.children&&u(N,y.children)}else!H&&M==null&&C(N,y,J,X,k,E,z);((Q=X.onVnodeUpdated)||U)&&Qt(()=>{Q&&Re(Q,k,y,p),U&&yr(y,p,k,"updated")},E)},F=(p,y,k,E,z,V,H)=>{for(let N=0;N<y.length;N++){const L=p[N],M=y[N],U=L.el&&(L.type===It||!Rn(L,M)||L.shapeFlag&70)?f(L.el):k;_(L,M,U,null,E,z,V,H,!0)}},C=(p,y,k,E,z,V,H)=>{if(k!==E){if(k!==ht)for(const N in k)!Gn(N)&&!(N in E)&&i(p,N,k[N],null,H,y.children,z,V,Zt);for(const N in E){if(Gn(N))continue;const L=E[N],M=k[N];L!==M&&N!=="value"&&i(p,N,M,L,H,y.children,z,V,Zt)}"value"in E&&i(p,"value",k.value,E.value,H)}},nt=(p,y,k,E,z,V,H,N,L)=>{const M=y.el=p?p.el:a(""),U=y.anchor=p?p.anchor:a("");let{patchFlag:J,dynamicChildren:X,slotScopeIds:Q}=y;Q&&(N=N?N.concat(Q):Q),p==null?(n(M,k,E),n(U,k,E),Y(y.children||[],k,U,z,V,H,N,L)):J>0&&J&64&&X&&p.dynamicChildren?(F(p.dynamicChildren,X,k,z,V,H,N),(y.key!=null||z&&y===z.subTree)&&za(p,y,!0)):q(p,y,k,U,z,V,H,N,L)},K=(p,y,k,E,z,V,H,N,L)=>{y.slotScopeIds=N,p==null?y.shapeFlag&512?z.ctx.activate(y,k,E,H,L):ot(y,k,E,z,V,H,L):$(p,y,L)},ot=(p,y,k,E,z,V,H)=>{const N=p.component=nv(p,E,z);if(yf(p)&&(N.ctx.renderer=mr),ov(N),N.asyncDep){if(z&&z.registerDep(N,et),!p.el){const L=N.subTree=dt(cr);w(null,L,y,k)}}else et(N,p,y,k,z,V,H)},$=(p,y,k)=>{const E=y.component=p.component;if(dp(p,y,k))if(E.asyncDep&&!E.asyncResolved){I(E,y,k);return}else E.next=y,sp(E.update),E.effect.dirty=!0,E.update();else y.el=p.el,E.vnode=y},et=(p,y,k,E,z,V,H)=>{const N=()=>{if(p.isMounted){let{next:U,bu:J,u:X,parent:Q,vnode:at}=p;{const Gr=Rf(p);if(Gr){U&&(U.el=at.el,I(p,U,H)),Gr.asyncDep.then(()=>{p.isUnmounted||N()});return}}let ut=U,xt;_r(p,!1),U?(U.el=at.el,I(p,U,H)):U=at,J&&Go(J),(xt=U.props&&U.props.onVnodeBeforeUpdate)&&Re(xt,Q,U,at),_r(p,!0);const Ft=Qi(p),Se=p.subTree;p.subTree=Ft,_(Se,Ft,f(Se.el),Oe(Se),p,z,V),U.el=Ft.el,ut===null&&hp(p,Ft.el),X&&Qt(X,z),(xt=U.props&&U.props.onVnodeUpdated)&&Qt(()=>Re(xt,Q,U,at),z)}else{let U;const{el:J,props:X}=y,{bm:Q,m:at,parent:ut}=p,xt=Xn(y);if(_r(p,!1),Q&&Go(Q),!xt&&(U=X&&X.onVnodeBeforeMount)&&Re(U,ut,y),_r(p,!0),J&&To){const Ft=()=>{p.subTree=Qi(p),To(J,p.subTree,p,z,null)};xt?y.type.__asyncLoader().then(()=>!p.isUnmounted&&Ft()):Ft()}else{const Ft=p.subTree=Qi(p);_(null,Ft,k,E,p,z,V),y.el=Ft.el}if(at&&Qt(at,z),!xt&&(U=X&&X.onVnodeMounted)){const Ft=y;Qt(()=>Re(U,ut,Ft),z)}(y.shapeFlag&256||ut&&Xn(ut.vnode)&&ut.vnode.shapeFlag&256)&&p.a&&Qt(p.a,z),p.isMounted=!0,y=k=E=null}},L=p.effect=new da(N,pe,()=>wa(M),p.scope),M=p.update=()=>{L.dirty&&L.run()};M.id=p.uid,_r(p,!0),M()},I=(p,y,k)=>{y.component=p;const E=p.vnode.props;p.vnode=y,p.next=null,Fp(p,y.props,E,k),qp(p,y.children,k),pr(),zl(p),vr()},q=(p,y,k,E,z,V,H,N,L=!1)=>{const M=p&&p.children,U=p?p.shapeFlag:0,J=y.children,{patchFlag:X,shapeFlag:Q}=y;if(X>0){if(X&128){St(M,J,k,E,z,V,H,N,L);return}else if(X&256){st(M,J,k,E,z,V,H,N,L);return}}Q&8?(U&16&&Zt(M,z,V),J!==M&&u(k,J)):U&16?Q&16?St(M,J,k,E,z,V,H,N,L):Zt(M,z,V,!0):(U&8&&u(k,""),Q&16&&Y(J,k,E,z,V,H,N,L))},st=(p,y,k,E,z,V,H,N,L)=>{p=p||tn,y=y||tn;const M=p.length,U=y.length,J=Math.min(M,U);let X;for(X=0;X<J;X++){const Q=y[X]=L?nr(y[X]):Pe(y[X]);_(p[X],Q,k,null,z,V,H,N,L)}M>U?Zt(p,z,V,!0,!1,J):Y(y,k,E,z,V,H,N,L,J)},St=(p,y,k,E,z,V,H,N,L)=>{let M=0;const U=y.length;let J=p.length-1,X=U-1;for(;M<=J&&M<=X;){const Q=p[M],at=y[M]=L?nr(y[M]):Pe(y[M]);if(Rn(Q,at))_(Q,at,k,null,z,V,H,N,L);else break;M++}for(;M<=J&&M<=X;){const Q=p[J],at=y[X]=L?nr(y[X]):Pe(y[X]);if(Rn(Q,at))_(Q,at,k,null,z,V,H,N,L);else break;J--,X--}if(M>J){if(M<=X){const Q=X+1,at=Q<U?y[Q].el:E;for(;M<=X;)_(null,y[M]=L?nr(y[M]):Pe(y[M]),k,at,z,V,H,N,L),M++}}else if(M>X)for(;M<=J;)Et(p[M],z,V,!0),M++;else{const Q=M,at=M,ut=new Map;for(M=at;M<=X;M++){const ie=y[M]=L?nr(y[M]):Pe(y[M]);ie.key!=null&&ut.set(ie.key,M)}let xt,Ft=0;const Se=X-at+1;let Gr=!1,gl=0;const In=new Array(Se);for(M=0;M<Se;M++)In[M]=0;for(M=Q;M<=J;M++){const ie=p[M];if(Ft>=Se){Et(ie,z,V,!0);continue}let Ie;if(ie.key!=null)Ie=ut.get(ie.key);else for(xt=at;xt<=X;xt++)if(In[xt-at]===0&&Rn(ie,y[xt])){Ie=xt;break}Ie===void 0?Et(ie,z,V,!0):(In[Ie-at]=M+1,Ie>=gl?gl=Ie:Gr=!0,_(ie,y[Ie],k,null,z,V,H,N,L),Ft++)}const ml=Gr?Wp(In):tn;for(xt=ml.length-1,M=Se-1;M>=0;M--){const ie=at+M,Ie=y[ie],yl=ie+1<U?y[ie+1].el:E;In[M]===0?_(null,Ie,k,yl,z,V,H,N,L):Gr&&(xt<0||M!==ml[xt]?Dt(Ie,k,yl,2):xt--)}}},Dt=(p,y,k,E,z=null)=>{const{el:V,type:H,transition:N,children:L,shapeFlag:M}=p;if(M&6){Dt(p.component.subTree,y,k,E);return}if(M&128){p.suspense.move(y,k,E);return}if(M&64){H.move(p,y,k,mr);return}if(H===It){n(V,y,k);for(let J=0;J<L.length;J++)Dt(L[J],y,k,E);n(p.anchor,y,k);return}if(H===rs){R(p,y,k);return}if(E!==2&&M&1&&N)if(E===0)N.beforeEnter(V),n(V,y,k),Qt(()=>N.enter(V),z);else{const{leave:J,delayLeave:X,afterLeave:Q}=N,at=()=>n(V,y,k),ut=()=>{J(V,()=>{at(),Q&&Q()})};X?X(V,at,ut):ut()}else n(V,y,k)},Et=(p,y,k,E=!1,z=!1)=>{const{type:V,props:H,ref:N,children:L,dynamicChildren:M,shapeFlag:U,patchFlag:J,dirs:X}=p;if(N!=null&&Ls(N,null,k,p,!0),U&256){y.ctx.deactivate(p);return}const Q=U&1&&X,at=!Xn(p);let ut;if(at&&(ut=H&&H.onVnodeBeforeUnmount)&&Re(ut,y,p),U&6)ke(p.component,k,E);else{if(U&128){p.suspense.unmount(k,E);return}Q&&yr(p,null,y,"beforeUnmount"),U&64?p.type.remove(p,y,k,z,mr,E):M&&(V!==It||J>0&&J&64)?Zt(M,y,k,!1,!0):(V===It&&J&384||!z&&U&16)&&Zt(L,y,k),E&&be(p)}(at&&(ut=H&&H.onVnodeUnmounted)||Q)&&Qt(()=>{ut&&Re(ut,y,p),Q&&yr(p,null,y,"unmounted")},k)},be=p=>{const{type:y,el:k,anchor:E,transition:z}=p;if(y===It){we(k,E);return}if(y===rs){j(p);return}const V=()=>{o(k),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(p.shapeFlag&1&&z&&!z.persisted){const{leave:H,delayLeave:N}=z,L=()=>H(k,V);N?N(p.el,V,L):L()}else V()},we=(p,y)=>{let k;for(;p!==y;)k=d(p),o(p),p=k;o(y)},ke=(p,y,k)=>{const{bum:E,scope:z,update:V,subTree:H,um:N}=p;E&&Go(E),z.stop(),V&&(V.active=!1,Et(H,p,y,k)),N&&Qt(N,y),Qt(()=>{p.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Zt=(p,y,k,E=!1,z=!1,V=0)=>{for(let H=V;H<p.length;H++)Et(p[H],y,k,E,z)},Oe=p=>p.shapeFlag&6?Oe(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let Me=!1;const zo=(p,y,k)=>{p==null?y._vnode&&Et(y._vnode,null,null,!0):_(y._vnode||null,p,y,null,null,null,k),Me||(Me=!0,zl(),ff(),Me=!1),y._vnode=p},mr={p:_,um:Et,m:Dt,r:be,mt:ot,mc:Y,pc:q,pbc:F,n:Oe,o:t};let $r,To;return{render:zo,hydrate:$r,createApp:Lp(zo,$r)}}function es({type:t,props:e},r){return r==="svg"&&t==="foreignObject"||r==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:r}function _r({effect:t,update:e},r){t.allowRecurse=e.allowRecurse=r}function Gp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function za(t,e,r=!1){const n=t.children,o=e.children;if(Z(n)&&Z(o))for(let i=0;i<n.length;i++){const s=n[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=nr(o[i]),a.el=s.el),r||za(s,a)),a.type===Ni&&(a.el=s.el)}}function Wp(t){const e=t.slice(),r=[0];let n,o,i,s,a;const l=t.length;for(n=0;n<l;n++){const c=t[n];if(c!==0){if(o=r[r.length-1],t[o]<c){e[n]=o,r.push(n);continue}for(i=0,s=r.length-1;i<s;)a=i+s>>1,t[r[a]]<c?i=a+1:s=a;c<t[r[i]]&&(i>0&&(e[n]=r[i-1]),r[i]=n)}}for(i=r.length,s=r[i-1];i-- >0;)r[i]=s,s=e[s];return r}function Rf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rf(e)}const Kp=t=>t.__isTeleport,Zn=t=>t&&(t.disabled||t.disabled===""),Ll=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Dl=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ds=(t,e)=>{const r=t&&t.to;return Rt(r)?e?e(r):null:r},Xp={name:"Teleport",__isTeleport:!0,process(t,e,r,n,o,i,s,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:v,querySelector:x,createText:_,createComment:b}}=c,w=Zn(e.props);let{shapeFlag:A,children:R,dynamicChildren:j}=e;if(t==null){const B=e.el=_(""),O=e.anchor=_("");v(B,r,n),v(O,r,n);const W=e.target=Ds(e.props,x),Y=e.targetAnchor=_("");W&&(v(Y,W),s==="svg"||Ll(W)?s="svg":(s==="mathml"||Dl(W))&&(s="mathml"));const T=(F,C)=>{A&16&&u(R,F,C,o,i,s,a,l)};w?T(r,O):W&&T(W,Y)}else{e.el=t.el;const B=e.anchor=t.anchor,O=e.target=t.target,W=e.targetAnchor=t.targetAnchor,Y=Zn(t.props),T=Y?r:O,F=Y?B:W;if(s==="svg"||Ll(O)?s="svg":(s==="mathml"||Dl(O))&&(s="mathml"),j?(d(t.dynamicChildren,j,T,o,i,s,a),za(t,e,!0)):l||f(t,e,T,F,o,i,s,a,!1),w)Y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):jo(e,r,B,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const C=e.target=Ds(e.props,x);C&&jo(e,C,null,c,0)}else Y&&jo(e,O,W,c,1)}Nf(e)},remove(t,e,r,n,{um:o,o:{remove:i}},s){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:d}=t;if(f&&i(u),s&&i(c),a&16){const v=s||!Zn(d);for(let x=0;x<l.length;x++){const _=l[x];o(_,e,r,v,!!_.dynamicChildren)}}},move:jo,hydrate:Yp};function jo(t,e,r,{o:{insert:n},m:o},i=2){i===0&&n(t.targetAnchor,e,r);const{el:s,anchor:a,shapeFlag:l,children:c,props:u}=t,f=i===2;if(f&&n(s,e,r),(!f||Zn(u))&&l&16)for(let d=0;d<c.length;d++)o(c[d],e,r,2);f&&n(a,e,r)}function Yp(t,e,r,n,o,i,{o:{nextSibling:s,parentNode:a,querySelector:l}},c){const u=e.target=Ds(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Zn(e.props))e.anchor=c(s(t),e,a(t),r,n,o,i),e.targetAnchor=f;else{e.anchor=s(t);let d=f;for(;d;)if(d=s(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&s(e.targetAnchor);break}c(f,e,u,r,n,o,i)}Nf(e)}return e.anchor&&s(e.anchor)}const Jp=Xp;function Nf(t){const e=t.ctx;if(e&&e.ut){let r=t.children[0].el;for(;r&&r!==t.targetAnchor;)r.nodeType===1&&r.setAttribute("data-v-owner",e.uid),r=r.nextSibling;e.ut()}}const It=Symbol.for("v-fgt"),Ni=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),rs=Symbol.for("v-stc"),Qn=[];let Ee=null;function G(t=!1){Qn.push(Ee=t?null:[])}function Zp(){Qn.pop(),Ee=Qn[Qn.length-1]||null}let fo=1;function Fl(t){fo+=t}function Pf(t){return t.dynamicChildren=fo>0?Ee||tn:null,Zp(),fo>0&&Ee&&Ee.push(t),t}function rt(t,e,r,n,o,i){return Pf(P(t,e,r,n,o,i,!0))}function kt(t,e,r,n,o){return Pf(dt(t,e,r,n,o,!0))}function jf(t){return t?t.__v_isVNode===!0:!1}function Rn(t,e){return t.type===e.type&&t.key===e.key}const Vf=({key:t})=>t??null,Wo=({ref:t,ref_key:e,ref_for:r})=>(typeof t=="number"&&(t=""+t),t!=null?Rt(t)||oe(t)||it(t)?{i:Pt,r:t,k:e,f:!!r}:t:null);function P(t,e=null,r=null,n=0,o=null,i=t===It?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vf(e),ref:e&&Wo(e),scopeId:Ii,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Pt};return a?(Oa(l,r),i&128&&t.normalize(l)):r&&(l.shapeFlag|=Rt(r)?8:16),fo>0&&!s&&Ee&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ee.push(l),l}const dt=Qp;function Qp(t,e=null,r=null,n=0,o=null,i=!1){if((!t||t===vf)&&(t=cr),jf(t)){const a=cn(t,e,!0);return r&&Oa(a,r),fo>0&&!i&&Ee&&(a.shapeFlag&6?Ee[Ee.indexOf(t)]=a:Ee.push(a)),a.patchFlag|=-2,a}if(cv(t)&&(t=t.__vccOpts),e){e=tv(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=jt(a)),_t(l)&&(of(l)&&!Z(l)&&(l=Lt({},l)),e.style=Ct(l))}const s=Rt(t)?1:pp(t)?128:Kp(t)?64:_t(t)?4:it(t)?2:0;return P(t,e,r,n,o,s,i,!0)}function tv(t){return t?of(t)||Af(t)?Lt({},t):t:null}function cn(t,e,r=!1,n=!1){const{props:o,ref:i,patchFlag:s,children:a,transition:l}=t,c=e?Fs(o||{},e):o,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Vf(c),ref:e&&e.ref?r&&i?Z(i)?i.concat(Wo(e)):[i,Wo(e)]:Wo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cn(t.ssContent),ssFallback:t.ssFallback&&cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&n&&(u.transition=l.clone(u)),u}function Ta(t=" ",e=0){return dt(Ni,null,t,e)}function wt(t="",e=!1){return e?(G(),kt(cr,null,t)):dt(cr,null,t)}function Pe(t){return t==null||typeof t=="boolean"?dt(cr):Z(t)?dt(It,null,t.slice()):typeof t=="object"?nr(t):dt(Ni,null,String(t))}function nr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cn(t)}function Oa(t,e){let r=0;const{shapeFlag:n}=t;if(e==null)e=null;else if(Z(e))r=16;else if(typeof e=="object")if(n&65){const o=e.default;o&&(o._c&&(o._d=!1),Oa(t,o()),o._c&&(o._d=!0));return}else{r=32;const o=e._;!o&&!Af(e)?e._ctx=Pt:o===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else it(e)?(e={default:e,_ctx:Pt},r=32):(e=String(e),n&64?(r=16,e=[Ta(e)]):r=8);t.children=e,t.shapeFlag|=r}function Fs(...t){const e={};for(let r=0;r<t.length;r++){const n=t[r];for(const o in n)if(o==="class")e.class!==n.class&&(e.class=jt([e.class,n.class]));else if(o==="style")e.style=Ct([e.style,n.style]);else if(Si(o)){const i=e[o],s=n[o];s&&i!==s&&!(Z(i)&&i.includes(s))&&(e[o]=i?[].concat(i,s):s)}else o!==""&&(e[o]=n[o])}return e}function Re(t,e,r,n=null){ze(t,e,7,[r,n])}const ev=kf();let rv=0;function nv(t,e,r){const n=t.type,o=(e?e.appContext:t.appContext)||ev,i={uid:rv++,vnode:t,type:n,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tf(n,o),emitsOptions:hf(n,o),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:n.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=cp.bind(null,i),t.ce&&t.ce(i),i}let qt=null;const Ma=()=>qt||Pt;let ni,Hs;{const t=qu(),e=(r,n)=>{let o;return(o=t[r])||(o=t[r]=[]),o.push(n),i=>{o.length>1?o.forEach(s=>s(i)):o[0](i)}};ni=e("__VUE_INSTANCE_SETTERS__",r=>qt=r),Hs=e("__VUE_SSR_SETTERS__",r=>Pi=r)}const wo=t=>{const e=qt;return ni(t),t.scope.on(),()=>{t.scope.off(),ni(e)}},Hl=()=>{qt&&qt.scope.off(),ni(null)};function Lf(t){return t.vnode.shapeFlag&4}let Pi=!1;function ov(t,e=!1){e&&Hs(e);const{props:r,children:n}=t.vnode,o=Lf(t);Dp(t,r,o,e),Bp(t,n);const i=o?iv(t,e):void 0;return e&&Hs(!1),i}function iv(t,e){const r=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Mp);const{setup:n}=r;if(n){const o=t.setupContext=n.length>1?av(t):null,i=wo(t);pr();const s=sr(n,t,0,[t.props,o]);if(vr(),i(),Du(s)){if(s.then(Hl,Hl),e)return s.then(a=>{Bl(t,a,e)}).catch(a=>{Oi(a,t,0)});t.asyncDep=s}else Bl(t,s,e)}else Df(t,e)}function Bl(t,e,r){it(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_t(e)&&(t.setupState=lf(e)),Df(t,r)}let ql;function Df(t,e,r){const n=t.type;if(!t.render){if(!e&&ql&&!n.render){const o=n.template||Ea(t).template;if(o){const{isCustomElement:i,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Lt(Lt({isCustomElement:i,delimiters:a},s),l);n.render=ql(o,c)}}t.render=n.render||pe}{const o=wo(t);pr();try{Ip(t)}finally{vr(),o()}}}const sv={get(t,e){return re(t,"get",""),t[e]}};function av(t){const e=r=>{t.exposed=r||{}};return{attrs:new Proxy(t.attrs,sv),slots:t.slots,emit:t.emit,expose:e}}function ji(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(lf(Jh(t.exposed)),{get(e,r){if(r in e)return e[r];if(r in Yn)return Yn[r](t)},has(e,r){return r in e||r in Yn}}))}function lv(t,e=!0){return it(t)?t.displayName||t.name:t.name||e&&t.__name}function cv(t){return it(t)&&"__vccOpts"in t}const mt=(t,e)=>Zh(t,e,Pi);function Vr(t,e,r=ht){const n=Ma(),o=Te(e),i=hr(e),s=np((l,c)=>{let u;return yp(()=>{const f=t[e];De(u,f)&&(u=f,c())}),{get(){return l(),r.get?r.get(u):u},set(f){const d=n.vnode.props;!(d&&(e in d||o in d||i in d)&&(`onUpdate:${e}`in d||`onUpdate:${o}`in d||`onUpdate:${i}`in d))&&De(f,u)&&(u=f,c()),n.emit(`update:${e}`,r.set?r.set(f):f)}}}),a=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return s[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[a]||{}:s,done:!1}:{done:!0}}}},s}const uv="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const fv="http://www.w3.org/2000/svg",dv="http://www.w3.org/1998/Math/MathML",or=typeof document<"u"?document:null,Ul=or&&or.createElement("template"),hv={insert:(t,e,r)=>{e.insertBefore(t,r||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,r,n)=>{const o=e==="svg"?or.createElementNS(fv,t):e==="mathml"?or.createElementNS(dv,t):or.createElement(t,r?{is:r}:void 0);return t==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:t=>or.createTextNode(t),createComment:t=>or.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>or.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,r,n,o,i){const s=r?r.previousSibling:e.lastChild;if(o&&(o===i||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),r),!(o===i||!(o=o.nextSibling)););else{Ul.innerHTML=n==="svg"?`<svg>${t}</svg>`:n==="mathml"?`<math>${t}</math>`:t;const a=Ul.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,r)}return[s?s.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}},pv=Symbol("_vtc");function vv(t,e,r){const n=t[pv];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?t.removeAttribute("class"):r?t.setAttribute("class",e):t.className=e}const oi=Symbol("_vod"),Ff=Symbol("_vsh"),un={beforeMount(t,{value:e},{transition:r}){t[oi]=t.style.display==="none"?"":t.style.display,r&&e?r.beforeEnter(t):Nn(t,e)},mounted(t,{value:e},{transition:r}){r&&e&&r.enter(t)},updated(t,{value:e,oldValue:r},{transition:n}){!e!=!r&&(n?e?(n.beforeEnter(t),Nn(t,!0),n.enter(t)):n.leave(t,()=>{Nn(t,!1)}):Nn(t,e))},beforeUnmount(t,{value:e}){Nn(t,e)}};function Nn(t,e){t.style.display=e?t[oi]:"none",t[Ff]=!e}const gv=Symbol(""),mv=/(^|;)\s*display\s*:/;function yv(t,e,r){const n=t.style,o=Rt(r);let i=!1;if(r&&!o){if(e)if(Rt(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();r[a]==null&&Ko(n,a,"")}else for(const s in e)r[s]==null&&Ko(n,s,"");for(const s in r)s==="display"&&(i=!0),Ko(n,s,r[s])}else if(o){if(e!==r){const s=n[gv];s&&(r+=";"+s),n.cssText=r,i=mv.test(r)}}else e&&t.removeAttribute("style");oi in t&&(t[oi]=i?n.display:"",t[Ff]&&(n.display="none"))}const $l=/\s*!important$/;function Ko(t,e,r){if(Z(r))r.forEach(n=>Ko(t,e,n));else if(r==null&&(r=""),e.startsWith("--"))t.setProperty(e,r);else{const n=_v(t,e);$l.test(r)?t.setProperty(hr(n),r.replace($l,""),"important"):t[n]=r}}const Gl=["Webkit","Moz","ms"],ns={};function _v(t,e){const r=ns[e];if(r)return r;let n=Te(e);if(n!=="filter"&&n in t)return ns[e]=n;n=Ai(n);for(let o=0;o<Gl.length;o++){const i=Gl[o]+n;if(i in t)return ns[e]=i}return e}const Wl="http://www.w3.org/1999/xlink";function xv(t,e,r,n,o){if(n&&e.startsWith("xlink:"))r==null?t.removeAttributeNS(Wl,e.slice(6,e.length)):t.setAttributeNS(Wl,e,r);else{const i=Ch(e);r==null||i&&!Uu(r)?t.removeAttribute(e):t.setAttribute(e,i?"":r)}}function bv(t,e,r,n,o,i,s){if(e==="innerHTML"||e==="textContent"){n&&s(n,o,i),t[e]=r??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=r??"";(c!==u||!("_value"in t))&&(t.value=u),r==null&&t.removeAttribute(e),t._value=r;return}let l=!1;if(r===""||r==null){const c=typeof t[e];c==="boolean"?r=Uu(r):r==null&&c==="string"?(r="",l=!0):c==="number"&&(r=0,l=!0)}try{t[e]=r}catch{}l&&t.removeAttribute(e)}function kr(t,e,r,n){t.addEventListener(e,r,n)}function wv(t,e,r,n){t.removeEventListener(e,r,n)}const Kl=Symbol("_vei");function kv(t,e,r,n,o=null){const i=t[Kl]||(t[Kl]={}),s=i[e];if(n&&s)s.value=n;else{const[a,l]=Sv(e);if(n){const c=i[e]=Av(n,o);kr(t,a,c,l)}else s&&(wv(t,a,s,l),i[e]=void 0)}}const Xl=/(?:Once|Passive|Capture)$/;function Sv(t){let e;if(Xl.test(t)){e={};let n;for(;n=t.match(Xl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hr(t.slice(2)),e]}let os=0;const Cv=Promise.resolve(),Ev=()=>os||(Cv.then(()=>os=0),os=Date.now());function Av(t,e){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;ze(zv(n,r.value),e,5,[n])};return r.value=t,r.attached=Ev(),r}function zv(t,e){if(Z(e)){const r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},e.map(n=>o=>!o._stopped&&n&&n(o))}else return e}const Yl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Tv=(t,e,r,n,o,i,s,a,l)=>{const c=o==="svg";e==="class"?vv(t,n,c):e==="style"?yv(t,r,n):Si(e)?ca(e)||kv(t,e,r,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ov(t,e,n,c))?bv(t,e,n,i,s,a,l):(e==="true-value"?t._trueValue=n:e==="false-value"&&(t._falseValue=n),xv(t,e,n,c))};function Ov(t,e,r,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yl(e)&&it(r));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Yl(e)&&Rt(r)?!1:e in t}const ii=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?r=>Go(e,r):e};function Mv(t){t.target.composing=!0}function Jl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const on=Symbol("_assign"),Iv={created(t,{modifiers:{lazy:e,trim:r,number:n}},o){t[on]=ii(o);const i=n||o.props&&o.props.type==="number";kr(t,e?"change":"input",s=>{if(s.target.composing)return;let a=t.value;r&&(a=a.trim()),i&&(a=Jo(a)),t[on](a)}),r&&kr(t,"change",()=>{t.value=t.value.trim()}),e||(kr(t,"compositionstart",Mv),kr(t,"compositionend",Jl),kr(t,"change",Jl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:r,trim:n,number:o}},i){if(t[on]=ii(i),t.composing)return;const s=(o||t.type==="number")&&!/^0\d/.test(t.value)?Jo(t.value):t.value,a=e??"";s!==a&&(document.activeElement===t&&t.type!=="range"&&(r||n&&t.value.trim()===a)||(t.value=a))}},Rv={deep:!0,created(t,{value:e,modifiers:{number:r}},n){const o=Ci(e);kr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,s=>s.selected).map(s=>r?Jo(si(s)):si(s));t[on](t.multiple?o?new Set(i):i:i[0]),t._assigning=!0,bo(()=>{t._assigning=!1})}),t[on]=ii(n)},mounted(t,{value:e,modifiers:{number:r}}){Zl(t,e)},beforeUpdate(t,e,r){t[on]=ii(r)},updated(t,{value:e,modifiers:{number:r}}){t._assigning||Zl(t,e)}};function Zl(t,e,r){const n=t.multiple,o=Z(e);if(!(n&&!o&&!Ci(e))){for(let i=0,s=t.options.length;i<s;i++){const a=t.options[i],l=si(a);if(n)if(o){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(u=>String(u)===String(l)):a.selected=Ah(e,l)>-1}else a.selected=e.has(l);else if(zi(si(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function si(t){return"_value"in t?t._value:t.value}const Nv=["ctrl","shift","alt","meta"],Pv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nv.some(r=>t[`${r}Key`]&&!e.includes(r))},Ql=(t,e)=>{const r=t._withMods||(t._withMods={}),n=e.join(".");return r[n]||(r[n]=(o,...i)=>{for(let s=0;s<e.length;s++){const a=Pv[e[s]];if(a&&a(o,e))return}return t(o,...i)})},jv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tc=(t,e)=>{const r=t._withKeys||(t._withKeys={}),n=e.join(".");return r[n]||(r[n]=o=>{if(!("key"in o))return;const i=hr(o.key);if(e.some(s=>s===i||jv[s]===i))return t(o)})},Vv=Lt({patchProp:Tv},hv);let ec;function Lv(){return ec||(ec=Up(Vv))}const Dv=(...t)=>{const e=Lv().createApp(...t),{mount:r}=e;return e.mount=n=>{const o=Hv(n);if(!o)return;const i=e._component;!it(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const s=r(o,!1,Fv(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e};function Fv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Hv(t){return Rt(t)?document.querySelector(t):t}const Ia=(t,e)=>((t+e-1)/e|0)*e;function Bv(t){return Object.keys(t)}function qv(t,e){return new Array(t).fill(0).map((r,n)=>e(n))}const rc=t=>t&&typeof t.length=="number"&&t.buffer instanceof ArrayBuffer&&typeof t.byteLength=="number",lt={i32:{numElements:1,align:4,size:4,type:"i32",View:Int32Array},u32:{numElements:1,align:4,size:4,type:"u32",View:Uint32Array},f32:{numElements:1,align:4,size:4,type:"f32",View:Float32Array},f16:{numElements:1,align:2,size:2,type:"u16",View:Uint16Array},vec2f:{numElements:2,align:8,size:8,type:"f32",View:Float32Array},vec2i:{numElements:2,align:8,size:8,type:"i32",View:Int32Array},vec2u:{numElements:2,align:8,size:8,type:"u32",View:Uint32Array},vec2h:{numElements:2,align:4,size:4,type:"u16",View:Uint16Array},vec3i:{numElements:3,align:16,size:12,type:"i32",View:Int32Array},vec3u:{numElements:3,align:16,size:12,type:"u32",View:Uint32Array},vec3f:{numElements:3,align:16,size:12,type:"f32",View:Float32Array},vec3h:{numElements:3,align:8,size:6,type:"u16",View:Uint16Array},vec4i:{numElements:4,align:16,size:16,type:"i32",View:Int32Array},vec4u:{numElements:4,align:16,size:16,type:"u32",View:Uint32Array},vec4f:{numElements:4,align:16,size:16,type:"f32",View:Float32Array},vec4h:{numElements:4,align:8,size:8,type:"u16",View:Uint16Array},mat2x2f:{numElements:4,align:8,size:16,type:"f32",View:Float32Array},mat2x2h:{numElements:4,align:4,size:8,type:"u16",View:Uint16Array},mat3x2f:{numElements:6,align:8,size:24,type:"f32",View:Float32Array},mat3x2h:{numElements:6,align:4,size:12,type:"u16",View:Uint16Array},mat4x2f:{numElements:8,align:8,size:32,type:"f32",View:Float32Array},mat4x2h:{numElements:8,align:4,size:16,type:"u16",View:Uint16Array},mat2x3f:{numElements:8,align:16,size:32,pad:[3,1],type:"f32",View:Float32Array},mat2x3h:{numElements:8,align:8,size:16,pad:[3,1],type:"u16",View:Uint16Array},mat3x3f:{numElements:12,align:16,size:48,pad:[3,1],type:"f32",View:Float32Array},mat3x3h:{numElements:12,align:8,size:24,pad:[3,1],type:"u16",View:Uint16Array},mat4x3f:{numElements:16,align:16,size:64,pad:[3,1],type:"f32",View:Float32Array},mat4x3h:{numElements:16,align:8,size:32,pad:[3,1],type:"u16",View:Uint16Array},mat2x4f:{numElements:8,align:16,size:32,type:"f32",View:Float32Array},mat2x4h:{numElements:8,align:8,size:16,type:"u16",View:Uint16Array},mat3x4f:{numElements:12,align:16,size:48,pad:[3,1],type:"f32",View:Float32Array},mat3x4h:{numElements:12,align:8,size:24,pad:[3,1],type:"u16",View:Uint16Array},mat4x4f:{numElements:16,align:16,size:64,type:"f32",View:Float32Array},mat4x4h:{numElements:16,align:8,size:32,type:"u16",View:Uint16Array},bool:{numElements:0,align:1,size:0,type:"bool",View:Uint32Array}},Cn={...lt,"atomic<i32>":lt.i32,"atomic<u32>":lt.u32,"vec2<i32>":lt.vec2i,"vec2<u32>":lt.vec2u,"vec2<f32>":lt.vec2f,"vec2<f16>":lt.vec2h,"vec3<i32>":lt.vec3i,"vec3<u32>":lt.vec3u,"vec3<f32>":lt.vec3f,"vec3<f16>":lt.vec3h,"vec4<i32>":lt.vec4i,"vec4<u32>":lt.vec4u,"vec4<f32>":lt.vec4f,"vec4<f16>":lt.vec4h,"mat2x2<f32>":lt.mat2x2f,"mat2x2<f16>":lt.mat2x2h,"mat3x2<f32>":lt.mat3x2f,"mat3x2<f16>":lt.mat3x2h,"mat4x2<f32>":lt.mat4x2f,"mat4x2<f16>":lt.mat4x2h,"mat2x3<f32>":lt.mat2x3f,"mat2x3<f16>":lt.mat2x3h,"mat3x3<f32>":lt.mat3x3f,"mat3x3<f16>":lt.mat3x3h,"mat4x3<f32>":lt.mat4x3f,"mat4x3<f16>":lt.mat4x3h,"mat2x4<f32>":lt.mat2x4f,"mat2x4<f16>":lt.mat2x4h,"mat3x4<f32>":lt.mat3x4f,"mat3x4<f16>":lt.mat3x4h,"mat4x4<f32>":lt.mat4x4f,"mat4x4<f16>":lt.mat4x4h},Uv=Bv(Cn);function $v(t=[],e){const r=new Set;for(const n of Uv){const o=Cn[n];r.has(o)||(r.add(o),o.flatten=t.includes(n)?e:!e)}}$v();function Gv(t){const e=t;if(e.elementType)return e.size;{const n=t,o=e.numElements||1;if(n.fields)return t.size*o;{const i=t,{align:s}=Cn[i.type];return o>1?Ia(t.size,s)*o:t.size}}}function nc(t,e,r,n){const{size:o,type:i}=t;try{const{View:s,align:a}=Cn[i],l=n!==void 0,c=l?Ia(o,a):o,u=c/s.BYTES_PER_ELEMENT,f=l?n===0?(e.byteLength-r)/c:n:1;return new s(e,r,u*f)}catch{throw new Error(`unknown type: ${i}`)}}function Wv(t){return!t.fields&&!t.elementType}function Kv(t,e,r){const n=r||0,o=new ArrayBuffer(Gv(t)),i=(s,a)=>{const l=s,c=l.elementType;if(c){if(Wv(c)&&Cn[c.type].flatten)return nc(c,o,a,l.numElements);{const{size:u}=Hf(s),f=l.numElements===0?(o.byteLength-a)/u:l.numElements;return qv(f,d=>i(c,a+u*d))}}else{if(typeof s=="string")throw Error("unreachable");{const u=s.fields;if(u){const f={};for(const[d,{type:v,offset:x}]of Object.entries(u))f[d]=i(v,a+x);return f}else return nc(s,o,a)}}};return{views:i(t,n),arrayBuffer:o}}function Bs(t,e){if(t!==void 0)if(rc(e)){const r=e;if(r.length===1&&typeof t=="number")r[0]=t;else if(Array.isArray(t[0])||rc(t[0])){const n=t[0].length,o=n===3?4:n;for(let i=0;i<t.length;++i){const s=i*o;r.set(t[i],s)}}else r.set(t)}else if(Array.isArray(e)){const r=e;t.forEach((n,o)=>{Bs(n,r[o])})}else{const r=e;for(const[n,o]of Object.entries(t)){const i=r[n];i&&Bs(o,i)}}}function Xv(t,e,r=0){const n=t,o=n.group===void 0?t:n.typeDefinition,i=Kv(o,e,r);return{...i,set(s){Bs(s,i.views)}}}function qs(t){const r=t.elementType;if(r)return qs(r);const o=t.fields;if(o)return Object.values(o).reduce((a,{type:l})=>Math.max(a,qs(l)),0);const{type:i}=t,{align:s}=Cn[i];return s}function Hf(t){const r=t.elementType;if(r){const i=r.size,s=qs(r);return{unalignedSize:i,align:s,size:Ia(i,s)}}const o=t.fields;if(o){const i=Object.values(o).pop();if(i.type.size===0)return Hf(i.type)}return{size:0,unalignedSize:0,align:1}}class Yv{constructor(){this.constants=new Map,this.aliases=new Map,this.structs=new Map}}class Ye{constructor(){}get isAstNode(){return!0}get astNodeType(){return""}evaluate(e){throw new Error("Cannot evaluate node")}evaluateString(e){return this.evaluate(e).toString()}search(e){}searchBlock(e,r){if(e){r(ai.instance);for(const n of e)n instanceof Array?this.searchBlock(n,r):n.search(r);r(li.instance)}}}class ai extends Ye{}ai.instance=new ai;class li extends Ye{}li.instance=new li;class Tt extends Ye{constructor(){super()}}let Us=class extends Tt{constructor(e,r,n,o){super(),this.name=e,this.args=r,this.returnType=n,this.body=o}get astNodeType(){return"function"}search(e){this.searchBlock(this.body,e)}};class Jv extends Tt{constructor(e){super(),this.expression=e}get astNodeType(){return"staticAssert"}search(e){this.expression.search(e)}}class Zv extends Tt{constructor(e,r){super(),this.condition=e,this.body=r}get astNodeType(){return"while"}search(e){this.condition.search(e),this.searchBlock(this.body,e)}}class Qv extends Tt{constructor(e){super(),this.body=e}get astNodeType(){return"continuing"}search(e){this.searchBlock(this.body,e)}}class tg extends Tt{constructor(e,r,n,o){super(),this.init=e,this.condition=r,this.increment=n,this.body=o}get astNodeType(){return"for"}search(e){var r,n,o;(r=this.init)===null||r===void 0||r.search(e),(n=this.condition)===null||n===void 0||n.search(e),(o=this.increment)===null||o===void 0||o.search(e),this.searchBlock(this.body,e)}}class Sr extends Tt{constructor(e,r,n,o,i){super(),this.name=e,this.type=r,this.storage=n,this.access=o,this.value=i}get astNodeType(){return"var"}search(e){var r;e(this),(r=this.value)===null||r===void 0||r.search(e)}}class Bf extends Tt{constructor(e,r,n){super(),this.name=e,this.type=r,this.value=n}get astNodeType(){return"override"}search(e){var r;(r=this.value)===null||r===void 0||r.search(e)}}class $s extends Tt{constructor(e,r,n,o,i){super(),this.name=e,this.type=r,this.storage=n,this.access=o,this.value=i}get astNodeType(){return"let"}search(e){var r;(r=this.value)===null||r===void 0||r.search(e)}}class oc extends Tt{constructor(e,r,n,o,i){super(),this.name=e,this.type=r,this.storage=n,this.access=o,this.value=i}get astNodeType(){return"const"}evaluate(e){return this.value.evaluate(e)}search(e){var r;(r=this.value)===null||r===void 0||r.search(e)}}var fn;(function(t){t.increment="++",t.decrement="--"})(fn||(fn={}));(function(t){function e(r){const n=r;if(n=="parse")throw new Error("Invalid value for IncrementOperator");return t[n]}t.parse=e})(fn||(fn={}));class eg extends Tt{constructor(e,r){super(),this.operator=e,this.variable=r}get astNodeType(){return"increment"}search(e){this.variable.search(e)}}var ho;(function(t){t.assign="=",t.addAssign="+=",t.subtractAssin="-=",t.multiplyAssign="*=",t.divideAssign="/=",t.moduloAssign="%=",t.andAssign="&=",t.orAssign="|=",t.xorAssign="^=",t.shiftLeftAssign="<<=",t.shiftRightAssign=">>="})(ho||(ho={}));(function(t){function e(r){const n=r;if(n=="parse")throw new Error("Invalid value for AssignOperator");return n}t.parse=e})(ho||(ho={}));class rg extends Tt{constructor(e,r,n){super(),this.operator=e,this.variable=r,this.value=n}get astNodeType(){return"assign"}search(e){this.value.search(e)}}class ng extends Tt{constructor(e,r){super(),this.name=e,this.args=r}get astNodeType(){return"call"}}class og extends Tt{constructor(e,r){super(),this.body=e,this.continuing=r}get astNodeType(){return"loop"}}class ig extends Tt{constructor(e,r){super(),this.condition=e,this.body=r}get astNodeType(){return"body"}}let sg=class extends Tt{constructor(e,r,n,o){super(),this.condition=e,this.body=r,this.elseif=n,this.else=o}get astNodeType(){return"if"}search(e){this.condition.search(e),this.searchBlock(this.body,e),this.searchBlock(this.elseif,e),this.searchBlock(this.else,e)}};class ag extends Tt{constructor(e){super(),this.value=e}get astNodeType(){return"return"}search(e){var r;(r=this.value)===null||r===void 0||r.search(e)}}class lg extends Tt{constructor(e){super(),this.name=e}get astNodeType(){return"enable"}}class qf extends Tt{constructor(e,r){super(),this.name=e,this.type=r}get astNodeType(){return"alias"}}class cg extends Tt{constructor(){super()}get astNodeType(){return"discard"}}class ug extends Tt{constructor(){super()}get astNodeType(){return"break"}}class fg extends Tt{constructor(){super()}get astNodeType(){return"continue"}}class Lr extends Tt{constructor(e){super(),this.name=e}get astNodeType(){return"type"}get isStruct(){return!1}get isArray(){return!1}}class xr extends Lr{constructor(e,r){super(e),this.members=r}get astNodeType(){return"struct"}get isStruct(){return!0}getMemberIndex(e){for(let r=0;r<this.members.length;r++)if(this.members[r].name==e)return r;return-1}}class Uf extends Lr{constructor(e,r,n){super(e),this.format=r,this.access=n}get astNodeType(){return"template"}}class dg extends Lr{constructor(e,r,n,o){super(e),this.storage=r,this.type=n,this.access=o}get astNodeType(){return"pointer"}}class $f extends Lr{constructor(e,r,n,o){super(e),this.attributes=r,this.format=n,this.count=o}get astNodeType(){return"array"}get isArray(){return!0}}class Hn extends Lr{constructor(e,r,n){super(e),this.format=r,this.access=n}get astNodeType(){return"sampler"}}class He extends Ye{constructor(){super()}}class ic extends He{constructor(e){super(),this.value=e}get astNodeType(){return"stringExpr"}toString(){return this.value}evaluateString(){return this.value}}class Bn extends He{constructor(e,r){super(),this.type=e,this.args=r}get astNodeType(){return"createExpr"}}class Gf extends He{constructor(e,r){super(),this.name=e,this.args=r}get astNodeType(){return"callExpr"}evaluate(e){switch(this.name){case"abs":return Math.abs(this.args[0].evaluate(e));case"acos":return Math.acos(this.args[0].evaluate(e));case"acosh":return Math.acosh(this.args[0].evaluate(e));case"asin":return Math.asin(this.args[0].evaluate(e));case"asinh":return Math.asinh(this.args[0].evaluate(e));case"atan":return Math.atan(this.args[0].evaluate(e));case"atan2":return Math.atan2(this.args[0].evaluate(e),this.args[1].evaluate(e));case"atanh":return Math.atanh(this.args[0].evaluate(e));case"ceil":return Math.ceil(this.args[0].evaluate(e));case"clamp":return Math.min(Math.max(this.args[0].evaluate(e),this.args[1].evaluate(e)),this.args[2].evaluate(e));case"cos":return Math.cos(this.args[0].evaluate(e));case"degrees":return this.args[0].evaluate(e)*180/Math.PI;case"distance":return Math.sqrt(Math.pow(this.args[0].evaluate(e)-this.args[1].evaluate(e),2));case"dot":case"exp":return Math.exp(this.args[0].evaluate(e));case"exp2":return Math.pow(2,this.args[0].evaluate(e));case"floor":return Math.floor(this.args[0].evaluate(e));case"fma":return this.args[0].evaluate(e)*this.args[1].evaluate(e)+this.args[2].evaluate(e);case"fract":return this.args[0].evaluate(e)-Math.floor(this.args[0].evaluate(e));case"inverseSqrt":return 1/Math.sqrt(this.args[0].evaluate(e));case"log":return Math.log(this.args[0].evaluate(e));case"log2":return Math.log2(this.args[0].evaluate(e));case"max":return Math.max(this.args[0].evaluate(e),this.args[1].evaluate(e));case"min":return Math.min(this.args[0].evaluate(e),this.args[1].evaluate(e));case"mix":return this.args[0].evaluate(e)*(1-this.args[2].evaluate(e))+this.args[1].evaluate(e)*this.args[2].evaluate(e);case"modf":return this.args[0].evaluate(e)-Math.floor(this.args[0].evaluate(e));case"pow":return Math.pow(this.args[0].evaluate(e),this.args[1].evaluate(e));case"radians":return this.args[0].evaluate(e)*Math.PI/180;case"round":return Math.round(this.args[0].evaluate(e));case"sign":return Math.sign(this.args[0].evaluate(e));case"sin":return Math.sin(this.args[0].evaluate(e));case"sinh":return Math.sinh(this.args[0].evaluate(e));case"saturate":return Math.min(Math.max(this.args[0].evaluate(e),0),1);case"smoothstep":return this.args[0].evaluate(e)*this.args[0].evaluate(e)*(3-2*this.args[0].evaluate(e));case"sqrt":return Math.sqrt(this.args[0].evaluate(e));case"step":return this.args[0].evaluate(e)<this.args[1].evaluate(e)?0:1;case"tan":return Math.tan(this.args[0].evaluate(e));case"tanh":return Math.tanh(this.args[0].evaluate(e));case"trunc":return Math.trunc(this.args[0].evaluate(e));default:throw new Error("Non const function: "+this.name)}}search(e){for(const r of this.args)r.search(e);e(this)}}class Wf extends He{constructor(e){super(),this.name=e}get astNodeType(){return"varExpr"}search(e){e(this)}}class sc extends He{constructor(e,r){super(),this.name=e,this.initializer=r}get astNodeType(){return"constExpr"}evaluate(e){var r,n;if(this.initializer instanceof Bn){const o=(r=this.postfix)===null||r===void 0?void 0:r.evaluateString(e),i=(n=this.initializer.type)===null||n===void 0?void 0:n.name,s=e.structs.get(i),a=s==null?void 0:s.getMemberIndex(o);if(a!=-1)return this.initializer.args[a].evaluate(e);console.log(a)}return this.initializer.evaluate(e)}search(e){this.initializer.search(e)}}class ac extends He{constructor(e){super(),this.value=e}get astNodeType(){return"literalExpr"}evaluate(){return this.value}}class hg extends He{constructor(e,r){super(),this.type=e,this.value=r}get astNodeType(){return"bitcastExpr"}search(e){this.value.search(e)}}class pg extends He{constructor(e,r){super(),this.type=e,this.args=r}get astNodeType(){return"typecastExpr"}evaluate(e){return this.args[0].evaluate(e)}search(e){this.searchBlock(this.args,e)}}class lc extends He{constructor(e){super(),this.contents=e}get astNodeType(){return"groupExpr"}evaluate(e){return this.contents[0].evaluate(e)}search(e){this.searchBlock(this.contents,e)}}class Kf extends He{constructor(){super()}}class vg extends Kf{constructor(e,r){super(),this.operator=e,this.right=r}get astNodeType(){return"unaryOp"}evaluate(e){switch(this.operator){case"+":return this.right.evaluate(e);case"-":return-this.right.evaluate(e);case"!":return this.right.evaluate(e)?0:1;case"~":return~this.right.evaluate(e);default:throw new Error("Unknown unary operator: "+this.operator)}}search(e){this.right.search(e)}}class Ne extends Kf{constructor(e,r,n){super(),this.operator=e,this.left=r,this.right=n}get astNodeType(){return"binaryOp"}evaluate(e){switch(this.operator){case"+":return this.left.evaluate(e)+this.right.evaluate(e);case"-":return this.left.evaluate(e)-this.right.evaluate(e);case"*":return this.left.evaluate(e)*this.right.evaluate(e);case"/":return this.left.evaluate(e)/this.right.evaluate(e);case"%":return this.left.evaluate(e)%this.right.evaluate(e);case"==":return this.left.evaluate(e)==this.right.evaluate(e)?1:0;case"!=":return this.left.evaluate(e)!=this.right.evaluate(e)?1:0;case"<":return this.left.evaluate(e)<this.right.evaluate(e)?1:0;case">":return this.left.evaluate(e)>this.right.evaluate(e)?1:0;case"<=":return this.left.evaluate(e)<=this.right.evaluate(e)?1:0;case">=":return this.left.evaluate(e)>=this.right.evaluate(e)?1:0;case"&&":return this.left.evaluate(e)&&this.right.evaluate(e)?1:0;case"||":return this.left.evaluate(e)||this.right.evaluate(e)?1:0;default:throw new Error(`Unknown operator ${this.operator}`)}}search(e){this.left.search(e),this.right.search(e)}}class Xf extends Ye{constructor(){super()}}class gg extends Xf{constructor(e,r){super(),this.selector=e,this.body=r}get astNodeType(){return"case"}search(e){this.searchBlock(this.body,e)}}class mg extends Xf{constructor(e){super(),this.body=e}get astNodeType(){return"default"}search(e){this.searchBlock(this.body,e)}}class yg extends Ye{constructor(e,r,n){super(),this.name=e,this.type=r,this.attributes=n}get astNodeType(){return"argument"}}class _g extends Ye{constructor(e,r){super(),this.condition=e,this.body=r}get astNodeType(){return"elseif"}search(e){this.condition.search(e),this.searchBlock(this.body,e)}}class xg extends Ye{constructor(e,r,n){super(),this.name=e,this.type=r,this.attributes=n}get astNodeType(){return"member"}}class cc extends Ye{constructor(e,r){super(),this.name=e,this.value=r}get astNodeType(){return"attribute"}}var S,g;(function(t){t[t.token=0]="token",t[t.keyword=1]="keyword",t[t.reserved=2]="reserved"})(g||(g={}));class m{constructor(e,r,n){this.name=e,this.type=r,this.rule=n}toString(){return this.name}}class h{}S=h;h.none=new m("",g.reserved,"");h.eof=new m("EOF",g.token,"");h.reserved={asm:new m("asm",g.reserved,"asm"),bf16:new m("bf16",g.reserved,"bf16"),do:new m("do",g.reserved,"do"),enum:new m("enum",g.reserved,"enum"),f16:new m("f16",g.reserved,"f16"),f64:new m("f64",g.reserved,"f64"),handle:new m("handle",g.reserved,"handle"),i8:new m("i8",g.reserved,"i8"),i16:new m("i16",g.reserved,"i16"),i64:new m("i64",g.reserved,"i64"),mat:new m("mat",g.reserved,"mat"),premerge:new m("premerge",g.reserved,"premerge"),regardless:new m("regardless",g.reserved,"regardless"),typedef:new m("typedef",g.reserved,"typedef"),u8:new m("u8",g.reserved,"u8"),u16:new m("u16",g.reserved,"u16"),u64:new m("u64",g.reserved,"u64"),unless:new m("unless",g.reserved,"unless"),using:new m("using",g.reserved,"using"),vec:new m("vec",g.reserved,"vec"),void:new m("void",g.reserved,"void")};h.keywords={array:new m("array",g.keyword,"array"),atomic:new m("atomic",g.keyword,"atomic"),bool:new m("bool",g.keyword,"bool"),f32:new m("f32",g.keyword,"f32"),i32:new m("i32",g.keyword,"i32"),mat2x2:new m("mat2x2",g.keyword,"mat2x2"),mat2x3:new m("mat2x3",g.keyword,"mat2x3"),mat2x4:new m("mat2x4",g.keyword,"mat2x4"),mat3x2:new m("mat3x2",g.keyword,"mat3x2"),mat3x3:new m("mat3x3",g.keyword,"mat3x3"),mat3x4:new m("mat3x4",g.keyword,"mat3x4"),mat4x2:new m("mat4x2",g.keyword,"mat4x2"),mat4x3:new m("mat4x3",g.keyword,"mat4x3"),mat4x4:new m("mat4x4",g.keyword,"mat4x4"),ptr:new m("ptr",g.keyword,"ptr"),sampler:new m("sampler",g.keyword,"sampler"),sampler_comparison:new m("sampler_comparison",g.keyword,"sampler_comparison"),struct:new m("struct",g.keyword,"struct"),texture_1d:new m("texture_1d",g.keyword,"texture_1d"),texture_2d:new m("texture_2d",g.keyword,"texture_2d"),texture_2d_array:new m("texture_2d_array",g.keyword,"texture_2d_array"),texture_3d:new m("texture_3d",g.keyword,"texture_3d"),texture_cube:new m("texture_cube",g.keyword,"texture_cube"),texture_cube_array:new m("texture_cube_array",g.keyword,"texture_cube_array"),texture_multisampled_2d:new m("texture_multisampled_2d",g.keyword,"texture_multisampled_2d"),texture_storage_1d:new m("texture_storage_1d",g.keyword,"texture_storage_1d"),texture_storage_2d:new m("texture_storage_2d",g.keyword,"texture_storage_2d"),texture_storage_2d_array:new m("texture_storage_2d_array",g.keyword,"texture_storage_2d_array"),texture_storage_3d:new m("texture_storage_3d",g.keyword,"texture_storage_3d"),texture_depth_2d:new m("texture_depth_2d",g.keyword,"texture_depth_2d"),texture_depth_2d_array:new m("texture_depth_2d_array",g.keyword,"texture_depth_2d_array"),texture_depth_cube:new m("texture_depth_cube",g.keyword,"texture_depth_cube"),texture_depth_cube_array:new m("texture_depth_cube_array",g.keyword,"texture_depth_cube_array"),texture_depth_multisampled_2d:new m("texture_depth_multisampled_2d",g.keyword,"texture_depth_multisampled_2d"),texture_external:new m("texture_external",g.keyword,"texture_external"),u32:new m("u32",g.keyword,"u32"),vec2:new m("vec2",g.keyword,"vec2"),vec3:new m("vec3",g.keyword,"vec3"),vec4:new m("vec4",g.keyword,"vec4"),bitcast:new m("bitcast",g.keyword,"bitcast"),block:new m("block",g.keyword,"block"),break:new m("break",g.keyword,"break"),case:new m("case",g.keyword,"case"),continue:new m("continue",g.keyword,"continue"),continuing:new m("continuing",g.keyword,"continuing"),default:new m("default",g.keyword,"default"),discard:new m("discard",g.keyword,"discard"),else:new m("else",g.keyword,"else"),enable:new m("enable",g.keyword,"enable"),fallthrough:new m("fallthrough",g.keyword,"fallthrough"),false:new m("false",g.keyword,"false"),fn:new m("fn",g.keyword,"fn"),for:new m("for",g.keyword,"for"),function:new m("function",g.keyword,"function"),if:new m("if",g.keyword,"if"),let:new m("let",g.keyword,"let"),const:new m("const",g.keyword,"const"),loop:new m("loop",g.keyword,"loop"),while:new m("while",g.keyword,"while"),private:new m("private",g.keyword,"private"),read:new m("read",g.keyword,"read"),read_write:new m("read_write",g.keyword,"read_write"),return:new m("return",g.keyword,"return"),storage:new m("storage",g.keyword,"storage"),switch:new m("switch",g.keyword,"switch"),true:new m("true",g.keyword,"true"),alias:new m("alias",g.keyword,"alias"),type:new m("type",g.keyword,"type"),uniform:new m("uniform",g.keyword,"uniform"),var:new m("var",g.keyword,"var"),override:new m("override",g.keyword,"override"),workgroup:new m("workgroup",g.keyword,"workgroup"),write:new m("write",g.keyword,"write"),r8unorm:new m("r8unorm",g.keyword,"r8unorm"),r8snorm:new m("r8snorm",g.keyword,"r8snorm"),r8uint:new m("r8uint",g.keyword,"r8uint"),r8sint:new m("r8sint",g.keyword,"r8sint"),r16uint:new m("r16uint",g.keyword,"r16uint"),r16sint:new m("r16sint",g.keyword,"r16sint"),r16float:new m("r16float",g.keyword,"r16float"),rg8unorm:new m("rg8unorm",g.keyword,"rg8unorm"),rg8snorm:new m("rg8snorm",g.keyword,"rg8snorm"),rg8uint:new m("rg8uint",g.keyword,"rg8uint"),rg8sint:new m("rg8sint",g.keyword,"rg8sint"),r32uint:new m("r32uint",g.keyword,"r32uint"),r32sint:new m("r32sint",g.keyword,"r32sint"),r32float:new m("r32float",g.keyword,"r32float"),rg16uint:new m("rg16uint",g.keyword,"rg16uint"),rg16sint:new m("rg16sint",g.keyword,"rg16sint"),rg16float:new m("rg16float",g.keyword,"rg16float"),rgba8unorm:new m("rgba8unorm",g.keyword,"rgba8unorm"),rgba8unorm_srgb:new m("rgba8unorm_srgb",g.keyword,"rgba8unorm_srgb"),rgba8snorm:new m("rgba8snorm",g.keyword,"rgba8snorm"),rgba8uint:new m("rgba8uint",g.keyword,"rgba8uint"),rgba8sint:new m("rgba8sint",g.keyword,"rgba8sint"),bgra8unorm:new m("bgra8unorm",g.keyword,"bgra8unorm"),bgra8unorm_srgb:new m("bgra8unorm_srgb",g.keyword,"bgra8unorm_srgb"),rgb10a2unorm:new m("rgb10a2unorm",g.keyword,"rgb10a2unorm"),rg11b10float:new m("rg11b10float",g.keyword,"rg11b10float"),rg32uint:new m("rg32uint",g.keyword,"rg32uint"),rg32sint:new m("rg32sint",g.keyword,"rg32sint"),rg32float:new m("rg32float",g.keyword,"rg32float"),rgba16uint:new m("rgba16uint",g.keyword,"rgba16uint"),rgba16sint:new m("rgba16sint",g.keyword,"rgba16sint"),rgba16float:new m("rgba16float",g.keyword,"rgba16float"),rgba32uint:new m("rgba32uint",g.keyword,"rgba32uint"),rgba32sint:new m("rgba32sint",g.keyword,"rgba32sint"),rgba32float:new m("rgba32float",g.keyword,"rgba32float"),static_assert:new m("static_assert",g.keyword,"static_assert")};h.tokens={decimal_float_literal:new m("decimal_float_literal",g.token,/((-?[0-9]*\.[0-9]+|-?[0-9]+\.[0-9]*)((e|E)(\+|-)?[0-9]+)?f?)|(-?[0-9]+(e|E)(\+|-)?[0-9]+f?)|([0-9]+f)/),hex_float_literal:new m("hex_float_literal",g.token,/-?0x((([0-9a-fA-F]*\.[0-9a-fA-F]+|[0-9a-fA-F]+\.[0-9a-fA-F]*)((p|P)(\+|-)?[0-9]+f?)?)|([0-9a-fA-F]+(p|P)(\+|-)?[0-9]+f?))/),int_literal:new m("int_literal",g.token,/-?0x[0-9a-fA-F]+|0i?|-?[1-9][0-9]*i?/),uint_literal:new m("uint_literal",g.token,/0x[0-9a-fA-F]+u|0u|[1-9][0-9]*u/),ident:new m("ident",g.token,/[a-zA-Z][0-9a-zA-Z_]*/),and:new m("and",g.token,"&"),and_and:new m("and_and",g.token,"&&"),arrow:new m("arrow ",g.token,"->"),attr:new m("attr",g.token,"@"),attr_left:new m("attr_left",g.token,"[["),attr_right:new m("attr_right",g.token,"]]"),forward_slash:new m("forward_slash",g.token,"/"),bang:new m("bang",g.token,"!"),bracket_left:new m("bracket_left",g.token,"["),bracket_right:new m("bracket_right",g.token,"]"),brace_left:new m("brace_left",g.token,"{"),brace_right:new m("brace_right",g.token,"}"),colon:new m("colon",g.token,":"),comma:new m("comma",g.token,","),equal:new m("equal",g.token,"="),equal_equal:new m("equal_equal",g.token,"=="),not_equal:new m("not_equal",g.token,"!="),greater_than:new m("greater_than",g.token,">"),greater_than_equal:new m("greater_than_equal",g.token,">="),shift_right:new m("shift_right",g.token,">>"),less_than:new m("less_than",g.token,"<"),less_than_equal:new m("less_than_equal",g.token,"<="),shift_left:new m("shift_left",g.token,"<<"),modulo:new m("modulo",g.token,"%"),minus:new m("minus",g.token,"-"),minus_minus:new m("minus_minus",g.token,"--"),period:new m("period",g.token,"."),plus:new m("plus",g.token,"+"),plus_plus:new m("plus_plus",g.token,"++"),or:new m("or",g.token,"|"),or_or:new m("or_or",g.token,"||"),paren_left:new m("paren_left",g.token,"("),paren_right:new m("paren_right",g.token,")"),semicolon:new m("semicolon",g.token,";"),star:new m("star",g.token,"*"),tilde:new m("tilde",g.token,"~"),underscore:new m("underscore",g.token,"_"),xor:new m("xor",g.token,"^"),plus_equal:new m("plus_equal",g.token,"+="),minus_equal:new m("minus_equal",g.token,"-="),times_equal:new m("times_equal",g.token,"*="),division_equal:new m("division_equal",g.token,"/="),modulo_equal:new m("modulo_equal",g.token,"%="),and_equal:new m("and_equal",g.token,"&="),or_equal:new m("or_equal",g.token,"|="),xor_equal:new m("xor_equal",g.token,"^="),shift_right_equal:new m("shift_right_equal",g.token,">>="),shift_left_equal:new m("shift_left_equal",g.token,"<<=")};h.storage_class=[S.keywords.function,S.keywords.private,S.keywords.workgroup,S.keywords.uniform,S.keywords.storage];h.access_mode=[S.keywords.read,S.keywords.write,S.keywords.read_write];h.sampler_type=[S.keywords.sampler,S.keywords.sampler_comparison];h.sampled_texture_type=[S.keywords.texture_1d,S.keywords.texture_2d,S.keywords.texture_2d_array,S.keywords.texture_3d,S.keywords.texture_cube,S.keywords.texture_cube_array];h.multisampled_texture_type=[S.keywords.texture_multisampled_2d];h.storage_texture_type=[S.keywords.texture_storage_1d,S.keywords.texture_storage_2d,S.keywords.texture_storage_2d_array,S.keywords.texture_storage_3d];h.depth_texture_type=[S.keywords.texture_depth_2d,S.keywords.texture_depth_2d_array,S.keywords.texture_depth_cube,S.keywords.texture_depth_cube_array,S.keywords.texture_depth_multisampled_2d];h.texture_external_type=[S.keywords.texture_external];h.any_texture_type=[...S.sampled_texture_type,...S.multisampled_texture_type,...S.storage_texture_type,...S.depth_texture_type,...S.texture_external_type];h.texel_format=[S.keywords.r8unorm,S.keywords.r8snorm,S.keywords.r8uint,S.keywords.r8sint,S.keywords.r16uint,S.keywords.r16sint,S.keywords.r16float,S.keywords.rg8unorm,S.keywords.rg8snorm,S.keywords.rg8uint,S.keywords.rg8sint,S.keywords.r32uint,S.keywords.r32sint,S.keywords.r32float,S.keywords.rg16uint,S.keywords.rg16sint,S.keywords.rg16float,S.keywords.rgba8unorm,S.keywords.rgba8unorm_srgb,S.keywords.rgba8snorm,S.keywords.rgba8uint,S.keywords.rgba8sint,S.keywords.bgra8unorm,S.keywords.bgra8unorm_srgb,S.keywords.rgb10a2unorm,S.keywords.rg11b10float,S.keywords.rg32uint,S.keywords.rg32sint,S.keywords.rg32float,S.keywords.rgba16uint,S.keywords.rgba16sint,S.keywords.rgba16float,S.keywords.rgba32uint,S.keywords.rgba32sint,S.keywords.rgba32float];h.const_literal=[S.tokens.int_literal,S.tokens.uint_literal,S.tokens.decimal_float_literal,S.tokens.hex_float_literal,S.keywords.true,S.keywords.false];h.literal_or_ident=[S.tokens.ident,S.tokens.int_literal,S.tokens.uint_literal,S.tokens.decimal_float_literal,S.tokens.hex_float_literal];h.element_count_expression=[S.tokens.int_literal,S.tokens.uint_literal,S.tokens.ident];h.template_types=[S.keywords.vec2,S.keywords.vec3,S.keywords.vec4,S.keywords.mat2x2,S.keywords.mat2x3,S.keywords.mat2x4,S.keywords.mat3x2,S.keywords.mat3x3,S.keywords.mat3x4,S.keywords.mat4x2,S.keywords.mat4x3,S.keywords.mat4x4,S.keywords.atomic,S.keywords.bitcast,...S.any_texture_type];h.attribute_name=[S.tokens.ident,S.keywords.block];h.assignment_operators=[S.tokens.equal,S.tokens.plus_equal,S.tokens.minus_equal,S.tokens.times_equal,S.tokens.division_equal,S.tokens.modulo_equal,S.tokens.and_equal,S.tokens.or_equal,S.tokens.xor_equal,S.tokens.shift_right_equal,S.tokens.shift_left_equal];h.increment_operators=[S.tokens.plus_plus,S.tokens.minus_minus];class uc{constructor(e,r,n){this.type=e,this.lexeme=r,this.line=n}toString(){return this.lexeme}isTemplateType(){return h.template_types.indexOf(this.type)!=-1}isArrayType(){return this.type==h.keywords.array}isArrayOrTemplateType(){return this.isArrayType()||this.isTemplateType()}}class bg{constructor(e){this._tokens=[],this._start=0,this._current=0,this._line=1,this._source=e??""}scanTokens(){for(;!this._isAtEnd();)if(this._start=this._current,!this.scanToken())throw`Invalid syntax at line ${this._line}`;return this._tokens.push(new uc(h.eof,"",this._line)),this._tokens}scanToken(){let e=this._advance();if(e==`
`)return this._line++,!0;if(this._isWhitespace(e))return!0;if(e=="/"){if(this._peekAhead()=="/"){for(;e!=`
`;){if(this._isAtEnd())return!0;e=this._advance()}return this._line++,!0}else if(this._peekAhead()=="*"){this._advance();let n=1;for(;n>0;){if(this._isAtEnd())return!0;if(e=this._advance(),e==`
`)this._line++;else if(e=="*"){if(this._peekAhead()=="/"&&(this._advance(),n--,n==0))return!0}else e=="/"&&this._peekAhead()=="*"&&(this._advance(),n++)}return!0}}let r=h.none;for(;;){let n=this._findType(e);const o=this._peekAhead();if(e==">"&&(o==">"||o=="=")){let i=!1,s=this._tokens.length-1;for(let a=0;a<5&&s>=0;++a,--s)if(this._tokens[s].type===h.tokens.less_than){s>0&&this._tokens[s-1].isArrayOrTemplateType()&&(i=!0);break}if(i)return this._addToken(n),!0}if(n===h.none){let i=e,s=0;const a=2;for(let l=0;l<a;++l)if(i+=this._peekAhead(l),n=this._findType(i),n!==h.none){s=l;break}if(n===h.none)return r===h.none?!1:(this._current--,this._addToken(r),!0);e=i,this._current+=s+1}if(r=n,this._isAtEnd())break;e+=this._advance()}return r===h.none?!1:(this._addToken(r),!0)}_findType(e){for(const r in h.keywords){const n=h.keywords[r];if(this._match(e,n.rule))return n}for(const r in h.tokens){const n=h.tokens[r];if(this._match(e,n.rule))return n}return h.none}_match(e,r){if(typeof r=="string"){if(r==e)return!0}else{const n=r.exec(e);if(n&&n.index==0&&n[0]==e)return!0}return!1}_isAtEnd(){return this._current>=this._source.length}_isWhitespace(e){return e==" "||e=="	"||e=="\r"}_advance(e=0){let r=this._source[this._current];return e=e||0,e++,this._current+=e,r}_peekAhead(e=0){return e=e||0,this._current+e>=this._source.length?"\0":this._source[this._current+e]}_addToken(e){const r=this._source.substring(this._start,this._current);this._tokens.push(new uc(e,r,this._line))}}class wg{constructor(){this._tokens=[],this._current=0,this._context=new Yv}parse(e){this._initialize(e);let r=[];for(;!this._isAtEnd();){const n=this._global_decl_or_directive();if(!n)break;r.push(n)}return r}_initialize(e){if(e)if(typeof e=="string"){const r=new bg(e);this._tokens=r.scanTokens()}else this._tokens=e;else this._tokens=[];this._current=0}_error(e,r){return console.error(e,r),{token:e,message:r,toString:function(){return`${r}`}}}_isAtEnd(){return this._current>=this._tokens.length||this._peek().type==h.eof}_match(e){if(e instanceof m)return this._check(e)?(this._advance(),!0):!1;for(let r=0,n=e.length;r<n;++r){const o=e[r];if(this._check(o))return this._advance(),!0}return!1}_consume(e,r){if(this._check(e))return this._advance();throw this._error(this._peek(),r)}_check(e){if(this._isAtEnd())return!1;const r=this._peek();if(e instanceof Array){let n=r.type;return e.indexOf(n)!=-1}return r.type==e}_advance(){return this._isAtEnd()||this._current++,this._previous()}_peek(){return this._tokens[this._current]}_previous(){return this._tokens[this._current-1]}_global_decl_or_directive(){for(;this._match(h.tokens.semicolon)&&!this._isAtEnd(););if(this._match(h.keywords.alias)){const r=this._type_alias();return this._consume(h.tokens.semicolon,"Expected ';'"),r}if(this._match(h.keywords.enable)){const r=this._enable_directive();return this._consume(h.tokens.semicolon,"Expected ';'"),r}const e=this._attribute();if(this._check(h.keywords.var)){const r=this._global_variable_decl();return r!=null&&(r.attributes=e),this._consume(h.tokens.semicolon,"Expected ';'."),r}if(this._check(h.keywords.override)){const r=this._override_variable_decl();return r!=null&&(r.attributes=e),this._consume(h.tokens.semicolon,"Expected ';'."),r}if(this._check(h.keywords.let)){const r=this._global_let_decl();return r!=null&&(r.attributes=e),this._consume(h.tokens.semicolon,"Expected ';'."),r}if(this._check(h.keywords.const)){const r=this._global_const_decl();return r!=null&&(r.attributes=e),this._consume(h.tokens.semicolon,"Expected ';'."),r}if(this._check(h.keywords.struct)){const r=this._struct_decl();return r!=null&&(r.attributes=e),r}if(this._check(h.keywords.fn)){const r=this._function_decl();return r!=null&&(r.attributes=e),r}return null}_function_decl(){if(!this._match(h.keywords.fn))return null;const e=this._consume(h.tokens.ident,"Expected function name.").toString();this._consume(h.tokens.paren_left,"Expected '(' for function arguments.");const r=[];if(!this._check(h.tokens.paren_right))do{if(this._check(h.tokens.paren_right))break;const i=this._attribute(),s=this._consume(h.tokens.ident,"Expected argument name.").toString();this._consume(h.tokens.colon,"Expected ':' for argument type.");const a=this._attribute(),l=this._type_decl();l!=null&&(l.attributes=a,r.push(new yg(s,l,i)))}while(this._match(h.tokens.comma));this._consume(h.tokens.paren_right,"Expected ')' after function arguments.");let n=null;if(this._match(h.tokens.arrow)){const i=this._attribute();n=this._type_decl(),n!=null&&(n.attributes=i)}const o=this._compound_statement();return new Us(e,r,n,o)}_compound_statement(){const e=[];for(this._consume(h.tokens.brace_left,"Expected '{' for block.");!this._check(h.tokens.brace_right);){const r=this._statement();r!==null&&e.push(r)}return this._consume(h.tokens.brace_right,"Expected '}' for block."),e}_statement(){for(;this._match(h.tokens.semicolon)&&!this._isAtEnd(););if(this._check(h.keywords.if))return this._if_statement();if(this._check(h.keywords.switch))return this._switch_statement();if(this._check(h.keywords.loop))return this._loop_statement();if(this._check(h.keywords.for))return this._for_statement();if(this._check(h.keywords.while))return this._while_statement();if(this._check(h.keywords.continuing))return this._continuing_statement();if(this._check(h.keywords.static_assert))return this._static_assert_statement();if(this._check(h.tokens.brace_left))return this._compound_statement();let e=null;return this._check(h.keywords.return)?e=this._return_statement():this._check([h.keywords.var,h.keywords.let,h.keywords.const])?e=this._variable_statement():this._match(h.keywords.discard)?e=new cg:this._match(h.keywords.break)?e=new ug:this._match(h.keywords.continue)?e=new fg:e=this._increment_decrement_statement()||this._func_call_statement()||this._assignment_statement(),e!=null&&this._consume(h.tokens.semicolon,"Expected ';' after statement."),e}_static_assert_statement(){if(!this._match(h.keywords.static_assert))return null;let e=this._optional_paren_expression();return new Jv(e)}_while_statement(){if(!this._match(h.keywords.while))return null;let e=this._optional_paren_expression();const r=this._compound_statement();return new Zv(e,r)}_continuing_statement(){if(!this._match(h.keywords.continuing))return null;const e=this._compound_statement();return new Qv(e)}_for_statement(){if(!this._match(h.keywords.for))return null;this._consume(h.tokens.paren_left,"Expected '('.");const e=this._check(h.tokens.semicolon)?null:this._for_init();this._consume(h.tokens.semicolon,"Expected ';'.");const r=this._check(h.tokens.semicolon)?null:this._short_circuit_or_expression();this._consume(h.tokens.semicolon,"Expected ';'.");const n=this._check(h.tokens.paren_right)?null:this._for_increment();this._consume(h.tokens.paren_right,"Expected ')'.");const o=this._compound_statement();return new tg(e,r,n,o)}_for_init(){return this._variable_statement()||this._func_call_statement()||this._assignment_statement()}_for_increment(){return this._func_call_statement()||this._increment_decrement_statement()||this._assignment_statement()}_variable_statement(){if(this._check(h.keywords.var)){const e=this._variable_decl();if(e===null)throw this._error(this._peek(),"Variable declaration expected.");let r=null;return this._match(h.tokens.equal)&&(r=this._short_circuit_or_expression()),new Sr(e.name,e.type,e.storage,e.access,r)}if(this._match(h.keywords.let)){const e=this._consume(h.tokens.ident,"Expected name for let.").toString();let r=null;if(this._match(h.tokens.colon)){const o=this._attribute();r=this._type_decl(),r!=null&&(r.attributes=o)}this._consume(h.tokens.equal,"Expected '=' for let.");const n=this._short_circuit_or_expression();return new $s(e,r,null,null,n)}if(this._match(h.keywords.const)){const e=this._consume(h.tokens.ident,"Expected name for const.").toString();let r=null;if(this._match(h.tokens.colon)){const o=this._attribute();r=this._type_decl(),r!=null&&(r.attributes=o)}this._consume(h.tokens.equal,"Expected '=' for const.");const n=this._short_circuit_or_expression();return new oc(e,r,null,null,n)}return null}_increment_decrement_statement(){const e=this._current,r=this._unary_expression();if(r==null)return null;if(!this._check(h.increment_operators))return this._current=e,null;const n=this._consume(h.increment_operators,"Expected increment operator");return new eg(n.type===h.tokens.plus_plus?fn.increment:fn.decrement,r)}_assignment_statement(){let e=null;if(this._check(h.tokens.brace_right))return null;let r=this._match(h.tokens.underscore);if(r||(e=this._unary_expression()),!r&&e==null)return null;const n=this._consume(h.assignment_operators,"Expected assignment operator."),o=this._short_circuit_or_expression();return new rg(ho.parse(n.lexeme),e,o)}_func_call_statement(){if(!this._check(h.tokens.ident))return null;const e=this._current,r=this._consume(h.tokens.ident,"Expected function name."),n=this._argument_expression_list();return n===null?(this._current=e,null):new ng(r.lexeme,n)}_loop_statement(){if(!this._match(h.keywords.loop))return null;this._consume(h.tokens.brace_left,"Expected '{' for loop.");const e=[];let r=this._statement();for(;r!==null;){if(Array.isArray(r))for(let o of r)e.push(o);else e.push(r);r=this._statement()}let n=null;return this._match(h.keywords.continuing)&&(n=this._compound_statement()),this._consume(h.tokens.brace_right,"Expected '}' for loop."),new og(e,n)}_switch_statement(){if(!this._match(h.keywords.switch))return null;const e=this._optional_paren_expression();this._consume(h.tokens.brace_left,"Expected '{' for switch.");const r=this._switch_body();if(r==null||r.length==0)throw this._error(this._previous(),"Expected 'case' or 'default'.");return this._consume(h.tokens.brace_right,"Expected '}' for switch."),new ig(e,r)}_switch_body(){const e=[];if(this._match(h.keywords.case)){const r=this._case_selectors();this._match(h.tokens.colon),this._consume(h.tokens.brace_left,"Exected '{' for switch case.");const n=this._case_body();this._consume(h.tokens.brace_right,"Exected '}' for switch case."),e.push(new gg(r,n))}if(this._match(h.keywords.default)){this._match(h.tokens.colon),this._consume(h.tokens.brace_left,"Exected '{' for switch default.");const r=this._case_body();this._consume(h.tokens.brace_right,"Exected '}' for switch default."),e.push(new mg(r))}if(this._check([h.keywords.default,h.keywords.case])){const r=this._switch_body();e.push(r[0])}return e}_case_selectors(){var e,r,n,o;const i=[(r=(e=this._shift_expression())===null||e===void 0?void 0:e.evaluate(this._context).toString())!==null&&r!==void 0?r:""];for(;this._match(h.tokens.comma);)i.push((o=(n=this._shift_expression())===null||n===void 0?void 0:n.evaluate(this._context).toString())!==null&&o!==void 0?o:"");return i}_case_body(){if(this._match(h.keywords.fallthrough))return this._consume(h.tokens.semicolon,"Expected ';'"),[];let e=this._statement();if(e==null)return[];e instanceof Array||(e=[e]);const r=this._case_body();return r.length==0?e:[...e,r[0]]}_if_statement(){if(!this._match(h.keywords.if))return null;const e=this._optional_paren_expression(),r=this._compound_statement();let n=[];this._match_elseif()&&(n=this._elseif_statement(n));let o=null;return this._match(h.keywords.else)&&(o=this._compound_statement()),new sg(e,r,n,o)}_match_elseif(){return this._tokens[this._current].type===h.keywords.else&&this._tokens[this._current+1].type===h.keywords.if?(this._advance(),this._advance(),!0):!1}_elseif_statement(e=[]){const r=this._optional_paren_expression(),n=this._compound_statement();return e.push(new _g(r,n)),this._match_elseif()&&this._elseif_statement(e),e}_return_statement(){if(!this._match(h.keywords.return))return null;const e=this._short_circuit_or_expression();return new ag(e)}_short_circuit_or_expression(){let e=this._short_circuit_and_expr();for(;this._match(h.tokens.or_or);)e=new Ne(this._previous().toString(),e,this._short_circuit_and_expr());return e}_short_circuit_and_expr(){let e=this._inclusive_or_expression();for(;this._match(h.tokens.and_and);)e=new Ne(this._previous().toString(),e,this._inclusive_or_expression());return e}_inclusive_or_expression(){let e=this._exclusive_or_expression();for(;this._match(h.tokens.or);)e=new Ne(this._previous().toString(),e,this._exclusive_or_expression());return e}_exclusive_or_expression(){let e=this._and_expression();for(;this._match(h.tokens.xor);)e=new Ne(this._previous().toString(),e,this._and_expression());return e}_and_expression(){let e=this._equality_expression();for(;this._match(h.tokens.and);)e=new Ne(this._previous().toString(),e,this._equality_expression());return e}_equality_expression(){const e=this._relational_expression();return this._match([h.tokens.equal_equal,h.tokens.not_equal])?new Ne(this._previous().toString(),e,this._relational_expression()):e}_relational_expression(){let e=this._shift_expression();for(;this._match([h.tokens.less_than,h.tokens.greater_than,h.tokens.less_than_equal,h.tokens.greater_than_equal]);)e=new Ne(this._previous().toString(),e,this._shift_expression());return e}_shift_expression(){let e=this._additive_expression();for(;this._match([h.tokens.shift_left,h.tokens.shift_right]);)e=new Ne(this._previous().toString(),e,this._additive_expression());return e}_additive_expression(){let e=this._multiplicative_expression();for(;this._match([h.tokens.plus,h.tokens.minus]);)e=new Ne(this._previous().toString(),e,this._multiplicative_expression());return e}_multiplicative_expression(){let e=this._unary_expression();for(;this._match([h.tokens.star,h.tokens.forward_slash,h.tokens.modulo]);)e=new Ne(this._previous().toString(),e,this._unary_expression());return e}_unary_expression(){return this._match([h.tokens.minus,h.tokens.bang,h.tokens.tilde,h.tokens.star,h.tokens.and])?new vg(this._previous().toString(),this._unary_expression()):this._singular_expression()}_singular_expression(){const e=this._primary_expression(),r=this._postfix_expression();return r&&(e.postfix=r),e}_postfix_expression(){if(this._match(h.tokens.bracket_left)){const e=this._short_circuit_or_expression();this._consume(h.tokens.bracket_right,"Expected ']'.");const r=this._postfix_expression();return r&&(e.postfix=r),e}if(this._match(h.tokens.period)){const e=this._consume(h.tokens.ident,"Expected member name."),r=this._postfix_expression(),n=new ic(e.lexeme);return r&&(n.postfix=r),n}return null}_getStruct(e){return this._context.aliases.has(e)?this._context.aliases.get(e).type:this._context.structs.has(e)?this._context.structs.get(e):null}_primary_expression(){if(this._match(h.tokens.ident)){const n=this._previous().toString();if(this._check(h.tokens.paren_left)){const o=this._argument_expression_list(),i=this._getStruct(n);return i!=null?new Bn(i,o):new Gf(n,o)}if(this._context.constants.has(n)){const o=this._context.constants.get(n);return new sc(n,o.value)}return new Wf(n)}if(this._match(h.const_literal))return new ac(parseFloat(this._previous().toString()));if(this._check(h.tokens.paren_left))return this._paren_expression();if(this._match(h.keywords.bitcast)){this._consume(h.tokens.less_than,"Expected '<'.");const n=this._type_decl();this._consume(h.tokens.greater_than,"Expected '>'.");const o=this._paren_expression();return new hg(n,o)}const e=this._type_decl(),r=this._argument_expression_list();return new pg(e,r)}_argument_expression_list(){if(!this._match(h.tokens.paren_left))return null;const e=[];do{if(this._check(h.tokens.paren_right))break;const r=this._short_circuit_or_expression();e.push(r)}while(this._match(h.tokens.comma));return this._consume(h.tokens.paren_right,"Expected ')' for agument list"),e}_optional_paren_expression(){this._match(h.tokens.paren_left);const e=this._short_circuit_or_expression();return this._match(h.tokens.paren_right),new lc([e])}_paren_expression(){this._consume(h.tokens.paren_left,"Expected '('.");const e=this._short_circuit_or_expression();return this._consume(h.tokens.paren_right,"Expected ')'."),new lc([e])}_struct_decl(){if(!this._match(h.keywords.struct))return null;const e=this._consume(h.tokens.ident,"Expected name for struct.").toString();this._consume(h.tokens.brace_left,"Expected '{' for struct body.");const r=[];for(;!this._check(h.tokens.brace_right);){const o=this._attribute(),i=this._consume(h.tokens.ident,"Expected variable name.").toString();this._consume(h.tokens.colon,"Expected ':' for struct member type.");const s=this._attribute(),a=this._type_decl();a!=null&&(a.attributes=s),this._check(h.tokens.brace_right)?this._match(h.tokens.comma):this._consume(h.tokens.comma,"Expected ',' for struct member."),r.push(new xg(i,a,o))}this._consume(h.tokens.brace_right,"Expected '}' after struct body.");const n=new xr(e,r);return this._context.structs.set(e,n),n}_global_variable_decl(){const e=this._variable_decl();return e&&this._match(h.tokens.equal)&&(e.value=this._const_expression()),e}_override_variable_decl(){const e=this._override_decl();return e&&this._match(h.tokens.equal)&&(e.value=this._const_expression()),e}_global_const_decl(){if(!this._match(h.keywords.const))return null;const e=this._consume(h.tokens.ident,"Expected variable name");let r=null;if(this._match(h.tokens.colon)){const i=this._attribute();r=this._type_decl(),r!=null&&(r.attributes=i)}let n=null;if(this._match(h.tokens.equal)){const i=this._short_circuit_or_expression();if(i instanceof Bn)n=i;else if(i instanceof sc&&i.initializer instanceof Bn)n=i.initializer;else try{const s=i.evaluate(this._context);n=new ac(s)}catch{n=i}}const o=new oc(e.toString(),r,"","",n);return this._context.constants.set(o.name,o),o}_global_let_decl(){if(!this._match(h.keywords.let))return null;const e=this._consume(h.tokens.ident,"Expected variable name");let r=null;if(this._match(h.tokens.colon)){const o=this._attribute();r=this._type_decl(),r!=null&&(r.attributes=o)}let n=null;return this._match(h.tokens.equal)&&(n=this._const_expression()),new $s(e.toString(),r,"","",n)}_const_expression(){if(this._match(h.const_literal))return new ic(this._previous().toString());const e=this._type_decl();this._consume(h.tokens.paren_left,"Expected '('.");let r=[];for(;!this._check(h.tokens.paren_right)&&(r.push(this._const_expression()),!!this._check(h.tokens.comma));)this._advance();return this._consume(h.tokens.paren_right,"Expected ')'."),new Bn(e,r)}_variable_decl(){if(!this._match(h.keywords.var))return null;let e="",r="";this._match(h.tokens.less_than)&&(e=this._consume(h.storage_class,"Expected storage_class.").toString(),this._match(h.tokens.comma)&&(r=this._consume(h.access_mode,"Expected access_mode.").toString()),this._consume(h.tokens.greater_than,"Expected '>'."));const n=this._consume(h.tokens.ident,"Expected variable name");let o=null;if(this._match(h.tokens.colon)){const i=this._attribute();o=this._type_decl(),o!=null&&(o.attributes=i)}return new Sr(n.toString(),o,e,r,null)}_override_decl(){if(!this._match(h.keywords.override))return null;const e=this._consume(h.tokens.ident,"Expected variable name");let r=null;if(this._match(h.tokens.colon)){const n=this._attribute();r=this._type_decl(),r!=null&&(r.attributes=n)}return new Bf(e.toString(),r,null)}_enable_directive(){const e=this._consume(h.tokens.ident,"identity expected.");return new lg(e.toString())}_type_alias(){const e=this._consume(h.tokens.ident,"identity expected.");this._consume(h.tokens.equal,"Expected '=' for type alias.");let r=this._type_decl();if(r===null)throw this._error(this._peek(),"Expected Type for Alias.");this._context.aliases.has(r.name)&&(r=this._context.aliases.get(r.name).type);const n=new qf(e.toString(),r);return this._context.aliases.set(n.name,n),n}_type_decl(){if(this._check([h.tokens.ident,...h.texel_format,h.keywords.bool,h.keywords.f32,h.keywords.i32,h.keywords.u32])){const n=this._advance(),o=n.toString();return this._context.structs.has(o)?this._context.structs.get(o):this._context.aliases.has(o)?this._context.aliases.get(o).type:new Lr(n.toString())}let e=this._texture_sampler_types();if(e)return e;if(this._check(h.template_types)){let n=this._advance().toString(),o=null,i=null;return this._match(h.tokens.less_than)&&(o=this._type_decl(),i=null,this._match(h.tokens.comma)&&(i=this._consume(h.access_mode,"Expected access_mode for pointer").toString()),this._consume(h.tokens.greater_than,"Expected '>' for type.")),new Uf(n,o,i)}if(this._match(h.keywords.ptr)){let n=this._previous().toString();this._consume(h.tokens.less_than,"Expected '<' for pointer.");const o=this._consume(h.storage_class,"Expected storage_class for pointer");this._consume(h.tokens.comma,"Expected ',' for pointer.");const i=this._type_decl();let s=null;return this._match(h.tokens.comma)&&(s=this._consume(h.access_mode,"Expected access_mode for pointer").toString()),this._consume(h.tokens.greater_than,"Expected '>' for pointer."),new dg(n,o.toString(),i,s)}const r=this._attribute();if(this._match(h.keywords.array)){let n=null,o=-1;const i=this._previous();if(this._match(h.tokens.less_than)){n=this._type_decl(),this._context.aliases.has(n.name)&&(n=this._context.aliases.get(n.name).type);let s="";this._match(h.tokens.comma)&&(s=this._shift_expression().evaluate(this._context).toString()),this._consume(h.tokens.greater_than,"Expected '>' for array."),o=s?parseInt(s):0}return new $f(i.toString(),r,n,o)}return null}_texture_sampler_types(){if(this._match(h.sampler_type))return new Hn(this._previous().toString(),null,null);if(this._match(h.depth_texture_type))return new Hn(this._previous().toString(),null,null);if(this._match(h.sampled_texture_type)||this._match(h.multisampled_texture_type)){const e=this._previous();this._consume(h.tokens.less_than,"Expected '<' for sampler type.");const r=this._type_decl();return this._consume(h.tokens.greater_than,"Expected '>' for sampler type."),new Hn(e.toString(),r,null)}if(this._match(h.storage_texture_type)){const e=this._previous();this._consume(h.tokens.less_than,"Expected '<' for sampler type.");const r=this._consume(h.texel_format,"Invalid texel format.").toString();this._consume(h.tokens.comma,"Expected ',' after texel format.");const n=this._consume(h.access_mode,"Expected access mode for storage texture type.").toString();return this._consume(h.tokens.greater_than,"Expected '>' for sampler type."),new Hn(e.toString(),r,n)}return null}_attribute(){let e=[];for(;this._match(h.tokens.attr);){const r=this._consume(h.attribute_name,"Expected attribute name"),n=new cc(r.toString(),null);if(this._match(h.tokens.paren_left)){if(n.value=this._consume(h.literal_or_ident,"Expected attribute value").toString(),this._check(h.tokens.comma)){this._advance();do{const o=this._consume(h.literal_or_ident,"Expected attribute value").toString();n.value instanceof Array||(n.value=[n.value]),n.value.push(o)}while(this._match(h.tokens.comma))}this._consume(h.tokens.paren_right,"Expected ')'")}e.push(n)}for(;this._match(h.tokens.attr_left);){if(!this._check(h.tokens.attr_right))do{const r=this._consume(h.attribute_name,"Expected attribute name"),n=new cc(r.toString(),null);if(this._match(h.tokens.paren_left)){if(n.value=[this._consume(h.literal_or_ident,"Expected attribute value").toString()],this._check(h.tokens.comma)){this._advance();do{const o=this._consume(h.literal_or_ident,"Expected attribute value").toString();n.value.push(o)}while(this._match(h.tokens.comma))}this._consume(h.tokens.paren_right,"Expected ')'")}e.push(n)}while(this._match(h.tokens.comma));this._consume(h.tokens.attr_right,"Expected ']]' after attribute declarations")}return e.length==0?null:e}}class sn{constructor(e,r){this.name=e,this.attributes=r,this.size=0}get isArray(){return!1}get isStruct(){return!1}get isTemplate(){return!1}}class fc{constructor(e,r,n){this.name=e,this.type=r,this.attributes=n,this.offset=0,this.size=0}get isArray(){return this.type.isArray}get isStruct(){return this.type.isStruct}get isTemplate(){return this.type.isTemplate}get align(){return this.type.isStruct?this.type.align:0}get members(){return this.type.isStruct?this.type.members:null}get format(){return this.type.isArray?this.type.format:this.type.isTemplate?this.type.format:null}get count(){return this.type.isArray?this.type.count:0}get stride(){return this.type.isArray?this.type.stride:this.size}}class Vo extends sn{constructor(e,r){super(e,r),this.members=[],this.align=0}get isStruct(){return!0}}class is extends sn{constructor(e,r){super(e,r),this.count=0,this.stride=0}get isArray(){return!0}}class dc extends sn{constructor(e,r,n,o){super(e,n),this.format=r,this.access=o}get isTemplate(){return!0}}var Ht;(function(t){t[t.Uniform=0]="Uniform",t[t.Storage=1]="Storage",t[t.Texture=2]="Texture",t[t.Sampler=3]="Sampler",t[t.StorageTexture=4]="StorageTexture"})(Ht||(Ht={}));class Lo{constructor(e,r,n,o,i,s,a){this.name=e,this.type=r,this.group=n,this.binding=o,this.attributes=i,this.resourceType=s,this.access=a}get isArray(){return this.type.isArray}get isStruct(){return this.type.isStruct}get isTemplate(){return this.type.isTemplate}get size(){return this.type.size}get align(){return this.type.isStruct?this.type.align:0}get members(){return this.type.isStruct?this.type.members:null}get format(){return this.type.isArray?this.type.format:this.type.isTemplate?this.type.format:null}get count(){return this.type.isArray?this.type.count:0}get stride(){return this.type.isArray?this.type.stride:this.size}}class kg{constructor(e,r){this.name=e,this.type=r}}class Do{constructor(e,r){this.align=e,this.size=r}}class Sg{constructor(e,r,n,o){this.name=e,this.type=r,this.locationType=n,this.location=o,this.interpolation=null}}class hc{constructor(e,r,n,o){this.name=e,this.type=r,this.locationType=n,this.location=o}}class Cg{constructor(e,r=null){this.stage=null,this.inputs=[],this.outputs=[],this.resources=[],this.name=e,this.stage=r}}class Eg{constructor(){this.vertex=[],this.fragment=[],this.compute=[]}}class Ag{constructor(e,r,n,o){this.name=e,this.type=r,this.attributes=n,this.id=o}}class zg{constructor(e){this.resources=null,this.node=e}}class Ue{constructor(e){this.uniforms=[],this.storage=[],this.textures=[],this.samplers=[],this.aliases=[],this.overrides=[],this.structs=[],this.entry=new Eg,this._types=new Map,this._functions=new Map,e&&this.update(e)}_isStorageTexture(e){return e.name=="texture_storage_1d"||e.name=="texture_storage_2d"||e.name=="texture_storage_2d_array"||e.name=="texture_storage_3d"}update(e){const n=new wg().parse(e);for(const o of n)o instanceof Us&&this._functions.set(o.name,new zg(o));for(const o of n){if(o instanceof xr){const i=this._getTypeInfo(o,null);i instanceof Vo&&this.structs.push(i);continue}if(o instanceof qf){this.aliases.push(this._getAliasInfo(o));continue}if(o instanceof Bf){const i=o,s=this._getAttributeNum(i.attributes,"id",0),a=i.type!=null?this._getTypeInfo(i.type,i.attributes):null;this.overrides.push(new Ag(i.name,a,i.attributes,s));continue}if(this._isUniformVar(o)){const i=o,s=this._getAttributeNum(i.attributes,"group",0),a=this._getAttributeNum(i.attributes,"binding",0),l=this._getTypeInfo(i.type,i.attributes),c=new Lo(i.name,l,s,a,i.attributes,Ht.Uniform,i.access);this.uniforms.push(c);continue}if(this._isStorageVar(o)){const i=o,s=this._getAttributeNum(i.attributes,"group",0),a=this._getAttributeNum(i.attributes,"binding",0),l=this._getTypeInfo(i.type,i.attributes),c=this._isStorageTexture(l),u=new Lo(i.name,l,s,a,i.attributes,c?Ht.StorageTexture:Ht.Storage,i.access);this.storage.push(u);continue}if(this._isTextureVar(o)){const i=o,s=this._getAttributeNum(i.attributes,"group",0),a=this._getAttributeNum(i.attributes,"binding",0),l=this._getTypeInfo(i.type,i.attributes),c=this._isStorageTexture(l),u=new Lo(i.name,l,s,a,i.attributes,c?Ht.StorageTexture:Ht.Texture,i.access);c?this.storage.push(u):this.textures.push(u);continue}if(this._isSamplerVar(o)){const i=o,s=this._getAttributeNum(i.attributes,"group",0),a=this._getAttributeNum(i.attributes,"binding",0),l=this._getTypeInfo(i.type,i.attributes),c=new Lo(i.name,l,s,a,i.attributes,Ht.Sampler,i.access);this.samplers.push(c);continue}if(o instanceof Us){const i=this._getAttribute(o,"vertex"),s=this._getAttribute(o,"fragment"),a=this._getAttribute(o,"compute"),l=i||s||a;if(l){const c=new Cg(o.name,l==null?void 0:l.name);c.inputs=this._getInputs(o.args),c.outputs=this._getOutputs(o.returnType),c.resources=this._findResources(o),this.entry[l.name].push(c)}continue}}}_findResource(e){for(const r of this.uniforms)if(r.name==e)return r;for(const r of this.storage)if(r.name==e)return r;for(const r of this.textures)if(r.name==e)return r;for(const r of this.samplers)if(r.name==e)return r;return null}_findResources(e){const r=[],n=this,o=[];return e.search(i=>{if(i instanceof ai)o.push({});else if(i instanceof li)o.pop();else if(i instanceof Sr){if(o.length>0){const s=i;o[o.length-1][s.name]=s}}else if(i instanceof $s){if(o.length>0){const s=i;o[o.length-1][s.name]=s}}else if(i instanceof Wf){const s=i;if(o.length>0&&o[o.length-1][s.name])return;const a=n._findResource(s.name);a&&r.push(a)}else if(i instanceof Gf){const s=i,a=n._functions.get(s.name);a&&(a.resources===null&&(a.resources=n._findResources(a.node)),r.push(...a.resources))}}),[...new Map(r.map(i=>[i.name,i])).values()]}getBindGroups(){const e=[];function r(n,o){n>=e.length&&(e.length=n+1),e[n]===void 0&&(e[n]=[]),o>=e[n].length&&(e[n].length=o+1)}for(const n of this.uniforms){r(n.group,n.binding);const o=e[n.group];o[n.binding]=n}for(const n of this.storage){r(n.group,n.binding);const o=e[n.group];o[n.binding]=n}for(const n of this.textures){r(n.group,n.binding);const o=e[n.group];o[n.binding]=n}for(const n of this.samplers){r(n.group,n.binding);const o=e[n.group];o[n.binding]=n}return e}_getOutputs(e,r=void 0){if(r===void 0&&(r=[]),e instanceof xr)this._getStructOutputs(e,r);else{const n=this._getOutputInfo(e);n!==null&&r.push(n)}return r}_getStructOutputs(e,r){for(const n of e.members)if(n.type instanceof xr)this._getStructOutputs(n.type,r);else{const o=this._getAttribute(n,"location")||this._getAttribute(n,"builtin");if(o!==null){const i=this._getTypeInfo(n.type,n.type.attributes),s=this._parseInt(o.value),a=new hc(n.name,i,o.name,s);r.push(a)}}}_getOutputInfo(e){const r=this._getAttribute(e,"location")||this._getAttribute(e,"builtin");if(r!==null){const n=this._getTypeInfo(e,e.attributes),o=this._parseInt(r.value);return new hc("",n,r.name,o)}return null}_getInputs(e,r=void 0){r===void 0&&(r=[]);for(const n of e)if(n.type instanceof xr)this._getStructInputs(n.type,r);else{const o=this._getInputInfo(n);o!==null&&r.push(o)}return r}_getStructInputs(e,r){for(const n of e.members)if(n.type instanceof xr)this._getStructInputs(n.type,r);else{const o=this._getInputInfo(n);o!==null&&r.push(o)}}_getInputInfo(e){const r=this._getAttribute(e,"location")||this._getAttribute(e,"builtin");if(r!==null){const n=this._getAttribute(e,"interpolation"),o=this._getTypeInfo(e.type,e.attributes),i=this._parseInt(r.value),s=new Sg(e.name,o,r.name,i);return n!==null&&(s.interpolation=this._parseString(n.value)),s}return null}_parseString(e){return e instanceof Array&&(e=e[0]),e}_parseInt(e){e instanceof Array&&(e=e[0]);const r=parseInt(e);return isNaN(r)?e:r}_getAlias(e){for(const r of this.aliases)if(r.name==e)return r.type;return null}_getAliasInfo(e){return new kg(e.name,this._getTypeInfo(e.type,null))}_getTypeInfo(e,r){if(this._types.has(e))return this._types.get(e);if(e instanceof $f){const o=e,i=this._getTypeInfo(o.format,o.attributes),s=new is(o.name,r);return s.format=i,s.count=o.count,this._types.set(e,s),this._updateTypeInfo(s),s}if(e instanceof xr){const o=e,i=new Vo(o.name,r);for(const s of o.members){const a=this._getTypeInfo(s.type,s.attributes);i.members.push(new fc(s.name,a,s.attributes))}return this._types.set(e,i),this._updateTypeInfo(i),i}if(e instanceof Hn){const o=e,i=o.format instanceof Lr,s=o.format?i?this._getTypeInfo(o.format,null):new sn(o.format,null):null,a=new dc(o.name,s,r,o.access);return this._types.set(e,a),this._updateTypeInfo(a),a}if(e instanceof Uf){const o=e,i=o.format?this._getTypeInfo(o.format,null):null,s=new dc(o.name,i,r,o.access);return this._types.set(e,s),this._updateTypeInfo(s),s}const n=new sn(e.name,r);return this._types.set(e,n),this._updateTypeInfo(n),n}_updateTypeInfo(e){var r,n;const o=this._getTypeSize(e);if(e.size=(r=o==null?void 0:o.size)!==null&&r!==void 0?r:0,e instanceof is){const i=this._getTypeSize(e.format);e.stride=(n=i==null?void 0:i.size)!==null&&n!==void 0?n:0,this._updateTypeInfo(e.format)}e instanceof Vo&&this._updateStructInfo(e)}_updateStructInfo(e){var r;let n=0,o=0,i=0,s=0;for(let a=0,l=e.members.length;a<l;++a){const c=e.members[a],u=this._getTypeSize(c);if(!u)continue;(r=this._getAlias(c.type.name))!==null&&r!==void 0||c.type;const f=u.align,d=u.size;n=this._roundUp(f,n+o),o=d,i=n,s=Math.max(s,f),c.offset=n,c.size=d,this._updateTypeInfo(c.type)}e.size=this._roundUp(s,i+o),e.align=s}_getTypeSize(e){var r;if(e==null)return null;const n=this._getAttributeNum(e.attributes,"size",0),o=this._getAttributeNum(e.attributes,"align",0);if(e instanceof fc&&(e=e.type),e instanceof sn){const i=this._getAlias(e.name);i!==null&&(e=i)}{const i=Ue._typeInfo[e.name];if(i!==void 0){const s=e.format==="f16"?2:1;return new Do(Math.max(o,i.align/s),Math.max(n,i.size/s))}}{const i=Ue._typeInfo[e.name.substring(0,e.name.length-1)];if(i){const s=e.name[e.name.length-1]==="h"?2:1;return new Do(Math.max(o,i.align/s),Math.max(n,i.size/s))}}if(e instanceof is){let i=e,s=8,a=8;const l=this._getTypeSize(i.format);l!==null&&(a=l.size,s=l.align);const c=i.count,u=this._getAttributeNum((r=e==null?void 0:e.attributes)!==null&&r!==void 0?r:null,"stride",this._roundUp(s,a));return a=c*u,n&&(a=n),new Do(Math.max(o,s),Math.max(n,a))}if(e instanceof Vo){let i=0,s=0,a=0,l=0,c=0;for(const u of e.members){const f=this._getTypeSize(u.type);f!==null&&(i=Math.max(f.align,i),a=this._roundUp(f.align,a+l),l=f.size,c=a)}return s=this._roundUp(i,c+l),new Do(Math.max(o,i),Math.max(n,s))}return null}_isUniformVar(e){return e instanceof Sr&&e.storage=="uniform"}_isStorageVar(e){return e instanceof Sr&&e.storage=="storage"}_isTextureVar(e){return e instanceof Sr&&e.type!==null&&Ue._textureTypes.indexOf(e.type.name)!=-1}_isSamplerVar(e){return e instanceof Sr&&e.type!==null&&Ue._samplerTypes.indexOf(e.type.name)!=-1}_getAttribute(e,r){const n=e;if(!n||!n.attributes)return null;const o=n.attributes;for(let i of o)if(i.name==r)return i;return null}_getAttributeNum(e,r,n){if(e===null)return n;for(let o of e)if(o.name==r){let i=o!==null&&o.value!==null?o.value:n;return i instanceof Array&&(i=i[0]),typeof i=="number"?i:typeof i=="string"?parseInt(i):n}return n}_roundUp(e,r){return Math.ceil(r/e)*e}}Ue._typeInfo={f16:{align:2,size:2},i32:{align:4,size:4},u32:{align:4,size:4},f32:{align:4,size:4},atomic:{align:4,size:4},vec2:{align:8,size:8},vec3:{align:16,size:12},vec4:{align:16,size:16},mat2x2:{align:8,size:16},mat3x2:{align:8,size:24},mat4x2:{align:8,size:32},mat2x3:{align:16,size:32},mat3x3:{align:16,size:48},mat4x3:{align:16,size:64},mat2x4:{align:16,size:32},mat3x4:{align:16,size:48},mat4x4:{align:16,size:64}};Ue._textureTypes=h.any_texture_type.map(t=>t.name);Ue._samplerTypes=h.sampler_type.map(t=>t.name);function Wr(t,e){return Object.fromEntries(e.map(r=>{const n=Ng(t,r,0);return[r.name,{typeDefinition:n,group:r.group,binding:r.binding,size:n.size}]}))}function Yf(t,e,r){return{fields:Object.fromEntries(e.members.map(o=>[o.name,{offset:o.offset,type:Ra(t,o.type,0)}])),size:e.size,offset:r}}function Tg(t){var e;if(t.name.includes("depth"))return"depth";switch((e=t.format)==null?void 0:e.name){case"f32":return"float";case"i32":return"sint";case"u32":return"uint";default:throw new Error("unknown texture sample type")}}function pc(t){return t.name.includes("2d_array")?"2d-array":t.name.includes("cube_array")?"cube-array":t.name.includes("3d")?"3d":t.name.includes("1d")?"1d":t.name.includes("cube")?"cube":"2d"}function Og(t){switch(t.access){case"read":return"read-only";case"write":return"write-only";case"read_write":return"read-write";default:throw new Error("unknonw storage texture access")}}function Mg(t){return t.name.endsWith("_comparison")?"comparison":"filtering"}function Ig(t,e){const{binding:r,access:n,type:o}=t;switch(t.resourceType){case Ht.Uniform:return{binding:r,visibility:e,buffer:{}};case Ht.Storage:return{binding:r,visibility:e,buffer:{type:n===""||n==="read"?"read-only-storage":"storage"}};case Ht.Texture:{if(o.name==="texture_external")return{binding:r,visibility:e,externalTexture:{}};const i=o.name.includes("multisampled");return{binding:r,visibility:e,texture:{sampleType:Tg(o),viewDimension:pc(o),multisampled:i}}}case Ht.Sampler:return{binding:r,visibility:e,sampler:{type:Mg(o)}};case Ht.StorageTexture:return{binding:r,visibility:e,storageTexture:{access:Og(o),format:o.format.name,viewDimension:pc(o)}};default:throw new Error("unknown resource type")}}function ss(t,e){const r={};for(const n of t)r[n.name]={stage:e,resources:n.resources.map(o=>{const{name:i,group:s}=o;return{name:i,group:s,entry:Ig(o,e)}})};return r}function Rg(t){const e=new Ue(t),r=Object.fromEntries(e.structs.map(u=>[u.name,Yf(e,u,0)])),n=Wr(e,e.uniforms),o=Wr(e,e.storage.filter(u=>u.resourceType===Ht.Storage)),i=Wr(e,e.storage.filter(u=>u.resourceType===Ht.StorageTexture)),s=Wr(e,e.textures.filter(u=>u.type.name!=="texture_external")),a=Wr(e,e.textures.filter(u=>u.type.name==="texture_external")),l=Wr(e,e.samplers),c={...ss(e.entry.vertex,GPUShaderStage.VERTEX),...ss(e.entry.fragment,GPUShaderStage.FRAGMENT),...ss(e.entry.compute,GPUShaderStage.COMPUTE)};return{externalTextures:a,samplers:l,structs:r,storages:o,storageTextures:i,textures:s,uniforms:n,entryPoints:c}}function as(t,e=""){if(!t)throw new Error(e)}function Ng(t,e,r){switch(e.resourceType){case Ht.Uniform:case Ht.Storage:case Ht.StorageTexture:return Ra(t,e.type,r);default:return{size:0,type:e.type.name}}}function Ra(t,e,r){if(e.isArray){as(!e.isStruct,"struct array is invalid"),as(!e.isStruct,"template array is invalid");const n=e;return{size:n.size,elementType:Ra(t,n.format,r),numElements:n.count}}else{if(e.isStruct)return as(!e.isTemplate,"template struct is invalid"),Yf(t,e,r);{const n=e,o=e.isTemplate?`${n.name}<${n.format.name}>`:e.name;return{size:e.size,type:o}}}}const Pg=new Map([[Int8Array,{formats:["sint8","snorm8"],defaultForType:1}],[Uint8Array,{formats:["uint8","unorm8"],defaultForType:1}],[Int16Array,{formats:["sint16","snorm16"],defaultForType:1}],[Uint16Array,{formats:["uint16","unorm16"],defaultForType:1}],[Int32Array,{formats:["sint32","snorm32"],defaultForType:0}],[Uint32Array,{formats:["uint32","unorm32"],defaultForType:0}],[Float32Array,{formats:["float32","float32"],defaultForType:0}]]);new Map([...Pg.entries()].map(([t,{formats:[e,r]}])=>[[e,t],[r,t]]).flat());const jg=`// @group(0) @binding(0) var<uniform> resolution: vec2f;\r
// @group(0) @binding(1) var<uniform> time: f32;\r
// @group(0) @binding(2) var<uniform> mouse: vec2f;\r
// @group(0) @binding(3) var<uniform> zoom: f32;\r
// @group(0) @binding(4) var<uniform> upos: vec3f;\r
// @group(0) @binding(5) var<uniform> urot: vec2f;\r
\r
\r
// psrdnoise3.wgsl\r
\r
//\r
// Authors: Stefan Gustavson (stefan.gustavson@gmail.com)\r
// and Ian McEwan (ijm567@gmail.com)\r
// Version 2022-02-28, published under the MIT license (see below)\r
//\r
// Copyright (c) 2021-2022 Stefan Gustavson and Ian McEwan.\r
//\r
// Permission is hereby granted, free of charge, to any person obtaining a\r
// copy of this software and associated documentation files (the "Software"),\r
// to deal in the Software without restriction, including without limitation\r
// the rights to use, copy, modify, merge, publish, distribute, sublicense,\r
// and/or sell copies of the Software, and to permit persons to whom the\r
// Software is furnished to do so, subject to the following conditions:\r
//\r
// The above copyright notice and this permission notice shall be included\r
// in all copies or substantial portions of the Software.\r
//\r
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\r
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\r
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\r
// DEALINGS IN THE SOFTWARE.\r
//\r
\r
// WGSL lacks overloading of user defined functions, and considering\r
// the unfinished state of the platform I don't trust the dead code\r
// removal, so the functions are named after their argument lists:\r
//\r
//	psrnoise3(x: vec3<f32>, p: vec3<f32>, alpha: f32) -> f32\r
//	psnoise3(x: vec3<f32>, p: vec3<f32>) -> f32\r
//	srnoise3(x: vec3<f32>, alpha: f32) -> f32\r
//	snoise3(x: vec3<f32>) -> f32\r
//	psrdnoise3(x: vec3<f32>, p: vec3<f32>, alpha: f32) -> NG3\r
//	psdnoise3(x: vec3<f32>, p: vec3<f32>) -> NG3\r
//	srdnoise3(x: vec3<f32>, alpha: f32) -> NG3\r
//	sdnoise3(x: vec3<f32>) -> NG3\r
// The struct type NG3 is declared below.\r
\r
// Struct for returning noise and its analytic gradient\r
struct NG3 {\r
	noise: f32,\r
	gradient: vec3<f32>\r
};\r
\r
fn mod289v4f_psrn(i: vec4<f32>) -> vec4<f32> {\r
	return i - floor(i / 289.0) * 289.0;\r
}\r
\r
fn permute289v4f_psrn(i: vec4<f32>) -> vec4<f32>\r
{\r
	var im: vec4<f32> = mod289v4f_psrn(i);\r
	return mod289v4f_psrn((im*34.0 + 10.0)*im);\r
}\r
\r
fn psrnoise3(x: vec3<f32>, p: vec3<f32>, alpha: f32) -> f32\r
{\r
	let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0,  1.0, 1.0, 0.0);\r
	let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\r
\r
	var uvw: vec3<f32>;\r
	var i0: vec3<f32>;\r
	var i1: vec3<f32>;\r
	var i2: vec3<f32>;\r
	var i3: vec3<f32>;\r
	var f0: vec3<f32>;\r
	var gt_: vec3<f32>;\r
	var lt_: vec3<f32>;\r
	var gt: vec3<f32>;\r
	var lt: vec3<f32>;\r
	var o1: vec3<f32>;\r
	var o2: vec3<f32>;\r
	var v0: vec3<f32>;\r
	var v1: vec3<f32>;\r
	var v2: vec3<f32>;\r
	var v3: vec3<f32>;\r
	var x0: vec3<f32>;\r
	var x1: vec3<f32>;\r
	var x2: vec3<f32>;\r
	var x3: vec3<f32>;\r
	\r
	uvw = M * x;\r
	i0 = floor(uvw);\r
	f0 = uvw - i0;\r
	gt_ = step(f0.xyx, f0.yzz);\r
	lt_ = 1.0 - gt_;\r
	gt = vec3<f32>(lt_.z, gt_.xy);\r
	lt = vec3<f32>(lt_.xy, gt_.z);\r
	o1 = min( gt, lt );\r
	o2 = max( gt, lt );\r
	i1 = i0 + o1;\r
	i2 = i0 + o2;\r
	i3 = i0 + vec3<f32>(1.0,1.0,1.0);\r
	v0 = Mi * i0;\r
	v1 = Mi * i1;\r
	v2 = Mi * i2;\r
	v3 = Mi * i3;\r
	x0 = x - v0;\r
	x1 = x - v1;\r
	x2 = x - v2;\r
	x3 = x - v3;\r
	\r
	var vx: vec4<f32>;\r
	var vy: vec4<f32>;\r
	var vz: vec4<f32>;\r
\r
	if(any(p > vec3<f32>(0.0))) {\r
		vx = vec4<f32>(v0.x, v1.x, v2.x, v3.x);\r
		vy = vec4<f32>(v0.y, v1.y, v2.y, v3.y);\r
		vz = vec4<f32>(v0.z, v1.z, v2.z, v3.z);\r
		if(p.x > 0.0) {\r
			vx = vx - floor(vx / p.x) * p.x;\r
		}\r
		if(p.y > 0.0) {\r
			vy = vy - floor(vy / p.y) * p.y;\r
		}\r
		if(p.z > 0.0) {\r
			vz = vz - floor(vz / p.z) * p.z;\r
		}\r
		i0 = floor(M * vec3<f32>(vx.x, vy.x, vz.x) + 0.5);\r
		i1 = floor(M * vec3<f32>(vx.y, vy.y, vz.y) + 0.5);\r
		i2 = floor(M * vec3<f32>(vx.z, vy.z, vz.z) + 0.5);\r
		i3 = floor(M * vec3<f32>(vx.w, vy.w, vz.w) + 0.5);\r
	}\r
	\r
	var hash: vec4<f32>;\r
	var theta: vec4<f32>;\r
	var sz: vec4<f32>;\r
	var psi: vec4<f32>;\r
	var St: vec4<f32>;\r
	var Ct: vec4<f32>;\r
	var sz_: vec4<f32>;\r
\r
	hash = permute289v4f_psrn( permute289v4f_psrn( permute289v4f_psrn( \r
		vec4<f32>(i0.z, i1.z, i2.z, i3.z ))\r
		+ vec4<f32>(i0.y, i1.y, i2.y, i3.y ))\r
		+ vec4<f32>(i0.x, i1.x, i2.x, i3.x ));\r
	theta = hash * 3.883222077;\r
	sz = hash * -0.006920415 + 0.996539792;\r
	psi = hash * 0.108705628;\r
	Ct = cos(theta);\r
	St = sin(theta);\r
	sz_ = sqrt( 1.0 - sz*sz );\r
\r
	var gx: vec4<f32>;\r
	var gy: vec4<f32>;\r
	var gz: vec4<f32>;\r
	var px: vec4<f32>;\r
	var py: vec4<f32>;\r
	var pz: vec4<f32>;\r
	var Sp: vec4<f32>;\r
	var Cp: vec4<f32>;\r
	var Ctp: vec4<f32>;\r
	var qx: vec4<f32>;\r
	var qy: vec4<f32>;\r
	var qz: vec4<f32>;\r
	var Sa: vec4<f32>;\r
	var Ca: vec4<f32>;\r
\r
	if(alpha != 0.0)\r
	{\r
		px = Ct * sz_;\r
		py = St * sz_;\r
		pz = sz;\r
		Sp = sin(psi);\r
		Cp = cos(psi);\r
		Ctp = St*Sp - Ct*Cp;\r
		qx = mix( Ctp*St, Sp, sz);\r
		qy = mix(-Ctp*Ct, Cp, sz);\r
		qz = -(py*Cp + px*Sp);\r
		Sa = vec4<f32>(sin(alpha));\r
		Ca = vec4<f32>(cos(alpha));\r
		gx = Ca*px + Sa*qx;\r
		gy = Ca*py + Sa*qy;\r
		gz = Ca*pz + Sa*qz;\r
	}\r
	else\r
	{\r
		gx = Ct * sz_;\r
		gy = St * sz_;\r
		gz = sz;  \r
	}\r
	\r
	var g0: vec3<f32>;\r
	var g1: vec3<f32>;\r
	var g2: vec3<f32>;\r
	var g3: vec3<f32>;\r
	var w: vec4<f32>;\r
	var w2: vec4<f32>;\r
	var w3: vec4<f32>;\r
	var gdotx: vec4<f32>;\r
	var n: f32;\r
	\r
	g0 = vec3<f32>(gx.x, gy.x, gz.x);\r
	g1 = vec3<f32>(gx.y, gy.y, gz.y);\r
	g2 = vec3<f32>(gx.z, gy.z, gz.z);\r
	g3 = vec3<f32>(gx.w, gy.w, gz.w);\r
	w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\r
	w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\r
	w2 = w * w;\r
	w3 = w2 * w;\r
	gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\r
	n = dot(w3, gdotx);\r
	\r
	return 39.5 * n;\r
}\r
\r
fn psnoise3(x: vec3<f32>, p: vec3<f32>) -> f32\r
{\r
	let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0,  1.0, 1.0, 0.0);\r
	let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\r
\r
	var uvw: vec3<f32>;\r
	var i0: vec3<f32>;\r
	var i1: vec3<f32>;\r
	var i2: vec3<f32>;\r
	var i3: vec3<f32>;\r
	var f0: vec3<f32>;\r
	var gt_: vec3<f32>;\r
	var lt_: vec3<f32>;\r
	var gt: vec3<f32>;\r
	var lt: vec3<f32>;\r
	var o1: vec3<f32>;\r
	var o2: vec3<f32>;\r
	var v0: vec3<f32>;\r
	var v1: vec3<f32>;\r
	var v2: vec3<f32>;\r
	var v3: vec3<f32>;\r
	var x0: vec3<f32>;\r
	var x1: vec3<f32>;\r
	var x2: vec3<f32>;\r
	var x3: vec3<f32>;\r
	\r
	uvw = M * x;\r
	i0 = floor(uvw);\r
	f0 = uvw - i0;\r
	gt_ = step(f0.xyx, f0.yzz);\r
	lt_ = 1.0 - gt_;\r
	gt = vec3<f32>(lt_.z, gt_.xy);\r
	lt = vec3<f32>(lt_.xy, gt_.z);\r
	o1 = min( gt, lt );\r
	o2 = max( gt, lt );\r
	i1 = i0 + o1;\r
	i2 = i0 + o2;\r
	i3 = i0 + vec3<f32>(1.0,1.0,1.0);\r
	v0 = Mi * i0;\r
	v1 = Mi * i1;\r
	v2 = Mi * i2;\r
	v3 = Mi * i3;\r
	x0 = x - v0;\r
	x1 = x - v1;\r
	x2 = x - v2;\r
	x3 = x - v3;\r
	\r
	var vx: vec4<f32>;\r
	var vy: vec4<f32>;\r
	var vz: vec4<f32>;\r
\r
	if(any(p > vec3<f32>(0.0))) {\r
		vx = vec4<f32>(v0.x, v1.x, v2.x, v3.x);\r
		vy = vec4<f32>(v0.y, v1.y, v2.y, v3.y);\r
		vz = vec4<f32>(v0.z, v1.z, v2.z, v3.z);\r
		if(p.x > 0.0) {\r
			vx = vx - floor(vx / p.x) * p.x;\r
		}\r
		if(p.y > 0.0) {\r
			vy = vy - floor(vy / p.y) * p.y;\r
		}\r
		if(p.z > 0.0) {\r
			vz = vz - floor(vz / p.z) * p.z;\r
		}\r
		i0 = floor(M * vec3<f32>(vx.x, vy.x, vz.x) + 0.5);\r
		i1 = floor(M * vec3<f32>(vx.y, vy.y, vz.y) + 0.5);\r
		i2 = floor(M * vec3<f32>(vx.z, vy.z, vz.z) + 0.5);\r
		i3 = floor(M * vec3<f32>(vx.w, vy.w, vz.w) + 0.5);\r
	}\r
	\r
	var hash: vec4<f32>;\r
	var theta: vec4<f32>;\r
	var sz: vec4<f32>;\r
	var psi: vec4<f32>;\r
	var St: vec4<f32>;\r
	var Ct: vec4<f32>;\r
	var sz_: vec4<f32>;\r
\r
	hash = permute289v4f_psrn( permute289v4f_psrn( permute289v4f_psrn( \r
		vec4<f32>(i0.z, i1.z, i2.z, i3.z ))\r
		+ vec4<f32>(i0.y, i1.y, i2.y, i3.y ))\r
		+ vec4<f32>(i0.x, i1.x, i2.x, i3.x ));\r
	theta = hash * 3.883222077;\r
	sz = hash * -0.006920415 + 0.996539792;\r
	psi = hash * 0.108705628;\r
	Ct = cos(theta);\r
	St = sin(theta);\r
	sz_ = sqrt( 1.0 - sz*sz );\r
\r
	var gx: vec4<f32>;\r
	var gy: vec4<f32>;\r
	var gz: vec4<f32>;\r
\r
	gx = Ct * sz_;\r
	gy = St * sz_;\r
	gz = sz;  \r
	\r
	var g0: vec3<f32>;\r
	var g1: vec3<f32>;\r
	var g2: vec3<f32>;\r
	var g3: vec3<f32>;\r
	var w: vec4<f32>;\r
	var w2: vec4<f32>;\r
	var w3: vec4<f32>;\r
	var gdotx: vec4<f32>;\r
	var n: f32;\r
	\r
	g0 = vec3<f32>(gx.x, gy.x, gz.x);\r
	g1 = vec3<f32>(gx.y, gy.y, gz.y);\r
	g2 = vec3<f32>(gx.z, gy.z, gz.z);\r
	g3 = vec3<f32>(gx.w, gy.w, gz.w);\r
	w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\r
	w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\r
	w2 = w * w;\r
	w3 = w2 * w;\r
	gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\r
	n = dot(w3, gdotx);\r
	\r
	return 39.5 * n;\r
}\r
\r
fn srnoise3(x: vec3<f32>, alpha: f32) -> f32\r
{\r
	let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0,  1.0, 1.0, 0.0);\r
	let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\r
\r
	var uvw: vec3<f32>;\r
	var i0: vec3<f32>;\r
	var i1: vec3<f32>;\r
	var i2: vec3<f32>;\r
	var i3: vec3<f32>;\r
	var f0: vec3<f32>;\r
	var gt_: vec3<f32>;\r
	var lt_: vec3<f32>;\r
	var gt: vec3<f32>;\r
	var lt: vec3<f32>;\r
	var o1: vec3<f32>;\r
	var o2: vec3<f32>;\r
	var v0: vec3<f32>;\r
	var v1: vec3<f32>;\r
	var v2: vec3<f32>;\r
	var v3: vec3<f32>;\r
	var x0: vec3<f32>;\r
	var x1: vec3<f32>;\r
	var x2: vec3<f32>;\r
	var x3: vec3<f32>;\r
	\r
	uvw = M * x;\r
	i0 = floor(uvw);\r
	f0 = uvw - i0;\r
	gt_ = step(f0.xyx, f0.yzz);\r
	lt_ = 1.0 - gt_;\r
	gt = vec3<f32>(lt_.z, gt_.xy);\r
	lt = vec3<f32>(lt_.xy, gt_.z);\r
	o1 = min( gt, lt );\r
	o2 = max( gt, lt );\r
	i1 = i0 + o1;\r
	i2 = i0 + o2;\r
	i3 = i0 + vec3<f32>(1.0,1.0,1.0);\r
	v0 = Mi * i0;\r
	v1 = Mi * i1;\r
	v2 = Mi * i2;\r
	v3 = Mi * i3;\r
	x0 = x - v0;\r
	x1 = x - v1;\r
	x2 = x - v2;\r
	x3 = x - v3;\r
	\r
	var hash: vec4<f32>;\r
	var theta: vec4<f32>;\r
	var sz: vec4<f32>;\r
	var psi: vec4<f32>;\r
	var St: vec4<f32>;\r
	var Ct: vec4<f32>;\r
	var sz_: vec4<f32>;\r
\r
	hash = permute289v4f_psrn( permute289v4f_psrn( permute289v4f_psrn( \r
		vec4<f32>(i0.z, i1.z, i2.z, i3.z ))\r
		+ vec4<f32>(i0.y, i1.y, i2.y, i3.y ))\r
		+ vec4<f32>(i0.x, i1.x, i2.x, i3.x ));\r
	theta = hash * 3.883222077;\r
	sz = hash * -0.006920415 + 0.996539792;\r
	psi = hash * 0.108705628;\r
	Ct = cos(theta);\r
	St = sin(theta);\r
	sz_ = sqrt( 1.0 - sz*sz );\r
\r
	var gx: vec4<f32>;\r
	var gy: vec4<f32>;\r
	var gz: vec4<f32>;\r
	var px: vec4<f32>;\r
	var py: vec4<f32>;\r
	var pz: vec4<f32>;\r
	var Sp: vec4<f32>;\r
	var Cp: vec4<f32>;\r
	var Ctp: vec4<f32>;\r
	var qx: vec4<f32>;\r
	var qy: vec4<f32>;\r
	var qz: vec4<f32>;\r
	var Sa: vec4<f32>;\r
	var Ca: vec4<f32>;\r
\r
	if(alpha != 0.0)\r
	{\r
		px = Ct * sz_;\r
		py = St * sz_;\r
		pz = sz;\r
		Sp = sin(psi);\r
		Cp = cos(psi);\r
		Ctp = St*Sp - Ct*Cp;\r
		qx = mix( Ctp*St, Sp, sz);\r
		qy = mix(-Ctp*Ct, Cp, sz);\r
		qz = -(py*Cp + px*Sp);\r
		Sa = vec4<f32>(sin(alpha));\r
		Ca = vec4<f32>(cos(alpha));\r
		gx = Ca*px + Sa*qx;\r
		gy = Ca*py + Sa*qy;\r
		gz = Ca*pz + Sa*qz;\r
	}\r
	else\r
	{\r
		gx = Ct * sz_;\r
		gy = St * sz_;\r
		gz = sz;  \r
	}\r
	\r
	var g0: vec3<f32>;\r
	var g1: vec3<f32>;\r
	var g2: vec3<f32>;\r
	var g3: vec3<f32>;\r
	var w: vec4<f32>;\r
	var w2: vec4<f32>;\r
	var w3: vec4<f32>;\r
	var gdotx: vec4<f32>;\r
	var n: f32;\r
	\r
	g0 = vec3<f32>(gx.x, gy.x, gz.x);\r
	g1 = vec3<f32>(gx.y, gy.y, gz.y);\r
	g2 = vec3<f32>(gx.z, gy.z, gz.z);\r
	g3 = vec3<f32>(gx.w, gy.w, gz.w);\r
	w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\r
	w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\r
	w2 = w * w;\r
	w3 = w2 * w;\r
	gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\r
	n = dot(w3, gdotx);\r
	\r
	return 39.5 * n;\r
}\r
\r
fn snoise3(x: vec3<f32>) -> f32\r
{\r
	let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0,  1.0, 1.0, 0.0);\r
	let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\r
\r
	var uvw: vec3<f32>;\r
	var i0: vec3<f32>;\r
	var i1: vec3<f32>;\r
	var i2: vec3<f32>;\r
	var i3: vec3<f32>;\r
	var f0: vec3<f32>;\r
	var gt_: vec3<f32>;\r
	var lt_: vec3<f32>;\r
	var gt: vec3<f32>;\r
	var lt: vec3<f32>;\r
	var o1: vec3<f32>;\r
	var o2: vec3<f32>;\r
	var v0: vec3<f32>;\r
	var v1: vec3<f32>;\r
	var v2: vec3<f32>;\r
	var v3: vec3<f32>;\r
	var x0: vec3<f32>;\r
	var x1: vec3<f32>;\r
	var x2: vec3<f32>;\r
	var x3: vec3<f32>;\r
	\r
	uvw = M * x;\r
	i0 = floor(uvw);\r
	f0 = uvw - i0;\r
	gt_ = step(f0.xyx, f0.yzz);\r
	lt_ = 1.0 - gt_;\r
	gt = vec3<f32>(lt_.z, gt_.xy);\r
	lt = vec3<f32>(lt_.xy, gt_.z);\r
	o1 = min( gt, lt );\r
	o2 = max( gt, lt );\r
	i1 = i0 + o1;\r
	i2 = i0 + o2;\r
	i3 = i0 + vec3<f32>(1.0,1.0,1.0);\r
	v0 = Mi * i0;\r
	v1 = Mi * i1;\r
	v2 = Mi * i2;\r
	v3 = Mi * i3;\r
	x0 = x - v0;\r
	x1 = x - v1;\r
	x2 = x - v2;\r
	x3 = x - v3;\r
	\r
	var hash: vec4<f32>;\r
	var theta: vec4<f32>;\r
	var sz: vec4<f32>;\r
	var psi: vec4<f32>;\r
	var St: vec4<f32>;\r
	var Ct: vec4<f32>;\r
	var sz_: vec4<f32>;\r
\r
	hash = permute289v4f_psrn( permute289v4f_psrn( permute289v4f_psrn( \r
		vec4<f32>(i0.z, i1.z, i2.z, i3.z ))\r
		+ vec4<f32>(i0.y, i1.y, i2.y, i3.y ))\r
		+ vec4<f32>(i0.x, i1.x, i2.x, i3.x ));\r
	theta = hash * 3.883222077;\r
	sz = hash * -0.006920415 + 0.996539792;\r
	psi = hash * 0.108705628;\r
	Ct = cos(theta);\r
	St = sin(theta);\r
	sz_ = sqrt( 1.0 - sz*sz );\r
\r
	var gx: vec4<f32>;\r
	var gy: vec4<f32>;\r
	var gz: vec4<f32>;\r
\r
	gx = Ct * sz_;\r
	gy = St * sz_;\r
	gz = sz;  \r
	\r
	var g0: vec3<f32>;\r
	var g1: vec3<f32>;\r
	var g2: vec3<f32>;\r
	var g3: vec3<f32>;\r
	var w: vec4<f32>;\r
	var w2: vec4<f32>;\r
	var w3: vec4<f32>;\r
	var gdotx: vec4<f32>;\r
	var n: f32;\r
	\r
	g0 = vec3<f32>(gx.x, gy.x, gz.x);\r
	g1 = vec3<f32>(gx.y, gy.y, gz.y);\r
	g2 = vec3<f32>(gx.z, gy.z, gz.z);\r
	g3 = vec3<f32>(gx.w, gy.w, gz.w);\r
	w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\r
	w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\r
	w2 = w * w;\r
	w3 = w2 * w;\r
	gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\r
	n = dot(w3, gdotx);\r
	\r
	return 39.5 * n;\r
}\r
\r
fn snoise3offset(x: vec3<f32>, offset: f32) -> f32 {\r
    let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0,  1.0, 1.0, 0.0);\r
    let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\r
\r
    // Offset modifications\r
    let offset_x = offset * sin(x.x * 2.0 * 3.14159 / 100.0);\r
    let offset_y = offset * cos(x.y * 2.0 * 3.14159 / 100.0);\r
    let offset_z = offset * sin(x.z * 2.0 * 3.14159 / 100.0);\r
    let x_mod = vec3<f32>(x.x + offset_x, x.y + offset_y, x.z + offset_z);\r
\r
    var uvw: vec3<f32> = M * x_mod;\r
    let i0 = floor(uvw);\r
    let f0 = uvw - i0;\r
    let gt_ = step(f0.xyx, f0.yzz);\r
    let lt_ = 1.0 - gt_;\r
    let gt = vec3<f32>(lt_.z, gt_.xy);\r
    let lt = vec3<f32>(lt_.xy, gt_.z);\r
    let o1 = min(gt, lt);\r
    let o2 = max(gt, lt);\r
    let i1 = i0 + o1;\r
    let i2 = i0 + o2;\r
    let i3 = i0 + vec3<f32>(1.0, 1.0, 1.0);\r
\r
    let v0 = Mi * i0;\r
    let v1 = Mi * i1;\r
    let v2 = Mi * i2;\r
    let v3 = Mi * i3;\r
\r
    let x0 = x_mod - v0;\r
    let x1 = x_mod - v1;\r
    let x2 = x_mod - v2;\r
    let x3 = x_mod - v3;\r
\r
    // Continue with noise computation as before\r
    var hash: vec4<f32>;\r
    var theta: vec4<f32>;\r
    var sz: vec4<f32>;\r
    var psi: vec4<f32>;\r
    var St: vec4<f32>;\r
    var Ct: vec4<f32>;\r
    var sz_: vec4<f32>;\r
\r
    hash = permute289v4f_psrn(permute289v4f_psrn(permute289v4f_psrn(\r
        vec4<f32>(i0.z, i1.z, i2.z, i3.z))\r
        + vec4<f32>(i0.y, i1.y, i2.y, i3.y))\r
        + vec4<f32>(i0.x, i1.x, i2.x, i3.x));\r
    theta = hash * 3.883222077;\r
    sz = hash * -0.006920415 + 0.996539792;\r
    psi = hash * 0.108705628;\r
    Ct = cos(theta);\r
    St = sin(theta);\r
    sz_ = sqrt(1.0 - sz*sz);\r
\r
    var gx: vec4<f32>;\r
    var gy: vec4<f32>;\r
    var gz: vec4<f32>;\r
    gx = Ct * sz_;\r
    gy = St * sz_;\r
    gz = sz;  \r
	\r
	var g0: vec3<f32>;\r
	var g1: vec3<f32>;\r
	var g2: vec3<f32>;\r
	var g3: vec3<f32>;\r
	var w: vec4<f32>;\r
	var w2: vec4<f32>;\r
	var w3: vec4<f32>;\r
	var gdotx: vec4<f32>;\r
	var n: f32;\r
	\r
	g0 = vec3<f32>(gx.x, gy.x, gz.x);\r
	g1 = vec3<f32>(gx.y, gy.y, gz.y);\r
	g2 = vec3<f32>(gx.z, gy.z, gz.z);\r
	g3 = vec3<f32>(gx.w, gy.w, gz.w);\r
	w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\r
	w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\r
	w2 = w * w;\r
	w3 = w2 * w;\r
	gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\r
	n = dot(w3, gdotx);\r
	\r
	return 39.5 * n;\r
}\r
\r
// Versions computing their gradient and returning a struct\r
\r
fn psrdnoise3(x: vec3<f32>, p: vec3<f32>, alpha: f32) -> NG3\r
{\r
	let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0,  1.0, 1.0, 0.0);\r
	let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\r
\r
	var uvw: vec3<f32>;\r
	var i0: vec3<f32>;\r
	var i1: vec3<f32>;\r
	var i2: vec3<f32>;\r
	var i3: vec3<f32>;\r
	var f0: vec3<f32>;\r
	var gt_: vec3<f32>;\r
	var lt_: vec3<f32>;\r
	var gt: vec3<f32>;\r
	var lt: vec3<f32>;\r
	var o1: vec3<f32>;\r
	var o2: vec3<f32>;\r
	var v0: vec3<f32>;\r
	var v1: vec3<f32>;\r
	var v2: vec3<f32>;\r
	var v3: vec3<f32>;\r
	var x0: vec3<f32>;\r
	var x1: vec3<f32>;\r
	var x2: vec3<f32>;\r
	var x3: vec3<f32>;\r
	\r
	uvw = M * x;\r
	i0 = floor(uvw);\r
	f0 = uvw - i0;\r
	gt_ = step(f0.xyx, f0.yzz);\r
	lt_ = 1.0 - gt_;\r
	gt = vec3<f32>(lt_.z, gt_.xy);\r
	lt = vec3<f32>(lt_.xy, gt_.z);\r
	o1 = min( gt, lt );\r
	o2 = max( gt, lt );\r
	i1 = i0 + o1;\r
	i2 = i0 + o2;\r
	i3 = i0 + vec3<f32>(1.0,1.0,1.0);\r
	v0 = Mi * i0;\r
	v1 = Mi * i1;\r
	v2 = Mi * i2;\r
	v3 = Mi * i3;\r
	x0 = x - v0;\r
	x1 = x - v1;\r
	x2 = x - v2;\r
	x3 = x - v3;\r
	\r
	var vx: vec4<f32>;\r
	var vy: vec4<f32>;\r
	var vz: vec4<f32>;\r
\r
	if(any(p > vec3<f32>(0.0))) {\r
		vx = vec4<f32>(v0.x, v1.x, v2.x, v3.x);\r
		vy = vec4<f32>(v0.y, v1.y, v2.y, v3.y);\r
		vz = vec4<f32>(v0.z, v1.z, v2.z, v3.z);\r
		if(p.x > 0.0) {\r
			vx = vx - floor(vx / p.x) * p.x;\r
		}\r
		if(p.y > 0.0) {\r
			vy = vy - floor(vy / p.y) * p.y;\r
		}\r
		if(p.z > 0.0) {\r
			vz = vz - floor(vz / p.z) * p.z;\r
		}\r
		i0 = floor(M * vec3<f32>(vx.x, vy.x, vz.x) + 0.5);\r
		i1 = floor(M * vec3<f32>(vx.y, vy.y, vz.y) + 0.5);\r
		i2 = floor(M * vec3<f32>(vx.z, vy.z, vz.z) + 0.5);\r
		i3 = floor(M * vec3<f32>(vx.w, vy.w, vz.w) + 0.5);\r
	}\r
	\r
	var hash: vec4<f32>;\r
	var theta: vec4<f32>;\r
	var sz: vec4<f32>;\r
	var psi: vec4<f32>;\r
	var St: vec4<f32>;\r
	var Ct: vec4<f32>;\r
	var sz_: vec4<f32>;\r
\r
	hash = permute289v4f_psrn( permute289v4f_psrn( permute289v4f_psrn( \r
		vec4<f32>(i0.z, i1.z, i2.z, i3.z ))\r
		+ vec4<f32>(i0.y, i1.y, i2.y, i3.y ))\r
		+ vec4<f32>(i0.x, i1.x, i2.x, i3.x ));\r
	theta = hash * 3.883222077;\r
	sz = hash * -0.006920415 + 0.996539792;\r
	psi = hash * 0.108705628;\r
	Ct = cos(theta);\r
	St = sin(theta);\r
	sz_ = sqrt( 1.0 - sz*sz );\r
\r
	var gx: vec4<f32>;\r
	var gy: vec4<f32>;\r
	var gz: vec4<f32>;\r
	var px: vec4<f32>;\r
	var py: vec4<f32>;\r
	var pz: vec4<f32>;\r
	var Sp: vec4<f32>;\r
	var Cp: vec4<f32>;\r
	var Ctp: vec4<f32>;\r
	var qx: vec4<f32>;\r
	var qy: vec4<f32>;\r
	var qz: vec4<f32>;\r
	var Sa: vec4<f32>;\r
	var Ca: vec4<f32>;\r
\r
	if(alpha != 0.0)\r
	{\r
		px = Ct * sz_;\r
		py = St * sz_;\r
		pz = sz;\r
		Sp = sin(psi);\r
		Cp = cos(psi);\r
		Ctp = St*Sp - Ct*Cp;\r
		qx = mix( Ctp*St, Sp, sz);\r
		qy = mix(-Ctp*Ct, Cp, sz);\r
		qz = -(py*Cp + px*Sp);\r
		Sa = vec4<f32>(sin(alpha));\r
		Ca = vec4<f32>(cos(alpha));\r
		gx = Ca*px + Sa*qx;\r
		gy = Ca*py + Sa*qy;\r
		gz = Ca*pz + Sa*qz;\r
	}\r
	else\r
	{\r
		gx = Ct * sz_;\r
		gy = St * sz_;\r
		gz = sz;  \r
	}\r
	\r
	var g0: vec3<f32>;\r
	var g1: vec3<f32>;\r
	var g2: vec3<f32>;\r
	var g3: vec3<f32>;\r
	var w: vec4<f32>;\r
	var w2: vec4<f32>;\r
	var w3: vec4<f32>;\r
	var gdotx: vec4<f32>;\r
	var n: f32;\r
	\r
	g0 = vec3<f32>(gx.x, gy.x, gz.x);\r
	g1 = vec3<f32>(gx.y, gy.y, gz.y);\r
	g2 = vec3<f32>(gx.z, gy.z, gz.z);\r
	g3 = vec3<f32>(gx.w, gy.w, gz.w);\r
	w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\r
	w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\r
	w2 = w * w;\r
	w3 = w2 * w;\r
	gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\r
	n = 39.5 * dot(w3, gdotx);\r
\r
	var dw: vec4<f32> = -6.0 * w2 * gdotx;\r
	var dn0: vec3<f32> = w3.x * g0 + dw.x * x0;\r
	var dn1: vec3<f32> = w3.y * g1 + dw.y * x1;\r
	var dn2: vec3<f32> = w3.z * g2 + dw.z * x2;\r
	var dn3: vec3<f32> = w3.w * g3 + dw.w * x3;\r
	var g: vec3<f32> = 39.5 * (dn0 + dn1 + dn2 + dn3);\r
	\r
	return NG3(n, g);\r
}\r
\r
fn psdnoise3(x: vec3<f32>, p: vec3<f32>) -> NG3\r
{\r
	let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0,  1.0, 1.0, 0.0);\r
	let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\r
\r
	var uvw: vec3<f32>;\r
	var i0: vec3<f32>;\r
	var i1: vec3<f32>;\r
	var i2: vec3<f32>;\r
	var i3: vec3<f32>;\r
	var f0: vec3<f32>;\r
	var gt_: vec3<f32>;\r
	var lt_: vec3<f32>;\r
	var gt: vec3<f32>;\r
	var lt: vec3<f32>;\r
	var o1: vec3<f32>;\r
	var o2: vec3<f32>;\r
	var v0: vec3<f32>;\r
	var v1: vec3<f32>;\r
	var v2: vec3<f32>;\r
	var v3: vec3<f32>;\r
	var x0: vec3<f32>;\r
	var x1: vec3<f32>;\r
	var x2: vec3<f32>;\r
	var x3: vec3<f32>;\r
	\r
	uvw = M * x;\r
	i0 = floor(uvw);\r
	f0 = uvw - i0;\r
	gt_ = step(f0.xyx, f0.yzz);\r
	lt_ = 1.0 - gt_;\r
	gt = vec3<f32>(lt_.z, gt_.xy);\r
	lt = vec3<f32>(lt_.xy, gt_.z);\r
	o1 = min( gt, lt );\r
	o2 = max( gt, lt );\r
	i1 = i0 + o1;\r
	i2 = i0 + o2;\r
	i3 = i0 + vec3<f32>(1.0,1.0,1.0);\r
	v0 = Mi * i0;\r
	v1 = Mi * i1;\r
	v2 = Mi * i2;\r
	v3 = Mi * i3;\r
	x0 = x - v0;\r
	x1 = x - v1;\r
	x2 = x - v2;\r
	x3 = x - v3;\r
	\r
	var vx: vec4<f32>;\r
	var vy: vec4<f32>;\r
	var vz: vec4<f32>;\r
\r
	if(any(p > vec3<f32>(0.0))) {\r
		vx = vec4<f32>(v0.x, v1.x, v2.x, v3.x);\r
		vy = vec4<f32>(v0.y, v1.y, v2.y, v3.y);\r
		vz = vec4<f32>(v0.z, v1.z, v2.z, v3.z);\r
		if(p.x > 0.0) {\r
			vx = vx - floor(vx / p.x) * p.x;\r
		}\r
		if(p.y > 0.0) {\r
			vy = vy - floor(vy / p.y) * p.y;\r
		}\r
		if(p.z > 0.0) {\r
			vz = vz - floor(vz / p.z) * p.z;\r
		}\r
		i0 = floor(M * vec3<f32>(vx.x, vy.x, vz.x) + 0.5);\r
		i1 = floor(M * vec3<f32>(vx.y, vy.y, vz.y) + 0.5);\r
		i2 = floor(M * vec3<f32>(vx.z, vy.z, vz.z) + 0.5);\r
		i3 = floor(M * vec3<f32>(vx.w, vy.w, vz.w) + 0.5);\r
	}\r
	\r
	var hash: vec4<f32>;\r
	var theta: vec4<f32>;\r
	var sz: vec4<f32>;\r
	var psi: vec4<f32>;\r
	var St: vec4<f32>;\r
	var Ct: vec4<f32>;\r
	var sz_: vec4<f32>;\r
\r
	hash = permute289v4f_psrn( permute289v4f_psrn( permute289v4f_psrn( \r
		vec4<f32>(i0.z, i1.z, i2.z, i3.z ))\r
		+ vec4<f32>(i0.y, i1.y, i2.y, i3.y ))\r
		+ vec4<f32>(i0.x, i1.x, i2.x, i3.x ));\r
	theta = hash * 3.883222077;\r
	sz = hash * -0.006920415 + 0.996539792;\r
	psi = hash * 0.108705628;\r
	Ct = cos(theta);\r
	St = sin(theta);\r
	sz_ = sqrt( 1.0 - sz*sz );\r
\r
	var gx: vec4<f32>;\r
	var gy: vec4<f32>;\r
	var gz: vec4<f32>;\r
\r
	gx = Ct * sz_;\r
	gy = St * sz_;\r
	gz = sz;  \r
	\r
	var g0: vec3<f32>;\r
	var g1: vec3<f32>;\r
	var g2: vec3<f32>;\r
	var g3: vec3<f32>;\r
	var w: vec4<f32>;\r
	var w2: vec4<f32>;\r
	var w3: vec4<f32>;\r
	var gdotx: vec4<f32>;\r
	var n: f32;\r
	\r
	g0 = vec3<f32>(gx.x, gy.x, gz.x);\r
	g1 = vec3<f32>(gx.y, gy.y, gz.y);\r
	g2 = vec3<f32>(gx.z, gy.z, gz.z);\r
	g3 = vec3<f32>(gx.w, gy.w, gz.w);\r
	w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\r
	w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\r
	w2 = w * w;\r
	w3 = w2 * w;\r
	gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\r
	n = 39.5 * dot(w3, gdotx);\r
\r
	var dw: vec4<f32> = -6.0 * w2 * gdotx;\r
	var dn0: vec3<f32> = w3.x * g0 + dw.x * x0;\r
	var dn1: vec3<f32> = w3.y * g1 + dw.y * x1;\r
	var dn2: vec3<f32> = w3.z * g2 + dw.z * x2;\r
	var dn3: vec3<f32> = w3.w * g3 + dw.w * x3;\r
	var g: vec3<f32> = 39.5 * (dn0 + dn1 + dn2 + dn3);\r
	\r
	return NG3(n, g);\r
}\r
\r
fn srdnoise3(x: vec3<f32>, alpha: f32) -> NG3\r
{\r
	let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0,  1.0, 1.0, 0.0);\r
	let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\r
\r
	var uvw: vec3<f32>;\r
	var i0: vec3<f32>;\r
	var i1: vec3<f32>;\r
	var i2: vec3<f32>;\r
	var i3: vec3<f32>;\r
	var f0: vec3<f32>;\r
	var gt_: vec3<f32>;\r
	var lt_: vec3<f32>;\r
	var gt: vec3<f32>;\r
	var lt: vec3<f32>;\r
	var o1: vec3<f32>;\r
	var o2: vec3<f32>;\r
	var v0: vec3<f32>;\r
	var v1: vec3<f32>;\r
	var v2: vec3<f32>;\r
	var v3: vec3<f32>;\r
	var x0: vec3<f32>;\r
	var x1: vec3<f32>;\r
	var x2: vec3<f32>;\r
	var x3: vec3<f32>;\r
	\r
	uvw = M * x;\r
	i0 = floor(uvw);\r
	f0 = uvw - i0;\r
	gt_ = step(f0.xyx, f0.yzz);\r
	lt_ = 1.0 - gt_;\r
	gt = vec3<f32>(lt_.z, gt_.xy);\r
	lt = vec3<f32>(lt_.xy, gt_.z);\r
	o1 = min( gt, lt );\r
	o2 = max( gt, lt );\r
	i1 = i0 + o1;\r
	i2 = i0 + o2;\r
	i3 = i0 + vec3<f32>(1.0,1.0,1.0);\r
	v0 = Mi * i0;\r
	v1 = Mi * i1;\r
	v2 = Mi * i2;\r
	v3 = Mi * i3;\r
	x0 = x - v0;\r
	x1 = x - v1;\r
	x2 = x - v2;\r
	x3 = x - v3;\r
		\r
	var hash: vec4<f32>;\r
	var theta: vec4<f32>;\r
	var sz: vec4<f32>;\r
	var psi: vec4<f32>;\r
	var St: vec4<f32>;\r
	var Ct: vec4<f32>;\r
	var sz_: vec4<f32>;\r
\r
	hash = permute289v4f_psrn( permute289v4f_psrn( permute289v4f_psrn( \r
		vec4<f32>(i0.z, i1.z, i2.z, i3.z ))\r
		+ vec4<f32>(i0.y, i1.y, i2.y, i3.y ))\r
		+ vec4<f32>(i0.x, i1.x, i2.x, i3.x ));\r
	theta = hash * 3.883222077;\r
	sz = hash * -0.006920415 + 0.996539792;\r
	psi = hash * 0.108705628;\r
	Ct = cos(theta);\r
	St = sin(theta);\r
	sz_ = sqrt( 1.0 - sz*sz );\r
\r
	var gx: vec4<f32>;\r
	var gy: vec4<f32>;\r
	var gz: vec4<f32>;\r
	var px: vec4<f32>;\r
	var py: vec4<f32>;\r
	var pz: vec4<f32>;\r
	var Sp: vec4<f32>;\r
	var Cp: vec4<f32>;\r
	var Ctp: vec4<f32>;\r
	var qx: vec4<f32>;\r
	var qy: vec4<f32>;\r
	var qz: vec4<f32>;\r
	var Sa: vec4<f32>;\r
	var Ca: vec4<f32>;\r
\r
	if(alpha != 0.0)\r
	{\r
		px = Ct * sz_;\r
		py = St * sz_;\r
		pz = sz;\r
		Sp = sin(psi);\r
		Cp = cos(psi);\r
		Ctp = St*Sp - Ct*Cp;\r
		qx = mix( Ctp*St, Sp, sz);\r
		qy = mix(-Ctp*Ct, Cp, sz);\r
		qz = -(py*Cp + px*Sp);\r
		Sa = vec4<f32>(sin(alpha));\r
		Ca = vec4<f32>(cos(alpha));\r
		gx = Ca*px + Sa*qx;\r
		gy = Ca*py + Sa*qy;\r
		gz = Ca*pz + Sa*qz;\r
	}\r
	else\r
	{\r
		gx = Ct * sz_;\r
		gy = St * sz_;\r
		gz = sz;  \r
	}\r
	\r
	var g0: vec3<f32>;\r
	var g1: vec3<f32>;\r
	var g2: vec3<f32>;\r
	var g3: vec3<f32>;\r
	var w: vec4<f32>;\r
	var w2: vec4<f32>;\r
	var w3: vec4<f32>;\r
	var gdotx: vec4<f32>;\r
	var n: f32;\r
	\r
	g0 = vec3<f32>(gx.x, gy.x, gz.x);\r
	g1 = vec3<f32>(gx.y, gy.y, gz.y);\r
	g2 = vec3<f32>(gx.z, gy.z, gz.z);\r
	g3 = vec3<f32>(gx.w, gy.w, gz.w);\r
	w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\r
	w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\r
	w2 = w * w;\r
	w3 = w2 * w;\r
	gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\r
	n = 39.5 * dot(w3, gdotx);\r
\r
	var dw: vec4<f32> = -6.0 * w2 * gdotx;\r
	var dn0: vec3<f32> = w3.x * g0 + dw.x * x0;\r
	var dn1: vec3<f32> = w3.y * g1 + dw.y * x1;\r
	var dn2: vec3<f32> = w3.z * g2 + dw.z * x2;\r
	var dn3: vec3<f32> = w3.w * g3 + dw.w * x3;\r
	var g: vec3<f32> = 39.5 * (dn0 + dn1 + dn2 + dn3);\r
	\r
	return NG3(n, g);\r
}\r
\r
fn sdnoise3(x: vec3<f32>) -> NG3\r
{\r
	let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0,  1.0, 1.0, 0.0);\r
	let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\r
\r
	var uvw: vec3<f32>;\r
	var i0: vec3<f32>;\r
	var i1: vec3<f32>;\r
	var i2: vec3<f32>;\r
	var i3: vec3<f32>;\r
	var f0: vec3<f32>;\r
	var gt_: vec3<f32>;\r
	var lt_: vec3<f32>;\r
	var gt: vec3<f32>;\r
	var lt: vec3<f32>;\r
	var o1: vec3<f32>;\r
	var o2: vec3<f32>;\r
	var v0: vec3<f32>;\r
	var v1: vec3<f32>;\r
	var v2: vec3<f32>;\r
	var v3: vec3<f32>;\r
	var x0: vec3<f32>;\r
	var x1: vec3<f32>;\r
	var x2: vec3<f32>;\r
	var x3: vec3<f32>;\r
	\r
	uvw = M * x;\r
	i0 = floor(uvw);\r
	f0 = uvw - i0;\r
	gt_ = step(f0.xyx, f0.yzz);\r
	lt_ = 1.0 - gt_;\r
	gt = vec3<f32>(lt_.z, gt_.xy);\r
	lt = vec3<f32>(lt_.xy, gt_.z);\r
	o1 = min( gt, lt );\r
	o2 = max( gt, lt );\r
	i1 = i0 + o1;\r
	i2 = i0 + o2;\r
	i3 = i0 + vec3<f32>(1.0,1.0,1.0);\r
	v0 = Mi * i0;\r
	v1 = Mi * i1;\r
	v2 = Mi * i2;\r
	v3 = Mi * i3;\r
	x0 = x - v0;\r
	x1 = x - v1;\r
	x2 = x - v2;\r
	x3 = x - v3;\r
\r
	var hash: vec4<f32>;\r
	var theta: vec4<f32>;\r
	var sz: vec4<f32>;\r
	var psi: vec4<f32>;\r
	var St: vec4<f32>;\r
	var Ct: vec4<f32>;\r
	var sz_: vec4<f32>;\r
\r
	hash = permute289v4f_psrn( permute289v4f_psrn( permute289v4f_psrn( \r
		vec4<f32>(i0.z, i1.z, i2.z, i3.z ))\r
		+ vec4<f32>(i0.y, i1.y, i2.y, i3.y ))\r
		+ vec4<f32>(i0.x, i1.x, i2.x, i3.x ));\r
	theta = hash * 3.883222077;\r
	sz = hash * -0.006920415 + 0.996539792;\r
	psi = hash * 0.108705628;\r
	Ct = cos(theta);\r
	St = sin(theta);\r
	sz_ = sqrt( 1.0 - sz*sz );\r
\r
	var gx: vec4<f32>;\r
	var gy: vec4<f32>;\r
	var gz: vec4<f32>;\r
\r
	gx = Ct * sz_;\r
	gy = St * sz_;\r
	gz = sz;  \r
	\r
	var g0: vec3<f32>;\r
	var g1: vec3<f32>;\r
	var g2: vec3<f32>;\r
	var g3: vec3<f32>;\r
	var w: vec4<f32>;\r
	var w2: vec4<f32>;\r
	var w3: vec4<f32>;\r
	var gdotx: vec4<f32>;\r
	var n: f32;\r
	\r
	g0 = vec3<f32>(gx.x, gy.x, gz.x);\r
	g1 = vec3<f32>(gx.y, gy.y, gz.y);\r
	g2 = vec3<f32>(gx.z, gy.z, gz.z);\r
	g3 = vec3<f32>(gx.w, gy.w, gz.w);\r
	w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\r
	w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\r
	w2 = w * w;\r
	w3 = w2 * w;\r
	gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\r
	n = 39.5 * dot(w3, gdotx);\r
\r
	var dw: vec4<f32> = -6.0 * w2 * gdotx;\r
	var dn0: vec3<f32> = w3.x * g0 + dw.x * x0;\r
	var dn1: vec3<f32> = w3.y * g1 + dw.y * x1;\r
	var dn2: vec3<f32> = w3.z * g2 + dw.z * x2;\r
	var dn3: vec3<f32> = w3.w * g3 + dw.w * x3;\r
	var g: vec3<f32> = 39.5 * (dn0 + dn1 + dn2 + dn3);\r
	\r
	return NG3(n, g);\r
}\r
\r
\r
struct VertexInput {\r
    @location(0) pos: vec2f,\r
};\r
\r
struct VertexOutput {\r
    @builtin(position) pos: vec4f,\r
};\r
\r
@vertex\r
fn vertexMain(input: VertexInput) ->\r
    VertexOutput {\r
    var output: VertexOutput;\r
    output.pos = vec4f(input.pos, 0, 1);\r
    return output;\r
}\r
\r
// Ray marching constants\r
\r
const OCTAVES: i32 = 10; // {Octave count:0-11}\r
const CAVE_SIZE: f32 = 50.0; // {Entry room size:0-250}\r
const CAVE_THRESHOLD: f32 = 3.0;  // {How much to smooth the noise intersections:0-100}\r
const MAX_STEPS: i32  = 40; // {Max raymarch steps:0-300}\r
const NEAR_CLIP: f32 = 20.0; // {Near clipping distance: 0-1000}\r
const SURF_DIST: f32 = 0.005; // {Surface min distance steps:0-1}\r
const MAX_DIST: f32 = 300.0; // {Far clipping distance: 0-1000}\r
\r
const PI: f32 = 3.141592653592;\r
const TAU: f32 = 6.283185307185;\r
const DUST_RADIUS: f32 = 0.1; // {Dust radii:0-1}\r
const NOISE_CHOICE: f32 = 3.0; // {Choise of noise algorithm:1-3}\r
const NOISE_OFFSET: f32 = 0.0001; // {Softening of noise: 0-1}\r
const MAX_DEPTH: f32 = 300.0; // {Dust radii:100-1500}\r
const SEA_LEVEL: f32 = 25.; // {The Z in the world where the sea surface is}\r
// allow dynamic C.OCTAVES\r
\r
const MAX_OCTAVES: i32 = 5;\r
const MIN_OCTAVES: i32 = 1;\r
const OCTAVES_FALLOFF_DISTANCE: f32 = C.MAX_DIST;\r
\r
// WGSL adaptation of K.jpg's Re-oriented 8-Point BCC Noise (OpenSimplex2S)\r
// Output: vec4<f32>(dF/dx, dF/dy, dF/dz, value)\r
\r
// Permutes the input using a hash-like function\r
fn permute(t: vec4<f32>) -> vec4<f32> {\r
    return t * (t * 34.0 + 133.0);\r
}\r
\r
// Computes a gradient based on a hash\r
fn grad(hash: f32) -> vec3<f32> {\r
    let cube: vec3<f32> = fract(vec3<f32>(hash / 1.0, hash / 2.0, hash / 4.0)) * 2.0 - 1.0;\r
    var cuboct: vec3<f32> = cube;\r
    cuboct[i32(hash / 16.0)] = 0.0;\r
\r
    let type_: f32 = fract(hash / 8.0);\r
    let rhomb: vec3<f32> = (1.0 - type_) * cube + type_ * (cuboct + cross(cube, cuboct));\r
    var grad: vec3<f32> = cuboct * 1.22474487139 + rhomb;\r
    grad *= (1.0 - 0.042942436724648037 * type_) * 3.5946317686139184;\r
\r
    return grad;\r
}\r
\r
// Part of the BCC lattice noise computation\r
fn openSimplex2SDerivativesPart(X: vec3<f32>) -> vec4<f32> {\r
    let b: vec3<f32> = floor(X);\r
    let i4: vec4<f32> = vec4<f32>(X - b, 2.5);\r
\r
    let v1: vec3<f32> = b + floor(dot(i4, vec4<f32>(0.25, 0.25, 0.25, 0.25)));\r
    let v2: vec3<f32> = b + vec3<f32>(1, 0, 0) + vec3<f32>(-1, 1, 1) * floor(dot(i4, vec4<f32>(-0.25, 0.25, 0.25, 0.35)));\r
    let v3: vec3<f32> = b + vec3<f32>(0, 1, 0) + vec3<f32>(1, -1, 1) * floor(dot(i4, vec4<f32>(0.25, -0.25, 0.25, 0.35)));\r
    let v4: vec3<f32> = b + vec3<f32>(0, 0, 1) + vec3<f32>(1, 1, -1) * floor(dot(i4, vec4<f32>(0.25, 0.25, -0.25, 0.35)));\r
\r
    var hashes: vec4<f32> = permute(fract(vec4<f32>(v1.x, v2.x, v3.x, v4.x) / 289.0));\r
    hashes = permute(fract(hashes + vec4<f32>(v1.y, v2.y, v3.y, v4.y) / 289.0));\r
    hashes = fract(permute(fract(hashes + vec4<f32>(v1.z, v2.z, v3.z, v4.z) / 289.0)) / 48.0);\r
\r
    let d1: vec3<f32> = X - v1; let d2: vec3<f32> = X - v2; let d3: vec3<f32> = X - v3; let d4: vec3<f32> = X - v4;\r
    let a: vec4<f32> = max(vec4<f32>(0.75 - dot(d1, d1), 0.75 - dot(d2, d2), 0.75 - dot(d3, d3), 0.75 - dot(d4, d4)), vec4<f32>(0.0, 0.0, 0.0, 0.0));\r
\r
    let aa: vec4<f32> = a * a;\r
    let aaaa: vec4<f32> = aa * aa;\r
\r
    let g1: vec3<f32> = grad(hashes.x); let g2: vec3<f32> = grad(hashes.y);\r
    let g3: vec3<f32> = grad(hashes.z); let g4: vec3<f32> = grad(hashes.w);\r
\r
    let extrapolations: vec4<f32> = vec4<f32>(dot(d1, g1), dot(d2, g2), dot(d3, g3), dot(d4, g4));\r
    // Manually calculate the weighted gradient matrix multiplication\r
let w = aa * a * extrapolations;\r
let derivative: vec3<f32> = vec3<f32>(\r
    -8.0 * (d1.x * w.x * g1.x + d2.x * w.y * g2.x + d3.x * w.z * g3.x + d4.x * w.w * g4.x),\r
    -8.0 * (d1.y * w.x * g1.y + d2.y * w.y * g2.y + d3.y * w.z * g3.y + d4.y * w.w * g4.y),\r
    -8.0 * (d1.z * w.x * g1.z + d2.z * w.y * g2.z + d3.z * w.z * g3.z + d4.z * w.w * g4.z)\r
) + vec3<f32>(\r
    g1.x * aaaa.x + g2.x * aaaa.y + g3.x * aaaa.z + g4.x * aaaa.w,\r
    g1.y * aaaa.x + g2.y * aaaa.y + g3.y * aaaa.z + g4.y * aaaa.w,\r
    g1.z * aaaa.x + g2.z * aaaa.y + g3.z * aaaa.z + g4.z * aaaa.w\r
);\r
\r
\r
    return vec4<f32>(derivative, dot(aaaa, extrapolations));\r
}\r
\r
// Conventional derivatives computation\r
fn openSimplex2SDerivatives_Conventional(X: vec3<f32>) -> f32 {\r
    let modifiedX: vec3<f32> = dot(X, vec3<f32>(2.0 / 3.0)) - X;\r
    let result: vec4<f32> = openSimplex2SDerivativesPart(modifiedX) + openSimplex2SDerivativesPart(modifiedX + 144.5);\r
\r
    return result.w;\r
}\r
\r
// Improved XY derivatives computation\r
fn openSimplex2SDerivatives_ImproveXY(X: vec3<f32>) -> f32 {\r
    let orthonormalMap: mat3x3<f32> = mat3x3<f32>(\r
    vec3<f32>(0.788675134594813, -0.211324865405187, -0.577350269189626),\r
    vec3<f32>(-0.211324865405187, 0.788675134594813, -0.577350269189626),\r
    vec3<f32>(0.577350269189626, 0.577350269189626, 0.577350269189626)\r
);\r
\r
    let modifiedX: vec3<f32> = orthonormalMap * X;\r
    let result: vec4<f32> = openSimplex2SDerivativesPart(modifiedX) + openSimplex2SDerivativesPart(modifiedX + 144.5);\r
\r
    return result.w;\r
}\r
\r
\r
////////////////////////////////////////////////////////////////\r
// PBR Helper functions\r
////////////////////////////////////////////////////////////////\r
\r
fn DistributionGGX(N: vec3f, H: vec3f, roughness: f32) -> f32 {\r
    let a      = roughness*roughness;\r
    let a2     = a*a;\r
    let NdotH  = max(dot(N, H), 0.0);\r
    let NdotH2 = NdotH*NdotH;\r
    let num   = a2;\r
    var denom = (NdotH2 * (a2 - 1.0) + 1.0);\r
    denom = C.PI * denom * denom;\r
    return num / denom;\r
}\r
\r
fn GeometrySchlickGGX(NdotV: f32, roughness: f32) -> f32 {\r
    let r = (roughness + 1.0);\r
    let k = (r*r) / 8.0;\r
    let num   = NdotV;\r
    let denom = NdotV * (1.0 - k) + k;\r
    return num / denom;\r
}\r
\r
fn GeometrySmith(N: vec3f, V: vec3f, L: vec3f, roughness: f32) -> f32 {\r
    let NdotV = max(dot(N, V), 0.0);\r
    let NdotL = max(dot(N, L), 0.0);\r
    let ggx2  = GeometrySchlickGGX(NdotV, roughness);\r
    let ggx1  = GeometrySchlickGGX(NdotL, roughness);\r
    return ggx1 * ggx2;\r
}\r
\r
fn fresnelSchlick(cosTheta: f32, F0: vec3f) -> vec3f {\r
    return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);\r
} \r
////////////////////////////////////////////////////////////////\r
// Random & Noise\r
////////////////////////////////////////////////////////////////\r
\r
fn simpleHash( p0: vec3f ) -> vec3f\r
// Adapted from iq: https://www.shadertoy.com/view/Xsl3Dl\r
{\r
	var p = vec3( dot(p0,vec3(127.1,311.7, 74.7)),\r
			  dot(p0,vec3(269.5,183.3,246.1)),\r
			  dot(p0,vec3(113.5,271.9,124.6)));\r
\r
	return -1.0 + 2.0*fract(sin(p)*43758.5453123);\r
}\r
\r
fn gradientNoise( p : vec3f ) -> f32\r
// Adapted from iq: https://www.shadertoy.com/view/Xsl3Dl\r
{\r
    var i = floor( p );\r
    var f = fract( p );\r
    // cubic interpolant\r
    var u = f*f*(3.0-2.0*f);\r
\r
    return mix( mix( mix( dot( simpleHash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), \r
                          dot( simpleHash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),\r
                     mix( dot( simpleHash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), \r
                          dot( simpleHash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),\r
                mix( mix( dot( simpleHash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), \r
                          dot( simpleHash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),\r
                     mix( dot( simpleHash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), \r
                          dot( simpleHash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );\r
}\r
\r
////////////////////////////////////////////////////////////////\r
// Transformations\r
////////////////////////////////////////////////////////////////\r
\r
fn Rot(a: f32) -> mat2x2f {\r
    let s = sin(a);\r
    let c = cos(a);\r
    return mat2x2f(c, -s, s, c);\r
}\r
\r
fn rotX(p: vec3f, a: f32) -> vec3f {\r
    let s = sin(a);\r
    let c = cos(a);\r
    let m = mat3x3f(\r
        1., 0., 0.,\r
        0., c, -s,\r
        0., s, c,\r
        );\r
    return m * p;\r
}\r
\r
fn rotY(p: vec3f, a: f32) -> vec3f {\r
    let s = sin(a);\r
    let c = cos(a);\r
    let m = mat3x3f(\r
        c, 0., s,\r
        0., 1., 0.,\r
        -s, 0., c,\r
        );\r
    return m * p;\r
}\r
\r
fn rotZ(p: vec3f, a: f32) -> vec3f {\r
    let s = sin(a);\r
    let c = cos(a);\r
    let m = mat3x3f(\r
        c, -s, 0.,\r
        s,  c, 0.,\r
        0., 0., 1.\r
        );\r
    return m * p;\r
}\r
////////////////////////////////////////////////////////////////\r
// SDF Operations\r
////////////////////////////////////////////////////////////////\r
\r
fn opUnion(d1: f32, d2: f32 ) -> f32 { return min(d1,d2); }\r
\r
fn opSubtraction(d1: f32, d2: f32) -> f32 {\r
    //NOTE: Flipped order because it makes more sense to me\r
    return max(-d2, d1);\r
}\r
fn opIntersection(d1: f32, d2: f32) -> f32 {\r
    return max(d1, d2);\r
}\r
\r
fn opSmoothUnion(d1: f32, d2: f32, k: f32) -> f32 {\r
    let h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );\r
    return mix( d2, d1, h ) - k*h*(1.0-h);\r
}\r
fn opSmoothSubtraction(d1: f32, d2: f32, k: f32) -> f32 {\r
    let h = clamp( 0.5 - 0.5*(d2+d1)/k, 0.0, 1.0 );\r
    return mix( d1, -d2, h ) + k*h*(1.0-h);\r
}\r
\r
fn modDomain(p: vec3f, size: vec3f) -> vec3f {\r
    return p - size * round(p / size);\r
}\r
\r
\r
\r
////////////////////////////////////////////////////////////////\r
// Signed Distance Functions\r
////////////////////////////////////////////////////////////////\r
\r
fn sdPyramid(p: vec3<f32>, h: f32) -> f32 {\r
    let m2: f32 = h * h + 0.25;\r
    \r
    var p_mod: vec3<f32> = vec3<f32>(abs(p.x), p.y, abs(p.z));\r
    if (p_mod.z > p_mod.x) {\r
        p_mod.x = p_mod.z;\r
        p_mod.z = abs(p.x);  // Ensuring that p.zx swizzling is mirrored accurately\r
    }\r
    p_mod.x -= 0.5;\r
    p_mod.z -= 0.5;\r
\r
    let q: vec3<f32> = vec3<f32>(p_mod.z, h * p_mod.y - 0.5 * p_mod.x, h * p_mod.x + 0.5 * p_mod.y);\r
\r
    let s: f32 = max(-q.x, 0.0);\r
    let t: f32 = clamp((q.y - 0.5 * p_mod.z) / (m2 + 0.25), 0.0, 1.0);\r
\r
    let a: f32 = m2 * (q.x + s) * (q.x + s) + q.y * q.y;\r
    let b: f32 = m2 * (q.x + 0.5 * t) * (q.x + 0.5 * t) + (q.y - m2 * t) * (q.y - m2 * t);\r
\r
    var d2: f32 = 0.;\r
    if (min(q.y, -q.x * m2 - q.y * 0.5) > 0.0) {\r
        d2 = 0.0;\r
    } else {\r
        d2 = min(a, b);\r
    }\r
\r
    return sqrt((d2 + q.z * q.z) / m2) * sign(max(q.z, -p.y));\r
}\r
\r
fn sdPlane( p: vec3f, n: vec3f, h: f32 ) -> f32\r
{\r
  return dot(p,normalize(n)) + h;\r
}\r
\r
fn sdSphere(p: vec3f, c: vec3f, r: f32) -> f32\r
{\r
    return length(p-c) - r;\r
}\r
\r
fn sdRoundBox( po: vec3f, c: vec3f, b: vec3f, r: f32 ) -> f32\r
{\r
    let p = po - c;\r
    let q = abs(p) - b;\r
    return length(max(q,vec3f(0.0))) + min(max(q.x,max(q.y,q.z)),0.0) - r;\r
}\r
\r
\r
////////////////////////////////////////////////////////////////\r
// Main scene\r
////////////////////////////////////////////////////////////////\r
\r
fn orbitControls(po: vec3f) -> vec3f {\r
    let m = (vec2f(C.mouse.x, C.mouse.y) / C.resolution) + 0.5;\r
    var p = po;\r
    p = rotY(po, -m.x*C.TAU);\r
    p = rotX(p, -m.y*C.PI);\r
    return p;\r
}\r
\r
fn worleyNoise(p: vec3f, seed: vec3f) -> vec2f {\r
    var d = vec2f(1e10, 1e10); // Store two smallest distances\r
    var st = floor(p);\r
    for (var i: i32 = -1; i <= 1; i += 2) {\r
        for (var j: i32 = -1; j <= 1; j += 2) {\r
            for (var k: i32 = -1; k <= 1; k += 2) {\r
                var g = st + vec3f(f32(i), f32(j), f32(k));\r
                var o = simpleHash(g + seed); // Using simpleHash from your existing code\r
                var r = g + o - p;\r
                var t = dot(r, r);  // Use squared distance for comparison\r
\r
                if (t < d.x) {\r
                    d.y = d.x;\r
                    d.x = t;\r
                } else if (t < d.y) {\r
                    d.y = t;\r
                }\r
            }\r
        }\r
    }\r
    d.x = sqrt(d.x); // Now compute the square root for the two nearest distances\r
    d.y = sqrt(d.y);\r
    return d;\r
}\r
\r
fn sdWorleyNoise(p: vec3f, seed: vec3f) -> f32 {\r
    let d = worleyNoise(p, seed);\r
    return d.y - d.x; // SDF based on difference between closest and second closest\r
}\r
\r
\r
fn mod7v3f(x: vec3f) -> vec3f { return x - floor(x / 6.999999) * 6.999999; }\r
fn mod7v4f(x: vec4f) -> vec4f { return x - floor(x / 6.999999) * 6.999999; }\r
\r
  // Special thanks to Stefan Gustavson for releasing mod289 as public domain code!\r
  // Always credit the original author to show appreciation.\r
fn mod289f32(x: f32)   ->   f32 { return x - floor(x / 289.0) * 289.0; }\r
fn mod289v2f(x: vec2f) -> vec2f { return x - floor(x / 289.0) * 289.0; }\r
fn mod289v3f(x: vec3f) -> vec3f { return x - floor(x / 289.0) * 289.0; }\r
fn mod289v4f(x: vec4f) -> vec4f { return x - floor(x / 289.0) * 289.0; }\r
\r
fn permute289f32(x:   f32) ->   f32 { return mod289f32(((x*34.0) + 10.0) * x); }\r
fn permute289v3f(x: vec3f) -> vec3f { return mod289v3f((34.0 * x + 10.0) * x); }\r
fn permute289v4f(x: vec4f) -> vec4f { return mod289v4f((34.0 * x + 10.0) * x); }\r
\r
  // These fade functions have been separated from Stefan Gustavson's cnoise functions:\r
  // - fadev2f separated from the cnoise2D file\r
  // - fadev3f separated from the cnoise3D file\r
  // - fadev4f separated from the cnoise4D file\r
fn fadev2f(t: vec2f) -> vec2f { return t*t*t*(t*(t*6.0 - 15.0) + 10.0); }\r
fn fadev3f(t: vec3f) -> vec3f { return t*t*t*(t*(t*6.0 - 15.0) + 10.0); }\r
fn fadev4f(t: vec4f) -> vec4f { return t*t*t*(t*(t*6.0 - 15.0) + 10.0); }\r
\r
fn taylorInvSqrtf32(r:   f32) ->   f32 { return 1.79284291400159 - 0.85373472095314 * r; }\r
fn taylorInvSqrtv4f(r: vec4f) -> vec4f { return 1.79284291400159 - 0.85373472095314 * r; }\r
\r
fn snoise3D(v: vec3f) -> f32 {\r
    let C = vec2f(1./6., 1./3.);\r
    let D = vec4f(0., .5, 1., 2.);\r
\r
    var i = floor(v + dot(v, C.yyy));\r
    var x0 = v - i + dot(i, C.xxx);\r
\r
    var g = step(x0.yzx, x0.xyz);\r
    var l = 1.0 - g;\r
    var i1 = min( g.xyz, l.zxy );\r
    var i2 = max( g.xyz, l.zxy );\r
\r
    var x1 = x0 - i1 + C.xxx;\r
    var x2 = x0 - i2 + C.yyy;\r
    var x3 = x0 - D.yyy;\r
\r
    i = mod289v3f(i);\r
    var p = permute289v4f( permute289v4f( permute289v4f(\r
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\r
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\r
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\r
\r
    var n_ = 0.142857142857;\r
    var ns = n_ * D.wyz - D.xzx;\r
\r
    var j = p - 49.0 * floor(p * ns.z * ns.z);\r
\r
    var x_ = floor(j * ns.z);\r
    var y_ = floor(j - 7.0 * x_ );\r
\r
    var x = x_ *ns.x + ns.yyyy;\r
    var y = y_ *ns.x + ns.yyyy;\r
    var h = 1.0 - abs(x) - abs(y);\r
\r
    var b0 = vec4f( x.xy, y.xy );\r
    var b1 = vec4f( x.zw, y.zw );\r
\r
    var s0 = floor(b0)*2.0 + 1.0;\r
    var s1 = floor(b1)*2.0 + 1.0;\r
    var sh = -step(h, vec4(0.0));\r
\r
    var a0 = b0.xzyw + s0.xzyw*sh.xxyy;\r
    var a1 = b1.xzyw + s1.xzyw*sh.zzww;\r
\r
    var p0 = vec3f( a0.xy, h.x );\r
    var p1 = vec3f( a0.zw, h.y );\r
    var p2 = vec3f( a1.xy, h.z );\r
    var p3 = vec3f( a1.zw, h.w );\r
\r
    var norm = taylorInvSqrtv4f( vec4f( dot( p0, p0 ), dot( p1, p1 ), dot( p2, p2 ), dot( p3, p3 ) ));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;\r
\r
    var m = max(0.5 - vec4f( dot( x0, x0 ), dot( x1, x1 ), dot( x2, x2 ), dot( x3, x3 ) ), vec4f(0.0));\r
    m = m * m;\r
\r
    return 105.0 * dot( m*m, vec4f( dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3) ));\r
  }\r
\r
\r
fn fBm(p: vec3f) -> f32 {\r
    var value: f32 = 0.0;\r
    var amplitude: f32 = 0.9;\r
    var frequency: f32 = 0.5;\r
    \r
    for (var i: i32 = 0; i < C.OCTAVES; i++) {\r
        value += (f32(i) * 0.001) + (amplitude * snoise3D(p * frequency));\r
        frequency *= (f32(i) * 0.05) + 2.0;\r
        amplitude *= (f32(i) * 0.05) + 0.5;\r
    }\r
    \r
    return value;\r
}\r
\r
fn pseudoRandom(seed: i32) -> f32 {\r
    var x = seed * 374761393;\r
    x = (x ^ (x >> 13)) * 1103515245;\r
    x = x ^ (x >> 16);\r
    return fract(f32(x) / 4294967296.0);\r
}\r
\r
\r
\r
fn drawSnake(\r
    startPos: vec3<f32>, \r
    direction: vec3<f32>, \r
    length: f32, \r
    segmentCount: i32, \r
    segmentRadius: f32, \r
    originalValue: f32, \r
    speed: f32, \r
    wriggleAmplitude: f32\r
) -> f32 {\r
    var returnable = originalValue;\r
    var i: i32 = 0;\r
    let loopPeriod = 3.0;\r
    let timeModulus = fract(C.time / loopPeriod);\r
\r
    // Calculate wriggle speed based on global positional speed\r
    let wriggleSpeed = speed * 1.0; // Wriggle frequency scaled with speed\r
\r
    loop {\r
        if i >= segmentCount { break; }\r
\r
        let wrigglePhase = -2.0 * 3.14159265 * (wriggleSpeed * timeModulus + f32(i) * 0.3);\r
        let wriggleFactor = sin(wrigglePhase) * wriggleAmplitude;\r
        \r
        let movementVector = direction * (speed * C.time - (length / f32(segmentCount) * f32(i)));\r
        let segmentX = startPos.x + wriggleFactor + movementVector.x;\r
        let segmentY = startPos.y + wriggleFactor + movementVector.y;\r
        let segmentZ = startPos.z + movementVector.z;\r
\r
        let segmentPos = vec3<f32>(segmentX, segmentY, segmentZ);\r
        returnable = opSmoothUnion(sdSphere(segmentPos, vec3f(0.0), segmentRadius), returnable, 0.7);\r
        i++;\r
    }\r
\r
    return returnable;\r
}\r
\r
const N_SNOISE3D = 1;\r
const N_OPENSIMPLEX2S = 2;\r
const N_PSRDNOISE3 = 3;\r
\r
\r
\r
fn vec3noise(choice: u32, p: vec3f, offset: f32) -> f32 {\r
    switch choice {\r
    case 1: {\r
        return snoise3D(p);\r
    }\r
    case 2: {\r
        return openSimplex2SDerivatives_ImproveXY(p);\r
    }\r
    case 3: {\r
        return snoise3offset(p, max(C.NOISE_OFFSET, offset));\r
    }\r
    default: {\r
    }\r
    }\r
    return 0.0;\r
}\r
\r
fn customNoise3D(p: vec3f, amplitude: f32, scale: f32, octaves: i32, offset: f32) -> f32 {\r
    var value: f32 = 0.0;\r
    var currentAmplitude: f32 = amplitude;\r
    var currentScale: f32 = scale;\r
\r
    for (var i: i32 = 0; i < octaves; i++) {\r
        value += currentAmplitude * vec3noise(u32(floor(C.NOISE_CHOICE)), p * currentScale, offset);\r
        currentScale *= 2.0;   // Increasing frequency\r
        currentAmplitude *= 0.5; // Decreasing amplitude\r
    }\r
\r
    return value;\r
}\r
\r
fn hash3(seed: f32) -> vec3f {\r
    var p = vec3f(sin(seed * 91.3458), sin(seed * 47.9897), sin(seed * 74.233));\r
    return fract(p * 43758.5453);\r
}\r
\r
fn hash(p: u32) -> f32 {\r
    var x = p * 374761393u;\r
    x = (x ^ (x >> 13u)) * 1103515245u;\r
    x = x ^ (x >> 16u);\r
    return f32(x) / 4294967296.0;\r
}\r
\r
\r
fn hashff(n: f32) -> f32 {\r
    return fract(sin(n) * 43758.5453123);\r
}\r
\r
fn sdSphereNew(p: vec3<f32>, radius: f32) -> f32 {\r
    return length(p) - radius;\r
}\r
\r
////////////////////////////////////////////////////////////////\r
\r
fn mainScene(p: vec3f) -> f32 {\r
	 // Define the clipping plane at y = 0\r
    let planeNormal = vec3f(0.0, 1.0, 0.0);\r
    let planeHeight = 0.0; // Clipping exactly at y = 0\r
\r
    // Calculate the distance to the clipping plane\r
    let planeDistance = sdPlane(p, planeNormal, planeHeight);\r
\r
    // Early exit if the point is below the clipping plane\r
    // if (planeDistance < 0.0) {\r
    //     return planeDistance;\r
    // }\r
  let octaveCount = C.OCTAVES;\r
   /**\r
   EXPERIMENT: TWIST\r
//    */\r
//     let noiseValue = (snoise3(p * 3) + 1.0) / 2.0;\r
//  	let k: f32 = 0.01; // or some other amount\r
// 	let c: f32 = cos(k * p.y);\r
// 	let s: f32 = sin(k * p.y);\r
// 	var m: mat2x2<f32> = mat2x2<f32>(c, -s, s, c);\r
// 	var q: vec3<f32> = vec3<f32>(m * p.xz, p.y);\r
\r
\r
	// END EXPERIMENT\r
    let largerScaleNoise = customNoise3D(p, 6.0, 0.01, C.OCTAVES , C.NOISE_OFFSET);\r
    let solidVolumeSDF = sdSphere(p, vec3f(0.0), C.CAVE_SIZE);\r
    let caveSDF = opSmoothSubtraction(-largerScaleNoise, solidVolumeSDF, 50);\r
	// Define the clipping plane\r
    // Plane normal pointing up (0, 1, 0) for y = 0 plane\r
   \r
	\r
     // Return the result of the combined SDFs\r
    return opSmoothSubtraction(caveSDF, planeDistance, 10);\r
}\r
\r
\r
\r
\r
\r
fn getDist(p: vec3f) -> f32 {\r
    return mainScene(p); // Retrieve the scene's SDF\r
}\r
\r
fn getNormal(p: vec3f) -> vec3f {\r
    let epsilon = 0.0001;\r
    let dx = vec3(epsilon, 0., 0.0);\r
    let dy = vec3(0., epsilon, 0.0);\r
    let dz = vec3(0., 0.0, epsilon);\r
\r
    let ddx = getDist(p + dx) - getDist(p - dx);\r
    let ddy = getDist(p + dy) - getDist(p - dy);\r
    let ddz = getDist(p + dz) - getDist(p - dz);\r
    \r
    return normalize(vec3f(ddx, ddy, ddz));\r
}\r
\r
// COORDINATE SYSTEM: X = [-1,+1] (Right pos) | Y = [-1,+1] (Down pos.)  \r
\r
////////////////////////////////////////////////////////////////\r
// Ray Marching Functions\r
////////////////////////////////////////////////////////////////\r
\r
fn rayDirection(p: vec2f, ro: vec3f, rt: vec3f, up: vec3f, yaw: f32, pitch: f32, fov: f32, aspectRatio: f32) -> vec3f {\r
    let cosPitch = cos(pitch);\r
    let sinPitch = sin(pitch);\r
    let cosYaw = cos(yaw);\r
    let sinYaw = sin(yaw);\r
\r
    // Forward direction vector based on yaw and pitch (Euler angles)\r
    let forward = vec3f(cosPitch * sinYaw, sinPitch, cosPitch * cosYaw);\r
\r
    // Right vector perpendicular to 'forward' and 'up'\r
    let right = normalize(cross(up, forward));\r
\r
    // Adjust 'up' vector to be perpendicular to 'forward' and 'right'\r
    let adjustedUp = cross(forward, right);\r
\r
    // Calculate normalized device coordinates (NDC) offset for field of view\r
    let fovTan = tan(fov / 2.0);\r
    let ndcX = p.x * fovTan * aspectRatio;\r
    let ndcY = p.y * fovTan;\r
\r
    // Calculate the final ray direction\r
    return normalize(forward + ndcX * right + ndcY * adjustedUp);\r
}\r
\r
\r
\r
\r
fn rayMarch(ro: vec3f, rd: vec3f) -> f32 {\r
    var d = C.NEAR_CLIP;\r
    var i: i32 = 0;\r
    loop {\r
        if i >= C.MAX_STEPS { break; }\r
        let p = ro + rd * d;\r
        let ds = getDist(p);\r
        d += ds;\r
        if d >= C.MAX_DIST || ds < C.SURF_DIST { break; }\r
        i++;\r
    }\r
    return d;\r
}\r
\r
\r
\r
\r
\r
\r
////////////////////////////////////////////////////////////////\r
// Scene constants\r
////////////////////////////////////////////////////////////////\r
\r
const numLights = 4;\r
const baseLightPower = 18.0;\r
const lights = array<vec3f, numLights>(\r
    vec3f(4.0, -2.0, -4.0),\r
    vec3f(-1, -.25, 1.),\r
    vec3f(0., -10.0, 0.),\r
    vec3f(0., 20.0, 0.)\r
);\r
const lightPowers = array<f32, numLights>( 4.0 , 1.0, 2.0, 1.0 );\r
const lightColors = array<vec3f, numLights>(\r
    vec3f(1.0, 0.9, 0.9),\r
    vec3f(1.0, 1.0, 1.0),\r
    vec3f(1.0, 1.0, 0.0),\r
    vec3f(1.0, 1.0, 0.0),\r
);\r
\r
\r
\r
\r
\r
@fragment\r
fn fragmentMain(@builtin(position) pos: vec4<f32>) -> @location(0) vec4f {\r
    let uv = (vec2(pos.x, pos.y) / C.resolution - 0.5) * 2.0; // Normalize screen coordinates\r
\r
    // Camera and ray setup\r
    let ro = C.upos;  // Camera position updated from uniforms\r
    let rt = vec3f(0.0, 0.0, 0.0); // World origin as the target position\r
    let up = vec3f(0.0, 1.0, 0.0); // World up vector\r
    let fovRadians = radians(50.0 * C.zoom); // Field of view adjusted by C.zoom\r
    let aspectRatio = C.resolution.x / C.resolution.y;\r
\r
    // Calculate ray direction and perform ray marching\r
    let rd = rayDirection(uv, ro, rt, up, C.urot.y, C.urot.x, fovRadians, aspectRatio);\r
    let d = rayMarch(ro, rd);\r
    // return vec4(vec3f(d / C.MAX_DIST), 1.0);\r
    // Background gradient computation\r
    var v = length(uv) * 0.75;\r
   \r
	let p = ro + rd * d;\r
\r
\r
	let skyGradient = mix(vec4f(0.0, 0.3, 0.8, 1.0), vec4f(0.6, 0.8, 1.0, 1.0),  p.y / 1000);\r
	let depthColor = select(mix(vec4f(0.0, 0.3, .8, 1.0), vec4f(0.0, 0.0, 0.0, 0.0), clamp(p.y / C.MAX_DEPTH, 0.0,1.0)),skyGradient, p.y < -C.SEA_LEVEL); // Pure blue at maximum distance\r
 	var fragColor = skyGradient;\r
    if (d <= C.MAX_DIST) {\r
        \r
        let N = getNormal(p);\r
        let V = -rd;\r
\r
        // PBR shading parameters\r
        // Calculate noise generation direction based on the surface normal and a slight angle off of vertical\r
// Calculate noise generation direction based on the surface normal and a slight angle off of vertical\r
// Define noise coordinates based on the position p and a scaling factor\r
// Inside the if (d <= C.MAX_DIST) block\r
// Lighting calculations\r
        let ambientIntensity = 0.001;  // Increased ambient intensity\r
        let ambientColor = vec3f(0.2, 0.2, 0.2);  // Adjust color if needed\r
// Calculate noise generation direction based on the surface normal and a slight angle off of vertical\r
let noiseAngle = radians(15.0); // Adjust the angle as desired\r
let noiseDirection = normalize(vec3f(sin(noiseAngle), 0.0, cos(noiseAngle))); // Rotate around y-axis\r
let noiseCoord = vec3f(p.x, p.y, p.z) / 70.0; // Adjust the scaling factor as needed\r
\r
// Adjust noise coordinates based on surface normal\r
let rotatedCoord = rotateVector(noiseCoord, N, noiseAngle) * 12;\r
let noiseValue = (snoise3(rotatedCoord + vec3f(0.0, 0.0, C.time * 2.0)) + 1.0) / 2.0; // Generate noise\r
\r
// Compute the influence of the noise based on the dot product between surface normal and noise direction\r
let noiseInfluence = max(dot(N, -noiseDirection) * 5, 0.0);\r
\r
// Modify the light contribution based on noise value and its influence\r
let causticMultiplier = 1.0 + noiseValue * noiseInfluence; // Adjust the multiplier as needed\r
\r
\r
        var albedo = mix(vec3f(1.0), vec3f(0.0, 0.1, 0.07), clamp(customNoise3D(p, 6.0, 0.1, C.OCTAVES, 0.0001 ) * 0.5,0.0, 0.15));\r
		albedo = mix(albedo, vec3f(0.0, 0.15, 0.05), clamp(customNoise3D(p, 6.0, 0.3, C.OCTAVES, C.NOISE_OFFSET) * 0.5,0.0, 0.3));\r
		albedo = mix(albedo, vec3f(0.0, 0.1, 0.03), clamp(customNoise3D(p, 6.0, 0.01, C.OCTAVES, C.NOISE_OFFSET) * 0.5,0.0, 0.8));\r
		albedo = mix(albedo, vec3f(0.0, 0.1, 0.03), clamp(p.y / C.MAX_DEPTH, 0.0,1.0));\r
        let roughness = 0.8;\r
        let metallic = 0.0;\r
        var F0 = vec3(0.04);\r
        F0 = mix(F0, albedo, metallic);\r
\r
        // Lighting calculation\r
        var Lo = vec3f(0.0);\r
        for (var i: i32 = 0; i < numLights; i++) {\r
            let lightPos = lights[i] + C.upos;\r
            let L = normalize(lightPos - p);\r
            let H = normalize(V + L);\r
            let radiance = lightColors[i] * (1.0 / (length(lightPos - p) * length(lightPos - p)));\r
            let NDF = DistributionGGX(N, H, roughness);\r
            let G = GeometrySmith(N, V, L, roughness);\r
            let F = fresnelSchlick(max(dot(H, V), 0.0), F0);\r
            let specular = NDF * G * F / (4.0 * max(dot(N, V), 0.0) * max(dot(N, L), 0.0) + 0.0001);\r
            Lo += (vec3f(1.0) - F + specular) * radiance * max(dot(N, L), 0.0) * baseLightPower * lightPowers[i] * causticMultiplier;\r
        }\r
\r
        let ambient = ambientColor * ambientIntensity;  // Apply ambient light\r
        var color = (ambient + Lo) * albedo;  // Combine lighting contributions\r
        color = color / (color + vec3f(1.0));  // Tone mapping\r
        color = pow(color, vec3f(1.0/2.2));  // Gamma correction\r
        fragColor = vec4(color, 1.0);\r
\r
        // Modify the output color based on distance to make distant objects bluer\r
       \r
        let blueFactor = d / C.MAX_DIST; // Normalize distance to range [0, 1]\r
        fragColor = mix(fragColor, depthColor, blueFactor + min(causticMultiplier, 0.1)); // Blwwwwend original color with blue based on distance\r
		\r
    }\r
\r
    return fragColor;\r
}\r
\r
// Function to rotate a vector around an axis\r
fn rotateVector(v: vec3f, axis: vec3f, angle: f32) -> vec3f {\r
    let c = cos(angle);\r
    let s = sin(angle);\r
    let t = 1.0 - c;\r
    let x = v.x;\r
    let y = v.y;\r
    let z = v.z;\r
    let nx = axis.x;\r
    let ny = axis.y;\r
    let nz = axis.z;\r
    let m00 = t * nx * nx + c;\r
    let m01 = t * nx * ny - s * nz;\r
    let m02 = t * nx * nz + s * ny;\r
    let m10 = t * nx * ny + s * nz;\r
    let m11 = t * ny * ny + c;\r
    let m12 = t * ny * nz - s * nx;\r
    let m20 = t * nx * nz - s * ny;\r
    let m21 = t * ny * nz + s * nx;\r
    let m22 = t * nz * nz + c;\r
    return vec3f(\r
        m00 * x + m01 * y + m02 * z,\r
        m10 * x + m11 * y + m12 * z,\r
        m20 * x + m21 * y + m22 * z\r
    );\r
}\r
\r
// @fragment\r
// fn fragmentMain(@builtin(position) pos: vec4<f32>) -> @location(0) vec4f {\r
//     let uv = (vec2(pos.x, pos.y) / C.resolution - 0.5) * 2.0; // Normalize screen coordinates\r
\r
//     // Camera and ray setup\r
//     let ro = C.upos;  // Camera position updated from uniforms\r
//     let rt = vec3f(0.0, 0.0, 0.0); // World origin as the target position\r
//     let up = vec3f(0.0, 1.0, 0.0); // World up vector\r
//     let fovRadians = radians(50.0 * C.zoom); // Field of view adjusted by C.zoom\r
//     let aspectRatio = C.resolution.x / C.resolution.y;\r
\r
//     // Calculate ray direction and perform ray marching\r
//     let rd = rayDirection(uv, ro, rt, up, C.urot.y, C.urot.x, fovRadians, aspectRatio);\r
//     let d = rayMarch(ro, rd);\r
\r
//     // Background gradient computation\r
//     var v = length(uv) * 0.75;\r
//     var fragColor = vec4f(mix(0.1, 0.2, smoothstep(0.0, 1.0, uv.y)));\r
//     fragColor += mix(vec4f(0.6, 0.6, 0.9, 1.0), vec4f(0.0, 0.0, 0.0, 1.0), v);  // Adjusted to a cooler tone\r
\r
//     if (d <= 100.0) {\r
//         let p = ro + rd * d;\r
\r
//         // Modify the output color based on distance traveled by the ray\r
//         let distanceFactor = clamp(d / 100.0, 0.0, 1.0); // Normalize distance to range [0, 1]\r
//         let grayscale = vec3f(distanceFactor); // Convert distance factor to grayscale color\r
//         let depthColor = vec4f(grayscale * vec3f(0.0, 0.0, 1.0), 1.0); // Multiply by blue color\r
\r
//         // Blend the original color with the distance-based color\r
//         fragColor = mix(fragColor, depthColor, distanceFactor);\r
//     }\r
\r
//     return fragColor;\r
// }\r
`,Vg={class:"control-item boolean"},Lg={ref:"label"},Dg={class:"label-text"},Fg={class:"control"},Hg=["checked"],Bg=zt({__name:"DatBoolean",props:jr({label:{default:""}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=Vr(t,"modelValue"),r=()=>{e.value=!e.value};return(n,o)=>(G(),rt("li",Vg,[P("label",Lg,[P("span",Dg,Jt(n.label),1),P("div",Fg,[P("input",{type:"checkbox",checked:e.value,onChange:r},null,40,Hg)])],512)]))}}),qg={class:"control-item button"},Ug=zt({__name:"DatButton",props:{label:{default:""}},emits:["click"],setup(t,{emit:e}){const r=e,n=o=>r("click",o);return(o,i)=>(G(),rt("li",qg,[P("label",{class:"w-100",ref:"label",onClick:n},Jt(o.label),513)]))}});function $g(t){return Gu()?(Oh(t),!0):!1}function po(t){return typeof t=="function"?t():Cr(t)}const Jf=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Gg=Object.prototype.toString,Wg=t=>Gg.call(t)==="[object Object]",an=()=>{},Kg=Xg();function Xg(){var t,e;return Jf&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Zf(t,e){function r(...n){return new Promise((o,i)=>{Promise.resolve(t(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})).then(o).catch(i)})}return r}const Qf=t=>t();function Yg(t,e={}){let r,n,o=an;const i=s=>{clearTimeout(s),o(),o=an};return s=>{const a=po(t),l=po(e.maxWait);return r&&i(r),a<=0||l!==void 0&&l<=0?(n&&(i(n),n=null),Promise.resolve(s())):new Promise((c,u)=>{o=e.rejectOnCancel?u:c,l&&!n&&(n=setTimeout(()=>{r&&i(r),n=null,c(s())},l)),r=setTimeout(()=>{n&&i(n),n=null,c(s())},a)})}}function Jg(t=Qf){const e=vt(!0);function r(){e.value=!1}function n(){e.value=!0}const o=(...i)=>{e.value&&t(...i)};return{isActive:ma(e),pause:r,resume:n,eventFilter:o}}function Zg(t){return Ma()}function Mr(t,e=200,r={}){return Zf(Yg(e,r),t)}function Qg(t,e,r={}){const{eventFilter:n=Qf,...o}=r;return ve(t,Zf(n,e),o)}function t0(t,e,r={}){const{eventFilter:n,...o}=r,{eventFilter:i,pause:s,resume:a,isActive:l}=Jg(n);return{stop:Qg(t,e,{...o,eventFilter:i}),pause:s,resume:a,isActive:l}}function Dr(t,e=!0,r){Zg()?Sa(t,r):e?t():bo(t)}function Gt(t,e,r){return ve(t,(n,o,i)=>{n&&e(n,o,i)},r)}function qn(t){var e;const r=po(t);return(e=r==null?void 0:r.$el)!=null?e:r}const vo=Jf?window:void 0;function to(...t){let e,r,n,o;if(typeof t[0]=="string"||Array.isArray(t[0])?([r,n,o]=t,e=vo):[e,r,n,o]=t,!e)return an;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const i=[],s=()=>{i.forEach(u=>u()),i.length=0},a=(u,f,d,v)=>(u.addEventListener(f,d,v),()=>u.removeEventListener(f,d,v)),l=ve(()=>[qn(e),po(o)],([u,f])=>{if(s(),!u)return;const d=Wg(f)?{...f}:f;i.push(...r.flatMap(v=>n.map(x=>a(u,v,x,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),s()};return $g(c),c}let vc=!1;function e0(t,e,r={}){const{window:n=vo,ignore:o=[],capture:i=!0,detectIframe:s=!1}=r;if(!n)return an;Kg&&!vc&&(vc=!0,Array.from(n.document.body.children).forEach(u=>u.addEventListener("click",an)),n.document.documentElement.addEventListener("click",an));let a=!0;const l=u=>o.some(f=>{if(typeof f=="string")return Array.from(n.document.querySelectorAll(f)).some(d=>d===u.target||u.composedPath().includes(d));{const d=qn(f);return d&&(u.target===d||u.composedPath().includes(d))}}),c=[to(n,"click",u=>{const f=qn(t);if(!(!f||f===u.target||u.composedPath().includes(f))){if(u.detail===0&&(a=!l(u)),!a){a=!0;return}e(u)}},{passive:!0,capture:i}),to(n,"pointerdown",u=>{const f=qn(t);a=!l(u)&&!!(f&&!u.composedPath().includes(f))},{passive:!0}),s&&to(n,"blur",u=>{setTimeout(()=>{var f;const d=qn(t);((f=n.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(d!=null&&d.contains(n.document.activeElement))&&e(u)},0)})].filter(Boolean);return()=>c.forEach(u=>u())}const Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ho="__vueuse_ssr_handlers__",r0=n0();function n0(){return Ho in Fo||(Fo[Ho]=Fo[Ho]||{}),Fo[Ho]}function o0(t,e){return r0[t]||e}function i0(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const s0={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},gc="vueuse-storage";function a0(t,e,r,n={}){var o;const{flush:i="pre",deep:s=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:f=vo,eventFilter:d,onError:v=T=>{console.error(T)},initOnMounted:x}=n,_=(u?Qh:vt)(typeof e=="function"?e():e);if(!r)try{r=o0("getDefaultStorage",()=>{var T;return(T=vo)==null?void 0:T.localStorage})()}catch(T){v(T)}if(!r)return _;const b=po(e),w=i0(b),A=(o=n.serializer)!=null?o:s0[w],{pause:R,resume:j}=t0(_,()=>B(_.value),{flush:i,deep:s,eventFilter:d});return f&&a&&Dr(()=>{to(f,"storage",Y),to(f,gc,W),x&&Y()}),x||Y(),_;function B(T){try{if(T==null)r.removeItem(t);else{const F=A.write(T),C=r.getItem(t);C!==F&&(r.setItem(t,F),f&&f.dispatchEvent(new CustomEvent(gc,{detail:{key:t,oldValue:C,newValue:F,storageArea:r}})))}}catch(F){v(F)}}function O(T){const F=T?T.newValue:r.getItem(t);if(F==null)return l&&b!=null&&r.setItem(t,A.write(b)),b;if(!T&&c){const C=A.read(F);return typeof c=="function"?c(C,b):w==="object"&&!Array.isArray(C)?{...b,...C}:C}else return typeof F!="string"?F:A.read(F)}function W(T){Y(T.detail)}function Y(T){if(!(T&&T.storageArea!==r)){if(T&&T.key==null){_.value=b;return}if(!(T&&T.key!==t)){R();try{(T==null?void 0:T.newValue)!==A.write(_.value)&&(_.value=O(T))}catch(F){v(F)}finally{T?bo(j):j()}}}}}function Na(t,e,r={}){const{window:n=vo}=r;return a0(t,e,n==null?void 0:n.localStorage,r)}function ci(t){"@babel/helpers - typeof";return ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ci(t)}var l0=/^\s+/,c0=/\s+$/;function D(t,e){if(t=t||"",e=e||{},t instanceof D)return t;if(!(this instanceof D))return new D(t,e);var r=u0(t);this._originalInput=t,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||r.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}D.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},getLuminance:function(){var t=this.toRgb(),e,r,n,o,i,s;return e=t.r/255,r=t.g/255,n=t.b/255,e<=.03928?o=e/12.92:o=Math.pow((e+.055)/1.055,2.4),r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),.2126*o+.7152*i+.0722*s},setAlpha:function(t){return this._a=td(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=yc(this._r,this._g,this._b);return{h:t.h*360,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=yc(this._r,this._g,this._b),e=Math.round(t.h*360),r=Math.round(t.s*100),n=Math.round(t.v*100);return this._a==1?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=mc(this._r,this._g,this._b);return{h:t.h*360,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=mc(this._r,this._g,this._b),e=Math.round(t.h*360),r=Math.round(t.s*100),n=Math.round(t.l*100);return this._a==1?"hsl("+e+", "+r+"%, "+n+"%)":"hsla("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return _c(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return p0(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(bt(this._r,255)*100)+"%",g:Math.round(bt(this._g,255)*100)+"%",b:Math.round(bt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(bt(this._r,255)*100)+"%, "+Math.round(bt(this._g,255)*100)+"%, "+Math.round(bt(this._b,255)*100)+"%)":"rgba("+Math.round(bt(this._r,255)*100)+"%, "+Math.round(bt(this._g,255)*100)+"%, "+Math.round(bt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:E0[_c(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var e="#"+xc(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var o=D(t);r="#"+xc(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0,o=!e&&n&&(t==="hex"||t==="hex6"||t==="hex3"||t==="hex4"||t==="hex8"||t==="name");return o?t==="name"&&this._a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return D(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(y0,arguments)},brighten:function(){return this._applyModification(_0,arguments)},darken:function(){return this._applyModification(x0,arguments)},desaturate:function(){return this._applyModification(v0,arguments)},saturate:function(){return this._applyModification(g0,arguments)},greyscale:function(){return this._applyModification(m0,arguments)},spin:function(){return this._applyModification(b0,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(S0,arguments)},complement:function(){return this._applyCombination(w0,arguments)},monochromatic:function(){return this._applyCombination(C0,arguments)},splitcomplement:function(){return this._applyCombination(k0,arguments)},triad:function(){return this._applyCombination(bc,[3])},tetrad:function(){return this._applyCombination(bc,[4])}};D.fromRatio=function(t,e){if(ci(t)=="object"){var r={};for(var n in t)t.hasOwnProperty(n)&&(n==="a"?r[n]=t[n]:r[n]=Un(t[n]));t=r}return D(t,e)};function u0(t){var e={r:0,g:0,b:0},r=1,n=null,o=null,i=null,s=!1,a=!1;return typeof t=="string"&&(t=O0(t)),ci(t)=="object"&&(Be(t.r)&&Be(t.g)&&Be(t.b)?(e=f0(t.r,t.g,t.b),s=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Be(t.h)&&Be(t.s)&&Be(t.v)?(n=Un(t.s),o=Un(t.v),e=h0(t.h,n,o),s=!0,a="hsv"):Be(t.h)&&Be(t.s)&&Be(t.l)&&(n=Un(t.s),i=Un(t.l),e=d0(t.h,n,i),s=!0,a="hsl"),t.hasOwnProperty("a")&&(r=t.a)),r=td(r),{ok:s,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}function f0(t,e,r){return{r:bt(t,255)*255,g:bt(e,255)*255,b:bt(r,255)*255}}function mc(t,e,r){t=bt(t,255),e=bt(e,255),r=bt(r,255);var n=Math.max(t,e,r),o=Math.min(t,e,r),i,s,a=(n+o)/2;if(n==o)i=s=0;else{var l=n-o;switch(s=a>.5?l/(2-n-o):l/(n+o),n){case t:i=(e-r)/l+(e<r?6:0);break;case e:i=(r-t)/l+2;break;case r:i=(t-e)/l+4;break}i/=6}return{h:i,s,l:a}}function d0(t,e,r){var n,o,i;t=bt(t,360),e=bt(e,100),r=bt(r,100);function s(c,u,f){return f<0&&(f+=1),f>1&&(f-=1),f<1/6?c+(u-c)*6*f:f<1/2?u:f<2/3?c+(u-c)*(2/3-f)*6:c}if(e===0)n=o=i=r;else{var a=r<.5?r*(1+e):r+e-r*e,l=2*r-a;n=s(l,a,t+1/3),o=s(l,a,t),i=s(l,a,t-1/3)}return{r:n*255,g:o*255,b:i*255}}function yc(t,e,r){t=bt(t,255),e=bt(e,255),r=bt(r,255);var n=Math.max(t,e,r),o=Math.min(t,e,r),i,s,a=n,l=n-o;if(s=n===0?0:l/n,n==o)i=0;else{switch(n){case t:i=(e-r)/l+(e<r?6:0);break;case e:i=(r-t)/l+2;break;case r:i=(t-e)/l+4;break}i/=6}return{h:i,s,v:a}}function h0(t,e,r){t=bt(t,360)*6,e=bt(e,100),r=bt(r,100);var n=Math.floor(t),o=t-n,i=r*(1-e),s=r*(1-o*e),a=r*(1-(1-o)*e),l=n%6,c=[r,s,i,i,a,r][l],u=[a,r,r,s,i,i][l],f=[i,i,a,r,r,s][l];return{r:c*255,g:u*255,b:f*255}}function _c(t,e,r,n){var o=[Ae(Math.round(t).toString(16)),Ae(Math.round(e).toString(16)),Ae(Math.round(r).toString(16))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function p0(t,e,r,n,o){var i=[Ae(Math.round(t).toString(16)),Ae(Math.round(e).toString(16)),Ae(Math.round(r).toString(16)),Ae(ed(n))];return o&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function xc(t,e,r,n){var o=[Ae(ed(n)),Ae(Math.round(t).toString(16)),Ae(Math.round(e).toString(16)),Ae(Math.round(r).toString(16))];return o.join("")}D.equals=function(t,e){return!t||!e?!1:D(t).toRgbString()==D(e).toRgbString()};D.random=function(){return D.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function v0(t,e){e=e===0?0:e||10;var r=D(t).toHsl();return r.s-=e/100,r.s=Vi(r.s),D(r)}function g0(t,e){e=e===0?0:e||10;var r=D(t).toHsl();return r.s+=e/100,r.s=Vi(r.s),D(r)}function m0(t){return D(t).desaturate(100)}function y0(t,e){e=e===0?0:e||10;var r=D(t).toHsl();return r.l+=e/100,r.l=Vi(r.l),D(r)}function _0(t,e){e=e===0?0:e||10;var r=D(t).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(e/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(e/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(e/100)))),D(r)}function x0(t,e){e=e===0?0:e||10;var r=D(t).toHsl();return r.l-=e/100,r.l=Vi(r.l),D(r)}function b0(t,e){var r=D(t).toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,D(r)}function w0(t){var e=D(t).toHsl();return e.h=(e.h+180)%360,D(e)}function bc(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var r=D(t).toHsl(),n=[D(t)],o=360/e,i=1;i<e;i++)n.push(D({h:(r.h+i*o)%360,s:r.s,l:r.l}));return n}function k0(t){var e=D(t).toHsl(),r=e.h;return[D(t),D({h:(r+72)%360,s:e.s,l:e.l}),D({h:(r+216)%360,s:e.s,l:e.l})]}function S0(t,e,r){e=e||6,r=r||30;var n=D(t).toHsl(),o=360/r,i=[D(t)];for(n.h=(n.h-(o*e>>1)+720)%360;--e;)n.h=(n.h+o)%360,i.push(D(n));return i}function C0(t,e){e=e||6;for(var r=D(t).toHsv(),n=r.h,o=r.s,i=r.v,s=[],a=1/e;e--;)s.push(D({h:n,s:o,v:i})),i=(i+a)%1;return s}D.mix=function(t,e,r){r=r===0?0:r||50;var n=D(t).toRgb(),o=D(e).toRgb(),i=r/100,s={r:(o.r-n.r)*i+n.r,g:(o.g-n.g)*i+n.g,b:(o.b-n.b)*i+n.b,a:(o.a-n.a)*i+n.a};return D(s)};D.readability=function(t,e){var r=D(t),n=D(e);return(Math.max(r.getLuminance(),n.getLuminance())+.05)/(Math.min(r.getLuminance(),n.getLuminance())+.05)};D.isReadable=function(t,e,r){var n=D.readability(t,e),o,i;switch(i=!1,o=M0(r),o.level+o.size){case"AAsmall":case"AAAlarge":i=n>=4.5;break;case"AAlarge":i=n>=3;break;case"AAAsmall":i=n>=7;break}return i};D.mostReadable=function(t,e,r){var n=null,o=0,i,s,a,l;r=r||{},s=r.includeFallbackColors,a=r.level,l=r.size;for(var c=0;c<e.length;c++)i=D.readability(t,e[c]),i>o&&(o=i,n=D(e[c]));return D.isReadable(t,n,{level:a,size:l})||!s?n:(r.includeFallbackColors=!1,D.mostReadable(t,["#fff","#000"],r))};var Gs=D.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},E0=D.hexNames=A0(Gs);function A0(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}function td(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function bt(t,e){z0(t)&&(t="100%");var r=T0(t);return t=Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function Vi(t){return Math.min(1,Math.max(0,t))}function se(t){return parseInt(t,16)}function z0(t){return typeof t=="string"&&t.indexOf(".")!=-1&&parseFloat(t)===1}function T0(t){return typeof t=="string"&&t.indexOf("%")!=-1}function Ae(t){return t.length==1?"0"+t:""+t}function Un(t){return t<=1&&(t=t*100+"%"),t}function ed(t){return Math.round(parseFloat(t)*255).toString(16)}function wc(t){return se(t)/255}var Ce=function(){var t="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",r="(?:"+e+")|(?:"+t+")",n="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",o="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?";return{CSS_UNIT:new RegExp(r),rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+o),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+o),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+o),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Be(t){return!!Ce.CSS_UNIT.exec(t)}function O0(t){t=t.replace(l0,"").replace(c0,"").toLowerCase();var e=!1;if(Gs[t])t=Gs[t],e=!0;else if(t=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r;return(r=Ce.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=Ce.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Ce.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=Ce.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Ce.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=Ce.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Ce.hex8.exec(t))?{r:se(r[1]),g:se(r[2]),b:se(r[3]),a:wc(r[4]),format:e?"name":"hex8"}:(r=Ce.hex6.exec(t))?{r:se(r[1]),g:se(r[2]),b:se(r[3]),format:e?"name":"hex"}:(r=Ce.hex4.exec(t))?{r:se(r[1]+""+r[1]),g:se(r[2]+""+r[2]),b:se(r[3]+""+r[3]),a:wc(r[4]+""+r[4]),format:e?"name":"hex8"}:(r=Ce.hex3.exec(t))?{r:se(r[1]+""+r[1]),g:se(r[2]+""+r[2]),b:se(r[3]+""+r[3]),format:e?"name":"hex"}:!1}function M0(t){var e,r;return t=t||{level:"AA",size:"small"},e=(t.level||"AA").toUpperCase(),r=(t.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),r!=="small"&&r!=="large"&&(r="small"),{level:e,size:r}}var Fr=Fr||{};Fr.stringify=function(){var t={"visit_linear-gradient":function(e){return t.visit_gradient(e)},"visit_repeating-linear-gradient":function(e){return t.visit_gradient(e)},"visit_radial-gradient":function(e){return t.visit_gradient(e)},"visit_repeating-radial-gradient":function(e){return t.visit_gradient(e)},visit_gradient:function(e){var r=t.visit(e.orientation);return r&&(r+=", "),e.type+"("+r+t.visit(e.colorStops)+")"},visit_shape:function(e){var r=e.value,n=t.visit(e.at),o=t.visit(e.style);return o&&(r+=" "+o),n&&(r+=" at "+n),r},"visit_default-radial":function(e){var r="",n=t.visit(e.at);return n&&(r+=n),r},"visit_extent-keyword":function(e){var r=e.value,n=t.visit(e.at);return n&&(r+=" at "+n),r},"visit_position-keyword":function(e){return e.value},visit_position:function(e){return t.visit(e.value.x)+" "+t.visit(e.value.y)},"visit_%":function(e){return e.value+"%"},visit_em:function(e){return e.value+"em"},visit_px:function(e){return e.value+"px"},visit_literal:function(e){return t.visit_color(e.value,e)},visit_hex:function(e){return t.visit_color("#"+e.value,e)},visit_rgb:function(e){return t.visit_color("rgb("+e.value.join(", ")+")",e)},visit_rgba:function(e){return t.visit_color("rgba("+e.value.join(", ")+")",e)},visit_color:function(e,r){var n=e,o=t.visit(r.length);return o&&(n+=" "+o),n},visit_angular:function(e){return e.value+"deg"},visit_directional:function(e){return"to "+e.value},visit_array:function(e){var r="",n=e.length;return e.forEach(function(o,i){r+=t.visit(o),i<n-1&&(r+=", ")}),r},visit:function(e){if(!e)return"";var r="";if(e instanceof Array)return t.visit_array(e,r);if(e.type){var n=t["visit_"+e.type];if(n)return n(e);throw Error("Missing visitor visit_"+e.type)}else throw Error("Invalid node.")}};return function(e){return t.visit(e)}}();var Fr=Fr||{};Fr.parse=function(){var t={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},e="";function r(I){var q=new Error(e+": "+I);throw q.source=e,q}function n(){var I=o();return e.length>0&&r("Invalid input not EOF"),I}function o(){return R(i)}function i(){return s("linear-gradient",t.linearGradient,l)||s("repeating-linear-gradient",t.repeatingLinearGradient,l)||s("radial-gradient",t.radialGradient,f)||s("repeating-radial-gradient",t.repeatingRadialGradient,f)}function s(I,q,st){return a(q,function(St){var Dt=st();return Dt&&($(t.comma)||r("Missing comma before color stops")),{type:I,orientation:Dt,colorStops:R(j)}})}function a(I,q){var st=$(I);if(st){$(t.startCall)||r("Missing (");var St=q(st);return $(t.endCall)||r("Missing )"),St}}function l(){return c()||u()}function c(){return ot("directional",t.sideOrCorner,1)}function u(){return ot("angular",t.angleValue,1)}function f(){var I,q=d(),st;return q&&(I=[],I.push(q),st=e,$(t.comma)&&(q=d(),q?I.push(q):e=st)),I}function d(){var I=v()||x();if(I)I.at=b();else{var q=_();if(q){I=q;var st=b();st&&(I.at=st)}else{var St=w();St&&(I={type:"default-radial",at:St})}}return I}function v(){var I=ot("shape",/^(circle)/i,0);return I&&(I.style=K()||_()),I}function x(){var I=ot("shape",/^(ellipse)/i,0);return I&&(I.style=C()||_()),I}function _(){return ot("extent-keyword",t.extentKeywords,1)}function b(){if(ot("position",/^at/,0)){var I=w();return I||r("Missing positioning value"),I}}function w(){var I=A();if(I.x||I.y)return{type:"position",value:I}}function A(){return{x:C(),y:C()}}function R(I){var q=I(),st=[];if(q)for(st.push(q);$(t.comma);)q=I(),q?st.push(q):r("One extra comma");return st}function j(){var I=B();return I||r("Expected color definition"),I.length=C(),I}function B(){return W()||T()||Y()||O()}function O(){return ot("literal",t.literalColor,0)}function W(){return ot("hex",t.hexColor,1)}function Y(){return a(t.rgbColor,function(){return{type:"rgb",value:R(F)}})}function T(){return a(t.rgbaColor,function(){return{type:"rgba",value:R(F)}})}function F(){return $(t.number)[1]}function C(){return ot("%",t.percentageValue,1)||nt()||K()}function nt(){return ot("position-keyword",t.positionKeywords,1)}function K(){return ot("px",t.pixelValue,1)||ot("em",t.emValue,1)}function ot(I,q,st){var St=$(q);if(St)return{type:I,value:St[st]}}function $(I){var q,st;return st=/^[\n\r\t\s]+/.exec(e),st&&et(st[0].length),q=I.exec(e),q&&et(q[0].length),q}function et(I){e=e.substr(I)}return function(I){return e=I.toString(),n()}}();var I0=Fr.parse,R0=Fr.stringify,te="top",ye="bottom",_e="right",ee="left",Pa="auto",ko=[te,ye,_e,ee],dn="start",go="end",N0="clippingParents",rd="viewport",Pn="popper",P0="reference",kc=ko.reduce(function(t,e){return t.concat([e+"-"+dn,e+"-"+go])},[]),nd=[].concat(ko,[Pa]).reduce(function(t,e){return t.concat([e,e+"-"+dn,e+"-"+go])},[]),j0="beforeRead",V0="read",L0="afterRead",D0="beforeMain",F0="main",H0="afterMain",B0="beforeWrite",q0="write",U0="afterWrite",$0=[j0,V0,L0,D0,F0,H0,B0,q0,U0];function Fe(t){return t?(t.nodeName||"").toLowerCase():null}function fe(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Ir(t){var e=fe(t).Element;return t instanceof e||t instanceof Element}function ge(t){var e=fe(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function ja(t){if(typeof ShadowRoot>"u")return!1;var e=fe(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function G0(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},o=e.attributes[r]||{},i=e.elements[r];!ge(i)||!Fe(i)||(Object.assign(i.style,n),Object.keys(o).forEach(function(s){var a=o[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function W0(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var o=e.elements[n],i=e.attributes[n]||{},s=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),a=s.reduce(function(l,c){return l[c]="",l},{});!ge(o)||!Fe(o)||(Object.assign(o.style,a),Object.keys(i).forEach(function(l){o.removeAttribute(l)}))})}}const K0={name:"applyStyles",enabled:!0,phase:"write",fn:G0,effect:W0,requires:["computeStyles"]};function Ve(t){return t.split("-")[0]}var Or=Math.max,ui=Math.min,hn=Math.round;function Ws(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function od(){return!/^((?!chrome|android).)*safari/i.test(Ws())}function pn(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),o=1,i=1;e&&ge(t)&&(o=t.offsetWidth>0&&hn(n.width)/t.offsetWidth||1,i=t.offsetHeight>0&&hn(n.height)/t.offsetHeight||1);var s=Ir(t)?fe(t):window,a=s.visualViewport,l=!od()&&r,c=(n.left+(l&&a?a.offsetLeft:0))/o,u=(n.top+(l&&a?a.offsetTop:0))/i,f=n.width/o,d=n.height/i;return{width:f,height:d,top:u,right:c+f,bottom:u+d,left:c,x:c,y:u}}function Va(t){var e=pn(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function id(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&ja(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Ke(t){return fe(t).getComputedStyle(t)}function X0(t){return["table","td","th"].indexOf(Fe(t))>=0}function gr(t){return((Ir(t)?t.ownerDocument:t.document)||window.document).documentElement}function Li(t){return Fe(t)==="html"?t:t.assignedSlot||t.parentNode||(ja(t)?t.host:null)||gr(t)}function Sc(t){return!ge(t)||Ke(t).position==="fixed"?null:t.offsetParent}function Y0(t){var e=/firefox/i.test(Ws()),r=/Trident/i.test(Ws());if(r&&ge(t)){var n=Ke(t);if(n.position==="fixed")return null}var o=Li(t);for(ja(o)&&(o=o.host);ge(o)&&["html","body"].indexOf(Fe(o))<0;){var i=Ke(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function So(t){for(var e=fe(t),r=Sc(t);r&&X0(r)&&Ke(r).position==="static";)r=Sc(r);return r&&(Fe(r)==="html"||Fe(r)==="body"&&Ke(r).position==="static")?e:r||Y0(t)||e}function La(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function eo(t,e,r){return Or(t,ui(e,r))}function J0(t,e,r){var n=eo(t,e,r);return n>r?r:n}function sd(){return{top:0,right:0,bottom:0,left:0}}function ad(t){return Object.assign({},sd(),t)}function ld(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var Z0=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,ad(typeof t!="number"?t:ld(t,ko))};function Q0(t){var e,r=t.state,n=t.name,o=t.options,i=r.elements.arrow,s=r.modifiersData.popperOffsets,a=Ve(r.placement),l=La(a),c=[ee,_e].indexOf(a)>=0,u=c?"height":"width";if(!(!i||!s)){var f=Z0(o.padding,r),d=Va(i),v=l==="y"?te:ee,x=l==="y"?ye:_e,_=r.rects.reference[u]+r.rects.reference[l]-s[l]-r.rects.popper[u],b=s[l]-r.rects.reference[l],w=So(i),A=w?l==="y"?w.clientHeight||0:w.clientWidth||0:0,R=_/2-b/2,j=f[v],B=A-d[u]-f[x],O=A/2-d[u]/2+R,W=eo(j,O,B),Y=l;r.modifiersData[n]=(e={},e[Y]=W,e.centerOffset=W-O,e)}}function tm(t){var e=t.state,r=t.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=e.elements.popper.querySelector(o),!o)||id(e.elements.popper,o)&&(e.elements.arrow=o))}const em={name:"arrow",enabled:!0,phase:"main",fn:Q0,effect:tm,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function vn(t){return t.split("-")[1]}var rm={top:"auto",right:"auto",bottom:"auto",left:"auto"};function nm(t,e){var r=t.x,n=t.y,o=e.devicePixelRatio||1;return{x:hn(r*o)/o||0,y:hn(n*o)/o||0}}function Cc(t){var e,r=t.popper,n=t.popperRect,o=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,f=t.isFixed,d=s.x,v=d===void 0?0:d,x=s.y,_=x===void 0?0:x,b=typeof u=="function"?u({x:v,y:_}):{x:v,y:_};v=b.x,_=b.y;var w=s.hasOwnProperty("x"),A=s.hasOwnProperty("y"),R=ee,j=te,B=window;if(c){var O=So(r),W="clientHeight",Y="clientWidth";if(O===fe(r)&&(O=gr(r),Ke(O).position!=="static"&&a==="absolute"&&(W="scrollHeight",Y="scrollWidth")),O=O,o===te||(o===ee||o===_e)&&i===go){j=ye;var T=f&&O===B&&B.visualViewport?B.visualViewport.height:O[W];_-=T-n.height,_*=l?1:-1}if(o===ee||(o===te||o===ye)&&i===go){R=_e;var F=f&&O===B&&B.visualViewport?B.visualViewport.width:O[Y];v-=F-n.width,v*=l?1:-1}}var C=Object.assign({position:a},c&&rm),nt=u===!0?nm({x:v,y:_},fe(r)):{x:v,y:_};if(v=nt.x,_=nt.y,l){var K;return Object.assign({},C,(K={},K[j]=A?"0":"",K[R]=w?"0":"",K.transform=(B.devicePixelRatio||1)<=1?"translate("+v+"px, "+_+"px)":"translate3d("+v+"px, "+_+"px, 0)",K))}return Object.assign({},C,(e={},e[j]=A?_+"px":"",e[R]=w?v+"px":"",e.transform="",e))}function om(t){var e=t.state,r=t.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,s=i===void 0?!0:i,a=r.roundOffsets,l=a===void 0?!0:a,c={placement:Ve(e.placement),variation:vn(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Cc(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Cc(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const im={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:om,data:{}};var Bo={passive:!0};function sm(t){var e=t.state,r=t.instance,n=t.options,o=n.scroll,i=o===void 0?!0:o,s=n.resize,a=s===void 0?!0:s,l=fe(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach(function(u){u.addEventListener("scroll",r.update,Bo)}),a&&l.addEventListener("resize",r.update,Bo),function(){i&&c.forEach(function(u){u.removeEventListener("scroll",r.update,Bo)}),a&&l.removeEventListener("resize",r.update,Bo)}}const am={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:sm,data:{}};var lm={left:"right",right:"left",bottom:"top",top:"bottom"};function Xo(t){return t.replace(/left|right|bottom|top/g,function(e){return lm[e]})}var cm={start:"end",end:"start"};function Ec(t){return t.replace(/start|end/g,function(e){return cm[e]})}function Da(t){var e=fe(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Fa(t){return pn(gr(t)).left+Da(t).scrollLeft}function um(t,e){var r=fe(t),n=gr(t),o=r.visualViewport,i=n.clientWidth,s=n.clientHeight,a=0,l=0;if(o){i=o.width,s=o.height;var c=od();(c||!c&&e==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:i,height:s,x:a+Fa(t),y:l}}function fm(t){var e,r=gr(t),n=Da(t),o=(e=t.ownerDocument)==null?void 0:e.body,i=Or(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=Or(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+Fa(t),l=-n.scrollTop;return Ke(o||r).direction==="rtl"&&(a+=Or(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function Ha(t){var e=Ke(t),r=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function cd(t){return["html","body","#document"].indexOf(Fe(t))>=0?t.ownerDocument.body:ge(t)&&Ha(t)?t:cd(Li(t))}function ro(t,e){var r;e===void 0&&(e=[]);var n=cd(t),o=n===((r=t.ownerDocument)==null?void 0:r.body),i=fe(n),s=o?[i].concat(i.visualViewport||[],Ha(n)?n:[]):n,a=e.concat(s);return o?a:a.concat(ro(Li(s)))}function Ks(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function dm(t,e){var r=pn(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Ac(t,e,r){return e===rd?Ks(um(t,r)):Ir(e)?dm(e,r):Ks(fm(gr(t)))}function hm(t){var e=ro(Li(t)),r=["absolute","fixed"].indexOf(Ke(t).position)>=0,n=r&&ge(t)?So(t):t;return Ir(n)?e.filter(function(o){return Ir(o)&&id(o,n)&&Fe(o)!=="body"}):[]}function pm(t,e,r,n){var o=e==="clippingParents"?hm(t):[].concat(e),i=[].concat(o,[r]),s=i[0],a=i.reduce(function(l,c){var u=Ac(t,c,n);return l.top=Or(u.top,l.top),l.right=ui(u.right,l.right),l.bottom=ui(u.bottom,l.bottom),l.left=Or(u.left,l.left),l},Ac(t,s,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ud(t){var e=t.reference,r=t.element,n=t.placement,o=n?Ve(n):null,i=n?vn(n):null,s=e.x+e.width/2-r.width/2,a=e.y+e.height/2-r.height/2,l;switch(o){case te:l={x:s,y:e.y-r.height};break;case ye:l={x:s,y:e.y+e.height};break;case _e:l={x:e.x+e.width,y:a};break;case ee:l={x:e.x-r.width,y:a};break;default:l={x:e.x,y:e.y}}var c=o?La(o):null;if(c!=null){var u=c==="y"?"height":"width";switch(i){case dn:l[c]=l[c]-(e[u]/2-r[u]/2);break;case go:l[c]=l[c]+(e[u]/2-r[u]/2);break}}return l}function mo(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=n===void 0?t.placement:n,i=r.strategy,s=i===void 0?t.strategy:i,a=r.boundary,l=a===void 0?N0:a,c=r.rootBoundary,u=c===void 0?rd:c,f=r.elementContext,d=f===void 0?Pn:f,v=r.altBoundary,x=v===void 0?!1:v,_=r.padding,b=_===void 0?0:_,w=ad(typeof b!="number"?b:ld(b,ko)),A=d===Pn?P0:Pn,R=t.rects.popper,j=t.elements[x?A:d],B=pm(Ir(j)?j:j.contextElement||gr(t.elements.popper),l,u,s),O=pn(t.elements.reference),W=ud({reference:O,element:R,strategy:"absolute",placement:o}),Y=Ks(Object.assign({},R,W)),T=d===Pn?Y:O,F={top:B.top-T.top+w.top,bottom:T.bottom-B.bottom+w.bottom,left:B.left-T.left+w.left,right:T.right-B.right+w.right},C=t.modifiersData.offset;if(d===Pn&&C){var nt=C[o];Object.keys(F).forEach(function(K){var ot=[_e,ye].indexOf(K)>=0?1:-1,$=[te,ye].indexOf(K)>=0?"y":"x";F[K]+=nt[$]*ot})}return F}function vm(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=r.boundary,i=r.rootBoundary,s=r.padding,a=r.flipVariations,l=r.allowedAutoPlacements,c=l===void 0?nd:l,u=vn(n),f=u?a?kc:kc.filter(function(x){return vn(x)===u}):ko,d=f.filter(function(x){return c.indexOf(x)>=0});d.length===0&&(d=f);var v=d.reduce(function(x,_){return x[_]=mo(t,{placement:_,boundary:o,rootBoundary:i,padding:s})[Ve(_)],x},{});return Object.keys(v).sort(function(x,_){return v[x]-v[_]})}function gm(t){if(Ve(t)===Pa)return[];var e=Xo(t);return[Ec(t),e,Ec(e)]}function mm(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,s=r.altAxis,a=s===void 0?!0:s,l=r.fallbackPlacements,c=r.padding,u=r.boundary,f=r.rootBoundary,d=r.altBoundary,v=r.flipVariations,x=v===void 0?!0:v,_=r.allowedAutoPlacements,b=e.options.placement,w=Ve(b),A=w===b,R=l||(A||!x?[Xo(b)]:gm(b)),j=[b].concat(R).reduce(function(we,ke){return we.concat(Ve(ke)===Pa?vm(e,{placement:ke,boundary:u,rootBoundary:f,padding:c,flipVariations:x,allowedAutoPlacements:_}):ke)},[]),B=e.rects.reference,O=e.rects.popper,W=new Map,Y=!0,T=j[0],F=0;F<j.length;F++){var C=j[F],nt=Ve(C),K=vn(C)===dn,ot=[te,ye].indexOf(nt)>=0,$=ot?"width":"height",et=mo(e,{placement:C,boundary:u,rootBoundary:f,altBoundary:d,padding:c}),I=ot?K?_e:ee:K?ye:te;B[$]>O[$]&&(I=Xo(I));var q=Xo(I),st=[];if(i&&st.push(et[nt]<=0),a&&st.push(et[I]<=0,et[q]<=0),st.every(function(we){return we})){T=C,Y=!1;break}W.set(C,st)}if(Y)for(var St=x?3:1,Dt=function(we){var ke=j.find(function(Zt){var Oe=W.get(Zt);if(Oe)return Oe.slice(0,we).every(function(Me){return Me})});if(ke)return T=ke,"break"},Et=St;Et>0;Et--){var be=Dt(Et);if(be==="break")break}e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}}const ym={name:"flip",enabled:!0,phase:"main",fn:mm,requiresIfExists:["offset"],data:{_skip:!1}};function zc(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Tc(t){return[te,_e,ye,ee].some(function(e){return t[e]>=0})}function _m(t){var e=t.state,r=t.name,n=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,s=mo(e,{elementContext:"reference"}),a=mo(e,{altBoundary:!0}),l=zc(s,n),c=zc(a,o,i),u=Tc(l),f=Tc(c);e.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const xm={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:_m};function bm(t,e,r){var n=Ve(t),o=[ee,te].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,s=i[0],a=i[1];return s=s||0,a=(a||0)*o,[ee,_e].indexOf(n)>=0?{x:a,y:s}:{x:s,y:a}}function wm(t){var e=t.state,r=t.options,n=t.name,o=r.offset,i=o===void 0?[0,0]:o,s=nd.reduce(function(u,f){return u[f]=bm(f,e.rects,i),u},{}),a=s[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=s}const km={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:wm};function Sm(t){var e=t.state,r=t.name;e.modifiersData[r]=ud({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Cm={name:"popperOffsets",enabled:!0,phase:"read",fn:Sm,data:{}};function Em(t){return t==="x"?"y":"x"}function Am(t){var e=t.state,r=t.options,n=t.name,o=r.mainAxis,i=o===void 0?!0:o,s=r.altAxis,a=s===void 0?!1:s,l=r.boundary,c=r.rootBoundary,u=r.altBoundary,f=r.padding,d=r.tether,v=d===void 0?!0:d,x=r.tetherOffset,_=x===void 0?0:x,b=mo(e,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),w=Ve(e.placement),A=vn(e.placement),R=!A,j=La(w),B=Em(j),O=e.modifiersData.popperOffsets,W=e.rects.reference,Y=e.rects.popper,T=typeof _=="function"?_(Object.assign({},e.rects,{placement:e.placement})):_,F=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),C=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,nt={x:0,y:0};if(O){if(i){var K,ot=j==="y"?te:ee,$=j==="y"?ye:_e,et=j==="y"?"height":"width",I=O[j],q=I+b[ot],st=I-b[$],St=v?-Y[et]/2:0,Dt=A===dn?W[et]:Y[et],Et=A===dn?-Y[et]:-W[et],be=e.elements.arrow,we=v&&be?Va(be):{width:0,height:0},ke=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:sd(),Zt=ke[ot],Oe=ke[$],Me=eo(0,W[et],we[et]),zo=R?W[et]/2-St-Me-Zt-F.mainAxis:Dt-Me-Zt-F.mainAxis,mr=R?-W[et]/2+St+Me+Oe+F.mainAxis:Et+Me+Oe+F.mainAxis,$r=e.elements.arrow&&So(e.elements.arrow),To=$r?j==="y"?$r.clientTop||0:$r.clientLeft||0:0,p=(K=C==null?void 0:C[j])!=null?K:0,y=I+zo-p-To,k=I+mr-p,E=eo(v?ui(q,y):q,I,v?Or(st,k):st);O[j]=E,nt[j]=E-I}if(a){var z,V=j==="x"?te:ee,H=j==="x"?ye:_e,N=O[B],L=B==="y"?"height":"width",M=N+b[V],U=N-b[H],J=[te,ee].indexOf(w)!==-1,X=(z=C==null?void 0:C[B])!=null?z:0,Q=J?M:N-W[L]-Y[L]-X+F.altAxis,at=J?N+W[L]+Y[L]-X-F.altAxis:U,ut=v&&J?J0(Q,N,at):eo(v?Q:M,N,v?at:U);O[B]=ut,nt[B]=ut-N}e.modifiersData[n]=nt}}const zm={name:"preventOverflow",enabled:!0,phase:"main",fn:Am,requiresIfExists:["offset"]};function Tm(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Om(t){return t===fe(t)||!ge(t)?Da(t):Tm(t)}function Mm(t){var e=t.getBoundingClientRect(),r=hn(e.width)/t.offsetWidth||1,n=hn(e.height)/t.offsetHeight||1;return r!==1||n!==1}function Im(t,e,r){r===void 0&&(r=!1);var n=ge(e),o=ge(e)&&Mm(e),i=gr(e),s=pn(t,o,r),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!r)&&((Fe(e)!=="body"||Ha(i))&&(a=Om(e)),ge(e)?(l=pn(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=Fa(i))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Rm(t){var e=new Map,r=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function o(i){r.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!r.has(a)){var l=e.get(a);l&&o(l)}}),n.push(i)}return t.forEach(function(i){r.has(i.name)||o(i)}),n}function Nm(t){var e=Rm(t);return $0.reduce(function(r,n){return r.concat(e.filter(function(o){return o.phase===n}))},[])}function Pm(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function jm(t){var e=t.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var Oc={placement:"bottom",modifiers:[],strategy:"absolute"};function Mc(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Vm(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,o=e.defaultOptions,i=o===void 0?Oc:o;return function(s,a,l){l===void 0&&(l=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Oc,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},u=[],f=!1,d={state:c,setOptions:function(_){var b=typeof _=="function"?_(c.options):_;x(),c.options=Object.assign({},i,c.options,b),c.scrollParents={reference:Ir(s)?ro(s):s.contextElement?ro(s.contextElement):[],popper:ro(a)};var w=Nm(jm([].concat(n,c.options.modifiers)));return c.orderedModifiers=w.filter(function(A){return A.enabled}),v(),d.update()},forceUpdate:function(){if(!f){var _=c.elements,b=_.reference,w=_.popper;if(Mc(b,w)){c.rects={reference:Im(b,So(w),c.options.strategy==="fixed"),popper:Va(w)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(Y){return c.modifiersData[Y.name]=Object.assign({},Y.data)});for(var A=0;A<c.orderedModifiers.length;A++){if(c.reset===!0){c.reset=!1,A=-1;continue}var R=c.orderedModifiers[A],j=R.fn,B=R.options,O=B===void 0?{}:B,W=R.name;typeof j=="function"&&(c=j({state:c,options:O,name:W,instance:d})||c)}}}},update:Pm(function(){return new Promise(function(_){d.forceUpdate(),_(c)})}),destroy:function(){x(),f=!0}};if(!Mc(s,a))return d;d.setOptions(l).then(function(_){!f&&l.onFirstUpdate&&l.onFirstUpdate(_)});function v(){c.orderedModifiers.forEach(function(_){var b=_.name,w=_.options,A=w===void 0?{}:w,R=_.effect;if(typeof R=="function"){var j=R({state:c,name:b,instance:d,options:A}),B=function(){};u.push(j||B)}})}function x(){u.forEach(function(_){return _()}),u=[]}return d}}var Lm=[am,Cm,im,K0,km,ym,zm,em,xm],Dm=Vm({defaultModifiers:Lm});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function Ic(t){return Object.prototype.toString.call(t)==="[object Object]"}function Fm(t){var e,r;return Ic(t)===!1?!1:(e=t.constructor,e===void 0?!0:(r=e.prototype,!(Ic(r)===!1||r.hasOwnProperty("isPrototypeOf")===!1)))}function no(){return no=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},no.apply(this,arguments)}function fd(t,e){if(t==null)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e.indexOf(r=i[n])>=0||(o[r]=t[r]);return o}const Hm={silent:!1,logLevel:"warn"},Bm=["validator"],dd=Object.prototype,hd=dd.toString,qm=dd.hasOwnProperty,pd=/^\s*function (\w+)/;function Rc(t){var e;const r=(e=t==null?void 0:t.type)!==null&&e!==void 0?e:t;if(r){const n=r.toString().match(pd);return n?n[1]:""}return""}const Rr=Fm,Um=t=>t;let Wt=Um;const gn=(t,e)=>qm.call(t,e),$m=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t},mn=Array.isArray||function(t){return hd.call(t)==="[object Array]"},yn=t=>hd.call(t)==="[object Function]",fi=t=>Rr(t)&&gn(t,"_vueTypes_name"),vd=t=>Rr(t)&&(gn(t,"type")||["_vueTypes_name","validator","default","required"].some(e=>gn(t,e)));function Ba(t,e){return Object.defineProperty(t.bind(e),"__original",{value:t})}function Hr(t,e,r=!1){let n,o=!0,i="";n=Rr(t)?t:{type:t};const s=fi(n)?n._vueTypes_name+" - ":"";if(vd(n)&&n.type!==null){if(n.type===void 0||n.type===!0||!n.required&&e===void 0)return o;mn(n.type)?(o=n.type.some(a=>Hr(a,e,!0)===!0),i=n.type.map(a=>Rc(a)).join(" or ")):(i=Rc(n),o=i==="Array"?mn(e):i==="Object"?Rr(e):i==="String"||i==="Number"||i==="Boolean"||i==="Function"?function(a){if(a==null)return"";const l=a.constructor.toString().match(pd);return l?l[1]:""}(e)===i:e instanceof n.type)}if(!o){const a=`${s}value "${e}" should be of type "${i}"`;return r===!1?(Wt(a),!1):a}if(gn(n,"validator")&&yn(n.validator)){const a=Wt,l=[];if(Wt=c=>{l.push(c)},o=n.validator(e),Wt=a,!o){const c=(l.length>1?"* ":"")+l.join(`
* `);return l.length=0,r===!1?(Wt(c),o):c}}return o}function ue(t,e){const r=Object.defineProperties(e,{_vueTypes_name:{value:t,writable:!0},isRequired:{get(){return this.required=!0,this}},def:{value(o){return o===void 0?(gn(this,"default")&&delete this.default,this):yn(o)||Hr(this,o,!0)===!0?(this.default=mn(o)?()=>[...o]:Rr(o)?()=>Object.assign({},o):o,this):(Wt(`${this._vueTypes_name} - invalid default value: "${o}"`),this)}}}),{validator:n}=r;return yn(n)&&(r.validator=Ba(n,r)),r}function Le(t,e){const r=ue(t,e);return Object.defineProperty(r,"validate",{value(n){return yn(this.validator)&&Wt(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`),this.validator=Ba(n,this),this}})}function Nc(t,e,r){const n=function(l){const c={};return Object.getOwnPropertyNames(l).forEach(u=>{c[u]=Object.getOwnPropertyDescriptor(l,u)}),Object.defineProperties({},c)}(e);if(n._vueTypes_name=t,!Rr(r))return n;const{validator:o}=r,i=fd(r,Bm);if(yn(o)){let{validator:l}=n;l&&(l=(a=(s=l).__original)!==null&&a!==void 0?a:s),n.validator=Ba(l?function(c){return l.call(this,c)&&o.call(this,c)}:o,n)}var s,a;return Object.assign(n,i)}function Di(t){return t.replace(/^(?!\s*$)/gm,"  ")}const Gm=()=>Le("any",{}),Wm=()=>Le("function",{type:Function}),Km=()=>Le("boolean",{type:Boolean}),Xm=()=>Le("string",{type:String}),Ym=()=>Le("number",{type:Number}),Jm=()=>Le("array",{type:Array}),Zm=()=>Le("object",{type:Object}),Qm=()=>ue("integer",{type:Number,validator:t=>$m(t)}),ty=()=>ue("symbol",{validator:t=>typeof t=="symbol"});function ey(t,e="custom validation failed"){if(typeof t!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return ue(t.name||"<<anonymous function>>",{type:null,validator(r){const n=t(r);return n||Wt(`${this._vueTypes_name} - ${e}`),n}})}function ry(t){if(!mn(t))throw new TypeError("[VueTypes error]: You must provide an array as argument.");const e=`oneOf - value should be one of "${t.join('", "')}".`,r=t.reduce((n,o)=>{if(o!=null){const i=o.constructor;n.indexOf(i)===-1&&n.push(i)}return n},[]);return ue("oneOf",{type:r.length>0?r:void 0,validator(n){const o=t.indexOf(n)!==-1;return o||Wt(e),o}})}function ny(t){if(!mn(t))throw new TypeError("[VueTypes error]: You must provide an array as argument");let e=!1,r=[];for(let o=0;o<t.length;o+=1){const i=t[o];if(vd(i)){if(fi(i)&&i._vueTypes_name==="oneOf"&&i.type){r=r.concat(i.type);continue}if(yn(i.validator)&&(e=!0),i.type===!0||!i.type){Wt('oneOfType - invalid usage of "true" or "null" as types.');continue}r=r.concat(i.type)}else r.push(i)}r=r.filter((o,i)=>r.indexOf(o)===i);const n=r.length>0?r:null;return ue("oneOfType",e?{type:n,validator(o){const i=[],s=t.some(a=>{const l=Hr(fi(a)&&a._vueTypes_name==="oneOf"?a.type||null:a,o,!0);return typeof l=="string"&&i.push(l),l===!0});return s||Wt(`oneOfType - provided value does not match any of the ${i.length} passed-in validators:
${Di(i.join(`
`))}`),s}}:{type:n})}function oy(t){return ue("arrayOf",{type:Array,validator(e){let r="";const n=e.every(o=>(r=Hr(t,o,!0),r===!0));return n||Wt(`arrayOf - value validation error:
${Di(r)}`),n}})}function iy(t){return ue("instanceOf",{type:t})}function sy(t){return ue("objectOf",{type:Object,validator(e){let r="";const n=Object.keys(e).every(o=>(r=Hr(t,e[o],!0),r===!0));return n||Wt(`objectOf - value validation error:
${Di(r)}`),n}})}function ay(t){const e=Object.keys(t),r=e.filter(o=>{var i;return!((i=t[o])===null||i===void 0||!i.required)}),n=ue("shape",{type:Object,validator(o){if(!Rr(o))return!1;const i=Object.keys(o);if(r.length>0&&r.some(s=>i.indexOf(s)===-1)){const s=r.filter(a=>i.indexOf(a)===-1);return Wt(s.length===1?`shape - required property "${s[0]}" is not defined.`:`shape - required properties "${s.join('", "')}" are not defined.`),!1}return i.every(s=>{if(e.indexOf(s)===-1)return this._vueTypes_isLoose===!0||(Wt(`shape - shape definition does not include a "${s}" property. Allowed keys: "${e.join('", "')}".`),!1);const a=Hr(t[s],o[s],!0);return typeof a=="string"&&Wt(`shape - "${s}" property validation error:
 ${Di(a)}`),a===!0})}});return Object.defineProperty(n,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(n,"loose",{get(){return this._vueTypes_isLoose=!0,this}}),n}const ly=["name","validate","getter"],cy=(()=>{var t;return(t=class{static get any(){return Gm()}static get func(){return Wm().def(this.defaults.func)}static get bool(){return Km().def(this.defaults.bool)}static get string(){return Xm().def(this.defaults.string)}static get number(){return Ym().def(this.defaults.number)}static get array(){return Jm().def(this.defaults.array)}static get object(){return Zm().def(this.defaults.object)}static get integer(){return Qm().def(this.defaults.integer)}static get symbol(){return ty()}static get nullable(){return{type:null}}static extend(e){if(mn(e))return e.forEach(l=>this.extend(l)),this;const{name:r,validate:n=!1,getter:o=!1}=e,i=fd(e,ly);if(gn(this,r))throw new TypeError(`[VueTypes error]: Type "${r}" already defined`);const{type:s}=i;if(fi(s))return delete i.type,Object.defineProperty(this,r,o?{get:()=>Nc(r,s,i)}:{value(...l){const c=Nc(r,s,i);return c.validator&&(c.validator=c.validator.bind(c,...l)),c}});let a;return a=o?{get(){const l=Object.assign({},i);return n?Le(r,l):ue(r,l)},enumerable:!0}:{value(...l){const c=Object.assign({},i);let u;return u=n?Le(r,c):ue(r,c),c.validator&&(u.validator=c.validator.bind(u,...l)),u},enumerable:!0},Object.defineProperty(this,r,a)}}).defaults={},t.sensibleDefaults=void 0,t.config=Hm,t.custom=ey,t.oneOf=ry,t.instanceOf=iy,t.oneOfType=ny,t.arrayOf=oy,t.objectOf=sy,t.shape=ay,t.utils={validate:(e,r)=>Hr(r,e,!0)===!0,toType:(e,r,n=!1)=>n?Le(e,r):ue(e,r)},t})();function uy(t={func:()=>{},bool:!0,string:"",number:0,array:()=>[],object:()=>({}),integer:0}){var e;return(e=class extends cy{static get sensibleDefaults(){return no({},this.defaults)}static set sensibleDefaults(r){this.defaults=r!==!1?no({},r!==!0?r:t):{}}}).defaults=no({},t),e}let tt=class extends uy(){};var Pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qa(t){var e={exports:{}};return t(e,e.exports),e.exports}var qo=function(t){return t&&t.Math==Math&&t},Vt=qo(typeof globalThis=="object"&&globalThis)||qo(typeof window=="object"&&window)||qo(typeof self=="object"&&self)||qo(typeof Pc=="object"&&Pc)||function(){return this}()||Function("return this")(),yt=function(t){try{return!!t()}catch{return!0}},he=!yt(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),jc={}.propertyIsEnumerable,Vc=Object.getOwnPropertyDescriptor,fy={f:Vc&&!jc.call({1:2},1)?function(t){var e=Vc(this,t);return!!e&&e.enumerable}:jc},Fi=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},dy={}.toString,Ge=function(t){return dy.call(t).slice(8,-1)},hy="".split,Hi=yt(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return Ge(t)=="String"?hy.call(t,""):Object(t)}:Object,ur=function(t){if(t==null)throw TypeError("Can't call method on "+t);return t},En=function(t){return Hi(ur(t))},Bt=function(t){return typeof t=="object"?t!==null:typeof t=="function"},Ua=function(t,e){if(!Bt(t))return t;var r,n;if(e&&typeof(r=t.toString)=="function"&&!Bt(n=r.call(t))||typeof(r=t.valueOf)=="function"&&!Bt(n=r.call(t))||!e&&typeof(r=t.toString)=="function"&&!Bt(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},py={}.hasOwnProperty,Nt=function(t,e){return py.call(t,e)},Xs=Vt.document,vy=Bt(Xs)&&Bt(Xs.createElement),gd=function(t){return vy?Xs.createElement(t):{}},md=!he&&!yt(function(){return Object.defineProperty(gd("div"),"a",{get:function(){return 7}}).a!=7}),Lc=Object.getOwnPropertyDescriptor,$a={f:he?Lc:function(t,e){if(t=En(t),e=Ua(e,!0),md)try{return Lc(t,e)}catch{}if(Nt(t,e))return Fi(!fy.f.call(t,e),t[e])}},Yt=function(t){if(!Bt(t))throw TypeError(String(t)+" is not an object");return t},Dc=Object.defineProperty,Je={f:he?Dc:function(t,e,r){if(Yt(t),e=Ua(e,!0),Yt(r),md)try{return Dc(t,e,r)}catch{}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},me=he?function(t,e,r){return Je.f(t,e,Fi(1,r))}:function(t,e,r){return t[e]=r,t},Ga=function(t,e){try{me(Vt,t,e)}catch{Vt[t]=e}return e},Nr=Vt["__core-js_shared__"]||Ga("__core-js_shared__",{}),gy=Function.toString;typeof Nr.inspectSource!="function"&&(Nr.inspectSource=function(t){return gy.call(t)});var di,oo,hi,yd=Nr.inspectSource,Fc=Vt.WeakMap,my=typeof Fc=="function"&&/native code/.test(yd(Fc)),_d=qa(function(t){(t.exports=function(e,r){return Nr[e]||(Nr[e]=r!==void 0?r:{})})("versions",[]).push({version:"3.8.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})}),yy=0,_y=Math.random(),Wa=function(t){return"Symbol("+String(t===void 0?"":t)+")_"+(++yy+_y).toString(36)},Hc=_d("keys"),Ka=function(t){return Hc[t]||(Hc[t]=Wa(t))},Bi={},xy=Vt.WeakMap;if(my){var Kr=Nr.state||(Nr.state=new xy),by=Kr.get,wy=Kr.has,ky=Kr.set;di=function(t,e){return e.facade=t,ky.call(Kr,t,e),e},oo=function(t){return by.call(Kr,t)||{}},hi=function(t){return wy.call(Kr,t)}}else{var jn=Ka("state");Bi[jn]=!0,di=function(t,e){return e.facade=t,me(t,jn,e),e},oo=function(t){return Nt(t,jn)?t[jn]:{}},hi=function(t){return Nt(t,jn)}}var fr={set:di,get:oo,has:hi,enforce:function(t){return hi(t)?oo(t):di(t,{})},getterFor:function(t){return function(e){var r;if(!Bt(e)||(r=oo(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},dr=qa(function(t){var e=fr.get,r=fr.enforce,n=String(String).split("String");(t.exports=function(o,i,s,a){var l,c=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,f=!!a&&!!a.noTargetGet;typeof s=="function"&&(typeof i!="string"||Nt(s,"name")||me(s,"name",i),(l=r(s)).source||(l.source=n.join(typeof i=="string"?i:""))),o!==Vt?(c?!f&&o[i]&&(u=!0):delete o[i],u?o[i]=s:me(o,i,s)):u?o[i]=s:Ga(i,s)})(Function.prototype,"toString",function(){return typeof this=="function"&&e(this).source||yd(this)})}),ls=Vt,Bc=function(t){return typeof t=="function"?t:void 0},qi=function(t,e){return arguments.length<2?Bc(ls[t])||Bc(Vt[t]):ls[t]&&ls[t][e]||Vt[t]&&Vt[t][e]},Sy=Math.ceil,Cy=Math.floor,An=function(t){return isNaN(t=+t)?0:(t>0?Cy:Sy)(t)},Ey=Math.min,de=function(t){return t>0?Ey(An(t),9007199254740991):0},Ay=Math.max,zy=Math.min,pi=function(t,e){var r=An(t);return r<0?Ay(r+e,0):zy(r,e)},qc=function(t){return function(e,r,n){var o,i=En(e),s=de(i.length),a=pi(n,s);if(t&&r!=r){for(;s>a;)if((o=i[a++])!=o)return!0}else for(;s>a;a++)if((t||a in i)&&i[a]===r)return t||a||0;return!t&&-1}},xd={includes:qc(!0),indexOf:qc(!1)},Ty=xd.indexOf,bd=function(t,e){var r,n=En(t),o=0,i=[];for(r in n)!Nt(Bi,r)&&Nt(n,r)&&i.push(r);for(;e.length>o;)Nt(n,r=e[o++])&&(~Ty(i,r)||i.push(r));return i},vi=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Oy=vi.concat("length","prototype"),My={f:Object.getOwnPropertyNames||function(t){return bd(t,Oy)}},Iy={f:Object.getOwnPropertySymbols},Ry=qi("Reflect","ownKeys")||function(t){var e=My.f(Yt(t)),r=Iy.f;return r?e.concat(r(t)):e},Ny=function(t,e){for(var r=Ry(e),n=Je.f,o=$a.f,i=0;i<r.length;i++){var s=r[i];Nt(t,s)||n(t,s,o(e,s))}},Py=/#|\.prototype\./,Co=function(t,e){var r=Vy[jy(t)];return r==Dy||r!=Ly&&(typeof e=="function"?yt(e):!!e)},jy=Co.normalize=function(t){return String(t).replace(Py,".").toLowerCase()},Vy=Co.data={},Ly=Co.NATIVE="N",Dy=Co.POLYFILL="P",Ys=Co,Fy=$a.f,Kt=function(t,e){var r,n,o,i,s,a=t.target,l=t.global,c=t.stat;if(r=l?Vt:c?Vt[a]||Ga(a,{}):(Vt[a]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(s=Fy(r,n))&&s.value:r[n],!Ys(l?n:a+(c?".":"#")+n,t.forced)&&o!==void 0){if(typeof i==typeof o)continue;Ny(i,o)}(t.sham||o&&o.sham)&&me(i,"sham",!0),dr(r,n,i,t)}},Xa=function(t,e){var r=[][t];return!!r&&yt(function(){r.call(null,e||function(){throw 1},1)})},Hy=Object.defineProperty,cs={},Uc=function(t){throw t},zn=function(t,e){if(Nt(cs,t))return cs[t];e||(e={});var r=[][t],n=!!Nt(e,"ACCESSORS")&&e.ACCESSORS,o=Nt(e,0)?e[0]:Uc,i=Nt(e,1)?e[1]:void 0;return cs[t]=!!r&&!yt(function(){if(n&&!he)return!0;var s={length:-1};n?Hy(s,1,{enumerable:!0,get:Uc}):s[1]=1,r.call(s,o,i)})},By=xd.indexOf,wd=[].indexOf,$c=!!wd&&1/[1].indexOf(1,-0)<0,qy=Xa("indexOf"),Uy=zn("indexOf",{ACCESSORS:!0,1:0});function Br(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function qr(t,e,r){return r&&$y(t,r),t}Kt({target:"Array",proto:!0,forced:$c||!qy||!Uy},{indexOf:function(t){return $c?wd.apply(this,arguments)||0:By(this,t,arguments.length>1?arguments[1]:void 0)}});(function(){function t(){Br(this,t)}return qr(t,null,[{key:"isInBrowser",value:function(){return typeof window<"u"}},{key:"isServer",value:function(){return typeof window>"u"}},{key:"getUA",value:function(){return t.isInBrowser()?window.navigator.userAgent.toLowerCase():""}},{key:"isMobile",value:function(){return/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion)}},{key:"isOpera",value:function(){return navigator.userAgent.indexOf("Opera")!==-1}},{key:"isIE",value:function(){var e=t.getUA();return e!==""&&e.indexOf("msie")>0}},{key:"isIE9",value:function(){var e=t.getUA();return e!==""&&e.indexOf("msie 9.0")>0}},{key:"isEdge",value:function(){var e=t.getUA();return e!==""&&e.indexOf("edge/")>0}},{key:"isChrome",value:function(){var e=t.getUA();return e!==""&&/chrome\/\d+/.test(e)&&!t.isEdge()}},{key:"isPhantomJS",value:function(){var e=t.getUA();return e!==""&&/phantomjs/.test(e)}},{key:"isFirefox",value:function(){var e=t.getUA();return e!==""&&/firefox/.test(e)}}]),t})();var Gy=[].join,Wy=Hi!=Object,Ky=Xa("join",",");Kt({target:"Array",proto:!0,forced:Wy||!Ky},{join:function(t){return Gy.call(En(this),t===void 0?",":t)}});var Xr,gi,Ze=function(t){return Object(ur(t))},_n=Array.isArray||function(t){return Ge(t)=="Array"},kd=!!Object.getOwnPropertySymbols&&!yt(function(){return!String(Symbol())}),Xy=kd&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Uo=_d("wks"),io=Vt.Symbol,Yy=Xy?io:io&&io.withoutSetter||Wa,Ot=function(t){return Nt(Uo,t)||(kd&&Nt(io,t)?Uo[t]=io[t]:Uo[t]=Yy("Symbol."+t)),Uo[t]},Jy=Ot("species"),Ui=function(t,e){var r;return _n(t)&&(typeof(r=t.constructor)!="function"||r!==Array&&!_n(r.prototype)?Bt(r)&&(r=r[Jy])===null&&(r=void 0):r=void 0),new(r===void 0?Array:r)(e===0?0:e)},xn=function(t,e,r){var n=Ua(e);n in t?Je.f(t,n,Fi(0,r)):t[n]=r},us=qi("navigator","userAgent")||"",Gc=Vt.process,Wc=Gc&&Gc.versions,Kc=Wc&&Wc.v8;Kc?gi=(Xr=Kc.split("."))[0]+Xr[1]:us&&(!(Xr=us.match(/Edge\/(\d+)/))||Xr[1]>=74)&&(Xr=us.match(/Chrome\/(\d+)/))&&(gi=Xr[1]);var mi=gi&&+gi,Zy=Ot("species"),Ya=function(t){return mi>=51||!yt(function(){var e=[];return(e.constructor={})[Zy]=function(){return{foo:1}},e[t](Boolean).foo!==1})},Qy=Ya("splice"),t_=zn("splice",{ACCESSORS:!0,0:0,1:2}),e_=Math.max,r_=Math.min;Kt({target:"Array",proto:!0,forced:!Qy||!t_},{splice:function(t,e){var r,n,o,i,s,a,l=Ze(this),c=de(l.length),u=pi(t,c),f=arguments.length;if(f===0?r=n=0:f===1?(r=0,n=c-u):(r=f-2,n=r_(e_(An(e),0),c-u)),c+r-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(o=Ui(l,n),i=0;i<n;i++)(s=u+i)in l&&xn(o,i,l[s]);if(o.length=n,r<n){for(i=u;i<c-n;i++)a=i+r,(s=i+n)in l?l[a]=l[s]:delete l[a];for(i=c;i>c-n+r;i--)delete l[i-1]}else if(r>n)for(i=c-n;i>u;i--)a=i+r-1,(s=i+n-1)in l?l[a]=l[s]:delete l[a];for(i=0;i<r;i++)l[i+u]=arguments[i+2];return l.length=c-n+r,o}});var Sd={};Sd[Ot("toStringTag")]="z";var Ja=String(Sd)==="[object z]",n_=Ot("toStringTag"),o_=Ge(function(){return arguments}())=="Arguments",Cd=Ja?Ge:function(t){var e,r,n;return t===void 0?"Undefined":t===null?"Null":typeof(r=function(o,i){try{return o[i]}catch{}}(e=Object(t),n_))=="string"?r:o_?Ge(e):(n=Ge(e))=="Object"&&typeof e.callee=="function"?"Arguments":n},i_=Ja?{}.toString:function(){return"[object "+Cd(this)+"]"};Ja||dr(Object.prototype,"toString",i_,{unsafe:!0});var Ed=function(){var t=Yt(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function Xc(t,e){return RegExp(t,e)}var fs,ds,Yc={UNSUPPORTED_Y:yt(function(){var t=Xc("a","y");return t.lastIndex=2,t.exec("abcd")!=null}),BROKEN_CARET:yt(function(){var t=Xc("^r","gy");return t.lastIndex=2,t.exec("str")!=null})},yi=RegExp.prototype.exec,s_=String.prototype.replace,Ad=yi,hs=(fs=/a/,ds=/b*/g,yi.call(fs,"a"),yi.call(ds,"a"),fs.lastIndex!==0||ds.lastIndex!==0),Jc=Yc.UNSUPPORTED_Y||Yc.BROKEN_CARET,ps=/()??/.exec("")[1]!==void 0;(hs||ps||Jc)&&(Ad=function(t){var e,r,n,o,i=this,s=Jc&&i.sticky,a=Ed.call(i),l=i.source,c=0,u=t;return s&&((a=a.replace("y","")).indexOf("g")===-1&&(a+="g"),u=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&t[i.lastIndex-1]!==`
`)&&(l="(?: "+l+")",u=" "+u,c++),r=new RegExp("^(?:"+l+")",a)),ps&&(r=new RegExp("^"+l+"$(?!\\s)",a)),hs&&(e=i.lastIndex),n=yi.call(s?r:i,u),s?n?(n.input=n.input.slice(c),n[0]=n[0].slice(c),n.index=i.lastIndex,i.lastIndex+=n[0].length):i.lastIndex=0:hs&&n&&(i.lastIndex=i.global?n.index+n[0].length:e),ps&&n&&n.length>1&&s_.call(n[0],r,function(){for(o=1;o<arguments.length-2;o++)arguments[o]===void 0&&(n[o]=void 0)}),n});var yo=Ad;Kt({target:"RegExp",proto:!0,forced:/./.exec!==yo},{exec:yo});var zd=RegExp.prototype,Td=zd.toString,a_=yt(function(){return Td.call({source:"a",flags:"b"})!="/a/b"}),l_=Td.name!="toString";(a_||l_)&&dr(RegExp.prototype,"toString",function(){var t=Yt(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(r===void 0&&t instanceof RegExp&&!("flags"in zd)?Ed.call(t):r)},{unsafe:!0});var c_=Ot("species"),u_=!yt(function(){var t=/./;return t.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(t,"$<a>")!=="7"}),Zc="a".replace(/./,"$0")==="$0",Qc=Ot("replace"),tu=!!/./[Qc]&&/./[Qc]("a","$0")==="",f_=!yt(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return r.length!==2||r[0]!=="a"||r[1]!=="b"}),Od=function(t,e,r,n){var o=Ot(t),i=!yt(function(){var f={};return f[o]=function(){return 7},""[t](f)!=7}),s=i&&!yt(function(){var f=!1,d=/a/;return t==="split"&&((d={}).constructor={},d.constructor[c_]=function(){return d},d.flags="",d[o]=/./[o]),d.exec=function(){return f=!0,null},d[o](""),!f});if(!i||!s||t==="replace"&&(!u_||!Zc||tu)||t==="split"&&!f_){var a=/./[o],l=r(o,""[t],function(f,d,v,x,_){return d.exec===yo?i&&!_?{done:!0,value:a.call(d,v,x)}:{done:!0,value:f.call(v,d,x)}:{done:!1}},{REPLACE_KEEPS_$0:Zc,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:tu}),c=l[0],u=l[1];dr(String.prototype,t,c),dr(RegExp.prototype,o,function(f,d){return u.call(f,this,d)})}n&&me(RegExp.prototype[o],"sham",!0)},d_=Ot("match"),Md=function(t){var e;return Bt(t)&&((e=t[d_])!==void 0?!!e:Ge(t)=="RegExp")},Za=function(t){if(typeof t!="function")throw TypeError(String(t)+" is not a function");return t},h_=Ot("species"),eu=function(t){return function(e,r){var n,o,i=String(ur(e)),s=An(r),a=i.length;return s<0||s>=a?t?"":void 0:(n=i.charCodeAt(s))<55296||n>56319||s+1===a||(o=i.charCodeAt(s+1))<56320||o>57343?t?i.charAt(s):n:t?i.slice(s,s+2):o-56320+(n-55296<<10)+65536}},Id={codeAt:eu(!1),charAt:eu(!0)},p_=Id.charAt,Rd=function(t,e,r){return e+(r?p_(t,e).length:1)},Js=function(t,e){var r=t.exec;if(typeof r=="function"){var n=r.call(t,e);if(typeof n!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return n}if(Ge(t)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return yo.call(t,e)},v_=[].push,g_=Math.min,Yr=!yt(function(){return!RegExp(4294967295,"y")});Od("split",2,function(t,e,r){var n;return n="abbc".split(/(b)*/)[1]=="c"||"test".split(/(?:)/,-1).length!=4||"ab".split(/(?:ab)*/).length!=2||".".split(/(.?)(.?)/).length!=4||".".split(/()()/).length>1||"".split(/.?/).length?function(o,i){var s=String(ur(this)),a=i===void 0?4294967295:i>>>0;if(a===0)return[];if(o===void 0)return[s];if(!Md(o))return e.call(s,o,a);for(var l,c,u,f=[],d=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(o.sticky?"y":""),v=0,x=new RegExp(o.source,d+"g");(l=yo.call(x,s))&&!((c=x.lastIndex)>v&&(f.push(s.slice(v,l.index)),l.length>1&&l.index<s.length&&v_.apply(f,l.slice(1)),u=l[0].length,v=c,f.length>=a));)x.lastIndex===l.index&&x.lastIndex++;return v===s.length?!u&&x.test("")||f.push(""):f.push(s.slice(v)),f.length>a?f.slice(0,a):f}:"0".split(void 0,0).length?function(o,i){return o===void 0&&i===0?[]:e.call(this,o,i)}:e,[function(o,i){var s=ur(this),a=o==null?void 0:o[t];return a!==void 0?a.call(o,s,i):n.call(String(s),o,i)},function(o,i){var s=r(n,o,this,i,n!==e);if(s.done)return s.value;var a=Yt(o),l=String(this),c=function(j,B){var O,W=Yt(j).constructor;return W===void 0||(O=Yt(W)[h_])==null?B:Za(O)}(a,RegExp),u=a.unicode,f=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(Yr?"y":"g"),d=new c(Yr?a:"^(?:"+a.source+")",f),v=i===void 0?4294967295:i>>>0;if(v===0)return[];if(l.length===0)return Js(d,l)===null?[l]:[];for(var x=0,_=0,b=[];_<l.length;){d.lastIndex=Yr?_:0;var w,A=Js(d,Yr?l:l.slice(_));if(A===null||(w=g_(de(d.lastIndex+(Yr?0:_)),l.length))===x)_=Rd(l,_,u);else{if(b.push(l.slice(x,_)),b.length===v)return b;for(var R=1;R<=A.length-1;R++)if(b.push(A[R]),b.length===v)return b;_=x=w}}return b.push(l.slice(x)),b}]},!Yr);var Zs=`	
\v\f\r                　\u2028\u2029\uFEFF`,_i="["+Zs+"]",m_=RegExp("^"+_i+_i+"*"),y_=RegExp(_i+_i+"*$"),vs=function(t){return function(e){var r=String(ur(e));return 1&t&&(r=r.replace(m_,"")),2&t&&(r=r.replace(y_,"")),r}},__={start:vs(1),end:vs(2),trim:vs(3)},x_=__.trim;Kt({target:"String",proto:!0,forced:function(t){return yt(function(){return!!Zs[t]()||"​᠎"[t]()!="​᠎"||Zs[t].name!==t})}("trim")},{trim:function(){return x_(this)}});var b_=Ya("slice"),w_=zn("slice",{ACCESSORS:!0,0:0,1:2}),k_=Ot("species"),S_=[].slice,C_=Math.max;Kt({target:"Array",proto:!0,forced:!b_||!w_},{slice:function(t,e){var r,n,o,i=En(this),s=de(i.length),a=pi(t,s),l=pi(e===void 0?s:e,s);if(_n(i)&&(typeof(r=i.constructor)!="function"||r!==Array&&!_n(r.prototype)?Bt(r)&&(r=r[k_])===null&&(r=void 0):r=void 0,r===Array||r===void 0))return S_.call(i,a,l);for(n=new(r===void 0?Array:r)(C_(l-a,0)),o=0;a<l;a++,o++)a in i&&xn(n,o,i[a]);return n.length=o,n}});var Qa=Object.keys||function(t){return bd(t,vi)},E_=yt(function(){Qa(1)});Kt({target:"Object",stat:!0,forced:E_},{keys:function(t){return Qa(Ze(t))}});var gs,A_=function(t){if(Md(t))throw TypeError("The method doesn't accept regular expressions");return t},z_=Ot("match"),T_=$a.f,ru="".startsWith,O_=Math.min,Nd=function(t){var e=/./;try{"/./"[t](e)}catch{try{return e[z_]=!1,"/./"[t](e)}catch{}}return!1}("startsWith"),M_=!(Nd||(gs=T_(String.prototype,"startsWith"),!gs||gs.writable));function Pd(t){return(Pd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}Kt({target:"String",proto:!0,forced:!M_&&!Nd},{startsWith:function(t){var e=String(ur(this));A_(t);var r=de(O_(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return ru?ru.call(e,n,r):e.slice(r,r+n.length)===n}});var Jr=function(t){return typeof t=="string"},Zr=function(t){return t!==null&&Pd(t)==="object"},bn=function(){function t(){Br(this,t)}return qr(t,null,[{key:"isWindow",value:function(e){return e===window}},{key:"addEventListener",value:function(e,r,n){var o=arguments.length>3&&arguments[3]!==void 0&&arguments[3];e&&r&&n&&e.addEventListener(r,n,o)}},{key:"removeEventListener",value:function(e,r,n){var o=arguments.length>3&&arguments[3]!==void 0&&arguments[3];e&&r&&n&&e.removeEventListener(r,n,o)}},{key:"triggerDragEvent",value:function(e,r){var n=!1,o=function(s){var a;(a=r.drag)===null||a===void 0||a.call(r,s)},i=function s(a){var l;t.removeEventListener(document,"mousemove",o),t.removeEventListener(document,"mouseup",s),document.onselectstart=null,document.ondragstart=null,n=!1,(l=r.end)===null||l===void 0||l.call(r,a)};t.addEventListener(e,"mousedown",function(s){var a;n||(document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},t.addEventListener(document,"mousemove",o),t.addEventListener(document,"mouseup",i),n=!0,(a=r.start)===null||a===void 0||a.call(r,s))})}},{key:"getBoundingClientRect",value:function(e){return e&&Zr(e)&&e.nodeType===1?e.getBoundingClientRect():null}},{key:"hasClass",value:function(e,r){return!!(e&&Zr(e)&&Jr(r)&&e.nodeType===1)&&e.classList.contains(r.trim())}},{key:"addClass",value:function(e,r){if(e&&Zr(e)&&Jr(r)&&e.nodeType===1&&(r=r.trim(),!t.hasClass(e,r))){var n=e.className;e.className=n?n+" "+r:r}}},{key:"removeClass",value:function(e,r){if(e&&Zr(e)&&Jr(r)&&e.nodeType===1&&typeof e.className=="string"){r=r.trim();for(var n=e.className.trim().split(" "),o=n.length-1;o>=0;o--)n[o]=n[o].trim(),n[o]&&n[o]!==r||n.splice(o,1);e.className=n.join(" ")}}},{key:"toggleClass",value:function(e,r,n){e&&Zr(e)&&Jr(r)&&e.nodeType===1&&e.classList.toggle(r,n)}},{key:"replaceClass",value:function(e,r,n){e&&Zr(e)&&Jr(r)&&Jr(n)&&e.nodeType===1&&(r=r.trim(),n=n.trim(),t.removeClass(e,r),t.addClass(e,n))}},{key:"getScrollTop",value:function(e){var r="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(r,0)}},{key:"setScrollTop",value:function(e,r){"scrollTop"in e?e.scrollTop=r:e.scrollTo(e.scrollX,r)}},{key:"getRootScrollTop",value:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},{key:"setRootScrollTop",value:function(e){t.setScrollTop(window,e),t.setScrollTop(document.body,e)}},{key:"getElementTop",value:function(e,r){if(t.isWindow(e))return 0;var n=r?t.getScrollTop(r):t.getRootScrollTop();return e.getBoundingClientRect().top+n}},{key:"getVisibleHeight",value:function(e){return t.isWindow(e)?e.innerHeight:e.getBoundingClientRect().height}},{key:"isHidden",value:function(e){if(!e)return!1;var r=window.getComputedStyle(e),n=r.display==="none",o=e.offsetParent===null&&r.position!=="fixed";return n||o}},{key:"triggerEvent",value:function(e,r){if("createEvent"in document){var n=document.createEvent("HTMLEvents");n.initEvent(r,!1,!0),e.dispatchEvent(n)}}},{key:"calcAngle",value:function(e,r){var n=e.getBoundingClientRect(),o=n.left+n.width/2,i=n.top+n.height/2,s=Math.abs(o-r.clientX),a=Math.abs(i-r.clientY),l=a/Math.sqrt(Math.pow(s,2)+Math.pow(a,2)),c=Math.acos(l),u=Math.floor(180/(Math.PI/c));return r.clientX>o&&r.clientY>i&&(u=180-u),r.clientX==o&&r.clientY>i&&(u=180),r.clientX>o&&r.clientY==i&&(u=90),r.clientX<o&&r.clientY>i&&(u=180+u),r.clientX<o&&r.clientY==i&&(u=270),r.clientX<o&&r.clientY<i&&(u=360-u),u}},{key:"querySelector",value:function(e,r){return r?r.querySelector(e):document.querySelector(e)}},{key:"createElement",value:function(e){for(var r=document.createElement(e),n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];for(var s=0;s<o.length;s++)o[s]&&r.classList.add(o[s]);return r}},{key:"appendChild",value:function(e){for(var r=0;r<(arguments.length<=1?0:arguments.length-1);r++)e.appendChild(r+1<1||arguments.length<=r+1?void 0:arguments[r+1])}},{key:"getWindow",value:function(e){if(e.toString()!=="[object Window]"){var r=e.ownerDocument;return r&&r.defaultView||window}return e}},{key:"isElement",value:function(e){return e instanceof this.getWindow(e).Element||e instanceof Element}},{key:"isHTMLElement",value:function(e){return e instanceof this.getWindow(e).HTMLElement||e instanceof HTMLElement}},{key:"isShadowRoot",value:function(e){return typeof ShadowRoot<"u"&&(e instanceof this.getWindow(e).ShadowRoot||e instanceof ShadowRoot)}},{key:"getWindowScroll",value:function(e){var r=this.getWindow(e);return{scrollLeft:r.pageXOffset||0,scrollTop:r.pageYOffset||0}}}]),t}(),I_=Math.floor,R_="".replace,N_=/\$([$&'`]|\d\d?|<[^>]*>)/g,P_=/\$([$&'`]|\d\d?)/g,j_=function(t,e,r,n,o,i){var s=r+t.length,a=n.length,l=P_;return o!==void 0&&(o=Ze(o),l=N_),R_.call(i,l,function(c,u){var f;switch(u.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":f=o[u.slice(1,-1)];break;default:var d=+u;if(d===0)return c;if(d>a){var v=I_(d/10);return v===0?c:v<=a?n[v-1]===void 0?u.charAt(1):n[v-1]+u.charAt(1):c}f=n[d-1]}return f===void 0?"":f})},V_=Math.max,L_=Math.min;Od("replace",2,function(t,e,r,n){var o=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=n.REPLACE_KEEPS_$0,s=o?"$":"$0";return[function(a,l){var c=ur(this),u=a==null?void 0:a[t];return u!==void 0?u.call(a,c,l):e.call(String(c),a,l)},function(a,l){if(!o&&i||typeof l=="string"&&l.indexOf(s)===-1){var c=r(e,a,this,l);if(c.done)return c.value}var u=Yt(a),f=String(this),d=typeof l=="function";d||(l=String(l));var v=u.global;if(v){var x=u.unicode;u.lastIndex=0}for(var _=[];;){var b=Js(u,f);if(b===null||(_.push(b),!v))break;String(b[0])===""&&(u.lastIndex=Rd(f,de(u.lastIndex),x))}for(var w,A="",R=0,j=0;j<_.length;j++){b=_[j];for(var B=String(b[0]),O=V_(L_(An(b.index),f.length),0),W=[],Y=1;Y<b.length;Y++)W.push((w=b[Y])===void 0?w:String(w));var T=b.groups;if(d){var F=[B].concat(W,O,f);T!==void 0&&F.push(T);var C=String(l.apply(void 0,F))}else C=j_(B,f,O,W,T,l);O>=R&&(A+=f.slice(R,O)+C,R=O+B.length)}return A+f.slice(R)}]});(function(){function t(){Br(this,t)}return qr(t,null,[{key:"camelize",value:function(e){return e.replace(/-(\w)/g,function(r,n){return n?n.toUpperCase():""})}},{key:"capitalize",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}]),t})();(function(){function t(){Br(this,t)}return qr(t,null,[{key:"_clone",value:function(){}}]),t})();var jd=Ot("isConcatSpreadable"),D_=mi>=51||!yt(function(){var t=[];return t[jd]=!1,t.concat()[0]!==t}),F_=Ya("concat"),H_=function(t){if(!Bt(t))return!1;var e=t[jd];return e!==void 0?!!e:_n(t)};Kt({target:"Array",proto:!0,forced:!D_||!F_},{concat:function(t){var e,r,n,o,i,s=Ze(this),a=Ui(s,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(H_(i=e===-1?s:arguments[e])){if(l+(o=de(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,l++)r in i&&xn(a,l,i[r])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");xn(a,l++,i)}return a.length=l,a}});var ms,Eo=function(t,e,r){if(Za(t),e===void 0)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}},nu=[].push,er=function(t){var e=t==1,r=t==2,n=t==3,o=t==4,i=t==6,s=t==7,a=t==5||i;return function(l,c,u,f){for(var d,v,x=Ze(l),_=Hi(x),b=Eo(c,u,3),w=de(_.length),A=0,R=f||Ui,j=e?R(l,w):r||s?R(l,0):void 0;w>A;A++)if((a||A in _)&&(v=b(d=_[A],A,x),t))if(e)j[A]=v;else if(v)switch(t){case 3:return!0;case 5:return d;case 6:return A;case 2:nu.call(j,d)}else switch(t){case 4:return!1;case 7:nu.call(j,d)}return i?-1:n||o?o:j}},Vd={forEach:er(0),map:er(1),filter:er(2),some:er(3),every:er(4),find:er(5),findIndex:er(6),filterOut:er(7)},B_=he?Object.defineProperties:function(t,e){Yt(t);for(var r,n=Qa(e),o=n.length,i=0;o>i;)Je.f(t,r=n[i++],e[r]);return t},q_=qi("document","documentElement"),Ld=Ka("IE_PROTO"),ys=function(){},ou=function(t){return"<script>"+t+"<\/script>"},Yo=function(){try{ms=document.domain&&new ActiveXObject("htmlfile")}catch{}var t,e;Yo=ms?function(n){n.write(ou("")),n.close();var o=n.parentWindow.Object;return n=null,o}(ms):((e=gd("iframe")).style.display="none",q_.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write(ou("document.F=Object")),t.close(),t.F);for(var r=vi.length;r--;)delete Yo.prototype[vi[r]];return Yo()};Bi[Ld]=!0;var tl=Object.create||function(t,e){var r;return t!==null?(ys.prototype=Yt(t),r=new ys,ys.prototype=null,r[Ld]=t):r=Yo(),e===void 0?r:B_(r,e)},Qs=Ot("unscopables"),ta=Array.prototype;ta[Qs]==null&&Je.f(ta,Qs,{configurable:!0,value:tl(null)});var ln=function(t){ta[Qs][t]=!0},U_=Vd.find,iu=!0,$_=zn("find");"find"in[]&&Array(1).find(function(){iu=!1}),Kt({target:"Array",proto:!0,forced:iu||!$_},{find:function(t){return U_(this,t,arguments.length>1?arguments[1]:void 0)}}),ln("find");var G_=Vd.findIndex,su=!0,W_=zn("findIndex");"findIndex"in[]&&Array(1).findIndex(function(){su=!1}),Kt({target:"Array",proto:!0,forced:su||!W_},{findIndex:function(t){return G_(this,t,arguments.length>1?arguments[1]:void 0)}}),ln("findIndex");var Dd=function(t,e,r,n,o,i,s,a){for(var l,c=o,u=0,f=!!s&&Eo(s,a,3);u<n;){if(u in r){if(l=f?f(r[u],u,e):r[u],i>0&&_n(l))c=Dd(t,e,l,de(l.length),c,i-1)-1;else{if(c>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[c]=l}c++}u++}return c},K_=Dd;Kt({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=Ze(this),r=de(e.length),n=Ui(e,0);return n.length=K_(n,e,e,r,0,t===void 0?1:An(t)),n}});var ea=function(t){var e=t.return;if(e!==void 0)return Yt(e.call(t)).value},X_=function(t,e,r,n){try{return n?e(Yt(r)[0],r[1]):e(r)}catch(o){throw ea(t),o}},wn={},Y_=Ot("iterator"),J_=Array.prototype,Fd=function(t){return t!==void 0&&(wn.Array===t||J_[Y_]===t)},Z_=Ot("iterator"),Hd=function(t){if(t!=null)return t[Z_]||t["@@iterator"]||wn[Cd(t)]},Bd=Ot("iterator"),qd=!1;try{var Q_=0,au={next:function(){return{done:!!Q_++}},return:function(){qd=!0}};au[Bd]=function(){return this},Array.from(au,function(){throw 2})}catch{}var Ud=function(t,e){if(!qd)return!1;var r=!1;try{var n={};n[Bd]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch{}return r},t3=!Ud(function(t){Array.from(t)});Kt({target:"Array",stat:!0,forced:t3},{from:function(t){var e,r,n,o,i,s,a=Ze(t),l=typeof this=="function"?this:Array,c=arguments.length,u=c>1?arguments[1]:void 0,f=u!==void 0,d=Hd(a),v=0;if(f&&(u=Eo(u,c>2?arguments[2]:void 0,2)),d==null||l==Array&&Fd(d))for(r=new l(e=de(a.length));e>v;v++)s=f?u(a[v],v):a[v],xn(r,v,s);else for(i=(o=d.call(a)).next,r=new l;!(n=i.call(o)).done;v++)s=f?X_(o,u,[n.value,v],!0):n.value,xn(r,v,s);return r.length=v,r}});var lu=function(t){return function(e,r,n,o){Za(r);var i=Ze(e),s=Hi(i),a=de(i.length),l=t?a-1:0,c=t?-1:1;if(n<2)for(;;){if(l in s){o=s[l],l+=c;break}if(l+=c,t?l<0:a<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:a>l;l+=c)l in s&&(o=r(o,s[l],l,i));return o}},e3={left:lu(!1),right:lu(!0)},r3=Ge(Vt.process)=="process",n3=e3.left,o3=Xa("reduce"),i3=zn("reduce",{1:0});Kt({target:"Array",proto:!0,forced:!o3||!i3||!r3&&mi>79&&mi<83},{reduce:function(t){return n3(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}}),ln("flat");var br,cu,uu,s3=!yt(function(){return Object.isExtensible(Object.preventExtensions({}))}),$d=qa(function(t){var e=Je.f,r=Wa("meta"),n=0,o=Object.isExtensible||function(){return!0},i=function(a){e(a,r,{value:{objectID:"O"+ ++n,weakData:{}}})},s=t.exports={REQUIRED:!1,fastKey:function(a,l){if(!Bt(a))return typeof a=="symbol"?a:(typeof a=="string"?"S":"P")+a;if(!Nt(a,r)){if(!o(a))return"F";if(!l)return"E";i(a)}return a[r].objectID},getWeakData:function(a,l){if(!Nt(a,r)){if(!o(a))return!0;if(!l)return!1;i(a)}return a[r].weakData},onFreeze:function(a){return s3&&s.REQUIRED&&o(a)&&!Nt(a,r)&&i(a),a}};Bi[r]=!0}),Vn=function(t,e){this.stopped=t,this.result=e},fu=function(t,e,r){var n,o,i,s,a,l,c,u=r&&r.that,f=!(!r||!r.AS_ENTRIES),d=!(!r||!r.IS_ITERATOR),v=!(!r||!r.INTERRUPTED),x=Eo(e,u,1+f+v),_=function(w){return n&&ea(n),new Vn(!0,w)},b=function(w){return f?(Yt(w),v?x(w[0],w[1],_):x(w[0],w[1])):v?x(w,_):x(w)};if(d)n=t;else{if(typeof(o=Hd(t))!="function")throw TypeError("Target is not iterable");if(Fd(o)){for(i=0,s=de(t.length);s>i;i++)if((a=b(t[i]))&&a instanceof Vn)return a;return new Vn(!1)}n=o.call(t)}for(l=n.next;!(c=l.call(n)).done;){try{a=b(c.value)}catch(w){throw ea(n),w}if(typeof a=="object"&&a&&a instanceof Vn)return a}return new Vn(!1)},du=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t},a3=Je.f,hu=Ot("toStringTag"),ra=function(t,e,r){t&&!Nt(t=r?t:t.prototype,hu)&&a3(t,hu,{configurable:!0,value:e})},xi=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch{}return function(n,o){return Yt(n),function(i){if(!Bt(i)&&i!==null)throw TypeError("Can't set "+String(i)+" as a prototype")}(o),e?t.call(n,o):n.__proto__=o,n}}():void 0),pu=function(t,e,r){for(var n in e)dr(t,n,e[n],r);return t},l3=!yt(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),vu=Ka("IE_PROTO"),c3=Object.prototype,bi=l3?Object.getPrototypeOf:function(t){return t=Ze(t),Nt(t,vu)?t[vu]:typeof t.constructor=="function"&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c3:null},_s=Ot("iterator"),Gd=!1;[].keys&&("next"in(uu=[].keys())?(cu=bi(bi(uu)))!==Object.prototype&&(br=cu):Gd=!0),(br==null||yt(function(){var t={};return br[_s].call(t)!==t}))&&(br={}),Nt(br,_s)||me(br,_s,function(){return this});var el={IteratorPrototype:br,BUGGY_SAFARI_ITERATORS:Gd},u3=el.IteratorPrototype,f3=function(){return this},xs=el.IteratorPrototype,$o=el.BUGGY_SAFARI_ITERATORS,Ln=Ot("iterator"),d3=function(){return this},rl=function(t,e,r,n,o,i,s){(function(w,A,R){var j=A+" Iterator";w.prototype=tl(u3,{next:Fi(1,R)}),ra(w,j,!1),wn[j]=f3})(r,e,n);var a,l,c,u=function(w){if(w===o&&_)return _;if(!$o&&w in v)return v[w];switch(w){case"keys":case"values":case"entries":return function(){return new r(this,w)}}return function(){return new r(this)}},f=e+" Iterator",d=!1,v=t.prototype,x=v[Ln]||v["@@iterator"]||o&&v[o],_=!$o&&x||u(o),b=e=="Array"&&v.entries||x;if(b&&(a=bi(b.call(new t)),xs!==Object.prototype&&a.next&&(bi(a)!==xs&&(xi?xi(a,xs):typeof a[Ln]!="function"&&me(a,Ln,d3)),ra(a,f,!0))),o=="values"&&x&&x.name!=="values"&&(d=!0,_=function(){return x.call(this)}),v[Ln]!==_&&me(v,Ln,_),wn[e]=_,o)if(l={values:u("values"),keys:i?_:u("keys"),entries:u("entries")},s)for(c in l)($o||d||!(c in v))&&dr(v,c,l[c]);else Kt({target:e,proto:!0,forced:$o||d},l);return l},gu=Ot("species"),h3=Je.f,mu=$d.fastKey,yu=fr.set,bs=fr.getterFor;(function(t,e,r){var n=t.indexOf("Map")!==-1,o=t.indexOf("Weak")!==-1,i=n?"set":"add",s=Vt[t],a=s&&s.prototype,l=s,c={},u=function(b){var w=a[b];dr(a,b,b=="add"?function(A){return w.call(this,A===0?0:A),this}:b=="delete"?function(A){return!(o&&!Bt(A))&&w.call(this,A===0?0:A)}:b=="get"?function(A){return o&&!Bt(A)?void 0:w.call(this,A===0?0:A)}:b=="has"?function(A){return!(o&&!Bt(A))&&w.call(this,A===0?0:A)}:function(A,R){return w.call(this,A===0?0:A,R),this})};if(Ys(t,typeof s!="function"||!(o||a.forEach&&!yt(function(){new s().entries().next()}))))l=r.getConstructor(e,t,n,i),$d.REQUIRED=!0;else if(Ys(t,!0)){var f=new l,d=f[i](o?{}:-0,1)!=f,v=yt(function(){f.has(1)}),x=Ud(function(b){new s(b)}),_=!o&&yt(function(){for(var b=new s,w=5;w--;)b[i](w,w);return!b.has(-0)});x||((l=e(function(b,w){du(b,l,t);var A=function(R,j,B){var O,W;return xi&&typeof(O=j.constructor)=="function"&&O!==B&&Bt(W=O.prototype)&&W!==B.prototype&&xi(R,W),R}(new s,b,l);return w!=null&&fu(w,A[i],{that:A,AS_ENTRIES:n}),A})).prototype=a,a.constructor=l),(v||_)&&(u("delete"),u("has"),n&&u("get")),(_||d)&&u(i),o&&a.clear&&delete a.clear}c[t]=l,Kt({global:!0,forced:l!=s},c),ra(l,t),o||r.setStrong(l,t,n)})("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},{getConstructor:function(t,e,r,n){var o=t(function(l,c){du(l,o,e),yu(l,{type:e,index:tl(null),first:void 0,last:void 0,size:0}),he||(l.size=0),c!=null&&fu(c,l[n],{that:l,AS_ENTRIES:r})}),i=bs(e),s=function(l,c,u){var f,d,v=i(l),x=a(l,c);return x?x.value=u:(v.last=x={index:d=mu(c,!0),key:c,value:u,previous:f=v.last,next:void 0,removed:!1},v.first||(v.first=x),f&&(f.next=x),he?v.size++:l.size++,d!=="F"&&(v.index[d]=x)),l},a=function(l,c){var u,f=i(l),d=mu(c);if(d!=="F")return f.index[d];for(u=f.first;u;u=u.next)if(u.key==c)return u};return pu(o.prototype,{clear:function(){for(var l=i(this),c=l.index,u=l.first;u;)u.removed=!0,u.previous&&(u.previous=u.previous.next=void 0),delete c[u.index],u=u.next;l.first=l.last=void 0,he?l.size=0:this.size=0},delete:function(l){var c=this,u=i(c),f=a(c,l);if(f){var d=f.next,v=f.previous;delete u.index[f.index],f.removed=!0,v&&(v.next=d),d&&(d.previous=v),u.first==f&&(u.first=d),u.last==f&&(u.last=v),he?u.size--:c.size--}return!!f},forEach:function(l){for(var c,u=i(this),f=Eo(l,arguments.length>1?arguments[1]:void 0,3);c=c?c.next:u.first;)for(f(c.value,c.key,this);c&&c.removed;)c=c.previous},has:function(l){return!!a(this,l)}}),pu(o.prototype,r?{get:function(l){var c=a(this,l);return c&&c.value},set:function(l,c){return s(this,l===0?0:l,c)}}:{add:function(l){return s(this,l=l===0?0:l,l)}}),he&&h3(o.prototype,"size",{get:function(){return i(this).size}}),o},setStrong:function(t,e,r){var n=e+" Iterator",o=bs(e),i=bs(n);rl(t,e,function(s,a){yu(this,{type:n,target:s,state:o(s),kind:a,last:void 0})},function(){for(var s=i(this),a=s.kind,l=s.last;l&&l.removed;)l=l.previous;return s.target&&(s.last=l=l?l.next:s.state.first)?a=="keys"?{value:l.key,done:!1}:a=="values"?{value:l.value,done:!1}:{value:[l.key,l.value],done:!1}:(s.target=void 0,{value:void 0,done:!0})},r?"entries":"values",!r,!0),function(s){var a=qi(s),l=Je.f;he&&a&&!a[gu]&&l(a,gu,{configurable:!0,get:function(){return this}})}(e)}});var p3=Id.charAt,v3=fr.set,g3=fr.getterFor("String Iterator");rl(String,"String",function(t){v3(this,{type:"String Iterator",string:String(t),index:0})},function(){var t,e=g3(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=p3(r,n),e.index+=t.length,{value:t,done:!1})});var _u={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},m3=fr.set,y3=fr.getterFor("Array Iterator"),$n=rl(Array,"Array",function(t,e){m3(this,{type:"Array Iterator",target:En(t),index:0,kind:e})},function(){var t=y3(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):r=="keys"?{value:n,done:!1}:r=="values"?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}},"values");wn.Arguments=wn.Array,ln("keys"),ln("values"),ln("entries");var ws=Ot("iterator"),xu=Ot("toStringTag"),ks=$n.values;for(var Ss in _u){var bu=Vt[Ss],qe=bu&&bu.prototype;if(qe){if(qe[ws]!==ks)try{me(qe,ws,ks)}catch{qe[ws]=ks}if(qe[xu]||me(qe,xu,Ss),_u[Ss]){for(var Qr in $n)if(qe[Qr]!==$n[Qr])try{me(qe,Qr,$n[Qr])}catch{qe[Qr]=$n[Qr]}}}}(function(){function t(){Br(this,t)}return qr(t,null,[{key:"deduplicate",value:function(e){return Array.from(new Set(e))}},{key:"flat",value:function(e){return e.reduce(function(r,n){var o=Array.isArray(n)?t.flat(n):n;return r.concat(o)},[])}},{key:"find",value:function(e,r){return e.find(r)}},{key:"findIndex",value:function(e,r){return e.findIndex(r)}}]),t})();(function(){function t(){Br(this,t)}return qr(t,null,[{key:"today",value:function(){return new Date}}]),t})();(function(){function t(){Br(this,t)}return qr(t,null,[{key:"range",value:function(e,r,n){return Math.min(Math.max(e,r),n)}},{key:"clamp",value:function(e,r,n){return r<n?e<r?r:e>n?n:e:e<n?n:e>r?r:e}}]),t})();var Wd=typeof global=="object"&&global&&global.Object===Object&&global,_3=typeof self=="object"&&self&&self.Object===Object&&self,Tn=Wd||_3||Function("return this")(),wi=Tn.Symbol,Kd=Object.prototype,x3=Kd.hasOwnProperty,b3=Kd.toString,Dn=wi?wi.toStringTag:void 0;function w3(t){var e=x3.call(t,Dn),r=t[Dn];try{t[Dn]=void 0;var n=!0}catch{}var o=b3.call(t);return n&&(e?t[Dn]=r:delete t[Dn]),o}var k3=Object.prototype,S3=k3.toString;function C3(t){return S3.call(t)}var E3="[object Null]",A3="[object Undefined]",wu=wi?wi.toStringTag:void 0;function $i(t){return t==null?t===void 0?A3:E3:wu&&wu in Object(t)?w3(t):C3(t)}function Ao(t){return t!=null&&typeof t=="object"}var na=Array.isArray;function Ur(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function Xd(t){return t}var z3="[object AsyncFunction]",T3="[object Function]",O3="[object GeneratorFunction]",M3="[object Proxy]";function nl(t){if(!Ur(t))return!1;var e=$i(t);return e==T3||e==O3||e==z3||e==M3}var Cs=Tn["__core-js_shared__"],ku=function(){var t=/[^.]+$/.exec(Cs&&Cs.keys&&Cs.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function I3(t){return!!ku&&ku in t}var R3=Function.prototype,N3=R3.toString;function P3(t){if(t!=null){try{return N3.call(t)}catch{}try{return t+""}catch{}}return""}var j3=/[\\^$.*+?()[\]{}|]/g,V3=/^\[object .+?Constructor\]$/,L3=Function.prototype,D3=Object.prototype,F3=L3.toString,H3=D3.hasOwnProperty,B3=RegExp("^"+F3.call(H3).replace(j3,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function q3(t){if(!Ur(t)||I3(t))return!1;var e=nl(t)?B3:V3;return e.test(P3(t))}function U3(t,e){return t==null?void 0:t[e]}function ol(t,e){var r=U3(t,e);return q3(r)?r:void 0}var Su=Object.create,$3=function(){function t(){}return function(e){if(!Ur(e))return{};if(Su)return Su(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();function G3(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function W3(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var K3=800,X3=16,Y3=Date.now;function J3(t){var e=0,r=0;return function(){var n=Y3(),o=X3-(n-r);if(r=n,o>0){if(++e>=K3)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Z3(t){return function(){return t}}var ki=function(){try{var t=ol(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Q3=ki?function(t,e){return ki(t,"toString",{configurable:!0,enumerable:!1,value:Z3(e),writable:!0})}:Xd;const tx=Q3;var ex=J3(tx),rx=9007199254740991,nx=/^(?:0|[1-9]\d*)$/;function Yd(t,e){var r=typeof t;return e=e??rx,!!e&&(r=="number"||r!="symbol"&&nx.test(t))&&t>-1&&t%1==0&&t<e}function il(t,e,r){e=="__proto__"&&ki?ki(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function Gi(t,e){return t===e||t!==t&&e!==e}var ox=Object.prototype,ix=ox.hasOwnProperty;function sx(t,e,r){var n=t[e];(!(ix.call(t,e)&&Gi(n,r))||r===void 0&&!(e in t))&&il(t,e,r)}function ax(t,e,r,n){var o=!r;r||(r={});for(var i=-1,s=e.length;++i<s;){var a=e[i],l=void 0;l===void 0&&(l=t[a]),o?il(r,a,l):sx(r,a,l)}return r}var Cu=Math.max;function lx(t,e,r){return e=Cu(e===void 0?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=Cu(n.length-e,0),s=Array(i);++o<i;)s[o]=n[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=n[o];return a[e]=r(s),G3(t,this,a)}}function cx(t,e){return ex(lx(t,e,Xd),t+"")}var ux=9007199254740991;function Jd(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ux}function sl(t){return t!=null&&Jd(t.length)&&!nl(t)}function fx(t,e,r){if(!Ur(r))return!1;var n=typeof e;return(n=="number"?sl(r)&&Yd(e,r.length):n=="string"&&e in r)?Gi(r[e],t):!1}function dx(t){return cx(function(e,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,s=o>2?r[2]:void 0;for(i=t.length>3&&typeof i=="function"?(o--,i):void 0,s&&fx(r[0],r[1],s)&&(i=o<3?void 0:i,o=1),e=Object(e);++n<o;){var a=r[n];a&&t(e,a,n,i)}return e})}var hx=Object.prototype;function Zd(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||hx;return t===r}function px(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var vx="[object Arguments]";function Eu(t){return Ao(t)&&$i(t)==vx}var Qd=Object.prototype,gx=Qd.hasOwnProperty,mx=Qd.propertyIsEnumerable,yx=Eu(function(){return arguments}())?Eu:function(t){return Ao(t)&&gx.call(t,"callee")&&!mx.call(t,"callee")};const oa=yx;function _x(){return!1}var th=typeof le=="object"&&le&&!le.nodeType&&le,Au=th&&typeof ce=="object"&&ce&&!ce.nodeType&&ce,xx=Au&&Au.exports===th,zu=xx?Tn.Buffer:void 0,bx=zu?zu.isBuffer:void 0,eh=bx||_x,wx="[object Arguments]",kx="[object Array]",Sx="[object Boolean]",Cx="[object Date]",Ex="[object Error]",Ax="[object Function]",zx="[object Map]",Tx="[object Number]",Ox="[object Object]",Mx="[object RegExp]",Ix="[object Set]",Rx="[object String]",Nx="[object WeakMap]",Px="[object ArrayBuffer]",jx="[object DataView]",Vx="[object Float32Array]",Lx="[object Float64Array]",Dx="[object Int8Array]",Fx="[object Int16Array]",Hx="[object Int32Array]",Bx="[object Uint8Array]",qx="[object Uint8ClampedArray]",Ux="[object Uint16Array]",$x="[object Uint32Array]",gt={};gt[Vx]=gt[Lx]=gt[Dx]=gt[Fx]=gt[Hx]=gt[Bx]=gt[qx]=gt[Ux]=gt[$x]=!0;gt[wx]=gt[kx]=gt[Px]=gt[Sx]=gt[jx]=gt[Cx]=gt[Ex]=gt[Ax]=gt[zx]=gt[Tx]=gt[Ox]=gt[Mx]=gt[Ix]=gt[Rx]=gt[Nx]=!1;function Gx(t){return Ao(t)&&Jd(t.length)&&!!gt[$i(t)]}function Wx(t){return function(e){return t(e)}}var rh=typeof le=="object"&&le&&!le.nodeType&&le,so=rh&&typeof ce=="object"&&ce&&!ce.nodeType&&ce,Kx=so&&so.exports===rh,Es=Kx&&Wd.process,Tu=function(){try{var t=so&&so.require&&so.require("util").types;return t||Es&&Es.binding&&Es.binding("util")}catch{}}(),Ou=Tu&&Tu.isTypedArray,nh=Ou?Wx(Ou):Gx;function Xx(t,e){var r=na(t),n=!r&&oa(t),o=!r&&!n&&eh(t),i=!r&&!n&&!o&&nh(t),s=r||n||o||i,a=s?px(t.length,String):[],l=a.length;for(var c in t)!(s&&(c=="length"||o&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Yd(c,l)))&&a.push(c);return a}function Yx(t,e){return function(r){return t(e(r))}}function Jx(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var Zx=Object.prototype,Qx=Zx.hasOwnProperty;function t2(t){if(!Ur(t))return Jx(t);var e=Zd(t),r=[];for(var n in t)n=="constructor"&&(e||!Qx.call(t,n))||r.push(n);return r}function oh(t){return sl(t)?Xx(t):t2(t)}var _o=ol(Object,"create");function e2(){this.__data__=_o?_o(null):{},this.size=0}function r2(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var n2="__lodash_hash_undefined__",o2=Object.prototype,i2=o2.hasOwnProperty;function s2(t){var e=this.__data__;if(_o){var r=e[t];return r===n2?void 0:r}return i2.call(e,t)?e[t]:void 0}var a2=Object.prototype,l2=a2.hasOwnProperty;function c2(t){var e=this.__data__;return _o?e[t]!==void 0:l2.call(e,t)}var u2="__lodash_hash_undefined__";function f2(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=_o&&e===void 0?u2:e,this}function Pr(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Pr.prototype.clear=e2;Pr.prototype.delete=r2;Pr.prototype.get=s2;Pr.prototype.has=c2;Pr.prototype.set=f2;function d2(){this.__data__=[],this.size=0}function Wi(t,e){for(var r=t.length;r--;)if(Gi(t[r][0],e))return r;return-1}var h2=Array.prototype,p2=h2.splice;function v2(t){var e=this.__data__,r=Wi(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():p2.call(e,r,1),--this.size,!0}function g2(t){var e=this.__data__,r=Wi(e,t);return r<0?void 0:e[r][1]}function m2(t){return Wi(this.__data__,t)>-1}function y2(t,e){var r=this.__data__,n=Wi(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function Qe(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Qe.prototype.clear=d2;Qe.prototype.delete=v2;Qe.prototype.get=g2;Qe.prototype.has=m2;Qe.prototype.set=y2;var ih=ol(Tn,"Map");function _2(){this.size=0,this.__data__={hash:new Pr,map:new(ih||Qe),string:new Pr}}function x2(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Ki(t,e){var r=t.__data__;return x2(e)?r[typeof e=="string"?"string":"hash"]:r.map}function b2(t){var e=Ki(this,t).delete(t);return this.size-=e?1:0,e}function w2(t){return Ki(this,t).get(t)}function k2(t){return Ki(this,t).has(t)}function S2(t,e){var r=Ki(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function On(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}On.prototype.clear=_2;On.prototype.delete=b2;On.prototype.get=w2;On.prototype.has=k2;On.prototype.set=S2;var sh=Yx(Object.getPrototypeOf,Object),C2="[object Object]",E2=Function.prototype,A2=Object.prototype,ah=E2.toString,z2=A2.hasOwnProperty,T2=ah.call(Object);function O2(t){if(!Ao(t)||$i(t)!=C2)return!1;var e=sh(t);if(e===null)return!0;var r=z2.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&ah.call(r)==T2}function M2(){this.__data__=new Qe,this.size=0}function I2(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function R2(t){return this.__data__.get(t)}function N2(t){return this.__data__.has(t)}var P2=200;function j2(t,e){var r=this.__data__;if(r instanceof Qe){var n=r.__data__;if(!ih||n.length<P2-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new On(n)}return r.set(t,e),this.size=r.size,this}function Mn(t){var e=this.__data__=new Qe(t);this.size=e.size}Mn.prototype.clear=M2;Mn.prototype.delete=I2;Mn.prototype.get=R2;Mn.prototype.has=N2;Mn.prototype.set=j2;var lh=typeof le=="object"&&le&&!le.nodeType&&le,Mu=lh&&typeof ce=="object"&&ce&&!ce.nodeType&&ce,V2=Mu&&Mu.exports===lh,Iu=V2?Tn.Buffer:void 0;Iu&&Iu.allocUnsafe;function L2(t,e){return t.slice()}var Ru=Tn.Uint8Array;function D2(t){var e=new t.constructor(t.byteLength);return new Ru(e).set(new Ru(t)),e}function F2(t,e){var r=D2(t.buffer);return new t.constructor(r,t.byteOffset,t.length)}function H2(t){return typeof t.constructor=="function"&&!Zd(t)?$3(sh(t)):{}}function B2(t){return function(e,r,n){for(var o=-1,i=Object(e),s=n(e),a=s.length;a--;){var l=s[++o];if(r(i[l],l,i)===!1)break}return e}}var q2=B2();function ia(t,e,r){(r!==void 0&&!Gi(t[e],r)||r===void 0&&!(e in t))&&il(t,e,r)}function U2(t){return Ao(t)&&sl(t)}function sa(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}function $2(t){return ax(t,oh(t))}function G2(t,e,r,n,o,i,s){var a=sa(t,r),l=sa(e,r),c=s.get(l);if(c){ia(t,r,c);return}var u=i?i(a,l,r+"",t,e,s):void 0,f=u===void 0;if(f){var d=na(l),v=!d&&eh(l),x=!d&&!v&&nh(l);u=l,d||v||x?na(a)?u=a:U2(a)?u=W3(a):v?(f=!1,u=L2(l)):x?(f=!1,u=F2(l)):u=[]:O2(l)||oa(l)?(u=a,oa(a)?u=$2(a):(!Ur(a)||nl(a))&&(u=H2(l))):f=!1}f&&(s.set(l,u),o(u,l,n,i,s),s.delete(l)),ia(t,r,u)}function ch(t,e,r,n,o){t!==e&&q2(e,function(i,s){if(o||(o=new Mn),Ur(i))G2(t,e,s,r,ch,n,o);else{var a=n?n(sa(t,s),i,s+"",t,e,o):void 0;a===void 0&&(a=i),ia(t,s,a)}},oh)}var W2=dx(function(t,e,r){ch(t,e,r)});const Xi=W2;var K2=Object.defineProperty,X2=(t,e,r)=>e in t?K2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ut=(t,e,r)=>(X2(t,typeof e!="symbol"?e+"":e,r),r);const Mt=t=>Math.round(t*100)/100;class At{constructor(e){Ut(this,"instance"),Ut(this,"alphaValue",0),Ut(this,"redValue",0),Ut(this,"greenValue",0),Ut(this,"blueValue",0),Ut(this,"hueValue",0),Ut(this,"saturationValue",0),Ut(this,"brightnessValue",0),Ut(this,"hslSaturationValue",0),Ut(this,"lightnessValue",0),Ut(this,"initAlpha",()=>{const r=this.instance.getAlpha();this.alphaValue=Math.min(1,r)*100}),Ut(this,"initLightness",()=>{const{s:r,l:n}=this.instance.toHsl();this.hslSaturationValue=Mt(r),this.lightnessValue=Mt(n)}),Ut(this,"initRgb",()=>{const{r,g:n,b:o}=this.instance.toRgb();this.redValue=Mt(r),this.greenValue=Mt(n),this.blueValue=Mt(o)}),Ut(this,"initHsb",()=>{const{h:r,s:n,v:o}=this.instance.toHsv();this.hueValue=Math.min(360,Math.ceil(r)),this.saturationValue=Mt(n),this.brightnessValue=Mt(o)}),Ut(this,"toHexString",()=>this.instance.toHexString()),Ut(this,"toRgbString",()=>this.instance.toRgbString()),this.instance=D(e),this.initRgb(),this.initHsb(),this.initLightness(),this.initAlpha()}toString(e){return this.instance.toString(e)}get hex(){return this.instance.toHex()}set hex(e){this.instance=D(e),this.initHsb(),this.initRgb(),this.initAlpha(),this.initLightness()}set hue(e){this.saturation===0&&this.brightness===0&&(this.saturationValue=1,this.brightnessValue=1),this.instance=D({h:Mt(e),s:this.saturation,v:this.brightness,a:this.alphaValue/100}),this.initRgb(),this.initLightness(),this.hueValue=Mt(e)}get hue(){return this.hueValue}set saturation(e){this.instance=D({h:this.hue,s:Mt(e),v:this.brightness,a:this.alphaValue/100}),this.initRgb(),this.initLightness(),this.saturationValue=Mt(e)}get saturation(){return this.saturationValue}set brightness(e){this.instance=D({h:this.hue,s:this.saturation,v:Mt(e),a:this.alphaValue/100}),this.initRgb(),this.initLightness(),this.brightnessValue=Mt(e)}get brightness(){return this.brightnessValue}set lightness(e){this.instance=D({h:this.hue,s:this.hslSaturationValue,l:Mt(e),a:this.alphaValue/100}),this.initRgb(),this.initHsb(),this.lightnessValue=Mt(e)}get lightness(){return this.lightnessValue}set red(e){const r=this.instance.toRgb();this.instance=D({...r,r:Mt(e),a:this.alphaValue/100}),this.initHsb(),this.initLightness(),this.redValue=Mt(e)}get red(){return this.redValue}set green(e){const r=this.instance.toRgb();this.instance=D({...r,g:Mt(e),a:this.alphaValue/100}),this.initHsb(),this.initLightness(),this.greenValue=Mt(e)}get green(){return this.greenValue}set blue(e){const r=this.instance.toRgb();this.instance=D({...r,b:Mt(e),a:this.alphaValue/100}),this.initHsb(),this.initLightness(),this.blueValue=Mt(e)}get blue(){return this.blueValue}set alpha(e){this.instance.setAlpha(e/100),this.alphaValue=e}get alpha(){return this.alphaValue}get RGB(){return[this.red,this.green,this.blue,this.alpha/100]}get HSB(){return[this.hue,this.saturation,this.brightness,this.alpha/100]}get HSL(){return[this.hue,this.hslSaturationValue,this.lightness,this.alpha/100]}}function Nu(t,e,r,n){return`rgba(${[t,e,r,n/100].join(",")})`}const As=(t,e,r)=>e<r?t<e?e:t>r?r:t:t<r?r:t>e?e:t,al="color-history",ll=8,xe=(t,e)=>{const r=t.__vccOpts||t;for(const[n,o]of e)r[n]=o;return r},Y2=zt({name:"Alpha",props:{color:tt.instanceOf(At),size:tt.oneOf(["small","default"]).def("default")},emits:["change"],setup(t,{emit:e}){const r=vt(null),n=vt(null);let o=t.color||new At;const i=ne({red:o.red,green:o.green,blue:o.blue,alpha:o.alpha});ve(()=>t.color,f=>{f&&(o=f,Xi(i,{red:f.red,green:f.green,blue:f.blue,alpha:f.alpha}))},{deep:!0});const s=mt(()=>{const f=Nu(i.red,i.green,i.blue,0),d=Nu(i.red,i.green,i.blue,100);return{background:`linear-gradient(to right, ${f} , ${d})`}}),a=()=>{if(r.value&&n.value){const f=i.alpha/100,d=r.value.getBoundingClientRect(),v=n.value.offsetWidth;return Math.round(f*(d.width-v)+v/2)}return 0},l=mt(()=>({left:a()+"px",top:0})),c=f=>{f.target!==r.value&&u(f)},u=f=>{if(f.stopPropagation(),r.value&&n.value){const d=r.value.getBoundingClientRect(),v=n.value.offsetWidth;let x=f.clientX-d.left;x=Math.max(v/2,x),x=Math.min(x,d.width-v/2);const _=Math.round((x-v/2)/(d.width-v)*100);o.alpha=_,i.alpha=_,e("change",_)}};return Dr(()=>{const f={drag:d=>{u(d)},end:d=>{u(d)}};r.value&&n.value&&bn.triggerDragEvent(r.value,f)}),{barElement:r,cursorElement:n,getCursorStyle:l,getBackgroundStyle:s,onClickSider:c}}}),J2=t=>(kn("data-v-18925ba6"),t=t(),Sn(),t),Z2=J2(()=>P("div",{class:"vc-alpha-slider__bar-handle"},null,-1)),Q2=[Z2];function tb(t,e,r,n,o,i){return G(),rt("div",{class:jt(["vc-alpha-slider","transparent",{"small-slider":t.size==="small"}])},[P("div",{ref:"barElement",class:"vc-alpha-slider__bar",style:Ct(t.getBackgroundStyle),onClick:e[0]||(e[0]=(...s)=>t.onClickSider&&t.onClickSider(...s))},[P("div",{class:jt(["vc-alpha-slider__bar-pointer",{"small-bar":t.size==="small"}]),ref:"cursorElement",style:Ct(t.getCursorStyle)},Q2,6)],4)],2)}const cl=xe(Y2,[["render",tb],["__scopeId","data-v-18925ba6"]]),eb=[["#fcc02e","#f67c01","#e64a19","#d81b43","#8e24aa","#512da7","#1f87e8","#008781","#05a045"],["#fed835","#fb8c00","#f5511e","#eb1d4e","#9c28b1","#5d35b0","#2097f3","#029688","#4cb050"],["#ffeb3c","#ffa727","#fe5722","#eb4165","#aa47bc","#673bb7","#42a5f6","#26a59a","#83c683"],["#fff176","#ffb74e","#ff8a66","#f1627e","#b968c7","#7986cc","#64b5f6","#80cbc4","#a5d6a7"],["#fff59c","#ffcc80","#ffab91","#fb879e","#cf93d9","#9ea8db","#90caf8","#b2dfdc","#c8e6ca"],["transparent","#ffffff","#dedede","#a9a9a9","#4b4b4b","#353535","#212121","#000000","advance"]],rb=zt({name:"Palette",emits:["change"],setup(t,{emit:e}){return{palettes:eb,computedBgStyle:r=>r==="transparent"?r:r==="advance"?{}:{background:D(r).toRgbString()},onColorChange:r=>{e("change",r)}}}}),nb={class:"vc-compact"},ob=["onClick"];function ib(t,e,r,n,o,i){return G(),rt("div",nb,[(G(!0),rt(It,null,lr(t.palettes,(s,a)=>(G(),rt("div",{key:a,class:"vc-compact__row"},[(G(!0),rt(It,null,lr(s,(l,c)=>(G(),rt("div",{key:c,class:"vc-compact__color-cube--wrap",onClick:u=>t.onColorChange(l)},[P("div",{class:jt(["vc-compact__color_cube",{advance:l==="advance",transparent:l==="transparent"}]),style:Ct(t.computedBgStyle(l))},null,6)],8,ob))),128))]))),128))])}const uh=xe(rb,[["render",ib],["__scopeId","data-v-b969fd48"]]),sb=zt({name:"Board",props:{color:tt.instanceOf(At),round:tt.bool.def(!1),hide:tt.bool.def(!0)},emits:["change"],setup(t,{emit:e}){var r,n,o;const i=Ma(),s={h:((r=t.color)==null?void 0:r.hue)||0,s:1,v:1},a=new At(s).toHexString(),l=ne({hueColor:a,saturation:((n=t.color)==null?void 0:n.saturation)||0,brightness:((o=t.color)==null?void 0:o.brightness)||0}),c=vt(0),u=vt(0),f=vt(),d=vt(),v=mt(()=>({top:c.value+"px",left:u.value+"px"})),x=()=>{if(i){const w=i.vnode.el;u.value=l.saturation*(w==null?void 0:w.clientWidth),c.value=(1-l.brightness)*(w==null?void 0:w.clientHeight)}},_=w=>{w.target!==d.value&&b(w)},b=w=>{if(i){const A=i.vnode.el,R=A==null?void 0:A.getBoundingClientRect();let j=w.clientX-R.left,B=w.clientY-R.top;j=As(j,0,R.width),B=As(B,0,R.height);const O=j/R.width,W=As(-(B/R.height)+1,0,1);u.value=j,c.value=B,l.saturation=O,l.brightness=W,e("change",O,W)}};return Dr(()=>{i&&i.vnode.el&&f.value&&(bn.triggerDragEvent(f.value,{drag:w=>{b(w)},end:w=>{b(w)}}),bo(()=>{x()}))}),Gt(()=>t.color,w=>{Xi(l,{hueColor:new At({h:w.hue,s:1,v:1}).toHexString(),saturation:w.saturation,brightness:w.brightness}),x()},{deep:!0}),{state:l,cursorElement:f,getCursorStyle:v,onClickBoard:_}}}),ul=t=>(kn("data-v-058e5db2"),t=t(),Sn(),t),ab=ul(()=>P("div",{class:"vc-saturation__white"},null,-1)),lb=ul(()=>P("div",{class:"vc-saturation__black"},null,-1)),cb=ul(()=>P("div",null,null,-1)),ub=[cb];function fb(t,e,r,n,o,i){return G(),rt("div",{ref:"boardElement",class:jt(["vc-saturation",{"vc-saturation__chrome":t.round,"vc-saturation__hidden":t.hide}]),style:Ct({backgroundColor:t.state.hueColor}),onClick:e[0]||(e[0]=(...s)=>t.onClickBoard&&t.onClickBoard(...s))},[ab,lb,P("div",{class:"vc-saturation__cursor",ref:"cursorElement",style:Ct(t.getCursorStyle)},ub,4)],6)}const fl=xe(sb,[["render",fb],["__scopeId","data-v-058e5db2"]]),db=zt({name:"Hue",props:{color:tt.instanceOf(At),size:tt.oneOf(["small","default"]).def("default")},emits:["change"],setup(t,{emit:e}){const r=vt(null),n=vt(null);let o=t.color||new At;const i=ne({hue:o.hue||0});ve(()=>t.color,u=>{u&&(o=u,Xi(i,{hue:o.hue}))},{deep:!0});const s=()=>{if(r.value&&n.value){const u=r.value.getBoundingClientRect(),f=n.value.offsetWidth;return i.hue===360?u.width-f/2:i.hue%360*(u.width-f)/360+f/2}return 0},a=mt(()=>({left:s()+"px",top:0})),l=u=>{u.target!==r.value&&c(u)},c=u=>{if(u.stopPropagation(),r.value&&n.value){const f=r.value.getBoundingClientRect(),d=n.value.offsetWidth;let v=u.clientX-f.left;v=Math.min(v,f.width-d/2),v=Math.max(d/2,v);const x=Math.round((v-d/2)/(f.width-d)*360);o.hue=x,i.hue=x,e("change",x)}};return Dr(()=>{const u={drag:f=>{c(f)},end:f=>{c(f)}};r.value&&n.value&&bn.triggerDragEvent(r.value,u)}),{barElement:r,cursorElement:n,getCursorStyle:a,onClickSider:l}}}),hb=t=>(kn("data-v-e1a08576"),t=t(),Sn(),t),pb=hb(()=>P("div",{class:"vc-hue-slider__bar-handle"},null,-1)),vb=[pb];function gb(t,e,r,n,o,i){return G(),rt("div",{class:jt(["vc-hue-slider",{"small-slider":t.size==="small"}])},[P("div",{ref:"barElement",class:"vc-hue-slider__bar",onClick:e[0]||(e[0]=(...s)=>t.onClickSider&&t.onClickSider(...s))},[P("div",{class:jt(["vc-hue-slider__bar-pointer",{"small-bar":t.size==="small"}]),ref:"cursorElement",style:Ct(t.getCursorStyle)},vb,6)],512)],2)}const dl=xe(db,[["render",gb],["__scopeId","data-v-e1a08576"]]),mb=zt({name:"Lightness",props:{color:tt.instanceOf(At),size:tt.oneOf(["small","default"]).def("default")},emits:["change"],setup(t,{emit:e}){const r=vt(null),n=vt(null);let o=t.color||new At;const[i,s,a]=o.HSL,l=ne({hue:i,saturation:s,lightness:a});ve(()=>t.color,x=>{if(x){o=x;const[_,b,w]=o.HSL;Xi(l,{hue:_,saturation:b,lightness:w})}},{deep:!0});const c=mt(()=>{const x=D({h:l.hue,s:l.saturation,l:.8}).toPercentageRgbString(),_=D({h:l.hue,s:l.saturation,l:.6}).toPercentageRgbString(),b=D({h:l.hue,s:l.saturation,l:.4}).toPercentageRgbString(),w=D({h:l.hue,s:l.saturation,l:.2}).toPercentageRgbString();return{background:[`linear-gradient(to right, rgb(255, 255, 255), ${x}, ${_}, ${b}, ${w}, rgb(0, 0, 0))`,`-webkit-linear-gradient(left, rgb(255, 255, 255), ${x}, ${_}, ${b}, ${w}, rgb(0, 0, 0))`,`-moz-linear-gradient(left, rgb(255, 255, 255), ${x}, ${_}, ${b}, ${w}, rgb(0, 0, 0))`,`-ms-linear-gradient(left, rgb(255, 255, 255), ${x}, ${_}, ${b}, ${w}, rgb(0, 0, 0))`]}}),u=()=>{if(r.value&&n.value){const x=l.lightness,_=r.value.getBoundingClientRect(),b=n.value.offsetWidth;return(1-x)*(_.width-b)+b/2}return 0},f=mt(()=>({left:u()+"px",top:0})),d=x=>{x.target!==r.value&&v(x)},v=x=>{if(x.stopPropagation(),r.value&&n.value){const _=r.value.getBoundingClientRect(),b=n.value.offsetWidth;let w=x.clientX-_.left;w=Math.max(b/2,w),w=Math.min(w,_.width-b/2);const A=1-(w-b/2)/(_.width-b);o.lightness=A,e("change",A)}};return Dr(()=>{const x={drag:_=>{v(_)},end:_=>{v(_)}};r.value&&n.value&&bn.triggerDragEvent(r.value,x)}),{barElement:r,cursorElement:n,getCursorStyle:f,getBackgroundStyle:c,onClickSider:d}}}),yb=t=>(kn("data-v-94a50a9e"),t=t(),Sn(),t),_b=yb(()=>P("div",{class:"vc-lightness-slider__bar-handle"},null,-1)),xb=[_b];function bb(t,e,r,n,o,i){return G(),rt("div",{class:jt(["vc-lightness-slider",{"small-slider":t.size==="small"}])},[P("div",{ref:"barElement",class:"vc-lightness-slider__bar",style:Ct(t.getBackgroundStyle),onClick:e[0]||(e[0]=(...s)=>t.onClickSider&&t.onClickSider(...s))},[P("div",{class:jt(["vc-lightness-slider__bar-pointer",{"small-bar":t.size==="small"}]),ref:"cursorElement",style:Ct(t.getCursorStyle)},xb,6)],4)],2)}const fh=xe(mb,[["render",bb],["__scopeId","data-v-94a50a9e"]]),wb=zt({name:"History",props:{colors:tt.arrayOf(String).def(()=>[]),round:tt.bool.def(!1)},emits:["change"],setup(t,{emit:e}){return{onColorSelect:r=>{e("change",r)}}}}),kb={key:0,class:"vc-colorPicker__record"},Sb={class:"color-list"},Cb=["onClick"];function Eb(t,e,r,n,o,i){return t.colors&&t.colors.length>0?(G(),rt("div",kb,[P("div",Sb,[(G(!0),rt(It,null,lr(t.colors,(s,a)=>(G(),rt("div",{key:a,class:jt(["color-item","transparent",{"color-item__round":t.round}]),onClick:l=>t.onColorSelect(s)},[P("div",{class:"color-item__display",style:Ct({backgroundColor:s})},null,4)],10,Cb))),128))])])):wt("",!0)}const hl=xe(wb,[["render",Eb],["__scopeId","data-v-0f657238"]]),Ab=zt({name:"Display",props:{color:tt.instanceOf(At),disableAlpha:tt.bool.def(!1)},emits:["update:color","change"],setup(t,{emit:e}){var r,n,o,i;const s=vt("hex"),a=ne({color:t.color,hex:(r=t.color)==null?void 0:r.hex,alpha:Math.floor(((n=t.color)==null?void 0:n.alpha)||100)+"%",rgba:(o=t.color)==null?void 0:o.RGB,previewBgColor:(i=t.color)==null?void 0:i.toRgbString()}),l=mt(()=>({background:a.previewBgColor})),c=()=>{s.value=s.value==="rgba"?"hex":"rgba"},u=Mr(d=>{if(!d.target.value)return;let v=parseInt(d.target.value.replace("%",""));v>100&&(d.target.value="100%",v=100),v<0&&(d.target.value="0%",v=0),isNaN(v)&&(d.target.value="100%",v=100),!isNaN(v)&&a.color&&(a.color.alpha=v),e("update:color",a.color),e("change",a.color)},300),f=Mr((d,v)=>{if(d.target.value){if(s.value==="hex"){const x=d.target.value.replace("#","");D(x).isValid()&&a.color&&(a.color.hex=x)}else if(v!==void 0&&a.rgba&&a.color){d.target.value<0&&(d.target.value=0),v===3&&d.target.value>1&&(d.target.value=1),v<3&&d.target.value>255&&(d.target.value=255),a.rgba[v]=Number(d.target.value);const[x,_,b,w]=a.rgba;a.color.hex=D({r:x,g:_,b}).toHex(),a.color.alpha=Math.floor(w*100)}e("update:color",a.color),e("change",a.color)}},300);return Gt(()=>t.color,d=>{d&&(a.color=d,a.alpha=Math.floor(a.color.alpha)+"%",a.hex=a.color.hex,a.rgba=a.color.RGB)},{deep:!0}),Gt(()=>a.color,()=>{a.color&&(a.previewBgColor=a.color.toRgbString())},{deep:!0}),{state:a,getBgColorStyle:l,inputType:s,onInputTypeChange:c,onAlphaBlur:u,onInputChange:f}}}),zb={class:"vc-display"},Tb={class:"vc-current-color vc-transparent"},Ob={key:0,style:{display:"flex",flex:"1",gap:"4px",height:"100%"}},Mb={class:"vc-color-input"},Ib=["value"],Rb={key:0,class:"vc-alpha-input"},Nb=["value"],Pb={key:1,style:{display:"flex",flex:"1",gap:"4px",height:"100%"}},jb=["value","onInput"];function Vb(t,e,r,n,o,i){return G(),rt("div",zb,[P("div",Tb,[P("div",{class:"color-cube",style:Ct(t.getBgColorStyle)},null,4)]),t.inputType==="hex"?(G(),rt("div",Ob,[P("div",Mb,[P("input",{value:t.state.hex,onInput:e[0]||(e[0]=(...s)=>t.onInputChange&&t.onInputChange(...s))},null,40,Ib)]),t.disableAlpha?wt("",!0):(G(),rt("div",Rb,[P("input",{class:"vc-alpha-input__inner",value:t.state.alpha,onInput:e[1]||(e[1]=(...s)=>t.onAlphaBlur&&t.onAlphaBlur(...s))},null,40,Nb)]))])):t.state.rgba?(G(),rt("div",Pb,[(G(!0),rt(It,null,lr(t.state.rgba,(s,a)=>(G(),rt("div",{class:"vc-color-input",key:a},[P("input",{value:s,onInput:l=>t.onInputChange(l,a)},null,40,jb)]))),128))])):wt("",!0),P("div",{class:"vc-input-toggle",onClick:e[2]||(e[2]=(...s)=>t.onInputTypeChange&&t.onInputTypeChange(...s))},Jt(t.inputType),1)])}const pl=xe(Ab,[["render",Vb],["__scopeId","data-v-80d589ba"]]),Lb=zt({name:"FkColorPicker",components:{Display:pl,Alpha:cl,Palette:uh,Board:fl,Hue:dl,Lightness:fh,History:hl},props:{color:tt.instanceOf(At),disableHistory:tt.bool.def(!1),roundHistory:tt.bool.def(!1),disableAlpha:tt.bool.def(!1)},emits:["update:color","change","advanceChange"],setup(t,{emit:e}){const r=t.color||new At,n=ne({color:r,hex:r.toHexString(),rgb:r.toRgbString()}),o=vt(!1),i=mt(()=>({background:n.rgb})),s=()=>{o.value=!1,e("advanceChange",!1)},a=Na(al,[],{}),l=Mr(()=>{if(t.disableHistory)return;const _=n.color.toRgbString();if(a.value=a.value.filter(b=>!D.equals(b,_)),!a.value.includes(_)){for(;a.value.length>ll;)a.value.pop();a.value.unshift(_)}},500),c=_=>{_==="advance"?(o.value=!0,e("advanceChange",!0)):(n.color.hex=_,e("advanceChange",!1))},u=_=>{n.color.alpha=_},f=_=>{n.color.hue=_},d=(_,b)=>{n.color.saturation=_,n.color.brightness=b},v=_=>{n.color.lightness=_},x=_=>{const b=_.target.value.replace("#","");D(b).isValid()&&(n.color.hex=b)};return Gt(()=>t.color,_=>{_&&(n.color=_)},{deep:!0}),Gt(()=>n.color,()=>{n.hex=n.color.hex,n.rgb=n.color.toRgbString(),l(),e("update:color",n.color),e("change",n.color)},{deep:!0}),{state:n,advancePanelShow:o,onBack:s,onCompactChange:c,onAlphaChange:u,onHueChange:f,onBoardChange:d,onLightChange:v,onInputChange:x,previewStyle:i,historyColors:a}}}),Db=t=>(kn("data-v-0d5bef46"),t=t(),Sn(),t),Fb={class:"vc-fk-colorPicker"},Hb={class:"vc-fk-colorPicker__inner"},Bb={class:"vc-fk-colorPicker__header"},qb=Db(()=>P("div",{class:"back"},null,-1)),Ub=[qb];function $b(t,e,r,n,o,i){const s=pt("Palette"),a=pt("Board"),l=pt("Hue"),c=pt("Lightness"),u=pt("Alpha"),f=pt("Display"),d=pt("History");return G(),rt("div",Fb,[P("div",Hb,[P("div",Bb,[t.advancePanelShow?(G(),rt("span",{key:0,style:{cursor:"pointer"},onClick:e[0]||(e[0]=(...v)=>t.onBack&&t.onBack(...v))},Ub)):wt("",!0)]),t.advancePanelShow?wt("",!0):(G(),kt(s,{key:0,onChange:t.onCompactChange},null,8,["onChange"])),t.advancePanelShow?(G(),kt(a,{key:1,color:t.state.color,onChange:t.onBoardChange},null,8,["color","onChange"])):wt("",!0),t.advancePanelShow?(G(),kt(l,{key:2,color:t.state.color,onChange:t.onHueChange},null,8,["color","onChange"])):wt("",!0),t.advancePanelShow?wt("",!0):(G(),kt(c,{key:3,color:t.state.color,onChange:t.onLightChange},null,8,["color","onChange"])),t.disableAlpha?wt("",!0):(G(),kt(u,{key:4,color:t.state.color,onChange:t.onAlphaChange},null,8,["color","onChange"])),dt(f,{color:t.state.color,"disable-alpha":t.disableAlpha},null,8,["color","disable-alpha"]),t.disableHistory?wt("",!0):(G(),kt(d,{key:5,round:t.roundHistory,colors:t.historyColors,onChange:t.onCompactChange},null,8,["round","colors","onChange"]))])])}const Pu=xe(Lb,[["render",$b],["__scopeId","data-v-0d5bef46"]]),Gb=zt({name:"ChromeColorPicker",components:{Display:pl,Alpha:cl,Board:fl,Hue:dl,History:hl},props:{color:tt.instanceOf(At),disableHistory:tt.bool.def(!1),roundHistory:tt.bool.def(!1),disableAlpha:tt.bool.def(!1)},emits:["update:color","change"],setup(t,{emit:e}){const r=t.color||new At,n=ne({color:r,hex:r.toHexString(),rgb:r.toRgbString()}),o=mt(()=>({background:n.rgb})),i=Na(al,[],{}),s=Mr(()=>{if(t.disableHistory)return;const f=n.color.toRgbString();if(i.value=i.value.filter(d=>!D.equals(d,f)),!i.value.includes(f)){for(;i.value.length>ll;)i.value.pop();i.value.unshift(f)}},500),a=f=>{n.color.alpha=f},l=f=>{n.color.hue=f},c=(f,d)=>{n.color.saturation=f,n.color.brightness=d},u=f=>{f!=="advance"&&(n.color.hex=f)};return Gt(()=>t.color,f=>{f&&(n.color=f)},{deep:!0}),Gt(()=>n.color,()=>{n.hex=n.color.hex,n.rgb=n.color.toRgbString(),s(),e("update:color",n.color),e("change",n.color)},{deep:!0}),{state:n,previewStyle:o,historyColors:i,onAlphaChange:a,onHueChange:l,onBoardChange:c,onCompactChange:u}}}),Wb={class:"vc-chrome-colorPicker"},Kb={class:"vc-chrome-colorPicker-body"},Xb={class:"chrome-controls"},Yb={class:"chrome-sliders"};function Jb(t,e,r,n,o,i){const s=pt("Board"),a=pt("Hue"),l=pt("Alpha"),c=pt("Display"),u=pt("History");return G(),rt("div",Wb,[dt(s,{round:!0,hide:!1,color:t.state.color,onChange:t.onBoardChange},null,8,["color","onChange"]),P("div",Kb,[P("div",Xb,[P("div",Yb,[dt(a,{size:"small",color:t.state.color,onChange:t.onHueChange},null,8,["color","onChange"]),t.disableAlpha?wt("",!0):(G(),kt(l,{key:0,size:"small",color:t.state.color,onChange:t.onAlphaChange},null,8,["color","onChange"]))])]),dt(c,{color:t.state.color,"disable-alpha":t.disableAlpha},null,8,["color","disable-alpha"]),t.disableHistory?wt("",!0):(G(),kt(u,{key:0,round:t.roundHistory,colors:t.historyColors,onChange:t.onCompactChange},null,8,["round","colors","onChange"]))])])}const ju=xe(Gb,[["render",Jb],["__scopeId","data-v-33636434"]]),vl="Vue3ColorPickerProvider",Zb=(t,e)=>{const r=t.getBoundingClientRect(),n=r.left+r.width/2,o=r.top+r.height/2,i=Math.abs(n-e.clientX),s=Math.abs(o-e.clientY),a=Math.sqrt(Math.pow(i,2)+Math.pow(s,2)),l=s/a,c=Math.acos(l);let u=Math.floor(180/(Math.PI/c));return e.clientX>n&&e.clientY>o&&(u=180-u),e.clientX==n&&e.clientY>o&&(u=180),e.clientX>n&&e.clientY==o&&(u=90),e.clientX<n&&e.clientY>o&&(u=180+u),e.clientX<n&&e.clientY==o&&(u=270),e.clientX<n&&e.clientY<o&&(u=360-u),u};let zs=!1;const Qb=(t,e)=>{const r=function(o){var i;(i=e.drag)==null||i.call(e,o)},n=function(o){var i;document.removeEventListener("mousemove",r,!1),document.removeEventListener("mouseup",n,!1),document.onselectstart=null,document.ondragstart=null,zs=!1,(i=e.end)==null||i.call(e,o)};t&&t.addEventListener("mousedown",o=>{var i;zs||(document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",r,!1),document.addEventListener("mouseup",n,!1),zs=!0,(i=e.start)==null||i.call(e,o))})},tw={angle:{type:Number,default:0},size:{type:Number,default:16,validator:t=>t>=16},borderWidth:{type:Number,default:1,validator:t=>t>=1},borderColor:{type:String,default:"#666"}},ew=zt({name:"Angle",props:tw,emits:["update:angle","change"],setup(t,{emit:e}){const r=vt(null),n=vt(0);ve(()=>t.angle,a=>{n.value=a});const o=()=>{let a=Number(n.value);isNaN(a)||(a=a>360||a<0?t.angle:a,n.value=a===360?0:a,e("update:angle",n.value),e("change",n.value))},i=mt(()=>({width:t.size+"px",height:t.size+"px",borderWidth:t.borderWidth+"px",borderColor:t.borderColor,transform:`rotate(${n.value}deg)`})),s=a=>{r.value&&(n.value=Zb(r.value,a)%360,o())};return Sa(()=>{const a={drag:l=>{s(l)},end:l=>{s(l)}};r.value&&Qb(r.value,a)}),()=>dt("div",{class:"bee-angle"},[dt("div",{class:"bee-angle__round",ref:r,style:i.value},null)])}}),rw=zt({name:"GradientColorPicker",components:{Angle:ew,Display:pl,Alpha:cl,Palette:uh,Board:fl,Hue:dl,Lightness:fh,History:hl},props:{startColor:tt.instanceOf(At).isRequired,endColor:tt.instanceOf(At).isRequired,startColorStop:tt.number.def(0),endColorStop:tt.number.def(100),angle:tt.number.def(0),type:tt.oneOf(["linear","radial"]).def("linear"),disableHistory:tt.bool.def(!1),roundHistory:tt.bool.def(!1),disableAlpha:tt.bool.def(!1),pickerType:tt.oneOf(["fk","chrome"]).def("fk")},emits:["update:startColor","update:endColor","update:angle","update:startColorStop","update:endColorStop","startColorChange","endColorChange","advanceChange","angleChange","startColorStopChange","endColorStopChange","typeChange"],setup(t,{emit:e}){const r=ne({startActive:!0,startColor:t.startColor,endColor:t.endColor,startColorStop:t.startColorStop,endColorStop:t.endColorStop,angle:t.angle,type:t.type,startColorRgba:t.startColor.toRgbString(),endColorRgba:t.endColor.toRgbString()}),n=nn(vl),o=vt(t.pickerType==="chrome"),i=vt(),s=vt(),a=vt();ve(()=>[t.startColor,t.endColor,t.angle],C=>{r.startColor=C[0],r.endColor=C[1],r.angle=C[2]}),ve(()=>t.type,C=>{r.type=C});const l=mt({get:()=>r.startActive?r.startColor:r.endColor,set:C=>{if(r.startActive){r.startColor=C;return}r.endColor=C}}),c=mt(()=>{if(a.value&&i.value){const C=r.startColorStop/100,nt=a.value.getBoundingClientRect(),K=i.value.offsetWidth;return Math.round(C*(nt.width-K)+K/2)}return 0}),u=mt(()=>{if(a.value&&s.value){const C=r.endColorStop/100,nt=a.value.getBoundingClientRect(),K=s.value.offsetWidth;return Math.round(C*(nt.width-K)+K/2)}return 0}),f=mt(()=>{let C=`background: linear-gradient(${r.angle}deg, ${r.startColorRgba} ${r.startColorStop}%, ${r.endColorRgba} ${r.endColorStop}%)`;return r.type==="radial"&&(C=`background: radial-gradient(circle, ${r.startColorRgba} ${r.startColorStop}%, ${r.endColorRgba} ${r.endColorStop}%)`),C}),d=C=>{var nt;if(r.startActive=!0,a.value&&i.value){const K=(nt=a.value)==null?void 0:nt.getBoundingClientRect();let ot=C.clientX-K.left;ot=Math.max(i.value.offsetWidth/2,ot),ot=Math.min(ot,K.width-i.value.offsetWidth/2),r.startColorStop=Math.round((ot-i.value.offsetWidth/2)/(K.width-i.value.offsetWidth)*100),e("update:startColorStop",r.startColorStop),e("startColorStopChange",r.startColorStop)}},v=C=>{var nt;if(r.startActive=!1,a.value&&s.value){const K=(nt=a.value)==null?void 0:nt.getBoundingClientRect();let ot=C.clientX-K.left;ot=Math.max(s.value.offsetWidth/2,ot),ot=Math.min(ot,K.width-s.value.offsetWidth/2),r.endColorStop=Math.round((ot-s.value.offsetWidth/2)/(K.width-s.value.offsetWidth)*100),e("update:endColorStop",r.endColorStop),e("endColorStopChange",r.endColorStop)}},x=C=>{const nt=C.target,K=parseInt(nt.value.replace("°",""));isNaN(K)||(r.angle=K%360),e("update:angle",r.angle),e("angleChange",r.angle)},_=C=>{r.angle=C,e("update:angle",r.angle),e("angleChange",r.angle)},b=C=>{C==="advance"?(o.value=!0,e("advanceChange",!0)):(l.value.hex=C,e("advanceChange",!1)),O()},w=C=>{l.value.alpha=C,O()},A=C=>{l.value.hue=C,O()},R=(C,nt)=>{l.value.saturation=C,l.value.brightness=nt,O()},j=C=>{l.value.lightness=C,O()},B=()=>{O()},O=()=>{r.startActive?(e("update:startColor",r.startColor),e("startColorChange",r.startColor)):(e("update:endColor",r.endColor),e("endColorChange",r.endColor))},W=()=>{o.value=!1,e("advanceChange",!1)},Y=()=>{r.type=r.type==="linear"?"radial":"linear",e("typeChange",r.type)},T=Na(al,[],{}),F=Mr(()=>{if(t.disableHistory)return;const C=l.value.toRgbString();if(T.value=T.value.filter(nt=>!D.equals(nt,C)),!T.value.includes(C)){for(;T.value.length>ll;)T.value.pop();T.value.unshift(C)}},500);return Dr(()=>{s.value&&i.value&&(bn.triggerDragEvent(s.value,{drag:C=>{v(C)},end:C=>{v(C)}}),bn.triggerDragEvent(i.value,{drag:C=>{d(C)},end:C=>{d(C)}}))}),Gt(()=>r.startColor,C=>{r.startColorRgba=C.toRgbString()},{deep:!0}),Gt(()=>r.endColor,C=>{r.endColorRgba=C.toRgbString()},{deep:!0}),Gt(()=>l.value,()=>{F()},{deep:!0}),{startGradientRef:i,stopGradientRef:s,colorRangeRef:a,state:r,currentColor:l,getStartColorLeft:c,getEndColorLeft:u,gradientBg:f,advancePanelShow:o,onDegreeBlur:x,onCompactChange:b,onAlphaChange:w,onHueChange:A,onBoardChange:R,onLightChange:j,historyColors:T,onBack:W,onDegreeChange:_,onDisplayChange:B,onTypeChange:Y,lang:n==null?void 0:n.lang}}}),dh=t=>(kn("data-v-431cadee"),t=t(),Sn(),t),nw={class:"vc-gradient-picker"},ow={class:"vc-gradient-picker__header"},iw={class:"vc-gradient__types"},sw={class:"vc-gradient-wrap__types"},aw={class:"vc-picker-degree-input vc-degree-input"},lw={class:"vc-degree-input__control"},cw=["value"],uw={class:"vc-degree-input__panel"},fw={class:"vc-degree-input__disk"},dw={class:"vc-gradient-picker__body"},hw={class:"vc-color-range",ref:"colorRangeRef"},pw={class:"vc-color-range__container"},vw={class:"vc-gradient__stop__container"},gw=["title"],mw=dh(()=>P("span",{class:"vc-gradient__stop--inner"},null,-1)),yw=[mw],_w=["title"],xw=dh(()=>P("span",{class:"vc-gradient__stop--inner"},null,-1)),bw=[xw];function ww(t,e,r,n,o,i){var s,a;const l=pt("Angle"),c=pt("Board"),u=pt("Hue"),f=pt("Palette"),d=pt("Lightness"),v=pt("Alpha"),x=pt("Display"),_=pt("History");return G(),rt("div",nw,[P("div",ow,[P("div",null,[ar(P("div",{class:"back",style:{cursor:"pointer"},onClick:e[0]||(e[0]=(...b)=>t.onBack&&t.onBack(...b))},null,512),[[un,t.pickerType==="fk"&&t.advancePanelShow]])]),P("div",iw,[P("div",sw,[(G(),rt(It,null,lr(["linear","radial"],b=>P("div",{class:jt(["vc-gradient__type",{active:t.state.type===b}]),key:b,onClick:e[1]||(e[1]=(...w)=>t.onTypeChange&&t.onTypeChange(...w))},Jt(t.lang?t.lang[b]:b),3)),64))]),ar(P("div",aw,[P("div",lw,[P("input",{value:t.state.angle,onBlur:e[2]||(e[2]=(...b)=>t.onDegreeBlur&&t.onDegreeBlur(...b))},null,40,cw),Ta("deg ")]),P("div",uw,[P("div",fw,[dt(l,{angle:t.state.angle,"onUpdate:angle":e[3]||(e[3]=b=>t.state.angle=b),size:40,onChange:t.onDegreeChange},null,8,["angle","onChange"])])])],512),[[un,t.state.type==="linear"]])])]),P("div",dw,[P("div",hw,[P("div",pw,[P("div",{class:"vc-background",style:Ct(t.gradientBg)},null,4),P("div",vw,[P("div",{class:jt(["vc-gradient__stop",{"vc-gradient__stop--current":t.state.startActive}]),ref:"startGradientRef",title:(s=t.lang)==null?void 0:s.start,style:Ct({left:t.getStartColorLeft+"px",backgroundColor:t.state.startColorRgba})},yw,14,gw),P("div",{class:jt(["vc-gradient__stop",{"vc-gradient__stop--current":!t.state.startActive}]),ref:"stopGradientRef",title:(a=t.lang)==null?void 0:a.end,style:Ct({left:t.getEndColorLeft+"px",backgroundColor:t.state.endColorRgba})},bw,14,_w)])])],512)]),t.advancePanelShow?(G(),kt(c,{key:0,color:t.currentColor,onChange:t.onBoardChange},null,8,["color","onChange"])):wt("",!0),t.advancePanelShow?(G(),kt(u,{key:1,color:t.currentColor,onChange:t.onHueChange},null,8,["color","onChange"])):wt("",!0),t.advancePanelShow?wt("",!0):(G(),kt(f,{key:2,onChange:t.onCompactChange},null,8,["onChange"])),t.advancePanelShow?wt("",!0):(G(),kt(d,{key:3,color:t.currentColor,onChange:t.onLightChange},null,8,["color","onChange"])),t.disableAlpha?wt("",!0):(G(),kt(v,{key:4,color:t.currentColor,onChange:t.onAlphaChange},null,8,["color","onChange"])),dt(x,{color:t.currentColor,"disable-alpha":t.disableAlpha,onChange:t.onDisplayChange},null,8,["color","disable-alpha","onChange"]),t.disableHistory?wt("",!0):(G(),kt(_,{key:5,round:t.roundHistory,colors:t.historyColors,onChange:t.onCompactChange},null,8,["round","colors","onChange"]))])}const Vu=xe(rw,[["render",ww],["__scopeId","data-v-431cadee"]]),kw=zt({name:"WrapContainer",props:{theme:tt.oneOf(["white","black"]).def("white"),showTab:tt.bool.def(!1),activeKey:tt.oneOf(["pure","gradient"]).def("pure")},emits:["update:activeKey","change"],setup(t,{emit:e}){const r=ne({activeKey:t.activeKey}),n=nn(vl),o=i=>{r.activeKey=i,e("update:activeKey",i),e("change",i)};return Gt(()=>t.activeKey,i=>{r.activeKey=i}),{state:r,onActiveKeyChange:o,lang:n==null?void 0:n.lang}}}),Sw={class:"vc-colorpicker--container"},Cw={key:0,class:"vc-colorpicker--tabs"},Ew={class:"vc-colorpicker--tabs__inner"},Aw={class:"vc-btn__content"},zw={class:"vc-btn__content"};function Tw(t,e,r,n,o,i){var s,a;return G(),rt("div",{class:jt(["vc-colorpicker",t.theme])},[P("div",Sw,[t.showTab?(G(),rt("div",Cw,[P("div",Ew,[P("div",{class:jt(["vc-colorpicker--tabs__btn",{"vc-btn-active":t.state.activeKey==="pure"}]),onClick:e[0]||(e[0]=l=>t.onActiveKeyChange("pure"))},[P("button",null,[P("div",Aw,Jt((s=t.lang)==null?void 0:s.pure),1)])],2),P("div",{class:jt(["vc-colorpicker--tabs__btn",{"vc-btn-active":t.state.activeKey==="gradient"}]),onClick:e[1]||(e[1]=l=>t.onActiveKeyChange("gradient"))},[P("button",null,[P("div",zw,Jt((a=t.lang)==null?void 0:a.gradient),1)])],2),P("div",{class:"vc-colorpicker--tabs__bg",style:Ct({width:"50%",left:`calc(${t.state.activeKey==="gradient"?50:0}%)`})},null,4)])])):wt("",!0),Ca(t.$slots,"default",{},void 0,!0)])],2)}const Ow=xe(kw,[["render",Tw],["__scopeId","data-v-0492277d"]]),Mw={start:"Start",end:"End",pure:"Pure",gradient:"Gradient",linear:"linear",radial:"radial"},Iw={start:"开始",end:"结束",pure:"纯色",gradient:"渐变",linear:"线性",radial:"径向"},Rw={En:Mw,"ZH-cn":Iw},Nw={isWidget:tt.bool.def(!1),pickerType:tt.oneOf(["fk","chrome"]).def("fk"),shape:tt.oneOf(["circle","square"]).def("square"),pureColor:{type:[String,Object],default:"#000000"},gradientColor:tt.string.def("linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)"),format:{type:String,default:"rgb"},disableAlpha:tt.bool.def(!1),disableHistory:tt.bool.def(!1),roundHistory:tt.bool.def(!1),useType:tt.oneOf(["pure","gradient","both"]).def("pure"),activeKey:tt.oneOf(["pure","gradient"]).def("pure"),lang:{type:String,default:"ZH-cn"},zIndex:tt.number.def(9999),pickerContainer:{type:[String,HTMLElement],default:"body"},debounce:tt.number.def(100),theme:tt.oneOf(["white","black"]).def("white")},Pw=zt({name:"ColorPicker",components:{FkColorPicker:Pu,ChromeColorPicker:ju,GradientColorPicker:Vu,WrapContainer:Ow},inheritAttrs:!1,props:Nw,emits:["update:pureColor","pureColorChange","update:gradientColor","gradientColorChange","update:activeKey","activeKeyChange"],setup(t,{emit:e}){Sf(vl,{lang:mt(()=>Rw[t.lang||"ZH-cn"])});const r=ne({pureColor:t.pureColor||"",activeKey:t.useType==="gradient"?"gradient":t.activeKey,isAdvanceMode:!1}),n=new At("#000"),o=new At("#000"),i=new At(r.pureColor),s=ne({startColor:n,endColor:o,startColorStop:0,endColorStop:100,angle:0,type:"linear",gradientColor:t.gradientColor}),a=vt(i),l=vt(!1),c=vt(null),u=vt(null);let f=null;const d=mt(()=>({background:r.activeKey!=="gradient"?D(r.pureColor).toRgbString():s.gradientColor})),v=mt(()=>r.activeKey==="gradient"?Vu.name:t.pickerType==="fk"?Pu.name:ju.name),x=T=>{r.isAdvanceMode=T},_=mt(()=>{const T={disableAlpha:t.disableAlpha,disableHistory:t.disableHistory,roundHistory:t.roundHistory,pickerType:t.pickerType};return r.activeKey==="gradient"?{...T,startColor:s.startColor,endColor:s.endColor,angle:s.angle,type:s.type,startColorStop:s.startColorStop,endColorStop:s.endColorStop,onStartColorChange:F=>{s.startColor=F,R()},onEndColorChange:F=>{s.endColor=F,R()},onStartColorStopChange:F=>{s.startColorStop=F,R()},onEndColorStopChange:F=>{s.endColorStop=F,R()},onAngleChange:F=>{s.angle=F,R()},onTypeChange:F=>{s.type=F,R()},onAdvanceChange:x}:{...T,disableAlpha:t.disableAlpha,disableHistory:t.disableHistory,roundHistory:t.roundHistory,color:a.value,onChange:O,onAdvanceChange:x}}),b=()=>{l.value=!0,f?f.update():B()},w=()=>{l.value=!1},A=()=>{var T,F,C,nt;try{const[K]=I0(s.gradientColor);if(K&&K.type.includes("gradient")&&K.colorStops.length>=2){const ot=K.colorStops[0],$=K.colorStops[1];s.startColorStop=Number((T=ot.length)==null?void 0:T.value)||0,s.endColorStop=Number((F=$.length)==null?void 0:F.value)||0,K.type==="linear-gradient"&&((C=K.orientation)==null?void 0:C.type)==="angular"&&(s.angle=Number((nt=K.orientation)==null?void 0:nt.value)||0),s.type=K.type.split("-")[0];const[et,I,q,st]=ot.value,[St,Dt,Et,be]=$.value;s.startColor=new At({r:Number(et),g:Number(I),b:Number(q),a:Number(st)}),s.endColor=new At({r:Number(St),g:Number(Dt),b:Number(Et),a:Number(be)})}}catch(K){console.log(`[Parse Color]: ${K}`)}},R=Mr(()=>{const T=j();try{s.gradientColor=R0(T),e("update:gradientColor",s.gradientColor),e("gradientColorChange",s.gradientColor)}catch(F){console.log(F)}},t.debounce),j=()=>{const T=[],F=s.startColor.RGB.map(K=>K.toString()),C=s.endColor.RGB.map(K=>K.toString()),nt=[{type:"rgba",value:[F[0],F[1],F[2],F[3]],length:{value:s.startColorStop+"",type:"%"}},{type:"rgba",value:[C[0],C[1],C[2],C[3]],length:{value:s.endColorStop+"",type:"%"}}];return s.type==="linear"?T.push({type:"linear-gradient",orientation:{type:"angular",value:s.angle+""},colorStops:nt}):s.type==="radial"&&T.push({type:"radial-gradient",orientation:[{type:"shape",value:"circle"}],colorStops:nt}),T},B=()=>{c.value&&u.value&&(f=Dm(c.value,u.value,{placement:"auto",modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"flip",options:{allowedAutoPlacements:["top","bottom","left","right"],rootBoundary:"viewport"}}]}))},O=T=>{a.value=T,r.pureColor=T.toString(t.format),W()},W=Mr(()=>{e("update:pureColor",r.pureColor),e("pureColorChange",r.pureColor)},t.debounce);e0(u,()=>{w()});const Y=T=>{r.activeKey=T,e("update:activeKey",T),e("activeKeyChange",T)};return Dr(()=>{A()}),Gt(()=>t.gradientColor,T=>{T!=s.gradientColor&&(s.gradientColor=T)}),Gt(()=>s.gradientColor,()=>{A()}),Gt(()=>t.activeKey,T=>{r.activeKey=T}),Gt(()=>t.useType,T=>{r.activeKey!=="gradient"&&T==="gradient"?r.activeKey="gradient":r.activeKey="pure"}),Gt(()=>t.pureColor,T=>{D.equals(T,r.pureColor)||(r.pureColor=T,a.value=new At(T))},{deep:!0}),{colorCubeRef:c,pickerRef:u,showPicker:l,colorInstance:a,getBgColorStyle:d,onColorChange:O,onShowPicker:b,onActiveKeyChange:Y,getComponentName:v,getBindArgs:_,state:r}}});function jw(t,e,r,n,o,i){const s=pt("WrapContainer");return G(),rt(It,null,[t.isWidget?(G(),kt(s,{key:0,"active-key":t.state.activeKey,"onUpdate:activeKey":e[0]||(e[0]=a=>t.state.activeKey=a),"show-tab":t.useType==="both",onChange:t.onActiveKeyChange,style:Ct({zIndex:t.zIndex}),theme:t.theme},{default:Er(()=>[(G(),kt(ti(t.getComponentName),Fs({key:t.getComponentName},t.getBindArgs),null,16))]),_:1},8,["active-key","show-tab","onChange","style","theme"])):wt("",!0),t.isWidget?wt("",!0):(G(),rt(It,{key:1},[P("div",{class:jt(["vc-color-wrap transparent",{round:t.shape==="circle"}]),ref:"colorCubeRef"},[P("div",{class:"current-color",style:Ct(t.getBgColorStyle),onClick:e[1]||(e[1]=(...a)=>t.onShowPicker&&t.onShowPicker(...a))},null,4)],2),(G(),kt(Jp,{to:t.pickerContainer},[ar(P("div",{ref:"pickerRef",style:Ct({zIndex:t.zIndex})},[t.showPicker?(G(),kt(s,{key:0,"show-tab":t.useType==="both"&&!t.state.isAdvanceMode,"active-key":t.state.activeKey,"onUpdate:activeKey":e[2]||(e[2]=a=>t.state.activeKey=a),onChange:t.onActiveKeyChange,theme:t.theme},{default:Er(()=>[(G(),kt(ti(t.getComponentName),Fs({key:t.getComponentName},t.getBindArgs),null,16))]),_:1},8,["show-tab","active-key","onChange","theme"])):wt("",!0)],4),[[un,t.showPicker]])],8,["to"]))],64))],64)}const Vw=xe(Pw,[["render",jw],["__scopeId","data-v-3ba84123"]]),Lw={class:"label-text"},Dw=["value"],Fw={class:"color-picker-container"},Hw=zt({__name:"DatColor",props:jr({label:{default:""}},{modelValue:{type:String,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=Vr(t,"modelValue");let r=vt(!1);const n=mt(()=>{if(e.value.length!==7||e.value[0]!=="#")return"black";const a=parseInt(e.value.substring(1,3),16),l=parseInt(e.value.substring(3,5),16),c=parseInt(e.value.substring(5,7),16);return(a*299+l*587+c*114)/1e3>=128?"black":"white"}),o=a=>{a.key==="Enter"&&(r.value=!1)},i=()=>{r.value=!0,window.addEventListener("keydown",o)},s=()=>{r.value=!1,window.removeEventListener("keydown",o)};return(a,l)=>(G(),rt("li",{class:"control-item color",style:Ct({"border-left-color":e.value}),onMouseleave:s},[P("label",null,[P("span",Lw,Jt(a.label),1),P("div",{class:"control",onMouseover:i},[P("input",{type:"text",value:e.value,style:Ct({"background-color":e.value,color:n.value}),readonly:""},null,12,Dw),P("div",Fw,[dt(Cr(Vw),{pureColor:e.value,"onUpdate:pureColor":l[0]||(l[0]=c=>e.value=c),pickerType:"chrome","is-widget":"","disable-history":""},null,8,["pureColor"])])],32)])],36))}}),Yi=(t,e)=>{const r=t.__vccOpts||t;for(const[n,o]of e)r[n]=o;return r},Bw=Yi(Hw,[["__scopeId","data-v-ae646d6e"]]),qw={class:"folder"},Uw={ref:"label",class:"group"},$w={class:"text--inner w-100"},Gw={class:"symbol"},Ww=zt({__name:"DatFolder",props:jr({label:{default:""}},{open:{type:Boolean,default:!0},openModifiers:{}}),emits:["update:open"],setup(t){const e=Vr(t,"open"),r=()=>{e.value=!e.value};return(n,o)=>(G(),rt("li",qw,[P("div",Uw,[P("div",{class:"text",onClick:r},[P("div",$w,[P("span",Gw,Jt(e.value?"▼":"►"),1),Ta(" "+Jt(n.label),1)])]),ar(P("ul",null,[Ca(n.$slots,"default",{},void 0,!0)],512),[[un,e.value]])],512)]))}}),Kw=Yi(Ww,[["__scopeId","data-v-bd32d018"]]),Xw={class:"vue-dat-gui"},Yw={class:"group group--main"},Jw=["onKeydown"],Zw=["onKeydown"],Qw=zt({__name:"DatGui",props:jr({openText:{default:"Open Controls"},closeText:{default:"Close Controls"},closePosition:{default:"bottom"}},{open:{type:Boolean,default:!0},openModifiers:{}}),emits:["update:open"],setup(t){const e=t,r=Vr(t,"open"),n=mt(()=>r.value?e.closeText:e.openText),o=()=>{r.value=r.value!==!0};return(i,s)=>(G(),rt("div",Xw,[P("div",Yw,[i.closePosition==="top"?(G(),rt("div",{key:0,class:"toggle-button",role:"button",tabindex:"0",onClick:o,onKeydown:tc(Ql(o,["prevent"]),["space","enter"])},Jt(n.value),41,Jw)):wt("",!0),ar(P("ul",null,[Ca(i.$slots,"default")],512),[[un,r.value]]),i.closePosition==="bottom"?(G(),rt("div",{key:1,class:"toggle-button",role:"button",tabindex:"0",onClick:o,onKeydown:tc(Ql(o,["prevent"]),["space","enter"])},Jt(n.value),41,Zw)):wt("",!0)])]))}}),aa=(t,e,r)=>Math.min(Math.max(t,e),r),t1=zt({__name:"NumberSlider",props:{value:{},min:{},max:{}},emits:["updateState"],setup(t,{emit:e}){const r=t,n=e,o=vt(null),i=mt(()=>aa((r.value-r.min)*100/(r.max-r.min),0,100)),s=u=>{if(o.value){const f=o.value.getBoundingClientRect(),d=u-f.left,v=f.right-f.left,x=r.min+aa(d/v,0,1)*(r.max-r.min);n("updateState",x)}},a=u=>{s(u.pageX)},l=u=>{s(u.pageX),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",l)},c=u=>{s(u.pageX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",l)};return(u,f)=>(G(),rt("span",{ref_key:"slider",ref:o,class:"slider",style:Ct({"background-size":`${i.value}% 100%`}),onMousedown:c},null,36))}}),e1=Yi(t1,[["__scopeId","data-v-af9bdb8d"]]),r1={class:"control-item number"},n1={ref:"label"},o1={class:"label-text"},i1={class:"control"},s1=["min","max","step","value"],a1=zt({__name:"DatNumber",props:jr({label:{default:""},showSlider:{type:Boolean,default:!0},min:{},max:{},step:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=t,r=Vr(t,"modelValue");let n=typeof e.min=="number"?e.min:Number.NEGATIVE_INFINITY,o=typeof e.max=="number"?e.max:Number.POSITIVE_INFINITY;n>o&&([n,o]=[o,n]);const i=mt(()=>e.showSlider&&Number.isFinite(n)&&Number.isFinite(o)),s=mt(()=>{if(e.step)return e.step;const c=o-n;return 10**Math.floor(Math.log(Math.abs(c))/Math.LN10)/10}),a=c=>{let u=aa(c,n,o);s.value!==0&&Number.isFinite(s.value)&&(u=Math.round(u/s.value)*s.value),r.value=u},l=c=>{a(Number(c.target.value))};return(c,u)=>(G(),rt("li",r1,[P("label",n1,[P("span",o1,Jt(c.label),1),P("div",i1,[ar(dt(e1,{min:Cr(n),max:Cr(o),value:r.value,onUpdateState:a},null,8,["min","max","value"]),[[un,i.value]]),P("input",{type:"number",ref:"input",class:"input",min:Cr(n),max:Cr(o),step:s.value,value:r.value,onInput:l},null,40,s1)])],512)]))}}),l1=Yi(a1,[["__scopeId","data-v-cc833ff8"]]),c1={class:"control-item select"},u1={ref:"label"},f1={class:"label-text"},d1={class:"control"},h1=["value"],p1=zt({__name:"DatSelect",props:jr({label:{default:""},items:{default:()=>[]}},{modelValue:{type:String,default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=t,r=Vr(t,"modelValue"),n=mt(()=>e.items.map(o=>typeof o=="object"?o:{name:(o||"").toString(),value:o}));return(o,i)=>(G(),rt("li",c1,[P("label",u1,[P("span",f1,Jt(o.label),1),P("div",d1,[ar(P("select",{"onUpdate:modelValue":i[0]||(i[0]=s=>r.value=s),class:"w-100"},[(G(!0),rt(It,null,lr(n.value,s=>(G(),rt("option",{key:s.value,value:s.value},Jt(s.name),9,h1))),128))],512),[[Rv,r.value]])])],512)]))}}),v1={class:"control-item string"},g1={ref:"label"},m1={class:"label-text"},y1={class:"control"},_1=zt({__name:"DatString",props:jr({label:{default:""}},{modelValue:{type:String,default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=Vr(t,"modelValue");return(r,n)=>(G(),rt("li",v1,[P("label",g1,[P("span",m1,Jt(r.label),1),P("div",y1,[ar(P("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=o=>e.value=o)},null,512),[[Iv,e.value]])])],512)]))}}),Lu=Object.freeze(Object.defineProperty({__proto__:null,DatBoolean:Bg,DatButton:Ug,DatColor:Bw,DatFolder:Kw,DatGui:Qw,DatNumber:l1,DatSelect:p1,DatString:_1},Symbol.toStringTag,{value:"Module"})),x1=t=>{for(const e in Lu)t.component(e,Lu[e])},b1={install:x1},hh=(t,e)=>{const r=t.__vccOpts||t;for(const[n,o]of e)r[n]=o;return r};let w1=/const\s+(?<constantName>\w+)(:\s*(?<constantType>\w+))?\s*=\s*(?<initialValue>[^;]+);(?:\s*\/\/\s*\{(?<humanReadableName>[^:]+):(?<rangeOrValues>[^\}]+)\})?/;const k1={data(){return{performance_metrics:{},SINGLE_MODE:!0,MAX_FRAMES:1,X_RES:0,Y_RES:0,state:{position:{x:0,y:0,z:-45},velocity:{x:0,y:0,z:0},speed:.1,rotation:{yaw:0,pitch:0},angularVelocity:{yaw:0,pitch:0},zoomLevel:2,isMouseDown:!1,lastMousePosition:{x:0,y:0},keyState:{},MOUSE_X:0,MOUSE_Y:0,mousePressed:!1},fragment_shader_constants:{},canvas:null,background:"#cdeecc",titleColor:"#077d43",titleFontSize:75,title:"vue-dat-gui",showPicture:!0,boxShadow:{offsetX:27,offsetY:27,blurRadius:75,spreadRadius:2,color:"rgba(3, 23, 6, 1)"},pictureUrl:"https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",pictures:[{name:"forest",value:"https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"},{name:"mountain",value:"https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"},{name:"beach",value:"https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}]}},watch:{fragment_shader_constants:{handler(){console.log("Updated a shader constant!"),this.zeroPerfCounters(),this.MAX_FRAMES++},deep:!0}},computed:{single_value_uniform_keys(){return Object.entries(this.fragment_shader_constants).filter(([t,e])=>t).map(([t,e])=>t)}},async mounted(){this.canvas=this.$refs.canvas,this.setupEventListeners(),this.calculateCanvasSize();const t=jg;let{output:e,extracted_constant_defs:r}=this.processWgsl(t);for(let $ of r)this.fragment_shader_constants[$.name]={value:$.initial_value,...$};this.canvas.width=this.X_RES,this.canvas.height=this.Y_RES,this.canvas.addEventListener("wheel",$=>{$.preventDefault(),this.state.zoomLevel+=$.deltaY*-1e-4,this.state.zoomLevel=Math.max(.1,Math.min(10,this.state.zoomLevel))}),document.addEventListener("keydown",$=>{this.SINGLE_MODE=!1,$.key=="s"&&$.ctrlKey&&(this.saveCanvas(),$.preventDefault())});const n=new Date().getTime();if(!navigator.gpu)throw new Error("WebGPU not supported on this browser.");const o=await navigator.gpu.requestAdapter();if(!o)throw new Error("No appropriate GPUAdapter found.");const i=this.canvas.getContext("webgpu"),s=navigator.gpu.getPreferredCanvasFormat(),a=await o.requestDevice();this.device=a,i.configure({device:a,format:s});const l=1,c=new Float32Array([-l,-l,l,-l,l,l,-l,-l,l,l,-l,l]),u=a.createBuffer({label:"Cell vertices",size:c.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),f={arrayStride:8,attributes:[{format:"float32x2",offset:0,shaderLocation:0}]},d=[["resolution",{getter:$=>[this.X_RES,this.Y_RES],primitive_type:"vec2f"}],["time",{getter:$=>[(new Date().getTime()-n)/1e3],primitive_type:"f32"}],["mouse",{getter:$=>[this.state.MOUSE_X,this.state.MOUSE_Y],primitive_type:"vec2f"}],["zoom",{getter:$=>[this.state.zoomLevel],primitive_type:"f32"}],["upos",{getter:$=>[this.state.position.x,this.state.position.y,this.state.position.z],primitive_type:"vec3f"}],["urot",{getter:$=>[this.state.rotation.pitch,this.state.rotation.yaw],primitive_type:"vec2f"}],...r.map($=>[$.name,{getter:et=>[this.fragment_shader_constants[$.name].value],carrier:$.primitive_type=="f32"?"Float32Array":"Int32Array",primitive_type:$.primitive_type}])];d.forEach($=>$[1].primitive_type=$[1].primitive_type||"f32"),d.forEach($=>$[1].carrier=$[1].carrier||"Float32Array");const v=Object.groupBy(d,({carrier:$})=>$||"Float32Array"),x=Object.entries(v).map(([$,et])=>{function I(){let St=et.map(([Et,{getter:be,primitive_type:we}])=>[Et,be(),we]),Dt=new window[$]([].concat(...St.map(Et=>Et[1])));return{items:St,composite_array:Dt}}let{items:q,composite_array:st}=I();return[$,{atlas:{...S1(q,{buffer_type:$})},num_entries:q.length,buffer_type:$,primitive_type:et[0][1].primitive_type}]}),_=Object.values(x).flatMap($=>$[1]);let b=[],w=`struct TransferableConfig {
      ${_.map($=>Object.entries($.atlas).map(([et,I])=>`${et}: ${I.primitive_type}`)).map($=>$+",").join(`
`)}
    }`,A="@group(0) @binding(0) var<uniform> C: TransferableConfig;";console.log("SHADER UNIFORMS:",`
`+A),Object.fromEntries(_);const R=[w,A,b.join(`
`),e].join(`

`);let j=Rg([w,A,b.join(`
`)].join(`

`));const B=Xv(j.uniforms.C),O=a.createBuffer({size:B.arrayBuffer.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let W=()=>{B.set(Object.fromEntries(v.Float32Array.map(([$,et])=>[$,et.getter()]))),a.queue.writeBuffer(O,0,B.arrayBuffer)};const Y=a.createShaderModule({label:"Cell shader",code:R}),T=a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),F=a.createPipelineLayout({bindGroupLayouts:[T]}),C=a.createRenderPipeline({layout:F,vertex:{module:Y,entryPoint:"vertexMain",buffers:[f]},fragment:{module:Y,entryPoint:"fragmentMain",targets:[{format:s}]}}),nt=a.createBindGroup({layout:C.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:O}}]});let K=0;performance.now();const ot=()=>{const $=async()=>{const et=this.performanceEvaluator;this.canvas.width=this.X_RES,this.canvas.height=this.Y_RES,await et("update_movement",this.updateMovement),a.queue.writeBuffer(u,0,c),W();const I=a.createCommandEncoder(),q=I.beginRenderPass({colorAttachments:[{view:i.getCurrentTexture().createView(),loadOp:"clear",clearValue:{r:0,g:0,b:.4,a:1},storeOp:"store"}]});q.setPipeline(C),q.setVertexBuffer(0,u),q.setBindGroup(0,nt),q.draw(c.length/2),q.end(),a.queue.submit([I.finish()]),et("render",st=>a.queue.onSubmittedWorkDone())};this.SINGLE_MODE&&K>=this.MAX_FRAMES||($(),K++),requestAnimationFrame(ot)};ot()},unmounted(){var t;this.removeEventListeners(),(t=this.device)==null||t.destroy()},methods:{zeroPerfCounters(){Object.keys(this.performance_metrics).forEach(t=>{this.performance_metrics[t].count=0,this.performance_metrics[t].total_time=0})},async performanceEvaluator(t,e){this.performance_metrics[t]||(this.performance_metrics[t]={total_time:0,count:0});const r=performance.now(),n=await e(),o=performance.now();let i=this.performance_metrics[t];return i.total_time+=o-r,i.count+=1,i.average=i.total_time/i.count,n},extract_const_decl(t){let e=t.match(w1);if(e){let r={name:e.groups.constantName,primitive_type:e.groups.constantType||null,initial_value:e.groups.initialValue.trim(),human_name:e.groups.humanReadableName?e.groups.humanReadableName.trim():null,__range_or_values:e.groups.rangeOrValues?e.groups.rangeOrValues.trim():null},{__range_or_values:n}=r;if(n){if(n.startsWith("["))r.value_options=n.slice(1,-1).split(",").map(o=>o.trim()).map(Number);else if(n.includes("-")){let[o,i]=n.split("-").map(s=>s.trim()).slice(0,2).map(Number);r.range={start:o,end:i}}}return r.primitive_type?(r.initial_value=Number(r.initial_value.trim()),r.validator=r.primitive_type.startsWith("f")?o=>o:o=>Math.floor(o),r):null}else return null},processWgsl(t){let e=[],r=[];return t.split(`
`).forEach(n=>{if(n.startsWith("const ")){let o=this.extract_const_decl(n);o!=null&&o.primitive_type?r.push(o):(console.warn(`Trouble parsing constant declaration '${n}' -- disregarding`),e.push(n))}else n.startsWith("@group(0) @binding(")||e.push(n)}),{output:e.join(`
`),extracted_constant_defs:r}},calculateCanvasSize(){const e=window.innerWidth,r=window.innerHeight,n=e/r;let o=e-2*32,i=o/n;i>r-2*32&&(i=r-2*32,o=i*n),this.X_RES=Math.floor(o),this.Y_RES=Math.floor(i),this.$refs.canvas.width=this.X_RES,this.$refs.canvas.height=this.Y_RES},updateMovement(){let t=0,e=0,r=0,n=0,o=0;const i=Math.cos(this.state.rotation.yaw),s=Math.sin(this.state.rotation.yaw),a=Math.cos(this.state.rotation.pitch),l=Math.sin(this.state.rotation.pitch),{keyState:c,speed:u}=this.state;c.w&&(t+=u*a*s,e+=u*l,r+=u*a*i),c.s&&(t-=u*a*s,e-=u*l,r-=u*a*i),c.a&&(t-=u*i,r+=u*s),c.d&&(t+=u*i,r-=u*s);const f=navigator.getGamepads?navigator.getGamepads():[];for(let d of f)d&&(t+=d.axes[0]*u*i-d.axes[1]*u*s*a,e+=d.axes[1]*u*l,r-=d.axes[1]*u*i*a+d.axes[0]*u*s,n+=d.axes[2]*.01,o+=d.axes[3]*.01);this.state.velocity.x+=t,this.state.velocity.y+=e,this.state.velocity.z+=r,this.state.angularVelocity.yaw+=n,this.state.angularVelocity.pitch+=o,this.state.velocity.x*=.95,this.state.velocity.y*=.95,this.state.velocity.z*=.95,this.state.angularVelocity.yaw*=.9,this.state.angularVelocity.pitch*=.9,this.state.position.x+=this.state.velocity.x,this.state.position.y+=this.state.velocity.y,this.state.position.z+=this.state.velocity.z,this.state.rotation.yaw+=this.state.angularVelocity.yaw,this.state.rotation.pitch+=this.state.angularVelocity.pitch},handleKeyDown(t){this.state.keyState[t.key.toLowerCase()]=!0},handleKeyUp(t){this.state.keyState[t.key.toLowerCase()]=!1},handleMouseDown(t){this.state.isMouseDown=!0,this.state.lastMousePosition={x:t.clientX,y:t.clientY}},handleMouseMove(t){if(!this.state.isMouseDown)return;const e=t.clientX-this.state.lastMousePosition.x,r=t.clientY-this.state.lastMousePosition.y;this.state.angularVelocity.yaw+=e*5e-4,this.state.angularVelocity.pitch+=r*5e-4,this.state.lastMousePosition={x:t.clientX,y:t.clientY}},handleMouseUp(){this.state.isMouseDown=!1},updateMouse(t){const e=this.canvas.getBoundingClientRect();this.state.mousePressed&&(this.state.MOUSE_X=t.clientX-e.left-this.X_RES/2,this.state.MOUSE_Y=t.clientY-e.top-this.Y_RES/2)},saveCanvas(t){const e=document.createElement("a");e.download="shader.png",e.href=this.canvas.toDataURL(),e.click(),e.delete},handleGamepadConnected(t){console.log(`Gamepad connected at index ${t.gamepad.index}: ${t.gamepad.id}. ${t.gamepad.buttons.length} buttons, ${t.gamepad.axes.length} axes.`),this.updateGamepadState()},handleGamepadDisconnected(t){console.log(`Gamepad disconnected from index ${t.gamepad.index}: ${t.gamepad.id}`)},updateGamepadState(){const t=navigator.getGamepads?navigator.getGamepads():[],e=.1;for(let r of t)r&&(window.gamepad=r,Math.abs(r.axes[0])>e&&(this.state.position.x+=r.axes[0]*this.state.speed*.01),Math.abs(r.axes[1])>e&&(this.state.position.z-=r.axes[1]*this.state.speed*.01),Math.abs(r.axes[2])>e&&(this.state.rotation.yaw+=r.axes[2]*1e-4),Math.abs(r.axes[3])>e&&(this.state.rotation.pitch+=r.axes[3]*1e-4));requestAnimationFrame(this.updateGamepadState)},setupEventListeners(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("gamepadconnected",this.handleGamepadConnected),window.removeEventListener("gamepaddisconnected",this.handleGamepadDisconnected),this.canvas.addEventListener("mousedown",this.handleMouseDown),this.canvas.addEventListener("mouseup",this.handleMouseUp),this.canvas.addEventListener("mouseleave",this.handleMouseUp),this.canvas.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("mousemove",this.updateMouse)},removeEventListeners(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("gamepadconnected",this.handleGamepadConnected),window.removeEventListener("gamepaddisconnected",this.handleGamepadDisconnected),this.canvas.removeEventListener("mousedown",this.handleMouseDown),this.canvas.removeEventListener("mouseup",this.handleMouseUp),this.canvas.removeEventListener("mouseleave",this.handleMouseUp),this.canvas.removeEventListener("mousemove",this.handleMouseMove),this.canvas.removeEventListener("mousemove",this.updateMouse)}}};function S1(t,e={}){const r=t.reduce((n,[o,i,s],a)=>{const l=n.prevEnd+1,c=l+i.length-1;return n[o]={start:l,end:c,length:i.length,...e,primitive_type:s},n.prevEnd=c,n},{prevEnd:-1});return delete r.prevEnd,r}const C1={width:"1920",height:"880",ref:"canvas"};function E1(t,e,r,n,o,i){const s=pt("DatNumber"),a=pt("DatFolder"),l=pt("DatSelect"),c=pt("DatBoolean"),u=pt("DatGui");return G(),rt("div",null,[P("canvas",C1,null,512),dt(u,{closeText:"Close controls",openText:"Open controls",closePosition:"bottom"},{default:Er(()=>[dt(s,{modelValue:o.X_RES,"onUpdate:modelValue":e[0]||(e[0]=f=>o.X_RES=f),min:0,max:1920},null,8,["modelValue"]),dt(s,{modelValue:o.Y_RES,"onUpdate:modelValue":e[1]||(e[1]=f=>o.Y_RES=f),min:0,max:1080},null,8,["modelValue"]),dt(a,{label:"Performance"},{default:Er(()=>[(G(!0),rt(It,null,lr(o.performance_metrics,(f,d)=>(G(),kt(ti("DatNumber"),{key:d,modelValue:o.performance_metrics[d].average,"onUpdate:modelValue":v=>o.performance_metrics[d].average=v,label:d},null,8,["modelValue","onUpdate:modelValue","label"]))),128))]),_:1}),dt(a,{label:"Shader"},{default:Er(()=>[(G(!0),rt(It,null,lr(i.single_value_uniform_keys,f=>{var d,v;return G(),kt(ti("DatNumber"),{key:f,modelValue:o.fragment_shader_constants[f].value,"onUpdate:modelValue":x=>o.fragment_shader_constants[f].value=x,label:f,min:(d=o.fragment_shader_constants[f].range)==null?void 0:d.start,max:(v=o.fragment_shader_constants[f].range)==null?void 0:v.end},null,8,["modelValue","onUpdate:modelValue","label","min","max"])}),128))]),_:1}),dt(a,{label:"Application"},{default:Er(()=>[dt(l,{modelValue:o.pictureUrl,"onUpdate:modelValue":e[2]||(e[2]=f=>o.pictureUrl=f),items:o.pictures,label:"Picture"},null,8,["modelValue","items"]),dt(c,{modelValue:o.SINGLE_MODE,"onUpdate:modelValue":e[3]||(e[3]=f=>o.SINGLE_MODE=f),label:"Only update on change"},null,8,["modelValue"])]),_:1})]),_:1})])}const A1=hh(k1,[["render",E1],["__scopeId","data-v-0b159561"]]),z1={__name:"App",setup(t){return(e,r)=>(G(),kt(A1,{msg:"Vite + Vue"}))}},T1=hh(z1,[["__scopeId","data-v-275f7383"]]);Dv(T1).use(b1).mount("#app")});export default O1();

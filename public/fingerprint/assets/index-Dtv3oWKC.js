(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ru(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const oe={},Hs=[],Pn=()=>{},E_=()=>!1,Ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ou=n=>n.startsWith("onUpdate:"),Me=Object.assign,au=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},S_=Object.prototype.hasOwnProperty,ee=(n,t)=>S_.call(n,t),zt=Array.isArray,Vs=n=>Aa(n)==="[object Map]",Id=n=>Aa(n)==="[object Set]",Wt=n=>typeof n=="function",ge=n=>typeof n=="string",Pi=n=>typeof n=="symbol",de=n=>n!==null&&typeof n=="object",Nd=n=>(de(n)||Wt(n))&&Wt(n.then)&&Wt(n.catch),Od=Object.prototype.toString,Aa=n=>Od.call(n),M_=n=>Aa(n).slice(8,-1),Ud=n=>Aa(n)==="[object Object]",lu=n=>ge(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Lr=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wa=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},y_=/-(\w)/g,bi=wa(n=>n.replace(y_,(t,e)=>e?e.toUpperCase():"")),b_=/\B([A-Z])/g,ls=wa(n=>n.replace(b_,"-$1").toLowerCase()),Fd=wa(n=>n.charAt(0).toUpperCase()+n.slice(1)),qa=wa(n=>n?`on${Fd(n)}`:""),Si=(n,t)=>!Object.is(n,t),qo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Bd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Ql=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let ch;const Ca=()=>ch||(ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cu(n){if(zt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=ge(i)?C_(i):cu(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(ge(n)||de(n))return n}const T_=/;(?![^(]*\))/g,A_=/:([^]+)/,w_=/\/\*[^]*?\*\//g;function C_(n){const t={};return n.replace(w_,"").split(T_).forEach(e=>{if(e){const i=e.split(A_);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function uu(n){let t="";if(ge(n))t=n;else if(zt(n))for(let e=0;e<n.length;e++){const i=uu(n[e]);i&&(t+=i+" ")}else if(de(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const R_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",P_=ru(R_);function zd(n){return!!n||n===""}const Hd=n=>!!(n&&n.__v_isRef===!0),jo=n=>ge(n)?n:n==null?"":zt(n)||de(n)&&(n.toString===Od||!Wt(n.toString))?Hd(n)?jo(n.value):JSON.stringify(n,Vd,2):String(n),Vd=(n,t)=>Hd(t)?Vd(n,t.value):Vs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[ja(i,r)+" =>"]=s,e),{})}:Id(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ja(e))}:Pi(t)?ja(t):de(t)&&!zt(t)&&!Ud(t)?String(t):t,ja=(n,t="")=>{var e;return Pi(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class D_{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xe,!t&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Xe;try{return Xe=this,t()}finally{Xe=e}}}on(){Xe=this}off(){Xe=this.parent}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function L_(){return Xe}let le;const Ka=new WeakSet;class kd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&Xe.active&&Xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,uh(this),$d(this);const t=le,e=gn;le=this,gn=!0;try{return this.fn()}finally{Xd(this),le=t,gn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)du(t);this.deps=this.depsTail=void 0,uh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tc(this)&&this.run()}get dirty(){return tc(this)}}let Gd=0,Ir,Nr;function Wd(n,t=!1){if(n.flags|=8,t){n.next=Nr,Nr=n;return}n.next=Ir,Ir=n}function hu(){Gd++}function fu(){if(--Gd>0)return;if(Nr){let t=Nr;for(Nr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Ir;){let t=Ir;for(Ir=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function $d(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),du(i),I_(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function tc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Yd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Yd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===kr))return;n.globalVersion=kr;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!tc(n)){n.flags&=-3;return}const e=le,i=gn;le=n,gn=!0;try{$d(n);const s=n.fn(n._value);(t.version===0||Si(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{le=e,gn=i,Xd(n),n.flags&=-3}}function du(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)du(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function I_(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let gn=!0;const qd=[];function Di(){qd.push(gn),gn=!1}function Li(){const n=qd.pop();gn=n===void 0?!0:n}function uh(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=le;le=void 0;try{t()}finally{le=e}}}let kr=0;class N_{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!le||!gn||le===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==le)e=this.activeLink=new N_(le,this),le.deps?(e.prevDep=le.depsTail,le.depsTail.nextDep=e,le.depsTail=e):le.deps=le.depsTail=e,jd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=le.depsTail,e.nextDep=void 0,le.depsTail.nextDep=e,le.depsTail=e,le.deps===e&&(le.deps=i)}return e}trigger(t){this.version++,kr++,this.notify(t)}notify(t){hu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{fu()}}}function jd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)jd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const ec=new WeakMap,Qi=Symbol(""),nc=Symbol(""),Gr=Symbol("");function Ae(n,t,e){if(gn&&le){let i=ec.get(n);i||ec.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new pu),s.map=i,s.key=e),s.track()}}function Kn(n,t,e,i,s,r){const o=ec.get(n);if(!o){kr++;return}const a=l=>{l&&l.trigger()};if(hu(),t==="clear")o.forEach(a);else{const l=zt(n),c=l&&lu(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Gr||!Pi(d)&&d>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Gr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Qi)),Vs(n)&&a(o.get(nc)));break;case"delete":l||(a(o.get(Qi)),Vs(n)&&a(o.get(nc)));break;case"set":Vs(n)&&a(o.get(Qi));break}}fu()}function ds(n){const t=te(n);return t===n?t:(Ae(t,"iterate",Gr),vn(n)?t:t.map(Le))}function mu(n){return Ae(n=te(n),"iterate",Gr),n}const O_={__proto__:null,[Symbol.iterator](){return Za(this,Symbol.iterator,Le)},concat(...n){return ds(this).concat(...n.map(t=>zt(t)?ds(t):t))},entries(){return Za(this,"entries",n=>(n[1]=Le(n[1]),n))},every(n,t){return Hn(this,"every",n,t,void 0,arguments)},filter(n,t){return Hn(this,"filter",n,t,e=>e.map(Le),arguments)},find(n,t){return Hn(this,"find",n,t,Le,arguments)},findIndex(n,t){return Hn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Hn(this,"findLast",n,t,Le,arguments)},findLastIndex(n,t){return Hn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Hn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ja(this,"includes",n)},indexOf(...n){return Ja(this,"indexOf",n)},join(n){return ds(this).join(n)},lastIndexOf(...n){return Ja(this,"lastIndexOf",n)},map(n,t){return Hn(this,"map",n,t,void 0,arguments)},pop(){return Er(this,"pop")},push(...n){return Er(this,"push",n)},reduce(n,...t){return hh(this,"reduce",n,t)},reduceRight(n,...t){return hh(this,"reduceRight",n,t)},shift(){return Er(this,"shift")},some(n,t){return Hn(this,"some",n,t,void 0,arguments)},splice(...n){return Er(this,"splice",n)},toReversed(){return ds(this).toReversed()},toSorted(n){return ds(this).toSorted(n)},toSpliced(...n){return ds(this).toSpliced(...n)},unshift(...n){return Er(this,"unshift",n)},values(){return Za(this,"values",Le)}};function Za(n,t,e){const i=mu(n),s=i[t]();return i!==n&&!vn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const U_=Array.prototype;function Hn(n,t,e,i,s,r){const o=mu(n),a=o!==n&&!vn(n),l=o[t];if(l!==U_[t]){const h=l.apply(n,r);return a?Le(h):h}let c=e;o!==n&&(a?c=function(h,d){return e.call(this,Le(h),d,n)}:e.length>2&&(c=function(h,d){return e.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function hh(n,t,e,i){const s=mu(n);let r=e;return s!==n&&(vn(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,Le(a),l,n)}),s[t](r,...i)}function Ja(n,t,e){const i=te(n);Ae(i,"iterate",Gr);const s=i[t](...e);return(s===-1||s===!1)&&xu(e[0])?(e[0]=te(e[0]),i[t](...e)):s}function Er(n,t,e=[]){Di(),hu();const i=te(n)[t].apply(n,e);return fu(),Li(),i}const F_=ru("__proto__,__v_isRef,__isVue"),Kd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Pi));function B_(n){Pi(n)||(n=String(n));const t=te(this);return Ae(t,"has",n),t.hasOwnProperty(n)}class Zd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?q_:ep:r?tp:Qd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=zt(t);if(!s){let l;if(o&&(l=O_[e]))return l;if(e==="hasOwnProperty")return B_}const a=Reflect.get(t,e,Ce(t)?t:i);return(Pi(e)?Kd.has(e):F_(e))||(s||Ae(t,"get",e),r)?a:Ce(a)?o&&lu(e)?a:a.value:de(a)?s?np(a):gu(a):a}}class Jd extends Zd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=es(r);if(!vn(i)&&!es(i)&&(r=te(r),i=te(i)),!zt(t)&&Ce(r)&&!Ce(i))return l?!1:(r.value=i,!0)}const o=zt(t)&&lu(e)?Number(e)<t.length:ee(t,e),a=Reflect.set(t,e,i,Ce(t)?t:s);return t===te(s)&&(o?Si(i,r)&&Kn(t,"set",e,i):Kn(t,"add",e,i)),a}deleteProperty(t,e){const i=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Kn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Pi(e)||!Kd.has(e))&&Ae(t,"has",e),i}ownKeys(t){return Ae(t,"iterate",zt(t)?"length":Qi),Reflect.ownKeys(t)}}class z_ extends Zd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const H_=new Jd,V_=new z_,k_=new Jd(!0);const ic=n=>n,co=n=>Reflect.getPrototypeOf(n);function G_(n,t,e){return function(...i){const s=this.__v_raw,r=te(s),o=Vs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?ic:t?sc:Le;return!t&&Ae(r,"iterate",l?nc:Qi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function uo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function W_(n,t){const e={get(s){const r=this.__v_raw,o=te(r),a=te(s);n||(Si(s,a)&&Ae(o,"get",s),Ae(o,"get",a));const{has:l}=co(o),c=t?ic:n?sc:Le;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ae(te(s),"iterate",Qi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=te(r),a=te(s);return n||(Si(s,a)&&Ae(o,"has",s),Ae(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=te(a),c=t?ic:n?sc:Le;return!n&&Ae(l,"iterate",Qi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Me(e,n?{add:uo("add"),set:uo("set"),delete:uo("delete"),clear:uo("clear")}:{add(s){!t&&!vn(s)&&!es(s)&&(s=te(s));const r=te(this);return co(r).has.call(r,s)||(r.add(s),Kn(r,"add",s,s)),this},set(s,r){!t&&!vn(r)&&!es(r)&&(r=te(r));const o=te(this),{has:a,get:l}=co(o);let c=a.call(o,s);c||(s=te(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Si(r,u)&&Kn(o,"set",s,r):Kn(o,"add",s,r),this},delete(s){const r=te(this),{has:o,get:a}=co(r);let l=o.call(r,s);l||(s=te(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Kn(r,"delete",s,void 0),c},clear(){const s=te(this),r=s.size!==0,o=s.clear();return r&&Kn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=G_(s,n,t)}),e}function _u(n,t){const e=W_(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ee(e,s)&&s in i?e:i,s,r)}const $_={get:_u(!1,!1)},X_={get:_u(!1,!0)},Y_={get:_u(!0,!1)};const Qd=new WeakMap,tp=new WeakMap,ep=new WeakMap,q_=new WeakMap;function j_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function K_(n){return n.__v_skip||!Object.isExtensible(n)?0:j_(M_(n))}function gu(n){return es(n)?n:vu(n,!1,H_,$_,Qd)}function Z_(n){return vu(n,!1,k_,X_,tp)}function np(n){return vu(n,!0,V_,Y_,ep)}function vu(n,t,e,i,s){if(!de(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=K_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Or(n){return es(n)?Or(n.__v_raw):!!(n&&n.__v_isReactive)}function es(n){return!!(n&&n.__v_isReadonly)}function vn(n){return!!(n&&n.__v_isShallow)}function xu(n){return n?!!n.__v_raw:!1}function te(n){const t=n&&n.__v_raw;return t?te(t):n}function J_(n){return!ee(n,"__v_skip")&&Object.isExtensible(n)&&Bd(n,"__v_skip",!0),n}const Le=n=>de(n)?gu(n):n,sc=n=>de(n)?np(n):n;function Ce(n){return n?n.__v_isRef===!0:!1}function Yn(n){return Q_(n,!1)}function Q_(n,t){return Ce(n)?n:new tg(n,t)}class tg{constructor(t,e){this.dep=new pu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:te(t),this._value=e?t:Le(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||vn(t)||es(t);t=i?t:te(t),Si(t,e)&&(this._rawValue=t,this._value=i?t:Le(t),this.dep.trigger())}}function eg(n){return Ce(n)?n.value:n}const ng={get:(n,t,e)=>t==="__v_raw"?n:eg(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ce(s)&&!Ce(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function ip(n){return Or(n)?n:new Proxy(n,ng)}class ig{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new pu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return Wd(this,!0),!0}get value(){const t=this.dep.track();return Yd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function sg(n,t,e=!1){let i,s;return Wt(n)?i=n:(i=n.get,s=n.set),new ig(i,s,e)}const ho={},la=new WeakMap;let $i;function rg(n,t=!1,e=$i){if(e){let i=la.get(e);i||la.set(e,i=[]),i.push(n)}}function og(n,t,e=oe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=E=>s?E:vn(E)||s===!1||s===0?Zn(E,1):Zn(E);let u,h,d,p,g=!1,v=!1;if(Ce(n)?(h=()=>n.value,g=vn(n)):Or(n)?(h=()=>c(n),g=!0):zt(n)?(v=!0,g=n.some(E=>Or(E)||vn(E)),h=()=>n.map(E=>{if(Ce(E))return E.value;if(Or(E))return c(E);if(Wt(E))return l?l(E,2):E()})):Wt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(d){Di();try{d()}finally{Li()}}const E=$i;$i=u;try{return l?l(n,3,[p]):n(p)}finally{$i=E}}:h=Pn,t&&s){const E=h,L=s===!0?1/0:s;h=()=>Zn(E(),L)}const m=L_(),f=()=>{u.stop(),m&&m.active&&au(m.effects,u)};if(r&&t){const E=t;t=(...L)=>{E(...L),f()}}let A=v?new Array(n.length).fill(ho):ho;const b=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(t){const L=u.run();if(s||g||(v?L.some((R,C)=>Si(R,A[C])):Si(L,A))){d&&d();const R=$i;$i=u;try{const C=[L,A===ho?void 0:v&&A[0]===ho?[]:A,p];l?l(t,3,C):t(...C),A=L}finally{$i=R}}}else u.run()};return a&&a(b),u=new kd(h),u.scheduler=o?()=>o(b,!1):b,p=E=>rg(E,!1,u),d=u.onStop=()=>{const E=la.get(u);if(E){if(l)l(E,4);else for(const L of E)L();la.delete(u)}},t?i?b(!0):A=u.run():o?o(b.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function Zn(n,t=1/0,e){if(t<=0||!de(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,Ce(n))Zn(n.value,t,e);else if(zt(n))for(let i=0;i<n.length;i++)Zn(n[i],t,e);else if(Id(n)||Vs(n))n.forEach(i=>{Zn(i,t,e)});else if(Ud(n)){for(const i in n)Zn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Zn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(n,t,e,i){try{return i?n(...i):n()}catch(s){Ra(s,t,e)}}function Nn(n,t,e,i){if(Wt(n)){const s=Zr(n,t,e,i);return s&&Nd(s)&&s.catch(r=>{Ra(r,t,e)}),s}if(zt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Nn(n[r],t,e,i));return s}}function Ra(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||oe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Di(),Zr(r,null,10,[n,l,c]),Li();return}}ag(n,e,s,i,o)}function ag(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ie=[];let Tn=-1;const ks=[];let gi=null,Ds=0;const sp=Promise.resolve();let ca=null;function lg(n){const t=ca||sp;return n?t.then(this?n.bind(this):n):t}function cg(n){let t=Tn+1,e=Ie.length;for(;t<e;){const i=t+e>>>1,s=Ie[i],r=Wr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Eu(n){if(!(n.flags&1)){const t=Wr(n),e=Ie[Ie.length-1];!e||!(n.flags&2)&&t>=Wr(e)?Ie.push(n):Ie.splice(cg(t),0,n),n.flags|=1,rp()}}function rp(){ca||(ca=sp.then(ap))}function ug(n){zt(n)?ks.push(...n):gi&&n.id===-1?gi.splice(Ds+1,0,n):n.flags&1||(ks.push(n),n.flags|=1),rp()}function fh(n,t,e=Tn+1){for(;e<Ie.length;e++){const i=Ie[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ie.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function op(n){if(ks.length){const t=[...new Set(ks)].sort((e,i)=>Wr(e)-Wr(i));if(ks.length=0,gi){gi.push(...t);return}for(gi=t,Ds=0;Ds<gi.length;Ds++){const e=gi[Ds];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}gi=null,Ds=0}}const Wr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ap(n){try{for(Tn=0;Tn<Ie.length;Tn++){const t=Ie[Tn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Zr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Tn<Ie.length;Tn++){const t=Ie[Tn];t&&(t.flags&=-2)}Tn=-1,Ie.length=0,op(),ca=null,(Ie.length||ks.length)&&ap()}}let rn=null,lp=null;function ua(n){const t=rn;return rn=n,lp=n&&n.type.__scopeId||null,t}function hg(n,t=rn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Eh(-1);const r=ua(t);let o;try{o=n(...s)}finally{ua(r),i._d&&Eh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function fg(n,t){if(rn===null)return n;const e=Ia(rn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=oe]=t[s];r&&(Wt(r)&&(r={mounted:r,updated:r}),r.deep&&Zn(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Fi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Di(),Nn(l,e,8,[n.el,a,n,t]),Li())}}const dg=Symbol("_vte"),pg=n=>n.__isTeleport;function Su(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Su(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function cp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ha(n,t,e,i,s=!1){if(zt(n)){n.forEach((g,v)=>ha(g,t&&(zt(t)?t[v]:t),e,i,s));return}if(Ur(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ha(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ia(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===oe?a.refs={}:a.refs,h=a.setupState,d=te(h),p=h===oe?()=>!1:g=>ee(d,g);if(c!=null&&c!==l&&(ge(c)?(u[c]=null,p(c)&&(h[c]=null)):Ce(c)&&(c.value=null)),Wt(l))Zr(l,a,12,[o,u]);else{const g=ge(l),v=Ce(l);if(g||v){const m=()=>{if(n.f){const f=g?p(l)?h[l]:u[l]:l.value;s?zt(f)&&au(f,r):zt(f)?f.includes(r)||f.push(r):g?(u[l]=[r],p(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,p(l)&&(h[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,$e(m,e)):m()}}}Ca().requestIdleCallback;Ca().cancelIdleCallback;const Ur=n=>!!n.type.__asyncLoader,up=n=>n.type.__isKeepAlive;function mg(n,t){hp(n,"a",t)}function _g(n,t){hp(n,"da",t)}function hp(n,t,e=Ne){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Pa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)up(s.parent.vnode)&&gg(i,t,e,s),s=s.parent}}function gg(n,t,e,i){const s=Pa(t,n,i,!0);Mu(()=>{au(i[t],s)},e)}function Pa(n,t,e=Ne,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Di();const a=Jr(e),l=Nn(t,e,n,o);return a(),Li(),l});return i?s.unshift(r):s.push(r),r}}const ri=n=>(t,e=Ne)=>{(!Yr||n==="sp")&&Pa(n,(...i)=>t(...i),e)},vg=ri("bm"),fp=ri("m"),xg=ri("bu"),Eg=ri("u"),Sg=ri("bum"),Mu=ri("um"),Mg=ri("sp"),yg=ri("rtg"),bg=ri("rtc");function Tg(n,t=Ne){Pa("ec",n,t)}const Ag=Symbol.for("v-ndc"),rc=n=>n?Np(n)?Ia(n):rc(n.parent):null,Fr=Me(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>rc(n.parent),$root:n=>rc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>yu(n),$forceUpdate:n=>n.f||(n.f=()=>{Eu(n.update)}),$nextTick:n=>n.n||(n.n=lg.bind(n.proxy)),$watch:n=>qg.bind(n)}),Qa=(n,t)=>n!==oe&&!n.__isScriptSetup&&ee(n,t),wg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Qa(i,t))return o[t]=1,i[t];if(s!==oe&&ee(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&ee(c,t))return o[t]=3,r[t];if(e!==oe&&ee(e,t))return o[t]=4,e[t];oc&&(o[t]=0)}}const u=Fr[t];let h,d;if(u)return t==="$attrs"&&Ae(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==oe&&ee(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,ee(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Qa(s,t)?(s[t]=e,!0):i!==oe&&ee(i,t)?(i[t]=e,!0):ee(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==oe&&ee(n,o)||Qa(t,o)||(a=r[0])&&ee(a,o)||ee(i,o)||ee(Fr,o)||ee(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ee(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function dh(n){return zt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let oc=!0;function Cg(n){const t=yu(n),e=n.proxy,i=n.ctx;oc=!1,t.beforeCreate&&ph(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:f,beforeUnmount:A,destroyed:b,unmounted:E,render:L,renderTracked:R,renderTriggered:C,errorCaptured:I,serverPrefetch:T,expose:M,inheritAttrs:P,components:Z,directives:k,filters:et}=t;if(c&&Rg(c,i,null),o)for(const K in o){const H=o[K];Wt(H)&&(i[K]=H.bind(e))}if(s){const K=s.call(e,e);de(K)&&(n.data=gu(K))}if(oc=!0,r)for(const K in r){const H=r[K],ft=Wt(H)?H.bind(e,e):Wt(H.get)?H.get.bind(e,e):Pn,ht=!Wt(H)&&Wt(H.set)?H.set.bind(e):Pn,pt=_v({get:ft,set:ht});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>pt.value,set:yt=>pt.value=yt})}if(a)for(const K in a)dp(a[K],i,e,K);if(l){const K=Wt(l)?l.call(e):l;Reflect.ownKeys(K).forEach(H=>{Og(H,K[H])})}u&&ph(u,n,"c");function X(K,H){zt(H)?H.forEach(ft=>K(ft.bind(e))):H&&K(H.bind(e))}if(X(vg,h),X(fp,d),X(xg,p),X(Eg,g),X(mg,v),X(_g,m),X(Tg,I),X(bg,R),X(yg,C),X(Sg,A),X(Mu,E),X(Mg,T),zt(M))if(M.length){const K=n.exposed||(n.exposed={});M.forEach(H=>{Object.defineProperty(K,H,{get:()=>e[H],set:ft=>e[H]=ft})})}else n.exposed||(n.exposed={});L&&n.render===Pn&&(n.render=L),P!=null&&(n.inheritAttrs=P),Z&&(n.components=Z),k&&(n.directives=k),T&&cp(n)}function Rg(n,t,e=Pn){zt(n)&&(n=ac(n));for(const i in n){const s=n[i];let r;de(s)?"default"in s?r=Ko(s.from||i,s.default,!0):r=Ko(s.from||i):r=Ko(s),Ce(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function ph(n,t,e){Nn(zt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function dp(n,t,e,i){let s=i.includes(".")?wp(e,i):()=>e[i];if(ge(n)){const r=t[n];Wt(r)&&el(s,r)}else if(Wt(n))el(s,n.bind(e));else if(de(n))if(zt(n))n.forEach(r=>dp(r,t,e,i));else{const r=Wt(n.handler)?n.handler.bind(e):t[n.handler];Wt(r)&&el(s,r,n)}}function yu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>fa(l,c,o,!0)),fa(l,t,o)),de(t)&&r.set(t,l),l}function fa(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&fa(n,r,e,!0),s&&s.forEach(o=>fa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Pg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Pg={data:mh,props:_h,emits:_h,methods:Rr,computed:Rr,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Rr,directives:Rr,watch:Lg,provide:mh,inject:Dg};function mh(n,t){return t?n?function(){return Me(Wt(n)?n.call(this,this):n,Wt(t)?t.call(this,this):t)}:t:n}function Dg(n,t){return Rr(ac(n),ac(t))}function ac(n){if(zt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Re(n,t){return n?[...new Set([].concat(n,t))]:t}function Rr(n,t){return n?Me(Object.create(null),n,t):t}function _h(n,t){return n?zt(n)&&zt(t)?[...new Set([...n,...t])]:Me(Object.create(null),dh(n),dh(t??{})):t}function Lg(n,t){if(!n)return t;if(!t)return n;const e=Me(Object.create(null),n);for(const i in t)e[i]=Re(n[i],t[i]);return e}function pp(){return{app:null,config:{isNativeTag:E_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ig=0;function Ng(n,t){return function(i,s=null){Wt(i)||(i=Me({},i)),s!=null&&!de(s)&&(s=null);const r=pp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Ig++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:gv,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Wt(u.install)?(o.add(u),u.install(c,...h)):Wt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||xn(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&t?t(p,u):n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Ia(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Gs;Gs=c;try{return u()}finally{Gs=h}}};return c}}let Gs=null;function Og(n,t){if(Ne){let e=Ne.provides;const i=Ne.parent&&Ne.parent.provides;i===e&&(e=Ne.provides=Object.create(i)),e[n]=t}}function Ko(n,t,e=!1){const i=Ne||rn;if(i||Gs){const s=Gs?Gs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Wt(t)?t.call(i&&i.proxy):t}}const mp={},_p=()=>Object.create(mp),gp=n=>Object.getPrototypeOf(n)===mp;function Ug(n,t,e,i=!1){const s={},r=_p();n.propsDefaults=Object.create(null),vp(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Z_(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Fg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=te(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Da(n.emitsOptions,d))continue;const p=t[d];if(l)if(ee(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=bi(d);s[g]=lc(l,a,g,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{vp(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!ee(t,h)&&((u=ls(h))===h||!ee(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=lc(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!ee(t,h))&&(delete r[h],c=!0)}c&&Kn(n.attrs,"set","")}function vp(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Lr(l))continue;const c=t[l];let u;s&&ee(s,u=bi(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Da(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=te(e),c=a||oe;for(let u=0;u<r.length;u++){const h=r[u];e[h]=lc(s,l,h,c[h],n,!ee(c,h))}}return o}function lc(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ee(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Wt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Jr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ls(e))&&(i=!0))}return i}const Bg=new WeakMap;function xp(n,t,e=!1){const i=e?Bg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Wt(n)){const u=h=>{l=!0;const[d,p]=xp(h,t,!0);Me(o,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return de(n)&&i.set(n,Hs),Hs;if(zt(r))for(let u=0;u<r.length;u++){const h=bi(r[u]);gh(h)&&(o[h]=oe)}else if(r)for(const u in r){const h=bi(u);if(gh(h)){const d=r[u],p=o[h]=zt(d)||Wt(d)?{type:d}:Me({},d),g=p.type;let v=!1,m=!0;if(zt(g))for(let f=0;f<g.length;++f){const A=g[f],b=Wt(A)&&A.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(m=!1)}else v=Wt(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||ee(p,"default"))&&a.push(h)}}const c=[o,a];return de(n)&&i.set(n,c),c}function gh(n){return n[0]!=="$"&&!Lr(n)}const Ep=n=>n[0]==="_"||n==="$stable",bu=n=>zt(n)?n.map(An):[An(n)],zg=(n,t,e)=>{if(t._n)return t;const i=hg((...s)=>bu(t(...s)),e);return i._c=!1,i},Sp=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Ep(s))continue;const r=n[s];if(Wt(r))t[s]=zg(s,r,i);else if(r!=null){const o=bu(r);t[s]=()=>o}}},Mp=(n,t)=>{const e=bu(t);n.slots.default=()=>e},yp=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},Hg=(n,t,e)=>{const i=n.slots=_p();if(n.vnode.shapeFlag&32){const s=t._;s?(yp(i,t,e),e&&Bd(i,"_",s,!0)):Sp(t,i)}else t&&Mp(n,t)},Vg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=oe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:yp(s,t,e):(r=!t.$stable,Sp(t,s)),o=t}else t&&(Mp(n,t),o={default:1});if(r)for(const a in s)!Ep(a)&&o[a]==null&&delete s[a]},$e=ev;function kg(n){return Gg(n)}function Gg(n,t){const e=Ca();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Pn,insertStaticContent:g}=n,v=(w,x,Y,J=null,q=null,G=null,rt=void 0,j=null,S=!!x.dynamicChildren)=>{if(w===x)return;w&&!Sr(w,x)&&(J=mt(w),yt(w,q,G,!0),w=null),x.patchFlag===-2&&(S=!1,x.dynamicChildren=null);const{type:_,ref:D,shapeFlag:O}=x;switch(_){case La:m(w,x,Y,J);break;case ns:f(w,x,Y,J);break;case il:w==null&&A(x,Y,J,rt);break;case jn:Z(w,x,Y,J,q,G,rt,j,S);break;default:O&1?L(w,x,Y,J,q,G,rt,j,S):O&6?k(w,x,Y,J,q,G,rt,j,S):(O&64||O&128)&&_.process(w,x,Y,J,q,G,rt,j,S,Ft)}D!=null&&q&&ha(D,w&&w.ref,G,x||w,!x)},m=(w,x,Y,J)=>{if(w==null)i(x.el=a(x.children),Y,J);else{const q=x.el=w.el;x.children!==w.children&&c(q,x.children)}},f=(w,x,Y,J)=>{w==null?i(x.el=l(x.children||""),Y,J):x.el=w.el},A=(w,x,Y,J)=>{[w.el,w.anchor]=g(w.children,x,Y,J,w.el,w.anchor)},b=({el:w,anchor:x},Y,J)=>{let q;for(;w&&w!==x;)q=d(w),i(w,Y,J),w=q;i(x,Y,J)},E=({el:w,anchor:x})=>{let Y;for(;w&&w!==x;)Y=d(w),s(w),w=Y;s(x)},L=(w,x,Y,J,q,G,rt,j,S)=>{x.type==="svg"?rt="svg":x.type==="math"&&(rt="mathml"),w==null?R(x,Y,J,q,G,rt,j,S):T(w,x,q,G,rt,j,S)},R=(w,x,Y,J,q,G,rt,j)=>{let S,_;const{props:D,shapeFlag:O,transition:V,dirs:B}=w;if(S=w.el=o(w.type,G,D&&D.is,D),O&8?u(S,w.children):O&16&&I(w.children,S,null,J,q,tl(w,G),rt,j),B&&Fi(w,null,J,"created"),C(S,w,w.scopeId,rt,J),D){for(const ot in D)ot!=="value"&&!Lr(ot)&&r(S,ot,null,D[ot],G,J);"value"in D&&r(S,"value",null,D.value,G),(_=D.onVnodeBeforeMount)&&yn(_,J,w)}B&&Fi(w,null,J,"beforeMount");const ct=Wg(q,V);ct&&V.beforeEnter(S),i(S,x,Y),((_=D&&D.onVnodeMounted)||ct||B)&&$e(()=>{_&&yn(_,J,w),ct&&V.enter(S),B&&Fi(w,null,J,"mounted")},q)},C=(w,x,Y,J,q)=>{if(Y&&p(w,Y),J)for(let G=0;G<J.length;G++)p(w,J[G]);if(q){let G=q.subTree;if(x===G||Rp(G.type)&&(G.ssContent===x||G.ssFallback===x)){const rt=q.vnode;C(w,rt,rt.scopeId,rt.slotScopeIds,q.parent)}}},I=(w,x,Y,J,q,G,rt,j,S=0)=>{for(let _=S;_<w.length;_++){const D=w[_]=j?vi(w[_]):An(w[_]);v(null,D,x,Y,J,q,G,rt,j)}},T=(w,x,Y,J,q,G,rt)=>{const j=x.el=w.el;let{patchFlag:S,dynamicChildren:_,dirs:D}=x;S|=w.patchFlag&16;const O=w.props||oe,V=x.props||oe;let B;if(Y&&Bi(Y,!1),(B=V.onVnodeBeforeUpdate)&&yn(B,Y,x,w),D&&Fi(x,w,Y,"beforeUpdate"),Y&&Bi(Y,!0),(O.innerHTML&&V.innerHTML==null||O.textContent&&V.textContent==null)&&u(j,""),_?M(w.dynamicChildren,_,j,Y,J,tl(x,q),G):rt||H(w,x,j,null,Y,J,tl(x,q),G,!1),S>0){if(S&16)P(j,O,V,Y,q);else if(S&2&&O.class!==V.class&&r(j,"class",null,V.class,q),S&4&&r(j,"style",O.style,V.style,q),S&8){const ct=x.dynamicProps;for(let ot=0;ot<ct.length;ot++){const ut=ct[ot],Ut=O[ut],st=V[ut];(st!==Ut||ut==="value")&&r(j,ut,Ut,st,q,Y)}}S&1&&w.children!==x.children&&u(j,x.children)}else!rt&&_==null&&P(j,O,V,Y,q);((B=V.onVnodeUpdated)||D)&&$e(()=>{B&&yn(B,Y,x,w),D&&Fi(x,w,Y,"updated")},J)},M=(w,x,Y,J,q,G,rt)=>{for(let j=0;j<x.length;j++){const S=w[j],_=x[j],D=S.el&&(S.type===jn||!Sr(S,_)||S.shapeFlag&70)?h(S.el):Y;v(S,_,D,null,J,q,G,rt,!0)}},P=(w,x,Y,J,q)=>{if(x!==Y){if(x!==oe)for(const G in x)!Lr(G)&&!(G in Y)&&r(w,G,x[G],null,q,J);for(const G in Y){if(Lr(G))continue;const rt=Y[G],j=x[G];rt!==j&&G!=="value"&&r(w,G,j,rt,q,J)}"value"in Y&&r(w,"value",x.value,Y.value,q)}},Z=(w,x,Y,J,q,G,rt,j,S)=>{const _=x.el=w?w.el:a(""),D=x.anchor=w?w.anchor:a("");let{patchFlag:O,dynamicChildren:V,slotScopeIds:B}=x;B&&(j=j?j.concat(B):B),w==null?(i(_,Y,J),i(D,Y,J),I(x.children||[],Y,D,q,G,rt,j,S)):O>0&&O&64&&V&&w.dynamicChildren?(M(w.dynamicChildren,V,Y,q,G,rt,j),(x.key!=null||q&&x===q.subTree)&&bp(w,x,!0)):H(w,x,Y,D,q,G,rt,j,S)},k=(w,x,Y,J,q,G,rt,j,S)=>{x.slotScopeIds=j,w==null?x.shapeFlag&512?q.ctx.activate(x,Y,J,rt,S):et(x,Y,J,q,G,rt,S):nt(w,x,S)},et=(w,x,Y,J,q,G,rt)=>{const j=w.component=uv(w,J,q);if(up(w)&&(j.ctx.renderer=Ft),hv(j,!1,rt),j.asyncDep){if(q&&q.registerDep(j,X,rt),!w.el){const S=j.subTree=xn(ns);f(null,S,x,Y)}}else X(j,w,x,Y,q,G,rt)},nt=(w,x,Y)=>{const J=x.component=w.component;if(Qg(w,x,Y))if(J.asyncDep&&!J.asyncResolved){K(J,x,Y);return}else J.next=x,J.update();else x.el=w.el,J.vnode=x},X=(w,x,Y,J,q,G,rt)=>{const j=()=>{if(w.isMounted){let{next:O,bu:V,u:B,parent:ct,vnode:ot}=w;{const Tt=Tp(w);if(Tt){O&&(O.el=ot.el,K(w,O,rt)),Tt.asyncDep.then(()=>{w.isUnmounted||j()});return}}let ut=O,Ut;Bi(w,!1),O?(O.el=ot.el,K(w,O,rt)):O=ot,V&&qo(V),(Ut=O.props&&O.props.onVnodeBeforeUpdate)&&yn(Ut,ct,O,ot),Bi(w,!0);const st=nl(w),_t=w.subTree;w.subTree=st,v(_t,st,h(_t.el),mt(_t),w,q,G),O.el=st.el,ut===null&&tv(w,st.el),B&&$e(B,q),(Ut=O.props&&O.props.onVnodeUpdated)&&$e(()=>yn(Ut,ct,O,ot),q)}else{let O;const{el:V,props:B}=x,{bm:ct,m:ot,parent:ut,root:Ut,type:st}=w,_t=Ur(x);if(Bi(w,!1),ct&&qo(ct),!_t&&(O=B&&B.onVnodeBeforeMount)&&yn(O,ut,x),Bi(w,!0),V&&Yt){const Tt=()=>{w.subTree=nl(w),Yt(V,w.subTree,w,q,null)};_t&&st.__asyncHydrate?st.__asyncHydrate(V,w,Tt):Tt()}else{Ut.ce&&Ut.ce._injectChildStyle(st);const Tt=w.subTree=nl(w);v(null,Tt,Y,J,w,q,G),x.el=Tt.el}if(ot&&$e(ot,q),!_t&&(O=B&&B.onVnodeMounted)){const Tt=x;$e(()=>yn(O,ut,Tt),q)}(x.shapeFlag&256||ut&&Ur(ut.vnode)&&ut.vnode.shapeFlag&256)&&w.a&&$e(w.a,q),w.isMounted=!0,x=Y=J=null}};w.scope.on();const S=w.effect=new kd(j);w.scope.off();const _=w.update=S.run.bind(S),D=w.job=S.runIfDirty.bind(S);D.i=w,D.id=w.uid,S.scheduler=()=>Eu(D),Bi(w,!0),_()},K=(w,x,Y)=>{x.component=w;const J=w.vnode.props;w.vnode=x,w.next=null,Fg(w,x.props,J,Y),Vg(w,x.children,Y),Di(),fh(w),Li()},H=(w,x,Y,J,q,G,rt,j,S=!1)=>{const _=w&&w.children,D=w?w.shapeFlag:0,O=x.children,{patchFlag:V,shapeFlag:B}=x;if(V>0){if(V&128){ht(_,O,Y,J,q,G,rt,j,S);return}else if(V&256){ft(_,O,Y,J,q,G,rt,j,S);return}}B&8?(D&16&&St(_,q,G),O!==_&&u(Y,O)):D&16?B&16?ht(_,O,Y,J,q,G,rt,j,S):St(_,q,G,!0):(D&8&&u(Y,""),B&16&&I(O,Y,J,q,G,rt,j,S))},ft=(w,x,Y,J,q,G,rt,j,S)=>{w=w||Hs,x=x||Hs;const _=w.length,D=x.length,O=Math.min(_,D);let V;for(V=0;V<O;V++){const B=x[V]=S?vi(x[V]):An(x[V]);v(w[V],B,Y,null,q,G,rt,j,S)}_>D?St(w,q,G,!0,!1,O):I(x,Y,J,q,G,rt,j,S,O)},ht=(w,x,Y,J,q,G,rt,j,S)=>{let _=0;const D=x.length;let O=w.length-1,V=D-1;for(;_<=O&&_<=V;){const B=w[_],ct=x[_]=S?vi(x[_]):An(x[_]);if(Sr(B,ct))v(B,ct,Y,null,q,G,rt,j,S);else break;_++}for(;_<=O&&_<=V;){const B=w[O],ct=x[V]=S?vi(x[V]):An(x[V]);if(Sr(B,ct))v(B,ct,Y,null,q,G,rt,j,S);else break;O--,V--}if(_>O){if(_<=V){const B=V+1,ct=B<D?x[B].el:J;for(;_<=V;)v(null,x[_]=S?vi(x[_]):An(x[_]),Y,ct,q,G,rt,j,S),_++}}else if(_>V)for(;_<=O;)yt(w[_],q,G,!0),_++;else{const B=_,ct=_,ot=new Map;for(_=ct;_<=V;_++){const Ot=x[_]=S?vi(x[_]):An(x[_]);Ot.key!=null&&ot.set(Ot.key,_)}let ut,Ut=0;const st=V-ct+1;let _t=!1,Tt=0;const Lt=new Array(st);for(_=0;_<st;_++)Lt[_]=0;for(_=B;_<=O;_++){const Ot=w[_];if(Ut>=st){yt(Ot,q,G,!0);continue}let It;if(Ot.key!=null)It=ot.get(Ot.key);else for(ut=ct;ut<=V;ut++)if(Lt[ut-ct]===0&&Sr(Ot,x[ut])){It=ut;break}It===void 0?yt(Ot,q,G,!0):(Lt[It-ct]=_+1,It>=Tt?Tt=It:_t=!0,v(Ot,x[It],Y,null,q,G,rt,j,S),Ut++)}const bt=_t?$g(Lt):Hs;for(ut=bt.length-1,_=st-1;_>=0;_--){const Ot=ct+_,It=x[Ot],ne=Ot+1<D?x[Ot+1].el:J;Lt[_]===0?v(null,It,Y,ne,q,G,rt,j,S):_t&&(ut<0||_!==bt[ut]?pt(It,Y,ne,2):ut--)}}},pt=(w,x,Y,J,q=null)=>{const{el:G,type:rt,transition:j,children:S,shapeFlag:_}=w;if(_&6){pt(w.component.subTree,x,Y,J);return}if(_&128){w.suspense.move(x,Y,J);return}if(_&64){rt.move(w,x,Y,Ft);return}if(rt===jn){i(G,x,Y);for(let O=0;O<S.length;O++)pt(S[O],x,Y,J);i(w.anchor,x,Y);return}if(rt===il){b(w,x,Y);return}if(J!==2&&_&1&&j)if(J===0)j.beforeEnter(G),i(G,x,Y),$e(()=>j.enter(G),q);else{const{leave:O,delayLeave:V,afterLeave:B}=j,ct=()=>i(G,x,Y),ot=()=>{O(G,()=>{ct(),B&&B()})};V?V(G,ct,ot):ot()}else i(G,x,Y)},yt=(w,x,Y,J=!1,q=!1)=>{const{type:G,props:rt,ref:j,children:S,dynamicChildren:_,shapeFlag:D,patchFlag:O,dirs:V,cacheIndex:B}=w;if(O===-2&&(q=!1),j!=null&&ha(j,null,Y,w,!0),B!=null&&(x.renderCache[B]=void 0),D&256){x.ctx.deactivate(w);return}const ct=D&1&&V,ot=!Ur(w);let ut;if(ot&&(ut=rt&&rt.onVnodeBeforeUnmount)&&yn(ut,x,w),D&6)lt(w.component,Y,J);else{if(D&128){w.suspense.unmount(Y,J);return}ct&&Fi(w,null,x,"beforeUnmount"),D&64?w.type.remove(w,x,Y,Ft,J):_&&!_.hasOnce&&(G!==jn||O>0&&O&64)?St(_,x,Y,!1,!0):(G===jn&&O&384||!q&&D&16)&&St(S,x,Y),J&&Xt(w)}(ot&&(ut=rt&&rt.onVnodeUnmounted)||ct)&&$e(()=>{ut&&yn(ut,x,w),ct&&Fi(w,null,x,"unmounted")},Y)},Xt=w=>{const{type:x,el:Y,anchor:J,transition:q}=w;if(x===jn){tt(Y,J);return}if(x===il){E(w);return}const G=()=>{s(Y),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(w.shapeFlag&1&&q&&!q.persisted){const{leave:rt,delayLeave:j}=q,S=()=>rt(Y,G);j?j(w.el,G,S):S()}else G()},tt=(w,x)=>{let Y;for(;w!==x;)Y=d(w),s(w),w=Y;s(x)},lt=(w,x,Y)=>{const{bum:J,scope:q,job:G,subTree:rt,um:j,m:S,a:_}=w;vh(S),vh(_),J&&qo(J),q.stop(),G&&(G.flags|=8,yt(rt,w,x,Y)),j&&$e(j,x),$e(()=>{w.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},St=(w,x,Y,J=!1,q=!1,G=0)=>{for(let rt=G;rt<w.length;rt++)yt(w[rt],x,Y,J,q)},mt=w=>{if(w.shapeFlag&6)return mt(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const x=d(w.anchor||w.el),Y=x&&x[dg];return Y?d(Y):x};let At=!1;const Nt=(w,x,Y)=>{w==null?x._vnode&&yt(x._vnode,null,null,!0):v(x._vnode||null,w,x,null,null,null,Y),x._vnode=w,At||(At=!0,fh(),op(),At=!1)},Ft={p:v,um:yt,m:pt,r:Xt,mt:et,mc:I,pc:H,pbc:M,n:mt,o:n};let Zt,Yt;return{render:Nt,hydrate:Zt,createApp:Ng(Nt,Zt)}}function tl({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Bi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Wg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function bp(n,t,e=!1){const i=n.children,s=t.children;if(zt(i)&&zt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=vi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&bp(o,a)),a.type===La&&(a.el=o.el)}}function $g(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Tp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Tp(t)}function vh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Xg=Symbol.for("v-scx"),Yg=()=>Ko(Xg);function el(n,t,e){return Ap(n,t,e)}function Ap(n,t,e=oe){const{immediate:i,deep:s,flush:r,once:o}=e,a=Me({},e),l=t&&i||!t&&r!=="post";let c;if(Yr){if(r==="sync"){const p=Yg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Pn,p.resume=Pn,p.pause=Pn,p}}const u=Ne;a.call=(p,g,v)=>Nn(p,u,g,v);let h=!1;r==="post"?a.scheduler=p=>{$e(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():Eu(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=og(n,t,a);return Yr&&(c?c.push(d):l&&d()),d}function qg(n,t,e){const i=this.proxy,s=ge(n)?n.includes(".")?wp(i,n):()=>i[n]:n.bind(i,i);let r;Wt(t)?r=t:(r=t.handler,e=t);const o=Jr(this),a=Ap(s,r.bind(i),e);return o(),a}function wp(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const jg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${bi(t)}Modifiers`]||n[`${ls(t)}Modifiers`];function Kg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||oe;let s=e;const r=t.startsWith("update:"),o=r&&jg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>ge(u)?u.trim():u)),o.number&&(s=e.map(Ql)));let a,l=i[a=qa(t)]||i[a=qa(bi(t))];!l&&r&&(l=i[a=qa(ls(t))]),l&&Nn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Nn(c,n,6,s)}}function Cp(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Wt(n)){const l=c=>{const u=Cp(c,t,!0);u&&(a=!0,Me(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(de(n)&&i.set(n,null),null):(zt(r)?r.forEach(l=>o[l]=null):Me(o,r),de(n)&&i.set(n,o),o)}function Da(n,t){return!n||!Ta(t)?!1:(t=t.slice(2).replace(/Once$/,""),ee(n,t[0].toLowerCase()+t.slice(1))||ee(n,ls(t))||ee(n,t))}function nl(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:g,inheritAttrs:v}=n,m=ua(n);let f,A;try{if(e.shapeFlag&4){const E=s||i,L=E;f=An(c.call(L,E,u,h,p,d,g)),A=a}else{const E=t;f=An(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),A=t.props?a:Zg(a)}}catch(E){Br.length=0,Ra(E,n,1),f=xn(ns)}let b=f;if(A&&v!==!1){const E=Object.keys(A),{shapeFlag:L}=b;E.length&&L&7&&(r&&E.some(ou)&&(A=Jg(A,r)),b=js(b,A,!1,!0))}return e.dirs&&(b=js(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition&&Su(b,e.transition),f=b,ua(m),f}const Zg=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ta(e))&&((t||(t={}))[e]=n[e]);return t},Jg=(n,t)=>{const e={};for(const i in n)(!ou(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Qg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?xh(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Da(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?xh(i,o,c):!0:!!o;return!1}function xh(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Da(e,r))return!0}return!1}function tv({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Rp=n=>n.__isSuspense;function ev(n,t){t&&t.pendingBranch?zt(n)?t.effects.push(...n):t.effects.push(n):ug(n)}const jn=Symbol.for("v-fgt"),La=Symbol.for("v-txt"),ns=Symbol.for("v-cmt"),il=Symbol.for("v-stc"),Br=[];let Ye=null;function $r(n=!1){Br.push(Ye=n?null:[])}function nv(){Br.pop(),Ye=Br[Br.length-1]||null}let Xr=1;function Eh(n,t=!1){Xr+=n,n<0&&Ye&&t&&(Ye.hasOnce=!0)}function Pp(n){return n.dynamicChildren=Xr>0?Ye||Hs:null,nv(),Xr>0&&Ye&&Ye.push(n),n}function da(n,t,e,i,s,r){return Pp(tn(n,t,e,i,s,r,!0))}function iv(n,t,e,i,s){return Pp(xn(n,t,e,i,s,!0))}function Dp(n){return n?n.__v_isVNode===!0:!1}function Sr(n,t){return n.type===t.type&&n.key===t.key}const Lp=({key:n})=>n??null,Zo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ge(n)||Ce(n)||Wt(n)?{i:rn,r:n,k:t,f:!!e}:n:null);function tn(n,t=null,e=null,i=0,s=null,r=n===jn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Lp(t),ref:t&&Zo(t),scopeId:lp,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:rn};return a?(Tu(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=ge(e)?8:16),Xr>0&&!o&&Ye&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ye.push(l),l}const xn=sv;function sv(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Ag)&&(n=ns),Dp(n)){const a=js(n,t,!0);return e&&Tu(a,e),Xr>0&&!r&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(n)]=a:Ye.push(a)),a.patchFlag=-2,a}if(mv(n)&&(n=n.__vccOpts),t){t=rv(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=uu(a)),de(l)&&(xu(l)&&!zt(l)&&(l=Me({},l)),t.style=cu(l))}const o=ge(n)?1:Rp(n)?128:pg(n)?64:de(n)?4:Wt(n)?2:0;return tn(n,t,e,i,s,o,r,!0)}function rv(n){return n?xu(n)||gp(n)?Me({},n):n:null}function js(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?av(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Lp(c),ref:t&&t.ref?e&&r?zt(r)?r.concat(Zo(t)):[r,Zo(t)]:Zo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==jn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&js(n.ssContent),ssFallback:n.ssFallback&&js(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Su(u,l.clone(u)),u}function Ip(n=" ",t=0){return xn(La,null,n,t)}function ov(n="",t=!1){return t?($r(),iv(ns,null,n)):xn(ns,null,n)}function An(n){return n==null||typeof n=="boolean"?xn(ns):zt(n)?xn(jn,null,n.slice()):Dp(n)?vi(n):xn(La,null,String(n))}function vi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:js(n)}function Tu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(zt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Tu(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!gp(t)?t._ctx=rn:s===3&&rn&&(rn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Wt(t)?(t={default:t,_ctx:rn},e=32):(t=String(t),i&64?(e=16,t=[Ip(t)]):e=8);n.children=t,n.shapeFlag|=e}function av(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=uu([t.class,i.class]));else if(s==="style")t.style=cu([t.style,i.style]);else if(Ta(s)){const r=t[s],o=i[s];o&&r!==o&&!(zt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function yn(n,t,e,i=null){Nn(n,t,7,[e,i])}const lv=pp();let cv=0;function uv(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||lv,r={uid:cv++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new D_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xp(i,s),emitsOptions:Cp(i,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:i.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Kg.bind(null,r),n.ce&&n.ce(r),r}let Ne=null,pa,cc;{const n=Ca(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};pa=t("__VUE_INSTANCE_SETTERS__",e=>Ne=e),cc=t("__VUE_SSR_SETTERS__",e=>Yr=e)}const Jr=n=>{const t=Ne;return pa(n),n.scope.on(),()=>{n.scope.off(),pa(t)}},Sh=()=>{Ne&&Ne.scope.off(),pa(null)};function Np(n){return n.vnode.shapeFlag&4}let Yr=!1;function hv(n,t=!1,e=!1){t&&cc(t);const{props:i,children:s}=n.vnode,r=Np(n);Ug(n,i,r,t),Hg(n,s,e);const o=r?fv(n,t):void 0;return t&&cc(!1),o}function fv(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,wg);const{setup:i}=e;if(i){Di();const s=n.setupContext=i.length>1?pv(n):null,r=Jr(n),o=Zr(i,n,0,[n.props,s]),a=Nd(o);if(Li(),r(),(a||n.sp)&&!Ur(n)&&cp(n),a){if(o.then(Sh,Sh),t)return o.then(l=>{Mh(n,l,t)}).catch(l=>{Ra(l,n,0)});n.asyncDep=o}else Mh(n,o,t)}else Op(n,t)}function Mh(n,t,e){Wt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:de(t)&&(n.setupState=ip(t)),Op(n,e)}let yh;function Op(n,t,e){const i=n.type;if(!n.render){if(!t&&yh&&!i.render){const s=i.template||yu(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Me(Me({isCustomElement:r,delimiters:a},o),l);i.render=yh(s,c)}}n.render=i.render||Pn}{const s=Jr(n);Di();try{Cg(n)}finally{Li(),s()}}}const dv={get(n,t){return Ae(n,"get",""),n[t]}};function pv(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,dv),slots:n.slots,emit:n.emit,expose:t}}function Ia(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ip(J_(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Fr)return Fr[e](n)},has(t,e){return e in t||e in Fr}})):n.proxy}function mv(n){return Wt(n)&&"__vccOpts"in n}const _v=(n,t)=>sg(n,t,Yr),gv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let uc;const bh=typeof window<"u"&&window.trustedTypes;if(bh)try{uc=bh.createPolicy("vue",{createHTML:n=>n})}catch{}const Up=uc?n=>uc.createHTML(n):n=>n,vv="http://www.w3.org/2000/svg",xv="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,Th=qn&&qn.createElement("template"),Ev={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?qn.createElementNS(vv,n):t==="mathml"?qn.createElementNS(xv,n):e?qn.createElement(n,{is:e}):qn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>qn.createTextNode(n),createComment:n=>qn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>qn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Th.innerHTML=Up(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Th.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Sv=Symbol("_vtc");function Mv(n,t,e){const i=n[Sv];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Ah=Symbol("_vod"),yv=Symbol("_vsh"),bv=Symbol(""),Tv=/(^|;)\s*display\s*:/;function Av(n,t,e){const i=n.style,s=ge(e);let r=!1;if(e&&!s){if(t)if(ge(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Jo(i,a,"")}else for(const o in t)e[o]==null&&Jo(i,o,"");for(const o in e)o==="display"&&(r=!0),Jo(i,o,e[o])}else if(s){if(t!==e){const o=i[bv];o&&(e+=";"+o),i.cssText=e,r=Tv.test(e)}}else t&&n.removeAttribute("style");Ah in n&&(n[Ah]=r?i.display:"",n[yv]&&(i.display="none"))}const wh=/\s*!important$/;function Jo(n,t,e){if(zt(e))e.forEach(i=>Jo(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=wv(n,t);wh.test(e)?n.setProperty(ls(i),e.replace(wh,""),"important"):n[i]=e}}const Ch=["Webkit","Moz","ms"],sl={};function wv(n,t){const e=sl[t];if(e)return e;let i=bi(t);if(i!=="filter"&&i in n)return sl[t]=i;i=Fd(i);for(let s=0;s<Ch.length;s++){const r=Ch[s]+i;if(r in n)return sl[t]=r}return t}const Rh="http://www.w3.org/1999/xlink";function Ph(n,t,e,i,s,r=P_(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Rh,t.slice(6,t.length)):n.setAttributeNS(Rh,t,e):e==null||r&&!zd(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Pi(e)?String(e):e)}function Dh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Up(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=zd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Ls(n,t,e,i){n.addEventListener(t,e,i)}function Cv(n,t,e,i){n.removeEventListener(t,e,i)}const Lh=Symbol("_vei");function Rv(n,t,e,i,s=null){const r=n[Lh]||(n[Lh]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Pv(t);if(i){const c=r[t]=Iv(i,s);Ls(n,a,c,l)}else o&&(Cv(n,a,o,l),r[t]=void 0)}}const Ih=/(?:Once|Passive|Capture)$/;function Pv(n){let t;if(Ih.test(n)){t={};let i;for(;i=n.match(Ih);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ls(n.slice(2)),t]}let rl=0;const Dv=Promise.resolve(),Lv=()=>rl||(Dv.then(()=>rl=0),rl=Date.now());function Iv(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Nn(Nv(i,e.value),t,5,[i])};return e.value=n,e.attached=Lv(),e}function Nv(n,t){if(zt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Nh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ov=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Mv(n,i,o):t==="style"?Av(n,e,i):Ta(t)?ou(t)||Rv(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Uv(n,t,i,o))?(Dh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ph(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!ge(i))?Dh(n,bi(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Ph(n,t,i,o))};function Uv(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Nh(t)&&Wt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nh(t)&&ge(e)?!1:t in n}const Oh=n=>{const t=n.props["onUpdate:modelValue"]||!1;return zt(t)?e=>qo(t,e):t};function Fv(n){n.target.composing=!0}function Uh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ol=Symbol("_assign"),Bv={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[ol]=Oh(s);const r=i||s.props&&s.props.type==="number";Ls(n,t?"change":"input",o=>{if(o.target.composing)return;let a=n.value;e&&(a=a.trim()),r&&(a=Ql(a)),n[ol](a)}),e&&Ls(n,"change",()=>{n.value=n.value.trim()}),t||(Ls(n,"compositionstart",Fv),Ls(n,"compositionend",Uh),Ls(n,"change",Uh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[ol]=Oh(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Ql(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l))}},zv=Me({patchProp:Ov},Ev);let Fh;function Hv(){return Fh||(Fh=kg(zv))}const Vv=(...n)=>{const t=Hv().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Gv(i);if(!s)return;const r=t._component;!Wt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,kv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function kv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Gv(n){return ge(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Au="170",Ws={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wv=0,Bh=1,$v=2,Fp=1,Xv=2,Xn=3,Ti=0,He=1,Cn=2,Mi=0,$s=1,zh=2,Hh=3,Vh=4,Yv=5,Yi=100,qv=101,jv=102,Kv=103,Zv=104,Jv=200,Qv=201,tx=202,ex=203,hc=204,fc=205,nx=206,ix=207,sx=208,rx=209,ox=210,ax=211,lx=212,cx=213,ux=214,dc=0,pc=1,mc=2,Ks=3,_c=4,gc=5,vc=6,xc=7,Bp=0,hx=1,fx=2,yi=0,dx=1,px=2,mx=3,_x=4,gx=5,vx=6,xx=7,zp=300,Zs=301,Js=302,Ec=303,Sc=304,Na=306,Mc=1e3,ji=1001,yc=1002,En=1003,Ex=1004,fo=1005,Rn=1006,al=1007,Ki=1008,ii=1009,Hp=1010,Vp=1011,qr=1012,wu=1013,is=1014,Jn=1015,Qr=1016,Cu=1017,Ru=1018,Qs=1020,kp=35902,Gp=1021,Wp=1022,_n=1023,$p=1024,Xp=1025,Xs=1026,tr=1027,Yp=1028,Pu=1029,qp=1030,Du=1031,Lu=1033,Qo=33776,ta=33777,ea=33778,na=33779,bc=35840,Tc=35841,Ac=35842,wc=35843,Cc=36196,Rc=37492,Pc=37496,Dc=37808,Lc=37809,Ic=37810,Nc=37811,Oc=37812,Uc=37813,Fc=37814,Bc=37815,zc=37816,Hc=37817,Vc=37818,kc=37819,Gc=37820,Wc=37821,ia=36492,$c=36494,Xc=36495,jp=36283,Yc=36284,qc=36285,jc=36286,Sx=3200,Mx=3201,Kp=0,yx=1,Ei="",en="srgb",cr="srgb-linear",Oa="linear",se="srgb",ps=7680,kh=519,bx=512,Tx=513,Ax=514,Zp=515,wx=516,Cx=517,Rx=518,Px=519,Gh=35044,Wh="300 es",Qn=2e3,ma=2001;class cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $h=1234567;const Ys=Math.PI/180,jr=180/Math.PI;function ur(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]).toLowerCase()}function we(n,t,e){return Math.max(t,Math.min(e,n))}function Iu(n,t){return(n%t+t)%t}function Dx(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Lx(n,t,e){return n!==t?(e-n)/(t-n):0}function zr(n,t,e){return(1-e)*n+e*t}function Ix(n,t,e,i){return zr(n,t,1-Math.exp(-e*i))}function Nx(n,t=1){return t-Math.abs(Iu(n,t*2)-t)}function Ox(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ux(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Fx(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Bx(n,t){return n+Math.random()*(t-n)}function zx(n){return n*(.5-Math.random())}function Hx(n){n!==void 0&&($h=n);let t=$h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vx(n){return n*Ys}function kx(n){return n*jr}function Gx(n){return(n&n-1)===0&&n!==0}function Wx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $x(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xx(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Is(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yx={DEG2RAD:Ys,RAD2DEG:jr,generateUUID:ur,clamp:we,euclideanModulo:Iu,mapLinear:Dx,inverseLerp:Lx,lerp:zr,damp:Ix,pingpong:Nx,smoothstep:Ox,smootherstep:Ux,randInt:Fx,randFloat:Bx,randFloatSpread:zx,seededRandom:Hx,degToRad:Vx,radToDeg:kx,isPowerOfTwo:Gx,ceilPowerOfTwo:Wx,floorPowerOfTwo:$x,setQuaternionFromProperEuler:Xx,normalize:Pe,denormalize:Is};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,s,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],A=s[1],b=s[4],E=s[7],L=s[2],R=s[5],C=s[8];return r[0]=o*v+a*A+l*L,r[3]=o*m+a*b+l*R,r[6]=o*f+a*E+l*C,r[1]=c*v+u*A+h*L,r[4]=c*m+u*b+h*R,r[7]=c*f+u*E+h*C,r[2]=d*v+p*A+g*L,r[5]=d*m+p*b+g*R,r[8]=d*f+p*E+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=e*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=d*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ll.makeScale(t,e)),this}rotate(t){return this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new kt;function Jp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qx(){const n=_a("canvas");return n.style.display="block",n}const Xh={};function Pr(n){n in Xh||(Xh[n]=!0,console.warn(n))}function jx(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Kx(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zx(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(n.r=ti(n.r),n.g=ti(n.g),n.b=ti(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(n.r=qs(n.r),n.g=qs(n.g),n.b=qs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ei?Oa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Yh=[.64,.33,.3,.6,.15,.06],qh=[.2126,.7152,.0722],jh=[.3127,.329],Kh=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[cr]:{primaries:Yh,whitePoint:jh,transfer:Oa,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:qh,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:Yh,whitePoint:jh,transfer:se,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:qh,outputColorSpaceConfig:{drawingBufferColorSpace:en}}});let ms;class Jx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=_a("canvas")),ms.width=t.width,ms.height=t.height;const i=ms.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_a("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ti(e[i]/255)*255):e[i]=ti(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qx=0;class Qp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cl(s[o].image)):r.push(cl(s[o]))}else r=cl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tE=0;class Ve extends cs{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,i=ji,s=ji,r=Rn,o=Ki,a=_n,l=ii,c=Ve.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=ur(),this.name="",this.source=new Qp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mc:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mc:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=zp;Ve.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,E=(p+1)/2,L=(f+1)/2,R=(u+d)/4,C=(h+v)/4,I=(g+m)/4;return b>E&&b>L?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=C/i):E>L?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=I/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=C/r,s=I/r),this.set(i,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-v)/A,this.z=(d-u)/A,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eE extends cs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ve(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends eE{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class tm extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nE extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*v,A=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const L=Math.sqrt(b),R=Math.atan2(L,f*A);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const E=a*A;if(l=l*m+d*E,c=c*m+p*E,u=u*m+g*E,h=h*m+v*E,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-a*p,t[e+2]=c*g+u*p+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ul.copy(this).projectOnVector(t),this.sub(ul)}reflect(t){return this.sub(ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new z,Jh=new rs;class to{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),mo.subVectors(this.max,Mr),_s.subVectors(t.a,Mr),gs.subVectors(t.b,Mr),vs.subVectors(t.c,Mr),ci.subVectors(gs,_s),ui.subVectors(vs,gs),zi.subVectors(_s,vs);let e=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-zi.z,zi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,zi.z,0,-zi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-zi.y,zi.x,0];return!hl(e,_s,gs,vs,mo)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,_s,gs,vs,mo))?!1:(_o.crossVectors(ci,ui),e=[_o.x,_o.y,_o.z],hl(e,_s,gs,vs,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new z,new z,new z,new z,new z,new z,new z,new z],dn=new z,po=new to,_s=new z,gs=new z,vs=new z,ci=new z,ui=new z,zi=new z,Mr=new z,mo=new z,_o=new z,Hi=new z;function hl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Hi.fromArray(n,r);const a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const iE=new to,yr=new z,fl=new z;class Ua{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):iE.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);const e=yr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(fl)),this.expandByPoint(yr.copy(t.center).sub(fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new z,dl=new z,go=new z,hi=new z,pl=new z,vo=new z,ml=new z;class Fa{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dl.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(dl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(go),a=hi.dot(this.direction),l=-hi.dot(go),c=hi.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(dl).addScaledVector(go,d),p}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const i=kn.dot(this.direction),s=kn.dot(kn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,i,s,r){pl.subVectors(e,t),vo.subVectors(i,t),ml.crossVectors(pl,vo);let o=this.direction.dot(ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);const l=a*this.direction.dot(vo.crossVectors(hi,vo));if(l<0)return null;const c=a*this.direction.dot(pl.cross(hi));if(c<0||l+c>o)return null;const u=-a*hi.dot(ml);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,s,r,o,a,l,c,u,h,d,p,g,v,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,d,p,g,v,m)}set(t,e,i,s,r,o,a,l,c,u,h,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),o=1/xs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;e[0]=d-v*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-v*h}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+v,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sE,t,rE)}lookAt(t,e,i){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),fi.crossVectors(i,Ge),fi.lengthSq()===0&&(Math.abs(i.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),fi.crossVectors(i,Ge)),fi.normalize(),xo.crossVectors(Ge,fi),s[0]=fi.x,s[4]=xo.x,s[8]=Ge.x,s[1]=fi.y,s[5]=xo.y,s[9]=Ge.y,s[2]=fi.z,s[6]=xo.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],A=i[3],b=i[7],E=i[11],L=i[15],R=s[0],C=s[4],I=s[8],T=s[12],M=s[1],P=s[5],Z=s[9],k=s[13],et=s[2],nt=s[6],X=s[10],K=s[14],H=s[3],ft=s[7],ht=s[11],pt=s[15];return r[0]=o*R+a*M+l*et+c*H,r[4]=o*C+a*P+l*nt+c*ft,r[8]=o*I+a*Z+l*X+c*ht,r[12]=o*T+a*k+l*K+c*pt,r[1]=u*R+h*M+d*et+p*H,r[5]=u*C+h*P+d*nt+p*ft,r[9]=u*I+h*Z+d*X+p*ht,r[13]=u*T+h*k+d*K+p*pt,r[2]=g*R+v*M+m*et+f*H,r[6]=g*C+v*P+m*nt+f*ft,r[10]=g*I+v*Z+m*X+f*ht,r[14]=g*T+v*k+m*K+f*pt,r[3]=A*R+b*M+E*et+L*H,r[7]=A*C+b*P+E*nt+L*ft,r[11]=A*I+b*Z+E*X+L*ht,r[15]=A*T+b*k+E*K+L*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+f*(-s*a*u-e*l*h+e*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],A=h*m*c-v*d*c+v*l*p-a*m*p-h*l*f+a*d*f,b=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,E=u*v*c-g*h*c+g*a*p-o*v*p-u*a*f+o*h*f,L=g*h*l-u*v*l-g*a*d+o*v*d+u*a*m-o*h*m,R=e*A+i*b+s*E+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=A*C,t[1]=(v*d*r-h*m*r-v*s*p+i*m*p+h*s*f-i*d*f)*C,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*f+i*l*f)*C,t[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*C,t[4]=b*C,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*C,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*p+e*l*p)*C,t[8]=E*C,t[9]=(g*h*r-u*v*r-g*i*p+e*v*p+u*i*f-e*h*f)*C,t[10]=(o*v*r-g*a*r+g*i*c-e*v*c-o*i*f+e*a*f)*C,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*p-e*a*p)*C,t[12]=L*C,t[13]=(u*v*s-g*h*s+g*i*d-e*v*d-u*i*m+e*h*m)*C,t[14]=(g*a*s-o*v*s-g*i*l+e*v*l+o*i*m-e*a*m)*C,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*d+e*a*d)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,v=o*u,m=o*h,f=a*h,A=l*c,b=l*u,E=l*h,L=i.x,R=i.y,C=i.z;return s[0]=(1-(v+f))*L,s[1]=(p+E)*L,s[2]=(g-b)*L,s[3]=0,s[4]=(p-E)*R,s[5]=(1-(d+f))*R,s[6]=(m+A)*R,s[7]=0,s[8]=(g+b)*C,s[9]=(m-A)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=xs.set(s[0],s[1],s[2]).length();const o=xs.set(s[4],s[5],s[6]).length(),a=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const c=1/r,u=1/o,h=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,e.setFromRotationMatrix(pn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Qn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let p,g;if(a===Qn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ma)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Qn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),d=(e+t)*c,p=(i+s)*u;let g,v;if(a===Qn)g=(o+r)*h,v=-2*h;else if(a===ma)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const xs=new z,pn=new he,sE=new z(0,0,0),rE=new z(1,1,1),fi=new z,xo=new z,Ge=new z,Qh=new he,tf=new rs;class On{constructor(t=0,e=0,i=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tf.setFromEuler(this),this.setFromQuaternion(tf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Nu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let oE=0;const ef=new z,Es=new rs,Gn=new he,Eo=new z,br=new z,aE=new z,lE=new rs,nf=new z(1,0,0),sf=new z(0,1,0),rf=new z(0,0,1),of={type:"added"},cE={type:"removed"},Ss={type:"childadded",child:null},_l={type:"childremoved",child:null};class Se extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new z,e=new On,i=new rs,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(nf,t)}rotateY(t){return this.rotateOnAxis(sf,t)}rotateZ(t){return this.rotateOnAxis(rf,t)}translateOnAxis(t,e){return ef.copy(t).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nf,t)}translateY(t){return this.translateOnAxis(sf,t)}translateZ(t){return this.translateOnAxis(rf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Eo.copy(t):Eo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(br,Eo,this.up):Gn.lookAt(Eo,br,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(Gn),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(of),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cE),_l.child=t,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(of),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,aE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,lE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Se.DEFAULT_UP=new z(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new z,Wn=new z,gl=new z,$n=new z,Ms=new z,ys=new z,af=new z,vl=new z,xl=new z,El=new z,Sl=new pe,Ml=new pe,yl=new pe;class sn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){mn.subVectors(s,e),Wn.subVectors(i,e),gl.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(Wn),l=mn.dot(gl),c=Wn.dot(Wn),u=Wn.dot(gl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Sl.setScalar(0),Ml.setScalar(0),yl.setScalar(0),Sl.fromBufferAttribute(t,e),Ml.fromBufferAttribute(t,i),yl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sl,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(t,e,i,s){return mn.subVectors(i,e),Wn.subVectors(t,e),mn.cross(Wn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),mn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ms.subVectors(s,i),ys.subVectors(r,i),vl.subVectors(t,i);const l=Ms.dot(vl),c=ys.dot(vl);if(l<=0&&c<=0)return e.copy(i);xl.subVectors(t,s);const u=Ms.dot(xl),h=ys.dot(xl);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ms,o);El.subVectors(t,r);const p=Ms.dot(El),g=ys.dot(El);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ys,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return af.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(af,a);const f=1/(m+v+d);return o=v*f,a=d*f,e.copy(i).addScaledVector(Ms,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},So={h:0,s:0,l:0};function bl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=Iu(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=bl(o,r,t+1/3),this.g=bl(o,r,t),this.b=bl(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const i=em[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return jt.fromWorkingColorSpace(Te.copy(this),t),Math.round(we(Te.r*255,0,255))*65536+Math.round(we(Te.g*255,0,255))*256+Math.round(we(Te.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Te.copy(this),e);const i=Te.r,s=Te.g,r=Te.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=en){jt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,i=Te.g,s=Te.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(So);const i=zr(di.h,So.h,e),s=zr(di.s,So.s,e),r=zr(di.l,So.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new qt;qt.NAMES=em;let uE=0;class hr extends cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=ur(),this.name="",this.blending=$s,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=fc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hc&&(i.blendSrc=this.blendSrc),this.blendDst!==fc&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ga extends hr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new z,Mo=new Gt;class Dn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gh,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Is(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gh&&(t.usage=this.usage),t}}class nm extends Dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class im extends Dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class qe extends Dn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let hE=0;const Qe=new he,Tl=new Se,bs=new z,We=new to,Tr=new to,Ee=new z;class Fn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jp(t)?im:nm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return Tl.lookAt(t),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qe(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ua);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(We.min,Tr.min),We.expandByPoint(Ee),Ee.addVectors(We.max,Tr.max),We.expandByPoint(Ee)):(We.expandByPoint(Tr.min),We.expandByPoint(Tr.max))}We.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ee.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(t,c),Ee.add(bs)),s=Math.max(s,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new z,l[I]=new z;const c=new z,u=new z,h=new z,d=new Gt,p=new Gt,g=new Gt,v=new z,m=new z;function f(I,T,M){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[I].add(v),a[T].add(v),a[M].add(v),l[I].add(m),l[T].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let I=0,T=A.length;I<T;++I){const M=A[I],P=M.start,Z=M.count;for(let k=P,et=P+Z;k<et;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const b=new z,E=new z,L=new z,R=new z;function C(I){L.fromBufferAttribute(s,I),R.copy(L);const T=a[I];b.copy(T),b.sub(L.multiplyScalar(L.dot(T))).normalize(),E.crossVectors(R,T);const P=E.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,P)}for(let I=0,T=A.length;I<T;++I){const M=A[I],P=M.start,Z=M.count;for(let k=P,et=P+Z;k<et;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Dn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lf=new he,Vi=new Fa,yo=new Ua,cf=new z,bo=new z,To=new z,Ao=new z,Al=new z,wo=new z,uf=new z,Co=new z;class on extends Se{constructor(t=new Fn,e=new ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Al.fromBufferAttribute(h,t),o?wo.addScaledVector(Al,u):wo.addScaledVector(Al.sub(e),u))}e.add(wo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(yo.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(yo,cf)===null||Vi.origin.distanceToSquared(cf)>(t.far-t.near)**2))&&(lf.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(lf),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,L=b;E<L;E+=3){const R=a.getX(E),C=a.getX(E+1),I=a.getX(E+2);s=Ro(this,f,t,i,c,u,h,R,C,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const A=a.getX(m),b=a.getX(m+1),E=a.getX(m+2);s=Ro(this,o,t,i,c,u,h,A,b,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,L=b;E<L;E+=3){const R=E,C=E+1,I=E+2;s=Ro(this,f,t,i,c,u,h,R,C,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const A=m,b=m+1,E=m+2;s=Ro(this,o,t,i,c,u,h,A,b,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function fE(n,t,e,i,s,r,o,a){let l;if(t.side===He?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ti,a),l===null)return null;Co.copy(a),Co.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:n}}function Ro(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,bo),n.getVertexPosition(l,To),n.getVertexPosition(c,Ao);const u=fE(n,t,e,i,bo,To,Ao,uf);if(u){const h=new z;sn.getBarycoord(uf,bo,To,Ao,h),s&&(u.uv=sn.getInterpolatedAttribute(s,a,l,c,h,new Gt)),r&&(u.uv1=sn.getInterpolatedAttribute(r,a,l,c,h,new Gt)),o&&(u.normal=sn.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};sn.getNormal(bo,To,Ao,d.normal),u.face=d,u.barycoord=h}return u}class fr extends Fn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(h,2));function g(v,m,f,A,b,E,L,R,C,I,T){const M=E/C,P=L/I,Z=E/2,k=L/2,et=R/2,nt=C+1,X=I+1;let K=0,H=0;const ft=new z;for(let ht=0;ht<X;ht++){const pt=ht*P-k;for(let yt=0;yt<nt;yt++){const Xt=yt*M-Z;ft[v]=Xt*A,ft[m]=pt*b,ft[f]=et,c.push(ft.x,ft.y,ft.z),ft[v]=0,ft[m]=0,ft[f]=R>0?1:-1,u.push(ft.x,ft.y,ft.z),h.push(yt/C),h.push(1-ht/I),K+=1}}for(let ht=0;ht<I;ht++)for(let pt=0;pt<C;pt++){const yt=d+pt+nt*ht,Xt=d+pt+nt*(ht+1),tt=d+(pt+1)+nt*(ht+1),lt=d+(pt+1)+nt*ht;l.push(yt,Xt,lt),l.push(Xt,tt,lt),H+=6}a.addGroup(p,H,T),p+=H,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function er(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function De(n){const t={};for(let e=0;e<n.length;e++){const i=er(n[e]);for(const s in i)t[s]=i[s]}return t}function dE(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function sm(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const pE={clone:er,merge:De};var mE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends hr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=dE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class rm extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new z,hf=new Gt,ff=new Gt;class nn extends rm{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,hf,ff),e.subVectors(ff,hf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ts=-90,As=1;class gE extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Ts,As,t,e);s.layers=this.layers,this.add(s);const r=new nn(Ts,As,t,e);r.layers=this.layers,this.add(r);const o=new nn(Ts,As,t,e);o.layers=this.layers,this.add(o);const a=new nn(Ts,As,t,e);a.layers=this.layers,this.add(a);const l=new nn(Ts,As,t,e);l.layers=this.layers,this.add(l);const c=new nn(Ts,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class om extends Ve{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Zs,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vE extends ss{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new om(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fr(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:Mi});r.uniforms.tEquirect.value=e;const o=new on(s,r),a=e.minFilter;return e.minFilter===Ki&&(e.minFilter=Rn),new gE(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const wl=new z,xE=new z,EE=new kt;class xi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=wl.subVectors(i,e).cross(xE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||EE.getNormalMatrix(t),s=this.coplanarPoint(wl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Ua,Po=new z;class am{constructor(t=new xi,e=new xi,i=new xi,s=new xi,r=new xi,o=new xi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],A=s[13],b=s[14],E=s[15];if(i[0].setComponents(l-r,d-c,m-p,E-f).normalize(),i[1].setComponents(l+r,d+c,m+p,E+f).normalize(),i[2].setComponents(l+o,d+u,m+g,E+A).normalize(),i[3].setComponents(l-o,d-u,m-g,E-A).normalize(),i[4].setComponents(l-a,d-h,m-v,E-b).normalize(),e===Qn)i[5].setComponents(l+a,d+h,m+v,E+b).normalize();else if(e===ma)i[5].setComponents(a,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lm(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function SE(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class eo extends Fn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const A=f*d-o;for(let b=0;b<c;b++){const E=b*h-r;g.push(E,-A,0),v.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<a;A++){const b=A+c*f,E=A+c*(f+1),L=A+1+c*(f+1),R=A+1+c*f;p.push(b,E,R),p.push(E,L,R)}this.setIndex(p),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(v,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.width,t.height,t.widthSegments,t.heightSegments)}}var ME=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yE=`#ifdef USE_ALPHAHASH
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
#endif`,bE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CE=`#ifdef USE_AOMAP
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
#endif`,RE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PE=`#ifdef USE_BATCHING
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
#endif`,DE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OE=`#ifdef USE_IRIDESCENCE
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
#endif`,UE=`#ifdef USE_BUMPMAP
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
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$E=`#define PI 3.141592653589793
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
} // validated`,XE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YE=`vec3 transformedNormal = objectNormal;
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
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JE="gl_FragColor = linearToOutputTexel( gl_FragColor );",QE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
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
}`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
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
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
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
#endif`,E0=`struct PhysicalMaterial {
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
}`,S0=`
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D0=`#if defined( USE_POINTS_UV )
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
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
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
#endif`,$0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oS=`float getShadowMask() {
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
}`,aS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lS=`#ifdef USE_SKINNING
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
#endif`,cS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uS=`#ifdef USE_SKINNING
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
#endif`,hS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mS=`#ifdef USE_TRANSMISSION
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
#endif`,_S=`#ifdef USE_TRANSMISSION
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
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ES=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MS=`uniform sampler2D t2D;
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`#include <common>
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
}`,CS=`#if DEPTH_PACKING == 3200
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
}`,RS=`#define DISTANCE
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
}`,PS=`#define DISTANCE
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`uniform float scale;
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
}`,NS=`uniform vec3 diffuse;
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
}`,OS=`#include <common>
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
}`,US=`uniform vec3 diffuse;
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
}`,FS=`#define LAMBERT
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
}`,BS=`#define LAMBERT
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
}`,zS=`#define MATCAP
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
}`,HS=`#define MATCAP
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
}`,VS=`#define NORMAL
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
}`,kS=`#define NORMAL
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
}`,GS=`#define PHONG
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
}`,WS=`#define PHONG
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
}`,$S=`#define STANDARD
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
}`,XS=`#define STANDARD
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
}`,YS=`#define TOON
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
}`,qS=`#define TOON
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
}`,jS=`uniform float size;
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
}`,KS=`uniform vec3 diffuse;
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
}`,ZS=`#include <common>
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
}`,JS=`uniform vec3 color;
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
}`,QS=`uniform float rotation;
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
}`,tM=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:ME,alphahash_pars_fragment:yE,alphamap_fragment:bE,alphamap_pars_fragment:TE,alphatest_fragment:AE,alphatest_pars_fragment:wE,aomap_fragment:CE,aomap_pars_fragment:RE,batching_pars_vertex:PE,batching_vertex:DE,begin_vertex:LE,beginnormal_vertex:IE,bsdfs:NE,iridescence_fragment:OE,bumpmap_pars_fragment:UE,clipping_planes_fragment:FE,clipping_planes_pars_fragment:BE,clipping_planes_pars_vertex:zE,clipping_planes_vertex:HE,color_fragment:VE,color_pars_fragment:kE,color_pars_vertex:GE,color_vertex:WE,common:$E,cube_uv_reflection_fragment:XE,defaultnormal_vertex:YE,displacementmap_pars_vertex:qE,displacementmap_vertex:jE,emissivemap_fragment:KE,emissivemap_pars_fragment:ZE,colorspace_fragment:JE,colorspace_pars_fragment:QE,envmap_fragment:t0,envmap_common_pars_fragment:e0,envmap_pars_fragment:n0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:p0,envmap_vertex:s0,fog_vertex:r0,fog_pars_vertex:o0,fog_fragment:a0,fog_pars_fragment:l0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:u0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:f0,lights_pars_begin:d0,lights_toon_fragment:m0,lights_toon_pars_fragment:_0,lights_phong_fragment:g0,lights_phong_pars_fragment:v0,lights_physical_fragment:x0,lights_physical_pars_fragment:E0,lights_fragment_begin:S0,lights_fragment_maps:M0,lights_fragment_end:y0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:T0,logdepthbuf_pars_vertex:A0,logdepthbuf_vertex:w0,map_fragment:C0,map_pars_fragment:R0,map_particle_fragment:P0,map_particle_pars_fragment:D0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:I0,morphinstance_vertex:N0,morphcolor_vertex:O0,morphnormal_vertex:U0,morphtarget_pars_vertex:F0,morphtarget_vertex:B0,normal_fragment_begin:z0,normal_fragment_maps:H0,normal_pars_fragment:V0,normal_pars_vertex:k0,normal_vertex:G0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:$0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:Y0,iridescence_pars_fragment:q0,opaque_fragment:j0,packing:K0,premultiplied_alpha_fragment:Z0,project_vertex:J0,dithering_fragment:Q0,dithering_pars_fragment:tS,roughnessmap_fragment:eS,roughnessmap_pars_fragment:nS,shadowmap_pars_fragment:iS,shadowmap_pars_vertex:sS,shadowmap_vertex:rS,shadowmask_pars_fragment:oS,skinbase_vertex:aS,skinning_pars_vertex:lS,skinning_vertex:cS,skinnormal_vertex:uS,specularmap_fragment:hS,specularmap_pars_fragment:fS,tonemapping_fragment:dS,tonemapping_pars_fragment:pS,transmission_fragment:mS,transmission_pars_fragment:_S,uv_pars_fragment:gS,uv_pars_vertex:vS,uv_vertex:xS,worldpos_vertex:ES,background_vert:SS,background_frag:MS,backgroundCube_vert:yS,backgroundCube_frag:bS,cube_vert:TS,cube_frag:AS,depth_vert:wS,depth_frag:CS,distanceRGBA_vert:RS,distanceRGBA_frag:PS,equirect_vert:DS,equirect_frag:LS,linedashed_vert:IS,linedashed_frag:NS,meshbasic_vert:OS,meshbasic_frag:US,meshlambert_vert:FS,meshlambert_frag:BS,meshmatcap_vert:zS,meshmatcap_frag:HS,meshnormal_vert:VS,meshnormal_frag:kS,meshphong_vert:GS,meshphong_frag:WS,meshphysical_vert:$S,meshphysical_frag:XS,meshtoon_vert:YS,meshtoon_frag:qS,points_vert:jS,points_frag:KS,shadow_vert:ZS,shadow_frag:JS,sprite_vert:QS,sprite_frag:tM},gt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},wn={basic:{uniforms:De([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:De([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new qt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:De([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:De([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:De([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:De([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:De([gt.points,gt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:De([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:De([gt.common,gt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:De([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:De([gt.sprite,gt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:De([gt.common,gt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:De([gt.lights,gt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};wn.physical={uniforms:De([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Do={r:0,b:0,g:0},Gi=new On,eM=new he;function nM(n,t,e,i,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?e:t).get(b)),b}function v(A){let b=!1;const E=g(A);E===null?f(a,l):E&&E.isColor&&(f(E,1),b=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,b){const E=g(b);E&&(E.isCubeTexture||E.mapping===Na)?(u===void 0&&(u=new on(new fr(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:er(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Gi.copy(b.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eM.makeRotationFromEuler(Gi)),u.material.toneMapped=jt.getTransfer(E.colorSpace)!==se,(h!==E||d!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new on(new eo(2,2),new Ai({name:"BackgroundMaterial",uniforms:er(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=jt.getTransfer(E.colorSpace)!==se,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,b){A.getRGB(Do,sm(n)),i.buffers.color.setClear(Do.r,Do.g,Do.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(A,b=1){a.set(A),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(a,l)},render:v,addToRenderList:m}}function iM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,P,Z,k,et){let nt=!1;const X=h(k,Z,P);r!==X&&(r=X,c(r.object)),nt=p(M,k,Z,et),nt&&g(M,k,Z,et),et!==null&&t.update(et,n.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,E(M,P,Z,k),et!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,P,Z){const k=Z.wireframe===!0;let et=i[M.id];et===void 0&&(et={},i[M.id]=et);let nt=et[P.id];nt===void 0&&(nt={},et[P.id]=nt);let X=nt[k];return X===void 0&&(X=d(l()),nt[k]=X),X}function d(M){const P=[],Z=[],k=[];for(let et=0;et<e;et++)P[et]=0,Z[et]=0,k[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Z,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,P,Z,k){const et=r.attributes,nt=P.attributes;let X=0;const K=Z.getAttributes();for(const H in K)if(K[H].location>=0){const ht=et[H];let pt=nt[H];if(pt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),ht===void 0||ht.attribute!==pt||pt&&ht.data!==pt.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(M,P,Z,k){const et={},nt=P.attributes;let X=0;const K=Z.getAttributes();for(const H in K)if(K[H].location>=0){let ht=nt[H];ht===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const pt={};pt.attribute=ht,ht&&ht.data&&(pt.data=ht.data),et[H]=pt,X++}r.attributes=et,r.attributesNum=X,r.index=k}function v(){const M=r.newAttributes;for(let P=0,Z=M.length;P<Z;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const Z=r.newAttributes,k=r.enabledAttributes,et=r.attributeDivisors;Z[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),et[M]!==P&&(n.vertexAttribDivisor(M,P),et[M]=P)}function A(){const M=r.newAttributes,P=r.enabledAttributes;for(let Z=0,k=P.length;Z<k;Z++)P[Z]!==M[Z]&&(n.disableVertexAttribArray(Z),P[Z]=0)}function b(M,P,Z,k,et,nt,X){X===!0?n.vertexAttribIPointer(M,P,Z,et,nt):n.vertexAttribPointer(M,P,Z,k,et,nt)}function E(M,P,Z,k){v();const et=k.attributes,nt=Z.getAttributes(),X=P.defaultAttributeValues;for(const K in nt){const H=nt[K];if(H.location>=0){let ft=et[K];if(ft===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),ft!==void 0){const ht=ft.normalized,pt=ft.itemSize,yt=t.get(ft);if(yt===void 0)continue;const Xt=yt.buffer,tt=yt.type,lt=yt.bytesPerElement,St=tt===n.INT||tt===n.UNSIGNED_INT||ft.gpuType===wu;if(ft.isInterleavedBufferAttribute){const mt=ft.data,At=mt.stride,Nt=ft.offset;if(mt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<H.locationSize;Ft++)f(H.location+Ft,mt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ft=0;Ft<H.locationSize;Ft++)m(H.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let Ft=0;Ft<H.locationSize;Ft++)b(H.location+Ft,pt/H.locationSize,tt,ht,At*lt,(Nt+pt/H.locationSize*Ft)*lt,St)}else{if(ft.isInstancedBufferAttribute){for(let mt=0;mt<H.locationSize;mt++)f(H.location+mt,ft.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let mt=0;mt<H.locationSize;mt++)m(H.location+mt);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let mt=0;mt<H.locationSize;mt++)b(H.location+mt,pt/H.locationSize,tt,ht,pt*lt,pt/H.locationSize*mt*lt,St)}}else if(X!==void 0){const ht=X[K];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(H.location,ht);break;case 3:n.vertexAttrib3fv(H.location,ht);break;case 4:n.vertexAttrib4fv(H.location,ht);break;default:n.vertexAttrib1fv(H.location,ht)}}}}A()}function L(){I();for(const M in i){const P=i[M];for(const Z in P){const k=P[Z];for(const et in k)u(k[et].object),delete k[et];delete P[Z]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const Z in P){const k=P[Z];for(const et in k)u(k[et].object),delete k[et];delete P[Z]}delete i[M.id]}function C(M){for(const P in i){const Z=i[P];if(Z[M.id]===void 0)continue;const k=Z[M.id];for(const et in k)u(k[et].object),delete k[et];delete Z[M.id]}}function I(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function sM(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==_n&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ii&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Jn&&!I)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:L,maxSamples:R}}function oM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new xi,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,b=A*4;let E=f.clippingState||null;l.value=E,E=u(g,d,b,p);for(let L=0;L!==b;++L)E[L]=e[L];f.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,E=p;b!==v;++b,E+=4)o.copy(h[b]).applyMatrix4(A,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function aM(n){let t=new WeakMap;function e(o,a){return a===Ec?o.mapping=Zs:a===Sc&&(o.mapping=Js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ec||a===Sc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vE(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class lM extends rm{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bs=4,df=[.125,.215,.35,.446,.526,.582],qi=20,Cl=new lM,pf=new qt;let Rl=null,Pl=0,Dl=0,Ll=!1;const Xi=(1+Math.sqrt(5))/2,ws=1/Xi,mf=[new z(-Xi,ws,0),new z(Xi,ws,0),new z(-ws,0,Xi),new z(ws,0,Xi),new z(0,Xi,-ws),new z(0,Xi,ws),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class _f{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Rl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rl,Pl,Dl),this._renderer.xr.enabled=Ll,t.scissorTest=!1,Lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zs||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Qr,format:_n,colorSpace:cr,depthBuffer:!1},s=gf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cM(r)),this._blurMaterial=uM(r,t,e)}return s}_compileMaterial(t){const e=new on(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,i,s){const a=new nn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(pf),u.toneMapping=yi,u.autoClear=!1;const p=new ga({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new on(new fr,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(pf),v=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):A===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const b=this._cubeSize;Lo(s,A*b,f>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Zs||t.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Lo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Cl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=mf[(s-r-1)%mf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new on(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const f=[];let A=0;for(let C=0;C<qi;++C){const I=C/v,T=Math.exp(-I*I/2);f.push(T),C===0?A+=T:C<m&&(A+=2*T)}for(let C=0;C<f.length;C++)f[C]=f[C]/A;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const E=this._sizeLods[s],L=3*E*(s>b-Bs?s-b+Bs:0),R=4*(this._cubeSize-E);Lo(e,L,R,3*E,2*E),l.setRenderTarget(e),l.render(h,Cl)}}function cM(n){const t=[],e=[],i=[];let s=n;const r=n-Bs+1+df.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Bs?l=df[o-n+Bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,A=new Float32Array(v*g*p),b=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,I=R>2?0:-1,T=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];A.set(T,v*g*R),b.set(d,m*g*R);const M=[R,R,R,R,R,R];E.set(M,f*g*R)}const L=new Fn;L.setAttribute("position",new Dn(A,v)),L.setAttribute("uv",new Dn(b,m)),L.setAttribute("faceIndex",new Dn(E,f)),t.push(L),s>Bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function gf(n,t,e){const i=new ss(n,t,e);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function uM(n,t,e){const i=new Float32Array(qi),s=new z(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function vf(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function xf(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ou(){return`

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
	`}function hM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ec||l===Sc,u=l===Zs||l===Js;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new _f(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new _f(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function fM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dM(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let b=0,E=A.length;b<E;b+=3){const L=A[b+0],R=A[b+1],C=A[b+2];d.push(L,R,R,C,C,L)}}else if(g!==void 0){const A=g.array;v=g.version;for(let b=0,E=A.length/3-1;b<E;b+=3){const L=b+0,R=b+1,C=b+2;d.push(L,R,R,C,C,L)}}else return;const m=new(Jp(d)?im:nm)(d,1);m.version=v;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function pM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function h(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let f=0;for(let A=0;A<g;A++)f+=p[A]*v[A];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function mM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function _M(n,t,e){const i=new WeakMap,s=new pe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let L=a.attributes.position.count*E,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const C=new Float32Array(L*R*4*h),I=new tm(C,L,R,h);I.type=Jn,I.needsUpdate=!0;const T=E*4;for(let P=0;P<h;P++){const Z=f[P],k=A[P],et=b[P],nt=L*R*4*P;for(let X=0;X<Z.count;X++){const K=X*T;g===!0&&(s.fromBufferAttribute(Z,X),C[nt+K+0]=s.x,C[nt+K+1]=s.y,C[nt+K+2]=s.z,C[nt+K+3]=0),v===!0&&(s.fromBufferAttribute(k,X),C[nt+K+4]=s.x,C[nt+K+5]=s.y,C[nt+K+6]=s.z,C[nt+K+7]=0),m===!0&&(s.fromBufferAttribute(et,X),C[nt+K+8]=s.x,C[nt+K+9]=s.y,C[nt+K+10]=s.z,C[nt+K+11]=et.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new Gt(L,R)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function gM(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class cm extends Ve{constructor(t,e,i,s,r,o,a,l,c,u=Xs){if(u!==Xs&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xs&&(i=is),i===void 0&&u===tr&&(i=Qs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const um=new Ve,Ef=new cm(1,1),hm=new tm,fm=new nE,dm=new om,Sf=[],Mf=[],yf=new Float32Array(16),bf=new Float32Array(9),Tf=new Float32Array(4);function dr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Sf[s];if(r===void 0&&(r=new Float32Array(s),Sf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ba(n,t){let e=Mf[t];e===void 0&&(e=new Int32Array(t),Mf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function xM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),xe(e,t)}}function EM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),xe(e,t)}}function SM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),xe(e,t)}}function MM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;Tf.set(i),n.uniformMatrix2fv(this.addr,!1,Tf),xe(e,i)}}function yM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;bf.set(i),n.uniformMatrix3fv(this.addr,!1,bf),xe(e,i)}}function bM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;yf.set(i),n.uniformMatrix4fv(this.addr,!1,yf),xe(e,i)}}function TM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function AM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),xe(e,t)}}function wM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),xe(e,t)}}function CM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),xe(e,t)}}function RM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function PM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),xe(e,t)}}function DM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),xe(e,t)}}function LM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),xe(e,t)}}function IM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ef.compareFunction=Zp,r=Ef):r=um,e.setTexture2D(t||r,s)}function NM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||fm,s)}function OM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||dm,s)}function UM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||hm,s)}function FM(n){switch(n){case 5126:return vM;case 35664:return xM;case 35665:return EM;case 35666:return SM;case 35674:return MM;case 35675:return yM;case 35676:return bM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return wM;case 35669:case 35673:return CM;case 5125:return RM;case 36294:return PM;case 36295:return DM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return UM}}function BM(n,t){n.uniform1fv(this.addr,t)}function zM(n,t){const e=dr(t,this.size,2);n.uniform2fv(this.addr,e)}function HM(n,t){const e=dr(t,this.size,3);n.uniform3fv(this.addr,e)}function VM(n,t){const e=dr(t,this.size,4);n.uniform4fv(this.addr,e)}function kM(n,t){const e=dr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function GM(n,t){const e=dr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function WM(n,t){const e=dr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $M(n,t){n.uniform1iv(this.addr,t)}function XM(n,t){n.uniform2iv(this.addr,t)}function YM(n,t){n.uniform3iv(this.addr,t)}function qM(n,t){n.uniform4iv(this.addr,t)}function jM(n,t){n.uniform1uiv(this.addr,t)}function KM(n,t){n.uniform2uiv(this.addr,t)}function ZM(n,t){n.uniform3uiv(this.addr,t)}function JM(n,t){n.uniform4uiv(this.addr,t)}function QM(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||um,r[o])}function ty(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||fm,r[o])}function ey(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||dm,r[o])}function ny(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hm,r[o])}function iy(n){switch(n){case 5126:return BM;case 35664:return zM;case 35665:return HM;case 35666:return VM;case 35674:return kM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return $M;case 35667:case 35671:return XM;case 35668:case 35672:return YM;case 35669:case 35673:return qM;case 5125:return jM;case 36294:return KM;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ny}}class sy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=FM(e.type)}}class ry{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iy(e.type)}}class oy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Il=/(\w+)(\])?(\[|\.)?/g;function Af(n,t){n.seq.push(t),n.map[t.id]=t}function ay(n,t,e){const i=n.name,s=i.length;for(Il.lastIndex=0;;){const r=Il.exec(i),o=Il.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Af(e,c===void 0?new sy(a,n,t):new ry(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new oy(a),Af(e,h)),e=h}}}class sa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ay(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function wf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const ly=37297;let cy=0;function uy(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Cf=new kt;function hy(n){jt._getMatrix(Cf,jt.workingColorSpace,n);const t=`mat3( ${Cf.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case Oa:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Rf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+uy(n.getShaderSource(t),o)}else return s}function fy(n,t){const e=hy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dy(n,t){let e;switch(t){case dx:e="Linear";break;case px:e="Reinhard";break;case mx:e="Cineon";break;case _x:e="ACESFilmic";break;case vx:e="AgX";break;case xx:e="Neutral";break;case gx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Io=new z;function py(){jt.getLuminanceCoefficients(Io);const n=Io.x.toFixed(4),t=Io.y.toFixed(4),e=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function my(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function _y(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gy(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Dr(n){return n!==""}function Pf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Df(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(n){return n.replace(vy,Ey)}const xy=new Map;function Ey(n,t){let e=$t[t];if(e===void 0){const i=xy.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Kc(e)}const Sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(n){return n.replace(Sy,My)}function My(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function If(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yy(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xv?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function by(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zs:case Js:t="ENVMAP_TYPE_CUBE";break;case Na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ty(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Js:t="ENVMAP_MODE_REFRACTION";break}return t}function Ay(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bp:t="ENVMAP_BLENDING_MULTIPLY";break;case hx:t="ENVMAP_BLENDING_MIX";break;case fx:t="ENVMAP_BLENDING_ADD";break}return t}function wy(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Cy(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=yy(e),c=by(e),u=Ty(e),h=Ay(e),d=wy(e),p=my(e),g=_y(r),v=s.createProgram();let m,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),f.length>0&&(f+=`
`)):(m=[If(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),f=[If(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?$t.tonemapping_pars_fragment:"",e.toneMapping!==yi?dy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,fy("linearToOutputTexel",e.outputColorSpace),py(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),o=Kc(o),o=Pf(o,e),o=Df(o,e),a=Kc(a),a=Pf(a,e),a=Df(a,e),o=Lf(o),a=Lf(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=A+m+o,E=A+f+a,L=wf(s,s.VERTEX_SHADER,b),R=wf(s,s.FRAGMENT_SHADER,E);s.attachShader(v,L),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(n.debug.checkShaderErrors){const Z=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(L).trim(),et=s.getShaderInfoLog(R).trim();let nt=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,L,R);else{const K=Rf(s,L,"vertex"),H=Rf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+K+`
`+H)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(k===""||et==="")&&(X=!1);X&&(P.diagnostics={runnable:nt,programLog:Z,vertexShader:{log:k,prefix:m},fragmentShader:{log:et,prefix:f}})}s.deleteShader(L),s.deleteShader(R),I=new sa(s,v),T=gy(s,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,ly)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cy++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=R,this}let Ry=0;class Py{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Dy(t),e.set(t,i)),i}}class Dy{constructor(t){this.id=Ry++,this.code=t,this.usedTimes=0}}function Ly(n,t,e,i,s,r,o){const a=new Nu,l=new Py,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,P,Z,k){const et=Z.fog,nt=k.geometry,X=T.isMeshStandardMaterial?Z.environment:null,K=(T.isMeshStandardMaterial?e:t).get(T.envMap||X),H=K&&K.mapping===Na?K.image.height:null,ft=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ht=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,pt=ht!==void 0?ht.length:0;let yt=0;nt.morphAttributes.position!==void 0&&(yt=1),nt.morphAttributes.normal!==void 0&&(yt=2),nt.morphAttributes.color!==void 0&&(yt=3);let Xt,tt,lt,St;if(ft){const ie=wn[ft];Xt=ie.vertexShader,tt=ie.fragmentShader}else Xt=T.vertexShader,tt=T.fragmentShader,l.update(T),lt=l.getVertexShaderID(T),St=l.getFragmentShaderID(T);const mt=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),Nt=k.isInstancedMesh===!0,Ft=k.isBatchedMesh===!0,Zt=!!T.map,Yt=!!T.matcap,w=!!K,x=!!T.aoMap,Y=!!T.lightMap,J=!!T.bumpMap,q=!!T.normalMap,G=!!T.displacementMap,rt=!!T.emissiveMap,j=!!T.metalnessMap,S=!!T.roughnessMap,_=T.anisotropy>0,D=T.clearcoat>0,O=T.dispersion>0,V=T.iridescence>0,B=T.sheen>0,ct=T.transmission>0,ot=_&&!!T.anisotropyMap,ut=D&&!!T.clearcoatMap,Ut=D&&!!T.clearcoatNormalMap,st=D&&!!T.clearcoatRoughnessMap,_t=V&&!!T.iridescenceMap,Tt=V&&!!T.iridescenceThicknessMap,Lt=B&&!!T.sheenColorMap,bt=B&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,It=!!T.specularColorMap,ne=!!T.specularIntensityMap,N=ct&&!!T.transmissionMap,vt=ct&&!!T.thicknessMap,Q=!!T.gradientMap,it=!!T.alphaMap,Mt=T.alphaTest>0,xt=!!T.alphaHash,Ht=!!T.extensions;let fe=yi;T.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(fe=n.toneMapping);const ye={shaderID:ft,shaderType:T.type,shaderName:T.name,vertexShader:Xt,fragmentShader:tt,defines:T.defines,customVertexShaderID:lt,customFragmentShaderID:St,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&k._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&k.instanceColor!==null,instancingMorph:Nt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:cr,alphaToCoverage:!!T.alphaToCoverage,map:Zt,matcap:Yt,envMap:w,envMapMode:w&&K.mapping,envMapCubeUVHeight:H,aoMap:x,lightMap:Y,bumpMap:J,normalMap:q,displacementMap:d&&G,emissiveMap:rt,normalMapObjectSpace:q&&T.normalMapType===yx,normalMapTangentSpace:q&&T.normalMapType===Kp,metalnessMap:j,roughnessMap:S,anisotropy:_,anisotropyMap:ot,clearcoat:D,clearcoatMap:ut,clearcoatNormalMap:Ut,clearcoatRoughnessMap:st,dispersion:O,iridescence:V,iridescenceMap:_t,iridescenceThicknessMap:Tt,sheen:B,sheenColorMap:Lt,sheenRoughnessMap:bt,specularMap:Ot,specularColorMap:It,specularIntensityMap:ne,transmission:ct,transmissionMap:N,thicknessMap:vt,gradientMap:Q,opaque:T.transparent===!1&&T.blending===$s&&T.alphaToCoverage===!1,alphaMap:it,alphaTest:Mt,alphaHash:xt,combine:T.combine,mapUv:Zt&&v(T.map.channel),aoMapUv:x&&v(T.aoMap.channel),lightMapUv:Y&&v(T.lightMap.channel),bumpMapUv:J&&v(T.bumpMap.channel),normalMapUv:q&&v(T.normalMap.channel),displacementMapUv:G&&v(T.displacementMap.channel),emissiveMapUv:rt&&v(T.emissiveMap.channel),metalnessMapUv:j&&v(T.metalnessMap.channel),roughnessMapUv:S&&v(T.roughnessMap.channel),anisotropyMapUv:ot&&v(T.anisotropyMap.channel),clearcoatMapUv:ut&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:bt&&v(T.sheenRoughnessMap.channel),specularMapUv:Ot&&v(T.specularMap.channel),specularColorMapUv:It&&v(T.specularColorMap.channel),specularIntensityMapUv:ne&&v(T.specularIntensityMap.channel),transmissionMapUv:N&&v(T.transmissionMap.channel),thicknessMapUv:vt&&v(T.thicknessMap.channel),alphaMapUv:it&&v(T.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(q||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!nt.attributes.uv&&(Zt||it),fog:!!et,useFog:T.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:At,skinning:k.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:yt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:Zt&&T.map.isVideoTexture===!0&&jt.getTransfer(T.map.colorSpace)===se,decodeVideoTextureEmissive:rt&&T.emissiveMap.isVideoTexture===!0&&jt.getTransfer(T.emissiveMap.colorSpace)===se,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Cn,flipSided:T.side===He,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ht&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&T.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function f(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)M.push(P),M.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(A(M,T),b(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function A(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function b(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function E(T){const M=g[T.type];let P;if(M){const Z=wn[M];P=pE.clone(Z.uniforms)}else P=T.uniforms;return P}function L(T,M){let P;for(let Z=0,k=u.length;Z<k;Z++){const et=u[Z];if(et.cacheKey===M){P=et,++P.usedTimes;break}}return P===void 0&&(P=new Cy(n,M,T,r),u.push(P)),P}function R(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function C(T){l.remove(T)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:I}}function Iy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ny(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Nf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Of(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,p,g,v,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),t++,f}function a(h,d,p,g,v,m){const f=o(h,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,g,v,m){const f=o(h,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||Ny),i.length>1&&i.sort(d||Nf),s.length>1&&s.sort(d||Nf)}function u(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Oy(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Of,n.set(i,[o])):s>=r.length?(o=new Of,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Uy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new qt};break;case"SpotLight":e={position:new z,direction:new z,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function Fy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let By=0;function zy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Hy(n){const t=new Uy,e=Fy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new he,o=new he;function a(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,A=0,b=0,E=0,L=0,R=0,C=0;c.sort(zy);for(let T=0,M=c.length;T<M;T++){const P=c[T],Z=P.color,k=P.intensity,et=P.distance,nt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=Z.r*k,h+=Z.g*k,d+=Z.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],k);C++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=nt,i.directionalShadowMatrix[p]=P.shadow.matrix,A++}i.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(Z).multiplyScalar(k),X.distance=et,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[v]=X;const K=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,K.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[v]=K.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=nt,E++}v++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(Z).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const K=P.shadow,H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=nt,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==A||I.numPointShadows!==b||I.numSpotShadows!==E||I.numSpotMaps!==L||I.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=A,I.numPointShadows=b,I.numSpotShadows=E,I.numSpotMaps=L,I.numLightProbes=C,i.version=By++)}function l(c,u){let h=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){const b=c[f];if(b.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Uf(n){const t=new Hy(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Vy(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Uf(n),t.set(s,[a])):r>=o.length?(a=new Uf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class ky extends hr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gy extends hr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$y=`uniform sampler2D shadow_pass;
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
}`;function Xy(n,t,e){let i=new am;const s=new Gt,r=new Gt,o=new pe,a=new ky({depthPacking:Mx}),l=new Gy,c={},u=e.maxTextureSize,h={[Ti]:He,[He]:Ti,[Cn]:Cn},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Wy,fragmentShader:$y}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new on(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fp;let f=this.type;this.render=function(R,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const T=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(Mi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const k=f!==Xn&&this.type===Xn,et=f===Xn&&this.type!==Xn;for(let nt=0,X=R.length;nt<X;nt++){const K=R[nt],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ft=H.getFrameExtents();if(s.multiply(ft),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ft.x),s.x=r.x*ft.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ft.y),s.y=r.y*ft.y,H.mapSize.y=r.y)),H.map===null||k===!0||et===!0){const pt=this.type!==Xn?{minFilter:En,magFilter:En}:{};H.map!==null&&H.map.dispose(),H.map=new ss(s.x,s.y,pt),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ht=H.getViewportCount();for(let pt=0;pt<ht;pt++){const yt=H.getViewport(pt);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),Z.viewport(o),H.updateMatrices(K,pt),i=H.getFrustum(),E(C,I,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Xn&&A(H,I),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,P)};function A(R,C){const I=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ss(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,I,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,I,p,v,null)}function b(R,C,I,T){let M=null;const P=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Z=M.uuid,k=C.uuid;let et=c[Z];et===void 0&&(et={},c[Z]=et);let nt=et[k];nt===void 0&&(nt=M.clone(),et[k]=nt,C.addEventListener("dispose",L)),M=nt}if(M.visible=C.visible,M.wireframe=C.wireframe,T===Xn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Z=n.properties.get(M);Z.light=I}return M}function E(R,C,I,T,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Xn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const k=t.update(R),et=R.material;if(Array.isArray(et)){const nt=k.groups;for(let X=0,K=nt.length;X<K;X++){const H=nt[X],ft=et[H.materialIndex];if(ft&&ft.visible){const ht=b(R,ft,T,M);R.onBeforeShadow(n,R,C,I,k,ht,H),n.renderBufferDirect(I,null,k,ht,R,H),R.onAfterShadow(n,R,C,I,k,ht,H)}}}else if(et.visible){const nt=b(R,et,T,M);R.onBeforeShadow(n,R,C,I,k,nt,null),n.renderBufferDirect(I,null,k,nt,R,null),R.onAfterShadow(n,R,C,I,k,nt,null)}}const Z=R.children;for(let k=0,et=Z.length;k<et;k++)E(Z[k],C,I,T,M)}function L(R){R.target.removeEventListener("dispose",L);for(const I in c){const T=c[I],M=R.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const Yy={[dc]:pc,[mc]:vc,[_c]:xc,[Ks]:gc,[pc]:dc,[vc]:mc,[xc]:_c,[gc]:Ks};function qy(n,t){function e(){let N=!1;const vt=new pe;let Q=null;const it=new pe(0,0,0,0);return{setMask:function(Mt){Q!==Mt&&!N&&(n.colorMask(Mt,Mt,Mt,Mt),Q=Mt)},setLocked:function(Mt){N=Mt},setClear:function(Mt,xt,Ht,fe,ye){ye===!0&&(Mt*=fe,xt*=fe,Ht*=fe),vt.set(Mt,xt,Ht,fe),it.equals(vt)===!1&&(n.clearColor(Mt,xt,Ht,fe),it.copy(vt))},reset:function(){N=!1,Q=null,it.set(-1,0,0,0)}}}function i(){let N=!1,vt=!1,Q=null,it=null,Mt=null;return{setReversed:function(xt){if(vt!==xt){const Ht=t.get("EXT_clip_control");vt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const fe=Mt;Mt=null,this.setClear(fe)}vt=xt},getReversed:function(){return vt},setTest:function(xt){xt?mt(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(xt){Q!==xt&&!N&&(n.depthMask(xt),Q=xt)},setFunc:function(xt){if(vt&&(xt=Yy[xt]),it!==xt){switch(xt){case dc:n.depthFunc(n.NEVER);break;case pc:n.depthFunc(n.ALWAYS);break;case mc:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case _c:n.depthFunc(n.EQUAL);break;case gc:n.depthFunc(n.GEQUAL);break;case vc:n.depthFunc(n.GREATER);break;case xc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}it=xt}},setLocked:function(xt){N=xt},setClear:function(xt){Mt!==xt&&(vt&&(xt=1-xt),n.clearDepth(xt),Mt=xt)},reset:function(){N=!1,Q=null,it=null,Mt=null,vt=!1}}}function s(){let N=!1,vt=null,Q=null,it=null,Mt=null,xt=null,Ht=null,fe=null,ye=null;return{setTest:function(ie){N||(ie?mt(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(ie){vt!==ie&&!N&&(n.stencilMask(ie),vt=ie)},setFunc:function(ie,hn,Bn){(Q!==ie||it!==hn||Mt!==Bn)&&(n.stencilFunc(ie,hn,Bn),Q=ie,it=hn,Mt=Bn)},setOp:function(ie,hn,Bn){(xt!==ie||Ht!==hn||fe!==Bn)&&(n.stencilOp(ie,hn,Bn),xt=ie,Ht=hn,fe=Bn)},setLocked:function(ie){N=ie},setClear:function(ie){ye!==ie&&(n.clearStencil(ie),ye=ie)},reset:function(){N=!1,vt=null,Q=null,it=null,Mt=null,xt=null,Ht=null,fe=null,ye=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,A=null,b=null,E=null,L=null,R=null,C=new qt(0,0,0),I=0,T=!1,M=null,P=null,Z=null,k=null,et=null;const nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=K>=2);let ft=null,ht={};const pt=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),Xt=new pe().fromArray(pt),tt=new pe().fromArray(yt);function lt(N,vt,Q,it){const Mt=new Uint8Array(4),xt=n.createTexture();n.bindTexture(N,xt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<Q;Ht++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,it,0,n.RGBA,n.UNSIGNED_BYTE,Mt):n.texImage2D(vt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Mt);return xt}const St={};St[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(n.DEPTH_TEST),o.setFunc(Ks),J(!1),q(Bh),mt(n.CULL_FACE),x(Mi);function mt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function At(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Nt(N,vt){return h[N]!==vt?(n.bindFramebuffer(N,vt),h[N]=vt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function Ft(N,vt){let Q=p,it=!1;if(N){Q=d.get(vt),Q===void 0&&(Q=[],d.set(vt,Q));const Mt=N.textures;if(Q.length!==Mt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,Ht=Mt.length;xt<Ht;xt++)Q[xt]=n.COLOR_ATTACHMENT0+xt;Q.length=Mt.length,it=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,it=!0);it&&n.drawBuffers(Q)}function Zt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const Yt={[Yi]:n.FUNC_ADD,[qv]:n.FUNC_SUBTRACT,[jv]:n.FUNC_REVERSE_SUBTRACT};Yt[Kv]=n.MIN,Yt[Zv]=n.MAX;const w={[Jv]:n.ZERO,[Qv]:n.ONE,[tx]:n.SRC_COLOR,[hc]:n.SRC_ALPHA,[ox]:n.SRC_ALPHA_SATURATE,[sx]:n.DST_COLOR,[nx]:n.DST_ALPHA,[ex]:n.ONE_MINUS_SRC_COLOR,[fc]:n.ONE_MINUS_SRC_ALPHA,[rx]:n.ONE_MINUS_DST_COLOR,[ix]:n.ONE_MINUS_DST_ALPHA,[ax]:n.CONSTANT_COLOR,[lx]:n.ONE_MINUS_CONSTANT_COLOR,[cx]:n.CONSTANT_ALPHA,[ux]:n.ONE_MINUS_CONSTANT_ALPHA};function x(N,vt,Q,it,Mt,xt,Ht,fe,ye,ie){if(N===Mi){v===!0&&(At(n.BLEND),v=!1);return}if(v===!1&&(mt(n.BLEND),v=!0),N!==Yv){if(N!==m||ie!==T){if((f!==Yi||E!==Yi)&&(n.blendEquation(n.FUNC_ADD),f=Yi,E=Yi),ie)switch(N){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zh:n.blendFunc(n.ONE,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,b=null,L=null,R=null,C.set(0,0,0),I=0,m=N,T=ie}return}Mt=Mt||vt,xt=xt||Q,Ht=Ht||it,(vt!==f||Mt!==E)&&(n.blendEquationSeparate(Yt[vt],Yt[Mt]),f=vt,E=Mt),(Q!==A||it!==b||xt!==L||Ht!==R)&&(n.blendFuncSeparate(w[Q],w[it],w[xt],w[Ht]),A=Q,b=it,L=xt,R=Ht),(fe.equals(C)===!1||ye!==I)&&(n.blendColor(fe.r,fe.g,fe.b,ye),C.copy(fe),I=ye),m=N,T=!1}function Y(N,vt){N.side===Cn?At(n.CULL_FACE):mt(n.CULL_FACE);let Q=N.side===He;vt&&(Q=!Q),J(Q),N.blending===$s&&N.transparent===!1?x(Mi):x(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const it=N.stencilWrite;a.setTest(it),it&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?mt(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function q(N){N!==Wv?(mt(n.CULL_FACE),N!==P&&(N===Bh?n.cullFace(n.BACK):N===$v?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),P=N}function G(N){N!==Z&&(X&&n.lineWidth(N),Z=N)}function rt(N,vt,Q){N?(mt(n.POLYGON_OFFSET_FILL),(k!==vt||et!==Q)&&(n.polygonOffset(vt,Q),k=vt,et=Q)):At(n.POLYGON_OFFSET_FILL)}function j(N){N?mt(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function S(N){N===void 0&&(N=n.TEXTURE0+nt-1),ft!==N&&(n.activeTexture(N),ft=N)}function _(N,vt,Q){Q===void 0&&(ft===null?Q=n.TEXTURE0+nt-1:Q=ft);let it=ht[Q];it===void 0&&(it={type:void 0,texture:void 0},ht[Q]=it),(it.type!==N||it.texture!==vt)&&(ft!==Q&&(n.activeTexture(Q),ft=Q),n.bindTexture(N,vt||St[N]),it.type=N,it.texture=vt)}function D(){const N=ht[ft];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(N){Xt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Xt.copy(N))}function bt(N){tt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),tt.copy(N))}function Ot(N,vt){let Q=c.get(vt);Q===void 0&&(Q=new WeakMap,c.set(vt,Q));let it=Q.get(N);it===void 0&&(it=n.getUniformBlockIndex(vt,N.name),Q.set(N,it))}function It(N,vt){const it=c.get(vt).get(N);l.get(vt)!==it&&(n.uniformBlockBinding(vt,it,N.__bindingPointIndex),l.set(vt,it))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ft=null,ht={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,A=null,b=null,E=null,L=null,R=null,C=new qt(0,0,0),I=0,T=!1,M=null,P=null,Z=null,k=null,et=null,Xt.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:At,bindFramebuffer:Nt,drawBuffers:Ft,useProgram:Zt,setBlending:x,setMaterial:Y,setFlipSided:J,setCullFace:q,setLineWidth:G,setPolygonOffset:rt,setScissorTest:j,activeTexture:S,bindTexture:_,unbindTexture:D,compressedTexImage2D:O,compressedTexImage3D:V,texImage2D:_t,texImage3D:Tt,updateUBOMapping:Ot,uniformBlockBinding:It,texStorage2D:Ut,texStorage3D:st,texSubImage2D:B,texSubImage3D:ct,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:Lt,viewport:bt,reset:ne}}function Ff(n,t,e,i){const s=jy(i);switch(e){case Gp:return n*t;case $p:return n*t;case Xp:return n*t*2;case Yp:return n*t/s.components*s.byteLength;case Pu:return n*t/s.components*s.byteLength;case qp:return n*t*2/s.components*s.byteLength;case Du:return n*t*2/s.components*s.byteLength;case Wp:return n*t*3/s.components*s.byteLength;case _n:return n*t*4/s.components*s.byteLength;case Lu:return n*t*4/s.components*s.byteLength;case Qo:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tc:case wc:return Math.max(n,16)*Math.max(t,8)/4;case bc:case Ac:return Math.max(n,8)*Math.max(t,8)/2;case Cc:case Rc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ia:case $c:case Xc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case jp:case Yc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case qc:case jc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jy(n){switch(n){case ii:case Hp:return{byteLength:1,components:1};case qr:case Vp:case Qr:return{byteLength:2,components:1};case Cu:case Ru:return{byteLength:2,components:4};case is:case wu:case Jn:return{byteLength:4,components:1};case kp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Ky(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):_a("canvas")}function v(S,_,D){let O=1;const V=j(S);if((V.width>D||V.height>D)&&(O=D/Math.max(V.width,V.height)),O<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const B=Math.floor(O*V.width),ct=Math.floor(O*V.height);h===void 0&&(h=g(B,ct));const ot=_?g(B,ct):h;return ot.width=B,ot.height=ct,ot.getContext("2d").drawImage(S,0,0,B,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+B+"x"+ct+")."),ot}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),S;return S}function m(S){return S.generateMipmaps}function f(S){n.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(S,_,D,O,V=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let B=_;if(_===n.RED&&(D===n.FLOAT&&(B=n.R32F),D===n.HALF_FLOAT&&(B=n.R16F),D===n.UNSIGNED_BYTE&&(B=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(B=n.R8UI),D===n.UNSIGNED_SHORT&&(B=n.R16UI),D===n.UNSIGNED_INT&&(B=n.R32UI),D===n.BYTE&&(B=n.R8I),D===n.SHORT&&(B=n.R16I),D===n.INT&&(B=n.R32I)),_===n.RG&&(D===n.FLOAT&&(B=n.RG32F),D===n.HALF_FLOAT&&(B=n.RG16F),D===n.UNSIGNED_BYTE&&(B=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(B=n.RG8UI),D===n.UNSIGNED_SHORT&&(B=n.RG16UI),D===n.UNSIGNED_INT&&(B=n.RG32UI),D===n.BYTE&&(B=n.RG8I),D===n.SHORT&&(B=n.RG16I),D===n.INT&&(B=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(B=n.RGB8UI),D===n.UNSIGNED_SHORT&&(B=n.RGB16UI),D===n.UNSIGNED_INT&&(B=n.RGB32UI),D===n.BYTE&&(B=n.RGB8I),D===n.SHORT&&(B=n.RGB16I),D===n.INT&&(B=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(B=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(B=n.RGBA16UI),D===n.UNSIGNED_INT&&(B=n.RGBA32UI),D===n.BYTE&&(B=n.RGBA8I),D===n.SHORT&&(B=n.RGBA16I),D===n.INT&&(B=n.RGBA32I)),_===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(B=n.RGB9_E5),_===n.RGBA){const ct=V?Oa:jt.getTransfer(O);D===n.FLOAT&&(B=n.RGBA32F),D===n.HALF_FLOAT&&(B=n.RGBA16F),D===n.UNSIGNED_BYTE&&(B=ct===se?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(B=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(B=n.RGB5_A1)}return(B===n.R16F||B===n.R32F||B===n.RG16F||B===n.RG32F||B===n.RGBA16F||B===n.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function E(S,_){let D;return S?_===null||_===is||_===Qs?D=n.DEPTH24_STENCIL8:_===Jn?D=n.DEPTH32F_STENCIL8:_===qr&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===is||_===Qs?D=n.DEPTH_COMPONENT24:_===Jn?D=n.DEPTH_COMPONENT32F:_===qr&&(D=n.DEPTH_COMPONENT16),D}function L(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==En&&S.minFilter!==Rn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){const _=S.target;_.removeEventListener("dispose",R),I(_),_.isVideoTexture&&u.delete(_)}function C(S){const _=S.target;_.removeEventListener("dispose",C),M(_)}function I(S){const _=i.get(S);if(_.__webglInit===void 0)return;const D=S.source,O=d.get(D);if(O){const V=O[_.__cacheKey];V.usedTimes--,V.usedTimes===0&&T(S),Object.keys(O).length===0&&d.delete(D)}i.remove(S)}function T(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const D=S.source,O=d.get(D);delete O[_.__cacheKey],o.memory.textures--}function M(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let V=0;V<_.__webglFramebuffer[O].length;V++)n.deleteFramebuffer(_.__webglFramebuffer[O][V]);else n.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)n.deleteFramebuffer(_.__webglFramebuffer[O]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=S.textures;for(let O=0,V=D.length;O<V;O++){const B=i.get(D[O]);B.__webglTexture&&(n.deleteTexture(B.__webglTexture),o.memory.textures--),i.remove(D[O])}i.remove(S)}let P=0;function Z(){P=0}function k(){const S=P;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),P+=1,S}function et(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function nt(S,_){const D=i.get(S);if(S.isVideoTexture&&G(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){const O=S.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(D,S,_);return}}e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function X(S,_){const D=i.get(S);if(S.version>0&&D.__version!==S.version){tt(D,S,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function K(S,_){const D=i.get(S);if(S.version>0&&D.__version!==S.version){tt(D,S,_);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function H(S,_){const D=i.get(S);if(S.version>0&&D.__version!==S.version){lt(D,S,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const ft={[Mc]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[yc]:n.MIRRORED_REPEAT},ht={[En]:n.NEAREST,[Ex]:n.NEAREST_MIPMAP_NEAREST,[fo]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[al]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},pt={[bx]:n.NEVER,[Px]:n.ALWAYS,[Tx]:n.LESS,[Zp]:n.LEQUAL,[Ax]:n.EQUAL,[Rx]:n.GEQUAL,[wx]:n.GREATER,[Cx]:n.NOTEQUAL};function yt(S,_){if(_.type===Jn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Rn||_.magFilter===al||_.magFilter===fo||_.magFilter===Ki||_.minFilter===Rn||_.minFilter===al||_.minFilter===fo||_.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ft[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ft[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ft[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ht[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===En||_.minFilter!==fo&&_.minFilter!==Ki||_.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Xt(S,_){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",R));const O=_.source;let V=d.get(O);V===void 0&&(V={},d.set(O,V));const B=et(_);if(B!==S.__cacheKey){V[B]===void 0&&(V[B]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),V[B].usedTimes++;const ct=V[S.__cacheKey];ct!==void 0&&(V[S.__cacheKey].usedTimes--,ct.usedTimes===0&&T(_)),S.__cacheKey=B,S.__webglTexture=V[B].texture}return D}function tt(S,_,D){let O=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=n.TEXTURE_3D);const V=Xt(S,_),B=_.source;e.bindTexture(O,S.__webglTexture,n.TEXTURE0+D);const ct=i.get(B);if(B.version!==ct.__version||V===!0){e.activeTexture(n.TEXTURE0+D);const ot=jt.getPrimaries(jt.workingColorSpace),ut=_.colorSpace===Ei?null:jt.getPrimaries(_.colorSpace),Ut=_.colorSpace===Ei||ot===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let st=v(_.image,!1,s.maxTextureSize);st=rt(_,st);const _t=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type);let Lt=b(_.internalFormat,_t,Tt,_.colorSpace,_.isVideoTexture);yt(O,_);let bt;const Ot=_.mipmaps,It=_.isVideoTexture!==!0,ne=ct.__version===void 0||V===!0,N=B.dataReady,vt=L(_,st);if(_.isDepthTexture)Lt=E(_.format===tr,_.type),ne&&(It?e.texStorage2D(n.TEXTURE_2D,1,Lt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Lt,st.width,st.height,0,_t,Tt,null));else if(_.isDataTexture)if(Ot.length>0){It&&ne&&e.texStorage2D(n.TEXTURE_2D,vt,Lt,Ot[0].width,Ot[0].height);for(let Q=0,it=Ot.length;Q<it;Q++)bt=Ot[Q],It?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,bt.width,bt.height,_t,Tt,bt.data):e.texImage2D(n.TEXTURE_2D,Q,Lt,bt.width,bt.height,0,_t,Tt,bt.data);_.generateMipmaps=!1}else It?(ne&&e.texStorage2D(n.TEXTURE_2D,vt,Lt,st.width,st.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,_t,Tt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,st.width,st.height,0,_t,Tt,st.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){It&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Lt,Ot[0].width,Ot[0].height,st.depth);for(let Q=0,it=Ot.length;Q<it;Q++)if(bt=Ot[Q],_.format!==_n)if(_t!==null)if(It){if(N)if(_.layerUpdates.size>0){const Mt=Ff(bt.width,bt.height,_.format,_.type);for(const xt of _.layerUpdates){const Ht=bt.data.subarray(xt*Mt/bt.data.BYTES_PER_ELEMENT,(xt+1)*Mt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,xt,bt.width,bt.height,1,_t,Ht)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,bt.width,bt.height,st.depth,_t,bt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Lt,bt.width,bt.height,st.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,bt.width,bt.height,st.depth,_t,Tt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Lt,bt.width,bt.height,st.depth,0,_t,Tt,bt.data)}else{It&&ne&&e.texStorage2D(n.TEXTURE_2D,vt,Lt,Ot[0].width,Ot[0].height);for(let Q=0,it=Ot.length;Q<it;Q++)bt=Ot[Q],_.format!==_n?_t!==null?It?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,bt.width,bt.height,_t,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Lt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,bt.width,bt.height,_t,Tt,bt.data):e.texImage2D(n.TEXTURE_2D,Q,Lt,bt.width,bt.height,0,_t,Tt,bt.data)}else if(_.isDataArrayTexture)if(It){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Lt,st.width,st.height,st.depth),N)if(_.layerUpdates.size>0){const Q=Ff(st.width,st.height,_.format,_.type);for(const it of _.layerUpdates){const Mt=st.data.subarray(it*Q/st.data.BYTES_PER_ELEMENT,(it+1)*Q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,it,st.width,st.height,1,_t,Tt,Mt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Tt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,st.width,st.height,st.depth,0,_t,Tt,st.data);else if(_.isData3DTexture)It?(ne&&e.texStorage3D(n.TEXTURE_3D,vt,Lt,st.width,st.height,st.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Tt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,st.width,st.height,st.depth,0,_t,Tt,st.data);else if(_.isFramebufferTexture){if(ne)if(It)e.texStorage2D(n.TEXTURE_2D,vt,Lt,st.width,st.height);else{let Q=st.width,it=st.height;for(let Mt=0;Mt<vt;Mt++)e.texImage2D(n.TEXTURE_2D,Mt,Lt,Q,it,0,_t,Tt,null),Q>>=1,it>>=1}}else if(Ot.length>0){if(It&&ne){const Q=j(Ot[0]);e.texStorage2D(n.TEXTURE_2D,vt,Lt,Q.width,Q.height)}for(let Q=0,it=Ot.length;Q<it;Q++)bt=Ot[Q],It?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,_t,Tt,bt):e.texImage2D(n.TEXTURE_2D,Q,Lt,_t,Tt,bt);_.generateMipmaps=!1}else if(It){if(ne){const Q=j(st);e.texStorage2D(n.TEXTURE_2D,vt,Lt,Q.width,Q.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Tt,st)}else e.texImage2D(n.TEXTURE_2D,0,Lt,_t,Tt,st);m(_)&&f(O),ct.__version=B.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function lt(S,_,D){if(_.image.length!==6)return;const O=Xt(S,_),V=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+D);const B=i.get(V);if(V.version!==B.__version||O===!0){e.activeTexture(n.TEXTURE0+D);const ct=jt.getPrimaries(jt.workingColorSpace),ot=_.colorSpace===Ei?null:jt.getPrimaries(_.colorSpace),ut=_.colorSpace===Ei||ct===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Ut=_.isCompressedTexture||_.image[0].isCompressedTexture,st=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let it=0;it<6;it++)!Ut&&!st?_t[it]=v(_.image[it],!0,s.maxCubemapSize):_t[it]=st?_.image[it].image:_.image[it],_t[it]=rt(_,_t[it]);const Tt=_t[0],Lt=r.convert(_.format,_.colorSpace),bt=r.convert(_.type),Ot=b(_.internalFormat,Lt,bt,_.colorSpace),It=_.isVideoTexture!==!0,ne=B.__version===void 0||O===!0,N=V.dataReady;let vt=L(_,Tt);yt(n.TEXTURE_CUBE_MAP,_);let Q;if(Ut){It&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ot,Tt.width,Tt.height);for(let it=0;it<6;it++){Q=_t[it].mipmaps;for(let Mt=0;Mt<Q.length;Mt++){const xt=Q[Mt];_.format!==_n?Lt!==null?It?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,0,0,xt.width,xt.height,Lt,xt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,Ot,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,0,0,xt.width,xt.height,Lt,bt,xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,Ot,xt.width,xt.height,0,Lt,bt,xt.data)}}}else{if(Q=_.mipmaps,It&&ne){Q.length>0&&vt++;const it=j(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ot,it.width,it.height)}for(let it=0;it<6;it++)if(st){It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t[it].width,_t[it].height,Lt,bt,_t[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ot,_t[it].width,_t[it].height,0,Lt,bt,_t[it].data);for(let Mt=0;Mt<Q.length;Mt++){const Ht=Q[Mt].image[it].image;It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,0,0,Ht.width,Ht.height,Lt,bt,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,Ot,Ht.width,Ht.height,0,Lt,bt,Ht.data)}}else{It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Lt,bt,_t[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ot,Lt,bt,_t[it]);for(let Mt=0;Mt<Q.length;Mt++){const xt=Q[Mt];It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,0,0,Lt,bt,xt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,Ot,Lt,bt,xt.image[it])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),B.__version=V.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function St(S,_,D,O,V,B){const ct=r.convert(D.format,D.colorSpace),ot=r.convert(D.type),ut=b(D.internalFormat,ct,ot,D.colorSpace),Ut=i.get(_),st=i.get(D);if(st.__renderTarget=_,!Ut.__hasExternalTextures){const _t=Math.max(1,_.width>>B),Tt=Math.max(1,_.height>>B);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?e.texImage3D(V,B,ut,_t,Tt,_.depth,0,ct,ot,null):e.texImage2D(V,B,ut,_t,Tt,0,ct,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),q(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,V,st.__webglTexture,0,J(_)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,V,st.__webglTexture,B),e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(S,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const O=_.depthTexture,V=O&&O.isDepthTexture?O.type:null,B=E(_.stencilBuffer,V),ct=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=J(_);q(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,B,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,B,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,B,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,S)}else{const O=_.textures;for(let V=0;V<O.length;V++){const B=O[V],ct=r.convert(B.format,B.colorSpace),ot=r.convert(B.type),ut=b(B.internalFormat,ct,ot,B.colorSpace),Ut=J(_);D&&q(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,ut,_.width,_.height):q(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut,ut,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ut,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function At(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(_.depthTexture);O.__renderTarget=_,(!O.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),nt(_.depthTexture,0);const V=O.__webglTexture,B=J(_);if(_.depthTexture.format===Xs)q(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(_.depthTexture.format===tr)q(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Nt(S){const _=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const O=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){const V=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",V)};O.addEventListener("dispose",V),_.__depthDisposeCallback=V}_.__boundDepthTexture=O}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");At(_.__webglFramebuffer,S)}else if(D){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=n.createRenderbuffer(),mt(_.__webglDepthbuffer[O],S,!1);else{const V=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=_.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,B)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),mt(_.__webglDepthbuffer,S,!1);else{const O=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,V)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(S,_,D){const O=i.get(S);_!==void 0&&St(O.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Nt(S)}function Zt(S){const _=S.texture,D=i.get(S),O=i.get(_);S.addEventListener("dispose",C);const V=S.textures,B=S.isWebGLCubeRenderTarget===!0,ct=V.length>1;if(ct||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=_.version,o.memory.textures++),B){D.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[ot]=[];for(let ut=0;ut<_.mipmaps.length;ut++)D.__webglFramebuffer[ot][ut]=n.createFramebuffer()}else D.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)D.__webglFramebuffer[ot]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ct)for(let ot=0,ut=V.length;ot<ut;ot++){const Ut=i.get(V[ot]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&q(S)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ot=0;ot<V.length;ot++){const ut=V[ot];D.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ot]);const Ut=r.convert(ut.format,ut.colorSpace),st=r.convert(ut.type),_t=b(ut.internalFormat,Ut,st,ut.colorSpace,S.isXRRenderTarget===!0),Tt=J(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,_t,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,D.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(D.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),yt(n.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)St(D.__webglFramebuffer[ot][ut],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else St(D.__webglFramebuffer[ot],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let ot=0,ut=V.length;ot<ut;ot++){const Ut=V[ot],st=i.get(Ut);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),yt(n.TEXTURE_2D,Ut),St(D.__webglFramebuffer,S,Ut,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m(Ut)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ot=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,O.__webglTexture),yt(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)St(D.__webglFramebuffer[ut],S,_,n.COLOR_ATTACHMENT0,ot,ut);else St(D.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,ot,0);m(_)&&f(ot),e.unbindTexture()}S.depthBuffer&&Nt(S)}function Yt(S){const _=S.textures;for(let D=0,O=_.length;D<O;D++){const V=_[D];if(m(V)){const B=A(S),ct=i.get(V).__webglTexture;e.bindTexture(B,ct),f(B),e.unbindTexture()}}}const w=[],x=[];function Y(S){if(S.samples>0){if(q(S)===!1){const _=S.textures,D=S.width,O=S.height;let V=n.COLOR_BUFFER_BIT;const B=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(S),ot=_.length>1;if(ot)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Ut=i.get(_[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ut,0)}n.blitFramebuffer(0,0,D,O,0,0,D,O,V,n.NEAREST),l===!0&&(w.length=0,x.length=0,w.push(n.COLOR_ATTACHMENT0+ut),S.depthBuffer&&S.resolveDepthBuffer===!1&&(w.push(B),x.push(B),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Ut=i.get(_[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,Ut,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function J(S){return Math.min(s.maxSamples,S.samples)}function q(S){const _=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function G(S){const _=o.render.frame;u.get(S)!==_&&(u.set(S,_),S.update())}function rt(S,_){const D=S.colorSpace,O=S.format,V=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==cr&&D!==Ei&&(jt.getTransfer(D)===se?(O!==_n||V!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function j(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=Z,this.setTexture2D=nt,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Ft,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=q}function Zy(n,t){function e(i,s=Ei){let r;const o=jt.getTransfer(s);if(i===ii)return n.UNSIGNED_BYTE;if(i===Cu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ru)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hp)return n.BYTE;if(i===Vp)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===wu)return n.INT;if(i===is)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===Qr)return n.HALF_FLOAT;if(i===Gp)return n.ALPHA;if(i===Wp)return n.RGB;if(i===_n)return n.RGBA;if(i===$p)return n.LUMINANCE;if(i===Xp)return n.LUMINANCE_ALPHA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===tr)return n.DEPTH_STENCIL;if(i===Yp)return n.RED;if(i===Pu)return n.RED_INTEGER;if(i===qp)return n.RG;if(i===Du)return n.RG_INTEGER;if(i===Lu)return n.RGBA_INTEGER;if(i===Qo||i===ta||i===ea||i===na)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bc||i===Tc||i===Ac||i===wc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cc||i===Rc||i===Pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cc||i===Rc)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dc||i===Lc||i===Ic||i===Nc||i===Oc||i===Uc||i===Fc||i===Bc||i===zc||i===Hc||i===Vc||i===kc||i===Gc||i===Wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ic)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ia||i===$c||i===Xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ia)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jp||i===Yc||i===qc||i===jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Jy extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class No extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qy={type:"move"};class Nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new No;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const tb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eb=`
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

}`;class nb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ai({vertexShader:tb,fragmentShader:eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new on(new eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ib extends cs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const v=new nb,m=e.getContextAttributes();let f=null,A=null;const b=[],E=[],L=new Gt;let R=null;const C=new nn;C.viewport=new pe;const I=new nn;I.viewport=new pe;const T=[C,I],M=new Jy;let P=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=b[tt];return lt===void 0&&(lt=new Nl,b[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=b[tt];return lt===void 0&&(lt=new Nl,b[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=b[tt];return lt===void 0&&(lt=new Nl,b[tt]=lt),lt.getHandSpace()};function k(tt){const lt=E.indexOf(tt.inputSource);if(lt===-1)return;const St=b[lt];St!==void 0&&(St.update(tt.inputSource,tt.frame,c||o),St.dispatchEvent({type:tt.type,data:tt.inputSource}))}function et(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",nt);for(let tt=0;tt<b.length;tt++){const lt=E[tt];lt!==null&&(E[tt]=null,b[tt].disconnect(lt))}P=null,Z=null,v.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,A=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",et),s.addEventListener("inputsourceschange",nt),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new ss(p.framebufferWidth,p.framebufferHeight,{format:_n,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,St=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?tr:Xs,St=m.stencil?Qs:is);const At={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(At),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new ss(d.textureWidth,d.textureHeight,{format:_n,type:ii,depthTexture:new cm(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function nt(tt){for(let lt=0;lt<tt.removed.length;lt++){const St=tt.removed[lt],mt=E.indexOf(St);mt>=0&&(E[mt]=null,b[mt].disconnect(St))}for(let lt=0;lt<tt.added.length;lt++){const St=tt.added[lt];let mt=E.indexOf(St);if(mt===-1){for(let Nt=0;Nt<b.length;Nt++)if(Nt>=E.length){E.push(St),mt=Nt;break}else if(E[Nt]===null){E[Nt]=St,mt=Nt;break}if(mt===-1)break}const At=b[mt];At&&At.connect(St)}}const X=new z,K=new z;function H(tt,lt,St){X.setFromMatrixPosition(lt.matrixWorld),K.setFromMatrixPosition(St.matrixWorld);const mt=X.distanceTo(K),At=lt.projectionMatrix.elements,Nt=St.projectionMatrix.elements,Ft=At[14]/(At[10]-1),Zt=At[14]/(At[10]+1),Yt=(At[9]+1)/At[5],w=(At[9]-1)/At[5],x=(At[8]-1)/At[0],Y=(Nt[8]+1)/Nt[0],J=Ft*x,q=Ft*Y,G=mt/(-x+Y),rt=G*-x;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(rt),tt.translateZ(G),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),At[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const j=Ft+G,S=Zt+G,_=J-rt,D=q+(mt-rt),O=Yt*Zt/S*j,V=w*Zt/S*j;tt.projectionMatrix.makePerspective(_,D,O,V,j,S),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ft(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let lt=tt.near,St=tt.far;v.texture!==null&&(v.depthNear>0&&(lt=v.depthNear),v.depthFar>0&&(St=v.depthFar)),M.near=I.near=C.near=lt,M.far=I.far=C.far=St,(P!==M.near||Z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,Z=M.far),C.layers.mask=tt.layers.mask|2,I.layers.mask=tt.layers.mask|4,M.layers.mask=C.layers.mask|I.layers.mask;const mt=tt.parent,At=M.cameras;ft(M,mt);for(let Nt=0;Nt<At.length;Nt++)ft(At[Nt],mt);At.length===2?H(M,C,I):M.projectionMatrix.copy(C.projectionMatrix),ht(tt,M,mt)};function ht(tt,lt,St){St===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(St.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=jr*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let pt=null;function yt(tt,lt){if(u=lt.getViewerPose(c||o),g=lt,u!==null){const St=u.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let mt=!1;St.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let Nt=0;Nt<St.length;Nt++){const Ft=St[Nt];let Zt=null;if(p!==null)Zt=p.getViewport(Ft);else{const w=h.getViewSubImage(d,Ft);Zt=w.viewport,Nt===0&&(t.setRenderTargetTextures(A,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(A))}let Yt=T[Nt];Yt===void 0&&(Yt=new nn,Yt.layers.enable(Nt),Yt.viewport=new pe,T[Nt]=Yt),Yt.matrix.fromArray(Ft.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Ft.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Nt===0&&(M.matrix.copy(Yt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(Yt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Nt=h.getDepthInformation(St[0]);Nt&&Nt.isValid&&Nt.texture&&v.init(t,Nt,s.renderState)}}for(let St=0;St<b.length;St++){const mt=E[St],At=b[St];mt!==null&&At!==void 0&&At.update(mt,lt,c||o)}pt&&pt(tt,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),g=null}const Xt=new lm;Xt.setAnimationLoop(yt),this.setAnimationLoop=function(tt){pt=tt},this.dispose=function(){}}}const Wi=new On,sb=new he;function rb(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,sm(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,b,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,A,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===He&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===He&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=t.get(f),b=A.envMap,E=A.envMapRotation;b&&(m.envMap.value=b,Wi.copy(E),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(sb.makeRotationFromEuler(Wi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,A,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===He&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const A=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ob(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const E=b.program;i.uniformBlockBinding(A,E)}function c(A,b){let E=s[A.id];E===void 0&&(g(A),E=u(A),s[A.id]=E,A.addEventListener("dispose",m));const L=b.program;i.updateUBOMapping(A,L);const R=t.render.frame;r[A.id]!==R&&(d(A),r[A.id]=R)}function u(A){const b=h();A.__bindingPointIndex=b;const E=n.createBuffer(),L=A.__size,R=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const b=s[A.id],E=A.uniforms,L=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,C=E.length;R<C;R++){const I=Array.isArray(E[R])?E[R]:[E[R]];for(let T=0,M=I.length;T<M;T++){const P=I[T];if(p(P,R,T,L)===!0){const Z=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let et=0;for(let nt=0;nt<k.length;nt++){const X=k[nt],K=v(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,Z+et,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,et),et+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,b,E,L){const R=A.value,C=b+"_"+E;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const I=L[C];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return L[C]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(A){const b=A.uniforms;let E=0;const L=16;for(let C=0,I=b.length;C<I;C++){const T=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,P=T.length;M<P;M++){const Z=T[M],k=Array.isArray(Z.value)?Z.value:[Z.value];for(let et=0,nt=k.length;et<nt;et++){const X=k[et],K=v(X),H=E%L,ft=H%K.boundary,ht=H+ft;E+=ft,ht!==0&&L-ht<K.storage&&(E+=L-ht),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=K.storage}}}const R=E%L;return R>0&&(E+=L-R),A.__size=E,A.__cache={},this}function v(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class ab{constructor(t={}){const{canvas:e=qx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const A=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=yi,this.toneMappingExposure=1;const E=this;let L=!1,R=0,C=0,I=null,T=-1,M=null;const P=new pe,Z=new pe;let k=null;const et=new qt(0);let nt=0,X=e.width,K=e.height,H=1,ft=null,ht=null;const pt=new pe(0,0,X,K),yt=new pe(0,0,X,K);let Xt=!1;const tt=new am;let lt=!1,St=!1;const mt=new he,At=new he,Nt=new z,Ft=new pe,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function w(){return I===null?H:1}let x=i;function Y(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Au}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),x===null){const U="webgl2";if(x=Y(U,y),x===null)throw Y(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let J,q,G,rt,j,S,_,D,O,V,B,ct,ot,ut,Ut,st,_t,Tt,Lt,bt,Ot,It,ne,N;function vt(){J=new fM(x),J.init(),It=new Zy(x,J),q=new rM(x,J,t,It),G=new qy(x,J),q.reverseDepthBuffer&&d&&G.buffers.depth.setReversed(!0),rt=new mM(x),j=new Iy,S=new Ky(x,J,G,j,q,It,rt),_=new aM(E),D=new hM(E),O=new SE(x),ne=new iM(x,O),V=new dM(x,O,rt,ne),B=new gM(x,V,O,rt),Lt=new _M(x,q,S),st=new oM(j),ct=new Ly(E,_,D,J,q,ne,st),ot=new rb(E,j),ut=new Oy,Ut=new Vy(J),Tt=new nM(E,_,D,G,B,p,l),_t=new Xy(E,B,q),N=new ob(x,rt,q,G),bt=new sM(x,J,rt),Ot=new pM(x,J,rt),rt.programs=ct.programs,E.capabilities=q,E.extensions=J,E.properties=j,E.renderLists=ut,E.shadowMap=_t,E.state=G,E.info=rt}vt();const Q=new ib(E,x);this.xr=Q,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const y=J.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=J.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(X,K,!1))},this.getSize=function(y){return y.set(X,K)},this.setSize=function(y,U,W=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,K=U,e.width=Math.floor(y*H),e.height=Math.floor(U*H),W===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(X*H,K*H).floor()},this.setDrawingBufferSize=function(y,U,W){X=y,K=U,H=W,e.width=Math.floor(y*W),e.height=Math.floor(U*W),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(pt)},this.setViewport=function(y,U,W,$){y.isVector4?pt.set(y.x,y.y,y.z,y.w):pt.set(y,U,W,$),G.viewport(P.copy(pt).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(yt)},this.setScissor=function(y,U,W,$){y.isVector4?yt.set(y.x,y.y,y.z,y.w):yt.set(y,U,W,$),G.scissor(Z.copy(yt).multiplyScalar(H).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(y){G.setScissorTest(Xt=y)},this.setOpaqueSort=function(y){ft=y},this.setTransparentSort=function(y){ht=y},this.getClearColor=function(y){return y.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(y=!0,U=!0,W=!0){let $=0;if(y){let F=!1;if(I!==null){const dt=I.texture.format;F=dt===Lu||dt===Du||dt===Pu}if(F){const dt=I.texture.type,Et=dt===ii||dt===is||dt===qr||dt===Qs||dt===Cu||dt===Ru,wt=Tt.getClearColor(),Ct=Tt.getClearAlpha(),Bt=wt.r,Vt=wt.g,Rt=wt.b;Et?(g[0]=Bt,g[1]=Vt,g[2]=Rt,g[3]=Ct,x.clearBufferuiv(x.COLOR,0,g)):(v[0]=Bt,v[1]=Vt,v[2]=Rt,v[3]=Ct,x.clearBufferiv(x.COLOR,0,v))}else $|=x.COLOR_BUFFER_BIT}U&&($|=x.DEPTH_BUFFER_BIT),W&&($|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),ut.dispose(),Ut.dispose(),j.dispose(),_.dispose(),D.dispose(),B.dispose(),ne.dispose(),N.dispose(),ct.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",eh),Q.removeEventListener("sessionend",nh),Ui.stop()};function it(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=rt.autoReset,U=_t.enabled,W=_t.autoUpdate,$=_t.needsUpdate,F=_t.type;vt(),rt.autoReset=y,_t.enabled=U,_t.autoUpdate=W,_t.needsUpdate=$,_t.type=F}function xt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ht(y){const U=y.target;U.removeEventListener("dispose",Ht),fe(U)}function fe(y){ye(y),j.remove(y)}function ye(y){const U=j.get(y).programs;U!==void 0&&(U.forEach(function(W){ct.releaseProgram(W)}),y.isShaderMaterial&&ct.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,W,$,F,dt){U===null&&(U=Zt);const Et=F.isMesh&&F.matrixWorld.determinant()<0,wt=g_(y,U,W,$,F);G.setMaterial($,Et);let Ct=W.index,Bt=1;if($.wireframe===!0){if(Ct=V.getWireframeAttribute(W),Ct===void 0)return;Bt=2}const Vt=W.drawRange,Rt=W.attributes.position;let Kt=Vt.start*Bt,ae=(Vt.start+Vt.count)*Bt;dt!==null&&(Kt=Math.max(Kt,dt.start*Bt),ae=Math.min(ae,(dt.start+dt.count)*Bt)),Ct!==null?(Kt=Math.max(Kt,0),ae=Math.min(ae,Ct.count)):Rt!=null&&(Kt=Math.max(Kt,0),ae=Math.min(ae,Rt.count));const ce=ae-Kt;if(ce<0||ce===1/0)return;ne.setup(F,$,wt,W,Ct);let Fe,Jt=bt;if(Ct!==null&&(Fe=O.get(Ct),Jt=Ot,Jt.setIndex(Fe)),F.isMesh)$.wireframe===!0?(G.setLineWidth($.wireframeLinewidth*w()),Jt.setMode(x.LINES)):Jt.setMode(x.TRIANGLES);else if(F.isLine){let Pt=$.linewidth;Pt===void 0&&(Pt=1),G.setLineWidth(Pt*w()),F.isLineSegments?Jt.setMode(x.LINES):F.isLineLoop?Jt.setMode(x.LINE_LOOP):Jt.setMode(x.LINE_STRIP)}else F.isPoints?Jt.setMode(x.POINTS):F.isSprite&&Jt.setMode(x.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pt=F._multiDrawStarts,zn=F._multiDrawCounts,Qt=F._multiDrawCount,fn=Ct?O.get(Ct).bytesPerElement:1,fs=j.get($).currentProgram.getUniforms();for(let ke=0;ke<Qt;ke++)fs.setValue(x,"_gl_DrawID",ke),Jt.render(Pt[ke]/fn,zn[ke])}else if(F.isInstancedMesh)Jt.renderInstances(Kt,ce,F.count);else if(W.isInstancedBufferGeometry){const Pt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,zn=Math.min(W.instanceCount,Pt);Jt.renderInstances(Kt,ce,zn)}else Jt.render(Kt,ce)};function ie(y,U,W){y.transparent===!0&&y.side===Cn&&y.forceSinglePass===!1?(y.side=He,y.needsUpdate=!0,lo(y,U,W),y.side=Ti,y.needsUpdate=!0,lo(y,U,W),y.side=Cn):lo(y,U,W)}this.compile=function(y,U,W=null){W===null&&(W=y),f=Ut.get(W),f.init(U),b.push(f),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),y!==W&&y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const $=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const dt=F.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const wt=dt[Et];ie(wt,W,F),$.add(wt)}else ie(dt,W,F),$.add(dt)}),b.pop(),f=null,$},this.compileAsync=function(y,U,W=null){const $=this.compile(y,U,W);return new Promise(F=>{function dt(){if($.forEach(function(Et){j.get(Et).currentProgram.isReady()&&$.delete(Et)}),$.size===0){F(y);return}setTimeout(dt,10)}J.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let hn=null;function Bn(y){hn&&hn(y)}function eh(){Ui.stop()}function nh(){Ui.start()}const Ui=new lm;Ui.setAnimationLoop(Bn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(y){hn=y,Q.setAnimationLoop(y),y===null?Ui.stop():Ui.start()},Q.addEventListener("sessionstart",eh),Q.addEventListener("sessionend",nh),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(U),U=Q.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,U,I),f=Ut.get(y,b.length),f.init(U),b.push(f),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(At),St=this.localClippingEnabled,lt=st.init(this.clippingPlanes,St),m=ut.get(y,A.length),m.init(),A.push(m),Q.enabled===!0&&Q.isPresenting===!0){const dt=E.xr.getDepthSensingMesh();dt!==null&&Ya(dt,U,-1/0,E.sortObjects)}Ya(y,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ft,ht),Yt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Yt&&Tt.addToRenderList(m,y),this.info.render.frame++,lt===!0&&st.beginShadows();const W=f.state.shadowsArray;_t.render(W,y,U),lt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const dt=U.cameras;if(F.length>0)for(let Et=0,wt=dt.length;Et<wt;Et++){const Ct=dt[Et];sh($,F,y,Ct)}Yt&&Tt.render(y);for(let Et=0,wt=dt.length;Et<wt;Et++){const Ct=dt[Et];ih(m,y,Ct,Ct.viewport)}}else F.length>0&&sh($,F,y,U),Yt&&Tt.render(y),ih(m,y,U);I!==null&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(E,y,U),ne.resetDefaultState(),T=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],lt===!0&&st.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ya(y,U,W,$){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||tt.intersectsSprite(y)){$&&Ft.setFromMatrixPosition(y.matrixWorld).applyMatrix4(At);const Et=B.update(y),wt=y.material;wt.visible&&m.push(y,Et,wt,W,Ft.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||tt.intersectsObject(y))){const Et=B.update(y),wt=y.material;if($&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ft.copy(y.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ft.copy(Et.boundingSphere.center)),Ft.applyMatrix4(y.matrixWorld).applyMatrix4(At)),Array.isArray(wt)){const Ct=Et.groups;for(let Bt=0,Vt=Ct.length;Bt<Vt;Bt++){const Rt=Ct[Bt],Kt=wt[Rt.materialIndex];Kt&&Kt.visible&&m.push(y,Et,Kt,W,Ft.z,Rt)}}else wt.visible&&m.push(y,Et,wt,W,Ft.z,null)}}const dt=y.children;for(let Et=0,wt=dt.length;Et<wt;Et++)Ya(dt[Et],U,W,$)}function ih(y,U,W,$){const F=y.opaque,dt=y.transmissive,Et=y.transparent;f.setupLightsView(W),lt===!0&&st.setGlobalState(E.clippingPlanes,W),$&&G.viewport(P.copy($)),F.length>0&&ao(F,U,W),dt.length>0&&ao(dt,U,W),Et.length>0&&ao(Et,U,W),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function sh(y,U,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new ss(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Qr:ii,minFilter:Ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const dt=f.state.transmissionRenderTarget[$.id],Et=$.viewport||P;dt.setSize(Et.z,Et.w);const wt=E.getRenderTarget();E.setRenderTarget(dt),E.getClearColor(et),nt=E.getClearAlpha(),nt<1&&E.setClearColor(16777215,.5),E.clear(),Yt&&Tt.render(W);const Ct=E.toneMapping;E.toneMapping=yi;const Bt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),lt===!0&&st.setGlobalState(E.clippingPlanes,$),ao(y,W,$),S.updateMultisampleRenderTarget(dt),S.updateRenderTargetMipmap(dt),J.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Rt=0,Kt=U.length;Rt<Kt;Rt++){const ae=U[Rt],ce=ae.object,Fe=ae.geometry,Jt=ae.material,Pt=ae.group;if(Jt.side===Cn&&ce.layers.test($.layers)){const zn=Jt.side;Jt.side=He,Jt.needsUpdate=!0,rh(ce,W,$,Fe,Jt,Pt),Jt.side=zn,Jt.needsUpdate=!0,Vt=!0}}Vt===!0&&(S.updateMultisampleRenderTarget(dt),S.updateRenderTargetMipmap(dt))}E.setRenderTarget(wt),E.setClearColor(et,nt),Bt!==void 0&&($.viewport=Bt),E.toneMapping=Ct}function ao(y,U,W){const $=U.isScene===!0?U.overrideMaterial:null;for(let F=0,dt=y.length;F<dt;F++){const Et=y[F],wt=Et.object,Ct=Et.geometry,Bt=$===null?Et.material:$,Vt=Et.group;wt.layers.test(W.layers)&&rh(wt,U,W,Ct,Bt,Vt)}}function rh(y,U,W,$,F,dt){y.onBeforeRender(E,U,W,$,F,dt),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(E,U,W,$,y,dt),F.transparent===!0&&F.side===Cn&&F.forceSinglePass===!1?(F.side=He,F.needsUpdate=!0,E.renderBufferDirect(W,U,$,F,y,dt),F.side=Ti,F.needsUpdate=!0,E.renderBufferDirect(W,U,$,F,y,dt),F.side=Cn):E.renderBufferDirect(W,U,$,F,y,dt),y.onAfterRender(E,U,W,$,F,dt)}function lo(y,U,W){U.isScene!==!0&&(U=Zt);const $=j.get(y),F=f.state.lights,dt=f.state.shadowsArray,Et=F.state.version,wt=ct.getParameters(y,F.state,dt,U,W),Ct=ct.getProgramCacheKey(wt);let Bt=$.programs;$.environment=y.isMeshStandardMaterial?U.environment:null,$.fog=U.fog,$.envMap=(y.isMeshStandardMaterial?D:_).get(y.envMap||$.environment),$.envMapRotation=$.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Bt===void 0&&(y.addEventListener("dispose",Ht),Bt=new Map,$.programs=Bt);let Vt=Bt.get(Ct);if(Vt!==void 0){if($.currentProgram===Vt&&$.lightsStateVersion===Et)return ah(y,wt),Vt}else wt.uniforms=ct.getUniforms(y),y.onBeforeCompile(wt,E),Vt=ct.acquireProgram(wt,Ct),Bt.set(Ct,Vt),$.uniforms=wt.uniforms;const Rt=$.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=st.uniform),ah(y,wt),$.needsLights=x_(y),$.lightsStateVersion=Et,$.needsLights&&(Rt.ambientLightColor.value=F.state.ambient,Rt.lightProbe.value=F.state.probe,Rt.directionalLights.value=F.state.directional,Rt.directionalLightShadows.value=F.state.directionalShadow,Rt.spotLights.value=F.state.spot,Rt.spotLightShadows.value=F.state.spotShadow,Rt.rectAreaLights.value=F.state.rectArea,Rt.ltc_1.value=F.state.rectAreaLTC1,Rt.ltc_2.value=F.state.rectAreaLTC2,Rt.pointLights.value=F.state.point,Rt.pointLightShadows.value=F.state.pointShadow,Rt.hemisphereLights.value=F.state.hemi,Rt.directionalShadowMap.value=F.state.directionalShadowMap,Rt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Rt.spotShadowMap.value=F.state.spotShadowMap,Rt.spotLightMatrix.value=F.state.spotLightMatrix,Rt.spotLightMap.value=F.state.spotLightMap,Rt.pointShadowMap.value=F.state.pointShadowMap,Rt.pointShadowMatrix.value=F.state.pointShadowMatrix),$.currentProgram=Vt,$.uniformsList=null,Vt}function oh(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=sa.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function ah(y,U){const W=j.get(y);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function g_(y,U,W,$,F){U.isScene!==!0&&(U=Zt),S.resetTextureUnits();const dt=U.fog,Et=$.isMeshStandardMaterial?U.environment:null,wt=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:cr,Ct=($.isMeshStandardMaterial?D:_).get($.envMap||Et),Bt=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Rt=!!W.morphAttributes.position,Kt=!!W.morphAttributes.normal,ae=!!W.morphAttributes.color;let ce=yi;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ce=E.toneMapping);const Fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Jt=Fe!==void 0?Fe.length:0,Pt=j.get($),zn=f.state.lights;if(lt===!0&&(St===!0||y!==M)){const Je=y===M&&$.id===T;st.setState($,y,Je)}let Qt=!1;$.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==zn.state.version||Pt.outputColorSpace!==wt||F.isBatchedMesh&&Pt.batching===!1||!F.isBatchedMesh&&Pt.batching===!0||F.isBatchedMesh&&Pt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pt.instancing===!1||!F.isInstancedMesh&&Pt.instancing===!0||F.isSkinnedMesh&&Pt.skinning===!1||!F.isSkinnedMesh&&Pt.skinning===!0||F.isInstancedMesh&&Pt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pt.instancingMorph===!1&&F.morphTexture!==null||Pt.envMap!==Ct||$.fog===!0&&Pt.fog!==dt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==st.numPlanes||Pt.numIntersection!==st.numIntersection)||Pt.vertexAlphas!==Bt||Pt.vertexTangents!==Vt||Pt.morphTargets!==Rt||Pt.morphNormals!==Kt||Pt.morphColors!==ae||Pt.toneMapping!==ce||Pt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Pt.__version=$.version);let fn=Pt.currentProgram;Qt===!0&&(fn=lo($,U,F));let fs=!1,ke=!1,vr=!1;const ue=fn.getUniforms(),Mn=Pt.uniforms;if(G.useProgram(fn.program)&&(fs=!0,ke=!0,vr=!0),$.id!==T&&(T=$.id,ke=!0),fs||M!==y){G.buffers.depth.getReversed()?(mt.copy(y.projectionMatrix),Kx(mt),Zx(mt),ue.setValue(x,"projectionMatrix",mt)):ue.setValue(x,"projectionMatrix",y.projectionMatrix),ue.setValue(x,"viewMatrix",y.matrixWorldInverse);const ai=ue.map.cameraPosition;ai!==void 0&&ai.setValue(x,Nt.setFromMatrixPosition(y.matrixWorld)),q.logarithmicDepthBuffer&&ue.setValue(x,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ue.setValue(x,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,ke=!0,vr=!0)}if(F.isSkinnedMesh){ue.setOptional(x,F,"bindMatrix"),ue.setOptional(x,F,"bindMatrixInverse");const Je=F.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ue.setValue(x,"boneTexture",Je.boneTexture,S))}F.isBatchedMesh&&(ue.setOptional(x,F,"batchingTexture"),ue.setValue(x,"batchingTexture",F._matricesTexture,S),ue.setOptional(x,F,"batchingIdTexture"),ue.setValue(x,"batchingIdTexture",F._indirectTexture,S),ue.setOptional(x,F,"batchingColorTexture"),F._colorsTexture!==null&&ue.setValue(x,"batchingColorTexture",F._colorsTexture,S));const xr=W.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&Lt.update(F,W,fn),(ke||Pt.receiveShadow!==F.receiveShadow)&&(Pt.receiveShadow=F.receiveShadow,ue.setValue(x,"receiveShadow",F.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Mn.envMap.value=Ct,Mn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&U.environment!==null&&(Mn.envMapIntensity.value=U.environmentIntensity),ke&&(ue.setValue(x,"toneMappingExposure",E.toneMappingExposure),Pt.needsLights&&v_(Mn,vr),dt&&$.fog===!0&&ot.refreshFogUniforms(Mn,dt),ot.refreshMaterialUniforms(Mn,$,H,K,f.state.transmissionRenderTarget[y.id]),sa.upload(x,oh(Pt),Mn,S)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(sa.upload(x,oh(Pt),Mn,S),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ue.setValue(x,"center",F.center),ue.setValue(x,"modelViewMatrix",F.modelViewMatrix),ue.setValue(x,"normalMatrix",F.normalMatrix),ue.setValue(x,"modelMatrix",F.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Je=$.uniformsGroups;for(let ai=0,li=Je.length;ai<li;ai++){const lh=Je[ai];N.update(lh,fn),N.bind(lh,fn)}}return fn}function v_(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function x_(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,U,W){j.get(y.texture).__webglTexture=U,j.get(y.depthTexture).__webglTexture=W;const $=j.get(y);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const W=j.get(y);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,W=0){I=y,R=U,C=W;let $=!0,F=null,dt=!1,Et=!1;if(y){const Ct=j.get(y);if(Ct.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(x.FRAMEBUFFER,null),$=!1;else if(Ct.__webglFramebuffer===void 0)S.setupRenderTarget(y);else if(Ct.__hasExternalTextures)S.rebindTextures(y,j.get(y.texture).__webglTexture,j.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Rt=y.depthTexture;if(Ct.__boundDepthTexture!==Rt){if(Rt!==null&&j.has(Rt)&&(y.width!==Rt.image.width||y.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(y)}}const Bt=y.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Et=!0);const Vt=j.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?F=Vt[U][W]:F=Vt[U],dt=!0):y.samples>0&&S.useMultisampledRTT(y)===!1?F=j.get(y).__webglMultisampledFramebuffer:Array.isArray(Vt)?F=Vt[W]:F=Vt,P.copy(y.viewport),Z.copy(y.scissor),k=y.scissorTest}else P.copy(pt).multiplyScalar(H).floor(),Z.copy(yt).multiplyScalar(H).floor(),k=Xt;if(G.bindFramebuffer(x.FRAMEBUFFER,F)&&$&&G.drawBuffers(y,F),G.viewport(P),G.scissor(Z),G.setScissorTest(k),dt){const Ct=j.get(y.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ct.__webglTexture,W)}else if(Et){const Ct=j.get(y.texture),Bt=U||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ct.__webglTexture,W||0,Bt)}T=-1},this.readRenderTargetPixels=function(y,U,W,$,F,dt,Et){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=j.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Et!==void 0&&(wt=wt[Et]),wt){G.bindFramebuffer(x.FRAMEBUFFER,wt);try{const Ct=y.texture,Bt=Ct.format,Vt=Ct.type;if(!q.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-$&&W>=0&&W<=y.height-F&&x.readPixels(U,W,$,F,It.convert(Bt),It.convert(Vt),dt)}finally{const Ct=I!==null?j.get(I).__webglFramebuffer:null;G.bindFramebuffer(x.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(y,U,W,$,F,dt,Et){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=j.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Et!==void 0&&(wt=wt[Et]),wt){const Ct=y.texture,Bt=Ct.format,Vt=Ct.type;if(!q.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-$&&W>=0&&W<=y.height-F){G.bindFramebuffer(x.FRAMEBUFFER,wt);const Rt=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Rt),x.bufferData(x.PIXEL_PACK_BUFFER,dt.byteLength,x.STREAM_READ),x.readPixels(U,W,$,F,It.convert(Bt),It.convert(Vt),0);const Kt=I!==null?j.get(I).__webglFramebuffer:null;G.bindFramebuffer(x.FRAMEBUFFER,Kt);const ae=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await jx(x,ae,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Rt),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,dt),x.deleteBuffer(Rt),x.deleteSync(ae),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,W=0){y.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const $=Math.pow(2,-W),F=Math.floor(y.image.width*$),dt=Math.floor(y.image.height*$),Et=U!==null?U.x:0,wt=U!==null?U.y:0;S.setTexture2D(y,0),x.copyTexSubImage2D(x.TEXTURE_2D,W,0,0,Et,wt,F,dt),G.unbindTexture()},this.copyTextureToTexture=function(y,U,W=null,$=null,F=0){y.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,y=arguments[1],U=arguments[2],F=arguments[3]||0,W=null);let dt,Et,wt,Ct,Bt,Vt,Rt,Kt,ae;const ce=y.isCompressedTexture?y.mipmaps[F]:y.image;W!==null?(dt=W.max.x-W.min.x,Et=W.max.y-W.min.y,wt=W.isBox3?W.max.z-W.min.z:1,Ct=W.min.x,Bt=W.min.y,Vt=W.isBox3?W.min.z:0):(dt=ce.width,Et=ce.height,wt=ce.depth||1,Ct=0,Bt=0,Vt=0),$!==null?(Rt=$.x,Kt=$.y,ae=$.z):(Rt=0,Kt=0,ae=0);const Fe=It.convert(U.format),Jt=It.convert(U.type);let Pt;U.isData3DTexture?(S.setTexture3D(U,0),Pt=x.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(S.setTexture2DArray(U,0),Pt=x.TEXTURE_2D_ARRAY):(S.setTexture2D(U,0),Pt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,U.unpackAlignment);const zn=x.getParameter(x.UNPACK_ROW_LENGTH),Qt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),fn=x.getParameter(x.UNPACK_SKIP_PIXELS),fs=x.getParameter(x.UNPACK_SKIP_ROWS),ke=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,ce.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ce.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ct),x.pixelStorei(x.UNPACK_SKIP_ROWS,Bt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Vt);const vr=y.isDataArrayTexture||y.isData3DTexture,ue=U.isDataArrayTexture||U.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Mn=j.get(y),xr=j.get(U),Je=j.get(Mn.__renderTarget),ai=j.get(xr.__renderTarget);G.bindFramebuffer(x.READ_FRAMEBUFFER,Je.__webglFramebuffer),G.bindFramebuffer(x.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let li=0;li<wt;li++)vr&&x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,j.get(y).__webglTexture,F,Vt+li),y.isDepthTexture?(ue&&x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,j.get(U).__webglTexture,F,ae+li),x.blitFramebuffer(Ct,Bt,dt,Et,Rt,Kt,dt,Et,x.DEPTH_BUFFER_BIT,x.NEAREST)):ue?x.copyTexSubImage3D(Pt,F,Rt,Kt,ae+li,Ct,Bt,dt,Et):x.copyTexSubImage2D(Pt,F,Rt,Kt,ae+li,Ct,Bt,dt,Et);G.bindFramebuffer(x.READ_FRAMEBUFFER,null),G.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else ue?y.isDataTexture||y.isData3DTexture?x.texSubImage3D(Pt,F,Rt,Kt,ae,dt,Et,wt,Fe,Jt,ce.data):U.isCompressedArrayTexture?x.compressedTexSubImage3D(Pt,F,Rt,Kt,ae,dt,Et,wt,Fe,ce.data):x.texSubImage3D(Pt,F,Rt,Kt,ae,dt,Et,wt,Fe,Jt,ce):y.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,F,Rt,Kt,dt,Et,Fe,Jt,ce.data):y.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,F,Rt,Kt,ce.width,ce.height,Fe,ce.data):x.texSubImage2D(x.TEXTURE_2D,F,Rt,Kt,dt,Et,Fe,Jt,ce);x.pixelStorei(x.UNPACK_ROW_LENGTH,zn),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Qt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,fn),x.pixelStorei(x.UNPACK_SKIP_ROWS,fs),x.pixelStorei(x.UNPACK_SKIP_IMAGES,ke),F===0&&U.generateMipmaps&&x.generateMipmap(Pt),G.unbindTexture()},this.copyTextureToTexture3D=function(y,U,W=null,$=null,F=0){return y.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,$=arguments[1]||null,y=arguments[2],U=arguments[3],F=arguments[4]||0),Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,W,$,F)},this.initRenderTarget=function(y){j.get(y).__webglFramebuffer===void 0&&S.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),G.unbindTexture()},this.resetState=function(){R=0,C=0,I=null,G.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class lb extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pm extends hr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const va=new z,xa=new z,Bf=new he,Ar=new Fa,Oo=new Ua,Ol=new z,zf=new z;class cb extends Se{constructor(t=new Fn,e=new pm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)va.fromBufferAttribute(e,s-1),xa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=va.distanceTo(xa);t.setAttribute("lineDistance",new qe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,t.ray.intersectsSphere(Oo)===!1)return;Bf.copy(s).invert(),Ar.copy(t.ray).applyMatrix4(Bf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=u.getX(v),A=u.getX(v+1),b=Uo(this,t,Ar,l,f,A);b&&e.push(b)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),f=Uo(this,t,Ar,l,v,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=Uo(this,t,Ar,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Uo(this,t,Ar,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(va.fromBufferAttribute(o,s),xa.fromBufferAttribute(o,r),e.distanceSqToSegment(va,xa,Ol,zf)>i)return;Ol.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ol);if(!(l<t.near||l>t.far))return{distance:l,point:zf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Hf=new z,Vf=new z;class ub extends cb{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Hf.fromBufferAttribute(e,s),Vf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Hf.distanceTo(Vf);t.setAttribute("lineDistance",new qe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Fo=new z,Bo=new z,Ul=new z,zo=new sn;class hb extends Fn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ys*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:f}=zo;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),zo.getNormal(Ul),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){const b=(A+1)%3,E=h[A],L=h[b],R=zo[u[A]],C=zo[u[b]],I=`${E}_${L}`,T=`${L}_${E}`;T in d&&d[T]?(Ul.dot(d[T].normal)<=r&&(p.push(R.x,R.y,R.z),p.push(C.x,C.y,C.z)),d[T]=null):I in d||(d[I]={index0:c[A],index1:c[b],normal:Ul.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];Fo.fromBufferAttribute(a,v),Bo.fromBufferAttribute(a,m),p.push(Fo.x,Fo.y,Fo.z),p.push(Bo.x,Bo.y,Bo.z)}this.setAttribute("position",new qe(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ea extends Fn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new z,d=new z,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const A=[],b=f/i;let E=0;f===0&&o===0?E=.5/e:f===i&&l===Math.PI&&(E=-.5/e);for(let L=0;L<=e;L++){const R=L/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(R+E,1-b),A.push(c++)}u.push(A)}for(let f=0;f<i;f++)for(let A=0;A<e;A++){const b=u[f][A+1],E=u[f][A],L=u[f+1][A],R=u[f+1][A+1];(f!==0||o>0)&&p.push(b,E,R),(f!==i-1||l<Math.PI)&&p.push(E,L,R)}this.setIndex(p),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(v,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fb extends hr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kp,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class db extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class pb extends db{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const kf=new he;class mb{constructor(t,e,i=0,s=1/0){this.ray=new Fa(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Nu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kf),this}intersectObject(t,e=!0,i=[]){return Zc(t,this,i,e),i.sort(Gf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Zc(t[s],this,i,e);return i.sort(Gf),i}}function Gf(n,t){return n.distance-t.distance}function Zc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Zc(r[o],t,e,!0)}}class Wf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _b extends cs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Au}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Au);const $f={type:"change"},Uu={type:"start"},mm={type:"end"},Ho=new Fa,Xf=new xi,gb=Math.cos(70*Yx.DEG2RAD),_e=new z,Be=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fl=1e-6;class vb extends _b{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new rs,this._lastTargetPosition=new z,this._quat=new rs().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wf,this._sphericalDelta=new Wf,this._scale=1,this._panOffset=new z,this._rotateStart=new Gt,this._rotateEnd=new Gt,this._rotateDelta=new Gt,this._panStart=new Gt,this._panEnd=new Gt,this._panDelta=new Gt,this._dollyStart=new Gt,this._dollyEnd=new Gt,this._dollyDelta=new Gt,this._dollyDirection=new z,this._mouse=new Gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Eb.bind(this),this._onPointerDown=xb.bind(this),this._onPointerUp=Sb.bind(this),this._onContextMenu=Cb.bind(this),this._onMouseWheel=bb.bind(this),this._onKeyDown=Tb.bind(this),this._onTouchStart=Ab.bind(this),this._onTouchMove=wb.bind(this),this._onMouseDown=Mb.bind(this),this._onMouseMove=yb.bind(this),this._interceptControlDown=Rb.bind(this),this._interceptControlUp=Pb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($f),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Be:i>Math.PI&&(i-=Be),s<-Math.PI?s+=Be:s>Math.PI&&(s-=Be),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_e.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ho.origin.copy(this.object.position),Ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ho.direction))<gb?this.object.lookAt(this.target):(Xf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ho.intersectPlane(Xf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fl||this._lastTargetPosition.distanceToSquared(this.target)>Fl?(this.dispatchEvent($f),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Eb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Sb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mm),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Mb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=re.DOLLY;break;case Ws.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}break;case Ws.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Uu)}function yb(n){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function bb(n){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(n.preventDefault(),this.dispatchEvent(Uu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(mm))}function Tb(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Ab(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=re.TOUCH_ROTATE;break;case Fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=re.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Uu)}function wb(n){switch(this._trackPointer(n),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=re.NONE}}function Cb(n){this.enabled!==!1&&n.preventDefault()}function Rb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Db extends Se{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Gt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Cs=new z,Yf=new he,qf=new he,jf=new z,Kf=new z;class Lb{constructor(t={}){const e=this;let i,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(g,v){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Yf.copy(v.matrixWorldInverse),qf.multiplyMatrices(v.projectionMatrix,Yf),u(g,g,v),p(g)},this.setSize=function(g,v){i=g,s=v,r=i/2,o=s/2,l.style.width=g+"px",l.style.height=v+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let v=0,m=g.children.length;v<m;v++)c(g.children[v])}function u(g,v,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Cs.setFromMatrixPosition(g.matrixWorld),Cs.applyMatrix4(qf);const f=Cs.z>=-1&&Cs.z<=1&&g.layers.test(m.layers)===!0,A=g.element;A.style.display=f===!0?"":"none",f===!0&&(g.onBeforeRender(e,v,m),A.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Cs.x*r+r)+"px,"+(-Cs.y*o+o)+"px)",A.parentNode!==l&&l.appendChild(A),g.onAfterRender(e,v,m));const b={distanceToCameraSquared:h(m,g)};a.objects.set(g,b)}for(let f=0,A=g.children.length;f<A;f++)u(g.children[f],v,m)}function h(g,v){return jf.setFromMatrixPosition(g.matrixWorld),Kf.setFromMatrixPosition(v.matrixWorld),jf.distanceToSquared(Kf)}function d(g){const v=[];return g.traverseVisible(function(m){m.isCSS2DObject&&v.push(m)}),v}function p(g){const v=d(g).sort(function(f,A){if(f.renderOrder!==A.renderOrder)return A.renderOrder-f.renderOrder;const b=a.objects.get(f).distanceToCameraSquared,E=a.objects.get(A).distanceToCameraSquared;return b-E}),m=v.length;for(let f=0,A=v.length;f<A;f++)v[f].element.style.zIndex=m-f}}}class Ib{constructor(t,e){this.k=t,this.fingerprintDB=e}computeDistance(t,e){return Math.abs(t-e)}findKNearestNeighbors(t){return this.fingerprintDB.map(i=>({x:i.x,y:i.y,z:i.z,distance:this.computeDistance(i.rssi,t)})).sort((i,s)=>i.distance-s.distance).slice(0,this.k)}calculatePosition(t){let e=this.findKNearestNeighbors(t),i=0,s=e.map(l=>{let c=1/(l.distance+1e-4);return i+=c,{...l,weight:c}});s=s.map(l=>({...l,weight:l.weight/i}));let r=s.reduce((l,c)=>l+c.x*c.weight,0),o=s.reduce((l,c)=>l+c.y*c.weight,0),a=s.reduce((l,c)=>l+c.z*c.weight,0);return{x:r,y:o,z:a}}}const _m=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},bn=12,mi=4,Nb={__name:"ThreeContainer",props:{mobileRSSI:{type:Number,required:!0}},setup(n,{expose:t}){const e=n,i=Yn(null);let s,r,o,a,l,c,u,h=new mb,d=new Gt,p=null;const g=[],v=Yn(null),m={x:1.1703017078740392,y:9.868887758567128,z:5.232665689849491},f=()=>{s&&(o.aspect=i.value.clientWidth/i.value.clientHeight,o.updateProjectionMatrix(),s.setSize(i.value.clientWidth,i.value.clientHeight),l.setSize(i.value.clientWidth,i.value.clientHeight))};fp(()=>{if(!i.value)return;r=new lb,r.background=new qt(15661302);const b=new pb(16777215,4473924,1);b.position.set(0,50,0),r.add(b),o=new nn(75,i.value.clientWidth/i.value.clientHeight,.1,1e3),o.position.set(m.x,m.y,m.z),s=new ab({antialias:!0}),s.setSize(i.value.clientWidth,i.value.clientHeight),i.value.appendChild(s.domElement),l=new Lb,l.setSize(i.value.clientWidth,i.value.clientHeight),l.domElement.style.position="absolute",l.domElement.style.top="0",i.value.appendChild(l.domElement),a=new vb(o,l.domElement),a.enableDamping=!0;const E=new eo(bn,bn),L=new fb({color:11184810,side:Cn}),R=new on(E,L);R.rotation.x=-Math.PI/2,r.add(R);const C=new fr(mi,2,mi),I=new hb(C),T=new pm({color:0});for(let ht=0;ht<bn/mi;ht++)for(let pt=0;pt<bn/mi;pt++){const yt=new ub(I,T);yt.position.set(-bn/2+mi/2+ht*mi,1.01,-bn/2+mi/2+pt*mi),r.add(yt)}function M(ht,pt){const yt=document.createElement("div");yt.className="label",yt.textContent=ht,yt.style.color="black",yt.style.fontSize="14px",yt.style.background="rgba(255, 255, 255, 0.7)",yt.style.padding="2px 5px",yt.style.borderRadius="4px";const Xt=new Db(yt);return Xt.position.set(pt.x,pt.y,pt.z),r.add(Xt),Xt}M(`Width : ${bn}m`,{x:0,y:0,z:bn/2+.5}),M(`Length : ${bn}m`,{x:bn/2+.5,y:0,z:0}),M("Access point",{x:-6,y:2,z:-6});const P=M("",{x:0,y:0,z:0});console.log(P);const Z=new ga({color:16711680}),k=new Ea(.2,16,16),et=[{x:-4,y:1,z:-4,rssi:-30},{x:0,y:1,z:-4,rssi:-35},{x:4,y:1,z:-4,rssi:-40},{x:-4,y:1,z:0,rssi:-33},{x:0,y:1,z:0,rssi:-40},{x:4,y:1,z:0,rssi:-42},{x:-4,y:1,z:4,rssi:-37},{x:0,y:1,z:4,rssi:-41},{x:4,y:1,z:4,rssi:-44}];et.forEach(ht=>{const pt=new on(k,Z.clone());pt.position.set(ht.x,ht.y,ht.z),pt.rssi=ht.rssi,r.add(pt),g.push(pt)}),window.addEventListener("mousemove",nt),window.addEventListener("resize",f);function nt(ht){const pt=i.value.getBoundingClientRect();d.x=(ht.clientX-pt.left)/pt.width*2-1,d.y=-((ht.clientY-pt.top)/pt.height)*2+1}function X(){h.setFromCamera(d,o);const ht=h.intersectObjects(g);ht.length>0?p!==ht[0].object&&(p&&(p.material.color.set(16711680),v.value=null,P.visible=!1),p=ht[0].object,p.material.color.set(65280),v.value=p,P.element.textContent=`RSSI : ${p.rssi}`,P.visible=!0,P.position.set(p.position.x,p.position.y,p.position.z)):p&&(p.material.color.set(16711680),p=null,P.visible=!1,v.value=null)}c=new Ib(3,et);const K=new ga({color:255}),H=new Ea(.2,16,16);u=new on(H,K);function ft(){requestAnimationFrame(ft),a.update(),X(),s.render(r,o),l.render(r,o)}ft()});const A=()=>{if(!c)return;const b=c.calculatePosition(e.mobileRSSI);u.position.set(b.x,1,b.z),r.add(u)};return Mu(()=>{window.removeEventListener("mousemove",onMouseMove),window.removeEventListener("resize",f),s.dispose()}),t({computePosition:A,hoveredObject:v}),(b,E)=>($r(),da("div",{class:"rounded shadow",ref_key:"threeContainer",ref:i,style:{width:"100%",height:"100%"}},null,512))}},Ob=_m(Nb,[["__scopeId","data-v-b7a2930d"]]),Ub={id:"container",class:"container-fluid"},Fb={class:"d-flex flex-column h-100"},Bb={class:"d-flex flex-column"},zb={class:"d-flex flex-row flex-wrap justify-content-between"},Hb={class:"m-4 d-flex flex-row gap-2"},Vb=["placeholder"],kb={class:"mt-auto mb-auto"},Gb={key:0,class:"badge text-bg-light fw-medium"},Wb={class:"flex-grow-1 mb-4 px-3 position-relative"},$b={__name:"Home",setup(n){const t=Yn(!0),e=Yn(!0),i=Yn(!0),s=Yn(!1),r=Yn(null),o=Yn(-32),a=Yn(null),l=()=>{a.value&&a.value.computePosition()};return(c,u)=>{var h,d,p,g,v,m,f,A,b;return $r(),da("div",Ub,[tn("div",Fb,[tn("div",Bb,[u[2]||(u[2]=tn("div",{class:"text-center my-4"},[tn("h1",null,"TD - Fingerprint")],-1)),tn("div",zb,[tn("div",Hb,[fg(tn("input",{type:"number","onUpdate:modelValue":u[0]||(u[0]=E=>o.value=E),class:"form-control mt-auto mb-auto",placeholder:o.value},null,8,Vb),[[Bv,o.value]]),tn("button",{onClick:u[1]||(u[1]=E=>l()),class:"btn btn-primary"},"Compute phone pos"),Ip(" "+jo(r.value?"Position computed !":""),1)]),tn("h3",kb,[(h=a.value)!=null&&h.hoveredObject?($r(),da("span",Gb,"Coords : "+jo(((p=(d=a.value)==null?void 0:d.hoveredObject)==null?void 0:p.position.x)!=null?"x : "+((v=(g=a.value)==null?void 0:g.hoveredObject)==null?void 0:v.position.x):"")+" "+jo(((f=(m=a.value)==null?void 0:m.hoveredObject)==null?void 0:f.position.z)!=null?"z : "+((b=(A=a.value)==null?void 0:A.hoveredObject)==null?void 0:b.position.z):""),1)):ov("",!0)])])]),tn("div",Wb,[xn(Ob,{ref_key:"threeContainerComp",ref:a,opacity:t.value,bin:e.value,mobileRSSI:o.value,controllers:i.value,openState:s.value},null,8,["opacity","bin","mobileRSSI","controllers","openState"])])])])}}},Xb=_m($b,[["__scopeId","data-v-5ba6e38c"]]),Yb={class:"h-100"},qb={__name:"App",setup(n){return(t,e)=>($r(),da("div",Yb,[xn(Xb)]))}};var Oe="top",je="bottom",Ke="right",Ue="left",za="auto",pr=[Oe,je,Ke,Ue],os="start",nr="end",gm="clippingParents",Fu="viewport",Ns="popper",vm="reference",Jc=pr.reduce(function(n,t){return n.concat([t+"-"+os,t+"-"+nr])},[]),Bu=[].concat(pr,[za]).reduce(function(n,t){return n.concat([t,t+"-"+os,t+"-"+nr])},[]),xm="beforeRead",Em="read",Sm="afterRead",Mm="beforeMain",ym="main",bm="afterMain",Tm="beforeWrite",Am="write",wm="afterWrite",Cm=[xm,Em,Sm,Mm,ym,bm,Tm,Am,wm];function Un(n){return n?(n.nodeName||"").toLowerCase():null}function Ze(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function as(n){var t=Ze(n).Element;return n instanceof t||n instanceof Element}function an(n){var t=Ze(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function zu(n){if(typeof ShadowRoot>"u")return!1;var t=Ze(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function jb(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var i=t.styles[e]||{},s=t.attributes[e]||{},r=t.elements[e];!an(r)||!Un(r)||(Object.assign(r.style,i),Object.keys(s).forEach(function(o){var a=s[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function Kb(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(i){var s=t.elements[i],r=t.attributes[i]||{},o=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:e[i]),a=o.reduce(function(l,c){return l[c]="",l},{});!an(s)||!Un(s)||(Object.assign(s.style,a),Object.keys(r).forEach(function(l){s.removeAttribute(l)}))})}}const Hu={name:"applyStyles",enabled:!0,phase:"write",fn:jb,effect:Kb,requires:["computeStyles"]};function Ln(n){return n.split("-")[0]}var ts=Math.max,Sa=Math.min,ir=Math.round;function Qc(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Rm(){return!/^((?!chrome|android).)*safari/i.test(Qc())}function sr(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var i=n.getBoundingClientRect(),s=1,r=1;t&&an(n)&&(s=n.offsetWidth>0&&ir(i.width)/n.offsetWidth||1,r=n.offsetHeight>0&&ir(i.height)/n.offsetHeight||1);var o=as(n)?Ze(n):window,a=o.visualViewport,l=!Rm()&&e,c=(i.left+(l&&a?a.offsetLeft:0))/s,u=(i.top+(l&&a?a.offsetTop:0))/r,h=i.width/s,d=i.height/r;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c,x:c,y:u}}function Vu(n){var t=sr(n),e=n.offsetWidth,i=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:i}}function Pm(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&zu(e)){var i=t;do{if(i&&n.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function si(n){return Ze(n).getComputedStyle(n)}function Zb(n){return["table","td","th"].indexOf(Un(n))>=0}function Ii(n){return((as(n)?n.ownerDocument:n.document)||window.document).documentElement}function Ha(n){return Un(n)==="html"?n:n.assignedSlot||n.parentNode||(zu(n)?n.host:null)||Ii(n)}function Zf(n){return!an(n)||si(n).position==="fixed"?null:n.offsetParent}function Jb(n){var t=/firefox/i.test(Qc()),e=/Trident/i.test(Qc());if(e&&an(n)){var i=si(n);if(i.position==="fixed")return null}var s=Ha(n);for(zu(s)&&(s=s.host);an(s)&&["html","body"].indexOf(Un(s))<0;){var r=si(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||t&&r.willChange==="filter"||t&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function no(n){for(var t=Ze(n),e=Zf(n);e&&Zb(e)&&si(e).position==="static";)e=Zf(e);return e&&(Un(e)==="html"||Un(e)==="body"&&si(e).position==="static")?t:e||Jb(n)||t}function ku(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Hr(n,t,e){return ts(n,Sa(t,e))}function Qb(n,t,e){var i=Hr(n,t,e);return i>e?e:i}function Dm(){return{top:0,right:0,bottom:0,left:0}}function Lm(n){return Object.assign({},Dm(),n)}function Im(n,t){return t.reduce(function(e,i){return e[i]=n,e},{})}var tT=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Lm(typeof t!="number"?t:Im(t,pr))};function eT(n){var t,e=n.state,i=n.name,s=n.options,r=e.elements.arrow,o=e.modifiersData.popperOffsets,a=Ln(e.placement),l=ku(a),c=[Ue,Ke].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var h=tT(s.padding,e),d=Vu(r),p=l==="y"?Oe:Ue,g=l==="y"?je:Ke,v=e.rects.reference[u]+e.rects.reference[l]-o[l]-e.rects.popper[u],m=o[l]-e.rects.reference[l],f=no(r),A=f?l==="y"?f.clientHeight||0:f.clientWidth||0:0,b=v/2-m/2,E=h[p],L=A-d[u]-h[g],R=A/2-d[u]/2+b,C=Hr(E,R,L),I=l;e.modifiersData[i]=(t={},t[I]=C,t.centerOffset=C-R,t)}}function nT(n){var t=n.state,e=n.options,i=e.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||Pm(t.elements.popper,s)&&(t.elements.arrow=s))}const Nm={name:"arrow",enabled:!0,phase:"main",fn:eT,effect:nT,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function rr(n){return n.split("-")[1]}var iT={top:"auto",right:"auto",bottom:"auto",left:"auto"};function sT(n,t){var e=n.x,i=n.y,s=t.devicePixelRatio||1;return{x:ir(e*s)/s||0,y:ir(i*s)/s||0}}function Jf(n){var t,e=n.popper,i=n.popperRect,s=n.placement,r=n.variation,o=n.offsets,a=n.position,l=n.gpuAcceleration,c=n.adaptive,u=n.roundOffsets,h=n.isFixed,d=o.x,p=d===void 0?0:d,g=o.y,v=g===void 0?0:g,m=typeof u=="function"?u({x:p,y:v}):{x:p,y:v};p=m.x,v=m.y;var f=o.hasOwnProperty("x"),A=o.hasOwnProperty("y"),b=Ue,E=Oe,L=window;if(c){var R=no(e),C="clientHeight",I="clientWidth";if(R===Ze(e)&&(R=Ii(e),si(R).position!=="static"&&a==="absolute"&&(C="scrollHeight",I="scrollWidth")),R=R,s===Oe||(s===Ue||s===Ke)&&r===nr){E=je;var T=h&&R===L&&L.visualViewport?L.visualViewport.height:R[C];v-=T-i.height,v*=l?1:-1}if(s===Ue||(s===Oe||s===je)&&r===nr){b=Ke;var M=h&&R===L&&L.visualViewport?L.visualViewport.width:R[I];p-=M-i.width,p*=l?1:-1}}var P=Object.assign({position:a},c&&iT),Z=u===!0?sT({x:p,y:v},Ze(e)):{x:p,y:v};if(p=Z.x,v=Z.y,l){var k;return Object.assign({},P,(k={},k[E]=A?"0":"",k[b]=f?"0":"",k.transform=(L.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",k))}return Object.assign({},P,(t={},t[E]=A?v+"px":"",t[b]=f?p+"px":"",t.transform="",t))}function rT(n){var t=n.state,e=n.options,i=e.gpuAcceleration,s=i===void 0?!0:i,r=e.adaptive,o=r===void 0?!0:r,a=e.roundOffsets,l=a===void 0?!0:a,c={placement:Ln(t.placement),variation:rr(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Jf(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Jf(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Gu={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:rT,data:{}};var Vo={passive:!0};function oT(n){var t=n.state,e=n.instance,i=n.options,s=i.scroll,r=s===void 0?!0:s,o=i.resize,a=o===void 0?!0:o,l=Ze(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",e.update,Vo)}),a&&l.addEventListener("resize",e.update,Vo),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",e.update,Vo)}),a&&l.removeEventListener("resize",e.update,Vo)}}const Wu={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:oT,data:{}};var aT={left:"right",right:"left",bottom:"top",top:"bottom"};function ra(n){return n.replace(/left|right|bottom|top/g,function(t){return aT[t]})}var lT={start:"end",end:"start"};function Qf(n){return n.replace(/start|end/g,function(t){return lT[t]})}function $u(n){var t=Ze(n),e=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:e,scrollTop:i}}function Xu(n){return sr(Ii(n)).left+$u(n).scrollLeft}function cT(n,t){var e=Ze(n),i=Ii(n),s=e.visualViewport,r=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;var c=Rm();(c||!c&&t==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a+Xu(n),y:l}}function uT(n){var t,e=Ii(n),i=$u(n),s=(t=n.ownerDocument)==null?void 0:t.body,r=ts(e.scrollWidth,e.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=ts(e.scrollHeight,e.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+Xu(n),l=-i.scrollTop;return si(s||e).direction==="rtl"&&(a+=ts(e.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Yu(n){var t=si(n),e=t.overflow,i=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+s+i)}function Om(n){return["html","body","#document"].indexOf(Un(n))>=0?n.ownerDocument.body:an(n)&&Yu(n)?n:Om(Ha(n))}function Vr(n,t){var e;t===void 0&&(t=[]);var i=Om(n),s=i===((e=n.ownerDocument)==null?void 0:e.body),r=Ze(i),o=s?[r].concat(r.visualViewport||[],Yu(i)?i:[]):i,a=t.concat(o);return s?a:a.concat(Vr(Ha(o)))}function tu(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function hT(n,t){var e=sr(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function td(n,t,e){return t===Fu?tu(cT(n,e)):as(t)?hT(t,e):tu(uT(Ii(n)))}function fT(n){var t=Vr(Ha(n)),e=["absolute","fixed"].indexOf(si(n).position)>=0,i=e&&an(n)?no(n):n;return as(i)?t.filter(function(s){return as(s)&&Pm(s,i)&&Un(s)!=="body"}):[]}function dT(n,t,e,i){var s=t==="clippingParents"?fT(n):[].concat(t),r=[].concat(s,[e]),o=r[0],a=r.reduce(function(l,c){var u=td(n,c,i);return l.top=ts(u.top,l.top),l.right=Sa(u.right,l.right),l.bottom=Sa(u.bottom,l.bottom),l.left=ts(u.left,l.left),l},td(n,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Um(n){var t=n.reference,e=n.element,i=n.placement,s=i?Ln(i):null,r=i?rr(i):null,o=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,l;switch(s){case Oe:l={x:o,y:t.y-e.height};break;case je:l={x:o,y:t.y+t.height};break;case Ke:l={x:t.x+t.width,y:a};break;case Ue:l={x:t.x-e.width,y:a};break;default:l={x:t.x,y:t.y}}var c=s?ku(s):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case os:l[c]=l[c]-(t[u]/2-e[u]/2);break;case nr:l[c]=l[c]+(t[u]/2-e[u]/2);break}}return l}function or(n,t){t===void 0&&(t={});var e=t,i=e.placement,s=i===void 0?n.placement:i,r=e.strategy,o=r===void 0?n.strategy:r,a=e.boundary,l=a===void 0?gm:a,c=e.rootBoundary,u=c===void 0?Fu:c,h=e.elementContext,d=h===void 0?Ns:h,p=e.altBoundary,g=p===void 0?!1:p,v=e.padding,m=v===void 0?0:v,f=Lm(typeof m!="number"?m:Im(m,pr)),A=d===Ns?vm:Ns,b=n.rects.popper,E=n.elements[g?A:d],L=dT(as(E)?E:E.contextElement||Ii(n.elements.popper),l,u,o),R=sr(n.elements.reference),C=Um({reference:R,element:b,strategy:"absolute",placement:s}),I=tu(Object.assign({},b,C)),T=d===Ns?I:R,M={top:L.top-T.top+f.top,bottom:T.bottom-L.bottom+f.bottom,left:L.left-T.left+f.left,right:T.right-L.right+f.right},P=n.modifiersData.offset;if(d===Ns&&P){var Z=P[s];Object.keys(M).forEach(function(k){var et=[Ke,je].indexOf(k)>=0?1:-1,nt=[Oe,je].indexOf(k)>=0?"y":"x";M[k]+=Z[nt]*et})}return M}function pT(n,t){t===void 0&&(t={});var e=t,i=e.placement,s=e.boundary,r=e.rootBoundary,o=e.padding,a=e.flipVariations,l=e.allowedAutoPlacements,c=l===void 0?Bu:l,u=rr(i),h=u?a?Jc:Jc.filter(function(g){return rr(g)===u}):pr,d=h.filter(function(g){return c.indexOf(g)>=0});d.length===0&&(d=h);var p=d.reduce(function(g,v){return g[v]=or(n,{placement:v,boundary:s,rootBoundary:r,padding:o})[Ln(v)],g},{});return Object.keys(p).sort(function(g,v){return p[g]-p[v]})}function mT(n){if(Ln(n)===za)return[];var t=ra(n);return[Qf(n),t,Qf(t)]}function _T(n){var t=n.state,e=n.options,i=n.name;if(!t.modifiersData[i]._skip){for(var s=e.mainAxis,r=s===void 0?!0:s,o=e.altAxis,a=o===void 0?!0:o,l=e.fallbackPlacements,c=e.padding,u=e.boundary,h=e.rootBoundary,d=e.altBoundary,p=e.flipVariations,g=p===void 0?!0:p,v=e.allowedAutoPlacements,m=t.options.placement,f=Ln(m),A=f===m,b=l||(A||!g?[ra(m)]:mT(m)),E=[m].concat(b).reduce(function(tt,lt){return tt.concat(Ln(lt)===za?pT(t,{placement:lt,boundary:u,rootBoundary:h,padding:c,flipVariations:g,allowedAutoPlacements:v}):lt)},[]),L=t.rects.reference,R=t.rects.popper,C=new Map,I=!0,T=E[0],M=0;M<E.length;M++){var P=E[M],Z=Ln(P),k=rr(P)===os,et=[Oe,je].indexOf(Z)>=0,nt=et?"width":"height",X=or(t,{placement:P,boundary:u,rootBoundary:h,altBoundary:d,padding:c}),K=et?k?Ke:Ue:k?je:Oe;L[nt]>R[nt]&&(K=ra(K));var H=ra(K),ft=[];if(r&&ft.push(X[Z]<=0),a&&ft.push(X[K]<=0,X[H]<=0),ft.every(function(tt){return tt})){T=P,I=!1;break}C.set(P,ft)}if(I)for(var ht=g?3:1,pt=function(lt){var St=E.find(function(mt){var At=C.get(mt);if(At)return At.slice(0,lt).every(function(Nt){return Nt})});if(St)return T=St,"break"},yt=ht;yt>0;yt--){var Xt=pt(yt);if(Xt==="break")break}t.placement!==T&&(t.modifiersData[i]._skip=!0,t.placement=T,t.reset=!0)}}const Fm={name:"flip",enabled:!0,phase:"main",fn:_T,requiresIfExists:["offset"],data:{_skip:!1}};function ed(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function nd(n){return[Oe,Ke,je,Ue].some(function(t){return n[t]>=0})}function gT(n){var t=n.state,e=n.name,i=t.rects.reference,s=t.rects.popper,r=t.modifiersData.preventOverflow,o=or(t,{elementContext:"reference"}),a=or(t,{altBoundary:!0}),l=ed(o,i),c=ed(a,s,r),u=nd(l),h=nd(c);t.modifiersData[e]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const Bm={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:gT};function vT(n,t,e){var i=Ln(n),s=[Ue,Oe].indexOf(i)>=0?-1:1,r=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[Ue,Ke].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function xT(n){var t=n.state,e=n.options,i=n.name,s=e.offset,r=s===void 0?[0,0]:s,o=Bu.reduce(function(u,h){return u[h]=vT(h,t.rects,r),u},{}),a=o[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[i]=o}const zm={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:xT};function ET(n){var t=n.state,e=n.name;t.modifiersData[e]=Um({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const qu={name:"popperOffsets",enabled:!0,phase:"read",fn:ET,data:{}};function ST(n){return n==="x"?"y":"x"}function MT(n){var t=n.state,e=n.options,i=n.name,s=e.mainAxis,r=s===void 0?!0:s,o=e.altAxis,a=o===void 0?!1:o,l=e.boundary,c=e.rootBoundary,u=e.altBoundary,h=e.padding,d=e.tether,p=d===void 0?!0:d,g=e.tetherOffset,v=g===void 0?0:g,m=or(t,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),f=Ln(t.placement),A=rr(t.placement),b=!A,E=ku(f),L=ST(E),R=t.modifiersData.popperOffsets,C=t.rects.reference,I=t.rects.popper,T=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,M=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,Z={x:0,y:0};if(R){if(r){var k,et=E==="y"?Oe:Ue,nt=E==="y"?je:Ke,X=E==="y"?"height":"width",K=R[E],H=K+m[et],ft=K-m[nt],ht=p?-I[X]/2:0,pt=A===os?C[X]:I[X],yt=A===os?-I[X]:-C[X],Xt=t.elements.arrow,tt=p&&Xt?Vu(Xt):{width:0,height:0},lt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Dm(),St=lt[et],mt=lt[nt],At=Hr(0,C[X],tt[X]),Nt=b?C[X]/2-ht-At-St-M.mainAxis:pt-At-St-M.mainAxis,Ft=b?-C[X]/2+ht+At+mt+M.mainAxis:yt+At+mt+M.mainAxis,Zt=t.elements.arrow&&no(t.elements.arrow),Yt=Zt?E==="y"?Zt.clientTop||0:Zt.clientLeft||0:0,w=(k=P==null?void 0:P[E])!=null?k:0,x=K+Nt-w-Yt,Y=K+Ft-w,J=Hr(p?Sa(H,x):H,K,p?ts(ft,Y):ft);R[E]=J,Z[E]=J-K}if(a){var q,G=E==="x"?Oe:Ue,rt=E==="x"?je:Ke,j=R[L],S=L==="y"?"height":"width",_=j+m[G],D=j-m[rt],O=[Oe,Ue].indexOf(f)!==-1,V=(q=P==null?void 0:P[L])!=null?q:0,B=O?_:j-C[S]-I[S]-V+M.altAxis,ct=O?j+C[S]+I[S]-V-M.altAxis:D,ot=p&&O?Qb(B,j,ct):Hr(p?B:_,j,p?ct:D);R[L]=ot,Z[L]=ot-j}t.modifiersData[i]=Z}}const Hm={name:"preventOverflow",enabled:!0,phase:"main",fn:MT,requiresIfExists:["offset"]};function yT(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function bT(n){return n===Ze(n)||!an(n)?$u(n):yT(n)}function TT(n){var t=n.getBoundingClientRect(),e=ir(t.width)/n.offsetWidth||1,i=ir(t.height)/n.offsetHeight||1;return e!==1||i!==1}function AT(n,t,e){e===void 0&&(e=!1);var i=an(t),s=an(t)&&TT(t),r=Ii(t),o=sr(n,s,e),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!e)&&((Un(t)!=="body"||Yu(r))&&(a=bT(t)),an(t)?(l=sr(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):r&&(l.x=Xu(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function wT(n){var t=new Map,e=new Set,i=[];n.forEach(function(r){t.set(r.name,r)});function s(r){e.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!e.has(a)){var l=t.get(a);l&&s(l)}}),i.push(r)}return n.forEach(function(r){e.has(r.name)||s(r)}),i}function CT(n){var t=wT(n);return Cm.reduce(function(e,i){return e.concat(t.filter(function(s){return s.phase===i}))},[])}function RT(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function PT(n){var t=n.reduce(function(e,i){var s=e[i.name];return e[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,e},{});return Object.keys(t).map(function(e){return t[e]})}var id={placement:"bottom",modifiers:[],strategy:"absolute"};function sd(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Va(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,i=e===void 0?[]:e,s=t.defaultOptions,r=s===void 0?id:s;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},id,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],d=!1,p={state:u,setOptions:function(f){var A=typeof f=="function"?f(u.options):f;v(),u.options=Object.assign({},r,u.options,A),u.scrollParents={reference:as(a)?Vr(a):a.contextElement?Vr(a.contextElement):[],popper:Vr(l)};var b=CT(PT([].concat(i,u.options.modifiers)));return u.orderedModifiers=b.filter(function(E){return E.enabled}),g(),p.update()},forceUpdate:function(){if(!d){var f=u.elements,A=f.reference,b=f.popper;if(sd(A,b)){u.rects={reference:AT(A,no(b),u.options.strategy==="fixed"),popper:Vu(b)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(M){return u.modifiersData[M.name]=Object.assign({},M.data)});for(var E=0;E<u.orderedModifiers.length;E++){if(u.reset===!0){u.reset=!1,E=-1;continue}var L=u.orderedModifiers[E],R=L.fn,C=L.options,I=C===void 0?{}:C,T=L.name;typeof R=="function"&&(u=R({state:u,options:I,name:T,instance:p})||u)}}}},update:RT(function(){return new Promise(function(m){p.forceUpdate(),m(u)})}),destroy:function(){v(),d=!0}};if(!sd(a,l))return p;p.setOptions(c).then(function(m){!d&&c.onFirstUpdate&&c.onFirstUpdate(m)});function g(){u.orderedModifiers.forEach(function(m){var f=m.name,A=m.options,b=A===void 0?{}:A,E=m.effect;if(typeof E=="function"){var L=E({state:u,name:f,instance:p,options:b}),R=function(){};h.push(L||R)}})}function v(){h.forEach(function(m){return m()}),h=[]}return p}}var DT=Va(),LT=[Wu,qu,Gu,Hu],IT=Va({defaultModifiers:LT}),NT=[Wu,qu,Gu,Hu,zm,Fm,Hm,Nm,Bm],ju=Va({defaultModifiers:NT});const Vm=Object.freeze(Object.defineProperty({__proto__:null,afterMain:bm,afterRead:Sm,afterWrite:wm,applyStyles:Hu,arrow:Nm,auto:za,basePlacements:pr,beforeMain:Mm,beforeRead:xm,beforeWrite:Tm,bottom:je,clippingParents:gm,computeStyles:Gu,createPopper:ju,createPopperBase:DT,createPopperLite:IT,detectOverflow:or,end:nr,eventListeners:Wu,flip:Fm,hide:Bm,left:Ue,main:ym,modifierPhases:Cm,offset:zm,placements:Bu,popper:Ns,popperGenerator:Va,popperOffsets:qu,preventOverflow:Hm,read:Em,reference:vm,right:Ke,start:os,top:Oe,variationPlacements:Jc,viewport:Fu,write:Am},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const _i=new Map,Bl={set(n,t,e){_i.has(n)||_i.set(n,new Map);const i=_i.get(n);if(!i.has(t)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(t,e)},get(n,t){return _i.has(n)&&_i.get(n).get(t)||null},remove(n,t){if(!_i.has(n))return;const e=_i.get(n);e.delete(t),e.size===0&&_i.delete(n)}},OT=1e6,UT=1e3,eu="transitionend",km=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),FT=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),BT=n=>{do n+=Math.floor(Math.random()*OT);while(document.getElementById(n));return n},zT=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const i=Number.parseFloat(t),s=Number.parseFloat(e);return!i&&!s?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*UT)},Gm=n=>{n.dispatchEvent(new Event(eu))},ei=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),wi=n=>ei(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(km(n)):null,mr=n=>{if(!ei(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const i=n.closest("summary");if(i&&i.parentNode!==e||i===null)return!1}return t},Ci=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",Wm=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?Wm(n.parentNode):null},Ma=()=>{},io=n=>{n.offsetHeight},$m=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,zl=[],HT=n=>{document.readyState==="loading"?(zl.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of zl)t()}),zl.push(n)):n()},ln=()=>document.documentElement.dir==="rtl",un=n=>{HT(()=>{const t=$m();if(t){const e=n.NAME,i=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=i,n.jQueryInterface)}})},ze=(n,t=[],e=n)=>typeof n=="function"?n(...t):e,Xm=(n,t,e=!0)=>{if(!e){ze(n);return}const s=zT(t)+5;let r=!1;const o=({target:a})=>{a===t&&(r=!0,t.removeEventListener(eu,o),ze(n))};t.addEventListener(eu,o),setTimeout(()=>{r||Gm(t)},s)},Ku=(n,t,e,i)=>{const s=n.length;let r=n.indexOf(t);return r===-1?!e&&i?n[s-1]:n[0]:(r+=e?1:-1,i&&(r=(r+s)%s),n[Math.max(0,Math.min(r,s-1))])},VT=/[^.]*(?=\..*)\.|.*/,kT=/\..*/,GT=/::\d+$/,Hl={};let rd=1;const Ym={mouseenter:"mouseover",mouseleave:"mouseout"},WT=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function qm(n,t){return t&&`${t}::${rd++}`||n.uidEvent||rd++}function jm(n){const t=qm(n);return n.uidEvent=t,Hl[t]=Hl[t]||{},Hl[t]}function $T(n,t){return function e(i){return Zu(i,{delegateTarget:n}),e.oneOff&&at.off(n,i.type,t),t.apply(n,[i])}}function XT(n,t,e){return function i(s){const r=n.querySelectorAll(t);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Zu(s,{delegateTarget:o}),i.oneOff&&at.off(n,s.type,t,e),e.apply(o,[s])}}function Km(n,t,e=null){return Object.values(n).find(i=>i.callable===t&&i.delegationSelector===e)}function Zm(n,t,e){const i=typeof t=="string",s=i?e:t||e;let r=Jm(n);return WT.has(r)||(r=n),[i,s,r]}function od(n,t,e,i,s){if(typeof t!="string"||!n)return;let[r,o,a]=Zm(t,e,i);t in Ym&&(o=(g=>function(v){if(!v.relatedTarget||v.relatedTarget!==v.delegateTarget&&!v.delegateTarget.contains(v.relatedTarget))return g.call(this,v)})(o));const l=jm(n),c=l[a]||(l[a]={}),u=Km(c,o,r?e:null);if(u){u.oneOff=u.oneOff&&s;return}const h=qm(o,t.replace(VT,"")),d=r?XT(n,e,o):$T(n,o);d.delegationSelector=r?e:null,d.callable=o,d.oneOff=s,d.uidEvent=h,c[h]=d,n.addEventListener(a,d,r)}function nu(n,t,e,i,s){const r=Km(t[e],i,s);r&&(n.removeEventListener(e,r,!!s),delete t[e][r.uidEvent])}function YT(n,t,e,i){const s=t[e]||{};for(const[r,o]of Object.entries(s))r.includes(i)&&nu(n,t,e,o.callable,o.delegationSelector)}function Jm(n){return n=n.replace(kT,""),Ym[n]||n}const at={on(n,t,e,i){od(n,t,e,i,!1)},one(n,t,e,i){od(n,t,e,i,!0)},off(n,t,e,i){if(typeof t!="string"||!n)return;const[s,r,o]=Zm(t,e,i),a=o!==t,l=jm(n),c=l[o]||{},u=t.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;nu(n,l,o,r,s?e:null);return}if(u)for(const h of Object.keys(l))YT(n,l,h,t.slice(1));for(const[h,d]of Object.entries(c)){const p=h.replace(GT,"");(!a||t.includes(p))&&nu(n,l,o,d.callable,d.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const i=$m(),s=Jm(t),r=t!==s;let o=null,a=!0,l=!0,c=!1;r&&i&&(o=i.Event(t,e),i(n).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());const u=Zu(new Event(t,{bubbles:a,cancelable:!0}),e);return c&&u.preventDefault(),l&&n.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Zu(n,t={}){for(const[e,i]of Object.entries(t))try{n[e]=i}catch{Object.defineProperty(n,e,{configurable:!0,get(){return i}})}return n}function ad(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Vl(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const ni={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Vl(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Vl(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of e){let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),t[s]=ad(n.dataset[i])}return t},getDataAttribute(n,t){return ad(n.getAttribute(`data-bs-${Vl(t)}`))}};class so{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=ei(e)?ni.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof i=="object"?i:{},...ei(e)?ni.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[i,s]of Object.entries(e)){const r=t[i],o=ei(r)?"element":FT(r);if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`)}}}const qT="5.3.3";class Sn extends so{constructor(t,e){super(),t=wi(t),t&&(this._element=t,this._config=this._getConfig(e),Bl.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Bl.remove(this._element,this.constructor.DATA_KEY),at.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){Xm(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Bl.get(wi(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return qT}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const kl=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>km(e)).join(","):null},Dt={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let i=n.parentNode.closest(t);for(;i;)e.push(i),i=i.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!Ci(e)&&mr(e))},getSelectorFromElement(n){const t=kl(n);return t&&Dt.findOne(t)?t:null},getElementFromSelector(n){const t=kl(n);return t?Dt.findOne(t):null},getMultipleElementsFromSelector(n){const t=kl(n);return t?Dt.find(t):[]}},ka=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,i=n.NAME;at.on(document,e,`[data-bs-dismiss="${i}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),Ci(this))return;const r=Dt.getElementFromSelector(this)||this.closest(`.${i}`);n.getOrCreateInstance(r)[t]()})},jT="alert",KT="bs.alert",Qm=`.${KT}`,ZT=`close${Qm}`,JT=`closed${Qm}`,QT="fade",tA="show";class Ga extends Sn{static get NAME(){return jT}close(){if(at.trigger(this._element,ZT).defaultPrevented)return;this._element.classList.remove(tA);const e=this._element.classList.contains(QT);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),at.trigger(this._element,JT),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Ga.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}ka(Ga,"close");un(Ga);const eA="button",nA="bs.button",iA=`.${nA}`,sA=".data-api",rA="active",ld='[data-bs-toggle="button"]',oA=`click${iA}${sA}`;class Wa extends Sn{static get NAME(){return eA}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(rA))}static jQueryInterface(t){return this.each(function(){const e=Wa.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}at.on(document,oA,ld,n=>{n.preventDefault();const t=n.target.closest(ld);Wa.getOrCreateInstance(t).toggle()});un(Wa);const aA="swipe",_r=".bs.swipe",lA=`touchstart${_r}`,cA=`touchmove${_r}`,uA=`touchend${_r}`,hA=`pointerdown${_r}`,fA=`pointerup${_r}`,dA="touch",pA="pen",mA="pointer-event",_A=40,gA={endCallback:null,leftCallback:null,rightCallback:null},vA={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ya extends so{constructor(t,e){super(),this._element=t,!(!t||!ya.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return gA}static get DefaultType(){return vA}static get NAME(){return aA}dispose(){at.off(this._element,_r)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),ze(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=_A)return;const e=t/this._deltaX;this._deltaX=0,e&&ze(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(at.on(this._element,hA,t=>this._start(t)),at.on(this._element,fA,t=>this._end(t)),this._element.classList.add(mA)):(at.on(this._element,lA,t=>this._start(t)),at.on(this._element,cA,t=>this._move(t)),at.on(this._element,uA,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===pA||t.pointerType===dA)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const xA="carousel",EA="bs.carousel",Ni=`.${EA}`,t_=".data-api",SA="ArrowLeft",MA="ArrowRight",yA=500,wr="next",Rs="prev",Os="left",oa="right",bA=`slide${Ni}`,Gl=`slid${Ni}`,TA=`keydown${Ni}`,AA=`mouseenter${Ni}`,wA=`mouseleave${Ni}`,CA=`dragstart${Ni}`,RA=`load${Ni}${t_}`,PA=`click${Ni}${t_}`,e_="carousel",ko="active",DA="slide",LA="carousel-item-end",IA="carousel-item-start",NA="carousel-item-next",OA="carousel-item-prev",n_=".active",i_=".carousel-item",UA=n_+i_,FA=".carousel-item img",BA=".carousel-indicators",zA="[data-bs-slide], [data-bs-slide-to]",HA='[data-bs-ride="carousel"]',VA={[SA]:oa,[MA]:Os},kA={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},GA={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ro extends Sn{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Dt.findOne(BA,this._element),this._addEventListeners(),this._config.ride===e_&&this.cycle()}static get Default(){return kA}static get DefaultType(){return GA}static get NAME(){return xA}next(){this._slide(wr)}nextWhenVisible(){!document.hidden&&mr(this._element)&&this.next()}prev(){this._slide(Rs)}pause(){this._isSliding&&Gm(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){at.one(this._element,Gl,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){at.one(this._element,Gl,()=>this.to(t));return}const i=this._getItemIndex(this._getActive());if(i===t)return;const s=t>i?wr:Rs;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&at.on(this._element,TA,t=>this._keydown(t)),this._config.pause==="hover"&&(at.on(this._element,AA,()=>this.pause()),at.on(this._element,wA,()=>this._maybeEnableCycle())),this._config.touch&&ya.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of Dt.find(FA,this._element))at.on(i,CA,s=>s.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(Os)),rightCallback:()=>this._slide(this._directionToOrder(oa)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),yA+this._config.interval))}};this._swipeHelper=new ya(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=VA[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=Dt.findOne(n_,this._indicatorsElement);e.classList.remove(ko),e.removeAttribute("aria-current");const i=Dt.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(ko),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),s=t===wr,r=e||Ku(this._getItems(),i,s,this._config.wrap);if(r===i)return;const o=this._getItemIndex(r),a=p=>at.trigger(this._element,p,{relatedTarget:r,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(a(bA).defaultPrevented||!i||!r)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=s?IA:LA,h=s?NA:OA;r.classList.add(h),io(r),i.classList.add(u),r.classList.add(u);const d=()=>{r.classList.remove(u,h),r.classList.add(ko),i.classList.remove(ko,h,u),this._isSliding=!1,a(Gl)};this._queueCallback(d,i,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(DA)}_getActive(){return Dt.findOne(UA,this._element)}_getItems(){return Dt.find(i_,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return ln()?t===Os?Rs:wr:t===Os?wr:Rs}_orderToDirection(t){return ln()?t===Rs?Os:oa:t===Rs?oa:Os}static jQueryInterface(t){return this.each(function(){const e=ro.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}at.on(document,PA,zA,function(n){const t=Dt.getElementFromSelector(this);if(!t||!t.classList.contains(e_))return;n.preventDefault();const e=ro.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");if(i){e.to(i),e._maybeEnableCycle();return}if(ni.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});at.on(window,RA,()=>{const n=Dt.find(HA);for(const t of n)ro.getOrCreateInstance(t)});un(ro);const WA="collapse",$A="bs.collapse",oo=`.${$A}`,XA=".data-api",YA=`show${oo}`,qA=`shown${oo}`,jA=`hide${oo}`,KA=`hidden${oo}`,ZA=`click${oo}${XA}`,Wl="show",zs="collapse",Go="collapsing",JA="collapsed",QA=`:scope .${zs} .${zs}`,tw="collapse-horizontal",ew="width",nw="height",iw=".collapse.show, .collapse.collapsing",iu='[data-bs-toggle="collapse"]',sw={parent:null,toggle:!0},rw={parent:"(null|element)",toggle:"boolean"};class Kr extends Sn{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=Dt.find(iu);for(const s of i){const r=Dt.getSelectorFromElement(s),o=Dt.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return sw}static get DefaultType(){return rw}static get NAME(){return WA}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(iw).filter(a=>a!==this._element).map(a=>Kr.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||at.trigger(this._element,YA).defaultPrevented)return;for(const a of t)a.hide();const i=this._getDimension();this._element.classList.remove(zs),this._element.classList.add(Go),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Go),this._element.classList.add(zs,Wl),this._element.style[i]="",at.trigger(this._element,qA)},o=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||at.trigger(this._element,jA).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,io(this._element),this._element.classList.add(Go),this._element.classList.remove(zs,Wl);for(const s of this._triggerArray){const r=Dt.getElementFromSelector(s);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Go),this._element.classList.add(zs),at.trigger(this._element,KA)};this._element.style[e]="",this._queueCallback(i,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Wl)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=wi(t.parent),t}_getDimension(){return this._element.classList.contains(tw)?ew:nw}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(iu);for(const e of t){const i=Dt.getElementFromSelector(e);i&&this._addAriaAndCollapsedClass([e],this._isShown(i))}}_getFirstLevelChildren(t){const e=Dt.find(QA,this._config.parent);return Dt.find(t,this._config.parent).filter(i=>!e.includes(i))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle(JA,!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const i=Kr.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t]()}})}}at.on(document,ZA,iu,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of Dt.getMultipleElementsFromSelector(this))Kr.getOrCreateInstance(t,{toggle:!1}).toggle()});un(Kr);const cd="dropdown",ow="bs.dropdown",us=`.${ow}`,Ju=".data-api",aw="Escape",ud="Tab",lw="ArrowUp",hd="ArrowDown",cw=2,uw=`hide${us}`,hw=`hidden${us}`,fw=`show${us}`,dw=`shown${us}`,s_=`click${us}${Ju}`,r_=`keydown${us}${Ju}`,pw=`keyup${us}${Ju}`,Us="show",mw="dropup",_w="dropend",gw="dropstart",vw="dropup-center",xw="dropdown-center",Zi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ew=`${Zi}.${Us}`,aa=".dropdown-menu",Sw=".navbar",Mw=".navbar-nav",yw=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",bw=ln()?"top-end":"top-start",Tw=ln()?"top-start":"top-end",Aw=ln()?"bottom-end":"bottom-start",ww=ln()?"bottom-start":"bottom-end",Cw=ln()?"left-start":"right-start",Rw=ln()?"right-start":"left-start",Pw="top",Dw="bottom",Lw={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Iw={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class In extends Sn{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=Dt.next(this._element,aa)[0]||Dt.prev(this._element,aa)[0]||Dt.findOne(aa,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Lw}static get DefaultType(){return Iw}static get NAME(){return cd}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ci(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!at.trigger(this._element,fw,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Mw))for(const i of[].concat(...document.body.children))at.on(i,"mouseover",Ma);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Us),this._element.classList.add(Us),at.trigger(this._element,dw,t)}}hide(){if(Ci(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!at.trigger(this._element,uw,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))at.off(i,"mouseover",Ma);this._popper&&this._popper.destroy(),this._menu.classList.remove(Us),this._element.classList.remove(Us),this._element.setAttribute("aria-expanded","false"),ni.removeDataAttribute(this._menu,"popper"),at.trigger(this._element,hw,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!ei(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${cd.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Vm>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:ei(this._config.reference)?t=wi(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=ju(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Us)}_getPlacement(){const t=this._parent;if(t.classList.contains(_w))return Cw;if(t.classList.contains(gw))return Rw;if(t.classList.contains(vw))return Pw;if(t.classList.contains(xw))return Dw;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(mw)?e?Tw:bw:e?ww:Aw}_detectNavbar(){return this._element.closest(Sw)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ni.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...ze(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=Dt.find(yw,this._menu).filter(s=>mr(s));i.length&&Ku(i,e,t===hd,!i.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=In.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===cw||t.type==="keyup"&&t.key!==ud)return;const e=Dt.find(Ew);for(const i of e){const s=In.getInstance(i);if(!s||s._config.autoClose===!1)continue;const r=t.composedPath(),o=r.includes(s._menu);if(r.includes(s._element)||s._config.autoClose==="inside"&&!o||s._config.autoClose==="outside"&&o||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===ud||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:s._element};t.type==="click"&&(a.clickEvent=t),s._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i=t.key===aw,s=[lw,hd].includes(t.key);if(!s&&!i||e&&!i)return;t.preventDefault();const r=this.matches(Zi)?this:Dt.prev(this,Zi)[0]||Dt.next(this,Zi)[0]||Dt.findOne(Zi,t.delegateTarget.parentNode),o=In.getOrCreateInstance(r);if(s){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),r.focus())}}at.on(document,r_,Zi,In.dataApiKeydownHandler);at.on(document,r_,aa,In.dataApiKeydownHandler);at.on(document,s_,In.clearMenus);at.on(document,pw,In.clearMenus);at.on(document,s_,Zi,function(n){n.preventDefault(),In.getOrCreateInstance(this).toggle()});un(In);const o_="backdrop",Nw="fade",fd="show",dd=`mousedown.bs.${o_}`,Ow={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Uw={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class a_ extends so{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ow}static get DefaultType(){return Uw}static get NAME(){return o_}show(t){if(!this._config.isVisible){ze(t);return}this._append();const e=this._getElement();this._config.isAnimated&&io(e),e.classList.add(fd),this._emulateAnimation(()=>{ze(t)})}hide(t){if(!this._config.isVisible){ze(t);return}this._getElement().classList.remove(fd),this._emulateAnimation(()=>{this.dispose(),ze(t)})}dispose(){this._isAppended&&(at.off(this._element,dd),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Nw),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=wi(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),at.on(t,dd,()=>{ze(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Xm(t,this._getElement(),this._config.isAnimated)}}const Fw="focustrap",Bw="bs.focustrap",ba=`.${Bw}`,zw=`focusin${ba}`,Hw=`keydown.tab${ba}`,Vw="Tab",kw="forward",pd="backward",Gw={autofocus:!0,trapElement:null},Ww={autofocus:"boolean",trapElement:"element"};class l_ extends so{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Gw}static get DefaultType(){return Ww}static get NAME(){return Fw}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),at.off(document,ba),at.on(document,zw,t=>this._handleFocusin(t)),at.on(document,Hw,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,at.off(document,ba))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=Dt.focusableChildren(e);i.length===0?e.focus():this._lastTabNavDirection===pd?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===Vw&&(this._lastTabNavDirection=t.shiftKey?pd:kw)}}const md=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_d=".sticky-top",Wo="padding-right",gd="margin-right";class su{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Wo,e=>e+t),this._setElementAttributes(md,Wo,e=>e+t),this._setElementAttributes(_d,gd,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Wo),this._resetElementAttributes(md,Wo),this._resetElementAttributes(_d,gd)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+s)return;this._saveInitialAttribute(o,e);const a=window.getComputedStyle(o).getPropertyValue(e);o.style.setProperty(e,`${i(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,r)}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&ni.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=s=>{const r=ni.getDataAttribute(s,e);if(r===null){s.style.removeProperty(e);return}ni.removeDataAttribute(s,e),s.style.setProperty(e,r)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){if(ei(t)){e(t);return}for(const i of Dt.find(t,this._element))e(i)}}const $w="modal",Xw="bs.modal",cn=`.${Xw}`,Yw=".data-api",qw="Escape",jw=`hide${cn}`,Kw=`hidePrevented${cn}`,c_=`hidden${cn}`,u_=`show${cn}`,Zw=`shown${cn}`,Jw=`resize${cn}`,Qw=`click.dismiss${cn}`,tC=`mousedown.dismiss${cn}`,eC=`keydown.dismiss${cn}`,nC=`click${cn}${Yw}`,vd="modal-open",iC="fade",xd="show",$l="modal-static",sC=".modal.show",rC=".modal-dialog",oC=".modal-body",aC='[data-bs-toggle="modal"]',lC={backdrop:!0,focus:!0,keyboard:!0},cC={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ar extends Sn{constructor(t,e){super(t,e),this._dialog=Dt.findOne(rC,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new su,this._addEventListeners()}static get Default(){return lC}static get DefaultType(){return cC}static get NAME(){return $w}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||at.trigger(this._element,u_,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(vd),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||at.trigger(this._element,jw).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(xd),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){at.off(window,cn),at.off(this._dialog,cn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new a_({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new l_({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=Dt.findOne(oC,this._dialog);e&&(e.scrollTop=0),io(this._element),this._element.classList.add(xd);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,at.trigger(this._element,Zw,{relatedTarget:t})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){at.on(this._element,eC,t=>{if(t.key===qw){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),at.on(window,Jw,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),at.on(this._element,tC,t=>{at.one(this._element,Qw,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(vd),this._resetAdjustments(),this._scrollBar.reset(),at.trigger(this._element,c_)})}_isAnimated(){return this._element.classList.contains(iC)}_triggerBackdropTransition(){if(at.trigger(this._element,Kw).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;i==="hidden"||this._element.classList.contains($l)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add($l),this._queueCallback(()=>{this._element.classList.remove($l),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const s=ln()?"paddingLeft":"paddingRight";this._element.style[s]=`${e}px`}if(!i&&t){const s=ln()?"paddingRight":"paddingLeft";this._element.style[s]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const i=ar.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t](e)}})}}at.on(document,nC,aC,function(n){const t=Dt.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),at.one(t,u_,s=>{s.defaultPrevented||at.one(t,c_,()=>{mr(this)&&this.focus()})});const e=Dt.findOne(sC);e&&ar.getInstance(e).hide(),ar.getOrCreateInstance(t).toggle(this)});ka(ar);un(ar);const uC="offcanvas",hC="bs.offcanvas",oi=`.${hC}`,h_=".data-api",fC=`load${oi}${h_}`,dC="Escape",Ed="show",Sd="showing",Md="hiding",pC="offcanvas-backdrop",f_=".offcanvas.show",mC=`show${oi}`,_C=`shown${oi}`,gC=`hide${oi}`,yd=`hidePrevented${oi}`,d_=`hidden${oi}`,vC=`resize${oi}`,xC=`click${oi}${h_}`,EC=`keydown.dismiss${oi}`,SC='[data-bs-toggle="offcanvas"]',MC={backdrop:!0,keyboard:!0,scroll:!1},yC={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ri extends Sn{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return MC}static get DefaultType(){return yC}static get NAME(){return uC}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||at.trigger(this._element,mC,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new su().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Sd);const i=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Ed),this._element.classList.remove(Sd),at.trigger(this._element,_C,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown||at.trigger(this._element,gC).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Md),this._backdrop.hide();const e=()=>{this._element.classList.remove(Ed,Md),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new su().reset(),at.trigger(this._element,d_)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){at.trigger(this._element,yd);return}this.hide()},e=!!this._config.backdrop;return new a_({className:pC,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new l_({trapElement:this._element})}_addEventListeners(){at.on(this._element,EC,t=>{if(t.key===dC){if(this._config.keyboard){this.hide();return}at.trigger(this._element,yd)}})}static jQueryInterface(t){return this.each(function(){const e=Ri.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}at.on(document,xC,SC,function(n){const t=Dt.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Ci(this))return;at.one(t,d_,()=>{mr(this)&&this.focus()});const e=Dt.findOne(f_);e&&e!==t&&Ri.getInstance(e).hide(),Ri.getOrCreateInstance(t).toggle(this)});at.on(window,fC,()=>{for(const n of Dt.find(f_))Ri.getOrCreateInstance(n).show()});at.on(window,vC,()=>{for(const n of Dt.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&Ri.getOrCreateInstance(n).hide()});ka(Ri);un(Ri);const bC=/^aria-[\w-]*$/i,p_={"*":["class","dir","id","lang","role",bC],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},TC=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),AC=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,wC=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?TC.has(e)?!!AC.test(n.nodeValue):!0:t.filter(i=>i instanceof RegExp).some(i=>i.test(e))};function CC(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const s=new window.DOMParser().parseFromString(n,"text/html"),r=[].concat(...s.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(t["*"]||[],t[a]||[]);for(const u of l)wC(u,c)||o.removeAttribute(u.nodeName)}return s.body.innerHTML}const RC="TemplateFactory",PC={allowList:p_,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},DC={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},LC={entry:"(string|element|function|null)",selector:"(string|element)"};class IC extends so{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return PC}static get DefaultType(){return DC}static get NAME(){return RC}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,r]of Object.entries(this._config.content))this._setContent(t,r,s);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},LC)}_setContent(t,e,i){const s=Dt.findOne(i,t);if(s){if(e=this._resolvePossibleFunction(e),!e){s.remove();return}if(ei(e)){this._putElementInTemplate(wi(e),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(e);return}s.textContent=e}}_maybeSanitize(t){return this._config.sanitize?CC(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return ze(t,[this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const NC="tooltip",OC=new Set(["sanitize","allowList","sanitizeFn"]),Xl="fade",UC="modal",$o="show",FC=".tooltip-inner",bd=`.${UC}`,Td="hide.bs.modal",Cr="hover",Yl="focus",BC="click",zC="manual",HC="hide",VC="hidden",kC="show",GC="shown",WC="inserted",$C="click",XC="focusin",YC="focusout",qC="mouseenter",jC="mouseleave",KC={AUTO:"auto",TOP:"top",RIGHT:ln()?"left":"right",BOTTOM:"bottom",LEFT:ln()?"right":"left"},ZC={allowList:p_,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},JC={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class gr extends Sn{constructor(t,e){if(typeof Vm>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return ZC}static get DefaultType(){return JC}static get NAME(){return NC}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),at.off(this._element.closest(bd),Td,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=at.trigger(this._element,this.constructor.eventName(kC)),i=(Wm(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!i)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(s),at.trigger(this._element,this.constructor.eventName(WC))),this._popper=this._createPopper(s),s.classList.add($o),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))at.on(a,"mouseover",Ma);const o=()=>{at.trigger(this._element,this.constructor.eventName(GC)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||at.trigger(this._element,this.constructor.eventName(HC)).defaultPrevented)return;if(this._getTipElement().classList.remove($o),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))at.off(s,"mouseover",Ma);this._activeTrigger[BC]=!1,this._activeTrigger[Yl]=!1,this._activeTrigger[Cr]=!1,this._isHovered=null;const i=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),at.trigger(this._element,this.constructor.eventName(VC)))};this._queueCallback(i,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Xl,$o),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=BT(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Xl),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new IC({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[FC]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Xl)}_isShown(){return this.tip&&this.tip.classList.contains($o)}_createPopper(t){const e=ze(this._config.placement,[this,t,this._element]),i=KC[e.toUpperCase()];return ju(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return ze(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:i=>{this._getTipElement().setAttribute("data-popper-placement",i.state.placement)}}]};return{...e,...ze(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")at.on(this._element,this.constructor.eventName($C),this._config.selector,i=>{this._initializeOnDelegatedTarget(i).toggle()});else if(e!==zC){const i=e===Cr?this.constructor.eventName(qC):this.constructor.eventName(XC),s=e===Cr?this.constructor.eventName(jC):this.constructor.eventName(YC);at.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?Yl:Cr]=!0,o._enter()}),at.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?Yl:Cr]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},at.on(this._element.closest(bd),Td,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=ni.getDataAttributes(this._element);for(const i of Object.keys(e))OC.has(i)&&delete e[i];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:wi(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=gr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}un(gr);const QC="popover",tR=".popover-header",eR=".popover-body",nR={...gr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},iR={...gr.DefaultType,content:"(null|string|element|function)"};class Qu extends gr{static get Default(){return nR}static get DefaultType(){return iR}static get NAME(){return QC}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[tR]:this._getTitle(),[eR]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Qu.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}un(Qu);const sR="scrollspy",rR="bs.scrollspy",th=`.${rR}`,oR=".data-api",aR=`activate${th}`,Ad=`click${th}`,lR=`load${th}${oR}`,cR="dropdown-item",Ps="active",uR='[data-bs-spy="scroll"]',ql="[href]",hR=".nav, .list-group",wd=".nav-link",fR=".nav-item",dR=".list-group-item",pR=`${wd}, ${fR} > ${wd}, ${dR}`,mR=".dropdown",_R=".dropdown-toggle",gR={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},vR={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class $a extends Sn{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return gR}static get DefaultType(){return vR}static get NAME(){return sR}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=wi(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(at.off(this._config.target,Ad),at.on(this._config.target,Ad,ql,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:s,behavior:"smooth"});return}i.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=o=>this._targetLinks.get(`#${o.target.id}`),i=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(e(o))},s=(this._rootElement||document.documentElement).scrollTop,r=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(i(o),!s)return;continue}!r&&!a&&i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Dt.find(ql,this._config.target);for(const e of t){if(!e.hash||Ci(e))continue;const i=Dt.findOne(decodeURI(e.hash),this._element);mr(i)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,i))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Ps),this._activateParents(t),at.trigger(this._element,aR,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(cR)){Dt.findOne(_R,t.closest(mR)).classList.add(Ps);return}for(const e of Dt.parents(t,hR))for(const i of Dt.prev(e,pR))i.classList.add(Ps)}_clearActiveClass(t){t.classList.remove(Ps);const e=Dt.find(`${ql}.${Ps}`,t);for(const i of e)i.classList.remove(Ps)}static jQueryInterface(t){return this.each(function(){const e=$a.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}at.on(window,lR,()=>{for(const n of Dt.find(uR))$a.getOrCreateInstance(n)});un($a);const xR="tab",ER="bs.tab",hs=`.${ER}`,SR=`hide${hs}`,MR=`hidden${hs}`,yR=`show${hs}`,bR=`shown${hs}`,TR=`click${hs}`,AR=`keydown${hs}`,wR=`load${hs}`,CR="ArrowLeft",Cd="ArrowRight",RR="ArrowUp",Rd="ArrowDown",jl="Home",Pd="End",Ji="active",Dd="fade",Kl="show",PR="dropdown",m_=".dropdown-toggle",DR=".dropdown-menu",Zl=`:not(${m_})`,LR='.list-group, .nav, [role="tablist"]',IR=".nav-item, .list-group-item",NR=`.nav-link${Zl}, .list-group-item${Zl}, [role="tab"]${Zl}`,__='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Jl=`${NR}, ${__}`,OR=`.${Ji}[data-bs-toggle="tab"], .${Ji}[data-bs-toggle="pill"], .${Ji}[data-bs-toggle="list"]`;class lr extends Sn{constructor(t){super(t),this._parent=this._element.closest(LR),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),at.on(this._element,AR,e=>this._keydown(e)))}static get NAME(){return xR}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?at.trigger(e,SR,{relatedTarget:t}):null;at.trigger(t,yR,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(Ji),this._activate(Dt.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Kl);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),at.trigger(t,bR,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(Dd))}_deactivate(t,e){if(!t)return;t.classList.remove(Ji),t.blur(),this._deactivate(Dt.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Kl);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),at.trigger(t,MR,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(Dd))}_keydown(t){if(![CR,Cd,RR,Rd,jl,Pd].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(s=>!Ci(s));let i;if([jl,Pd].includes(t.key))i=e[t.key===jl?0:e.length-1];else{const s=[Cd,Rd].includes(t.key);i=Ku(e,t.target,s,!0)}i&&(i.focus({preventScroll:!0}),lr.getOrCreateInstance(i).show())}_getChildren(){return Dt.find(Jl,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const i of e)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=Dt.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains(PR))return;const s=(r,o)=>{const a=Dt.findOne(r,i);a&&a.classList.toggle(o,e)};s(m_,Ji),s(DR,Kl),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(Ji)}_getInnerElement(t){return t.matches(Jl)?t:Dt.findOne(Jl,t)}_getOuterElement(t){return t.closest(IR)||t}static jQueryInterface(t){return this.each(function(){const e=lr.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}at.on(document,TR,__,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!Ci(this)&&lr.getOrCreateInstance(this).show()});at.on(window,wR,()=>{for(const n of Dt.find(OR))lr.getOrCreateInstance(n)});un(lr);const UR="toast",FR="bs.toast",Oi=`.${FR}`,BR=`mouseover${Oi}`,zR=`mouseout${Oi}`,HR=`focusin${Oi}`,VR=`focusout${Oi}`,kR=`hide${Oi}`,GR=`hidden${Oi}`,WR=`show${Oi}`,$R=`shown${Oi}`,XR="fade",Ld="hide",Xo="show",Yo="showing",YR={animation:"boolean",autohide:"boolean",delay:"number"},qR={animation:!0,autohide:!0,delay:5e3};class Xa extends Sn{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return qR}static get DefaultType(){return YR}static get NAME(){return UR}show(){if(at.trigger(this._element,WR).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(XR);const e=()=>{this._element.classList.remove(Yo),at.trigger(this._element,$R),this._maybeScheduleHide()};this._element.classList.remove(Ld),io(this._element),this._element.classList.add(Xo,Yo),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||at.trigger(this._element,kR).defaultPrevented)return;const e=()=>{this._element.classList.add(Ld),this._element.classList.remove(Yo,Xo),at.trigger(this._element,GR)};this._element.classList.add(Yo),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Xo),super.dispose()}isShown(){return this._element.classList.contains(Xo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){at.on(this._element,BR,t=>this._onInteraction(t,!0)),at.on(this._element,zR,t=>this._onInteraction(t,!1)),at.on(this._element,HR,t=>this._onInteraction(t,!0)),at.on(this._element,VR,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Xa.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}ka(Xa);un(Xa);Vv(qb).mount("#app");

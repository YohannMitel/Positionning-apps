(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const le={},Us=[],wn=()=>{},l_=()=>!1,pa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Yc=n=>n.startsWith("onUpdate:"),Me=Object.assign,qc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},c_=Object.prototype.hasOwnProperty,ee=(n,t)=>c_.call(n,t),Ht=Array.isArray,Fs=n=>ma(n)==="[object Map]",Md=n=>ma(n)==="[object Set]",$t=n=>typeof n=="function",ge=n=>typeof n=="string",Ci=n=>typeof n=="symbol",de=n=>n!==null&&typeof n=="object",yd=n=>(de(n)||$t(n))&&$t(n.then)&&$t(n.catch),Td=Object.prototype.toString,ma=n=>Td.call(n),u_=n=>ma(n).slice(8,-1),bd=n=>ma(n)==="[object Object]",jc=n=>ge(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,br=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},h_=/-(\w)/g,Mi=_a(n=>n.replace(h_,(t,e)=>e?e.toUpperCase():"")),f_=/\B([A-Z])/g,rs=_a(n=>n.replace(f_,"-$1").toLowerCase()),Ad=_a(n=>n.charAt(0).toUpperCase()+n.slice(1)),Fa=_a(n=>n?`on${Ad(n)}`:""),xi=(n,t)=>!Object.is(n,t),Ba=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},wd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},d_=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Qu;const ga=()=>Qu||(Qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kc(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=ge(i)?g_(i):Kc(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(ge(n)||de(n))return n}const p_=/;(?![^(]*\))/g,m_=/:([^]+)/,__=/\/\*[^]*?\*\//g;function g_(n){const t={};return n.replace(__,"").split(p_).forEach(e=>{if(e){const i=e.split(m_);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Zc(n){let t="";if(ge(n))t=n;else if(Ht(n))for(let e=0;e<n.length;e++){const i=Zc(n[e]);i&&(t+=i+" ")}else if(de(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const v_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",x_=Xc(v_);function Cd(n){return!!n||n===""}const Rd=n=>!!(n&&n.__v_isRef===!0),Pd=n=>ge(n)?n:n==null?"":Ht(n)||de(n)&&(n.toString===Td||!$t(n.toString))?Rd(n)?Pd(n.value):JSON.stringify(n,Dd,2):String(n),Dd=(n,t)=>Rd(t)?Dd(n,t.value):Fs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ha(i,r)+" =>"]=s,e),{})}:Md(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ha(e))}:Ci(t)?Ha(t):de(t)&&!Ht(t)&&!bd(t)?String(t):t,Ha=(n,t="")=>{var e;return Ci(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class E_{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ye;try{return Ye=this,t()}finally{Ye=e}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function S_(){return Ye}let ae;const za=new WeakSet;class Ld{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&Ye.active&&Ye.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,za.has(this)&&(za.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,th(this),Od(this);const t=ae,e=_n;ae=this,_n=!0;try{return this.fn()}finally{Ud(this),ae=t,_n=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)tu(t);this.deps=this.depsTail=void 0,th(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?za.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vl(this)&&this.run()}get dirty(){return Vl(this)}}let Id=0,Ar,wr;function Nd(n,t=!1){if(n.flags|=8,t){n.next=wr,wr=n;return}n.next=Ar,Ar=n}function Jc(){Id++}function Qc(){if(--Id>0)return;if(wr){let t=wr;for(wr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Ar;){let t=Ar;for(Ar=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Od(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ud(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),tu(i),M_(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Vl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Fd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Fd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Br))return;n.globalVersion=Br;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Vl(n)){n.flags&=-3;return}const e=ae,i=_n;ae=n,_n=!0;try{Od(n);const s=n.fn(n._value);(t.version===0||xi(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ae=e,_n=i,Ud(n),n.flags&=-3}}function tu(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)tu(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function M_(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let _n=!0;const Bd=[];function Ri(){Bd.push(_n),_n=!1}function Pi(){const n=Bd.pop();_n=n===void 0?!0:n}function th(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ae;ae=void 0;try{t()}finally{ae=e}}}let Br=0;class y_{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!ae||!_n||ae===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ae)e=this.activeLink=new y_(ae,this),ae.deps?(e.prevDep=ae.depsTail,ae.depsTail.nextDep=e,ae.depsTail=e):ae.deps=ae.depsTail=e,Hd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ae.depsTail,e.nextDep=void 0,ae.depsTail.nextDep=e,ae.depsTail=e,ae.deps===e&&(ae.deps=i)}return e}trigger(t){this.version++,Br++,this.notify(t)}notify(t){Jc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Qc()}}}function Hd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Hd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const kl=new WeakMap,Zi=Symbol(""),Gl=Symbol(""),Hr=Symbol("");function Ae(n,t,e){if(_n&&ae){let i=kl.get(n);i||kl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new eu),s.map=i,s.key=e),s.track()}}function $n(n,t,e,i,s,r){const o=kl.get(n);if(!o){Br++;return}const a=l=>{l&&l.trigger()};if(Jc(),t==="clear")o.forEach(a);else{const l=Ht(n),u=l&&jc(e);if(l&&e==="length"){const c=Number(i);o.forEach((h,d)=>{(d==="length"||d===Hr||!Ci(d)&&d>=c)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(Hr)),t){case"add":l?u&&a(o.get("length")):(a(o.get(Zi)),Fs(n)&&a(o.get(Gl)));break;case"delete":l||(a(o.get(Zi)),Fs(n)&&a(o.get(Gl)));break;case"set":Fs(n)&&a(o.get(Zi));break}}Qc()}function us(n){const t=te(n);return t===n?t:(Ae(t,"iterate",Hr),gn(n)?t:t.map(Le))}function nu(n){return Ae(n=te(n),"iterate",Hr),n}const T_={__proto__:null,[Symbol.iterator](){return Va(this,Symbol.iterator,Le)},concat(...n){return us(this).concat(...n.map(t=>Ht(t)?us(t):t))},entries(){return Va(this,"entries",n=>(n[1]=Le(n[1]),n))},every(n,t){return Un(this,"every",n,t,void 0,arguments)},filter(n,t){return Un(this,"filter",n,t,e=>e.map(Le),arguments)},find(n,t){return Un(this,"find",n,t,Le,arguments)},findIndex(n,t){return Un(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Un(this,"findLast",n,t,Le,arguments)},findLastIndex(n,t){return Un(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Un(this,"forEach",n,t,void 0,arguments)},includes(...n){return ka(this,"includes",n)},indexOf(...n){return ka(this,"indexOf",n)},join(n){return us(this).join(n)},lastIndexOf(...n){return ka(this,"lastIndexOf",n)},map(n,t){return Un(this,"map",n,t,void 0,arguments)},pop(){return dr(this,"pop")},push(...n){return dr(this,"push",n)},reduce(n,...t){return eh(this,"reduce",n,t)},reduceRight(n,...t){return eh(this,"reduceRight",n,t)},shift(){return dr(this,"shift")},some(n,t){return Un(this,"some",n,t,void 0,arguments)},splice(...n){return dr(this,"splice",n)},toReversed(){return us(this).toReversed()},toSorted(n){return us(this).toSorted(n)},toSpliced(...n){return us(this).toSpliced(...n)},unshift(...n){return dr(this,"unshift",n)},values(){return Va(this,"values",Le)}};function Va(n,t,e){const i=nu(n),s=i[t]();return i!==n&&!gn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const b_=Array.prototype;function Un(n,t,e,i,s,r){const o=nu(n),a=o!==n&&!gn(n),l=o[t];if(l!==b_[t]){const h=l.apply(n,r);return a?Le(h):h}let u=e;o!==n&&(a?u=function(h,d){return e.call(this,Le(h),d,n)}:e.length>2&&(u=function(h,d){return e.call(this,h,d,n)}));const c=l.call(o,u,i);return a&&s?s(c):c}function eh(n,t,e,i){const s=nu(n);let r=e;return s!==n&&(gn(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,Le(a),l,n)}),s[t](r,...i)}function ka(n,t,e){const i=te(n);Ae(i,"iterate",Hr);const s=i[t](...e);return(s===-1||s===!1)&&ou(e[0])?(e[0]=te(e[0]),i[t](...e)):s}function dr(n,t,e=[]){Ri(),Jc();const i=te(n)[t].apply(n,e);return Qc(),Pi(),i}const A_=Xc("__proto__,__v_isRef,__isVue"),zd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ci));function w_(n){Ci(n)||(n=String(n));const t=te(this);return Ae(t,"has",n),t.hasOwnProperty(n)}class Vd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?F_:$d:r?Wd:Gd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ht(t);if(!s){let l;if(o&&(l=T_[e]))return l;if(e==="hasOwnProperty")return w_}const a=Reflect.get(t,e,Ce(t)?t:i);return(Ci(e)?zd.has(e):A_(e))||(s||Ae(t,"get",e),r)?a:Ce(a)?o&&jc(e)?a:a.value:de(a)?s?Xd(a):su(a):a}}class kd extends Vd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=Qi(r);if(!gn(i)&&!Qi(i)&&(r=te(r),i=te(i)),!Ht(t)&&Ce(r)&&!Ce(i))return l?!1:(r.value=i,!0)}const o=Ht(t)&&jc(e)?Number(e)<t.length:ee(t,e),a=Reflect.set(t,e,i,Ce(t)?t:s);return t===te(s)&&(o?xi(i,r)&&$n(t,"set",e,i):$n(t,"add",e,i)),a}deleteProperty(t,e){const i=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&$n(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Ci(e)||!zd.has(e))&&Ae(t,"has",e),i}ownKeys(t){return Ae(t,"iterate",Ht(t)?"length":Zi),Reflect.ownKeys(t)}}class C_ extends Vd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const R_=new kd,P_=new C_,D_=new kd(!0);const Wl=n=>n,oo=n=>Reflect.getPrototypeOf(n);function L_(n,t,e){return function(...i){const s=this.__v_raw,r=te(s),o=Fs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...i),c=e?Wl:t?$l:Le;return!t&&Ae(r,"iterate",l?Gl:Zi),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[c(h[0]),c(h[1])]:c(h),done:d}},[Symbol.iterator](){return this}}}}function ao(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function I_(n,t){const e={get(s){const r=this.__v_raw,o=te(r),a=te(s);n||(xi(s,a)&&Ae(o,"get",s),Ae(o,"get",a));const{has:l}=oo(o),u=t?Wl:n?$l:Le;if(l.call(o,s))return u(r.get(s));if(l.call(o,a))return u(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ae(te(s),"iterate",Zi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=te(r),a=te(s);return n||(xi(s,a)&&Ae(o,"has",s),Ae(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=te(a),u=t?Wl:n?$l:Le;return!n&&Ae(l,"iterate",Zi),a.forEach((c,h)=>s.call(r,u(c),u(h),o))}};return Me(e,n?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(s){!t&&!gn(s)&&!Qi(s)&&(s=te(s));const r=te(this);return oo(r).has.call(r,s)||(r.add(s),$n(r,"add",s,s)),this},set(s,r){!t&&!gn(r)&&!Qi(r)&&(r=te(r));const o=te(this),{has:a,get:l}=oo(o);let u=a.call(o,s);u||(s=te(s),u=a.call(o,s));const c=l.call(o,s);return o.set(s,r),u?xi(r,c)&&$n(o,"set",s,r):$n(o,"add",s,r),this},delete(s){const r=te(this),{has:o,get:a}=oo(r);let l=o.call(r,s);l||(s=te(s),l=o.call(r,s)),a&&a.call(r,s);const u=r.delete(s);return l&&$n(r,"delete",s,void 0),u},clear(){const s=te(this),r=s.size!==0,o=s.clear();return r&&$n(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=L_(s,n,t)}),e}function iu(n,t){const e=I_(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ee(e,s)&&s in i?e:i,s,r)}const N_={get:iu(!1,!1)},O_={get:iu(!1,!0)},U_={get:iu(!0,!1)};const Gd=new WeakMap,Wd=new WeakMap,$d=new WeakMap,F_=new WeakMap;function B_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function H_(n){return n.__v_skip||!Object.isExtensible(n)?0:B_(u_(n))}function su(n){return Qi(n)?n:ru(n,!1,R_,N_,Gd)}function z_(n){return ru(n,!1,D_,O_,Wd)}function Xd(n){return ru(n,!0,P_,U_,$d)}function ru(n,t,e,i,s){if(!de(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=H_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Cr(n){return Qi(n)?Cr(n.__v_raw):!!(n&&n.__v_isReactive)}function Qi(n){return!!(n&&n.__v_isReadonly)}function gn(n){return!!(n&&n.__v_isShallow)}function ou(n){return n?!!n.__v_raw:!1}function te(n){const t=n&&n.__v_raw;return t?te(t):n}function V_(n){return!ee(n,"__v_skip")&&Object.isExtensible(n)&&wd(n,"__v_skip",!0),n}const Le=n=>de(n)?su(n):n,$l=n=>de(n)?Xd(n):n;function Ce(n){return n?n.__v_isRef===!0:!1}function di(n){return k_(n,!1)}function k_(n,t){return Ce(n)?n:new G_(n,t)}class G_{constructor(t,e){this.dep=new eu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:te(t),this._value=e?t:Le(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||gn(t)||Qi(t);t=i?t:te(t),xi(t,e)&&(this._rawValue=t,this._value=i?t:Le(t),this.dep.trigger())}}function W_(n){return Ce(n)?n.value:n}const $_={get:(n,t,e)=>t==="__v_raw"?n:W_(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ce(s)&&!Ce(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Yd(n){return Cr(n)?n:new Proxy(n,$_)}class X_{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new eu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ae!==this)return Nd(this,!0),!0}get value(){const t=this.dep.track();return Fd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Y_(n,t,e=!1){let i,s;return $t(n)?i=n:(i=n.get,s=n.set),new X_(i,s,e)}const lo={},ta=new WeakMap;let Gi;function q_(n,t=!1,e=Gi){if(e){let i=ta.get(e);i||ta.set(e,i=[]),i.push(n)}}function j_(n,t,e=le){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,u=E=>s?E:gn(E)||s===!1||s===0?gi(E,1):gi(E);let c,h,d,p,g=!1,v=!1;if(Ce(n)?(h=()=>n.value,g=gn(n)):Cr(n)?(h=()=>u(n),g=!0):Ht(n)?(v=!0,g=n.some(E=>Cr(E)||gn(E)),h=()=>n.map(E=>{if(Ce(E))return E.value;if(Cr(E))return u(E);if($t(E))return l?l(E,2):E()})):$t(n)?t?h=l?()=>l(n,2):n:h=()=>{if(d){Ri();try{d()}finally{Pi()}}const E=Gi;Gi=c;try{return l?l(n,3,[p]):n(p)}finally{Gi=E}}:h=wn,t&&s){const E=h,I=s===!0?1/0:s;h=()=>gi(E(),I)}const m=S_(),f=()=>{c.stop(),m&&m.active&&qc(m.effects,c)};if(r&&t){const E=t;t=(...I)=>{E(...I),f()}}let A=v?new Array(n.length).fill(lo):lo;const b=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(t){const I=c.run();if(s||g||(v?I.some((R,w)=>xi(R,A[w])):xi(I,A))){d&&d();const R=Gi;Gi=c;try{const w=[I,A===lo?void 0:v&&A[0]===lo?[]:A,p];l?l(t,3,w):t(...w),A=I}finally{Gi=R}}}else c.run()};return a&&a(b),c=new Ld(h),c.scheduler=o?()=>o(b,!1):b,p=E=>q_(E,!1,c),d=c.onStop=()=>{const E=ta.get(c);if(E){if(l)l(E,4);else for(const I of E)I();ta.delete(c)}},t?i?b(!0):A=c.run():o?o(b.bind(null,!0),!0):c.run(),f.pause=c.pause.bind(c),f.resume=c.resume.bind(c),f.stop=f,f}function gi(n,t=1/0,e){if(t<=0||!de(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,Ce(n))gi(n.value,t,e);else if(Ht(n))for(let i=0;i<n.length;i++)gi(n[i],t,e);else if(Md(n)||Fs(n))n.forEach(i=>{gi(i,t,e)});else if(bd(n)){for(const i in n)gi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&gi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yr(n,t,e,i){try{return i?n(...i):n()}catch(s){va(s,t,e)}}function Dn(n,t,e,i){if($t(n)){const s=Yr(n,t,e,i);return s&&yd(s)&&s.catch(r=>{va(r,t,e)}),s}if(Ht(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Dn(n[r],t,e,i));return s}}function va(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||le;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](n,l,u)===!1)return}a=a.parent}if(r){Ri(),Yr(r,null,10,[n,l,u]),Pi();return}}K_(n,e,s,i,o)}function K_(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ie=[];let Mn=-1;const Bs=[];let pi=null,Cs=0;const qd=Promise.resolve();let ea=null;function Z_(n){const t=ea||qd;return n?t.then(this?n.bind(this):n):t}function J_(n){let t=Mn+1,e=Ie.length;for(;t<e;){const i=t+e>>>1,s=Ie[i],r=zr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function au(n){if(!(n.flags&1)){const t=zr(n),e=Ie[Ie.length-1];!e||!(n.flags&2)&&t>=zr(e)?Ie.push(n):Ie.splice(J_(t),0,n),n.flags|=1,jd()}}function jd(){ea||(ea=qd.then(Zd))}function Q_(n){Ht(n)?Bs.push(...n):pi&&n.id===-1?pi.splice(Cs+1,0,n):n.flags&1||(Bs.push(n),n.flags|=1),jd()}function nh(n,t,e=Mn+1){for(;e<Ie.length;e++){const i=Ie[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ie.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Kd(n){if(Bs.length){const t=[...new Set(Bs)].sort((e,i)=>zr(e)-zr(i));if(Bs.length=0,pi){pi.push(...t);return}for(pi=t,Cs=0;Cs<pi.length;Cs++){const e=pi[Cs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}pi=null,Cs=0}}const zr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zd(n){try{for(Mn=0;Mn<Ie.length;Mn++){const t=Ie[Mn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Yr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Mn<Ie.length;Mn++){const t=Ie[Mn];t&&(t.flags&=-2)}Mn=-1,Ie.length=0,Kd(),ea=null,(Ie.length||Bs.length)&&Zd()}}let bn=null,Jd=null;function na(n){const t=bn;return bn=n,Jd=n&&n.type.__scopeId||null,t}function tg(n,t=bn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&uh(-1);const r=na(t);let o;try{o=n(...s)}finally{na(r),i._d&&uh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Oi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ri(),Dn(l,e,8,[n.el,a,n,t]),Pi())}}const eg=Symbol("_vte"),ng=n=>n.__isTeleport;function lu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,lu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Qd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ia(n,t,e,i,s=!1){if(Ht(n)){n.forEach((g,v)=>ia(g,t&&(Ht(t)?t[v]:t),e,i,s));return}if(Rr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ia(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?mu(i.component):i.el,o=s?null:r,{i:a,r:l}=n,u=t&&t.r,c=a.refs===le?a.refs={}:a.refs,h=a.setupState,d=te(h),p=h===le?()=>!1:g=>ee(d,g);if(u!=null&&u!==l&&(ge(u)?(c[u]=null,p(u)&&(h[u]=null)):Ce(u)&&(u.value=null)),$t(l))Yr(l,a,12,[o,c]);else{const g=ge(l),v=Ce(l);if(g||v){const m=()=>{if(n.f){const f=g?p(l)?h[l]:c[l]:l.value;s?Ht(f)&&qc(f,r):Ht(f)?f.includes(r)||f.push(r):g?(c[l]=[r],p(l)&&(h[l]=c[l])):(l.value=[r],n.k&&(c[n.k]=l.value))}else g?(c[l]=o,p(l)&&(h[l]=o)):v&&(l.value=o,n.k&&(c[n.k]=o))};o?(m.id=-1,Xe(m,e)):m()}}}ga().requestIdleCallback;ga().cancelIdleCallback;const Rr=n=>!!n.type.__asyncLoader,tp=n=>n.type.__isKeepAlive;function ig(n,t){ep(n,"a",t)}function sg(n,t){ep(n,"da",t)}function ep(n,t,e=Ne){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(xa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)tp(s.parent.vnode)&&rg(i,t,e,s),s=s.parent}}function rg(n,t,e,i){const s=xa(t,n,i,!0);cu(()=>{qc(i[t],s)},e)}function xa(n,t,e=Ne,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Ri();const a=qr(e),l=Dn(t,e,n,o);return a(),Pi(),l});return i?s.unshift(r):s.push(r),r}}const ni=n=>(t,e=Ne)=>{(!Gr||n==="sp")&&xa(n,(...i)=>t(...i),e)},og=ni("bm"),np=ni("m"),ag=ni("bu"),lg=ni("u"),cg=ni("bum"),cu=ni("um"),ug=ni("sp"),hg=ni("rtg"),fg=ni("rtc");function dg(n,t=Ne){xa("ec",n,t)}const pg=Symbol.for("v-ndc"),Xl=n=>n?yp(n)?mu(n):Xl(n.parent):null,Pr=Me(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Xl(n.parent),$root:n=>Xl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>uu(n),$forceUpdate:n=>n.f||(n.f=()=>{au(n.update)}),$nextTick:n=>n.n||(n.n=Z_.bind(n.proxy)),$watch:n=>Ug.bind(n)}),Ga=(n,t)=>n!==le&&!n.__isScriptSetup&&ee(n,t),mg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let u;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ga(i,t))return o[t]=1,i[t];if(s!==le&&ee(s,t))return o[t]=2,s[t];if((u=n.propsOptions[0])&&ee(u,t))return o[t]=3,r[t];if(e!==le&&ee(e,t))return o[t]=4,e[t];Yl&&(o[t]=0)}}const c=Pr[t];let h,d;if(c)return t==="$attrs"&&Ae(n.attrs,"get",""),c(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==le&&ee(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,ee(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ga(s,t)?(s[t]=e,!0):i!==le&&ee(i,t)?(i[t]=e,!0):ee(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==le&&ee(n,o)||Ga(t,o)||(a=r[0])&&ee(a,o)||ee(i,o)||ee(Pr,o)||ee(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ee(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function ih(n){return Ht(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Yl=!0;function _g(n){const t=uu(n),e=n.proxy,i=n.ctx;Yl=!1,t.beforeCreate&&sh(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:f,beforeUnmount:A,destroyed:b,unmounted:E,render:I,renderTracked:R,renderTriggered:w,errorCaptured:L,serverPrefetch:T,expose:M,inheritAttrs:P,components:Z,directives:k,filters:et}=t;if(u&&gg(u,i,null),o)for(const K in o){const B=o[K];$t(B)&&(i[K]=B.bind(e))}if(s){const K=s.call(e,e);de(K)&&(n.data=su(K))}if(Yl=!0,r)for(const K in r){const B=r[K],ht=$t(B)?B.bind(e,e):$t(B.get)?B.get.bind(e,e):wn,_t=!$t(B)&&$t(B.set)?B.set.bind(e):wn,yt=iv({get:ht,set:_t});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>yt.value,set:Pt=>yt.value=Pt})}if(a)for(const K in a)ip(a[K],i,e,K);if(l){const K=$t(l)?l.call(e):l;Reflect.ownKeys(K).forEach(B=>{yg(B,K[B])})}c&&sh(c,n,"c");function X(K,B){Ht(B)?B.forEach(ht=>K(ht.bind(e))):B&&K(B.bind(e))}if(X(og,h),X(np,d),X(ag,p),X(lg,g),X(ig,v),X(sg,m),X(dg,L),X(fg,R),X(hg,w),X(cg,A),X(cu,E),X(ug,T),Ht(M))if(M.length){const K=n.exposed||(n.exposed={});M.forEach(B=>{Object.defineProperty(K,B,{get:()=>e[B],set:ht=>e[B]=ht})})}else n.exposed||(n.exposed={});I&&n.render===wn&&(n.render=I),P!=null&&(n.inheritAttrs=P),Z&&(n.components=Z),k&&(n.directives=k),T&&Qd(n)}function gg(n,t,e=wn){Ht(n)&&(n=ql(n));for(const i in n){const s=n[i];let r;de(s)?"default"in s?r=ko(s.from||i,s.default,!0):r=ko(s.from||i):r=ko(s),Ce(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function sh(n,t,e){Dn(Ht(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function ip(n,t,e,i){let s=i.includes(".")?gp(e,i):()=>e[i];if(ge(n)){const r=t[n];$t(r)&&$a(s,r)}else if($t(n))$a(s,n.bind(e));else if(de(n))if(Ht(n))n.forEach(r=>ip(r,t,e,i));else{const r=$t(n.handler)?n.handler.bind(e):t[n.handler];$t(r)&&$a(s,r,n)}}function uu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(u=>sa(l,u,o,!0)),sa(l,t,o)),de(t)&&r.set(t,l),l}function sa(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&sa(n,r,e,!0),s&&s.forEach(o=>sa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=vg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const vg={data:rh,props:oh,emits:oh,methods:Mr,computed:Mr,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Mr,directives:Mr,watch:Eg,provide:rh,inject:xg};function rh(n,t){return t?n?function(){return Me($t(n)?n.call(this,this):n,$t(t)?t.call(this,this):t)}:t:n}function xg(n,t){return Mr(ql(n),ql(t))}function ql(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Re(n,t){return n?[...new Set([].concat(n,t))]:t}function Mr(n,t){return n?Me(Object.create(null),n,t):t}function oh(n,t){return n?Ht(n)&&Ht(t)?[...new Set([...n,...t])]:Me(Object.create(null),ih(n),ih(t??{})):t}function Eg(n,t){if(!n)return t;if(!t)return n;const e=Me(Object.create(null),n);for(const i in t)e[i]=Re(n[i],t[i]);return e}function sp(){return{app:null,config:{isNativeTag:l_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sg=0;function Mg(n,t){return function(i,s=null){$t(i)||(i=Me({},i)),s!=null&&!de(s)&&(s=null);const r=sp(),o=new WeakSet,a=[];let l=!1;const u=r.app={_uid:Sg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:sv,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&$t(c.install)?(o.add(c),c.install(u,...h)):$t(c)&&(o.add(c),c(u,...h))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,h){return h?(r.components[c]=h,u):r.components[c]},directive(c,h){return h?(r.directives[c]=h,u):r.directives[c]},mount(c,h,d){if(!l){const p=u._ceVNode||jn(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&t?t(p,c):n(p,c,d),l=!0,u._container=c,c.__vue_app__=u,mu(p.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Dn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,h){return r.provides[c]=h,u},runWithContext(c){const h=Hs;Hs=u;try{return c()}finally{Hs=h}}};return u}}let Hs=null;function yg(n,t){if(Ne){let e=Ne.provides;const i=Ne.parent&&Ne.parent.provides;i===e&&(e=Ne.provides=Object.create(i)),e[n]=t}}function ko(n,t,e=!1){const i=Ne||bn;if(i||Hs){const s=Hs?Hs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&$t(t)?t.call(i&&i.proxy):t}}const rp={},op=()=>Object.create(rp),ap=n=>Object.getPrototypeOf(n)===rp;function Tg(n,t,e,i=!1){const s={},r=op();n.propsDefaults=Object.create(null),lp(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:z_(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function bg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=te(s),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let h=0;h<c.length;h++){let d=c[h];if(Ea(n.emitsOptions,d))continue;const p=t[d];if(l)if(ee(r,d))p!==r[d]&&(r[d]=p,u=!0);else{const g=Mi(d);s[g]=jl(l,a,g,p,n,!1)}else p!==r[d]&&(r[d]=p,u=!0)}}}else{lp(n,t,s,r)&&(u=!0);let c;for(const h in a)(!t||!ee(t,h)&&((c=rs(h))===h||!ee(t,c)))&&(l?e&&(e[h]!==void 0||e[c]!==void 0)&&(s[h]=jl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!ee(t,h))&&(delete r[h],u=!0)}u&&$n(n.attrs,"set","")}function lp(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(br(l))continue;const u=t[l];let c;s&&ee(s,c=Mi(l))?!r||!r.includes(c)?e[c]=u:(a||(a={}))[c]=u:Ea(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=te(e),u=a||le;for(let c=0;c<r.length;c++){const h=r[c];e[h]=jl(s,l,h,u[h],n,!ee(u,h))}}return o}function jl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ee(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$t(l)){const{propsDefaults:u}=s;if(e in u)i=u[e];else{const c=qr(s);i=u[e]=l.call(null,t),c()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===rs(e))&&(i=!0))}return i}const Ag=new WeakMap;function cp(n,t,e=!1){const i=e?Ag:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!$t(n)){const c=h=>{l=!0;const[d,p]=cp(h,t,!0);Me(o,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return de(n)&&i.set(n,Us),Us;if(Ht(r))for(let c=0;c<r.length;c++){const h=Mi(r[c]);ah(h)&&(o[h]=le)}else if(r)for(const c in r){const h=Mi(c);if(ah(h)){const d=r[c],p=o[h]=Ht(d)||$t(d)?{type:d}:Me({},d),g=p.type;let v=!1,m=!0;if(Ht(g))for(let f=0;f<g.length;++f){const A=g[f],b=$t(A)&&A.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(m=!1)}else v=$t(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||ee(p,"default"))&&a.push(h)}}const u=[o,a];return de(n)&&i.set(n,u),u}function ah(n){return n[0]!=="$"&&!br(n)}const up=n=>n[0]==="_"||n==="$stable",hu=n=>Ht(n)?n.map(yn):[yn(n)],wg=(n,t,e)=>{if(t._n)return t;const i=tg((...s)=>hu(t(...s)),e);return i._c=!1,i},hp=(n,t,e)=>{const i=n._ctx;for(const s in n){if(up(s))continue;const r=n[s];if($t(r))t[s]=wg(s,r,i);else if(r!=null){const o=hu(r);t[s]=()=>o}}},fp=(n,t)=>{const e=hu(t);n.slots.default=()=>e},dp=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},Cg=(n,t,e)=>{const i=n.slots=op();if(n.vnode.shapeFlag&32){const s=t._;s?(dp(i,t,e),e&&wd(i,"_",s,!0)):hp(t,i)}else t&&fp(n,t)},Rg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=le;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:dp(s,t,e):(r=!t.$stable,hp(t,s)),o=t}else t&&(fp(n,t),o={default:1});if(r)for(const a in s)!up(a)&&o[a]==null&&delete s[a]},Xe=Gg;function Pg(n){return Dg(n)}function Dg(n,t){const e=ga();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:d,setScopeId:p=wn,insertStaticContent:g}=n,v=(C,x,Y,J=null,q=null,G=null,rt=void 0,j=null,S=!!x.dynamicChildren)=>{if(C===x)return;C&&!pr(C,x)&&(J=dt(C),Pt(C,q,G,!0),C=null),x.patchFlag===-2&&(S=!1,x.dynamicChildren=null);const{type:_,ref:D,shapeFlag:O}=x;switch(_){case Sa:m(C,x,Y,J);break;case Vr:f(C,x,Y,J);break;case Ya:C==null&&A(x,Y,J,rt);break;case Wn:Z(C,x,Y,J,q,G,rt,j,S);break;default:O&1?I(C,x,Y,J,q,G,rt,j,S):O&6?k(C,x,Y,J,q,G,rt,j,S):(O&64||O&128)&&_.process(C,x,Y,J,q,G,rt,j,S,Ft)}D!=null&&q&&ia(D,C&&C.ref,G,x||C,!x)},m=(C,x,Y,J)=>{if(C==null)i(x.el=a(x.children),Y,J);else{const q=x.el=C.el;x.children!==C.children&&u(q,x.children)}},f=(C,x,Y,J)=>{C==null?i(x.el=l(x.children||""),Y,J):x.el=C.el},A=(C,x,Y,J)=>{[C.el,C.anchor]=g(C.children,x,Y,J,C.el,C.anchor)},b=({el:C,anchor:x},Y,J)=>{let q;for(;C&&C!==x;)q=d(C),i(C,Y,J),C=q;i(x,Y,J)},E=({el:C,anchor:x})=>{let Y;for(;C&&C!==x;)Y=d(C),s(C),C=Y;s(x)},I=(C,x,Y,J,q,G,rt,j,S)=>{x.type==="svg"?rt="svg":x.type==="math"&&(rt="mathml"),C==null?R(x,Y,J,q,G,rt,j,S):T(C,x,q,G,rt,j,S)},R=(C,x,Y,J,q,G,rt,j)=>{let S,_;const{props:D,shapeFlag:O,transition:V,dirs:H}=C;if(S=C.el=o(C.type,G,D&&D.is,D),O&8?c(S,C.children):O&16&&L(C.children,S,null,J,q,Wa(C,G),rt,j),H&&Oi(C,null,J,"created"),w(S,C,C.scopeId,rt,J),D){for(const ot in D)ot!=="value"&&!br(ot)&&r(S,ot,null,D[ot],G,J);"value"in D&&r(S,"value",null,D.value,G),(_=D.onVnodeBeforeMount)&&Sn(_,J,C)}H&&Oi(C,null,J,"beforeMount");const ct=Lg(q,V);ct&&V.beforeEnter(S),i(S,x,Y),((_=D&&D.onVnodeMounted)||ct||H)&&Xe(()=>{_&&Sn(_,J,C),ct&&V.enter(S),H&&Oi(C,null,J,"mounted")},q)},w=(C,x,Y,J,q)=>{if(Y&&p(C,Y),J)for(let G=0;G<J.length;G++)p(C,J[G]);if(q){let G=q.subTree;if(x===G||xp(G.type)&&(G.ssContent===x||G.ssFallback===x)){const rt=q.vnode;w(C,rt,rt.scopeId,rt.slotScopeIds,q.parent)}}},L=(C,x,Y,J,q,G,rt,j,S=0)=>{for(let _=S;_<C.length;_++){const D=C[_]=j?mi(C[_]):yn(C[_]);v(null,D,x,Y,J,q,G,rt,j)}},T=(C,x,Y,J,q,G,rt)=>{const j=x.el=C.el;let{patchFlag:S,dynamicChildren:_,dirs:D}=x;S|=C.patchFlag&16;const O=C.props||le,V=x.props||le;let H;if(Y&&Ui(Y,!1),(H=V.onVnodeBeforeUpdate)&&Sn(H,Y,x,C),D&&Oi(x,C,Y,"beforeUpdate"),Y&&Ui(Y,!0),(O.innerHTML&&V.innerHTML==null||O.textContent&&V.textContent==null)&&c(j,""),_?M(C.dynamicChildren,_,j,Y,J,Wa(x,q),G):rt||B(C,x,j,null,Y,J,Wa(x,q),G,!1),S>0){if(S&16)P(j,O,V,Y,q);else if(S&2&&O.class!==V.class&&r(j,"class",null,V.class,q),S&4&&r(j,"style",O.style,V.style,q),S&8){const ct=x.dynamicProps;for(let ot=0;ot<ct.length;ot++){const ut=ct[ot],Ut=O[ut],st=V[ut];(st!==Ut||ut==="value")&&r(j,ut,Ut,st,q,Y)}}S&1&&C.children!==x.children&&c(j,x.children)}else!rt&&_==null&&P(j,O,V,Y,q);((H=V.onVnodeUpdated)||D)&&Xe(()=>{H&&Sn(H,Y,x,C),D&&Oi(x,C,Y,"updated")},J)},M=(C,x,Y,J,q,G,rt)=>{for(let j=0;j<x.length;j++){const S=C[j],_=x[j],D=S.el&&(S.type===Wn||!pr(S,_)||S.shapeFlag&70)?h(S.el):Y;v(S,_,D,null,J,q,G,rt,!0)}},P=(C,x,Y,J,q)=>{if(x!==Y){if(x!==le)for(const G in x)!br(G)&&!(G in Y)&&r(C,G,x[G],null,q,J);for(const G in Y){if(br(G))continue;const rt=Y[G],j=x[G];rt!==j&&G!=="value"&&r(C,G,j,rt,q,J)}"value"in Y&&r(C,"value",x.value,Y.value,q)}},Z=(C,x,Y,J,q,G,rt,j,S)=>{const _=x.el=C?C.el:a(""),D=x.anchor=C?C.anchor:a("");let{patchFlag:O,dynamicChildren:V,slotScopeIds:H}=x;H&&(j=j?j.concat(H):H),C==null?(i(_,Y,J),i(D,Y,J),L(x.children||[],Y,D,q,G,rt,j,S)):O>0&&O&64&&V&&C.dynamicChildren?(M(C.dynamicChildren,V,Y,q,G,rt,j),(x.key!=null||q&&x===q.subTree)&&pp(C,x,!0)):B(C,x,Y,D,q,G,rt,j,S)},k=(C,x,Y,J,q,G,rt,j,S)=>{x.slotScopeIds=j,C==null?x.shapeFlag&512?q.ctx.activate(x,Y,J,rt,S):et(x,Y,J,q,G,rt,S):nt(C,x,S)},et=(C,x,Y,J,q,G,rt)=>{const j=C.component=Zg(C,J,q);if(tp(C)&&(j.ctx.renderer=Ft),Jg(j,!1,rt),j.asyncDep){if(q&&q.registerDep(j,X,rt),!C.el){const S=j.subTree=jn(Vr);f(null,S,x,Y)}}else X(j,C,x,Y,q,G,rt)},nt=(C,x,Y)=>{const J=x.component=C.component;if(Vg(C,x,Y))if(J.asyncDep&&!J.asyncResolved){K(J,x,Y);return}else J.next=x,J.update();else x.el=C.el,J.vnode=x},X=(C,x,Y,J,q,G,rt)=>{const j=()=>{if(C.isMounted){let{next:O,bu:V,u:H,parent:ct,vnode:ot}=C;{const Tt=mp(C);if(Tt){O&&(O.el=ot.el,K(C,O,rt)),Tt.asyncDep.then(()=>{C.isUnmounted||j()});return}}let ut=O,Ut;Ui(C,!1),O?(O.el=ot.el,K(C,O,rt)):O=ot,V&&Ba(V),(Ut=O.props&&O.props.onVnodeBeforeUpdate)&&Sn(Ut,ct,O,ot),Ui(C,!0);const st=Xa(C),pt=C.subTree;C.subTree=st,v(pt,st,h(pt.el),dt(pt),C,q,G),O.el=st.el,ut===null&&kg(C,st.el),H&&Xe(H,q),(Ut=O.props&&O.props.onVnodeUpdated)&&Xe(()=>Sn(Ut,ct,O,ot),q)}else{let O;const{el:V,props:H}=x,{bm:ct,m:ot,parent:ut,root:Ut,type:st}=C,pt=Rr(x);if(Ui(C,!1),ct&&Ba(ct),!pt&&(O=H&&H.onVnodeBeforeMount)&&Sn(O,ut,x),Ui(C,!0),V&&Xt){const Tt=()=>{C.subTree=Xa(C),Xt(V,C.subTree,C,q,null)};pt&&st.__asyncHydrate?st.__asyncHydrate(V,C,Tt):Tt()}else{Ut.ce&&Ut.ce._injectChildStyle(st);const Tt=C.subTree=Xa(C);v(null,Tt,Y,J,C,q,G),x.el=Tt.el}if(ot&&Xe(ot,q),!pt&&(O=H&&H.onVnodeMounted)){const Tt=x;Xe(()=>Sn(O,ut,Tt),q)}(x.shapeFlag&256||ut&&Rr(ut.vnode)&&ut.vnode.shapeFlag&256)&&C.a&&Xe(C.a,q),C.isMounted=!0,x=Y=J=null}};C.scope.on();const S=C.effect=new Ld(j);C.scope.off();const _=C.update=S.run.bind(S),D=C.job=S.runIfDirty.bind(S);D.i=C,D.id=C.uid,S.scheduler=()=>au(D),Ui(C,!0),_()},K=(C,x,Y)=>{x.component=C;const J=C.vnode.props;C.vnode=x,C.next=null,bg(C,x.props,J,Y),Rg(C,x.children,Y),Ri(),nh(C),Pi()},B=(C,x,Y,J,q,G,rt,j,S=!1)=>{const _=C&&C.children,D=C?C.shapeFlag:0,O=x.children,{patchFlag:V,shapeFlag:H}=x;if(V>0){if(V&128){_t(_,O,Y,J,q,G,rt,j,S);return}else if(V&256){ht(_,O,Y,J,q,G,rt,j,S);return}}H&8?(D&16&&Et(_,q,G),O!==_&&c(Y,O)):D&16?H&16?_t(_,O,Y,J,q,G,rt,j,S):Et(_,q,G,!0):(D&8&&c(Y,""),H&16&&L(O,Y,J,q,G,rt,j,S))},ht=(C,x,Y,J,q,G,rt,j,S)=>{C=C||Us,x=x||Us;const _=C.length,D=x.length,O=Math.min(_,D);let V;for(V=0;V<O;V++){const H=x[V]=S?mi(x[V]):yn(x[V]);v(C[V],H,Y,null,q,G,rt,j,S)}_>D?Et(C,q,G,!0,!1,O):L(x,Y,J,q,G,rt,j,S,O)},_t=(C,x,Y,J,q,G,rt,j,S)=>{let _=0;const D=x.length;let O=C.length-1,V=D-1;for(;_<=O&&_<=V;){const H=C[_],ct=x[_]=S?mi(x[_]):yn(x[_]);if(pr(H,ct))v(H,ct,Y,null,q,G,rt,j,S);else break;_++}for(;_<=O&&_<=V;){const H=C[O],ct=x[V]=S?mi(x[V]):yn(x[V]);if(pr(H,ct))v(H,ct,Y,null,q,G,rt,j,S);else break;O--,V--}if(_>O){if(_<=V){const H=V+1,ct=H<D?x[H].el:J;for(;_<=V;)v(null,x[_]=S?mi(x[_]):yn(x[_]),Y,ct,q,G,rt,j,S),_++}}else if(_>V)for(;_<=O;)Pt(C[_],q,G,!0),_++;else{const H=_,ct=_,ot=new Map;for(_=ct;_<=V;_++){const Ot=x[_]=S?mi(x[_]):yn(x[_]);Ot.key!=null&&ot.set(Ot.key,_)}let ut,Ut=0;const st=V-ct+1;let pt=!1,Tt=0;const Lt=new Array(st);for(_=0;_<st;_++)Lt[_]=0;for(_=H;_<=O;_++){const Ot=C[_];if(Ut>=st){Pt(Ot,q,G,!0);continue}let It;if(Ot.key!=null)It=ot.get(Ot.key);else for(ut=ct;ut<=V;ut++)if(Lt[ut-ct]===0&&pr(Ot,x[ut])){It=ut;break}It===void 0?Pt(Ot,q,G,!0):(Lt[It-ct]=_+1,It>=Tt?Tt=It:pt=!0,v(Ot,x[It],Y,null,q,G,rt,j,S),Ut++)}const Mt=pt?Ig(Lt):Us;for(ut=Mt.length-1,_=st-1;_>=0;_--){const Ot=ct+_,It=x[Ot],ne=Ot+1<D?x[Ot+1].el:J;Lt[_]===0?v(null,It,Y,ne,q,G,rt,j,S):pt&&(ut<0||_!==Mt[ut]?yt(It,Y,ne,2):ut--)}}},yt=(C,x,Y,J,q=null)=>{const{el:G,type:rt,transition:j,children:S,shapeFlag:_}=C;if(_&6){yt(C.component.subTree,x,Y,J);return}if(_&128){C.suspense.move(x,Y,J);return}if(_&64){rt.move(C,x,Y,Ft);return}if(rt===Wn){i(G,x,Y);for(let O=0;O<S.length;O++)yt(S[O],x,Y,J);i(C.anchor,x,Y);return}if(rt===Ya){b(C,x,Y);return}if(J!==2&&_&1&&j)if(J===0)j.beforeEnter(G),i(G,x,Y),Xe(()=>j.enter(G),q);else{const{leave:O,delayLeave:V,afterLeave:H}=j,ct=()=>i(G,x,Y),ot=()=>{O(G,()=>{ct(),H&&H()})};V?V(G,ct,ot):ot()}else i(G,x,Y)},Pt=(C,x,Y,J=!1,q=!1)=>{const{type:G,props:rt,ref:j,children:S,dynamicChildren:_,shapeFlag:D,patchFlag:O,dirs:V,cacheIndex:H}=C;if(O===-2&&(q=!1),j!=null&&ia(j,null,Y,C,!0),H!=null&&(x.renderCache[H]=void 0),D&256){x.ctx.deactivate(C);return}const ct=D&1&&V,ot=!Rr(C);let ut;if(ot&&(ut=rt&&rt.onVnodeBeforeUnmount)&&Sn(ut,x,C),D&6)lt(C.component,Y,J);else{if(D&128){C.suspense.unmount(Y,J);return}ct&&Oi(C,null,x,"beforeUnmount"),D&64?C.type.remove(C,x,Y,Ft,J):_&&!_.hasOnce&&(G!==Wn||O>0&&O&64)?Et(_,x,Y,!1,!0):(G===Wn&&O&384||!q&&D&16)&&Et(S,x,Y),J&&Yt(C)}(ot&&(ut=rt&&rt.onVnodeUnmounted)||ct)&&Xe(()=>{ut&&Sn(ut,x,C),ct&&Oi(C,null,x,"unmounted")},Y)},Yt=C=>{const{type:x,el:Y,anchor:J,transition:q}=C;if(x===Wn){tt(Y,J);return}if(x===Ya){E(C);return}const G=()=>{s(Y),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(C.shapeFlag&1&&q&&!q.persisted){const{leave:rt,delayLeave:j}=q,S=()=>rt(Y,G);j?j(C.el,G,S):S()}else G()},tt=(C,x)=>{let Y;for(;C!==x;)Y=d(C),s(C),C=Y;s(x)},lt=(C,x,Y)=>{const{bum:J,scope:q,job:G,subTree:rt,um:j,m:S,a:_}=C;lh(S),lh(_),J&&Ba(J),q.stop(),G&&(G.flags|=8,Pt(rt,C,x,Y)),j&&Xe(j,x),Xe(()=>{C.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},Et=(C,x,Y,J=!1,q=!1,G=0)=>{for(let rt=G;rt<C.length;rt++)Pt(C[rt],x,Y,J,q)},dt=C=>{if(C.shapeFlag&6)return dt(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const x=d(C.anchor||C.el),Y=x&&x[eg];return Y?d(Y):x};let bt=!1;const Nt=(C,x,Y)=>{C==null?x._vnode&&Pt(x._vnode,null,null,!0):v(x._vnode||null,C,x,null,null,null,Y),x._vnode=C,bt||(bt=!0,nh(),Kd(),bt=!1)},Ft={p:v,um:Pt,m:yt,r:Yt,mt:et,mc:L,pc:B,pbc:M,n:dt,o:n};let Zt,Xt;return{render:Nt,hydrate:Zt,createApp:Mg(Nt,Zt)}}function Wa({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ui({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Lg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function pp(n,t,e=!1){const i=n.children,s=t.children;if(Ht(i)&&Ht(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=mi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&pp(o,a)),a.type===Sa&&(a.el=o.el)}}function Ig(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=e[e.length-1],n[s]<u){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<u?r=a+1:o=a;u<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function mp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:mp(t)}function lh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Ng=Symbol.for("v-scx"),Og=()=>ko(Ng);function $a(n,t,e){return _p(n,t,e)}function _p(n,t,e=le){const{immediate:i,deep:s,flush:r,once:o}=e,a=Me({},e),l=t&&i||!t&&r!=="post";let u;if(Gr){if(r==="sync"){const p=Og();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=wn,p.resume=wn,p.pause=wn,p}}const c=Ne;a.call=(p,g,v)=>Dn(p,c,g,v);let h=!1;r==="post"?a.scheduler=p=>{Xe(p,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():au(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const d=j_(n,t,a);return Gr&&(u?u.push(d):l&&d()),d}function Ug(n,t,e){const i=this.proxy,s=ge(n)?n.includes(".")?gp(i,n):()=>i[n]:n.bind(i,i);let r;$t(t)?r=t:(r=t.handler,e=t);const o=qr(this),a=_p(s,r.bind(i),e);return o(),a}function gp(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Fg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Mi(t)}Modifiers`]||n[`${rs(t)}Modifiers`];function Bg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||le;let s=e;const r=t.startsWith("update:"),o=r&&Fg(i,t.slice(7));o&&(o.trim&&(s=e.map(c=>ge(c)?c.trim():c)),o.number&&(s=e.map(d_)));let a,l=i[a=Fa(t)]||i[a=Fa(Mi(t))];!l&&r&&(l=i[a=Fa(rs(t))]),l&&Dn(l,n,6,s);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Dn(u,n,6,s)}}function vp(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!$t(n)){const l=u=>{const c=vp(u,t,!0);c&&(a=!0,Me(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(de(n)&&i.set(n,null),null):(Ht(r)?r.forEach(l=>o[l]=null):Me(o,r),de(n)&&i.set(n,o),o)}function Ea(n,t){return!n||!pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),ee(n,t[0].toLowerCase()+t.slice(1))||ee(n,rs(t))||ee(n,t))}function Xa(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:h,data:d,setupState:p,ctx:g,inheritAttrs:v}=n,m=na(n);let f,A;try{if(e.shapeFlag&4){const E=s||i,I=E;f=yn(u.call(I,E,c,h,p,d,g)),A=a}else{const E=t;f=yn(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),A=t.props?a:Hg(a)}}catch(E){Dr.length=0,va(E,n,1),f=jn(Vr)}let b=f;if(A&&v!==!1){const E=Object.keys(A),{shapeFlag:I}=b;E.length&&I&7&&(r&&E.some(Yc)&&(A=zg(A,r)),b=Ws(b,A,!1,!0))}return e.dirs&&(b=Ws(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition&&lu(b,e.transition),f=b,na(m),f}const Hg=n=>{let t;for(const e in n)(e==="class"||e==="style"||pa(e))&&((t||(t={}))[e]=n[e]);return t},zg=(n,t)=>{const e={};for(const i in n)(!Yc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Vg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?ch(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const d=c[h];if(o[d]!==i[d]&&!Ea(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ch(i,o,u):!0:!!o;return!1}function ch(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Ea(e,r))return!0}return!1}function kg({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const xp=n=>n.__isSuspense;function Gg(n,t){t&&t.pendingBranch?Ht(n)?t.effects.push(...n):t.effects.push(n):Q_(n)}const Wn=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),Vr=Symbol.for("v-cmt"),Ya=Symbol.for("v-stc"),Dr=[];let qe=null;function fu(n=!1){Dr.push(qe=n?null:[])}function Wg(){Dr.pop(),qe=Dr[Dr.length-1]||null}let kr=1;function uh(n,t=!1){kr+=n,n<0&&qe&&t&&(qe.hasOnce=!0)}function $g(n){return n.dynamicChildren=kr>0?qe||Us:null,Wg(),kr>0&&qe&&qe.push(n),n}function du(n,t,e,i,s,r){return $g(dn(n,t,e,i,s,r,!0))}function Ep(n){return n?n.__v_isVNode===!0:!1}function pr(n,t){return n.type===t.type&&n.key===t.key}const Sp=({key:n})=>n??null,Go=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ge(n)||Ce(n)||$t(n)?{i:bn,r:n,k:t,f:!!e}:n:null);function dn(n,t=null,e=null,i=0,s=null,r=n===Wn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Sp(t),ref:t&&Go(t),scopeId:Jd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bn};return a?(pu(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=ge(e)?8:16),kr>0&&!o&&qe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&qe.push(l),l}const jn=Xg;function Xg(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===pg)&&(n=Vr),Ep(n)){const a=Ws(n,t,!0);return e&&pu(a,e),kr>0&&!r&&qe&&(a.shapeFlag&6?qe[qe.indexOf(n)]=a:qe.push(a)),a.patchFlag=-2,a}if(nv(n)&&(n=n.__vccOpts),t){t=Yg(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=Zc(a)),de(l)&&(ou(l)&&!Ht(l)&&(l=Me({},l)),t.style=Kc(l))}const o=ge(n)?1:xp(n)?128:ng(n)?64:de(n)?4:$t(n)?2:0;return dn(n,t,e,i,s,o,r,!0)}function Yg(n){return n?ou(n)||ap(n)?Me({},n):n:null}function Ws(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,u=t?qg(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Sp(u),ref:t&&t.ref?e&&r?Ht(r)?r.concat(Go(t)):[r,Go(t)]:Go(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Wn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ws(n.ssContent),ssFallback:n.ssFallback&&Ws(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&lu(c,l.clone(c)),c}function Mp(n=" ",t=0){return jn(Sa,null,n,t)}function yn(n){return n==null||typeof n=="boolean"?jn(Vr):Ht(n)?jn(Wn,null,n.slice()):Ep(n)?mi(n):jn(Sa,null,String(n))}function mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ws(n)}function pu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ht(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),pu(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!ap(t)?t._ctx=bn:s===3&&bn&&(bn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else $t(t)?(t={default:t,_ctx:bn},e=32):(t=String(t),i&64?(e=16,t=[Mp(t)]):e=8);n.children=t,n.shapeFlag|=e}function qg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Zc([t.class,i.class]));else if(s==="style")t.style=Kc([t.style,i.style]);else if(pa(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ht(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function Sn(n,t,e,i=null){Dn(n,t,7,[e,i])}const jg=sp();let Kg=0;function Zg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||jg,r={uid:Kg++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new E_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cp(i,s),emitsOptions:vp(i,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:i.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Bg.bind(null,r),n.ce&&n.ce(r),r}let Ne=null,ra,Kl;{const n=ga(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ra=t("__VUE_INSTANCE_SETTERS__",e=>Ne=e),Kl=t("__VUE_SSR_SETTERS__",e=>Gr=e)}const qr=n=>{const t=Ne;return ra(n),n.scope.on(),()=>{n.scope.off(),ra(t)}},hh=()=>{Ne&&Ne.scope.off(),ra(null)};function yp(n){return n.vnode.shapeFlag&4}let Gr=!1;function Jg(n,t=!1,e=!1){t&&Kl(t);const{props:i,children:s}=n.vnode,r=yp(n);Tg(n,i,r,t),Cg(n,s,e);const o=r?Qg(n,t):void 0;return t&&Kl(!1),o}function Qg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,mg);const{setup:i}=e;if(i){Ri();const s=n.setupContext=i.length>1?ev(n):null,r=qr(n),o=Yr(i,n,0,[n.props,s]),a=yd(o);if(Pi(),r(),(a||n.sp)&&!Rr(n)&&Qd(n),a){if(o.then(hh,hh),t)return o.then(l=>{fh(n,l,t)}).catch(l=>{va(l,n,0)});n.asyncDep=o}else fh(n,o,t)}else Tp(n,t)}function fh(n,t,e){$t(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:de(t)&&(n.setupState=Yd(t)),Tp(n,e)}let dh;function Tp(n,t,e){const i=n.type;if(!n.render){if(!t&&dh&&!i.render){const s=i.template||uu(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,u=Me(Me({isCustomElement:r,delimiters:a},o),l);i.render=dh(s,u)}}n.render=i.render||wn}{const s=qr(n);Ri();try{_g(n)}finally{Pi(),s()}}}const tv={get(n,t){return Ae(n,"get",""),n[t]}};function ev(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,tv),slots:n.slots,emit:n.emit,expose:t}}function mu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Yd(V_(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Pr)return Pr[e](n)},has(t,e){return e in t||e in Pr}})):n.proxy}function nv(n){return $t(n)&&"__vccOpts"in n}const iv=(n,t)=>Y_(n,t,Gr),sv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zl;const ph=typeof window<"u"&&window.trustedTypes;if(ph)try{Zl=ph.createPolicy("vue",{createHTML:n=>n})}catch{}const bp=Zl?n=>Zl.createHTML(n):n=>n,rv="http://www.w3.org/2000/svg",ov="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,mh=Gn&&Gn.createElement("template"),av={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Gn.createElementNS(rv,n):t==="mathml"?Gn.createElementNS(ov,n):e?Gn.createElement(n,{is:e}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{mh.innerHTML=bp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=mh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},lv=Symbol("_vtc");function cv(n,t,e){const i=n[lv];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const _h=Symbol("_vod"),uv=Symbol("_vsh"),hv=Symbol(""),fv=/(^|;)\s*display\s*:/;function dv(n,t,e){const i=n.style,s=ge(e);let r=!1;if(e&&!s){if(t)if(ge(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Wo(i,a,"")}else for(const o in t)e[o]==null&&Wo(i,o,"");for(const o in e)o==="display"&&(r=!0),Wo(i,o,e[o])}else if(s){if(t!==e){const o=i[hv];o&&(e+=";"+o),i.cssText=e,r=fv.test(e)}}else t&&n.removeAttribute("style");_h in n&&(n[_h]=r?i.display:"",n[uv]&&(i.display="none"))}const gh=/\s*!important$/;function Wo(n,t,e){if(Ht(e))e.forEach(i=>Wo(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=pv(n,t);gh.test(e)?n.setProperty(rs(i),e.replace(gh,""),"important"):n[i]=e}}const vh=["Webkit","Moz","ms"],qa={};function pv(n,t){const e=qa[t];if(e)return e;let i=Mi(t);if(i!=="filter"&&i in n)return qa[t]=i;i=Ad(i);for(let s=0;s<vh.length;s++){const r=vh[s]+i;if(r in n)return qa[t]=r}return t}const xh="http://www.w3.org/1999/xlink";function Eh(n,t,e,i,s,r=x_(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(xh,t.slice(6,t.length)):n.setAttributeNS(xh,t,e):e==null||r&&!Cd(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Ci(e)?String(e):e)}function Sh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?bp(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Cd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function mv(n,t,e,i){n.addEventListener(t,e,i)}function _v(n,t,e,i){n.removeEventListener(t,e,i)}const Mh=Symbol("_vei");function gv(n,t,e,i,s=null){const r=n[Mh]||(n[Mh]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=vv(t);if(i){const u=r[t]=Sv(i,s);mv(n,a,u,l)}else o&&(_v(n,a,o,l),r[t]=void 0)}}const yh=/(?:Once|Passive|Capture)$/;function vv(n){let t;if(yh.test(n)){t={};let i;for(;i=n.match(yh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):rs(n.slice(2)),t]}let ja=0;const xv=Promise.resolve(),Ev=()=>ja||(xv.then(()=>ja=0),ja=Date.now());function Sv(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Dn(Mv(i,e.value),t,5,[i])};return e.value=n,e.attached=Ev(),e}function Mv(n,t){if(Ht(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Th=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,yv=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?cv(n,i,o):t==="style"?dv(n,e,i):pa(t)?Yc(t)||gv(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tv(n,t,i,o))?(Sh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Eh(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!ge(i))?Sh(n,Mi(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Eh(n,t,i,o))};function Tv(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Th(t)&&$t(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Th(t)&&ge(e)?!1:t in n}const bv=Me({patchProp:yv},av);let bh;function Av(){return bh||(bh=Pg(bv))}const wv=(...n)=>{const t=Av().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Rv(i);if(!s)return;const r=t._component;!$t(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Cv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Cv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Rv(n){return ge(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _u="170",zs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pv=0,Ah=1,Dv=2,Ap=1,Lv=2,kn=3,yi=0,ze=1,Xn=2,Ei=0,Vs=1,wh=2,Ch=3,Rh=4,Iv=5,$i=100,Nv=101,Ov=102,Uv=103,Fv=104,Bv=200,Hv=201,zv=202,Vv=203,Jl=204,Ql=205,kv=206,Gv=207,Wv=208,$v=209,Xv=210,Yv=211,qv=212,jv=213,Kv=214,tc=0,ec=1,nc=2,$s=3,ic=4,sc=5,rc=6,oc=7,wp=0,Zv=1,Jv=2,Si=0,Qv=1,tx=2,ex=3,nx=4,ix=5,sx=6,rx=7,Cp=300,Xs=301,Ys=302,ac=303,lc=304,Ma=306,cc=1e3,Yi=1001,uc=1002,vn=1003,ox=1004,co=1005,An=1006,Ka=1007,qi=1008,Qn=1009,Rp=1010,Pp=1011,Wr=1012,gu=1013,ts=1014,Yn=1015,jr=1016,vu=1017,xu=1018,qs=1020,Dp=35902,Lp=1021,Ip=1022,mn=1023,Np=1024,Op=1025,ks=1026,js=1027,Up=1028,Eu=1029,Fp=1030,Su=1031,Mu=1033,$o=33776,Xo=33777,Yo=33778,qo=33779,hc=35840,fc=35841,dc=35842,pc=35843,mc=36196,_c=37492,gc=37496,vc=37808,xc=37809,Ec=37810,Sc=37811,Mc=37812,yc=37813,Tc=37814,bc=37815,Ac=37816,wc=37817,Cc=37818,Rc=37819,Pc=37820,Dc=37821,jo=36492,Lc=36494,Ic=36495,Bp=36283,Nc=36284,Oc=36285,Uc=36286,ax=3200,lx=3201,cx=0,ux=1,vi="",tn="srgb",sr="srgb-linear",ya="linear",se="srgb",hs=7680,Ph=519,hx=512,fx=513,dx=514,Hp=515,px=516,mx=517,_x=518,gx=519,Dh=35044,Lh="300 es",qn=2e3,oa=2001;class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ih=1234567;const Lr=Math.PI/180,$r=180/Math.PI;function rr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function we(n,t,e){return Math.max(t,Math.min(e,n))}function yu(n,t){return(n%t+t)%t}function vx(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function xx(n,t,e){return n!==t?(e-n)/(t-n):0}function Ir(n,t,e){return(1-e)*n+e*t}function Ex(n,t,e,i){return Ir(n,t,1-Math.exp(-e*i))}function Sx(n,t=1){return t-Math.abs(yu(n,t*2)-t)}function Mx(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function yx(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Tx(n,t){return n+Math.floor(Math.random()*(t-n+1))}function bx(n,t){return n+Math.random()*(t-n)}function Ax(n){return n*(.5-Math.random())}function wx(n){n!==void 0&&(Ih=n);let t=Ih+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cx(n){return n*Lr}function Rx(n){return n*$r}function Px(n){return(n&n-1)===0&&n!==0}function Dx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ix(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),u=r((t+i)/2),c=o((t+i)/2),h=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*c,l*h,l*d,a*u);break;case"YZY":n.set(l*d,a*c,l*h,a*u);break;case"ZXZ":n.set(l*h,l*d,a*c,a*u);break;case"XZX":n.set(a*c,l*g,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*g,a*u);break;case"ZYZ":n.set(l*g,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Nx={DEG2RAD:Lr,RAD2DEG:$r,generateUUID:rr,clamp:we,euclideanModulo:yu,mapLinear:vx,inverseLerp:xx,lerp:Ir,damp:Ex,pingpong:Sx,smoothstep:Mx,smootherstep:yx,randInt:Tx,randFloat:bx,randFloatSpread:Ax,seededRandom:wx,degToRad:Cx,radToDeg:Rx,isPowerOfTwo:Px,ceilPowerOfTwo:Dx,floorPowerOfTwo:Lx,setQuaternionFromProperEuler:Ix,normalize:Pe,denormalize:Rs};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,s,r,o,a,l,u){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u)}set(t,e,i,s,r,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],A=s[1],b=s[4],E=s[7],I=s[2],R=s[5],w=s[8];return r[0]=o*v+a*A+l*I,r[3]=o*m+a*b+l*R,r[6]=o*f+a*E+l*w,r[1]=u*v+c*A+h*I,r[4]=u*m+c*b+h*R,r[7]=u*f+c*E+h*w,r[2]=d*v+p*A+g*I,r[5]=d*m+p*b+g*R,r[8]=d*f+p*E+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*r*c+i*a*l+s*r*u-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=c*o-a*u,d=a*l-c*r,p=u*r-o*l,g=e*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*u-c*i)*v,t[2]=(a*i-s*o)*v,t[3]=d*v,t[4]=(c*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(i*l-u*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-s*u,s*l,-s*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new kt;function zp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ox(){const n=aa("canvas");return n.style.display="block",n}const Nh={};function yr(n){n in Nh||(Nh[n]=!0,console.warn(n))}function Ux(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Fx(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bx(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(n.r=Kn(n.r),n.g=Kn(n.g),n.b=Kn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(n.r=Gs(n.r),n.g=Gs(n.g),n.b=Gs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===vi?ya:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Oh=[.64,.33,.3,.6,.15,.06],Uh=[.2126,.7152,.0722],Fh=[.3127,.329],Bh=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[sr]:{primaries:Oh,whitePoint:Fh,transfer:ya,toXYZ:Bh,fromXYZ:Hh,luminanceCoefficients:Uh,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:Oh,whitePoint:Fh,transfer:se,toXYZ:Bh,fromXYZ:Hh,luminanceCoefficients:Uh,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});let fs;class Hx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=aa("canvas")),fs.width=t.width,fs.height=t.height;const i=fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=aa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Kn(e[i]/255)*255):e[i]=Kn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zx=0;class Vp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vx=0;class Ve extends os{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,i=Yi,s=Yi,r=An,o=qi,a=mn,l=Qn,u=Ve.DEFAULT_ANISOTROPY,c=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=rr(),this.name="",this.source=new Vp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cc:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cc:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Cp;Ve.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(u+1)/2,E=(p+1)/2,I=(f+1)/2,R=(c+d)/4,w=(h+v)/4,L=(g+m)/4;return b>E&&b>I?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=w/i):E>I?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=L/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=w/r,s=L/r),this.set(i,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-c)*(d-c));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-v)/A,this.z=(d-c)/A,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kx extends os{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ve(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends kx{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class kp extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gx extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],u=i[s+1],c=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==d||u!==p||c!==g){let m=1-a;const f=l*d+u*p+c*g+h*v,A=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const I=Math.sqrt(b),R=Math.atan2(I,f*A);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}const E=a*A;if(l=l*m+d*E,u=u*m+p*E,c=c*m+g*E,h=h*m+v*E,m===1-a){const I=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=I,u*=I,c*=I,h*=I}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],c=i[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+c*h+l*p-u*d,t[e+1]=l*g+c*d+u*h-a*p,t[e+2]=u*g+c*p+a*d-l*h,t[e+3]=c*g-a*h-l*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*c*h+u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h-d*p*g;break;case"YXZ":this._x=d*c*h+u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h+d*p*g;break;case"ZXY":this._x=d*c*h-u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h-d*p*g;break;case"ZYX":this._x=d*c*h-u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h+d*p*g;break;case"YZX":this._x=d*c*h+u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h-d*p*g;break;case"XZY":this._x=d*c*h-u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],h=e[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-i*u,this._z=r*c+o*u+i*l-s*a,this._w=o*c-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-e)*c)/u,d=Math.sin(e*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*s-a*i),c=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*u+o*h-a*c,this.y=i+l*c+a*u-r*h,this.z=s+l*h+r*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new z,zh=new ns;class Kr{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),ho.subVectors(this.max,mr),ds.subVectors(t.a,mr),ps.subVectors(t.b,mr),ms.subVectors(t.c,mr),oi.subVectors(ps,ds),ai.subVectors(ms,ps),Fi.subVectors(ds,ms);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Fi.z,Fi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Fi.z,0,-Fi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Fi.y,Fi.x,0];return!tl(e,ds,ps,ms,ho)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,ds,ps,ms,ho))?!1:(fo.crossVectors(oi,ai),e=[fo.x,fo.y,fo.z],tl(e,ds,ps,ms,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new z,new z,new z,new z,new z,new z,new z,new z],un=new z,uo=new Kr,ds=new z,ps=new z,ms=new z,oi=new z,ai=new z,Fi=new z,mr=new z,ho=new z,fo=new z,Bi=new z;function tl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Bi.fromArray(n,r);const a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),u=e.dot(Bi),c=i.dot(Bi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Wx=new Kr,_r=new z,el=new z;class Ta{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Wx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_r.subVectors(t,this.center);const e=_r.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_r,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_r.copy(t.center).add(el)),this.expandByPoint(_r.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new z,nl=new z,po=new z,li=new z,il=new z,mo=new z,sl=new z;class ba{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){nl.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),li.copy(this.origin).sub(nl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(po),a=li.dot(this.direction),l=-li.dot(po),u=li.lengthSq(),c=Math.abs(1-o*o);let h,d,p,g;if(c>0)if(h=o*l-a,d=o*a-l,g=r*c,h>=0)if(d>=-g)if(d<=g){const v=1/c;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+u):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+u);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(nl).addScaledVector(po,d),p}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const i=Bn.dot(this.direction),s=Bn.dot(Bn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(i=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,i,s,r){il.subVectors(e,t),mo.subVectors(i,t),sl.crossVectors(il,mo);let o=this.direction.dot(sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,t);const l=a*this.direction.dot(mo.crossVectors(li,mo));if(l<0)return null;const u=a*this.direction.dot(il.cross(li));if(u<0||l+u>o)return null;const c=-a*li.dot(sl);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,s,r,o,a,l,u,c,h,d,p,g,v,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u,c,h,d,p,g,v,m)}set(t,e,i,s,r,o,a,l,u,c,h,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*c,p=o*h,g=a*c,v=a*h;e[0]=l*c,e[4]=-l*h,e[8]=u,e[1]=p+g*u,e[5]=d-v*u,e[9]=-a*l,e[2]=v-d*u,e[6]=g+p*u,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,p=l*h,g=u*c,v=u*h;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*u,e[1]=o*h,e[5]=o*c,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,p=l*h,g=u*c,v=u*h;e[0]=d-v*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*c,e[9]=v-d*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,p=o*h,g=a*c,v=a*h;e[0]=l*c,e[4]=g*u-p,e[8]=d*u+v,e[1]=l*h,e[5]=v*u+d,e[9]=p*u-g,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*u,g=a*l,v=a*u;e[0]=l*c,e[4]=v-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=p*h+g,e[10]=d-v*h}else if(t.order==="XZY"){const d=o*l,p=o*u,g=a*l,v=a*u;e[0]=l*c,e[4]=-h,e[8]=u*c,e[1]=d*h+v,e[5]=o*c,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*c,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($x,t,Xx)}lookAt(t,e,i){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),ci.crossVectors(i,We),ci.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),ci.crossVectors(i,We)),ci.normalize(),_o.crossVectors(We,ci),s[0]=ci.x,s[4]=_o.x,s[8]=We.x,s[1]=ci.y,s[5]=_o.y,s[9]=We.y,s[2]=ci.z,s[6]=_o.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],A=i[3],b=i[7],E=i[11],I=i[15],R=s[0],w=s[4],L=s[8],T=s[12],M=s[1],P=s[5],Z=s[9],k=s[13],et=s[2],nt=s[6],X=s[10],K=s[14],B=s[3],ht=s[7],_t=s[11],yt=s[15];return r[0]=o*R+a*M+l*et+u*B,r[4]=o*w+a*P+l*nt+u*ht,r[8]=o*L+a*Z+l*X+u*_t,r[12]=o*T+a*k+l*K+u*yt,r[1]=c*R+h*M+d*et+p*B,r[5]=c*w+h*P+d*nt+p*ht,r[9]=c*L+h*Z+d*X+p*_t,r[13]=c*T+h*k+d*K+p*yt,r[2]=g*R+v*M+m*et+f*B,r[6]=g*w+v*P+m*nt+f*ht,r[10]=g*L+v*Z+m*X+f*_t,r[14]=g*T+v*k+m*K+f*yt,r[3]=A*R+b*M+E*et+I*B,r[7]=A*w+b*P+E*nt+I*ht,r[11]=A*L+b*Z+E*X+I*_t,r[15]=A*T+b*k+E*K+I*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],h=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*h-s*u*h-r*a*d+i*u*d+s*a*p-i*l*p)+v*(+e*l*p-e*u*d+r*o*d-s*o*p+s*u*c-r*l*c)+m*(+e*u*h-e*a*p-r*o*h+i*o*p+r*a*c-i*u*c)+f*(-s*a*c-e*l*h+e*a*d+s*o*h-i*o*d+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],A=h*m*u-v*d*u+v*l*p-a*m*p-h*l*f+a*d*f,b=g*d*u-c*m*u-g*l*p+o*m*p+c*l*f-o*d*f,E=c*v*u-g*h*u+g*a*p-o*v*p-c*a*f+o*h*f,I=g*h*l-c*v*l-g*a*d+o*v*d+c*a*m-o*h*m,R=e*A+i*b+s*E+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=A*w,t[1]=(v*d*r-h*m*r-v*s*p+i*m*p+h*s*f-i*d*f)*w,t[2]=(a*m*r-v*l*r+v*s*u-i*m*u-a*s*f+i*l*f)*w,t[3]=(h*l*r-a*d*r-h*s*u+i*d*u+a*s*p-i*l*p)*w,t[4]=b*w,t[5]=(c*m*r-g*d*r+g*s*p-e*m*p-c*s*f+e*d*f)*w,t[6]=(g*l*r-o*m*r-g*s*u+e*m*u+o*s*f-e*l*f)*w,t[7]=(o*d*r-c*l*r+c*s*u-e*d*u-o*s*p+e*l*p)*w,t[8]=E*w,t[9]=(g*h*r-c*v*r-g*i*p+e*v*p+c*i*f-e*h*f)*w,t[10]=(o*v*r-g*a*r+g*i*u-e*v*u-o*i*f+e*a*f)*w,t[11]=(c*a*r-o*h*r-c*i*u+e*h*u+o*i*p-e*a*p)*w,t[12]=I*w,t[13]=(c*v*s-g*h*s+g*i*d-e*v*d-c*i*m+e*h*m)*w,t[14]=(g*a*s-o*v*s-g*i*l+e*v*l+o*i*m-e*a*m)*w,t[15]=(o*h*s-c*a*s+c*i*l-e*h*l-o*i*d+e*a*d)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,u=r*o,c=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+i,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,u=r+r,c=o+o,h=a+a,d=r*u,p=r*c,g=r*h,v=o*c,m=o*h,f=a*h,A=l*u,b=l*c,E=l*h,I=i.x,R=i.y,w=i.z;return s[0]=(1-(v+f))*I,s[1]=(p+E)*I,s[2]=(g-b)*I,s[3]=0,s[4]=(p-E)*R,s[5]=(1-(d+f))*R,s[6]=(m+A)*R,s[7]=0,s[8]=(g+b)*w,s[9]=(m-A)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=_s.set(s[0],s[1],s[2]).length();const o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);const u=1/r,c=1/o,h=1/a;return hn.elements[0]*=u,hn.elements[1]*=u,hn.elements[2]*=u,hn.elements[4]*=c,hn.elements[5]*=c,hn.elements[6]*=c,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,e.setFromRotationMatrix(hn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=qn){const l=this.elements,u=2*r/(e-t),c=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let p,g;if(a===qn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=qn){const l=this.elements,u=1/(e-t),c=1/(i-s),h=1/(o-r),d=(e+t)*u,p=(i+s)*c;let g,v;if(a===qn)g=(o+r)*h,v=-2*h;else if(a===oa)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const _s=new z,hn=new he,$x=new z(0,0,0),Xx=new z(1,1,1),ci=new z,_o=new z,We=new z,Vh=new he,kh=new ns;class ti{constructor(t=0,e=0,i=0,s=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-we(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Vh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kh.setFromEuler(this),this.setFromQuaternion(kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yx=0;const Gh=new z,gs=new ns,Hn=new he,go=new z,gr=new z,qx=new z,jx=new ns,Wh=new z(1,0,0),$h=new z(0,1,0),Xh=new z(0,0,1),Yh={type:"added"},Kx={type:"removed"},vs={type:"childadded",child:null},rl={type:"childremoved",child:null};class Se extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new z,e=new ti,i=new ns,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis($h,t)}rotateZ(t){return this.rotateOnAxis(Xh,t)}translateOnAxis(t,e){return Gh.copy(t).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis($h,t)}translateZ(t){return this.translateOnAxis(Xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?go.copy(t):go.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(gr,go,this.up):Hn.lookAt(go,gr,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(Hn),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yh),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kx),rl.child=t,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yh),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,qx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,jx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Se.DEFAULT_UP=new z(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new z,zn=new z,ol=new z,Vn=new z,xs=new z,Es=new z,qh=new z,al=new z,ll=new z,cl=new z,ul=new pe,hl=new pe,fl=new pe;class pn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){fn.subVectors(s,e),zn.subVectors(i,e),ol.subVectors(t,e);const o=fn.dot(fn),a=fn.dot(zn),l=fn.dot(ol),u=zn.dot(zn),c=zn.dot(ol),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,g=(o*c-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ul.setScalar(0),hl.setScalar(0),fl.setScalar(0),ul.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,i),fl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ul,r.x),o.addScaledVector(hl,r.y),o.addScaledVector(fl,r.z),o}static isFrontFacing(t,e,i,s){return fn.subVectors(i,e),zn.subVectors(t,e),fn.cross(zn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),fn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;xs.subVectors(s,i),Es.subVectors(r,i),al.subVectors(t,i);const l=xs.dot(al),u=Es.dot(al);if(l<=0&&u<=0)return e.copy(i);ll.subVectors(t,s);const c=xs.dot(ll),h=Es.dot(ll);if(c>=0&&h<=c)return e.copy(s);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(xs,o);cl.subVectors(t,r);const p=xs.dot(cl),g=Es.dot(cl);if(g>=0&&p<=g)return e.copy(r);const v=p*u-l*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(i).addScaledVector(Es,a);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return qh.subVectors(r,s),a=(h-c)/(h-c+(p-g)),e.copy(s).addScaledVector(qh,a);const f=1/(m+v+d);return o=v*f,a=d*f,e.copy(i).addScaledVector(xs,o).addScaledVector(Es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},vo={h:0,s:0,l:0};function dl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=qt.workingColorSpace){if(t=yu(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=dl(o,r,t+1/3),this.g=dl(o,r,t),this.b=dl(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const i=Gp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return qt.fromWorkingColorSpace(be.copy(this),t),Math.round(we(be.r*255,0,255))*65536+Math.round(we(be.g*255,0,255))*256+Math.round(we(be.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(be.copy(this),e);const i=be.r,s=be.g,r=be.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=tn){qt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,i=be.g,s=be.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(vo);const i=Ir(ui.h,vo.h,e),s=Ir(ui.s,vo.s,e),r=Ir(ui.l,vo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new jt;jt.NAMES=Gp;let Zx=0;class Zr extends os{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=rr(),this.name="",this.blending=Vs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Ql,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ql&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nr extends Zr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new z,xo=new Wt;class Cn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Dh,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Rs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dh&&(t.usage=this.usage),t}}class Wp extends Cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class $p extends Cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ke extends Cn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Jx=0;const Qe=new he,pl=new Se,Ss=new z,$e=new Kr,vr=new Kr,Ee=new z;class In extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zp(t)?$p:Wp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors($e.min,vr.min),$e.expandByPoint(Ee),Ee.addVectors($e.max,vr.max),$e.expandByPoint(Ee)):($e.expandByPoint(vr.min),$e.expandByPoint(vr.max))}$e.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ee.fromBufferAttribute(a,u),l&&(Ss.fromBufferAttribute(t,u),Ee.add(Ss)),s=Math.max(s,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new z,l[L]=new z;const u=new z,c=new z,h=new z,d=new Wt,p=new Wt,g=new Wt,v=new z,m=new z;function f(L,T,M){u.fromBufferAttribute(i,L),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),c.sub(u),h.sub(u),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),a[L].add(v),a[T].add(v),a[M].add(v),l[L].add(m),l[T].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let L=0,T=A.length;L<T;++L){const M=A[L],P=M.start,Z=M.count;for(let k=P,et=P+Z;k<et;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const b=new z,E=new z,I=new z,R=new z;function w(L){I.fromBufferAttribute(s,L),R.copy(I);const T=a[L];b.copy(T),b.sub(I.multiplyScalar(I.dot(T))).normalize(),E.crossVectors(R,T);const P=E.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,P)}for(let L=0,T=A.length;L<T;++L){const M=A[L],P=M.start,Z=M.count;for(let k=P,et=P+Z;k<et;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,u=new z,c=new z,h=new z;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*c;for(let f=0;f<c;f++)d[g++]=u[p++]}return new Cn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new In,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=t(l,i);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const r=t.morphAttributes;for(const u in r){const c=[],h=r[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new he,Hi=new ba,Eo=new Ta,Kh=new z,So=new z,Mo=new z,yo=new z,ml=new z,To=new z,Zh=new z,bo=new z;class nn extends Se{constructor(t=new In,e=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){To.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],h=r[l];c!==0&&(ml.fromBufferAttribute(h,t),o?To.addScaledVector(ml,c):To.addScaledVector(ml.sub(e),c))}e.add(To)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(Eo.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Eo,Kh)===null||Hi.origin.distanceToSquared(Kh)>(t.far-t.near)**2))&&(jh.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(jh),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,I=b;E<I;E+=3){const R=a.getX(E),w=a.getX(E+1),L=a.getX(E+2);s=Ao(this,f,t,i,u,c,h,R,w,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const A=a.getX(m),b=a.getX(m+1),E=a.getX(m+2);s=Ao(this,o,t,i,u,c,h,A,b,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,I=b;E<I;E+=3){const R=E,w=E+1,L=E+2;s=Ao(this,f,t,i,u,c,h,R,w,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const A=m,b=m+1,E=m+2;s=Ao(this,o,t,i,u,c,h,A,b,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Qx(n,t,e,i,s,r,o,a){let l;if(t.side===ze?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===yi,a),l===null)return null;bo.copy(a),bo.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(bo);return u<e.near||u>e.far?null:{distance:u,point:bo.clone(),object:n}}function Ao(n,t,e,i,s,r,o,a,l,u){n.getVertexPosition(a,So),n.getVertexPosition(l,Mo),n.getVertexPosition(u,yo);const c=Qx(n,t,e,i,So,Mo,yo,Zh);if(c){const h=new z;pn.getBarycoord(Zh,So,Mo,yo,h),s&&(c.uv=pn.getInterpolatedAttribute(s,a,l,u,h,new Wt)),r&&(c.uv1=pn.getInterpolatedAttribute(r,a,l,u,h,new Wt)),o&&(c.normal=pn.getInterpolatedAttribute(o,a,l,u,h,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new z,materialIndex:0};pn.getNormal(So,Mo,yo,d.normal),c.face=d,c.barycoord=h}return c}class Jr extends In{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(h,2));function g(v,m,f,A,b,E,I,R,w,L,T){const M=E/w,P=I/L,Z=E/2,k=I/2,et=R/2,nt=w+1,X=L+1;let K=0,B=0;const ht=new z;for(let _t=0;_t<X;_t++){const yt=_t*P-k;for(let Pt=0;Pt<nt;Pt++){const Yt=Pt*M-Z;ht[v]=Yt*A,ht[m]=yt*b,ht[f]=et,u.push(ht.x,ht.y,ht.z),ht[v]=0,ht[m]=0,ht[f]=R>0?1:-1,c.push(ht.x,ht.y,ht.z),h.push(Pt/w),h.push(1-_t/L),K+=1}}for(let _t=0;_t<L;_t++)for(let yt=0;yt<w;yt++){const Pt=d+yt+nt*_t,Yt=d+yt+nt*(_t+1),tt=d+(yt+1)+nt*(_t+1),lt=d+(yt+1)+nt*_t;l.push(Pt,Yt,lt),l.push(Yt,tt,lt),B+=6}a.addGroup(p,B,T),p+=B,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ks(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function De(n){const t={};for(let e=0;e<n.length;e++){const i=Ks(n[e]);for(const s in i)t[s]=i[s]}return t}function tE(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Xp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const eE={clone:Ks,merge:De};var nE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Zr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nE,this.fragmentShader=iE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ks(t.uniforms),this.uniformsGroups=tE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Yp extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new z,Jh=new Wt,Qh=new Wt;class en extends Yp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,Jh,Qh),e.subVectors(Qh,Jh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,ys=1;class sE extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(Ms,ys,t,e);s.layers=this.layers,this.add(s);const r=new en(Ms,ys,t,e);r.layers=this.layers,this.add(r);const o=new en(Ms,ys,t,e);o.layers=this.layers,this.add(o);const a=new en(Ms,ys,t,e);a.layers=this.layers,this.add(a);const l=new en(Ms,ys,t,e);l.layers=this.layers,this.add(l);const u=new en(Ms,ys,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const u of e)this.remove(u);if(t===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,u),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(h,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class qp extends Ve{constructor(t,e,i,s,r,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,i,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rE extends es{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new qp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jr(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ze,blending:Ei});r.uniforms.tEquirect.value=e;const o=new nn(s,r),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=An),new sE(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const _l=new z,oE=new z,aE=new kt;class _i{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=_l.subVectors(i,e).cross(oE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(_l),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||aE.getNormalMatrix(t),s=this.coplanarPoint(_l).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Ta,wo=new z;class jp{constructor(t=new _i,e=new _i,i=new _i,s=new _i,r=new _i,o=new _i){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=qn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],h=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],A=s[13],b=s[14],E=s[15];if(i[0].setComponents(l-r,d-u,m-p,E-f).normalize(),i[1].setComponents(l+r,d+u,m+p,E+f).normalize(),i[2].setComponents(l+o,d+c,m+g,E+A).normalize(),i[3].setComponents(l-o,d-c,m-g,E-A).normalize(),i[4].setComponents(l-a,d-h,m-v,E-b).normalize(),e===qn)i[5].setComponents(l+a,d+h,m+v,E+b).normalize();else if(e===oa)i[5].setComponents(a,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(wo.x=s.normal.x>0?t.max.x:t.min.x,wo.y=s.normal.y>0?t.max.y:t.min.y,wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function lE(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}class Aa extends In{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),u=a+1,c=l+1,h=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<c;f++){const A=f*d-o;for(let b=0;b<u;b++){const E=b*h-r;g.push(E,-A,0),v.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<a;A++){const b=A+u*f,E=A+u*(f+1),I=A+1+u*(f+1),R=A+1+u*f;p.push(b,E,R),p.push(E,I,R)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.width,t.height,t.widthSegments,t.heightSegments)}}var cE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uE=`#ifdef USE_ALPHAHASH
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
#endif`,hE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mE=`#ifdef USE_AOMAP
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
#endif`,_E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gE=`#ifdef USE_BATCHING
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
#endif`,vE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ME=`#ifdef USE_IRIDESCENCE
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
#endif`,yE=`#ifdef USE_BUMPMAP
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
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,LE=`#define PI 3.141592653589793
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
} // validated`,IE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NE=`vec3 transformedNormal = objectNormal;
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
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",zE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GE=`#ifdef USE_ENVMAP
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
#endif`,WE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
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
#endif`,XE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KE=`#ifdef USE_GRADIENTMAP
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
}`,ZE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
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
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
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
#endif`,a0=`struct PhysicalMaterial {
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
}`,l0=`
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y0=`float getShadowMask() {
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
}`,q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,J0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nS=`#ifdef USE_TRANSMISSION
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
#endif`,iS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cS=`uniform sampler2D t2D;
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
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`#include <common>
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
}`,mS=`#if DEPTH_PACKING == 3200
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
}`,_S=`#define DISTANCE
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
}`,gS=`#define DISTANCE
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ES=`uniform float scale;
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
}`,SS=`uniform vec3 diffuse;
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
}`,MS=`#include <common>
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
}`,yS=`uniform vec3 diffuse;
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
}`,TS=`#define LAMBERT
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
}`,bS=`#define LAMBERT
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
}`,AS=`#define MATCAP
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
}`,wS=`#define MATCAP
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
}`,CS=`#define NORMAL
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
}`,RS=`#define NORMAL
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
}`,PS=`#define PHONG
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
}`,DS=`#define PHONG
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
}`,LS=`#define STANDARD
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
}`,IS=`#define STANDARD
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
}`,NS=`#define TOON
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
}`,OS=`#define TOON
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
}`,US=`uniform float size;
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
}`,FS=`uniform vec3 diffuse;
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
}`,BS=`#include <common>
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
}`,HS=`uniform vec3 color;
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
}`,zS=`uniform float rotation;
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
}`,VS=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:cE,alphahash_pars_fragment:uE,alphamap_fragment:hE,alphamap_pars_fragment:fE,alphatest_fragment:dE,alphatest_pars_fragment:pE,aomap_fragment:mE,aomap_pars_fragment:_E,batching_pars_vertex:gE,batching_vertex:vE,begin_vertex:xE,beginnormal_vertex:EE,bsdfs:SE,iridescence_fragment:ME,bumpmap_pars_fragment:yE,clipping_planes_fragment:TE,clipping_planes_pars_fragment:bE,clipping_planes_pars_vertex:AE,clipping_planes_vertex:wE,color_fragment:CE,color_pars_fragment:RE,color_pars_vertex:PE,color_vertex:DE,common:LE,cube_uv_reflection_fragment:IE,defaultnormal_vertex:NE,displacementmap_pars_vertex:OE,displacementmap_vertex:UE,emissivemap_fragment:FE,emissivemap_pars_fragment:BE,colorspace_fragment:HE,colorspace_pars_fragment:zE,envmap_fragment:VE,envmap_common_pars_fragment:kE,envmap_pars_fragment:GE,envmap_pars_vertex:WE,envmap_physical_pars_fragment:e0,envmap_vertex:$E,fog_vertex:XE,fog_pars_vertex:YE,fog_fragment:qE,fog_pars_fragment:jE,gradientmap_pars_fragment:KE,lightmap_pars_fragment:ZE,lights_lambert_fragment:JE,lights_lambert_pars_fragment:QE,lights_pars_begin:t0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:s0,lights_phong_pars_fragment:r0,lights_physical_fragment:o0,lights_physical_pars_fragment:a0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:u0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:_0,map_particle_fragment:g0,map_particle_pars_fragment:v0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:E0,morphinstance_vertex:S0,morphcolor_vertex:M0,morphnormal_vertex:y0,morphtarget_pars_vertex:T0,morphtarget_vertex:b0,normal_fragment_begin:A0,normal_fragment_maps:w0,normal_pars_fragment:C0,normal_pars_vertex:R0,normal_vertex:P0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:I0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:O0,opaque_fragment:U0,packing:F0,premultiplied_alpha_fragment:B0,project_vertex:H0,dithering_fragment:z0,dithering_pars_fragment:V0,roughnessmap_fragment:k0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:$0,shadowmap_vertex:X0,shadowmask_pars_fragment:Y0,skinbase_vertex:q0,skinning_pars_vertex:j0,skinning_vertex:K0,skinnormal_vertex:Z0,specularmap_fragment:J0,specularmap_pars_fragment:Q0,tonemapping_fragment:tS,tonemapping_pars_fragment:eS,transmission_fragment:nS,transmission_pars_fragment:iS,uv_pars_fragment:sS,uv_pars_vertex:rS,uv_vertex:oS,worldpos_vertex:aS,background_vert:lS,background_frag:cS,backgroundCube_vert:uS,backgroundCube_frag:hS,cube_vert:fS,cube_frag:dS,depth_vert:pS,depth_frag:mS,distanceRGBA_vert:_S,distanceRGBA_frag:gS,equirect_vert:vS,equirect_frag:xS,linedashed_vert:ES,linedashed_frag:SS,meshbasic_vert:MS,meshbasic_frag:yS,meshlambert_vert:TS,meshlambert_frag:bS,meshmatcap_vert:AS,meshmatcap_frag:wS,meshnormal_vert:CS,meshnormal_frag:RS,meshphong_vert:PS,meshphong_frag:DS,meshphysical_vert:LS,meshphysical_frag:IS,meshtoon_vert:NS,meshtoon_frag:OS,points_vert:US,points_frag:FS,shadow_vert:BS,shadow_frag:HS,sprite_vert:zS,sprite_frag:VS},mt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Tn={basic:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:De([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:De([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:De([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:De([mt.points,mt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:De([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:De([mt.common,mt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:De([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:De([mt.sprite,mt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:De([mt.common,mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:De([mt.lights,mt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Tn.physical={uniforms:De([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Co={r:0,b:0,g:0},Vi=new ti,kS=new he;function GS(n,t,e,i,s,r,o){const a=new jt(0);let l=r===!0?0:1,u,c,h=null,d=0,p=null;function g(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?e:t).get(b)),b}function v(A){let b=!1;const E=g(A);E===null?f(a,l):E&&E.isColor&&(f(E,1),b=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,b){const E=g(b);E&&(E.isCubeTexture||E.mapping===Ma)?(c===void 0&&(c=new nn(new Jr(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Ks(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Vi.copy(b.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kS.makeRotationFromEuler(Vi)),c.material.toneMapped=qt.getTransfer(E.colorSpace)!==se,(h!==E||d!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new nn(new Aa(2,2),new Ti({name:"BackgroundMaterial",uniforms:Ks(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=qt.getTransfer(E.colorSpace)!==se,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function f(A,b){A.getRGB(Co,Xp(n)),i.buffers.color.setClear(Co.r,Co.g,Co.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(A,b=1){a.set(A),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(a,l)},render:v,addToRenderList:m}}function WS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,P,Z,k,et){let nt=!1;const X=h(k,Z,P);r!==X&&(r=X,u(r.object)),nt=p(M,k,Z,et),nt&&g(M,k,Z,et),et!==null&&t.update(et,n.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,E(M,P,Z,k),et!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function h(M,P,Z){const k=Z.wireframe===!0;let et=i[M.id];et===void 0&&(et={},i[M.id]=et);let nt=et[P.id];nt===void 0&&(nt={},et[P.id]=nt);let X=nt[k];return X===void 0&&(X=d(l()),nt[k]=X),X}function d(M){const P=[],Z=[],k=[];for(let et=0;et<e;et++)P[et]=0,Z[et]=0,k[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Z,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,P,Z,k){const et=r.attributes,nt=P.attributes;let X=0;const K=Z.getAttributes();for(const B in K)if(K[B].location>=0){const _t=et[B];let yt=nt[B];if(yt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),_t===void 0||_t.attribute!==yt||yt&&_t.data!==yt.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(M,P,Z,k){const et={},nt=P.attributes;let X=0;const K=Z.getAttributes();for(const B in K)if(K[B].location>=0){let _t=nt[B];_t===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));const yt={};yt.attribute=_t,_t&&_t.data&&(yt.data=_t.data),et[B]=yt,X++}r.attributes=et,r.attributesNum=X,r.index=k}function v(){const M=r.newAttributes;for(let P=0,Z=M.length;P<Z;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const Z=r.newAttributes,k=r.enabledAttributes,et=r.attributeDivisors;Z[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),et[M]!==P&&(n.vertexAttribDivisor(M,P),et[M]=P)}function A(){const M=r.newAttributes,P=r.enabledAttributes;for(let Z=0,k=P.length;Z<k;Z++)P[Z]!==M[Z]&&(n.disableVertexAttribArray(Z),P[Z]=0)}function b(M,P,Z,k,et,nt,X){X===!0?n.vertexAttribIPointer(M,P,Z,et,nt):n.vertexAttribPointer(M,P,Z,k,et,nt)}function E(M,P,Z,k){v();const et=k.attributes,nt=Z.getAttributes(),X=P.defaultAttributeValues;for(const K in nt){const B=nt[K];if(B.location>=0){let ht=et[K];if(ht===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),ht!==void 0){const _t=ht.normalized,yt=ht.itemSize,Pt=t.get(ht);if(Pt===void 0)continue;const Yt=Pt.buffer,tt=Pt.type,lt=Pt.bytesPerElement,Et=tt===n.INT||tt===n.UNSIGNED_INT||ht.gpuType===gu;if(ht.isInterleavedBufferAttribute){const dt=ht.data,bt=dt.stride,Nt=ht.offset;if(dt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<B.locationSize;Ft++)f(B.location+Ft,dt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ft=0;Ft<B.locationSize;Ft++)m(B.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let Ft=0;Ft<B.locationSize;Ft++)b(B.location+Ft,yt/B.locationSize,tt,_t,bt*lt,(Nt+yt/B.locationSize*Ft)*lt,Et)}else{if(ht.isInstancedBufferAttribute){for(let dt=0;dt<B.locationSize;dt++)f(B.location+dt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let dt=0;dt<B.locationSize;dt++)m(B.location+dt);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let dt=0;dt<B.locationSize;dt++)b(B.location+dt,yt/B.locationSize,tt,_t,yt*lt,yt/B.locationSize*dt*lt,Et)}}else if(X!==void 0){const _t=X[K];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(B.location,_t);break;case 3:n.vertexAttrib3fv(B.location,_t);break;case 4:n.vertexAttrib4fv(B.location,_t);break;default:n.vertexAttrib1fv(B.location,_t)}}}}A()}function I(){L();for(const M in i){const P=i[M];for(const Z in P){const k=P[Z];for(const et in k)c(k[et].object),delete k[et];delete P[Z]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const Z in P){const k=P[Z];for(const et in k)c(k[et].object),delete k[et];delete P[Z]}delete i[M.id]}function w(M){for(const P in i){const Z=i[P];if(Z[M.id]===void 0)continue;const k=Z[M.id];for(const et in k)c(k[et].object),delete k[et];delete Z[M.id]}}function L(){T(),o=!0,r!==s&&(r=s,u(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function $S(n,t,e){let i;function s(u){i=u}function r(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),e.update(c,i,h))}function a(u,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];e.update(p,i,1)}function l(u,c,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=c[v]*d[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function XS(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==mn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===jr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Qn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Yn&&!L)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:I,maxSamples:R}}function YS(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new _i,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=c(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?c(null):u();else{const A=r?0:i,b=A*4;let E=f.clippingState||null;l.value=E,E=c(g,d,b,p);for(let I=0;I!==b;++I)E[I]=e[I];f.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,E=p;b!==v;++b,E+=4)o.copy(h[b]).applyMatrix4(A,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function qS(n){let t=new WeakMap;function e(o,a){return a===ac?o.mapping=Xs:a===lc&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ac||a===lc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new rE(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class jS extends Yp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ns=4,tf=[.125,.215,.35,.446,.526,.582],Xi=20,gl=new jS,ef=new jt;let vl=null,xl=0,El=0,Sl=!1;const Wi=(1+Math.sqrt(5))/2,Ts=1/Wi,nf=[new z(-Wi,Ts,0),new z(Wi,Ts,0),new z(-Ts,0,Wi),new z(Ts,0,Wi),new z(0,Wi,-Ts),new z(0,Wi,Ts),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class sf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vl,xl,El),this._renderer.xr.enabled=Sl,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:jr,format:mn,colorSpace:sr,depthBuffer:!1},s=rf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KS(r)),this._blurMaterial=ZS(r,t,e)}return s}_compileMaterial(t){const e=new nn(this._lodPlanes[0],t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,i,s){const a=new en(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(ef),c.toneMapping=Si,c.autoClear=!1;const p=new Nr({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new nn(new Jr,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(ef),v=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):A===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const b=this._cubeSize;Ro(s,A*b,f>2?b:0,b,b),c.setRenderTarget(s),v&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Xs||t.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ro(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,gl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nf[(s-r-1)%nf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new nn(this._lodPlanes[s],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xi-1),v=r/g,m=isFinite(r)?1+Math.floor(c*v):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const f=[];let A=0;for(let w=0;w<Xi;++w){const L=w/v,T=Math.exp(-L*L/2);f.push(T),w===0?A+=T:w<m&&(A+=2*T)}for(let w=0;w<f.length;w++)f[w]=f[w]/A;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const E=this._sizeLods[s],I=3*E*(s>b-Ns?s-b+Ns:0),R=4*(this._cubeSize-E);Ro(e,I,R,3*E,2*E),l.setRenderTarget(e),l.render(h,gl)}}function KS(n){const t=[],e=[],i=[];let s=n;const r=n-Ns+1+tf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ns?l=tf[o-n+Ns-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,v=3,m=2,f=1,A=new Float32Array(v*g*p),b=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,L=R>2?0:-1,T=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];A.set(T,v*g*R),b.set(d,m*g*R);const M=[R,R,R,R,R,R];E.set(M,f*g*R)}const I=new In;I.setAttribute("position",new Cn(A,v)),I.setAttribute("uv",new Cn(b,m)),I.setAttribute("faceIndex",new Cn(E,f)),t.push(I),s>Ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rf(n,t,e){const i=new es(n,t,e);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ZS(n,t,e){const i=new Float32Array(Xi),s=new z(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function of(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function af(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function bu(){return`

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
	`}function JS(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ac||l===lc,c=l===Xs||l===Ys;if(u||c){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new sf(n)),h=u?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&s(p)?(e===null&&(e=new sf(n)),h=u?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function QS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&yr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function tM(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],n.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let b=0,E=A.length;b<E;b+=3){const I=A[b+0],R=A[b+1],w=A[b+2];d.push(I,R,R,w,w,I)}}else if(g!==void 0){const A=g.array;v=g.version;for(let b=0,E=A.length/3-1;b<E;b+=3){const I=b+0,R=b+1,w=b+2;d.push(I,R,R,w,w,I)}}else return;const m=new(zp(d)?$p:Wp)(d,1);m.version=v;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function c(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function eM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function u(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function c(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function h(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)u(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let f=0;for(let A=0;A<g;A++)f+=p[A]*v[A];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function nM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function iM(n,t,e){const i=new WeakMap,s=new pe;function r(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let I=a.attributes.position.count*E,R=1;I>t.maxTextureSize&&(R=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const w=new Float32Array(I*R*4*h),L=new kp(w,I,R,h);L.type=Yn,L.needsUpdate=!0;const T=E*4;for(let P=0;P<h;P++){const Z=f[P],k=A[P],et=b[P],nt=I*R*4*P;for(let X=0;X<Z.count;X++){const K=X*T;g===!0&&(s.fromBufferAttribute(Z,X),w[nt+K+0]=s.x,w[nt+K+1]=s.y,w[nt+K+2]=s.z,w[nt+K+3]=0),v===!0&&(s.fromBufferAttribute(k,X),w[nt+K+4]=s.x,w[nt+K+5]=s.y,w[nt+K+6]=s.z,w[nt+K+7]=0),m===!0&&(s.fromBufferAttribute(et,X),w[nt+K+8]=s.x,w[nt+K+9]=s.y,w[nt+K+10]=s.z,w[nt+K+11]=et.itemSize===4?s.w:1)}}d={count:h,texture:L,size:new Wt(I,R)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function sM(n,t,e,i){let s=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,h=t.get(l,c);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}class Zp extends Ve{constructor(t,e,i,s,r,o,a,l,u,c=ks){if(c!==ks&&c!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ks&&(i=ts),i===void 0&&c===js&&(i=qs),super(null,s,r,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jp=new Ve,lf=new Zp(1,1),Qp=new kp,tm=new Gx,em=new qp,cf=[],uf=[],hf=new Float32Array(16),ff=new Float32Array(9),df=new Float32Array(4);function or(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=cf[s];if(r===void 0&&(r=new Float32Array(s),cf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wa(n,t){let e=uf[t];e===void 0&&(e=new Int32Array(t),uf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function oM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),xe(e,t)}}function aM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),xe(e,t)}}function lM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),xe(e,t)}}function cM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;df.set(i),n.uniformMatrix2fv(this.addr,!1,df),xe(e,i)}}function uM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;ff.set(i),n.uniformMatrix3fv(this.addr,!1,ff),xe(e,i)}}function hM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;hf.set(i),n.uniformMatrix4fv(this.addr,!1,hf),xe(e,i)}}function fM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),xe(e,t)}}function pM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),xe(e,t)}}function mM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),xe(e,t)}}function _M(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),xe(e,t)}}function vM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),xe(e,t)}}function xM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),xe(e,t)}}function EM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(lf.compareFunction=Hp,r=lf):r=Jp,e.setTexture2D(t||r,s)}function SM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||tm,s)}function MM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||em,s)}function yM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Qp,s)}function TM(n){switch(n){case 5126:return rM;case 35664:return oM;case 35665:return aM;case 35666:return lM;case 35674:return cM;case 35675:return uM;case 35676:return hM;case 5124:case 35670:return fM;case 35667:case 35671:return dM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return _M;case 36294:return gM;case 36295:return vM;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return yM}}function bM(n,t){n.uniform1fv(this.addr,t)}function AM(n,t){const e=or(t,this.size,2);n.uniform2fv(this.addr,e)}function wM(n,t){const e=or(t,this.size,3);n.uniform3fv(this.addr,e)}function CM(n,t){const e=or(t,this.size,4);n.uniform4fv(this.addr,e)}function RM(n,t){const e=or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function PM(n,t){const e=or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function DM(n,t){const e=or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function LM(n,t){n.uniform1iv(this.addr,t)}function IM(n,t){n.uniform2iv(this.addr,t)}function NM(n,t){n.uniform3iv(this.addr,t)}function OM(n,t){n.uniform4iv(this.addr,t)}function UM(n,t){n.uniform1uiv(this.addr,t)}function FM(n,t){n.uniform2uiv(this.addr,t)}function BM(n,t){n.uniform3uiv(this.addr,t)}function HM(n,t){n.uniform4uiv(this.addr,t)}function zM(n,t,e){const i=this.cache,s=t.length,r=wa(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Jp,r[o])}function VM(n,t,e){const i=this.cache,s=t.length,r=wa(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||tm,r[o])}function kM(n,t,e){const i=this.cache,s=t.length,r=wa(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||em,r[o])}function GM(n,t,e){const i=this.cache,s=t.length,r=wa(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qp,r[o])}function WM(n){switch(n){case 5126:return bM;case 35664:return AM;case 35665:return wM;case 35666:return CM;case 35674:return RM;case 35675:return PM;case 35676:return DM;case 5124:case 35670:return LM;case 35667:case 35671:return IM;case 35668:case 35672:return NM;case 35669:case 35673:return OM;case 5125:return UM;case 36294:return FM;case 36295:return BM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return GM}}class $M{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=TM(e.type)}}class XM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=WM(e.type)}}class YM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function pf(n,t){n.seq.push(t),n.map[t.id]=t}function qM(n,t,e){const i=n.name,s=i.length;for(Ml.lastIndex=0;;){const r=Ml.exec(i),o=Ml.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){pf(e,u===void 0?new $M(a,n,t):new XM(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new YM(a),pf(e,h)),e=h}}}class Ko{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);qM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function mf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const jM=37297;let KM=0;function ZM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const _f=new kt;function JM(n){qt._getMatrix(_f,qt.workingColorSpace,n);const t=`mat3( ${_f.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case ya:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function gf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ZM(n.getShaderSource(t),o)}else return s}function QM(n,t){const e=JM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ty(n,t){let e;switch(t){case Qv:e="Linear";break;case tx:e="Reinhard";break;case ex:e="Cineon";break;case nx:e="ACESFilmic";break;case sx:e="AgX";break;case rx:e="Neutral";break;case ix:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Po=new z;function ey(){qt.getLuminanceCoefficients(Po);const n=Po.x.toFixed(4),t=Po.y.toFixed(4),e=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ny(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function iy(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function sy(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Tr(n){return n!==""}function vf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(n){return n.replace(ry,ay)}const oy=new Map;function ay(n,t){let e=Gt[t];if(e===void 0){const i=oy.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fc(e)}const ly=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(n){return n.replace(ly,cy)}function cy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function uy(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ap?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lv?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function hy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case Ys:t="ENVMAP_TYPE_CUBE";break;case Ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function dy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wp:t="ENVMAP_BLENDING_MULTIPLY";break;case Zv:t="ENVMAP_BLENDING_MIX";break;case Jv:t="ENVMAP_BLENDING_ADD";break}return t}function py(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function my(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=uy(e),u=hy(e),c=fy(e),h=dy(e),d=py(e),p=ny(e),g=iy(r),v=s.createProgram();let m,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Tr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Tr).join(`
`),f.length>0&&(f+=`
`)):(m=[Sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),f=[Sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Si?ty("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,QM("linearToOutputTexel",e.outputColorSpace),ey(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tr).join(`
`)),o=Fc(o),o=vf(o,e),o=xf(o,e),a=Fc(a),a=vf(a,e),a=xf(a,e),o=Ef(o),a=Ef(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=A+m+o,E=A+f+a,I=mf(s,s.VERTEX_SHADER,b),R=mf(s,s.FRAGMENT_SHADER,E);s.attachShader(v,I),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(P){if(n.debug.checkShaderErrors){const Z=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(I).trim(),et=s.getShaderInfoLog(R).trim();let nt=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,R);else{const K=gf(s,I,"vertex"),B=gf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+K+`
`+B)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(k===""||et==="")&&(X=!1);X&&(P.diagnostics={runnable:nt,programLog:Z,vertexShader:{log:k,prefix:m},fragmentShader:{log:et,prefix:f}})}s.deleteShader(I),s.deleteShader(R),L=new Ko(s,v),T=sy(s,v)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,jM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=KM++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=R,this}let _y=0;class gy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new vy(t),e.set(t,i)),i}}class vy{constructor(t){this.id=_y++,this.code=t,this.usedTimes=0}}function xy(n,t,e,i,s,r,o){const a=new Tu,l=new gy,u=new Set,c=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,M,P,Z,k){const et=Z.fog,nt=k.geometry,X=T.isMeshStandardMaterial?Z.environment:null,K=(T.isMeshStandardMaterial?e:t).get(T.envMap||X),B=K&&K.mapping===Ma?K.image.height:null,ht=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const _t=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,yt=_t!==void 0?_t.length:0;let Pt=0;nt.morphAttributes.position!==void 0&&(Pt=1),nt.morphAttributes.normal!==void 0&&(Pt=2),nt.morphAttributes.color!==void 0&&(Pt=3);let Yt,tt,lt,Et;if(ht){const ie=Tn[ht];Yt=ie.vertexShader,tt=ie.fragmentShader}else Yt=T.vertexShader,tt=T.fragmentShader,l.update(T),lt=l.getVertexShaderID(T),Et=l.getFragmentShaderID(T);const dt=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Nt=k.isInstancedMesh===!0,Ft=k.isBatchedMesh===!0,Zt=!!T.map,Xt=!!T.matcap,C=!!K,x=!!T.aoMap,Y=!!T.lightMap,J=!!T.bumpMap,q=!!T.normalMap,G=!!T.displacementMap,rt=!!T.emissiveMap,j=!!T.metalnessMap,S=!!T.roughnessMap,_=T.anisotropy>0,D=T.clearcoat>0,O=T.dispersion>0,V=T.iridescence>0,H=T.sheen>0,ct=T.transmission>0,ot=_&&!!T.anisotropyMap,ut=D&&!!T.clearcoatMap,Ut=D&&!!T.clearcoatNormalMap,st=D&&!!T.clearcoatRoughnessMap,pt=V&&!!T.iridescenceMap,Tt=V&&!!T.iridescenceThicknessMap,Lt=H&&!!T.sheenColorMap,Mt=H&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,It=!!T.specularColorMap,ne=!!T.specularIntensityMap,N=ct&&!!T.transmissionMap,gt=ct&&!!T.thicknessMap,Q=!!T.gradientMap,it=!!T.alphaMap,St=T.alphaTest>0,vt=!!T.alphaHash,zt=!!T.extensions;let fe=Si;T.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(fe=n.toneMapping);const ye={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:Yt,fragmentShader:tt,defines:T.defines,customVertexShaderID:lt,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&k._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&k.instanceColor!==null,instancingMorph:Nt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:sr,alphaToCoverage:!!T.alphaToCoverage,map:Zt,matcap:Xt,envMap:C,envMapMode:C&&K.mapping,envMapCubeUVHeight:B,aoMap:x,lightMap:Y,bumpMap:J,normalMap:q,displacementMap:d&&G,emissiveMap:rt,normalMapObjectSpace:q&&T.normalMapType===ux,normalMapTangentSpace:q&&T.normalMapType===cx,metalnessMap:j,roughnessMap:S,anisotropy:_,anisotropyMap:ot,clearcoat:D,clearcoatMap:ut,clearcoatNormalMap:Ut,clearcoatRoughnessMap:st,dispersion:O,iridescence:V,iridescenceMap:pt,iridescenceThicknessMap:Tt,sheen:H,sheenColorMap:Lt,sheenRoughnessMap:Mt,specularMap:Ot,specularColorMap:It,specularIntensityMap:ne,transmission:ct,transmissionMap:N,thicknessMap:gt,gradientMap:Q,opaque:T.transparent===!1&&T.blending===Vs&&T.alphaToCoverage===!1,alphaMap:it,alphaTest:St,alphaHash:vt,combine:T.combine,mapUv:Zt&&v(T.map.channel),aoMapUv:x&&v(T.aoMap.channel),lightMapUv:Y&&v(T.lightMap.channel),bumpMapUv:J&&v(T.bumpMap.channel),normalMapUv:q&&v(T.normalMap.channel),displacementMapUv:G&&v(T.displacementMap.channel),emissiveMapUv:rt&&v(T.emissiveMap.channel),metalnessMapUv:j&&v(T.metalnessMap.channel),roughnessMapUv:S&&v(T.roughnessMap.channel),anisotropyMapUv:ot&&v(T.anisotropyMap.channel),clearcoatMapUv:ut&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(T.sheenRoughnessMap.channel),specularMapUv:Ot&&v(T.specularMap.channel),specularColorMapUv:It&&v(T.specularColorMap.channel),specularIntensityMapUv:ne&&v(T.specularIntensityMap.channel),transmissionMapUv:N&&v(T.transmissionMap.channel),thicknessMapUv:gt&&v(T.thicknessMap.channel),alphaMapUv:it&&v(T.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(q||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!nt.attributes.uv&&(Zt||it),fog:!!et,useFog:T.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:bt,skinning:k.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Pt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:Zt&&T.map.isVideoTexture===!0&&qt.getTransfer(T.map.colorSpace)===se,decodeVideoTextureEmissive:rt&&T.emissiveMap.isVideoTexture===!0&&qt.getTransfer(T.emissiveMap.colorSpace)===se,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Xn,flipSided:T.side===ze,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&T.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ye.vertexUv1s=u.has(1),ye.vertexUv2s=u.has(2),ye.vertexUv3s=u.has(3),u.clear(),ye}function f(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)M.push(P),M.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(A(M,T),b(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function A(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function b(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function E(T){const M=g[T.type];let P;if(M){const Z=Tn[M];P=eE.clone(Z.uniforms)}else P=T.uniforms;return P}function I(T,M){let P;for(let Z=0,k=c.length;Z<k;Z++){const et=c[Z];if(et.cacheKey===M){P=et,++P.usedTimes;break}}return P===void 0&&(P=new my(n,M,T,r),c.push(P)),P}function R(T){if(--T.usedTimes===0){const M=c.indexOf(T);c[M]=c[c.length-1],c.pop(),T.destroy()}}function w(T){l.remove(T)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:I,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:L}}function Ey(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Sy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Mf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,p,g,v,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),t++,f}function a(h,d,p,g,v,m){const f=o(h,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,g,v,m){const f=o(h,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function u(h,d){e.length>1&&e.sort(h||Sy),i.length>1&&i.sort(d||Mf),s.length>1&&s.sort(d||Mf)}function c(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function My(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new yf,n.set(i,[o])):s>=r.length?(o=new yf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function yy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new jt};break;case"SpotLight":e={position:new z,direction:new z,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function Ty(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let by=0;function Ay(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function wy(n){const t=new yy,e=Ty(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const s=new z,r=new he,o=new he;function a(u){let c=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,A=0,b=0,E=0,I=0,R=0,w=0;u.sort(Ay);for(let T=0,M=u.length;T<M;T++){const P=u[T],Z=P.color,k=P.intensity,et=P.distance,nt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=Z.r*k,h+=Z.g*k,d+=Z.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],k);w++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,B=e.get(P);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=nt,i.directionalShadowMatrix[p]=P.shadow.matrix,A++}i.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(Z).multiplyScalar(k),X.distance=et,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[v]=X;const K=P.shadow;if(P.map&&(i.spotLightMap[I]=P.map,I++,K.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[v]=K.matrix,P.castShadow){const B=e.get(P);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=nt,E++}v++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(Z).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const K=P.shadow,B=e.get(P);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,B.shadowCameraNear=K.camera.near,B.shadowCameraFar=K.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=nt,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==A||L.numPointShadows!==b||L.numSpotShadows!==E||L.numSpotMaps!==I||L.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=A,L.numPointShadows=b,L.numSpotShadows=E,L.numSpotMaps=I,L.numLightProbes=w,i.version=by++)}function l(u,c){let h=0,d=0,p=0,g=0,v=0;const m=c.matrixWorldInverse;for(let f=0,A=u.length;f<A;f++){const b=u[f];if(b.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Tf(n){const t=new wy(n),e=[],i=[];function s(c){u.camera=c,e.length=0,i.length=0}function r(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Cy(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Tf(n),t.set(s,[a])):r>=o.length?(a=new Tf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Ry extends Zr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Py extends Zr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ly=`uniform sampler2D shadow_pass;
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
}`;function Iy(n,t,e){let i=new jp;const s=new Wt,r=new Wt,o=new pe,a=new Ry({depthPacking:lx}),l=new Py,u={},c=e.maxTextureSize,h={[yi]:ze,[ze]:yi,[Xn]:Xn},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Dy,fragmentShader:Ly}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new In;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new nn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ap;let f=this.type;this.render=function(R,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const T=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(Ei),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const k=f!==kn&&this.type===kn,et=f===kn&&this.type!==kn;for(let nt=0,X=R.length;nt<X;nt++){const K=R[nt],B=K.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ht=B.getFrameExtents();if(s.multiply(ht),r.copy(B.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ht.x),s.x=r.x*ht.x,B.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ht.y),s.y=r.y*ht.y,B.mapSize.y=r.y)),B.map===null||k===!0||et===!0){const yt=this.type!==kn?{minFilter:vn,magFilter:vn}:{};B.map!==null&&B.map.dispose(),B.map=new es(s.x,s.y,yt),B.map.texture.name=K.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const _t=B.getViewportCount();for(let yt=0;yt<_t;yt++){const Pt=B.getViewport(yt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),Z.viewport(o),B.updateMatrices(K,yt),i=B.getFrustum(),E(w,L,B.camera,K,this.type)}B.isPointLightShadow!==!0&&this.type===kn&&A(B,L),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,P)};function A(R,w){const L=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new es(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,L,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,L,p,v,null)}function b(R,w,L,T){let M=null;const P=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Z=M.uuid,k=w.uuid;let et=u[Z];et===void 0&&(et={},u[Z]=et);let nt=et[k];nt===void 0&&(nt=M.clone(),et[k]=nt,w.addEventListener("dispose",I)),M=nt}if(M.visible=w.visible,M.wireframe=w.wireframe,T===kn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Z=n.properties.get(M);Z.light=L}return M}function E(R,w,L,T,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===kn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const k=t.update(R),et=R.material;if(Array.isArray(et)){const nt=k.groups;for(let X=0,K=nt.length;X<K;X++){const B=nt[X],ht=et[B.materialIndex];if(ht&&ht.visible){const _t=b(R,ht,T,M);R.onBeforeShadow(n,R,w,L,k,_t,B),n.renderBufferDirect(L,null,k,_t,R,B),R.onAfterShadow(n,R,w,L,k,_t,B)}}}else if(et.visible){const nt=b(R,et,T,M);R.onBeforeShadow(n,R,w,L,k,nt,null),n.renderBufferDirect(L,null,k,nt,R,null),R.onAfterShadow(n,R,w,L,k,nt,null)}}const Z=R.children;for(let k=0,et=Z.length;k<et;k++)E(Z[k],w,L,T,M)}function I(R){R.target.removeEventListener("dispose",I);for(const L in u){const T=u[L],M=R.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const Ny={[tc]:ec,[nc]:rc,[ic]:oc,[$s]:sc,[ec]:tc,[rc]:nc,[oc]:ic,[sc]:$s};function Oy(n,t){function e(){let N=!1;const gt=new pe;let Q=null;const it=new pe(0,0,0,0);return{setMask:function(St){Q!==St&&!N&&(n.colorMask(St,St,St,St),Q=St)},setLocked:function(St){N=St},setClear:function(St,vt,zt,fe,ye){ye===!0&&(St*=fe,vt*=fe,zt*=fe),gt.set(St,vt,zt,fe),it.equals(gt)===!1&&(n.clearColor(St,vt,zt,fe),it.copy(gt))},reset:function(){N=!1,Q=null,it.set(-1,0,0,0)}}}function i(){let N=!1,gt=!1,Q=null,it=null,St=null;return{setReversed:function(vt){if(gt!==vt){const zt=t.get("EXT_clip_control");gt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const fe=St;St=null,this.setClear(fe)}gt=vt},getReversed:function(){return gt},setTest:function(vt){vt?dt(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(vt){Q!==vt&&!N&&(n.depthMask(vt),Q=vt)},setFunc:function(vt){if(gt&&(vt=Ny[vt]),it!==vt){switch(vt){case tc:n.depthFunc(n.NEVER);break;case ec:n.depthFunc(n.ALWAYS);break;case nc:n.depthFunc(n.LESS);break;case $s:n.depthFunc(n.LEQUAL);break;case ic:n.depthFunc(n.EQUAL);break;case sc:n.depthFunc(n.GEQUAL);break;case rc:n.depthFunc(n.GREATER);break;case oc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}it=vt}},setLocked:function(vt){N=vt},setClear:function(vt){St!==vt&&(gt&&(vt=1-vt),n.clearDepth(vt),St=vt)},reset:function(){N=!1,Q=null,it=null,St=null,gt=!1}}}function s(){let N=!1,gt=null,Q=null,it=null,St=null,vt=null,zt=null,fe=null,ye=null;return{setTest:function(ie){N||(ie?dt(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(ie){gt!==ie&&!N&&(n.stencilMask(ie),gt=ie)},setFunc:function(ie,ln,Nn){(Q!==ie||it!==ln||St!==Nn)&&(n.stencilFunc(ie,ln,Nn),Q=ie,it=ln,St=Nn)},setOp:function(ie,ln,Nn){(vt!==ie||zt!==ln||fe!==Nn)&&(n.stencilOp(ie,ln,Nn),vt=ie,zt=ln,fe=Nn)},setLocked:function(ie){N=ie},setClear:function(ie){ye!==ie&&(n.clearStencil(ie),ye=ie)},reset:function(){N=!1,gt=null,Q=null,it=null,St=null,vt=null,zt=null,fe=null,ye=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,u=new WeakMap;let c={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,A=null,b=null,E=null,I=null,R=null,w=new jt(0,0,0),L=0,T=!1,M=null,P=null,Z=null,k=null,et=null;const nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=K>=1):B.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=K>=2);let ht=null,_t={};const yt=n.getParameter(n.SCISSOR_BOX),Pt=n.getParameter(n.VIEWPORT),Yt=new pe().fromArray(yt),tt=new pe().fromArray(Pt);function lt(N,gt,Q,it){const St=new Uint8Array(4),vt=n.createTexture();n.bindTexture(N,vt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let zt=0;zt<Q;zt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,it,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(gt+zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return vt}const Et={};Et[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(n.DEPTH_TEST),o.setFunc($s),J(!1),q(Ah),dt(n.CULL_FACE),x(Ei);function dt(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function bt(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Nt(N,gt){return h[N]!==gt?(n.bindFramebuffer(N,gt),h[N]=gt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ft(N,gt){let Q=p,it=!1;if(N){Q=d.get(gt),Q===void 0&&(Q=[],d.set(gt,Q));const St=N.textures;if(Q.length!==St.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,zt=St.length;vt<zt;vt++)Q[vt]=n.COLOR_ATTACHMENT0+vt;Q.length=St.length,it=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,it=!0);it&&n.drawBuffers(Q)}function Zt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const Xt={[$i]:n.FUNC_ADD,[Nv]:n.FUNC_SUBTRACT,[Ov]:n.FUNC_REVERSE_SUBTRACT};Xt[Uv]=n.MIN,Xt[Fv]=n.MAX;const C={[Bv]:n.ZERO,[Hv]:n.ONE,[zv]:n.SRC_COLOR,[Jl]:n.SRC_ALPHA,[Xv]:n.SRC_ALPHA_SATURATE,[Wv]:n.DST_COLOR,[kv]:n.DST_ALPHA,[Vv]:n.ONE_MINUS_SRC_COLOR,[Ql]:n.ONE_MINUS_SRC_ALPHA,[$v]:n.ONE_MINUS_DST_COLOR,[Gv]:n.ONE_MINUS_DST_ALPHA,[Yv]:n.CONSTANT_COLOR,[qv]:n.ONE_MINUS_CONSTANT_COLOR,[jv]:n.CONSTANT_ALPHA,[Kv]:n.ONE_MINUS_CONSTANT_ALPHA};function x(N,gt,Q,it,St,vt,zt,fe,ye,ie){if(N===Ei){v===!0&&(bt(n.BLEND),v=!1);return}if(v===!1&&(dt(n.BLEND),v=!0),N!==Iv){if(N!==m||ie!==T){if((f!==$i||E!==$i)&&(n.blendEquation(n.FUNC_ADD),f=$i,E=$i),ie)switch(N){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wh:n.blendFunc(n.ONE,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,b=null,I=null,R=null,w.set(0,0,0),L=0,m=N,T=ie}return}St=St||gt,vt=vt||Q,zt=zt||it,(gt!==f||St!==E)&&(n.blendEquationSeparate(Xt[gt],Xt[St]),f=gt,E=St),(Q!==A||it!==b||vt!==I||zt!==R)&&(n.blendFuncSeparate(C[Q],C[it],C[vt],C[zt]),A=Q,b=it,I=vt,R=zt),(fe.equals(w)===!1||ye!==L)&&(n.blendColor(fe.r,fe.g,fe.b,ye),w.copy(fe),L=ye),m=N,T=!1}function Y(N,gt){N.side===Xn?bt(n.CULL_FACE):dt(n.CULL_FACE);let Q=N.side===ze;gt&&(Q=!Q),J(Q),N.blending===Vs&&N.transparent===!1?x(Ei):x(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const it=N.stencilWrite;a.setTest(it),it&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function q(N){N!==Pv?(dt(n.CULL_FACE),N!==P&&(N===Ah?n.cullFace(n.BACK):N===Dv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),P=N}function G(N){N!==Z&&(X&&n.lineWidth(N),Z=N)}function rt(N,gt,Q){N?(dt(n.POLYGON_OFFSET_FILL),(k!==gt||et!==Q)&&(n.polygonOffset(gt,Q),k=gt,et=Q)):bt(n.POLYGON_OFFSET_FILL)}function j(N){N?dt(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function S(N){N===void 0&&(N=n.TEXTURE0+nt-1),ht!==N&&(n.activeTexture(N),ht=N)}function _(N,gt,Q){Q===void 0&&(ht===null?Q=n.TEXTURE0+nt-1:Q=ht);let it=_t[Q];it===void 0&&(it={type:void 0,texture:void 0},_t[Q]=it),(it.type!==N||it.texture!==gt)&&(ht!==Q&&(n.activeTexture(Q),ht=Q),n.bindTexture(N,gt||Et[N]),it.type=N,it.texture=gt)}function D(){const N=_t[ht];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(N){Yt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Yt.copy(N))}function Mt(N){tt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),tt.copy(N))}function Ot(N,gt){let Q=u.get(gt);Q===void 0&&(Q=new WeakMap,u.set(gt,Q));let it=Q.get(N);it===void 0&&(it=n.getUniformBlockIndex(gt,N.name),Q.set(N,it))}function It(N,gt){const it=u.get(gt).get(N);l.get(gt)!==it&&(n.uniformBlockBinding(gt,it,N.__bindingPointIndex),l.set(gt,it))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ht=null,_t={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,A=null,b=null,E=null,I=null,R=null,w=new jt(0,0,0),L=0,T=!1,M=null,P=null,Z=null,k=null,et=null,Yt.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:bt,bindFramebuffer:Nt,drawBuffers:Ft,useProgram:Zt,setBlending:x,setMaterial:Y,setFlipSided:J,setCullFace:q,setLineWidth:G,setPolygonOffset:rt,setScissorTest:j,activeTexture:S,bindTexture:_,unbindTexture:D,compressedTexImage2D:O,compressedTexImage3D:V,texImage2D:pt,texImage3D:Tt,updateUBOMapping:Ot,uniformBlockBinding:It,texStorage2D:Ut,texStorage3D:st,texSubImage2D:H,texSubImage3D:ct,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:Lt,viewport:Mt,reset:ne}}function bf(n,t,e,i){const s=Uy(i);switch(e){case Lp:return n*t;case Np:return n*t;case Op:return n*t*2;case Up:return n*t/s.components*s.byteLength;case Eu:return n*t/s.components*s.byteLength;case Fp:return n*t*2/s.components*s.byteLength;case Su:return n*t*2/s.components*s.byteLength;case Ip:return n*t*3/s.components*s.byteLength;case mn:return n*t*4/s.components*s.byteLength;case Mu:return n*t*4/s.components*s.byteLength;case $o:case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Yo:case qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:case pc:return Math.max(n,16)*Math.max(t,8)/4;case hc:case dc:return Math.max(n,8)*Math.max(t,8)/2;case mc:case _c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case jo:case Lc:case Ic:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bp:case Nc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Oc:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uy(n){switch(n){case Qn:case Rp:return{byteLength:1,components:1};case Wr:case Pp:case jr:return{byteLength:2,components:1};case vu:case xu:return{byteLength:2,components:4};case ts:case gu:case Yn:return{byteLength:4,components:1};case Dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Fy(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Wt,c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):aa("canvas")}function v(S,_,D){let O=1;const V=j(S);if((V.width>D||V.height>D)&&(O=D/Math.max(V.width,V.height)),O<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const H=Math.floor(O*V.width),ct=Math.floor(O*V.height);h===void 0&&(h=g(H,ct));const ot=_?g(H,ct):h;return ot.width=H,ot.height=ct,ot.getContext("2d").drawImage(S,0,0,H,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+H+"x"+ct+")."),ot}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),S;return S}function m(S){return S.generateMipmaps}function f(S){n.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(S,_,D,O,V=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let H=_;if(_===n.RED&&(D===n.FLOAT&&(H=n.R32F),D===n.HALF_FLOAT&&(H=n.R16F),D===n.UNSIGNED_BYTE&&(H=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.R8UI),D===n.UNSIGNED_SHORT&&(H=n.R16UI),D===n.UNSIGNED_INT&&(H=n.R32UI),D===n.BYTE&&(H=n.R8I),D===n.SHORT&&(H=n.R16I),D===n.INT&&(H=n.R32I)),_===n.RG&&(D===n.FLOAT&&(H=n.RG32F),D===n.HALF_FLOAT&&(H=n.RG16F),D===n.UNSIGNED_BYTE&&(H=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RG8UI),D===n.UNSIGNED_SHORT&&(H=n.RG16UI),D===n.UNSIGNED_INT&&(H=n.RG32UI),D===n.BYTE&&(H=n.RG8I),D===n.SHORT&&(H=n.RG16I),D===n.INT&&(H=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGB8UI),D===n.UNSIGNED_SHORT&&(H=n.RGB16UI),D===n.UNSIGNED_INT&&(H=n.RGB32UI),D===n.BYTE&&(H=n.RGB8I),D===n.SHORT&&(H=n.RGB16I),D===n.INT&&(H=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),D===n.UNSIGNED_INT&&(H=n.RGBA32UI),D===n.BYTE&&(H=n.RGBA8I),D===n.SHORT&&(H=n.RGBA16I),D===n.INT&&(H=n.RGBA32I)),_===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),_===n.RGBA){const ct=V?ya:qt.getTransfer(O);D===n.FLOAT&&(H=n.RGBA32F),D===n.HALF_FLOAT&&(H=n.RGBA16F),D===n.UNSIGNED_BYTE&&(H=ct===se?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function E(S,_){let D;return S?_===null||_===ts||_===qs?D=n.DEPTH24_STENCIL8:_===Yn?D=n.DEPTH32F_STENCIL8:_===Wr&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ts||_===qs?D=n.DEPTH_COMPONENT24:_===Yn?D=n.DEPTH_COMPONENT32F:_===Wr&&(D=n.DEPTH_COMPONENT16),D}function I(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==vn&&S.minFilter!==An?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){const _=S.target;_.removeEventListener("dispose",R),L(_),_.isVideoTexture&&c.delete(_)}function w(S){const _=S.target;_.removeEventListener("dispose",w),M(_)}function L(S){const _=i.get(S);if(_.__webglInit===void 0)return;const D=S.source,O=d.get(D);if(O){const V=O[_.__cacheKey];V.usedTimes--,V.usedTimes===0&&T(S),Object.keys(O).length===0&&d.delete(D)}i.remove(S)}function T(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const D=S.source,O=d.get(D);delete O[_.__cacheKey],o.memory.textures--}function M(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let V=0;V<_.__webglFramebuffer[O].length;V++)n.deleteFramebuffer(_.__webglFramebuffer[O][V]);else n.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)n.deleteFramebuffer(_.__webglFramebuffer[O]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=S.textures;for(let O=0,V=D.length;O<V;O++){const H=i.get(D[O]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(D[O])}i.remove(S)}let P=0;function Z(){P=0}function k(){const S=P;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),P+=1,S}function et(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function nt(S,_){const D=i.get(S);if(S.isVideoTexture&&G(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){const O=S.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(D,S,_);return}}e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function X(S,_){const D=i.get(S);if(S.version>0&&D.__version!==S.version){tt(D,S,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function K(S,_){const D=i.get(S);if(S.version>0&&D.__version!==S.version){tt(D,S,_);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function B(S,_){const D=i.get(S);if(S.version>0&&D.__version!==S.version){lt(D,S,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const ht={[cc]:n.REPEAT,[Yi]:n.CLAMP_TO_EDGE,[uc]:n.MIRRORED_REPEAT},_t={[vn]:n.NEAREST,[ox]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[Ka]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},yt={[hx]:n.NEVER,[gx]:n.ALWAYS,[fx]:n.LESS,[Hp]:n.LEQUAL,[dx]:n.EQUAL,[_x]:n.GEQUAL,[px]:n.GREATER,[mx]:n.NOTEQUAL};function Pt(S,_){if(_.type===Yn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===An||_.magFilter===Ka||_.magFilter===co||_.magFilter===qi||_.minFilter===An||_.minFilter===Ka||_.minFilter===co||_.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ht[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ht[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ht[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,_t[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,_t[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===vn||_.minFilter!==co&&_.minFilter!==qi||_.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Yt(S,_){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",R));const O=_.source;let V=d.get(O);V===void 0&&(V={},d.set(O,V));const H=et(_);if(H!==S.__cacheKey){V[H]===void 0&&(V[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),V[H].usedTimes++;const ct=V[S.__cacheKey];ct!==void 0&&(V[S.__cacheKey].usedTimes--,ct.usedTimes===0&&T(_)),S.__cacheKey=H,S.__webglTexture=V[H].texture}return D}function tt(S,_,D){let O=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=n.TEXTURE_3D);const V=Yt(S,_),H=_.source;e.bindTexture(O,S.__webglTexture,n.TEXTURE0+D);const ct=i.get(H);if(H.version!==ct.__version||V===!0){e.activeTexture(n.TEXTURE0+D);const ot=qt.getPrimaries(qt.workingColorSpace),ut=_.colorSpace===vi?null:qt.getPrimaries(_.colorSpace),Ut=_.colorSpace===vi||ot===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let st=v(_.image,!1,s.maxTextureSize);st=rt(_,st);const pt=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type);let Lt=b(_.internalFormat,pt,Tt,_.colorSpace,_.isVideoTexture);Pt(O,_);let Mt;const Ot=_.mipmaps,It=_.isVideoTexture!==!0,ne=ct.__version===void 0||V===!0,N=H.dataReady,gt=I(_,st);if(_.isDepthTexture)Lt=E(_.format===js,_.type),ne&&(It?e.texStorage2D(n.TEXTURE_2D,1,Lt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Lt,st.width,st.height,0,pt,Tt,null));else if(_.isDataTexture)if(Ot.length>0){It&&ne&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,Ot[0].width,Ot[0].height);for(let Q=0,it=Ot.length;Q<it;Q++)Mt=Ot[Q],It?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Mt.width,Mt.height,pt,Tt,Mt.data):e.texImage2D(n.TEXTURE_2D,Q,Lt,Mt.width,Mt.height,0,pt,Tt,Mt.data);_.generateMipmaps=!1}else It?(ne&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,st.width,st.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,pt,Tt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,st.width,st.height,0,pt,Tt,st.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){It&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Lt,Ot[0].width,Ot[0].height,st.depth);for(let Q=0,it=Ot.length;Q<it;Q++)if(Mt=Ot[Q],_.format!==mn)if(pt!==null)if(It){if(N)if(_.layerUpdates.size>0){const St=bf(Mt.width,Mt.height,_.format,_.type);for(const vt of _.layerUpdates){const zt=Mt.data.subarray(vt*St/Mt.data.BYTES_PER_ELEMENT,(vt+1)*St/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,vt,Mt.width,Mt.height,1,pt,zt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Mt.width,Mt.height,st.depth,pt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Lt,Mt.width,Mt.height,st.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Mt.width,Mt.height,st.depth,pt,Tt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Lt,Mt.width,Mt.height,st.depth,0,pt,Tt,Mt.data)}else{It&&ne&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,Ot[0].width,Ot[0].height);for(let Q=0,it=Ot.length;Q<it;Q++)Mt=Ot[Q],_.format!==mn?pt!==null?It?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Mt.width,Mt.height,pt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Lt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Mt.width,Mt.height,pt,Tt,Mt.data):e.texImage2D(n.TEXTURE_2D,Q,Lt,Mt.width,Mt.height,0,pt,Tt,Mt.data)}else if(_.isDataArrayTexture)if(It){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Lt,st.width,st.height,st.depth),N)if(_.layerUpdates.size>0){const Q=bf(st.width,st.height,_.format,_.type);for(const it of _.layerUpdates){const St=st.data.subarray(it*Q/st.data.BYTES_PER_ELEMENT,(it+1)*Q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,it,st.width,st.height,1,pt,Tt,St)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,pt,Tt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,st.width,st.height,st.depth,0,pt,Tt,st.data);else if(_.isData3DTexture)It?(ne&&e.texStorage3D(n.TEXTURE_3D,gt,Lt,st.width,st.height,st.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,pt,Tt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,st.width,st.height,st.depth,0,pt,Tt,st.data);else if(_.isFramebufferTexture){if(ne)if(It)e.texStorage2D(n.TEXTURE_2D,gt,Lt,st.width,st.height);else{let Q=st.width,it=st.height;for(let St=0;St<gt;St++)e.texImage2D(n.TEXTURE_2D,St,Lt,Q,it,0,pt,Tt,null),Q>>=1,it>>=1}}else if(Ot.length>0){if(It&&ne){const Q=j(Ot[0]);e.texStorage2D(n.TEXTURE_2D,gt,Lt,Q.width,Q.height)}for(let Q=0,it=Ot.length;Q<it;Q++)Mt=Ot[Q],It?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,pt,Tt,Mt):e.texImage2D(n.TEXTURE_2D,Q,Lt,pt,Tt,Mt);_.generateMipmaps=!1}else if(It){if(ne){const Q=j(st);e.texStorage2D(n.TEXTURE_2D,gt,Lt,Q.width,Q.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Tt,st)}else e.texImage2D(n.TEXTURE_2D,0,Lt,pt,Tt,st);m(_)&&f(O),ct.__version=H.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function lt(S,_,D){if(_.image.length!==6)return;const O=Yt(S,_),V=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+D);const H=i.get(V);if(V.version!==H.__version||O===!0){e.activeTexture(n.TEXTURE0+D);const ct=qt.getPrimaries(qt.workingColorSpace),ot=_.colorSpace===vi?null:qt.getPrimaries(_.colorSpace),ut=_.colorSpace===vi||ct===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Ut=_.isCompressedTexture||_.image[0].isCompressedTexture,st=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let it=0;it<6;it++)!Ut&&!st?pt[it]=v(_.image[it],!0,s.maxCubemapSize):pt[it]=st?_.image[it].image:_.image[it],pt[it]=rt(_,pt[it]);const Tt=pt[0],Lt=r.convert(_.format,_.colorSpace),Mt=r.convert(_.type),Ot=b(_.internalFormat,Lt,Mt,_.colorSpace),It=_.isVideoTexture!==!0,ne=H.__version===void 0||O===!0,N=V.dataReady;let gt=I(_,Tt);Pt(n.TEXTURE_CUBE_MAP,_);let Q;if(Ut){It&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ot,Tt.width,Tt.height);for(let it=0;it<6;it++){Q=pt[it].mipmaps;for(let St=0;St<Q.length;St++){const vt=Q[St];_.format!==mn?Lt!==null?It?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St,0,0,vt.width,vt.height,Lt,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St,Ot,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St,0,0,vt.width,vt.height,Lt,Mt,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St,Ot,vt.width,vt.height,0,Lt,Mt,vt.data)}}}else{if(Q=_.mipmaps,It&&ne){Q.length>0&&gt++;const it=j(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ot,it.width,it.height)}for(let it=0;it<6;it++)if(st){It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,pt[it].width,pt[it].height,Lt,Mt,pt[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ot,pt[it].width,pt[it].height,0,Lt,Mt,pt[it].data);for(let St=0;St<Q.length;St++){const zt=Q[St].image[it].image;It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St+1,0,0,zt.width,zt.height,Lt,Mt,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St+1,Ot,zt.width,zt.height,0,Lt,Mt,zt.data)}}else{It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Lt,Mt,pt[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ot,Lt,Mt,pt[it]);for(let St=0;St<Q.length;St++){const vt=Q[St];It?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St+1,0,0,Lt,Mt,vt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St+1,Ot,Lt,Mt,vt.image[it])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),H.__version=V.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Et(S,_,D,O,V,H){const ct=r.convert(D.format,D.colorSpace),ot=r.convert(D.type),ut=b(D.internalFormat,ct,ot,D.colorSpace),Ut=i.get(_),st=i.get(D);if(st.__renderTarget=_,!Ut.__hasExternalTextures){const pt=Math.max(1,_.width>>H),Tt=Math.max(1,_.height>>H);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?e.texImage3D(V,H,ut,pt,Tt,_.depth,0,ct,ot,null):e.texImage2D(V,H,ut,pt,Tt,0,ct,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),q(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,V,st.__webglTexture,0,J(_)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,V,st.__webglTexture,H),e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(S,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const O=_.depthTexture,V=O&&O.isDepthTexture?O.type:null,H=E(_.stencilBuffer,V),ct=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=J(_);q(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,H,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,H,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,H,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,S)}else{const O=_.textures;for(let V=0;V<O.length;V++){const H=O[V],ct=r.convert(H.format,H.colorSpace),ot=r.convert(H.type),ut=b(H.internalFormat,ct,ot,H.colorSpace),Ut=J(_);D&&q(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,ut,_.width,_.height):q(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut,ut,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ut,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(_.depthTexture);O.__renderTarget=_,(!O.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),nt(_.depthTexture,0);const V=O.__webglTexture,H=J(_);if(_.depthTexture.format===ks)q(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(_.depthTexture.format===js)q(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Nt(S){const _=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const O=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){const V=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",V)};O.addEventListener("dispose",V),_.__depthDisposeCallback=V}_.__boundDepthTexture=O}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");bt(_.__webglFramebuffer,S)}else if(D){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=n.createRenderbuffer(),dt(_.__webglDepthbuffer[O],S,!1);else{const V=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,H)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),dt(_.__webglDepthbuffer,S,!1);else{const O=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,V)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(S,_,D){const O=i.get(S);_!==void 0&&Et(O.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Nt(S)}function Zt(S){const _=S.texture,D=i.get(S),O=i.get(_);S.addEventListener("dispose",w);const V=S.textures,H=S.isWebGLCubeRenderTarget===!0,ct=V.length>1;if(ct||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=_.version,o.memory.textures++),H){D.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[ot]=[];for(let ut=0;ut<_.mipmaps.length;ut++)D.__webglFramebuffer[ot][ut]=n.createFramebuffer()}else D.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)D.__webglFramebuffer[ot]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ct)for(let ot=0,ut=V.length;ot<ut;ot++){const Ut=i.get(V[ot]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&q(S)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ot=0;ot<V.length;ot++){const ut=V[ot];D.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ot]);const Ut=r.convert(ut.format,ut.colorSpace),st=r.convert(ut.type),pt=b(ut.internalFormat,Ut,st,ut.colorSpace,S.isXRRenderTarget===!0),Tt=J(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,pt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,D.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(D.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)Et(D.__webglFramebuffer[ot][ut],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else Et(D.__webglFramebuffer[ot],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let ot=0,ut=V.length;ot<ut;ot++){const Ut=V[ot],st=i.get(Ut);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),Pt(n.TEXTURE_2D,Ut),Et(D.__webglFramebuffer,S,Ut,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m(Ut)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ot=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,O.__webglTexture),Pt(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)Et(D.__webglFramebuffer[ut],S,_,n.COLOR_ATTACHMENT0,ot,ut);else Et(D.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,ot,0);m(_)&&f(ot),e.unbindTexture()}S.depthBuffer&&Nt(S)}function Xt(S){const _=S.textures;for(let D=0,O=_.length;D<O;D++){const V=_[D];if(m(V)){const H=A(S),ct=i.get(V).__webglTexture;e.bindTexture(H,ct),f(H),e.unbindTexture()}}}const C=[],x=[];function Y(S){if(S.samples>0){if(q(S)===!1){const _=S.textures,D=S.width,O=S.height;let V=n.COLOR_BUFFER_BIT;const H=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(S),ot=_.length>1;if(ot)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Ut=i.get(_[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ut,0)}n.blitFramebuffer(0,0,D,O,0,0,D,O,V,n.NEAREST),l===!0&&(C.length=0,x.length=0,C.push(n.COLOR_ATTACHMENT0+ut),S.depthBuffer&&S.resolveDepthBuffer===!1&&(C.push(H),x.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Ut=i.get(_[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,Ut,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function J(S){return Math.min(s.maxSamples,S.samples)}function q(S){const _=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function G(S){const _=o.render.frame;c.get(S)!==_&&(c.set(S,_),S.update())}function rt(S,_){const D=S.colorSpace,O=S.format,V=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==sr&&D!==vi&&(qt.getTransfer(D)===se?(O!==mn||V!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function j(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(u.width=S.naturalWidth||S.width,u.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(u.width=S.displayWidth,u.height=S.displayHeight):(u.width=S.width,u.height=S.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=Z,this.setTexture2D=nt,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=B,this.rebindTextures=Ft,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=q}function By(n,t){function e(i,s=vi){let r;const o=qt.getTransfer(s);if(i===Qn)return n.UNSIGNED_BYTE;if(i===vu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rp)return n.BYTE;if(i===Pp)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===gu)return n.INT;if(i===ts)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===jr)return n.HALF_FLOAT;if(i===Lp)return n.ALPHA;if(i===Ip)return n.RGB;if(i===mn)return n.RGBA;if(i===Np)return n.LUMINANCE;if(i===Op)return n.LUMINANCE_ALPHA;if(i===ks)return n.DEPTH_COMPONENT;if(i===js)return n.DEPTH_STENCIL;if(i===Up)return n.RED;if(i===Eu)return n.RED_INTEGER;if(i===Fp)return n.RG;if(i===Su)return n.RG_INTEGER;if(i===Mu)return n.RGBA_INTEGER;if(i===$o||i===Xo||i===Yo||i===qo)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hc||i===fc||i===dc||i===pc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mc||i===_c||i===gc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mc||i===_c)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vc||i===xc||i===Ec||i===Sc||i===Mc||i===yc||i===Tc||i===bc||i===Ac||i===wc||i===Cc||i===Rc||i===Pc||i===Dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ec)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ac)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo||i===Lc||i===Ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===jo)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bp||i===Nc||i===Oc||i===Uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Hy extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Do extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zy={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),f=this._getHandJoint(u,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Do;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ky=`
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

}`;class Gy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ti({vertexShader:Vy,fragmentShader:ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nn(new Aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wy extends os{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,g=null;const v=new Gy,m=e.getContextAttributes();let f=null,A=null;const b=[],E=[],I=new Wt;let R=null;const w=new en;w.viewport=new pe;const L=new en;L.viewport=new pe;const T=[w,L],M=new Hy;let P=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=b[tt];return lt===void 0&&(lt=new yl,b[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=b[tt];return lt===void 0&&(lt=new yl,b[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=b[tt];return lt===void 0&&(lt=new yl,b[tt]=lt),lt.getHandSpace()};function k(tt){const lt=E.indexOf(tt.inputSource);if(lt===-1)return;const Et=b[lt];Et!==void 0&&(Et.update(tt.inputSource,tt.frame,u||o),Et.dispatchEvent({type:tt.type,data:tt.inputSource}))}function et(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",nt);for(let tt=0;tt<b.length;tt++){const lt=E[tt];lt!==null&&(E[tt]=null,b[tt].disconnect(lt))}P=null,Z=null,v.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,A=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(tt){u=tt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",et),s.addEventListener("inputsourceschange",nt),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new es(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,Et=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?js:ks,Et=m.stencil?qs:ts);const bt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new es(d.textureWidth,d.textureHeight,{format:mn,type:Qn,depthTexture:new Zp(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function nt(tt){for(let lt=0;lt<tt.removed.length;lt++){const Et=tt.removed[lt],dt=E.indexOf(Et);dt>=0&&(E[dt]=null,b[dt].disconnect(Et))}for(let lt=0;lt<tt.added.length;lt++){const Et=tt.added[lt];let dt=E.indexOf(Et);if(dt===-1){for(let Nt=0;Nt<b.length;Nt++)if(Nt>=E.length){E.push(Et),dt=Nt;break}else if(E[Nt]===null){E[Nt]=Et,dt=Nt;break}if(dt===-1)break}const bt=b[dt];bt&&bt.connect(Et)}}const X=new z,K=new z;function B(tt,lt,Et){X.setFromMatrixPosition(lt.matrixWorld),K.setFromMatrixPosition(Et.matrixWorld);const dt=X.distanceTo(K),bt=lt.projectionMatrix.elements,Nt=Et.projectionMatrix.elements,Ft=bt[14]/(bt[10]-1),Zt=bt[14]/(bt[10]+1),Xt=(bt[9]+1)/bt[5],C=(bt[9]-1)/bt[5],x=(bt[8]-1)/bt[0],Y=(Nt[8]+1)/Nt[0],J=Ft*x,q=Ft*Y,G=dt/(-x+Y),rt=G*-x;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(rt),tt.translateZ(G),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),bt[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const j=Ft+G,S=Zt+G,_=J-rt,D=q+(dt-rt),O=Xt*Zt/S*j,V=C*Zt/S*j;tt.projectionMatrix.makePerspective(_,D,O,V,j,S),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ht(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let lt=tt.near,Et=tt.far;v.texture!==null&&(v.depthNear>0&&(lt=v.depthNear),v.depthFar>0&&(Et=v.depthFar)),M.near=L.near=w.near=lt,M.far=L.far=w.far=Et,(P!==M.near||Z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,Z=M.far),w.layers.mask=tt.layers.mask|2,L.layers.mask=tt.layers.mask|4,M.layers.mask=w.layers.mask|L.layers.mask;const dt=tt.parent,bt=M.cameras;ht(M,dt);for(let Nt=0;Nt<bt.length;Nt++)ht(bt[Nt],dt);bt.length===2?B(M,w,L):M.projectionMatrix.copy(w.projectionMatrix),_t(tt,M,dt)};function _t(tt,lt,Et){Et===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(Et.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=$r*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let yt=null;function Pt(tt,lt){if(c=lt.getViewerPose(u||o),g=lt,c!==null){const Et=c.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let dt=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,dt=!0);for(let Nt=0;Nt<Et.length;Nt++){const Ft=Et[Nt];let Zt=null;if(p!==null)Zt=p.getViewport(Ft);else{const C=h.getViewSubImage(d,Ft);Zt=C.viewport,Nt===0&&(t.setRenderTargetTextures(A,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(A))}let Xt=T[Nt];Xt===void 0&&(Xt=new en,Xt.layers.enable(Nt),Xt.viewport=new pe,T[Nt]=Xt),Xt.matrix.fromArray(Ft.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Ft.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Nt===0&&(M.matrix.copy(Xt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),dt===!0&&M.cameras.push(Xt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Nt=h.getDepthInformation(Et[0]);Nt&&Nt.isValid&&Nt.texture&&v.init(t,Nt,s.renderState)}}for(let Et=0;Et<b.length;Et++){const dt=E[Et],bt=b[Et];dt!==null&&bt!==void 0&&bt.update(dt,lt,u||o)}yt&&yt(tt,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),g=null}const Yt=new Kp;Yt.setAnimationLoop(Pt),this.setAnimationLoop=function(tt){yt=tt},this.dispose=function(){}}}const ki=new ti,$y=new he;function Xy(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Xp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,b,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),c(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,A,b):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=t.get(f),b=A.envMap,E=A.envMapRotation;b&&(m.envMap.value=b,ki.copy(E),ki.x*=-1,ki.y*=-1,ki.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(ki)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,A,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const A=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Yy(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const E=b.program;i.uniformBlockBinding(A,E)}function u(A,b){let E=s[A.id];E===void 0&&(g(A),E=c(A),s[A.id]=E,A.addEventListener("dispose",m));const I=b.program;i.updateUBOMapping(A,I);const R=t.render.frame;r[A.id]!==R&&(d(A),r[A.id]=R)}function c(A){const b=h();A.__bindingPointIndex=b;const E=n.createBuffer(),I=A.__size,R=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const b=s[A.id],E=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,w=E.length;R<w;R++){const L=Array.isArray(E[R])?E[R]:[E[R]];for(let T=0,M=L.length;T<M;T++){const P=L[T];if(p(P,R,T,I)===!0){const Z=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let et=0;for(let nt=0;nt<k.length;nt++){const X=k[nt],K=v(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,Z+et,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,et),et+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,b,E,I){const R=A.value,w=b+"_"+E;if(I[w]===void 0)return typeof R=="number"||typeof R=="boolean"?I[w]=R:I[w]=R.clone(),!0;{const L=I[w];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return I[w]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(A){const b=A.uniforms;let E=0;const I=16;for(let w=0,L=b.length;w<L;w++){const T=Array.isArray(b[w])?b[w]:[b[w]];for(let M=0,P=T.length;M<P;M++){const Z=T[M],k=Array.isArray(Z.value)?Z.value:[Z.value];for(let et=0,nt=k.length;et<nt;et++){const X=k[et],K=v(X),B=E%I,ht=B%K.boundary,_t=B+ht;E+=ht,_t!==0&&I-_t<K.storage&&(E+=I-_t),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=K.storage}}}const R=E%I;return R>0&&(E+=I-R),A.__size=E,A.__cache={},this}function v(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:u,dispose:f}}class qy{constructor(t={}){const{canvas:e=Ox(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const A=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Si,this.toneMappingExposure=1;const E=this;let I=!1,R=0,w=0,L=null,T=-1,M=null;const P=new pe,Z=new pe;let k=null;const et=new jt(0);let nt=0,X=e.width,K=e.height,B=1,ht=null,_t=null;const yt=new pe(0,0,X,K),Pt=new pe(0,0,X,K);let Yt=!1;const tt=new jp;let lt=!1,Et=!1;const dt=new he,bt=new he,Nt=new z,Ft=new pe,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function C(){return L===null?B:1}let x=i;function Y(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_u}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",vt,!1),x===null){const U="webgl2";if(x=Y(U,y),x===null)throw Y(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let J,q,G,rt,j,S,_,D,O,V,H,ct,ot,ut,Ut,st,pt,Tt,Lt,Mt,Ot,It,ne,N;function gt(){J=new QS(x),J.init(),It=new By(x,J),q=new XS(x,J,t,It),G=new Oy(x,J),q.reverseDepthBuffer&&d&&G.buffers.depth.setReversed(!0),rt=new nM(x),j=new Ey,S=new Fy(x,J,G,j,q,It,rt),_=new qS(E),D=new JS(E),O=new lE(x),ne=new WS(x,O),V=new tM(x,O,rt,ne),H=new sM(x,V,O,rt),Lt=new iM(x,q,S),st=new YS(j),ct=new xy(E,_,D,J,q,ne,st),ot=new Xy(E,j),ut=new My,Ut=new Cy(J),Tt=new GS(E,_,D,G,H,p,l),pt=new Iy(E,H,q),N=new Yy(x,rt,q,G),Mt=new $S(x,J,rt),Ot=new eM(x,J,rt),rt.programs=ct.programs,E.capabilities=q,E.extensions=J,E.properties=j,E.renderLists=ut,E.shadowMap=pt,E.state=G,E.info=rt}gt();const Q=new Wy(E,x);this.xr=Q,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const y=J.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=J.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(y){y!==void 0&&(B=y,this.setSize(X,K,!1))},this.getSize=function(y){return y.set(X,K)},this.setSize=function(y,U,W=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,K=U,e.width=Math.floor(y*B),e.height=Math.floor(U*B),W===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(X*B,K*B).floor()},this.setDrawingBufferSize=function(y,U,W){X=y,K=U,B=W,e.width=Math.floor(y*W),e.height=Math.floor(U*W),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(yt)},this.setViewport=function(y,U,W,$){y.isVector4?yt.set(y.x,y.y,y.z,y.w):yt.set(y,U,W,$),G.viewport(P.copy(yt).multiplyScalar(B).round())},this.getScissor=function(y){return y.copy(Pt)},this.setScissor=function(y,U,W,$){y.isVector4?Pt.set(y.x,y.y,y.z,y.w):Pt.set(y,U,W,$),G.scissor(Z.copy(Pt).multiplyScalar(B).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(y){G.setScissorTest(Yt=y)},this.setOpaqueSort=function(y){ht=y},this.setTransparentSort=function(y){_t=y},this.getClearColor=function(y){return y.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(y=!0,U=!0,W=!0){let $=0;if(y){let F=!1;if(L!==null){const ft=L.texture.format;F=ft===Mu||ft===Su||ft===Eu}if(F){const ft=L.texture.type,xt=ft===Qn||ft===ts||ft===Wr||ft===qs||ft===vu||ft===xu,At=Tt.getClearColor(),wt=Tt.getClearAlpha(),Bt=At.r,Vt=At.g,Ct=At.b;xt?(g[0]=Bt,g[1]=Vt,g[2]=Ct,g[3]=wt,x.clearBufferuiv(x.COLOR,0,g)):(v[0]=Bt,v[1]=Vt,v[2]=Ct,v[3]=wt,x.clearBufferiv(x.COLOR,0,v))}else $|=x.COLOR_BUFFER_BIT}U&&($|=x.DEPTH_BUFFER_BIT),W&&($|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),ut.dispose(),Ut.dispose(),j.dispose(),_.dispose(),D.dispose(),H.dispose(),ne.dispose(),N.dispose(),ct.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",$u),Q.removeEventListener("sessionend",Xu),Ni.stop()};function it(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const y=rt.autoReset,U=pt.enabled,W=pt.autoUpdate,$=pt.needsUpdate,F=pt.type;gt(),rt.autoReset=y,pt.enabled=U,pt.autoUpdate=W,pt.needsUpdate=$,pt.type=F}function vt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function zt(y){const U=y.target;U.removeEventListener("dispose",zt),fe(U)}function fe(y){ye(y),j.remove(y)}function ye(y){const U=j.get(y).programs;U!==void 0&&(U.forEach(function(W){ct.releaseProgram(W)}),y.isShaderMaterial&&ct.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,W,$,F,ft){U===null&&(U=Zt);const xt=F.isMesh&&F.matrixWorld.determinant()<0,At=r_(y,U,W,$,F);G.setMaterial($,xt);let wt=W.index,Bt=1;if($.wireframe===!0){if(wt=V.getWireframeAttribute(W),wt===void 0)return;Bt=2}const Vt=W.drawRange,Ct=W.attributes.position;let Kt=Vt.start*Bt,oe=(Vt.start+Vt.count)*Bt;ft!==null&&(Kt=Math.max(Kt,ft.start*Bt),oe=Math.min(oe,(ft.start+ft.count)*Bt)),wt!==null?(Kt=Math.max(Kt,0),oe=Math.min(oe,wt.count)):Ct!=null&&(Kt=Math.max(Kt,0),oe=Math.min(oe,Ct.count));const ce=oe-Kt;if(ce<0||ce===1/0)return;ne.setup(F,$,At,W,wt);let Fe,Jt=Mt;if(wt!==null&&(Fe=O.get(wt),Jt=Ot,Jt.setIndex(Fe)),F.isMesh)$.wireframe===!0?(G.setLineWidth($.wireframeLinewidth*C()),Jt.setMode(x.LINES)):Jt.setMode(x.TRIANGLES);else if(F.isLine){let Rt=$.linewidth;Rt===void 0&&(Rt=1),G.setLineWidth(Rt*C()),F.isLineSegments?Jt.setMode(x.LINES):F.isLineLoop?Jt.setMode(x.LINE_LOOP):Jt.setMode(x.LINE_STRIP)}else F.isPoints?Jt.setMode(x.POINTS):F.isSprite&&Jt.setMode(x.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Rt=F._multiDrawStarts,On=F._multiDrawCounts,Qt=F._multiDrawCount,cn=wt?O.get(wt).bytesPerElement:1,cs=j.get($).currentProgram.getUniforms();for(let Ge=0;Ge<Qt;Ge++)cs.setValue(x,"_gl_DrawID",Ge),Jt.render(Rt[Ge]/cn,On[Ge])}else if(F.isInstancedMesh)Jt.renderInstances(Kt,ce,F.count);else if(W.isInstancedBufferGeometry){const Rt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,On=Math.min(W.instanceCount,Rt);Jt.renderInstances(Kt,ce,On)}else Jt.render(Kt,ce)};function ie(y,U,W){y.transparent===!0&&y.side===Xn&&y.forceSinglePass===!1?(y.side=ze,y.needsUpdate=!0,ro(y,U,W),y.side=yi,y.needsUpdate=!0,ro(y,U,W),y.side=Xn):ro(y,U,W)}this.compile=function(y,U,W=null){W===null&&(W=y),f=Ut.get(W),f.init(U),b.push(f),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),y!==W&&y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const $=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ft=F.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){const At=ft[xt];ie(At,W,F),$.add(At)}else ie(ft,W,F),$.add(ft)}),b.pop(),f=null,$},this.compileAsync=function(y,U,W=null){const $=this.compile(y,U,W);return new Promise(F=>{function ft(){if($.forEach(function(xt){j.get(xt).currentProgram.isReady()&&$.delete(xt)}),$.size===0){F(y);return}setTimeout(ft,10)}J.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let ln=null;function Nn(y){ln&&ln(y)}function $u(){Ni.stop()}function Xu(){Ni.start()}const Ni=new Kp;Ni.setAnimationLoop(Nn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(y){ln=y,Q.setAnimationLoop(y),y===null?Ni.stop():Ni.start()},Q.addEventListener("sessionstart",$u),Q.addEventListener("sessionend",Xu),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(U),U=Q.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,U,L),f=Ut.get(y,b.length),f.init(U),b.push(f),bt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(bt),Et=this.localClippingEnabled,lt=st.init(this.clippingPlanes,Et),m=ut.get(y,A.length),m.init(),A.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ft=E.xr.getDepthSensingMesh();ft!==null&&Ua(ft,U,-1/0,E.sortObjects)}Ua(y,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ht,_t),Xt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Xt&&Tt.addToRenderList(m,y),this.info.render.frame++,lt===!0&&st.beginShadows();const W=f.state.shadowsArray;pt.render(W,y,U),lt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const ft=U.cameras;if(F.length>0)for(let xt=0,At=ft.length;xt<At;xt++){const wt=ft[xt];qu($,F,y,wt)}Xt&&Tt.render(y);for(let xt=0,At=ft.length;xt<At;xt++){const wt=ft[xt];Yu(m,y,wt,wt.viewport)}}else F.length>0&&qu($,F,y,U),Xt&&Tt.render(y),Yu(m,y,U);L!==null&&(S.updateMultisampleRenderTarget(L),S.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(E,y,U),ne.resetDefaultState(),T=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],lt===!0&&st.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ua(y,U,W,$){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||tt.intersectsSprite(y)){$&&Ft.setFromMatrixPosition(y.matrixWorld).applyMatrix4(bt);const xt=H.update(y),At=y.material;At.visible&&m.push(y,xt,At,W,Ft.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||tt.intersectsObject(y))){const xt=H.update(y),At=y.material;if($&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ft.copy(y.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ft.copy(xt.boundingSphere.center)),Ft.applyMatrix4(y.matrixWorld).applyMatrix4(bt)),Array.isArray(At)){const wt=xt.groups;for(let Bt=0,Vt=wt.length;Bt<Vt;Bt++){const Ct=wt[Bt],Kt=At[Ct.materialIndex];Kt&&Kt.visible&&m.push(y,xt,Kt,W,Ft.z,Ct)}}else At.visible&&m.push(y,xt,At,W,Ft.z,null)}}const ft=y.children;for(let xt=0,At=ft.length;xt<At;xt++)Ua(ft[xt],U,W,$)}function Yu(y,U,W,$){const F=y.opaque,ft=y.transmissive,xt=y.transparent;f.setupLightsView(W),lt===!0&&st.setGlobalState(E.clippingPlanes,W),$&&G.viewport(P.copy($)),F.length>0&&so(F,U,W),ft.length>0&&so(ft,U,W),xt.length>0&&so(xt,U,W),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function qu(y,U,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new es(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?jr:Qn,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const ft=f.state.transmissionRenderTarget[$.id],xt=$.viewport||P;ft.setSize(xt.z,xt.w);const At=E.getRenderTarget();E.setRenderTarget(ft),E.getClearColor(et),nt=E.getClearAlpha(),nt<1&&E.setClearColor(16777215,.5),E.clear(),Xt&&Tt.render(W);const wt=E.toneMapping;E.toneMapping=Si;const Bt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),lt===!0&&st.setGlobalState(E.clippingPlanes,$),so(y,W,$),S.updateMultisampleRenderTarget(ft),S.updateRenderTargetMipmap(ft),J.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ct=0,Kt=U.length;Ct<Kt;Ct++){const oe=U[Ct],ce=oe.object,Fe=oe.geometry,Jt=oe.material,Rt=oe.group;if(Jt.side===Xn&&ce.layers.test($.layers)){const On=Jt.side;Jt.side=ze,Jt.needsUpdate=!0,ju(ce,W,$,Fe,Jt,Rt),Jt.side=On,Jt.needsUpdate=!0,Vt=!0}}Vt===!0&&(S.updateMultisampleRenderTarget(ft),S.updateRenderTargetMipmap(ft))}E.setRenderTarget(At),E.setClearColor(et,nt),Bt!==void 0&&($.viewport=Bt),E.toneMapping=wt}function so(y,U,W){const $=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ft=y.length;F<ft;F++){const xt=y[F],At=xt.object,wt=xt.geometry,Bt=$===null?xt.material:$,Vt=xt.group;At.layers.test(W.layers)&&ju(At,U,W,wt,Bt,Vt)}}function ju(y,U,W,$,F,ft){y.onBeforeRender(E,U,W,$,F,ft),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(E,U,W,$,y,ft),F.transparent===!0&&F.side===Xn&&F.forceSinglePass===!1?(F.side=ze,F.needsUpdate=!0,E.renderBufferDirect(W,U,$,F,y,ft),F.side=yi,F.needsUpdate=!0,E.renderBufferDirect(W,U,$,F,y,ft),F.side=Xn):E.renderBufferDirect(W,U,$,F,y,ft),y.onAfterRender(E,U,W,$,F,ft)}function ro(y,U,W){U.isScene!==!0&&(U=Zt);const $=j.get(y),F=f.state.lights,ft=f.state.shadowsArray,xt=F.state.version,At=ct.getParameters(y,F.state,ft,U,W),wt=ct.getProgramCacheKey(At);let Bt=$.programs;$.environment=y.isMeshStandardMaterial?U.environment:null,$.fog=U.fog,$.envMap=(y.isMeshStandardMaterial?D:_).get(y.envMap||$.environment),$.envMapRotation=$.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Bt===void 0&&(y.addEventListener("dispose",zt),Bt=new Map,$.programs=Bt);let Vt=Bt.get(wt);if(Vt!==void 0){if($.currentProgram===Vt&&$.lightsStateVersion===xt)return Zu(y,At),Vt}else At.uniforms=ct.getUniforms(y),y.onBeforeCompile(At,E),Vt=ct.acquireProgram(At,wt),Bt.set(wt,Vt),$.uniforms=At.uniforms;const Ct=$.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ct.clippingPlanes=st.uniform),Zu(y,At),$.needsLights=a_(y),$.lightsStateVersion=xt,$.needsLights&&(Ct.ambientLightColor.value=F.state.ambient,Ct.lightProbe.value=F.state.probe,Ct.directionalLights.value=F.state.directional,Ct.directionalLightShadows.value=F.state.directionalShadow,Ct.spotLights.value=F.state.spot,Ct.spotLightShadows.value=F.state.spotShadow,Ct.rectAreaLights.value=F.state.rectArea,Ct.ltc_1.value=F.state.rectAreaLTC1,Ct.ltc_2.value=F.state.rectAreaLTC2,Ct.pointLights.value=F.state.point,Ct.pointLightShadows.value=F.state.pointShadow,Ct.hemisphereLights.value=F.state.hemi,Ct.directionalShadowMap.value=F.state.directionalShadowMap,Ct.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ct.spotShadowMap.value=F.state.spotShadowMap,Ct.spotLightMatrix.value=F.state.spotLightMatrix,Ct.spotLightMap.value=F.state.spotLightMap,Ct.pointShadowMap.value=F.state.pointShadowMap,Ct.pointShadowMatrix.value=F.state.pointShadowMatrix),$.currentProgram=Vt,$.uniformsList=null,Vt}function Ku(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Ko.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Zu(y,U){const W=j.get(y);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function r_(y,U,W,$,F){U.isScene!==!0&&(U=Zt),S.resetTextureUnits();const ft=U.fog,xt=$.isMeshStandardMaterial?U.environment:null,At=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:sr,wt=($.isMeshStandardMaterial?D:_).get($.envMap||xt),Bt=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ct=!!W.morphAttributes.position,Kt=!!W.morphAttributes.normal,oe=!!W.morphAttributes.color;let ce=Si;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ce=E.toneMapping);const Fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Jt=Fe!==void 0?Fe.length:0,Rt=j.get($),On=f.state.lights;if(lt===!0&&(Et===!0||y!==M)){const Je=y===M&&$.id===T;st.setState($,y,Je)}let Qt=!1;$.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==On.state.version||Rt.outputColorSpace!==At||F.isBatchedMesh&&Rt.batching===!1||!F.isBatchedMesh&&Rt.batching===!0||F.isBatchedMesh&&Rt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Rt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Rt.instancing===!1||!F.isInstancedMesh&&Rt.instancing===!0||F.isSkinnedMesh&&Rt.skinning===!1||!F.isSkinnedMesh&&Rt.skinning===!0||F.isInstancedMesh&&Rt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Rt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Rt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Rt.instancingMorph===!1&&F.morphTexture!==null||Rt.envMap!==wt||$.fog===!0&&Rt.fog!==ft||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==st.numPlanes||Rt.numIntersection!==st.numIntersection)||Rt.vertexAlphas!==Bt||Rt.vertexTangents!==Vt||Rt.morphTargets!==Ct||Rt.morphNormals!==Kt||Rt.morphColors!==oe||Rt.toneMapping!==ce||Rt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Rt.__version=$.version);let cn=Rt.currentProgram;Qt===!0&&(cn=ro($,U,F));let cs=!1,Ge=!1,hr=!1;const ue=cn.getUniforms(),En=Rt.uniforms;if(G.useProgram(cn.program)&&(cs=!0,Ge=!0,hr=!0),$.id!==T&&(T=$.id,Ge=!0),cs||M!==y){G.buffers.depth.getReversed()?(dt.copy(y.projectionMatrix),Fx(dt),Bx(dt),ue.setValue(x,"projectionMatrix",dt)):ue.setValue(x,"projectionMatrix",y.projectionMatrix),ue.setValue(x,"viewMatrix",y.matrixWorldInverse);const si=ue.map.cameraPosition;si!==void 0&&si.setValue(x,Nt.setFromMatrixPosition(y.matrixWorld)),q.logarithmicDepthBuffer&&ue.setValue(x,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ue.setValue(x,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ge=!0,hr=!0)}if(F.isSkinnedMesh){ue.setOptional(x,F,"bindMatrix"),ue.setOptional(x,F,"bindMatrixInverse");const Je=F.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ue.setValue(x,"boneTexture",Je.boneTexture,S))}F.isBatchedMesh&&(ue.setOptional(x,F,"batchingTexture"),ue.setValue(x,"batchingTexture",F._matricesTexture,S),ue.setOptional(x,F,"batchingIdTexture"),ue.setValue(x,"batchingIdTexture",F._indirectTexture,S),ue.setOptional(x,F,"batchingColorTexture"),F._colorsTexture!==null&&ue.setValue(x,"batchingColorTexture",F._colorsTexture,S));const fr=W.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&Lt.update(F,W,cn),(Ge||Rt.receiveShadow!==F.receiveShadow)&&(Rt.receiveShadow=F.receiveShadow,ue.setValue(x,"receiveShadow",F.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(En.envMap.value=wt,En.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&U.environment!==null&&(En.envMapIntensity.value=U.environmentIntensity),Ge&&(ue.setValue(x,"toneMappingExposure",E.toneMappingExposure),Rt.needsLights&&o_(En,hr),ft&&$.fog===!0&&ot.refreshFogUniforms(En,ft),ot.refreshMaterialUniforms(En,$,B,K,f.state.transmissionRenderTarget[y.id]),Ko.upload(x,Ku(Rt),En,S)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ko.upload(x,Ku(Rt),En,S),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ue.setValue(x,"center",F.center),ue.setValue(x,"modelViewMatrix",F.modelViewMatrix),ue.setValue(x,"normalMatrix",F.normalMatrix),ue.setValue(x,"modelMatrix",F.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Je=$.uniformsGroups;for(let si=0,ri=Je.length;si<ri;si++){const Ju=Je[si];N.update(Ju,cn),N.bind(Ju,cn)}}return cn}function o_(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function a_(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,U,W){j.get(y.texture).__webglTexture=U,j.get(y.depthTexture).__webglTexture=W;const $=j.get(y);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const W=j.get(y);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,W=0){L=y,R=U,w=W;let $=!0,F=null,ft=!1,xt=!1;if(y){const wt=j.get(y);if(wt.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(x.FRAMEBUFFER,null),$=!1;else if(wt.__webglFramebuffer===void 0)S.setupRenderTarget(y);else if(wt.__hasExternalTextures)S.rebindTextures(y,j.get(y.texture).__webglTexture,j.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ct=y.depthTexture;if(wt.__boundDepthTexture!==Ct){if(Ct!==null&&j.has(Ct)&&(y.width!==Ct.image.width||y.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(y)}}const Bt=y.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);const Vt=j.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?F=Vt[U][W]:F=Vt[U],ft=!0):y.samples>0&&S.useMultisampledRTT(y)===!1?F=j.get(y).__webglMultisampledFramebuffer:Array.isArray(Vt)?F=Vt[W]:F=Vt,P.copy(y.viewport),Z.copy(y.scissor),k=y.scissorTest}else P.copy(yt).multiplyScalar(B).floor(),Z.copy(Pt).multiplyScalar(B).floor(),k=Yt;if(G.bindFramebuffer(x.FRAMEBUFFER,F)&&$&&G.drawBuffers(y,F),G.viewport(P),G.scissor(Z),G.setScissorTest(k),ft){const wt=j.get(y.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,W)}else if(xt){const wt=j.get(y.texture),Bt=U||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,wt.__webglTexture,W||0,Bt)}T=-1},this.readRenderTargetPixels=function(y,U,W,$,F,ft,xt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=j.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){G.bindFramebuffer(x.FRAMEBUFFER,At);try{const wt=y.texture,Bt=wt.format,Vt=wt.type;if(!q.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-$&&W>=0&&W<=y.height-F&&x.readPixels(U,W,$,F,It.convert(Bt),It.convert(Vt),ft)}finally{const wt=L!==null?j.get(L).__webglFramebuffer:null;G.bindFramebuffer(x.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,U,W,$,F,ft,xt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=j.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){const wt=y.texture,Bt=wt.format,Vt=wt.type;if(!q.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-$&&W>=0&&W<=y.height-F){G.bindFramebuffer(x.FRAMEBUFFER,At);const Ct=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ct),x.bufferData(x.PIXEL_PACK_BUFFER,ft.byteLength,x.STREAM_READ),x.readPixels(U,W,$,F,It.convert(Bt),It.convert(Vt),0);const Kt=L!==null?j.get(L).__webglFramebuffer:null;G.bindFramebuffer(x.FRAMEBUFFER,Kt);const oe=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Ux(x,oe,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ct),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,ft),x.deleteBuffer(Ct),x.deleteSync(oe),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,W=0){y.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const $=Math.pow(2,-W),F=Math.floor(y.image.width*$),ft=Math.floor(y.image.height*$),xt=U!==null?U.x:0,At=U!==null?U.y:0;S.setTexture2D(y,0),x.copyTexSubImage2D(x.TEXTURE_2D,W,0,0,xt,At,F,ft),G.unbindTexture()},this.copyTextureToTexture=function(y,U,W=null,$=null,F=0){y.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,y=arguments[1],U=arguments[2],F=arguments[3]||0,W=null);let ft,xt,At,wt,Bt,Vt,Ct,Kt,oe;const ce=y.isCompressedTexture?y.mipmaps[F]:y.image;W!==null?(ft=W.max.x-W.min.x,xt=W.max.y-W.min.y,At=W.isBox3?W.max.z-W.min.z:1,wt=W.min.x,Bt=W.min.y,Vt=W.isBox3?W.min.z:0):(ft=ce.width,xt=ce.height,At=ce.depth||1,wt=0,Bt=0,Vt=0),$!==null?(Ct=$.x,Kt=$.y,oe=$.z):(Ct=0,Kt=0,oe=0);const Fe=It.convert(U.format),Jt=It.convert(U.type);let Rt;U.isData3DTexture?(S.setTexture3D(U,0),Rt=x.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(S.setTexture2DArray(U,0),Rt=x.TEXTURE_2D_ARRAY):(S.setTexture2D(U,0),Rt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,U.unpackAlignment);const On=x.getParameter(x.UNPACK_ROW_LENGTH),Qt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),cn=x.getParameter(x.UNPACK_SKIP_PIXELS),cs=x.getParameter(x.UNPACK_SKIP_ROWS),Ge=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,ce.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ce.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,wt),x.pixelStorei(x.UNPACK_SKIP_ROWS,Bt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Vt);const hr=y.isDataArrayTexture||y.isData3DTexture,ue=U.isDataArrayTexture||U.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const En=j.get(y),fr=j.get(U),Je=j.get(En.__renderTarget),si=j.get(fr.__renderTarget);G.bindFramebuffer(x.READ_FRAMEBUFFER,Je.__webglFramebuffer),G.bindFramebuffer(x.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<At;ri++)hr&&x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,j.get(y).__webglTexture,F,Vt+ri),y.isDepthTexture?(ue&&x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,j.get(U).__webglTexture,F,oe+ri),x.blitFramebuffer(wt,Bt,ft,xt,Ct,Kt,ft,xt,x.DEPTH_BUFFER_BIT,x.NEAREST)):ue?x.copyTexSubImage3D(Rt,F,Ct,Kt,oe+ri,wt,Bt,ft,xt):x.copyTexSubImage2D(Rt,F,Ct,Kt,oe+ri,wt,Bt,ft,xt);G.bindFramebuffer(x.READ_FRAMEBUFFER,null),G.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else ue?y.isDataTexture||y.isData3DTexture?x.texSubImage3D(Rt,F,Ct,Kt,oe,ft,xt,At,Fe,Jt,ce.data):U.isCompressedArrayTexture?x.compressedTexSubImage3D(Rt,F,Ct,Kt,oe,ft,xt,At,Fe,ce.data):x.texSubImage3D(Rt,F,Ct,Kt,oe,ft,xt,At,Fe,Jt,ce):y.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,F,Ct,Kt,ft,xt,Fe,Jt,ce.data):y.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,F,Ct,Kt,ce.width,ce.height,Fe,ce.data):x.texSubImage2D(x.TEXTURE_2D,F,Ct,Kt,ft,xt,Fe,Jt,ce);x.pixelStorei(x.UNPACK_ROW_LENGTH,On),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Qt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,cn),x.pixelStorei(x.UNPACK_SKIP_ROWS,cs),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ge),F===0&&U.generateMipmaps&&x.generateMipmap(Rt),G.unbindTexture()},this.copyTextureToTexture3D=function(y,U,W=null,$=null,F=0){return y.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,$=arguments[1]||null,y=arguments[2],U=arguments[3],F=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,W,$,F)},this.initRenderTarget=function(y){j.get(y).__webglFramebuffer===void 0&&S.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),G.unbindTexture()},this.resetState=function(){R=0,w=0,L=null,G.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class jy extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class nm extends Zr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const la=new z,ca=new z,Af=new he,xr=new ba,Lo=new Ta,Tl=new z,wf=new z;class Ky extends Se{constructor(t=new In,e=new nm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)la.fromBufferAttribute(e,s-1),ca.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=la.distanceTo(ca);t.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,t.ray.intersectsSphere(Lo)===!1)return;Af.copy(s).invert(),xr.copy(t.ray).applyMatrix4(Af);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=u){const f=c.getX(v),A=c.getX(v+1),b=Io(this,t,xr,l,f,A);b&&e.push(b)}if(this.isLineLoop){const v=c.getX(g-1),m=c.getX(p),f=Io(this,t,xr,l,v,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=u){const f=Io(this,t,xr,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Io(this,t,xr,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Io(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(la.fromBufferAttribute(o,s),ca.fromBufferAttribute(o,r),e.distanceSqToSegment(la,ca,Tl,wf)>i)return;Tl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Tl);if(!(l<t.near||l>t.far))return{distance:l,point:wf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Cf=new z,Rf=new z;class Zy extends Ky{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Cf.fromBufferAttribute(e,s),Rf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cf.distanceTo(Rf);t.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Or extends In{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new z,d=new z,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const A=[],b=f/i;let E=0;f===0&&o===0?E=.5/e:f===i&&l===Math.PI&&(E=-.5/e);for(let I=0;I<=e;I++){const R=I/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(R+E,1-b),A.push(u++)}c.push(A)}for(let f=0;f<i;f++)for(let A=0;A<e;A++){const b=c[f][A+1],E=c[f][A],I=c[f+1][A],R=c[f+1][A+1];(f!==0||o>0)&&p.push(b,E,R),(f!==i-1||l<Math.PI)&&p.push(E,I,R)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jy extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Qy extends Jy{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Pf=new he;class tT{constructor(t,e,i=0,s=1/0){this.ray=new ba(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pf),this}intersectObject(t,e=!0,i=[]){return Bc(t,this,i,e),i.sort(Df),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Bc(t[s],this,i,e);return i.sort(Df),i}}function Df(n,t){return n.distance-t.distance}function Bc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Bc(r[o],t,e,!0)}}class Lf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class eT extends Zy{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new In;s.setAttribute("position",new ke(e,3)),s.setAttribute("color",new ke(i,3));const r=new nm({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,i){const s=new jt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class nT extends os{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_u);const If={type:"change"},Au={type:"start"},im={type:"end"},No=new ba,Nf=new _i,iT=Math.cos(70*Nx.DEG2RAD),_e=new z,Be=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bl=1e-6;class sT extends nT{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zs.ROTATE,MIDDLE:zs.DOLLY,RIGHT:zs.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new ns,this._lastTargetPosition=new z,this._quat=new ns().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lf,this._sphericalDelta=new Lf,this._scale=1,this._panOffset=new z,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new z,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oT.bind(this),this._onPointerDown=rT.bind(this),this._onPointerUp=aT.bind(this),this._onContextMenu=pT.bind(this),this._onMouseWheel=uT.bind(this),this._onKeyDown=hT.bind(this),this._onTouchStart=fT.bind(this),this._onTouchMove=dT.bind(this),this._onMouseDown=lT.bind(this),this._onMouseMove=cT.bind(this),this._interceptControlDown=mT.bind(this),this._interceptControlUp=_T.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(If),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Be:i>Math.PI&&(i-=Be),s<-Math.PI?s+=Be:s>Math.PI&&(s-=Be),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_e.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const u=new z(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(No.origin.copy(this.object.position),No.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(No.direction))<iT?this.object.lookAt(this.target):(Nf.setFromNormalAndCoplanarPoint(this.object.up,this.target),No.intersectPlane(Nf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bl||this._lastTargetPosition.distanceToSquared(this.target)>bl?(this.dispatchEvent(If),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function rT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function oT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function aT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(im),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lT(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=re.DOLLY;break;case zs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}break;case zs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Au)}function cT(n){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function uT(n){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(n.preventDefault(),this.dispatchEvent(Au),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(im))}function hT(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function fT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=re.TOUCH_ROTATE;break;case Is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=re.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Au)}function dT(n){switch(this._trackPointer(n),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=re.NONE}}function pT(n){this.enabled!==!1&&n.preventDefault()}function mT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _T(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Of extends Se{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Wt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const bs=new z,Uf=new he,Ff=new he,Bf=new z,Hf=new z;class gT{constructor(t={}){const e=this;let i,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(g,v){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Uf.copy(v.matrixWorldInverse),Ff.multiplyMatrices(v.projectionMatrix,Uf),c(g,g,v),p(g)},this.setSize=function(g,v){i=g,s=v,r=i/2,o=s/2,l.style.width=g+"px",l.style.height=v+"px"};function u(g){g.isCSS2DObject&&(g.element.style.display="none");for(let v=0,m=g.children.length;v<m;v++)u(g.children[v])}function c(g,v,m){if(g.visible===!1){u(g);return}if(g.isCSS2DObject){bs.setFromMatrixPosition(g.matrixWorld),bs.applyMatrix4(Ff);const f=bs.z>=-1&&bs.z<=1&&g.layers.test(m.layers)===!0,A=g.element;A.style.display=f===!0?"":"none",f===!0&&(g.onBeforeRender(e,v,m),A.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(bs.x*r+r)+"px,"+(-bs.y*o+o)+"px)",A.parentNode!==l&&l.appendChild(A),g.onAfterRender(e,v,m));const b={distanceToCameraSquared:h(m,g)};a.objects.set(g,b)}for(let f=0,A=g.children.length;f<A;f++)c(g.children[f],v,m)}function h(g,v){return Bf.setFromMatrixPosition(g.matrixWorld),Hf.setFromMatrixPosition(v.matrixWorld),Bf.distanceToSquared(Hf)}function d(g){const v=[];return g.traverseVisible(function(m){m.isCSS2DObject&&v.push(m)}),v}function p(g){const v=d(g).sort(function(f,A){if(f.renderOrder!==A.renderOrder)return A.renderOrder-f.renderOrder;const b=a.objects.get(f).distanceToCameraSquared,E=a.objects.get(A).distanceToCameraSquared;return b-E}),m=v.length;for(let f=0,A=v.length;f<A;f++)v[f].element.style.zIndex=m-f}}}const sm=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},vT=.002,xT={__name:"ThreeContainer",props:{opacity:{type:Boolean,default:!1},bin:{type:Boolean,default:!0},controllers:{type:Boolean,default:!0},openState:{type:Boolean,default:!1}},setup(n,{expose:t}){di(vT);const e=di(null);let i,s,r,o,a,l,u,c,h=[];const d=[{x:.5,y:.5,z:.5,r:3},{x:4,y:0,z:0,r:2},{x:4,y:5,z:5,r:4.2},{x:3,y:3,z:3,r:2.5}],p={x:2,y:2,z:2},g={x:-9.375,y:7.255,z:5.741};function v(R){const w=e.value.getBoundingClientRect();h.x=(R.clientX-w.left)/w.width*2-1,h.y=-((R.clientY-w.top)/w.height)*2+1}const m=()=>{i&&(r.aspect=e.value.clientWidth/e.value.clientHeight,r.updateProjectionMatrix(),a.setSize(e.value.clientWidth,e.value.clientHeight),i.setSize(e.value.clientWidth,e.value.clientHeight))},f=()=>{r.position.set(g.x,g.y,g.z),r.lookAt(p.x,p.y,p.z),o.reset()},A=(R,w)=>{console.log("REGARDE ICI :",R,w);const L={x:w[0],y:w[1],z:w[2]};return console.log(L.x,R.x,L.y,R.y,L.z,R.z),console.log(Math.sqrt((L.x-R.x)**2+(L.y-R.y)**2+(L.z-R.z)**2)),Math.sqrt((L.x-R.x)**2+(L.y-R.y)**2+(L.z-R.z)**2)-R.r},b=R=>d.reduce((w,L)=>{const T=A(L,R)**2;return console.log("sum:",w," | beacon:",L," | point:",R," | error:",T),w+T},0),E=R=>(console.log("ICI",b(R)),numeric.uncmin(b,R).solution),I=()=>{const R=[p.x,p.y,p.z],w=E(R);return p.x=w[0],p.y=w[1],p.z=w[2],console.log("Optimized position:",p),u.textContent=`(${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)})`,l.position.set(p.x,p.y,p.z),c.position.set(p.x,p.y,p.z),p};return np(()=>{if(!e.value)return;s=new jy,s.background=new jt(15661302),new tT,h=new Wt;const R=new eT(10);s.add(R);const w=new Qy(16777215,4473924,1);w.position.set(0,50,0),s.add(w),r=new en(75,e.value.clientWidth/e.value.clientHeight,.1,1e3),i=new qy({antialias:!0}),i.setSize(e.value.clientWidth,e.value.clientHeight),e.value.appendChild(i.domElement),r.position.set(g.x,g.y,g.z),r.lookAt(p.x,p.y,p.z),a=new gT,a.setSize(e.value.clientWidth,e.value.clientHeight),a.domElement.style.position="absolute",a.domElement.style.top="0",e.value.appendChild(a.domElement),o=new sT(r,a.domElement),o.enableDamping=!0,o.maxDistance=50,o.minDistance=5,d.forEach(P=>{const Z=new Or(P.r,32,32),k=new Nr({color:8421504,wireframe:!0,transparent:!0,opacity:.3}),et=new nn(Z,k);et.position.set(P.x,P.y,P.z),s.add(et);const nt=new Or(.1,16,16),X=new Nr({color:16711680}),K=new nn(nt,X);K.position.set(P.x,P.y,P.z),s.add(K);const B=document.createElement("div");B.className="label",B.textContent=`(${P.x}, ${P.y}, ${P.z})`,B.style.marginTop="-1em";const ht=new Of(B);ht.position.set(P.x,P.y,P.z),s.add(ht)});const L=new Or(.2,16,16),T=new Nr({color:255});c=new nn(L,T),c.position.set(p.x,p.y,p.z),s.add(c),u=document.createElement("div"),u.className="label",u.textContent=`(${p.x}, ${p.y}, ${p.z})`,u.style.marginTop="-1em",l=new Of(u),l.position.set(p.x,p.y,p.z),s.add(l),window.addEventListener("resize",m),e.value.addEventListener("mousemove",v);function M(){requestAnimationFrame(M),o.update(),i.render(s,r),a.render(s,r)}M()}),cu(()=>{e.value.removeEventListener("mousemove",v),window.removeEventListener("resize",m),i.dispose()}),t({resetCamera:f,computePosition:I}),(R,w)=>(fu(),du("div",{class:"rounded shadow",ref_key:"threeContainer",ref:e,style:{width:"100%",height:"100%"}},null,512))}},ET=sm(xT,[["__scopeId","data-v-409d73b5"]]),ST={id:"container",class:"container-fluid"},MT={class:"d-flex flex-column h-100"},yT={class:"d-flex flex-column"},TT={class:"d-flex flex-row flex-wrap justify-content-between"},bT={class:"m-4 d-flex flex-row gap-2"},AT={class:"flex-grow-1 mb-4 px-3 position-relative"},wT={__name:"Home",setup(n){const t=di(!0),e=di(!0),i=di(!0),s=di(!1),r=di(null),o=di(null),a=()=>{o.value&&o.value.resetCamera()},l=()=>{o.value&&(r.value=o.value.computePosition()),console.log(o.value.computePosition())};return(u,c)=>(fu(),du("div",ST,[dn("div",MT,[dn("div",yT,[c[2]||(c[2]=dn("div",{class:"text-center my-4"},[dn("h1",null,"TD - N Lateration")],-1)),dn("div",TT,[dn("div",bT,[dn("button",{onClick:c[0]||(c[0]=h=>a()),class:"btn btn-primary"},"Reset cam"),dn("button",{onClick:c[1]||(c[1]=h=>l()),class:"btn btn-primary"},"Compute pos"),Mp(" "+Pd(r.value?"Position computed !":""),1)])])]),dn("div",AT,[jn(ET,{ref_key:"threeContainerComp",ref:o,opacity:t.value,bin:e.value,controllers:i.value,openState:s.value},null,8,["opacity","bin","controllers","openState"])])])]))}},CT=sm(wT,[["__scopeId","data-v-93be0591"]]),RT={class:"h-100"},PT={__name:"App",setup(n){return(t,e)=>(fu(),du("div",RT,[jn(CT)]))}};var Oe="top",je="bottom",Ke="right",Ue="left",Ca="auto",ar=[Oe,je,Ke,Ue],is="start",Zs="end",rm="clippingParents",wu="viewport",Ps="popper",om="reference",Hc=ar.reduce(function(n,t){return n.concat([t+"-"+is,t+"-"+Zs])},[]),Cu=[].concat(ar,[Ca]).reduce(function(n,t){return n.concat([t,t+"-"+is,t+"-"+Zs])},[]),am="beforeRead",lm="read",cm="afterRead",um="beforeMain",hm="main",fm="afterMain",dm="beforeWrite",pm="write",mm="afterWrite",_m=[am,lm,cm,um,hm,fm,dm,pm,mm];function Ln(n){return n?(n.nodeName||"").toLowerCase():null}function Ze(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function ss(n){var t=Ze(n).Element;return n instanceof t||n instanceof Element}function sn(n){var t=Ze(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function Ru(n){if(typeof ShadowRoot>"u")return!1;var t=Ze(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function DT(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var i=t.styles[e]||{},s=t.attributes[e]||{},r=t.elements[e];!sn(r)||!Ln(r)||(Object.assign(r.style,i),Object.keys(s).forEach(function(o){var a=s[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function LT(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(i){var s=t.elements[i],r=t.attributes[i]||{},o=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:e[i]),a=o.reduce(function(l,u){return l[u]="",l},{});!sn(s)||!Ln(s)||(Object.assign(s.style,a),Object.keys(r).forEach(function(l){s.removeAttribute(l)}))})}}const Pu={name:"applyStyles",enabled:!0,phase:"write",fn:DT,effect:LT,requires:["computeStyles"]};function Rn(n){return n.split("-")[0]}var Ji=Math.max,ua=Math.min,Js=Math.round;function zc(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function gm(){return!/^((?!chrome|android).)*safari/i.test(zc())}function Qs(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var i=n.getBoundingClientRect(),s=1,r=1;t&&sn(n)&&(s=n.offsetWidth>0&&Js(i.width)/n.offsetWidth||1,r=n.offsetHeight>0&&Js(i.height)/n.offsetHeight||1);var o=ss(n)?Ze(n):window,a=o.visualViewport,l=!gm()&&e,u=(i.left+(l&&a?a.offsetLeft:0))/s,c=(i.top+(l&&a?a.offsetTop:0))/r,h=i.width/s,d=i.height/r;return{width:h,height:d,top:c,right:u+h,bottom:c+d,left:u,x:u,y:c}}function Du(n){var t=Qs(n),e=n.offsetWidth,i=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:i}}function vm(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&Ru(e)){var i=t;do{if(i&&n.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function ei(n){return Ze(n).getComputedStyle(n)}function IT(n){return["table","td","th"].indexOf(Ln(n))>=0}function Di(n){return((ss(n)?n.ownerDocument:n.document)||window.document).documentElement}function Ra(n){return Ln(n)==="html"?n:n.assignedSlot||n.parentNode||(Ru(n)?n.host:null)||Di(n)}function zf(n){return!sn(n)||ei(n).position==="fixed"?null:n.offsetParent}function NT(n){var t=/firefox/i.test(zc()),e=/Trident/i.test(zc());if(e&&sn(n)){var i=ei(n);if(i.position==="fixed")return null}var s=Ra(n);for(Ru(s)&&(s=s.host);sn(s)&&["html","body"].indexOf(Ln(s))<0;){var r=ei(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||t&&r.willChange==="filter"||t&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function Qr(n){for(var t=Ze(n),e=zf(n);e&&IT(e)&&ei(e).position==="static";)e=zf(e);return e&&(Ln(e)==="html"||Ln(e)==="body"&&ei(e).position==="static")?t:e||NT(n)||t}function Lu(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Ur(n,t,e){return Ji(n,ua(t,e))}function OT(n,t,e){var i=Ur(n,t,e);return i>e?e:i}function xm(){return{top:0,right:0,bottom:0,left:0}}function Em(n){return Object.assign({},xm(),n)}function Sm(n,t){return t.reduce(function(e,i){return e[i]=n,e},{})}var UT=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Em(typeof t!="number"?t:Sm(t,ar))};function FT(n){var t,e=n.state,i=n.name,s=n.options,r=e.elements.arrow,o=e.modifiersData.popperOffsets,a=Rn(e.placement),l=Lu(a),u=[Ue,Ke].indexOf(a)>=0,c=u?"height":"width";if(!(!r||!o)){var h=UT(s.padding,e),d=Du(r),p=l==="y"?Oe:Ue,g=l==="y"?je:Ke,v=e.rects.reference[c]+e.rects.reference[l]-o[l]-e.rects.popper[c],m=o[l]-e.rects.reference[l],f=Qr(r),A=f?l==="y"?f.clientHeight||0:f.clientWidth||0:0,b=v/2-m/2,E=h[p],I=A-d[c]-h[g],R=A/2-d[c]/2+b,w=Ur(E,R,I),L=l;e.modifiersData[i]=(t={},t[L]=w,t.centerOffset=w-R,t)}}function BT(n){var t=n.state,e=n.options,i=e.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||vm(t.elements.popper,s)&&(t.elements.arrow=s))}const Mm={name:"arrow",enabled:!0,phase:"main",fn:FT,effect:BT,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function tr(n){return n.split("-")[1]}var HT={top:"auto",right:"auto",bottom:"auto",left:"auto"};function zT(n,t){var e=n.x,i=n.y,s=t.devicePixelRatio||1;return{x:Js(e*s)/s||0,y:Js(i*s)/s||0}}function Vf(n){var t,e=n.popper,i=n.popperRect,s=n.placement,r=n.variation,o=n.offsets,a=n.position,l=n.gpuAcceleration,u=n.adaptive,c=n.roundOffsets,h=n.isFixed,d=o.x,p=d===void 0?0:d,g=o.y,v=g===void 0?0:g,m=typeof c=="function"?c({x:p,y:v}):{x:p,y:v};p=m.x,v=m.y;var f=o.hasOwnProperty("x"),A=o.hasOwnProperty("y"),b=Ue,E=Oe,I=window;if(u){var R=Qr(e),w="clientHeight",L="clientWidth";if(R===Ze(e)&&(R=Di(e),ei(R).position!=="static"&&a==="absolute"&&(w="scrollHeight",L="scrollWidth")),R=R,s===Oe||(s===Ue||s===Ke)&&r===Zs){E=je;var T=h&&R===I&&I.visualViewport?I.visualViewport.height:R[w];v-=T-i.height,v*=l?1:-1}if(s===Ue||(s===Oe||s===je)&&r===Zs){b=Ke;var M=h&&R===I&&I.visualViewport?I.visualViewport.width:R[L];p-=M-i.width,p*=l?1:-1}}var P=Object.assign({position:a},u&&HT),Z=c===!0?zT({x:p,y:v},Ze(e)):{x:p,y:v};if(p=Z.x,v=Z.y,l){var k;return Object.assign({},P,(k={},k[E]=A?"0":"",k[b]=f?"0":"",k.transform=(I.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",k))}return Object.assign({},P,(t={},t[E]=A?v+"px":"",t[b]=f?p+"px":"",t.transform="",t))}function VT(n){var t=n.state,e=n.options,i=e.gpuAcceleration,s=i===void 0?!0:i,r=e.adaptive,o=r===void 0?!0:r,a=e.roundOffsets,l=a===void 0?!0:a,u={placement:Rn(t.placement),variation:tr(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Vf(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Vf(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Iu={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:VT,data:{}};var Oo={passive:!0};function kT(n){var t=n.state,e=n.instance,i=n.options,s=i.scroll,r=s===void 0?!0:s,o=i.resize,a=o===void 0?!0:o,l=Ze(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&u.forEach(function(c){c.addEventListener("scroll",e.update,Oo)}),a&&l.addEventListener("resize",e.update,Oo),function(){r&&u.forEach(function(c){c.removeEventListener("scroll",e.update,Oo)}),a&&l.removeEventListener("resize",e.update,Oo)}}const Nu={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:kT,data:{}};var GT={left:"right",right:"left",bottom:"top",top:"bottom"};function Zo(n){return n.replace(/left|right|bottom|top/g,function(t){return GT[t]})}var WT={start:"end",end:"start"};function kf(n){return n.replace(/start|end/g,function(t){return WT[t]})}function Ou(n){var t=Ze(n),e=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:e,scrollTop:i}}function Uu(n){return Qs(Di(n)).left+Ou(n).scrollLeft}function $T(n,t){var e=Ze(n),i=Di(n),s=e.visualViewport,r=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;var u=gm();(u||!u&&t==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a+Uu(n),y:l}}function XT(n){var t,e=Di(n),i=Ou(n),s=(t=n.ownerDocument)==null?void 0:t.body,r=Ji(e.scrollWidth,e.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=Ji(e.scrollHeight,e.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+Uu(n),l=-i.scrollTop;return ei(s||e).direction==="rtl"&&(a+=Ji(e.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Fu(n){var t=ei(n),e=t.overflow,i=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+s+i)}function ym(n){return["html","body","#document"].indexOf(Ln(n))>=0?n.ownerDocument.body:sn(n)&&Fu(n)?n:ym(Ra(n))}function Fr(n,t){var e;t===void 0&&(t=[]);var i=ym(n),s=i===((e=n.ownerDocument)==null?void 0:e.body),r=Ze(i),o=s?[r].concat(r.visualViewport||[],Fu(i)?i:[]):i,a=t.concat(o);return s?a:a.concat(Fr(Ra(o)))}function Vc(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function YT(n,t){var e=Qs(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function Gf(n,t,e){return t===wu?Vc($T(n,e)):ss(t)?YT(t,e):Vc(XT(Di(n)))}function qT(n){var t=Fr(Ra(n)),e=["absolute","fixed"].indexOf(ei(n).position)>=0,i=e&&sn(n)?Qr(n):n;return ss(i)?t.filter(function(s){return ss(s)&&vm(s,i)&&Ln(s)!=="body"}):[]}function jT(n,t,e,i){var s=t==="clippingParents"?qT(n):[].concat(t),r=[].concat(s,[e]),o=r[0],a=r.reduce(function(l,u){var c=Gf(n,u,i);return l.top=Ji(c.top,l.top),l.right=ua(c.right,l.right),l.bottom=ua(c.bottom,l.bottom),l.left=Ji(c.left,l.left),l},Gf(n,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Tm(n){var t=n.reference,e=n.element,i=n.placement,s=i?Rn(i):null,r=i?tr(i):null,o=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,l;switch(s){case Oe:l={x:o,y:t.y-e.height};break;case je:l={x:o,y:t.y+t.height};break;case Ke:l={x:t.x+t.width,y:a};break;case Ue:l={x:t.x-e.width,y:a};break;default:l={x:t.x,y:t.y}}var u=s?Lu(s):null;if(u!=null){var c=u==="y"?"height":"width";switch(r){case is:l[u]=l[u]-(t[c]/2-e[c]/2);break;case Zs:l[u]=l[u]+(t[c]/2-e[c]/2);break}}return l}function er(n,t){t===void 0&&(t={});var e=t,i=e.placement,s=i===void 0?n.placement:i,r=e.strategy,o=r===void 0?n.strategy:r,a=e.boundary,l=a===void 0?rm:a,u=e.rootBoundary,c=u===void 0?wu:u,h=e.elementContext,d=h===void 0?Ps:h,p=e.altBoundary,g=p===void 0?!1:p,v=e.padding,m=v===void 0?0:v,f=Em(typeof m!="number"?m:Sm(m,ar)),A=d===Ps?om:Ps,b=n.rects.popper,E=n.elements[g?A:d],I=jT(ss(E)?E:E.contextElement||Di(n.elements.popper),l,c,o),R=Qs(n.elements.reference),w=Tm({reference:R,element:b,strategy:"absolute",placement:s}),L=Vc(Object.assign({},b,w)),T=d===Ps?L:R,M={top:I.top-T.top+f.top,bottom:T.bottom-I.bottom+f.bottom,left:I.left-T.left+f.left,right:T.right-I.right+f.right},P=n.modifiersData.offset;if(d===Ps&&P){var Z=P[s];Object.keys(M).forEach(function(k){var et=[Ke,je].indexOf(k)>=0?1:-1,nt=[Oe,je].indexOf(k)>=0?"y":"x";M[k]+=Z[nt]*et})}return M}function KT(n,t){t===void 0&&(t={});var e=t,i=e.placement,s=e.boundary,r=e.rootBoundary,o=e.padding,a=e.flipVariations,l=e.allowedAutoPlacements,u=l===void 0?Cu:l,c=tr(i),h=c?a?Hc:Hc.filter(function(g){return tr(g)===c}):ar,d=h.filter(function(g){return u.indexOf(g)>=0});d.length===0&&(d=h);var p=d.reduce(function(g,v){return g[v]=er(n,{placement:v,boundary:s,rootBoundary:r,padding:o})[Rn(v)],g},{});return Object.keys(p).sort(function(g,v){return p[g]-p[v]})}function ZT(n){if(Rn(n)===Ca)return[];var t=Zo(n);return[kf(n),t,kf(t)]}function JT(n){var t=n.state,e=n.options,i=n.name;if(!t.modifiersData[i]._skip){for(var s=e.mainAxis,r=s===void 0?!0:s,o=e.altAxis,a=o===void 0?!0:o,l=e.fallbackPlacements,u=e.padding,c=e.boundary,h=e.rootBoundary,d=e.altBoundary,p=e.flipVariations,g=p===void 0?!0:p,v=e.allowedAutoPlacements,m=t.options.placement,f=Rn(m),A=f===m,b=l||(A||!g?[Zo(m)]:ZT(m)),E=[m].concat(b).reduce(function(tt,lt){return tt.concat(Rn(lt)===Ca?KT(t,{placement:lt,boundary:c,rootBoundary:h,padding:u,flipVariations:g,allowedAutoPlacements:v}):lt)},[]),I=t.rects.reference,R=t.rects.popper,w=new Map,L=!0,T=E[0],M=0;M<E.length;M++){var P=E[M],Z=Rn(P),k=tr(P)===is,et=[Oe,je].indexOf(Z)>=0,nt=et?"width":"height",X=er(t,{placement:P,boundary:c,rootBoundary:h,altBoundary:d,padding:u}),K=et?k?Ke:Ue:k?je:Oe;I[nt]>R[nt]&&(K=Zo(K));var B=Zo(K),ht=[];if(r&&ht.push(X[Z]<=0),a&&ht.push(X[K]<=0,X[B]<=0),ht.every(function(tt){return tt})){T=P,L=!1;break}w.set(P,ht)}if(L)for(var _t=g?3:1,yt=function(lt){var Et=E.find(function(dt){var bt=w.get(dt);if(bt)return bt.slice(0,lt).every(function(Nt){return Nt})});if(Et)return T=Et,"break"},Pt=_t;Pt>0;Pt--){var Yt=yt(Pt);if(Yt==="break")break}t.placement!==T&&(t.modifiersData[i]._skip=!0,t.placement=T,t.reset=!0)}}const bm={name:"flip",enabled:!0,phase:"main",fn:JT,requiresIfExists:["offset"],data:{_skip:!1}};function Wf(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function $f(n){return[Oe,Ke,je,Ue].some(function(t){return n[t]>=0})}function QT(n){var t=n.state,e=n.name,i=t.rects.reference,s=t.rects.popper,r=t.modifiersData.preventOverflow,o=er(t,{elementContext:"reference"}),a=er(t,{altBoundary:!0}),l=Wf(o,i),u=Wf(a,s,r),c=$f(l),h=$f(u);t.modifiersData[e]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":h})}const Am={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:QT};function tb(n,t,e){var i=Rn(n),s=[Ue,Oe].indexOf(i)>=0?-1:1,r=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[Ue,Ke].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function eb(n){var t=n.state,e=n.options,i=n.name,s=e.offset,r=s===void 0?[0,0]:s,o=Cu.reduce(function(c,h){return c[h]=tb(h,t.rects,r),c},{}),a=o[t.placement],l=a.x,u=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[i]=o}const wm={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:eb};function nb(n){var t=n.state,e=n.name;t.modifiersData[e]=Tm({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Bu={name:"popperOffsets",enabled:!0,phase:"read",fn:nb,data:{}};function ib(n){return n==="x"?"y":"x"}function sb(n){var t=n.state,e=n.options,i=n.name,s=e.mainAxis,r=s===void 0?!0:s,o=e.altAxis,a=o===void 0?!1:o,l=e.boundary,u=e.rootBoundary,c=e.altBoundary,h=e.padding,d=e.tether,p=d===void 0?!0:d,g=e.tetherOffset,v=g===void 0?0:g,m=er(t,{boundary:l,rootBoundary:u,padding:h,altBoundary:c}),f=Rn(t.placement),A=tr(t.placement),b=!A,E=Lu(f),I=ib(E),R=t.modifiersData.popperOffsets,w=t.rects.reference,L=t.rects.popper,T=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,M=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,Z={x:0,y:0};if(R){if(r){var k,et=E==="y"?Oe:Ue,nt=E==="y"?je:Ke,X=E==="y"?"height":"width",K=R[E],B=K+m[et],ht=K-m[nt],_t=p?-L[X]/2:0,yt=A===is?w[X]:L[X],Pt=A===is?-L[X]:-w[X],Yt=t.elements.arrow,tt=p&&Yt?Du(Yt):{width:0,height:0},lt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:xm(),Et=lt[et],dt=lt[nt],bt=Ur(0,w[X],tt[X]),Nt=b?w[X]/2-_t-bt-Et-M.mainAxis:yt-bt-Et-M.mainAxis,Ft=b?-w[X]/2+_t+bt+dt+M.mainAxis:Pt+bt+dt+M.mainAxis,Zt=t.elements.arrow&&Qr(t.elements.arrow),Xt=Zt?E==="y"?Zt.clientTop||0:Zt.clientLeft||0:0,C=(k=P==null?void 0:P[E])!=null?k:0,x=K+Nt-C-Xt,Y=K+Ft-C,J=Ur(p?ua(B,x):B,K,p?Ji(ht,Y):ht);R[E]=J,Z[E]=J-K}if(a){var q,G=E==="x"?Oe:Ue,rt=E==="x"?je:Ke,j=R[I],S=I==="y"?"height":"width",_=j+m[G],D=j-m[rt],O=[Oe,Ue].indexOf(f)!==-1,V=(q=P==null?void 0:P[I])!=null?q:0,H=O?_:j-w[S]-L[S]-V+M.altAxis,ct=O?j+w[S]+L[S]-V-M.altAxis:D,ot=p&&O?OT(H,j,ct):Ur(p?H:_,j,p?ct:D);R[I]=ot,Z[I]=ot-j}t.modifiersData[i]=Z}}const Cm={name:"preventOverflow",enabled:!0,phase:"main",fn:sb,requiresIfExists:["offset"]};function rb(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function ob(n){return n===Ze(n)||!sn(n)?Ou(n):rb(n)}function ab(n){var t=n.getBoundingClientRect(),e=Js(t.width)/n.offsetWidth||1,i=Js(t.height)/n.offsetHeight||1;return e!==1||i!==1}function lb(n,t,e){e===void 0&&(e=!1);var i=sn(t),s=sn(t)&&ab(t),r=Di(t),o=Qs(n,s,e),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!e)&&((Ln(t)!=="body"||Fu(r))&&(a=ob(t)),sn(t)?(l=Qs(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):r&&(l.x=Uu(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function cb(n){var t=new Map,e=new Set,i=[];n.forEach(function(r){t.set(r.name,r)});function s(r){e.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!e.has(a)){var l=t.get(a);l&&s(l)}}),i.push(r)}return n.forEach(function(r){e.has(r.name)||s(r)}),i}function ub(n){var t=cb(n);return _m.reduce(function(e,i){return e.concat(t.filter(function(s){return s.phase===i}))},[])}function hb(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function fb(n){var t=n.reduce(function(e,i){var s=e[i.name];return e[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,e},{});return Object.keys(t).map(function(e){return t[e]})}var Xf={placement:"bottom",modifiers:[],strategy:"absolute"};function Yf(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Pa(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,i=e===void 0?[]:e,s=t.defaultOptions,r=s===void 0?Xf:s;return function(a,l,u){u===void 0&&(u=r);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Xf,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],d=!1,p={state:c,setOptions:function(f){var A=typeof f=="function"?f(c.options):f;v(),c.options=Object.assign({},r,c.options,A),c.scrollParents={reference:ss(a)?Fr(a):a.contextElement?Fr(a.contextElement):[],popper:Fr(l)};var b=ub(fb([].concat(i,c.options.modifiers)));return c.orderedModifiers=b.filter(function(E){return E.enabled}),g(),p.update()},forceUpdate:function(){if(!d){var f=c.elements,A=f.reference,b=f.popper;if(Yf(A,b)){c.rects={reference:lb(A,Qr(b),c.options.strategy==="fixed"),popper:Du(b)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(M){return c.modifiersData[M.name]=Object.assign({},M.data)});for(var E=0;E<c.orderedModifiers.length;E++){if(c.reset===!0){c.reset=!1,E=-1;continue}var I=c.orderedModifiers[E],R=I.fn,w=I.options,L=w===void 0?{}:w,T=I.name;typeof R=="function"&&(c=R({state:c,options:L,name:T,instance:p})||c)}}}},update:hb(function(){return new Promise(function(m){p.forceUpdate(),m(c)})}),destroy:function(){v(),d=!0}};if(!Yf(a,l))return p;p.setOptions(u).then(function(m){!d&&u.onFirstUpdate&&u.onFirstUpdate(m)});function g(){c.orderedModifiers.forEach(function(m){var f=m.name,A=m.options,b=A===void 0?{}:A,E=m.effect;if(typeof E=="function"){var I=E({state:c,name:f,instance:p,options:b}),R=function(){};h.push(I||R)}})}function v(){h.forEach(function(m){return m()}),h=[]}return p}}var db=Pa(),pb=[Nu,Bu,Iu,Pu],mb=Pa({defaultModifiers:pb}),_b=[Nu,Bu,Iu,Pu,wm,bm,Cm,Mm,Am],Hu=Pa({defaultModifiers:_b});const Rm=Object.freeze(Object.defineProperty({__proto__:null,afterMain:fm,afterRead:cm,afterWrite:mm,applyStyles:Pu,arrow:Mm,auto:Ca,basePlacements:ar,beforeMain:um,beforeRead:am,beforeWrite:dm,bottom:je,clippingParents:rm,computeStyles:Iu,createPopper:Hu,createPopperBase:db,createPopperLite:mb,detectOverflow:er,end:Zs,eventListeners:Nu,flip:bm,hide:Am,left:Ue,main:hm,modifierPhases:_m,offset:wm,placements:Cu,popper:Ps,popperGenerator:Pa,popperOffsets:Bu,preventOverflow:Cm,read:lm,reference:om,right:Ke,start:is,top:Oe,variationPlacements:Hc,viewport:wu,write:pm},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const fi=new Map,Al={set(n,t,e){fi.has(n)||fi.set(n,new Map);const i=fi.get(n);if(!i.has(t)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(t,e)},get(n,t){return fi.has(n)&&fi.get(n).get(t)||null},remove(n,t){if(!fi.has(n))return;const e=fi.get(n);e.delete(t),e.size===0&&fi.delete(n)}},gb=1e6,vb=1e3,kc="transitionend",Pm=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),xb=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),Eb=n=>{do n+=Math.floor(Math.random()*gb);while(document.getElementById(n));return n},Sb=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const i=Number.parseFloat(t),s=Number.parseFloat(e);return!i&&!s?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*vb)},Dm=n=>{n.dispatchEvent(new Event(kc))},Zn=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),bi=n=>Zn(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Pm(n)):null,lr=n=>{if(!Zn(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const i=n.closest("summary");if(i&&i.parentNode!==e||i===null)return!1}return t},Ai=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",Lm=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?Lm(n.parentNode):null},ha=()=>{},to=n=>{n.offsetHeight},Im=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,wl=[],Mb=n=>{document.readyState==="loading"?(wl.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of wl)t()}),wl.push(n)):n()},rn=()=>document.documentElement.dir==="rtl",an=n=>{Mb(()=>{const t=Im();if(t){const e=n.NAME,i=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=i,n.jQueryInterface)}})},He=(n,t=[],e=n)=>typeof n=="function"?n(...t):e,Nm=(n,t,e=!0)=>{if(!e){He(n);return}const s=Sb(t)+5;let r=!1;const o=({target:a})=>{a===t&&(r=!0,t.removeEventListener(kc,o),He(n))};t.addEventListener(kc,o),setTimeout(()=>{r||Dm(t)},s)},zu=(n,t,e,i)=>{const s=n.length;let r=n.indexOf(t);return r===-1?!e&&i?n[s-1]:n[0]:(r+=e?1:-1,i&&(r=(r+s)%s),n[Math.max(0,Math.min(r,s-1))])},yb=/[^.]*(?=\..*)\.|.*/,Tb=/\..*/,bb=/::\d+$/,Cl={};let qf=1;const Om={mouseenter:"mouseover",mouseleave:"mouseout"},Ab=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Um(n,t){return t&&`${t}::${qf++}`||n.uidEvent||qf++}function Fm(n){const t=Um(n);return n.uidEvent=t,Cl[t]=Cl[t]||{},Cl[t]}function wb(n,t){return function e(i){return Vu(i,{delegateTarget:n}),e.oneOff&&at.off(n,i.type,t),t.apply(n,[i])}}function Cb(n,t,e){return function i(s){const r=n.querySelectorAll(t);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Vu(s,{delegateTarget:o}),i.oneOff&&at.off(n,s.type,t,e),e.apply(o,[s])}}function Bm(n,t,e=null){return Object.values(n).find(i=>i.callable===t&&i.delegationSelector===e)}function Hm(n,t,e){const i=typeof t=="string",s=i?e:t||e;let r=zm(n);return Ab.has(r)||(r=n),[i,s,r]}function jf(n,t,e,i,s){if(typeof t!="string"||!n)return;let[r,o,a]=Hm(t,e,i);t in Om&&(o=(g=>function(v){if(!v.relatedTarget||v.relatedTarget!==v.delegateTarget&&!v.delegateTarget.contains(v.relatedTarget))return g.call(this,v)})(o));const l=Fm(n),u=l[a]||(l[a]={}),c=Bm(u,o,r?e:null);if(c){c.oneOff=c.oneOff&&s;return}const h=Um(o,t.replace(yb,"")),d=r?Cb(n,e,o):wb(n,o);d.delegationSelector=r?e:null,d.callable=o,d.oneOff=s,d.uidEvent=h,u[h]=d,n.addEventListener(a,d,r)}function Gc(n,t,e,i,s){const r=Bm(t[e],i,s);r&&(n.removeEventListener(e,r,!!s),delete t[e][r.uidEvent])}function Rb(n,t,e,i){const s=t[e]||{};for(const[r,o]of Object.entries(s))r.includes(i)&&Gc(n,t,e,o.callable,o.delegationSelector)}function zm(n){return n=n.replace(Tb,""),Om[n]||n}const at={on(n,t,e,i){jf(n,t,e,i,!1)},one(n,t,e,i){jf(n,t,e,i,!0)},off(n,t,e,i){if(typeof t!="string"||!n)return;const[s,r,o]=Hm(t,e,i),a=o!==t,l=Fm(n),u=l[o]||{},c=t.startsWith(".");if(typeof r<"u"){if(!Object.keys(u).length)return;Gc(n,l,o,r,s?e:null);return}if(c)for(const h of Object.keys(l))Rb(n,l,h,t.slice(1));for(const[h,d]of Object.entries(u)){const p=h.replace(bb,"");(!a||t.includes(p))&&Gc(n,l,o,d.callable,d.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const i=Im(),s=zm(t),r=t!==s;let o=null,a=!0,l=!0,u=!1;r&&i&&(o=i.Event(t,e),i(n).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),u=o.isDefaultPrevented());const c=Vu(new Event(t,{bubbles:a,cancelable:!0}),e);return u&&c.preventDefault(),l&&n.dispatchEvent(c),c.defaultPrevented&&o&&o.preventDefault(),c}};function Vu(n,t={}){for(const[e,i]of Object.entries(t))try{n[e]=i}catch{Object.defineProperty(n,e,{configurable:!0,get(){return i}})}return n}function Kf(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Rl(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Jn={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Rl(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Rl(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of e){let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),t[s]=Kf(n.dataset[i])}return t},getDataAttribute(n,t){return Kf(n.getAttribute(`data-bs-${Rl(t)}`))}};class eo{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=Zn(e)?Jn.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof i=="object"?i:{},...Zn(e)?Jn.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[i,s]of Object.entries(e)){const r=t[i],o=Zn(r)?"element":xb(r);if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`)}}}const Pb="5.3.3";class xn extends eo{constructor(t,e){super(),t=bi(t),t&&(this._element=t,this._config=this._getConfig(e),Al.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Al.remove(this._element,this.constructor.DATA_KEY),at.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){Nm(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Al.get(bi(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return Pb}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Pl=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>Pm(e)).join(","):null},Dt={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let i=n.parentNode.closest(t);for(;i;)e.push(i),i=i.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!Ai(e)&&lr(e))},getSelectorFromElement(n){const t=Pl(n);return t&&Dt.findOne(t)?t:null},getElementFromSelector(n){const t=Pl(n);return t?Dt.findOne(t):null},getMultipleElementsFromSelector(n){const t=Pl(n);return t?Dt.find(t):[]}},Da=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,i=n.NAME;at.on(document,e,`[data-bs-dismiss="${i}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),Ai(this))return;const r=Dt.getElementFromSelector(this)||this.closest(`.${i}`);n.getOrCreateInstance(r)[t]()})},Db="alert",Lb="bs.alert",Vm=`.${Lb}`,Ib=`close${Vm}`,Nb=`closed${Vm}`,Ob="fade",Ub="show";class La extends xn{static get NAME(){return Db}close(){if(at.trigger(this._element,Ib).defaultPrevented)return;this._element.classList.remove(Ub);const e=this._element.classList.contains(Ob);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),at.trigger(this._element,Nb),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=La.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Da(La,"close");an(La);const Fb="button",Bb="bs.button",Hb=`.${Bb}`,zb=".data-api",Vb="active",Zf='[data-bs-toggle="button"]',kb=`click${Hb}${zb}`;class Ia extends xn{static get NAME(){return Fb}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Vb))}static jQueryInterface(t){return this.each(function(){const e=Ia.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}at.on(document,kb,Zf,n=>{n.preventDefault();const t=n.target.closest(Zf);Ia.getOrCreateInstance(t).toggle()});an(Ia);const Gb="swipe",cr=".bs.swipe",Wb=`touchstart${cr}`,$b=`touchmove${cr}`,Xb=`touchend${cr}`,Yb=`pointerdown${cr}`,qb=`pointerup${cr}`,jb="touch",Kb="pen",Zb="pointer-event",Jb=40,Qb={endCallback:null,leftCallback:null,rightCallback:null},tA={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class fa extends eo{constructor(t,e){super(),this._element=t,!(!t||!fa.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Qb}static get DefaultType(){return tA}static get NAME(){return Gb}dispose(){at.off(this._element,cr)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),He(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Jb)return;const e=t/this._deltaX;this._deltaX=0,e&&He(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(at.on(this._element,Yb,t=>this._start(t)),at.on(this._element,qb,t=>this._end(t)),this._element.classList.add(Zb)):(at.on(this._element,Wb,t=>this._start(t)),at.on(this._element,$b,t=>this._move(t)),at.on(this._element,Xb,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Kb||t.pointerType===jb)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const eA="carousel",nA="bs.carousel",Li=`.${nA}`,km=".data-api",iA="ArrowLeft",sA="ArrowRight",rA=500,Er="next",As="prev",Ds="left",Jo="right",oA=`slide${Li}`,Dl=`slid${Li}`,aA=`keydown${Li}`,lA=`mouseenter${Li}`,cA=`mouseleave${Li}`,uA=`dragstart${Li}`,hA=`load${Li}${km}`,fA=`click${Li}${km}`,Gm="carousel",Uo="active",dA="slide",pA="carousel-item-end",mA="carousel-item-start",_A="carousel-item-next",gA="carousel-item-prev",Wm=".active",$m=".carousel-item",vA=Wm+$m,xA=".carousel-item img",EA=".carousel-indicators",SA="[data-bs-slide], [data-bs-slide-to]",MA='[data-bs-ride="carousel"]',yA={[iA]:Jo,[sA]:Ds},TA={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},bA={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class no extends xn{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Dt.findOne(EA,this._element),this._addEventListeners(),this._config.ride===Gm&&this.cycle()}static get Default(){return TA}static get DefaultType(){return bA}static get NAME(){return eA}next(){this._slide(Er)}nextWhenVisible(){!document.hidden&&lr(this._element)&&this.next()}prev(){this._slide(As)}pause(){this._isSliding&&Dm(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){at.one(this._element,Dl,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){at.one(this._element,Dl,()=>this.to(t));return}const i=this._getItemIndex(this._getActive());if(i===t)return;const s=t>i?Er:As;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&at.on(this._element,aA,t=>this._keydown(t)),this._config.pause==="hover"&&(at.on(this._element,lA,()=>this.pause()),at.on(this._element,cA,()=>this._maybeEnableCycle())),this._config.touch&&fa.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of Dt.find(xA,this._element))at.on(i,uA,s=>s.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(Ds)),rightCallback:()=>this._slide(this._directionToOrder(Jo)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),rA+this._config.interval))}};this._swipeHelper=new fa(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=yA[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=Dt.findOne(Wm,this._indicatorsElement);e.classList.remove(Uo),e.removeAttribute("aria-current");const i=Dt.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(Uo),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),s=t===Er,r=e||zu(this._getItems(),i,s,this._config.wrap);if(r===i)return;const o=this._getItemIndex(r),a=p=>at.trigger(this._element,p,{relatedTarget:r,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(a(oA).defaultPrevented||!i||!r)return;const u=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const c=s?mA:pA,h=s?_A:gA;r.classList.add(h),to(r),i.classList.add(c),r.classList.add(c);const d=()=>{r.classList.remove(c,h),r.classList.add(Uo),i.classList.remove(Uo,h,c),this._isSliding=!1,a(Dl)};this._queueCallback(d,i,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(dA)}_getActive(){return Dt.findOne(vA,this._element)}_getItems(){return Dt.find($m,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return rn()?t===Ds?As:Er:t===Ds?Er:As}_orderToDirection(t){return rn()?t===As?Ds:Jo:t===As?Jo:Ds}static jQueryInterface(t){return this.each(function(){const e=no.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}at.on(document,fA,SA,function(n){const t=Dt.getElementFromSelector(this);if(!t||!t.classList.contains(Gm))return;n.preventDefault();const e=no.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");if(i){e.to(i),e._maybeEnableCycle();return}if(Jn.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});at.on(window,hA,()=>{const n=Dt.find(MA);for(const t of n)no.getOrCreateInstance(t)});an(no);const AA="collapse",wA="bs.collapse",io=`.${wA}`,CA=".data-api",RA=`show${io}`,PA=`shown${io}`,DA=`hide${io}`,LA=`hidden${io}`,IA=`click${io}${CA}`,Ll="show",Os="collapse",Fo="collapsing",NA="collapsed",OA=`:scope .${Os} .${Os}`,UA="collapse-horizontal",FA="width",BA="height",HA=".collapse.show, .collapse.collapsing",Wc='[data-bs-toggle="collapse"]',zA={parent:null,toggle:!0},VA={parent:"(null|element)",toggle:"boolean"};class Xr extends xn{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=Dt.find(Wc);for(const s of i){const r=Dt.getSelectorFromElement(s),o=Dt.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return zA}static get DefaultType(){return VA}static get NAME(){return AA}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(HA).filter(a=>a!==this._element).map(a=>Xr.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||at.trigger(this._element,RA).defaultPrevented)return;for(const a of t)a.hide();const i=this._getDimension();this._element.classList.remove(Os),this._element.classList.add(Fo),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Fo),this._element.classList.add(Os,Ll),this._element.style[i]="",at.trigger(this._element,PA)},o=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||at.trigger(this._element,DA).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,to(this._element),this._element.classList.add(Fo),this._element.classList.remove(Os,Ll);for(const s of this._triggerArray){const r=Dt.getElementFromSelector(s);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Fo),this._element.classList.add(Os),at.trigger(this._element,LA)};this._element.style[e]="",this._queueCallback(i,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Ll)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=bi(t.parent),t}_getDimension(){return this._element.classList.contains(UA)?FA:BA}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Wc);for(const e of t){const i=Dt.getElementFromSelector(e);i&&this._addAriaAndCollapsedClass([e],this._isShown(i))}}_getFirstLevelChildren(t){const e=Dt.find(OA,this._config.parent);return Dt.find(t,this._config.parent).filter(i=>!e.includes(i))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle(NA,!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const i=Xr.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t]()}})}}at.on(document,IA,Wc,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of Dt.getMultipleElementsFromSelector(this))Xr.getOrCreateInstance(t,{toggle:!1}).toggle()});an(Xr);const Jf="dropdown",kA="bs.dropdown",as=`.${kA}`,ku=".data-api",GA="Escape",Qf="Tab",WA="ArrowUp",td="ArrowDown",$A=2,XA=`hide${as}`,YA=`hidden${as}`,qA=`show${as}`,jA=`shown${as}`,Xm=`click${as}${ku}`,Ym=`keydown${as}${ku}`,KA=`keyup${as}${ku}`,Ls="show",ZA="dropup",JA="dropend",QA="dropstart",tw="dropup-center",ew="dropdown-center",ji='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',nw=`${ji}.${Ls}`,Qo=".dropdown-menu",iw=".navbar",sw=".navbar-nav",rw=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",ow=rn()?"top-end":"top-start",aw=rn()?"top-start":"top-end",lw=rn()?"bottom-end":"bottom-start",cw=rn()?"bottom-start":"bottom-end",uw=rn()?"left-start":"right-start",hw=rn()?"right-start":"left-start",fw="top",dw="bottom",pw={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},mw={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Pn extends xn{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=Dt.next(this._element,Qo)[0]||Dt.prev(this._element,Qo)[0]||Dt.findOne(Qo,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return pw}static get DefaultType(){return mw}static get NAME(){return Jf}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ai(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!at.trigger(this._element,qA,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(sw))for(const i of[].concat(...document.body.children))at.on(i,"mouseover",ha);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ls),this._element.classList.add(Ls),at.trigger(this._element,jA,t)}}hide(){if(Ai(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!at.trigger(this._element,XA,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))at.off(i,"mouseover",ha);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ls),this._element.classList.remove(Ls),this._element.setAttribute("aria-expanded","false"),Jn.removeDataAttribute(this._menu,"popper"),at.trigger(this._element,YA,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Zn(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Jf.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Rm>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:Zn(this._config.reference)?t=bi(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Hu(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ls)}_getPlacement(){const t=this._parent;if(t.classList.contains(JA))return uw;if(t.classList.contains(QA))return hw;if(t.classList.contains(tw))return fw;if(t.classList.contains(ew))return dw;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(ZA)?e?aw:ow:e?cw:lw}_detectNavbar(){return this._element.closest(iw)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Jn.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...He(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=Dt.find(rw,this._menu).filter(s=>lr(s));i.length&&zu(i,e,t===td,!i.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=Pn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===$A||t.type==="keyup"&&t.key!==Qf)return;const e=Dt.find(nw);for(const i of e){const s=Pn.getInstance(i);if(!s||s._config.autoClose===!1)continue;const r=t.composedPath(),o=r.includes(s._menu);if(r.includes(s._element)||s._config.autoClose==="inside"&&!o||s._config.autoClose==="outside"&&o||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===Qf||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:s._element};t.type==="click"&&(a.clickEvent=t),s._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i=t.key===GA,s=[WA,td].includes(t.key);if(!s&&!i||e&&!i)return;t.preventDefault();const r=this.matches(ji)?this:Dt.prev(this,ji)[0]||Dt.next(this,ji)[0]||Dt.findOne(ji,t.delegateTarget.parentNode),o=Pn.getOrCreateInstance(r);if(s){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),r.focus())}}at.on(document,Ym,ji,Pn.dataApiKeydownHandler);at.on(document,Ym,Qo,Pn.dataApiKeydownHandler);at.on(document,Xm,Pn.clearMenus);at.on(document,KA,Pn.clearMenus);at.on(document,Xm,ji,function(n){n.preventDefault(),Pn.getOrCreateInstance(this).toggle()});an(Pn);const qm="backdrop",_w="fade",ed="show",nd=`mousedown.bs.${qm}`,gw={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},vw={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class jm extends eo{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return gw}static get DefaultType(){return vw}static get NAME(){return qm}show(t){if(!this._config.isVisible){He(t);return}this._append();const e=this._getElement();this._config.isAnimated&&to(e),e.classList.add(ed),this._emulateAnimation(()=>{He(t)})}hide(t){if(!this._config.isVisible){He(t);return}this._getElement().classList.remove(ed),this._emulateAnimation(()=>{this.dispose(),He(t)})}dispose(){this._isAppended&&(at.off(this._element,nd),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(_w),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=bi(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),at.on(t,nd,()=>{He(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Nm(t,this._getElement(),this._config.isAnimated)}}const xw="focustrap",Ew="bs.focustrap",da=`.${Ew}`,Sw=`focusin${da}`,Mw=`keydown.tab${da}`,yw="Tab",Tw="forward",id="backward",bw={autofocus:!0,trapElement:null},Aw={autofocus:"boolean",trapElement:"element"};class Km extends eo{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return bw}static get DefaultType(){return Aw}static get NAME(){return xw}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),at.off(document,da),at.on(document,Sw,t=>this._handleFocusin(t)),at.on(document,Mw,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,at.off(document,da))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=Dt.focusableChildren(e);i.length===0?e.focus():this._lastTabNavDirection===id?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===yw&&(this._lastTabNavDirection=t.shiftKey?id:Tw)}}const sd=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",rd=".sticky-top",Bo="padding-right",od="margin-right";class $c{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Bo,e=>e+t),this._setElementAttributes(sd,Bo,e=>e+t),this._setElementAttributes(rd,od,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Bo),this._resetElementAttributes(sd,Bo),this._resetElementAttributes(rd,od)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+s)return;this._saveInitialAttribute(o,e);const a=window.getComputedStyle(o).getPropertyValue(e);o.style.setProperty(e,`${i(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,r)}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&Jn.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=s=>{const r=Jn.getDataAttribute(s,e);if(r===null){s.style.removeProperty(e);return}Jn.removeDataAttribute(s,e),s.style.setProperty(e,r)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){if(Zn(t)){e(t);return}for(const i of Dt.find(t,this._element))e(i)}}const ww="modal",Cw="bs.modal",on=`.${Cw}`,Rw=".data-api",Pw="Escape",Dw=`hide${on}`,Lw=`hidePrevented${on}`,Zm=`hidden${on}`,Jm=`show${on}`,Iw=`shown${on}`,Nw=`resize${on}`,Ow=`click.dismiss${on}`,Uw=`mousedown.dismiss${on}`,Fw=`keydown.dismiss${on}`,Bw=`click${on}${Rw}`,ad="modal-open",Hw="fade",ld="show",Il="modal-static",zw=".modal.show",Vw=".modal-dialog",kw=".modal-body",Gw='[data-bs-toggle="modal"]',Ww={backdrop:!0,focus:!0,keyboard:!0},$w={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class nr extends xn{constructor(t,e){super(t,e),this._dialog=Dt.findOne(Vw,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new $c,this._addEventListeners()}static get Default(){return Ww}static get DefaultType(){return $w}static get NAME(){return ww}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||at.trigger(this._element,Jm,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ad),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||at.trigger(this._element,Dw).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ld),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){at.off(window,on),at.off(this._dialog,on),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new jm({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Km({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=Dt.findOne(kw,this._dialog);e&&(e.scrollTop=0),to(this._element),this._element.classList.add(ld);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,at.trigger(this._element,Iw,{relatedTarget:t})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){at.on(this._element,Fw,t=>{if(t.key===Pw){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),at.on(window,Nw,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),at.on(this._element,Uw,t=>{at.one(this._element,Ow,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ad),this._resetAdjustments(),this._scrollBar.reset(),at.trigger(this._element,Zm)})}_isAnimated(){return this._element.classList.contains(Hw)}_triggerBackdropTransition(){if(at.trigger(this._element,Lw).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;i==="hidden"||this._element.classList.contains(Il)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Il),this._queueCallback(()=>{this._element.classList.remove(Il),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const s=rn()?"paddingLeft":"paddingRight";this._element.style[s]=`${e}px`}if(!i&&t){const s=rn()?"paddingRight":"paddingLeft";this._element.style[s]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const i=nr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t](e)}})}}at.on(document,Bw,Gw,function(n){const t=Dt.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),at.one(t,Jm,s=>{s.defaultPrevented||at.one(t,Zm,()=>{lr(this)&&this.focus()})});const e=Dt.findOne(zw);e&&nr.getInstance(e).hide(),nr.getOrCreateInstance(t).toggle(this)});Da(nr);an(nr);const Xw="offcanvas",Yw="bs.offcanvas",ii=`.${Yw}`,Qm=".data-api",qw=`load${ii}${Qm}`,jw="Escape",cd="show",ud="showing",hd="hiding",Kw="offcanvas-backdrop",t_=".offcanvas.show",Zw=`show${ii}`,Jw=`shown${ii}`,Qw=`hide${ii}`,fd=`hidePrevented${ii}`,e_=`hidden${ii}`,tC=`resize${ii}`,eC=`click${ii}${Qm}`,nC=`keydown.dismiss${ii}`,iC='[data-bs-toggle="offcanvas"]',sC={backdrop:!0,keyboard:!0,scroll:!1},rC={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class wi extends xn{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return sC}static get DefaultType(){return rC}static get NAME(){return Xw}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||at.trigger(this._element,Zw,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new $c().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(ud);const i=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(cd),this._element.classList.remove(ud),at.trigger(this._element,Jw,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown||at.trigger(this._element,Qw).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(hd),this._backdrop.hide();const e=()=>{this._element.classList.remove(cd,hd),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new $c().reset(),at.trigger(this._element,e_)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){at.trigger(this._element,fd);return}this.hide()},e=!!this._config.backdrop;return new jm({className:Kw,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Km({trapElement:this._element})}_addEventListeners(){at.on(this._element,nC,t=>{if(t.key===jw){if(this._config.keyboard){this.hide();return}at.trigger(this._element,fd)}})}static jQueryInterface(t){return this.each(function(){const e=wi.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}at.on(document,eC,iC,function(n){const t=Dt.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Ai(this))return;at.one(t,e_,()=>{lr(this)&&this.focus()});const e=Dt.findOne(t_);e&&e!==t&&wi.getInstance(e).hide(),wi.getOrCreateInstance(t).toggle(this)});at.on(window,qw,()=>{for(const n of Dt.find(t_))wi.getOrCreateInstance(n).show()});at.on(window,tC,()=>{for(const n of Dt.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&wi.getOrCreateInstance(n).hide()});Da(wi);an(wi);const oC=/^aria-[\w-]*$/i,n_={"*":["class","dir","id","lang","role",oC],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},aC=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),lC=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,cC=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?aC.has(e)?!!lC.test(n.nodeValue):!0:t.filter(i=>i instanceof RegExp).some(i=>i.test(e))};function uC(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const s=new window.DOMParser().parseFromString(n,"text/html"),r=[].concat(...s.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),u=[].concat(t["*"]||[],t[a]||[]);for(const c of l)cC(c,u)||o.removeAttribute(c.nodeName)}return s.body.innerHTML}const hC="TemplateFactory",fC={allowList:n_,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},dC={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},pC={entry:"(string|element|function|null)",selector:"(string|element)"};class mC extends eo{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return fC}static get DefaultType(){return dC}static get NAME(){return hC}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,r]of Object.entries(this._config.content))this._setContent(t,r,s);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},pC)}_setContent(t,e,i){const s=Dt.findOne(i,t);if(s){if(e=this._resolvePossibleFunction(e),!e){s.remove();return}if(Zn(e)){this._putElementInTemplate(bi(e),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(e);return}s.textContent=e}}_maybeSanitize(t){return this._config.sanitize?uC(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return He(t,[this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const _C="tooltip",gC=new Set(["sanitize","allowList","sanitizeFn"]),Nl="fade",vC="modal",Ho="show",xC=".tooltip-inner",dd=`.${vC}`,pd="hide.bs.modal",Sr="hover",Ol="focus",EC="click",SC="manual",MC="hide",yC="hidden",TC="show",bC="shown",AC="inserted",wC="click",CC="focusin",RC="focusout",PC="mouseenter",DC="mouseleave",LC={AUTO:"auto",TOP:"top",RIGHT:rn()?"left":"right",BOTTOM:"bottom",LEFT:rn()?"right":"left"},IC={allowList:n_,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},NC={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ur extends xn{constructor(t,e){if(typeof Rm>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return IC}static get DefaultType(){return NC}static get NAME(){return _C}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),at.off(this._element.closest(dd),pd,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=at.trigger(this._element,this.constructor.eventName(TC)),i=(Lm(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!i)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(s),at.trigger(this._element,this.constructor.eventName(AC))),this._popper=this._createPopper(s),s.classList.add(Ho),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))at.on(a,"mouseover",ha);const o=()=>{at.trigger(this._element,this.constructor.eventName(bC)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||at.trigger(this._element,this.constructor.eventName(MC)).defaultPrevented)return;if(this._getTipElement().classList.remove(Ho),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))at.off(s,"mouseover",ha);this._activeTrigger[EC]=!1,this._activeTrigger[Ol]=!1,this._activeTrigger[Sr]=!1,this._isHovered=null;const i=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),at.trigger(this._element,this.constructor.eventName(yC)))};this._queueCallback(i,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Nl,Ho),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=Eb(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Nl),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new mC({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[xC]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Nl)}_isShown(){return this.tip&&this.tip.classList.contains(Ho)}_createPopper(t){const e=He(this._config.placement,[this,t,this._element]),i=LC[e.toUpperCase()];return Hu(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return He(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:i=>{this._getTipElement().setAttribute("data-popper-placement",i.state.placement)}}]};return{...e,...He(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")at.on(this._element,this.constructor.eventName(wC),this._config.selector,i=>{this._initializeOnDelegatedTarget(i).toggle()});else if(e!==SC){const i=e===Sr?this.constructor.eventName(PC):this.constructor.eventName(CC),s=e===Sr?this.constructor.eventName(DC):this.constructor.eventName(RC);at.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?Ol:Sr]=!0,o._enter()}),at.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?Ol:Sr]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},at.on(this._element.closest(dd),pd,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Jn.getDataAttributes(this._element);for(const i of Object.keys(e))gC.has(i)&&delete e[i];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:bi(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=ur.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}an(ur);const OC="popover",UC=".popover-header",FC=".popover-body",BC={...ur.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},HC={...ur.DefaultType,content:"(null|string|element|function)"};class Gu extends ur{static get Default(){return BC}static get DefaultType(){return HC}static get NAME(){return OC}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[UC]:this._getTitle(),[FC]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Gu.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}an(Gu);const zC="scrollspy",VC="bs.scrollspy",Wu=`.${VC}`,kC=".data-api",GC=`activate${Wu}`,md=`click${Wu}`,WC=`load${Wu}${kC}`,$C="dropdown-item",ws="active",XC='[data-bs-spy="scroll"]',Ul="[href]",YC=".nav, .list-group",_d=".nav-link",qC=".nav-item",jC=".list-group-item",KC=`${_d}, ${qC} > ${_d}, ${jC}`,ZC=".dropdown",JC=".dropdown-toggle",QC={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},tR={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Na extends xn{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return QC}static get DefaultType(){return tR}static get NAME(){return zC}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=bi(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(at.off(this._config.target,md),at.on(this._config.target,md,Ul,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:s,behavior:"smooth"});return}i.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=o=>this._targetLinks.get(`#${o.target.id}`),i=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(e(o))},s=(this._rootElement||document.documentElement).scrollTop,r=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(i(o),!s)return;continue}!r&&!a&&i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Dt.find(Ul,this._config.target);for(const e of t){if(!e.hash||Ai(e))continue;const i=Dt.findOne(decodeURI(e.hash),this._element);lr(i)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,i))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(ws),this._activateParents(t),at.trigger(this._element,GC,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains($C)){Dt.findOne(JC,t.closest(ZC)).classList.add(ws);return}for(const e of Dt.parents(t,YC))for(const i of Dt.prev(e,KC))i.classList.add(ws)}_clearActiveClass(t){t.classList.remove(ws);const e=Dt.find(`${Ul}.${ws}`,t);for(const i of e)i.classList.remove(ws)}static jQueryInterface(t){return this.each(function(){const e=Na.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}at.on(window,WC,()=>{for(const n of Dt.find(XC))Na.getOrCreateInstance(n)});an(Na);const eR="tab",nR="bs.tab",ls=`.${nR}`,iR=`hide${ls}`,sR=`hidden${ls}`,rR=`show${ls}`,oR=`shown${ls}`,aR=`click${ls}`,lR=`keydown${ls}`,cR=`load${ls}`,uR="ArrowLeft",gd="ArrowRight",hR="ArrowUp",vd="ArrowDown",Fl="Home",xd="End",Ki="active",Ed="fade",Bl="show",fR="dropdown",i_=".dropdown-toggle",dR=".dropdown-menu",Hl=`:not(${i_})`,pR='.list-group, .nav, [role="tablist"]',mR=".nav-item, .list-group-item",_R=`.nav-link${Hl}, .list-group-item${Hl}, [role="tab"]${Hl}`,s_='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',zl=`${_R}, ${s_}`,gR=`.${Ki}[data-bs-toggle="tab"], .${Ki}[data-bs-toggle="pill"], .${Ki}[data-bs-toggle="list"]`;class ir extends xn{constructor(t){super(t),this._parent=this._element.closest(pR),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),at.on(this._element,lR,e=>this._keydown(e)))}static get NAME(){return eR}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?at.trigger(e,iR,{relatedTarget:t}):null;at.trigger(t,rR,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(Ki),this._activate(Dt.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Bl);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),at.trigger(t,oR,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(Ed))}_deactivate(t,e){if(!t)return;t.classList.remove(Ki),t.blur(),this._deactivate(Dt.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Bl);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),at.trigger(t,sR,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(Ed))}_keydown(t){if(![uR,gd,hR,vd,Fl,xd].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(s=>!Ai(s));let i;if([Fl,xd].includes(t.key))i=e[t.key===Fl?0:e.length-1];else{const s=[gd,vd].includes(t.key);i=zu(e,t.target,s,!0)}i&&(i.focus({preventScroll:!0}),ir.getOrCreateInstance(i).show())}_getChildren(){return Dt.find(zl,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const i of e)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=Dt.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains(fR))return;const s=(r,o)=>{const a=Dt.findOne(r,i);a&&a.classList.toggle(o,e)};s(i_,Ki),s(dR,Bl),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(Ki)}_getInnerElement(t){return t.matches(zl)?t:Dt.findOne(zl,t)}_getOuterElement(t){return t.closest(mR)||t}static jQueryInterface(t){return this.each(function(){const e=ir.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}at.on(document,aR,s_,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!Ai(this)&&ir.getOrCreateInstance(this).show()});at.on(window,cR,()=>{for(const n of Dt.find(gR))ir.getOrCreateInstance(n)});an(ir);const vR="toast",xR="bs.toast",Ii=`.${xR}`,ER=`mouseover${Ii}`,SR=`mouseout${Ii}`,MR=`focusin${Ii}`,yR=`focusout${Ii}`,TR=`hide${Ii}`,bR=`hidden${Ii}`,AR=`show${Ii}`,wR=`shown${Ii}`,CR="fade",Sd="hide",zo="show",Vo="showing",RR={animation:"boolean",autohide:"boolean",delay:"number"},PR={animation:!0,autohide:!0,delay:5e3};class Oa extends xn{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return PR}static get DefaultType(){return RR}static get NAME(){return vR}show(){if(at.trigger(this._element,AR).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(CR);const e=()=>{this._element.classList.remove(Vo),at.trigger(this._element,wR),this._maybeScheduleHide()};this._element.classList.remove(Sd),to(this._element),this._element.classList.add(zo,Vo),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||at.trigger(this._element,TR).defaultPrevented)return;const e=()=>{this._element.classList.add(Sd),this._element.classList.remove(Vo,zo),at.trigger(this._element,bR)};this._element.classList.add(Vo),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(zo),super.dispose()}isShown(){return this._element.classList.contains(zo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){at.on(this._element,ER,t=>this._onInteraction(t,!0)),at.on(this._element,SR,t=>this._onInteraction(t,!1)),at.on(this._element,MR,t=>this._onInteraction(t,!0)),at.on(this._element,yR,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Oa.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Da(Oa);an(Oa);wv(PT).mount("#app");

"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{5276:function(e,t,n){n.d(t,{N8:function(){return iI},U2:function(){return iv},iH:function(){return im},iU:function(){return iy}});var i,s,r,o,l,a,h,u,c=n(5816),d=n(8463),p=n(4444),$=n(3333),f=n(3454);let g="@firebase/database",m="0.13.6",y="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,p.Pz)(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,p.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,p.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let w=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new v(t)}}catch(n){}return new C},T=w("localStorage"),I=w("sessionStorage"),k=new $.Yd("@firebase/database"),b,P=(b=1,function(){return b++}),E=function(e){let t=(0,p.dS)(e),n=new p.gQ;n.update(t);let i=n.digest();return p.US.encodeByteArray(i)},N=function(...e){let t="";for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=N.apply(null,i):"object"==typeof i?t+=(0,p.Pz)(i):t+=i,t+=" "}return t},x=null,S=!0,R=function(e,t){(0,p.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(k.logLevel=$.in.VERBOSE,x=k.log.bind(k),t&&I.set("logging_enabled",!0)):"function"==typeof e?x=e:(x=null,I.remove("logging_enabled"))},_=function(...e){if(!0===S&&(S=!1,null===x&&!0===I.get("logging_enabled")&&R(!0)),x){let t=N.apply(null,e);x(t)}},D=function(e){return function(...t){_(e,...t)}},F=function(...e){let t="FIREBASE INTERNAL ERROR: "+N(...e);k.error(t)},q=function(...e){let t=`FIREBASE FATAL ERROR: ${N(...e)}`;throw k.error(t),Error(t)},L=function(...e){let t="FIREBASE WARNING: "+N(...e);k.warn(t)},O=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&L("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},A=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},M=function(e){if((0,p.Yr)()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},W="[MIN_NAME]",U="[MAX_NAME]",z=function(e,t){if(e===t)return 0;if(e===W||t===U)return -1;if(t===W||e===U)return 1;{let n=Q(e),i=Q(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Y=function(e,t){return e===t?0:e<t?-1:1},H=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+(0,p.Pz)(t))},V=function(e){if("object"!=typeof e||null===e)return(0,p.Pz)(e);let t=[];for(let n in e)t.push(n);t.sort();let i="{";for(let s=0;s<t.length;s++)0!==s&&(i+=","),i+=(0,p.Pz)(t[s]),i+=":",i+=V(e[t[s]]);return i+"}"},j=function(e,t){let n=e.length;if(n<=t)return[e];let i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function B(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}let K=function(e){(0,p.hu)(!A(e),"Invalid JSON number");let t,n,i,s,r;0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(s=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,i=Math.round(e*Math.pow(2,52-s)-4503599627370496)):(n=0,i=Math.round(e/5e-324)));let o=[];for(r=52;r;r-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(r=11;r;r-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let l=o.join(""),a="";for(r=0;r<64;r+=8){let h=parseInt(l.substr(r,8),2).toString(16);1===h.length&&(h="0"+h),a+=h}return a.toLowerCase()},G=RegExp("^-?(0*)\\d{1,10}$"),Q=function(e){if(G.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},X=function(e){try{e()}catch(t){setTimeout(()=>{let e=t.stack||"";throw L("Exception was thrown by user callback.",e),t},Math.floor(0))}},J=function(){let e="object"==typeof window&&window.navigator&&window.navigator.userAgent||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Z=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ee{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){L(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class et{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(_("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',L(e)}}class en{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}en.OWNER="owner";let ei=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,es="websocket",er="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eo{constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=T.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&T.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function el(e,t,n){var i;(0,p.hu)("string"==typeof t,"typeof type must == string"),(0,p.hu)("object"==typeof n,"typeof params must == object");let s;if(t===es)s=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===er)s=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);((i=e).host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let r=[];return B(n,(e,t)=>{r.push(e+"="+t)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ea{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,p.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,p.p$)(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eh={},eu={};function ec(e){let t=e.toString();return eh[t]||(eh[t]=new ea),eh[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ed{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<n.length;++i)n[i]&&X(()=>{this.onMessage_(n[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let e8="start";class ep{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=D(e),this.stats_=ec(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),el(t,er,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ed(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),M(()=>{if(this.isClosed_)return;this.scriptTagHolder=new e$((...e)=>{let[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===e8)this.id=n,this.password=i;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[e8]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&ei.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ep.forceAllow_=!0}static forceDisallow(){ep.forceDisallow_=!0}static isAvailable(){return!(0,p.Yr)()&&(!!ep.forceAllow_||!ep.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=(0,p.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=(0,p.h$)(t),i=j(n,1840);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,p.Yr)())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=(0,p.Pz)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class e${constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,p.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=P(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=e$.createIFrame_();let s="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){let r=document.domain;s='<script>document.domain="'+r+'";</script>'}let o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){_("frame writing exception"),l.stack&&_(l.stack),_(l)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{let t=e.contentWindow.document;t||_("No IE domain setting required")}catch(n){let i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){let s=this.pendingSegs[0];if(s.d.length+30+n.length<=1870){let r=this.pendingSegs.shift();n=n+"&seg"+i+"="+r.seg+"&ts"+i+"="+r.ts+"&d"+i+"="+r.d,i++}else break}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){(0,p.Yr)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{_("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(i){}},Math.floor(1))}}let ef=null;"undefined"!=typeof MozWebSocket?ef=MozWebSocket:"undefined"!=typeof WebSocket&&(ef=WebSocket);class eg{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=D(this.connId),this.stats_=ec(t),this.connURL=eg.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){let r={};return r.v="5",!(0,p.Yr)()&&"undefined"!=typeof location&&location.hostname&&ei.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),el(e,es,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,T.set("previous_websocket_failure",!0);try{let n;if((0,p.Yr)()){let i=this.nodeAdmin?"AdminNode":"Node";n={headers:{"User-Agent":`Firebase/5/${y}/${f.platform}/${i}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(n.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);let s=f.env,r=0===this.connURL.indexOf("wss://")?s.HTTPS_PROXY||s.https_proxy:s.HTTP_PROXY||s.http_proxy;r&&(n.proxy={origin:r})}this.mySock=new ef(this.connURL,[],n)}catch(o){this.log_("Error instantiating WebSocket.");let l=o.message||o.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){eg.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==ef&&!eg.forceDisallow_}static previouslyFailed(){return T.isInMemoryStorage||!0===T.get("previous_websocket_failure")}markConnectionHealthy(){T.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let t=this.frames.join("");this.frames=null;let n=(0,p.cI)(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,p.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();let t=(0,p.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=j(t,16384);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}eg.responsesRequiredToBeHealthy=2,eg.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class em{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ep,eg]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=eg&&eg.isAvailable(),n=t&&!eg.previouslyFailed();if(e.webSocketOnly&&(t||L("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[eg];else{let i=this.transports_=[];for(let s of em.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);em.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}em.globalTransportInitialized_=!1;class ey{constructor(e,t,n,i,s,r,o,l,a,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=l,this.onKill_=a,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=D("c:"+this.id+":"),this.transportManager_=new em(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Z(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=H("t",e),n=H("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=H("t",e),n=H("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=H("t",e);if("d"in e){let n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?F("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):F("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&L("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Z(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Z(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(T.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ev{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eC{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,p.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let i=0;i<n.length;i++)n[i].callback.apply(n[i].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);let i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context)){i.splice(s,1);return}}validateEventType_(e){(0,p.hu)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ew extends eC{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,p.uI)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ew}getInitialEvent(e){return(0,p.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class eT{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let n=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[n]=this.pieces_[i],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function eI(){return new eT("")}function ek(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function eb(e){return e.pieces_.length-e.pieceNum_}function eP(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new eT(e.pieces_,t)}function eE(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function eN(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ex(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new eT(t,0)}function eS(e,t){let n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof eT)for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);else{let r=t.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&n.push(r[o])}return new eT(n,0)}function eR(e){return e.pieceNum_>=e.pieces_.length}function e_(e,t){let n=ek(e),i=ek(t);if(null===n)return t;if(n===i)return e_(eP(e),eP(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function eD(e,t){if(eb(e)!==eb(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function eF(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(eb(e)>eb(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class eq{constructor(e,t){this.errorPrefix_=t,this.parts_=eN(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,p.ug)(this.parts_[n]);eL(this)}}function eL(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+eO(e))}function eO(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eA extends eC{constructor(){super(["visible"]);let e,t;"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new eA}getInitialEvent(e){return(0,p.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}class eM extends ev{constructor(e,t,n,i,s,r,o,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=l,this.id=eM.nextPersistentConnectionId_++,this.log_=D("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,p.Yr)())throw Error("Auth override specified in options, but not supported on non Node.js platforms");eA.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ew.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_((0,p.Pz)(s)),(0,p.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();let t=new p.BH,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete(e){let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();let s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,p.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,p.hu)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");let o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);let s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,s=>{let r=s.d,o=s.s;eM.warnOnListenWarnings_(r,t);let l=this.listens.get(n)&&this.listens.get(n).get(i);l===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,p.r3)(e,"w")){let n=(0,p.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();L(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){let t=e&&40===e.length;(t||(0,p.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=(0,p.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,p.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");let s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);let s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){let s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();let r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{let t=e.s;if("ok"!==t){let n=e.d;this.log_("reportStats","Error sending stats: "+n)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,p.Pz)(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):F("Unrecognized action received from server: "+(0,p.Pz)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,p.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){let e=new Date().getTime()-this.lastConnectionEstablishedTime_;e>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();let t=new Date().getTime()-this.lastConnectionAttemptTime_,n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+eM.nextConnectionId_++,s=this.lastSessionId,r=!1,o=null,l=function(){o?o.close():(r=!0,n())},a=function(e){(0,p.hu)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:l,sendRequest:a};let h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[u,c]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);r?_("getToken() completed but was canceled"):(_("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=c&&c.token,o=new ey(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{L(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},s))}catch(d){this.log_("Failed to get token: "+d),r||(this.repoInfo_.nodeAdmin&&L(d),l())}}}interrupt(e){_("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,p.xb)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>V(e)).join("$"):"default";let i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){let n=new eT(e).toString(),i;if(this.listens.has(n)){let s=this.listens.get(n);i=s.get(t),s.delete(t),0===s.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){_("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){_("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let n=0;n<this.outstandingPuts_.length;n++)this.outstandingPuts_[n]&&this.sendPut_(n);for(;this.onDisconnectRequestQueue_.length;){let i=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(i.action,i.pathString,i.data,i.onComplete)}for(let s=0;s<this.outstandingGets_.length;s++)this.outstandingGets_[s]&&this.sendGet_(s)}sendConnectStats_(){let e={},t="js";(0,p.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+y.replace(/\./g,"-")]=1,(0,p.uI)()?e["framework.cordova"]=1:(0,p.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=ew.getInstance().currentlyOnline();return(0,p.xb)(this.interruptReasons_)&&e}}eM.nextPersistentConnectionId_=0,eM.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eW{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new eW(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eU{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new eW(W,e),i=new eW(W,t);return 0!==this.compare(n,i)}minPost(){return eW.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ez;class eY extends eU{static get __EMPTY_NODE(){return ez}static set __EMPTY_NODE(e){ez=e}compare(e,t){return z(e.name,t.name)}isDefinedOn(e){throw(0,p.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return eW.MIN}maxPost(){return new eW(U,ez)}makePost(e,t){return(0,p.hu)("string"==typeof e,"KeyIndex indexValue must always be a string."),new eW(e,ez)}toString(){return".key"}}let eH=new eY;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eV{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else if(0===r){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_.pop(),t;if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ej{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:ej.RED,this.left=null!=i?i:e0.EMPTY_NODE,this.right=null!=s?s:e0.EMPTY_NODE}copy(e,t,n,i,s){return new ej(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,s=n(e,i.key);return(i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return e0.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return e0.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,ej.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,ej.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}ej.RED=!0,ej.BLACK=!1;class e0{constructor(e,t=e0.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new e0(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ej.BLACK,null,null))}remove(e){return new e0(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ej.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(i)return i.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new eV(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new eV(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new eV(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new eV(this.root_,null,this.comparator_,!0,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e1(e,t){return z(e.name,t.name)}function eB(e,t){return z(e,t)}e0.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new ej(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eK,e2=function(e){return"number"==typeof e?"number:"+K(e):"string:"+e},eG=function(e){if(e.isLeafNode()){let t=e.val();(0,p.hu)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,p.r3)(t,".sv"),"Priority must be a string or number.")}else(0,p.hu)(e===eK||e.isEmpty(),"priority of unexpected type.");(0,p.hu)(e===eK||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},e9;class eQ{constructor(e,t=eQ.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,p.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),eG(this.priorityNode_)}static set __childrenNodeConstructor(e){e9=e}static get __childrenNodeConstructor(){return e9}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new eQ(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:eQ.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return eR(e)?this:".priority"===ek(e)?this.priorityNode_:eQ.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:eQ.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=ek(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,p.hu)(".priority"!==n||1===eb(e),".priority must be the last token in a path"),this.updateImmediateChild(n,eQ.__childrenNodeConstructor.EMPTY_NODE.updateChild(eP(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+e2(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=K(this.value_):e+=this.value_,this.lazyHash_=E(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===eQ.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof eQ.__childrenNodeConstructor?-1:((0,p.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,i=eQ.VALUE_TYPE_ORDER.indexOf(t),s=eQ.VALUE_TYPE_ORDER.indexOf(n);return((0,p.hu)(i>=0,"Unknown leaf type: "+t),(0,p.hu)(s>=0,"Unknown leaf type: "+n),i!==s)?s-i:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(!e.isLeafNode())return!1;{let t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}}}eQ.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let e3,e4,e6=new class extends eU{compare(e,t){let n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?z(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return eW.MIN}maxPost(){return new eW(U,new eQ("[PRIORITY-POST]",e4))}makePost(e,t){let n=e3(e);return new eW(t,new eQ("[PRIORITY-POST]",n))}toString(){return".priority"}};class e5{constructor(e){var t;this.count=parseInt(Math.log(e+1)/Math.log(2),10),this.current_=this.count-1;let n=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&n}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}let e7=function(e,t,n,i){e.sort(t);let s=function(t,i){let r=i-t,o,l;if(0===r)return null;if(1===r)return o=e[t],l=n?n(o):o,new ej(l,o.node,ej.BLACK,null,null);{let a=parseInt(r/2,10)+t,h=s(t,a),u=s(a+1,i);return o=e[a],l=n?n(o):o,new ej(l,o.node,ej.BLACK,h,u)}},r=new e5(e.length),o=function(t){let i=null,r=null,o=e.length,l=function(t,i){let r=o-t,l=o;o-=t;let h=s(r+1,l),u=e[r],c=n?n(u):u;a(new ej(c,u.node,i,null,h))},a=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let h=0;h<t.count;++h){let u=t.nextBitIsOne(),c=Math.pow(2,t.count-(h+1));u?l(c,ej.BLACK):(l(c,ej.BLACK),l(c,ej.RED))}return r}(r);return new e0(i||t,o)},eX,eJ={};class eZ{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,p.hu)(eJ&&e6,"ChildrenNode.ts has not been loaded"),eX=eX||new eZ({".priority":eJ},{".priority":e6})}get(e){let t=(0,p.DV)(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof e0?t:null}hasIndex(e){return(0,p.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,p.hu)(e!==eH,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let n=[],i=!1,s=t.getIterator(eW.Wrap),r=s.getNext();for(;r;)i=i||e.isDefinedOn(r.node),n.push(r),r=s.getNext();let o;o=i?e7(n,e.getCompare()):eJ;let l=e.toString(),a=Object.assign({},this.indexSet_);a[l]=e;let h=Object.assign({},this.indexes_);return h[l]=o,new eZ(h,a)}addToIndexes(e,t){let n=(0,p.UI)(this.indexes_,(n,i)=>{let s=(0,p.DV)(this.indexSet_,i);if((0,p.hu)(s,"Missing index implementation for "+i),n===eJ){if(!s.isDefinedOn(e.node))return eJ;{let r=[],o=t.getIterator(eW.Wrap),l=o.getNext();for(;l;)l.name!==e.name&&r.push(l),l=o.getNext();return r.push(e),e7(r,s.getCompare())}}{let a=t.get(e.name),h=n;return a&&(h=h.remove(new eW(e.name,a))),h.insert(e,e.node)}});return new eZ(n,this.indexSet_)}removeFromIndexes(e,t){let n=(0,p.UI)(this.indexes_,n=>{if(n===eJ)return n;{let i=t.get(e.name);return i?n.remove(new eW(e.name,i)):n}});return new eZ(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let te;class tt{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&eG(this.priorityNode_),this.children_.isEmpty()&&(0,p.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return te||(te=new tt(new e0(eB),null,eZ.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||te}updatePriority(e){return this.children_.isEmpty()?this:new tt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?te:t}}getChild(e){let t=ek(e);return null===t?this:this.getImmediateChild(t).getChild(eP(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,p.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n=new eW(e,t),i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));let r=i.isEmpty()?te:this.priorityNode_;return new tt(i,r,s)}}updateChild(e,t){let n=ek(e);if(null===n)return t;{(0,p.hu)(".priority"!==ek(e)||1===eb(e),".priority must be the last token in a path");let i=this.getImmediateChild(n).updateChild(eP(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,i=0,s=!0;if(this.forEachChild(e6,(r,o)=>{t[r]=o.val(e),n++,s&&tt.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1}),e||!s||!(i<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let r=[];for(let o in t)r[o]=t[o];return r}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+e2(this.getPriority().val())+":"),this.forEachChild(e6,(t,n)=>{let i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":E(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let i=this.resolveIndex_(n);if(!i)return this.children_.getPredecessorKey(e);{let s=i.getPredecessorKey(new eW(e,t));return s?s.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let n=t.minKey();return n&&n.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new eW(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let n=t.maxKey();return n&&n.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new eW(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let i=this.children_.getIteratorFrom(e.name,eW.Wrap),s=i.peek();for(;null!=s&&0>t.compare(s,e);)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let i=this.children_.getReverseIteratorFrom(e.name,eW.Wrap),s=i.peek();for(;null!=s&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===tn?-1:0}withIndex(e){if(e===eH||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new tt(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===eH||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{let t=e;if(!this.getPriority().equals(t.getPriority()))return!1;if(this.children_.count()!==t.children_.count())return!1;{let n=this.getIterator(e6),i=t.getIterator(e6),s=n.getNext(),r=i.getNext();for(;s&&r;){if(s.name!==r.name||!s.node.equals(r.node))return!1;s=n.getNext(),r=i.getNext()}return null===s&&null===r}}}resolveIndex_(e){return e===eH?null:this.indexMap_.get(e.toString())}}tt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;let tn=new class extends tt{constructor(){super(new e0(eB),tt.EMPTY_NODE,eZ.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return tt.EMPTY_NODE}isEmpty(){return!1}};function ti(e,t=null){if(null===e)return tt.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,p.hu)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){let n=e;return new eQ(n,ti(t))}if(e instanceof Array){let i=tt.EMPTY_NODE;return B(e,(t,n)=>{if((0,p.r3)(e,t)&&"."!==t.substring(0,1)){let s=ti(n);(s.isLeafNode()||!s.isEmpty())&&(i=i.updateImmediateChild(t,s))}}),i.updatePriority(ti(t))}{let s=[],r=!1,o=e;if(B(o,(e,t)=>{if("."!==e.substring(0,1)){let n=ti(t);n.isEmpty()||(r=r||!n.getPriority().isEmpty(),s.push(new eW(e,n)))}}),0===s.length)return tt.EMPTY_NODE;let l=e7(s,e1,e=>e.name,eB);if(!r)return new tt(l,ti(t),eZ.Default);{let a=e7(s,e6.getCompare());return new tt(l,ti(t),new eZ({".priority":a},{".priority":e6}))}}}Object.defineProperties(eW,{MIN:{value:new eW(W,tt.EMPTY_NODE)},MAX:{value:new eW(U,tn)}}),eY.__EMPTY_NODE=tt.EMPTY_NODE,eQ.__childrenNodeConstructor=tt,eK=i=tn,e4=s=tn,e3=r=ti;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ts extends eU{constructor(e){super(),this.indexPath_=e,(0,p.hu)(!eR(e)&&".priority"!==ek(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?z(e.name,t.name):s}makePost(e,t){let n=ti(e),i=tt.EMPTY_NODE.updateChild(this.indexPath_,n);return new eW(t,i)}maxPost(){let e=tt.EMPTY_NODE.updateChild(this.indexPath_,tn);return new eW(U,e)}toString(){return eN(this.indexPath_,0).join("/")}}let tr=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class extends eU{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?z(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return eW.MIN}maxPost(){return eW.MAX}makePost(e,t){let n=ti(e);return new eW(t,n)}toString(){return".value"}},to="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tl(e){return{type:"value",snapshotNode:e}}function ta(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function th(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function tu(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}!function(){let e=0,t=[];return function(n){let i=n===e;e=n;let s,r=Array(8);for(s=7;s>=0;s--)r[s]=to.charAt(n%64),n=Math.floor(n/64);(0,p.hu)(0===n,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&63===t[s];s--)t[s]=0;t[s]++}else for(s=0;s<12;s++)t[s]=Math.floor(64*Math.random());for(s=0;s<12;s++)o+=to.charAt(t[s]);return(0,p.hu)(20===o.length,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tc{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){(0,p.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(th(t,o)):(0,p.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(ta(t,n)):r.trackChildChange(tu(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return null==n||(e.isLeafNode()||e.forEachChild(e6,(e,i)=>{t.hasChild(e)||n.trackChildChange(th(e,i))}),t.isLeafNode()||t.forEachChild(e6,(t,i)=>{if(e.hasChild(t)){let s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(tu(t,i,s))}else n.trackChildChange(ta(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?tt.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class td{constructor(e){this.indexedFilter_=new tc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=td.getStartPost_(e),this.endPost_=td.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return 0>=this.index_.compare(this.getStartPost(),e)&&0>=this.index_.compare(e,this.getEndPost())}updateChild(e,t,n,i,s,r){return this.matches(new eW(t,n))||(n=tt.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=tt.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(tt.EMPTY_NODE);let s=this;return t.forEachChild(e6,(e,t)=>{s.matches(new eW(e,t))||(i=i.updateImmediateChild(e,tt.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t8{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=e6}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,p.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return((0,p.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:W}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,p.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return((0,p.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:U}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,p.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===e6}copy(){let e=new t8;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tp(e){let t={};if(e.isDefault())return t;let n;return e.index_===e6?n="$priority":e.index_===tr?n="$value":e.index_===eH?n="$key":((0,p.hu)(e.index_ instanceof ts,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,p.Pz)(n),e.startSet_&&(t.startAt=(0,p.Pz)(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+(0,p.Pz)(e.indexStartName_))),e.endSet_&&(t.endAt=(0,p.Pz)(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+(0,p.Pz)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function t$(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==e6&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tf extends ev{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=D("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,p.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){let s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);let r=tf.getListenId_(e,n),o={};this.listens_[r]=o;let l=tp(e._queryParams);this.restRequest_(s+".json",l,(e,t)=>{let l=t;404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(s,l,!1,n),(0,p.DV)(this.listens_,r)===o&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=tf.getListenId_(e,t);delete this.listens_[n]}get(e){let t=tp(e._queryParams),n=e._path.toString(),i=new p.BH;return this.restRequest_(n+".json",t,(e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(Error(s))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);let r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,p.xO)(t);this.log_("Sending REST request for "+r);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=(0,p.cI)(o.responseText)}catch(t){L("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&L("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tg{constructor(){this.rootNode_=tt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tm(){return{value:null,children:new Map}}function ty(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,i)=>{let s=new eT(t.toString()+"/"+e);ty(i,s,n)})}class tv{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&B(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}(e),Z(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;B(e,(e,i)=>{i>0&&(0,p.r3)(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),Z(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function tC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tT(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(o=u||(u={}))[o.OVERWRITE=0]="OVERWRITE",o[o.MERGE=1]="MERGE",o[o.ACK_USER_WRITE=2]="ACK_USER_WRITE",o[o.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tI{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=u.ACK_USER_WRITE,this.source=tC()}operationForChild(e){if(!eR(this.path))return(0,p.hu)(ek(this.path)===e,"operationForChild called for unrelated child."),new tI(eP(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return(0,p.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new eT(e));return new tI(eI(),t,this.revert)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tk{constructor(e,t){this.source=e,this.path=t,this.type=u.LISTEN_COMPLETE}operationForChild(e){return eR(this.path)?new tk(this.source,eI()):new tk(this.source,eP(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tb{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=u.OVERWRITE}operationForChild(e){return eR(this.path)?new tb(this.source,eI(),this.snap.getImmediateChild(e)):new tb(this.source,eP(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tP{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=u.MERGE}operationForChild(e){if(!eR(this.path))return(0,p.hu)(ek(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tP(this.source,eP(this.path),this.children);{let t=this.children.subtree(new eT(e));return t.isEmpty()?null:t.value?new tb(this.source,eI(),t.value):new tP(this.source,eI(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tE{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(eR(e))return this.isFullyInitialized()&&!this.filtered_;let t=ek(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function tN(e,t,n,i,s,r){let o=i.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw(0,p.g5)("Should only compare child_ events.");let i=new eW(t.childName,t.snapshotNode),s=new eW(n.childName,n.snapshotNode);return e.index_.compare(i,s)})(e,t,n)),o.forEach(n=>{var i,o,l;let a=(i=e,o=n,l=r,"value"===o.type||"child_removed"===o.type||(o.prevName=l.getPredecessorChildName(o.childName,o.snapshotNode,i.index_)),o);s.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(a,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tx(e,t){return{eventCache:e,serverCache:t}}function tS(e,t,n,i){return tx(new tE(t,n,i),e.serverCache)}function tR(e,t,n,i){return tx(e.eventCache,new tE(t,n,i))}function t_(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function tD(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tF;class tq{constructor(e,t=(tF||(tF=new e0(Y)),tF)){this.value=e,this.children=t}static fromObject(e){let t=new tq(null);return B(e,(e,n)=>{t=t.set(new eT(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:eI(),value:this.value};if(eR(e))return null;{let n=ek(e),i=this.children.get(n);if(null===i)return null;{let s=i.findRootMostMatchingPathAndValue(eP(e),t);if(null==s)return null;{let r=eS(new eT(n),s.path);return{path:r,value:s.value}}}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(eR(e))return this;{let t=ek(e),n=this.children.get(t);return null!==n?n.subtree(eP(e)):new tq(null)}}set(e,t){if(eR(e))return new tq(t,this.children);{let n=ek(e),i=this.children.get(n)||new tq(null),s=i.set(eP(e),t),r=this.children.insert(n,s);return new tq(this.value,r)}}remove(e){if(eR(e))return this.children.isEmpty()?new tq(null):new tq(null,this.children);{let t=ek(e),n=this.children.get(t);if(!n)return this;{let i=n.remove(eP(e)),s;return(s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty())?new tq(null):new tq(this.value,s)}}}get(e){if(eR(e))return this.value;{let t=ek(e),n=this.children.get(t);return n?n.get(eP(e)):null}}setTree(e,t){if(eR(e))return t;{let n=ek(e),i=this.children.get(n)||new tq(null),s=i.setTree(eP(e),t),r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new tq(this.value,r)}}fold(e){return this.fold_(eI(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((i,s)=>{n[i]=s.fold_(eS(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,eI(),t)}findOnPath_(e,t,n){let i=!!this.value&&n(t,this.value);if(i)return i;if(eR(e))return null;{let s=ek(e),r=this.children.get(s);return r?r.findOnPath_(eP(e),eS(t,s),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,eI(),t)}foreachOnPath_(e,t,n){if(eR(e))return this;{this.value&&n(t,this.value);let i=ek(e),s=this.children.get(i);return s?s.foreachOnPath_(eP(e),eS(t,i),n):new tq(null)}}foreach(e){this.foreach_(eI(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(eS(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tL{constructor(e){this.writeTree_=e}static empty(){return new tL(new tq(null))}}function tO(e,t,n){if(eR(t))return new tL(new tq(n));{let i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){let s=i.path,r=i.value,o=e_(s,t);return r=r.updateChild(o,n),new tL(e.writeTree_.set(s,r))}{let l=new tq(n),a=e.writeTree_.setTree(t,l);return new tL(a)}}}function tA(e,t,n){let i=e;return B(n,(e,n)=>{i=tO(i,eS(t,e),n)}),i}function tM(e,t){if(eR(t))return tL.empty();{let n=e.writeTree_.setTree(t,new tq(null));return new tL(n)}}function tW(e,t){return null!=tU(e,t)}function tU(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(e_(n.path,t)):null}function tz(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(e6,(e,n)=>{t.push(new eW(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new eW(e,n.value))}),t}function tY(e,t){if(eR(t))return e;{let n=tU(e,t);return new tL(null!=n?new tq(n):e.writeTree_.subtree(t))}}function tH(e){return e.writeTree_.isEmpty()}function tV(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let s=null;return n.children.inorderTraversal((n,r)=>{".priority"===n?((0,p.hu)(null!==r.value,"Priority writes must always be leaf nodes"),s=r.value):i=e(eS(t,n),r,i)}),i.getChild(t).isEmpty()||null===s||(i=i.updateChild(eS(t,".priority"),s)),i}}(eI(),e.writeTree_,t)}function tj(e,t){if(e.snap)return eF(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&eF(eS(e.path,n),t))return!0;return!1}function t0(e){return e.visible}function t1(e,t,n){let i=tL.empty();for(let s=0;s<e.length;++s){let r=e[s];if(t(r)){let o=r.path,l;if(r.snap)eF(n,o)?(l=e_(n,o),i=tO(i,l,r.snap)):eF(o,n)&&(l=e_(o,n),i=tO(i,eI(),r.snap.getChild(l)));else if(r.children){if(eF(n,o))l=e_(n,o),i=tA(i,l,r.children);else if(eF(o,n)){if(l=e_(o,n),eR(l))i=tA(i,eI(),r.children);else{let a=(0,p.DV)(r.children,ek(l));if(a){let h=a.getChild(eP(l));i=tO(i,eI(),h)}}}}else throw(0,p.g5)("WriteRecord should have .snap or .children")}}return i}function tB(e,t,n,i,s){if(i||s){let r=tY(e.visibleWrites,t);if(!s&&tH(r))return n;if(!s&&null==n&&!tW(r,eI()))return null;{let o=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(eF(e.path,t)||eF(t,e.path))},l=t1(e.allWrites,o,t),a=n||tt.EMPTY_NODE;return tV(l,a)}}{let h=tU(e.visibleWrites,t);if(null!=h)return h;{let u=tY(e.visibleWrites,t);if(tH(u))return n;if(null==n&&!tW(u,eI()))return null;{let c=n||tt.EMPTY_NODE;return tV(u,c)}}}}function tK(e,t,n,i){return tB(e.writeTree,e.treePath,t,n,i)}function t2(e,t){return function(e,t,n){let i=tt.EMPTY_NODE,s=tU(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(e6,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){let r=tY(e.visibleWrites,t);return n.forEachChild(e6,(e,t)=>{let n=tV(tY(r,new eT(e)),t);i=i.updateImmediateChild(e,n)}),tz(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{let o=tY(e.visibleWrites,t);return tz(o).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}(e.writeTree,e.treePath,t)}function tG(e,t,n,i){return function(e,t,n,i,s){(0,p.hu)(i||s,"Either existingEventSnap or existingServerSnap must exist");let r=eS(t,n);if(tW(e.visibleWrites,r))return null;{let o=tY(e.visibleWrites,r);return tH(o)?s.getChild(n):tV(o,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function t9(e,t){var n,i;return n=e.writeTree,i=eS(e.treePath,t),tU(n.visibleWrites,i)}function tQ(e,t,n){return function(e,t,n,i){let s=eS(t,n),r=tU(e.visibleWrites,s);if(null!=r)return r;if(!i.isCompleteForChild(n))return null;{let o=tY(e.visibleWrites,s);return tV(o,i.getNode().getImmediateChild(n))}}(e.writeTree,e.treePath,t,n)}function t3(e,t){return t4(eS(e.treePath,t),e.writeTree)}function t4(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t6{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;(0,p.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,p.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");let i=this.changeMap.get(n);if(i){let s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,tu(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,th(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,ta(n,e.snapshotNode));else if("child_changed"===t&&"child_changed"===s)this.changeMap.set(n,tu(n,e.snapshotNode,i.oldSnap));else throw(0,p.g5)("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}let t5=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class t7{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let n=null!=this.optCompleteServerCache_?new tE(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return tQ(this.writes_,e,n)}}getChildAfterChild(e,t,n){var i,s,r,o,l;let a=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:tD(this.viewCache_),h=(i=this.writes_,s=a,r=t,o=n,l=e,function(e,t,n,i,s,r,o){let l,a=tY(e.visibleWrites,t),h=tU(a,eI());if(null!=h)l=h;else{if(null==n)return[];l=tV(a,n)}if((l=l.withIndex(o)).isEmpty()||l.isLeafNode())return[];{let u=[],c=o.getCompare(),d=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o),p=d.getNext();for(;p&&u.length<1;)0!==c(p,i)&&u.push(p),p=d.getNext();return u}}(i.writeTree,i.treePath,s,r,1,o,l));return 0===h.length?null:h[0]}}function tX(e,t,n,i,s,r){let o=t.eventCache;if(null!=t9(i,n))return t;{let l,a;if(eR(n)){if((0,p.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let h=tD(t),u=h instanceof tt?h:tt.EMPTY_NODE,c=t2(i,u);l=e.filter.updateFullNode(t.eventCache.getNode(),c,r)}else{let d=tK(i,tD(t));l=e.filter.updateFullNode(t.eventCache.getNode(),d,r)}}else{let $=ek(n);if(".priority"===$){(0,p.hu)(1===eb(n),"Can't have a priority with additional path components");let f=o.getNode();a=t.serverCache.getNode();let g=tG(i,n,f,a);l=null!=g?e.filter.updatePriority(f,g):o.getNode()}else{let m=eP(n),y;if(o.isCompleteForChild($)){a=t.serverCache.getNode();let v=tG(i,n,o.getNode(),a);y=null!=v?o.getNode().getImmediateChild($).updateChild(m,v):o.getNode().getImmediateChild($)}else y=tQ(i,$,t.serverCache);l=null!=y?e.filter.updateChild(o.getNode(),$,y,m,s,r):o.getNode()}}return tS(t,l,o.isFullyInitialized()||eR(n),e.filter.filtersNodes())}}function tJ(e,t,n,i,s,r,o,l){let a=t.serverCache,h,u=o?e.filter:e.filter.getIndexedFilter();if(eR(n))h=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){let c=a.getNode().updateChild(n,i);h=u.updateFullNode(a.getNode(),c,null)}else{let d=ek(n);if(!a.isCompleteForPath(n)&&eb(n)>1)return t;let p=eP(n),$=a.getNode().getImmediateChild(d),f=$.updateChild(p,i);h=".priority"===d?u.updatePriority(a.getNode(),f):u.updateChild(a.getNode(),d,f,p,t5,null)}let g=tR(t,h,a.isFullyInitialized()||eR(n),u.filtersNodes()),m=new t7(s,g,r);return tX(e,g,n,s,m,l)}function tZ(e,t,n,i,s,r,o){let l=t.eventCache,a,h,u=new t7(s,t,r);if(eR(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=tS(t,h,!0,e.filter.filtersNodes());else{let c=ek(n);if(".priority"===c)h=e.filter.updatePriority(t.eventCache.getNode(),i),a=tS(t,h,l.isFullyInitialized(),l.isFiltered());else{let d=eP(n),p=l.getNode().getImmediateChild(c),$;if(eR(d))$=i;else{let f=u.getCompleteChild(c);$=null!=f?".priority"===eE(d)&&f.getChild(ex(d)).isEmpty()?f:f.updateChild(d,i):tt.EMPTY_NODE}if(p.equals($))a=t;else{let g=e.filter.updateChild(l.getNode(),c,$,d,u,o);a=tS(t,g,l.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function ne(e,t){return e.eventCache.isCompleteForChild(t)}function nt(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function nn(e,t,n,i,s,r,o,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let a=t,h;h=eR(n)?i:new tq(null).setTree(n,i);let u=t.serverCache.getNode();return h.children.inorderTraversal((n,i)=>{if(u.hasChild(n)){let h=t.serverCache.getNode().getImmediateChild(n),c=nt(e,h,i);a=tJ(e,a,new eT(n),c,s,r,o,l)}}),h.children.inorderTraversal((n,i)=>{let h=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!h){let c=t.serverCache.getNode().getImmediateChild(n),d=nt(e,c,i);a=tJ(e,a,new eT(n),d,s,r,o,l)}}),a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ni{constructor(e,t){var n,i;this.query_=e,this.eventRegistrations_=[];let s=this.query_._queryParams,r=new tc(s.getIndex()),o=(n=s).loadsAllData()?new tc(n.getIndex()):n.hasLimit()?new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e{constructor(e){this.rangedFilter_=new td(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,s,r){return(this.rangedFilter_.matches(new eW(t,n))||(n=tt.EMPTY_NODE),e.getImmediateChild(t).equals(n))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=tt.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){i=tt.EMPTY_NODE.withIndex(this.index_);let s;s=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let r=0;for(;s.hasNext()&&r<this.limit_;){let o=s.getNext(),l;if(this.reverse_?0>=this.index_.compare(this.rangedFilter_.getStartPost(),o):0>=this.index_.compare(o,this.rangedFilter_.getEndPost()))i=i.updateImmediateChild(o.name,o.node),r++;else break}}else{i=(i=t.withIndex(this.index_)).updatePriority(tt.EMPTY_NODE);let a,h,u,c;if(this.reverse_){c=i.getReverseIterator(this.index_),a=this.rangedFilter_.getEndPost(),h=this.rangedFilter_.getStartPost();let d=this.index_.getCompare();u=(e,t)=>d(t,e)}else c=i.getIterator(this.index_),a=this.rangedFilter_.getStartPost(),h=this.rangedFilter_.getEndPost(),u=this.index_.getCompare();let p=0,$=!1;for(;c.hasNext();){let f=c.getNext();!$&&0>=u(a,f)&&($=!0);let g=$&&p<this.limit_&&0>=u(f,h);g?p++:i=i.updateImmediateChild(f.name,tt.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){let o=this.index_.getCompare();r=(e,t)=>o(t,e)}else r=this.index_.getCompare();let l=e;(0,p.hu)(l.numChildren()===this.limit_,"");let a=new eW(t,n),h=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){let c=l.getImmediateChild(t),d=i.getChildAfterChild(this.index_,h,this.reverse_);for(;null!=d&&(d.name===t||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);let $=null==d?1:r(d,a),f=u&&!n.isEmpty()&&$>=0;if(f)return null!=s&&s.trackChildChange(tu(t,n,c)),l.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(th(t,c));let g=l.updateImmediateChild(t,tt.EMPTY_NODE),m=null!=d&&this.rangedFilter_.matches(d);return m?(null!=s&&s.trackChildChange(ta(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}return n.isEmpty()?e:u?r(h,a)>=0?(null!=s&&(s.trackChildChange(th(h.name,h.node)),s.trackChildChange(ta(t,n))),l.updateImmediateChild(t,n).updateImmediateChild(h.name,tt.EMPTY_NODE)):e:e}}(n):new td(n);this.processor_=(i=o,{filter:i});let l=t.serverCache,a=t.eventCache,h=r.updateFullNode(tt.EMPTY_NODE,l.getNode(),null),u=o.updateFullNode(tt.EMPTY_NODE,a.getNode(),null),c=new tE(h,l.isFullyInitialized(),r.filtersNodes()),d=new tE(u,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=tx(d,c),this.eventGenerator_=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}(this.query_)}get query(){return this.query_}}function ns(e,t){let n=tD(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!eR(t)&&!n.getImmediateChild(ek(t)).isEmpty())?n.getChild(t):null}function nr(e){return 0===e.eventRegistrations_.length}function no(e,t,n){let i=[];if(n){(0,p.hu)(null==t,"A cancel should cancel all event registrations.");let s=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(n,s);t&&i.push(t)})}if(t){let r=[];for(let o=0;o<e.eventRegistrations_.length;++o){let l=e.eventRegistrations_[o];if(l.matches(t)){if(t.hasAnyCallback()){r=r.concat(e.eventRegistrations_.slice(o+1));break}}else r.push(l)}e.eventRegistrations_=r}else e.eventRegistrations_=[];return i}function nl(e,t,n,i){var s,r;t.type===u.MERGE&&null!==t.source.queryId&&((0,p.hu)(tD(e.viewCache_),"We should always have a full cache before handling merges"),(0,p.hu)(t_(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,l=function(e,t,n,i,s){let r=new t6,o,l;if(n.type===u.OVERWRITE){let a=n;a.source.fromUser?o=tZ(e,t,a.path,a.snap,i,s,r):((0,p.hu)(a.source.fromServer,"Unknown source."),l=a.source.tagged||t.serverCache.isFiltered()&&!eR(a.path),o=tJ(e,t,a.path,a.snap,i,s,l,r))}else if(n.type===u.MERGE){var h,c,d,$,f,g,m;let y=n,v;y.source.fromUser?o=(h=e,c=t,d=y.path,$=y.children,f=i,g=s,m=r,v=c,$.foreach((e,t)=>{let n=eS(d,e);ne(c,ek(n))&&(v=tZ(h,v,n,t,f,g,m))}),$.foreach((e,t)=>{let n=eS(d,e);ne(c,ek(n))||(v=tZ(h,v,n,t,f,g,m))}),v):((0,p.hu)(y.source.fromServer,"Unknown source."),l=y.source.tagged||t.serverCache.isFiltered(),o=nn(e,t,y.path,y.children,i,s,l,r))}else if(n.type===u.ACK_USER_WRITE){let C=n;o=C.revert?function(e,t,n,i,s,r){let o;if(null!=t9(i,n))return t;{let l=new t7(i,t,s),a=t.eventCache.getNode(),h;if(eR(n)||".priority"===ek(n)){let u;if(t.serverCache.isFullyInitialized())u=tK(i,tD(t));else{let c=t.serverCache.getNode();(0,p.hu)(c instanceof tt,"serverChildren would be complete if leaf node"),u=t2(i,c)}h=e.filter.updateFullNode(a,u,r)}else{let d=ek(n),$=tQ(i,d,t.serverCache);null==$&&t.serverCache.isCompleteForChild(d)&&($=a.getImmediateChild(d)),(h=null!=$?e.filter.updateChild(a,d,$,eP(n),l,r):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(a,d,tt.EMPTY_NODE,eP(n),l,r):a).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=tK(i,tD(t))).isLeafNode()&&(h=e.filter.updateFullNode(h,o,r))}return o=t.serverCache.isFullyInitialized()||null!=t9(i,eI()),tS(t,h,o,e.filter.filtersNodes())}}(e,t,C.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=t9(s,n))return t;let l=t.serverCache.isFiltered(),a=t.serverCache;if(null!=i.value){if(eR(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return tJ(e,t,n,a.getNode().getChild(n),s,r,l,o);if(!eR(n))return t;{let h=new tq(null);return a.getNode().forEachChild(eH,(e,t)=>{h=h.set(new eT(e),t)}),nn(e,t,n,h,s,r,l,o)}}{let u=new tq(null);return i.foreach((e,t)=>{let i=eS(n,e);a.isCompleteForPath(i)&&(u=u.set(e,a.getNode().getChild(i)))}),nn(e,t,n,u,s,r,l,o)}}(e,t,C.path,C.affectedTree,i,s,r)}else if(n.type===u.LISTEN_COMPLETE)o=function(e,t,n,i,s){let r=t.serverCache,o=tR(t,r.getNode(),r.isFullyInitialized()||eR(n),r.isFiltered());return tX(e,o,n,i,t5,s)}(e,t,n.path,i,r);else throw(0,p.g5)("Unknown operation type: "+n.type);let w=r.getChanges();return function(e,t,n){let i=t.eventCache;if(i.isFullyInitialized()){let s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=t_(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!s||i.getNode().equals(r))&&i.getNode().getPriority().equals(r.getPriority())||n.push(tl(t_(t)))}}(t,o,w),{viewCache:o,changes:w}}(e.processor_,o,t,n,i);return s=e.processor_,r=l.viewCache,(0,p.hu)(r.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),(0,p.hu)(r.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),(0,p.hu)(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,na(e,l.changes,l.viewCache.eventCache.getNode(),null)}function na(e,t,n,i){let s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){let s=[],r=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n,i;r.push((n=t.childName,i=t.snapshotNode,{type:"child_moved",snapshotNode:i,childName:n}))}}),tN(e,s,"child_removed",t,i,n),tN(e,s,"child_added",t,i,n),tN(e,s,"child_moved",r,i,n),tN(e,s,"child_changed",t,i,n),tN(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nh;class nu{constructor(){this.views=new Map}}function nc(e,t,n,i){let s=t.source.queryId;if(null!==s){let r=e.views.get(s);return(0,p.hu)(null!=r,"SyncTree gave us an op for an invalid query."),nl(r,t,n,i)}{let o=[];for(let l of e.views.values())o=o.concat(nl(l,t,n,i));return o}}function nd(e,t,n,i,s){let r=t._queryIdentifier,o=e.views.get(r);if(!o){let l=tK(n,s?i:null),a=!1;l?a=!0:i instanceof tt?(l=t2(n,i),a=!1):(l=tt.EMPTY_NODE,a=!1);let h=tx(new tE(l,a,!1),new tE(i,s,!1));return new ni(t,h)}return o}function n8(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function np(e,t){let n=null;for(let i of e.views.values())n=n||ns(i,t);return n}function n$(e,t){let n=t._queryParams;if(n.loadsAllData())return nm(e);{let i=t._queryIdentifier;return e.views.get(i)}}function nf(e,t){return null!=n$(e,t)}function ng(e){return null!=nm(e)}function nm(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ny,nv=1;class nC{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tq(null),this.pendingWriteTree_={visibleWrites:tL.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nw(e,t,n,i,s){var r,o,l,a,h;return(r=e.pendingWriteTree_,o=t,l=n,a=i,h=s,(0,p.hu)(a>r.lastWriteId,"Stacking an older write on top of newer ones"),void 0===h&&(h=!0),r.allWrites.push({path:o,snap:l,writeId:a,visible:h}),h&&(r.visibleWrites=tO(r.visibleWrites,o,l)),r.lastWriteId=a,s)?nE(e,new tb(tC(),t,n)):[]}function nT(e,t,n=!1){let i=function(e,t){for(let n=0;n<e.allWrites.length;n++){let i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t),s=function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);(0,p.hu)(n>=0,"removeWrite called with nonexistent writeId.");let i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){let l=e.allWrites[o];l.visible&&(o>=n&&tj(l,i.path)?s=!1:eF(i.path,l.path)&&(r=!0)),o--}if(!s)return!1;if(r){var a;return(a=e).visibleWrites=t1(a.allWrites,t0,eI()),a.allWrites.length>0?a.lastWriteId=a.allWrites[a.allWrites.length-1].writeId:a.lastWriteId=-1,!0}if(i.snap)e.visibleWrites=tM(e.visibleWrites,i.path);else{let h=i.children;B(h,t=>{e.visibleWrites=tM(e.visibleWrites,eS(i.path,t))})}return!0}(e.pendingWriteTree_,t);if(!s)return[];{let r=new tq(null);return null!=i.snap?r=r.set(eI(),!0):B(i.children,e=>{r=r.set(new eT(e),!0)}),nE(e,new tI(i.path,r,n))}}function nI(e,t,n){return nE(e,new tb(tw(),t,n))}function nk(e,t,n,i,s=!1){let r=t._path,o=e.syncPointTree_.get(r),l=[];if(o&&("default"===t._queryIdentifier||nf(o,t))){var a,h;let u=function(e,t,n,i){let s=t._queryIdentifier,r=[],o=[],l=ng(e);if("default"===s)for(let[a,h]of e.views.entries())o=o.concat(no(h,n,i)),nr(h)&&(e.views.delete(a),h.query._queryParams.loadsAllData()||r.push(h.query));else{let u=e.views.get(s);u&&(o=o.concat(no(u,n,i)),nr(u)&&(e.views.delete(s),u.query._queryParams.loadsAllData()||r.push(u.query)))}return l&&!ng(e)&&r.push(new((0,p.hu)(nh,"Reference.ts has not been loaded"),nh)(t._repo,t._path)),{removed:r,events:o}}(o,t,n,i);0===(a=o).views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));let c=u.removed;if(l=u.events,!s){let d=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),$=e.syncPointTree_.findOnPath(r,(e,t)=>ng(t));if(d&&!$){let f=e.syncPointTree_.subtree(r);if(!f.isEmpty()){let g=(h=f,h.fold((e,t,n)=>{if(t&&ng(t)){let i=nm(t);return[i]}{let s=[];return t&&(s=n8(t)),B(n,(e,t)=>{s=s.concat(t)}),s}}));for(let m=0;m<g.length;++m){let y=g[m],v=y.query,C=nN(e,y);e.listenProvider_.startListening(nF(v),nx(e,v),C.hashFn,C.onComplete)}}}$||!(c.length>0)||i||(d?e.listenProvider_.stopListening(nF(t),null):c.forEach(t=>{let n=e.queryToTagMap.get(nS(t));e.listenProvider_.stopListening(nF(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){let i=t[n];if(!i._queryParams.loadsAllData()){let s=nS(i),r=e.queryToTagMap.get(s);e.queryToTagMap.delete(s),e.tagToQueryMap.delete(r)}}}(e,c)}return l}function nb(e,t,n,i){let s=nR(e,i);if(null==s)return[];{let r=n_(s),o=r.path,l=r.queryId,a=e_(o,t),h=new tb(tT(l),a,n);return nD(e,o,h)}}function nP(e,t,n){let i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(e,n)=>{let i=e_(e,t),s=np(n,i);if(s)return s});return tB(i,t,s,n,!0)}function nE(e,t){var n,i;return function e(t,n,i,s){if(eR(t.path))return function e(t,n,i,s){let r=n.get(eI());null==i&&null!=r&&(i=np(r,eI()));let o=[];return n.children.inorderTraversal((n,r)=>{let l=i?i.getImmediateChild(n):null,a=t3(s,n),h=t.operationForChild(n);h&&(o=o.concat(e(h,r,l,a)))}),r&&(o=o.concat(nc(r,t,s,i))),o}(t,n,i,s);{let r=n.get(eI());null==i&&null!=r&&(i=np(r,eI()));let o=[],l=ek(t.path),a=t.operationForChild(l),h=n.children.get(l);if(h&&a){let u=i?i.getImmediateChild(l):null,c=t3(s,l);o=o.concat(e(a,h,u,c))}return r&&(o=o.concat(nc(r,t,s,i))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,i=eI(),t4(i,n)))}function nN(e,t){let n=t.query,i=nx(e,n);return{hashFn(){var e;let n=(e=t).viewCache_.serverCache.getNode()||tt.EMPTY_NODE;return n.hash()},onComplete(t){if("ok"===t){var s,r;return i?function(e,t,n){let i=nR(e,n);if(!i)return[];{let s=n_(i),r=s.path,o=s.queryId,l=e_(r,t),a=new tk(tT(o),l);return nD(e,r,a)}}(e,n._path,i):(s=e,r=n._path,nE(s,new tk(tw(),r)))}{let o=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");let i=Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return nk(e,n,null,o)}}}}function nx(e,t){let n=nS(t);return e.queryToTagMap.get(n)}function nS(e){return e._path.toString()+"$"+e._queryIdentifier}function nR(e,t){return e.tagToQueryMap.get(t)}function n_(e){let t=e.indexOf("$");return(0,p.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new eT(e.substr(0,t))}}function nD(e,t,n){var i,s;let r=e.syncPointTree_.get(t);(0,p.hu)(r,"Missing sync point for query tag that we're tracking");let o=(i=e.pendingWriteTree_,s=t,t4(s,i));return nc(r,n,o,null)}function nF(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,p.hu)(ny,"Reference.ts has not been loaded"),ny)(e._repo,e._path):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nq{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new nq(t)}node(){return this.node_}}class nL{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=eS(this.path_,e);return new nL(this.syncTree_,t)}node(){return nP(this.syncTree_,this.path_)}}let nO=function(e,t,n){return e&&"object"==typeof e?((0,p.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?nA(e[".sv"],t,n):"object"==typeof e[".sv"]?nM(e[".sv"],t):void(0,p.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},nA=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,p.hu)(!1,"Unexpected server value: "+e)},nM=function(e,t,n){e.hasOwnProperty("increment")||(0,p.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let i=e.increment;"number"!=typeof i&&(0,p.hu)(!1,"Unexpected increment value: "+i);let s=t.node();if((0,p.hu)(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;let r=s.getValue();return"number"!=typeof r?i:r+i};function nW(e,t,n){let i=e.getPriority().val(),s=nO(i,t.getImmediateChild(".priority"),n),r;if(e.isLeafNode()){let o=e,l=nO(o.getValue(),t,n);return l!==o.getValue()||s!==o.getPriority().val()?new eQ(l,ti(s)):e}{let a=e;return r=a,s!==a.getPriority().val()&&(r=r.updatePriority(new eQ(s))),a.forEachChild(e6,(e,i)=>{let s=nW(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nU{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function nz(e,t){let n=t instanceof eT?t:new eT(t),i=e,s=ek(n);for(;null!==s;){let r=(0,p.DV)(i.node.children,s)||{children:{},childCount:0};i=new nU(s,i,r),n=eP(n),s=ek(n)}return i}function nY(e){return e.node.value}function nH(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,i){var s;let r=(s=i,void 0===nY(s)&&!nV(s)),o=(0,p.r3)(t.node.children,n);r&&o?(delete t.node.children[n],t.node.childCount--,e(t)):r||o||(t.node.children[n]=i.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function nV(e){return e.node.childCount>0}function nj(e,t){B(e.node.children,(n,i)=>{t(new nU(n,e,i))})}function n0(e){return new eT(null===e.parent?e.name:n0(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let n1=/[\[\].#$\/\u0000-\u001F\u007F]/,nB=/[\[\].#$\u0000-\u001F\u007F]/,nK=function(e){return"string"==typeof e&&0!==e.length&&!n1.test(e)},n2=function(e){return"string"==typeof e&&0!==e.length&&!nB.test(e)},nG=function(e,t,n){let i=n instanceof eT?new eq(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+eO(i));if("function"==typeof t)throw Error(e+"contains a function "+eO(i)+" with contents = "+t.toString());if(A(t))throw Error(e+"contains "+t.toString()+" "+eO(i));if("string"==typeof t&&t.length>3495253.3333333335&&(0,p.ug)(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+eO(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let s=!1,r=!1;if(B(t,(t,n)=>{var o,l;if(".value"===t)s=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!nK(t)))throw Error(e+" contains an invalid key ("+t+") "+eO(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');o=i,l=t,o.parts_.length>0&&(o.byteLength_+=1),o.parts_.push(l),o.byteLength_+=(0,p.ug)(l),eL(o),nG(e,n,i),function(e){let t=e.parts_.pop();e.byteLength_-=(0,p.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),s&&r)throw Error(e+' contains ".value" child '+eO(i)+" in addition to actual children.")}},n9=function(e,t,n,i){if((!i||void 0!==n)&&!n2(n))throw Error((0,p.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},nQ=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),n9(e,t,n,i)},n3=function(e,t){var n;let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!nK(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&((n=i)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),!n2(n)))throw Error((0,p.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};function n4(e,t,n){!function(e,t){let n=null;for(let i=0;i<t.length;i++){let s=t[i],r=s.getPath();null===n||eD(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){let s=e.eventLists_[i];if(s){let r=s.path;t(r)?(n6(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>eF(e,t)||eF(t,e))}function n6(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let i=n.getEventRunner();x&&_("event: "+n.toString()),X(i)}}}class n5{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(){this.eventLists_=[],this.recursionDepth_=0}},this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tm(),this.transactionQueueTree_=new nU,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function n7(e){var t;return(t=t={timestamp:function(e){let t=e.infoData_.getNode(new eT(".info/serverTimeOffset")),n=t.val()||0;return new Date().getTime()+n}(e)}).timestamp=t.timestamp||new Date().getTime(),t}function nX(e,t,n,i,s){e.dataUpdateCount++;let r=new eT(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s){if(i){let l=(0,p.UI)(n,e=>ti(e));o=function(e,t,n,i){let s=nR(e,i);if(!s)return[];{let r=n_(s),o=r.path,l=r.queryId,a=e_(o,t),h=tq.fromObject(n),u=new tP(tT(l),a,h);return nD(e,o,u)}}(e.serverSyncTree_,r,l,s)}else{let a=ti(n);o=nb(e.serverSyncTree_,r,a,s)}}else if(i){let h=(0,p.UI)(n,e=>ti(e));o=function(e,t,n){let i=tq.fromObject(n);return nE(e,new tP(tw(),t,i))}(e.serverSyncTree_,r,h)}else{let u=ti(n);o=nI(e.serverSyncTree_,r,u)}let c=r;o.length>0&&(c=is(e,r)),n4(e.eventQueue_,c,o)}function nJ(e,t){nZ(e,"connected",t),!1===t&&function(e){it(e,"onDisconnectEvents");let t=n7(e),n=tm();ty(e.onDisconnect_,eI(),(i,s)=>{var r,o,l,a;let h=(r=i,o=s,l=e.serverSyncTree_,a=t,nW(o,new nL(l,r),a));!function e(t,n,i){if(eR(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{let s=ek(n);t.children.has(s)||t.children.set(s,tm());let r=t.children.get(s);n=eP(n),e(r,n,i)}}(n,i,h)});let i=[];ty(n,eI(),(t,n)=>{i=i.concat(nI(e.serverSyncTree_,t,n));let s=function(e,t){let n=n0(ir(e,t)),i=nz(e.transactionQueueTree_,t);return function(e,t,n){let i=e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,t=>{ia(e,t)}),ia(e,i),function e(t,n,i,s){i&&!s&&n(t),nj(t,t=>{e(t,n,!0,s)}),i&&s&&n(t)}(i,t=>{ia(e,t)}),n}(e,t);is(e,s)}),e.onDisconnect_=tm(),n4(e.eventQueue_,eI(),i)}(e)}function nZ(e,t,n){let i=new eT("/.info/"+t),s=ti(n);e.infoData_.updateSnapshot(i,s);let r=nI(e.infoSyncTree_,i,s);n4(e.eventQueue_,i,r)}function ie(e){return e.nextWriteId_++}function it(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),_(n,...t)}function ii(e,t,n){return nP(e.serverSyncTree_,t,n)||tt.EMPTY_NODE}function is(e,t){let n=ir(e,t),i=n0(n),s=io(e,n);return function(e,t,n){if(0===t.length)return;let i=[],s=[],r=t.filter(e=>0===e.status),o=r.map(e=>e.currentWriteId);for(let l=0;l<t.length;l++){var a,h,u,c;let d=t[l],$=e_(n,d.path),f=!1,g;if((0,p.hu)(null!==$,"rerunTransactionsUnderNode_: relativePath should not be null."),4===d.status)f=!0,g=d.abortReason,s=s.concat(nT(e.serverSyncTree_,d.currentWriteId,!0));else if(0===d.status){if(d.retryCount>=25)f=!0,g="maxretry",s=s.concat(nT(e.serverSyncTree_,d.currentWriteId,!0));else{let m=ii(e,d.path,o);d.currentInputSnapshot=m;let y=t[l].update(m.val());if(void 0!==y){nG("transaction failed: Data returned ",y,d.path);let v=ti(y),C="object"==typeof y&&null!=y&&(0,p.r3)(y,".priority");C||(v=v.updatePriority(m.getPriority()));let w=d.currentWriteId,T=n7(e),I=(a=v,h=m,u=T,nW(a,new nq(h),u));d.currentOutputSnapshotRaw=v,d.currentOutputSnapshotResolved=I,d.currentWriteId=ie(e),o.splice(o.indexOf(w),1),s=(s=s.concat(nw(e.serverSyncTree_,d.path,I,d.currentWriteId,d.applyLocally))).concat(nT(e.serverSyncTree_,w,!0))}else f=!0,g="nodata",s=s.concat(nT(e.serverSyncTree_,d.currentWriteId,!0))}}n4(e.eventQueue_,n,s),s=[],f&&(t[l].status=2,setTimeout(c=t[l].unwatcher,Math.floor(0)),t[l].onComplete&&("nodata"===g?i.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):i.push(()=>t[l].onComplete(Error(g),!1,null))))}il(e,e.transactionQueueTree_);for(let k=0;k<i.length;k++)X(i[k]);(function e(t,n=t.transactionQueueTree_){if(n||il(t,n),nY(n)){let i=io(t,n);(0,p.hu)(i.length>0,"Sending zero length transaction queue");let s=i.every(e=>0===e.status);s&&function(t,n,i){let s=i.map(e=>e.currentWriteId),r=ii(t,n,s),o=r,l=r.hash();for(let a=0;a<i.length;a++){let h=i[a];(0,p.hu)(0===h.status,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;let u=e_(n,h.path);o=o.updateChild(u,h.currentOutputSnapshotRaw)}let c=o.val(!0),d=n;t.server_.put(d.toString(),c,s=>{it(t,"transaction put response",{path:d.toString(),status:s});let r=[];if("ok"===s){let o=[];for(let l=0;l<i.length;l++)i[l].status=2,r=r.concat(nT(t.serverSyncTree_,i[l].currentWriteId)),i[l].onComplete&&o.push(()=>i[l].onComplete(null,!0,i[l].currentOutputSnapshotResolved)),i[l].unwatcher();il(t,nz(t.transactionQueueTree_,n)),e(t,t.transactionQueueTree_),n4(t.eventQueue_,n,r);for(let a=0;a<o.length;a++)X(o[a])}else{if("datastale"===s)for(let h=0;h<i.length;h++)3===i[h].status?i[h].status=4:i[h].status=0;else{L("transaction at "+d.toString()+" failed: "+s);for(let u=0;u<i.length;u++)i[u].status=4,i[u].abortReason=s}is(t,n)}},l)}(t,n0(n),i)}else nV(n)&&nj(n,n=>{e(t,n)})})(e,e.transactionQueueTree_)}(e,s,i),i}function ir(e,t){let n,i=e.transactionQueueTree_;for(n=ek(t);null!==n&&void 0===nY(i);)i=nz(i,n),t=eP(t),n=ek(t);return i}function io(e,t){let n=[];return function e(t,n,i){let s=nY(n);if(s)for(let r=0;r<s.length;r++)i.push(s[r]);nj(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function il(e,t){let n=nY(t);if(n){let i=0;for(let s=0;s<n.length;s++)2!==n[s].status&&(n[i]=n[s],i++);n.length=i,nH(t,n.length>0?n:void 0)}nj(t,t=>{il(e,t)})}function ia(e,t){let n=nY(t);if(n){let i=[],s=[],r=-1;for(let o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?((0,p.hu)(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):((0,p.hu)(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(nT(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,Error("set"),!1,null))));-1===r?nH(t,void 0):n.length=r+1,n4(e.eventQueue_,n0(t),s);for(let l=0;l<i.length;l++)X(i[l])}}let ih=function(e,t){let n=iu(e),i=n.namespace;"firebase.com"===n.domain&&q(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||q("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||O();let s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new eo(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new eT(n.pathString)}},iu=function(e){let t="",n="",i="",s="",r="",o=!0,l="https",a=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(l=e.substring(0,h-1),e=e.substring(h+2));let u=e.indexOf("/");-1===u&&(u=e.length);let c=e.indexOf("?");-1===c&&(c=e.length),t=e.substring(0,Math.min(u,c)),u<c&&(s=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){let t="",n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch(r){}t+="/"+s}return t}(e.substring(u,c)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):L(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,c)));(h=t.indexOf(":"))>=0?(o="https"===l||"wss"===l,a=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{let $=t.indexOf(".");i=t.substring(0,$).toLowerCase(),n=t.substring($+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ic{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,p.Pz)(this.snapshot.exportVal())}}class id{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class i8{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,p.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ip{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return eR(this._path)?null:eE(this._path)}get ref(){return new i$(this._repo,this._path)}get _queryIdentifier(){let e=t$(this._queryParams),t=V(e);return"{}"===t?"default":t}get _queryObject(){return t$(this._queryParams)}isEqual(e){if(!((e=(0,p.m9)(e))instanceof ip))return!1;let t=this._repo===e._repo,n=eD(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class i$ extends ip{constructor(e,t){super(e,t,new t8,!1)}get parent(){let e=ex(this._path);return null===e?null:new i$(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class ig{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new eT(e),n=iy(this.ref,e);return new ig(this._node.getChild(t),n,e6)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;let t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new ig(n,iy(this.ref,t),e6)))}hasChild(e){let t=new eT(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function im(e,t){return(e=(0,p.m9)(e))._checkNotDeleted("ref"),void 0!==t?iy(e._root,t):e._root}function iy(e,t){return null===ek((e=(0,p.m9)(e))._path)?nQ("child","path",t,!1):n9("child","path",t,!1),new i$(e._repo,eS(e._path,t))}function iv(e){e=(0,p.m9)(e);let t=new i8(()=>{}),n=new iC(t);return(function(e,t,n){let i=function(e,t){var n,i,s;let r=t._path,o=null;e.syncPointTree_.foreachOnPath(r,(e,t)=>{let n=e_(e,r);o=o||np(t,n)});let l=e.syncPointTree_.get(r);l?o=o||np(l,eI()):(l=new nu,e.syncPointTree_=e.syncPointTree_.set(r,l));let a=null!=o,h=a?new tE(o,!0,!1):null,u=(n=e.pendingWriteTree_,t4(i=t._path,n)),c=nd(l,t,u,a?h.getNode():tt.EMPTY_NODE,a);return s=c,t_(s.viewCache_)}(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then(i=>{let s=ti(i).withIndex(t._queryParams.getIndex());!function(e,t,n,i=!1){var s,r;let o=t._path,l=null,a=!1;e.syncPointTree_.foreachOnPath(o,(e,t)=>{let n=e_(e,o);l=l||np(t,n),a=a||ng(t)});let h=e.syncPointTree_.get(o);h?(a=a||ng(h),l=l||np(h,eI())):(h=new nu,e.syncPointTree_=e.syncPointTree_.set(o,h));let u;if(null!=l)u=!0;else{u=!1,l=tt.EMPTY_NODE;let c=e.syncPointTree_.subtree(o);c.foreachChild((e,t)=>{let n=np(t,eI());n&&(l=l.updateImmediateChild(e,n))})}let d=nf(h,t);if(!d&&!t._queryParams.loadsAllData()){let $=nS(t);(0,p.hu)(!e.queryToTagMap.has($),"View does not exist, but we have a tag");let f=nv++;e.queryToTagMap.set($,f),e.tagToQueryMap.set(f,$)}let g=(s=e.pendingWriteTree_,r=o,t4(r,s)),m=function(e,t,n,i,s,r){let o=nd(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),!function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){let n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){let s=n.getNode();s.forEachChild(e6,(e,t)=>{i.push(ta(e,t))})}return n.isFullyInitialized()&&i.push(tl(n.getNode())),na(e,i,n.getNode(),t)}(o,n)}(h,t,n,g,l,u);if(!d&&!a&&!i){let y=n$(h,t);m=m.concat(function(e,t,n){let i=t._path,s=nx(e,t),r=nN(e,n),o=e.listenProvider_.startListening(nF(t),s,r.hashFn,r.onComplete),l=e.syncPointTree_.subtree(i);if(s)(0,p.hu)(!ng(l.value),"If we're adding a query, it shouldn't be shadowed");else{let a=l.fold((e,t,n)=>{if(!eR(e)&&t&&ng(t))return[nm(t).query];{let i=[];return t&&(i=i.concat(n8(t).map(e=>e.query))),B(n,(e,t)=>{i=i.concat(t)}),i}});for(let h=0;h<a.length;++h){let u=a[h];e.listenProvider_.stopListening(nF(u),nx(e,u))}}return o}(e,t,y))}return m}(e.serverSyncTree_,t,n,!0);let r;if(t._queryParams.loadsAllData())r=nI(e.serverSyncTree_,t._path,s);else{let o=nx(e.serverSyncTree_,t);r=nb(e.serverSyncTree_,t._path,s,o)}return n4(e.eventQueue_,t._path,r),nk(e.serverSyncTree_,t,n,null,!0),s},n=>(it(e,"get for query "+(0,p.Pz)(t)+" failed: "+n),Promise.reject(Error(n))))})(e._repo,e,n).then(t=>new ig(t,new i$(e._repo,e._path),e._queryParams.getIndex()))}class iC{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let n=t._queryParams.getIndex();return new ic("value",this,new ig(e.snapshotNode,new i$(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new id(this,e,t):null}matches(e){return e instanceof iC&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}l=i$,(0,p.hu)(!nh,"__referenceConstructor has already been defined"),nh=l,a=i$,(0,p.hu)(!ny,"__referenceConstructor has already been defined"),ny=a;let iw={};class iT{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=ec(e.repoInfo_),e.forceRestClient_||J())e.server_=new tf(e.repoInfo_,(t,n,i,s)=>{nX(e,t,n,i,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>nJ(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,p.Pz)(n)}catch(i){throw Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new eM(e.repoInfo_,t,(t,n,i,s)=>{nX(e,t,n,i,s)},t=>{nJ(e,t)},t=>{var n,i;n=e,i=t,B(i,(e,t)=>{nZ(n,e,t)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return eu[n]||(eu[n]=t()),eu[n]}(e.repoInfo_,()=>new tv(e.stats_,e.server_)),e.infoData_=new tg,e.infoSyncTree_=new nC({startListening(t,n,i,s){let r=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=nI(e.infoSyncTree_,t._path,o),setTimeout(()=>{s("ok")},0)),r},stopListening(){}}),nZ(e,"connected",!1),e.serverSyncTree_=new nC({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,(n,i)=>{let r=s(n,i);n4(e.eventQueue_,t._path,r)}),[]),stopListening(t,n){e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new i$(this._repo,eI())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){var n;let i=iw[t];i&&i[e.key]===e||q(`Database ${t}(${e.repoInfo_}) has already been deleted.`),(n=e).persistentConnection_&&n.persistentConnection_.interrupt("repo_interrupt"),delete i[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&q("Cannot call "+e+" on a deleted database.")}}function iI(e=(0,c.Mq)(),t){return(0,c.qX)(e,"database").getImmediate({identifier:t})}eM.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},eM.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},y=h=c.Jn,(0,c.Xd)(new d.wA("database",(e,{instanceIdentifier:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return function(e,t,n,i,s){var r,o,l,a;let h=i||e.options.databaseURL;void 0===h&&(e.options.projectId||q("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_("Using default host for project ",e.options.projectId),h=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=ih(h,s),c=u.repoInfo,d,p;void 0!==f&&f.env&&(p=f.env.FIREBASE_DATABASE_EMULATOR_HOST),p?(d=!0,c=(u=ih(h=`http://${p}?ns=${c.namespace}`,s)).repoInfo):d=!u.repoInfo.secure;let $=s&&d?new en(en.OWNER):new et(e.name,e.options,t);n3("Invalid Firebase Database URL",u),eR(u.path)||q("Database URL must point to the root of a Firebase Database (not including a child path).");let g,m,y=(r=c,o=e,l=$,a=new ee(e.name,n),g=iw[o.name],g||(g={},iw[o.name]=g),m=g[r.toURLString()],m&&q("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),m=new n5(r,!1,l,a),g[r.toURLString()]=m,m);return new iT(y,e)}(n,i,s,t)},"PUBLIC").setMultipleInstances(!0)),(0,c.KN)(g,m,void 0),(0,c.KN)(g,m,"esm2017")}}]);
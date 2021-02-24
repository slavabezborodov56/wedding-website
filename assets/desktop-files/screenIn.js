(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[98],{405:function(t,n,e){"use strict";e.r(n),e.d(n,"page",(function(){return g}));var i=e(0),o=e(26),a=e(110),r=e(460),s=e(7),c=e(20),u=function(t){return t+"-screenIn"},d=function(){function t(t){this.animator=t,this.definitions={},this.sessionState={played:new Map,running:new Map}}return t.prototype._shouldSkipPlayedAnimation=function(t){var n=this.sessionState.played.has(t),e=this.sessionState.played.get(t)||{},i=e.playOnce,o=e.persistOnNav;return n&&(i||o)},t.prototype._hideComponent=function(t){var n=document.querySelector("#"+t);n&&(n.style.opacity=0)},t.prototype.unhideComponent=function(t){var n=document.querySelector("#"+t);n&&(n.style.opacity="",n.style.visibility="inherit")},t.prototype._addAnimatingClass=function(t){var n=document.getElementById(t);n&&n.classList.add("animating-screenIn")},t.prototype._addExitAnimatingClass=function(t){var n=document.getElementById(t);n&&(n.classList.remove("animating-screenIn"),n.classList.add("animating-screenIn-exit"))},t.prototype.updateDefinitions=function(t){this.definitions=Object(i.a)(Object(i.a)({},this.definitions),t)},t.prototype._hideCompBeforeAnimation=function(t){var n=u(t);this._shouldSkipPlayedAnimation(n)?this.unhideComponent(t):this._hideComponent(t)},t.prototype.hideBeforeAnimation=function(t){var n=this;this.getCompsToHide(t).forEach((function(t){var e=t.compId;n._hideCompBeforeAnimation(e)}))},t.prototype.handleRotation=function(t,n){t.setAttribute("data-angle",String(n)),t.setAttribute("data-angle-style-location","style")},t.prototype.trigger=function(t){var n=this;void 0===t&&(t=[]),t.reduce((function(t,e){var i=e.compId,o=n.definitions[i]||[];return t.concat(o)}),[]).forEach((function(t){var e=t.action,o=Object(i.f)(t,["action"]);return n.executeAnimation(e,o)}))},t.prototype.init=function(t){this.updateDefinitions(t),this.stopAnimations(),this.hideBeforeAnimation(t)},t.prototype.addDefinition=function(t,n,e){this.handleRotation(n,e),this.updateDefinitions(t)},t.prototype.executeAnimation=function(t,n){var e=this,i=n.name,o=n.targetId,a=n.duration,r=void 0===a?0:a,s=n.delay,c=void 0===s?0:s,d=n.playOnce,p=void 0!==d&&d,l=n.persistOnNav,f=void 0!==l&&l,m=n.params,h=void 0===m?{}:m,v=u(o);if(this._shouldSkipPlayedAnimation(v))this.unhideComponent(o);else{var g={name:i,targetId:o,duration:r,delay:c,params:h},y={name:"BaseClear",targetId:o,duration:0,delay:0,params:{props:"clip,clipPath,webkitClipPath,willChange,opacity,transform,transformOrigin",immediateRender:!1}};this.animator.runSequence([{type:"Animation",data:g},{type:"Animation",data:y}],{callbacks:{onStart:function(n){e._addAnimatingClass(o),e.sessionState.running.set(n,{targetId:o,action:t})},onComplete:function(t){e._addExitAnimatingClass(o),e.sessionState.running.delete(t)},onInterrupt:function(t){e._addExitAnimatingClass(o),e.sessionState.running.delete(t)}}}),this.sessionState.played.set(v,{playOnce:p,persistOnNav:f})}},t.prototype.stopAnimations=function(t){var n=this,e=(void 0===t?{}:t).skipPersistent,i=void 0===e||e;this.sessionState.running.forEach((function(t,e){var o=t.targetId,a=u(o);i&&n.sessionState.played.get(a).persistOnNav||n.animator.kill(e,1)}))},t.prototype.getAnimationProperties=function(t){return this.animator.getAnimationProperties(t)},t.prototype.getCompsToHide=function(t){var n=this;return Object.entries(t).reduce((function(t,e){var o=Object(i.e)(e,2),a=o[0];return o[1].some((function(t){var e=t.name,i=n.animator.getAnimationProperties(e);return i&&i.hideOnStart}))&&t.push({compId:a}),t}),[])},t}(),p=e(376);function l(t){var n=t.manager,e={};function i(t){var e=t.filter((function(t){return t.visible})).map((function(t){return{compId:t.id,action:"screenIn"}}));n.trigger(e)}function o(t,n){var o=e[n]||function(t,n){var e={root:null,rootMargin:"0px",threshold:[n]};return new window.IntersectionObserver((function(n,e){var i=n.map((function(t){return{visible:t.isIntersecting,ratio:t.intersectionRatio,rect:t.intersectionRect,id:t.target.id}}));n.forEach((function(t){return t.isIntersecting&&e.unobserve(t.target)})),t(i)}),e)}(i,n);o.observe(t),e[n]||(e[n]=o)}return{start:function(t,e,i){var a=window.innerHeight;e&&o(e,e.offsetHeight>a?.01:function(t,n){var e=n.name;return t.getAnimationProperties(e).viewportThreshold}(n,i))}}}var f=e(9),m=e.n(f),h=Object(s.h)([Object(s.f)(o.e,p.a),Object(s.f)(o.c,p.a),a.a,r.a,Object(s.g)(c.a)],(function(t,n,e,o,a){return{pageWillMount:function(){return Object(i.b)(void 0,void 0,void 0,(function(){var r,s,c,u;return Object(i.d)(this,(function(p){return r=t.compIdToActions,s=t.compIdToRotations,a?(c=a.getInstance().then((function(t){var e,o,a=null!==(o=null===(e=n.get())||void 0===e?void 0:e.screenInManager)&&void 0!==o?o:new d(t);return n.update((function(t){return Object(i.a)(Object(i.a)({},t),{screenInManager:a})})),a.init(r),{animations:l({manager:a}),screenInManager:a}})),u=m.a.keys(r),e.registerToCompLifeCycle(u,"screenInCallback",(function(t,n,e){return Object(i.b)(void 0,void 0,void 0,(function(){var a,u,d,p,l,f;return Object(i.d)(this,(function(i){switch(i.label){case 0:return[4,c];case 1:return a=i.sent(),u=a.animations,d=a.screenInManager,o?(d.unhideComponent(t),[2]):(p=r[t],n!==t&&((l=JSON.parse(JSON.stringify(p)))[0].targetId=n,p=l),d.addDefinition(((f={})[n]=p,f),e,s[t]),u.start(n,e,p[0]),[2])}}))}))})),[2]):[2]}))}))},pageWillUnmount:function(){return Object(i.b)(void 0,void 0,void 0,(function(){var n;return Object(i.d)(this,(function(i){return o||(n=m.a.keys(t.compIdToActions),e.unregisterToCompLifeCycle(n,"screenInCallback")),[2]}))}))}}})),v=e(35),g=function(t){t(v.a.PageWillMountHandler).to(h),t(v.a.PageWillUnmountHandler).to(h)}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/screenIn.8af68681.chunk.min.js.map
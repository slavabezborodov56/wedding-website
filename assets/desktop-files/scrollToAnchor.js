(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[100],{347:function(t,n,e){"use strict";e.r(n),e.d(n,"page",(function(){return v})),e.d(n,"name",(function(){return b.b})),e.d(n,"SamePageScrollSymbol",(function(){return b.a})),e.d(n,"ISamePageScroll",(function(){return s.ISamePageScroll}));var o=e(35),r=e(465),a=e(0),c=e(7),u=e(26),i=e(297),l=["SCROLL_TO_TOP","SCROLL_TO_BOTTOM"],b=e(293),d=e(9),p=e.n(d),O=Object(c.h)([Object(c.f)(u.e,b.b),Object(c.f)(u.c,b.b),i.b],(function(t,n,e){var o=t.anchorDataIdToCompIdMap;return{pageWillMount:function(){n.update((function(t){return Object(a.a)(Object(a.a)({},t),o)}))},scrollToAnchor:function(t){var o=t.anchorCompId,r=t.anchorDataId;return r&&l.includes(r)?(e.scrollToComponent(r),!0):o?(e.scrollToComponent(o),!0):!(!r||!n.get()[r])&&(e.scrollToComponent(n.get()[r]),!0)},pageWillUnmount:function(){n.update((function(t){return p.a.omit(t,Object.keys(o))}))}}})),f=e(283),h=Object(c.h)([Object(c.f)(u.e,b.b),f.a,i.b],(function(t,n,e){var o=t.nicknameToCompIdMap,r=t.anchorDataIdToCompIdMap;return{appDidLoadPage:function(){var t=n.getCurrentRouteInfo(),a=t&&t.anchorDataId;if(a){var c=l.includes(a)?a:r[a]||o[a];e.scrollToComponent(c)}}}})),m=e(22),g=e(4),j=Object(c.h)([b.a,g.i],(function(t,n){return{handleClick:function(e){var o=e.getAttribute("data-anchor-comp-id")||"",r=e.getAttribute("data-anchor")||"",a=n.getFullUrlWithoutQueryParams(),c=e.getAttribute("href"),u=c&&Object(m.c)(c),i="#"===u;return o||r||!(a===u)&&!i?t.scrollToAnchor({anchorDataId:r,anchorCompId:o}):(i||n.pushUrlState(new URL(c)),t.scrollToAnchor({anchorDataId:"SCROLL_TO_TOP"}))}}})),s=e(559),I=e(46),T=e(464),C=e(336),_=Object(c.h)([Object(c.f)(u.e,b.b),Object(c.f)(u.d,b.b),I.p,T.b,T.d,g.i],(function(t,n,e,o,r,c){return{pageWillMount:function(){return Object(a.b)(void 0,void 0,void 0,(function(){var e,u,i,l,b;return Object(a.d)(this,(function(d){return e=c.getRelativeUrl(),u=c.getFullUrlWithoutQueryParams(),i="./"===e?[]:n.compsWithTopBottomAnchor,(l=Object(a.g)(t.compsWithCurrentInnerRouteDynamicPageLink,n.compsWithCurrentInnerRouteDynamicPageLink,i)).length>0&&(b=l.reduce((function(t,n){var e,c="QuickActionBarItem"===function(t){var n=Object(C.c)(t)?Object(C.b)(t):t;return r.get(n).componentType}(n),i=c?"QUICK_ACTION_BAR":n,l=c?function(t,n){return{items:o.get("QUICK_ACTION_BAR").items.map((function(e){return e.compId===t?Object(a.a)(Object(a.a)({},e),{link:Object(a.a)(Object(a.a)({},e.link),{href:n})}):e}))}}(n,u):{link:Object(a.a)(Object(a.a)({},o.get(i).link),{href:u})};return Object(a.a)(Object(a.a)({},t),((e={})[i]=l,e))}),{}),o.update(b)),[2]}))}))}}})),v=function(t){t(o.a.AppDidLoadPageHandler).to(h),t(b.a,o.a.PageWillMountHandler,o.a.PageWillUnmountHandler).to(O),t(r.a).to(j),t(o.a.PageWillMountHandler).to(_)}},559:function(t,n){}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/scrollToAnchor.da13a433.chunk.min.js.map
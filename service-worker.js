"use strict";var precacheConfig=[["/index.html","da95bde65f1c811ce8e958280a9f7c0f"],["/static/css/main.d2dbd95c.css","2a92f757547f72898a0ef1ee7d537f1a"],["/static/js/main.8093eb3d.js","30f2c210382c924f9206e29c618c52c1"],["/static/media/F.inmotionnowlogo.3bdc7ce9.png","3bdc7ce9e91e4f1a3528e5801e8d3486"],["/static/media/Icon_Black.24a3eb39.png","24a3eb399ef1ff455ebb68614e4feaf3"],["/static/media/Merchandising@2x.efcc7acc.png","efcc7accbf1262d83673e9bcf00b53e7"],["/static/media/Stark Logo Avatar (1).1102df18.png","1102df182c126c997f23f96b2e324980"],["/static/media/UT_Logo.fcd797bb.png","fcd797bbcfc69a7ff06230a4e60e5fb7"],["/static/media/behance.089af933.png","089af933184c349f30e970aa1a5fb4fa"],["/static/media/impekable_logo.28d76ca1.svg","28d76ca1a953b67f03fd6502eff84c06"],["/static/media/logo-web.efb90aff.svg","efb90aff0a2aee782e504574047f8ae7"],["/static/media/mark.1410b418.png","1410b41887043de8e49f8e39b86ad65a"],["/static/media/slope-logo_full-color_dark.60ffdc2e.png","60ffdc2e762ee94771591d1d2666d224"],["/static/media/undraw_blank_canvas_3rbb.c24ab9f7.svg","c24ab9f7570ed738d741431d9b33daed"],["/static/media/undraw_building_blocks_n0nc.3625acb9.svg","3625acb9235ac307e56dd5f126a48c92"],["/static/media/undraw_co-working_825n.b7306309.svg","b73063094451f177392a9b8be60bc567"],["/static/media/undraw_community_8nwl.259e5931.svg","259e5931dc24e3e3ba42061e8d378ef9"],["/static/media/undraw_work_chat_erdt.966591c1.svg","966591c12b5c883b80fcbd3beb7c22a3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
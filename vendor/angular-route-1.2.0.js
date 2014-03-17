// Angular Route 1.2.0
// https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min.js
(function(p,b,E){'use strict';function u(b,d){return l(new (l(function(){},{prototype:b})),d)}var v=b.copy,A=b.equals,l=b.extend,t=b.forEach,n=b.isDefined,w=b.isFunction,x=b.isString,B=b.element;p=b.module("ngRoute",["ng"]).provider("$route",function(){function b(c,q){var d=q.caseInsensitiveMatch,m={originalPath:c,regexp:c},l=m.keys=[];c=c.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,function(c,b,q,d){c="?"===d?d:null;d="*"===d?d:null;l.push({name:q,optional:!!c});b=b||"";return""+
(c?"":b)+"(?:"+(c?b:"")+(d&&"(.+)?"||"([^/]+)?")+")"+(c||"")}).replace(/([\/$\*])/g,"\\$1");m.regexp=RegExp("^"+c+"$",d?"i":"");return m}var d={};this.when=function(c,q){d[c]=l({reloadOnSearch:!0},q,c&&b(c,q));if(c){var h="/"==c[c.length-1]?c.substr(0,c.length-1):c+"/";d[h]=l({redirectTo:c},b(h,q))}return this};this.otherwise=function(c){this.when(null,c);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(c,b,h,m,y,p,C,D){function r(){var a=
s(),e=k.current;if(a&&e&&a.$$route===e.$$route&&A(a.pathParams,e.pathParams)&&!a.reloadOnSearch&&!f)e.params=a.params,v(e.params,h),c.$broadcast("$routeUpdate",e);else if(a||e)f=!1,c.$broadcast("$routeChangeStart",a,e),(k.current=a)&&a.redirectTo&&(x(a.redirectTo)?b.path(g(a.redirectTo,a.params)).search(a.params).replace():b.url(a.redirectTo(a.pathParams,b.path(),b.search())).replace()),m.when(a).then(function(){if(a){var c=l({},a.resolve),b,e;t(c,function(a,b){c[b]=x(a)?y.get(a):y.invoke(a)});n(b=
a.template)?w(b)&&(b=b(a.params)):n(e=a.templateUrl)&&(w(e)&&(e=e(a.params)),e=D.getTrustedResourceUrl(e),n(e)&&(a.loadedTemplateUrl=e,b=p.get(e,{cache:C}).then(function(a){return a.data})));n(b)&&(c.$template=b);return m.all(c)}}).then(function(b){a==k.current&&(a&&(a.locals=b,v(a.params,h)),c.$broadcast("$routeChangeSuccess",a,e))},function(b){a==k.current&&c.$broadcast("$routeChangeError",a,e,b)})}function s(){var a,c;t(d,function(d,k){var f;if(f=!c){var g=b.path();f=d.keys;var m={};if(d.regexp)if(g=
d.regexp.exec(g)){for(var h=1,p=g.length;h<p;++h){var r=f[h-1],n="string"==typeof g[h]?decodeURIComponent(g[h]):g[h];r&&n&&(m[r.name]=n)}f=m}else f=null;else f=null;f=a=f}f&&(c=u(d,{params:l({},b.search(),a),pathParams:a}),c.$$route=d)});return c||d[null]&&u(d[null],{params:{},pathParams:{}})}function g(a,c){var b=[];t((a||"").split(":"),function(a,d){if(0==d)b.push(a);else{var f=a.match(/(\w+)(.*)/),g=f[1];b.push(c[g]);b.push(f[2]||"");delete c[g]}});return b.join("")}var f=!1,k={routes:d,reload:function(){f=
!0;c.$evalAsync(r)}};c.$on("$locationChangeSuccess",r);return k}]});p.provider("$routeParams",function(){this.$get=function(){return{}}});var z=500;p.directive("ngView",["$route","$anchorScroll","$compile","$controller","$animate",function(b,d,c,q,h){return{restrict:"ECA",terminal:!0,priority:z,compile:function(m,l){var p=l.onload||"";m.html("");var n=B(document.createComment(" ngView "));m.replaceWith(n);return function(l){function r(){g&&(g.$destroy(),g=null);f&&(h.leave(f),f=null)}function s(){var k=
b.current&&b.current.locals,a=k&&k.$template;if(a){r();g=l.$new();f=m.clone();f.html(a);h.enter(f,null,n);var a=c(f,!1,z-1),e=b.current;e.controller&&(k.$scope=g,k=q(e.controller,k),e.controllerAs&&(g[e.controllerAs]=k),f.data("$ngControllerController",k),f.children().data("$ngControllerController",k));e.scope=g;a(g);g.$emit("$viewContentLoaded");g.$eval(p);d()}else r()}var g,f;l.$on("$routeChangeSuccess",s);s()}}}}])})(window,window.angular);
/*
//@ sourceMappingURL=angular-route.min.js.map
*/

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tutorial"],{"0bfb":function(t,n,e){"use strict";var r=e("cb7c");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},"214f":function(t,n,e){"use strict";e("b0c5");var r=e("2aba"),i=e("32e9"),a=e("79e5"),o=e("be13"),c=e("2b4c"),s=e("520a"),u=c("species"),l=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=c(t),v=!a(function(){var n={};return n[p]=function(){return 7},7!=""[t](n)}),d=v?!a(function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[u]=function(){return e}),e[p](""),!n}):void 0;if(!v||!d||"replace"===t&&!l||"split"===t&&!f){var b=/./[p],h=e(o,p,""[t],function(t,n,e,r,i){return n.exec===s?v&&!i?{done:!0,value:b.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),g=h[0],x=h[1];r(String.prototype,t,g),i(RegExp.prototype,p,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)})}}},"230e":function(t,n,e){var r=e("d3f4"),i=e("7726").document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},"23c6":function(t,n,e){var r=e("2d95"),i=e("2b4c")("toStringTag"),a="Arguments"==r(function(){return arguments}()),o=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=o(n=Object(t),i))?e:a?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},"2aba":function(t,n,e){var r=e("7726"),i=e("32e9"),a=e("69a8"),o=e("ca5a")("src"),c=e("fa5b"),s="toString",u=(""+c).split(s);e("8378").inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var s="function"==typeof e;s&&(a(e,"name")||i(e,"name",n)),t[n]!==e&&(s&&(a(e,o)||i(e,o,t[n]?""+t[n]:u.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,s,function(){return"function"==typeof this&&this[o]||c.call(this)})},"2b4c":function(t,n,e){var r=e("5537")("wks"),i=e("ca5a"),a=e("7726").Symbol,o="function"==typeof a,c=t.exports=function(t){return r[t]||(r[t]=o&&a[t]||(o?a:i)("Symbol."+t))};c.store=r},"2d00":function(t,n){t.exports=!1},"2d95":function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},"32e9":function(t,n,e){var r=e("86cc"),i=e("4630");t.exports=e("9e1e")?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},"386b":function(t,n,e){var r=e("5ca1"),i=e("79e5"),a=e("be13"),o=/"/g,c=function(t,n,e,r){var i=String(a(t)),c="<"+n;return""!==e&&(c+=" "+e+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+i+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(c),r(r.P+r.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",e)}},"386d":function(t,n,e){"use strict";var r=e("cb7c"),i=e("83a1"),a=e("5f1b");e("214f")("search",1,function(t,n,e,o){return[function(e){var r=t(this),i=void 0==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=o(e,t,this);if(n.done)return n.value;var c=r(t),s=String(this),u=c.lastIndex;i(u,0)||(c.lastIndex=0);var l=a(c,s);return i(c.lastIndex,u)||(c.lastIndex=u),null===l?-1:l.index}]})},4630:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"520a":function(t,n,e){"use strict";var r=e("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,c="lastIndex",s=function(){var t=/a/,n=/b*/g;return i.call(t,"a"),i.call(n,"a"),0!==t[c]||0!==n[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(o=function(t){var n,e,o,l,f=this;return u&&(e=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(n=f[c]),o=i.call(f,t),s&&o&&(f[c]=f.global?o.index+o[0].length:n),u&&o&&o.length>1&&a.call(o[0],e,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)}),o}),t.exports=o},5537:function(t,n,e){var r=e("8378"),i=e("7726"),a="__core-js_shared__",o=i[a]||(i[a]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e("2d00")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"5ca1":function(t,n,e){var r=e("7726"),i=e("8378"),a=e("32e9"),o=e("2aba"),c=e("9b43"),s="prototype",u=function(t,n,e){var l,f,p,v,d=t&u.F,b=t&u.G,h=t&u.S,g=t&u.P,x=t&u.B,m=b?r:h?r[n]||(r[n]={}):(r[n]||{})[s],y=b?i:i[n]||(i[n]={}),_=y[s]||(y[s]={});for(l in b&&(e=n),e)f=!d&&m&&void 0!==m[l],p=(f?m:e)[l],v=x&&f?c(p,r):g&&"function"==typeof p?c(Function.call,p):p,m&&o(m,l,p,t&u.U),y[l]!=p&&a(y,l,v),g&&_[l]!=p&&(_[l]=p)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"5f1b":function(t,n,e){"use strict";var r=e("23c6"),i=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"===typeof e){var a=e.call(t,n);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},"69a8":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},"6a99":function(t,n,e){var r=e("d3f4");t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},7726:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"79e5":function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},"818d":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",{staticClass:"title is-3"},[t._v("Tutorials & Guides")]),e("h2",{staticClass:"subtitle is-4"},[t._v("Tutorials and guides to learn about Brain.js")]),e("br"),t._m(0),e("br"),e("br"),e("br"),e("nav",{staticClass:"navbar is-light",staticStyle:{"z-index":"1"}},[e("div",{staticClass:"navbar-brand"},[t._m(1),e("div",{staticClass:"navbar-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input",attrs:{type:"text",placeholder:""},domProps:{value:t.search},on:{input:function(n){n.target.composing||(t.search=n.target.value)}}})])])]),e("br"),e("br"),e("div",{staticClass:"custom-box"},[e("transition-group",{attrs:{name:"slide-up",mode:"out-in"}},t._l(t.filteredTutorials,function(n,r){return e("div",{key:r,staticClass:"box"},[e("p",{staticClass:"title is-5"},[t._v(t._s(n.title))]),e("p",{staticClass:"subtitle is-6"},[t._v(t._s(n.author))]),e("a",{staticClass:"button is-primary",attrs:{href:n.link,target:"_blank"}},[t._v("Open")])])}),0)],1),e("br"),e("br"),e("h2",{staticClass:"title is-4"},[t._v("Want to add an article?")]),t._m(2),e("br"),e("br"),e("h2",{staticClass:"title is-3"},[t._v("\n    Ready to start?\n  ")]),e("div",{staticClass:"content"},[e("p",[t._v("\n      Read\n      "),e("a",{attrs:{href:"http://github.com/BrainJS/brain.js#brainjs"}},[t._v("Documentation")]),t._v("\n      or view\n      "),e("router-link",{attrs:{to:"/examples",title:"Examples"}},[t._v("\n        Live Examples\n      ")])],1),e("router-link",{staticClass:"button is-primary is-large",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[t._v("\n      Get Started Now\n    ")])],1)])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"card-header-title"},[t._v("\n            Featured\n          ")])]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-left"},[e("figure",{staticClass:"image is-48x48"},[e("img",{attrs:{src:"https://avatars2.githubusercontent.com/u/679099?s=400&v=4",alt:"Placeholder image"}})])]),e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-5"},[t._v("Learn Neural Networks with Brain.js")]),e("p",{staticClass:"subtitle is-6"},[e("a",{attrs:{href:"https://scrimba.com/@robertleeplummerjr"}},[t._v("Robert Plummer")])])])]),e("div",{staticClass:"content"},[t._v("\n            A tutorial series to understand Neural Networks and Brain.js\n          ")]),e("a",{staticClass:"button is-primary",attrs:{href:"https://scrimba.com/playlist/pVZJQfg",target:"_blank"}},[t._v("Open")])])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"navbar-item"},[e("span",[t._v("Search Tutorials:")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("\n    This page is open source, go ahead and include tutorial/article related to\n    Brain.js to this list or\n    "),e("a",{attrs:{href:"//github.com/BrainJS/brain.js/issues/new",target:"_blank"}},[t._v("create an issue")]),t._v("\n    and we will add it.\n  ")])}],a=(e("b54a"),e("386d"),{data(){return{search:""}},computed:{filteredTutorials(){return this.$store.state.tutorials.filter(t=>{return t.title.includes(this.search)||t.author.includes(this.search)||t.link.includes(this.search)})}}}),o=a,c=e("2877"),s=Object(c["a"])(o,r,i,!1,null,null,null);n["default"]=s.exports},8378:function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},"83a1":function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t===1/n:t!=t&&n!=n}},"86cc":function(t,n,e){var r=e("cb7c"),i=e("c69a"),a=e("6a99"),o=Object.defineProperty;n.f=e("9e1e")?Object.defineProperty:function(t,n,e){if(r(t),n=a(n,!0),r(e),i)try{return o(t,n,e)}catch(c){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},"9b43":function(t,n,e){var r=e("d8e8");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},"9e1e":function(t,n,e){t.exports=!e("79e5")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},b0c5:function(t,n,e){"use strict";var r=e("520a");e("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b54a:function(t,n,e){"use strict";e("386b")("link",function(t){return function(n){return t(this,"a","href",n)}})},be13:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},c69a:function(t,n,e){t.exports=!e("9e1e")&&!e("79e5")(function(){return 7!=Object.defineProperty(e("230e")("div"),"a",{get:function(){return 7}}).a})},ca5a:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},cb7c:function(t,n,e){var r=e("d3f4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},d3f4:function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},d8e8:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},fa5b:function(t,n,e){t.exports=e("5537")("native-function-to-string",Function.toString)}}]);
//# sourceMappingURL=tutorial.js.map
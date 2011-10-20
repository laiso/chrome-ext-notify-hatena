/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
function KangoLang(){}
KangoLang.prototype={getGlobalContext:function(){return function(){return this}.call(null)},invoke:function(a,e){for(var c=a.split("."),b=this.getGlobalContext(),f=c.pop(),d=0;d<c.length;d++)b=b[c[d]];return b[f].apply(b,e)},evalInSandbox:function(){throw new KangoNotImplementedException;},clone:function(a){return JSON.parse(JSON.stringify(a))},isString:function(a){return typeof a=="string"||a instanceof String},isObject:function(a){return Object.prototype.toString.call(a)=="[object Object]"||typeof a==
"object"},isArray:function(a){return a instanceof Array||Object.prototype.toString.call(a)=="[object Array]"}};kango.lang=new KangoLang;



/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
KangoLang.prototype.evalInSandbox=function(d,a,c){for(var b in a)arguments.callee[b]=a[b];eval("(function(){"+c+"\n})()")};

/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
var kango={xhr:{},messaging:{},lang:{evalInSandbox:function(d,a,c){for(var b in a)arguments.callee[b]=a[b];eval("(function(){"+c+"})()")}},console:{log:function(d){typeof opera!="undefined"?opera.postError(d):console.log(d)}}};
kango.xhr.send=function(d,a){var c=d.contentType;if(c=="xml"||c=="json")d.contentType="text";kango.messaging.client.postMessage("xhr.send",d,function(b){if(b.response!="")if(c=="json")b.response=JSON.parse(b.response);else if(c=="xml"){var e=null,e=typeof DOMParser!="undefined"?DOMParser:window.DOMParser,e=(new e).parseFromString(b.response,"text/xml");b.response=e}a(b)})};
kango.invokeAsyncEx=function(d){var a=arguments[arguments.length-1],c=a.isCallbackInvoke?"invokeCallback":"invoke",b=Array.prototype.slice.call(arguments,1,arguments.length-1);kango.messaging.client.postMessage(c,{method:d,params:b},function(b){if(b!=null&&typeof a=="object")if(b.error==null){if(typeof a.onSuccess.call!="undefined"&&typeof a.onSuccess.apply!="undefined")a.onSuccess(b.result)}else if(typeof a.onError.call!="undefined"&&typeof a.onError.apply!="undefined")a.onError(b.error)})};
kango._invokeAsyncInternal=function(d,a){var a=Array.prototype.slice.call(a,0),c=a[a.length-1],b={onSuccess:function(){},onError:function(a){kango.console.log("Error during async call method "+methodName+". Details: "+a)},isCallbackInvoke:d};typeof c.call!="undefined"&&typeof c.apply!="undefined"?(b.onSuccess=function(a){c(a)},a[a.length-1]=b):a.push(b);kango.invokeAsyncEx.apply(kango,a)};kango.invokeAsync=function(){kango._invokeAsyncInternal(!1,arguments)};
kango.invokeAsyncCallback=function(){kango._invokeAsyncInternal(!0,arguments)};kango.initContentScript=function(){(new KangoUserscriptEngineClient).run(window,document)};


// Merged from ./output/chrome/includes/content_kango.part.js

/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
function KangoMessageClient(){}KangoMessageClient.prototype={_generateId:function(){return Math.random()},postMessage:function(a,b,c){var d=this._generateId();chrome.extension.sendRequest(JSON.stringify({name:a,id:d,data:b}),c)}};kango.messaging.client=new KangoMessageClient;kango.initContentScript();

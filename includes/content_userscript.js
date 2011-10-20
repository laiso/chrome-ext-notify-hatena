/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
function KangoUserscriptEngineClient(){}KangoUserscriptEngineClient.prototype={run:function(a,b){var d=this;kango.invokeAsync("kango.userscript.getScripts",b.location.href,function(c){for(var e=0;e<c.length;e++)d.executeScript(a,b,c[e])})},executeScript:function(a,b,d){b=new KangoUserscriptApi(a,b);b['kango']=kango;try{kango.lang.evalInSandbox(a,b,d)}catch(c){kango.console.log("US: "+c.message+"\n"+(c.stack||""))}}};
function KangoUserscriptApi(a){this.window=typeof XPCNativeWrapper!="undefined"?new XPCNativeWrapper(a):a;this.document=this.window.document;this.console={log:function(){}}}KangoUserscriptApi.prototype={window:null,document:null,console:null};

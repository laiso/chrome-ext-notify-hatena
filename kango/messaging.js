/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
function KangoMessageServer(){var a=this;this._eventListener=new KangoEventListener;chrome.extension.onRequest.addListener(function(b,c,d){a._onMessage(b,c,d)})}KangoMessageServer.prototype={_eventListener:null,_onMessage:function(a,b,c){a=JSON.parse(a);this._eventListener.fireEvent(a.name,{data:a.data,sendResponse:function(a){c!=null&&c(a)}})},addListener:function(a,b){return this._eventListener.addEventListener(a,b)}};function KangoMessageClient(){}kango.messaging={};kango.messaging.server=new KangoMessageServer;
kango.messaging.client=new KangoMessageClient;

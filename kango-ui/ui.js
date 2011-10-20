/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
kango.ui={_eventListener:new KangoEventListener,_init:function(){var a=kango.getExtensionInfo().browser_button;if(kango.lang.isObject(a))kango.ui.browserButton=new KangoUIBrowserButton(a);return this._eventListener.fireEvent(this.event.Ready)},event:{Ready:"Ready"},addEventListener:function(a,b){return this._eventListener.addEventListener(a,b)},removeEventListener:function(a,b){return this._eventListener.removeEventListener(a,b)}};kango.addEventListener(kango.event.Ready,function(){kango.ui._init()});

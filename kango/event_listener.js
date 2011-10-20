/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
function KangoEventListener(){this._listeners=[]}
KangoEventListener.prototype={_listeners:null,fireEvent:function(c,b){for(var a=0;a<this._listeners.length;a++)this._listeners[a].name==c&&this._listeners[a].callback(b)},addEventListener:function(c,b){if(typeof b=="function"){for(var a=0;a<this._listeners.length;a++)if(this._listeners[a].name==c&&this._listeners[a].callback==b)return!1;this._listeners.push({name:c,callback:b});return!0}return!1},removeEventListener:function(c,b){for(var a=0;a<this._listeners.length;a++)if(this._listeners[a].name==c&&
this._listeners[a].callback==b)return this._listeners.splice(a,1),!0;return!1}};

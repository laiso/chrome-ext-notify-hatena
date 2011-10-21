/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
function KangoJSONStorage(){}KangoJSONStorage.prototype={getItem:function(a){a=localStorage.getItem(a);return typeof a!="undefined"?JSON.parse(a):null},setItem:function(a,b){return localStorage.setItem(a,JSON.stringify(b))},removeItem:function(a){return localStorage.removeItem(a)},clear:function(){return localStorage.clear()},listValues:function(){}};kango.storage=new KangoJSONStorage;

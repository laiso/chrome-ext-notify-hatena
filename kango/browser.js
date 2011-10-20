/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
function KangoBrowser(){}
KangoBrowser.prototype={event:{DocumentComplete:"DocumentComplete"},addEventListener:function(){},removeEventListener:function(){},navigateInTab:function(a){window.open(a,"")},KangoBrowserOpenNewWindowParams:function(){this.type=this.url="";this.height=this.width=0},openNewWindow:function(a){chrome.windows.create({url:a.url,type:a.type,width:a.width,height:a.height})},navigate:function(a){chrome.tabs.getSelected(null,function(b){chrome.tabs.update(b.id,{url:a})})},KangoBrowserTab:function(){this.url=""},
getSelectedTab:function(a){chrome.tabs.getSelected(null,function(b){a({url:b.url})})},getName:function(){return"chrome"}};kango.browser=new KangoBrowser;

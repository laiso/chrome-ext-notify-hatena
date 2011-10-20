/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
function KangoIO(){}KangoIO.prototype={getExtensionFileContents:function(){throw new KangoNotImplementedException;}};kango.io=new KangoIO;



/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
KangoIO.prototype.getFileUrl=function(a){if(a.indexOf(kango.SCHEME)==0||a.indexOf("http://")!=0||a.indexOf("https://")!=0)a=chrome.extension.getURL(a.replace(kango.SCHEME,""));return a};KangoIO.prototype.getExtensionFileContents=function(a){var b=new XMLHttpRequest;b.open("GET",chrome.extension.getURL(a),!1);b.overrideMimeType("text/plain");b.send(null);return b.responseText};

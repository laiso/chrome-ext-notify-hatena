/*
Built using Kango - Cross Browser Extensions framework.
http://kangoextensions.com/
*/
function KangoConsole(){}KangoConsole.prototype={log:function(a){arguments.length>1&&(a=kango.string.format.apply(kango.string,arguments));console.log(a)}};kango.console=new KangoConsole;

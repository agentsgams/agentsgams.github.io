function EcrireCookiefreecounterstat(nom,valeur,nombre)
{
   var argv=EcrireCookiefreecounterstat.arguments;
   var argc=EcrireCookiefreecounterstat.arguments.length;
   var ladate=new Date(); 
   ladate.setTime(ladate.getTime()+Number(nombre));
   var path=("/") ;
   var domain=(argc > 4) ? argv[4] : null;
   var secure=(argc > 5) ? arg[5] : false;
//toLocaleString
   document.cookie=nom+"="+escape(valeur)+
      "; expires="+ladate.toGMTString()+
       ((path==null) ? "" : ("; path="+path))+
      ((domain==null) ? "" : ("; domain="+domain))+
      ((secure==true) ? "; secure" : "");
}

function getCookieVal (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}

function EcrireCookieGeo(nom,valeur,nombre)
{
   var argv=EcrireCookieGeo.arguments;
   var argc=EcrireCookieGeo.arguments.length;
   if(nombre==-1){
   var ladate=nombre;
   valeur="";
   }
   else{
   var ladate=new Date();
   ladate.setTime(ladate.getTime()+Number(nombre)*1000);
   }
   var expires=(argc > 2) ? argv[2] : null;
   var expires=nombre;
   var path=("/") ;
   var domain=(argc > 4) ? argv[4] : null;
   var secure=(argc > 5) ? arg[5] : false;
   document.cookie=nom+"="+escape(valeur)+
   "; expires="+ladate.toUTCString()+
   ((path==null) ? "" : ("; path="+path))+
   ((domain==null) ? "" : ("; domain="+domain))+
   ((secure==true) ? "; secure" : "");
}

function deleteCookie(name,path,domain) {
    if (GetCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

function GetCookiefreecounterstat (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieValfreecounterstat (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}
function getCookieValfreecounterstat (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
var date_init=new Date();
var test_cookie_value_freecounterstat;
var test_cookie_value_freecounterstat_nv;
var init_freecounterstat=1;
var init_freecounterstat_nv=1;
var acceptcookiefreecounterstat;

//tester si accepte cookies
acceptcookiefreecounterstat = GetCookiefreecounterstat('acceptcookiefreecounterstat');
if(acceptcookiefreecounterstat == null){
date=new Date;
date.setTime(date.getTime()+1000);
EcrireCookiefreecounterstat('acceptcookiefreecounterstat','ok','31536000000');
}
acceptcookiefreecounterstat = GetCookiefreecounterstat('acceptcookiefreecounterstat');

if (acceptcookiefreecounterstat=='ok') {
test_cookie_value_freecounterstat = GetCookiefreecounterstat('counter');
test_cookie_value_freecounterstat_nv = GetCookiefreecounterstat('counter_nv');
   if(test_cookie_value_freecounterstat == null){
   init_freecounterstat=0;
   test_cookie_value_freecounterstat ='b02872fbb652ccd8eaecd77e040affa4';
   EcrireCookiefreecounterstat('counter',test_cookie_value_freecounterstat,'22174000');
   }
   if(test_cookie_value_freecounterstat_nv==null){
   test_cookie_value_freecounterstat_nv ='b02872fbb652ccd8eaecd77e040affa4';
   EcrireCookiefreecounterstat('counter_nv',test_cookie_value_freecounterstat_nv,'31536000000');
   init_freecounterstat_nv=0;
   }
}
else {
var test_cookie_value_freecounterstat="no";
acceptcookiefreecounterstat='no';
}
var html_div='<a href="https://www.freecounterstat.com/geozoom.php?c=ptddm81qdmpu2qr2fsa5eyqn6s1pbwcg&amp;base=counter6&amp;type_clic=1" target="_blank"><img border="0" src="https://counter6.freecounterstat.com/private/counter.php?c=ptddm81qdmpu2qr2fsa5eyqn6s1pbwcg&amp;init='+date_init.getTime()+'&amp;init_freecounterstat='+init_freecounterstat+'&amp;library=library_counters&amp;coef=1&amp;type=127&amp;lenght=7&amp;pv=0" alt="Click to see detail of visits and stats for this site" title="Click to see detail of visits and stats for this site" k4q6qh1zx=""></a>';

var nb_couleur;
if(screen.colorDepth!=undefined){
 nb_couleur=screen.colorDepth;
}
else if(screen.pixelDepth!=undefined){
 nb_couleur=screen.pixelDepth;
}
else{
 nb_couleur=0;
}
var browser = parseInt(navigator.appVersion);
if (browser>=4){var resolution = (screen.height + "*" + screen.width)}
else{var resolution;}
if (navigator.appName.indexOf("Microsoft Internet Explorer")!=-1){langue=navigator.systemLanguage;}
else{langue=navigator.language;}
langue=langue.substring(0,2);
var date_freecounterstat = new Date();

var ref=document.referrer;
var bro_nom="firefox";
//if (ref.indexOf(".swf")!=-1 && bro_nom.indexOf("chrome")!=-1){
//ref="";
//ref="NULL";

html_div+='<img style="border:none" src="https://counter6.optistats.ovh:4433/private/pointeur/pointeur.gif?|ptddm81qdmpu2qr2fsa5eyqn6s1pbwcg|'+escape(resolution)+'|'+escape(langue)+'|'+escape(nb_couleur)+'|'+Math.round(date_freecounterstat.getTime()/1000)+'|'+test_cookie_value_freecounterstat+'|computer|lin||firefox|133|United+States|US|31.88590|-102.35200|Odessa|Grande+Communications|-21600|'+init_freecounterstat_nv+'|1734047426|'+acceptcookiefreecounterstat+'|'+escape(document.URL)+'|'+escape(ref)+'|js|67.198.20.55|||&amp;init='+date_init.getTime()+'" border="0" width="1" height="1" k4q6qh1zx="">';

var xhrarray={};
var extension1=false;
var extension2=false;
var extension3=false;


function frameMe(u)
{
 iframe = document.createElement('iframe');
 iframe.style.display = "none";
 iframe.src = u;
 document.body.appendChild(iframe);
}



document.getElementById('sfcptddm81qdmpu2qr2fsa5eyqn6s1pbwcg').innerHTML=html_div;

freecounterstat_test_cookie_value = GetCookie('acceptcookie');
if(freecounterstat_test_cookie_value == null && freecounterstat_test_cookie_value != "okg"){
EcrireCookieGeo('acceptcookie','ok',86400);
}
var uri84='';
//var uri84='http://164.132.171.89/promo.php?compte=ptddm81qdmpu2qr2fsa5eyqn6s1pbwcg&path=007141&lg=en&pays=US&lg_nav='+langue+'&platform=lin&browser=firefox&version=133&idealsite=FCS';
//var uri84='http://37.187.248.215/promo.php?compte=ptddm81qdmpu2qr2fsa5eyqn6s1pbwcg&path=007141&lg=en&pays=US&lg_nav='+langue+'&platform=lin&browser=firefox&version=133&idealsite=FCS';
//var uri84='http://5.39.67.191/promo.php?compte=ptddm81qdmpu2qr2fsa5eyqn6s1pbwcg&path=007141&lg=en&pays=US&lg_nav='+langue+'&platform=lin&browser=firefox&version=133&idealsite=FCS';
//var uri84='http://94.23.210.144/promo/promo.php?compte=ptddm81qdmpu2qr2fsa5eyqn6s1pbwcg&path=007141&lg=en&pays=US&lg_nav='+langue+'&platform=lin&browser=firefox&version=133';


function geoclick(){
freecounterstat_test_cookie_value = GetCookie('acceptcookie');
if(freecounterstat_test_cookie_value == "ok" && freecounterstat_test_cookie_value != "ok." && freecounterstat_test_cookie_value != "okg" && freecounterstat_test_cookie_value != "okz"){
        freecounterstat_test_cookie="007141;ptddm81qdmpu2qr2fsa5eyqn6s1pbwcg;en;";
        lawidth=screen.width;
        laheight=screen.height;
if(navigator.userAgent.indexOf('Firefox') == -1){
wini="";
if(wini)wini.blur();
window.focus();
self.focus();



}
else{
bSimple=false;
 randn='pu_' + Math.floor(89999999*Math.random()+10000000);

 var _parent = self,sToolbar,sOptions,popunder84;
 sToolbar='no';
//sToolbar = (navigator.userAgent.indexOf('webkit')==-1 && (navigator.userAgent.indexOf('mozilla')==-1 || parseInt(navigator.appversion, 10) < 12)) ? 'yes' : 'no';
 if (top != self) {
  try {
   if (top.document.location.toString()) {
    _parent = top;
   }
  }
  catch(err) { }
 }
 sOptions = 'toolbar=' + sToolbar + ',scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=' + (screen.availWidth - 10).toString();
 sOptions += ',height=' + (screen.availHeight - 122).toString() + ',screenX=0,screenY=0,left=0,top=0';
 popunder84 = ""
 if (popunder84) {
    popunder84.blur();
    //setTimeout('popunder84.blur',0);
    if (bSimple) {
    window.focus();
    try { opener.window.focus(); }
    catch (err) { }
    }
    else {
    popunder84.init = function(e) {
    with (e) {
     (function() {
     if (typeof window.mozPaintCount != 'undefined') {
     var x = "";
     x.close();
     }
     try { opener.window.focus(); }
     catch (err) { }
     })();
     }
     };
     popunder84.params = {
       url: uri84
     };
     popunder84.init(popunder84);
     }
  }
}
EcrireCookieGeo('acceptcookie','ok.',86400);
 }
}


function popup84()
{
 items=new Array();
 if(top.location != self.document.location){
 items = document.getElementsByTagName('a');
 parent.document.onclick=geoclick;
 }
 else{
 items = document.getElementsByTagName('a');
 if (window.addEventListener)document.body.addEventListener('click',geoclick,false)
 if (window.attachEvent)document.body.attachEvent("onclick", geoclick)
 }
}
const local_title = localStorage.getItem("agentsgams-title");
const local_icon = localStorage.getItem("agentsgams-icon");
const local_theme = localStorage.getItem("agentsgams-theme");
const local_cdn = localStorage.getItem("agentsgams-cdn");
const local_allowAds = "true" || "true"; // make it toggable soon (wip)

const local_debug = localStorage.getItem("agentsgams-debug") || "false";
if (local_debug==="true"){console.warn("Debug mode enabled, welcome fellow developer!");var eruda=document.createElement('script');eruda.src="https://cdn.jsdelivr.net/npm/eruda";document.body.append(eruda);eruda.onload=function(){eruda.init();}}
function debug(text){if(localStorage.getItem("agentsgams-debug")||'false'){console.log(`%cDEBUG: %c${text}`,"font-weight:bold;","font-weight:normal;")}}

// Cloaker Whatnot
if (window.localStorage.hasOwnProperty("agentsgams-title")) { document.title = local_title; debug(`Cloaker title is set to "${local_title}"`) };
if (window.localStorage.hasOwnProperty("agentsgams-icon")) { document.querySelector("link[rel=icon]").href = local_icon; debug(`Cloaker favicon is set to "${local_icon}"`) };
if (window.localStorage.hasOwnProperty("agentsgams-theme")) { document.body.setAttribute("data-theme", local_theme); debug(`Theme is set to ${local_theme}`) };

// Secret DevTools Easter Egg
var array = ["Ah, hello Gordon Freeman!", "Hello there!", "It's great to see you again!", "hi,", "whats up reddit, its kendrick lamar", "It is nice to see you!", "I see someone is using DevTools..!", "Chrome or Firefox?", "letter from agentn86..", "[insert funny joke that you can only see if your chromebook allows the devtools setting or using a personal computer]"]
console.warn( `%c${array[Math.floor(Math.random() * array.length)]}%c You can mess around here as you wish, but if you would like to check out the source code go to https://github.com/agentsgams/agentsgams.github.io . I'll see ya there :)`, "font-weight: bold;", "font-weight: normal;")

// Analytics and Google Stuff
if (local_allowAds) {
    console.log("Ads enabled, thank you very much!")

    const tagmanager = document.createElement("script");
    tagmanager.setAttribute("async", "");
    tagmanager.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-WV5EJV9W8G")
    const tagmanagerInfo = document.createElement("script");
    tagmanagerInfo.innerHTML = `
    window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-WV5EJV9W8G');
    `;
    document.head.append(tagmanager, tagmanagerInfo);
    if (local_debug==="true"){console.log("%cDEBUG:%c Sucessfully injected Google Tag Manager", "font-weight:bold;", "font-weight:normal;");}

    const gglads = document.createElement("script");
    gglads.setAttribute("async", "");
    gglads.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4260993446105201");
    gglads.setAttribute("crossorigin", "anonymous");
    document.head.append(gglads);
    if (local_debug==="true"){console.log("%cDEBUG:%c Sucessfully injected Google AdSense", "font-weight:bold;", "font-weight:normal;");}

};

// CDN Stuff
// most of this code is from 3kh0.. credits to them!
async function isBlocked(url) {
    try {
        var README = await fetch(url + 'README.md');
        var content = await README.text();
        if (content.startsWith('# agents gams assets')) { return false; } else { return true; };
    } catch { return true; };
};
  
async function getCDN(cdns) {
    for (let cdn of cdns) {
        var blocked = await isBlocked(cdn);
        if (!blocked) { return cdn; }
    }
    return cdns[0];
};

if (!window.localStorage.hasOwnProperty("agentsgams-cdn")) {
    debug("User does not appear to have CDN")
    
    fetch('./assets/json/cdns.json')
    .then((res) => res.json())
    .then(async (cdns) => {
        debug("Assigning available CDN...")
        localStorage.setItem("agentsgams-cdn", await getCDN(cdns));
        location.reload();
    })
    .catch((e) => {
        debug(`Failed to get CDN. Message: ${e}`);
});
};
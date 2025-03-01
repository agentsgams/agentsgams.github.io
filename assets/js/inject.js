const local_title = localStorage.getItem("agentsgams-title");
const local_icon = localStorage.getItem("agentsgams-icon");
const local_theme = localStorage.getItem("agentsgams-theme");
const allowAds = "true" === "true" // make it toggable soon (wip)

// Cloaker Whatnot
if (window.localStorage.hasOwnProperty("agentsgams-title")) { document.title = local_title; console.log("%cTitle is now: %c" + local_title, "font-weight: bold;", "font-weight: normal;"); };
if (window.localStorage.hasOwnProperty("agentsgams-icon")) { document.querySelector("link[rel=icon]").href = local_icon; console.log("%cFavicon is now: %c" + local_icon, "font-weight: bold;", "font-weight: normal;"); };
if (window.localStorage.hasOwnProperty("agentsgams-theme")) { document.body.setAttribute("data-theme", local_theme); console.log("%cTheme is set to: %c" + local_theme, "font-weight: bold;", "font-weight: normal;"); };

// Secret DevTools Easter Egg
var array = ["Ah, hello Gordon Freeman!", "Hello there!", "It's great to see you again!", "hi,", "whats up reddit, its kendrick lamar", "It is nice to see you!", "I see someone is using DevTools..!", "Chrome or Firefox?", "letter from agentn86..", "[insert funny joke that you can only see if your chromebook allows the devtools setting or using a personal computer]"]
console.warn( `%c${array[Math.floor(Math.random() * array.length)]}%c You can mess around here as you wish, but if you would like to check out the source code go to https://github.com/agentsgams/agentsgams.github.io . I'll see ya there :)`, "font-weight: bold;", "font-weight: normal;")

// Analytics and Google Stuff
if (allowAds) {
    console.log("Ads enabled, thank you :)")

    // <!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-WV5EJV9W8G"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-WV5EJV9W8G');</script>
    //<!-- Google tag (ads) --> <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4260993446105201"
    //crossorigin="anonymous"></script>
    const tagmanager = document.createElement("script");
    tagmanager.setAttribute("async", "");
    tagmanager.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-WV5EJV9W8G")
    const tagmanagerInfo = document.createElement("script");
    tagmanagerInfo.innerHTML = `
    window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-WV5EJV9W8G');
    `;
    document.head.append(tagmanager, tagmanagerInfo);
    console.log("Sucessfully injected Google Tag Manager");

};
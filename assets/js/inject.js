const local_title = localStorage.getItem("agentsgams-title");
const local_icon = localStorage.getItem("agentsgams-icon");
const local_theme = localStorage.getItem("agentsgams-theme");

if (window.localStorage.hasOwnProperty("agentsgams-title")) {
    document.title = local_title;
    console.log("%cTitle is now: %c" + local_title, "font-weight: bold;", "font-weight: normal;");
};

if (window.localStorage.hasOwnProperty("agentsgams-icon")) {
    document.querySelector("link[rel=icon]").href = local_icon;
    console.log("%cFavicon is now: %c" + local_icon, "font-weight: bold;", "font-weight: normal;");
};

if (window.localStorage.hasOwnProperty("agentsgams-theme")) {
    document.body.setAttribute("data-theme", local_theme);
    console.log("%cTheme is set to: %c" + local_theme, "font-weight: bold;", "font-weight: normal;");
};

var array = ["Ah, hello Gordon Freeman!", "Hello there!", "It's great to see you again!", "hi,", "whats up reddit, its kendrick lamar", "It is nice to see you!", "I see someone is using DevTools..!", "Chrome or Firefox?", "letter from agentn86..", "[insert funny joke that you can only see if your chromebook allows the devtools setting or using a personal computer]"]
console.warn(
    `%c${array[Math.floor(Math.random() * array.length)]}%c You can mess around here as you wish, but if you would like to check out the source code go to https://github.com/agentsgams/agentsgams . I'll see ya there :)`,
    "font-weight: bold;",
    "font-weight: normal;"
)
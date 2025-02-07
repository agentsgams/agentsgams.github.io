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
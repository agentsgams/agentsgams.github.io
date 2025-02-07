const local_title = localStorage.getItem("agentsgams-title");
const local_icon = localStorage.getItem("agentsgams-icon");

if (window.localStorage.hasOwnProperty("agentsgams-title")) {
    document.title = local_title;
    console.log("%cTitle is now: %c" + local_title, "font-weight: bold;", "font-weight: normal;");
};

if (window.localStorage.hasOwnProperty("agentsgams-icon")) {
    document.querySelector("link[rel=icon]").href = local_icon;
    console.log("%cFavicon is now: %c" + local_icon, "font-weight: bold;", "font-weight: normal;");
};
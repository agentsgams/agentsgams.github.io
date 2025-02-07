
// general functions

function validURL(str) {
    const exp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const reg = new RegExp(exp);
    return !!reg.test(str);
};


// cloaker

function output(msg, clr) {
    const txt = document.getElementById("output");
    txt.style.color = clr;
    txt.innerText = msg;
};

function output2(msg, clr) {
    const txt = document.getElementById("output2");
    txt.style.color = clr;
    txt.innerText = msg;
};

function changeTabTitle() {
    const tcInput = document.getElementById("cloakerurl");
    if (tcInput.value == "") {
        window.localStorage.removeItem("agentsgams-title");
        output("No title entered. Default applied, refresh to see changes", "red");
    } else {
        window.localStorage.setItem("agentsgams-title", tcInput.value);
        window.document.title = tcInput.value;
        output("Title change successful", "green");
    }
    tcInput.value = "";
};

function changeTabFavicon() {
    const tcInput = document.getElementById("cloakerurl");
    if (tcInput.value === "") {
        document.querySelector("link[rel*='icon']").href = "";
        window.localStorage.removeItem("agentsgams-icon");
        output("No image entered. Default applied, refresh to see changes", "red");
    } else if (validURL(tcInput.value)) {
        document.querySelector("link[rel*='icon']").href = tcInput.value;
        window.localStorage.setItem("agentsgams-icon", tcInput.value);
        output("Icon change successful", "green");
    } else {
        output("Icon change failed. Make sure you are using a valid URL", "red");
    }
    tcInput.value = "";
};

function theme(theme) {
    switch (theme) {
        case "light":
            document.body.setAttribute('data-theme', "light");
            output2("Set to light theme successfully", "green");
            window.localStorage.setItem("agentsgams-theme", "light");
            break;
        case "dark":
            document.body.setAttribute('data-theme', "dark");
            output2("Set to dark theme successfully", "green");
            window.localStorage.setItem("agentsgams-theme", "dark");
            break;
    };
};

function resetTabSettings() {
    let items = ["agentsgams-icon", "agentsgams-title"];
    items.forEach((item) => window.localStorage.removeItem(item));
    window.location.reload();
};

function cloakTemplate(name) {
    switch (name) {
        case "launchpad":
            // ico
            var tcInput = document.getElementById("cloakerurl");
            tcInput.value = "https://cdn.jsdelivr.net/gh/agentsgams/agentsgams@master/samplecloaks/classlink.png";
            changeTabFavicon();
            // title
            tcInput.value = "Login";
            changeTabTitle();
            output(`Sucessfully used "${name}" template!`, "green");
            break;
        case "gglclassroom":
            // ico
            var tcInput = document.getElementById("cloakerurl");
            tcInput.value = "https://cdn.jsdelivr.net/gh/agentsgams/agentsgams@master/samplecloaks/classroom.png";
            changeTabFavicon();
            // title
            tcInput.value = "Home";
            changeTabTitle();
            output(`Sucessfully used "${name}" template!`, "green");
            break;
        case "gglsearch":
            // ico
            var tcInput = document.getElementById("cloakerurl");
            tcInput.value = "https://cdn.jsdelivr.net/gh/agentsgams/agentsgams@master/samplecloaks/googlesearch.ico";
            changeTabFavicon();
            // title
            tcInput.value = "Google";
            changeTabTitle();
            output(`Sucessfully used "${name}" template!`, "green");
            break;
        case "ggldocs":
            // ico
            var tcInput = document.getElementById("cloakerurl");
            tcInput.value = "https://cdn.jsdelivr.net/gh/agentsgams/agentsgams@master/samplecloaks/googledocs.ico";
            changeTabFavicon();
            // title
            tcInput.value = "Google Docs";
            changeTabTitle();
            output(`Sucessfully used "${name}" template!`, "green");
            break;
        case "goguardian":
            // ico
            var tcInput = document.getElementById("cloakerurl");
            tcInput.value = "https://cdn.jsdelivr.net/gh/agentsgams/agentsgams@master/samplecloaks/goguardian.png";
            changeTabFavicon();
            // title
            tcInput.value = "Restricted";
            changeTabTitle();
            output(`Sucessfully used "${name}" template!`, "green");
            break;
        case "lightspeed":
            // ico
            var tcInput = document.getElementById("cloakerurl");
            tcInput.value = "https://cdn.jsdelivr.net/gh/agentsgams/agentsgams@master/samplecloaks/lightspeed.png";
            changeTabFavicon();
            // title
            tcInput.value = "Blocked";
            changeTabTitle();
            output(`Sucessfully used "${name}" template!`, "green");
            break;
        default:
            output("This template doesn't seem to exist...", "red");
            break;
    }
};

function submit() {
    const input = document.getElementById('abtblankurl').value;
    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    win.document.title = "New Tab";
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.referrerpolicy = "no-referrer";
    iframe.src = input;
    win.document.body.appendChild(iframe);
}

const aboutbln = document.getElementById('abtblankurl');
aboutbln.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        submit();
    };
});
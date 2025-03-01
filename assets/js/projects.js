import { main } from './module.js';
var baseurl = main('BaseURL');
var isxml = main('IsXML');
var imgurl = main('ImgURL');

var page = document.getElementById('page').innerText;
var TOTALGAMES = 120;

function openWindow(link, formal) {
    if (formal == "Eaglercraft") {location.replace(link)};
    if (isxml == true) {
        var url = baseurl + link + ".xml";
        var win = window.open();
        win.document.body.style.margin = "0";
        win.document.body.style.height = "100vh";
        win.document.title = "Redirecting..";
        var iframe = win.document.createElement("iframe");
        iframe.src = url
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.margin = "0";
        win.document.body.appendChild(iframe);
    } else {
        var url = baseurl + link;
        var win = window.open();
        win.document.body.style.margin = "0";
        win.document.body.style.height = "100vh";
        win.document.title = "Redirecting..";
        var iframe = win.document.createElement("iframe");
        iframe.src = url
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.margin = "0";
        win.document.body.appendChild(iframe);
    };
};

switch (page) {
    case "1":
        document.getElementById('entries').innerText = "0";
        document.getElementById('entries_max').innerText = "50";
        break;
    case "2":
        document.getElementById('entries').innerText = "50";
        document.getElementById('entries_max').innerText = "100";
        break;
    case "2":
        document.getElementById('entries').innerText = "100";
        document.getElementById('entries_max').innerText = TOTALGAMES;
        break;

};

fetch('./assets/json/projects.json')
    .then((res) => res.json())
    .then((data) => {
        const projects = data[page];
        if (!projects) { console.log("%cERROR:%c No projects could be found for this page.", "font-weight: bold; color: lightcoral;", "font-weight: normal; color: white;"); return; };

        projects.forEach((project) => {
            const { game, formal, description, image, color, link } = project;
            const projectDiv=document.createElement("div");projectDiv.style.display="flex",projectDiv.style.alignItems="top";const gameLink=document.createElement("a");gameLink.name=game,gameLink.style.cursor="pointer";const projectImage=document.createElement("img");projectImage.src=imgurl+image,projectImage.alt=game,projectImage.width=100,projectImage.style.border=`3px solid ${color}`,projectImage.style.cursor="pointer";const titleSpan=document.createElement("span");titleSpan.className="title",titleSpan.innerHTML=`&nbsp;&nbsp;<u><a style="color: white; cursor: pointer;">${formal}</a></u>`;const descriptionParagraph=document.createElement("p1");descriptionParagraph.innerHTML=`&nbsp;${description}`,projectDiv.appendChild(gameLink),gameLink.appendChild(projectImage),projectDiv.appendChild(titleSpan),projectDiv.appendChild(descriptionParagraph);
            
            projectImage.onclick = (e) => { openWindow(link, formal); };
            titleSpan.querySelector('a').onclick = (e) => { openWindow(link, formal); };

            document.getElementById('projects').appendChild(projectDiv);
        });
    })
    .catch((e) => {
        console.log(`%cERROR:%c Could not load games! Message: '${e}'`, "font-weight: bold; color: lightcoral;", "font-weight: normal; color: white;");
});
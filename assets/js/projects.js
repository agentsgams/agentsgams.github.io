import { main } from './module.js';
var baseurl = main('BaseURL');
var isxml = main('IsXML');

var page = document.getElementById('page').innerText;
var TOTALGAMES = 120;

function openWindow(link, xml, formal) {
    if (formal == "Eaglercraft") {location.replace(link)};
    if (isxml == true) {
        var url = baseurl + xml;
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
        var url = link;
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
        if (!projects) { alert('Nothing found for this page.'); return; }

        projects.forEach((project) => {
            const { game, formal, description, image, color, xml, link } = project;
            const projectDiv=document.createElement("div");projectDiv.style.display="flex",projectDiv.style.alignItems="top";const gameLink=document.createElement("a");gameLink.name=game,gameLink.style.cursor="pointer";const projectImage=document.createElement("img");projectImage.src=image,projectImage.alt=game,projectImage.width=100,projectImage.style.border=`3px solid ${color}`,projectImage.style.cursor="pointer";const titleSpan=document.createElement("span");titleSpan.className="title",titleSpan.innerHTML=`&nbsp;&nbsp;<u><a style="color: white; cursor: pointer;">${formal}</a></u>`;const descriptionParagraph=document.createElement("p1");descriptionParagraph.innerHTML=`&nbsp;${description}`,projectDiv.appendChild(gameLink),gameLink.appendChild(projectImage),projectDiv.appendChild(titleSpan),projectDiv.appendChild(descriptionParagraph);
            
            projectImage.onclick = (e) => {
                openWindow(link, xml, formal);
            };

            titleSpan.querySelector('a').onclick = (e) => {
                openWindow(link, xml, formal);
            };

            document.getElementById('projects').appendChild(projectDiv);
        });
    })
    .catch((e) => {
        alert('Could not load games');
        alert(e);
});
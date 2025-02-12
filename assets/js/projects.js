import { main } from './module.js';
var baseurl = main('BaseURL');
var isxml = main('IsXML');

function createItem(game, formatted, link, image, color, description, xmllink) {
    var template = `
    <br>
    <div style="display: flex; align-items: top;">
        <a name="${game}"></a>
        <a onclick="openWindow('${link}', '${formatted}', ${isxml}, '${xmllink}', '${baseurl}')" style="cursor:pointer;">&nbsp;&nbsp;<img src="${image}" alt="${game}" width="100" style="border: 3px solid ${color};"></a><span class="title">&nbsp;&nbsp;<u><a style="color: white; cursor: pointer;" onclick="openWindow('${link}', '${formatted}', ${isxml}, '${xmllink}', '${baseurl}')">${formatted}</a></u></span>
        <p1>&nbsp;${description}</p1>
    </div>
    `;

    document.getElementById('projects').innerHTML += template;
};

function openWindow(e,t,n,o,c){console.log("Opening window with:", e, t, n, o, c);if("Eaglercraft"!=t){var i=window.open();i.document.body.style.margin="0",i.document.body.style.height="100vh",i.document.title="Redirecting...";var d=i.document.createElement("iframe");if(d.style.border="none",d.style.width="100%",d.style.height="100%",d.style.margin="0",1==n){var l=c+o;d.src=l}else d.src=e;i.document.body.appendChild(d)}else location.replace(e)};

var page = document.getElementById('page').innerText;
var TOTALGAMES = 120;

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
            const { game, formal, description, image, color, xml } = project;
            const projectDiv=document.createElement("div");projectDiv.style.display="flex",projectDiv.style.alignItems="top";const gameLink=document.createElement("a");gameLink.name=game,gameLink.style.cursor="pointer";const projectImage=document.createElement("img");projectImage.src=image,projectImage.alt=game,projectImage.width=100,projectImage.style.border=`3px solid ${color}`,projectImage.style.cursor="pointer";const titleSpan=document.createElement("span");titleSpan.className="title",titleSpan.innerHTML=`&nbsp;&nbsp;<u><a style="color: white; cursor: pointer;">${formal}</a></u>`;const descriptionParagraph=document.createElement("p1");descriptionParagraph.innerHTML=`&nbsp;${description}`,projectDiv.appendChild(gameLink),gameLink.appendChild(projectImage),projectDiv.appendChild(titleSpan),projectDiv.appendChild(descriptionParagraph);
            
            projectImage.onclick = (e) => {
                
            };

            titleSpan.querySelector('a').onclick = (e) => {
                
            };

            document.getElementById('projects').appendChild(projectDiv);
        });
    })
    .catch((e) => {
        alert('Could not load games');
        alert(e);
});
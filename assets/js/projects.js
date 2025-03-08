import { main } from './module.js';
var baseurl = main('BaseURL');
var isxml = main('IsXML');
var imgurl = main('ImgURL');
var cdnProvider = localStorage.getItem("agentsgams-cdn") || "https://agentsgams.github.io/projectsxml/";

var page = document.getElementById('page').innerText;
var TOTALPROJECTS = 120;

function openWindow(link, formal) {
    if (formal == "Eaglercraft") { location.replace(link); }
    
    var url = "https://example.com";
    if (isxml) {
        var cdnPro = cdnProvider.replace("projects", "projectsxml");
        url = cdnPro + link + ".xml";
    } else { url = baseurl + link; }

    var win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    win.document.title = "Redirecting..";

    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    win.document.body.appendChild(iframe);

    if (isxml) {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function() {
            if (req.readyState == 4) {
            if (req.status == 200) {
                console.log("Sucessfully fetched XML request!")
                iframe.contentDocument.open();
                iframe.contentDocument.write(req.responseText);
                iframe.contentDocument.close();
            } else {
                console.error("Failed to load XML: " + req.status);
            }
            }
        };
        console.log("Sending XML request..")
        req.open("GET", url);
        req.send();
    } else {
        iframe.src = url;
    }
}

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
        document.getElementById('entries_max').innerText = TOTALPROJECTS;
        break;

};

fetch('./assets/json/projects.json')
    .then((res) => res.json())
    .then((data) => {
        const projects = data[page];
        if (!projects) { console.log("%cERROR:%c No projects could be found for this page.", "font-weight: bold; color: lightcoral;", "font-weight: normal; color: white;"); return; };

        projects.forEach((project) => {
            const { name, formal, description, image, color, link } = project;
            const projectDiv=document.createElement("div");projectDiv.style.display="flex",projectDiv.style.alignItems="top";const projectLink=document.createElement("a");projectLink.setAttribute("name", name);projectLink.style.cursor="pointer";const projectImage=document.createElement("img");projectImage.src=imgurl+image,projectImage.alt=name,projectImage.width=100,projectImage.style.border=`3px solid ${color}`,projectImage.style.cursor="pointer";const titleSpan=document.createElement("span");titleSpan.className="title",titleSpan.innerHTML=`&nbsp;&nbsp;<u><a style="color: white; cursor: pointer;">${formal}</a></u>`;const descriptionParagraph=document.createElement("p1");descriptionParagraph.innerHTML=`&nbsp;${description}`,projectDiv.appendChild(projectLink),projectLink.appendChild(projectImage),projectDiv.appendChild(titleSpan),projectDiv.appendChild(descriptionParagraph);
            
            projectImage.onclick = (e) => { openWindow(link, formal); };
            titleSpan.querySelector('a').onclick = (e) => { openWindow(link, formal); };

            document.getElementById('projects').appendChild(projectDiv);
        });
    })
    .catch((e) => {
        console.log(`%cERROR:%c Could not load projects! Message: '${e}'`, "font-weight: bold; color: lightcoral;", "font-weight: normal; color: white;");
});
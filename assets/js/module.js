export function main(input) {
    var isxml = false;
    var url = "";
    var imgurl = "";
    switch (window.location.host) {
        case "agentsgams.github.io":
            url = "https://agentsgams.github.io/projects/";
            isxml = false;
            imgurl = "https://agentsgams.github.io/agentsgams/assets/img/thumbnails/";
            break
        case "altagentgam.onrender.com":
            url = "https://agentsgams-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url=";
            isxml = true;
            imgurl = "https://cdn.jsdelivr.net/gh/agentsgams/agentsgams@master/assets/img/thumbnails/";
            break;
        case "lowtaperfade.onrender.com":
            url = "https://agentsgams-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url=";
            isxml = true;
            imgurl = "https://cdn.jsdelivr.net/gh/agentsgams/agentsgams@master/assets/img/thumbnails/";
            break;
        case "agentsgams.netlify.app":
            url = "https://agentsgams-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url=";
            isxml = true;
            imgurl = "https://cdn.jsdelivr.net/gh/agentsgams/agentsgams@master/assets/img/thumbnails/";
            break;
        case "rainbow-liger-1ac4c7.netlify.app":
            url = "https://agentsgams-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url=";
            isxml = true;
            imgurl = "https://cdn.jsdelivr.net/gh/agentsgams/agentsgams@master/assets/img/thumbnails/";
            break;
        default:
            url = "https://example.com?";
            isxml = false;
            imgurl = "https://example.com?assets/img/thumbnails/";
            break;
    };
    switch (input) {
        case "BaseURL":
            return url;
        case "IsXML":
            return isxml;
        case "ImgURL":
            return imgurl;
    };
}

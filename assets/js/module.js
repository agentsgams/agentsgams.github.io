export function main(input) {
    var isxml = false;
    var url = "";
    var imgurl = "";
    switch (window.location.host) {
        case "agentsgams.github.io":
            url = "https://agentsgams.github.io/projects/";
            isxml = false;
            imgurl = "./assets/img/thumbnails/";
            break
        case "altagentgam.onrender.com":
            url = "https://agentsgams-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url=";
            isxml = true;
            imgurl = "./assets/img/thumbnails/";
            break;
        case "lowtaperfade.onrender.com":
            url = "https://agentsgams-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url=";
            isxml = true;
            imgurl = "./assets/img/thumbnails/";
            break;
        case "agentsgams.netlify.app":
            url = "https://agentsgams-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url=";
            isxml = true;
            imgurl = "./assets/img/thumbnails/";
            break;
        case "rainbow-liger-1ac4c7.netlify.app":
            url = "https://agentsgams-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url=";
            isxml = true;
            imgurl = "./assets/img/thumbnails/";
            break;
        case "127.0.0.1:5500":
            // basically localhost
            url = "https://agentsgams.github.io/projects/";
            isxml = false;
            imgurl = "https://agentsgams.github.io/assets/img/thumbnails/";
            break;
        default:
            url = "https://example.com?PROJECT=";
            isxml = false;
            imgurl = "https://example.com?IMAGE=";
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

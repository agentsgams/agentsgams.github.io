export function main(input) {
    var isxml = false
    var url = ""
    switch (window.location.host) {
        case "agentsgams.github.io":
            url = "https://agentsgams.github.io/projects/"
            isxml = false
            break
        case "altagentgam.onrender.com":
            url = "https://agentsgams-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url="
            isxml = true
            break
        case "lowtaperfade.onrender.com":
            url = "https://agentsgams-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url="
            isxml = true
            break
        case "agentsgamstesting.onrender.com":
            url = "https://agentsgams-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url="
            isxml = true
            break
    }
    switch (input) {
        case "BaseURL":
            return url
        case "IsXML":
            return isxml
    }
}
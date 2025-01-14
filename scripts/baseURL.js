export function getBaseUrl() {
    var BaseUrl = ""
    switch (window.location.host) {
        case "agentsgams.github.io":
            BaseUrl = "https://agentsgams.github.io/projects/"
            break
        case "altagentgam.onrender.com":
            BaseUrl = "https://example.com?"
            break
    }

    return BaseUrl
}

export function isXml() {
    var Xml = false
    switch (window.location.host) {
        case "agentsgams.github.io":
            Xml = false
            break
        case "altagentgam.onrender.com":
            Xml = "https://example.com?"
            break
    }

    return Xml
}

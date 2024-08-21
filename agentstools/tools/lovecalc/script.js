/* 

    (C) agentn86 2024
    https://linktr.ee/agentn86

*/

var messages = [
    // 0-20
    "Sorry, but your love is as likely to bear fruit as a mango tree planted on an Antarctic glacier.",
    // 20-30
    "Your love is as strong as the love between most children and their vegetables- insubstantial.",
    // 30-50
    "Your love is comparable to rush hour traffic. Slow and frustrating, but possible to navigate through persistence and sheer force of will.",
    // 60
    "This level of love is equivalent to a cat's love of boxes. It may not be immediately evident, but take a look in the box and you might just find something ready to jump out at you.",
    // 70
    "Good enough. Might as well check love off your list of things society believes you should've accomplished by now.",
    // 80
    "Your love is as strong as that between an owner and their pet! Unyielding in its loyalty and comfort, albeit with less than optimal odors.",
    // 90-100
    "Your love burns as hot as the sun, blazing through the vastness of space, and searing itself into your being."
]

var history = [
]

function calc() {
    var name1 = document.getElementById("cname1").value
    var name2 = document.getElementById("cname2").value
    var warning = document.getElementById("warning")

    if (name1 == "" || name2 == "") {
        warning.innerText = "Please provide names."
        return
    } else {warning.innerText=""}

    if (name1 == name2) {
        warning.innerText = "You can't love yourself, at least on this calculator."
        return
    } else {warning.innerText=""}

    // the LOVE part ;)


    var percent = Math.floor(Math.random() * 100)
    var message = ""

    if (percent >= 0 && percent < 20) {
        message = messages[0]
    } else if (percent >= 20 && percent < 30) {
        message = messages[1]
    } else if (percent >= 30 && percent < 50) {
        message = messages[2]
    } else if (percent >= 50 && percent < 60) {
        message = messages[3]
    } else if (percent >= 60 && percent < 70) {
        message = messages[4]
    } else if (percent >= 70 && percent < 80) {
        message = messages[5]
    } else if (percent >= 80 && percent < 101) {
        message = messages[6]
    }

    document.getElementById("percent").innerText = percent + "%"
    document.getElementById("message").innerText = message
    document.getElementById("result").style.display = "block"


}
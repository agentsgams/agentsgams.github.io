var topbar = document.getElementById("topbar");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 300) {
        topbar.className = "topbar show"
    } else {
        topbar.className = "topbar hide"
    }
};

window.addEventListener("scroll", myScrollFunc);
import { main } from './module.js'
var isxml = main('IsXML')

document.getElementById('speechbtn').onclick = function() {
    const speech = document.getElementById('speech');
    const speechButton = document.getElementById('speechbtn');

    speech.style.opacity = 1;
    speechButton.style.cursor = 'default';
    speechButton.onclick = '';

    setTimeout(function() {
        document.getElementById('speech').style.opacity = 0;
    },5000);
};

document.getElementById('credits').onclick = function() {
    const dialog = document.getElementById('creditsDialog');
    dialog.showModal();
};

document.getElementById('close').onclick = function() {
    const dialog = document.getElementById('creditsDialog');
    dialog.close();
}

document.getElementById('debug').onclick = function() {
    console.log("%c-- DEBUG -- %c", "font-weight: bold;", "font-weight: normal;");
    if (isxml == true) {
        console.log("Using xml format: %ctrue%c", "color: lightgreen;", "color: white;");
    } else {
        console.log("Using xml format: %cfalse%c", "color: lightcoral;", "color: white;");
    }
    alert('Printed debug to DevTools Console!')
}
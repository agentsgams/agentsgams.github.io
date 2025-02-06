function speech() {
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
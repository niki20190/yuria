function playSound(id) {
    let audio = document.getElementById(id);
    if (audio) {
        audio.play();
    }
}

function arrive() {
    document.getElementById('NT').style.opacity = (parseFloat(document.getElementById('NT').style.opacity) + 0.1);
    if (document.getElementById('NT').style.opacity < 1) {
        setTimeout(arrive, 150);
    }
}

function fadeIn() {
    document.getElementById('NT').style.opacity = 0;
    setTimeout(arrive, 200);
}
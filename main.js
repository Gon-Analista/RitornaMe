function DetectarDisp() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

if (DetectarDisp()) {
    movil.style.display = "block";
    QR.style.display = "none";
} else {
    movil.style.display = "none";
    QR.style.display = "block";
}
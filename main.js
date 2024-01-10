document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll('.loader-logo, #menu-image-1, #menu-image-2');
  var loadedImages = 0;

  function imageLoaded() {
    loadedImages++;
    if (loadedImages === images.length) {
      document.getElementById("loader-wrapper").style.display = "none";
      document.getElementById("content").classList.remove("d-none");
    }
  }
  images.forEach(function (img) {
    img.addEventListener('load', imageLoaded);
    img.addEventListener('error', imageLoaded); 
  });

  document.querySelector('.loader-logo-container').style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
  document.querySelector('.loader-logo').style.opacity = '1';
});

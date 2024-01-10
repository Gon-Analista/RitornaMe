document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("content").classList.remove("d-none");
  }, 3000);
  document.querySelector('.loader-logo-container').style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
  document.querySelector('.loader-logo').style.opacity = '1';
});

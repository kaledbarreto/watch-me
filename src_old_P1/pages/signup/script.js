document.addEventListener("DOMContentLoaded", function () {
  var mySpan = document.getElementById("signin");
  var entrarBtn = document.getElementById("entrar");

  mySpan.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/src/pages/signin/";
  });

  entrarBtn.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/src/pages/signin/";
  });
});

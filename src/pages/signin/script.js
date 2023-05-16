document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("signup-form")
    .addEventListener("submit", function (event) {
      window.location.href = "http://127.0.0.1:5500/src/pages/signup/";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  var mySpan = document.getElementById("signup");
  mySpan.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/src/pages/signup/";
  });
});

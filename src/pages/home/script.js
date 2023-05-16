document.addEventListener("DOMContentLoaded", function () {
  var mySpan = document.getElementById("show-more");
  mySpan.addEventListener("click", function () {
    window.location.href =
      "http://127.0.0.1:5500/src/pages/home/detailed/index.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var openModalButton = document.getElementById("open-add-streaming");
  var closeModalButton = document.getElementById("close-modal");
  var closeModalButton2 = document.getElementById("close-modal2");
  var modalOverlay = document.getElementById("modal-overlay");
  var modalOverlayInput = document.getElementById("modal-overlay-input");
  var closeModalInput = document.getElementById("close-modal-input");
  var closeModalInput2 = document.getElementById("close-modal-input2");
  var cardContent = document.getElementById("card-content");
  var modalOverlayInput = document.getElementById("modal-overlay-input");
  var modalOverlaySerie = document.getElementById("modal-overlay-serie");
  var closeModalSerie = document.getElementById("close-modal-serie");
  var closeModalSerie2 = document.getElementById("close-modal-serie2");

  openModalButton.addEventListener("click", function () {
    modalOverlay.style.display = "block";
  });

  modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });

  closeModalButton.addEventListener("click", function (event) {
    if (event.target === closeModalButton) {
      modalOverlay.style.display = "none";
      modalOverlayInput.style.display = "block";
    }
  });

  closeModalButton2.addEventListener("click", function (event) {
    if (event.target === closeModalButton2) {
      modalOverlay.style.display = "none";
      modalOverlayInput.style.display = "block";
    }
  });

  modalOverlayInput.addEventListener("click", function (event) {
    if (event.target === modalOverlayInput) {
      modalOverlayInput.style.display = "none";
    }
  });

  closeModalInput.addEventListener("click", function (event) {
    if (event.target === closeModalInput) {
      modalOverlayInput.style.display = "none";
    }
  });

  closeModalInput2.addEventListener("click", function (event) {
    if (event.target === closeModalInput2) {
      modalOverlayInput.style.display = "none";
    }
  });

  cardContent.addEventListener("click", function (event) {
    if (event.target === cardContent) {
      modalOverlaySerie.style.display = "block";
    }
  });

  cardContent.addEventListener("click", function (event) {
    if (event.target === closeModalSerie) {
      modalOverlaySerie.style.display = "block";
    }
  });

  closeModalSerie.addEventListener("click", function (event) {
    if (event.target === closeModalSerie) {
      modalOverlaySerie.style.display = "none";
    }
  });

  closeModalSerie2.addEventListener("click", function (event) {
    if (event.target === closeModalSerie2) {
      modalOverlaySerie.style.display = "none";
    }
  });

  modalOverlaySerie.addEventListener("click", function (event) {
    if (event.target === modalOverlaySerie) {
      modalOverlaySerie.style.display = "none";
    }
  });
});

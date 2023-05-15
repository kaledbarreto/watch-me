document.addEventListener("DOMContentLoaded", function() {
    var mySpan = document.getElementById("show-more");
    mySpan.addEventListener("click", function() {
        window.location.href="http://000.0.0.0:5500/src/pages/home/detailed/index.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var openModalButton = document.getElementById("open-add-streaming");
    var closeModalButton = document.getElementById("close-modal");
    var closeModalButton2 = document.getElementById("close-modal2");
    var modalOverlay = document.getElementById("modal-overlay");
    var modalOverlayInput = document.getElementById("modal-overlay-input");
    var closeModalInput = document.getElementById("close-modal-input");
    var closeModalInput2 = document.getElementById("close-modal-input2");

    openModalButton.addEventListener("click", function() {
        modalOverlay.style.display = "block";
    });

    modalOverlay.addEventListener("click", function(event) {
        if (event.target === modalOverlay) {
          modalOverlay.style.display = "none";
        }
    });

    closeModalButton.addEventListener("click", function(event) {
        if (event.target === closeModalButton) {
            modalOverlay.style.display = "none";
            modalOverlayInput.style.display = "block";
        }
    });

    closeModalButton2.addEventListener("click", function(event) {
        if (event.target === closeModalButton2) {
            modalOverlay.style.display = "none";
            modalOverlayInput.style.display = "block";
        }
    });

    modalOverlayInput.addEventListener("click", function(event) {
        if (event.target === modalOverlayInput) {
            modalOverlayInput.style.display = "none";
        }
    });

    closeModalInput.addEventListener("click", function(event) {
        if (event.target === closeModalInput) {
            modalOverlayInput.style.display = "none";
        }
    });

    closeModalInput2.addEventListener("click", function(event) {
        if (event.target === closeModalInput2) {
            modalOverlayInput.style.display = "none";
        }
    });
});
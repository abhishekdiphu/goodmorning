function showPopup(popup) {
    popup.style.animation = "300ms showPopup ease-in-out forwards";
}

function hidePopup(popup) {
    popup.style.animation = "300ms hidePopup ease-in-out forwards";
}

function createPopup(text) {
    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = 
        "<i class=\"fas fa-times popup__close\"></i>" +
        "<p class=\"popup__message\">" + text + "</p>";

    popup.querySelector(".popup__close").addEventListener("click", function() {
        hidePopup(popup);
    });

    return popup;
}

export { 
    createPopup,
    showPopup,
    hidePopup
}

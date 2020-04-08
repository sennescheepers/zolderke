function handleLoad() {
    let dropdownButton = document.getElementById("dropdownButton");
    dropdownButton.addEventListener("click", handleNavbar);
}

function handleNavbar() {
    let nav = document.getElementById("nav-bar");
    let buttonIcon = document.getElementById("dropDownButtonIcon");
    if (nav.className === "nav-bar") {
        nav.className += " unfolded";
        buttonIcon.className = "fa fa-times";
    } else {
        nav.className = "nav-bar";
        buttonIcon.className = "fa fa-bars";
    }
}

window.addEventListener("load", handleLoad);
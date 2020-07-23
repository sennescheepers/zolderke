function handleLoad() {
    let dropdownButton = document.getElementById("dropdownButton");
    dropdownButton.addEventListener("click", handleNavbar);
    handleAnimations();
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

function handleAnimations() {
    let elements = document.querySelectorAll(".top");
    console.log(elements);
    for (let e of elements) {
        e.classList.add("slideInTop");
    }
    elements = document.querySelectorAll(".right");
    for (let e of elements) {
        e.classList.add("slideInRight");
    }
}

window.addEventListener("load", handleLoad);
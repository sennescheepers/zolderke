function handleLoad() {
    let dropdownButton = document.getElementById("dropdownButton");
    dropdownButton.addEventListener("click", handleNavbar);
}

function handleNavbar() {
    let x = document.getElementById("nav-bar");
    if (x.className === "nav-bar") {
        console.log("huts");
        x.className += " unfolded";
    } else {
        console.log("weg");
        x.className = "nav-bar";
    }
}

window.addEventListener("load", handleLoad);
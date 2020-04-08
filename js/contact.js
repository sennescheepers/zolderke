function handleLoad() {
    let verstuurButton = document.getElementById("verstuurButton");
    verstuurButton.addEventListener("click", handleMessage);
}

function handleMessage() {
    let naam = document.getElementById("voornaam").value + " " + document.getElementById("achternaam").value;
    let email = document.getElementById("email").value;
    let bericht = document.getElementById("bericht").value;
    const body = {
        naam: naam,
        email: email,
        bericht: bericht
    };
    console.log(body);
}

window.addEventListener("load", handleLoad);
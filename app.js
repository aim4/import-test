import Box from ".box.js";

let b = new Box();
b.printSize();

let button = document.getElementById("button")
button.addEventListener("click", () => {
    console.log("Ouch");
})
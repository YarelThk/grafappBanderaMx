const greenRange = document.getElementById("greenRange");
const redRange = document.getElementById("redRange");

const greenFlag = document.getElementById("greenFlag");
const redFlag = document.getElementById("redFlag");

const greenHex = document.getElementById("greenHex");
const redHex = document.getElementById("redHex");

function toHex(value) {
    let hex = parseInt(value).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

// Verde
greenRange.addEventListener("input", function() {
    let intensity = greenRange.value;
    let hexColor = "#00" + toHex(intensity) + "00";

    greenFlag.style.backgroundColor = hexColor;
    greenHex.textContent = hexColor.toUpperCase();
});

// Rojo
redRange.addEventListener("input", function() {
    let intensity = redRange.value;
    let hexColor = "#" + toHex(intensity) + "0000";

    redFlag.style.backgroundColor = hexColor;
    redHex.textContent = hexColor.toUpperCase();
});

// Inicialización
window.onload = function() {
    greenRange.dispatchEvent(new Event("input"));
    redRange.dispatchEvent(new Event("input"));
};
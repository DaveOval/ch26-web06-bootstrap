"use strict";
console.log("Hola desde un script externo");
function changeColorTo(color) {
    const ref = document.getElementById("id");
    if (ref) {
        ref.style.color = color;
    }
}
function changeColorP(element, color) {
    if (element.style.color == color) {
        element.style.color = "black";
        return;
    }
    else {
        element.style.color = color;
    }
}
function changePToBlack() {
    const refObjs = document.getElementsByClassName("text-color");
    for (let i = 0; i < refObjs.length; i++) {
        const element = refObjs[i];
        element.style.color = "black";
    }
    console.log(refObjs);
}

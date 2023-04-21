"use strict";
console.log("Hola desde un script externo");
function changeColor() {
    const ref = document.getElementById("id");
    if (ref) {
        ref.style.color = "red";
    }
}

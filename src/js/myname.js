"use strict";
const btn = document.querySelector('#btn');
function changeName() {
    const name = prompt('Please enter your name') || 'unknown';
    const h1 = document.querySelector('#gretting');
    h1.innerHTML = `Hello ${name}! welcome to my website!`;
}
btn.addEventListener('click', changeName);

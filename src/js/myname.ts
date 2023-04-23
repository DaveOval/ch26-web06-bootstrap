const btn = document.querySelector('#btn') as HTMLButtonElement;

function changeName() {
    const name = prompt('Please enter your name') || 'unknown';
    const h1 = document.querySelector('#gretting') as HTMLHeadingElement;
    h1.innerHTML = `Hello ${name}! welcome to my website!`;
}

btn.addEventListener('click', changeName);
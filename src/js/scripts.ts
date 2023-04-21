console.log("Hola desde un script externo");

function changeColor(): void {
    const ref: HTMLElement | null = document.getElementById("id");
    if (ref) {
        ref.style.color = "red";
    }
}
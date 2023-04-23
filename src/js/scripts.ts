


console.log("Hola desde un script externo");

function changeColorTo(color : string): void {
    const ref: HTMLElement | null = document.getElementById("id");
    if (ref) {
        ref.style.color = color;
    }
}



function changeColorP(element: HTMLElement , color: string ): void{
    if(element.style.color == color){
        element.style.color = "black";
        return;
    }else{
        element.style.color = color;
    }
}


function changePToBlack(): void{
    const refObjs: any = document.getElementsByClassName("text-color")
    for (let i = 0; i < refObjs.length; i++) {
        const element = refObjs[i];
        element.style.color = "black";
    }
    console.log(refObjs)
}



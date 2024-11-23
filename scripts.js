const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let bolas = []

for (let i = 0 ; i < 5; i++) {
    bolas.push(new Bola(i))
}




function animar(){
    bolas.dibujar()
    bolas.mover()
    requestAnimationFrame(animar)
}

animar()
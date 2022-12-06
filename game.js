const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d')

window.addEventListener('load', startGame)

function startGame() {
    let canvasSize

    //if else statement using ternary
    window.innerHeight > window.innerWidth ? canvasSize = window.innerWidth * 0.8 : canvasSize = window.innerHeight * 0.8

    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

    const elementSize = canvasSize / 10

    console.log({canvasSize, elementSize});

    ctx.font = elementSize + 'px verdana'
    ctx.textAlign = 'end'

    for (let i = 1; i <= 10; i++) {
        ctx.fillText(emojis['X'], elementSize * i, elementSize)
    }

    

    /* ctx.fillText('Juan is the best', 25, 25) */



    
}


//5 números y la balota (Los 5 números son hasta el 43, y no se pueden repetir, además de que el sexto número que es la balota hasta el 16) El ganador 
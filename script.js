const quadroDePixel = document.getElementById('pixel-board')
const clic = document.getElementsByClassName('selected')



function pixels (tamanho){


    for (let i = 0; i < tamanho * tamanho ; i += 1) {
        const classPixel = document.createElement('classPixel')
        classPixel.classList.add('pixel')
        quadroDePixel.appendChild(classPixel)


    }
}
pixels(5)


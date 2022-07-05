const quadroDePixel = document.getElementById('pixel-board')
const clic = document.getElementsByClassName('selected')
const PaletaCores = document.getElementById('color-palette')
const filhosCores = PaletaCores.children

// 5

function pixels(tamanho) {


    for (let i = 0; i < tamanho * tamanho; i += 1) {
        const classPixel = document.createElement('classPixel')
        classPixel.classList.add('pixel')
        classPixel.addEventListener('click', function () {
            console.log('teste');
        })

        quadroDePixel.appendChild(classPixel)
        i
    }
}

pixels(5)

// 7

//for (let i = 0; i < filhosCores.length; i += 1) {
//  filhosCores[i].addEventListener('click', function(e){
//    console.log(filhosCores[i] );

//if (filhosCores[i].classList.contains('selected')) {
//  filhosCores[i].classList.remove('selected')    
//}  e.target.classList.add('selected')
//})

//}

PaletaCores.addEventListener('click', cores)

function cores(event) {
    for (let i = 0; i < filhosCores.length; i += 1) {
        if (filhosCores[i].classList.contains('selected')) {
            filhosCores[i].classList.remove('selected');
        } event.target.classList.add('selected')
    }
}



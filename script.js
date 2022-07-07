const quadroDePixel = document.getElementById('pixel-board')
const clic = document.getElementsByClassName('selected')
const PaletaCores = document.getElementById('color-palette')
const filhosCores = PaletaCores.children
const CoresPaleta = ['black', 'red', 'green', 'blue']








// 5

function pixels(tamanho) {


    for (let i = 0; i < tamanho * tamanho; i += 1) {
        const classPixel = document.createElement('classPixel')
        classPixel.classList.add('pixel')
        classPixel.addEventListener('click', colocaCorPixel)
        quadroDePixel.appendChild(classPixel)
        
    }
}

function colocaCorPixel(e){


    const separaCor = document.querySelector('.selected')
    console.log(separaCor.style);
    e.target.style.backgroundColor = separaCor.style.backgroundColor

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

// PaletaCores.addEventListener('click', cores)

function criaPaletaDeCores (arrayCores) {
    const paletaCores = document.querySelector('#color-palette')
    
   for (const cor of arrayCores) {
    let div = document.createElement('div')    
    div.classList.add('color')
     if (cor === 'black') {
    div.classList.add('selected')    
}

    div.style.backgroundColor = cor
    div.addEventListener('click', cores)
     paletaCores.appendChild(div)
       }
    console.log(paletaCores); 
}

criaPaletaDeCores(CoresPaleta)



function cores(event) {
    const separaCor = document.querySelector('.selected').classList.remove('selected')
   
    event.target.classList.add('selected')

}
    // for (let i = 0; i < filhosCores.length; i += 1) {
//         if (filhosCores[i].classList.contains('selected')) {
//             filhosCores[i].classList.remove('selected');
//         } event.target.classList.add('selected')
//         console.log('Pegar cor');

//     }
// }












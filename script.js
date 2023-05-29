const quadroDePixel = document.getElementById('pixel-board');
const clic = document.getElementsByClassName('selected');
const PaletaCores = document.getElementById('color-palette');
const filhosCores = PaletaCores.children;
const CoresPaleta = ['black', 'red', 'green', 'blue'];

// cria o quadrado de pixels com evento de click

function colocaCorPixel(e) {
  const separaCor = document.querySelector('.selected');
  console.log(separaCor.style);

  e.target.style.backgroundColor = separaCor.style.backgroundColor;
}

function pixels(tamanho) {
  for (let i = 0; i < tamanho * tamanho; i += 1) {
    const classPixel = document.createElement('classPixel');
    classPixel.classList.add('pixel');
    classPixel.addEventListener('click', colocaCorPixel);
    quadroDePixel.appendChild(classPixel);
  }
}

pixels(5);

function criaPaletaDeCores(arrayCores) {
  const paletaCores = document.querySelector('#color-palette');

  for (const cor of arrayCores) {
    const div = document.createElement('div');

    div.classList.add('color');
    if (cor === 'black') {
      div.classList.add('selected');
    }

    div.style.backgroundColor = cor;
    div.addEventListener('click', cores);
    paletaCores.appendChild(div);
  }
  console.log(paletaCores);
}

criaPaletaDeCores(CoresPaleta);

function cores(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

const classeColor = document.getElementsByClassName(color)
const cores = ['#000000', '#000080', '##00FF00', '#FF1493']

function definirCores() {
    for(let i = 0; i < classeColor.length; i += 1 ) {
        classeColor[i].style.backgoundColor = cores[i]
    }
}
definirCores()
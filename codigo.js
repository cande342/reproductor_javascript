"use strict"

const playCancion = document.getElementsByClassName('play')
const stopCancion = document.getElementsByClassName('stop')
const volumen = document.querySelector('.volumen')

let audio

for(var i = 0; i < playCancion.length; i++){
    playCancion[i].addEventListener('click', function(){
        let cancion = this.getAttribute('id')
        audio = new Audio(`./audios/${cancion}.mp3`)
        audio.play()
    })
}

for(var i = 0; i < stopCancion.length; i++){
    stopCancion[i].addEventListener('click', function(){
        audio.pause()
    })
}

volumen.addEventListener('click', function(){
    let vol = this.value
    audio.volume = vol
})

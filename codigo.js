"use strict"

const playCancion = document.getElementsByClassName('play')
const stopCancion = document.getElementsByClassName('stop')
const volumen = document.querySelector('.volumen')

let audio

for(var i = 0; i < playCancion.length; i++){
    playCancion[i].addEventListener('click', function(){
        let cancion = this.getAttribute('id')
        //verificamos primero si no está sonando una...
        if (audio && !audio.paused) {
            audio.pause();
            audio.currentTime = 0; // Reinicia la reproducción
          }
      
          // Crear una nueva instancia de Audio para la canción seleccionada
          audio = new Audio(`./audios/${cancion}.mp3`);
          audio.play();
     });
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



/* Código de als flechas */

document.addEventListener("DOMContentLoaded", function() {
    // Función para desplazar hacia la izquierda
    document.querySelector(".arrow-left").addEventListener("click", function() {
      document.getElementById("gallery-container").scrollLeft -= 200;
    });

    // Función para desplazar hacia la derecha
    document.querySelector(".arrow-right").addEventListener("click", function() {
      document.getElementById("gallery-container").scrollLeft += 200;
    });
  });

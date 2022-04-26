const audioErrou = new Audio('./audio/errou.mp3.mp3')
const audioSirene = new Audio('./audio/sirene.mp3.mp3')
const audioCavalo = new Audio('./audio/cavalo.mp3.mp3')
const imgCavalo = document.getElementById('imgCavalo')
const imgSirene = document.getElementById('imgSirene')
const imgErrou = document.getElementById('imgErrou')

let audioAnterior = new Audio();

imgCavalo.addEventListener('click', () => {
    audioAnterior.pause();
    audioCavalo.play()
    audioAnterior = audioCavalo;
})

imgSirene.addEventListener('click', () => {
    audioAnterior.pause();
    audioSirene.play()
    audioAnterior = audioSirene;
})

imgErrou.addEventListener('click', () => {
    audioAnterior.pause();
    audioErrou.play()
    audioAnterior = audioErrou;
})
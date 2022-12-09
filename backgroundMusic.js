// ©Copr. Nintendo, 2006, 2011.
// Thanks to these guys for amazing songs: Qumu, and DjCutman. Follow them on Soundcloud!
// Script para tocar uma música de fundo.

let playList = ['./resources/homeMenu.mp3', './resources/miiPlaza.mp3', './resources/Qumu.mp3', './resources/Djcutman-FFVII.mp3'];
let randomMusic = playList[Math.floor(Math.random() * playList.length)];
console.log('debug>' + randomMusic)
let audio = new Audio(`${randomMusic}`)
const audioButton = document.getElementById('playSound')

function randomizer() {
    let randomMusic = playList[Math.floor(Math.random() * playList.length)];
    audio = new Audio(`${randomMusic}`)
    return
};

audioButton.addEventListener('click', function action() {
    if (audio.duration > 0 && !audio.paused) { // Verifica se o tempo do aúdio é 0, se sim, então ele deve ser ativado mediante interação do usuário.
        console.log('Pausado')
        audio.pause(randomizer())
    } else {
        audio.play()
        console.log('Tocando')
        return // Saída, afinal já temos uma música de fundo rodando.
    }
});




    

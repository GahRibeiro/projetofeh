const imagens1401 =["./fotos projeto/14.01.jpg",
"./fotos projeto/14.01.1.jpg"]

let index1401=0

setInterval(() => {

    document.getElementById("img14-01-24").src =imagens1401[index1401++]
    if(index1401==2){
        index1401=0
    }
}, 1500)


const imagens3012 =["./fotos projeto/30.12.jpg",
"./fotos projeto/30.12.1.jpg"]

let index3012=0

setInterval(() => {

    document.getElementById("img30-12-23").src =imagens3012[index3012++]
    if(index3012==2){
        index3012=0
    }
}, 1500)


const imagens2312 =["./fotos projeto/23.12.jpg",
"./fotos projeto/23.12.1.jpg"]

let index2312=0

setInterval(() => {

    document.getElementById("img23-12-23").src =imagens2312[index2312++]
    if(index2312==2){
        index2312=0
    }
}, 1500)


const imagens2601 =["./fotos projeto/Feh 4.jpg",
"./fotos projeto/Feh 5.jpg",
"./fotos projeto/Feh 6.jpg",
"./fotos projeto/Feh 7.jpg"]

let index2601=0

setInterval(() => {

    document.getElementById("img26-01-24").src =imagens2601[index2601++]
    if(index2601==4){
        index2601=0
    }
}, 1500)


var audio = new Audio('lesspeopleSpecialPerso.mp3');
audio.volume=0.2
audio.loop=true
audio.play();

console.log("Welcome to spotify")
let songIndex=0
let audioElement= new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "salam-E-Ishq", filepath: "Song/1.mp3",coverPath: "covers/1.mp3"},
    {songName: "Phir mohabaat ", filepath: "Song/2.mp3",coverPath: "covers/2.mp3"},
    {songName: "salam-E-Ishq", filepath: "Song/1.mp3",coverPath: "covers/1.mp3"},
    {songName: "salam-E-Ishq", filepath: "Song/1.mp3",coverPath: "covers/1.mp3"},
    {songName: "salam-E-Ishq", filepath: "Song/1.mp3",coverPath: "covers/1.mp3"},
    {songName: "salam-E-Ishq", filepath: "Song/1.mp3",coverPath: "covers/1.mp3"},
]
songItems.forEach((element)=>{
    element.getElementsByTagName("img")[0].src= songs[1].filepath;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
document.addEventListener('timeupdate', ()=>{
    
    progress= parseInt((audioElement.currentTime/audioElement.duration)* 100);
   
    
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

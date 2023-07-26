console.log("Welcome in spotify");
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let masterSongName = document.getElementById('masterSongName');
let gif=document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
	{songName:"Tu Chahiye", filePath: "song/1.mp3", coverPath: "covers/sp1.jpg" },
	{songName:"Humdard", filePath: "song/2.mp3", coverPath: "covers/sp2.jpg" },
	{songName:"Gilheriyaan", filePath: "song/3.mp3", coverPath: "covers/sp3.jpg" },
	{songName:"Main Agar Kahun", filePath: "song/4.mp3", coverPath: "covers/sp4.jpg" },
	{songName:"Tu pehla pehla pyar hai", filePath: "song/5.mp3", coverPath: "covers/sp5.jpg" },
	{songName:"Main Rang Sharbaton ka", filePath: "song/6.mp3", coverPath: "covers/sp6.jpg" },
	{songName:"Mere Naam Tu", filePath: "song/7.mp3", coverPath: "covers/sp7.jpg" },
	{songName:"Maheroo Maheroo", filePath: "song/8.mp3", coverPath: "covers/sp8.jpg" },
	{songName:"chura liya hai tumne", filePath: "song/9.mp3", coverPath: "covers/sp9.jpg" },
	{songName:"Tu hi Haquiqat", filePath: "song/10.mp3", coverPath: "covers/sp10.jpg" },
	{songName:"Bulleyaan", filePath: "song/11.mp3", coverPath: "covers/sp11.jpg" },
	{songName:"O Saathi", filePath: "song/12.mp3", coverPath: "covers/sp12.jpg" },
	]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
	 } 
	 else{
	 	audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
	 }
})
audioElement.addEventListener('timeupdate' , ()=>{
	progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
	// console.log(progress); 
	myprogressbar.value=progress;
})
myprogressbar.addEventListener('change' , ()=>{
	audioElement.currentTime=((myprogressbar.value*audioElement.duration)/100);
})


const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}   
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=12){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})    
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})   
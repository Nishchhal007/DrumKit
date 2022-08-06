let a = new Date();
let yr = a.getFullYear();
document.getElementById("cr").innerHTML = " " + yr;

var numofDrums = document.querySelectorAll(".drum").length;

const sounds = ["sounds/tom-4.mp3", "sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/crash.mp3","sounds/snare.mp3","sounds/kick-bass.mp3"];

for (let i = 0; i <numofDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        // document.querySelectorAll("button")[i].style.color = "white";
        var audio = new Audio(`${sounds[i]}`)
        audio.play();
    })
    
}


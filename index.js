
// // OVAJ DEO DETEKTUJE KOJI BUBANJ SMO KLIKNULI
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
// document.querySelectorAll(".drum")[i].addEventListener("click", function(){

//     var buttonInnerHTML = this.innerHTML;
//     playSound(buttonInnerHTML);
//     buttonAnimation(buttonInnerHTML);

//     // moglo je i ovako
//     // playSound(this.InnerHTML);
//     // buttonAnimation(this.InnerHTML);

// });
// }

// // OVAJ DEO DETEKTUJE KOJE SLOVO NA BUBNJU SMO PRITISNULI NA TASTATURI
// document.addEventListener("keydown", function(event){ 

//     var keyPressed = event.key;
//     playSound(keyPressed);
//     buttonAnimation(keyPressed);
    
// });

// function playSound(button) { 
   
//     switch (button) {
//         case "w":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//         break;

//         case "a":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//         break;

//         case "s":
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//         break;

//         case "d":
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play();
//         break;

//         case "j":
//             var snare = new Audio("sounds/snare.mp3");
//             snare.play();
//         break;

//         case "k":
//             var crash = new Audio("sounds/crash.mp3");
//             crash.play();
//         break;

//         case "l":
//             var kick = new Audio("sounds/kick-bass.mp3");
//             kick.play();
//         break;
    
//         default: console.log(buttonInnerHTML);
            
//     }};


//     function buttonAnimation(currentKey){
//         document.querySelector("." + currentKey).classList.add("pressed");

//         setTimeout(function(){
//             document.querySelector("." + currentKey).classList.remove("pressed");
//         }, 100);
        
//     }







import * as sounds from 'url:./sounds/*.mp3';

// OVAJ DEO DETEKTUJE KOJI BUBANJ SMO KLIKNULI
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    // moglo je i ovako
    // playSound(this.InnerHTML);
    // buttonAnimation(this.InnerHTML);

});
}

// OVAJ DEO DETEKTUJE KOJE SLOVO NA BUBNJU SMO PRITISNULI NA TASTATURI
document.addEventListener("keydown", function(event){ 

    var keyPressed = event.key;
    playSound(keyPressed);
    buttonAnimation(keyPressed);
    
});

function playSound(button) { 
   
    switch (button) {
        case "w":
            var tom1 = new Audio(sounds["tom-1"]);   //Ovde iako tom-1 nije promenljiva zbog crtice mora bracket notation i navodnici.
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio(sounds["tom-2"]);
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio(sounds["tom-3"]);
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio(sounds["tom-4"]);
            tom4.play();
        break;

        case "j":
            var snare = new Audio(sounds.snare);
            snare.play();
        break;

        case "k":
            var crash = new Audio(sounds.crash);
            crash.play();
        break;

        case "l":
            var kick = new Audio(sounds["kick-bass"]);
            kick.play();
        break;
    
        default: console.log(buttonInnerHTML);
            
    }};


    function buttonAnimation(currentKey){
        document.querySelector("." + currentKey).classList.add("pressed");

        setTimeout(function(){
            document.querySelector("." + currentKey).classList.remove("pressed");
        }, 100);
        
    }
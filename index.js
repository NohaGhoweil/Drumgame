numOfBtns = document.querySelectorAll(".drum").length;

// Clicking on spisefic place 
for (var i = 0; i < numOfBtns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });

}

// Key press function -General-
document.addEventListener("keypress", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key) {

    switch (key) {
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "f":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "g":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "h":

            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "j":

            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed");  
},100)
}

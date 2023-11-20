var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
// Detecting Button Press
function handleClick(){
    var buttonInnerHTML= this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    // switch(buttonInnerHTML){
    //     case "w":
    //         var tom1 = new Audio('./sounds/tom-1.mp3');
    //         tom1.play();
    //     break;

    //     case "a":
    //         var tom2 = new Audio('./sounds/tom-2.mp3');
    //         tom2.play();
    //     break;

    //     case "s":
    //         var tom3 = new Audio('./sounds/tom-3.mp3');
    //         tom3.play();
    // break;

    //     case "d":
    //         var tom4 = new Audio('./sounds/tom-4.mp3');
    //         tom4.play();
    // break;
    //     case "j":
    //         var snare = new Audio('./sounds/snare.mp3');
    //         snare.play();
    // break;
    //     case "k":
    //         var crash = new Audio('./sounds/crash.mp3');
    //         crash.play();
    // break;
    //     case "l":
    //         var kick = new Audio('./sounds/kick-bass.mp3');
    //         kick.play();
    // break;
    //     default: console.log(buttonInnerHTML);
    // }

    
    // this.style.color = "white";
    //     var audio = new Audio('./sounds/tom-1.mp3');
    //     audio.play();

    
        
}

//Detecting Keyboard press
addEventListener("keydown", function(event){
// event will show which key was pressed
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
        break;

        case "k":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
        break;
        case "l":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}

// Animate clicked or key press button
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}


// document.querySelectorAll("button").addEventListener("click", function(){
//   alert("I got Clicked");
//});

//$0.addEventListeer("click", handleClick);

//Calculator
// function add(num1,num2){
//    return num1+num2;
//}

//function multiply(num1,num2){
// return num1*num2;
//}

//function calculator(num1, num2, operator){
//    return operator(num1,num2);
//}

// calculator(4,5,add);

// var houseKeeper1={
//     name: "Nicole",
//     roomsAllocated: 10,
//     experience: 3
//    }
//    alert("My Name is " + houseKeeper1.name + ". I have " + houseKeeper1.experience +" years of experience.")

//-------------------------CONSTRUCTER---------------------------
// function houseKeeper (name, roomsAllocated, experience){
//     this.name= name;
//     this.roomsAllocated= roomsAllocated;
//     this.experience= experience;
//    }

//var houseKeeper1 = new houseKeeper( "Nicole", 10 , 3);


//  Constructer function
// function HouseKeeper (experience, name, cleaningAreas){
//  this.experience=experience;
//  this.name=name;
//  this.cleaningAreas=cleaningAreas;
//  this.cleanRoom= function(){
//   alert("Cleaning in Progress");
//  }
// }

// function Audio(fileLocation){
//     this.fileLocation=fileLocation;
//     this.play= fuction {
//         Tap into the audio hardware
//         Check the file at the fileLocation exists
//         Check the file at the fileLocation is a sound file
//         Play the file at the fileLocation
//     }
// }
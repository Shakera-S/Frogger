const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#startpause");
const logsLeft = document.querySelectorAll(".log-left");

const squares = document.querySelectorAll(".grid div");
console.log(squares);
let currentIndex = 76;
const width = 9

// Creating our green frog and give it the ability to move
function moveFrog(e) {
    squares[currentIndex].classList.remove("frog"); // This is to prevent the frog from leaving a trail

    switch(e.key) {
        case "w" :
            if ( currentIndex - width >= 0) currentIndex -= width
            break
        case "s" :
            if (currentIndex + width < width * width) currentIndex += width
            break
        case "d" :
            if (currentIndex % width < width - 1) currentIndex += 1
            break
        case "a" :
            if (currentIndex % width !== 0) currentIndex -= 1
            break
    }

    squares[currentIndex].classList.add("frog")
}
document.addEventListener("keyup", moveFrog);

function autoMoveLogs() {
    logsLeft.forEach
}

// Get the cars and logs moving
function moveLogLeft() {
    switch(true)
    case
}

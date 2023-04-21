const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
console.log(squares);

let currentIndex = 76;
const width = 9;

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      if (currentIndex % width !== 0) currentIndex -= 1;
      break;
    case "ArrowRight":
      if (currentIndex % width < width - 1) currentIndex += 1;
      break;
    case "ArrowUp":
      if (currentIndex - width >= 0) currentIndex -= width;
      break;
    case "ArrowDown":
      if (currentIndex + width < width * width) currentIndex += width;
      break;
  }
  squares[currentIndex].classList.add("frog");
}
document.addEventListener("keyup", moveFrog);

function autoMoveLogs() {
  logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
}
autoMoveLogs;

function moveLogLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains("L1"):
      logLeft.classList.remove("L1");
      logLeft.classList.add("L2");
      break;
    case logLeft.classList.contains("L2"):
      logLeft.classList.remove("L2");
      logLeft.classList.add("L3");
      break;
    case logLeft.classList.contains("L3"):
      logLeft.classList.remove("L3");
      logLeft.classList.add("L4");
      break;
  }
}

setInterval(autoMoveLogs, 1000);

const mole = document.querySelector(".mole");
const squares = document.querySelectorAll(".square");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");


let result = 0;
let hitPosition
let currentTime = 60;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole")
    });

    const randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add("mole");
    hitPosition = randomPosition.id
}

squares.forEach(square => {
    square.addEventListener("mousedown", () =>{
      if (square.id === hitPosition) {
          result++
          score.textContent = result
          hitPosition = null;
      }
    })
})

function moveMole() {
    timerId = null;
    timerId = setInterval(randomSquare, 1000);
}
moveMole();


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert(`GAME IS OVER! Your Current Score is ${result}`)

    }
}

const countDownTimerId = setInterval(countDown, 1000)
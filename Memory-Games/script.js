const cardArray = [
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
]
cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.getElementById("grid");
const result = document.querySelector("#result")

let chosenCard = []
let cardChosenIds = []
let cardWon = []

// Create images Dynamically 
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", i);
        gridDisplay.appendChild(card);
        card.addEventListener("click", flipCard);
        
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]
    console.log(optionOneId);
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
        alert("You have clicked the same image!")
    }
    if (chosenCard[0] === chosenCard[1]) {
        alert("You found a match!")
        cards[optionOneId].setAttribute("src", "images/white.png");
        cards[optionTwoId].setAttribute("src", "images/white.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardWon.push(chosenCard);
    }else{
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
        alert("sorry try again!")
    }
    result.textContent = cardWon.length
        chosenCard = []
        cardChosenIds = []

    if (cardWon.length == cardArray.length / 2) {
        result.textContent = "Congratulation You Found Them All!"
    }

}

function flipCard() {
    const cardId = this.getAttribute("data-id");
    chosenCard.push(cardArray[cardId].name)
    cardChosenIds.push(cardId);
    console.log(chosenCard);
    this.setAttribute("src", cardArray[cardId].img)
    if (chosenCard.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
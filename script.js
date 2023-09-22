const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll("#choiceBtn");
let player;
let computer;
let result;
choiceBtns.forEach(elem => elem.addEventListener("click", () => {
    player = elem.textContent;
    computerTrun();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = winChecked();
}));
function computerTrun() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissiors";
            break;
        // default:computer = "Computer don't choice.";
        // break;
    }
}

function winChecked() {
    if (player == computer) {
        return "Draw!";
    }
    else if (computer == "Rock") {
        return (player == "Paper") ? "You win!" : "You lose!";
    }
    else if (computer == "Paper") {
        return (player == "Scissiors") ? "You win!" : "You lose!";
    }
    else if (computer == "Scissiors") {
        return (player == "Rock") ? "You win!" : "You lose!";
    }

}
let userChoice;

let computerOption;

const display = document.querySelector('#outputDisplay');

const secondDisplay = document.querySelector('#secondOutputDisplay');

let restart = document.createElement('button');
restart.innerText = "Try again";
restart.setAttribute('id', 'restart');

// Display container and img nodes for the player's amount of lives.
const thirdDisplay = document.querySelector('#thirdOutputDisplay');
let firstHeart = document.createElement('img');
firstHeart.setAttribute('src', './assets/heart.gif');
firstHeart.classList.add('heart');
thirdDisplay.appendChild(firstHeart);

let secondHeart = document.createElement('img');
secondHeart.setAttribute('src', './assets/heart.gif');
secondHeart.classList.add('heart');
thirdDisplay.appendChild(secondHeart);

let thirdHeart = document.createElement('img');
thirdHeart.setAttribute('src', './assets/heart.gif');
thirdHeart.classList.add('heart');
thirdDisplay.appendChild(thirdHeart);

let fourthHeart = document.createElement('img');
fourthHeart.setAttribute('src', './assets/heart.gif');
fourthHeart.classList.add('heart');
thirdDisplay.appendChild(fourthHeart);

let fifthHeart = document.createElement('img');
fifthHeart.setAttribute('src', './assets/heart.gif');
fifthHeart.classList.add('heart');
thirdDisplay.appendChild(fifthHeart);

// Function will add .fade class to each heart depending if the lower number has the class.
function addFade() {
    switch(playerPoints) {
        case 4:
            fifthHeart.classList.add('fade');
            break;
        case 3:
            fourthHeart.classList.add('fade');
            break;
        case 2:
            thirdHeart.classList.add('fade');
            break;
        case 1:
            secondHeart.classList.add('fade');
            break;
        case 0:
            firstHeart.classList.add('fade');
            break;
    }
}

let para = document.createElement('p');
para.setAttribute('id','displayPara');
display.appendChild(para);

let text; // Will hold the text for displayer.

let secondPara = document.createElement('p');
secondPara.setAttribute('class', 'typeText')
secondDisplay.appendChild(secondPara);


let i = 0;

let speed = 60; //speed in of the typewriter effect in ms.

function typeWriter() {
    if (i < text.length) {
        document.getElementById('displayPara').textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (i === text.length) {
        i = 0;
    }
}

console.log("Round 1!")

function decideWinner() {
    if (computerPoints === 0) {
        text = 'Congratulations! You won!';
    } else if (playerPoints === 0) {
        text = 'You lose!... Try again?';
        restartGame();
        //Maybe I'll add an if...else statement based on the
        //player's decision to continue or quit if they lose.
    } else {
        text = 'Tie-breaker!';
    }
}

function restartGame() {
    restart.setAttribute('class', 'fadeIn');
    secondDisplay.appendChild(restart);
}

function announceRound() {
    if (playerPoints !== 0 && computerPoints !== 0) {
        text = `Round ${round}! `
        typeWriter(text);
    } else {
        decideWinner();
        typeWriter(text);
    }
}

function playRound(userChoice) {
    
    computerOption = Math.floor(Math.random() * 3);

    if (userChoice === "Rock" && computerOption === 2) {
        secondPara.innerText = 'You win this round!';
        computerPoints--;
        round++;
        announceRound();
    } else if (userChoice === "Paper" && computerOption == 0) {
        secondPara.innerText = 'You win this round!';
        computerPoints--;
        round++;
        announceRound();
    } else if (userChoice === "Scissors" && computerOption === 1) {
        secondPara.innerText = 'You win this round!';
        computerPoints--;
        round++;
        announceRound();
    } else if (userChoice === "Rock" && computerOption === 1) {
        secondPara.innerText = 'You lose this round!';
        playerPoints--;
        addFade();
        round++;
        announceRound();
    } else if (userChoice === "Paper" && computerOption === 2) {
        secondPara.innerText = 'You lose this round!';
        playerPoints--;
        addFade();
        round++;
        announceRound();
    } else if (userChoice === "Scissors" && computerOption === 0) {
        secondPara.innerText = 'You lose this round!';
        playerPoints--;
        addFade();
        round++;
        announceRound();
    } else {
        secondPara.innerText = 'Tie!';
        round++;
        announceRound();
    };
    //console.log(round);
}

let rock = document.querySelector('#rock');
rock.addEventListener('click', chooseRock);

let paper = document.querySelector('#paper');
paper.addEventListener('click', choosePaper);

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', chooseScissors);

/* The following functions will return the choice of the
   button pressed and also callback the playRound function
   so that the computer choice is also determined each time
   the button is clicked, and a result is determined.
*/

function chooseRock() {
    userChoice = 'Rock';
    playRound(userChoice);
}

function choosePaper() {
    userChoice = 'Paper';
    playRound(userChoice);
}

function chooseScissors() {
    userChoice = 'Scissors';
    playRound(userChoice);
}

//User and Computer Points Variables 
let playerPoints = 5;

let computerPoints = 5;

let round = 1;

// testing !
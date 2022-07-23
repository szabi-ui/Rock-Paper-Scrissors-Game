// VARIABLES
const yourCount = document.querySelector('.count__user');
const computerCount = document.querySelector('.count__computer');
const resultPhrase = document.querySelector('.result');
const btns = document.querySelector('.btns');
// FOR SVG
const svgUser = document.querySelector('.svg__user');
const svgPC = document.querySelector('.svg__computer')
// FOR MODAL
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal__btn');
// SCORE
let pcCount = 0;
let userCount = 0;

// EVENT LISTENERS
modalBtn.addEventListener('click', function () {
    modal.classList.toggle('hide');
})

btns.addEventListener('click', function (e) {
    // SET WHAT EACH PLAYER PICKS
    let userPick = '';
    let computerPick = computerPlay();

    // CHECKS IF USER PICKED ONE OF THE VALUES
    if (e.target.classList.contains('btn')) {
        userPick = e.target.value;
    }
    else {
        resultPhrase.textContent = 'Pick a valid value: rock, paper, scissors';
        return;
    }
    
    displaySvg(userPick, computerPick);
    playRound(userPick, computerPick);
    ifWinner();
})

// GETS COMPUTER RANDOM PICK
function computerPlay(){
    let values = ['rock', 'paper', 'scissors'];
    let ndx = Math.floor(Math.random() * 3);
    return values[ndx];
}
// PLAYS A ROUND
function playRound(userValue, pcValue) {
    if(userValue === pcValue) {
        resultPhrase.textContent = 'Tie! Pick again!';
    }
    else if(userValue === 'scissors' && pcValue === 'paper') {
        userCount++;
        yourCount.textContent = userCount;
        resultPhrase.textContent = 'You win! Scissors cutts paper!';
    }
    else if(userValue === 'rock' && pcValue === 'scissors') {
        userCount++;
        yourCount.textContent = userCount;
        resultPhrase.textContent = 'You win! Rock beats scissors!';
    }
    else if(userValue === 'paper' && pcValue === 'rock') {
        userCount++;
        yourCount.textContent = userCount;
        resultPhrase.textContent = 'You win! Paper covers rock!';
    }
    else if(userValue === 'paper' && pcValue === 'scissors') {
        pcCount++;
        computerCount.textContent = pcCount;
        resultPhrase.textContent = 'You lost! Scissors cutts paper!';
    }
    else if(userValue === 'scissors' && pcValue === 'rock') {
        pcCount++;
        computerCount.textContent = pcCount;
        resultPhrase.textContent = 'You lost! Rock breaks scissors!';
    }
    else if(userValue === 'rock' && pcValue === 'paper') {
        pcCount++;
        computerCount.textContent = pcCount;
        resultPhrase.textContent = 'You lost! Paper beats rock!';
    }
}
// DISPLAYS LAST ROUND PICKS
function displaySvg(user, pc) {
    if(user) {
        svgUser.setAttribute('xlink:href', `sprite.svg#icon-hand-${user}-o`);
    }
    if(pc) {
        svgPC.setAttribute('xlink:href', `sprite.svg#icon-hand-${pc}-o`)
    }
}
// CHECKS IF WINNER
function ifWinner(){
    if(userCount === 5 ) {
        modal.firstElementChild.firstElementChild.textContent = 'Congratulations, you won!';
        resetScore();
    }else if(pcCount === 5){
        modal.firstElementChild.firstElementChild.textContent = 'Oh no, you lost this time!';
        resetScore();
    }
}
// RESETS SCORE
function resetScore() {
    modal.classList.toggle('hide');
    userCount = 0;
    pcCount = 0;
    yourCount.textContent = userCount;
    computerCount.textContent = pcCount;
    svgUser.setAttribute('xlink:href', 'sprite.svg#icon-question');
    svgPC.setAttribute('xlink:href', 'sprite.svg#icon-question');
    resultPhrase.textContent = 'First that gets to 5 wins the game!';
}
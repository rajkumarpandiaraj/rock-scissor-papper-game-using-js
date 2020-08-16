const choices = document.querySelectorAll('.choice');
const resetBtn = document.querySelector('#reset-btn');
const score = document.querySelector('#score');
const modal = document.querySelector('.modal');
//console.log(choices, resetBtn, scoreBoard, modal);

const scoreBoard = {
    player : 0,
    computer : 0
};

function playGame(e){
    resetBtn.style.display = 'inline-block'
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice ,winner);
    displayModal(winner, computerChoice);
    getScoreBoard();
    
    
    
}

function getScoreBoard(){
    score.innerHTML = `
        <p>player : ${scoreBoard.player}</p>
        <p>player : ${scoreBoard.computer}</p>
        `
}

function displayModal(w, c){
    modal.style.display = 'block'
    if(w == 'computer'){
        document.getElementById('modal-content').innerHTML = `
            <h1 class = 'text-lose'>you lose</h1>
            <i class = 'fas fa-hand-${c} fa-10x'></i>
            <p> computer chose ${c}</p>
        `
    } else if(w == 'player'){
        document.getElementById('modal-content').innerHTML = `
            <h1 class = 'text-win'>you won</h1>
            <i class = 'fas fa-hand-${c} fa-10x'></i>
            <p> computer chose ${c}</p>
        `

    } else{
        document.getElementById('modal-content').innerHTML = `
            <h1>It's a draw</h1>
            <i class = 'fas fa-hand-${c} fa-10x'></i>
            <p> computer chose ${c}</p>
        `

    }

    
}


function getWinner(p, c){
    if(p == c){
        return "It's a draw" ;
    }

    if(p == 'rock'){
        if(c == 'paper'){
            scoreBoard.computer++ ;
            return 'computer';
        } else {
            scoreBoard.player++ ;
            return 'player'
        }
    }

    if(p == 'paper'){
        if(c == 'scissors'){
            scoreBoard.computer++ ;
            return 'computer';
        } else {
            scoreBoard.player++ ;
            return 'player'
        }
    }

    if(p == 'scissors'){
        if(c == 'stone'){
            scoreBoard.computer++ ;
            return 'computer';
        } else {
            scoreBoard.player++ ;
            return 'player'
        }
    }


}

function getComputerChoice(){
    const randomNum = Math.random();
    
    
    if(randomNum < 0.34){
        return 'rock' ;
    } else if(randomNum < 0.68){
        return 'paper' ;
    } else{
        return 'scissors'
    }
    
}

choices.forEach(choice => {
    choice.addEventListener('click', playGame);
    
});

modal.addEventListener('click', () =>{
    modal.style.display = 'none';
});

resetBtn.addEventListener('click',() =>{
    scoreBoard.player = 0;
    scoreBoard.computer = 0; 
    getScoreBoard();
})







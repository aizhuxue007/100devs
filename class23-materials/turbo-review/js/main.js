// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'this is a question right?'
if (sentence.endsWith('?')) {
    alert('this is a question')
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let words = 'jr. dev blah blah jr. dev'
console.log(words.replace('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function playRockPaperScissors() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.ceil(Math.random() * 3)]
}

console.log(playRockPaperScissors())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let userChoice = prompt('rock paper or scissors?').toLowerCase();


function playGame(userChoice) {
    let computerChoice = playRockPaperScissors()
    if (userChoice === computerChoice) {
        console.log('draw')
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log('you win!')
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log('you win!')
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log('you win!')
    } else {
        console.log('you lose!')
    }    
}

playGame(userChoice);

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function choicez(arr) {
    arr.forEach(choice => {
        playGame(choice);
    })
}

choicez(['rock', 'paper', 'scissors']);
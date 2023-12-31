//Create a button that adds 1 to a botScore stored in localStorage 

const button = document.querySelector('#button')
const output = document.querySelector('h2')
let botScore = Number(localStorage.getItem('botScore')) ?? 0;

output.innerText += " " + botScore;

button.addEventListener('click', incrementOutput)

function incrementOutput() {
    botScore++;
    output.innerText = botScore;
    localStorage.setItem('botScore', botScore);
}


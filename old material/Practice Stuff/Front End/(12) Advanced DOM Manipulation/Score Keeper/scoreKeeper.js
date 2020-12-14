// Getting familiar with different selectors
var p1Btn = document.querySelector("#p1");
var p2Btn = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetBtn = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Btn.addEventListener("click", function() {
    if(!gameOver){
        p1Score++;
        console.log(p1Score, winningScore);
        
        if (p1Score === winningScore) { // === results in bug comparing a string to a num, == could work but there is a different way
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function() {
    if(!gameOver){
        p2Score++;
        console.log(p2Score, winningScore);
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

resetBtn.addEventListener("click", function() {
    reset();
});

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    reset();
    winningScore = Number(this.value); // Adding Number() around numInput.value fixes bug
});
var numOfSqrs = 6;
var colors =[];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
    // mode btns event listeners
    setUpModeBtns();
    setUpSqrs();
    reset();
}

function setUpModeBtns() {
    for (var i = 0; i < modeBtn.length; ++i) {
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
    
            // Ternary Operator
            this.textContent === "Easy" ? numOfSqrs = 3: numOfSqrs = 6;
            reset();
        })
    }
}

function setUpSqrs() {
    for (var i = 0; i < squares.length; ++i) {
        // add click listeners to squares
        squares[i].addEventListener("click", function() {
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            
            // compare color to picked color
            console.log(clickedColor, pickedColor);
            if (clickedColor === pickedColor) {
                //alert("Correct");
                messageDisplay.textContent = "Correct";
                resetBtn.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
    
            else {
                //alert("wrong");
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}

function reset() {
    colors = generateRandomColors(numOfSqrs);
    // pick new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked colors
    colorDisplay.textContent = pickedColor;

    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change colors of squares
    for (var i = 0; i < squares.length; ++i) {
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click", function() {
    reset();
})

function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; ++i) {
        // change each color to mjatch given color
        squares[i].style.backgroundColor = color;
    } 
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // Make an array
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num; ++i){
        // get random color and push to array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
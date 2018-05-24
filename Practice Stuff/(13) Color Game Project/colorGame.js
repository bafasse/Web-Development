var numOfSqrs = 6;
var colors = generateRandomColors(numOfSqrs);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numOfSqrs = 3;
    colors = generateRandomColors(numOfSqrs);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; ++i) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSqrs = 6;
    colors = generateRandomColors(numOfSqrs);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; ++i) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
})


resetBtn.addEventListener("click", function() {
    // generate new colors
    colors = generateRandomColors(numOfSqrs);
    // pick new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked colors
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (var i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; ++i) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i]; 

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
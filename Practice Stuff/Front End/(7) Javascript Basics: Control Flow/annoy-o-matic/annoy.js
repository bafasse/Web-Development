// var question = prompt("Are we there yet?");
//
//
// while (question !== "yes") {
//     var question = prompt("Are we there yet?");
// }
//
// alert("Yay we're there!");


// BONUS: Allow for any phrase with the word yes in it

var question = prompt("Are we there yet?");

// This means while yes is not in question
while (question.indexOf("yes") === -1) {
    var question = prompt("Are we there yet?");
}

alert("Yay we're there!");

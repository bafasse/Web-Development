var number = Number(prompt("Guess a number?"));
var answer = 7;

if (number === answer) {
  alert("You got it!");
}

else if (number > answer){
  alert("Too High. Refresh the page to try again");
}

else {
  alert("Too Low. Refesh the page to try again");
}

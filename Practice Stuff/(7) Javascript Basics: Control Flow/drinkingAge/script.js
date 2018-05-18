var age = Number(prompt("How old are you?"));

// Print a message if your age is negative
if (age < 0) {
  console.log("Come back after you've been born");
}

// Print a message if you're 21
else if (age >= 21) {
  console.log("Have a good time");
}

// Print if your age is odd
if (age % 2 != 0) {
  console.log("Your age is odd");
}

else {
  console.log("Your age is even");
}

// BONUS: print if your age is a perfect square
if (age % Math.sqrt(age) == 0) {
  console.log("Your age is a perfect square");
}

else {
  console.log("Your age isnt a perfect square");
}

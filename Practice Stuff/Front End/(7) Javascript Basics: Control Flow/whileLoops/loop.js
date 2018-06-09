// Print all number between -19 and 10
var num = -19;

while (num <= 10) {
  console.log(num);
  if (num == 10) {
    console.log("DONE");
  }
  num ++;
}

// Print all even numbers between 10 and 40
var evenNum = 10;

// Should have just added 2 to evenNum
while (evenNum <= 40) {
  if (evenNum % 2 == 0) {
    console.log(evenNum);
  }

  if (evenNum == 40) {
    console.log("DONE");
  }
  evenNum++;
}

// Print all odd numbers between 300 and 333
var oddNum = 300;

while (oddNum <= 333) {
  if (oddNum % 2 !== 0) {
    console.log(oddNum);
  }

  if (oddNum == 333) {
    console.log("DONE");
  }
  oddNum++;
}
// Print all numbers divisible by 5 and 3 between 5 and 50
var number = 5;

while (number < 50) {
  if (number % 5 === 0 && number % 3 === 0) {
    console.log(number);
  }
  number++;
}

// Print all number between -19 and 10
console.log("Print all number between -19 and 10");
for (var i = -10; i < 20; i++) {
  console.log(i);
}

// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
for (var i = 10; i < 41; ++i) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
for (var i = 300; i < 334; ++i) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Print all numbers divisible by 5 and 3 between 5 and 50
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for (var i = 5; i < 51; ++i) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}

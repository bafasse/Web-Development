// function isEven(num) {
//   if (num % 2 == 0) {
//     return true;
//   }
//
//   else {
//     return false;
//   }
// }

function isEven(num) {
  return num % 2 ===0;
}

function factorial(num) {
  var count = 1;

  for (var i = 1; i < num + 1; ++i) {
    count *= i;
  }
  return count;
}

function keebabToSnake(str) {
  return str.replace(/-/g , "_");
  //return newStr;
}

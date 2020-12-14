var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function printReverse() {
  for (var i = 0; i < colors.length; ++i) {
    console.log("Color[" + i + "]: " + colors[i]);
  }
  console.log(" ");
  for (var i = colors.length - 1; i >= 0; --i) {
    console.log("Color[" + i + "]: " + colors[i]);
  }
}

// isUniform

function isUniform(array) {
  var first = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] !== first) {
      return false;
    }
  }
  return true;
}

// Using a forEach
// function isUniform(array) {
//   var first = array[0];
//   array.forEach(function(element) {
//     if (element !== first) {
//       return false;
//     }
//   });
//   return true;
// }

// sumArray

function sumArray(array) {
  var total = 0;
  array.forEach(function(element) {
    total += element;
  });
  return total;
}

// maxAray

function maxArray(array) {
  var max = array[0]
  for (var i = 0; i < array.count; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

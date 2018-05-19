var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

for (var i = 0; i < colors.length; ++i) {
  console.log(colors[i]);
}

colors.forEach(function() {
  console.log("inside for each");
});

colors.forEach(function(color) {
  console.log("inside for each " + color);
});

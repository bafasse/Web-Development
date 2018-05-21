// No need to put this in a file if you want to changes to happen when you load,
// simply put them in CSS file

// var tag = document.getElementById("highlight");

// tag.style.color = "blue";
// tag.style.border = "10px solid red";
// tag.style.fontSize = "70px";
// tag.style.background = "yellow";
// tag.style.marginTop = "200px";

var p = document.querySelector("p");

p.classList.add("big");

//  Another 2 options
// p.classList.remove("big");
// p.classList.toggle("big");
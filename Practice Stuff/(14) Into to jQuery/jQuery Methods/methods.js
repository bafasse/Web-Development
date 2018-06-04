// These lines of code were input into the console on Chrome


// ------------------------------------------------------------
// .text() method -  works like textContent in vanilla JS
$("h1").text();
$("ul").text();
$("li").text();

// How to change text with .text()
// $("h1").text("This text has been changed with .text()");
$("h1").text(); // Will show the new text that h1 was asigned to

// Change all li
// $("li").text("This has been changed with .text()");
// ------------------------------------------------------------


// ------------------------------------------------------------
// .html() method
$("ul").html();
// $("ul").html("<li>This has been chnaged with .html()</li>");
// $("ul").html("<a href='https://google.com'>Click Me</a>");
// ------------------------------------------------------------


// ------------------------------------------------------------
// .attr() method
$("img").css("width", "200px");
// $("img").attr("src", "http://glenloywildlife.co.uk/wp-content/uploads/2015/09/feature001.jpg") // Changes all img
$("img:first-of-type").attr("src", "http://glenloywildlife.co.uk/wp-content/uploads/2015/09/feature001.jpg") // Changes only the first

// Ways to select last image
$("img").last().attr("src", "http://glenloywildlife.co.uk/wp-content/uploads/2015/09/feature001.jpg");

// $("input").attr("type", "color");
// ------------------------------------------------------------


// ------------------------------------------------------------
// .val() method
$("input").val(); // will return nothing if it is empty
$("input").val("Rusty");
$("select").val(); // Shows what the user has picked in the drop down menu
// ------------------------------------------------------------


// ------------------------------------------------------------
// .addClass(), .removeClass(), .toggleClass() methods
$("h1").addClass("correct");
$("li").addClass("wrong");

$("h1").removeClass("correct");
$("li").removeClass("wrong");

$("li").toggleClass("done"); // adds class, in this case
$("li").toggleClass("done"); // removes class, in this case

$("li").first().toggleClass("done");
$("li").toggleClass("done");
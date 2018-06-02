// Code that was input into the console on Chrome
$("h1")

$("li")

$("body")

$("a")       // Selects all anchor tags

$("li a")    // Select anchor tags within an li (ie. only monkey.com)

$("ul li a") // Select anchor tags in li in a ul

$("#adorable")

// Manipulating Style
$("h1").css("color", "yellow")
var styles = document.querySelector("h1").style.color = "orange";

// Can pass in styles in objects with .css
var style = {
    color: "red",
    background: "pink",
    border: "2px solid purple"
}

$("h1").css(style)

// Make changes to all li
$("li").css("color", "blue")

$("a").css("font-size", "40px");

$("li").css({
    fontSize: "10px",
    border: "2px dashed red",
    background: "rgba(89, 45, 20, 0.5)"
});
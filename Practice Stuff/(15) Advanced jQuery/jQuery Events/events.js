// click()
// click() only adds listeners to existing elements on page
$("h1").click(function(){
    alert("h1 clicked");
});

$("button").click(function() {
    alert("button clicked");
    $(this).css("background", "pink");
    var text = $(this).text();
    console.log("You clicked " + text);
    
})

//.keypress()
$("input").keypress(function(event) {
    if(event.which === 13){
        alert("You hit enter")
    }
});

// on()
// on() adds listeners to potential future elements
$("h1").on("click", function() {
    // this only changed the h1 thats clicked
    $(this).css("color", "purple")
});

$("input").on("keypress", function() {
    console.log("keypressed");
});

$("button").on("mouseenter", function() {
    $(this).css("font-weight", "bold")
    // console.log("Mouse Enter")
});
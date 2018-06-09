// $("button").on("click", function() {
//     $("div").fadeOut(1000, function() {
//         // console.log("Fade completed");
//         $(this).remove();
//     });
// });

// $("button").on("click", function() {
//     $("div").fadeIn(1000, function() {
//         // console.log("Fade completed");
//         // $(this).remove();
//     });
// });

// $("button").on("click", function() {
//     $("div").fadeToggle(500, function() {
//         // console.log("Fade completed");
//         // $(this).remove();
//     });
// });

// adds
// $("button").on("click", function() {
//     $("div").slideDown()
// });

// removes
// $("button").on("click", function() {
//     $("div").slideUp()
// });

$("button").on("click", function() {
    $("div").slideToggle(1000, function() {
        // console.log("Slide Toggle");
        $(this).remove();
    });
});
var button = document.querySelector("button");
var isPink = false;

button.addEventListener("click", colorChanger);

// function colorChanger() {
//     if (isPink) {
//         document.body.style.background = "pink";
//         isPink = false;
//     }

//     else {
//         document.body.style.background = "white";
//         isPink = true;
//     }
// }

// Another shorter way
function colorChanger() {
    document.body.classList.toggle("purple");
}
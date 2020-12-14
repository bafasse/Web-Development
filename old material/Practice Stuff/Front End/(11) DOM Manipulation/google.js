// code used to manipulated Google's website from Chrome Developer 
var logo = document.querySelector("#hplogo");

// Change Google logo to a kitten
logo.setAttribute("srcset", "https://4fi8v2446i0sw2rpq2a3fg51-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/KittenProgression-Darling-week7.jpg");

// Change hwight and width of photo
logo.style.height = "100px";
logo.style.width = "200px";

logo.style.border = "2px solid purple";

// Select all links
var links = document.getElementsByTagName("a");

// Loop over all anchor tags
for (var i = 0; i < links.length; ++i) {
    console.log(links[i].textContent);
}

for (var i = 0; i < links.length; ++i) {
    links[i].style.background = "pink";
}

for (var i = 0; i < links.length; ++i) {
    links[i].style.border = "1px dashed purple";
    links[i].style.color = "orange";
}

// Find the links
for (var i = 0; i < links.length; ++i) {
    console.log(links[i].getAttribute("href"));
}

// Change all links to apple.com 
for (var i = 0; i < links.length; ++i) {
    links[i].setAttribute("href", "https://apple.com");
}
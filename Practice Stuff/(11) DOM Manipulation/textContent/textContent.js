var p = document.getElementsByTagName("p")[0];
p.textContent; // This doesnt show tags

var ul = document.querySelector("ul");
ul.textContent;

// You can update with textContent but it's dangerous
// This gets rid of an tages you have on words (in this case the strong tag)
//p.textContent = "Corgi's are really super adorable";

// This keeps the tags 
p.innerHTML; 

// .textContent and be added to the end of a selector
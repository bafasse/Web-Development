var todo = ["Add to list"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "new") {
    var add = prompt("what would you like to add?");
    todo.push(add);
  }

  else if ( input === "list") {
    console.log(todo);
  }

  else {
    console.log("Please input a valid response");
  }

  var input = prompt("What would you like to do now?");
}

console.log("Please come again");

var todo = ["Add to list", "Delete from list"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "new") {
    addTodo();
  }

  else if ( input === "list") {
    listTodo();
  }

  else if (input === "delete") {
    var index = prompt("Enter index of todo to delete");
    deleteTodo(index);
  }

  else {
    console.log("Please input a valid response");
  }

  var input = prompt("What would you like to do now?");
}

console.log("Please come again");

function listTodo() {
  console.log("**********");
  todo.forEach(function(todo, index) {
    console.log(index + ":" + todo);
  });
  console.log("**********");
  console.log("Added todo");
}

function deleteTodo(index) {
  todo.splice(index, 1);
  console.log("Deleted todo");
}

function addTodo() {
  var add = prompt("what would you like to add?");
  todo.push(add);
}

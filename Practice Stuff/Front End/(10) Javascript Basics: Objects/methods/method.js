var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: [ "Bob", "Tina"],
    add: function(x,y) {
        return x + y;
    }
};

var dogSpace = {};

dogSpace.speak = function() {
    return "WOOF";
};

var catSpace = {};

catSpace.speak = function() {
    return "MEOW";
};

// this keyword
var comments = {
    data: ["Hello", "Goodbye", "Lame..."]
};

comments.print = function() {
    this.data.forEach(function(el) {
        console.log(el);
    });
};

// function print(arr) {
//     arr.forEach(function(el) {
//         console.log(el);
//     });
// };

// print(comments.data);
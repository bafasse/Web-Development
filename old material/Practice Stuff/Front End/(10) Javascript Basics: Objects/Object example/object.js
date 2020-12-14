// Create an empty Object
var person = {};
person.name = "Blake";
person.age = 21;
person.city = "Sachse";

// All at Once
var person = {
    name: "Blake", // Note the : and the ,
    age: 21,
    city: "Sachse"
};

// Another way
var person = new Object();
person.name = "Blake";
person.age = 21;
person.city = "Sachse";

// Objects in Arrays
var posts = [{
    title: "Cats are mediocre",
    author: "Colt",
    comments: ["Awesome Post", "Terrible Post"]
},
{
    title: "Cats are awesome",
    author: "Catluvr",
    comments: ["<3", "Go the hell I hate you"]
}];
function buildMovie(movie) {
    var result = "You have ";
    if(movies.hasWatched) {
        result += "watched ";
    }
    else {
        result += "not watched ";
    }
    result += "\"" + movie.title + "\" - "; // Needs to be movie instead on movies
    result += movie.rating + " stars"
    return result;
}

var movies = [{
    title: "Fahrenheit 451 (2018)",
    hasWatched: true,
    rating: 4
},
{
    title: "John Wick",
    hasWatched: true,
    rating: 5
},
{
    title: "Batman v Superman",
    hasWatched: false,
    rating: 3
}];

movies.forEach(function(movie) {
    console.log(buildMovie(movie));
});
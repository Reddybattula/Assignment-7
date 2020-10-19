/*eslint-env browser*/

//STEP 1
var movie_list;
movie_list = ["Bommarillu", "Geetha govindam", "Nuvvastanante nenoddnatana", "Yagnam", "Ready"];
window.console.log(movie_list[1]);
window.console.log("\n");
  
//STEP 2
var movies = new Array(5);
movies[0] = "Bommarillu";
movies[1] = "Geetha govindam";
movies[2] = "Nuvvastanante nenoddnatana";
movies[3] = "Yagnam";
movies[4] = "Ready";
window.console.log(movies[0]);
window.console.log("\n");
//STEP 3
var movies = new Array(5);
movies[0] = "Bommarillu";
movies[1] = "Geetha govindam";
movies[2] = "Nuvvastanante nenoddnatana";
movies[3] = "Yagnam";
movies[4] = "Ready";
movies.splice(3, 0, "Indra");
window.console.log(movies.length);
window.console.log("\n");

//STEP 4

var movies = [];
movies[0] = "Bommarillu";
movies[1] = "Geetha govindam";
movies[2] = "Nuvvastanante nenoddnatana";
movies[3] = "Yagnam";
movies[4] = "Ready";

delete movies[0];
window.console.log(movies);
window.console.log("\n");

//STEP 5
var i;
var movies = [];
movies[0] = "Bommarillu";
movies[1] = "Geetha govindam";
movies[2] = "Nuvvastanante nenoddnatana";
movies[3] = "Yagnam";
movies[4] = "Ready";
movies[5] = "Vasu";
movies[6] = "Nuvve nuvve";

for(i=0; i<7; i++) {
    window.console.log(movies[i]);
}
window.console.log("\n");

//STEP 6
var movies = [];
movies[0] = "Bommarillu";
movies[1] = "Geetha govindam";
movies[2] = "Nuvvastanante nenoddnatana";
movies[3] = "Yagnam";
movies[4] = "Ready";
movies[5] = "Vasu";
movies[6] = "Nuvve nuvve";
var x;
for( x in movies) {
    window.console.log(movies[x]);
}
window.console.log("\n");
//STEP 7
var movies = [];
movies[0] = "Bommarillu";
movies[1] = "Geetha govindam";
movies[2] = "Nuvvastanante nenoddnatana";
movies[3] = "Yagnam";
movies[4] = "Ready";
movies[5] = "Vasu";
movies[6] = "Nuvve nuvve";
var x;
movies.sort();
for( x in movies) {
    window.console.log(movies[x]);
}
window.console.log("\n");

//STEP 8
var i;
var movies = ["Bommarillu", "Geetha govindam", "Nuvvastanante nenoddnatana", "Ready"];
var leastFavMovies =["Vasu", "Nuvve nuvve", "Yagnam"];

window.console.log("Movies I like:");
window.console.log("\n");

for(i=0; i<4; i++) {
    window.console.log(movies[i]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:");
window.console.log("\n");

for(i=0; i<3; i++) {
    window.console.log(leastFavMovies[i]);
}
window.console.log("\n");
//STEP 9
var movies = ["Bommarillu", "Geetha govindam", "Nuvvastanante nenoddnatana", "Ready"];
var leastFavMovies =["Vasu", "Nuvve nuvve", "Yagnam"];
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
for(i=0; i<7; i++) {
    window.console.log(movies[i]);
}
window.console.log("\n");


//STEP 10
var movies = ["Bommarillu", "Geetha govindam", "Nuvvastanante nenoddnatana", "Ready"];
var leastFavMovies =["Vasu", "Nuvve nuvve", "Yagnam"];
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
 window.console.log(movies.pop());

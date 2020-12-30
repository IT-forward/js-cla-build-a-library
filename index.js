import { Media, Book, Movie, CD } from "./resources.js"
let asar = new Book("Erkin Vohidov", "Nido", 18);
asar.addRating(8);
console.log(asar);

let movie = new Movie("Homestead", "Passengers", 125);
movie.toggleCheckOutStatus();
movie.addRating(9);
console.log(movie);

let music = new CD("Grigory Leps", "Lucky Man", ["Na zare"]);
music.toggleCheckOutStatus();
music.addRating(10);
console.log(music);


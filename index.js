import { Media, Book, Movie, CD } from "./resources.js";
const godfather = new Book('Mario Puzo', 'The Godfather', 532);
godfather.addRating(8);
godfather.toggleCheckOutStatus();
console.log(godfather);

const interstellar = new Movie('Christopher Nolan', 'Interstellar', 160);
interstellar.addRating(10);
interstellar.toggleCheckOutStatus();
console.log(interstellar);

const jazzMusic = new CD('Frank Sinatra', 'Christmas Songs by Sinatra', ['Jingle Bells', 'Silent Night', 'White Christmas']);
jazzMusic.addRating(7);
console.log(jazzMusic);
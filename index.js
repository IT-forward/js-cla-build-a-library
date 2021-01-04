import { Media, Book, Movie, CD } from "./resources.js";
let bookName = new Book("Marijin Haverbeke","Eloquent Javascript",430);
bookName.addRating(1);
console.log(bookName);

let movieName = new Movie("Alijonov Valijov","Tarmoqdagi tuzoq", 135);
movieName.toggleCheckOutStatus();
movieName.addRating(5);
console.log(movieName);

let musicName = new CD("Shoxrux","Shukrona",['Rep']);
musicName.toggleCheckOutStatus();
musicName.addRating(2);
musicName.addRating(8);
console.log(musicName);
console.log(musicName.getAverageRating());

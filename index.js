import { Media, Book, Movie, CD } from "./resources.js";

const bookObj = new Book("James Clear", "Atomic Habits", 320);

console.log(bookObj.author);
console.log(bookObj.title);
console.log(bookObj.pages);
console.log(bookObj.isCheckedOut);
console.log(bookObj.ratings);

bookObj.addRating(50);
bookObj.addRating(60);
bookObj.addRating(70);

console.log(bookObj.getAverageRating());

console.log(bookObj.ratings);

bookObj.toggleCheckOutStatus();
console.log(bookObj.isCheckedOut);
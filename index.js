import { Media, Book, Movie, CD } from "./resources.js";

const book = new Book('Tohir Malik', 'Alvido, bolalik', 400);
console.log(book);
book.addRating(9);
book.addRating(10);
book.addRating(8);
console.log(book.getAverageRating());
book.toggleCheckOutStatus();
console.log(book);


const movie = new Movie('Shuhrat Abbosov', 'Sen yetim emassan', 2);
console.log(movie);
movie.addRating(10);
movie.addRating(9);
movie.addRating(10);
console.log(movie.getAverageRating());
console.log(movie.runTime);
console.log(movie);


const cd = new CD('Ozodbek Nazarbekov',
                  'Nega chaman istamas yantoq',
                 ['Mendirman', 'Onam bo\'lsaydi']);

console.log(cd);
console.log(cd.title);
console.log(cd.songs);

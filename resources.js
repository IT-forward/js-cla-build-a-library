export class Media {
constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  } 

  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  getAverageRating() {
    let amount = 0;
    for (let i = 0; i < this._ratings.length; i++) {
      amount += this._ratings[i];
    }
    return amount / this._ratings.length;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  addRating(rating) {
    this._ratings.push(rating);
  }
}

export class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

export class Movie extends Media {
  constructor(director, title,  runtime) {
    super(title);
    this._director = director;
    this._runTime = runtime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

export class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs () {
    return this._songs;
  }
}

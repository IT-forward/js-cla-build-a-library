export class Media {
  // TODO
  constructor(title, isCheckedOut = false, ratings = []) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
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
    // this.AverageRating
  }
  toggleCheckOutStatus(){
    //some Proerties
  }
  addRating() {
    //some properties
  }

}

export class Book extends Media {
  constructor(author, pages) {
    super(title,isCheckedOut,ratings);
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

export class Movie  extends Media {
  constructor(director, runTime) {
    super(title, isCheckedOut, ratings)
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  // TODO
}

export class CD extends Media {
  constructor(artist, songs) {
    super(title, isCheckedOut, ratings);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

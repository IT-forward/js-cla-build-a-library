## How to run and test?

As previous tasks it uses `yarn` and `jest` testing framework so the process is the same:

1. `git clone` the repo.
2. Create new `branch` with your name and checkout.
3. Run `yarn`.
4. **To run tests:** run `yarn test` or `yarn watch` depending on your preference.

# Build a Library

Congratulations, you’ve passed the grueling rigmarole of librarian school and have become head librarian at your local Books-‘N-Stuff.

Just as you sit down, eager to utilize all those skills you learned in _“Lib 203 - Shushing: How to Maintain Order While Spitting”_, you realize you’re still using index cards to handle everything.

But no matter, you know some _JavaScript_, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named `Media` with three subclasses: `Book`, `Movie`, and `CD`. These three subclasses have the following properties and methods:

### Book

**Properties**:

- author (string)
- title (string)
- pages (number)
- isCheckedOut (boolean, initially false)
- ratings (array, initially empty)

**Getters**: all properties have a getter

**Methods**:

- .getAverageRating()
- .toggleCheckOutStatus()
- .addRating()

### Movie

**Properties**:

- director (string)
- title (string)
- runTime (number)
- isCheckedOut (boolean, initially false)
- ratings (array, initially empty)

**Getters**: all properties have a getter

**Methods**:

- .getAverageRating()
- .toggleCheckOutStatus()
- .addRating()

### CD

**Properties**:

- artist (string)
- title (string)
- isCheckedOut (boolean, initially false)
- and ratings (array, initially empty)
- songs (array of strings)

**Getters**: all properties have a getter

**Methods**:

- .getAverageRating()
- .toggleCheckOutStatus()
- .addRating()

After you implemented each of them,

- create an object at least one of the class type in `index.js`
- `console.log` each getter value
- test each method's behavior
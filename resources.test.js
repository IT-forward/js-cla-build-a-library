import { Media, Book, Movie, CD } from "./resources.js";

let obj;

function testPropGetter(getterName, typeName) {
  const propName = "_" + getterName;
  describe(`${propName} property`, () => {
    it("exists", () => {
      expect(obj).toHaveProperty(propName);
    });

    it(`is ${typeName}`, () => {
      if (typeName === "array") {
        expect(Array.isArray(obj[propName])).toBe(true);
      } else {
        expect(typeof obj[propName]).toBe(typeName);
      }
    });
  });

  describe(`${getterName} getter`, () => {
    it("exists", () => {
      expect(obj).toHaveProperty(getterName);
    });

    it(`equal to ${propName} property`, () => {
      expect(obj[getterName]).not.toBeUndefined();
      expect(obj[getterName]).toEqual(obj[propName]);
    });
  });
}

const sharedTests = () => {
  testPropGetter("title", "string");
  testPropGetter("isCheckedOut", "boolean");
  testPropGetter("ratings", "array");

  describe("toggleCheckOutStatus()", () => {
    it("should toggle _isCheckedOut value", () => {
      expect(obj.isCheckedOut).toBe(false);
      obj.toggleCheckOutStatus();
      expect(obj.isCheckedOut).toBe(true);
      obj.toggleCheckOutStatus();
      expect(obj.isCheckedOut).toBe(false);
    });
  });

  describe("addRating()", () => {
    it("should add rating to _ratings array", () => {
      expect(obj.ratings).toEqual([]);
      obj.addRating(4);
      obj.addRating(5);
      expect(obj.ratings).toHaveLength(2);
      expect(obj.ratings).toContain(4);
      expect(obj.ratings).toContain(5);
    });
  });

  describe("getAverageRating()", () => {
    it("should calculate average rating", () => {
      obj.addRating(4);
      obj.addRating(5);
      expect(obj.getAverageRating()).toBe(4.5);
    });
  });
};

describe("Book class", () => {
  beforeEach(() => {
    obj = new Book("Title", "Author", 123);
  });

  describe("behaves like Media class", sharedTests);
  testPropGetter("author", "string");
  testPropGetter("pages", "number");
});

describe("Movie class", () => {
  beforeEach(() => {
    obj = new Movie("Title", "Mr Director", 123);
  });

  describe("behaves like Media class", sharedTests);
  testPropGetter("director", "string");
  testPropGetter("runTime", "number");
});

describe("CD class", () => {
  beforeEach(() => {
    obj = new CD("Title", "Ms Artist", 12);
  });

  describe("behaves like Media class", sharedTests);
  testPropGetter("artist", "string");
  testPropGetter("songs", "number");
});

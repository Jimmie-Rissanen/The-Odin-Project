//Selectors
const mainContentArea = document.getElementById("mainContent");

// library
let myLibrary = [
  { name: "janneboken", author: "jan banan", pages: 5, read: true },
  { name: "karstenboken", author: "jan banan", pages: 5200, read: true },
  { name: "tageboken", author: "jan ban", pages: 5020, read: true },
  { name: "polleboken", author: "jan banan", pages: 500, read: true },
  { name: "hansboken", author: "jan banan", pages: 502220, read: true },
];
// Book constructor and prototype methods
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return Object.entries(this);
};

Book.prototype.readNow = function () {
  this.read = !this.read;
};

Book.prototype.addBookToLibrary = function (libraryObject, book) {
  libraryObject.push(book);
};
//remove the object from the array that holds the library

Book.prototype.Remove = function (libraryObject) {};

// Add a function that creates cards with user input

const card = document.createElement("div");
card.classList.add("book-card");
document.body.appendChild(card);

// Add a way to display the cards

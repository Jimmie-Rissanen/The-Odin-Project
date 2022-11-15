// library
let myLibrary = [];
//Selectors
const mainContentArea = document.getElementById("main-content");
const addBookButton = document.querySelector(".add-book-button");
const modal = document.querySelector(".modal");
const form = document.querySelector("form");
const cancelButton = document.querySelector(".cancel-button");
const submitButton = document.querySelector(".submit-button");
const removeBookButtons = document.querySelectorAll(".remove-book");

// Event listeners
window.addEventListener("load", displayCards);
addBookButton.addEventListener("click", showBookModal);
cancelButton.addEventListener("click", hideBookModal);
submitButton.addEventListener("click", addBook);
removeBookButtons.forEach((item) => item.addEventListener("click", removeBook));
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

function displayCards() {
  myLibrary.forEach((book) => {
    mainContentArea.appendChild(createCard(book));
  });
}

function removeBook() {
  console.log(removeBookButtons);
}

function removeCards() {
  while (mainContentArea.firstChild) {
    mainContentArea.removeChild(mainContentArea.firstChild);
  }
}

function createCard(book) {
  const card = document.createElement("div");
  card.classList.add("book-card");
  const paragraph = document.createElement("p");
  const content = `
  Name: ${book.name} 
  Author: ${book.author}
  Pages: ${book.pages}
  Read: ${book.read}
  `;
  paragraph.textContent = content;
  card.appendChild(paragraph);
  const button = document.createElement("button");
  button.textContent = "remove from library";
  button.classList.add("remove-book");
  card.appendChild(button);
  return card;
}

// Hide and show the modal with display attribute
function showBookModal(event) {
  modal.style.display = "flex";
  event.preventDefault();
}

function hideBookModal(event) {
  modal.style.display = "none";
  event.preventDefault();
}

function addBook(event) {
  const book = new Book(
    form.name.value,
    form.author.value,
    form.pages.value,
    form.read.value
  );
  myLibrary.push(book);
  removeCards();
  displayCards();
  form.reset();
  modal.style.display = "none";
  event.preventDefault();
}

//displayCards();
// Add a way to display the cards

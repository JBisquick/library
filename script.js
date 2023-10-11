const myLibrary = [];

function Book(name) {
  this.name = name;
}

function addBookToLibrary(book) {
  myLibrary.push(book.name);
}
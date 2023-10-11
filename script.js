const libraryContainer = document.querySelector('.library-container');

const myLibrary = [];

function Book(name) {
  this.name = name;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function showBookCards(library) {
  for (const book of library) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    libraryContainer.appendChild(bookCard);
    const bookTitle = document.createElement('div');
    bookCard.appendChild(bookTitle);
    bookTitle.textContent = book.name;
  }
}

showBookCards(myLibrary);
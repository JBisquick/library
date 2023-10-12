const libraryContainer = document.querySelector('.library-container');
const formButton = document.querySelector('#pop-button')
const popupForm = document.querySelector('.popup-form')

const myLibrary = [];

formButton.addEventListener('click',  function () {
  popupForm.classList.add("show");
});

window.addEventListener("click", function (event) {
  if (event.target == popupForm) {
    popupForm.classList.remove("show");
  }
});

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
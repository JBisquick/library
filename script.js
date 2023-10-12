const libraryContainer = document.querySelector('.library-container');
const formButton = document.querySelector('#pop-button');
const popupForm = document.querySelector('.popup-form');
const bookForm = document.querySelector('#book-form');

const myLibrary = [];

bookForm.addEventListener('submit', function (e) {
  createBookCard(e);
});

formButton.addEventListener('click',  function () {
  popupForm.classList.add('show');
});

window.addEventListener('click', function (event) {
  if (event.target == popupForm) {
    popupForm.classList.remove('show');
  }
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement('div');
    bookCard.appendChild(bookAuthor);
    bookAuthor.textContent = book.author;
    const bookPages = document.createElement('div');
    bookCard.appendChild(bookPages);
    bookPages.textContent = book.pages;
  }
}

function createBookCard(event) {
  event.preventDefault();
  popupForm.classList.remove('show')

  let title = document.getElementById('title').value;
  let author =  document.getElementById('author').value;
  let pages =  document.getElementById('pages').value;
  let read = document.getElementById('read').value;

  const newBook = new Book(title, author, pages, read); 
  addBookToLibrary(newBook);
  showBookCards(myLibrary);
}
const libraryContainer = document.querySelector('.library-container');
const formButton = document.querySelector('#pop-button');
const popupForm = document.querySelector('.popup-form');
const bookForm = document.querySelector('#book-form');

const myLibrary = [];

bookForm.addEventListener('submit', function (e) {
  addBook(e);
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

function addBookCards() {
  const allCards = document.querySelectorAll('.book-card');
  for (const card of allCards) {
    card.remove();
  }

  let i = 0;
  for (const book of myLibrary) {
    createBookCard(book, i);
    i += 1;
  }

  let allRemoves = document.querySelectorAll('.delete');
  for (const remove of allRemoves) {
    remove.addEventListener('click', function(e) {
      index = e.target.getAttribute('data-index');
      deleteBook(index);
    });
  }
}

function createBookCard(book, index) {
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

  const deleteButton = document.createElement('button');
  bookCard.appendChild(deleteButton);
  deleteButton.classList.add('delete');
  deleteButton.textContent = 'Remove';

  bookCard.dataset.index = index;
  deleteButton.dataset.index = index;
}

function addBook(event) {
  event.preventDefault();
  popupForm.classList.remove('show');

  let title = document.getElementById('title').value;
  let author =  document.getElementById('author').value;
  let pages =  document.getElementById('pages').value;
  let read = document.getElementById('read').value;

  const newBook = new Book(title, author, pages, read); 
  addBookToLibrary(newBook);
  addBookCards();
}

function deleteBook(index) {
  bookDOM = document.querySelector(`[data-index="${index}"]`);
  bookDOM.remove();

  myLibrary.splice(index, 1);
  addBookCards();
}
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
  this.changeReadStatus = function() {
    if (this.read === 'Not Read') {
      this.read = 'Read'
    } else {
      this.read = 'Not Read'
    }
  }
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

  let deleteButtons = document.querySelectorAll('.delete');
  for (const button of deleteButtons) {
    button.addEventListener('click', function(e) {
      index = e.target.getAttribute('data-index');
      deleteBook(index);
    });
  }

  let readButtons = document.querySelectorAll('.read');
  for (const button of readButtons) {
    button.addEventListener('click', function(e) {
      index = e.target.getAttribute('data-index');
      bookObject = myLibrary[index];
      bookObject.changeReadStatus();
      changeReadButton(bookObject, e.target);
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
  bookAuthor.textContent = `By: ${book.author}`;

  const bookPages = document.createElement('div');
  bookCard.appendChild(bookPages);
  bookPages.textContent = `Pages: ${book.pages}`;

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('div-button');
  bookCard.appendChild(buttonDiv);
  const readButton = document.createElement('button');
  buttonDiv.appendChild(readButton);
  readButton.classList.add('read');
  changeReadButton(book, readButton);
  const deleteButton = document.createElement('button');
  buttonDiv.appendChild(deleteButton);
  deleteButton.classList.add('delete');
  deleteButton.textContent = 'Remove';

  bookCard.dataset.index = index;
  deleteButton.dataset.index = index;
  readButton.dataset.index = index;
}

function addBook(event) {
  event.preventDefault();
  popupForm.classList.remove('show');

  const title = document.getElementById('title').value;
  const author =  document.getElementById('author').value;
  const pages =  document.getElementById('pages').value;
  const ifRead = document.getElementById('read');
  if (ifRead.checked === true) {
    read = 'Read';
  } else {
    read =  'Not Read';
  }

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

function changeReadButton(book, button) {
  button.textContent = book.read;
  if (book.read === 'Read') {
    button.style.backgroundColor = '#a3e635';
  } else {
    button.style.backgroundColor = '#ef4444';
  }
}
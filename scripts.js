function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let myLibrary = [new Book("Demons", "Dostoevsky", 400, true)];
addBookToLibrary(new Book("Alice in Wonderland", "Lewis Carroll", 200, false));

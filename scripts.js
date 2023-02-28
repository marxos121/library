function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  let newBook = document.createElement("div");
  let newBookTitle = document.createElement("p");
  newBookTitle.textContent = book.title;
  let newBookAuthor = document.createElement("p");
  newBookAuthor.textContent = book.author;
  let newBookPages = document.createElement("p");
  newBookPages.textContent = book.pages;
  let newBookRead = document.createElement("p");
  newBookRead.textContent = book.haveRead ? "Read" : "Haven't read";

  newBook.appendChild(newBookTitle);
  newBook.appendChild(newBookAuthor);
  newBook.appendChild(newBookPages);
  newBook.appendChild(newBookRead);

  libraryDisplay.appendChild(newBook);
}

document
  .querySelector("form")
  .addEventListener("submit", (event) => event.preventDefault());

const libraryDisplay = document.querySelector(".library");

let myLibrary = [];
addBookToLibrary(new Book("Demons", "Dostoevsky", 400, true));
addBookToLibrary(new Book("Alice in Wonderland", "Lewis Carroll", 200, false));

const submitButton = document.querySelector("form > button");
submitButton.addEventListener("click", () => {
  const inputs = document.querySelectorAll("form > input");
  for (el of inputs) {
    if (!el && el.type != "checkbox") {
      return;
    }
  }

  addBookToLibrary(
    new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value)
  );
});

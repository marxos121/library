function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.id = counter++;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  let newBook = document.createElement("div");
  newBook.classList.add("book-card", "brown-border");
  let newBookTopDiv = document.createElement("div");
  let newBookTitle = document.createElement("p");
  newBookTitle.textContent = book.title;
  newBookTitle.classList.add("book-title");
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", () => {
    let id = newBook.getAttribute("data-id");
    libraryDisplay.removeChild(newBook);
    let index = myLibrary.indexOf(id);
    myLibrary.splice(index, 1);
  });
  let newBookBotDiv = document.createElement("div");
  let newBookAuthor = document.createElement("p");
  newBookAuthor.textContent = "Author: " + book.author;
  let newBookPages = document.createElement("p");
  newBookPages.textContent = "Pages: " + book.pages;
  let newBookReadLabel = document.createElement("label");
  newBookReadLabel.textContent = "Read: ";
  let newBookRead = document.createElement("input");
  newBookRead.setAttribute("type", "checkbox");
  newBookRead.checked = book.haveRead;

  newBook.setAttribute("data-id", book.id);

  newBookTopDiv.appendChild(newBookTitle);
  newBookTopDiv.appendChild(deleteButton);
  newBook.appendChild(newBookTopDiv);
  newBookBotDiv.appendChild(newBookAuthor);
  newBookBotDiv.appendChild(newBookPages);
  newBookBotDiv.appendChild(newBookReadLabel);
  newBookBotDiv.appendChild(newBookRead);
  newBook.append(newBookBotDiv);

  libraryDisplay.appendChild(newBook);
}

function hideForm() {
  toggleFormButton.textContent = "+";
  overlay.style.setProperty("display", "none");
}

function toggleFormVisibility() {
  const displayStyle = window
    .getComputedStyle(overlay)
    .getPropertyValue("display");
  if (displayStyle === "none") {
    toggleFormButton.textContent = "-";
    overlay.style.setProperty("display", "block");
  } else {
    toggleFormButton.textContent = "+";
    overlay.style.setProperty("display", "none");
  }
}

let counter = 0;

const overlay = document.querySelector(".form-background");
overlay.addEventListener("click", hideForm);

const form = document.querySelector("form");
form.addEventListener("submit", (event) => event.preventDefault());
form.addEventListener("click", (event) => event.stopPropagation());

const toggleFormButton = document.querySelector(".control-form");
toggleFormButton.addEventListener("click", toggleFormVisibility);

const libraryDisplay = document.querySelector(".library");

let myLibrary = [];
addBookToLibrary(new Book("Demons", "Dostoevsky", 400, true));
addBookToLibrary(new Book("Alice in Wonderland", "Lewis Carroll", 200, false));

form.addEventListener("submit", () => {
  const inputs = document.querySelectorAll("form > input");

  addBookToLibrary(
    new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value)
  );
});

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
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

const submitButton = document.querySelector("form > button");
submitButton.addEventListener("click", () => {
  const inputs = document.querySelectorAll("form > input");
  for (el of inputs) {
    if (!el.value && el.type != "checkbox") {
      return;
    }
  }

  addBookToLibrary(
    new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value)
  );
});

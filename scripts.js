function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  let newBook = document.createElement("div");
  newBook.classList.add("book-card");
  let newBookTitle = document.createElement("p");
  newBookTitle.textContent = "Title: " + book.title;
  let newBookAuthor = document.createElement("p");
  newBookAuthor.textContent = "Author: " + book.author;
  let newBookPages = document.createElement("p");
  newBookPages.textContent = "Pages: " + book.pages;
  let newBookRead = document.createElement("p");
  newBookRead.textContent = book.haveRead ? "Read" : "Haven't read";

  newBook.appendChild(newBookTitle);
  newBook.appendChild(newBookAuthor);
  newBook.appendChild(newBookPages);
  newBook.appendChild(newBookRead);

  libraryDisplay.appendChild(newBook);
}

function toggleFormVisibility() {
  const style = window.getComputedStyle(form).getPropertyValue("display");
  if (style === "none") {
    toggleFormButton.textContent = "-";
    form.style.setProperty("display", "flex");
  } else {
    toggleFormButton.textContent = "+";
    form.style.setProperty("display", "none");
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => event.preventDefault());

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

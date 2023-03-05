class Book {
  constructor(title, author, pages, haveRead, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.id = id;
  }
}

class Library {
  #library = [];
  #display = document.querySelector(".library");
  constructor() {
    this.counter = 0;
  }

  #getIndex(book) {
    let id = book.getAttribute("data-id");
    return this.#library.findIndex((element) => element.id == id);
  }

  remove(book) {
    let index = this.#getIndex(book);
    this.#display.removeChild(book);
    this.#library.splice(index, 1);
  }

  add(title, author, pages, read) {
    this.#library.push(new Book(title, author, pages, read, this.counter));

    let newBook = document.createElement("div");
    newBook.classList.add("book-card", "brown-border");
    let newBookTopDiv = document.createElement("div");
    let newBookTitle = document.createElement("p");
    newBookTitle.textContent = title;
    newBookTitle.classList.add("book-title");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      this.remove(newBook);
    });
    let newBookBotDiv = document.createElement("div");
    let newBookAuthor = document.createElement("p");
    newBookAuthor.textContent = "Author: " + author;
    let newBookPages = document.createElement("p");
    newBookPages.textContent = "Pages: " + pages;
    let newBookReadLabel = document.createElement("label");
    newBookReadLabel.textContent = "Read: ";
    let newBookRead = document.createElement("input");
    newBookRead.setAttribute("type", "checkbox");
    newBookRead.checked = read;
    newBookRead.addEventListener("click", () => {
      let index = this.#getIndex(newBook);
      this.#library[index].haveRead = newBookRead.checked;
    });

    newBookTopDiv.appendChild(newBookTitle);
    newBookTopDiv.appendChild(deleteButton);
    newBookBotDiv.appendChild(newBookAuthor);
    newBookBotDiv.appendChild(newBookPages);
    newBookBotDiv.appendChild(newBookReadLabel);
    newBookBotDiv.appendChild(newBookRead);

    newBook.appendChild(newBookTopDiv);
    newBook.append(newBookBotDiv);
    this.#display.appendChild(newBook);
    newBook.setAttribute("data-id", this.counter++);
  }
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
    hideForm();
  }
}

const overlay = document.querySelector(".form-background");
overlay.addEventListener("click", hideForm);
const toggleFormButton = document.querySelector(".control-form");
toggleFormButton.addEventListener("click", toggleFormVisibility);

const form = document.querySelector("form");
form.addEventListener("submit", (event) => event.preventDefault());
form.addEventListener("click", (event) => event.stopPropagation());

form.addEventListener("submit", () => {
  const inputs = document.querySelectorAll("form > input");

  myLibrary.add(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    inputs[3].value
  );
});

const myLibrary = new Library();
myLibrary.add("Demons", "Dostoevsky", 400, true);
myLibrary.add("Alice in Wonderland", "Lewis Carroll", 200, false);

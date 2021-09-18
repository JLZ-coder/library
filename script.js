let myLibrary = [];

function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.info = function() {
    let readString = "Not read yet";
    if (read)
        readString = "Read";

    return `${title} by ${author}, ${pages} pages, ${readString}`;
}

function addBookToLibrary() {
    const newBook = new Book("afr", "me", "1");
    myLibrary.push(newBook);
}

const bookDisplay = document.querySelector("#bookDisplay");

function displayAllBooks() {
    myLibrary.forEach(book => {
        bookDisplay.append(makeBookCard(book));
    });
}

function makeBookCard(book) {
    let bookCase = null, 
        title = null,
        author = null;

    bookCase = document.createElement("div");
    bookCase.classList.add("bookCase");
    title = document.createElement("span");
    title.classList.add("title");
    author = document.createElement("span");
    author.classList.add("author");

    title.textContent = book.title;
    author.textContent = book.author;

    bookCase.append(title);
    bookCase.append(author);

    return bookCase;
}

addBookToLibrary();
addBookToLibrary();

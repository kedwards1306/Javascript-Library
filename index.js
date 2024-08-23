const myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    // Make sure the values are correctly retrieved
    console.log(title, author, pages, read);

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

document.querySelector("#NewBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
});

function render() {
    let libraryBook = document.querySelector("#library");
    libraryBook.innerHTML = ""; // Clear the div before adding new books

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];

        let bookEL = document.createElement("div"); // Create the div for each book
        bookEL.innerHTML = `
            <p>Title: ${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? "Yes" : "No"}</p>
            <button class="toggle-read">${book.read ? "Unread" : "Read"}</button>
            <button class="remove-book">Remove</button>
        `;

        // Add event listeners for the buttons
        bookEL.querySelector(".toggle-read").addEventListener("click", function () {
            book.read = !book.read;
            render(); // Re-render the library to update the read status
        });

        bookEL.querySelector(".remove-book").addEventListener("click", function () {
            myLibrary.splice(i, 1);
            render(); // Re-render the library to remove the book
        });

        libraryBook.appendChild(bookEL);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    render();
}

document.querySelector("#new-button").addEventListener("click", function() {
    let newBookForm = document.querySelector("#NewBookForm");
    newBookForm.style.display = "block";
});

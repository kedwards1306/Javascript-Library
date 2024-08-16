const myLibrary =["Noah Ark", "Kyle Brach", 18 ];

function Book() {
    //the constructor
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
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}
function render() {
 let libraryBook = document.querySelector("#library");
 libraryBook.innerHTML = "";//clear the div before adding new books
 for(i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEL = document.createElement("div");//this create the div
    bookEL.textContent = `<p>${book.title}</p>
    <p>${book.author}</p>
    <p>${book.pages}</p>
    <p>${book.read}</p>`;
    libraryBook.appendChild(bookEL);
}
}

let newBook = document.querySelector("#new-button");
newBook.addEventListener("click", function() {
    let newBookForm = document.querySelector("#NewBookForm");
    newBookForm.style.display = "block";
});
document.querySelector("#newBookForm").addEventListener("SubmitButton", function(event){
    event.preventDefault();
    addBookToLibrary();
console.log();
});
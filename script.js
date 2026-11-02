const addBookButton = document.querySelector("#book-btn");
addBookButton.addEventListener("click", () => {
    console.log("button works");
})
const myLibrary = [];

function Book(title, author, pages, read){
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    let readStatus = "not read yet"
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    if(this.read == true){
        readStatus = "has been read"
    }

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`
    };
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

/*
When the button is pressed, a form should be shown,(fields to be decided)
The books will be made with Javscript, research as you should
*/
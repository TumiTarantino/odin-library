const addBookButton = document.querySelector("#book-btn");

addBookButton.addEventListener("click", () => {
    console.log("button works");
})

const myLibrary = [];

const book = document.querySelector(".book");
const books = document.querySelector(".books");

function Book(title, author, pages, read){
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    let readStatus = "not read yet"
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    if(this.read == true){
        readStatus = "has been read";
    }

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`;
    };
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  
  //Should probably have some validation?


  let new_book = new Book(title, author, pages, read)

  myLibrary.push(new_book);
}
//TESTING STUFF
addBookToLibrary("Tales of Pablo", "Tarantino", 12, false);
addBookToLibrary("Greg's Ballad", "Lincoln", 99, true);
addBookToLibrary("Hello","Tyyler", 293, true);
addBookToLibrary("Tee","Zy", 178, false);

console.log("Books in the library: ");
console.log(myLibrary);

//need to take make the cards in html,append a book to books?
for(let i = 0; i < myLibrary.length; i++){
    let newer_book = document.createElement("div"); //Contains each book

    //Elements for 'newer_book'
    let title = document.createElement("h2"); 
    let author = document.createElement("h3");
    let pages = document.createElement("h3");
    let read = document.createElement("h3");

    title.textContent = `Title: ${myLibrary[i].title}`;
    author.textContent = `Author: ${myLibrary[i].author}`;
    pages.textContent = `Pages: ${myLibrary[i].pages}`;
    read.textContent = `Read: ${myLibrary[i].read}`;

    //Adds the 'book' class to each newer book
    newer_book.classList.add("book");

    //Adds all the elements to the newer book
    newer_book.append(title,author,pages,read);
    
    //Adds each newer book into the books container
    books.append(newer_book);
}
//END OF TESTING STUFF
/*
When the button is pressed, a form should be shown,(fields to be decided)
The books will be made with Javscript, research as you should

Future Me: I added html stuff for now, however, add these defaults via JS, then find a way to get user input
*/
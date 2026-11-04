const addBookButton = document.querySelector("#book-btn");
const nav = document.querySelector(".nav");
const form = document.querySelector("#theForm");
const open_btn = document.querySelector("[data-open-modal]");
const modal_form = document.querySelector("[data-modal]");

form.onsubmit = (e) => {
    e.preventDefault();

    // Pass the submitted form (event.target) to FormData
    const formData = new FormData(e.target);
  
    // Convert to a standard JavaScript object
    const data = Object.fromEntries(formData);
    console.log(data);

    //data.read === returns false if data.read is anything but "true"
    addBookToLibrary(data.title, data.author, Number(data.pages), data.read === "true"); 
    console.log(myLibrary);
    modal_form.close();
    form.reset();
    renderLibrary();
} 

open_btn.addEventListener("click", () => {
    modal_form.showModal();
})

const myLibrary = [];

const books = document.querySelector(".books");

function Book(title, author, pages, read){
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    // Inverts the boolean value of read value
    this.read = !this.read;
}

Book.prototype.info = function() {
        //Not really need here
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
    };

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

// So i think this append books function should be split into a renderbook function and maybe a another function that actually creates the cards
// its only called once soo there should be something there

function createBookCard(book){
        //Needs a book, where is book from?
        let newer_book = document.createElement("div"); //Contains a book

        //Elements for 'newer_book'
        let title = document.createElement("h2"); 
        let author = document.createElement("h3");
        let pages = document.createElement("h3");
        let read = document.createElement("h3");
        let delete_btn = document.createElement("button");
        let read_btn = document.createElement("button")

        newer_book.dataset.id = book.id; // gives each book as 'data-id' attribute equal to its actual id
        title.textContent = `Title: ${book.title}`;
        author.textContent = `Author: ${book.author}`;
        pages.textContent = `Pages: ${book.pages}`;
        read.textContent = `Read: ${book.read ? "Has been read" : "Not read"}`;
        delete_btn.textContent = "Delete book";
        read_btn.textContent = "Read book?";

        delete_btn.addEventListener("click", () => {
            //it should remove the card and then renderlibrary can update the page
            const index = myLibrary.findIndex(book => book.id === newer_book.dataset.id);
            if (index !== -1){
                myLibrary.splice(index,1);
            }
            renderLibrary();
        })

        read_btn.addEventListener("click", () => {
            book.toggleRead();
            renderLibrary();
        })

        //Adds the 'book' class to each newer book
        newer_book.classList.add("book");

        //Adds all the elements to the newer book
        newer_book.append(title,author,pages,read,read_btn,delete_btn);
        
        return newer_book;
}

function renderLibrary(){
    //this function should just update the dom in regards to the contents of myLibrary

    //Dom should be cleared before each iteration
    books.replaceChildren();
    for(let i = 0; i < myLibrary.length; i++){
        //Adds each newer book into the books container
        books.append(createBookCard(myLibrary[i]));
        
    }
}
renderLibrary();

//END OF TESTING STUFF
/*
When the button is pressed, a form should be shown,(fields to be decided)DONE
The books will be made with Javscript, research as you should DONE

Future Me: I added html stuff for now, however, add these defaults via JS, then find a way to get user inputDONE?
The form needs to be validated, kinda, the no returns truthy as string is not empty
*/
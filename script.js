const addBookButton = document.querySelector("#book-btn");
const nav = document.querySelector(".nav");
const form = document.querySelector("#theForm");

// Testting stuff 2

// How to get the book attributes?
form.onsubmit = (e) => {
    e.preventDefault();

    // 2. Pass the submitted form (event.target) to FormData
    const formData = new FormData(e.target);
  
    // 3. Convert to a standard JavaScript object
    const data = Object.fromEntries(formData);
    console.log(data);

    addBookToLibrary(data.title, data.author, data.pages, data.pages);
    console.log(myLibrary);

    //Okay now we need to update the visible library, using appendbooks does not work, as it re-adds all the whole library books

    //A bit ugly and should be better(since books are created in two places now), but hey, it works
    let newer_book = document.createElement("div"); //Contains each book

        //Elements for 'newer_book'
        let title = document.createElement("h2"); 
        let author = document.createElement("h3");
        let pages = document.createElement("h3");
        let read = document.createElement("h3");
        let delete_btn = document.createElement("button");

        delete_btn.addEventListener("click", () => {
            //Need to delete card
            newer_book.remove();
        })

        title.textContent = `Title: ${data.title}`;
        author.textContent = `Author: ${data.author}`;
        pages.textContent = `Pages: ${data.pages}`;
        read.textContent = `Read: ${data.read}`;
        delete_btn.textContent = "Delete book";

        //Adds the 'book' class to each newer book
        newer_book.classList.add("book");

        //Adds all the elements to the newer book
        newer_book.append(title,author,pages,read,delete_btn);
        
        //Adds each newer book into the books container
        books.append(newer_book);
} 
// End of Testing Stuff 2

addBookButton.addEventListener("click", () => {
    console.log("button works");
    // this button will probably just be a way to open the form, the actual submission will happen in the form.onsubmit
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

function appendBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        let newer_book = document.createElement("div"); //Contains each book

        //Elements for 'newer_book'
        let title = document.createElement("h2"); 
        let author = document.createElement("h3");
        let pages = document.createElement("h3");
        let read = document.createElement("h3");
        let delete_btn = document.createElement("button");

        title.textContent = `Title: ${myLibrary[i].title}`;
        author.textContent = `Author: ${myLibrary[i].author}`;
        pages.textContent = `Pages: ${myLibrary[i].pages}`;
        read.textContent = `Read: ${myLibrary[i].read}`;
        delete_btn.textContent = "Delete book";

        //Adds the 'book' class to each newer book
        newer_book.classList.add("book");

        //Adds all the elements to the newer book
        newer_book.append(title,author,pages,read,delete_btn);
        
        //Adds each newer book into the books container
        books.append(newer_book);
    }
}

function appendBook(){
        let newer_book = document.createElement("div"); //Contains each book

        //Elements for 'newer_book'
        let title = document.createElement("h2"); 
        let author = document.createElement("h3");
        let pages = document.createElement("h3");
        let read = document.createElement("h3");
        let delete_btn = document.createElement("button");

        title.textContent = `Title: ${myLibrary[i].title}`;
        author.textContent = `Author: ${myLibrary[i].author}`;
        pages.textContent = `Pages: ${myLibrary[i].pages}`;
        read.textContent = `Read: ${myLibrary[i].read}`;
        delete_btn.textContent = "Delete book";

        delete_btn.addEventListener("click", () => {
            //Need to delete card
            newer_book.remove();
        })

        //Adds the 'book' class to each newer book
        newer_book.classList.add("book");

        //Adds all the elements to the newer book
        newer_book.append(title,author,pages,read,delete_btn);
        
        //Adds each newer book into the books container
        books.append(newer_book);
}

appendBooks();
//END OF TESTING STUFF
/*
When the button is pressed, a form should be shown,(fields to be decided)
The books will be made with Javscript, research as you should DONE

Future Me: I added html stuff for now, however, add these defaults via JS, then find a way to get user input
*/
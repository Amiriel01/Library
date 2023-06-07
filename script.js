//Attach DOM objects. Link js to html//
//main page//
let addButton = document.querySelector("#add-button");
let table = document.querySelector(".table");
let tableBody = document.querySelector("tbody");
//hidden form//
let form = document.querySelector(".form");
let title = form.querySelector("#book-title");
let author = form.querySelector("#book-author");
let pages = form.querySelector("#book-pages");
let status = form.querySelector("#read-status");
let opinion = form.querySelector("#read-opinion");
let back = form.querySelector("#back");
let clear = form.querySelector("#clear");
let submit = form.querySelector("#submit");


//creates empty array for books to go in//
let myLibrary = [];

function Book(title, author, pages, status, opinion) {
    //constructor. all books will have this data on the form and table//
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.opinion = opinion;
}

//this will create books on the table from the form//
function addBook() {
    let title = title.value;
    let author = author.value;
    let pages = pages.value;
    let status = status.value;
    let opinion = opinion.value;
    //this creates a new Book using the this parameters and pushes it to the myLibrary array//
    let addNewBook = new Book(title, author, pages, status, opinion);
    myLibrary.push(addNewBook);
}

//this will toggle the form and table using the add book button//
//classList.toggle is one way to manipulate the read-only property that returns a live collection of the class attributes/elements//
//hidden-form is found in html and css(display:none)//
function toggleHidden() {
    form.classList.toggle("hidden");
    table.classList.toggle("hidden");
    addButton.classList.toggle("hidden");
}

//this will make the add book button work//
addButton.addEventListener("click", toggleHidden);

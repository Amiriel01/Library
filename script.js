//Attach DOM objects. Link js to html//
//main page//
let addButton=document.querySelector("add-button");
let table=document.querySelector(".table");
let tableBody=document.querySelector("tbody");
//hidden form//
let form=document.querySelector(".form");
let title=form.querySelector("#book-title");
let author=form.querySelector("#book-author");
let pages=form.querySelector("#book-pages");
let status=form.querySelector("#read-status");
let back=form.querySelector("#back");
let clear=form.querySelector("#clear");
let submit=form.querySelector("#submit");


//creates empty array for books to go in//
let myLibrary = [];

/*function Book() {
  // the constructor...
}*/

//this will create each book item in a div//
function createBookItem(book,index) {
    let bookItem=document.createElement("div")
}

//this will allow books to be added to the library//
//.map creates a new array populated with the results of calling a function on every element in the calling array//
function addBookToLibrary() {
  myLibrary.map(function (book, index) {
    createBookItem(book, index)
  })
}
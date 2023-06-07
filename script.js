//attaches js to books in html//
let books = document.querySelector(".books");

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
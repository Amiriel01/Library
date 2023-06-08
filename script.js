//Attach DOM objects. Link js to html//
//main page//
let addButton = document.querySelector(".add-button");
let table = document.querySelector(".table");
let tableBody = document.querySelector(".tbody");
//hidden form//
let form = document.querySelector(".form");
let title = form.querySelector("#book-title");
let author = form.querySelector("#book-author");
let pages = form.querySelector("#book-pages");
let readStatus = form.querySelector("#read-status");
let opinion = form.querySelector("#read-opinion");
let back = form.querySelector("#back");
let clear = form.querySelector("#clear");
let submit = form.querySelector("#submit");


//creates empty array for books to go in//
let myLibrary = [];

//object constructor. all books will have this data on the form and table//
function Book(title, author, pages, status, opinion) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.opinion = opinion;
}

//this will create books on the table from the form//
function addBook() {
    
    //this creates a new Book using the this parameters and pushes it to the myLibrary array//
    let addNewBook = new Book(title.value, author.value, pages.value, readStatus.value, opinion.value);
    myLibrary.push(addNewBook);
}

//creating an update table function that takes the content entered and returns it to the node using the textContent command//
function displayBooks() {
    //clears the table before each loop//
    tableBody.innerHTML='';
    myLibrary.forEach(book => {
        //adding rows to the table to hold info//
        let rows = document.createElement('tr');
        rows.classList.add("rows");
        tableBody.appendChild(rows);
        //loops function over every key (this. items) in myLibrary//
        for (let key in book) {
            //console.log for troubleshooting only//
            //curly braces solo displays the key term//
            //brackets around key will display the value of the key//
            console.log(`${key} : ${book[key]}`);
            //creates cells for new info to be put in//
            let cells=document.createElement('td');
            //textContent will display the data for the key and key value//
            cells.textContent=(`${book[key]}`);
            //attach new cells to new rows created//
            rows.appendChild(cells);
        }
        let editBook=document.createElement('td');
        let editButton=document.createElement('button');
        editButton.innerText="Edit";
        editButton.addEventListener("click", () => {
            edit(book);
        })
        editBook.appendChild(editButton);
        rows.appendChild(editBook);

        let deleteBook=document.createElement('td');
        let deleteButton=document.createElement('button');
        deleteButton.innerText="Delete";
        deleteBook.appendChild(deleteButton);
        rows.appendChild(deleteBook);
    })
}

//this will toggle the form and table using the add book button//
//classList.toggle is one way to manipulate the read-only property that returns a live collection of the class attributes/elements//
//.hidden is found in css(display:none) form, table, and button need class= (cannot mix id= and class=)//
function toggleHidden() {
    form.classList.toggle("hidden");
    addButton.classList.toggle("hidden");
    table.classList.toggle("hidden");
}

//this will make the add book button work//
addButton.addEventListener("click", toggleHidden);

//this will make the clear button clear the form//
function clearForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
}

clear.addEventListener("click", clearForm());

//this will make the back button clear the form and return user to the table view. This did not work.//
back.addEventListener("click", () => {
    clearForm();
    toggleHidden();
});


//the submit button will send the form info to the table, clear the form, and return user to the table view//
submit.addEventListener("click", () => {
    addBook();
    displayBooks();
    clearForm();
    toggleHidden();
});

function edit(bookToEdit) {
    console.log(bookToEdit);
    toggleHidden();
    title.value=bookToEdit.title;

    //splice the bookToEdit then reinsert it in submit//
    //get the index for bookToEdit to be able to splice//
}




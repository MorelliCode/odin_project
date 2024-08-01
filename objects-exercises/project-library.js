const libraryElement = document.querySelector(".library");
const addBookBtn = document.querySelector("#newBookBtn");
const dialog = document.querySelector("dialog");
const addFormBtn = document.querySelector(".form-add");
const cancelFormBtn = document.querySelector(".form-cancel");
const addBookForm = document.querySelector(".inclusion-form");

const myLibrary = [];

function Book(title, author, numberPages, isRead) {
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.isRead = isRead;
    this.toggleRead = function() { 
        this.isRead = !this.isRead; 
    };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

myLibrary.push(theHobbit);

renderPage();







function addBook() {
    let title = document.querySelector("#book-title").value;
    let author = document.querySelector("#book-author").value;
    let pages = document.querySelector("#book-pages").value;
    let read = document.querySelector("#book-read").value;

    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);

    renderPage();
}

function renderPage(){
    libraryElement.innerHTML = "";

    myLibrary.forEach(element => {
        //create and add classes to card: card and the unique id
        const card = document.createElement("div");
        card.classList.add("card");

        //create, add class, set content, append to card
        const cardTitle = document.createElement("div");
        cardTitle.classList.add("card-title")
        cardTitle.textContent = element.title;
        card.appendChild(cardTitle);

        const cardAuthor = document.createElement("div");
        cardAuthor.classList.add("card-author");
        cardAuthor.textContent = element.author;
        card.appendChild(cardAuthor);

        const cardPages = document.createElement("div");
        cardPages.classList.add("card-pages");
        cardPages.textContent = element.numberPages + " pages";
        card.appendChild(cardPages);

        const cardRead = document.createElement("div");
        cardRead.classList.add("card-read");
        if (element.isRead == true) {cardRead.textContent = "Read";}
        if (element.isRead == false) {cardRead.textContent = "Unread";}        
        card.appendChild(cardRead);
        
        const cardToggleBtn = document.createElement("button");
        cardToggleBtn.textContent = "Toggle read";
        cardToggleBtn.addEventListener("click", () => {
            element.toggleRead();
            renderPage();
        });
        card.appendChild(cardToggleBtn);
        
        const cardRemoveBtn = document.createElement("button");
        cardRemoveBtn.textContent = "Remove";
        cardRemoveBtn.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(element), 1);
            renderPage();
        })
        card.appendChild(cardRemoveBtn);
        
        libraryElement.appendChild(card);
    });

}

//"Add new book" button opens modal dialog
addBookBtn.addEventListener("click", () => {
    dialog.showModal();
})

//"Add" button on dialog adds book info to array, resets the form and closes the dialog
addFormBtn.addEventListener("click", () => {
    addBook();
    addBookForm.reset();
    dialog.close();
})

//"Cancel" button on dialog resets the form and closes the dialog
cancelFormBtn.addEventListener("click", () => {
    addBookForm.reset();
    dialog.close();
})
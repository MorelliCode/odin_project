const libraryElement = document.querySelector(".library");

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
        const card = document.createElement("div");
        const cardTitle = document.createElement("div");
        const cardAuthor = document.createElement("div");
        const cardPages = document.createElement("div");
        const cardRead = document.createElement("div");
        const cardToggleBtn = document.createElement("button");
        const cardRemoveBtn = document.createElement("button");

        card.classList.add("card")
        cardTitle.classList.add("card-title")
        cardAuthor.classList.add("card-author")
        cardPages.classList.add("card-pages")
        cardRead.classList.add("card-read");

        cardTitle.textContent = element.title;
        cardAuthor.textContent = element.author;
        cardPages.textContent = element.numberPages;
        
        if (element.isRead == true) {
            cardRead.textContent = "Read";
        }
        if (element.isRead == false) {
            cardRead.textContent = "Unread";
        }

        cardToggleBtn.textContent = "Toggle read";

        cardToggleBtn.addEventListener("click", () => {
            element.toggleRead();
            renderPage();
        });

        cardRemoveBtn.textContent = "Remove";

        cardRemoveBtn.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(element, 1));
            renderPage();
        })

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardRead);
        card.appendChild(cardToggleBtn);
        card.appendChild(cardRemoveBtn);
        libraryElement.appendChild(card);
        
    });

}
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










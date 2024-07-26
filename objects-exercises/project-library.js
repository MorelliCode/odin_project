const myLibrary = [];

function Book(title, author, numberPages, isRead) {
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.isRead = isRead;
    this.info = function() { 
        return(this.title+" by "+this.author+", "+this.numberPages+" pages, "+this.isRead+".") 
    };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

myLibrary.push(theHobbit);










"use strict";
const allBooks = document.querySelectorAll('.book-list');
const form = document.querySelector('.book');
class Book {
    constructor(titre, auteur, annee) {
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
    }
    addBookTolist(book) {
        const bookList = document.querySelector('.book-list');
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${book.titre}</td>
            <td>${book.auteur}</td>
            <td>${book.annee}</td>
            <td><td><button class="delete">X</button></td>
        `;
        bookList.appendChild(tr);
    }
}
class Iterface {
    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titre = document.querySelector('#title');
    const auteur = document.querySelector('#auteur');
    const annee = document.querySelector('#annee');
    let titleVal = titre.value;
    let authorVal = auteur.value;
    let yearVal = parseInt(annee.value);
    const book = new Book(titleVal, authorVal, yearVal);
    book.addBookTolist(book);
});
allBooks.forEach(book => {
    book.addEventListener('click', (e) => {
        const target = e.target;
        const iterface = new Iterface();
        iterface.deleteBook(target);
    });
});

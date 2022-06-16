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
            td><td><button class="delete">X</button></td>
        `;
        bookList.appendChild(tr);
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titre = document.querySelector('#title');
    const auteur = document.querySelector('#auteur');
    const annee = document.querySelector('#annee');
    let titleVal = titre.nodeValue;
    let authorVal = auteur.nodeValue;
    let yearVal = parseInt(annee.nodeValue);
    const book = new Book(titleVal, authorVal, yearVal);
    book.addBookTolist(book);
});

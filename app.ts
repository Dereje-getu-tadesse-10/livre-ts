const allBooks = document.querySelectorAll('.book-list') as NodeListOf<HTMLTableElement>;
const form = document.querySelector('.book') as HTMLFormElement;

class Book {
    constructor( public titre: string, public auteur: string, public annee: number){
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
    }

    addBookTolist(book : Book){
        const bookList = document.querySelector('.book-list') as HTMLTableElement;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${book.titre}</td>
            <td>${book.auteur}</td>
            <td>${book.annee}</td>
            td><td><button class="delete">X</button></td>
        `;
    }

}
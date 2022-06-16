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
        const tr = document.createElement('tr') as HTMLTableRowElement;
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
    const titre = (document.querySelector('#title') as HTMLInputElement);
    const auteur = (document.querySelector('#auteur') as HTMLInputElement);
    const annee = (document.querySelector('#annee') as HTMLInputElement);

    let titleVal: string = titre.nodeValue!;
    let authorVal: string = auteur.nodeValue!;
    let yearVal: number = parseInt(annee.nodeValue!);

    const book = new Book(titleVal, authorVal, yearVal);
    
    book.addBookTolist(book);   
});
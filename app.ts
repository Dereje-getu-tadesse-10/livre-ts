const allBooks = document.querySelectorAll('.book-list') as NodeListOf<HTMLElement>;
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
            <td><td><button class="delete">X</button></td>
        `;

        bookList.appendChild(tr);
    }

    clearForm(){
        form.reset();
    }

    showAlert(message: string, className: string){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container') as HTMLElement;
        container.insertBefore(div, form);
        setTimeout(() => {
            document.querySelector('.alert')!.remove();
        }
        , 3000);
    } 

}


class Iterface {
    deleteBook(target : HTMLElement){
       if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titre = (document.querySelector('#title') as HTMLInputElement);
    const auteur = (document.querySelector('#auteur') as HTMLInputElement);
    const annee = (document.querySelector('#annee') as HTMLInputElement);

    let titleVal: string = titre.value;
    let authorVal: string = auteur.value;
    let yearVal: number = parseInt(annee.value);

    const book = new Book(titleVal, authorVal, yearVal);


    if(titleVal === '' || authorVal === '' || yearVal === 0){
        book.showAlert('Les champs !!!!', 'error');
    } else {
        book.addBookTolist(book);
        book.clearForm();
        book.showAlert('Le livre a été ajouté', 'success');
    }

});

allBooks.forEach(book => {
    book.addEventListener('click', (e: Event,) => {
        const target = e.target as HTMLElement;
        const iterface = new Iterface();
        iterface.deleteBook(target);
    })
});
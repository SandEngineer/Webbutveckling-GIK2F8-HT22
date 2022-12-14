/* Listinnehåll */
const bookList = [
    {
        id:1,
        author: 'Charles Dickens',
        title: 'Oliver Twist'
    },
    {
        id:2,
        author: 'William Shakespear',
        title: 'Hamlet'
    },
    {
        id:3,
        author: 'Douglas Adams',
        title: 'Hitchhikers Guide to the Galaxy'
    }
];

/* Hämta sökfältstermer */
const searchField = document.getElementById('searchField');

searchField.addEventListener("keyup", handleKeyPress);

/* Ta emot/läsa av inputvärde i fältet
Skicka värdet till searchBooks
searchBooks returnerar filtrerad lista
Listan skickas till renderBookList */
function handleKeyPress(e) {
    searchBooks(e.target.value);
}

/* Loopar igenom bookList
Ta aktuellt element för varje varv och jämför
Om termen finns, lägg till i ny lista (filteredList)
Returnerar filteredList eller anropar renderBookList */
function searchBooks(searchTerm) {
    const filteredList = [];

    for (let i = 0; i < bookList.length; i++) {
        const title = bookList[i].title.toLowerCase();
        const author = bookList[i].author.toLowerCase();

        if ((title.indexOf(searchTerm.toLowerCase()) >= 0) || (author.indexOf(searchTerm.toLowerCase()) >= 0)) {
            filteredList.push(bookList[i]);
        }
    }

    renderBookList(filteredList);
}

/* Element i html-listan visas/döljs beroende på innehåll */
function renderBookList(bookList) {

    BookList(bookList);

    const existingElement = document.querySelector('.book-list');
    const root = document.getElementById('root');
    
    if (existingElement) {
        root.removeChild(existingElement);
    }

    if (bookList.length > 0) { 
        root.insertAdjacentHTML('beforeend', BookList(bookList))
    }

}
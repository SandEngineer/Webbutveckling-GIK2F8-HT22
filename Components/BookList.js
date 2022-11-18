
const BookList = (bookList) => {

    let html = `<ul class="book-list rounded-md border-2 border-slate-400 bg-white w-full max-auto">`;
    for (let i = 0; i < bookList.length; i++) {
        html += BookListItem(bookList[i]);
    }
    html += `</ul>`;

    return html;
}
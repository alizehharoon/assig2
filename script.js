function addBook() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;

    var bookList = document.querySelector('.book-list');
    var newBookRow = document.createElement('div');
    newBookRow.classList.add('book-row');
    newBookRow.innerHTML = '<div>' + title + ' by ' + author + '</div>' +
                           '<button class="remove-button" onclick="removeBook(this)">Remove</button>';

    bookList.appendChild(newBookRow);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
}

function removeBook(button) {
    button.parentNode.remove();
}
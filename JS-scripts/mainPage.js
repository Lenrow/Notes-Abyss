let NoteBooks;

window.onload = function () {
  checkForNoteBooks();
};

function checkForNoteBooks() {
  if (NoteBooks === undefined) {
    const params = Object.fromEntries(
      new URLSearchParams(window.location.search).entries()
    );
    NoteBooks = params;
    NoteBooks.notebook = [{ nameNoteBook: params.notebook, notes: {} }];
  }
}

const NoteBooks = JSON.stringify(params);

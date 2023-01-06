let NoteBooks;
let currentNoteBook = 0;
let numberExistingNotes;
const allWrappers = document.getElementsByClassName("section");
const mainNoteWrapper = document.getElementById("mainNoteWrapper");

document.getElementById("textSubmitButton").addEventListener("click", addToJS);

window.onload = function () {
  checkForNoteBooks();
  numberExistingNotes = JSON.parse(sessionStorage.getItem("Notes")).length;
  sessionStorage.setItem("numberExistingNotes", numberExistingNotes);
};

function checkForNoteBooks() {
  if (NoteBooks === undefined) {
    const params = Object.fromEntries(
      new URLSearchParams(window.location.search).entries()
    );
    NoteBooks = params;
    NoteBooks.notebook = [{ nameNoteBook: params.notebook, notes: [] }];
  }
  saveNoteBooksToSession();
  readNotesFromStorage();
}

for (const changeButtons of document.getElementsByClassName("changeButton")) {
  changeButtons.addEventListener("click", function () {
    document.querySelector(".section").classList.toggle("active");
    document.getElementById("textEditor").classList.toggle("active");
  });
}

function switchAndEdit() {
  document.getElementById("newNoteTitle").value = this.children[0].textContent;
  document.getElementById("noteText").value = this.children[1].textContent;
  mainNoteWrapper.classList.toggle("active");
  document.getElementById("textEditor").classList.toggle("active");
}

function addToJS() {
  const tempNote = {
    title: document.getElementById("newNoteTitle").value,
    content: document.getElementById("noteText").value,
  };
  if (tempNote.title) {
    NoteBooks.notebook[NoteBooks.notebook.length - 1].notes.push({
      title: tempNote.title,
      content: tempNote.content,
    });
    switchToNotePage();
    saveNoteBooksToSession();
    readNotesFromStorage();
  } else {
    document.querySelector(".hiddenElements").classList.toggle("active");
  }
}

function switchToNotePage() {
  for (const wrapper of allWrappers) {
    if (wrapper.classList.contains("active")) {
      wrapper.classList.toggle("active");
    }
  }
}

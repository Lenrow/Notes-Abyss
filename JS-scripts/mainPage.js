let NoteBooks;
let Notes;
let currentNoteBook = 0;
let numberExistingNotes;
const allWrappers = document.getElementsByClassName("section");
const mainNoteWrapper = document.getElementById("mainNoteWrapper");
let isBeingEdited = false;
let IDEditee;
document
  .getElementById("textSubmitButton")
  .addEventListener("click", checkIfEdit);

function getNoteBox() {
  return NoteBooks;
}

function setNoteBooks(_tempNoteBooks) {
  NoteBooks = _tempNoteBooks;
}

function refreshNotesVar() {
  Notes = NoteBooks.notebooks[currentNoteBook].notes;
}

function refreshNotePage() {
  deleteElementsOnSite();
  refreshNotesVar();
  Notes.forEach((singleNote) => {
    createNote(singleNote);
  });
}

function increaseOrResetNumberNotes(bool) {
  if (bool) {
    numberExistingNotes++;
  } else {
    numberExistingNotes = 0;
  }
}

function getNumberExistingNotes() {
  return numberExistingNotes;
}

function checkForNoteBooks() {
  if (NoteBooks === undefined) {
    const params = Object.fromEntries(
      new URLSearchParams(window.location.search).entries()
    );
    NoteBooks = params;
    NoteBooks.notebooks = [{ nameNoteBook: params.notebook, notes: [] }];
  }
  refreshNotesVar();
  refreshNotePage();
}

for (const changeButtons of document.getElementsByClassName("changeButton")) {
  changeButtons.addEventListener("click", function () {
    document.querySelector(".section").classList.toggle("active");
    document.getElementById("textEditor").classList.toggle("active");
    resetEditStatus();
  });
}

function switchAndEdit() {
  IDEditee = Number(this.id);
  document.getElementById("newNoteTitle").value = Notes[IDEditee - 1].title;
  document.getElementById("noteText").value = Notes[IDEditee - 1].content;
  mainNoteWrapper.classList.toggle("active");
  document.getElementById("textEditor").classList.toggle("active");
  isBeingEdited = true;
}

function resetEditStatus() {
  isBeingEdited = false;
  IDEditee = -1;
}

function checkIfEdit() {
  if (isBeingEdited) {
    editNote();
  } else {
    addToJS();
  }
}

function editNote() {
  const _tempNote = {
    title: document.getElementById("newNoteTitle").value,
    content: document.getElementById("noteText").value,
  };
  if (_tempNote.title) {
    NoteBooks.notebooks[currentNoteBook].notes[IDEditee - 1] = {
      title: _tempNote.title,
      content: _tempNote.content,
    };
    switchToNotePage();
    refreshNotesVar();
    refreshNotePage();
    resetEditStatus();
  } else {
    document.querySelector(".hiddenElements").classList.toggle("active");
  }
}

function addToJS() {
  const _tempNote = {
    title: document.getElementById("newNoteTitle").value,
    content: document.getElementById("noteText").value,
  };
  if (_tempNote.title) {
    NoteBooks.notebooks[currentNoteBook].notes.push({
      title: _tempNote.title,
      content: _tempNote.content,
    });
    switchToNotePage();
    refreshNotesVar();
    refreshNotePage();
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

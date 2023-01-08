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

function getNumberExistingNotes() {
  return numberExistingNotes;
}

function setNoteBooks(_tempNoteBooks) {
  NoteBooks = _tempNoteBooks;
}

/* Refresh Notes Variable */
function refreshNotesVar() {
  Notes = NoteBooks.notebooks[currentNoteBook].notes;
}

/* delete all Note HTML Elements and create all existing News new */
function refreshNotePage() {
  deleteElementsOnSite();
  refreshNotesVar();
  Notes.forEach((singleNote) => {
    createNote(singleNote);
  });
}

/* increase by one or reset numberExistingNotes variable */
function increaseOrResetNumberNotes(bool) {
  if (bool) {
    numberExistingNotes++;
  } else {
    numberExistingNotes = 0;
  }
}

/* Add function to switch to or away from the Editor */
for (const changeButtons of document.getElementsByClassName("changeButton")) {
  changeButtons.addEventListener("click", function () {
    document.querySelector(".section").classList.toggle("active");
    document.getElementById("textEditor").classList.toggle("active");
    resetEditStatus();
    addRemoveDeleteButton(false);
  });
}

/* function that is added onto buttons */
function switchAndEdit() {
  IDEditee = Number(this.id);
  document.getElementById("newNoteTitle").value = Notes[IDEditee - 1].title;
  document.getElementById("noteText").value = Notes[IDEditee - 1].content;
  mainNoteWrapper.classList.toggle("active");
  document.getElementById("textEditor").classList.toggle("active");
  isBeingEdited = true;
  addRemoveDeleteButton(true);
}

function resetEditStatus() {
  isBeingEdited = false;
  IDEditee = -1;
}

/* function for the save note button to check whether it is a new Note or an edit */
function checkIfEdit() {
  if (isBeingEdited) {
    editNote();
  } else {
    addToJS();
  }
}

/* function that overrides existing Note and refreshes afterwards */
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
    updateNotePageAndVars();
  } else {
    document.querySelector(".hiddenElements").classList.toggle("active");
  }
}

/* function that adds new Note to the NoteBooks variable and refreshes afterwards */
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
    updateNotePageAndVars();
  } else {
    document.querySelector(".hiddenElements").classList.toggle("active");
  }
}

/* function that deletes the Note that is edited right now */
function deleteNote() {
  NoteBooks.notebooks[currentNoteBook].notes.splice(IDEditee - 1, 1);
  updateNotePageAndVars();
}

/* function that switches back to the Note wrapper */
function switchToNotePage() {
  for (const wrapper of allWrappers) {
    if (wrapper.classList.contains("active")) {
      wrapper.classList.toggle("active");
    }
  }
}

function updateNotePageAndVars() {
  refreshNotesVar();
  refreshNotePage();
  switchToNotePage();
  resetEditStatus();
  addRemoveDeleteButton(false);
}

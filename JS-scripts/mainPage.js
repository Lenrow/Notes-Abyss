let NoteBooks;
document.getElementById("textSubmitButton").addEventListener("click", addToJS);

window.onload = function () {
  checkForNoteBooks();
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
}

for (const changeButtons of document.getElementsByClassName("changeButton")) {
  changeButtons.addEventListener("click", function switchEditor() {
    document.querySelector(".section").classList.toggle("active");
    document.getElementById("textEditor").classList.toggle("active");
  });
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

function saveNoteBooksToSession() {
  sessionStorage.setItem("NoteBooks", JSON.stringify(NoteBooks));
  sessionStorage.setItem(
    "Notes",
    JSON.stringify(NoteBooks.notebook[currentNoteBook].notes)
  );
}

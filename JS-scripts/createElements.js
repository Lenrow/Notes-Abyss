const noteBox = document.getElementById("notesBox");
let numberNotePreviewChars = 150;

function readNotesFromStorage() {
  const NotesTemp = JSON.parse(sessionStorage.getItem("Notes"));
  NotesTemp.forEach((singleNote) => {
    createNote(singleNote);
  });
}

function createNote(note) {
  const shortenedTitle = note.content.substring(0, numberNotePreviewChars);
  sessionStorage.setItem(
    "numberExistingNotes",
    sessionStorage.getItem("numberExistingNotes") + 1
  );
  const uniqueID = note.title + sessionStorage.getItem("numberExistingNotes");
  let button = document.createElement("button");
  button.classList.add("changeButton");
  button.classList.add("notes");
  button.setAttribute("id", uniqueID);
  noteBox.appendChild(button);
  const customNote = `
        <h4 class="noteTitle">${note.title}</h4>
        <div class="notePreview"> ${shortenedTitle} </div>
    `;
  button.insertAdjacentHTML("afterbegin", customNote);
  document.getElementById(uniqueID).addEventListener("click", switchAndEdit);
}
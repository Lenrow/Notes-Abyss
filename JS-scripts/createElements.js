const noteBox = document.getElementById("notesBox");
let numberNotePreviewChars = 60;

function createNote(note) {
  const shortenedTitle = note.content.substring(0, numberNotePreviewChars);
  increaseOrResetNumberNotes(true);
  const uniqueID = getNumberExistingNotes();
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

function deleteElementsOnSite() {
  while (noteBox.lastChild) {
    noteBox.removeChild(noteBox.lastChild);
  }
  increaseOrResetNumberNotes(false);
}

function downloadNotes() {
  const noteData = JSON.stringify(NoteBooks);
  const downloadLink = document.createElement("a");
  downloadLink.download = "Abyss-Notes-" + NoteBooks.name + ".json";
  const noteFile = new Blob([noteData], { type: "json" });
  downloadLink.href = window.URL.createObjectURL(noteFile);
  downloadLink.click();
}

document
  .getElementById("downloadButton")
  .addEventListener("click", downloadNotes);

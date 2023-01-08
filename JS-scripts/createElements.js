const noteBox = document.getElementById("notesBox");
let numberNotePreviewChars = 60;

/* creates a single Note HTML Element and adds an Event */
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

/* deletes all active Notes Elements */
function deleteElementsOnSite() {
  while (noteBox.lastChild) {
    noteBox.removeChild(noteBox.lastChild);
  }
  increaseOrResetNumberNotes(false);
}

/* function that is added to the Download Button that makes it possible to download a JSON NoteBooks File */
function downloadNotes() {
  const noteData = JSON.stringify(NoteBooks);
  const downloadLink = document.createElement("a");
  downloadLink.download = "Abyss-Notes-" + NoteBooks.name + ".json";
  const noteFile = new Blob([noteData], { type: "json" });
  downloadLink.href = window.URL.createObjectURL(noteFile);
  downloadLink.click();
}

/* function that toggles visibility of the delete Button */
function addRemoveDeleteButton(bool) {
  const _tempButton = document.getElementById("deleteButton");
  if (bool) {
    _tempButton.classList.add("active");
  } else {
    _tempButton.classList.remove("active");
  }
}

document
  .getElementById("downloadButton")
  .addEventListener("click", downloadNotes);

document.getElementById("deleteButton").addEventListener("click", deleteNote);

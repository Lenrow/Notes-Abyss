const hiddenKeyButton = document.getElementById("hiddenButton");
const fileInput = document.getElementById("acceptKey");

/* adds Elements to switch between Welcome and new User Page */
for (const element of document.getElementsByClassName("switch-button")) {
  element.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("active");
  });
}

/* function to switch between First Welcome Screen and the Note-screen */
function toggleMainFile() {
  for (const page of document.getElementsByClassName("HTMLPages")) {
    page.classList.toggle("active");
  }
  refreshNotePage();
}

/* takes JSON input File, saves it in the NoteBooks variable and triggers toggleMainFile */
function submitJSONFile() {
  if (fileInput.files.length > 0) {
    fileInput.files[0].text().then(function (text) {
      const fileObj = JSON.parse(text);
      setNoteBooks(fileObj);
      toggleMainFile();
    });
  }
}

/* takes User Text input and creates new NoteBooks Object, gives it to the NoteBooks variable and triggers toggleMainFile */
function createNewNoteBooksFile() {
  const nameUser = document.getElementById("inputNewName").value;
  const nameNewNoteBook = document.getElementById("inputNewNoteBookName").value;
  let _tempNoteBooks = {
    name: nameUser,
    notebooks: [
      {
        nameNoteBook: nameNewNoteBook,
        notes: [],
      },
    ],
  };
  setNoteBooks(_tempNoteBooks);
  toggleMainFile();
}

/* makes the proceed button visible once File Input gets submitted */
fileInput.addEventListener("change", function () {
  hiddenKeyButton.classList.toggle("active");
});

hiddenKeyButton.addEventListener("click", submitJSONFile);
document
  .getElementById("sendAndJoinButton")
  .addEventListener("click", createNewNoteBooksFile);

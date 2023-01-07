const hiddenKeyButton = document.getElementById("hiddenButton");
const fileInput = document.getElementById("acceptKey");

for (const element of document.getElementsByClassName("switch-button")) {
  element.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("active");
  });
}

function toggleMainFile() {
  for (const page of document.getElementsByClassName("HTMLPages")) {
    page.classList.toggle("active");
  }
  refreshNotePage();
}

function submitJSONFile() {
  if (fileInput.files.length > 0) {
    fileInput.files[0].text().then(function (text) {
      const fileObj = JSON.parse(text);
      setNoteBooks(fileObj);
      toggleMainFile();
    });
  }
}

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

fileInput.addEventListener("change", function () {
  hiddenKeyButton.classList.toggle("active");
});

hiddenKeyButton.addEventListener("click", submitJSONFile);
document
  .getElementById("sendAndJoinButton")
  .addEventListener("click", createNewNoteBooksFile);

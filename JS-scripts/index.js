const hiddenKeyButton = document.getElementById("hiddenButton");
const fileInput = document.getElementById("acceptKey");

for (const element of document.getElementsByClassName("switch-button")) {
  element.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("active");
  });
}

function submitJSONFile() {
  if (fileInput.files.length > 0) {
    fileInput.files[0].text().then(function (text) {
      const fileObj = JSON.parse(text);
      sessionStorage.setItem("NoteBooks", JSON.stringify(fileObj));
    });
  }
}

fileInput.addEventListener("change", function () {
  hiddenKeyButton.classList.toggle("active");
});

hiddenKeyButton.addEventListener("click", submitJSONFile);

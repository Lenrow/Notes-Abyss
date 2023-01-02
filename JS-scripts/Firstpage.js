const startDiv = document.getElementById("startForm").parentElement;
const main = document.getElementById("welcomePage");
const newUserButton = document.getElementById("startButton");

const nameForm = document.getElementById("startForm");
const joinNewButton = document.getElementById("sendAndJoinButton");
const remindingFormText = document.getElementById("hiddenFormText");

/*
function switchPage() {
    if (main.style.display != "none") {
        main.style.display = "none";
        startDiv.style.display = "block";
    }
    else {
        startDiv.style.display = "none";
        main.style.display = "block";
    }
}
*/

document.querySelectorAll(".switch-button").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("active");
  });
});

function joinAnew() {
  if (nameForm.elements[0].value && nameForm.elements[1].value) {
    location.href = "zahtmlfiles/mainPage.html";
  } else {
    remindingFormText.style.visibility = "visible";
  }
}

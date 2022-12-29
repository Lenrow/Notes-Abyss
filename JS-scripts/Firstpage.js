const startDiv = document.getElementById("startForm").parentElement;
const main = document.getElementById("welcomePage");
const newUserButton = document.getElementById("startButton");


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

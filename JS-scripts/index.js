for (const element of document.getElementsByClassName("switch-button")) {
  element.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("active");
  });
}

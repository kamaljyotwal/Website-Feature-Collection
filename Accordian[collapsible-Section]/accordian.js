var accor = document.getElementsByClassName("button-main");
// var panel = document.getElementsByClassName("panel");

for (let i = 0; i < accor.length; i++) {
  accor[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

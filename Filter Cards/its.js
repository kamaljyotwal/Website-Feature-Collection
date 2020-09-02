function filterSelection(params) {
  var card = document.getElementsByClassName("imgDiv");

  for (let i = 0; i < card.length; i++) {
    card[i].style.display = "none";
    if (card[i].classList.contains(params)) {

      card[i].classList.add('animation');
      card[i].style.display = "block"
    }
  }
}
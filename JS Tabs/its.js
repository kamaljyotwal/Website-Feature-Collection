function opencity(evt, cityName) {
  var sections = document.getElementsByClassName("innersection");
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  var tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


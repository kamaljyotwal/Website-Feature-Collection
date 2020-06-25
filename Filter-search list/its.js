function searchfunc() {
  var input, li, a, txt, filter;

  input = document.getElementById("inputBar");
  li = document.getElementsByTagName("li");
  filter = input.value.toLowerCase();
  console.log(filter);

  for (let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txt = a.innerHTML || a.innerText;
    console.log(txt);

    if (txt.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

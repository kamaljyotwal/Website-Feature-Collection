function searchfunc() {
  var  a, txt;

  var  input = document.getElementById("inputBar");
  var li = document.getElementsByTagName("li");
  var filter = input.value.toLowerCase();
  // console.log(filter);

  for (let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txt = a.innerHTML || a.innerText;
    // console.log(txt);

    if (txt.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

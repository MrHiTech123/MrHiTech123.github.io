function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if ((this.readyState == 4 && this.status == 200) && (this.responseText == document.getElementById('words').innerHTML)) {
      document.getElementById("words").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "talking.txt", true);
  xhttp.send();
}
window.setInterval(loadDoc, 1000);
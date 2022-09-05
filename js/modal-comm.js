var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function openModal(){
    event.preventDefault();
    modal.classList.toggle('show2');
}
span.onclick = function() {
    modal.classList.toggle('show2');
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.toggle('show2');
  }
}
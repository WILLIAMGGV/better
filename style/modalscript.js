// Obtener el modal
var modal = document.getElementById("modal");
var modal2 = document.getElementById("modal2");

// Obtener el botón que abre el modal
var btn = document.getElementById("openModal");
var btn2 = document.getElementById("openModal2");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementById("closeModal");

var span2 = document.getElementById("closeModal2");

// Cuando el usuario hace clic en el botón, se abre el modal
btn.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
  modal2.style.display = "block";
};

// Cuando el usuario hace clic en <span> (x), se cierra el modal
span.onclick = function () {
  modal.style.display = "none";
};

span2.onclick = function () {
  modal2.style.display = "none";
};

// Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

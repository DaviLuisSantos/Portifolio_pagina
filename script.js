function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Adicionar evento de clique fora da modal para fechá-la
var modals = document.getElementsByClassName("modal");
for (var i = 0; i < modals.length; i++) {
modals[i].addEventListener("click", function(event) {
if (event.target == this) {
closeModal(event.target.id);
}
});
}

function myFunction(dots, more, btn) {
  var dots = document.getElementById(dots);
  var moreText = document.getElementById(more);
  var btnText = document.getElementById(btn);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ver mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ver menos";
    moreText.style.display = "inline";
  }
}
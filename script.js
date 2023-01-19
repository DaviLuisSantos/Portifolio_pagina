
JavaScript:
```javascript
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

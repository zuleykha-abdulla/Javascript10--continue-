const addActive = () => {
  let menu = document.getElementById("menu");
  let menuToggle = document.getElementById("menu-toggle");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
document.getElementById("menu-toggle").addEventListener("click", addActive);
//------------------------------------------

//fetch ile textin gorunmesinin tenzimi
function f() {
  fetch("3.txt")
    .then((x) => x.text())
    .then(function (r) {
      h1.innerHTML = r;
    });
}
//---------------------------------------------

const addActive = () => {
  let menu = document.getElementById("menu");
  let menuToggle = document.getElementById("menu-toggle");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
document.getElementById("menu-toggle").addEventListener("click", addActive);
//------------------------------------------

//input daxilinde faylin adi qeyd olunan zaman
function f() {
  fetch(fayl.value)
    .then((x) => x.text())
    .then(function (r) {
      h2.innerHTML = r;
    });
}

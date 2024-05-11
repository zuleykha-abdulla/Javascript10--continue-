fetch("4.txt")
  .then((x) => x.json())
  .then(function (r) {
    h1.innerHTML = r.ad;
  });

//---------------------------

fetch("5.txt")
  .then((x) => x.json())
  .then(function (g) {
    h2.innerHTML = g.ad;
    h2.style.color = g.color;
    h2.style.backgroundColor = g.background;
  });

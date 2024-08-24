let alphabetsAndNumb = "ABCDEF0123456789";
let getContainer = document.querySelector(".container");
let getBody = document.querySelector("body");
let getModal = document.getElementById("modal");
let year = document.getElementById("year");

function changeYear() {
  let d = new Date();
  year.innerText = d.getFullYear();
}

function generateColor() {
  getContainer.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    let randomClr1 = "#";
    let randomClr2 = "#";
    for (let j = 0; j < 6; j++) {
      randomClr1 +=
        alphabetsAndNumb[Math.floor(Math.random() * alphabetsAndNumb.length)];
      randomClr2 +=
        alphabetsAndNumb[Math.floor(Math.random() * alphabetsAndNumb.length)];
    }
    getContainer.innerHTML += `<div onclick="copyColor('${randomClr1}','${randomClr2}')" class="box" style="background:linear-gradient(to right,${randomClr1},${randomClr2})"><h5>${randomClr1}, ${randomClr2}</h5><div class="copy">COPY</div></div>`;
  }
}

function copyColor(clr1, clr2) {
  navigator.clipboard.writeText(
    `background:linear-gradient(to right,${clr1},${clr2})`
  );
  getModal.classList.add("showModal");
  getModal.innerHTML = `<h2>COPIED</h2><h3>background: linear-gradient(to right,${clr1},${clr2})</h3>`;
  getModal.style.background = `linear-gradient(to right,${clr1},${clr2}`;

  setTimeout(function () {
    getModal.classList.remove("showModal");
    document.body.style.overflow = "hidden";
  }, 800);
}

generateColor();
changeYear();

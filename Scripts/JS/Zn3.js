var time = document.getElementById("time");
var algoritm = document.getElementById("algoritm");
let mostrador = document.getElementById("mostrador");
var i = 0;
var espacioPresionado = false;
let interval = null;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && !espacioPresionado) {
    espacioPresionado = true;
    interval = setInterval(() => {
      time.innerText = Number.parseFloat(time.innerText) + 0.01;
    }, 10);
  }
});

document.addEventListener("keyup", function (e) {
  if (e.code === "Space") {
    espacioPresionado = false;
    clearInterval(interval);
  }
});

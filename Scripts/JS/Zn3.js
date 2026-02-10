var time = document.getElementById("time");
var algoritm = document.getElementById("algoritm");
let mostrador = document.getElementById("mostrador");
var i = 0;
var espacioPresionado = false;
let interval = null;
time.innerText = time.innerText?.trim() ? time.innerText : "0.00";
var moment = 0;
var algoritmo = "";
var moviments = {
  1: "U ",
  2: "U' ",
  3: "2U ",
  4: "D ",
  5: "D' ",
  6: "2D ",
  7: "R ",
  8: "R' ",
  9: "2R ",
  10: "L ",
  11: "L' ",
  12: "2L ",
  13: "F ",
  14: "F' ",
  15: "2F ",
  16: "B ",
  17: "B' ",
  18: "2B ",
};

document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && !espacioPresionado) {
    espacioPresionado = true;
    if (i == 1) {
      clearInterval(interval);
      i = 0;
      moment = 0;
      mostrador.innerText =
        "Manten presionado espacio para empezar o haz click";
      mostrador.style =
        "background-color: rgba(255, 0, 0, 1);color: rgb(255, 255, 255);";
      borrr();
    } else {
      borrr();
      mostrador.innerText = "Espera...";
      mostrador.style =
        "background-color: rgba(255, 251, 0, 1);color: rgba(255, 255, 255, 1);";
      interval = setTimeout(() => {
        i = 1;
        mostrador.innerText = "¡Ya!";
        mostrador.style =
          "background-color: rgba(0, 255, 17, 1);color: rgba(255, 255, 255, 1);";
      }, 2000);
    }
  }
});
document.addEventListener("keyup", function (e) {
  if (e.code === "Space") {
    espacioPresionado = false;
    clearTimeout(interval);
    if (i == 1) {
      mostrador.style =
        "background-color: rgba(0, 47, 255, 1);color: rgba(255, 255, 255, 1);";
      interval = setInterval(() => {
        moment += 1;
        time.innerText = transformSecondsForTime(moment);
      }, 10);
    } else {
      mostrador.innerText =
        "Manten presionado espacio para empezar o haz click";
      mostrador.style =
        "background-color: rgba(255, 0, 0, 1);color: rgb(255, 255, 255);";
      borrr();
    }
  }
});
function transformSecondsForTime(centesimas) {
  const totalCent = Math.abs(Number(centesimas) || 0);
  const totalSeg = Math.floor(totalCent / 100);
  const cs = totalCent % 100;
  const horas = Math.floor(totalSeg / 3600);
  const minutos = Math.floor((totalSeg % 3600) / 60);
  const segundos = totalSeg % 60;
  const signo = centesimas < 0 ? "-" : "";

  const pad2 = (value) => String(value).padStart(2, "0");
  const base = `${pad2(segundos)}.${pad2(cs)}`;

  if (horas > 0) {
    return `${signo}${pad2(horas)}:${pad2(minutos)}:${base}`;
  }

  if (minutos > 0) {
    return `${signo}${pad2(minutos)}:${base}`;
  }

  return `${signo}${base}`;
}
function borrr() {
  clearInterval(interval);
  clearTimeout(interval);
  time.innerText = "0.00";
  while (algoritmo.length < 18) {
    algoritmo += moviments[generarRandom(1, 18)];
  }
  algoritm.innerText = algoritmo;
}
function generarRandom(inicio, fin) {
  let dif = fin - inicio;
  let randomizer = Math.random();
  for (let index = 1; index <= dif; index++) {
    if ((randomizer <= index / dif) & (randomizer >= (index - 1) / dif)) {
      return index;
    }
  }
}

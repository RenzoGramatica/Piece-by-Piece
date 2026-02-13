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
  1: "U  ",
  2: "U' ",
  3: "U2 ",
  4: "D ",
  5: "D' ",
  6: "D2 ",
  7: "R ",
  8: "R' ",
  9: "R2 ",
  A: "L ",
  B: "L' ",
  C: "L2 ",
  D: "F ",
  E: "F' ",
  F: "F2 ",
  G: "B ",
  H: "B' ",
  I: "B2 ",
};

document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && !espacioPresionado) {
    espacioPresionado = true;
    if (i == 1) {
      clearInterval(interval);
      i = 0;
      moment = 0;
      borr();
      mostrador.innerText =
        "Manten presionado espacio para empezar o haz click";
      mostrador.style =
        "background-color: rgba(255, 0, 0, 1);color: rgb(255, 255, 255);";
    } else {
      mostrador.innerText = "Espera...";
      mostrador.style =
        "background-color: rgba(255, 251, 0, 1);color: rgba(255, 255, 255, 1);";
      interval = setTimeout(() => {
        i = 1;
        time.innerText = "0.00";
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
function borr() {
  console.log("se borro");
  mostrador.innerText = "Manten presionado espacio para empezar o haz click";
  mostrador.style =
    "background-color: rgba(255, 0, 0, 1);color: rgb(255, 255, 255);";
  algoritmo = "";
  algoritm.innerText = "";
  var itr = 1;
  while (algoritmo.length < 21 && itr < 70) {
    itr++;
    const random = generarRandom(0, 17);
    const keys = Object.keys(moviments);
    const penult = algoritmo[algoritmo.length - 2];
    var ult = algoritmo[algoritmo.length - 1];
    if (ult == undefined) {
      ult = 0;
    }
    const indice_ult = keys.indexOf(ult);
    const inicio_ult = indice_ult - (indice_ult % 3);
    console.log(indice_ult);
    console.log(inicio_ult);
    var fin = inicio_ult + 6;
    var inicio = inicio_ult;
    var inicio_ = inicio + 3;
    var fin_ = inicio + 6;
    var initi = inicio;
    var fini = inicio + 3;
    console.log(inicio_ult % 6);
    if (inicio_ult % 6 == 3) {
      inicio = inicio_ult - 3;
      fin = inicio_ult + 3;
      inicio_ = inicio_ult - 3;
      fin_ = inicio_ult;
    }
    console.log(inicio);
    console.log(fin);
    const grupo = keys.slice(inicio, fin);
    const grupo_opuesto = keys.slice(inicio_, fin_);
    const grupo_normal = keys.slice(initi, fini);
    if (penult == undefined || ult == undefined) {
      console.log(penult);
      algoritmo += keys[random];
    } else {
      if (grupo.indexOf(keys[random]) == -1) {
        console.log(grupo);
        if (
          grupo_normal.indexOf(penult) == -1 ||
          grupo_opuesto.indexOf(ult) == -1
        ) {
          algoritmo += keys[random];
        } else {
          console.log(keys[random]);
          console.log(grupo);
        }
      } else {
        console.log(keys[random]);
        console.log(grupo);
      }
    }
  }
  console.log(algoritmo);
  for (let ps = 0; ps < algoritmo.length; ps++) {
    algoritm.innerText += moviments[algoritmo[ps]];
  }
}
function borrr() {
  console.log("se borro");
  clearInterval(interval);
  clearTimeout(interval);
  i = 0;
  moment = 0;
  borr();
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

let header_text1 = document.getElementById("1_1");
let header_text2 = document.getElementById("1_2");
let header_text3 = document.getElementById("1_3");
let header_text4 = document.getElementById("1_4");
let header_text5 = document.getElementById("1_5");
let currentPage = window.location.pathname.split("/").pop();

switch (currentPage) {
  case "Home.htm":
    header_text1.style =
      "color: rgb(0, 0, 0);margin: 13px 13px 13px 13px;background-color: rgb(255, 255, 255);border-radius: 7px;border: rgb(255, 255, 255) solid 2px;";
    break;
  case "Cronometro.htm":
    header_text3.style =
      "color: rgb(0, 0, 0);margin: 13px 13px 13px 13px;background-color: rgb(255, 255, 255);border-radius: 7px;border: rgb(255, 255, 255) solid 2px;";
    break;
  default:
    break;
}
function cronometer() {
  if (currentPage != "Cronometro.htm") {
    window.location = "Cronometro.htm";
  }
}

function home() {
  if (currentPage != "Home.htm") {
    window.location = "Home.htm";
  }
}

function tutoriales() {
  console.warn("Tutoriales page is not implemented yet.");
}

function history() {
  console.warn("History page is not implemented yet.");
}

function model() {
  console.warn("Model page is not implemented yet.");
}

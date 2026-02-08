let header_text1 = document.getElementById("1_1");
let header_text2 = document.getElementById("1_2");
let header_text3 = document.getElementById("1_3");
let header_text4 = document.getElementById("1_4");
let header_text5 = document.getElementById("1_5");
switch (window.location) {
  case "Home.htm":
    header_text1.style =
      "color: rgb(0, 0, 0);margin: 13px 13px 13px 13px;background-color: rgb(255, 255, 255);border-radius: 7px;border: rgb(255, 255, 255) solid 2px;";
    break;
  case "Cronometer.htm":
    header_text3.style =
      "color: rgb(0, 0, 0);margin: 13px 13px 13px 13px;background-color: rgb(255, 255, 255);border-radius: 7px;border: rgb(255, 255, 255) solid 2px;";
    break;
  default:
    break;
}
function cronometer() {
  if (window.location != "Home.htm") {
    window.location = "Cronometro.htm";
  }
}

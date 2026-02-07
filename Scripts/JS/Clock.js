const fs = require("fs");
const path = require("path");

const rutaJSON = path.join(__dirname, ".../Data/Records.json");
var table = document.getElementById("2").innerHTML;
var data = {};
function escribirJSON() {
  const texto = JSON.stringify(data, null, 2);
  fs.writeFileSync(rutaJSON, texto);
  console.log("Archivo JSON encerrado correctamente.");
}
function leerJSON() {
  const contenido = fs.readFileSync(rutaJSON, "utf8");
  data = JSON.parse(contenido);
  console.log("Archivo JSON archivado correctamente");
}

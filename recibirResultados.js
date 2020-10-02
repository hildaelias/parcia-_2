var notas = JSON.parse(sessionStorage.getItem("notas"));
var laboratorio, unidad = 0;

if (notas !== undefined) {
  laboratorio = (notas[1] * 0.5) + (notas[2] * 0.5);
  unidad = (laboratorio * 0.4) + (notas[3] * 0.6);
}
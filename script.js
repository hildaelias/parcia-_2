var enviarNotas = function () {
  var nombre = document.getElementById("nombre").value;
  var taller1 = document.getElementById("taller1").value;
  var taller2 = document.getElementById("taller2").value;
  var parcial = document.getElementById("parcial").value;

  var notas = [];

  if (nombre == "" || nombre == null || nombre.length <= 1) {
    alert('Escriba su nombre para poder continuar');
    document.getElementById("nombre").focus();

  } else {
    if (taller1 < 0 || taller1 > 10) {
      alert("Su nota de 'Taller 1' debe encontrarse entre 0.0 y 10.0");
      document.getElementById("taller1").focus();
    } else {
      if (taller2 < 0 || taller2 > 10) {
        alert("Su nota de 'Taller 2' debe encontrarse entre 0.0 y 10.0");
        document.getElementById("taller2").focus();
      } else {
        if (parcial < 0 || parcial > 10) {
          alert("Su nota de 'Parcial' debe encontrarse entre 0.0 y 10.0");
          document.getElementById("parcial").focus();
        } else {
          notas[0] = nombre;
          notas[1] = taller1;
          notas[2] = taller2;
          notas[3] = parcial;

          sessionStorage.setItem("notas", JSON.stringify(notas));

          window.location.href = "./resultados.html";
        }
      }
    }
  }
}
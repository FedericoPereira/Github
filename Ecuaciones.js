function calcular() {
  var x1 = $("input#x1").val();
  var y1 = $("input#y1").val();
  var r1 = $("input#r1").val();
  var x2 = $("input#x2").val();
  var y2 = $("input#y2").val();
  var r2 = $("input#r2").val();

  // Averiguar Y
  // Tengo la ecuacion x1 + y1 = r1
  // Tengo la ecuacion x2 + y2 = r2
  var x3 = (x1) * (-x2);
  var y3 = (y1) * (-x2);
  var r3 = (r1) * (-x2);
  var x4 = (x2) * (x1);
  var y4 = (y2) * (x1);
  var r4 = (r2) * (x1);
  var x5 = (x3) + (x4);
  var y5 = (y3) + (y4);
  var r5 = (r3) + (r4);
  if (x5 == y5) {
    swal('Las rectas son iguales');
  }
  // // Valor de Y
  var yfinal = (r5) / (y5);
  // // Averiguar X
  var r6 = (r1) - (y1* yfinal);
  // // Valor de X
  var xfinal = (r6) / (x1);

  swal('El punto de interseccion es ' + xfinal + ' ;  ' + yfinal);
}

function ls0() {
  window.location.href = "sistemaslineales.html";
}

function ls1() {
  window.location.href = "explicit.html";
}

function calcularExplicita() {
  var x1 = $("input#x1").val();
  var y1 = $("input#y1").val();
  var y2 = $("input#y2").val();
  var x2 = $("input#x2").val();
  // y2 - y1 = yAux
  // x2 - x1 = xAux
  // yAux / xAux = m
  // y1 = m * x1 + n
  // y1 -(m*x1) = n
  // y = mx + n
  var yAux = y2 - y1
  var xAux = x2 - x1
  // Pendiente
  var m = yAux / xAux
  // Interseccion
  var n = y1 - (m * x1)
  swal('y =' + m + 'x' + '+' + n);
}

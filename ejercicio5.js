/*Ejercicio 5
Construir un programa que simule un menú de opciones para realizar las cuatro 
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores 
numéricos enteros. El usuario, además, debe especificar la operación con el primer 
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ 
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.*/

var num1 = prompt("ingrese el primer número");
var num2 = prompt("Ingrese el segundo número");

do {
  const opcion = prompt(
    "Operaciones aritméticas \n S- suma \n R- resta \n M- multiplicación \n D- división \n A- salir");
  switch (opcion.toUpperCase) {
    case "s":
      var resultado = num1 + num2;
      break;
    case "r":
      var resultado = num1 - num2;
      break;
    case "m":
      var resultado = num1 * num2;
      break;
    case "d":
      if (num2 !== 0) {
        var resultado = num1 / num2;
      }
      if (num2 == 0) {
        alert(`No se puede dividir de 0`);
      }
      if (num1 > num2) {
        alert(`ERROR!! operación inválida`);
      }
      break;
    case "a":
      alert(`Hasta la próxima`);
      break;
  }
} while (opcion !== a);
alert(`El resultado de la operación es: ${resultado}`);

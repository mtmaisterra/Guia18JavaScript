/*Ejercicio 8
Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el 
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de 
todos ellos. */
var cant = 0;
var suma = 0;
var valorMax = 0;
var prom = 0;
var i = 0;
valorMin = 0;

do {
  var num = parseInt(prompt("Ingrese un número"));
  console.log("[ " + i + " ] = " + num);
  i = i + 1;
  suma = suma + num;
  prom = suma / i;
  if (num > valorMax) {
    valorMax = num;
  }
  if (num <= valorMin) {
    valorMin = num;
  }
} while (num !== 0);

console.log("La cantidad de números ingresados es: " + i);
console.log("El valor máximo es: " + valorMax);
console.log("El valor mínimo es: " + valorMin);
console.log("El promedio es: " + prom);

/*Ejercicio 18
A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor.
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los 
operadores necesarios para obtener un resultado true y otro resultado false.
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los 
dos elementos numéricos.*/

var valores = [true, 5, false, "hola", "adios", 2];

var texto1 = valores[3];
var texto2 = valores[4];

if (texto1.length < texto2.length) {
    alert ("La palabra  ´" + texto1 + "´ es más menor que la palabra ´"+ texto2+"´");

} else if (texto1.length > texto2.length) {
    alert ("La palabra ´" + texto1 + "´ es más mayor que la palabra ´"+ texto2+"´");
} else {
    alert ("La palabra " + texto1 + " tiene la misma longitud que la palabra "+ texto2);
}

var boolean1 = valores[0];
var boolean2 = valores[2];

if (boolean1 == true) {
alert ("El valor del primer booleano es: " + boolean1);
 }
  if (boolean2 == false){
  alert ("El valor del segundo booleano es: " + boolean2);  
 }


var num1 = valores[1];
var num2 = valores[5];

var suma = num1 + num2;
var resta = num1 - num2;
var multiplo = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;

alert("La suma de " + num1 + " + " + num2 + " = " + suma);
alert("La resta de " + num1 + " - " + num2 + " = " + resta);
alert("La multiplicación de " + num1 + " * " + num2 + " = " + multiplo);
alert("La dicvisión de " + num1 + " / " + num2 + " = " + division);
alert("El módulo de " + num1 + " % " + num2 + " = " + modulo);
    

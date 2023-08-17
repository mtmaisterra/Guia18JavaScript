/*Ejercicio 7
Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación 
solicite números al usuario hasta que la suma de los números introducidos supere el 
límite inicial.*/

var valorLimite = parseFloat(prompt("Ingresa el número:"));
var num = 0;
var suma = 0;
do {
    num = parseFloat(prompt("Ingresa un número:"));
     suma = suma + num;
} while (suma <= valorLimite);

alert (`Valor superado`);

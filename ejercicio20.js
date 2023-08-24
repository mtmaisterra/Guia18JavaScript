/*Ejercicio 20
 Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y 
muestre el siguiente array [6, 9, 12, 15, 18].  */

var matriz = [3, 6, 9, 12, 15];

var arrayNueva = [];

console.log(matriz);

    var nuevoElemento = matriz[0] + matriz[4];
    
arrayNueva = [6,9,12,nuevoElemento];

console.log(arrayNueva);

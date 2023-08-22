/*Ejercicio 10
Escribir una función flecha que reciba una palabra y la devuelva al revés. */

var miPalabra = "Hola";
const palabra = (miPalabra) =>{
var nuevaPalabra = miPalabra.split(``);
return nuevaPalabra.reverse().join("");
}

console.log(palabra(miPalabra));
 
/*
// Definimos un array con nombres
let nombres = ["Juan", "María", "Carlos", "Ana"];

// Aplicamos el método reverse() para invertir el orden de los nombres
nombres.reverse();

// Mostramos el array resultante
console.log(nombres);  // Output: ["Ana", "Carlos", "María", "Juan"]*/
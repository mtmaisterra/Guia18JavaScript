/*Ejercicio 9
Realizar un programa que pida una frase y el programa deberá mostrar la frase con un 
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el 
funcionamiento de la función Substring().*/

var nuevaFrase = ``;
var frase = prompt("Ingrese una frase");
console.log("La frase es: " + frase);


for (let i = 0; i < frase.length; i++) {
   /* console.log(frase.charAt(i));*/
   nuevaFrase += frase.substring(i, i + 1) + ` `;
   
}
 console.log(nuevaFrase);
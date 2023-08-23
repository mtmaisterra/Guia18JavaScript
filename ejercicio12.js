/*Ejercicio 12
Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de dato.*/

let tipoDato = (dato) => {
    return typeof dato;
};

console.log(tipoDato(5)); // "number"
console.log(tipoDato("Hola")); // "string"
console.log(tipoDato(true)); // "boolean"
console.log(tipoDato([])); // "object"
console.log(tipoDato(null)); // "object"

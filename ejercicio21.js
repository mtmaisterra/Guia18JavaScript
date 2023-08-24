/*Ejercicio 21
Escribir un programa para obtener un array de las propiedades de un objeto Persona. 
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura. */

class Persona{
    constructor(nombre, edad, sexo, altura, peso){   
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.altura = altura;
        this.peso = peso;
        }         
} 


const persona = new Persona("Enzo", 8, "Hombre", 1.5, 25);
const persona1 = new Persona("Teresa", 47, "Mujer", 1.59, 96);
const persona2 = new Persona ("Ornella", 20, "Mujer", 1.75, 50);

console.log(persona);
console.log(persona1);
console.log(persona2);
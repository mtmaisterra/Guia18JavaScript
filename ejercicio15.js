/*Ejercicio 15
Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo 
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El 
radio del círculo lo proporcionará el usuario.*/


function circulo (radio) {
    this.radio = radio;
}

var radio = prompt("Ingrese el radio del círculo");

var area = Math.PI * Math.pow(radio, 2);

var perimetro = 2 * Math.PI * radio;

alert("El valor del área del círculo es: "+area+ "\n El valor del perímetro del círculo es: " + perimetro);
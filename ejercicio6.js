/*Ejercicio 6
Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar. 
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. */


var num = parseFloat(prompt("Ingresa el número:"));

if (num == 0) {
   alert (`el número no es par ni impar`);
} else {
    if(num %2 == 0){
        alert(`El número es par`);
    }
    alert(`el número es impar`);
}

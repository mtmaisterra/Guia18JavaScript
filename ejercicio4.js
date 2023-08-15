/*Ejercicio 4
Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario 
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla 
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.*/

var caracter = prompt("Ingrese un caracter");
caracter = caracter.toUpperCase();
if(caracter == "S" || caracter =="N"){
    var mensaje = `CORRECTO`;
    } else {
    var mensaje = `INCORRECTO`;
    }
alert(mensaje);
/*Ejercicio 17
Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el 
resultado.*/

var miArray = ["hola", "Mundo", "estoy", "aquí", "en", "San Pedro", "La", "Rioja"];

alert(miArray);

var miNuevoArray = miArray.splice(0,miArray.length-2);

alert (miNuevoArray);



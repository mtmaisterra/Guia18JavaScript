/*Ejercicio 16
 Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios 
y los muestre por pantalla.*/

var vector1 = [];
var vector2 = [];

for (var i = 0; i < 5; i++) {
    var numeroVector1 = Math.floor(Math.random() * 10);
    vector1.push(numeroVector1);    
    var numeroVector2 = Math.floor(Math.random() * 10);
    vector2.push(numeroVector2);  
}

 alert("El vector 1 tiene: " + "{ " + vector1 + " }");
 alert("El vector 2 tiene: " + "{ " + vector2 + " }");  
  

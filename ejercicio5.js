/*Ejercicio 5
Construir un programa que simule un menú de opciones para realizar las cuatro 
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores 
numéricos enteros. El usuario, además, debe especificar la operación con el primer 
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ 
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.*/


var num1 = parseFloat(prompt("Ingresa el primer número:"));
var num2 = parseFloat(prompt("Ingresa el segundo número:"));
var resultado = "adios";
  var opcion = prompt(
    "Operaciones aritméticas \n S- suma \n R- resta \n M- multiplicación \n D- división \n A- salir");
  switch (opcion) {
    case "S":
      var resultado = num1 + num2;  
          
      break;
    case "R":
      var resultado = num1 - num2;           
      break;
    case "M":
      var resultado = num1 * num2;    
      break;
    case "D":
       if (num1 < num2) {
        alert(`ERROR!! operación inválida`);               
      } else {
      if (num2 == 0) {
        alert(`No se puede dividir por 0`);
      } else {
        var resultado = num1 / num2;
      }
    } 
    break;     
    case "A":
      alert(`Hasta la próxima`);
      break;
  }
 alert(resultado);  


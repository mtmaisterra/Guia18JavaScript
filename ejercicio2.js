/*Ejercicio 2
Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio 
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que 
para calcular el área y el perímetro se utilizan las siguientes fórmulas: 
area = PI * radio2 
perimetro = 2 * PI * radio */

var radio = prompt("Ingrese el radio")

var area = Math.PI * Math.pow(radio,2);

alert(`El valor del área es ${area}`);

var perimetro = 2 * Math.PI * radio;

alert(`El valor del perímetro es ${perimetro}`);
/*Ejercicio 13
Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer, 
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.*/



function persona(nombre, edad, sexo, peso, altura){
   
this.nombre = nombre;
this.edad = edad;
this.sexo = sexo;
this.altura = altura;
this.peso = peso;
}

var nombre = prompt("Ingrese el nombre de la persona");
var edad = prompt("Ingrese la edad de la persona");
var sexo = prompt("Ingrese el sexo de la persona : \n H- Hombre \n M- Mujer \n O- Otro");

var altura = prompt("Ingrese la altura de la persona");
var peso = prompt("Ingrese el peso de la persona");

alert("El nombre de la persona es: "+ nombre + "\n La edad de la persona es: " + edad + " años \n La altura de la persona es: " + altura + " metros \n El peso de la persona es: " + peso +" kilos");
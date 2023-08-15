/*Ejercicio 1*/
/*var tiempo = prompt("¿Como es el día de hoy?", "soleado, nublado, lloviendo");

var mensaje = `El dia de hoy esta... ${tiempo}`;

alert(mensaje);*/

/*Ejercicio 2
2. Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio 
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que 
para calcular el área y el perímetro se utilizan las siguientes fórmulas: 
area = PI * radio2 
perimetro = 2 * PI * radio*/

/*var radio = prompt("Ingrese el radio")

var area = Math.PI * Math.pow(radio,2);

alert(`El valor del área es ${area}`);

var perimetro = 2 * Math.PI * radio;

alert(`El valor del perímetro es ${perimetro}`);
*/
/*Ejercicio 3
3. Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de 
edad se debe mostrar un mensaje indicándolo.
*/
var edad= prompt("Ingrese la edad")?
if(edad>=18){
var mensaje= `Es mayor de edad`;

} else{
    var mensaje =`Es menor de edad`
}
alert(mensaje);

/*Ejercicio 4*/
var caracter = prompt("Ingrese un caracter");
caracter = caracter.toUpperCase();
if(caracter == "S" || caracter =="N"){
    var mensaje = `CORRECTO`;
    } else {
    var mensaje = `INCORRECTO`;
    }
alert(mensaje);

/*ejercicio 5*/


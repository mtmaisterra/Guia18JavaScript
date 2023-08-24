/*Ejercicio 19
Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A 
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El 
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla. 
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números 
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor 
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado 
de 20. */

var arregloA = [];
var arregloB = [];

for (let i = 0; i < 50; i++) {
   var num = Math.floor(Math.random()*50);
   arregloA.push(num);
}
console.log("[ "+ arregloA + " ]");

function compararMenorMayor(a,b){
    return a-b;
}

var arregloOrdenado = arregloA.sort(compararMenorMayor);

console.log("[ "+ arregloOrdenado + " ]");

arregloB = arregloA.slice(0,10);

for (let i = 10; i < 20; i++) {
   arregloB[i]= 0.5;
    
}
console.log("[ " + arregloB + " ]")
/*Ejercicio 8
Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el 
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de 
todos ellos. */
var cant = 0;
var suma = 0;
let arr = [];
var valorMax = 0;
var prom = 0;
var form = document.getElementById("form");
form.addEventListener("submit",lista);
function lista(e) {
    e.preventDefault();
   
  
var num = document.getElementById("miInput").value;

/*do {*/ 
  
 if (num !== 0) {
    console.log("funciona?");
    arr.push(num);
   
  }else if(num == 0){
    console.log("Hasta acá llegamos")
    recorrido(arr);
  }
/*} while (num !== 0);*/
 
}

function recorrido(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("hasta acá?")
        cant = cant + 1;
        suma = suma + num;
        prom = suma / cant;
 }
 alert("La cantidad de números ingresado es: " + cant);
alert("El valor máximo es: " + Math.max(num));
alert("El valor mínimo es: " + Math.min(num));
alert("El promedio es: " + prom);
}



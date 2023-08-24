/*Ejercicio 22
 Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a 
elección*/

var boton = document.getElementById("miBoton");

        // Agregar un manejador de eventos para el clic en el botón
        boton.addEventListener("click", function() {
            // Mostrar un mensaje en una ventana emergente (alert)
            alert("¡Hola! Vivo en San Pedro, Departamento Castro Barros, Provincia de La Rioja, Argentina");
        });
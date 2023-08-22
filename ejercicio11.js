/*Ejercicio 11
Escribir una función que reciba un String y devuelva la palabra más larga. 
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript” */


function palabraMasLarga(frase) {
    
    const palabras = frase.split(' ');  
   
    let palabraMasLarga = '';
  
        for (const palabra of palabras) {
      if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
      }
    }
  
    return palabraMasLarga;
  }
  
  // Ejemplo de uso
  const fraseEjemplo = "Hola mundo odioso";
  const resultado = palabraMasLarga(fraseEjemplo);
  console.log(resultado); // Debería imprimir "JavaScript"
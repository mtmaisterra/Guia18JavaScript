/*Ejercicio 14
Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario 
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el 
numero de páginas.*/

function libro(ISBN, titulo, autor, numerodePaginas){
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numerodePaginas = numerodePaginas;

}
var ISBN = prompt ("Ingrese el ISBN del libro");
var titulo = prompt("Ingrese el título del libro");
var autor= prompt("Ingrese el nombre del autor del libro");
var numerodePaginas= prompt("Ingrese la cantidad de páginas del libro");

alert("El ISBN es: " + ISBN + "\n El título del libro es: " + titulo + "\n El nombre del autor es: " + autor + "\n La cantidad de páginas es: " + numerodePaginas);
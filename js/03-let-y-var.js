'use strict'

// Pruebas con let y var
var numero = 40;
console.log(numero); 

if(true){
    var numero = 50;
    console.log(numero); 
}

console.log(numero)

//Let: Solo funciona en un bloque de codigo.
var texto = "https://proyecta.utch.edu.mx";
console.log(texto);

if(true){
    let texto = "https://moodle.utch.edu.mx";
    console.log(texto)
}

console.log(texto)
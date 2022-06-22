'use strict'

/* CONDICIONAL IF
        SI A ES IGUAL A B ENTONCES HAZ ALGO
*/

var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
    console.log("Edad1 es Mayor o igual a edad2");
    if(edad1<=33){
        console.log("Todavia eres un Milenial");
    }
    else{
        console.log("Eres de la generiacion X");
    }
}else{
    console.log("Edad2 es Mayor o igual a edad1");
}


/*Operadores relacionales

    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=

*/
var edad = 19;
var nombre = 'Gustavo Valladolid';

if(edad >= 18){
    console.log(nombre + " tiene "+edad+ " años, es mayor de edad.");

    if(edad <= 33){
        console.log("Todavia eres millenial");
    }else if(edad >=70){
        console.log("Ya estas anciano");
    }else{
        console.log("Ya no eres millenial")
    }


}else{
    console.log(nombre + " tiene "+edad+ " años, es Menor de edad.")
}
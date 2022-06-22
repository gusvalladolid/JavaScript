var num1 = parseInt(prompt("Inserta el num 1"));
var num2 = parseInt(prompt("Inserta el num 2"));
while(isNaN(num1) || num1<=0){
    var num1 = parseInt(prompt("Inserta el num 1"));
}
while(isNaN(num2) || num2<=0){
    var num2 = parseInt(prompt("Inserta el num 2"));
}
var suma = num1+num2;
var resta = num1-num2;
var mult = num1*num2;
var div = num1/num2;
console.log("El resultado de la suma = "+ suma);
console.log("El resultado de la resta = "+ resta);
console.log("El resultado de la multiplicacion = "+ mult);
console.log("El resultado de la division = "+ div);
alert("El resultado de la suma = "+ suma);
alert("El resultado de la resta = "+ resta);
alert("El resultado de la mult = "+ mult);
alert("El resultado de la division = "+ div);

function sumaF(){
    document.write(suma);
}
function restaF(){
    document.write(resta);
}
function divF(){
    document.write(div);
}
function multF(){
    document.write(mult);
}


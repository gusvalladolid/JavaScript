var num1 = parseInt(prompt("Inserta el num 1"));
var num2 = parseInt(prompt("Inserta el num 2"));
while(isNaN(num1) || num1<=0){
    var num1 = parseInt(prompt("Inserta el num 1"));
}
while(isNaN(num2) || num2<=0){
    var num2 = parseInt(prompt("Inserta el num 2"));
}
    if(num1>num2){
        console.log("El num 1 es mayor");
    }else if(num2>num1){
        console.log("El num2 es mayor")
    }else{
        console.log("Los 2 numeros son iguales")
    }
 
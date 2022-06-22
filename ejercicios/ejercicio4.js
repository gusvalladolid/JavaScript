var num1 = parseInt(prompt("Escribe el primer numero"));
var num2 =  parseInt(prompt("Escribe el segundo numero"));
for(var i = num1 ; i<=num2; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}
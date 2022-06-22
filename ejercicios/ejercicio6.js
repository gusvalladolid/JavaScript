var num = parseInt(prompt("Inserta el num para saber si es par o no"));
while(isNaN(num) || num<=0){
    var num = parseInt(prompt("Valor invalido, ingresa otro"));
}
if (num % 2 == 0){
    console.log("Es par");
}else{
    console.log("Es impar");
}
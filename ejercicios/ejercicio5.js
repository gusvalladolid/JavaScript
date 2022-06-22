var num = parseInt(prompt("Inserta el numero para saber sus divisores"));
for(var i = 0 ; i<=num; i++){
    if(num % i == 0){
        console.log(i);
    }
}
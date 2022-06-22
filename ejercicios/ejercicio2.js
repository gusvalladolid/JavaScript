var suma = 0;
var cont = 0;
var num = 1;
while(num>0){
    var num = parseInt(prompt("Inserta el numero"));    
    if(num>0){
    suma = num+suma;
    cont++;
}
}
var media = suma/cont;
console.log(cont, suma)
console.log("La media es "+media+" y la suma de todos los numeros es " +suma);
var num = prompt("Inserta el numero que quieres buscar entre el 1 al 100");
var n = 0;
var cont = 0;
for(var i = 0; i<=100; i++){
    n = String(i);
    n.split('');
    if(num == n[0] || num==n[1]){
        cont++;
       document.write("El numero "+num+" fue encontrado en el el caracter "+ i + "<br/>");
    }
}
alert("El numero "+num+" fue encontrado "+cont+" veces");
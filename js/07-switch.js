var edad = 25
var imprime= "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de Edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los cuarenta";
    break;
    case 75:
        imprime = "Ya eres un anciano";
    break;
    default:
        imprime = "Tu edad es neutral";
    break;
}
console.log(imprime);
//Factorizar un numero

function factor(num) {
    if(num === 0 || num === 1) //Si num equivale a 0 y a 1 el factorial regresa 1
    return 1;
    //Inicia bucle for con uno menos de cada numero proporcionado
    //Decrementa i una vez despues de cada iteracion.
  for (var i = num - 1; i >= 1; i--) {
    num *=i //Guardamos el valor de num en cada iteracion
  }
  return num;
}

console.log(factor(5));
console.log(factor(10));
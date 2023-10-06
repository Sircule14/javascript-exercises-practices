// Declarar un objeto para almacenar los registros de peso
const registroDePeso = {
  semanas: [],
  pesos: [],
};

// Función para agregar un nuevo registro de peso
function agregarRegistro(semana, peso) { //Utilizams metodo push para empujar los vlores al arrey registroDePeso
  registroDePeso.semanas.push(semana);
  registroDePeso.pesos.push(peso);
}

// Función para calcular la pérdida de peso semanal y el promedio de pérdida de peso
function calcularPerdidaDePesoSemanal() {
  if (registroDePeso.semanas.length < 2) { //le decimos que si en registroDePeso no existen mas de 2 semanas arroje el return (no se podria calcular)
    return "No hay suficientes registros para calcular la pérdida de peso semanal.";
  }

  const totalSemanas = registroDePeso.semanas.length; // registramos total de semanas con el numero de semanas calculando con el metodo .lenght
  const perdidaDePesoSemanal = []; // array con perdidade peso semana inicializado
  let totalPerdidaDePeso = 0; // inicializamos perdida de peso tambien 

  for (let i = 1; i < totalSemanas; i++) {  /*bucle for para iterar, le damos valor a i de 1 (porque empieza a contar desde la segunda semana)
    despues le decimos que itere mientras i sea menor que totalSemanas y al final que agregue uno con i++  para avanzar por semana*/
    const perdidaSemanal = registroDePeso.pesos[i - 1] - registroDePeso.pesos[i]; // calculamos la perdida semanal, restando la primera semana con la segunda
    perdidaDePesoSemanal.push(perdidaSemanal); // Guardamos la perdida semanal
    totalPerdidaDePeso += perdidaSemanal; //aqui sumamosa la perdida semanal al total de perdida de peso
  }

  const promedioPerdidaSemanal = totalPerdidaDePeso / (totalSemanas - 1); /*aqui le decimos que el promedio es igual a el total de perdida de peso entre las semana
  - 1 porque la primera semana no cuenta*/
  return {
    perdidaDePesoSemanal,
    promedioPerdidaSemanal: promedioPerdidaSemanal.toFixed(2), //usamos to fixed para redondear resultado
  };
}

//Registro de primeras semanas
agregarRegistro(1, 100);
agregarRegistro(2, 98);
agregarRegistro(3, 97);
agregarRegistro(4, 95.80);

const resultado = calcularPerdidaDePesoSemanal();

console.log("Pérdida de peso semanal:", resultado.perdidaDePesoSemanal + " kgs");
console.log("Promedio de pérdida de peso por semana:", resultado.promedioPerdidaSemanal + " kgs");


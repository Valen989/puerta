/*
"Ah, pero esto no termina acá" - dijo Ana - "Quiero saber en cuántos meses 
hubo ganancia, es decir, que el saldo fue mayor a cero".
Completá la función cantidadDeMesesConGanancia() para dar solución al desafío
*/

let gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];

let gananciasPrimerTrimestre = [80, 453, 1000];

function cantidadDeMesesConGanancia(unPeriodo) {
  let sumatoria = 0;
  for (let i = 0; i < unPeriodo.length; i++) {
    if (unPeriodo[i] > 0) {
      sumatoria++;
    }
  }
  return sumatoria;
}

let cantidadMes = cantidadDeMesesConGanancia(gananciasPrimerTrimestre)


let cantidadMes2 = cantidadDeMesesConGanancia(gananciasUltimoSemestre)

console.log(cantidadMes, cantidadMes2);
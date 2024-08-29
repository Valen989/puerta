/*
Ana, viendo que somos tan productivos, nos pidió algo más: ahora quiere saber 
en cuántos meses de un período hubo pérdida.

Decimos que hay pérdida en un período cuando el saldo es menor a cero.

Escribí la función cantidadDeMesesConPerdida(). La estructura de la función 
es parecida a las que venimos haciendo, ¡animate!
*/


let gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];

let gananciasPrimerTrimestre = [80, 453, 1000];

function cantidadDeMesesConGanancia(unPeriodo) {
    let contador = 0 
    for (let i = 0; i < unPeriodo.length; i++) {
        if (unPeriodo > 0) {
            contador++
        }
        
    }
    return contador 
}


let resultado = cantidadDeMesesConGanancia(gananciasPrimerTrimestre)


console.log(resultado);
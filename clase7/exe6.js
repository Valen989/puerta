/*
Ya sobre la hora, Ana nos dejó con un problema más interesante: quiere saber 
los saldos de los meses que hubo ganancia. Por ejemplo:
*/

saldosDeMesesConGanancia([100, 20, 0, -10, 10]) //[100, 20, 10]

/*

Creá la función saldosDeMesesConGanancia(). Seguramente tiene una estructura 
similar a los problemas anteriores, pero, ¡ojo! esta función tiene que devolver
un array.
*/

let gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];

let gananciasPrimerTrimestre = [80, 453, 1000];



function saldosDeMesesConGanancia(unPeriodo) {
    let mesesGanancia = []
    for (let i = 0; i < unPeriodo.length; i++) {
        if (unPeriodo[i] > 0) {
            mesesGanancia.push(unPeriodo[i])
        }
    }
    return mesesGanancia
}


let resultado = saldosDeMesesConGanancia(gananciasUltimoSemestre)
console.log(resultado);


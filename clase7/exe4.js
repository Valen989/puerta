/*
Ana, contadora de una conocida empresa, guarda las ganancias de cada mes en 
un array. Por ejemplo, para el último semestre del año pasado registró las 
siguientes:
*/

let gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0]; //En Julio ganó $50, en Agosto perdió $12, etc

/*
Y nos pregunta recientemente: "¿puedo saber la ganancia de todo un semestre?"
"Obvio", dijimos, y escribimos el siguiente código:
*/

function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre[1] +
        unSemestre[2] + unSemestre[3] +
        unSemestre[4] + unSemestre[5];
}




/*
Y nos preguntó: "¿Podría usar esta función que me dieron para calcular las 
ganancias del primer trimestre?" Por ejemplo, para calcular lo siguiente:
*/

var gananciasPrimerTrimestre = [80, 453, 1000]; //En Enero la empresa ganó $80, en Febrero, $453, en Marzo $1000

/*
Y nos quedamos pensando. ¿Tiene algún problema la función 
sumatoriaGananciasSemestre() que escribimos anteriormente? 
¿Funcionará con trimestres? ¿Y con cuatrimestres?

¡Probala en la consola realizando distintas impresiones por pantalla!
*/



function calcularGanancias(periodo = []) {
   
   let totalGanancias = 0
   
    for (let i = 0; i < periodo.length; i++) {
        totalGanancias = totalGanancias + periodo[i]
    }
    return totalGanancias

}


let resultado = calcularGanancias(gananciasPrimerTrimestre)


console.log(resultado);
const process = require ("process")


const calculadora = require('.operaciones/calculadora.js')


function calcular(a,b,operacion) {
    switch (operacion) {
        case "sumar":
            return sumar (a,b)
        case "restar":
            return restar (a,b)
        case "multiplicar":
            return multiplicar (a,b)
        case "dividir":
            return dividir (a,b)
        default:
            return "operacion no valida"
            break;
    }
}


let resultado = calcular(numeroA,numeroB,operacion)

console.log(resultado);
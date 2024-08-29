

module.exports = {
    
let suma = (a,b) => a + b ;
let resta = (a,b ) => a - b;
let multiplicar = (a,b) => a * b;
let dividir = (a,b) => a / b;


let operacion = process.argv[2];

let numeroA = +process.argv[3];

let numeroB = +process.argv[4];

}



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

/*
Nuestra tarea es completar la función noParesDeContarImparesHasta. 
Esta función recibe un número X por parámetro y cuenta la cantidad de números 
impares que hay desde el número 0 hasta el número que la función recibe por
parámetro (inclusive) y luego retorna ese valor.
*/

function noParesDeContarImparesHasta(numero) {
 let resultado = 0
    for (let i = 0; i <= numero; i++) {
    if (i % 2 != 0) {
        resultado++
       }
        
}
return resultado
}
console.log(noParesDeContarImparesHasta(9));



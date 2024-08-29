/* 
Arrow function con dos parámetros.

Necesita de los paréntesis. Puede llevar un return implícito.

*/



function sumarTradicional(a, b) {
    return a + b
}

let sumar = (a, b) => a + b

console.log(sumarTradicional(2,5));
console.log(sumar(2,5));
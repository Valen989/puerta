/*
Declara a la función triple, la cual triplique el valor pasado por parámetro 
y nos devuelva su resultado. Luego ejecuta la función, pasándole como argumento
el número 3, mostrando por consola lo que retorna.
*/


function funcionTriple(numero1) {
    return numero1 * 3
}

//console.log(funcionTriple(3));

/*
Declará una función llamada tripleDeLaSuma() que reciba dos parámetros. 
Luego tiene que sumar ambos y devolvernos el triple del valor del resultado 
de sumar ambos parámetros. 
Para ello debes usar la función triple que hiciste en el ejercicio anterior.
*/

function funcionTripleDeLaSuma(numeroA,numeroB) {
    let resultadoDeLaSuma = numeroA + numeroB
    return funcionTriple (resultadoDeLaSuma)
}
console.log(funcionTripleDeLaSuma(2,5));
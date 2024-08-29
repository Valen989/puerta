/* 
Teniendo funciones pequeñas, podemos combinarlas para hacer cosas más complejas. 
Es decir, podemos llamar y ejecutar una función dentro de otra.

Por ejemplo, si queremos sumar dos números y después multiplicarlos por 3, 
podríamos hacerlo de la siguiente forma:

PASO 1. Crear la función sumar, que reciba dos parámetros (n1 y n2)

PASO 2. Hacer que la función sumar retorne la suma de los parámetros

PASO 3. Crear la función tripleDeLaSuma, que reciba dos parámetros (n3 y n4)

PASO 4. Guardar en una variable llamada resultadoDeLaSuma el resultado de la ejecución de la función sumar, pasándole como argumento los parámetros n3 y n4

PASO 5. Hacer que la función tripleDeLaSuma retorne el triple del valor de la variable resultadoDeLaSuma
*/


function sumar(n1,n2) {
    return n1 + n2
}

function tripleDeLaSuma(n3,n4) {
    let resultadoDeLaSuma = sumar(n3, n4)

    return resultadoDeLaSuma * 3
}

console.log(tripleDeLaSuma(2,3));


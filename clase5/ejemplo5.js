/* 
Arrow function con un único parámetro.

No necesitamos los paréntesis para indicarlo. Puede llevar un return implícito.

*/


function saludarTradicional(nombre) {
    return "hola " + nombre
}

let saludar = nombre => "hola " + nombre


console.log(saludar("Jorge"));
console.log(saludarTradicional("Alberto"));
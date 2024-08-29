/* 

Arrow function sin parámetros.

Requiere de los paréntesis para iniciarse.
Al tener una sola línea de código, y que esta misma sea la que queremos 
retornar, el return queda implícito.

*/


function saludarTradicional(params) {
    return "Hola! (tradicional)"
}


let saludar = () => "Hola!";


console.log(saludarTradicional());
console.log(saludar());
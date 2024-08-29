function suma(a, b) {
    return a + b;
    }
    // Función que realiza una operación matemática
    function calcular(a, b, operacion) {
    return operacion(a, b);
    }
    // Uso de la función calcular
    let resultado = calcular(3, 5, suma);
   
   
    console.log(resultado); // => 8

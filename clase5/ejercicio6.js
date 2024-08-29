/*
El objetivo de este ejercicio es imprimir en consola un texto que irá variando
según el día que reciba la función saludoDelDia como argumento. 
Utilizando un switch queremos que devuelva 'buen finde', si el día es viernes;
'buena semana', si el día es lunes y 'buen día' si es cualquier otro día
*/

function saludoDelDia(dia) {
    switch (dia.toLowerCase()) {
        case "lunes":
            mensaje = "Buena Semana"
            break;
        case "viernes":
            mensaje = "Buen finde"
        default:
            mensaje = "Buen dia"
            break;
    }
}

console.log(saludoDelDia(Lunes));
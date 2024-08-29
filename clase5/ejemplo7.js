/* 
Arrow function con un parámetro y un return explícito.

Puede llevar o no, uno o más parámetros. En este caso hacemos uso de las 
llaves y del return ya que la lógica de esta función se desarrolla en más 
de una línea de código.

*/


function estadoDelSemaforo(color) {
    switch (color) {
    case "rojo":
        mensaje = "para"
        break;
    case "amarillo":
        mensaje = "precaucion"
        break;
    case "verde":
        mensaje = "avanza"
        break;
    default: 
        mensaje = "el semaforo no funciona"
        break;
   }    

   return mensaje
}

console.log(estadoDelSemaforo("verde"));




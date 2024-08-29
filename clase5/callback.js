/* 
PASO 1. 
Definimos la función nombreCompleto(). 
Esta se encarga de unir con un espacio un nombre y un apellido. 
Nos devuelve un string.

PASO 2. 
Definimos la función saludar().
Esta recibe un nombre, un apellido y un callback como parámetros.
Este último será la función que vamos a querer ejecutar internamente.

PASO 3.
Lo que queremos devolver es un string completo.
La primera parte la tenemos en el return: '¡Hola (…) !.
El resto (…) vendrá de lo que nos retorne el callback en el momento en el 
que se ejecute.

PASO 4.
Ejecutamos la función saludar, le pasamos como parámetros un nombre, 
un apellido y la función nombreCompleto().
Primero se ejecutará el callback, que va a devolver el nombre completo y
luego se ejecutará la función saludar(), que va a devolver el saludo completo.

*/

function nombreCompleto(nombre,apellido) {
    return `${nombre} ${apellido}`
}

function saludar(nombre, apellido, callback) {
    return `¡Hola ${callback(nombre, apellido)}!`
}


function obtenerIniciales(nombre, apellido) {
    return nombre.charAt() + apellido.charAt()
}

//console.log(obtenerIniciales("Valentino", "Parma"));

console.log(saludar("Valentino", "Parma",nombreCompleto));


function dameCinco(params) {
    return [1,2,3,4,5];
}

function multiplicarPorDos() {
    return 123 * 2 ;
}


function mostrarNombre() {
    return "Mi nombre es Hernán";
}


let dameCinco2 = () => [1,2,3,4,5];

let multiplicarPorDos2 = () => 123 * 2;

let mostrarNombre2 = () => "Mi nombre es hernan";

console.log(dameCinco2(), multiplicarPorDos2(), mostrarNombre2());



/*
Ahora nuestro trabajo será
refactorizar la función saludar()
que recibe un parámetro, es decir,
escribirla con la sintaxis necesaria
para convertirla en una arrow
function.
function saludar(nombre) {
return 'Hola, ' + nombre + '!';
}
*/


let saludar = nombre => 'hola, ' + nombre + '!';


console.log(saludar());


/*
Solo nos falta practicar la sintaxis de
una arrow function que reciba más de
un parámetro. Tomemos la función
saludar(), que esta vez recibe un
nombre y un apellido, y veamos de
convertirla en una arrow function.
function saludar(nombre, apellido) {
return `Hola, ${nombre} ${apellido}!`;
}
*/

let saludar2 = (nombre, apellido) => `hola, ${nombre} ${apellido}!`;



console.log(saludar2("Valentino","Parma"));
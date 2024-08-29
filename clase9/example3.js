/*
Vamos a ver cómo crear nuestra funcion constructora Perro y crear
dos instancias con los siguientes datos:
nombres: Pluto y Snoopy, edades 94, 74 y vacunado true y false
*/


function Perro(nombre = "", edad = Number, vacunado = Boolean) {
    this.nombre = nombre;
    this.edad = edad;
    this.vacunado = vacunado;
}


let perro1 = new Perro("Pluto", 94, true)

let perro2 = new Perro("Snoopy", 74, false)

console.log(perro1);


console.log(perro2);


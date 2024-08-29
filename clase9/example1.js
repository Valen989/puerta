/*
Vamos a ver cómo crear nuestro objeto "perro":
	Declarar una variable llamada perro de tipo objeto literal.
  Esa variable debe tener 3 propiedades:

    1. nombre, con un valor de tipo String.
    2. edad, con un valor de tipo Number.
    3. vacunado, con un valor de tipo Boolean.
*/


let perro = {
    nombre : "Roco",
    edad : 5,
    vacunado : false

}


console.log(perro);

console.log(`Mi perro se llama ${perro.nombre} `);


console.log(`Mi perro tiene ${perro["edad"]} años`);




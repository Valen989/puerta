let auto = {marca: 'Ford', anio: 1998};

console.log(auto);

let marcaAuto = auto.marca;
console.log(marcaAuto);


let {marca,anio,modelo} = auto;

console.log(marca,anio);

console.log(modelo);


let persona = {
    nombre : "Cristian",
    edad : 18,
    faltas : 34

}

let {nombre, faltas} = persona; // no necesito respetar el orden, solo el nombre de las propiedades

console.log(nombre,faltas);



let yoPersona = {
    nombre : "Eric",
    edad : 23,
    faltas : 0
}

let {edad} = persona;
let {edad : miEdad} = yoPersona //como coinciden el nombre de las propiedades, creo un alias para la segunda de ellas

console.log(edad, miEdad);


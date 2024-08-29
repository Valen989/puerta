// .unshift() -> Agrega uno o varios elementos al principio de un array.

let marcas = ['Audi'];

// agregar la marca 'Ford';
let nuevaCantidadElementos = marcas.unshift("Ford")

console.log(nuevaCantidadElementos);
console.log(marcas);

// agregar las marcas 'Ferrari' y 'BMW';

nuevaCantidadElementos = marcas.unshift("Ferrari", "BMW")

console.log(nuevaCantidadElementos);
console.log(marcas);
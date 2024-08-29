// .indexOf() -> Busca, en el string, el string que recibe como parámetro.

let saludo = '¡Hola! Estamos programando';

// buscar 'Estamos'
console.log(saludo.indexOf('Estamos')); // 7
console.log(saludo.toLowerCase().indexOf('estamos')); // 7

// buscar 'vamos'
console.log(saludo.indexOf('vamos')); // -1

// buscar 'o'
console.log(saludo.indexOf('o')); // 2
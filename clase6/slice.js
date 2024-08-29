// .slice() -> Corta el string y devuelve una parte del string donde se aplica.

let frase = 'Breaking Bad Rules!';

// aplicar el método .splice() marcando como inicio 9 y final 12

// aplicar el método .splice() marcando solo el inicio: 13

// aplicar el método .splice() marcando solo el inicio: -10


console.log(frase.slice(9,12)); //no incluye el 12 solo muestra desde 9 a 11

console.log(frase.slice(13)); //devuelve desde el 13 hasta el final

console.log(frase.slice(-10));
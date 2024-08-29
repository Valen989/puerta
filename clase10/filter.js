const edades = [22, 8, 17, 14, 30];

const mayores = edades.filter(function(edad){
   return edad > 18;
});

console.log(mayores); // [22, 30]


const mayores2 = edades.filter(edad => edad > 18)


console.log(mayores2);


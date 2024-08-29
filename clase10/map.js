const numeros = [2, 4, 6];

const elDoble = numeros.map(function(num){
    // Multiplicamos por 2 cada número
    return num * 2;
});

console.log(elDoble); // [4,8,12]


console.log(numeros); //no se modifico el array original


const elDobleDeManual = []

for (let i = 0; i < numeros.length; i++) {
    elDobleDeManual.push(numeros[i] * 2)
    
}


console.log(elDobleDeManual);

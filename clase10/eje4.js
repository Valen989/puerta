/*
Para este ejercicio tenemos el array listaDeSupermercado. Nuestro trabajo será 
mostrar cada ítem de esa lista por consola utilizando un foreach.
*/

const listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach((elemento, indice) => {
    console.log(`${indice +1 }. - ${elemento}`);
    
})
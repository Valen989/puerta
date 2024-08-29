const frutas= ['Pera', 'Cereza', 'Uva'];

const otrasFrutas = frutas.forEach(function(fruta, index){
   index > 0 && console.log(`${index +1}. -${fruta}`);
   return fruta
});


console.log(otrasFrutas);

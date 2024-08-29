const numeros = [5, 7, 16];

const suma = numeros.reduce(function(acum, num){
	console.log("acum:".acum,"num",num);
       
    
    return acum + num;
},0);

console.log(suma); // 28
/*
Usando el objeto `estudiante`, accede a la propiedad `calle` que se espera esté 
dentro de la propiedad `direccion`, pero de tal manera que no se lance ningún 
error si la propiedad no existe. Para esto, utiliza el operador de 
encadenamiento opcional (`?.`).
El acceso a la propiedad calle debería ser la siguiente:
`estudiante.direccion.calle`
*/



let estudiante = {
    nombre : "Maria",
    direccion : {
        calle : "Siempre Viva",
        altura :1234,
        ciudad : "Springfield"

    }
}

console.log(estudiante);

console.log(estudiante.direccion.calle);

let estudiante2 = {
    nombre : "Marta",
}




console.log(estudiante2);

console.log(estudiante2.direccion?.altura);




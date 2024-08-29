/*
Escribí una función longitudNombreCompleto que tome un nombre y un apellido 
como parametros y devuelva su longitud total.
Por ejemplo, cuando ejecutamos: 

	longitudNombreCompleto("Cosme", "Fulanito")
	
debe devolver 14, porque CosmeFulanito tiene 14 caracteres.
*/

function longitudNombreCompleto(nombre, apellido) {
    return nombre.length + apellido.length
}

console.log(longitudNombreCompleto("Eric", "Mena"));
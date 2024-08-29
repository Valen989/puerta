

function totalAPagar(tipoDeHamburguesa,Jamon,Queso,SalsaDeTomate,Mayonesa,Mostaza,Tomate,Lechuga,Cebolla) {


    if (tipoDeHamburguesa == "CarneALaParrilla") {
         precio = 1800
    }
    else if (tipoDeHamburguesa == "Pollo") {
         precio = 1500
    }
    
    else if (tipoDeHamburguesa == "Vegetariana") {
        precio = 1200
    }
    else {
         "error"
    }

    if (Jamon === true) {
         precio += 30
    }

    if (Queso === true){
         precio += 25
    }
    if (SalsaDeTomate === true) {
         precio += 5
    }
    if (Mayonesa === true) {
         precio += 5
    }
    if (Mostaza === true) {
         precio += 5
    }
    if (Tomate === true) {
         precio += 15
    }
    if (Lechuga === true) {
         precio += 10
    }
    if (Cebolla === true) {
         precio += 10
    }

return precio

}

function final(nombre,apellido,totalAPagar) {
 
    return `Estimado ${nombre} ${apellido} el monto total a pagar es de: ${totalAPagar("Vegetariana", true, false, true, false, true, false, true, false)}`
}


let mensaje = final( "Valentino", "Parma",totalAPagar)

console.log(mensaje);

/*
Vamos a reforzar el concepto de un objeto literal tratando de representar un deportista y pedirle que entrene.

    Para este ejercicio contamos con un objeto literal deportista ya definido, 
    que tiene los siguientes atributos: nombre, energia, experiencia.

    Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo
    va a ser completar la función entrenarHoras.
    
    let deportista = {
					energia: 100,
			    experiencia: 10,
			    nombre: "Aimar",
			    entrenarHoras: ???
			};

    El metodo entrenarHoras tiene las siguientes tres características:

        Recibe por parámetro la cantidad de horas.
        Resta a su energía la cantidad de horas x 5.
        Incrementa su experiencia la cantidad de horas x 2.

    Una vez definida la función, podemos ejecutar el código y ver cómo va 
    variando la energía y experiencia del deportista por consola.
    
    console.log("==Antes de comenzar entrenamiento==");
		console.log("Deportista energia: " + deportista.energia);
		console.log("Deportista experiencia: " + deportista.experiencia);
		console.log("==ENTRENANDO==");
		deportista.entrenarHoras(5);
		console.log("==FIN ENTRENAMIENTO==");
		console.log("Deportista energia: " + deportista.energia);
		console.log("Deportista experiencia: " + deportista.experiencia);
*/


let deportista = {
    energia: 100,
experiencia: 10,
nombre: "Aimar",
entrenarHoras: function(cantHoras) {
    this.energia = this.energia - (cantHoras * 5)
    this.experiencia = this.experiencia + (cantHoras * 2) 
    
 
}
};






console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(20);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);
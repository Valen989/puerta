/*
Crea un objeto llamado "estudiante" con la siguiente estructura de propiedades 
y valores:

- nombre: "Marta"
- apellido: "Silva"
- edad: 22
- carrera: "Ingeniería en Computación"
- promedio: 9.1

Luego, añádele un método dentro del objeto "estudiante" llamado "presentacion" 
que, al ser llamado, imprima en consola: "Hola, mi nombre es `Marta` `Silva` y 
estudio `Ingeniería de Computación`.
*/

let estudiante = {
    nombre : "Marta",
    apellido : "Silva",
    edad : 22,
    carrera : "Ingenieria en computacion",
    promedio : 9.1,
    presentacion : function() {
        return `Hola, mi nombre es ${this.nombre} ${this.apellido} y  estudio ${this.carrera}`
    }
}

console.log(estudiante.presentacion());

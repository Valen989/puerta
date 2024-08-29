/*
Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail 
a los alumnos desaprobados para acordar un recuperatorio. Por lo tanto, 
necesitamos dos listas: una lista que almacene todos los aprobados y otra los 
desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados 
respectivamente.
*/

const estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]




const aprobados = estudiantes.filter((estudiante) => {
    if (estudiante.aprobado === true) {
        return estudiante
    }
    else {

    }

})

const aprobados2 = estudiantes.filter(estudiante => estudiante.aprobado)

const desaprobados = estudiantes.filter(estudiante => !estudiante.aprobado)

console.log(aprobados);

console.log(desaprobados);


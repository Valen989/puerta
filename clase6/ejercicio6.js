/*
Tenemos la tarea de reintegrar a dos estudiantes que se habían registrado 
al principio de todo, se dieron de baja, ¡pero volvieron! Y para que no 
pierdan su lugar privilegiado queremos, utilizando un método de array, 
agregar al inicio del mismo a cada estudiante (de a uno a la vez).

Los datos que hay que agregar de cada uno son:

nombre: "Mariana",
promedio: 9,
curso: "Full Stack"

nombre: "Francisco",
promedio: 2,
curso: "Android"
*/

let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android",
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack",
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS",
    },
    {
      nombre: "Juan",
      promedio: 5,
      curso: "iOS",
    },
    {
      nombre: "Miguel",
      promedio: 2,
      curso: "Android",
    },
  ];

  estudiantes.unshift(
    {nombre: "Mariana",
     promedio: 9,
     curso: "Full Stack"
    }
)

estudiantes.unshift(
    {nombre: "Francisco",
        promedio: 2,
        curso: "Android"
    }
)

console.log(estudiantes);
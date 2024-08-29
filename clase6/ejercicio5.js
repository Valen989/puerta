/*
Tenemos que dar de baja al primer estudiante y queremos sacarlo del 
array estudiantes. Para eso, debemos crear una variable llamada 
alumnoDeBaja y, utilizando un método de array, almacenar en ella a ese 
primer estudiante.
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
  
  let alumnoDeBaja = estudiantes.shift();

  console.log(estudiantes);

  console.log(alumnoDeBaja);
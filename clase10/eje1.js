/*
Nos dejaron una lista con los horarios de partida de algunos aviones. 
Esta lista se reproduce directamente en las pantallas del aeropuerto y, a modo de 
travesura, queremos adelantar una hora cada partida. Nuestro trabajo será utilizar 
el método map para poder lograrlo y almacenar la lista en una variable nueva llamada 
horariosAtrasados..
*/

const horariosPartida = [12, 14, 18, 21];


const horariosAtrasados = horariosPartida.map((horario) => {
    return horario -1
})


console.log(horariosAtrasados);

//horariosPartida = horariosAtrasados; error porque es otra estructura de array


console.log(horariosPartida);

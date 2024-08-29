let mensaje = "";
if (4 > 10){

    menasje = "4 es mayor que 10";
}
else {
    mensaje = "10 es mayor que 4";
}

console.log(mensaje);


let mensaje2 = 4 > 10 ? "4 es mayor que 10" : "10 es mayor que 4"


console.log('con if ternario', mensaje2);

let diaDeSemana = "Domingo";

let mensaje3 = diaDeSemana == "Domingo"  ? "Descanso" /* primer if*/ : diaDeSemana == "Sabado" ?  "Trabajo medio dia" /*el else if */: "Todavia tengo que trabajar" /*else*/

console.log(mensaje3);




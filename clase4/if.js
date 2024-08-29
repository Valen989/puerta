console.log("Ejemplo del condicional if");
/* 
PASO 1
Declaramos la variable edad y le asignamos el número 19.
*/


let edad = 45;


/*
PASO 2
Declaramos la variable acceso y le asignamos un string vacío,
con la intención de asignarle un nuevo valor según el resultado corresponda.
*/


let acceso = "";


/*
PASO 3
Iniciamos el condicional. Nuestra primera condición evalúa si edad es menor a 16.
*/
if (edad < 16) {

/*
En caso de ser verdadera, le asignamos el string 'prohibido' a la variable acceso.
*/

   acceso = "prohibido";


}
/*
PASO 4
Agregamos un bloque else if para contemplar una segunda condición: 
*/
else if (edad >= 16 && edad <= 17){

/*
Esta condición va a ser compuesta y va a requerir:
- que edad sea mayor o igual a 16
- que edad sea menor o igual a 18

En caso de ser verdadera, le asignamos el string 'permitido sólo acompañado de un 
mayor' a la variable acceso.
*/

acceso = "permitido solo acompañado de un mayor";



}
/*
PASO 5
Agregamos bloque else para que si ninguna de las condiciones anteriores es verdadera, 
se ejecute el código que contenga dicho bloque.

Asignamos a la variable acceso el string 'permitido'.

*/
else{
    acceso = "permitido";
}
console.log(acceso);
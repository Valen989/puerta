/*
El objetivo de este ejercicio es imprimir en pantalla un texto que estará 
condicionado de la siguiente manera. Utilizando switch deberemos evaluar 
si el parámetro "día" es martes o jueves; y, en ese caso, debe imprimir el 
texto "tenés clases". 
Para cualquier otro caso debe imprimir "no tenés clases".
*/


function tengoClases(dia) {
    switch (dia) {
        case martes:
        case jueves:
         return "Tenes clases"
        default:
            break;
    }
}
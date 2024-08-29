/*
Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.

La primera función se llamará doble. Esta recibirá un número y retornará 
el doble.

La segunda función se llamará triple. Esta recibirá un número y retornará 
el triple.

La tercera función se llamará aplicarCallback y recibirá por parámetro 
un numero y una función. Esta retornará el valor de aplicar dicha función 
al valor que recibió.

Ejemplo:

aplicarCallBack(2, doble); // 4
aplicarCallBack(4, triple); // 12
*/

function doble(numero1) {
    return numero1 * 2
}

function triple(numero1) {
    return numero1 * 3
}

function aplicarCallBack(numero1,funcion) {
    return funcion(numero1)
}

console.log(aplicarCallBack(9,doble),aplicarCallBack(9,triple));

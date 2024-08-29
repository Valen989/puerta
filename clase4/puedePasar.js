let edad = 15;
let acceso = "";
switch (true){
    case edad < 16: 
    acceso = "prohibido"
    break;
    case edad >=16 && edad <18 :
        acceso = "acompañado"
default:
    acceso = "permitido"
    break;    
}
console.log(acceso);
function Auto(marca = "",modelo ) {
    this.marca = marca;
    this.modelo = modelo;
}


let autoUno = new Auto();
let autoDos = new Auto("Ford");
let miAuto = new Auto("Renault", "Kangoo");



console.log(miAuto);
console.log(autoDos);
console.log(autoUno);
console.log(miAuto.marca, miAuto.modelo);




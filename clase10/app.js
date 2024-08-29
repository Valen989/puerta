const fs = require('fs') //modulo nativo de node file

const miObjeto = require('./objeto.js') //requiriendo




const objetoJSON = fs.readFileSync('./objetoJSON.json','utf-8') //leyendo un archivo JSON


const arrayJSON = fs.readFileSync('./arrayJSON.json', 'utf-8')
const arrayJSONParseado = JSON.parse(arrayJSON)


console.log(arrayJSONParseado);


console.log(miObjeto); //object

console.log(objetoJSON); //string


const JSONParseado = JSON.parse(objetoJSON)

console.log(objetoJSON);

console.log(JSONParseado);

JSONParseado.texto = "El texto ha sido modificado"

console.log(JSONParseado.texto);


const objetoStringificado = JSON.stringify(JSONParseado,null,2)

console.log(objetoStringificado);

fs.writeFileSync('./objetoJSON.json',objetoStringificado,'utf-8')

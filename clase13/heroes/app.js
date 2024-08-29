/*● / -> Debe direccionar al recurso index.html.● 
/babbage -> Debe direccionar al recurso babbage.html● 
/berners-lee -> Debe direccionar al recurso berners-lee.html.● 
/clarke -> Debe direccionar al recurso clarke.html.● 
/hamilton -> Debe direccionar al recurso hamilton.html.● 
/hopper -> Debe direccionar al recurso hopper.html.● 
/lovelace -> Debe direccionar al recurso lovelace.html.●
 /turing-> Debe direccionar al recurso turing.htm

*/

const express = require('express');
const path = require('path');
//console.log(express)
const app = express();
//console.log(app);

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views','index.html')));



app.get('/babage',(req,res) => res.sendFile(path.join(__dirname, 'views','babbage.html')))
app.get('/clarke',(req,res) => res.sendFile(path.join(__dirname, 'views','clarke.html')))
app.get('/berners-lee',(req,res) => res.sendFile(path.join(__dirname, 'views','berners-lee.html')))
app.get('/hamilton',(req,res) => res.sendFile(path.join(__dirname, 'views','hamilton.html')))
app.get('/hopper',(req,res) => res.sendFile(path.join(__dirname, 'views','hopper.html')))
app.get('/lovelace',(req,res) => res.sendFile(path.join(__dirname, 'views','lovelace.html')))
app.get('/turing',(req,res) => res.sendFile(path.join(__dirname, 'views','turing.htm')))



app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'))





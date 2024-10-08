//Require del proyecto
//const fs = require("node:fs");
const translate = require('node-google-translate-skidz');
const path = require('path');

//URLs


//Usando Express
const express = require("express");
const app = express();


//Carga de archivos publicos
app.get("/background_MET.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'background_MET.jpg'));
});
//Carga index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
//Carga app.js
app.get("/app.js", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'app.js'));
});
//Carga style.css
app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'style.css'));
});

//Funciones del server
app.get("/translate/:clave", (req, res) => {
    //const obj = {};
    translate({
        text: req.params.clave,
        source: 'en',
        target: 'es'
    }, result =>
        res.send(result.translation)
    );
    //res.send("Recibido->"+req.params.clave);
});

app.get("/hola", (req, res) => {
    res.send("Qué tal?? - dirname:"+__dirname+"/../public");
});

//Activamos el puerto 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


module.exports = app;
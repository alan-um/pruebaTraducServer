//Require del proyecto
//const fs = require("node:fs");
const translate = require('node-google-translate-skidz');

//URLs


//Usando Express
const express = require("express");
const app = express();


//Carga de archivos publicos
app.get("/background_MET.jpg", (req, res) => {
    res.sendFile(__dirname + "/background_MET.jpg"
    )
});
//Carga index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
//Carga app.js
app.get("/app.js", (req, res) => {
    res.sendFile(__dirname + "/app.js");
});
//Carga style.css
app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/style.css");
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
});

//Activamos el puerto 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
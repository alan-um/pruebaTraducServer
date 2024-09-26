const { response } = require("express");

function traducirClave() {
    document.getElementById("formu").noValidate = true;

    let clave = document.getElementById("clave").value;

    axios(`/translate/${clave}`)
        .then(response => {
            let html = `<h5>Esta es su traduccion:</h5>
                        <h2>${response.data}</h2>`;
            document.getElementById("respuesta").innerHTML = html;
        })
    return false;
}
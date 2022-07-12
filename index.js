//Declarar variables del formulario
let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nom");
let telefono = document.getElementById("tel");
let direccion = document.getElementById("dir");
let mail = document.getElementById("mail")

let contactos = []

class Contacto {
    constructor(nombre, telefono, direccion, mail) {
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
        this.mail = mail
    }
}

formulario.onsubmit = (e) => formularioValido(e);

function formularioValido(e) {
    e.preventDefault();

    let nomForm = nombre.value;
    let telForm = telefono.value;
    let dirForm = direccion.value;
    let mailForm = mail.value;

    //Contruir contacto
    let contacto = new Contacto (nomForm, telForm, dirForm, mailForm);
    
    //Limpiar formulario
    formulario.reset();

    //Agregar contacto al array
    contactos.push(contacto)
    console.log(contactos)
}

function saludar() {
    let nomForm = nombre.value;
    alert("Hola " + nomForm + " !")
}
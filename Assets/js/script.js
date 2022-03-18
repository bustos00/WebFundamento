/*
Case Sensitive= reconhece letras maisculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: queryselector() */

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false /* valor boolean*/
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
       txtNome.innerHTML = "Nome Invalido"
       txtNome.style.color = "red"
    } else{
        txtNome.innerHTML ="Nome Valido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Invalido"
        txtEmail.style.color = "red"
    } else{
        txtEmail.innerHTML = "E-mail Valido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 150) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 150 caracteres"
        txtAssunto.style.color = "red"
         txtAssunto.style.display = "block"
    } else{
        txtAssunto.style.display = "none"
        ssuntoOk = true
       /* outra forma defazer:
        textAssunto.innerHTML = "Texto Válido"
        textAssunto.style.color = "green" */
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!!")
    } else {
        alert("Preencha o formulário corectamente antes de enviar..")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}
"use strict";
function generarCaptcha(){
let codigo = (Math.floor(Math.random() * 100000)+1);
document.querySelector("#captcha").innerHTML = codigo;
}
let btnGenerarCaptcha = document.querySelector("#nuevo-captcha");
btnGenerarCaptcha.addEventListener('click', generarCaptcha);

function comprobarCaptcha() {
    let input = document.querySelector("#input").value;
   
    let captcha = document.querySelector("#captcha").innerHTML;
    

    if (captcha === input) {
        let info =document.querySelector(".info");
        info.innerHTML="Captcha valido";
    }
    else {
        let info =document.querySelector(".info");
        info.innerHTML="Captcha invalido";
        generarCaptcha();

    }


}


let btnComprobar = document.querySelector("#verificar");
btnComprobar.addEventListener('click', comprobarCaptcha);

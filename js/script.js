"use strict";

let btns = document.querySelectorAll('.boton');

for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(e){
    e.preventDefault();
    let el = this.nextElementSibling;
    el.classList.toggle("ver");
  });
}

let body = document.querySelector('body');
let nombre = document.querySelector('.nombre');
let btn = document.querySelector('#modo-brillante');
let textos = document.querySelectorAll('.parr');

function cambiarFondo(e){
  e.preventDefault();
  body.classList.toggle("body-claro");
  nombre.classList.toggle("nombre2");

  for(var i = 0; i < textos.length; i++) {
    textos[i].classList.toggle("parr-black");
    };
}

btn.addEventListener("click", cambiarFondo);
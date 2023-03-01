"use strict";

let btns = document.querySelectorAll('.boton');

for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(e){
    e.preventDefault();
    let el = this.nextElementSibling;
    el.classList.toggle("ver");
  });
}
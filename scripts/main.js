// Image switcher code
var miImage = document.querySelector('img');

miImage.onclick = function() {
    var miSrc = miImage.getAttribute('src');
    if(miSrc === 'images/nadador.jpg') {
      miImage.setAttribute ('src','images/nadador2.jpg');
    } else {
      miImage.setAttribute ('src','images/nadador.jpg');
    }
}


// Personalized welcome message code
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function seleccionnombre() {
    var miNombre = prompt('Por favor ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'A nadar... ' + miNombre;
}


if(!localStorage.getItem('nombre')) {
    seleccionnombre();
}
else {
    var storedName = localStorage.getItem('nombre');
    miTitulo.innerHTML = 'A nadar... ' + storedName;
}


miBoton.onclick = function() {
    seleccionnombre();
}

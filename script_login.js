let nombreUsuario = document.querySelector('.input__user');
let contraseña = document.querySelector('.input__password');
let user = 'john';
let password = '1234';
let login = document.querySelector('.container');
let modal = document.querySelector('.container__modal');


let imprimir = () => {
    
 if (nombreUsuario.value == user && contraseña.value == password) {
     window.location.href='buscador.html';
     sessionStorage.setItem('register','registrado');
 } else {
   login.style.display = 'none';
   modal.style.display = 'flex';
 }
}

let cerrarModal = () => {
    login.style.display = 'flex';
    modal.style.display = 'none';
}
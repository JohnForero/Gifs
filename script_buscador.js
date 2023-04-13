let login = document.querySelector('.logon')

let regresarLogin = () => {
    window.location.href='login.html';
}

document.querySelector('.input').addEventListener('keyup',(evento) =>{
    
    if (evento.keyCode == 13) {
        console.log(evento.target.value);
    } 
})
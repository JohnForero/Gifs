let login = document.querySelector('.logon')

let regresarLogin = () => {
    window.location.href = 'login.html';
    sessionStorage.removeItem('register');
}

document.querySelector('.input').addEventListener('keyup', (evento) => {

    if (evento.keyCode == 13) {
      if (evento.target.value.trim() != '') {
        gifs(evento.target.value.trim());
      } 
      evento.target.value = '';
    }
})

const url = 'https://api.giphy.com/v1/gifs/search';
const apiKey = '4ouRGWqnVUOS7BiDkvdc6N5i0Vvw9dhk';

let gifs = async (busqueda) => {
    let urlFinal = `${url}?api_key=${apiKey}&q=${busqueda}&limit=10`;
    try {
        let data = await fetch(urlFinal);
        let gifs = await data.json();
        crearTarjetas(gifs.data)
    } catch (error) {
        console.log(error);
    }
}

let containerCards = document.querySelector('.container__gifs');

let crearTarjetas = (gifs) => {
    let cards = '';
    gifs.forEach(gif => {

        cards +=
            `<div class="card__gif">
            <img src="${gif.images.downsized_medium.url}"
                alt="">
        </div>`
    });
    containerCards.innerHTML = cards;
}

let ingresa = () => {
    console.log('entra',sessionStorage.getItem('register'));
    sessionStorage.getItem('register');
    if (sessionStorage.getItem('register') == null) {
        window.location.href = 'login.html';
    }
}
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Beidou ❤️‍🔥')

// guardamos la API en una variable
const API = 'https://randomfox.ca/floof';

// obtenemos la app
const appNode = document.querySelector('#app');

// función para consultar api
async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
}

async function getImage(urlAPI) {
    const data = await fetchData(urlAPI);

    // crear imagen
    const image = document.createElement('img');
    image.src = await data.image;
    image.width = '320';
    image.className = 'mx-auto';

    // crear imgContainer
    const imgContainer = document.createElement('div');
    imgContainer.className = 'p-4';
    imgContainer.append(image);

    appNode.append(imgContainer);
}


// crear boton
const addImg = async ()=> {
    const txtBoton = document.createElement('span');
    txtBoton.textContent = 'Cargar imagen'
    txtBoton.className = 'relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'

    const boton = document.createElement('button');
    boton.className = 'relative inline-flex items-center justify-center mt-4 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
    boton.append(txtBoton);
    //Crear evento
    await boton.addEventListener('click', ()=>{getImage(API)});

    // agregar al padre
    appNode.append(boton);
}

addImg();
import { registerImage } from "./lazy";

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
    image.dataset.src = await data.image;
    image.width = '320';
    image.className = 'mx-auto';

    // crear imgContainer
    const imgContainer = document.createElement('div');
    imgContainer.className = 'p-4';
    imgContainer.append(image);

    registerImage(imgContainer);
    appNode.append(imgContainer);

}


// crear boton para agregar una imagen
const addImg = ()=> {
    const txtBoton = document.createElement('span');
    txtBoton.textContent = 'Cargar imagen'
    txtBoton.className = 'relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'

    const boton = document.createElement('button');
    boton.className = 'relative inline-flex items-center justify-center mt-4 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
    boton.append(txtBoton);
    //crear evento
    boton.addEventListener('click', ()=>{getImage(API)});

    // agregar al padre
    appNode.append(boton);
}

// crear un boton para eliminar las imagenes
const removeImg = async ()=> {
    const txtBoton = document.createElement('span');
    txtBoton.textContent = 'Borrar Imagenes';
    txtBoton.className = '';

    const removeBoton = document.createElement('button');
    removeBoton.className = 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900';
    removeBoton.appendChild(txtBoton);

    // crear evento
    await removeBoton.addEventListener('click', ()=>{
        // guardar el nodo a eliminar
        while (appNode.childNodes[3]) {
            appNode.removeChild(appNode.childNodes[3]);
        }
    })

    // agregar al padre
    appNode.appendChild(removeBoton);
}

addImg();
removeImg();
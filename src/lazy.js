const isIntersecting = (entry) => {
    return entry.isIntersecting // true (dentro de la pantalla)
}

const loadImage = (entry)=> {
    const container = entry.target; // container (DIV)
    const image = container.firstChild;
    const url = image.dataset.src;

    // Cargue la imagen
    image.src = url;

    //deje de observar la imagen
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries)=>{
    entries
    .filter(isIntersecting)
    .forEach(loadImage)
})


//
export const registerImage = (image) => {
    // Observar la imagen que estamos recibiendo
    observer.observe(image)
};
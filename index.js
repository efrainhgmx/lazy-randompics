//Generador de numeros radom
const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

//Crear imagen
//Agregar en contenedor
const createImageNode = () => {
    const imageContainer = document.createElement('figure');
    imageContainer.className = "image";
    const image = document.createElement('img');
    image.src = `https://randomfox.ca/images/${random()}.jpg`;
    image.alt = "Randon image";

    imageContainer.appendChild(image);

    return imageContainer;
};

//const newImage = createImageNode();
const sectionImages = document.getElementById('images');

const addButton = document.querySelector('.add-button');

//Agrega una Imagen 
const addImage = () => {
    const newRandomImage = createImageNode();
    sectionImages.append(newRandomImage);
};

//Ejecuta la funcion addImage al hacer click
addButton.addEventListener("click", addImage);
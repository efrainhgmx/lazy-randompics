import { registerImage } from './src/lazy.js';

//Generador de numeros radom
const minimum = 1;
/* const maximum = 122; */
const maximum = 30;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

//Peticíon a API
  /* const getImage = async () =>{
    try {
        const response = await fetch('https://api.unsplash.com/photos/random?count=30&client_id=uRuaKePvqSuOi2_KC1-8XHRpgZEi-bfLrRzUzquOauQ');
        const data = await response.json();
        const url = await data[random()].urls.regular;
    } catch (error) {
        console.error(error);
    } 
  } */

  //const urlImage = getImage();

//Crear imagen
//Agregar en contenedor
const createImage = async () => {
    try {
        const response = await fetch('https://api.unsplash.com/photos/random?count=30&client_id=uRuaKePvqSuOi2_KC1-8XHRpgZEi-bfLrRzUzquOauQ');
        const data = await response.json();
        const url = await data[random()].urls.regular;
        const imageContainer = document.createElement('figure');
        imageContainer.className = "image";
        imageContainer.style.blockSize = "auto";
        const image = document.createElement('img');
        image.dataset.src = url;
        console.log(image.dataset.src);
        //image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; 
        image.alt = "Randon image";

        imageContainer.appendChild(image);
        const newRandomImage = imageContainer;
        sectionImages.append(newRandomImage);
        registerImage(newRandomImage);
    } catch (error) {
        alert('❌ Something went wrong with UNSPLASH 🤔. Please try it later');
        console.error(error);
    }   
  
};

//const newImage = createImageNode();
const sectionImages = document.getElementById('images');

const addButton = document.querySelector('.add-button');
const clearButton = document.querySelector('.clear-button');

//Agrega una Imagen 
const clear = () => {
    const imageContainer = document.getElementById('images');
    [...imageContainer.childNodes].forEach((item) => {
        imageContainer.removeChild(item);
    });
}

//Ejecuta la funcion createImage al hacer click
addButton.addEventListener("click", createImage);
clearButton.addEventListener("click", clear);
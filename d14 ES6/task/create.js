import { arrOfImages } from './images.js';

function createImageElements() {
  let container = document.getElementById('imgCon');

  arrOfImages.forEach((imgSrc) => {
    let img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Image';
    container.appendChild(img);
    console.log('Image added:', imgSrc);
  });
}

createImageElements();

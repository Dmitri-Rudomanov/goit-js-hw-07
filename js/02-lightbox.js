import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery")

const markup=galleryItems
.map(item=>
    `<a class="gallery__item" href=${item.original}>
    <img class="gallery__image" src=${item.preview} alt="${item.description}" />
    </a>`)
.join("")
console.log(markup)

function createImg(markup) {
gallery.insertAdjacentHTML("beforeend",markup)
}
createImg(markup)


let lightbox = new SimpleLightbox('.gallery a', {captionDelay:250,captionsData:`alt`});

console.log(galleryItems);

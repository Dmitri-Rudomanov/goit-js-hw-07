import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery")

const markup=galleryItems
.map(item=>
    `<div class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a></div>`).join("")
console.log(markup)

function createImg(markup) {
gallery.insertAdjacentHTML("beforeend",markup)
}
createImg(markup)


gallery.addEventListener("click", pictureOnClick)


function pictureOnClick(evt){
evt.preventDefault()
if(evt.target.nodeName!=="IMG"){
    return
}
    const instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source} width="800" height="600">
    `)
    instance.show()
}


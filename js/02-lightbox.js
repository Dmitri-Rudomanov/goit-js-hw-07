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



function pictureOnClick(evt){
evt.preventDefault()
if(evt.target.nodeName!=="IMG"){
    return
}
    let galleryBox = new SimpleLightbox('.gallery');
    console.log("here")
    galleryBox.on("show.simplelightbox", () => {
        galleryBox.open(evt.target)
    })
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
   galleryBox.close()
  }
  })

}


gallery.addEventListener("click", pictureOnClick)


console.log(galleryItems);

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector("div");
const newImages = galleryItems
	.map(
		(image) => `<div class="gallery__item">
        <a class="gallery__link" href=${image.original}>   
        <img 
        class="gallerry__image"
        src=${image.preview}
        data-source=${image.original}
        alt="${image.description}"
        />
        </a>
        </div>`
	)
	.join("");

console.log(newImages);

gallery.innerHTML += newImages;

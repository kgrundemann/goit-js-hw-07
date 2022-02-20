"use strict";
import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("div");
gallery.addEventListener("click", selectImage);

function selectImage(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}
	const selectedImage = event.target.dataset.source;
	const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);
	instance.show();
	gallery.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			instance.close();
		}
	});
}
createImages();

function createImages() {
	const items = [];
	for (let i = 0; i < galleryItems.length; i++) {
		const div = document.createElement("div");
		div.classList.add("gallery__item");
		const link = document.createElement("a");
		link.classList.add("gallery__link");
		link.href = galleryItems[i].preview;
		const image = document.createElement("img");
		image.src = galleryItems[i].original;
		image.alt = galleryItems[i].description;
		image.dataset.source = galleryItems[i].original;
		image.classList.add("gallery__image");
		link.appendChild(image);
		div.appendChild(link);
		items.push(div);
	}
	gallery.append(...items);
}

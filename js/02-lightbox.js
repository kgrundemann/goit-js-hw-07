"use strict";
import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("ul");
gallery.addEventListener("click", selectImage);

function selectImage(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}

	new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
}
createImages();

function createImages() {
	const items = [];
	for (let i = 0; i < galleryItems.length; i++) {
		const link = document.createElement("a");
		link.classList.add("gallery__link");
		link.href = galleryItems[i].original;
		const image = document.createElement("img");
		image.src = galleryItems[i].original;
		image.alt = galleryItems[i].description;
		image.classList.add("gallery__image");
		link.appendChild(image);
		items.push(link);
	}
	gallery.append(...items);
}

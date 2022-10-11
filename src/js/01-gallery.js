// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
//==============================================

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const refsGalleryEl = document.querySelector('.gallery');
// console.log("🚀 refsGalleryEl", refsGalleryEl);

refsGalleryEl.insertAdjacentHTML('beforeend',createGalleryItems(galleryItems))

refsGalleryEl.addEventListener('click' ,onClickGallery )

function onClickGallery(event) {
    event.preventDefault();

    if(!event.target.classList.contains('gallery__image')){
        return;
    }
};

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250})

function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview , original , description }) => { 
       return `<a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>`}).join('');   
}

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDivEl = document.querySelector('.gallery');
const cardsMarkup = CreateMarkup(galleryItems);
galleryDivEl.insertAdjacentHTML('beforeend', cardsMarkup);

function CreateMarkup (cards) {
    return cards
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            `;
    }).join('');
}

galleryDivEl.addEventListener('click', onModalWin);

function onModalWin(evt) {
    evt.preventDefault();

    let gallery = new SimpleLightbox('.gallery__item', {
        animationSlide: false,
        captionsData: "alt",
        captionDelay: 250,
    });
    
   
}






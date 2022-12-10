import { galleryItems } from './gallery-items.js';
// Change code below this line

const galerylistEl = document.querySelector('.gallery');
const cardsMarkup = CreateMarkup(galleryItems);
galerylistEl.insertAdjacentHTML('beforeend', cardsMarkup);

//разметка для массива

function CreateMarkup(cards) {
    return cards
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
    `;
    }).join('');
}
// вызов модалки + Esc

galerylistEl.addEventListener('click', onModalWin)

function onModalWin(evt) {
   
    evt.preventDefault();
 // if (!evt.target.classList.contains('.gallery__link')) {
    //     return;
    // }
    const carousel = basicLightbox.create(`
		<img src="${evt.target.dataset.source}"
        width="800" height="600"> `,
        {
            onShow: carousel => {
                document.addEventListener('keydown', onEscapeKeyDown);
            },
            onClose: carousel => {
                document.removeEventListener('keydown', onEscapeKeyDown);
            },
        }
    );
    carousel.show();
    
    function onEscapeKeyDown(evt) {
        if (evt.code === 'Escape') {
            carousel.close();
        }
    }
}



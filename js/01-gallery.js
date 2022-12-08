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
//действие вызов модалки

galerylistEl.addEventListener('click', onModalWin)

function onModalWin(evt) {
    // if (!evt.target.classList.contains('.gallery__link')) {
    //     return;
    // }
    evt.preventDefault();

//if (evt.target.nodeName !== 'IMG') { return; }
    // const carousel = basicLightbox.create(` 
    //    <img src="${evt.target.dataset.source}"
    //     width="800" height="600">  `,
    //     {
    //         onShow: carousel => {
    //             document.addEventListener('keydown', onEscapeKeyDown);
    //         }, onClose: carousel => {
    //             document.removeEventListener('keydown', onEscapeKeyDown);
    //         },
    //     }); carousel.show();
    // function onEscapeKeyDown(event) {
    //     if (event.code !== 'Escape') { return; } carousel.close();
    // }
    


	const carousel = basicLightbox.create(`
		<img src="${evt.target.dataset.source}"
        width="800" height="600"> >
	`).show()


    
    // const currentActiveImg = document.querySelector('.gallery__item.modal_open')
    // if (currentActiveImg) {
    //     currentActiveImg.classList.remove('modal');
    // }
    // const currentImg = evt.target;
    // const parentCurrentImg = currentImg.closest('.gallery__item');
    //     parentCurrentImg.classList.add('modal');

    // console.log(parentCurrentImg);
    // console.log(evt.currentTarget.dataset.description);
}


console.log(galleryItems);

// import * as basicLightbox from 'basiclightbox'
// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

//instance.show()


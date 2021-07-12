export default function refs() {
    return {
        loadButtonRef: document.querySelector('.button_load'),
        searhFormRef: document.querySelector('#search-form'),
        overlowRef: document.querySelector('.searchImages'),
        galleryRef: document.getElementById('my-element-selector'),
        lightboxRef: document.querySelector('.js-lightbox'),
        modalImage: document.querySelector('.lightbox__image'),
        modalClose: document.querySelector('.lightbox__button'),
    }
    
}
import './sass/main.scss';
import * as basicLightbox from 'basiclightbox';

import ImagesApiServices from './js/apiService';
import doIt from './js/funcRender';
import LoadMoreButton from './js/loadMoreButton';
import getRefs from './js/refs';

const refs = getRefs();
const imagesApiServices = new ImagesApiServices();

const loadMoreButton = new LoadMoreButton({
    selector: '[data-action="load-more"]',
    hidden: true
});

//====== Listeners

refs.searhFormRef.addEventListener('submit', onSearch);
refs.searhFormRef.addEventListener('click', inputClickCleaner);
refs.galleryRef.addEventListener('click', OnImage);






function mainAction() {
    
    loadMoreButton.show();
    loadMoreButton.disable();

    imagesApiServices.fetchImages()
        .then(doIt.renderCard)
        .then(loadMoreButton.enable())
        .catch(doIt.onFetchError);
};

function onSearch(e) {
    e.preventDefault();
    imagesApiServices.query = e.currentTarget.elements.query.value;
    imagesApiServices.resetPage();
    mainAction();
    
};

function OnImage(e) {
      
    if (e.target.nodeName == 'IMG') {
        const instance = basicLightbox.create(`<img class="lightbox__image" src="${e.target.dataset.source}" alt="" /> `);
        instance.show(e);  
    }
};

function inputClickCleaner(e) {

    refs.galleryRef.innerHTML = '';
    refs.loadButtonRef.classList.add('visually-hidden')
    refs.overlowRef.classList.add('overlay');
   
}

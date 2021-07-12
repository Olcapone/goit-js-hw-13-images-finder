import './sass/main.scss';
import * as basicLightbox from 'basiclightbox';

import ImagesApiServices from './js/apiService';
import doIt from './js/funcRender';
import LoadMoreButton from './js/loadMoreButton';
import getRefs from './js/refs';

const refs = getRefs();
const imagesApiServices = new ImagesApiServices();
let isLoading = false;

 const loadMoreButton = new LoadMoreButton({
     selector: '[data-action="load-more"]',
     hidden: true
 });

//====== Listeners

refs.searhFormRef.addEventListener('submit', onSearch);
refs.searhFormRef.addEventListener('click', inputClickCleaner);
refs.galleryRef.addEventListener('click', OnImage);



//======= function

function mainAction() {
    
     loadMoreButton.show();
     loadMoreButton.disable();

    imagesApiServices.fetchImages()
        .then(doIt.renderCard)
        .catch(doIt.onFetchError);
};

function onSearch(e) {
    e.preventDefault();
    imagesApiServices.query = e.currentTarget.elements.query.value;
    imagesApiServices.resetPage();
    mainAction();

    isLoading = true;
   
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
     
};

//=====   infinity scroll

const ioCallback = ([entrie], observerRef) => {

    if(isLoading){

        if (!entrie.isIntersecting) return;

        imagesApiServices.incrementPage();
        mainAction();    
  }
};

const observer = new IntersectionObserver(ioCallback, { threshold: 0.5 });

const target = document.querySelector('#anchor');
observer.observe(target);
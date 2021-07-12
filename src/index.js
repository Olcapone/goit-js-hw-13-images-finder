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


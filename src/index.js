import './css/styles.css';

import imageCardTpl from './templates/imageCard.hbs';
import API from './js/apiService.js';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';



import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
const { error, success } = require('@pnotify/core');

const debounce = require('lodash.debounce');



const searchForm = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');
const input = document.querySelector('.search-input');
const sentinel = document.querySelector('#sentinel');

input.addEventListener('input', debounce(onSearch, 500))

function addMarUp(data) {
    galleryList.insertAdjacentHTML('beforeend', imageCardTpl(data));
}
function onSearch(e){
    console.log('hu');
}


function onGalleryElClick(event) {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    
    const changeModalImage = `<img src=${event.target.dataset.source} alt="icon" />`;
    const instance = basicLightbox.create(changeModalImage);
    instance.show();
}  
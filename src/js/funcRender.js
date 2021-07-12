 //====== notification Pnotify
import { alert, error, success, Stack, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

const notificationPnotify = new Stack({
    dir1: 'up',
    dir2: 'left',
    firstpos1: 25,
    firstpos2: 25,
    
});


      alert({
          text: 'Notice me, senpai!', stack: notificationPnotify
       });

//====== render Card

import cardImage from '../temptate/cardImages';

function renderCard(someWords) {

    if (someWords.total !== 0) {
       const resultImages = someWords.hits.map((hit, i) => {
            return cardImage(hit);
        }).join('');

        document.querySelector('.gallery').insertAdjacentHTML('beforeend', resultImages);
          success({
             text: "Good!", stack: notificationPnotify
          });
        return;
    }
    
     error({
            text: "Word not found. Try again", stack: notificationPnotify
         });
                
}

function onFetchError(someError) {
    const myError = error({ text: "I'm an error message." })
};

export default { renderCard, onFetchError };




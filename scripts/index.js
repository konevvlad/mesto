import Card from './Card.js';
import {initialCards} from './initial.js';
import * as constants from './constants.js'





initialCards.forEach((item) => {
  const card= new Card(item, '.card-element');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
});

constants.placeAdditionFormElement.addEventListener('submit', function(evt) {
  evt.preventDefault();
    closePopup(constants.popupNewPlace);
    const cardData =
      {
        name: constants.placeName.value,
        link: constants.placeLink.value,
      };
    console.log(cardData)
    const card = new Card(cardData, '.card-element' )
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
    constants.placeAdditionFormElement.reset();
    constants.popupAdditionSaveButton.disabled=true;
    constants.popupAdditionSaveButton.classList.add('popup__button_disabled');
   
     });

function openPopup(popupProfileCard) {
  popupProfileCard.classList.add('popup_active');
  document.addEventListener('keydown', closeByEsc);
}

function closePopup(popupProfileCard) {
  popupProfileCard.classList.remove('popup_active');
  document.removeEventListener('keydown', closeByEsc);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup); 
  }
};

const popupList = document.querySelectorAll('.popup');
popupList.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
       closePopup(popup.closest('.popup'))
    }
  })
});

constants.imageOverlay.addEventListener('click', function(evt) {
      closePopup(popupPhoto); 
})

constants.popupProfileCloseBtn.addEventListener('click', function() {
    closePopup(popupProfileCard);
});


constants.popupProfileOpenBtn.addEventListener('click', function() {
  constants.inputName.value=profileName.textContent;
  constants.inputJob.value=profileJob.textContent;
    openPopup(popupProfileCard)  
})


constants.formProfileEdit.addEventListener('submit', function(evt) {
        evt.preventDefault (); 
        constants.profileName.textContent = inputName.value;
        constants.profileJob.textContent = inputJob.value;
        closePopup(popupProfileCard);
    }
);

 
constants.popupNewPlaceClsBtn.addEventListener('click', function() {
  closePopup(constants.popupNewPlace);
});

constants.popupNewPlaceOpnBtn.addEventListener('click', function() {
  openPopup(constants.popupNewPlace);   
})









     
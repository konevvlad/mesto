import Card from './Card.js';
import {initialCards} from './initial.js';
import * as constants from './constants.js'


initialCards.forEach((item) => {
  const card= new Card(item, '.card-element');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
});

function createCard(data) {
    const card = new Card(data, '.card-element')
    const cardElement = card.generateCard();
    return cardElement;
    }

constants.placeAdditionFormElement.addEventListener('submit', function(evt) {
  evt.preventDefault();
    closePopup(constants.popupNewPlace);
    const cardData =
      {
        name: constants.placeName.value,
        link: constants.placeLink.value,
      };
  const newCard = createCard(cardData)
    document.querySelector('.elements').prepend(newCard);
    constants.placeAdditionFormElement.reset();
   
   });

export function openPopup(popupProfileCard) {
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
      closePopup(constants.popupPhoto); 
})


constants.popupProfileCloseBtn.addEventListener('click', function() {
    closePopup(constants.popupProfileCard);
});
constants.popupPhotoClsBtn.addEventListener('click', () => {
  closePopup(constants.popupPhoto);
})

constants.popupProfileOpenBtn.addEventListener('click', function() {
  constants.inputName.value=constants.profileName.textContent;
  constants.inputJob.value=constants.profileJob.textContent;
    openPopup(constants.popupProfileCard)  
})


constants.formProfileEdit.addEventListener('submit', function(evt) {
        evt.preventDefault (); 
        constants.profileName.textContent = constants.inputName.value;
        constants.profileJob.textContent = constants.inputJob.value;
        closePopup(constants.popupProfileCard);
    }
);

 
constants.popupNewPlaceClsBtn.addEventListener('click', function() {
  closePopup(constants.popupNewPlace);
});

constants.popupNewPlaceOpnBtn.addEventListener('click', function() {
  openPopup(constants.popupNewPlace);   
})









     
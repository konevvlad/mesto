import Card from './Card.js';
import {initialCards} from './initial.js';
import * as constants from './constants.js'

const elements = document.querySelector('.elements');
const inputs = Array.from(document.querySelectorAll('.popup__input'));


initialCards.forEach((item) => {
  elements.prepend(createCard(item));
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
    elements.prepend(newCard);
    evt.target.reset();
   
   });

export function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeByEsc);
  let event = new Event('input');
  constants.placeName.dispatchEvent(event);

  inputs.forEach((element) => {
    element.dispatchEvent(event);
})
}


function closePopup(popup) {
  popup.classList.remove('popup_active');
  constants.imageFull.src='';
  constants.imageFull.alt='';
  constants.imageCaption.textContent='';
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









     
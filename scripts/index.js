import Card from './Card.js';
import {initialCards} from './initial.js';
import * as constants from './constants.js';
import FormValidator from "./FormValidator.js";




constants.getForms.forEach((formElement) => {
  const cardForValidation = new FormValidator(constants.validateSettings, formElement);
  cardForValidation.enableValidation();
  
});

initialCards.forEach((item) => {
  constants.elements.prepend(createCard(item));
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
    constants.elements.prepend(newCard);
    evt.target.reset();
   
   });

export function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeByEsc);

}

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closeByEsc);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup); 
  }
};


constants.popupList.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
       closePopup(popup)
    }
  })
});






constants.closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


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


constants.popupNewPlaceOpnBtn.addEventListener('click', function() {
  openPopup(constants.popupNewPlace); 
  
  
    
})












     
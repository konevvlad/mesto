const profileName = document.getElementById('profile__name');
const profileJob = document.getElementById('profile__job');
const formProfileEdit = document.querySelector('.popup__editing-form');
const inputName = formProfileEdit.querySelector('.popup__profile-input_title')
const inputJob = formProfileEdit.querySelector('.popup__profile-input_subtitle')
const popupProfileOpenBtn = document.querySelector('.profile__edit-button');
const popupProfileCard = document.querySelector('.popup-profile');
const popupProfileCloseBtn = document.querySelector('.popup__close-button');
const popupNewPlaceOpnBtn = document.querySelector('.profile__add-button');
const popupNewPlaceClsBtn = document.querySelector('.popup__addition-close-button');
const popupNewPlace = document.querySelector('.popup-addition');
const placeName = document.querySelector('.popup__addition-profile-input_title');
const placeLink = document.querySelector('.popup__addition-profile-input_subtitle');
const elementName = document.querySelector('.element__name');
const elementImage = document.querySelector('.element__image');
const profileSaveButton = document.querySelector('.popup__save-button');
const newPlaceSaveButton = document.querySelector('.popup__addition-save-button');
const placeAdditionFormElement=document.querySelector('.popup__addition-editing-form');
const popupPhotoClsBtn = document.querySelector('.popup__image-close-button');
const placesContainer=document.querySelector('.elements');
const popupPhoto = document.querySelector('.popup-image');
const elementTemplate=document.querySelector('#card-element').content;
const imageFull = document.querySelector('.popup__image-photo');
const imageCaption = document.querySelector('.popup__image-title');
const overlay = document.querySelector('.popup__overlay');

const deleteCard = function(evt) {
  evt.target.closest('.element').remove();
};

const pressLike = function(evt) {
  const eventTarget=evt.target
  eventTarget.classList.toggle('element__button-like_active')
};

popupPhotoClsBtn.addEventListener('click', function(evt) {
  closePopup(popupPhoto)
})

overlay.addEventListener('click', function(evt) {
  closePopup(popupProfileCard)
})

const openFullPhoto = function(evt) {
        

  
  imageFull.src=evt.target.src;
  imageFull.alt=evt.target.alt
  imageCaption.textContent=evt.target.alt;
  openPopup(popupPhoto);  

};


function openPopup(popupProfileCard) {
  popupProfileCard.classList.add('popup_active');
}

function closePopup(popupProfileCard) {
  popupProfileCard.classList.remove('popup_active');
}

function createCard(name, link) {
  
  
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const cardElementImage = cardElement.querySelector('.element__image');  
    cardElement.querySelector('.element__name').textContent = name;
    cardElementImage.src = link;
    cardElementImage.alt = name;
    const deleteBtn=cardElement.querySelector('.element__button-delete');
      deleteBtn.addEventListener('click', deleteCard); 
      const like=cardElement.querySelector('.element__button-like');
      like.addEventListener('click', pressLike);
      const imageClick = cardElement.querySelector('.element__image-click');
      imageClick.addEventListener('click', openFullPhoto);

    return cardElement;
  
}


function loadCards() {
  initialCards.forEach(function(item){
    const card=createCard(item.name, item.link)
    placesContainer.prepend(card);
  });
  }
  loadCards()



popupProfileCloseBtn.addEventListener('click', function() {
    closePopup(popupProfileCard);
    

});

popupProfileOpenBtn.addEventListener('click', function() {
    inputName.value=profileName.textContent;
    inputJob.value=profileJob.textContent;
    openPopup(popupProfileCard)  

})


formProfileEdit.addEventListener('submit', function(evt) {
        evt.preventDefault (); 
        profileName.textContent = inputName.value;
        profileJob.textContent = inputJob.value;
        closePopup(popupProfileCard);
    }
) 

 
popupNewPlaceClsBtn.addEventListener('click', function() {
  closePopup(popupNewPlace);
});

popupNewPlaceOpnBtn.addEventListener('click', function() {
  openPopup(popupNewPlace);   

})


placeAdditionFormElement.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (placeName.value !== "" || placeLink.value !== "") {
    closePopup(popupNewPlace);
    const newCard = createCard(placeName.value, placeLink.value)
    placesContainer.prepend(newCard)
    }
      placeAdditionFormElement.reset()
   
     });






    const showProfileInputError=function (formElement, inputElement, errorMessage)  {
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add('popup__profile-input_type_error');
      errorElement.textContent = errorMessage;
      errorElement.classList.add('popup__profile-input_error_active');
    };
    
    function hideProfileInputError(formElement, inputElement) {
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove('popup__profile-input_type_error');
      errorElement.classList.remove('popup__profile-input_error_active');
      errorElement.textContent = '';
    };


    const isValid = function(formElement, inputElement) {
      if (!inputElement.validity.valid) {
        showProfileInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
        hideProfileInputError(formElement, inputElement);
      }
    };

    const setProfileEventListeners = function(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__profile-input'));

    const hasInvalidInput = function(inputList) {
      return inputList.some(function(inputElement) {    
        return !inputElement.validity.valid;
      })
    }; 


const toggleProfileButtonState = function(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-button_disabled');
  } else {
    buttonElement.classList.remove('popup__save-button_disabled');
  }
}; 
  
      inputList.forEach(function(inputElement){
        inputElement.addEventListener('input', function(){
          isValid(formElement, inputElement);
          toggleProfileButtonState(inputList, profileSaveButton);
        });
      });
    }; 

    const enableProfileValidation = function() {
      const formList = Array.from(document.querySelectorAll('.popup__editing-form'));
          formList.forEach(function(formElement) {
        formElement.addEventListener('submit', function(evt) {
          evt.preventDefault();
        });
    
        setProfileEventListeners(formElement);
      });
    };
    
    enableProfileValidation(); 


   












    const showNewPlaceInputError=function (formElement, inputElement, errorMessage)  {
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add('popup__addition-profile-input_type_error');
      errorElement.textContent = errorMessage;
      errorElement.classList.add('popup__addition-profile-input_error_active');
    };
    
    function hideNewPlaceInputError(formElement, inputElement) {
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove('popup__addition-profile-input_type_error');
      errorElement.classList.remove('popup__addition-profile-input_error_active');
      errorElement.textContent = '';
    };


    const isNewPlaceValid = function(formElement, inputElement) {
      if (!inputElement.validity.valid) {
        showNewPlaceInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
        hideNewPlaceInputError(formElement, inputElement);
      }
    };

    const setNewPlaceEventListeners = function(formElement) {
    const newPlaceInputs = Array.from(formElement.querySelectorAll('.popup__addition-profile-input'));

    const hasNewPlaceInvalidInput = function(newPlaceInputs) {
      return newPlaceInputs.some(function(inputElement) {    
        return !inputElement.validity.valid;
      })
    }; 


const toggleNewPlaceButtonState = function(newPlaceInputs, buttonElement) {
  if (hasNewPlaceInvalidInput(newPlaceInputs)) {
    buttonElement.classList.add('popup__addition-save-button_disabled');
  } else {
    buttonElement.classList.remove('popup__addition-save-button_disabled');
  }
}; 
  
      newPlaceInputs.forEach(function(inputElement){
        inputElement.addEventListener('input', function(){
          isNewPlaceValid(formElement, inputElement);
          toggleNewPlaceButtonState(newPlaceInputs, newPlaceSaveButton);
        });
      });
    }; 

    const enableNewPlaceValidation = function() {
      const formsNewPlace = Array.from(document.querySelectorAll('.popup__addition-editing-form'));
          formsNewPlace.forEach(function(formElement) {
        formElement.addEventListener('submit', function(evt) {
          evt.preventDefault();
        });
    
        setNewPlaceEventListeners(formElement);
      });
    };
    
    enableNewPlaceValidation(); 


































// валидация нового места

// placeAdditionFormElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });
    
    // function showInputError(element) {
    //   element.classList.add('popup__addition-profile-input_type_error');
    // };
    
    // function hideInputError(element) {
    //   element.classList.remove('popup__addition-profile-input_type_error');
    // };

    // placeName.addEventListener('input', function (evt) {
    //  if (evt.target.validity.valid===false) {
    //   showInputError(placeName);
    //  } else {
    //   hideInputError(placeName);
    //  };
    // }); 


    // placeLink.addEventListener('input', function (evt) {
    //   if (evt.target.validity.valid===false) {
    //    showInputError(placeLink);
    //   } else {
    //    hideInputError(placeLink);
    //   };
    //  }); 


     
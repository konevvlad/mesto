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
const placeName = document.querySelector('.popup__addition-title');
const placeLink = document.querySelector('.popup__addition-subtitle');
const elementName = document.querySelector('.element__name');
const elementImage = document.querySelector('.element__image');
const placeAdditionFormElement=document.querySelector('.popup__addition-editing-form');
const popupPhotoClsBtn = document.querySelector('.popup__image-close-button');
const placesContainer=document.querySelector('.elements');
const popupPhoto = document.querySelector('.popup-image');
const elementTemplate=document.querySelector('#card-element').content;
const imageFull = document.querySelector('.popup__image-photo');
const imageCaption = document.querySelector('.popup__image-title');
const imageOverlay = document.querySelector('.popup__image-overlay');
const profileOverlay = document.querySelector('.popup__profile-overlay');
const placeOverlay = document.querySelector('.popup__place-overlay')

const deleteCard = function(evt) {
  evt.target.closest('.element').remove();
};

const pressLike = function(evt) {
  const eventTarget=evt.target
  eventTarget.classList.toggle('element__button-like_active')
};



const openFullPhoto = function(evt) {
        

  
  imageFull.src=evt.target.src;
  imageFull.alt=evt.target.alt
  imageCaption.textContent=evt.target.alt;
  openPopup(popupPhoto);  

};


function openPopup(popupProfileCard) {
  popupProfileCard.classList.add('popup_active');
  document.addEventListener('keydown', closeByEsc)
}

function closePopup(popupProfileCard) {
  popupProfileCard.classList.remove('popup_active');
  document.addEventListener('keydown', closeByEsc);
  
  
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup); 
  }
};

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


const popupList = document.querySelectorAll('.popup');
console.log(popupList);
popupList.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
       closePopup(popup.closest('.popup'))
    }
  })
});



function loadCards() {
  initialCards.forEach(function(item){
    const card=createCard(item.name, item.link)
    placesContainer.prepend(card);
  });
  }
  loadCards()

   
popupPhotoClsBtn.addEventListener('click', function(evt) {
      closePopup(popupPhoto)
    })
    
 imageOverlay.addEventListener('click', function(evt) {
      closePopup(popupPhoto);
      
    })

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
    closePopup(popupNewPlace);
    const newCard = createCard(placeName.value, placeLink.value)
    placesContainer.prepend(newCard)
      placeAdditionFormElement.reset()
   
     });






     
const profileName = document.getElementById('profile__name');
const profileJob = document.getElementById('profile__job')
const inputName = document.querySelector('.popup__profile-input_title')
const inputJob = document.querySelector('.popup__profile-input_subtitle')
const popupProfileOpenBtn = document.querySelector('.profile__edit-button');
const popupProfileCard = document.querySelector('.popup__profile');
const popupProfileCloseBtn = document.querySelector('.popup__close-button');
const popupNewPlaceOpnBtn = document.querySelector('.profile__add-button');
const popupNewPlaceClsBtn = document.querySelector('.popup__addition-close-button');
const popupNewPlace = document.querySelector('.popup__addition');
const placeName = document.querySelector('.popup__addition-profile-input_title');
const placeLink = document.querySelector('.popup__addition-profile-input_subtitle');
const elementName = document.querySelector('.element__name');
const elementImage = document.querySelector('.element__image');
const formProfileEdit = document.querySelector('.popup__editing-form');
const placeAdditionFormElement=document.querySelector('.popup__addition-editing-form');
const popupPhotoClsBtn = document.querySelector('.popup__image-close-button');
const placesContainer=document.querySelector('.elements');
const popupPhoto = document.querySelector('.popup__image');
const elementTemplate=document.querySelector('#card-element').content;
const imageFull = document.querySelector('.popup__image-photo');
const imageCaption = document.querySelector('.popup__image-title');
<<<<<<< HEAD

=======
>>>>>>> ce89dd61631bfec07393db44e04c011a99b52854
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








const profileName = document.getElementById('profile__name');
const profileJob = document.getElementById('profile__job')
const inputName = document.querySelector('.popup__profile-input_title')
const inputJob = document.querySelector('.popup__profile-input_subtitle')
const popupOpenBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup__profile');
const popupCloseBtn = document.querySelector('.popup__close-button');
const additionOpnBtn = document.querySelector('.profile__add-button');
const addClsBtn = document.querySelector('.popup__addition-close-button');
const addPopup = document.querySelector('.popup__addition');
const addName = document.querySelector('.popup__addition-profile-input_title');
const addLink = document.querySelector('.popup__addition-profile-input_subtitle');
const elementName = document.querySelector('.element__name');
const elementImage = document.querySelector('.element__image');
const formProfileEdit = document.querySelector('.popup__editing-form');
const addFormElement=document.querySelector('.popup__addition-editing-form');
const popupPhotoClsBtn = document.querySelector('.popup__image-close-button');
const placesContainer=document.querySelector('.elements');
const deleteCard = function(evt) {
  evt.preventDefault();  
  let card = document.querySelector('.element');
  evt.target.closest('.element').remove();
};

const pressLike = function(evt) {
  evt.preventDefault();
  const eventTarget=evt.target
  eventTarget.classList.toggle('element__button-like_active')
};

const openFullPhoto = function(evt) {
        
  const imageFull = document.querySelector('.popup__image-photo')
  const imageCaption = document.querySelector('.popup__image-title')
  const popupPhoto = document.querySelector('.popup__image');
  imageFull.src=evt.target.src;
  imageFull.alt=evt.target.closest('.element__image').alt
  imageCaption.textContent=evt.target.closest('.element__image').alt;
  openPopup(popupPhoto);  
  popupPhotoClsBtn.addEventListener('click', function(evt) {
    closePopup(popupPhoto);
  })
};


function openPopup(popup) {
  popup.classList.add('popup_active');
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
}

function createCard(name, link) {
  
  const elementTemplate=document.querySelector('#card-element').content;
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__name').textContent = name;
    cardElement.querySelector('.element__image').src = link;
    cardElement.querySelector('.element__image').alt = name;
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
    console.log(initialCards)
    placesContainer.prepend(card);
  });
  }
  loadCards()



popupCloseBtn.addEventListener('click', function() {
    closePopup(popup);
    inputName.removeAttribute('value')
    inputJob.removeAttribute('value')

});

popupOpenBtn.addEventListener('click', function() {
    inputName.value=profileName.textContent;
    inputJob.value=profileJob.textContent;
    openPopup(popup)  

})


formProfileEdit.addEventListener('submit', function(evt) {
        evt.preventDefault (); 
        profileName.textContent = inputName.value;
        profileJob.textContent = inputJob.value;
        closePopup(popup);
    }
) 

 
addClsBtn.addEventListener('click', function() {
  closePopup(addPopup);
});

additionOpnBtn.addEventListener('click', function() {
  openPopup(addPopup);   

})


addFormElement.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (addName.value !== "" || addLink.value !== "") {
    closePopup(addPopup);
    const newCard = createCard(addName.value, addLink.value)
  placesContainer.prepend(newCard) }
      addFormElement.reset()
   
     });








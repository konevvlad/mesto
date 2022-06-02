let profileName = document.getElementById('profile__name');
let profileJob = document.getElementById('profile__job')
let inputName = document.querySelector('.popup__profile-input_title')
let inputJob = document.querySelector('.popup__profile-input_subtitle')
let popupOpenBtn = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup__close-button');
let additionOpnBtn = document.querySelector('.profile__add-button');
let addClsBtn = document.querySelector('.popup-addition__close-button');
let addPopup = document.querySelector('.popup-addition');
let addName = document.querySelector('.popup-addition__profile-input_title');
let addLink = document.querySelector('.popup-addition__profile-input_subtitle');
let elementName = document.querySelector('.element__name');
let elementImage = document.querySelector('.element__image');

popupCloseBtn.addEventListener('click', function() {
    popup.classList.remove('popup_active');
    inputName.removeAttribute('value')
    inputJob.removeAttribute('value')

});

popupOpenBtn.addEventListener('click', function() {
    inputName.value=profileName.textContent;
    inputJob.value=profileJob.textContent;
    popup.classList.add('popup_active');   

})


let formElement = document.querySelector('.popup__editing-form')

formElement.addEventListener('submit', function(evt) {
        evt.preventDefault (); 
        profileName.textContent = inputName.value;
        profileJob.textContent = inputJob.value;
        popup.classList.remove('popup_active');
    }
) 





const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 



  function loadCards() {
    initialCards.forEach(function(item){
    let placesContainer=document.querySelector('.elements')
    const elementTemplate=document.querySelector('#card-element').content;
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
      cardElement.querySelector('.element__name').textContent = item.name;
      cardElement.querySelector('.element__image').src = item.link;
      cardElement.querySelector('.element__image').alt = item.name;
      placesContainer.prepend(cardElement);
      console.log(initialCards)
      pressLike();
      deleteCard();
      openFullPhoto()
    });
    }
    loadCards()
    





addClsBtn.addEventListener('click', function() {
  addPopup.classList.remove('popup-addition_active');
});

additionOpnBtn.addEventListener('click', function() {
  addPopup.classList.toggle('popup-addition_active');   

})

let addFormElement=document.querySelector('.popup-addition__editing-form');

addFormElement.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (addName.value !== "" || addLink.value !== "") {
     addPopup.classList.remove('popup-addition_active');
    let placesContainer=document.querySelector('.elements')
    const elementTemplate=document.querySelector('#card-element').content;
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
      cardElement.querySelector('.element__name').textContent = addName.value;
      cardElement.querySelector('.element__image').src = addLink.value;
      cardElement.querySelector('.element__image').alt = addName.value;
      placesContainer.prepend(cardElement);}
      pressLike()
      deleteCard();
      openFullPhoto()
     });



function pressLike() {
const like=document.querySelector('.element__button-like');
like.addEventListener('click', function(evt) {
  evt.preventDefault();
  const eventTarget=evt.target
  eventTarget.classList.toggle('element__button-like_active')
})}
;



function deleteCard() {
const deleteBtn=document.querySelector('.element__button-delete');
deleteBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  let card = document.querySelector('.element');
  evt.target.parentNode.remove();
})
};



function openFullPhoto() {
let imageClick = document.querySelector('.element__image-click')
let imageFull = document.querySelector('.popup-image__photo')
let imageCaption = document.querySelector('.popup-image__title')

let popupPhoto = document.querySelector('.popup-image')
imageClick.addEventListener('click', function(evt) {
  console.log('нажато');
  imageFull.src=evt.target.src;
  imageCaption.textContent=evt.target.alt;
  popupPhoto.classList.add('popup-image_active');  
})

let popupPhotoClsBtn = document.querySelector('.popup-image__close-button')

popupPhotoClsBtn.addEventListener('click', function(evt) {
  popupPhoto.classList.remove('popup-image_active');
})

}


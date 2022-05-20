let profileName = document.getElementById('profile__name');
let profileJob = document.getElementById('profile__job')

let inputName = document.querySelector('.popup__profile-input_title')
let inputJob = document.querySelector('.popup__profile-input_subtitle')
let popupOpenBtn = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup__close-button');


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


let formElement = document.querySelector('.popup__save-button')

formElement.addEventListener('click', function(evt) {
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



initialCards.forEach(function(item){
    let elementName = document.querySelector('.element__name');
  let elementImage = document.querySelector('.element__image');
  let placesContainer=document.querySelector('.elements')
const elementTemplate=document.querySelector('#card-element').content;
const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__name').textContent = item.name;
    cardElement.querySelector('.element__image').src = item.link;
    placesContainer.append(cardElement);
});
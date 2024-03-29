export const profileName = document.getElementById('profile__name');
export const profileJob = document.getElementById('profile__job');
export const formProfileEdit = document.querySelector('.popup__editing-form');
export const inputName = formProfileEdit.querySelector('.popup__profile-input_title')
export const inputJob = formProfileEdit.querySelector('.popup__profile-input_subtitle')
export const popupProfileOpenBtn = document.querySelector('.profile__edit-button');
export const popupProfileCloseBtn = document.querySelector('.popup__close-button');
export const popupNewPlaceOpnBtn = document.querySelector('.profile__add-button');
export const popupNewPlaceClsBtn = document.querySelector('.popup__addition-close-button');
export const popupNewPlace = document.querySelector('.popup-addition');
export const placeName = document.querySelector('.popup__addition-title');
export const placeLink = document.querySelector('.popup__addition-subtitle');
export const elementName = document.querySelector('.element__name');
export const elementImage = document.querySelector('.element__image');
export const placeAdditionFormElement=document.querySelector('.popup__addition-editing-form');
export const popupPhotoClsBtn = document.querySelector('.popup__image-close-button');
export const placesContainer=document.querySelector('.elements');
export const popupPhoto = document.querySelector('.popup-image');
export const elementTemplate=document.querySelector('#card-element').content;
export const imageFull = document.querySelector('.popup__image-photo');
export const imageCaption = document.querySelector('.popup__image-title');
export const imageOverlay = document.querySelector('.popup__image-overlay');
export const profileOverlay = document.querySelector('.popup__profile-overlay');
export const placeOverlay = document.querySelector('.popup__place-overlay');
export const popupAdditionSaveButton = document.querySelector('.popup__addition-save-button');
export const deleteBtn=document.querySelector('.element__button-delete');
export const popupProfileCard=document.querySelector('.popup-profile');


export const popupList = document.querySelectorAll('.popup');
export const elements = document.querySelector('.elements');
export const closeButtons = document.querySelectorAll('.popup__close-button');
export const validateSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
  
};
export const validateForm = (settings) => {
  return Array.from(document.querySelectorAll(settings.formSelector));
}
export const getForms = validateForm(validateSettings);
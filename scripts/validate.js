import FormValidator from "./FormValidator.js";

const validateSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
  
};

const validateForm = (settings) => {
  return Array.from(document.querySelectorAll(settings.formSelector));
}
const getForms = validateForm(validateSettings);

getForms.forEach((formElement) => {
  const cardForValidation = new FormValidator(validateSettings, formElement);
  cardForValidation.enableValidation();
});

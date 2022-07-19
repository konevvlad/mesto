const validateSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
  
};


const hasInvalidInput = function(inputList) {
  return inputList.some(function(inputElement) {    
    return !inputElement.validity.valid;
  })
};

const showInputError=function (formElement, inputElement, errorMessage, settings)  {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
  };
  
function hideInputError(formElement, inputElement, settings) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = '';
  };


function toggleButtonState (inputList, buttonElement, settings) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(settings.inactiveButtonClass);
        buttonElement.disabled=true;
      } else {
        buttonElement.classList.remove(settings.inactiveButtonClass);
        buttonElement.disabled=false;
        }
    };   


const isValid = function(formElement, inputElement, settings) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
      hideInputError(formElement, inputElement, settings);
    }
  };

  
 




const setEventListeners = function(formElement, settings) {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const popupSaveButton = formElement.querySelector(settings.submitButtonSelector);
  

     inputList.forEach(function(inputElement){
         inputElement.addEventListener('input', function(){
         isValid(formElement, inputElement, settings);
         toggleButtonState(inputList, popupSaveButton, settings);
        });
      });

    };


const enableValidation = function(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
   formList.forEach(function(formElement) {
      setEventListeners(formElement, settings);
    });
  };


enableValidation(validateSettings); 
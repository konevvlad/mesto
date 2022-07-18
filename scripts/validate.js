const showInputError=function (formElement, inputElement, errorMessage)  {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_visible');
  };
  
  function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__error_visible');
    errorElement.textContent = '';
  };


  const isValid = function(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const setEventListeners = function(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const popupSaveButton = formElement.querySelector('.popup__button');
  const hasInvalidInput = function(inputList) {
    return inputList.some(function(inputElement) {    
      return !inputElement.validity.valid;
    })
  }; 


const toggleButtonState = function(inputList, buttonElement) {
if (hasInvalidInput(inputList)) {
  buttonElement.classList.add('popup__button_disabled');
} else {
  buttonElement.classList.remove('popup__button_disabled');
}
}; 

    inputList.forEach(function(inputElement){
      inputElement.addEventListener('input', function(){
        isValid(formElement, inputElement);
        toggleButtonState(inputList, popupSaveButton);
      });
    });
  }; 

  const enableValidation = function() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
        formList.forEach(function(formElement) {
      formElement.addEventListener('submit', function(evt) {
        evt.preventDefault();
      });
  
      setEventListeners(formElement);
    });
  };
  
  enableValidation(); 

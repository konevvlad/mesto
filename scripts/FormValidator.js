export default class FormValidator {
    constructor(settings, formElement) {
      this._formElement= formElement;
      this._formSelector = settings.formSelector;
      this._inputSelector = settings.inputSelector;
      this._submitButtonSelector = settings.submitButtonSelector;
      this._inactiveButtonClass = settings.inactiveButtonClass;
      this._inputErrorClass=settings.inputErrorClass;
      this._errorClass=settings.errorClass;
      this._inputList = Array.from(this._formElement.querySelectorAll(settings.inputSelector));
      this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    };   
  
    _hasInvalidInput() {
      return this._inputList.some((inputElement) => {    
        return !inputElement.validity.valid;
      })
    };
    
    _showInputError(inputElement, errorMessage)  {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add( this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
      };
      
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
      };
    
    
    _toggleButtonState() {
        if (this._hasInvalidInput())  {
          this._buttonElement.classList.add(this._inactiveButtonClass);
          this._buttonElement.disabled=true;
          } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled=false;
            }
        };   
    
    _isValid (inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
          console.log(inputElement.value)
        } else {
          this._hideInputError(inputElement);
          console.log(inputElement.value)
        }
      };
    
    _setEventListeners() {
      
      this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
             inputElement.addEventListener('input', () => {
              this._isValid(inputElement);
              this._toggleButtonState();
          
            });
          });
        };
    
    enableValidation () {
     
          this._setEventListeners();
  
      };
};
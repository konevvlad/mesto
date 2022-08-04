import * as constants from './constants.js';


import {openPopup} from './index.js' ;

export default class Card {
    constructor(data, templateSelector) {
    this._name=data.name;
    this._image=data.link;
    this._isLiked=false;
    this._templateSelector=templateSelector
    }


    _getTemplate() {
      const cardElement = document
      .querySelector( this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true)
      return cardElement
    }
    
    generateCard() {
      this._element=this._getTemplate();
      this._setEventListeners();
      this._element.querySelector('.element__name').textContent =this._name;
      this._element.querySelector('.element__image').src=this._image;
      this._element.querySelector('.element__image').alt=this._name;
      return this._element;
  
    }
    
    _handleOpenCard() {
      constants.imageFull.src=this._image
      constants.imageFull.alt=this._name
      constants.imageCaption.textContent=this._name;
      openPopup(constants.popupPhoto);
    }
  
    _handleCloseCard() {
      constants.imageFull.src='';
      constants.imageFull.alt='';
      constants.imageCaption.textContent='';
    }
  
    _deleteCard() {
      this._element.remove();
    }
    _pressLike() {
      this._element.querySelector('.element__button-like').classList.toggle('element__button-like_active');
    }
  
    _setEventListeners() {
      this._element.querySelector('.element__image').addEventListener('click', () => {
        this._handleOpenCard();
      })
      constants.popupPhotoClsBtn.addEventListener('click', () => {
        this._handleCloseCard();
      })
      this._element.querySelector('.element__button-delete').addEventListener('click', ()=> {
        this._deleteCard()
      })
      this._element.querySelector('.element__button-like').addEventListener('click', () => {
        this._pressLike()
      })
    }
     
  }

import * as constants from './constants.js';


import {openPopup} from './index.js' ;

export default class Card {
    constructor(data, templateSelector) {
    this._name=data.name;
    this._image=data.link;
    this._isLiked=false;
    this._templateSelector=templateSelector;
    this._element=this._getTemplate();
    this._cardImage=this._element.querySelector('.element__image');
    this._likeButton=this._element.querySelector('.element__button-like');
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
      this._element.querySelector('.element__name').textContent =this._name;
      this._cardImage.src=this._image;
      this._cardImage.alt=this._name;
      this._setEventListeners();
      return this._element;
  
    }
    
    _handleOpenCard() {
      constants.imageFull.src=this._image
      constants.imageFull.alt=this._name
      constants.imageCaption.textContent=this._name;
      openPopup(constants.popupPhoto);
    }

  
    _deleteCard() {
      this._element.remove();
    }
    _pressLike() {
      this._likeButton.classList.toggle('element__button-like_active');
    }
  
    _setEventListeners() {
      this._element.querySelector('.element__image').addEventListener('click', () => {
        this._handleOpenCard();
      })

      this._element.querySelector('.element__button-delete').addEventListener('click', ()=> {
        this._deleteCard()
      })
      this._likeButton.addEventListener('click', () => {
        this._pressLike()
      })
    }
     
  }

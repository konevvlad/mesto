const profileName = document.getElementById('profile__name');
const profileJob = document.getElementById('profile__job')
const inputName = document.querySelector('.popup__profile-input_title')
const inputJob = document.querySelector('.popup__profile-input_subtitle')
const popupOpenBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-button');
const additionOpnBtn = document.querySelector('.profile__add-button');
const addClsBtn = document.querySelector('.popup__addition-close-button');
const addPopup = document.querySelector('.popup__addition');
const addName = document.querySelector('.popup__addition-profile-input_title');
const addLink = document.querySelector('.popup__addition-profile-input_subtitle');
const elementName = document.querySelector('.element__name');
const elementImage = document.querySelector('.element__image');
const formElement = document.querySelector('.popup__editing-form');
const addFormElement=document.querySelector('.popup__addition-editing-form');
const popupPhotoClsBtn = document.querySelector('.popup__image-close-button');


function OpenButton(popup) {
  popup.classList.add('popup_active');
}

function CloseButton(popup) {
  popup.classList.remove('popup_active');
}

function CreateCard(name, link) {
  let placesContainer=document.querySelector('.elements')
  const elementTemplate=document.querySelector('#card-element').content;
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__name').textContent = name;
    cardElement.querySelector('.element__image').src = link;
    cardElement.querySelector('.element__image').alt = name;
    placesContainer.prepend(cardElement)
}

function loadCards() {
  initialCards.forEach(function(item){
    CreateCard(item.name, item.link)
    console.log(initialCards)
    pressLike();
    deleteCard();
    openFullPhoto()
  });
  }
  loadCards()


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
        const imageClick = document.querySelector('.element__image-click')
        const imageFull = document.querySelector('.popup__image-photo')
        const imageCaption = document.querySelector('.popup__image-title')
        const popupPhoto = document.querySelector('.popup__image')
        imageClick.addEventListener('click', function(evt) {
        console.log('нажато');
        imageFull.src=evt.target.src;
        imageCaption.textContent=evt.target.alt;
        OpenButton(popupPhoto);  
      })







popupCloseBtn.addEventListener('click', function() {
    CloseButton(popup);
    inputName.removeAttribute('value')
    inputJob.removeAttribute('value')

});

popupOpenBtn.addEventListener('click', function() {
    inputName.value=profileName.textContent;
    inputJob.value=profileJob.textContent;
    OpenButton(popup)  

})




formElement.addEventListener('submit', function(evt) {
        evt.preventDefault (); 
        profileName.textContent = inputName.value;
        profileJob.textContent = inputJob.value;
        CloseButton(popup);
    }
) 

 

addClsBtn.addEventListener('click', function() {
  CloseButton(addPopup);
});

additionOpnBtn.addEventListener('click', function() {
  addPopup.classList.add('popup_active')   

})



addFormElement.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (addName.value !== "" || addLink.value !== "") {
    CloseButton(addPopup);
    CreateCard(addName.value, addLink.value) }
      addFormElement.reset()
      pressLike()
      deleteCard();
      openFullPhoto()
     });



popupPhotoClsBtn.addEventListener('click', function(evt) {
  CloseButton(popupPhoto);
})

}


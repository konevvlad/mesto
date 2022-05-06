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


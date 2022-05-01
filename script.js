let popupOpenBtn = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup__close-button');
let inputName = document.querySelector('.popup__profile-title-input')
let inputJob = document.querySelector('.popup__profile-subtitle-input')
let profileName = document.getElementById('profile__name');
let profileJob = document.getElementById('profile__job')
console.log(profileName.textContent)
console.log(inputName.textContent)
popupOpenBtn.addEventListener('click', function() {
    popup.classList.add('popup_active')
    inputName.setAttribute('value', profileName.textContent)
    inputJob.setAttribute('value', profileJob.textContent)
    

}); 

popupCloseBtn.addEventListener('click', function() {
    popup.classList.remove('popup_active')
})



let formElement = document.querySelector('.popup__save-button')

formElement.addEventListener('click', function(evt) {
        evt.preventDefault (); 
        profileName.textContent = inputName.value;
        profileJob.textContent = inputJob.value;
        popup.classList.remove('popup_active');
    }
) 


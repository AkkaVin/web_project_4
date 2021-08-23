// alert("Hello word!")
let editProfileButton = document.querySelector(".profile__edit-btn");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");

let popup  = document.querySelector(".popup");
let popupCloseButton = popup.querySelector(".popup__close-btn");

let form = popup.querySelector(".form");
let formName = form.querySelector("input[name='name']");
let formJob = form.querySelector("input[name='job']");
let formSaveButton = form.querySelector(".form_save-btn");


function showPopup () {
  formName.value = profileName.textContent;
  formJob.value = profileJob.textContent;
  popup.classList.remove("popup_hide");
}

function hidePopup () {
  popup.classList.add("popup_hide");
}

function saveForm (e){
  e.preventDefault();

  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  hidePopup();
}

editProfileButton.addEventListener ('click',showPopup);
popupCloseButton.addEventListener ('click', hidePopup);
formSaveButton.addEventListener ('click',saveForm);





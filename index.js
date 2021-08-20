// alert("Hello word!")
const editProfileButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const popup  = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close-btn");

const form = popup.querySelector(".form");
const formName = form.querySelector("input[name='name']");
const formJob = form.querySelector("input[name='job']");
const formSaveButton = form.querySelector(".form_save-btn");


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





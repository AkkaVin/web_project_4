// alert("Hello word!")
const editProfileButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileProfessions = document.querySelector(".profile__professions");

const popup  = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close-btn");

const form = popup.querySelector(".form");
const formName = form.querySelector("input[name='name']");
const formProfessions = form.querySelector("input[name='professions']");



editProfileButton.addEventListener ('click',function (){
  formName.value = profileName.textContent;
  formProfessions.value = profileProfessions.textContent;

  popup.classList.remove("popup_hide");
})

popupCloseButton.addEventListener ('click',function (){
  popup.classList.add("popup_hide");
})





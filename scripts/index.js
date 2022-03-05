import FormValidator from './FormValidator.js';
import { Card } from './Card.js';
import {validationSettings} from './settings.js'
import { Cards as initialCards } from './initData.js';
import { imagePopup, showPopup, hidePopup } from "./utils.js";

import { toggleButtonState } from './validate.js'

// profile
// -- buttons
const editProfileButton = document.querySelector(".profile__edit-btn");
const addCardButton = document.querySelector(".profile__add-card-btn");
// -- inputs
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

// cards
const cardsContainer = document.querySelector(".cards__container");
const cardTemplateSelector = ".card-template";

// popups
const editProfilePopup = document.querySelector(".popup_type_profile-edit");
const addCardPopup = document.querySelector(".popup_type_add-card");
// imagePopup imported from utils

// forms
const editProfileForm = editProfilePopup.querySelector(".form");
const addCardForm = addCardPopup.querySelector(".form");

// validators
const editProfileFormValidator = new FormValidator (validationSettings,editProfileForm);
const addCardFormValidator = new FormValidator (validationSettings,addCardForm)

// -- buttons
const editProfilePopupCloseButton = editProfilePopup.querySelector(".popup__close-btn");
const addCardPopupCloseButton = addCardPopup.querySelector(".popup__close-btn");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close-btn");

const editProfileFormSaveButton = editProfileForm.querySelector(".form__save-btn");
const addCardFormSaveButton = addCardForm.querySelector(".form__save-btn");

// -- inputs
const editProfileFormInputList = [...editProfilePopup.querySelectorAll(".form__input")];
const inputTypeName = editProfileForm.querySelector(".form__input_type_name");
const inputTypeJob = editProfileForm.querySelector(".form__input_type_job");

const addCardFormInputList = [...addCardForm.querySelectorAll(".form__input")];
const inputTypeCardTitle = addCardForm.querySelector(".form__input_type_card-title"
);
const inputTypeUrl = addCardForm.querySelector(".form__input_type_url");

// all listeners

editProfileButton.addEventListener("click", () => {

  // init profile form
  initEditProfileForm();
  toggleButtonState(editProfileFormInputList,editProfileFormSaveButton, {inactiveButtonClass:"form__save-btn_inactive"});
  // show popup with form
  showPopup(editProfilePopup);
});

addCardButton.addEventListener("click", () => {
  // init add-card form
  addCardForm.reset();
  toggleButtonState(addCardFormInputList,addCardFormSaveButton, {inactiveButtonClass:"form__save-btn_inactive"});
  // show popup with form
  showPopup(addCardPopup);
});

editProfilePopupCloseButton.addEventListener("click", () =>
  hidePopup(editProfilePopup)
);
addCardPopupCloseButton.addEventListener("click", () =>
  hidePopup(addCardPopup)
);
imagePopupCloseButton.addEventListener("click", () => hidePopup(imagePopup));

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);
addCardForm.addEventListener("submit", handleAddCardFormSubmit);


/* init ---------------------------------------------------------*/

function init() {
  initCards();
}

function initCards() {
  initialCards.forEach((card) => addOneCard(card));
}

function initEditProfileForm() {
  inputTypeName.value = profileName.textContent;
  inputTypeJob.value = profileJob.textContent;
}

/* submit event forms handlers ----------------------------------------------------- */

function handleEditProfileFormSubmit(evt) {
  saveEditProfileForm(evt);
  hidePopup(editProfilePopup);
}

function handleAddCardFormSubmit(evt) {
  saveAddCardForm(evt);
  hidePopup(addCardPopup);
}

/* save profile edit / add card  form ---------------------------------------------------*/

function saveEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputTypeName.value;
  profileJob.textContent = inputTypeJob.value;
}

function saveAddCardForm(evt) {
  evt.preventDefault();
  const newCard = {
    name: inputTypeCardTitle.value,
    link: inputTypeUrl.value,
    alt: inputTypeCardTitle.value,
  };
  addOneCard(newCard);
}

/* --cards-------------------------------------------------------------------*/

function addOneCard(card) {
  const newCard = new Card(card, cardTemplateSelector)
  renderCard(newCard.getCardElement());
}

function renderCard(card) {
  cardsContainer.prepend(card);
}

/* -----------------------------------------*/

init();

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();





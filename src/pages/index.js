import "../pages/index.css"; // add import of the main stylesheets file
import FormValidator from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { UserInfo } from "../components/UserInfo";
import { Section } from "../components/Section.js"
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupWithForm } from "../components/PopupWithForm";
import { validationSettings } from '../utils/settings.js';
import { Cards as initialCards } from '../utils/initData.js';
// import { showPopup, hidePopup } from "../utils/utils.js";


// profile
// -- buttons
const editProfileButton = document.querySelector(".profile__edit-btn");
const addCardButton = document.querySelector(".profile__add-card-btn");

// -- inputs
const profileNameSelector = ".profile__name";
const profileJobSelector = ".profile__job";

const userProfile = new UserInfo ({
  userNameSelector: profileNameSelector,
  userJobSelector:  profileJobSelector
});

// cards

const cardsContainerSelector = ".cards__container";
const cardsContainer = document.querySelector(cardsContainerSelector);
const cardTemplateSelector = ".card-template";

// popups

const editProfilePopupSelector = ".popup_type_profile-edit";
const addCardPopupSelector = ".popup_type_add-card";
const imagePopupSelector = ".popup_type_image";

const editProfilePopup = document.querySelector(editProfilePopupSelector);
const addCardPopup = document.querySelector(addCardPopupSelector);
const imagePopup = document.querySelector(imagePopupSelector);

const imagePopupInstance = new PopupWithImage (imagePopupSelector);
const editProfilePopupInstance = new PopupWithForm (editProfilePopupSelector, (data) => {
  userProfile.setUserInfo({
      'userName': data.name,
      'userJob':  data.job,
   })
   editProfilePopupInstance.close();
});
const addCardPopupInstance = new PopupWithForm (addCardPopupSelector, (data) => {
  const newCardData = {
    name: data.cardTitle,
    link: data.url,
    alt: data.cardTitle,
  };
  const newCardInstance = getNewCardInstance (newCardData);
  const newCardElement = newCardInstance.getCardElement();

  cardsContainer.prepend(newCardElement);

  addCardPopupInstance.close();
})

// forms
const editProfileForm = editProfilePopup.querySelector(".form");
const addCardForm = addCardPopup.querySelector(".form");

// validators
const editProfileFormValidator = new FormValidator (validationSettings,editProfileForm);
const addCardFormValidator = new FormValidator (validationSettings,addCardForm)

// -- buttons
// const editProfilePopupCloseButton = editProfilePopup.querySelector(".popup__close-btn");
// const addCardPopupCloseButton = addCardPopup.querySelector(".popup__close-btn");
// const imagePopupCloseButton = imagePopup.querySelector(".popup__close-btn");

// -- inputs

// const inputTypeName = editProfileForm.querySelector(".form__input_type_name");
// const inputTypeJob = editProfileForm.querySelector(".form__input_type_job");


// const inputTypeCardTitle = addCardForm.querySelector(".form__input_type_card-title");
// const inputTypeUrl = addCardForm.querySelector(".form__input_type_url");


// all listeners
// old profile listener

// editProfileButton.addEventListener("click", () => {
//   // init profile form
//   initEditProfileForm();
//   // reset validation
//   editProfileFormValidator.resetValidation();
//   // show popup with form
//   showPopup(editProfilePopup);
// });

editProfileButton.addEventListener("click", () => {
  // init editProfile form
  initEditProfileForm();
  // reset validation
  editProfileFormValidator.resetValidation();
  // show popup with form
  editProfilePopupInstance.open();
});

// old listener
// addCardButton.addEventListener("click", () => {
//   // init add-card form
//   addCardForm.reset();
//   // reset validation
//   addCardFormValidator.resetValidation();
//   // show popup with form
//   showPopup(addCardPopup);
// });

addCardButton.addEventListener("click", () => {
  // init add-card form
  // empty
  // reset validation
  addCardFormValidator.resetValidation();
  // show popup with form
  addCardPopupInstance.open()
});



// editProfilePopupCloseButton.addEventListener("click", () =>
//   hidePopup(editProfilePopup)
// );
// addCardPopupCloseButton.addEventListener("click", () =>
//   hidePopup(addCardPopup)
// );
// imagePopupCloseButton.addEventListener("click", () => hidePopup(imagePopup));

// editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);
// addCardForm.addEventListener("submit", handleAddCardFormSubmit);


/* init ---------------------------------------------------------*/

function init() {
  initCards();
}

function initCards() {



}

function initEditProfileForm() {
  const info = userProfile.getUserInfo();
  editProfilePopupInstance.setInputValues ({
    'name': info.userName,
    'job': info.userJob,
  })
}

/* submit event forms handlers ----------------------------------------------------- */

// function handleEditProfileFormSubmit(evt) {
//   saveEditProfileForm(evt);
//   hidePopup(editProfilePopup);
// }

// function handleAddCardFormSubmit(evt) {
//   saveAddCardForm(evt);
//   // hidePopup(addCardPopup);
// }

/* save profile edit / add card  form ---------------------------------------------------*/

// function saveEditProfileForm(evt) {
//   evt.preventDefault();
//   profileName.textContent = inputTypeName.value;
//   profileJob.textContent = inputTypeJob.value;
// }

// function saveAddCardForm(evt) {
//   evt.preventDefault();
//   const newCard = {
//     name: inputTypeCardTitle.value,
//     link: inputTypeUrl.value,
//     alt: inputTypeCardTitle.value,
//   };
//   addOneCard(newCard);
// }

/* --cards-------------------------------------------------------------------*/

// function addOneCard(card) {
//   const newCard = new Card(card, cardTemplateSelector, () => {
//     const { src, text, alt } = card;
//     imagePopupInstance.open(src, text, alt);  //src, text, alt
//   })
//   renderCard(newCard.getCardElement());
// }

// add new one card to markup
function renderCard(card) {
  cardsContainer.prepend(card);
}

// get new card instance
function getNewCardInstance (newCardData) {
    return new Card(newCardData, cardTemplateSelector, () => {
      imagePopupInstance.open({
        'text': newCardData.name,
        'src': newCardData.link,
        'alt': newCardData.alt,
      });
    })
}


/* -----------------------------------------*/

// init();

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

editProfilePopupInstance.setEventListeners();
imagePopupInstance.setEventListeners();
addCardPopupInstance.setEventListeners()


const CardList = new Section({
  items: initialCards,
  renderer: (newCardData) => {
    const newCardInstance = getNewCardInstance (newCardData);
    const newCardElement = newCardInstance.getCardElement();

    CardList.addItem(newCardElement);
  }
}, cardsContainerSelector);


CardList.renderItems();

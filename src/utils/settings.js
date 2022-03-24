const validationSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-btn",
  inactiveButtonClass: "form__save-btn_inactive",
  inputErrorClass: "form__input_invalid",
  errorClass: "form__error_active"
}


// -- buttons
const editProfileButtonSelector = ".profile__edit-btn";
const addCardButtonSelector = ".profile__add-card-btn";

// -- inputs
const profileNameSelector = ".profile__name";
const profileJobSelector = ".profile__job";

// cards
const cardsContainerSelector = ".cards__container";
const cardTemplateSelector = ".card-template";

// popups
const editProfilePopupSelector = ".popup_type_profile-edit";
const addCardPopupSelector = ".popup_type_add-card";
const imagePopupSelector = ".popup_type_image";

export {
  validationSettings,
  editProfileButtonSelector,
  addCardButtonSelector,
  profileNameSelector,
  profileJobSelector,
  cardsContainerSelector,
  cardTemplateSelector,
  editProfilePopupSelector,
  addCardPopupSelector,
  imagePopupSelector
}

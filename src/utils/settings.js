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


//profile
// -- inputs
const profileNameSelector = ".profile__name";
const profileJobSelector = ".profile__job";
// -- avatar img
const profileAvatarSelector = ".profile__avatar";

// cards
const cardsContainerSelector = ".cards__container";
const cardTemplateSelector = ".card-template";

// popups
const editProfilePopupSelector = ".popup_type_profile-edit";
const addCardPopupSelector = ".popup_type_add-card";
const imagePopupSelector = ".popup_type_image";
const deleteCardPopupSelector = ".popup_type_delete-card";
const editProfileAvatarSelector = ".popup_type_profile-avatar-edit";

export {
  validationSettings,
  editProfileButtonSelector,
  addCardButtonSelector,
  profileNameSelector,
  profileJobSelector,
  profileAvatarSelector,
  cardsContainerSelector,
  cardTemplateSelector,
  editProfilePopupSelector,
  addCardPopupSelector,
  imagePopupSelector,
  deleteCardPopupSelector,
  editProfileAvatarSelector
}

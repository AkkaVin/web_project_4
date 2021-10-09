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

function initImagePopup(card) {
  const popupImage = imagePopup.querySelector(".popup__image");
  const popupImageTitle = imagePopup.querySelector(".popup__image-title");

  popupImage.src = card.link;
  popupImage.alt = card.alt;
  popupImageTitle.textContent = card.name;
}

/* show / hide  popup ----------------------------------------------------- */

function showPopup(popup) {
  popup.classList.remove("popup_hide");
}

function hidePopup(popup) {
  popup.classList.add("popup_hide");
}

/* submit event forms handlers ----------------------------------------------------- */

function profileFormHandler(evt) {
  saveEditProfileForm(evt);
  hidePopup(editProfilePopup);
}

function addCardFormHandler(evt) {
  saveAddCardForm(evt);
  hidePopup(addCardPopup);
}

/*--  save profile edit / add card  form ----------------------------------------------------------*/

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
  const newCard = createCard(card);
  renderCard(newCard);
}

function createCard(card) {
  const newCard = cardTemplate.cloneNode(true);

  newCard
    .querySelector(".card__remove-btn")
    .addEventListener("click", (evt) => {
      evt.currentTarget.parentElement.remove();
      evt.currentTarget.parentElement = null;
    });
  const newCardImage = newCard.querySelector(".card__image");
  newCardImage.src = card.link;
  newCardImage.alt = card.alt;
  newCardImage.addEventListener("click", (evt) => {
    // init image
    initImagePopup(card);
    //show image popup
    showPopup(imagePopup);
  });
  newCard.querySelector(".card__title").textContent = card.name;
  newCard
    .querySelector(".card__like-btn")
    .addEventListener("click", (evt) =>
      evt.currentTarget.classList.toggle("card__like-btn_active")
    );

  return newCard;
}

function renderCard(card) {
  cardsContainer.prepend(card);
}

/* -----------------------------------------*/

// init data
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    alt: "View of the Yosemite Valley with sun-scorched grass in the foreground and high mountains with coniferous forest in the distance.",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    alt: "View of Lake Louise in the middle of a valley with a water surface and a reflection of standing mountains in the distance",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    alt: "A view of the Bald Mountains from the height of one of the mountains and a view of the house and the forest in the intermontane lowlands",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
    alt: "View of the lunar flare on a frozen lake against the background of the starry sky",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    alt: "A view of a snow-covered path in the middle of Vanoise National Park surrounded by a slightly snow-covered winter mixed forest.",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
    alt: "View of the boats moored at the high pier at Lago di Braies",
  },
];

/* -----------------------------------------*/

// profile
// -- buttons
const editProfileButton = document.querySelector(".profile__edit-btn");
const addCardButton = document.querySelector(".profile__add-card-btn");
// -- inputs
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

// cards
const cardsContainer = document.querySelector(".cards__container");
const cardTemplate = document.querySelector(".card-template").content;

// popups
const editProfilePopup = document.querySelector(".popup_type_profile-edit");
const addCardPopup = document.querySelector(".popup_type_add-card");
const imagePopup = document.querySelector(".popup_type_image");

// -- buttons
const editProfilePopupCloseButton =
  editProfilePopup.querySelector(".popup__close-btn");
const addCardPopupCloseButton = addCardPopup.querySelector(".popup__close-btn");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close-btn");

// forms
const editProfileForm = editProfilePopup.querySelector(".form");
const addCardForm = addCardPopup.querySelector(".form");

// -- inputs
const inputTypeName = editProfileForm.querySelector(".form__input_type_name");
const inputTypeJob = editProfileForm.querySelector(".form__input_type_job");
const inputTypeCardTitle = addCardForm.querySelector(
  ".form__input_type_card-title"
);
const inputTypeUrl = addCardForm.querySelector(".form__input_type_url");

// all listeners

editProfileButton.addEventListener("click", () => {
  // init profile form
  initEditProfileForm();
  // show popup with form
  showPopup(editProfilePopup);
});

addCardButton.addEventListener("click", () => {
  // init add-card form
  addCardForm.reset();
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

editProfileForm.addEventListener("submit", profileFormHandler);
addCardForm.addEventListener("submit", addCardFormHandler);

/*------------------------------------------- */

init();

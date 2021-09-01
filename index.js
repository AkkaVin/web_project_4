/* init ---------------------------------------------------------*/

function init() {
  initCards();
}

function initCards() {
  initialCards.forEach((card) => addOneCard(card));
}

/* popup ----------------------------------------------------- */

function showPopup () {
  popup.classList.remove("popup_hide");

  formName.value = profileName.textContent;
  formJob.value = profileJob.textContent;
}

function hidePopup () {
  alert(this.parentElement.parentElement.classList);
  // alert(EventTarget.parentElement.parentElement.classList);
  // let popup = this.parentElement.parentElement;
  popup.classList.add("popup_hide");


}

// function togglePopup() {
//   alert(this.classList);

//   // always when close popup__close-btn
//   // -> parentElement while !popup

//   // profile__edit-btn / profile__add-card-btn / card__image
//   // ->

//   // switch ()
//   //  alert(Event.target);
//   // debugger;

//   let popup = this;

//   // if (popup.classList.contains("popup_hide")) {
//   if (!this.classList.contains("popup__close-btn")) {

//   alert    (this.classList.)
//     // switch (this.classList) {
//     //   case :
//     //   case "":
//     //   case "":
//     // }
//     alert ("123")
//     //  init profile edit form
//     formName.value = profileName.textContent;
//     formJob.value = profileJob.textContent;

//   } else {
//     alert("321")
//     do popup = popup.parentElement;
//     while (!popup.classList.contains("popup"));
//   }

//   popup.classList.toggle("popup_hide");
// }

/*--profile edit form ----------------------------------------------------------*/

function saveForm(evt) {
  evt.preventDefault();

  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  // togglePopup();

  alert(evt.currentTarget.classList);
  alert(evt.currentTarget.parentElement.parentElement.classList);
  // alert(evt.target.classList)
  hidePopup();
}

/* --cards-------------------------------------------------------------------*/

function addOneCard(card) {
  let newCard = cardTemplate.cloneNode(true);

  newCard
    .querySelector(".card__remove-btn")
    .addEventListener("click", (evt) =>
      evt.currentTarget.parentElement.remove()
    );
  let newCardImage = newCard.querySelector(".card__image");
  newCardImage.src = card.link;
  newCardImage.alt = card.alt;
  newCardImage.addEventListener("click", (evt) =>
    alert("TODO fullscreen card image")
  );
  newCard.querySelector(".card__title").textContent = card.name;
  newCard
    .querySelector(".card__like-btn")
    .addEventListener("click", (evt) =>
      evt.currentTarget.classList.toggle("card__like-btn_active")
    );

  cardsContainer.prepend(newCard);
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
let editProfileButton = document.querySelector(".profile__edit-btn");
let addCardButton = document.querySelector(".profile__add-card-btn");
// -- inputs
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");

// cards
let cardsContainer = document.querySelector(".cards__container");
let cardTemplate = document.querySelector(".card-template").content;

// popup
let popup = document.querySelector(".popup");
// -- buttons
let popupCloseButton = popup.querySelector(".popup__close-btn");

// edit_profile_form
let form = popup.querySelector(".form");
// -- buttons
let formSaveButton = form.querySelector(".form__save-btn");
// -- inputs
let formName = form.querySelector(".form__input_type_name");
let formJob = form.querySelector(".form__input_type_job");

// all listeners
editProfileButton.addEventListener("click", showPopup);
popupCloseButton.addEventListener("click", hidePopup);

addCardButton.addEventListener("click", function (evt) {
  const card = {
    name: "Yosemite Valley",
    // link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  };
  addOneCard(card);
});
form.addEventListener("submit", saveForm);

/*------------------------------------------- */
// init cards include
init();

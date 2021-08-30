/* popup ----------------------------------------------------- */

function togglePopup ()
{
  if (popup.classList.contains("popup_hide")) {
    formName.value = profileName.textContent;
    formJob.value = profileJob.textContent;

  }
  popup.classList.toggle("popup_hide");

}

/*--profile edit form ----------------------------------------------------------*/

function saveForm(e) {
  e.preventDefault();

  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  togglePopup();
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
  newCardImage.addEventListener("click", evt =>
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

/* // init data
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

*/

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
editProfileButton.addEventListener("click", togglePopup);
popupCloseButton.addEventListener("click", togglePopup);
addCardButton.addEventListener("click", function (evt) {
  const card = {
    name: "Yosemite Valley",
    // link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  };
  addOneCard(card);
});
form.addEventListener("submit", saveForm);

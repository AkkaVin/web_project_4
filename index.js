let editProfileButton = document.querySelector(".profile__edit-btn");
let addCardButton = document.querySelector(".profile__add-card-btn");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");

let popup = document.querySelector(".popup");
let popupCloseButton = popup.querySelector(".popup__close-btn");

let form = popup.querySelector(".form");
let formName = form.querySelector("input[name='name']");
let formJob = form.querySelector("input[name='job']");
let formSaveButton = form.querySelector(".form__save-btn");

let cardsContainer = document.querySelector(".cards__container");
let cardTemplate = document.querySelector(".card-template").content;
/*
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

function showPopup() {
  formName.value = profileName.textContent;
  formJob.value = profileJob.textContent;
  popup.classList.remove("popup_hide");
}

function hidePopup() {
  popup.classList.add("popup_hide");
}

function saveForm(e) {
  e.preventDefault();

  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  hidePopup();
}

function toggleCardLike (evt) {
  evt.currentTarget.classList.toggle("card__like-btn_active");
}

function addOneCard(card) {
  let newCard = cardTemplate.cloneNode(true);

  newCard.querySelector(".card__image").src = card.link;
  newCard.querySelector(".card__title").textContent = card.name;
  newCard.querySelector(".card__like-btn").addEventListener ("click", toggleCardLike)

  cardsContainer.prepend(newCard);
}

editProfileButton.addEventListener("click", showPopup);
popupCloseButton.addEventListener("click", hidePopup);
addCardButton.addEventListener("click", function (evt) {
  // alert("1");
  const card = {
    name: "Yosemite Valley",
    // link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
   link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  };
  addOneCard(card);
});

form.addEventListener("submit", saveForm);

// let cardTemplate = document.querySelector(".card-template").content;
console.log({ cardTemplate }, cardTemplate);


export class Card {
  constructor ( {name, link, alt}, templateCardSelector, handleCardClick){
    this._name = name;
    this._link = link;
    this._alt = alt;
    this._templateCardSelector = templateCardSelector;
    this._cardTemplate = document.querySelector(this._templateCardSelector).content;
    this._handleCardClick = handleCardClick;
  }

  _handleRemoveButton (evt) {
      evt.currentTarget.parentElement.remove();
  }

  _handleLikeButton (evt) {
    evt.currentTarget.classList.toggle("card__like-btn_active")
  }

  _setEventListeners () {
    const cardRemoveButton = this._newCard.querySelector(".card__remove-btn");
    const cardLikeButton = this._newCard.querySelector(".card__like-btn");
    const newCardImage = this._newCard.querySelector(".card__image");

    cardRemoveButton.addEventListener("click", this._handleRemoveButton);
    newCardImage.addEventListener("click", this._handleCardClick);
    cardLikeButton.addEventListener("click", this._handleLikeButton);
  }

  getCardElement () {
    this._newCard = this._cardTemplate.cloneNode(true);

    const newCardImage = this._newCard.querySelector(".card__image");

    newCardImage.src = this._link;
    newCardImage.alt = this._alt;
    this._newCard.querySelector(".card__title").textContent = this._name;

    this._setEventListeners ();

    return this._newCard;
  }
}

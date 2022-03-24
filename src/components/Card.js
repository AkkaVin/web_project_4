
export class Card {
  constructor ( {name, link, alt}, templateCardSelector, handleCardClick){
    // data
    this._name = name;
    this._link = link;
    this._alt = alt;
    //template
    this._cardTemplate = document.querySelector(templateCardSelector).content;
    // listener handlers
    this._handleCardClick = handleCardClick;
    // empty new card
    this._newCard = this._cardTemplate.cloneNode(true);
    // new card buttons
    this._cardRemoveButton = this._newCard.querySelector(".card__remove-btn");
    this._cardLikeButton = this._newCard.querySelector(".card__like-btn");
    // new card content
    this._newCardImage = this._newCard.querySelector(".card__image");
    this._newCardTitle = this._newCard.querySelector(".card__title");
  }

  _handleRemoveButton (evt) {
      evt.currentTarget.parentElement.remove();
  }

  _handleLikeButton (evt) {
    evt.currentTarget.classList.toggle("card__like-btn_active")
  }

  _setEventListeners () {
    this._cardRemoveButton.addEventListener("click", this._handleRemoveButton);
    this._newCardImage.addEventListener("click", this._handleCardClick);
    this._cardLikeButton.addEventListener("click", this._handleLikeButton);
  }

  getCardElement () {
    this._newCardImage.src = this._link;
    this._newCardImage.alt = this._alt;
    this._newCardTitle.textContent = this._name;

    this._setEventListeners ();

    return this._newCard;
  }
}

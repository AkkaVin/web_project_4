
export class Card {
  constructor (
    { // input data
      name,
      link,
      _id,
      ableToDelete,
      likes,
      isLiked,
      owner
    },
    templateCardSelector,
    { //handlers
      handleCardClick,
      handleRemoveButtonClick,
      handleLikeButtonClick
    }) {

    // data
    this._name = name;
    this._link = link;
    this._alt = name;
    this._id = _id;
    this._ableToDelete = ableToDelete;
    this._likes = likes;
    this._isLiked = isLiked;
    this._cardOwner = owner._id;

    //template
    this._cardTemplate = document.querySelector(templateCardSelector).content.querySelector(".card");
    // listener handlers
    this._handleCardClick = handleCardClick;
    this._handleRemoveButtonClick = handleRemoveButtonClick;
    this._handleLikeButtonClick = handleLikeButtonClick;

  }

  removeCard () {
    this._card.remove();
    this._card = null;
  }

  _handleLikeButton () {
    this._cardLikeButton.classList.toggle("card__like-btn_active")
  }

  _setEventListeners () {
    this._cardRemoveButton.addEventListener("click", () => {
      this._handleRemoveButtonClick(this)
    });
    this._cardImage.addEventListener("click", this._handleCardClick);

    this._cardLikeButton.addEventListener("click", (e) => this._handleLikeButtonClick(this));
  }

  setLikes (likes) {
    this._likes = likes
    this._cardLikesCount.textContent = this._likes.length;
    this._handleLikeButton();
    this._isLiked = !this._isLiked;
  }

  createCardElement () {

    // empty card
      // this._card = this._cardTemplate.cloneNode(true);
    this._getElement();
    // card buttons
    this._cardRemoveButton = this._card.querySelector(".card__remove-btn");
    if (this._ableToDelete)
      this._cardRemoveButton.classList.add("card__remove-btn_visible");
    this._cardLikeButton = this._card.querySelector(".card__like-btn");
    if (this._isLiked)
      this._handleLikeButton();
    // card content
    this._cardImage = this._card.querySelector(".card__image");
    this._cardTitle = this._card.querySelector(".card__title");
    this._cardLikesCount = this._card.querySelector(".card__likes-count");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;
    this._cardTitle.textContent = this._name;
    this._cardLikesCount.textContent = this._likes.length;

    this._setEventListeners ();

    return this._card;
  }

  _getElement () {
    this._card = this._cardTemplate.cloneNode(true);
  }
}

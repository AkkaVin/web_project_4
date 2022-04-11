
export class Card {
  constructor (
    { // input data
      name,
      link,
      _id,
      // ableToDelete,
      likes,
      // isLiked,
      owner,
      userId
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
    this._likes = likes;
    this._ownerId = owner._id;
    this._userId = userId;


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
    // this._isLiked = !this._isLiked;
  }

  createCardElement () {

    // empty card
      // this._card = this._cardTemplate.cloneNode(true);
    this._getElement();
    // card buttons
    this._cardRemoveButton = this._card.querySelector(".card__remove-btn");
    if (this._ownerId == this._userId)
      this._cardRemoveButton.classList.add("card__remove-btn_visible");

    this._cardLikeButton = this._card.querySelector(".card__like-btn");
    if (this._isLiked())
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

  // _renderLikes = () => {
  //   const likesCounter = this._cardElement.querySelector(".place__like-count");
  //   this._likesCount.textContent = likesCounter;

  //   if (this.isLiked()) {
  //     this._cardLikeButton.classList.add(...)
  //   } else {
  //     this._cardLikeButton.classList.remove(...)
  //   }
  // }

  _isLiked() {
   // return true if user liked the card, otherwise false
   return this._likes.some(like => like._id === this._userId)
  }
}

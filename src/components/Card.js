
export class Card {
  constructor (
    { // input data
      name,
      link,
      _id,
      aibleToDelete,
      likes,
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
    this._aibleToDelete = aibleToDelete;
    this._likes = likes;

    this._cardOwner = owner._id;

    // console.log(this._likes.length)
    //template
    this._cardTemplate = document.querySelector(templateCardSelector).content;
    // listener handlers
    this._handleCardClick = handleCardClick;
    this._handleRemoveButtonClick = handleRemoveButtonClick;
    this._handleLikeButtonClick = handleLikeButtonClick;
    // empty new card
    this._newCard = this._cardTemplate.cloneNode(true);
    // new card buttons
    this._cardRemoveButton = this._newCard.querySelector(".card__remove-btn");
    if (this._aibleToDelete)
      this._cardRemoveButton.classList.add("card__remove-btn_visible");
    this._cardLikeButton = this._newCard.querySelector(".card__like-btn");
    // new card content
    this._newCardImage = this._newCard.querySelector(".card__image");
    this._newCardTitle = this._newCard.querySelector(".card__title");
    this._newCardLikesCount = this._newCard.querySelector(".card__likes-count");
  }

  removeCard () {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleLikeButton (evt) {
    evt.currentTarget.classList.toggle("card__like-btn_active")
  }

  _setEventListeners () {
  this._cardRemoveButton.addEventListener("click", () => {
    // console.log(this)
    this._handleRemoveButtonClick(this._id)
    // .bind(this._handleRemoveButtonClick, this._id)
    // this.removeCard();
  });
    this._newCardImage.addEventListener("click", this._handleCardClick);

    this._cardLikeButton.addEventListener("click", (e) => this._handleLikeButtonClick(this, e));

  }

  setLikes (likes) {
    this._likes = likes
    this._newCardLikesCount.textContent = this._likes.length;
  }

  getCardElement () {
    this._newCardImage.src = this._link;
    this._newCardImage.alt = this._alt;
    this._newCardTitle.textContent = this._name;
    this._newCardLikesCount.textContent = this._likes.length;

    this._setEventListeners ();

    return this._newCard;
  }
}

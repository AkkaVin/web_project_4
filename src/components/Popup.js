const ESCAPE_KEY_CODE = 27;

export class Popup {
  constructor (popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  _handleEscClose = (e) => {
    if (e.which === ESCAPE_KEY_CODE) {
      this.close();
    }
  }

  _handleOverlayPopupContent = (e) => {
    if (e.currentTarget === e.target) {
      this.close();
    }
  }

  open () {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keyup",this._handleEscClose);
    this._popupElement.addEventListener('mousedown', this._handleOverlayPopupContent);
  }

  close () {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keyup",this._handleEscClose);
    this._popupElement.removeEventListener('mousedown', this._handleOverlayPopupContent);
  }

  setEventListeners () {
    this._popupElement.querySelector('.popup__close-btn').addEventListener("click", (e) => {
      e.preventDefault();
      this.close();
    })
  }
}

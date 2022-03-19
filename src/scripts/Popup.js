const ESCAPE_KEY_CODE = 27;

export class Popup {
  constructor (popupSelector) {
    this._popupElement = document.querySelector(popupSelector);

  }

  _handleEscClose = (e) => {
    if (evt.which === ESCAPE_KEY_CODE) {
      this.close();
    }
  }

  open = () => {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keyup",this._handleEscClose)
  }

  close = () => {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keyup",this._handleEscClose)
  }

  setEventListeners = () => {
    this._popupElement.querySelector('.popup__close-btn').addEventListener("click", (e) => {
      if (e.currentTarget === e.target) {
        this.close();
      }
    })
  }
}

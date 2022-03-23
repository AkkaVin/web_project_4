const ESCAPE_KEY_CODE = 27;

export class Popup {
  constructor (popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  _handleEscClose (e)  {


    console.log(e.which)
    if (e.which === ESCAPE_KEY_CODE) {
      console.log(e.which)
      this.close();
    }
  }

  open () {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keyup",this._handleEscClose)
  }

  close () {
    debugger
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keyup",this._handleEscClose)
  }

  setEventListeners () {
    this._popupElement.querySelector('.popup__close-btn').addEventListener("click", (e) => {
      // debugger
      e.preventDefault();
      if (e.currentTarget === e.target) {
        this.close();
      }
    })
  }
}

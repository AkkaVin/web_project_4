import {Popup} from "./Popup.js"

export class PopupWithSubmit extends Popup {

  constructor (popupWithSubmitSelector) {
    super(popupWithSubmitSelector);
    this._popupForm = this._popupElement.querySelector(".form");
    this._submitButton = this._popupForm.querySelector(".form__save-btn");
  }

  setAction(action) {
    this._handleSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmit()
    });
  }

  setButtonTextContent (text) {
    this._submitButton.textContent = text;
  }
}

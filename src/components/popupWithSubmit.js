import {Popup} from "./Popup.js"

export class PopupWithSubmit extends Popup {

  constructor (popupWithSubmitSelector) {
    super(popupWithSubmitSelector);
    this._popupForm = this._popupElement.querySelector(".form");
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
}

import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor (popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._popupForm = this._popupElement.querySelector(".form");
  }

  _getInputValues = () => {
      const inputs = [...this._popupForm.querySelector(".form__input")];
      const inputValues = {};

      inputs.forEach ((input) => {
        inputValues[input.name] = input.vaule;
      })

      return inputValues;
  }

  setEventListeners () {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", () => this._submitHandler(this._getInputValues()));
  }

  close = () => {
    super.close();
    this._popupForm.reset();
  }
}

import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor (popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._popupForm = this._popupElement.querySelector(".form");
    this._inputList = this._popupForm.querySelectorAll(".form__input");
    this._submitButton = this._popupForm.querySelector(".form__save-btn");
  }

  _getInputValues ()  {
    const inputValues = {};
    this._inputList.forEach ((input) => {
      inputValues[input.name] = input.value;
    })
    return inputValues;
  }

  setInputValues (data) {
    this._inputList.forEach  ( (input) => {
      input.value = data[input.name];
    })
  }

  setButtonTextContent (text) {
    this._submitButton.textContent = text;
  }

  setEventListeners () {

    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmit(this._getInputValues())
    }
    // , { once: true}  // use it if need delete after event fire once and need set new listener
    );
  }

  close () {
    super.close();
    this._popupForm.reset();
  }

}

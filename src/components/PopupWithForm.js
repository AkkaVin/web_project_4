import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor (popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._popupForm = this._popupElement.querySelector(".form");
    this._inputList = this._popupForm.querySelectorAll(".form__input");
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
    //  debugger
      input.value = data[input.name];
    })
  }

  setEventListeners () {

    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler(this._getInputValues())
    }
    // , { once: true}  // use it if need delete after event fire once and need set new listener
    );
  }

  close () {
    super.close();
    this._popupForm.reset();
  }

}

import {Popup} from "./Popup.js"

export class PopupWithSubmit extends Popup {

  constructor (popupWithSubmitSelector
    // , submitHandler
    ){
    super(popupWithSubmitSelector);
    this._popupForm = this._popupElement.querySelector(".form");
    // this._submitHandler = submitHandler;
  }

  setAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler()
      // this.close();
    });

  }

  openWithData(data) {
    super.open();
    if (data) {
        this._data = data;
    }
  }
}

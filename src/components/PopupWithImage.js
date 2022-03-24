import {Popup} from "./Popup.js"

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupImage = this._popupElement.querySelector(".popup__image");
    this._popupImageTitle = this._popupElement.querySelector(".popup__image-title");
  }

  open ({text, src, alt}) {

    this._popupImage.src = src
    this._popupImage.alt = alt;
    this._popupImageTitle.textContent = text;

    super.open();
  }
}

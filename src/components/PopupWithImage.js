import {Popup} from "./Popup.js"

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open ({text, src, alt}) {

    const popupImage = this._popupElement.querySelector(".popup__image");
    const popupImageTitle = this._popupElement.querySelector(".popup__image-title");

    popupImage.src = src
    popupImage.alt = alt;
    popupImageTitle.textContent = text;

    super.open();
  }
}

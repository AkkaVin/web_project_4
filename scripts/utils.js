export const imagePopup = document.querySelector(".popup_type_image");

const ESCAPE_KEY_CODE = 27;


export function initImagePopup (card)  {
  const popupImage = imagePopup.querySelector(".popup__image");
  const popupImageTitle = imagePopup.querySelector(".popup__image-title");

  popupImage.src = card.link;
  popupImage.alt = card.alt;
  popupImageTitle.textContent = card.name;
}

/* show / hide  popup ----------------------------------------------------- */
export function showPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keyup', handleEscapeUp)
  popup.addEventListener('mousedown', handleOverlayPopupContent)
}

export function hidePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keyup', handleEscapeUp)
  popup.removeEventListener('mousedown', handleOverlayPopupContent)
}

/* escape key up with popup handler ---------------------------------------------------*/

function handleEscapeUp (evt) {
  evt.preventDefault();
   // if realy ESC
  if (evt.which === ESCAPE_KEY_CODE) {
    hidePopup(getOpenPopup());
  }
}

/*  click overlay popup content handler ---------------------------------------------*/

function handleOverlayPopupContent (evt) {
  if (evt.currentTarget === evt.target) {
    hidePopup(getOpenPopup());
  }
}

/*  get open popup  --------------------------------------------------------------*/

function    getOpenPopup () {
  return document.querySelector('.popup_opened')
}

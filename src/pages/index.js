import "../pages/index.css"; // add import of the main stylesheets file
import { enableFormsValidation,
         formValidators } from '../components/FormValidator.js';
import { Card }           from '../components/Card.js';
import { UserInfo }       from "../components/UserInfo";
import { Section }        from "../components/Section.js"
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupWithForm }  from "../components/PopupWithForm";
import { Cards as initialCards } from '../utils/initData.js';
import { validationSettings,
         editProfileButtonSelector,
         addCardButtonSelector,
         profileNameSelector,
         profileJobSelector,
         cardsContainerSelector,
         cardTemplateSelector,
         editProfilePopupSelector,
         addCardPopupSelector,
         imagePopupSelector  }  from '../utils/settings.js';

//page
//-- buttons
const editProfileButton = document.querySelector(editProfileButtonSelector);
const addCardButton = document.querySelector(addCardButtonSelector);
//-- cards
const cardsContainer = document.querySelector(cardsContainerSelector);

//popups
//-- popups
const editProfilePopup = document.querySelector(editProfilePopupSelector);
const addCardPopup = document.querySelector(addCardPopupSelector);
//-- forms names
const editProfileFormName = editProfilePopup
  .querySelector(validationSettings.formSelector)
  .getAttribute('name');
const addCardFormName = addCardPopup
  .querySelector(validationSettings.formSelector)
  .getAttribute('name');


//------- init ------

// enable validation
enableFormsValidation(validationSettings);

//profile
const userProfile = new UserInfo ({
  userNameSelector: profileNameSelector,
  userJobSelector:  profileJobSelector
});

// card list
const cardList = new Section({
  items: initialCards,
  renderer: (newCardData) => {
    return getNewCardInstance (newCardData).getCardElement()
  }
}, cardsContainerSelector);

cardList.renderItems();


//-- popup instances
const imagePopupInstance = new PopupWithImage (imagePopupSelector);

const editProfilePopupInstance = new PopupWithForm (editProfilePopupSelector, (data) => {
  userProfile.setUserInfo({
      'userName': data.name,
      'userJob':  data.job,
   })
   editProfilePopupInstance.close();
});

const addCardPopupInstance = new PopupWithForm (addCardPopupSelector, (data) => {
  const newCardData = {
    name: data.cardTitle,
    link: data.url,
    alt: data.cardTitle,
  };
  cardList.addItem(newCardData)
  addCardPopupInstance.close();
})


// all listeners

editProfilePopupInstance.setEventListeners();
imagePopupInstance.setEventListeners();
addCardPopupInstance.setEventListeners()

editProfileButton.addEventListener("click", () => {
  // init editProfile form
  initEditProfileForm();
  // reset validation
  formValidators[editProfileFormName].resetValidation();
  // show popup with form
  editProfilePopupInstance.open();
});

addCardButton.addEventListener("click", () => {
  // init add-card form
  // empty
  // reset validation
  formValidators[addCardFormName].resetValidation();
  // show popup with form
  addCardPopupInstance.open()
});

/*-------------------------------------------------------------------- */

function initEditProfileForm() {
  const info = userProfile.getUserInfo();
  editProfilePopupInstance.setInputValues ({
    'name': info.userName,
    'job': info.userJob,
  })
}

// get new card instance
function getNewCardInstance (newCardData) {
    return new Card(newCardData, cardTemplateSelector, () => {
      imagePopupInstance.open({
        'text': newCardData.name,
        'src': newCardData.link,
        'alt': newCardData.alt,
      });
    })
}


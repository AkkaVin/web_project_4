import "../pages/index.css"; // add import of the main stylesheets file
import { FormValidator}   from '../components/FormValidator.js';
import { Card }           from '../components/Card.js';
import { UserInfo }       from "../components/UserInfo";
import { Section }        from "../components/Section.js"
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupWithForm }  from "../components/PopupWithForm";
import { PopupWithSubmit } from "../components/popupWithSubmit";
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
         imagePopupSelector,
         deleteCardPopupSelector  }  from '../utils/settings.js';
import { api } from "../components/Api.js";

// api.getInitialCards()
//   .then ( res => {
//     cardList.renderItems(res);
//     // console.log('res',res)
//     // TODO check alt tag!!!
//   })

// api.getUserInfo()
//   .then ( res => {
//     userProfile.setUserInfo({
//       userName: res.name,
//       userJob: res.about
//     })
//     // console.log('res',res)
// })

let userId;
//  TODO incapsulate into userInfo => cause not changed

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cardInitlData, userInfo]) => {
    // console.log(cardInitlData)
    cardInitlData.forEach ( card => {
      card.aibleToDelete = card.owner._id == userInfo._id ? true : false
      card.isLiked = card.likes.some ( (like) => {
        return like._id === userInfo._id;
      })
      // console.log(card.likes)
      // console.log(card.isLiked) // not work now
    })
    cardList.renderItems(cardInitlData);
    userProfile.setUserInfo({
      userName: userInfo.name,
      userJob: userInfo.about
    })
    userId = userInfo._id;
    // console.log(userId)
})



//page
//-- buttons
const editProfileButton = document.querySelector(editProfileButtonSelector);
const addCardButton = document.querySelector(addCardButtonSelector);

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

const formValidators = {};

// enable list of validators
const enableFormsValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(settings, formElement);
    // get the name of the form
    const formName = formElement.getAttribute('name');
    // store a validator by the `name` of the form
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

// enable validation
enableFormsValidation(validationSettings);

//profile
const userProfile = new UserInfo ({
  userNameSelector: profileNameSelector,
  userJobSelector:  profileJobSelector
});


// card list
const cardList = new Section({
  // items: initialCards,
  items: [],
  renderer: (cardData) => {
    return getNewCardInstance (cardData).getCardElement()
  }
}, cardsContainerSelector);

// cardList.renderItems(initialCards);

//-- popup instances
const imagePopupInstance = new PopupWithImage (imagePopupSelector);

const editProfilePopupInstance = new PopupWithForm (editProfilePopupSelector, (data) => {
  userProfile.setUserInfo({
      'userName': data.name,
      'userJob':  data.job,
   })
   editProfilePopupInstance.close();
});

// const deleteCardPopup = new PopupWithSubmit (deleteCardPopupSelector);
const deleteCardPopup = new PopupWithSubmit (deleteCardPopupSelector
//   , (data) => {

// }
);

const addCardPopupInstance = new PopupWithForm (addCardPopupSelector, (data) => {
  // console.log(data)
  api.createCard({
    name: data.cardTitle,
    link: data.url
  })
    .then( res => {
      const newCardData = {
        name: res.name,
        link: res.link,
        alt: res.name,
        id: res._id,
        aibleToDelete: true,
        likes: [],
        isLiked,
        owner: { _id: userId}
      }
      cardList.addItem(newCardData)
      addCardPopupInstance.close();
  })
})

// all listeners

editProfilePopupInstance.setEventListeners();
imagePopupInstance.setEventListeners();
addCardPopupInstance.setEventListeners();
deleteCardPopup.setEventListeners();

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

function handleRemoveButtonClick (
  // data
  id)  {
// console.log(id)
  // open popup and wait for confirmation
  deleteCardPopup.open();
  // deleteCardPopup.openWithData(this);
  // if confirmed  - delete from server
   deleteCardPopup.setAction(() => {
    api.deleteCard(
      // data._id
      id
      )
    .then ( res => {
      // console.log(res.ok)
      // data.removeCard();
      deleteCardPopup.close();
    })
  })
}

// get new card instance
function getNewCardInstance (data) {

  const card = new Card(
    data,
    cardTemplateSelector,
    {
      handleCardClick: () => {
      imagePopupInstance.open({
        'text': data.name,
        'src': data.link,
        'alt': data.alt,
        });
      },
      handleRemoveButtonClick,
      handleLikeButtonClick: (instance) => {
        const action = instance._isLiked ? 'unlikeCard': 'likeCard';
        api[action](instance._id)
          .then ( res =>
            instance.setLikes(res.likes)
        )
      }
    }
  )
  return card;
}



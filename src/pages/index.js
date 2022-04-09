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
         profileAvatarSelector,
         cardsContainerSelector,
         cardTemplateSelector,
         editProfilePopupSelector,
         addCardPopupSelector,
         imagePopupSelector,
         deleteCardPopupSelector,
         editProfileAvatarSelector  }  from '../utils/settings.js';
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
    // console.log(userInfo)
    userProfile.initUserInfo({
      userName: userInfo.name,
      userJob: userInfo.about,
      userAvatarSrc: userInfo.avatar,
      userId: userInfo._id,
    })
    userId = userInfo._id;
    // console.log(userId)


    cardInitlData.forEach ( card => {
      card.aibleToDelete = card.owner._id == userInfo._id ? true : false
      card.isLiked = card.likes.some ( (like) => {
        return like._id === userInfo._id;
      })
      // console.log(card.likes)
      // console.log(card.isLiked) // not work now
    })
    cardList.renderItems(cardInitlData);
})



//page
//-- buttons
const editProfileButton = document.querySelector(editProfileButtonSelector);
const addCardButton = document.querySelector(addCardButtonSelector);

//-- profile
//avatar
const profileAvatar = document.querySelector(profileAvatarSelector);

//popups
//-- popups
const editProfilePopup = document.querySelector(editProfilePopupSelector);
const addCardPopup = document.querySelector(addCardPopupSelector);
const editProfileAvatarPopup = document.querySelector(editProfileAvatarSelector);
//-- forms names
const editProfileFormName = editProfilePopup
  .querySelector(validationSettings.formSelector)
  .getAttribute('name');
const addCardFormName = addCardPopup
  .querySelector(validationSettings.formSelector)
  .getAttribute('name');
const editProfileAvatarFormName = addCardPopup
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
  userJobSelector:  profileJobSelector,
  userAvatarSelector: profileAvatarSelector,
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
  editProfilePopupInstance.setButtonTextContent("Saving...");
  api.updateUserInfoTextContent({
    name: data.name,
    about: data.job,
  })
  .then ( res => {
    editProfilePopupInstance.setButtonTextContent("Save");
    userProfile.setUserInfoTextContent({
      'userName': res.name,
      'userJob':  res.about,
    })
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
  addCardPopupInstance.setButtonTextContent("Creating...");
  api.createCard({
    name: data.cardTitle,
    link: data.url
  })
    .then( res => {
      addCardPopupInstance.setButtonTextContent("Create");
      // console.log(userProfile.getUserId());
      const newCardData = {
        name: res.name,
        link: res.link,
        alt: res.name,
        _id: res._id,
        aibleToDelete: true,
        likes: [],
        isLiked: false,
        // owner: { _id: userId}
        owner: { _id: userProfile.getUserId()}
      }
      cardList.addItem(newCardData)
      addCardPopupInstance.close();
  })
})


const editProfileAvatarInstance = new PopupWithForm (editProfileAvatarSelector, (data) => {
  editProfileAvatarInstance.setButtonTextContent("Saving...");
  api.updateUserInfoAvatar({
    avatar: data.url,
  })
  .then ( res => {
    editProfileAvatarInstance.setButtonTextContent("Save");
    userProfile.setUserInfoAvatar(  res.avatar)
    editProfileAvatarInstance.close();
  })
});

// all listeners

editProfilePopupInstance.setEventListeners();
imagePopupInstance.setEventListeners();
addCardPopupInstance.setEventListeners();
deleteCardPopup.setEventListeners();
editProfileAvatarInstance.setEventListeners();

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

profileAvatar.addEventListener ("click", () => {
  // init profile-avatar-edit form
  const info = userProfile.getUserInfo();
  editProfileAvatarInstance.setInputValues ({
    'url': info.userAvatar
  })
  // reset validation
  formValidators[editProfileAvatarFormName].resetValidation();
  // show popup with form
  editProfileAvatarInstance.open();
})

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
  instance)  {

  // open popup and wait for confirmation
  deleteCardPopup.open();
  // deleteCardPopup.openWithData(this);
  // if confirmed  - delete from server
   deleteCardPopup.setAction(() => {
    api.deleteCard(
      instance._id
    )
    .then ( res => {
      deleteCardPopup.close();
      instance.removeCard();
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
        // debugger
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



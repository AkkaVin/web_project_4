// alert("Hello word!")
const editProfileButton = document.querySelector(".profile__edit-btn");
const popup  = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close-btn");


console.log (editProfileButton);
console.log (popup);
console.log (popupCloseButton);


editProfileButton.addEventListener ('click',function (){
  popup.classList.remove("popup_hide");
})

popupCloseButton.addEventListener ('click',function (){
  popup.classList.add("popup_hide");
})

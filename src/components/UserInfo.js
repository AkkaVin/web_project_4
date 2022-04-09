export class UserInfo {
  constructor ({ userNameSelector, userJobSelector, userAvatarSelector}){
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
  }

  getUserInfo () {
    return {
      "userName": this._userNameElement.textContent,
      "userJob": this._userJobElement.textContent,
      "userAvatar": this._userAvatarElement.src
    }
  }

  getUserId () {
    return this._userId;
  }

  setUserInfoTextContent ( {userName, userJob}) {
    this._userNameElement.textContent = userName;
    this._userJobElement.textContent = userJob;
  }


  setUserInfoAvatar ( userAvatarSrc) {
    this._userAvatarElement.src = userAvatarSrc;
  }

  initUserInfo ({ userName, userJob, userAvatarSrc, userId }) {
    this.setUserInfoTextContent ( {userName, userJob});
    this.setUserInfoAvatar (userAvatarSrc);
    this._userId = userId;
  }
}


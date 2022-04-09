export class UserInfo {
  constructor ({ userNameSelector, userJobSelector, userAvatarSelector}){
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
    // this._id = null;
  }

  getUserInfo () {
    return {
      "userName": this._userNameElement.textContent,
      "userJob": this._userJobElement.textContent,
      "userAvatar": this._userAvatarElement.src
      // "userId": this._userId
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
    // console.log(this.userAvatarSrc)
    this._userAvatarElement.src = userAvatarSrc;
    // console.log(this._userAvatarElement.src)
    // debugger
  }

  initUserInfo ({ userName, userJob, userAvatarSrc, userId }) {
    this.setUserInfoTextContent ( {userName, userJob});
    this.setUserInfoAvatar (userAvatarSrc);
    this._userId = userId;
  }
}


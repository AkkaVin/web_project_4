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

  initUserInfo ({ userName, userJob, userAvatarSrc }) {
    this.setUserInfoTextContent ( {userName, userJob});
    this.setUserInfoAvatar (userAvatarSrc);
    // debugger
    // this._userJobElement.textContent = userJob;
    // this._userId =  this._userId ? this._userId : userId;
  }
}


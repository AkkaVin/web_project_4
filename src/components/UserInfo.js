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

  setUserInfo ({ userName, userJob, userAvatarSrc }) {
    this._userNameElement.textContent = userName;
    this._userJobElement.textContent = userJob;
    this._userAvatarElement.src = userAvatarSrc;
    // this._userJobElement.textContent = userJob;
    // this._userId =  this._userId ? this._userId : userId;
  }
}


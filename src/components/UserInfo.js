export class UserInfo {
  constructor ({ userNameSelector, userJobSelector}){
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
    // this._id = null;
  }

  getUserInfo () {
    return {
      "userName": this._userNameElement.textContent,
      "userJob": this._userJobElement.textContent,
      "userId": this._userId
    }
  }

  setUserInfo ({ userName, userJob, userId}) {
    this._userNameElement.textContent = userName;
    this._userJobElement.textContent = userJob;
    // this._userId =  this._userId ? this._userId : userId;
  }
}


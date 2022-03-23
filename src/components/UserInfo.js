export class UserInfo {
  constructor ({ userNameSelector, userJobSelector}){
    this._userNameSelector = userNameSelector;
    this._userJobSelector = userJobSelector;

    this._userNameElement = document.querySelector(this._userNameSelector);
    this._userJobElement = document.querySelector(this._userJobSelector);
  }

  getUserInfo () {
    return {
      "userName": this._userNameElement.textContent,
      "userJob": this._userJobElement.textContent
    }
  }

  setUserInfo ({ userName, userJob}) {
    this._userNameElement.textContent = userName;
    this._userJobElement.textContent = userJob;
  }
}


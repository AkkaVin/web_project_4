export class UserInfo {
  constructor ({ userNameSelector, userJobSelector}){
    this._userNameSelector = userNameSelector;
    this._userJobSelector = userJobSelector;

    this._userNameElement = document.querySelector(this._userNameSelector);
    this._userJobElement = document.querySelector(this._userJobSelector);
  }

  getUserInfo = () => {
    return {
      "userName": this._userNameElement.innerText, //this._userNameElement.value,
      "userJob": this._userJobElement.innerText //this._userJobElement.value
    }
  }

  setUserInfo = ({ userName, userJob}) => {
    this._userNameElement.innerText = userName;
    this._userJobElement.innerText = userJob;
  }
}


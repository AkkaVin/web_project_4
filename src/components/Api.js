class Api {
  constructor ({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _customFetch (fullUrl, headers) {
    return fetch (fullUrl, headers)
      .then(res => res.ok ? res.json(): Promise.reject(res.statusText))
      .catch(console.log)
  }

  getInitialCards() {
    return this._customFetch (`${this._baseUrl}/cards`, {
      headers: this._headers
    })
  }

  getUserInfo() {
    return this._customFetch (`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
  }

  updateUserInfoTextContent(data) {
    return this._customFetch (`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(data)
    })
  }

  updateUserInfoAvatar(data) {
    return this._customFetch (`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(data)
    })
  }

  createCard(data) {
    return this._customFetch (`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  deleteCard(cardId) {
    // console.log(cardId)
    return this._customFetch (`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE'
    })
  }

  likeCard(cardId) {
    // console.log(cardId)
    return this._customFetch (`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: 'PUT'
    })
  }

  unlikeCard(cardId) {
    // console.log(cardId)
    return this._customFetch (`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: 'DELETE'
    })
  }

  // other methods for working with the API
}

 export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "61377b51-0560-4b73-a405-aecc1e0478a6",
    "Content-Type": "application/json"
  }
});

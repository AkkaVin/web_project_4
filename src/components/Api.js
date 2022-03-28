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



  // other methods for working with the API
}

 export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "61377b51-0560-4b73-a405-aecc1e0478a6",
    "Content-Type": "application/json"
  }
});

class FormValidator {
  constructor (settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._inputs = [...this._formElement.querySelectorAll(this._settings.inputSelector)];
    this._saveButton = this._formElement.querySelector(this._settings.submitButtonSelector);
  }

  _toggleButtonState = (button) => {

    if (this._hasInvalidInput(this._inputs)) {
      button.classList.add(this._settings.inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(this._settings.inactiveButtonClass);
      button.disabled = false;
    }
  }

  _hasInvalidInput = inputs =>
    inputs.some (input =>
      !input.validity.valid)

  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
      this._showError(input, input.validationMessage);
    } else {
      this._hideError(input);
    }
  }

  _showError = (input, errorMessage) => {
    input.classList.add(this._settings.inputErrorClass);
    const errorElement = this._formElement.querySelector(`#${input.id}-error`)
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  };

  _hideError = (input) => {
    input.classList.remove(this._settings.inputErrorClass);
    const errorElement = this._formElement.querySelector(`#${input.id}-error`)
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = "";
  };


  resetValidation = () => {
    this._inputs.forEach ( input => {
      this._hideError(input);
    })
    this._toggleButtonState(this._saveButton);
  }

  enableValidation = () => {

    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    })
    this._toggleButtonState(this._saveButton);

    this._inputs.forEach( input => {
      input.addEventListener('input',() =>{
          this._checkInputValidity(input);
          this._toggleButtonState(this._saveButton);
      })
    })
  }
}

export default FormValidator

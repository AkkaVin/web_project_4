class FormValidator {
  constructor (settings, formElement) {
    this.settings = settings;
    this.formElement = formElement;
    this._inputs = [...this.formElement.querySelectorAll(this.settings.inputSelector)];
  }

  _toggleButtonState (button){

    if (this._hasInvalidInput(this._inputs)) {
      button.classList.add(this.settings.inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(this.settings.inactiveButtonClass);
      button.disabled = false;
    }
  }

  _hasInvalidInput = inputs =>
    inputs.some (input =>
      !input.validity.valid)

  _checkInputValidity (input) {
    if (!input.validity.valid) {
      this._showError(input, input.validationMessage);
    } else {
      this._hideError(input);
    }
  }

  _showError = (input, errorMessage) => {
    input.classList.add(this.settings.inputErrorClass);
    const errorElement = this.formElement.querySelector(`#${input.id}-error`)
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.settings.errorClass);
  };

  _hideError = (input) => {
    input.classList.remove(this.settings.inputErrorClass);
    const errorElement = this.formElement.querySelector(`#${input.id}-error`)
    errorElement.classList.remove(this.settings.errorClass);
    errorElement.textContent = "";
  };

  enableValidation() {

    this.formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    })

    const saveButton = this.formElement.querySelector(this.settings.submitButtonSelector);
    this._toggleButtonState(saveButton);

    this._inputs.forEach( input => {
      input.addEventListener('input',() =>{
          this._checkInputValidity(input);
          this._toggleButtonState(saveButton);
      })
    })
  }
}

export default FormValidator

const validationSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-btn",
  inactiveButtonClass: "form__save-btn_inactive",
  inputErrorClass: "form__input_invalid",
  errorClass: "form__error_active"
}

const showError = (input, errorMessage, settings) => {
  input.classList.add(settings.inputErrorClass);
  const errorElement = document.querySelector(`#${input.id}-error`)
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

const hideError = (input, settings) => {
  input.classList.remove(settings.inputErrorClass);
  const errorElement = document.querySelector(`#${input.id}-error`)
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
};

function checkInputValidity (input, settings) {
  if (!input.validity.valid) {
    showError(input, input.validationMessage, settings);
  } else {
    hideError(input, settings);
  }
}

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

function toggleButtonState (inputs, button, settings){

  if (hasInvalidInput(inputs)) {
    button.classList.add(settings.inactiveButtonClass);
    button.disabled = 'disabled';
  } else {
    button.classList.remove(settings.inactiveButtonClass);
    button.disabled = false;
  }
}

// to switch on validation
function  enableValidation(settings) {

  const {formSelector, inputSelector, submitButtonSelector,...otherSettings} = settings;
  // forms
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach (form => {
    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    })
    const inputs = [...form.querySelectorAll(inputSelector)];
    const saveButton = form.querySelector(submitButtonSelector);

    toggleButtonState(inputs,saveButton, otherSettings)

    inputs.forEach( input => {
      input.addEventListener('input',() =>{
          checkInputValidity(input, otherSettings)
          toggleButtonState(inputs,saveButton, otherSettings)
      })
    })
  })
}

// switch on validation
enableValidation(validationSettings);


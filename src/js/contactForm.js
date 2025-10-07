const emailValidationOnChangeListener = () => {
  const emailBlockElement = document.querySelector(".email__feedback");
  const input = document.getElementById("email");
  const emailValue = input.value;
  
  if (emailValue.length > 0 && !emailValue.includes("@")) {
    emailBlockElement.classList.remove("valid");
  } else {
    emailBlockElement.classList.add("valid");
  }
}

const prepareEmailValidation = () => {
  const input = document.getElementById("email");

  input.addEventListener("change", emailValidationOnChangeListener)
}

export { prepareEmailValidation };
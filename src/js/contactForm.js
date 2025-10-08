
const VALIDCLASS = 'valid';

const validateEmail = (emailValue, emailFeedbackElement) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validates = emailPattern.test(emailValue);
  
  if (!validates) {
    emailFeedbackElement.classList.remove(VALIDCLASS);
  } else {
    emailFeedbackElement.classList.add(VALIDCLASS);
  }

  return validates;
}

const emailValidationOnChangeListener = () => {
  const emailFeedbackElement = document.querySelector('.email__feedback');
  const input = document.getElementById('email');
  const emailValue = input.value;
  
  return validateEmail(emailValue, emailFeedbackElement);
}

const prepareEmailValidation = () => {
  const emailInput = document.getElementById('email');
  const form = document.getElementById('contactForm');

  emailInput.addEventListener('change', emailValidationOnChangeListener);
  form.addEventListener('submit', (event) => {
    if (!emailValidationOnChangeListener()) {
      event.preventDefault();
    } else {
      emailInput.value = '';
    }
  });
}

export { prepareEmailValidation };
class Validator {
  validateEmail(email) {
    const emailRegex =
      /^[a-zA-Z0-9!#\\$%&'*+-/=?^_`{|}~]+(?<!\.\.)\.?[a-zA-Z0-9!#\\$%&'*+-/=?^_`{|}~]+(?<!\.)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
  }

  validatePassword(password) {
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W_]{8,}$/;

    return passwordRegex.test(password);
  }

  validatePasswordConfirmation(password, confirmation) {
    // Check if password matches confirmation
    return password === confirmation;
  }

  validateName(input) {
    // Regular expression for name and surname validation
    const nameSurnameRegex = /^[a-zA-Zа-яА-Я]{3,20}$/u;
    return nameSurnameRegex.test(input);
  }
  validateCustomPhone(phone) {
    return /^\d{9}$/.test(phone); // Custom format: 9 digits
  }
  validatePhone(input) {
    // This regular expression accepts phone numbers that start with a '+' sign
    const phoneRegex = /^\+[0-9]{1,17}$/;

    return phoneRegex.test(input);
  }

  validateNumber(input) {
    // This regular expression accepts phone numbers that start with a '+' sign
    // const phoneRegex = /^\+[0-9]{1,17}$/;
    const phoneRegex = /^(\d{0-17}|\d{1,17})$/;

    return phoneRegex.test(input);
  }
  validateStreet(input) {
    // Regular expression for name and surname validation
    const addressRegex = /^[a-zA-Zа-яА-Я]{3,20}$/u;
    return addressRegex.test(input);
  }
  validateCardNumber(input) {
    if (input.length === 16) return input;
  } validateCardExpire(input) {
    if (input.length === 4) return input;
  } validateCardCVV(input) {
    if (input.length === 3) return input;
  }
}

export default new Validator();

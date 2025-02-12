export default class NameValidator {
  validateFirstName(fname) {
    const regex = /^[a-zA-Z]{2,}$/;
    return regex.test(fname);
  }
   validateLastName(fname) {
    const regex = /^[a-zA-Z]{2,}$/;
    return regex.test(fname);
  }
}

export const nameValidator = new NameValidator();

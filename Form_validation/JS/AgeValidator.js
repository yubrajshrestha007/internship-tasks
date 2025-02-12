class AgeValidator {
    constructor(){}
  validateAge(age) {
    const regex = /^[0-9]{1,3}$/;
    return regex.test(age) && parseInt(age) >= 18 && parseInt(age) <= 100;
  }
}
export const ageValidator = new AgeValidator() ;

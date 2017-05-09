export class ValidationService {
     
  static getValidatorErrorMessage(code: string, length: any) {
    let reqLength = parseInt(length);
    let config = {
      'required': 'Required',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'invalidPhone': 'Invalid phone format',
      'minlength' : 'At least ' + reqLength + ' characters is required'
    };
    return config[code];
  }

     
  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
        return { 'invalidEmailAddress': true };
      }
    }
     
   static passwordValidator(control) {
     // {6,100}           - Assert password is between 6 and 100 characters
     // (?=.*[0-9])       - Assert a string has at least one number
      if (control.value.match(/\d?(\s?|-?|\+?|\.?)((\(\d{1,4}\))|(\d{1,3})|\s?)(\s?|-?|\.?)((\(\d{1,3}\))|(\d{1,3})|\s?)(\s?|-?|\.?)((\(\d{1,3}\))|(\d{1,3})|\s?)(\s?|-?|\.?)\d{3}(-|\.|\s)\d{4}/)) {
        return null;
      } else {
        return { 'invalidPassword': true };    
     }
   }

   static phoneValidator(control) {
       // to validate international and us numbers
       if (control.value.match(/^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){3,24}$/)) {
         return null;
       } else {
         return { 'invalidPhone': true };
       }
   }
}

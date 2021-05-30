function passwordValidator(pass) {
    let numberLength = (pass.match(/\d/g) || []).length;
    function isValidLetters(word) {
        let isPassValid = true;
        for (let k = 0; k < word.length; k++) {
          let code = word[k].charCodeAt(0);
          if (
            (code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122)
          ) {
            isPassValid = true;
          } else {
            isPassValid = false;
            break;
          }
        }
        return isPassValid
          ? true
          : false;
      }

      let validPassword = isValidLetters(pass);
//     •	The length should be 6 - 10 characters (inclusive)
// •	It should consists only of letters and digits
// •	It should have at least 2 digits 
// If a password is valid print "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"
    if (validPassword === true && (pass.length >=6 && pass.length <= 10) && numberLength > 1 ) {
        console.log(`Password is valid`);
      }
     if (pass.length < 6) {
        console.log("Password must be between 6 and 10 characters");
    }
     if (validPassword === false) {
        console.log("Password must consist only of letters and digits");
    }
     if (numberLength < 2) {
        console.log("Password must have at least 2 digits");
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
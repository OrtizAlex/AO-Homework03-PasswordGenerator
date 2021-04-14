//Arrays of all possible password characters

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

function criteria(){
    var passwordLength = parseInt(prompt("How long of a password do you want?"));

    if(isNaN(passwordLength)){
      alert("Please use provide a numerical value")
      return;
    }
    else if(passwordLength < 8){
      alert("For a password to be secure it must be at least 8 characters");
      return;
    }
    else if(passwordLength > 128){
      alert("Password length must be less than 128 characters");
      return;
    }

    alert("Please follow the prompts to create the password. Click on OK ");

    var hasNumbers = confirm("Click OK to use numbers");
    var hasUpperCasedLetters = confirm("Click ok to use uppercase characters");
    var hasLowerCasedLetters = confirm("Click ok to use lowercase letters");
    var hasSpecialCharacters = confirm("Click ok to use special characters");

    if(!hasNumbers && !hasUpperCasedLetters && !hasLowerCasedLetters && !hasSpecialCharacters){
      alert("You must select at least one character type to create a secure password");
      return;
    }
    
    var passwordCriteria = {
      passwordLength: passwordLength,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumbers: hasNumbers,
      hasLowerCasedLetters: hasLowerCasedLetters,
      hasUpperCasedLetters: hasUpperCasedLetters
    };
  
    return passwordCriteria;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
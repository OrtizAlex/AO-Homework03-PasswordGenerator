var password = document.querySelector("textarea");

//Arrays of all possible password characters

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

//Prompts user to create criteria for password
function criteria(){
  
    alert("Please complete all the prompts to create the password criteria");
    //Prompts user for length of password
    var passwordLength = parseInt(prompt("How long of a password do you want?"));

    //Checks if password is a number
    if(isNaN(passwordLength)){
      alert("Please use provide a numerical value")
      return;
    }
    //Checks if password is less than 8 characters
    else if(passwordLength < 8){
      alert("For a password to be secure it must be at least 8 characters");
      return;
    }
    //checks if password is greater than 128 characters
    else if(passwordLength > 128){
      alert("Password length must be less than 128 characters");
      return;
    }

    //Prepares for password criteria prompts
    alert("Please select to use at least one of the following criteria");

    //Stores criteria in variables
    var hasNumbers = confirm("Click OK to use numbers");
    var hasUpperCasedLetters = confirm("Click OK to use uppercase characters");
    var hasLowerCasedLetters = confirm("Click OK to use lowercase letters");
    var hasSpecialCharacters = confirm("Click OK to use special characters");

    //Checks if no criteria was chosen
    if(!hasNumbers && !hasUpperCasedLetters && !hasLowerCasedLetters && !hasSpecialCharacters){
      alert("You must select at least one character type to create a secure password");
      return;
    }
    
    //Object that contains all password criteria
    var passwordCriteria = {
      passwordLength: passwordLength,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumbers: hasNumbers,
      hasLowerCasedLetters: hasLowerCasedLetters,
      hasUpperCasedLetters: hasUpperCasedLetters
    };
  
    return passwordCriteria;

}
//Chooses random element from given array
function randomCharacter(a) {
  //Chooses random element in array from length
  var i = Math.floor(Math.random() * a.length);
  //Stores random value in variable
  var e = a[i];
  return e;
}

//Uses criteria and randomize functions to generate password
function generatePassword(){
  //Array for final password characters to be stored
  var finalPassword = [];
  //Pool of characters based on criteria
  var criteriaCharacterPool = [];
  //Pool of characters that password must have based on criteria
  var mustHaveCriteriaCharacters = [];

  //All chosen user criteria
  var userCriteria = criteria();

  /*Criteria Checks*/

  //Checks if user chose to have numbers
  if (userCriteria.hasNumbers){
    //Adds numbers to character pool and must have array
    criteriaCharacterPool = criteriaCharacterPool.concat(numbers);
    mustHaveCriteriaCharacters.push(randomCharacter(numbers));
  }
  //Checks if user chose to have upper case letters
  if (userCriteria.hasUpperCasedLetters){
    //Adds upper case letters to character pool and must have array
    criteriaCharacterPool = criteriaCharacterPool.concat(upperCaseLetters);
    mustHaveCriteriaCharacters.push(randomCharacter(upperCaseLetters));
  }
  //Checks if user chose to have lwoer case letters
  if (userCriteria.hasLowerCasedLetters){
    //Adds lower case letters to character pool and must have array
    criteriaCharacterPool = criteriaCharacterPool.concat(lowerCaseLetters);
    mustHaveCriteriaCharacters.push(randomCharacter(lowerCaseLetters));
  }
  //Checks if user chose to have special characters
  if (userCriteria.hasSpecialCharacters){
    //Adds special characters to the character pool and must have array
    criteriaCharacterPool = criteriaCharacterPool.concat(specialCharacters);
    mustHaveCriteriaCharacters.push(randomCharacter(specialCharacters));
  }

  //Pushes random characters from character pool into finalPassword
  for(var i = 0; i < userCriteria.passwordLength; i++)
    finalPassword.push(randomCharacter(criteriaCharacterPool));

  //Pushes characters the final password must have based on the criteria
  for(var i = 0; i < mustHaveCriteriaCharacters.length; i++)
    finalPassword[i] = mustHaveCriteriaCharacters[i];

  //Alerts that the password was created
  alert("Here is your secure password based on your selected criteria. Click on the password to copy it to your clipboard.");
  
  //Returns finalPasssord as joined array
  return finalPassword.join('');
    
}

//If the texxbox is clicked, copy the password to clipboard
password.addEventListener("click", function(){
  password.select();
  document.execCommand('copy');
  alert("Your password was copied to the clipboard")
});

// Given Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
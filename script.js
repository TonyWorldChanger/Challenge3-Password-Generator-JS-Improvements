// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // ask for length
  var lengthPassword = prompt("How long would you link it (8-128)?");
  var numericPassword =prompt("Would you like to include numers y/n?");
  // ask for lowercase // ask for uppercase // ask for special characters
  var lowercasePassword = prompt("Would you like to include lowercase letters?");
  var uppercasePassword = prompt("Would you like to include uppercase letters?");
  var specialCharacterPassword = prompt("Would you like to include Special Characters?");
  // validate criteria

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

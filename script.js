var characterLength = 15;
var userChoice = [];

var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", ")", "(", "*", "+", ",","-", "/", ":", "?"];
var lowercase = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {

}
  
function generateprompts() {
  characterLength = prompt("Length of password? (8 - 128)");
    if(characterLength >= 8 && characterLength <= 128) {
      alert("Character length must be between 8 - 128");
      return false;

    } 
    if(confirm("Would you like lowercase letters in your password?")) {
      userChoice = userChoice + lowercase;
    }
}



// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



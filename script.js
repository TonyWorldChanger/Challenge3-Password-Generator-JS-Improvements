var characterLength = 15;
var userChoice = [];

var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", ")", "(", "*", "+", ",","-", "/", ":", "?"];
var lowercase = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() { 
  var confirmedPropmts = generateprompts(); 
    if(confirmedPropmts) {
      var printToScreen = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = printToScreen;

 } else {
   passwordText.value = "";
 }
  

}

function generatePassword () {
  var password = "";
    for(var i = 0; i < characterLength; i++) { // creates loop to randomly select characters using math.floor(math.random) and mutilplying by the length of the array userChoice.
      var randomLetter = Math.floor(Math.random() * userChoice.length);
      password = password + userChoice[randomLetter];
    }

    return password;


}
  
function generateprompts() {
  characterLength = prompt("Length of password? (8 - 128)");
    if(characterLength <= 8 || characterLength >= 128) {
      alert("Character length must be between 8 - 128");
      return false;

    } 
    if(confirm("Would you like lowercase letters in your password?")) {
      userChoice = userChoice + lowercase;
    }
    if(confirm("Would you like uppercase letters in your password?")) {
      userChoice = userChoice + uppercase;
    }
    if(confirm("Would you like Special Characters in your password?")) {
      userChoice = userChoice + specialCharacters;
    }
    if(confirm("Would you like numbers in your password?")) {
      userChoice = userChoice + numbers;
    }
    return true;
}









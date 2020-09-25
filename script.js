// User Variables
var howLong;
var confirmLower;
var confirmUpper;
var confrimNum;
var confirmSpecial;

// Password Values

//Special Characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function generatePassword(){
  howLong=parseInt(prompt("Please specify your password length (8-128 Characters)."));
  if (!howLong) {
    alert("Must specify length.");
  } else if (howLong < 8 || howLong > 128) {
    alert("Must be between 8 and 128 characters.");
  } else {
    confirmLower = confirm("Use lowercase letters?");
    confirmUpper = confirm("Use upper case letters?");
    confirmNum = confirm("Use numbers?");
    confirmSpecial = confirm("Use special characters?");
  };
  if (!confirmLower && !confirmUpper && !confirmNum && !confirmSpecial) {
    alert("You must choose at least one criteria!");
  }
};


  
  

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

// User Variables
var howLong;
var confirmLower;
var confirmUpper;
var confirmNum;
var confirmSpecial;

// Password Values

//Special Characters
character = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

//Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Alphabetical characters
alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//For Uppercase conversions
uAlpha = [];

//Convert to Uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};

//Uppercase conversion variable
alpha2 = alpha.map(toUpper);

//User Choices
var userChoices;

function generatePassword() {
  howLong = parseInt(
    prompt("Please specify your password length (8-128 Characters).")
  );
  if (!howLong) {
    alert("Must specify length.");
  } else if (howLong < 8 || howLong > 128) {
    alert("Must be between 8 and 128 characters.");
  } else {
    confirmLower = confirm("Use lowercase letters?");
    confirmUpper = confirm("Use uppercase letters?");
    confirmNum = confirm("Use numbers?");
    confirmSpecial = confirm("Use special characters?");
  }

  if (!confirmLower && !confirmUpper && !confirmNum && !confirmSpecial) {
    alert("You must choose at least one criteria!");
  } else if (confirmLower && confirmUpper && confirmNum && confirmSpecial) {
    // All True Confirms
    userChoices = alpha.concat(alpha2, number, character);
  } else if (confirmLower && confirmUpper && confirmNum) {
    // 3 True Confirms
    userChoices = alpha.concat(alpha2, number);
  } else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = alpha.concat(alpha2, character);
  } else if (confirmLower && confirmNum && confirmSpecial) {
    userChoices = alpha.concat(number, character);
  } else if (confirmUpper && confirmNum && confirmSpecial) {
    userChoices = alpha2.concat(number, character);
  } else if (confirmSpecial && confirmLower) {
    // 2 True Confirms
    userChoices = character.concat(alpha);
  } else if (confirmSpecial && confirmUpper) {
    userChoices = character.concat(alpha2);
  } else if (confirmSpecial && confirmNum) {
    userChoices = character.concat(number);
  } else if (confirmLower && confirmUpper) {
    userChoices = alpha.concat(alpha2);
  } else if (confirmLower && confirmNum) {
    userChoices = alpha.concat(nubmer);
  } else if (confirmUpper && confirmNum) {
    userChoices = alpha2.concat(number);
  } else if (confirmLower) {
    // 1 True Confirm
    userChoices = alpha;
  } else if (confirmUpper) {
    userChoices = uAlpha.concat(alpha2);
  } else if (confirmNum) {
    userChoices = number;
  } else if (confirmSpecial) {
    userChoices = character;
  }

  var password = [];

  for (var i = 0; i < howLong; i++) {
    var userPick = userChoices[Math.floor(Math.random() * userChoices.length)];
    password.push(userPick);
  }
  var ps = password.join("");
  userFinal(ps);
  return ps;
}

function userFinal(ps) {
  document.getElementById("password").textContent = ps;
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

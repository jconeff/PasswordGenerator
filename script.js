var generateBtn = document.querySelector("#generate");

var passupper;
var passlower;
var passcharacter;
var passnumb;
var passLength;
var user;


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", " ^ ", "_", "`", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//function for password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Questions

  passLength = prompt("How many characters would you like your password to be? Please choose a min of 8");
  console.log("Password length " + passLength);

  if(passLength==false){
    alert("required");
  

  } else if (passLength < 8 || passLength > 128) {
    passLength = prompt("Please choose a value between 8 and 128");
    console.log("Password length " + passLength);

  } else { 
    passupper = confirm("Should this password contain a upper case letter?");
    console.log("Upper case " + passupper);
    passlower = confirm("Should this password contain a lower case letter?");
    console.log("Lower case " + passlower);
    passnumb = confirm("Should this password contain a number?");
    console.log("Number " + passnumb);
    passcharacter = confirm("Should this password contain a special character?");
    console.log(" Character " + passcharacter);

  };

  // Response if No

  if(passlower==false && passupper==false && passnumb==false){
    user= alert("required");


  // 4 choices
  }else if(passlower==true && passupper==true && passcharacter==true && passnumb==true)
  {user= lowerCase.concat(upperCase, special, numbers);
    console.log(user);
  }

  // 3 choices
  else if(passlower==true && passupper==true && passnumb==true){
    user=lowerCase.concat(uppercase, numbers);
    console.log(user);
  }

  else if (passlower==true && passupper== true && passcharacter==true){
    user=lowerCase.concat(upperCase,special);
    console.log(user);
  
  }else if(passlower==true && passnumb==true && passcharacter==true){
    user= lowerCase.concat(numbers,special);
    console.log(user);

  }else if(passupper==true && passnumb==true && passcharacter==true){
    user=upperCase.concat(numbers,special);
    console.log(user);
  
  
  // 2 choices
  }else if(passlower==true && passupper==true){
    user=lowerCase.concat(upperCase);
    console.log(user);
  
  }else if(passlower==true && passnumb==true)
  {user = lowerCase.concat(numbers);
    console.log(user);
  
  
  }else if (passlower==true && passcharacter==true) {
    user = lowerCase.concat(special);
    console.log(user);
  
  }else if (passupper==true && passnumb==true) {
    user = upperCase.concat(numbers);
    console.log(user);
  
  }else if (passupper==true && passcharacter==true) {
    user = upperCase.concat(special);
    console.log(user);
  
  }else if (passnumb==true && passcharacter==true) {
    user = numbers.concat(special);
    console.log(user);
  
  // 1 choice

  }else if (passupper==true) {
    user = blankUpper.concat(upperCase);
    console.log(user);
  

  }else if (passlower==true) {
    user = lowerCase;
    console.log(user);
  
  }
  else if (passnumb==true) {
    user = numbers;
    console.log(user);
  }
  else if (passcharacter==true) {
    user = special;
    console.log(user);
  };

// Loop 
  var passwordBlank = [];

  
  for (var i = 0; i < passLength; i++) {
    var allChoices = user[Math.floor(Math.random() * user.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;

}



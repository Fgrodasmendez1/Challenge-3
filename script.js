// Assignment Code

var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password"); 
  
    passwordText.value = password;
  }

// Generate Password

function generatePassword() {
  var passwordLength = window.prompt("Choose a number between 8 to 128 characters.");

  // User input validation

  if (passwordLength > 7 && passwordLength < 129) { 
    var passwordUppercase = confirm("Do you require Upppercase letters? - OK = Yes; Cancel = No");
    var passwordLowercase = confirm("Do you require Lowercase letters? - OK = Yes; Cancel = No");
    var passwordSpecialcharacters = confirm("Do you require Special Characters? - OK = Yes; Cancel = No");
    var passwordNumber = confirm("Do you require Numbers? - OK = Yes; Cancel = No");
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var number = "0123456789";
    var specialCharacters = "`,~,!,@,#,$,%,^,&,*,(),-,=,+,[,],{,},\,|,;,:,<,>,.,?,/,*.";
    var newPasswordString = "";
    var password = "";
  
// Else if for negative options

    if (!passwordUppercase && !passwordLowercase && !passwordSpecialcharacters && !passwordNumber) {
      alert("Select password options in order to generate password!");
      return password = "Select options in order to generate password!";
    }

// Loop through 4 variables to produce password options

for (i = 0; i < passwordLength; i++){
  console.log(i + ") New Password: " + newPasswordString);
  if (passwordUppercase === true) {
    newPasswordString += uppercase.charAt(Math.floor(Math.random() * uppercase.length)); 
  } if (passwordLowercase === true) {
    newPasswordString += lowercase.charAt(Math.floor(Math.random() * lowercase.length)); 
  } if (passwordNumber === true) {
    newPasswordString += number.charAt(Math.floor(Math.random() * number.length));
  } if (passwordSpecialcharacters === true) {
      newPasswordString += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length)); 
  }
}
console.log(newPasswordString)

// Reduce password to requested length

for (i = 0; i < passwordLength; i++) {
  console.log(i + ") New Password: " + password);
  password += newPasswordString.charAt(Math.floor(Math.random() * newPasswordString.length));
}

return password

} else
  alert("Error: Number(s) not between 8 and 128.");
  return password ="Error: Number(s) not between 8 and 128.";
  }


// event listener to generate button

generateBtn.addEventListener("click", writePassword);

var copy = document.querySelector(".copy");
copy.addEventListener("click", function () {
    copyPassword();
})

// This copies the password value - works
// Code example demonstrated in a youtube video: 
// Source: https://youtu.be/9sT03jEwcaw

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}
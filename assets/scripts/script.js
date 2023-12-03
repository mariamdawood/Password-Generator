// Assignment Code
var generateButton = document.querySelector("#generate")

// Add event listener to generate button
generateButton.addEventListener("click", writePassword)

// Password generator, window prompts, alerts and confirms function
function writePassword() {
  // To choose password length desired
  var userInput = window.prompt("Please insert desired length for password. A number between 8 and 128.")

  // An alert if the user input was not number between 8 and 128 
  if (!(userInput >= 8 && userInput <= 128)) {
    alert("Invalid input. Please enter a number between 8 and 128.")
  }

  // If the user input was a number between 8 and 128
  if (userInput >= 8 && userInput <= 128) {

    // To choose which character sets they want to include
    uppercase = window.confirm("Would you like to include uppercase?")
    lowercase = window.confirm("Would you like to include lowercase?")
    numbers = window.confirm("Would you like to include numbers?")
    specialCharacters = window.confirm("Would you like to include special characters?")

    // An alert if the user did not choose any character set
    if (!uppercase && !lowercase && !numbers && !specialCharacters) {
      alert("You must include at least one type.")
      return
    }
  }

  // Set each character set to its content
  var characterSet = ""
  if (uppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (lowercase) characterSet += "abcdefghijklmnopqrstuvwxyz"
  if (numbers) characterSet += "0123456789"
  if (specialCharacters) characterSet += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  // Create the random password based on user choices of character sets
  var password = ""
  for (var i = 0; i < userInput; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length)
    password += characterSet.charAt(randomIndex)
  }

  // Write the password in the box
  var passwordText = document.querySelector("#password")
  passwordText.value = password
 
}
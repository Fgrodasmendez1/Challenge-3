# Password-Generator

This project was designed as a Challenge for Rutgers's coding bootcamp. 

This application emphasizes the use of Javascript to generate a random, secure password for the user. 

This project has been deployed to GitHub Pages. To get this project up and running, you can follow the deployment link. Or, download the sources files to use this as a template.

## Getting Started

This project has been deployed to GitHub. In order to populate this project, you can follow the deployment link or download the sources files to use this as a template.

* [GitHub Repository](https://github.com/Fgrodasmendez1/Challenge-3)
* [Deployed GitHub IO](https://fgrodasmendez1.github.io/Challenge-3/)
* [Full Demo Video](https://drive.google.com/file/d/1ttBRZnqHv4Nu8h-9cnvnOclxjHKyko8c/view)


### Prerequisites

To install this application you will need a text editor. Ex. Visual Studio Code. 

### Installing

To install this code, download the zip file, or use GitHub's guidelines to clone the repository. 

### Summary
* HTML and CSS and Javascript documents create a random password generator 
* This project emphasizes the use of using Javascript to make dynamic changes to an HMTL document

![Password-Generator Demo](Assets/Challenge3.gif)

### This project has the following features: 
* A generate button
    * This will send the user a series of prompts and confirms
    * After user data is collected, a random password will be generated using Javascript

![Screenshot-2](Assets/Screenshot-2.png)

* A Textarea
    * This textarea will display the users password once it is generated

![Screenshot-1](Assets/Screenshot-3.png)

* A Copy button 
    * This will copy the users password to the user's devices clipboard

![Screenshot-3](Assets/Screenshot-4.png)

### Psuedo Code and Project Requirements: 
* The user will be prompted to choose from the following password criteria: 8 and 128 characters
* The user will recieve a confirm for: 
    * Password containing special characters, numbers, and uppercase
    * Either 4 variables individual ones, or 3 with to LowerCase to Uppercase conversion
    * This will need to randomly generate a selection or randomly select array data, math.random, and math.floor will need to be used.     
* The application should validate user input and ensure that at least one character type is selected.
    * If, else if statement 
* Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.
    * Event listener will determine the password output with function to populate the value into the test area.
* To add on, the user should also have the option to click a button to copy the password to their clipboard.
    * Copy execCommand in event listener

### This project has script features of:
* Variable declaration area 
* An event listener (onclick) called generatePassword
    * This will prompt the user for input between 8-128
    * This variable is changed to an interger using password.length
    * This will validate that the input is a number within range, or is a number
    * This then uses the input to determine the types (or choices) or letters of characters used, using an if statement
    * This then assigns values to the variables using arrays for character, number or alphabet
* A for loop will loop through the enter prompt until it reaches the number entered by user. 
* A password variable takes the value from the for loop, and converts it to a string. 
* The string value then populates into the text area for the user using a UserInput function.
* An event listener (onclick) has also been created for the copy to clipboard feauture; as per the youtube video resource demonstrates. 

### This project has media Queries for:
* max-width: 690px 
    * .btn {
    font-size: 1rem;
    margin: 16px 0px 0px 0px;
    padding: 10px 15px;
* max-width: 500px
    * .btn {
    font-size: 0.8rem;


### To Execute File:
> Open in browser

### Features: 
* One HTML Pages
    * Index.html 
     * Contains basic user input items and buttons with divs, class, and ids.
* One CSS Page
    * Styles.css
     * contains a copy clipboard and password genrator button   
     * Contains centering and styling for html user input features
     * Contains media queries
* One Javascript Page
    *
      * Contains: 
      * Variables, including arrays and value placeholders
      * Two event listeners
      * Two if/else if statements
      * One function outside of first event listener












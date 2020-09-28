# courseWork_03_passwordGenerator

https://k1te-m.github.io/courseWork_03_passwordGenerator/

![Finished Product Screenshot](/finalscreenshot.PNG)

## Description

The javascript code written for this project generates a password using user specifications for several different criteria including length (between 8-128 characters), user of lowercase letters, uppercase letters, numbers, or special characters. 

The code first establishes the variables to be used later for these user specifications, followed by several arrays containing the different characters and numbers to be used. A blank array is established for the uppercase letters along with a function to return uppercase values and a new variable mappinging this function into the lowercase letter array for conversion later. 

From there a userChoices variable is established the the generate password function is created. This function begins with a prompt asking the user to specify a length of password between 8 and 128 characters. If no length is entered, the user is alerted that a length must be specified. The user is also alerted if the length entered is outside of the specified range.

Once a valid length has been entered the code proceeds  to confirm if the user would like to use the different character types. Answers of confirm return a value of true, while cancel returns a value of false. These boolean values are then used in the next if statement. 

If no criteria is chosen, the user will be alerted that at least one must be chosen. Once this condition has been met, the conditional if/ else if statments run through the logic for every possible user choice. Based on these decisions, the arrays created at the top of the page are concatenated to create one large array for the for loop to come later. 

The for loop uses a condition set to the length of the user decision for how long their password will be. The new variable userPick is estabished and set equal the the userChoices array established by the prior if/else statements. The Math.floor and Math.random methods are used to randomly choose characters from the userChoices array and these values are then pushed into the empty password array established right above the loop. 

Finally a new variable ps or "password string" is established that utilizes the .join method converting the password array to a string. The userFinal funcition then pushes this string through to the element with an ID of "password" as established in the html file. 

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
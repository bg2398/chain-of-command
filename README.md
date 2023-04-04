# Chain of command

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Install
You will need to install node, the latest inquierer module, and use jest for testing. 

## Using the app.
Run node index.js and follow the prompt questions.
Then check your index.html in the live server for your chain of command profiles
![DE425146-9FC7-4913-A548-ECED31CBED6C_1_201_a](https://user-images.githubusercontent.com/117424603/229944115-d4b73df1-5e70-46eb-8f68-cf7287760430.jpeg)

## Video Tutorial
https://drive.google.com/file/d/1QVA29QYSrv89_FfFTpAPLG5t5if8-d_c/view

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

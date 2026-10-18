JavaScript Practice Tasks: Classes & JSON
📌 Overview

This repository contains JavaScript practice tasks focused on Classes and JSON (JavaScript Object Notation). These exercises help understand object-oriented programming, class methods, arrays, loops, and JSON data handling in JavaScript.

🎯 Objectives
Understand how to create and use JavaScript classes.
Learn about constructors and class methods.
Manage multiple user objects using arrays.
Use loops to display user information.
Understand how to parse JSON data into JavaScript objects.
Convert JavaScript objects back into JSON strings.
📝 Task 13.1: User Management System (Using Classes)
Objective

Create a User class to manage multiple users and display their details.

Requirements
Create a User class with the following properties:
username
mobileNum
age
Implement the following methods:
getUserDetails() – Returns the user's username, mobile number, and age as a formatted string.
isAdult() – Returns true if the user's age is 18 or above; otherwise, returns false.
Create at least three user objects using the User class.
Store all user objects in an array.
Use a for loop to display each user's details and adult status.
Example Output
Username: Alice
Mobile: 9876543210
Age: 22
Adult: true

Username: Bob
Mobile: 9123456780
Age: 16
Adult: false

Username: Charlie
Mobile: 9001122334
Age: 30
Adult: true

📝 Task 13.2: Working with JSON Data
Objective

Understand how JSON data can be converted into JavaScript objects and back into JSON strings.

Requirements
Create a JSON string containing user data and store it in a variable called jsonData.
Use JSON.parse() to convert the JSON string into a JavaScript object or array and store it in users.
Loop through the users and display their username, mobile number, and age.
Use JSON.stringify() to convert the JavaScript data back into a JSON string and store it in jsonOutput.
Print the resulting JSON string.
Example Output
Alice - 9876543210 - 25
Bob - 9123456780 - 30
Charlie - 9001122334 - 17

Key JavaScript Concepts
JSON.parse() – Converts a JSON string into a JavaScript value.
JSON.stringify() – Converts a JavaScript value into a JSON string.
for loops – Iterate through arrays.
Arrays and objects – Store and organize user data.
🛠️ Technologies Used
Language: JavaScript
Data Format: JSON
Runtime: Web Browser or Node.js
▶️ How to Run
Clone or download this repository.
Open the project folder in your code editor.
Run the JavaScript file using Node.js or a browser console.
Check the console output to verify the results.

To run a JavaScript file using Node.js:

node filename.js


Replace filename.js with the name of your JavaScript file.

📚 Learning Outcomes

After completing these tasks, you will be able to:

Create classes and instantiate objects in JavaScript.
Define and use class methods.
Store and process multiple objects in arrays.
Apply loops to display structured data.
Parse JSON strings and stringify JavaScript objects.
Understand the relationship between JavaScript objects and JSON.
👨‍💻 Author

Created as part of JavaScript practice exercises to strengthen programming fundamentals and improve problem-solving skills.

Happy Coding! 🚀

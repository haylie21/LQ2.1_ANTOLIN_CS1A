// 3. Coding Problem

// Get user inputs using prompt
let name = prompt("Enter your Name:");
let address = prompt("Enter your address:");
let age = parseInt(prompt("Enter your age:")); // Parse age to integer
let classRole = prompt("Enter your class role (officer, student, teacher):").toLowerCase(); // Convert to lowercase for case-insensitive comparison
let course = prompt("Enter your course (BSCS, BSM, BAEL):").toUpperCase();//Convert to uppercase for case-insensitive comparison

// Input validation: Check for invalid age and missing inputs
if (isNaN(age) || age <= 0) {
  alert("Invalid age. Please enter a positive number.");
  return; // Exit if age is invalid
}

if (!name || !address || !classRole || !course) {
    alert("Please provide all required information.");
    return; // Exit if any required information is missing
}

// Calculate the number of iterations based on 1/4 of the age
let iterations = Math.floor(age / 4);
let message = ""; // Variable to store the message to be displayed

// Validate course and handle class roles using nested switch statements
let courseIsValid = false; // Flag to check if the course is valid
switch (course) {
  case "BSCS":
  case "BSM":
  case "BAEL":
    courseIsValid = true; // Set the flag to true if the course is valid
    switch (classRole) {
      case "officer":
        message = `You are an officer under the ${course} course.`;
        break;
      case "student":
        message = `You are a student under the ${course} course.`;
        break;
      case "teacher":
        message = `You are a teacher teaching the ${course} course.`;
        break;
      default:
        message = `Invalid class role for the ${course} course. Default action applied.`;
    }
    break;
  default:
    message = "Invalid course. Default action applied.";
}

//Display message and run loop only if course is valid.
if(courseIsValid){
    alert(message); // Display the message
    for (let i = 1; i <= iterations; i++) {
      console.log(`Iteration ${i}: Name - ${name}, Role - ${classRole}, Course - ${course}`); // Log the iteration details to the console
    }
} else {
    alert(message); //Display the message if course is invalid.
}

alert("Program Completed!"); // Indicate program completion

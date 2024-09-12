"use strict";

document.getElementById("registration-form").addEventListener("submit",
  function(event) {
    // to prevent the page from refreshing
    event.preventDefault();
    // checking if entries are valid
    let valid = true;
    const fname = document.forms["registration-form"]["fname"].value;
    const lname = document.forms["registration-form"]["lname"].value;
    const email = document.forms["registration-form"]["email"].value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password = document.forms["registration-form"]["password"].value;
    if (fname.trim() === "") {
      valid = false;
    } else if (lname.trim() === "") {
      valid = false;
    } else if (!emailPattern.test(email)) {
      valid = false;
    } else if (password.length < 8) {
      valid = false;
    }
    // change in style when entries are invalid
    if (!valid) {
      // displaying the error message beneath input fields
      document.querySelectorAll(".error-message").forEach(errorMessage =>
        errorMessage.style.display = "block"
      );
      // compensating the extra space added by newly display error messages and
      // changing the input border color to red (different from var(--red))
      document.querySelectorAll("#registration-form input").forEach(input => {
        input.style.marginTop = "0px";
        input.style.marginBottom = "0px";
        input.style.border = "1px solid red";
      });

      // changing placeholder of email field
      let email = document.getElementById("email");
      email.placeholder = "email@example/com";
      email.classList.add('email-placeholder-error');

    }
  }
)







// function formValidator(event) {
//   event.preventDefault();
//   let valid = true;
//   const fname = document.forms["registration-form"]["fname"].value;
//   const lname = document.forms["registration-form"]["lname"].value;
//   const email = document.forms["registration-form"]["email"].value;
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const password = document.forms["registration-form"]["password"].value;

//   if (fname.trim().length === "") {
//     valid = false;
//   } else if (lname.trim() === "") {
//     valid = false;
//   } else if (!emailPattern.test(email)) {
//     valid = false;
//   } else if (password.length < 8) {
//     valid = false;
//   }
//   if (!valid) {
//     alert(valid)
//     document.querySelectorAll("#registration-form input").forEach(input => input.classList.add("error-message"))
//   }
// }

// const form = document.getElementById("registration-form");
// form.addEventListener("submit", formValidator)

// function formValidator() {
//   let fname = document.forms["registration-form"]["fname"].value;
//   alert(fname)
//   if (fname == "") {
//     alert(111)
//   }
// }

// const registrationForm = document.getElementById("registrationForm")

// function validateForm() {

//   let fname = document.forms["registration-form"]["fname"].value;
//   alert(fname)
//   let lname = document.forms["registration-form"]["lname"].value;
//   let email = document.forms["registration-form"]["email"].value;
//   let password = document.forms["registration-form"]["email"].value;

//   if (fname.trim().length ==0 ) {
//     alert("yooooo")
//   }
// }

// registrationForm.addEventListener("submit", validateForm(event))


// document.getElementById('myForm').addEventListener('submit', function(event) {
//   var emailInput = document.getElementById('email');
//   if (!emailInput.validity.valid) {
//       emailInput.setCustomValidity('Please enter a valid email address.');
//   } else {
//       emailInput.setCustomValidity(''); // Clear the custom message if valid
//   }
// });

// document.getElementById('myForm').addEventListener('submit', function(event) {
//   var emailInput = document.getElementById('email');
//   if (!emailInput.validity.valid) {
//       emailInput.setCustomValidity('Please enter a valid email address.');
//   } else {
//       emailInput.setCustomValidity(''); // Clear the custom message if valid
//   }
//   event.preventDefault(); // Prevent form submission for demonstration
// });
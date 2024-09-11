"use strict";

function formValidator() {
  // e.preventDefault();
  let fname = document.forms["registration-form"]["fname"].value;
  let lname = document.forms["registration-form"]["lname"].value;
  let email = document.forms["registration-form"]["email"].value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let password = document.forms["registration-form"]["password"].value;

  if (fname.trim().length == "") {
    alert(0)
  } else if (lname.trim() == "") {
    alert(0)
  } else if (!emailPattern.test(email)) {
    alert(222);
  } else if (password.length < 8) {
    alert("password should be at least 8 characters")
  }
}

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
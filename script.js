
function validateFullName() {
  const fullName = document.getElementById("fullName").value;
  const regex = /^[A-Za-z\s]+$/;
  const errorElement = document.getElementById("fullNameError");
  if (!regex.test(fullName)) {
    errorElement.textContent = "Full Name should contain only alphabetic characters and spaces.";
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}


function validateEmail() {
  const email = document.getElementById("email").value;
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const errorElement = document.getElementById("emailError");
  if (!regex.test(email)) {
    errorElement.textContent = "Please enter a valid email address.";
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}


function validatePhone() {
  const phone = document.getElementById("phone").value;
  const regex = /^[0-9]{10,15}$/;
  const errorElement = document.getElementById("phoneError");
  if (!regex.test(phone)) {
    errorElement.textContent = "Phone number must be between 10 and 15 digits.";
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}


function validatePassword() {
  const password = document.getElementById("password").value;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const errorElement = document.getElementById("passwordError");
  if (!regex.test(password)) {
    errorElement.textContent = "Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, and 1 number.";
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}


function validateForm() {
  const isFullNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();

  
  if (isFullNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
    document.getElementById("successMessage").style.display = "block";
    return false; 
  }

  return false; 
}

document.getElementById("fullName").addEventListener("input", validateFullName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("phone").addEventListener("input", validatePhone);
document.getElementById("password").addEventListener("input", validatePassword);

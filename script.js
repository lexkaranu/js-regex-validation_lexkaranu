<script>
    function validateForm() {
      
      document.getElementById("fullNameError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("phoneError").textContent = "";
      document.getElementById("passwordError").textContent = "";

      document.getElementById("fullName").classList.remove('error');
      document.getElementById("email").classList.remove('error');
      document.getElementById("phone").classList.remove('error');
      document.getElementById("password").classList.remove('error');

      const fullName = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const password = document.getElementById("password").value;

      let valid = true;

      
      const fullNameRegex = /^[a-zA-Z\s]+$/;
      if (!fullNameRegex.test(fullName)) {
        document.getElementById("fullNameError").textContent = "Full name should contain only letters and spaces.";
        document.getElementById("fullName").classList.add('error');
        valid = false;
      }

      
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        document.getElementById("email").classList.add('error');
        valid = false;
      }

      
      const phoneRegex = /^\d{10,15}$/;
      if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be 10-15 digits.";
        document.getElementById("phone").classList.add('error');
        valid = false;
      }

      
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent = "Your Password must be at least 8 characters, with 1 uppercase, 1 lowercase, and 1 number.";
        document.getElementById("password").classList.add('error');
        valid = false;
      }

    
      if (valid) {
        document.getElementById("successful).style.display = "block";
      }
    }
  
  </script>


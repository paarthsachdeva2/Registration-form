document.getElementById("regForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let errorMsg = document.getElementById("errorMsg");

  errorMsg.textContent = ""; 

  if (name === "" || email === "" || password === "") {
    errorMsg.textContent = "⚠️ All fields are required!";
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    errorMsg.textContent = "⚠️ Email must end with @gmail.com";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "⚠️ Password must be at least 6 characters long.";
    return;
  }

  const hasLower= /[a-z]/.test(password);
  const hasUpper= /[A-Z]/.test(password);
  const hasNumber= /\d/.test(password);
  const hasSpecial= /[^\w\s]/.test(password);
  if(!(hasLower && hasUpper && hasNumber && hasSpecial)){
    errorMsg.textContent="Password must include uppercase,lowercase,number and a special symbol";
    return;
  }

  alert("🎉 Registration Successful!");
  document.getElementById("regForm").reset();
});
export default function passwordValidation(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.remove("required");
    confirmPassword.setCustomValidity("Passwords don't match");
  } else {
    confirmPassword.setCustomValidity("");
    confirmPassword.classList.remove("required");
  }
}

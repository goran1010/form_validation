export default function passwordValidation(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords don't match");
  } else confirmPassword.setCustomValidity("");
}

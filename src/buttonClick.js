export default function buttonClick(email, password) {
  if (!email.value) {
    email.classList.remove("required");
    email.setCustomValidity("You have to fill in the email field");
  } else if (!password.value) {
    password.classList.remove("required");
    password.setCustomValidity("You have to fill in the password field");
  }
}

import "./style.css";
import "./images/png-transparent-computer-icons-form-website-development-favicon-paper-logo-text-rectangle-form.png";
import "./fonts/Roboto-Regular.ttf";

import passwordMatch from "./passwordMatch.js";
import validatePassword from "./validatePassword.js";
import validateEmail from "./validateEmail.js";
import checkCountry from "./checkCountry.js";
import checkZipCode from "./checkZipCode.js";
import buttonClick from "./buttonClick.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const country = document.getElementById("country");
const zipCode = document.getElementById("zip-code");
const button = document.querySelector("button");

zipCode.addEventListener("keyup", () => {
  checkZipCode(zipCode);
});

country.addEventListener("keyup", () => {
  checkCountry(country);
});

email.addEventListener("keyup", () => {
  validateEmail(email);
});

password.addEventListener("keyup", () => {
  validatePassword(password);
});

confirmPassword.addEventListener("keyup", () => {
  passwordMatch(password, confirmPassword);
});
password.addEventListener("keyup", () => {
  passwordMatch(password, confirmPassword);
});

button.addEventListener("click", () => {
  buttonClick(email, password);
});

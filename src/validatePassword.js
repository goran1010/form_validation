const passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
export default function validatePassword(password) {
  if (!passwordRegEx.test(password.value)) {
    password.setCustomValidity(
      "Password need to be between 6 and 16 characters and contain at least 1 letter, 1 number and 1 special character"
    );
  } else {
    password.setCustomValidity("");
  }
}

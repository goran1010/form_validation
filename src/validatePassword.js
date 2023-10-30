const passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
export default function validatePassword(password) {
  if (!passwordRegEx.test(password.value)) {
    password.classList.remove("required");
    password.setCustomValidity(
      "Password needs to be between 6 and 16 characters and contain at least 1 letter, 1 number and 1 special character ( !@_- )"
    );
  } else {
    password.classList.remove("required");
    password.setCustomValidity("");
  }
}

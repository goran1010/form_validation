const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export default function validateEmail(email) {
  if (!emailRegEx.test(email.value)) {
    email.setCustomValidity("Must be a valid email address");
  } else {
    email.setCustomValidity("");
  }
}

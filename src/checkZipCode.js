const zipCodeRegEx = /^[0-9]{5}(?:-[0-9]{4})?$/;
export default function checkZipCode(element) {
  if (!element.value) {
    element.setCustomValidity("");
    element.classList.add("not-required");
  } else if (!zipCodeRegEx.test(element.value)) {
    element.classList.remove("not-required");
    element.setCustomValidity("Need a US zip code");
  } else if (zipCodeRegEx.test(element.value)) {
    element.classList.remove("not-required");
    element.setCustomValidity("");
  }
}

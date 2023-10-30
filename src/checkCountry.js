export default function checkCountry(element) {
  if (!element.value) {
    element.setCustomValidity("");
    element.classList.add("not-required");
  } else if (element.value !== "United States") {
    element.classList.remove("not-required");
    element.setCustomValidity("Country has to be United States");
  } else if (element.value === "United States") {
    element.classList.remove("not-required");
    element.setCustomValidity("");
  }
}

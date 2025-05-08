const formData = { email: "", message: "" };
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

// При завантаженні сторінки — відновлення даних
const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Відстеження введення у поля форми
form.addEventListener("input", function (event) {
  const { name, value } = event.target;

  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

// Відправлення форми
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Перевірка, чи обидва поля заповнені
  if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData); // Виводимо актуальні дані

  // Очищення
  localStorage.removeItem(localStorageKey);
  formData.email = "";
  formData.message = "";
  form.reset();
});

const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");

form.addEventListener("input", function (event) {
  const { name, value } = event.target;

  // Перевіряємо, чи поле має name="email" або name="message"
  if (name in formData) {
    formData[name] = value;
    console.log(formData); // дивимось, як змінюються дані
  }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('[name="email"]').value;
    const message = document.querySelector('[name="message"]').value;
    console.log(email);
    console.log(message);
    
    
})
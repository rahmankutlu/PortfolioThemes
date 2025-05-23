document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Basic email format validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.toLowerCase())) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  this.reset();
});

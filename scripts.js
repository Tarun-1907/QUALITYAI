document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate form submission
  console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
  alert('Thank you for contacting us! We will get back to you soon.');
  document.getElementById('contact-form').reset();
});
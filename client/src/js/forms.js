export const formSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const name = form.elements.name.value;
  const company = form.elements.company.value;
  const project = form.elements.project.value;
  const email = form.elements.email.value;

  console.log(name, company, project, email);

  const formData = {
    name,
    company,
    project,
    email
  }

  const encodedFormData = new URLSearchParams(formData).toString();

  fetch('/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodedFormData
  })
    .then(response => response.json())
    .then((data) => {
      console.log('Email send successfully:', data);
      form.reset();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
}
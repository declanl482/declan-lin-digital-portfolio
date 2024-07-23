// Function to validate the email format
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

// Function to handle form submission
const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Perform other validations if needed

    // If validations pass, submit the form
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
        form.reset()
        return;
    })
    .catch(error => {
        alert('Something went wrong!');
        return;
    });
};

// Add event listener to the form for submit event
document.getElementById('contactForm').addEventListener('submit', handleSubmit);

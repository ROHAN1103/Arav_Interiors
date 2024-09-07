const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = `Feedback from ${name} (${phoneNumber})`;
    const body = `NAME: ${name }\n       PHONE NUMBER: ${phoneNumber}\n      MESSAGE:\n${message}`;

    // Replace 'your_email@example.com' with your actual email address
    const recipientEmail = 'ananded21@gmail.com';

    // Create a new email using the browser's built-in email client (if available)
    window.location = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
});
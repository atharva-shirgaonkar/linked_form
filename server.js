const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // Import Nodemailer

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like your HTML form)
app.use(express.static('Linked Form'));

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider (e.g., Gmail, Outlook, etc.)
    auth: {
        user: 'atharva10711@gmail.com', // Replace with your email
        pass: 'tuvb cgei fcyc kjdz'  // Replace with your email password or app password
    }
});

// Handle form submission
app.post('/api/submit-form', (req, res) => {
    const { fullname, email, message } = req.body;

    console.log('Form Data:', { fullname, email, message });

    // Email options
    const mailOptions = {
        from: 'your-email@gmail.com', // Sender email
        to: 'atharva10711@gmail.com',  // Replace with the recipient email
        subject: 'New Contact Form Submission',
        text: `You have a new message from ${fullname} (${email}):\n\n${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, message: 'Failed to send email.' });
        }
        console.log('Email sent:', info.response);
        res.json({ success: true, message: 'Form submitted and email sent successfully!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
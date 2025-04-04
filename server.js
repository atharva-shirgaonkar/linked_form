const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (corrected path)
app.use(express.static(__dirname));

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'atharva10711@gmail.com',
        pass: 'tuvb cgei fcyc kjdz'
    }
});

// Handle form submission
app.post('/api/submit-form', (req, res) => {
    const { fullname, email, message } = req.body;
    // Handle form submission
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
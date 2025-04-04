const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like your HTML form)
app.use(express.static('Linked Form'));

// Handle form submission
app.post('/api/submit-form', (req, res) => {
    const { fullname, email, message } = req.body;

    console.log('Form Data:', { fullname, email, message });

    // Respond to the client
    res.json({ success: true, message: 'Form submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
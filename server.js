const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve static images
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// API endpoint to handle feedback
app.post('/api/feedback', (req, res) => {
  const { name, email, phone, rating, message } = req.body;
  
  // In a real application, you would save this to a database
  console.log('Received feedback:', { name, email, phone, rating, message });
  
  // Send a response
  res.json({
    success: true,
    message: 'Thank you for your feedback!'
  });
});

// Serve the main page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
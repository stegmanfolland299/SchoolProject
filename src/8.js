
const express = require('express');
const app = express();

// Set the port number as an environment variable
const PORT = process.env.PORT || 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Welcome to SchoolProject!</h1>
        <p>This is a simple school project repository created for your school.</p>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

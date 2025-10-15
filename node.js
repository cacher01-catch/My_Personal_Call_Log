
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/logs', (req, res) => {
  console.log('Received call log:', req.body);
  // You can save it to a database here
  res.status(200).send('OK');
});

app.listen(3000, () => console.log('Server running on port 3000'));

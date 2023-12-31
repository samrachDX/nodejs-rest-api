// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello, Cambodia!' });
});

app.post('/data', (req, res) => {
  const { body } = req;
  res.json({ receivedData: body });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

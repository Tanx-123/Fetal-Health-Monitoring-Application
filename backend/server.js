const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const app = express();

app.use(cors());

app.use(express.json());


app.post('/api/predict', async (req, res) => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/predict', req.body);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
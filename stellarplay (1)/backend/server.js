
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

let currentPrice = null;

const fetchPrice = async () => {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=stellar&vs_currencies=usd');
    const data = await res.json();
    currentPrice = data.stellar.usd;
  } catch (e) {
    console.error('Error fetching price', e);
  }
};

setInterval(fetchPrice, 60000); // her 1 dakikada güncelle
fetchPrice();

app.get('/api/price', (req, res) => {
  res.json({ price: currentPrice });
});

app.post('/api/guess', (req, res) => {
  const { guess } = req.body;
  if (!guess || (guess.toLowerCase() !== 'up' && guess.toLowerCase() !== 'down')) {
    return res.status(400).json({ message: 'Please guess "up" or "down".' });
  }
  res.json({ message: `You guessed ${guess}. (Game logic not implemented yet)` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

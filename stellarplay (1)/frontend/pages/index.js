
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [price, setPrice] = useState(null);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch('/api/price')
      .then(res => res.json())
      .then(data => setPrice(data.price));
  }, []);

  const submitGuess = () => {
    fetch('/api/guess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guess }),
    })
      .then(res => res.json())
      .then(data => setResult(data.message));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">StellarPlay - XLM Price Prediction</h1>
      <p>Current XLM Price: {price || 'Loading...'}</p>
      <input
        type="text"
        placeholder="Up or Down"
        value={guess}
        onChange={e => setGuess(e.target.value)}
        className="border p-2 m-2"
      />
      <button onClick={submitGuess} className="bg-blue-500 text-white p-2 rounded">
        Submit Guess
      </button>
      {result && <p className="mt-4">{result}</p>}
    </div>
  );
}

import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const valueInEuro = parseFloat(rupees) / 90;
    setEuro(valueInEuro.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Convertor (INR to Euro)</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
        Convert
      </button>

      {euro && (
        <div style={{ marginTop: "10px" }}>
          <strong>Converted Amount:</strong> €{euro}
        </div>
      )}
    </div>
  );
}

export default CurrencyConvertor;

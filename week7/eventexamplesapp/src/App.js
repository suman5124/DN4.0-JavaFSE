import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    console.log('Hello! This is a static message.');
  };

  const sayMessage = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Event Examples App</h1>

      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>Decrement</button>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => sayMessage("Welcome!")}>Say Welcome</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleClick}>Synthetic Event: OnPress</button>
      </div>

      <div style={{ marginTop: "40px" }}>
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;

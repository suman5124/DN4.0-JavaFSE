// src/App.js

import './App.css';

function App() {
  // Office data as objects
  const officeSpaces = [
    {
      name: 'Skyline View',
      rent: 55000,
      address: 'MG Road, Bengaluru',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Eco Space',
      rent: 75000,
      address: 'Electronic City, Bengaluru',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Central Hub',
      rent: 60000,
      address: 'Indiranagar, Bengaluru',
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental App</h1>
      <div className="office-list">
        {officeSpaces.map((office, index) => (
          <div key={index} className="office-card">
            <h2>{office.name}</h2>
            <img src={office.image} alt={office.name} />
            <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              Rent: ₹{office.rent}
            </p>
            <p>Address: {office.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

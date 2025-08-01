import React from 'react';

const flights = [
  { id: 1, from: "Delhi", to: "Mumbai", time: "10:00 AM" },
  { id: 2, from: "Bangalore", to: "Chennai", time: "12:30 PM" },
  { id: 3, from: "Kolkata", to: "Hyderabad", time: "5:00 PM" },
];

function FlightList({ showBookingButton }) {
  const bookTicket = (flight) => {
    alert(`Ticket booked for flight from ${flight.from} to ${flight.to}`);
  };

  return (
    <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '80%' }}>
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Time</th>
          {showBookingButton && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {flights.map(flight => (
          <tr key={flight.id}>
            <td>{flight.from}</td>
            <td>{flight.to}</td>
            <td>{flight.time}</td>
            {showBookingButton && (
              <td>
                <button onClick={() => bookTicket(flight)}>Book</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FlightList;


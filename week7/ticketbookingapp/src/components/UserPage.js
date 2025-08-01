import React from 'react';
import FlightList from './FlightList';

function UserPage() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book flights.</p>
      <FlightList showBookingButton={true} />
    </div>
  );
}

export default UserPage;

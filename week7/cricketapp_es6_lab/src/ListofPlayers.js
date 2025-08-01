import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Virat', score: 90 },
    { name: 'Rohit', score: 85 },
    { name: 'KL Rahul', score: 60 },
    { name: 'Shubman', score: 40 },
    { name: 'Surya', score: 75 },
    { name: 'Pant', score: 30 },
    { name: 'Hardik', score: 95 },
    { name: 'Jadeja', score: 68 },
    { name: 'Ashwin', score: 77 },
    { name: 'Shami', score: 33 },
    { name: 'Bumrah', score: 50 },
  ];

  const below70 = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h2>Players with Score &lt; 70</h2>
      <ul>
        {below70.map((p, i) => (
          <li key={i}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;

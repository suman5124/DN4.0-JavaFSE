import React from 'react';

function IndianPlayers() {
  const oddTeam = ['Virat', 'KL Rahul', 'Surya', 'Pant', 'Jadeja'];
  const evenTeam = ['Rohit', 'Shubman', 'Hardik', 'Ashwin', 'Shami', 'Bumrah'];

  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  const T20Players = ['Virat', 'Rohit', 'Surya'];
  const RanjiTrophyPlayers = ['Yashasvi', 'Sarfaraz', 'Ruturaj'];
  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <p>{odd1}, {odd2}, {restOdd.join(', ')}</p>

      <h2>Even Team Players</h2>
      <p>{even1}, {even2}, {restEven.join(', ')}</p>

      <h2>Merged Players (T20 + Ranji)</h2>
      <p>{allPlayers.join(', ')}</p>
    </div>
  );
}

export default IndianPlayers;

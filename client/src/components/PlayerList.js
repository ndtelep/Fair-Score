import React from 'react';
import PlayerCard from './PlayerCard'

function PlayerList ( {team} ) {
console.log(team)
    return (
        // <div></div>
        <ul className="cards">{team.map((players) => {
            return <PlayerCard   key = {team.id} player = {players} />
        })}</ul>
      );
};

export default PlayerList;
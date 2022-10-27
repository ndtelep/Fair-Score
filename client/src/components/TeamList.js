import React from 'react';
import TeamCard from './TeamCard'

function TeamList ( {league} ) {
console.log(league)
    return (
        <div></div>
        // <ul className="cards">{league.map((team) => {
        //     return <TeamCard   key = {team.id} team = {team} />
        // })}</ul>
      );
};

export default TeamList;
import React from 'react';
import TeamCard from './TeamCard'

function TeamList ( {league} ) {

    return (
        <ul className="cards">{league.map((team) => {
            return <TeamCard   key = {team.id} team = {team} />
        })}</ul>
      );
};

export default TeamList;
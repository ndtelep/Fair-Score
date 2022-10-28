import React from 'react';
import TeamCard from './TeamCard'



function TeamList ( {league, handleDelete} ) {
console.log(league)




    return (
        // <div></div>
        <ul className="cards">{league.map((team) => {
            return <TeamCard   key = {team.id} team = {team} handleDelete={handleDelete}/>
        })}</ul>
      );
};

export default TeamList;
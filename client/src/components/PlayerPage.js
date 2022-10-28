import React, { useState, useEffect } from "react";
import PlayerList from "./PlayerList";
import { useParams } from "react-router-dom";




function PlayerPage (){
    const [team, setTeam] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch(`/players`)
        .then((r) => r.json())
      .then((team) => setTeam(team));
  }, []);

  return(
    <div>
    <PlayerList team = {team}/>
    </div>
    )

}
export default PlayerPage;
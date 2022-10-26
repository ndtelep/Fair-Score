import React, { useState, useEffect } from "react";
// import Players from './Players'
import TeamList from './TeamList'
// import SideBar from "./SideBar";
// import WinnerList from "./WinnerList";
// import PlayerList from './PlayerList'
import CreateATeam from "./CreateATeam";
import "../App.css";


function TeamPage () {
    const [league, setLeague] = useState([]);
    const [header, setHeader] = useState(null);
    const [id, setId] = useState("");
    const [winner, setWinner] = useState([]);
    const [team, setTeam] = useState([])
    const [switchTrue, setSwitchTrue] = useState(false)
    const [teamId, setTeamId] = useState(null)
    const [teamName, setTeamName] = useState("")
    const [display, setDisplay] = useState(false);
    const [image_url, setImageUrl] = useState("")

    
  //     useEffect(() => {
  //       fetch(`teams/players`)
  //       .then((r) => r.json())
  //     .then((team) => setTeam(team));
  // }, []);
  
      useEffect(() => {
          fetch(`/teams`)
          .then((r) => r.json())
        .then((leauge) => setLeague(leauge));
    }, []);
  

  
    

  
    const deliveryPage = <div className="delivery-page">
    <div className="main-column">
      <div className="team-header">
        <CreateATeam/>
        </div>
     {/* <TeamList league={league} nickName={teamName} setDisplay={setDisplay}/>*/}
    </div>
    </div>
  
    const teamPage = 
        <div className="main-column">
          <div className="team-header">
            <span role="img">
              <a href="/">
                <img className="delivery-picture" src="https://cdn-icons-png.flaticon.com/512/46/46106.png"></img>
              </a>
            </span>
            <h1 className="team-header">{header}</h1>
          </div>
          <div className="sponsored-team">
            
            <p className="sponsor-text">Fair-Score</p>
          </div>
          {deliveryPage}
         
          <TeamList league={league} />
        </div>
    
    function handleTeamClick(){
      setSwitchTrue(!switchTrue)
      console.log(switchTrue)
    }
    return(
      <div>
      {teamPage}
      </div>
      )
}
  
  export default TeamPage;
import React, { useState, useEffect } from "react";
// import Players from './Players'
import TeamList from './TeamList'
// import SideBar from "./SideBar";
// import WinnerList from "./WinnerList";
// import PlayerList from './PlayerList'
import CreateATeam from "./CreateATeam";
import  { Link, useParams, useHistory } from 'react-router-dom'
import "../App.css";


function TeamPage () {
    const [league, setLeague] = useState([]);
    const [header, setHeader] = useState(null);
    const [id, setId] = useState("");
    const [winner, setWinner] = useState([]);
    
    const [switchTrue, setSwitchTrue] = useState(false)
    const [teamId, setTeamId] = useState(null)
    const [teamName, setTeamName] = useState("")
    const [display, setDisplay] = useState(false);
    const [image_url, setImageUrl] = useState("")
    const params = useParams()
const history = useHistory()

    const deleteTeam = (id) => setLeague(current => current.filter(p => p.id !== id)) 


    
      
  
      useEffect(() => {
          fetch(`/teams`)
          .then((r) => r.json())
        .then((league) => setLeague(league));
    }, []);
  
    function handleDelete(){
      //DELETE to `/productions/${params.id}`
      fetch(`/team/${params.id}`,{
        method:'DELETE',
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => {
        if(res.ok){
          deleteTeam(id)
          history.push('/')
      //   } else {
      //     res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      //   }
      }})
    }

  
    

  
    const deliveryPage = <div className="delivery-page">
    <div className="main-column">
      <div className="team-header">
        <CreateATeam/>
        </div>
     <TeamList league={league} nickName={teamName} setDisplay={setDisplay} handleDelete= {handleDelete} id={id}/>
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
         
          {/* <TeamList league={league} /> */}
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
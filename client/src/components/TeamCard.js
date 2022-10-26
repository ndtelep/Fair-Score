

import { useNavigate } from "react-router-dom";


    
    function TeamCard( { team } ) {
      const {location, nickname, home_venue} = team;
        //const {name, image_url} = service
      //   should we also do rating? can't access it from the current table, though
          console.log(team)
          /*function handleClicking(){
            handleTeamClick()
            setTeamName(team)
          }*/
      
        const navigate = useNavigate();
        return (
            <li className="individual-card">
              <div className="container-card">
                <div className="row">
                  <div className="col">
                    <div className="card h-100">
                      <img className="card-image" variant="top" src={""} alt={team}/>
                      <div className="card-text">
                        <h3>{location}</h3>
                        <h3>{nickname}</h3>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
        );
      }
      
      export default TeamCard;


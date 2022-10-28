import {Link} from 'react-router-dom'


import { useHistory } from "react-router-dom";


    
    function TeamCard( { team, handleDelete} ) {
      const {location, nickname, home_venue, imageUrl, id} = team;
        //const {name, image_url} = service
      //   should we also do rating? can't access it from the current table, though
          console.log(team)
          /*function handleClicking(){
            handleTeamClick()
            setTeamName(team)
          }*/
      
        const navigate = useHistory();
        return (
            <li className="individual-card">
              <div className="container-card">
                <div className="row">
                  <div className="col">
                    <div className="card h-100">
                      <img className="card-image" variant="top" src={imageUrl} alt={team}/>
                      <div className="card-text">
                        <h3>{location}</h3>
                        <Link to={`/teams/${team.id}}`}> <h2>{nickname}</h2></Link>
                        <button onClick={handleDelete}>Delete Team</button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
        );
      }
      
      export default TeamCard;


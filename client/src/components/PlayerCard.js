import { useHistory } from "react-router-dom";


    
    function PlayerCard( { player } ) {
      const {first_name, last_name, number, points, assists, rebounds, steals, blocks, id} = player;
        //const {name, image_url} = service
      //   should we also do rating? can't access it from the current table, though
          console.log(player)
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
                      {/* <img className="card-image" variant="top" src={imageUrl} alt={team}/> */}
                      <div className="card-text">
                        <h3>{first_name}</h3>
                        <h3>{last_name}</h3>
                        <h3>{number}</h3>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
        );
      }
      
      export default PlayerCard;
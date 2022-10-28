// import './App.css';
import Home from './Home'
import React, {useEffect, useState} from 'react';
// import '../App.css';
import TeamsPage from './TeamsPage';
import PlayerPage from './PlayerPage';
import Login from '../components/Login';
// import Contact from './Contact'
// import About from './About'
import Navigation from './Navigation';
import SignUp from './SignUp';


import { Switch, Route } from 'react-router-dom';

function App() {
    const [currentUser, setCurrentUser] = useState()
    // const [token, setToken] = useState(false)

    useEffect(() => {
        fetch('/authorized_user')
        .then(res => {
          if(res.ok){
            res.json().then(user => {
              updateUser(user)

            })
          }
        })
      },[])

    const updateUser = (user) => setCurrentUser(user)

    // if(!token) {
    //     return <Login updateUser={updateUser} />
    //   }

//   return (
//     <div className="app">
      
//         <Switch>
//             <Route exact path="/" element={
//                 <Home />
//             }/>
//             <Route path="/teams/player/:id" element={
//                 <PlayerPage />
//             }/>
//             <Route path="/teams/:id" element={
//                 <TeamsPage />
//             }/>
//             {/* <Route path="/contact" element={
//                 <Contact />
//             }/> */}
//             {/* <Route path="/about" element={
//                 <About />
//             }/> */}
//              <Route path="/login" element={
//                 <Login updateUser = {updateUser}/>
//             }/>
//             </Switch>   
       
//     </div>
// )};
return (
    <>
    <Navigation updateUser={updateUser}/>
    {!currentUser? <Login error={'please login'} updateUser={updateUser}/> : 
      <Switch>

      <Route  path='/'>
        <TeamsPage updateUser={updateUser}/>
      </Route>
      {/* <Route  path='/productions/:id/edit'>
        <EditProductionForm updateProduction={updateProduction}/>
      </Route> */}
     
      <Route path='/teams/:id'>
          <PlayerPage />
      </Route>

      <Route path='/users/new'>
        <SignUp />
      </Route>

      <Route path='/users/:id'>
        <TeamsPage updateUser={updateUser}/>
      </Route>

      <Route path='/login'>
        <Login updateUser={updateUser}/>
      </Route>

    
      {/* <Route exact path='/teams/:id/edit'>
        <UpdateTeam/>
      </Route> */}

      {/* <Route>
        <NotFound />
      </Route> */}
      </Switch>
    }
    </>
  )
}

export default App;
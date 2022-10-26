// import './App.css';
import Home from './Home'
import React, {useState} from 'react';
// import '../App.css';
import TeamsPage from './TeamsPage';
import PlayerPage from './PlayerPage';
import Login from '../pages/Login';
// import Contact from './Contact'
// import About from './About'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [token, setToken] = useState();

    // if(!token) {
    //     return <Login setToken={setToken} />
    //   }

  return (
    <div className="app">
      <Router>
        <Routes>
            <Route exact path="/" element={
                <Home />
            }/>
            <Route path="/teams/player/:id" element={
                <PlayerPage />
            }/>
            <Route path="/teams/:id" element={
                <TeamsPage />
            }/>
            {/* <Route path="/contact" element={
                <Contact />
            }/> */}
            {/* <Route path="/about" element={
                <About />
            }/> */}
             {/* <Route path="/login" element={
                <Login />
            }/> */}
            </Routes>   
        </Router>
    </div>
)};

export default App;
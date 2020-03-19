import React from 'react';
import { Router, Link } from '@reach/router'
import Home from './views/Home'
import Status from './views/Status'
import PlayerList from './components/PlayerList'
import AddPlayer from './components/AddPlayer'
import GameStatusList from './components/GameStatusList'

function App() {
  return (
    <div className="container">
      {/* <div className="row"> */}
        <div className="col mx-auto mt-3"> 
          <h1>
            <Link to='/players/list'>Manage Players</Link>|  
            <Link to='/status/game/1'>Manage Player Status</Link>
          </h1>
          <Router>
            <Home path='/players'>
              <PlayerList path='list' />
              <AddPlayer path='addplayer' />
            </Home>
            <Status path='/status'>
              <GameStatusList path='game/:id' />
            </Status>
          </Router>
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;

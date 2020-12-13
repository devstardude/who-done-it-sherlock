import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import './App.css';
import Game from "./components/game/Home"
import Home from './components/home/Home';
import Instructions from './components/instructions/Instruction';
import MainGame from './components/mainGame/MainGame';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/game" exact>
            <Game />
          </Route>
          <Route path="/instructions" exact>
            <Instructions />
          </Route>
          <Route path="/maingame" exact>
            <MainGame />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Game from '../components/Game.jsx'


class Quiz extends Component {

  render(){
    return(
      
      <div className='conatiner'>
        <div id ='home' className='flex-center flex-column'>
           <button className='btn'><Link to="/game">PLAY</Link></button>
           <button className='btn'><Link to="/highscores">Highscrores</Link></button>
        </div>
      </div>
     
    )
  }
}


export default Quiz
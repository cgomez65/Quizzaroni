import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'



class Quiz extends Component {

  render(){
    return(
      
      <Router>
      <div>
        <Link to='./Games.jsx'><button className='btn'>Play</button></Link>
        <button className='btn' onClick= {console.log('these are the high scores')}>High Scores</button>
      </div>
      </Router>
     
    )
  }
}


export default Quiz
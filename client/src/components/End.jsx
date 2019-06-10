import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Game from '../components/Game.jsx'

class End extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id='answers' className='justify-center flex-column'>
        <div id='choices' class='choice-text'>
          <h1 id='question' > Your Score Is ... 140 </h1>
          
        </div>
      </div>
    )
  }
}
export default End
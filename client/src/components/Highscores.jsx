import React, { Component } from 'react';


class Highscores extends Component {
  render(){
    return(
      <div id='answers' className='justify-center flex-column'>
        <h1>These are the Highscores</h1>
        <div className='choice-text'>
            <h1 className= 'choice-container'>david: 160</h1>
            <h1 className='choice-container'>Henry: 120</h1>
            <h1 className='choice-container'>Kevin: 200</h1>
        </div>
      </div>
    )
  }
}


export default Highscores
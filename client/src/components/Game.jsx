import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import questions from '../../../database/data'
console.log(questions)
class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: questions
    }
  }
  render(){
    return (
      <div className='container'>
        <div id='game' className='justify-center flex-column'>
          <h2 id = 'question' >{ this.state.data.questions[0].question }</h2>
          <div className='choice-container'>
            <p className='choice-prefix'>A</p>
            <p className='choice-text' data-number='1'>{ this.state.data.questions[0].choice1 }</p>
          </div>
          <div className='choice-container'>
            <p className='choice-prefix'>B</p>
            <p className='choice-text' data-number='2'>{ this.state.data.questions[0].choice2 }</p>
          </div>
          <div className='choice-container'>
            <p className='choice-prefix'>C</p>
            <p className='choice-text' data-number='3'>{ this.state.data.questions[0].choice3 }</p>
          </div>
          <div className='choice-container'>
            <p className='choice-prefix'>D</p>
            <p className='choice-text' data-number='4'>{ this.state.data.questions[0].choice4 }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Game